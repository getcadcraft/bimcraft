/* SPDX-License-Identifier: Apache-2.0 */
/**
 * glb-bim.js — Export › Model for rendering (.glb) (0.6 DC.22, session bim-extra_PART_2; spike docs/spikes/DC.22_PART_2.md).
 * What the 3D view shows, as glTF 2.0 binary for rendering programs that read glTF (Twinmotion opens it with its lights;
 * Enscape takes it as a custom asset). Written from the Khronos glTF 2.0 specification and its ratified extensions
 * KHR_lights_punctual and KHR_materials_transmission. No DOM and no three.js: the scene's geometries are read duck-typed
 * (getAttribute(name).array, index.array, drawRange), so Node tests drive it with plain objects.
 *
 *   sceneGlb(scene, opts) → Promise<{ bytes: Uint8Array, stats: { nodes, triangles, materials, textures, lights } }>
 *     scene = render-bim.js bimScene(…) (items {geometry, matrix, look, lines?, mi?, storey?}, looks, defaultColor)
 *     opts = { settings (render settings: the looks chosen per colour), lamps (bimLamps, only those on are written),
 *              site ({lat, lon, north} | null), names: { storey(mi, storey) → text, material(id) → text, colour(hex) → text },
 *              texSize = 256, generator }
 *
 * The file: metres, Y up (BimCraft's viewer axes = glTF's). One node per shown batch (a storey × a colour or library material),
 * its world matrix on the node; edges are left out. Materials: pbrMetallicRoughness from the colour's look (render/looks.js)
 * or the library material (render/materials.js); a textured library material carries its texture (render/textures.js, drawn
 * by code, CC0) as an embedded PNG, with UVs in texture repeats (planar metres ÷ the tile's real size); glass is BLEND with
 * KHR_materials_transmission. Lamps → KHR_lights_punctual (point / spot; intensity in candela = lumens ÷ 4π; area lamps as
 * points). The site's latitude, longitude and true north go in scenes[0].extras for the person to type into the program's sun.
 */
import { lookFor } from './render/looks.js';
import { material as libMaterial } from './render/materials.js';
import { makeTexture } from './render/textures.js';
import { encodePng } from './png.js';

const toLin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
export const hexLinear = (hex) => [1, 3, 5].map((i) => +toLin(parseInt(hex.slice(i, i + 2), 16)).toFixed(5));
const round = (x, d = 6) => +x.toFixed(d);

/** The used part of one batch: its triangles' vertices only, re-numbered. → {pos, nor, uv, idx} | null */
export function batchPart(geometry, uvScale = null) {
  const P = geometry.getAttribute('position')?.array, N = geometry.getAttribute('normal')?.array, U = geometry.getAttribute('uv')?.array;
  if (!P) return null;
  const all = geometry.index ? geometry.index.array : null;
  const nv = P.length / 3, dr = geometry.drawRange || { start: 0, count: Infinity };
  const start = dr.start || 0, end = Math.min(all ? all.length : nv, start + (Number.isFinite(dr.count) ? dr.count : Infinity));
  const n = Math.floor((end - start) / 3) * 3;
  if (n <= 0) return null;
  const map = new Int32Array(nv).fill(-1), used = [];
  const idx = new Uint32Array(n);
  for (let i = 0; i < n; i++) {
    const v = all ? all[start + i] : start + i;
    if (map[v] < 0) { map[v] = used.length; used.push(v); }
    idx[i] = map[v];
  }
  const pos = new Float32Array(used.length * 3), nor = N ? new Float32Array(used.length * 3) : null, uv = U && uvScale ? new Float32Array(used.length * 2) : null;
  used.forEach((v, k) => {
    pos[k * 3] = P[v * 3]; pos[k * 3 + 1] = P[v * 3 + 1]; pos[k * 3 + 2] = P[v * 3 + 2];
    if (nor) {   // unit length (the glTF rule); a degenerate normal points up
      const x = N[v * 3], y = N[v * 3 + 1], z = N[v * 3 + 2], l = Math.hypot(x, y, z);
      if (l > 1e-9) { nor[k * 3] = x / l; nor[k * 3 + 1] = y / l; nor[k * 3 + 2] = z / l; } else nor[k * 3 + 1] = 1;
    }
    if (uv) { uv[k * 2] = U[v * 2] / uvScale[0]; uv[k * 2 + 1] = U[v * 2 + 1] / uvScale[1]; }
  });
  return { pos, nor, uv, idx };
}

