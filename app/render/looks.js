/* SPDX-License-Identifier: Apache-2.0 */
/**
 * looks.js — the render's settings, material looks, skies and the small maths the renderer needs. No DOM, no three.js,
 * no imports but pt-mix.js and pt-post.js (both DOM-free), so Node tests it as is. Part of the shared renderer (0.5 RC.11): canonical in modelcraft/dev/render/,
 * byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs [--check]); never edit the copy.
 *
 *   DEFAULTS, MODES, MINUTES, QUALITY, SIZES, SKIES, LOOKS, LOOK_KEYS
 *   cleanSettings(obj) → settings      (untrusted: a file or localStorage; unknown keys dropped, values clamped)
 *   lookFor(key, settings, fallbackColor, ownLook) → {color, rough, metal, glass, look}   (ownLook: the file's own, e.g. IFC glass)
 *   sizeFor(settings, viewW, viewH) → {w, h}   (≤ MAX_SIDE on each side, view aspect kept for view sizes)
 *   halton(i, base)                    the low-discrepancy sequence every pass jitters by (same model → same image)
 *   farPlane(proj, far) → proj         a projection with its far plane pushed out (perspective or parallel)
 *   basis(up) → {up, e1, e2}           two unit vectors square to `up` (sky samples, the ground plane)
 *   hemisphere(i, up) → dir            cosine-weighted direction over the sky for pass i (kept off the horizon)
 *   sunDisc(dir, i, degrees) → dir     a direction inside the sun's small cone for pass i (soft shadow edges)
 *   colorKey(c) → '#rrggbb' | null     a colour as the looks table keys it
 *   NIGHT, LIGHT_SCALE, SHADOW_LAMPS, lampCandela(L), lampAt(L, i)   lamps and the night (RC.11 (d))
 */
import { cleanMix, MAX_PRESETS } from './pt-mix.js';
import { cleanPost, POST_DEFAULTS } from './pt-post.js';
import { cleanEngineId } from './engines.js';

export const MAX_SIDE = 4096;

/** Passes per render: each pass jitters the camera, the sun and one sky light, and the image is their average. */
export const QUALITY = { draft: 16, good: 64, best: 256 };

/** Image sizes: the view's own size (×1, ×2) or a fixed size (the view is framed to its aspect). */
export const SIZES = {
  view: { scale: 1 }, view2: { scale: 2 },
  hd: { w: 1920, h: 1080 }, uhd: { w: 3840, h: 2160 }, square: { w: 2048, h: 2048 },
};

/**
 * Skies: the gradient dome (image light and background) and the two lights every pass samples. `sun` and `sky` are the
 * intensities of the sun and the sampled sky light; `env` the dome's image light; `tint` the sun's colour.
 */
export const SKIES = {
  clear: { zenith: '#2f6cb3', horizon: '#c4d6e8', ground: '#8f8a80', sun: 3.2, sky: 1.6, env: 0.45, tint: '#fff4e5', skyTint: '#dfeaff' },
  overcast: { zenith: '#b9c0c8', horizon: '#dfe2e5', ground: '#8a8781', sun: 0.35, sky: 3.0, env: 0.8, tint: '#f4f2ee', skyTint: '#eef0f3' },
  dusk: { zenith: '#3d4f78', horizon: '#e9b48a', ground: '#5d5650', sun: 2.2, sky: 0.9, env: 0.35, tint: '#ffb877', skyTint: '#b9c4e6' },
  white: { zenith: '#ffffff', horizon: '#ffffff', ground: '#f2f2f2', sun: 2.6, sky: 2.0, env: 0.7, tint: '#fffaf2', skyTint: '#f4f7ff', plain: true },
  // 0.7 RN.3, the path tracer on the graphics card: Preetham's physical sky (turbidity) and a picture (HDRI). The fast render and
  // the WebGL engine show these as the clear sky.
  physical: { zenith: '#2f6cb3', horizon: '#c4d6e8', ground: '#8f8a80', sun: 3.2, sky: 1.6, env: 0.45, tint: '#fff4e5', skyTint: '#dfeaff', physical: true },
  hdri: { zenith: '#2f6cb3', horizon: '#c4d6e8', ground: '#8f8a80', sun: 3.2, sky: 1.6, env: 0.45, tint: '#fff4e5', skyTint: '#dfeaff', hdri: true },
};
/** The sky when the sun is down (any sky but the white studio): a dark blue night, lit faintly; lamps do the rest. */
export const NIGHT = { zenith: '#070b16', horizon: '#18202f', ground: '#0c0d0f', sun: 0, sky: 0.05, env: 0.06, tint: '#ffffff', skyTint: '#8fa3c8' };
/**
 * Lamps (0.5 RC.11 (d)): lumens → three.js candela (point, spot: Φ/4π; an area light, a Lambertian panel: Φ/π), times
 * LIGHT_SCALE, the scene's own scale (the sun is 3.2 here, not 100 000 lux) so an 800 lm bulb lights a room at night with the
 * brightness at 0. The SHADOW_LAMPS brightest lamps cast shadows; the rest light without (each shadow costs passes).
 */
