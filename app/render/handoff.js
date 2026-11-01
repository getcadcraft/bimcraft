/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handoff.js — the hand-off package every outside render engine gets (0.8 RE.2, docs/0.8-PART1.md D2; spec: docs/USD-CONVENTIONS.md
 * § 10.1). DOM-free, so Node tests it as is. Part of the shared renderer: canonical in modelcraft/dev/render/, byte-identical copy in
 * bimcraft/dev/render/ (node tools/render/sync.mjs); never edit the copy.
 *
 * A package is one folder (a .zip when it travels): `scene.usdc` (the app's own USD export: ModelCraft's saveUsd, BimCraft's bimUsd)
 * + the textures it names + `cadcraft-render.json` (the manifest, format `cadcraft-render-1`) + the IES light profiles and the sky
 * picture the manifest names. The engine reads USD's own data where that is good enough and the manifest where it is not, so nothing
 * is lost when an importer drops a field: the exact OpenPBR values per material prim path, the lamps that are on with their power,
 * the sun, the sky, the exposure and the camera as the dialog would render them.
 *
 *   buildManifest({ app, appVersion, scene, settings, w, h, usdFile?, primOf?, toStage?, cameras?, frames?, files?, created? }) → manifest
 *   cleanManifest(untrusted) → { ok, manifest, problems[] }   what an engine reads: every field checked, clamped and defaulted
 *   buildPackage({ manifest, usd, textures?, ies?, hdri?, extra? }) → { manifest, files: { name → Uint8Array } }   (adds cadcraft-render.json)
 *   zipPackage(pkg) → Uint8Array (a stored zip)       unzipPackage(bytes) → pkg   (untrusted: stored entries, CRC checked, bounded)
 *   openpbrFor(key, settings, scene) → { name: value }  the values of one material key that differ from OpenPBR's defaults
 *   safeName(s)                                         a file-name-safe word
 */
import { SKIES, NIGHT, lookFor } from './looks.js';
import { cameraStops, whiteBalance } from './pt-camera.js';
import { material as libMaterial } from './materials.js';
import { OPENPBR_DEFAULTS } from './pt-pack.js';
import { zipStored, crc32 } from './webm.js';

export const MANIFEST_FORMAT = 'cadcraft-render-1';
export const MANIFEST_FILE = 'cadcraft-render.json';
export const MAX_FILES = 4096, MAX_FILE_BYTES = 1024 * 1024 * 1024, MAX_PACKAGE_BYTES = 3 * 1024 * 1024 * 1024;
const MAX_LAMPS = 64, MAX_MATERIALS = 4096, MAX_CAMERAS = 256;
const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const enc = new TextEncoder(), dec = new TextDecoder();

const safeRel = (s) => typeof s === 'string' && s.length > 0 && s.length <= 260 && !s.startsWith('/') && !s.includes('\\') && !s.includes(':') && s.split('/').every((p) => p && p !== '.' && p !== '..');
export const safeName = (s) => String(s ?? '').replace(/[^A-Za-z0-9._-]+/g, '_').replace(/^[._-]+/, '').slice(0, 64) || 'x';
const num = (v, d = 0) => (Number.isFinite(Number(v)) && v !== null && v !== '' && v !== false ? Number(v) : d);
const round = (x, k = 6) => (Number.isFinite(x) ? Math.round(x * 10 ** k) / 10 ** k : 0);
const vec = (v, n, d = 0) => Array.from({ length: n }, (_, i) => round(num(Array.isArray(v) ? v[i] : undefined, d)));

/** sRGB hex → linear Rec.709, the USD file's own colour space for colours (USD-CONVENTIONS § 7). */
function hexToLinear(hex) {
  const n = parseInt(String(hex).slice(1, 7), 16) || 0;
  const c = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return [c((n >> 16) & 255), c((n >> 8) & 255), c(n & 255)].map((x) => round(x, 5));
}

function matMul(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  return o;
}
const point = (m, p) => [0, 1, 2].map((r) => round(m[r] * p[0] + m[4 + r] * p[1] + m[8 + r] * p[2] + m[12 + r]));
const direction = (m, d) => { const v = [0, 1, 2].map((r) => m[r] * d[0] + m[4 + r] * d[1] + m[8 + r] * d[2]), l = Math.hypot(...v) || 1; return v.map((x) => round(x / l)); };

/**
 * The OpenPBR values of one of the apps' material keys (looks.js looks, materials.js `mat:` ids, `img:` textures, the ground) as
 * named parameters, only where they differ from OpenPBR's defaults (USD-CONVENTIONS § 7). Colours are linear Rec.709 triples.
 * The same mapping pt-pack.js `materialRecord` packs for our path tracer (RENDER-SPEC § 5.1), so the engines start from one material.
 */
export function openpbrFor(key, settings, scene) {
  let p;
  if (key === '__ground') p = { base_color: hexToLinear(SKIES[settings && settings.sky]?.plain ? '#f4f4f2' : '#cbc6bb'), specular_roughness: 1 };
  else if (typeof key === 'string' && key.startsWith('mat:') && libMaterial(key.slice(4))) {
    const m = libMaterial(key.slice(4));
    if (m.pbr) p = { ...m.pbr };
    else {
      p = { base_color: hexToLinear(m.color), specular_roughness: m.rough, base_metalness: m.metal || 0 };
      if (m.glass) Object.assign(p, { transmission_weight: m.glass, transmission_color: hexToLinear(m.color), specular_roughness: 0.02, geometry_thin_walled: true });
    }
  } else if (typeof key === 'string' && key.startsWith('img:')) {
    const avg = /#[0-9a-f]{6}$/i.exec(key);
    p = { base_color: hexToLinear(avg ? avg[0] : '#b4b4b4'), specular_roughness: 0.7 };
  } else {
    const L = lookFor(key, settings, scene && scene.defaultColor, scene && scene.looks && scene.looks[key]);
    p = { base_color: hexToLinear(L.color), specular_roughness: L.rough, base_metalness: L.metal };
    if (L.glass) Object.assign(p, { transmission_weight: L.glass, transmission_color: hexToLinear(L.color), geometry_thin_walled: true });
  }
  const out = {};
  for (const [k, v] of Object.entries(p)) {
    const d = OPENPBR_DEFAULTS[k];
    if (d === undefined) continue;
    const same = Array.isArray(d) ? Array.isArray(v) && v.length === d.length && v.every((x, i) => Math.abs(x - d[i]) < 1e-6) : v === d || (typeof v === 'number' && typeof d === 'number' && Math.abs(v - d) < 1e-9);
    if (!same) out[k] = Array.isArray(v) ? v.map((x) => round(x, 5)) : typeof v === 'number' ? round(v, 5) : v;
  }
  return out;
}

/** Where ModelCraft's saveUsd puts a key's material (UsdBuilder.colorMaterial / material names, under /World/Looks). */
export function primOfModelCraft(key, scene) {
  const id = (s) => String(s).replace(/[^A-Za-z0-9_]/g, '_');
  if (typeof key === 'string' && key.startsWith('mat:')) return '/World/Looks/mat_' + id(key.slice(4));
  if (typeof key === 'string' && key.startsWith('img:')) return '/World/Looks/img_' + id(key.slice(4).replace('|', '_'));
  const hex = (/^#[0-9a-f]{6}$/i.test(key) ? key : scene && scene.defaultColor) || '#e6e3dc';
  return '/World/Looks/Color_' + hex.toLowerCase().slice(1);
}

/** The sky the render uses: the chosen one, or the night when the sun is down (render-core.js). */
function skyOf(settings, scene) {
  const base = SKIES[settings.sky] || SKIES.clear, night = !base.plain && !scene.sun;
  const s = night ? NIGHT : base;
  const out = { kind: night ? 'night' : settings.sky in SKIES ? settings.sky : 'clear', zenith: s.zenith, horizon: s.horizon, ground: s.ground, intensity: round(s.env, 4), skyLight: round(s.sky, 4), skyTint: s.skyTint, plain: !!s.plain };
  if (base.physical && !night) out.turbidity = settings.turbidity;
  if (base.hdri && !night) { out.hdri = settings.hdriName || ''; out.rotation = settings.envRotation; out.exposure = settings.envExposure; }
  return out;
}

/**
 * The manifest. `scene` is the renderer's plain scene (render-core.js: items, lights, sun, camera(aspect), up …); `primOf(key)` names a
 * material's prim in the USD file; `toStage` is the 4×4 (column-major) that takes the scene's coordinates to the USD stage's world
 * (identity for ModelCraft; BimCraft turns its Y-up viewer to Z up and adds its site transform); `cameras` the scene cameras the USD
 * file holds as Camera prims [{name, prim}]; `frames` {from, to, fps, count, cameras?: [{world}] one camera-to-world matrix per frame (scene space; moved by toStage)} for an animation; `files` = {name: bytes} listing
 * what rides beside the USD (so the manifest can say how big each is).
 */
export function buildManifest({ app = 'CadCraft', appVersion = '', scene, settings, w, h, usdFile = 'scene.usdc', primOf = primOfModelCraft, toStage = IDENT, cameras = [], frames = null, files = {}, created = null }) {
  const M = toStage || IDENT;
  const cam = scene.camera(w / h);
  const world = matMul(M, cam.world), proj = cam.proj;
  const ortho = Math.abs(proj[15] - 1) < 1e-9 && Math.abs(proj[11]) < 1e-9;
  const camera = {
    projection: ortho ? 'orthographic' : settings.projection === 'normal' || !settings.projection ? 'perspective' : settings.projection,
    world: world.map((x) => round(x, 7)), proj: Array.from(proj).map((x) => round(x, 7)),
    position: point(M, [cam.world[12], cam.world[13], cam.world[14]]),
    forward: direction(world, [0, 0, -1]), up: direction(world, [0, 1, 0]), aspect: round(w / h, 5),
  };
  if (ortho) camera.orthoHeight = round(2 / Math.abs(proj[5]), 5);
  else camera.fovY = round((2 * Math.atan(1 / Math.abs(proj[5])) * 180) / Math.PI, 4);
  const sky = skyOf(settings, scene);
  const base = SKIES[settings.sky] || SKIES.clear;
  const sun = scene.sun ? { on: true, dir: direction(M, scene.sun), intensity: round(base.sun, 4), tint: base.tint, diameterDeg: 0.53 } : { on: false };
  // lamps that are on, as the renderer draws them (the brightest 64), their IES profile beside the USD
  const lamps = [], iesFiles = {};
  for (const L of (scene.lights || []).filter((x) => x && x.on !== false && x.lumens > 0).sort((a, b) => b.lumens - a.lumens).slice(0, MAX_LAMPS)) {
    const o = { name: String(L.name || 'Lamp').slice(0, 120), kind: L.kind === 'spot' || L.kind === 'area' ? L.kind : 'point', lumens: round(L.lumens, 3), color: hexToLinear(typeof L.color === 'string' ? L.color : '#ffe7c4'), p: point(M, L.p || [0, 0, 0]), dir: direction(M, L.dir || [0, 0, -1]) };
    if (L.kind === 'spot') o.angle = round(num(L.angle, 90), 3);
    if (L.kind === 'area') o.size = vec(L.size, 2, 0.5);
    const ies = settings.ies && settings.ies[L.name];
    if (ies && typeof ies.text === 'string' && ies.text.length) { const f = 'ies/' + safeName(L.name) + '.ies'; iesFiles[f] = ies.text; o.ies = f; }
    lamps.push(o);
  }
  // materials: every look the picture uses, by its prim path in the USD file
  const keys = [...new Set((scene.items || []).filter((it) => !it.lines).map((it) => it.look || 'default'))].slice(0, MAX_MATERIALS);
  if (settings.ground !== false) keys.push('__ground');
  const materials = keys.map((k) => ({ key: String(k).slice(0, 200), prim: k === '__ground' ? '' : primOf(k, scene), openpbr: openpbrFor(k === 'default' ? (scene.defaultColor || 'default') : k, settings, scene) }));
  const stops = cameraStops(settings);
  const m = {
    format: MANIFEST_FORMAT,
    app: { name: app, version: appVersion },
    created: created || null,
    scene: { file: usdFile, upAxis: 'Z', metersPerUnit: 1, up: direction(M, scene.up || [0, 0, 1]), groundZ: settings.ground === false ? null : round(point(M, [0, 0, num(scene.groundAt)])[2], 5) },
    image: { width: w, height: h, quality: settings.quality, samples: Math.max(1, num(({ draft: 16, good: 64, best: 256 })[settings.quality], 64)), denoise: !!settings.denoise, minutes: settings.minutes },
    camera,
    cameras: (cameras || []).slice(0, MAX_CAMERAS).map((c) => ({ name: String(c.name || '').slice(0, 120), prim: String(c.prim || '').slice(0, 400) })),
    sun, sky,
    exposure: { stops: round(stops, 4), slider: settings.exposure, mode: settings.exposureMode, fstop: settings.fstop, shutter: round(settings.shutter, 6), iso: settings.iso },
    whiteBalance: { kelvin: settings.whiteBalance, gains: whiteBalance(settings.whiteBalance).map((x) => round(x, 5)) },
    ground: settings.ground !== false,
    lamps, materials,
    frames: frames ? { from: round(num(frames.from), 4), to: round(num(frames.to), 4), fps: Math.max(1, Math.min(240, Math.round(num(frames.fps, 24)))), count: Math.max(1, Math.min(100000, Math.round(num(frames.count, 1)))),
      cameras: (frames.cameras || []).slice(0, 100000).map((c) => ({ world: matMul(M, c.world).map((x) => round(x, 7)) })) } : null,
    files: {},
  };
  for (const [name, f] of Object.entries(files)) m.files[name] = { bytes: f.length };
  for (const [name, text] of Object.entries(iesFiles)) m.files[name] = { bytes: enc.encode(text).length };
  Object.defineProperty(m, 'iesFiles', { value: iesFiles, enumerable: false });   // for buildPackage; never serialised
  return m;
}

/** A manifest from anything (a file an engine reads): → { ok, manifest, problems[] }. Codes only; nothing it cannot understand is passed on. */
export function cleanManifest(x) {
  const problems = [];
  const bad = (c) => { problems.push(c); };
  if (!x || typeof x !== 'object' || Array.isArray(x)) return { ok: false, manifest: null, problems: ['not_object'] };
  if (x.format !== MANIFEST_FORMAT) return { ok: false, manifest: null, problems: [typeof x.format === 'string' && /^cadcraft-render-\d+$/.test(x.format) ? 'too_new' : 'bad_format'] };
  const str = (v, n = 200) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f]/g, '').slice(0, n) : '');
  const relPath = (v) => { const s = str(v, 300); return s && !s.startsWith('/') && !s.includes('\\') && !s.split('/').some((p) => p === '..' || p === '') && !/^[A-Za-z]:/.test(s) ? s : ''; };
  const matrix = (v) => (Array.isArray(v) && v.length === 16 && v.every((q) => typeof q === 'number' && Number.isFinite(q)) ? v.slice() : null);
  const scene = x.scene && typeof x.scene === 'object' ? x.scene : {};
  const file = relPath(scene.file);
  if (!file) bad('bad_scene_file');
  const im = x.image && typeof x.image === 'object' ? x.image : {};
  const W = Math.round(num(im.width)), H = Math.round(num(im.height));
  if (!(W >= 1 && H >= 1 && W <= 16384 && H <= 16384 && W * H <= 8192 * 8192)) bad('bad_size');
  const cam = x.camera && typeof x.camera === 'object' ? x.camera : {};
  const world = matrix(cam.world), proj = matrix(cam.proj);
  if (!world || !proj) bad('bad_camera');
  const sun = x.sun && typeof x.sun === 'object' ? x.sun : {};
  const sky = x.sky && typeof x.sky === 'object' ? x.sky : {};
  const ex = x.exposure && typeof x.exposure === 'object' ? x.exposure : {};
  const lamps = (Array.isArray(x.lamps) ? x.lamps : []).slice(0, MAX_LAMPS).map((L) => {
    L = L && typeof L === 'object' ? L : {};
    const o = { name: str(L.name, 120), kind: ['point', 'spot', 'area'].includes(L.kind) ? L.kind : 'point', lumens: Math.max(0, Math.min(1e9, num(L.lumens))), color: vec(L.color, 3, 1).map((q) => Math.max(0, q)), p: vec(L.p, 3), dir: vec(L.dir, 3).some((q) => q) ? vec(L.dir, 3) : [0, 0, -1] };
    if (L.kind === 'spot') o.angle = Math.max(1, Math.min(180, num(L.angle, 90)));
    if (L.kind === 'area') o.size = vec(L.size, 2, 0.5).map((q) => Math.max(0, q));
    if (L.ies !== undefined) { const p = relPath(L.ies); if (p) o.ies = p; else bad('bad_ies_path'); }
    return o;
  });
  const materials = (Array.isArray(x.materials) ? x.materials : []).slice(0, MAX_MATERIALS).map((q) => {
    q = q && typeof q === 'object' ? q : {};
    const op = {};
    for (const [k, v] of Object.entries(q.openpbr && typeof q.openpbr === 'object' ? q.openpbr : {})) {
      if (!(k in OPENPBR_DEFAULTS)) continue;
      const d = OPENPBR_DEFAULTS[k];
      if (Array.isArray(d)) { if (Array.isArray(v) && v.length === 3 && v.every((c) => Number.isFinite(c))) op[k] = v.map((c) => Math.max(0, c)); }
      else if (typeof d === 'boolean') op[k] = v === true;
      else if (Number.isFinite(v)) op[k] = v;
    }
    const prim = str(q.prim, 400);
    return { key: str(q.key), prim: prim === '' || /^\/[A-Za-z0-9_]+(\/[A-Za-z0-9_]+)*$/.test(prim) ? prim : '', openpbr: op };
  });
  const frames = x.frames && typeof x.frames === 'object' ? { from: num(x.frames.from), to: num(x.frames.to), fps: Math.max(1, Math.min(240, Math.round(num(x.frames.fps, 24)))), count: Math.max(1, Math.min(100000, Math.round(num(x.frames.count, 1)))),
    cameras: (Array.isArray(x.frames.cameras) ? x.frames.cameras : []).slice(0, 100000).map((c) => ({ world: matrix(c && c.world) })).filter((c) => c.world) } : null;
  const files = {};
  for (const [k, v] of Object.entries(x.files && typeof x.files === 'object' ? x.files : {}).slice(0, MAX_FILES)) { const p = relPath(k); if (p) files[p] = { bytes: Math.max(0, Math.round(num(v && v.bytes))) }; }
  const manifest = {
    format: MANIFEST_FORMAT,
    app: { name: str(x.app && x.app.name, 80), version: str(x.app && x.app.version, 40) },
    created: typeof x.created === 'string' ? x.created.slice(0, 40) : null,
    scene: { file, upAxis: 'Z', metersPerUnit: 1, up: vec(scene.up, 3).some((q) => q) ? vec(scene.up, 3) : [0, 0, 1], groundZ: Number.isFinite(scene.groundZ) ? scene.groundZ : null },
    image: { width: W, height: H, quality: ['draft', 'good', 'best'].includes(im.quality) ? im.quality : 'good', samples: Math.max(1, Math.min(65536, Math.round(num(im.samples, 64)))), denoise: im.denoise === true, minutes: Math.max(0, Math.min(600, num(im.minutes))) },
    camera: { projection: ['perspective', 'orthographic', 'equirect', 'stereo', 'cube'].includes(cam.projection) ? cam.projection : 'perspective', world, proj, position: vec(cam.position, 3), forward: vec(cam.forward, 3), up: vec(cam.up, 3), aspect: Math.max(0.01, num(cam.aspect, 1)), fovY: cam.fovY !== undefined ? Math.max(1, Math.min(179, num(cam.fovY, 50))) : undefined, orthoHeight: cam.orthoHeight !== undefined ? Math.max(0, num(cam.orthoHeight)) : undefined },
    cameras: (Array.isArray(x.cameras) ? x.cameras : []).slice(0, MAX_CAMERAS).map((c) => ({ name: str(c && c.name, 120), prim: str(c && c.prim, 400) })),
    sun: sun.on === true ? { on: true, dir: vec(sun.dir, 3), intensity: Math.max(0, Math.min(1e4, num(sun.intensity, 3.2))), tint: str(sun.tint, 9) || '#ffffff', diameterDeg: Math.max(0, Math.min(10, num(sun.diameterDeg, 0.53))) } : { on: false },
    sky: { kind: str(sky.kind, 20) || 'clear', zenith: str(sky.zenith, 9), horizon: str(sky.horizon, 9), ground: str(sky.ground, 9), intensity: Math.max(0, Math.min(100, num(sky.intensity))), skyLight: Math.max(0, Math.min(100, num(sky.skyLight))), skyTint: str(sky.skyTint, 9), plain: sky.plain === true,
      turbidity: sky.turbidity !== undefined ? Math.max(2, Math.min(10, num(sky.turbidity, 3))) : undefined, hdri: sky.hdri !== undefined ? str(sky.hdri, 120) : undefined, rotation: sky.rotation !== undefined ? Math.max(-180, Math.min(180, num(sky.rotation))) : undefined, exposure: sky.exposure !== undefined ? Math.max(-5, Math.min(5, num(sky.exposure))) : undefined },
    exposure: { stops: Math.max(-20, Math.min(20, num(ex.stops))), slider: Math.max(-3, Math.min(3, num(ex.slider))), mode: ex.mode === 'camera' ? 'camera' : 'slider', fstop: Math.max(0.5, Math.min(64, num(ex.fstop, 8))), shutter: Math.max(1e-5, Math.min(3600, num(ex.shutter, 1 / 125))), iso: Math.max(6, Math.min(409600, num(ex.iso, 100))) },
    whiteBalance: { kelvin: Math.max(2000, Math.min(12000, num(x.whiteBalance && x.whiteBalance.kelvin, 6500))), gains: vec(x.whiteBalance && x.whiteBalance.gains, 3, 1) },
    ground: x.ground !== false,
    lamps, materials, frames, files,
  };
  for (const o of [manifest.camera, manifest.sky]) for (const k of Object.keys(o)) if (o[k] === undefined) delete o[k];
  for (const L of manifest.lamps) if (L.ies && !manifest.files[L.ies]) bad('ies_not_in_files');
  if (manifest.scene.file && !manifest.files[manifest.scene.file] && Object.keys(manifest.files).length) bad('scene_not_in_files');
  return { ok: problems.length === 0, manifest, problems };
}