/** Rotation turning the node's −Z (a glTF spot light's direction) onto `dir` (unit). → quaternion [x, y, z, w] */
export function quatFromMinusZ(dir) {
  const a = [0, 0, -1], d = dir;
  const c = a[0] * d[0] + a[1] * d[1] + a[2] * d[2];
  if (c < -0.999999) return [0, 1, 0, 0];   // straight back: half a turn about Y
  const x = a[1] * d[2] - a[2] * d[1], y = a[2] * d[0] - a[0] * d[2], z = a[0] * d[1] - a[1] * d[0];
  const w = 1 + c, l = Math.hypot(x, y, z, w);
  return [x / l, y / l, z / l, w / l].map((v) => round(v, 7));
}

export async function sceneGlb(scene, { settings = null, lamps = [], site = null, names = {}, texSize = 256, generator = 'BimCraft' } = {}) {
  const gltf = { asset: { version: '2.0', generator }, scene: 0, scenes: [{ nodes: [] }], nodes: [], meshes: [], materials: [], accessors: [], bufferViews: [], buffers: [] };
  const used = new Set();
  const chunks = [];
  let byteLength = 0, triangles = 0;
  const view = (bytes, target) => {
    const pad = (4 - (byteLength % 4)) % 4;
    if (pad) { chunks.push(new Uint8Array(pad)); byteLength += pad; }
    gltf.bufferViews.push({ buffer: 0, byteOffset: byteLength, byteLength: bytes.byteLength, ...(target ? { target } : {}) });
    chunks.push(new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength));
    byteLength += bytes.byteLength;
    return gltf.bufferViews.length - 1;
  };
  const accessor = (arr, type, target, minmax = false) => {
    const a = { bufferView: view(arr, target), componentType: arr instanceof Uint32Array ? 5125 : 5126, count: arr.length / ({ SCALAR: 1, VEC2: 2, VEC3: 3 })[type], type };
    if (minmax) {
      const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
      for (let i = 0; i < arr.length; i += 3) for (let k = 0; k < 3; k++) { if (arr[i + k] < lo[k]) lo[k] = arr[i + k]; if (arr[i + k] > hi[k]) hi[k] = arr[i + k]; }
      a.min = lo; a.max = hi;
    }
    gltf.accessors.push(a);
    return gltf.accessors.length - 1;
  };

  // ---- materials: one per look key; textures made once per library material ----
  const mats = new Map(), texOf = new Map();
  let textures = 0;
  async function textureFor(m) {
    if (texOf.has(m.id)) return texOf.get(m.id);
    const t = makeTexture(m.tex, texSize);
    const png = await encodePng(t.albedo, t.w, t.h);
    gltf.images ||= []; gltf.textures ||= []; gltf.samplers ||= [{ magFilter: 9729, minFilter: 9987, wrapS: 10497, wrapT: 10497 }];
    gltf.images.push({ name: m.id, mimeType: 'image/png', bufferView: view(png) });
    gltf.textures.push({ sampler: 0, source: gltf.images.length - 1 });
    textures++;
    texOf.set(m.id, gltf.textures.length - 1);
    return gltf.textures.length - 1;
  }
  async function materialFor(look) {
    if (mats.has(look)) return mats.get(look);
    let entry;
    const lib = look.startsWith('mat:') ? libMaterial(look.slice(4)) : null;
    if (lib) {
      const pbr = { metallicFactor: lib.metal, roughnessFactor: lib.rough };
      const m = { name: names.material ? names.material(lib.id) : lib.id, pbrMetallicRoughness: pbr, doubleSided: true };
      if (lib.tex) pbr.baseColorTexture = { index: await textureFor(lib) };
      else pbr.baseColorFactor = [...hexLinear(lib.color), 1];
      if (lib.glass > 0) glassy(m, lib.glass, lib.color);
      entry = { index: pushMat(m), uvScale: lib.tex ? lib.tex.size || [1, 1] : null };
    } else {
      const L = lookFor(look, settings, scene.defaultColor || '#e6e3dc', scene.looks ? scene.looks[look] : null);
      const m = { name: names.colour ? names.colour(L.color, L.look) : L.color, pbrMetallicRoughness: { baseColorFactor: [...hexLinear(L.color), 1], metallicFactor: L.metal, roughnessFactor: L.rough }, doubleSided: true };
      if (L.glass > 0) glassy(m, L.glass, L.color);
      entry = { index: pushMat(m), uvScale: null };
    }
    mats.set(look, entry);
    return entry;
  }
  function glassy(m, glass, color) {
    m.alphaMode = 'BLEND';
    m.pbrMetallicRoughness.baseColorFactor = [...hexLinear(color), round(Math.max(0.08, 1 - glass), 3)];
    m.extensions = { KHR_materials_transmission: { transmissionFactor: round(glass, 3) } };
    used.add('KHR_materials_transmission');
  }
  const pushMat = (m) => { gltf.materials.push(m); return gltf.materials.length - 1; };

  // ---- the batches ----
  const nodeName = (it) => {
    const s = it.storey !== undefined && it.storey !== null && names.storey ? names.storey(it.mi, it.storey) : '';
    const look = it.look.startsWith('mat:') ? (names.material ? names.material(it.look.slice(4)) : it.look.slice(4)) : it.look;
    return s ? s + ' — ' + look : look;
  };
  for (const it of scene.items || []) {
    if (it.lines || !it.geometry) continue;
    const mat = await materialFor(String(it.look || 'default'));
    const part = batchPart(it.geometry, mat.uvScale);
    if (!part) continue;
    const attributes = { POSITION: accessor(part.pos, 'VEC3', 34962, true) };
    if (part.nor) attributes.NORMAL = accessor(part.nor, 'VEC3', 34962);
    if (part.uv) attributes.TEXCOORD_0 = accessor(part.uv, 'VEC2', 34962);
    gltf.meshes.push({ primitives: [{ attributes, indices: accessor(part.idx, 'SCALAR', 34963), material: mat.index, mode: 4 }] });
    const node = { name: nodeName(it), mesh: gltf.meshes.length - 1 };
    const m = it.matrix;
    if (m && m.some((v, i) => Math.abs(v - (i % 5 === 0 ? 1 : 0)) > 1e-12)) node.matrix = m.map((v) => (Math.abs(v) < 1e-15 ? 0 : v));
    gltf.nodes.push(node);
    gltf.scenes[0].nodes.push(gltf.nodes.length - 1);
    triangles += part.idx.length / 3;
  }

  // ---- lamps ----
  const on = (lamps || []).filter((L) => L && L.on !== false && Array.isArray(L.p));
  if (on.length) {
    const lights = [];
    for (const L of on) {
      const spot = L.kind === 'spot';
      const light = { name: String(L.name || 'Lamp'), type: spot ? 'spot' : 'point', color: hexLinear(/^#[0-9a-f]{6}$/i.test(L.color || '') ? L.color : '#ffe7c4'), intensity: round((Number(L.lumens) || 800) / (4 * Math.PI), 3) };
      if (spot) { const outer = Math.min(Math.PI / 2, Math.max(0.02, ((Number(L.angle) || 60) * Math.PI) / 360)); light.spot = { innerConeAngle: round(outer * 0.8, 5), outerConeAngle: round(outer, 5) }; }
      lights.push(light);
      const node = { name: light.name, translation: L.p.map((v) => round(v)), extensions: { KHR_lights_punctual: { light: lights.length - 1 } } };
      if (spot) node.rotation = quatFromMinusZ(L.dir || [0, -1, 0]);
      gltf.nodes.push(node);
      gltf.scenes[0].nodes.push(gltf.nodes.length - 1);
    }
    gltf.extensions = { KHR_lights_punctual: { lights } };
    used.add('KHR_lights_punctual');
  }
  if (site && Number.isFinite(site.lat) && Number.isFinite(site.lon)) gltf.scenes[0].extras = { latitude: site.lat, longitude: site.lon, trueNorth: site.north || [0, 1] };
  if (used.size) gltf.extensionsUsed = [...used];
  for (const k of ['nodes', 'meshes', 'materials', 'accessors', 'bufferViews']) if (!gltf[k].length) delete gltf[k];
  if (!gltf.scenes[0].nodes.length) delete gltf.scenes[0].nodes;
  if (byteLength) gltf.buffers = [{ byteLength: byteLength + ((4 - (byteLength % 4)) % 4) }];
  else delete gltf.buffers;

  // ---- GLB container: header, JSON chunk (space padded), BIN chunk (zero padded) ----
  const json = new TextEncoder().encode(JSON.stringify(gltf));
  const jlen = json.length + ((4 - (json.length % 4)) % 4), blen = byteLength + ((4 - (byteLength % 4)) % 4);
  const total = 12 + 8 + jlen + (byteLength ? 8 + blen : 0);
  const out = new Uint8Array(total), dv = new DataView(out.buffer);
  dv.setUint32(0, 0x46546c67, true); dv.setUint32(4, 2, true); dv.setUint32(8, total, true);
  dv.setUint32(12, jlen, true); dv.setUint32(16, 0x4e4f534a, true);
  out.fill(0x20, 20, 20 + jlen); out.set(json, 20);
  if (byteLength) {
    let o = 20 + jlen;
    dv.setUint32(o, blen, true); dv.setUint32(o + 4, 0x004e4942, true); o += 8;
    for (const c of chunks) { out.set(c, o); o += c.byteLength; }
  }
  return { bytes: out, stats: { nodes: gltf.nodes ? gltf.nodes.length : 0, triangles, materials: gltf.materials ? gltf.materials.length : 0, textures, lights: on.length } };
}

/** The JSON chunk of a GLB (tests, the read-back check). */
export function readGlbJson(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (dv.getUint32(0, true) !== 0x46546c67) return null;
  const len = dv.getUint32(12, true);
  return JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + len)));
}