export const LIGHT_SCALE = 0.02;
export const SHADOW_LAMPS = 4;
export function lampCandela(L) { return (L.kind === 'area' ? L.lumens / Math.PI : L.lumens / (4 * Math.PI)) * LIGHT_SCALE; }
/** Where pass i puts a lamp: a point inside its bulb (point, spot) or on its panel (area), so shadows come out soft. */
export function lampAt(L, i) {
  const a = halton(i + 1, 17), b = halton(i + 1, 19);
  if (L.kind === 'area') {
    const { e1, e2 } = basis(L.dir), w = L.size[0], h = L.size[1];
    return [0, 1, 2].map((k) => L.p[k] + e1[k] * (a - 0.5) * w + e2[k] * (b - 0.5) * h);
  }
  const r = (L.size ? L.size[0] : 0.06) / 2, z = 2 * a - 1, ph = 2 * Math.PI * b, s = Math.sqrt(Math.max(0, 1 - z * z)), c = halton(i + 1, 23) ** (1 / 3);
  return [L.p[0] + r * c * s * Math.cos(ph), L.p[1] + r * c * s * Math.sin(ph), L.p[2] + r * c * z];
}

/**
 * Material looks a colour can take. rough 0 = mirror-smooth … 1 = chalk; metal 0 | 1; glass = how much light passes
 * (0 opaque … 1 clear). The raster render shows glass as see-through with sky reflections; light bending through it and
 * mirrors reflecting the model need the high-quality mode.
 */
export const LOOKS = {
  matte: { rough: 0.78, metal: 0, glass: 0 },
  satin: { rough: 0.5, metal: 0, glass: 0 },
  glossy: { rough: 0.18, metal: 0, glass: 0 },
  metal: { rough: 0.32, metal: 1, glass: 0 },
  chrome: { rough: 0.04, metal: 1, glass: 0 },
  glass: { rough: 0.04, metal: 0, glass: 0.82 },
  frosted: { rough: 0.45, metal: 0, glass: 0.55 },
};
export const LOOK_KEYS = Object.keys(LOOKS);

/** Fast = the raster render (render-core.js); High quality = path traced (render-pt.js, RC.11 (c)), with a time limit. */
export const MODES = ['fast', 'hq'];
export const MINUTES = [0, 1, 5, 15, 60];   // 0 = no limit