/** The package: the manifest (with every file's size) + the USD + what rides beside it. Files are Uint8Arrays under relative names. */
export function buildPackage({ manifest, usd, textures = [], ies = null, hdri = null, extra = {} }) {
  const files = {};
  for (const [name, bytes] of Object.entries(extra)) if (safeRel(name)) files[name] = bytes;   // e.g. scene.glb for "Open in" programs that read glTF
  files[manifest.scene.file] = usd;
  for (const t of textures) files[t.name] = t.bytes;
  const iesFiles = ies || manifest.iesFiles || {};
  for (const [name, text] of Object.entries(iesFiles)) files[name] = typeof text === 'string' ? enc.encode(text) : text;
  if (hdri && hdri.name) files['sky/' + safeName(hdri.name)] = hdri.bytes;
  manifest.files = {};
  for (const [name, f] of Object.entries(files)) manifest.files[name] = { bytes: f.length };
  files[MANIFEST_FILE] = enc.encode(JSON.stringify(manifest, null, 1));
  return { manifest, files };
}

/** A stored zip of the package (the manifest first), for the web edition's "Save for …" and for hand-over between programs. */
export function zipPackage(pkg) {
  const names = Object.keys(pkg.files).sort((a, b) => (a === MANIFEST_FILE ? -1 : b === MANIFEST_FILE ? 1 : a < b ? -1 : 1));
  return zipStored(names.map((name) => ({ name, data: pkg.files[name] })));
}