/**
 * A GLB as one self-contained .gltf (0.8 DC.22, session ifc_PART_3): the same glTF 2.0 JSON with the binary chunk carried inside it as a
 * base64 data URI (Khronos glTF 2.0 § 3.6.1.2), and images that live in the binary chunk moved to data URIs, so the one file stands alone.
 * Enscape's custom asset library lists .gltf, .obj and .fbx (not .glb), so this is the file for it. → Uint8Array (UTF-8 JSON) | null (not a GLB).
 */
export function glbToGltf(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (bytes.length < 20 || dv.getUint32(0, true) !== 0x46546c67) return null;
  let off = 12, json = null, bin = null;
  while (off + 8 <= bytes.length) {
    const n = dv.getUint32(off, true), type = dv.getUint32(off + 4, true);
    const body = bytes.subarray(off + 8, off + 8 + n);
    if (body.length !== n) return null;
    if (type === 0x4e4f534a) json = JSON.parse(new TextDecoder().decode(body));
    else if (type === 0x004e4942 && !bin) bin = body;
    off = (off + 8 + n + 3) & ~3;   // chunks are 4-byte aligned
  }
  if (!json) return null;
  const b64 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
  if (bin && json.buffers && json.buffers[0]) {
    for (const im of json.images || []) {
      const v = im.bufferView !== undefined ? json.bufferViews[im.bufferView] : null;
      if (v) { im.uri = 'data:' + (im.mimeType || 'image/png') + ';base64,' + b64(bin.subarray(v.byteOffset || 0, (v.byteOffset || 0) + v.byteLength)); delete im.bufferView; delete im.mimeType; }
    }
    json.buffers[0].uri = 'data:application/octet-stream;base64,' + b64(bin);
    json.buffers[0].byteLength = bin.length;
  }
  return new TextEncoder().encode(JSON.stringify(json));
}