export const DEFAULTS = Object.freeze({
  mode: 'fast', minutes: 5,
  engine: '',         // 0.8 RE.1 (engines.js): the engine's id; '' = the built-in the mode names (fast | pt)
  engineOpts: {},     // engine id → that engine's own settings (typed fields, cleaned by the engine's list when it is drawn)
  size: 'view2', quality: 'good', sky: 'clear', exposure: 0, edges: false, ground: true,
  sun: null,          // null = the model's own sun (its place, date and time); else {month, day, hour} for this render
  looks: {},          // '#rrggbb' | 'default' → a LOOK_KEYS name
  turbidity: 3,       // 0.7 RN.3: the physical sky's haze, 2 (very clear) … 10 (hazy)
  envRotation: 0,     // the sky picture turned about up, degrees
  envExposure: 0,     // the sky picture's brightness, stops
  hdriName: '',       // the sky picture's file name (the picture itself is kept for the session, not in settings)
  ies: {},            // lamp name → {file, text}: an IES (LM-63) light profile for the lamps of that name
  // 0.7 RN.4, the physical camera (pt-camera.js; the path tracer on the graphics card, except exposure which every engine uses)
  exposureMode: 'slider',   // 'slider' (the Brightness slider only) | 'camera' (f-stop, shutter and ISO set it, + the slider)
  fstop: 8, shutter: 1 / 125, iso: 100,
  dof: false,         // depth of field: a lens of the f-stop's opening
  focus: 0,           // metres; 0 = what is in the middle of the view
  blades: 0,          // aperture blades: 0 round, 5–9
  bladeRot: 0,        // degrees
  twoPoint: false,    // two-point perspective (vertical lines stay vertical)
  whiteBalance: 6500, // kelvin: the light colour that shows as white
  projection: 'normal',   // 'normal' | 'equirect' (360° panorama) | 'stereo' (360° stereo) | 'cube' (cube map)
  // 0.7 RN.6 (pt-mix.js): render elements and light mixing after the render (graphics card); the mix and named mixes
  elements: false, lightMix: false,
  denoise: true,      // 0.7 RN.5: denoise high-quality pictures (Open Image Denoise's network, our own inference)
  mix: {},            // light group key → {on, color, stops}
  mixPresets: {},     // name → a mix
  post: POST_DEFAULTS,  // 0.7 RN.8 (pt-post.js): view transform, contrast, highlights, bloom, glare, vignette, LUT
  // 0.7 RN.7 (pt-volume.js; the graphics card and the reference tracer): fog with light shafts, one smoke or cloud volume, adaptive sampling, caustics
  fog: Object.freeze({ on: false, visibility: 300, top: 40, g: 0.5, color: '#ffffff' }),   // metres of sight, the layer's height above the ground, the light's forward lean (−0.9 … 0.9)
  volume: Object.freeze({ on: false, kind: 'cloud', name: '', dx: 0, dy: 0, dz: 0, size: 0, yaw: 0, density: 0.5, g: 0.3, color: '#ffffff', res: 48, seed: 1 }),   // size 0 = the model's size
  adaptive: Object.freeze({ on: false, noise: 0.02, min: 16 }),
  caustics: false,    // light tracing for the light that bends through glass or bounces off mirrors onto surfaces
});
export const VOLUME_KINDS = ['cloud', 'plume', 'file'];
export const VOLUME_RES = [24, 32, 48, 64, 96];
export const CAM_FSTOPS = [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22];
export const CAM_SHUTTERS = [1 / 4000, 1 / 2000, 1 / 1000, 1 / 500, 1 / 250, 1 / 125, 1 / 60, 1 / 30, 1 / 15, 1 / 8, 1 / 4, 1 / 2, 1, 2, 4, 8, 15, 30];
export const CAM_ISOS = [50, 100, 200, 400, 800, 1600, 3200, 6400];
export const CAM_BLADES = [0, 5, 6, 7, 8, 9];
export const PROJECTIONS = ['normal', 'equirect', 'stereo', 'cube'];
export const IES_MAX_TEXT = 262144, IES_MAX_LAMPS = 32;

const HEX = /^#[0-9a-f]{6}$/;
export function colorKey(c) {
  if (typeof c !== 'string') return null;
  let s = c.trim().toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(s)) s = '#' + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];
  return HEX.test(s) ? s : null;
}