/** Read a package zip (ours: stored entries only; untrusted input → bounded, CRC-checked, names must be relative). Throws {code}. */
export function unzipPackage(bytes) {
  const fail = (code) => { throw Object.assign(new Error(code), { code }); };   // i18n-ignore: caught by the caller
  const b = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (b.length < 30 || b[0] !== 0x50 || b[1] !== 0x4b) fail('not_package');
  const v = new DataView(b.buffer, b.byteOffset, b.byteLength), files = {};
  let o = 0, total = 0, n = 0;
  while (o + 30 <= b.length && v.getUint32(o, true) === 0x04034b50) {
    const method = v.getUint16(o + 8, true), crc = v.getUint32(o + 14, true), size = v.getUint32(o + 18, true), nl = v.getUint16(o + 26, true), xl = v.getUint16(o + 28, true);
    if (method !== 0) fail('compressed_entry');
    if (++n > MAX_FILES || size > MAX_FILE_BYTES || (total += size) > MAX_PACKAGE_BYTES) fail('too_big');
    const name = dec.decode(b.subarray(o + 30, o + 30 + nl)), start = o + 30 + nl + xl;
    if (!name || name.startsWith('/') || name.includes('\\') || name.split('/').some((p) => p === '..' || p === '') || /^[A-Za-z]:/.test(name)) fail('bad_name');
    if (start + size > b.length) fail('damaged');
    const data = b.subarray(start, start + size);
    if (crc32(data) !== crc) fail('damaged');
    if (name in files) fail('bad_name');
    files[name] = data;
    o = start + size;
  }
  if (!files[MANIFEST_FILE]) fail('no_manifest');
  let j;
  try { j = JSON.parse(dec.decode(files[MANIFEST_FILE])); } catch { fail('damaged'); }
  const r = cleanManifest(j);
  if (!r.manifest) fail(r.problems[0]);
  if (!files[r.manifest.scene.file]) fail('no_scene');
  return { manifest: r.manifest, files, problems: r.problems };
}