const num = (v, lo, hi, d) => (typeof v === 'number' && Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d);
/** The list value nearest v (a typed or older value snaps to a real stop), else d. */
const nearest = (v, list, d) => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? list.reduce((b, x) => (Math.abs(Math.log(x / v)) < Math.abs(Math.log(b / v)) ? x : b), list[0]) : d);
const pick = (v, table, d) => (typeof v === 'string' && Object.prototype.hasOwnProperty.call(table, v) ? v : d);

const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
/** 0.7 RN.7 */
function cleanFog(v) {
  const o = obj(v), d = DEFAULTS.fog;
  return { on: o.on === true, visibility: Math.round(num(o.visibility, 5, 20000, d.visibility)), top: Math.round(num(o.top, 1, 5000, d.top) * 10) / 10, g: Math.round(num(o.g, -0.9, 0.9, d.g) * 20) / 20, color: colorKey(o.color) || d.color };
}
function cleanVolume(v) {
  const o = obj(v), d = DEFAULTS.volume;
  return {
    on: o.on === true, kind: VOLUME_KINDS.includes(o.kind) ? o.kind : d.kind,
    name: typeof o.name === 'string' ? o.name.replace(/[\u0000-\u001f]/g, '').slice(0, 120) : '',
    dx: Math.round(num(o.dx, -5000, 5000, 0) * 100) / 100, dy: Math.round(num(o.dy, -5000, 5000, 0) * 100) / 100, dz: Math.round(num(o.dz, -5000, 5000, 0) * 100) / 100,
    size: Math.round(num(o.size, 0, 10000, 0) * 100) / 100, yaw: Math.round(num(o.yaw, -180, 180, 0)),
    density: Math.round(num(o.density, 0.001, 50, d.density) * 1000) / 1000, g: Math.round(num(o.g, -0.9, 0.9, d.g) * 20) / 20,
    color: colorKey(o.color) || d.color, res: VOLUME_RES.includes(o.res) ? o.res : d.res, seed: Math.round(num(o.seed, 1, 9999, 1)),
  };
}
function cleanAdaptive(v) {
  const o = obj(v), d = DEFAULTS.adaptive;
  return { on: o.on === true, noise: Math.round(num(o.noise, 0.002, 0.2, d.noise) * 1000) / 1000, min: Math.round(num(o.min, 8, 256, d.min) / 4) * 4 };
}

/** Engine id → {key: scalar}: at most 8 engines × 24 keys; scalars only (strings ≤ 200 characters). Each engine's own list narrows it further. */
function cleanEngineOptsMap(v) {
  const out = {};
  if (!v || typeof v !== 'object' || Array.isArray(v)) return out;
  for (const id of Object.keys(v).slice(0, 8)) {
    const e = v[id];
    if (!cleanEngineId(id) || !e || typeof e !== 'object' || Array.isArray(e)) continue;
    const o = {};
    for (const k of Object.keys(e).slice(0, 24)) {
      const x = e[k];
      if (/^[a-zA-Z][a-zA-Z0-9_]{0,31}$/.test(k) && (typeof x === 'boolean' || (typeof x === 'number' && Number.isFinite(x)) || typeof x === 'string')) o[k] = typeof x === 'string' ? x.replace(/[\u0000-\u001f]/g, '').slice(0, 200) : x;
    }
    out[id] = o;
  }
  return out;
}

/** Settings from anything (a file, localStorage): a fresh object with only known keys and sane values. */
export function cleanSettings(obj) {
  const o = obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
  const s = {
    mode: MODES.includes(o.mode) ? o.mode : DEFAULTS.mode,
    minutes: MINUTES.includes(o.minutes) ? o.minutes : DEFAULTS.minutes,
    engine: cleanEngineId(o.engine),
    engineOpts: cleanEngineOptsMap(o.engineOpts),
    size: pick(o.size, SIZES, DEFAULTS.size),
    quality: pick(o.quality, QUALITY, DEFAULTS.quality),
    sky: pick(o.sky, SKIES, DEFAULTS.sky),
    exposure: Math.round(num(o.exposure, -3, 3, 0) * 10) / 10,
    edges: o.edges === true,
    ground: o.ground !== false,
    sun: null,
    looks: {},
    turbidity: Math.round(num(o.turbidity, 2, 10, DEFAULTS.turbidity) * 2) / 2,
    envRotation: Math.round(num(o.envRotation, -180, 180, 0)),
    envExposure: Math.round(num(o.envExposure, -5, 5, 0) * 2) / 2,
    hdriName: typeof o.hdriName === 'string' ? o.hdriName.replace(/[\u0000-\u001f]/g, '').slice(0, 120) : '',
    ies: {},
    exposureMode: o.exposureMode === 'camera' ? 'camera' : 'slider',
    fstop: nearest(o.fstop, CAM_FSTOPS, DEFAULTS.fstop),
    shutter: nearest(o.shutter, CAM_SHUTTERS, DEFAULTS.shutter),
    iso: nearest(o.iso, CAM_ISOS, DEFAULTS.iso),
    dof: o.dof === true,
    focus: Math.round(num(o.focus, 0, 10000, 0) * 100) / 100,
    blades: CAM_BLADES.includes(o.blades) ? o.blades : 0,
    bladeRot: Math.round(num(o.bladeRot, 0, 360, 0)),
    twoPoint: o.twoPoint === true,
    whiteBalance: Math.round(num(o.whiteBalance, 2000, 12000, 6500) / 100) * 100,
    projection: PROJECTIONS.includes(o.projection) ? o.projection : 'normal',
    elements: o.elements === true,
    denoise: o.denoise !== false,
    lightMix: o.lightMix === true,
    mix: cleanMix(o.mix),
    mixPresets: {},
    post: cleanPost(o.post),
    fog: cleanFog(o.fog),
    volume: cleanVolume(o.volume),
    adaptive: cleanAdaptive(o.adaptive),
    caustics: o.caustics === true,
  };
  if (o.mixPresets && typeof o.mixPresets === 'object' && !Array.isArray(o.mixPresets)) {
    for (const [name, m] of Object.entries(o.mixPresets).slice(0, MAX_PRESETS)) {
      const nm = typeof name === 'string' ? name.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60) : '';
      if (nm) s.mixPresets[nm] = cleanMix(m);
    }
  }
  if (o.ies && typeof o.ies === 'object' && !Array.isArray(o.ies)) {
    let n = 0;
    for (const [name, v] of Object.entries(o.ies)) {
      if (typeof name !== 'string' || !name || name.length > 120 || !v || typeof v.text !== 'string' || v.text.length > IES_MAX_TEXT) continue;
      s.ies[name] = { file: typeof v.file === 'string' ? v.file.slice(0, 120) : '', text: v.text };
      if (++n >= IES_MAX_LAMPS) break;
    }
  }
  if (o.sun && typeof o.sun === 'object') {
    const m = Math.round(num(o.sun.month, 1, 12, NaN)), d = Math.round(num(o.sun.day, 1, 31, NaN)), h = num(o.sun.hour, 0, 24, NaN);
    if (Number.isFinite(m) && Number.isFinite(d) && Number.isFinite(h)) s.sun = { month: m, day: Math.min(d, [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]), hour: Math.round(h * 4) / 4 };
  }
  if (o.looks && typeof o.looks === 'object' && !Array.isArray(o.looks)) {
    let n = 0;
    for (const [k, v] of Object.entries(o.looks)) {
      const key = k === 'default' ? k : colorKey(k);
      if (!key || !LOOK_KEYS.includes(v)) continue;
      s.looks[key] = v;
      if (++n >= 512) break;
    }
  }
  return s;
}

/** The material for a colour: its chosen look (settings.looks), else its own (the adapter's), else matte. `key` is '#rrggbb' or 'default'. */
export function lookFor(key, settings, fallbackColor = '#e6e3dc', ownLook = null) {
  const look = (settings && settings.looks && settings.looks[key]) || (LOOKS[ownLook] ? ownLook : 'matte');
  const L = LOOKS[look] || LOOKS.matte;
  return { color: colorKey(key) || colorKey(fallbackColor) || '#e6e3dc', rough: L.rough, metal: L.metal, glass: L.glass, look };
}

export function sizeFor(settings, viewW, viewH) {
  const z = SIZES[settings?.size] || SIZES[DEFAULTS.size];
  let w, h;
  if (z.scale) { w = Math.round(Math.max(1, viewW) * z.scale); h = Math.round(Math.max(1, viewH) * z.scale); } else { w = z.w; h = z.h; }
  // RN.4: a panorama is 2:1, a stereo panorama 1:1 (two 2:1 eyes), a cube map 3:2 — on the size's width (high quality only)
  const pr = settings?.mode === 'hq' ? settings?.projection : 'normal';
  if (pr === 'equirect') h = Math.round(w / 2); else if (pr === 'stereo') h = w; else if (pr === 'cube') h = Math.round((w * 2) / 3);
  const k = Math.min(1, MAX_SIDE / w, MAX_SIDE / h);
  return { w: Math.max(1, Math.round(w * k)), h: Math.max(1, Math.round(h * k)) };
}

export function halton(i, b) {
  let f = 1, r = 0;
  while (i > 0) { f /= b; r += f * (i % b); i = Math.floor(i / b); }
  return r;
}

/**
 * Push the far plane out (so the ground reaches the horizon) without moving the near plane. Column-major OpenGL
 * matrices as three.js and ModelCraft's Camera build them: perspective has [11] = -1, parallel has [15] = 1.
 */
export function farPlane(proj, far) {
  const e = proj.slice();
  if (e[15] === 1 && e[11] === 0) {
    // parallel: [10] = -2/(f-n), [14] = -(f+n)/(f-n)
    const fn = -2 / e[10], sum = -e[14] * fn, n = (sum - fn) / 2, f = Math.max(far, n + fn);
    e[10] = -2 / (f - n); e[14] = -(f + n) / (f - n);
    return e;
  }
  // perspective: [10] = (f+n)/(n-f), [14] = 2fn/(n-f)  →  n = e14/(e10-1)
  const n = e[14] / (e[10] - 1), f0 = e[14] / (e[10] + 1), f = Math.max(far, f0);
  e[10] = (f + n) / (n - f); e[14] = (2 * f * n) / (n - f);
  return e;
}

const vnorm = (v) => { const l = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; };
const vcross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

export function basis(up) {
  const u = vnorm(up);
  const ax = Math.abs(u[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
  const e1 = vnorm(vcross(u, ax)), e2 = vcross(u, e1);
  return { up: u, e1, e2 };
}

/** Pass i's sky light: cosine-weighted over the hemisphere around `up`, at least ~10° above the horizon. */
export function hemisphere(i, up) {
  const { up: u, e1, e2 } = basis(up);
  const r = Math.sqrt(Math.min(0.97, halton(i + 1, 11))), a = 2 * Math.PI * halton(i + 1, 13), z = Math.sqrt(1 - r * r);
  const x = r * Math.cos(a), y = r * Math.sin(a);
  return vnorm([e1[0] * x + e2[0] * y + u[0] * z, e1[1] * x + e2[1] * y + u[1] * z, e1[2] * x + e2[2] * y + u[2] * z]);
}

/** Pass i's sun: a point in a disc of `degrees` around the sun's direction (the sun is ~0.5° across; wider = softer). */
export function sunDisc(dir, i, degrees = 1.5) {
  const { up: d, e1, e2 } = basis(dir);
  const r = Math.sqrt(halton(i + 1, 5)) * Math.tan((degrees * Math.PI) / 180), a = 2 * Math.PI * halton(i + 1, 7);
  const x = r * Math.cos(a), y = r * Math.sin(a);
  return vnorm([d[0] + e1[0] * x + e2[0] * y, d[1] + e1[1] * x + e2[1] * y, d[2] + e1[2] * x + e2[2] * y]);
}
