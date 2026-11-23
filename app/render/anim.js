/* SPDX-License-Identifier: Apache-2.0 */
/**
 * anim.js — an animation on a timeline (0.6 LC.10; 0.7 AN.1 any property, curves, cycles, clips): a camera path, object
 * keyframes and property tracks, played in the view and rendered to video frame by frame. Shared by ModelCraft and BimCraft:
 * canonical in modelcraft/dev/render/, byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs). DOM-free and
 * import-free, so Node tests drive it as the page does. Owner from 0.7: session `anim` (render's hand-over).
 *
 *   anim = {
 *     format: 'cadcraft-anim', version: 1,
 *     fps: 24 | 25 | 30 | 60,  length: seconds (0.5 … 3600),
 *     camera: [{t, cam: {eye, target, fov, persp, height}, ease}],          the camera's keys, by time
 *     objects: [{path: [instance ids], name, keys: [{t, m: number[16], ease}], cycle?}]   placements that move (column-major
 *                                                                           matrices, the placement's own, in its parent)
 *     — 0.7 AN.1, each optional (a file without them is the 0.6 shape; a 0.6 build drops them and keeps the rest) —
 *     props: [{target, prop, name, keys: [{t, v: number[], ease, hl?, hr?, hm?}], cycle?}]   any number property over time
 *     rests: [{path, m}]                       a placement's matrix before its transform tracks began (channels not animated)
 *     cameraCycle: {before, after}             the camera track's cycles
 *     actions: [{id, name, objects, props}]    saved animations (clips play them; an action keeps no camera)
 *     shapes: [{def, keys: [{id, name, value, min, max, mute}]}]   0.7 AN.4: a mesh's shape keys (their offsets are the mesh's
 *                                              vertex layers 'shape.<id>', anim/shapes.js); value = the slider, used where no
 *                                              track or driver sets it; a track on 'shape:<def>' prop <id> animates it
 *     rigs: [{id, name, def, mode, bones: [{id, name, parent, head, tail, roll, deform}], pose: {bone: {location, rotation,
 *            scale}}}]                       0.7 AN.2: an armature skinning mesh definition `def` (bones in its coordinates;
 *                                              the weights are the mesh's 'weight.<bone>' layers; anim/rig.js does the sums);
 *                                              mode 'lbs' | 'dqs'; pose = the bones where no track sets them; a bone's
 *                                              tracks are target 'bone:<rig>/<bone>', props location / rotation / scale
 *     constraints: [{id, name, owner, type, target, pole, chain, iterations, axis, up, mix, limits, offset, follow, inverse,
 *            influence, on}]                 0.7 AN.3: rules that move a placement ('obj:<path>') or a bone ('bone:<rig>/<bone>')
 *                                              after its keys, in list order — 'ik' (bones: a chain of `chain` bones reaches
 *                                              the target; two bones exactly, more by FABRIK), 'lookat', 'copy', 'limit',
 *                                              'childof', 'path' (placements: along a curve object at `offset`). Targets
 *                                              {kind: 'obj', path} | {kind: 'bone', rig, bone} | {kind: 'point', p}. Influence and
 *                                              offset animate as tracks on target 'cns:<id>'. Solved by anim/constraints.js
 *     physics: {gravity, ground: {on, z}, from, to, substeps, bodies: [{path, kind, shape, mass, friction, bounce}]}   0.7 AN.5:
 *                                              rigid bodies to bake to keys (anim/physics.js simulates, anim/bake.js writes keys)
 *     drivers: [{target, prop, expr, vars: [{name, target, prop, comp}]}]   0.7 AN.4: a property worked out from others by a
 *                                              small expression (compileExpr: numbers, + − × ÷ ^ %, ( ), names, functions); a
 *                                              variable reads a property ('time' seconds / frame, 'obj:<path>' location /
 *                                              rotation / scale, any track target) — never a placement's own transform
 *     clips: [{id, name, action, start, from, to, scale, repeat, blend, influence, mute, extend}]   actions on the timeline,
 *                                              mixed in order (later over earlier); the timeline's own tracks go on top of
 *                                              every clip. extend: 'none', 'forward' (holds its last pose after it ends, the
 *                                              default) or 'both' (and its first before it starts)
 *   }
 *   ease (of the stretch that starts at a key): 'smooth' (a curve through the keys around it), 'linear' (straight, steady
 *   speed), 'stop' (slows into this key and out of it: no speed at the key), 'hold' (stays put until the next key),
 *   'bezier' (property tracks: a Bézier curve shaped by the keys' handles; camera and object tracks treat it as smooth).
 *   handles (property keys): hl / hr = [dt, dv…] from the key, left (dt ≤ 0) and right (dt ≥ 0); hm 'auto' (none stored: made
 *   from the keys around), 'vector' (pointing at the next / previous key), 'aligned' (a straight line through the key),
 *   'free'. Handles are kept from crossing each other in time, so a curve never runs backwards.
 *   cycle = {before, after}: 'hold' (the first / last value), 'repeat', 'pingpong' (forwards, then back), 'offset' (repeats,
 *   each time starting where the last one ended).
 *   targets: 'camera' (fov) · 'render' (exposure, fstop, focus) · 'light:<id>' (lumens, color, angle) · 'mat:<id>' (OpenPBR
 *   input names) · 'obj:<path a/b/c>' (location, rotation = XYZ angles in degrees, scale) · 'shape:<def id>' (shape-key
 *   values, AN.4) · 'bone:<rig id>/<bone>' (AN.2). Which of them the view and renders show is the app's: docs/apps/modelcraft-anim.md.
 *
 *   emptyAnim() · cleanAnim(untrusted) → anim | null · EASES · FPS · CYCLES · HANDLE_MODES · BLENDS · EXTENDS · TARGET_RE · PROP_RE
 *   setCameraKey(anim, t, cam, ease?) · setObjectKey(anim, path, name, t, m, ease?) · setPropKey(anim, target, prop, t, v,
 *     ease?, {name, rest}) · removeKey(anim, track, t) · moveKey(anim, track, t, t2) · setEase(anim, track, t, ease) ·
 *     removeTrack(anim, track) · retime(anim, length) · setHandle(anim, track, t, side, h) · setHandleMode(anim, track, t, mode)
 *     · setCycle(anim, track, before, after) · moveKeys / scaleKeys(anim, sel, …) · copyKeys(anim, sel) → clip ·
 *     pasteKeys(anim, clip, t) · toPropTracks(anim, i) (an object's matrix keys as location/rotation/scale curves)
 *     (each returns a new anim; track = 'camera', an index into objects, or 'p<i>' = props[i]; sel = [{track, t}])
 *   stashAction(anim, name) · addClip(anim, actionId, start) · setClip(anim, id, patch) · removeClip(anim, id)
 *   setShapeKey(anim, def, id, patch) · removeShapeKey(anim, def, id) · shapeKeys(anim, def) · shapeWeights(vals, def) → Map(id → w)
 *   setDriver(anim, target, prop, {expr, vars}) · removeDriver(anim, target, prop) · compileExpr(src) → {ok, names, run(vars), error}
 *   addRig(anim, def, name) → anim (rig id: the last of rigsOf) · rigsOf(anim, def?) · setRig(anim, id, patch) · removeRig(anim, id)
 *   addConstraint(anim, owner, type, patch) → anim (its id: the last one's) · setConstraint(anim, id, patch) ·
 *   removeConstraint(anim, id) · moveConstraint(anim, id, dir) · constraintsOf(anim, owner?) · CONSTRAINT_TYPES ·
 *   setRest(anim, path, m) (a placement's matrix before constraints or curves moved it; kept once)
 *   setPhysics(anim, patch) · setBody(anim, path, body | null) · bodyOf(anim, path) · cleanPhysics(x) · PHYSICS_DEFAULTS
 *   putKeys(anim, target, prop, keys [{t, v, ease}], {name, rest}) — many keys on one property track at once (bakes)
 *   setBone(anim, rig, bone) · removeBone(anim, rig, id) · setPose(anim, rig, bone, {location?, rotation?, scale?}) ·
 *   clearPose(anim, rig) · bonePose(vals, rig, bone) → {location, rotation, scale}
 *   cameraAt(anim, t) → cam | null · poseAt(track, t) → m · posesAt(anim, t) → [{path, key, m}] · valueAt(track, t) → v ·
 *     propsAt(anim, t, base?, readVar?) → Map('target|prop' → v) (shape-key values and drivers included; readVar(target,
 *     prop) → number[] gives what isn't animated, for drivers) · findProp(anim, target, prop) → index | -1
 *   keyTimes(anim) → sorted times · nextKey(anim, t, dir) → t | null · frameCount(anim, fps?) · frameTime(i, fps)
 *   channels(anim) → [{track, comp, target, prop, name}] · sampleChannel(track, comp, t0, t1, n) · handlePoints(track, i)
 *   fromScenes(scenes, {move, hold}) → camera keys, the scenes in order (the walkthrough video, WALK)
 *   pathKey(path) → 'a/b/c' · decompose(m) → {t, q, s} · compose({t, q, s}) → m · slerp(a, b, k) ·
 *     eulerToQuat(e°) · quatToEuler(q, near?) → e° · matrixToTRS(m, near?) → {location, rotation, scale} · trsToMatrix(trs)
 *
 * Times are seconds, kept to the millisecond. A key at the same time as another on its track replaces it.
 */

export const FORMAT = 'cadcraft-anim';
export const EASES = ['smooth', 'linear', 'stop', 'hold', 'bezier'];
export const FPS = [24, 25, 30, 60];
export const CYCLES = ['hold', 'repeat', 'pingpong', 'offset'];
export const HANDLE_MODES = ['auto', 'vector', 'aligned', 'free'];
export const BLENDS = ['replace', 'add'];
export const EXTENDS = ['none', 'forward', 'both'];
export const LIMITS = { length: 3600, keys: 2000, tracks: 500, path: 32, size: 4, actions: 50, clips: 200, value: 1e9, shapes: 200, drivers: 200, expr: 400, vars: 16, rigs: 20, bones: 256 };
/** What a property track may point at (see the header); ids are short words, paths are instance ids. */
export const TARGET_RE = /^(?:camera|render|light:[A-Za-z0-9_-]{1,40}|mat:[A-Za-z0-9_.:-]{1,80}|obj:\d{1,16}(?:\/\d{1,16}){0,31}|shape:[A-Za-z0-9_-]{1,40}|bone:[A-Za-z0-9_-]{1,40}\/[A-Za-z0-9_.-]{1,64}|cns:n\d{1,3})$/;
export const PROP_RE = /^[a-z][a-z0-9_]{0,40}$/;

const r3 = (x) => Math.round(x * 1000) / 1000;
const fin = (x) => typeof x === 'number' && Number.isFinite(x);
const isPt = (p) => Array.isArray(p) && p.length === 3 && p.every((x) => fin(x) && Math.abs(x) < 1e9);
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const cleanName = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 80);
const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);

export function emptyAnim(length = 10, fps = 30) {
  return { format: FORMAT, version: 1, fps: FPS.includes(fps) ? fps : 30, length: clamp(r3(length), 0.5, LIMITS.length), camera: [], objects: [] };
}

export const pathKey = (path) => path.join('/');

function cleanCam(c) {
  if (!c || !isPt(c.eye) || !isPt(c.target)) return null;
  if (Math.hypot(c.eye[0] - c.target[0], c.eye[1] - c.target[1], c.eye[2] - c.target[2]) < 1e-9) return null;
  return {
    eye: c.eye.slice(), target: c.target.slice(),
    fov: fin(c.fov) ? clamp(c.fov, 10, 120) : 35, persp: c.persp !== false,
    height: fin(c.height) ? clamp(c.height, 1e-6, 1e7) : 10,
  };
}
const pick = (list, x, d) => (typeof x === 'string' && list.includes(x) ? x : d);
const cleanEase = (e) => pick(EASES, e, 'smooth');
const isMatrix = (m) => Array.isArray(m) && m.length === 16 && m.every((x) => fin(x) && Math.abs(x) < 1e9);
const isVec = (v, n) => Array.isArray(v) && v.length >= 1 && v.length <= LIMITS.size && (n === undefined || v.length === n) && v.every((x) => fin(x) && Math.abs(x) < LIMITS.value);

function sortKeys(keys) {
  keys.sort((a, b) => a.t - b.t);
  const out = [];
  for (const k of keys) { if (out.length && out[out.length - 1].t === k.t) out[out.length - 1] = k; else out.push(k); }
  return out;
}
/** A track's cycles, or undefined when both ends hold (nothing stored). */
function cleanCycle(c) {
  if (!c || typeof c !== 'object') return undefined;
  const before = pick(CYCLES, c.before, 'hold'), after = pick(CYCLES, c.after, 'hold');
  return before === 'hold' && after === 'hold' ? undefined : { before, after };
}
const cleanHandle = (h, n, side) => (Array.isArray(h) && h.length === n + 1 && h.every((x) => fin(x) && Math.abs(x) < LIMITS.value) && (side < 0 ? h[0] <= 0 : h[0] >= 0) ? h.slice() : undefined);
function cleanPropKey(k, n, time) {
  const t = time(k && k.t);
  if (t === null || !isVec(k.v, n)) return null;
  const out = { t, v: k.v.slice(), ease: cleanEase(k.ease) };
  const hm = pick(HANDLE_MODES, k.hm, 'auto');
  if (hm !== 'auto') out.hm = hm;
  if (hm === 'aligned' || hm === 'free') {
    const hl = cleanHandle(k.hl, n, -1), hr = cleanHandle(k.hr, n, 1);
    if (hl) out.hl = hl;
    if (hr) out.hr = hr;
  }
  return out;
}
function cleanPropTrack(p, time) {
  if (!p || typeof p.target !== 'string' || !TARGET_RE.test(p.target) || typeof p.prop !== 'string' || !PROP_RE.test(p.prop)) return null;
  const first = Array.isArray(p.keys) ? p.keys.find((k) => k && isVec(k.v)) : null;
  if (!first) return null;
  const n = first.v.length, ks = [];
  for (const k of p.keys.slice(0, LIMITS.keys)) { const c = cleanPropKey(k, n, time); if (c) ks.push(c); }
  if (!ks.length) return null;
  const out = { target: p.target, prop: p.prop, name: cleanName(p.name), keys: sortKeys(ks) };
  const cy = cleanCycle(p.cycle);
  if (cy) out.cycle = cy;
  return out;
}
const isPath = (p) => Array.isArray(p) && p.length && p.length <= LIMITS.path && p.every((x) => Number.isInteger(x) && x >= 0);
function cleanObjects(list, time) {
  const out = [], seen = new Set();
  for (const o of (Array.isArray(list) ? list : []).slice(0, LIMITS.tracks)) {
    if (!o || !isPath(o.path)) continue;
    const key = pathKey(o.path);
    if (seen.has(key)) continue;
    const ks = [];
    for (const k of (Array.isArray(o.keys) ? o.keys : []).slice(0, LIMITS.keys)) {
      const t = time(k && k.t);
      if (t !== null && k && isMatrix(k.m)) ks.push({ t, m: k.m.slice(), ease: cleanEase(k.ease) });
    }
    if (!ks.length) continue;
    seen.add(key);
    const tr = { path: o.path.slice(), name: cleanName(o.name), keys: sortKeys(ks) };
    const cy = cleanCycle(o.cycle);
    if (cy) tr.cycle = cy;
    out.push(tr);
  }
  return out;
}
function cleanProps(list, time) {
  const out = [], seen = new Set();
  for (const p of (Array.isArray(list) ? list : []).slice(0, LIMITS.tracks)) {
    const c = cleanPropTrack(p, time);
    if (!c || seen.has(c.target + '|' + c.prop)) continue;
    seen.add(c.target + '|' + c.prop);
    out.push(c);
  }
  return out;
}
const ID_RE = /^[a-z][a-z0-9]{0,15}$/;

/** A file's animation, checked (it is untrusted): unknown keys dropped, numbers range-checked, keys sorted. null = nothing usable. */
export function cleanAnim(a) {
  if (!a || typeof a !== 'object' || a.format !== FORMAT || a.version !== 1) return null;
  const out = emptyAnim(fin(a.length) ? a.length : 10, a.fps);
  const L = out.length;
  const time = (t) => (fin(t) && t >= 0 && t <= L + 1e-9 ? r3(t) : null);
  if (Array.isArray(a.camera)) {
    const ks = [];
    for (const k of a.camera.slice(0, LIMITS.keys)) {
      const t = time(k && k.t), cam = k && cleanCam(k.cam);
      if (t !== null && cam) ks.push({ t, cam, ease: cleanEase(k.ease) });
    }
    out.camera = sortKeys(ks);
  }
  out.objects = cleanObjects(a.objects, time);
  // 0.7 AN.1: written only when there is something, so a file without them reads back as it was
  const props = cleanProps(a.props, time);
  if (props.length) out.props = props;
  const cy = cleanCycle(a.cameraCycle);
  if (cy) out.cameraCycle = cy;
  if (Array.isArray(a.rests)) {
    const rs = [], seen = new Set();
    for (const r of a.rests.slice(0, LIMITS.tracks)) if (r && isPath(r.path) && isMatrix(r.m) && !seen.has(pathKey(r.path))) { seen.add(pathKey(r.path)); rs.push({ path: r.path.slice(), m: r.m.slice() }); }
    if (rs.length) out.rests = rs;
  }
  // 0.7 AN.4: shape keys and drivers
  if (Array.isArray(a.shapes)) {
    const out2 = [], defs = new Set();
    for (const sh of a.shapes.slice(0, LIMITS.tracks)) {
      if (!sh || typeof sh.def !== 'string' || !DEF_RE.test(sh.def) || defs.has(sh.def) || !Array.isArray(sh.keys)) continue;
      const keys = [], ids = new Set();
      for (const k of sh.keys.slice(0, LIMITS.shapes)) { const c = cleanShapeKey(k); if (c && !ids.has(c.id)) { ids.add(c.id); keys.push(c); } }
      if (!keys.length) continue;
      defs.add(sh.def);
      out2.push({ def: sh.def, keys });
    }
    if (out2.length) out.shapes = out2;
  }
  if (Array.isArray(a.rigs)) {
    const rs = [], ids = new Set();
    for (const r of a.rigs.slice(0, LIMITS.rigs)) { const c = cleanRig(r); if (c && !ids.has(c.id)) { ids.add(c.id); rs.push(c); } }
    if (rs.length) out.rigs = rs;
  }
  if (Array.isArray(a.constraints)) {
    const cs = [], ids = new Set();
    for (const c of a.constraints.slice(0, LIMITS.tracks)) { const x = cleanConstraint(c); if (x && !ids.has(x.id)) { ids.add(x.id); cs.push(x); } }
    if (cs.length) out.constraints = cs;
  }
  const ph = cleanPhysics(a.physics);
  if (ph) out.physics = ph;
  if (Array.isArray(a.drivers)) {
    const ds = [], seen = new Set();
    for (const d of a.drivers.slice(0, LIMITS.drivers)) { const c = cleanDriver(d); if (c && !seen.has(c.target + '|' + c.prop)) { seen.add(c.target + '|' + c.prop); ds.push(c); } }
    if (ds.length) out.drivers = ds;
  }
  if (Array.isArray(a.actions)) {
    const acts = [], ids = new Set();
    const anyTime = (t) => (fin(t) && t >= 0 && t <= LIMITS.length ? r3(t) : null);   // an action's keys are its own times
    for (const x of a.actions.slice(0, LIMITS.actions)) {
      if (!x || typeof x.id !== 'string' || !ID_RE.test(x.id) || ids.has(x.id)) continue;
      const act = { id: x.id, name: cleanName(x.name), objects: cleanObjects(x.objects, anyTime), props: cleanProps(x.props, anyTime).filter((p) => p.target !== 'camera' && p.target !== 'render') };
      if (!act.objects.length && !act.props.length) continue;
      ids.add(x.id);
      acts.push(act);
    }
    if (acts.length) out.actions = acts;
    if (Array.isArray(a.clips) && acts.length) {
      const clips = [], cids = new Set();
      for (const c of a.clips.slice(0, LIMITS.clips)) {
        const act = c && acts.find((x) => x.id === c.action);
        if (!act || typeof c.id !== 'string' || !ID_RE.test(c.id) || cids.has(c.id)) continue;
        cids.add(c.id);
        clips.push(cleanClip(c, act));
      }
      if (clips.length) out.clips = clips;
    }
  }
  return out;
}
function actionRange(act) {
  let lo = Infinity, hi = -Infinity;
  for (const tr of [...act.objects, ...act.props]) for (const k of tr.keys) { lo = Math.min(lo, k.t); hi = Math.max(hi, k.t); }
  return lo <= hi ? [lo, hi] : [0, 0];
}
function cleanClip(c, act) {
  const [lo, hi] = actionRange(act);
  let from = fin(c.from) ? clamp(r3(c.from), lo, hi) : lo, to = fin(c.to) ? clamp(r3(c.to), lo, hi) : hi;
  if (to < from) [from, to] = [to, from];
  return {
    id: c.id, name: cleanName(c.name) || act.name, action: act.id,
    start: fin(c.start) ? clamp(r3(c.start), 0, LIMITS.length) : 0, from, to,
    scale: fin(c.scale) ? clamp(c.scale, 0.01, 100) : 1, repeat: fin(c.repeat) ? clamp(c.repeat, 0.01, 1000) : 1,
    blend: pick(BLENDS, c.blend, 'replace'), influence: fin(c.influence) ? clamp(c.influence, 0, 1) : 1, mute: c.mute === true,
    extend: pick(EXTENDS, c.extend, 'forward'),
  };
}

// ---- editing (each returns a new animation; the input is left alone) ----
const copyTrack = (o) => ({ ...o, keys: o.keys.map((k) => ({ ...k })) });
const copy = (a) => {
  const b = { ...a, camera: a.camera.map((k) => ({ ...k })), objects: a.objects.map(copyTrack) };
  if (a.props) b.props = a.props.map(copyTrack);
  if (a.rests) b.rests = a.rests.map((r) => ({ ...r }));
  if (a.actions) b.actions = a.actions.map((x) => ({ ...x, objects: x.objects.map(copyTrack), props: x.props.map(copyTrack) }));
  if (a.clips) b.clips = a.clips.map((c) => ({ ...c }));
  return b;
};
const grow = (a, t) => { if (t > a.length) a.length = clamp(r3(t), 0.5, LIMITS.length); };
const tidy = (a) => { if (a.props && !a.props.length) delete a.props; if (a.rests && !a.rests.length) delete a.rests; if (a.actions && !a.actions.length) { delete a.actions; delete a.clips; } if (a.clips && !a.clips.length) delete a.clips; return a; };

export function setCameraKey(anim, t, cam, ease) {
  const c = cleanCam(cam);
  if (!c || !fin(t) || t < 0 || t > LIMITS.length) return anim;
  const a = copy(anim), at = r3(t);
  const old = a.camera.find((k) => k.t === at);
  a.camera = sortKeys([...a.camera, { t: at, cam: c, ease: cleanEase(ease ?? (old ? old.ease : 'smooth')) }]);
  grow(a, at);
  return a;
}

export function setObjectKey(anim, path, name, t, m, ease) {
  if (!Array.isArray(path) || !path.length || !isMatrix(m) || !fin(t) || t < 0 || t > LIMITS.length) return anim;
  const a = copy(anim), at = r3(t), key = pathKey(path);
  let o = a.objects.find((x) => pathKey(x.path) === key);
  if (!o) { if (a.objects.length >= LIMITS.tracks) return anim; o = { path: path.slice(), name: cleanName(name), keys: [] }; a.objects.push(o); }
  else if (name) o.name = cleanName(name);
  const old = o.keys.find((k) => k.t === at);
  o.keys = sortKeys([...o.keys, { t: at, m: m.slice(), ease: cleanEase(ease ?? (old ? old.ease : 'smooth')) }]);
  grow(a, at);
  return a;
}

export const findProp = (anim, target, prop) => (anim.props ? anim.props.findIndex((p) => p.target === target && p.prop === prop) : -1);
/**
 * A key on a property track (made when missing). `v` is a number or a list of 1–4 numbers, the same count on every key of a
 * track. `rest` (obj: targets): the placement's matrix before it moved, kept once per placement so that channels without a
 * track (say, its scale when only its place moves) stay as they were.
 */
export function setPropKey(anim, target, prop, t, v, ease, { name, rest } = {}) {
  const vec = typeof v === 'number' ? [v] : v;
  if (typeof target !== 'string' || !TARGET_RE.test(target) || typeof prop !== 'string' || !PROP_RE.test(prop) || !isVec(vec) || !fin(t) || t < 0 || t > LIMITS.length) return anim;
  const a = copy(anim), at = r3(t);
  a.props = a.props || [];
  let tr = a.props.find((p) => p.target === target && p.prop === prop);
  if (tr && tr.keys[0].v.length !== vec.length) return anim;
  if (!tr) { if (a.props.length >= LIMITS.tracks) return anim; tr = { target, prop, name: cleanName(name), keys: [] }; a.props.push(tr); }
  else if (name) tr.name = cleanName(name);
  const old = tr.keys.find((k) => k.t === at);
  const k = { t: at, v: vec.slice(), ease: cleanEase(ease ?? (old ? old.ease : 'bezier')) };
  if (old && old.hm) { k.hm = old.hm; if (old.hl) k.hl = old.hl.slice(); if (old.hr) k.hr = old.hr.slice(); }
  tr.keys = sortKeys([...tr.keys, k]);
  if (target.startsWith('obj:') && isMatrix(rest)) {
    const path = target.slice(4).split('/').map(Number);
    a.rests = a.rests || [];
    if (!a.rests.some((r) => pathKey(r.path) === pathKey(path))) a.rests.push({ path, m: rest.slice() });
  }
  grow(a, at);
  return a;
}

/** The keys of a track address: 'camera', an object index, or 'p<i>' (a property track). */
function trackOf(a, track) {
  if (track === 'camera') return { keys: a.camera, set: (ks) => { a.camera = ks; } };
  if (typeof track === 'string' && /^p\d+$/.test(track)) {
    const i = +track.slice(1), p = a.props && a.props[i];
    return p ? { keys: p.keys, tr: p, set: (ks) => { if (ks.length) p.keys = ks; else { a.props.splice(i, 1); tidy(a); } } } : null;
  }
  const o = a.objects[track];
  return o ? { keys: o.keys, tr: o, set: (ks) => { if (ks.length) o.keys = ks; else a.objects.splice(track, 1); } } : null;   // an object with no keys left no longer moves
}

export function removeKey(anim, track, t) {
  const a = copy(anim), x = trackOf(a, track);
  if (!x) return anim;
  x.set(x.keys.filter((k) => k.t !== r3(t)));
  return a;
}
export function moveKey(anim, track, t, t2) {
  const a = copy(anim), x = trackOf(a, track);
  if (!x || !fin(t2)) return anim;
  const k = x.keys.find((y) => y.t === r3(t));
  if (!k) return anim;
  k.t = r3(clamp(t2, 0, LIMITS.length));
  x.set(sortKeys(x.keys));
  grow(a, k.t);
  return a;
}
export function setEase(anim, track, t, ease) {
  const a = copy(anim), x = trackOf(a, track);
  const k = x && x.keys.find((y) => y.t === r3(t));
  if (!k) return anim;
  k.ease = cleanEase(ease);
  return a;
}
export function removeTrack(anim, track) {
  const a = copy(anim);
  if (track === 'camera') { a.camera = []; delete a.cameraCycle; }
  else if (typeof track === 'string' && /^p\d+$/.test(track)) { if (a.props) a.props.splice(+track.slice(1), 1); tidy(a); }
  else if (a.objects[track]) a.objects.splice(track, 1);
  return a;
}
/** Stretch or squeeze every key to a new length (seconds). */
export function retime(anim, length) {
  if (!fin(length)) return anim;
  const L = clamp(r3(length), 0.5, LIMITS.length), k = L / anim.length;
  const a = copy(anim);
  a.length = L;
  a.camera = sortKeys(a.camera.map((x) => ({ ...x, t: r3(x.t * k) })));
  const stretch = (x) => { const y = { ...x, t: r3(x.t * k) }; if (x.hl) y.hl = [x.hl[0] * k, ...x.hl.slice(1)]; if (x.hr) y.hr = [x.hr[0] * k, ...x.hr.slice(1)]; return y; };
  for (const o of a.objects) o.keys = sortKeys(o.keys.map(stretch));
  for (const p of a.props || []) p.keys = sortKeys(p.keys.map(stretch));
  for (const c of a.clips || []) { c.start = r3(c.start * k); c.scale = clamp(c.scale * k, 0.01, 100); }
  return a;
}
/** A property key's handle: side 'l' or 'r', h = [dt, dv…]. An auto or vector key becomes 'free'; an aligned key turns its other handle to match. */
export function setHandle(anim, track, t, side, h) {
  const a = copy(anim), x = trackOf(a, track);
  const k = x && x.tr && x.tr.keys && x.keys.find((y) => y.t === r3(t));
  if (!k || !k.v) return anim;
  const n = k.v.length, s = side === 'l' ? -1 : 1, c = cleanHandle(h, n, s);
  if (!c) return anim;
  const i = x.keys.indexOf(k), pts = handlePoints(x.tr, i);
  if (k.hm !== 'aligned') k.hm = 'free';
  if (!k.hl) k.hl = [pts.l[0] - k.t, ...pts.l[1].map((v, j) => v - k.v[j])];
  if (!k.hr) k.hr = [pts.r[0] - k.t, ...pts.r[1].map((v, j) => v - k.v[j])];
  const mine = side === 'l' ? 'hl' : 'hr', other = side === 'l' ? 'hr' : 'hl';
  k[mine] = c;
  if (k.hm === 'aligned' && Math.abs(c[0]) > 1e-9) {
    const ratio = Math.abs(k[other][0]) / Math.abs(c[0]);
    k[other] = c.map((x2) => -x2 * ratio);
  }
  return a;
}
/** A property key's handle mode ('auto', 'vector', 'aligned', 'free'); aligned and free keep the handles as they are now. */
export function setHandleMode(anim, track, t, mode) {
  const a = copy(anim), x = trackOf(a, track);
  const k = x && x.tr && x.tr.keys && x.keys.find((y) => y.t === r3(t));
  if (!k || !k.v || !HANDLE_MODES.includes(mode)) return anim;
  const i = x.keys.indexOf(k), pts = handlePoints(x.tr, i);
  delete k.hl; delete k.hr; delete k.hm;
  if (mode === 'aligned' || mode === 'free') {
    k.hm = mode;
    k.hl = [pts.l[0] - k.t, ...pts.l[1].map((v, j) => v - k.v[j])];
    k.hr = [pts.r[0] - k.t, ...pts.r[1].map((v, j) => v - k.v[j])];
  } else if (mode === 'vector') k.hm = 'vector';
  return a;
}
export function setCycle(anim, track, before, after) {
  const a = copy(anim), cy = cleanCycle({ before, after });
  if (track === 'camera') { if (cy) a.cameraCycle = cy; else delete a.cameraCycle; return a; }
  const x = trackOf(a, track);
  if (!x || !x.tr) return anim;
  if (cy) x.tr.cycle = cy; else delete x.tr.cycle;
  return a;
}
function bySel(a, sel) {
  const m = new Map();
  for (const s of sel || []) { const x = trackOf(a, s.track); if (!x) continue; const k = String(s.track); if (!m.has(k)) m.set(k, { x, ts: new Set() }); m.get(k).ts.add(r3(s.t)); }
  return [...m.values()];
}
/** Move the chosen keys (on any tracks) by dt seconds; keys they land on are replaced. */
export function moveKeys(anim, sel, dt) {
  if (!fin(dt)) return anim;
  const a = copy(anim);
  for (const { x, ts } of bySel(a, sel)) {
    for (const k of x.keys) if (ts.has(k.t)) { k.t = r3(clamp(k.t + dt, 0, LIMITS.length)); grow(a, k.t); }
    x.keys.sort((p, q) => p.t - q.t);
    // a moved key wins over one it lands on
    const moved = new Set(x.keys.filter((k) => ts.has(r3(k.t - dt)) || ts.has(k.t)));
    const out = [];
    for (const k of x.keys) { const last = out[out.length - 1]; if (last && last.t === k.t) { if (moved.has(k) || !moved.has(last)) out[out.length - 1] = k; } else out.push(k); }
    x.set(out);
  }
  return a;
}
/** Spread the chosen keys out from (or in towards) time `pivot` by factor f. */
export function scaleKeys(anim, sel, pivot, f) {
  if (!fin(f) || f <= 0 || !fin(pivot)) return anim;
  const a = copy(anim);
  for (const { x, ts } of bySel(a, sel)) {
    for (const k of x.keys) if (ts.has(k.t)) {
      k.t = r3(clamp(pivot + (k.t - pivot) * f, 0, LIMITS.length)); grow(a, k.t);
      if (k.hl) k.hl[0] *= f;
      if (k.hr) k.hr[0] *= f;
    }
    x.set(sortKeys(x.keys));
  }
  return a;
}
const trackId = (a, track) => {
  if (track === 'camera') return { kind: 'camera' };
  if (typeof track === 'string' && /^p\d+$/.test(track)) { const p = a.props && a.props[+track.slice(1)]; return p ? { kind: 'prop', target: p.target, prop: p.prop, name: p.name } : null; }
  const o = a.objects[track];
  return o ? { kind: 'object', path: o.path.slice(), name: o.name } : null;
};
/** The chosen keys, times from the earliest of them (for pasting at another time). */
export function copyKeys(anim, sel) {
  const groups = new Map();
  let t0 = Infinity;
  for (const s of sel || []) {
    const x = trackOf(anim, s.track), id = trackId(anim, s.track), k = x && x.keys.find((y) => y.t === r3(s.t));
    if (!k || !id) continue;
    const g = String(s.track);
    if (!groups.has(g)) groups.set(g, { id, keys: [] });
    groups.get(g).keys.push(JSON.parse(JSON.stringify(k)));
    t0 = Math.min(t0, k.t);
  }
  const tracks = [...groups.values()].map((g) => ({ ...g.id, keys: g.keys.map((k) => ({ ...k, t: r3(k.t - t0) })) }));
  return { format: 'cadcraft-keys', tracks };
}
/** Keys copied with copyKeys, put down from time t (onto the same tracks, made when missing). */
export function pasteKeys(anim, clip, t) {
  if (!clip || clip.format !== 'cadcraft-keys' || !Array.isArray(clip.tracks) || !fin(t)) return anim;
  let a = anim;
  for (const tr of clip.tracks.slice(0, LIMITS.tracks)) for (const k of (Array.isArray(tr.keys) ? tr.keys : []).slice(0, LIMITS.keys)) {
    if (!k || !fin(k.t)) continue;
    const at = t + k.t;
    if (tr.kind === 'camera') a = setCameraKey(a, at, k.cam, k.ease);
    else if (tr.kind === 'object' && isPath(tr.path)) a = setObjectKey(a, tr.path, tr.name, at, k.m, k.ease);
    else if (tr.kind === 'prop') {
      a = setPropKey(a, tr.target, tr.prop, at, k.v, k.ease, { name: tr.name });
      if (k.hm && k.hm !== 'auto') { const i = findProp(a, tr.target, tr.prop); if (i >= 0) { const p = a.props[i], key = p.keys.find((y) => y.t === r3(at)); const c = cleanPropKey(k, p.keys[0].v.length, () => key.t); if (c) Object.assign(key, c); } }
    }
  }
  return a;
}

// ---- reading ----
export function keyTimes(anim) {
  const s = new Set(anim.camera.map((k) => k.t));
  for (const o of anim.objects) for (const k of o.keys) s.add(k.t);
  for (const p of anim.props || []) for (const k of p.keys) s.add(k.t);
  return [...s].sort((a, b) => a - b);
}
/** The next key after t (dir 1) or before it (dir -1), on any track; null when there is none. */
export function nextKey(anim, t, dir = 1) {
  const ts = keyTimes(anim);
  if (dir > 0) return ts.find((x) => x > t + 1e-6) ?? null;
  for (let i = ts.length - 1; i >= 0; i--) if (ts[i] < t - 1e-6) return ts[i];
  return null;
}
export const frameCount = (anim, fps = anim.fps) => Math.max(1, Math.round(anim.length * fps) + 1);
export const frameTime = (i, fps) => i / fps;

/** Where t falls among the keys: {i, s} = between keys i and i+1 at s ∈ [0, 1] of the way (before the first / after the last: clamped). */
function locate(keys, t) {
  if (t <= keys[0].t) return { i: 0, s: 0 };
  const n = keys.length;
  if (t >= keys[n - 1].t) return { i: n - 1, s: 0 };
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (keys[mid].t <= t) lo = mid; else hi = mid; }
  return { i: lo, s: (t - keys[lo].t) / (keys[lo + 1].t - keys[lo].t) };
}

/**
 * Time on a cycling track: t mapped into the keys' span, and n = how many whole spans away it is (for 'offset').
 * → {t, n} (n 0 = inside, or held).
 */
function cycleTime(keys, t, cyc) {
  const n = keys.length;
  if (!cyc || n < 2) return { t, n: 0 };
  const t0 = keys[0].t, t1 = keys[n - 1].t, P = t1 - t0;
  if (P <= 1e-9) return { t, n: 0 };
  const mode = t > t1 ? cyc.after : t < t0 ? cyc.before : 'hold';
  if (mode === 'hold') return { t, n: 0 };
  const x = (t - t0) / P, k = Math.floor(x), f = x - k;
  if (mode === 'pingpong') return { t: k % 2 ? t1 - f * P : t0 + f * P, n: 0 };
  return { t: t0 + f * P, n: mode === 'offset' ? k : 0 };
}

/**
 * The speed of a value at key i (per second): a curve through its neighbours (Catmull–Rom on uneven times), nothing at the
 * ends and at 'stop' keys. `get(k)` reads the value (an array) out of a key.
 */
function tangent(keys, i, get) {
  const k = keys[i];
  // a key that then holds still is arrived at slowly too, as is one after a hold
  if (i === 0 || i === keys.length - 1 || k.ease === 'stop' || k.ease === 'hold' || keys[i - 1].ease === 'hold') return null;
  const a = get(keys[i - 1]), b = get(keys[i + 1]), dt = keys[i + 1].t - keys[i - 1].t;
  return a.map((x, j) => (b[j] - x) / dt);
}

/** A value between keys i and i+1 at s: Hermite with the keys' speeds, a straight line, or held. */
function between(keys, i, s, get) {
  const k0 = keys[i], k1 = keys[i + 1], p0 = get(k0), p1 = get(k1);
  if (k0.ease === 'hold') return p0.slice();
  if (k0.ease === 'linear') return p0.map((x, j) => x + (p1[j] - x) * s);
  const dt = k1.t - k0.t;
  const m0 = k0.ease === 'stop' ? null : tangent(keys, i, get);
  const m1 = k1.ease === 'stop' ? null : tangent(keys, i + 1, get);
  const s2 = s * s, s3 = s2 * s;
  const h00 = 2 * s3 - 3 * s2 + 1, h10 = s3 - 2 * s2 + s, h01 = -2 * s3 + 3 * s2, h11 = s3 - s2;
  return p0.map((x, j) => h00 * x + h01 * p1[j] + h10 * dt * (m0 ? m0[j] : 0) + h11 * dt * (m1 ? m1[j] : 0));
}

/** How far along (0…1) a stretch starting at a key is at s, for values that can't be curved through (rotations, switches). */
function eased(ease, s) {
  if (ease === 'hold') return 0;
  if (ease === 'linear') return s;
  return s * s * (3 - 2 * s);
}

// ---- property curves (0.7 AN.1) ----
const getV = (k) => k.v;
/**
 * The Bézier handles of property key i, as absolute points: {l: [t, v[]], r: [t, v[]]}. Auto handles lie along the
 * Catmull–Rom speed (flat at the ends and at stop/hold keys), a third of the way to the neighbour; vector handles point at
 * the neighbour; stored ones are used as they are. Each handle is kept within its stretch.
 */
export function handlePoints(track, i) {
  const keys = track.keys, k = keys[i], n = k.v.length;
  const prev = keys[i - 1], next = keys[i + 1];
  const dl = prev ? k.t - prev.t : 0, dr = next ? next.t - k.t : 0;
  const m = k.hm === 'vector' ? null : tangent(keys, i, getV);
  const side = (other, d, s) => {
    if ((k.hm === 'free' || k.hm === 'aligned') && k[s < 0 ? 'hl' : 'hr']) {
      const h = k[s < 0 ? 'hl' : 'hr'];
      return [k.t + h[0], k.v.map((v, j) => v + h[j + 1])];
    }
    if (!other) return [k.t + (s * d) / 3, k.v.slice()];
    if (k.hm === 'vector') return [k.t + (s * d) / 3, k.v.map((v, j) => v + (other.v[j] - v) / 3)];
    return [k.t + (s * d) / 3, k.v.map((v, j) => v + (s * (m ? m[j] : 0) * d) / 3)];
  };
  void n;
  return { l: side(prev, dl, -1), r: side(next, dr, 1) };
}
/** One coordinate of a cubic Bézier at u. */
const bz = (a, b, c, d, u) => { const w = 1 - u; return w * w * w * a + 3 * w * w * u * b + 3 * w * u * u * c + u * u * u * d; };
/** A property value between keys i and i+1 at time t (the keys' eases; 'bezier' through the handles). */
function propBetween(keys, i, t, s, track) {
  const k0 = keys[i], k1 = keys[i + 1];
  if (k0.ease !== 'bezier') return between(keys, i, s, getV);
  const h0 = handlePoints(track, i).r, h1 = handlePoints(track, i + 1).l;
  const t0 = k0.t, t3 = k1.t, D = t3 - t0;
  // keep the handles from crossing in time (the curve must not run backwards): shrink both by the same factor
  let a = clamp(h0[0] - t0, 0, D), b = clamp(t3 - h1[0], 0, D);
  const f = a + b > D ? D / (a + b) : 1;
  const ra = (h0[0] - t0) > 0 ? (a * f) / (h0[0] - t0) : 0, rb = (t3 - h1[0]) > 0 ? (b * f) / (t3 - h1[0]) : 0;
  a *= f; b *= f;
  const t1 = t0 + a, t2 = t3 - b;
  // solve x(u) = t (x rises with u): bisection, a few steps of it
  let lo = 0, hi = 1, u = s;
  for (let it = 0; it < 40; it++) { u = (lo + hi) / 2; if (bz(t0, t1, t2, t3, u) < t) lo = u; else hi = u; }
  return k0.v.map((v0, j) => {
    const p1 = v0 + (h0[1][j] - v0) * ra, p2 = k1.v[j] + (h1[1][j] - k1.v[j]) * rb;
    return bz(v0, p1, p2, k1.v[j], u);
  });
}
/** A property track's value at time t (number[]), its cycles followed. */
export function valueAt(track, t) {
  const keys = track.keys;
  const c = cycleTime(keys, t, track.cycle);
  const { i, s } = locate(keys, c.t);
  let v = s === 0 || i === keys.length - 1 ? keys[i].v.slice() : propBetween(keys, i, c.t, s, track);
  if (c.n) { const a = keys[0].v, b = keys[keys.length - 1].v; v = v.map((x, j) => x + c.n * (b[j] - a[j])); }
  return v;
}
/** Every number a property track holds, one per curve: [{track: 'p<i>', comp, target, prop, name}] (the graph editor's list). */
export function channels(anim) {
  const out = [];
  (anim.props || []).forEach((p, i) => { for (let c = 0; c < p.keys[0].v.length; c++) out.push({ track: 'p' + i, comp: c, target: p.target, prop: p.prop, name: p.name }); });
  return out;
}
/** n values of one curve from t0 to t1 (for drawing). */
export function sampleChannel(track, comp, t0, t1, n) {
  const out = new Float64Array(Math.max(2, n | 0));
  for (let i = 0; i < out.length; i++) out[i] = valueAt(track, t0 + ((t1 - t0) * i) / (out.length - 1))[comp];
  return out;
}

/** The camera at time t (seconds), or null when the camera has no keys. A 'camera' fov track sets the lens. */
export function cameraAt(anim, t) {
  const keys = anim.camera;
  if (!keys.length) return null;
  const cyc = cycleTime(keys, t, anim.cameraCycle);
  const { i, s } = locate(keys, cyc.t);
  let cam;
  if (s === 0 || i === keys.length - 1) cam = cleanCam(keys[i].cam);
  else {
    const v = between(keys, i, s, (k) => [...k.cam.eye, ...k.cam.target, k.cam.fov, Math.log(k.cam.height)]);
    const k = eased(keys[i].ease, s), a = keys[i].cam, b = keys[i + 1].cam;
    cam = cleanCam({ eye: v.slice(0, 3), target: v.slice(3, 6), fov: clamp(v[6], 10, 120), persp: k < 0.5 ? a.persp : b.persp, height: clamp(Math.exp(v[7]), 1e-6, 1e7) }) || cleanCam(a);
  }
  if (cyc.n) {
    const a = keys[0].cam, b = keys[keys.length - 1].cam;
    for (let j = 0; j < 3; j++) { const d = cyc.n * (b.eye[j] - a.eye[j]); cam.eye[j] += d; cam.target[j] += cyc.n * (b.target[j] - a.target[j]); }
  }
  const f = findProp(anim, 'camera', 'fov');
  if (f >= 0) cam.fov = clamp(valueAt(anim.props[f], t)[0], 10, 120);
  return cam;
}

// ---- matrices: column-major 4×4 (three.js / glTF layout) ----
/** A placement matrix as position, rotation (unit quaternion x, y, z, w) and scale (a mirror shows as a negative x scale). */
export function decompose(m) {
  const col = (c) => [m[c * 4], m[c * 4 + 1], m[c * 4 + 2]];
  let x = col(0), y = col(1), z = col(2);
  let sx = Math.hypot(...x), sy = Math.hypot(...y), sz = Math.hypot(...z);
  const det = x[0] * (y[1] * z[2] - y[2] * z[1]) - x[1] * (y[0] * z[2] - y[2] * z[0]) + x[2] * (y[0] * z[1] - y[1] * z[0]);
  if (det < 0) sx = -sx;
  const n = (v, s) => (Math.abs(s) > 1e-12 ? v.map((u) => u / s) : v);
  x = n(x, sx); y = n(y, sy); z = n(z, sz);
  // rotation matrix → quaternion (Shepperd)
  const [m00, m10, m20] = x, [m01, m11, m21] = y, [m02, m12, m22] = z;
  const tr = m00 + m11 + m22;
  let q;
  if (tr > 0) { const S = Math.sqrt(tr + 1) * 2; q = [(m21 - m12) / S, (m02 - m20) / S, (m10 - m01) / S, 0.25 * S]; }
  else if (m00 > m11 && m00 > m22) { const S = Math.sqrt(1 + m00 - m11 - m22) * 2; q = [0.25 * S, (m01 + m10) / S, (m02 + m20) / S, (m21 - m12) / S]; }
  else if (m11 > m22) { const S = Math.sqrt(1 + m11 - m00 - m22) * 2; q = [(m01 + m10) / S, 0.25 * S, (m12 + m21) / S, (m02 - m20) / S]; }
  else { const S = Math.sqrt(1 + m22 - m00 - m11) * 2; q = [(m02 + m20) / S, (m12 + m21) / S, 0.25 * S, (m10 - m01) / S]; }
  const ql = Math.hypot(...q) || 1;
  return { t: [m[12], m[13], m[14]], q: q.map((v) => v / ql), s: [sx, sy, sz] };
}
export function compose({ t, q, s }) {
  const [x, y, z, w] = q;
  const xx = x * x, yy = y * y, zz = z * z, xy = x * y, xz = x * z, yz = y * z, wx = w * x, wy = w * y, wz = w * z;
  return [
    (1 - 2 * (yy + zz)) * s[0], 2 * (xy + wz) * s[0], 2 * (xz - wy) * s[0], 0,
    2 * (xy - wz) * s[1], (1 - 2 * (xx + zz)) * s[1], 2 * (yz + wx) * s[1], 0,
    2 * (xz + wy) * s[2], 2 * (yz - wx) * s[2], (1 - 2 * (xx + yy)) * s[2], 0,
    t[0], t[1], t[2], 1,
  ];
}
/** Spherical blend of two unit quaternions, the short way round. */
export function slerp(a, b, k) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  const bb = d < 0 ? b.map((v) => -v) : b;
  d = Math.abs(d);
  if (d > 0.9995) { const r = a.map((v, i) => v + (bb[i] - v) * k), l = Math.hypot(...r) || 1; return r.map((v) => v / l); }
  const th = Math.acos(Math.min(1, d)), sn = Math.sin(th);
  const wa = Math.sin((1 - k) * th) / sn, wb = Math.sin(k * th) / sn;
  return a.map((v, i) => v * wa + bb[i] * wb);
}
const qmul = (a, b) => [
  a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
  a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
  a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
  a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2],
];
const DEG = Math.PI / 180;
/** XYZ angles in degrees (turned about X first, then Y, then Z, all in the parent's axes) → a unit quaternion. */
export function eulerToQuat(e) {
  const h = (a) => (a * DEG) / 2;
  const qx = [Math.sin(h(e[0])), 0, 0, Math.cos(h(e[0]))], qy = [0, Math.sin(h(e[1])), 0, Math.cos(h(e[1]))], qz = [0, 0, Math.sin(h(e[2])), Math.cos(h(e[2]))];
  return qmul(qz, qmul(qy, qx));
}
/** A unit quaternion → XYZ angles in degrees; `near` (angles) picks, of the equal answers, the one closest to it (keys in a row). */
export function quatToEuler(q, near) {
  const [x, y, z, w] = q;
  const r00 = 1 - 2 * (y * y + z * z), r10 = 2 * (x * y + w * z), r20 = 2 * (x * z - w * y);
  const r21 = 2 * (y * z + w * x), r22 = 1 - 2 * (x * x + y * y), r01 = 2 * (x * y - w * z), r11 = 1 - 2 * (x * x + z * z);
  let e;
  const sy = clamp(-r20, -1, 1);
  if (Math.abs(sy) < 0.999999) e = [Math.atan2(r21, r22), Math.asin(sy), Math.atan2(r10, r00)];
  else e = [Math.atan2(r01 * sy, r11), Math.asin(sy), 0];   // straight up or down: X and Z turn about one axis
  e = e.map((a) => a / DEG);
  if (!near) return e;
  // the other answer for the same turn, then whole turns, whichever lies nearest
  const alt = [e[0] + 180, 180 - e[1], e[2] + 180];
  const wrap = (a, n) => a + 360 * Math.round((n - a) / 360);
  const fit = (c) => c.map((a, j) => wrap(a, near[j]));
  const A = fit(e), B = fit(alt);
  const dist = (c) => c.reduce((s, a, j) => s + Math.abs(a - near[j]), 0);
  return dist(B) + 1e-9 < dist(A) ? B : A;
}
/** A placement matrix → {location, rotation (XYZ degrees), scale}; `near` = the rotation of the key before (no flips). */
export function matrixToTRS(m, near) {
  const d = decompose(m);
  return { location: d.t, rotation: quatToEuler(d.q, near), scale: d.s };
}
export const trsToMatrix = ({ location, rotation, scale }) => compose({ t: location, q: eulerToQuat(rotation), s: scale });

/** One object's placement matrix at time t: its position follows the keys' curve, its turn and size blend between keys. */
export function poseAt(track, t) {
  const keys = track.keys;
  const cyc = cycleTime(keys, t, track.cycle);
  const { i, s } = locate(keys, cyc.t);
  let m;
  if (s === 0 || i === keys.length - 1) m = keys[i].m.slice();
  else {
    const d = (k) => (k._d || (Object.defineProperty(k, '_d', { value: decompose(k.m), enumerable: false }), k._d));
    const pos = between(keys, i, s, (k) => d(k).t);
    const k = eased(keys[i].ease, s), a = d(keys[i]), b = d(keys[i + 1]);
    const q = slerp(a.q, b.q, k);
    const sc = a.s.map((v, j) => v + (b.s[j] - v) * k);
    m = compose({ t: pos, q, s: sc });
  }
  if (cyc.n) { const a = keys[0].m, b = keys[keys.length - 1].m; for (let j = 12; j < 15; j++) m[j] += cyc.n * (b[j] - a[j]); }
  return m;
}

/** The time inside an action that clip c plays at timeline time t, or null when the clip isn't playing then. */
function clipLocal(c, t) {
  const span = c.to - c.from, L = Math.max(span, 1e-6) * c.scale * c.repeat;
  if (c.mute) return null;
  if (t < c.start - 1e-9) return c.extend === 'both' ? c.from : null;
  if (t > c.start + L + 1e-9) return c.extend === 'none' ? null : c.to;
  if (span <= 1e-9) return c.from;
  const x = (t - c.start) / c.scale;   // seconds of action played
  if (x >= span * c.repeat - 1e-9) return c.to;   // the last frame of the last repeat
  return c.from + (x % span);
}
const TRS = ['location', 'rotation', 'scale'];
const ID_TRS = { location: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] };
/** Poses and property values of one set of tracks (the timeline's own, or an action's) at time t → {poses: Map, props: Map}. */
function evalTracks(objects, props, t, rests) {
  const poses = new Map(), vals = new Map();
  for (const o of objects) poses.set(pathKey(o.path), { path: o.path, trs: null, m: poseAt(o, t) });
  const byObj = new Map();
  for (const p of props) {
    const v = valueAt(p, t);
    if (p.target.startsWith('obj:') && TRS.includes(p.prop) && v.length === 3) {
      const k = p.target.slice(4);
      if (!byObj.has(k)) byObj.set(k, {});
      byObj.get(k)[p.prop] = v;
    } else vals.set(p.target + '|' + p.prop, v);
  }
  for (const [k, parts] of byObj) {
    // channels without a track: from the matrix track at t, else the placement before it moved, else none
    const under = poses.get(k)?.m || rests.get(k);
    const base = under ? matrixToTRS(under, parts.rotation) : ID_TRS;
    const trs = { location: parts.location || base.location, rotation: parts.rotation || base.rotation, scale: parts.scale || base.scale };
    poses.set(k, { path: k.split('/').map(Number), trs, m: trsToMatrix(trs) });
  }
  return { poses, vals };
}
/** Everything animated at time t: the clips mixed in order, then the timeline's own tracks on top. → {poses: Map(key → {path, m}), vals: Map} */
function evaluate(anim, t, base, readVar) {
  const rests = new Map((anim.rests || []).map((r) => [pathKey(r.path), r.m]));
  const poses = new Map(), vals = new Map();
  const baseVal = (k) => vals.get(k) || (base && base(k)) || null;
  for (const c of anim.clips || []) {
    const lt = clipLocal(c, t);
    if (lt === null) continue;
    const act = anim.actions.find((x) => x.id === c.action);
    if (!act) continue;
    const r = evalTracks(act.objects, act.props, lt, rests), w = c.influence;
    for (const [k, p] of r.poses) {
      const under = poses.get(k)?.m || rests.get(k);
      if (!under || (c.blend === 'replace' && w >= 1)) { poses.set(k, { path: p.path, m: p.m }); continue; }
      const A = decompose(under), B = decompose(p.m);
      if (c.blend === 'add') {
        // what the action adds: its move away from its own first pose
        const tr = act.objects.find((o) => pathKey(o.path) === k);
        const first = tr ? decompose(tr.keys[0].m) : null;
        const dq = first ? qmul(B.q, [-first.q[0], -first.q[1], -first.q[2], first.q[3]]) : B.q;
        const dt = first ? B.t.map((v, j) => v - first.t[j]) : [0, 0, 0];
        poses.set(k, { path: p.path, m: compose({ t: A.t.map((v, j) => v + w * dt[j]), q: slerp(A.q, qmul(dq, A.q), w), s: A.s }) });
      } else poses.set(k, { path: p.path, m: compose({ t: A.t.map((v, j) => v + (B.t[j] - v) * w), q: slerp(A.q, B.q, w), s: A.s.map((v, j) => v + (B.s[j] - v) * w) }) });
    }
    for (const [k, v] of r.vals) {
      const b = baseVal(k);
      if (c.blend === 'add') vals.set(k, v.map((x, j) => (b ? b[j] : 0) + w * x));
      else vals.set(k, b && b.length === v.length ? v.map((x, j) => b[j] + (x - b[j]) * w) : v);
    }
  }
  const own = evalTracks(anim.objects, anim.props || [], t, new Map([...rests, ...[...poses].map(([k, p]) => [k, p.m])]));
  for (const [k, p] of own.poses) poses.set(k, { path: p.path, m: p.m });
  for (const [k, v] of own.vals) vals.set(k, v);
  // 0.7 AN.4: shape-key sliders where nothing animates them, then the drivers (in order: one may read the one before)
  for (const sh of anim.shapes || []) for (const k of sh.keys) { const key = 'shape:' + sh.def + '|' + k.id; if (!vals.has(key)) vals.set(key, [k.value]); }
  // 0.7 AN.2: every bone's pose where no track sets it (its rig's pose, else at rest)
  for (const rg of anim.rigs || []) for (const b of rg.bones) for (const p of TRS) {
    const key = 'bone:' + rg.id + '/' + b.id + '|' + p;
    if (!vals.has(key)) vals.set(key, ((rg.pose[b.id] && rg.pose[b.id][p]) || ID_TRS[p]).slice());
  }
  // 0.7 AN.3: each constraint's influence and offset where no track sets them
  for (const c of anim.constraints || []) {
    if (!vals.has('cns:' + c.id + '|influence')) vals.set('cns:' + c.id + '|influence', [c.influence]);
    if (c.type === 'path' && !vals.has('cns:' + c.id + '|offset')) vals.set('cns:' + c.id + '|offset', [c.offset]);
  }
  if (anim.drivers) runDrivers(anim, t, poses, vals, readVar);
  for (const sh of anim.shapes || []) for (const k of sh.keys) {
    const key = 'shape:' + sh.def + '|' + k.id, v = vals.get(key);
    vals.set(key, [k.mute ? 0 : clamp(v ? v[0] : k.value, k.min, k.max)]);
  }
  return { poses, vals };
}
/** Every placement that moves, at time t: [{path, key, m}] (matrix tracks, transform curves and clips together). */
export function posesAt(anim, t) {
  if (!anim.props && !anim.clips) return anim.objects.map((o) => ({ path: o.path, key: pathKey(o.path), m: poseAt(o, t) }));
  return [...evaluate(anim, t).poses].map(([key, p]) => ({ path: p.path, key, m: p.m }));
}
/**
 * Every animated property except placements, at time t: Map('target|prop' → number[]). `base(key)` → the value without
 * the animation (a clip mixed in at less than full influence blends from it), optional.
 */
export function propsAt(anim, t, base, readVar) {
  if (!anim.props && !anim.clips && !anim.shapes && !anim.drivers && !anim.rigs && !anim.constraints) return new Map();
  return evaluate(anim, t, base, readVar).vals;
}

/** An object's matrix keys as location / rotation / scale curves (graph-editable), its matrix track removed. */
export function toPropTracks(anim, i) {
  const o = anim.objects[i];
  if (!o) return anim;
  let a = removeTrack(anim, i), near = null;
  const target = 'obj:' + pathKey(o.path);
  for (const k of o.keys) {
    const trs = matrixToTRS(k.m, near);
    near = trs.rotation;
    const ease = k.ease === 'smooth' ? 'bezier' : k.ease;
    for (const p of TRS) a = setPropKey(a, target, p, k.t, trs[p], ease, { name: o.name, rest: o.keys[0].m });
  }
  for (const p of TRS) { const j = findProp(a, target, p); if (j >= 0 && o.cycle) a = setCycle(a, 'p' + j, o.cycle.before, o.cycle.after); }
  return a;
}

// ---- clips (0.7 AN.1: NLA-style) ----
const freeId = (list, prefix) => { let n = 1; while (list.some((x) => x.id === prefix + n)) n++; return prefix + n; };
/** The timeline's object and property tracks (not the camera, not render settings) saved as an action, played back by a new clip where they were. */
export function stashAction(anim, name) {
  const a = copy(anim);
  const keep = (p) => p.target === 'camera' || p.target === 'render';
  const props = (a.props || []).filter((p) => !keep(p));
  if (!a.objects.length && !props.length) return anim;
  a.actions = a.actions || [];
  if (a.actions.length >= LIMITS.actions || (a.clips || []).length >= LIMITS.clips) return anim;
  const act = { id: freeId(a.actions, 'a'), name: cleanName(name) || ('Action ' + (a.actions.length + 1)), objects: a.objects, props };   // i18n-ignore: a default the page renames in its words
  a.actions.push(act);
  a.objects = [];
  a.props = (a.props || []).filter(keep);
  const [lo] = actionRange(act);
  a.clips = a.clips || [];
  a.clips.push(cleanClip({ id: freeId(a.clips, 'c'), start: lo, extend: 'both' }, act));   // plays exactly what the tracks did, held at both ends
  return tidy(a);
}
export function addClip(anim, actionId, start) {
  const act = (anim.actions || []).find((x) => x.id === actionId);
  if (!act || !fin(start) || (anim.clips || []).length >= LIMITS.clips) return anim;
  const a = copy(anim);
  a.clips = a.clips || [];
  const c = cleanClip({ id: freeId(a.clips, 'c'), start }, act);
  a.clips.push(c);
  grow(a, c.start + (c.to - c.from) * c.scale * c.repeat);
  return a;
}
export function setClip(anim, id, patch) {
  const i = (anim.clips || []).findIndex((c) => c.id === id);
  if (i < 0 || !patch || typeof patch !== 'object') return anim;
  const a = copy(anim), c = a.clips[i], act = a.actions.find((x) => x.id === c.action);
  const next = { ...c };
  for (const k of ['name', 'start', 'from', 'to', 'scale', 'repeat', 'blend', 'influence', 'mute', 'extend']) if (own(patch, k)) next[k] = patch[k];
  a.clips[i] = cleanClip(next, act);
  if (own(patch, 'order') && Number.isInteger(patch.order)) { const [x] = a.clips.splice(i, 1); a.clips.splice(clamp(patch.order, 0, a.clips.length), 0, x); }
  const cc = a.clips.find((x) => x.id === id);
  grow(a, cc.start + (cc.to - cc.from) * cc.scale * cc.repeat);
  return a;
}
/** Remove a clip; an action no clip plays any more goes with it. */
export function removeClip(anim, id) {
  if (!(anim.clips || []).some((c) => c.id === id)) return anim;
  const a = copy(anim);
  a.clips = a.clips.filter((c) => c.id !== id);
  a.actions = a.actions.filter((x) => a.clips.some((c) => c.action === x.id));
  return tidy(a);
}

/**
 * Camera keys from saved scenes, in order (the walkthrough video): each scene is held for `hold` seconds, and the camera
 * moves to the next one over `move` seconds, slowing into every scene. → {keys, length}
 */
export function fromScenes(scenes, { move = 3, hold = 1.5 } = {}) {
  const keys = [];
  let t = 0;
  scenes.forEach((sc, i) => {
    const cam = sc && cleanCam(sc.cam);
    if (!cam) return;
    if (keys.length) t += move;
    keys.push({ t: r3(t), cam, ease: hold > 0 ? 'hold' : 'stop' });
    if (hold > 0) { t += hold; keys.push({ t: r3(t), cam: { ...cam, eye: cam.eye.slice(), target: cam.target.slice() }, ease: 'stop' }); }
  });
  return { keys: sortKeys(keys), length: Math.max(0.5, r3(t)) };
}

// ---- shape keys (0.7 AN.4): their names, sliders and ranges; the offsets are the mesh's (anim/shapes.js) ----
export const SHAPE_ID_RE = /^k\d{1,4}$/;
const DEF_RE = /^[A-Za-z0-9_-]{1,40}$/;   // a definition's id ('d12')
function cleanShapeKey(k) {
  if (!k || typeof k.id !== 'string' || !SHAPE_ID_RE.test(k.id)) return null;
  let min = fin(k.min) ? clamp(k.min, -10, 10) : 0, max = fin(k.max) ? clamp(k.max, -10, 10) : 1;
  if (max < min) [min, max] = [max, min];
  if (max - min < 1e-6) max = min + 1;
  return { id: k.id, name: cleanName(k.name) || k.id, value: fin(k.value) ? clamp(k.value, min, max) : 0, min, max, mute: k.mute === true };
}
export const shapeKeys = (anim, def) => (anim.shapes || []).find((s) => s.def === def)?.keys || [];
/** A shape key's name, slider, range or mute (made when missing). */
export function setShapeKey(anim, def, id, patch = {}) {
  if (typeof def !== 'string' || !DEF_RE.test(def) || typeof id !== 'string' || !SHAPE_ID_RE.test(id)) return anim;
  const a = copy(anim);
  a.shapes = (a.shapes || []).map((s) => ({ def: s.def, keys: s.keys.map((k) => ({ ...k })) }));
  let sh = a.shapes.find((s) => s.def === def);
  if (!sh) { sh = { def, keys: [] }; a.shapes.push(sh); }
  const i = sh.keys.findIndex((k) => k.id === id);
  if (i < 0 && sh.keys.length >= LIMITS.shapes) return anim;
  const next = cleanShapeKey({ ...(i >= 0 ? sh.keys[i] : { id, name: id }), ...patch, id });
  if (i >= 0) sh.keys[i] = next; else sh.keys.push(next);
  return a;
}
/** Remove a shape key's entry, its tracks and its drivers (the mesh layer is the page's to remove). */
export function removeShapeKey(anim, def, id) {
  let a = copy(anim);
  a.shapes = (a.shapes || []).map((s) => (s.def === def ? { def, keys: s.keys.filter((k) => k.id !== id) } : { def: s.def, keys: s.keys.map((k) => ({ ...k })) })).filter((s) => s.keys.length);
  if (!a.shapes.length) delete a.shapes;
  const target = 'shape:' + def;
  if (a.props) { a.props = a.props.filter((p) => !(p.target === target && p.prop === id)); tidy(a); }
  if (a.drivers) { a.drivers = a.drivers.filter((d) => !(d.target === target && d.prop === id)); if (!a.drivers.length) delete a.drivers; }
  return a;
}
/** The shape-key values of mesh definition `def` out of propsAt's map: Map(id → weight). */
export function shapeWeights(vals, def) {
  const out = new Map(), pre = 'shape:' + def + '|';
  for (const [k, v] of vals) if (k.startsWith(pre)) out.set(k.slice(pre.length), v[0]);
  return out;
}

// ---- drivers (0.7 AN.4) ----
const VAR_RE = /^[a-z_][a-z0-9_]{0,15}$/i;
function cleanDriver(d) {
  if (!d || typeof d.target !== 'string' || !TARGET_RE.test(d.target) || d.target.startsWith('obj:') || typeof d.prop !== 'string' || !PROP_RE.test(d.prop)) return null;
  if (typeof d.expr !== 'string' || d.expr.length > LIMITS.expr) return null;
  const vars = [], names = new Set();
  for (const v of (Array.isArray(d.vars) ? d.vars : []).slice(0, LIMITS.vars)) {
    if (!v || typeof v.name !== 'string' || !VAR_RE.test(v.name) || names.has(v.name) || FUNCS[v.name.toLowerCase()] || CONSTS[v.name.toLowerCase()] !== undefined) continue;
    const okTarget = v.target === 'time' ? ['seconds', 'frame'].includes(v.prop) : typeof v.target === 'string' && TARGET_RE.test(v.target) && typeof v.prop === 'string' && PROP_RE.test(v.prop);
    if (!okTarget) continue;
    names.add(v.name);
    vars.push({ name: v.name, target: v.target, prop: v.prop, comp: Number.isInteger(v.comp) ? clamp(v.comp, 0, LIMITS.size - 1) : 0 });
  }
  return { target: d.target, prop: d.prop, expr: d.expr.replace(/[\u0000-\u001f\u007f]/g, ' '), vars };
}
export function setDriver(anim, target, prop, { expr, vars = [] }) {
  const c = cleanDriver({ target, prop, expr, vars });
  if (!c) return anim;
  const a = copy(anim);
  a.drivers = (a.drivers || []).map((d) => ({ ...d, vars: d.vars.map((v) => ({ ...v })) })).filter((d) => !(d.target === target && d.prop === prop));
  if (a.drivers.length >= LIMITS.drivers) return anim;
  a.drivers.push(c);
  return a;
}
export function removeDriver(anim, target, prop) {
  if (!(anim.drivers || []).some((d) => d.target === target && d.prop === prop)) return anim;
  const a = copy(anim);
  a.drivers = a.drivers.filter((d) => !(d.target === target && d.prop === prop));
  if (!a.drivers.length) delete a.drivers;
  return a;
}
const FUNCS = {
  sin: [1, Math.sin], cos: [1, Math.cos], tan: [1, Math.tan], asin: [1, Math.asin], acos: [1, Math.acos], atan: [1, Math.atan], atan2: [2, Math.atan2],
  abs: [1, Math.abs], sqrt: [1, Math.sqrt], exp: [1, Math.exp], log: [1, Math.log], floor: [1, Math.floor], ceil: [1, Math.ceil], round: [1, Math.round],
  sign: [1, Math.sign], pow: [2, Math.pow], min: [2, Math.min], max: [2, Math.max], clamp: [3, (x, a, b) => Math.min(Math.max(x, a), b)],
  lerp: [3, (a, b, k) => a + (b - a) * k], rad: [1, (d) => (d * Math.PI) / 180], deg: [1, (r) => (r * 180) / Math.PI],
  smoothstep: [3, (a, b, x) => { const k = clamp((x - a) / (b - a || 1e-12), 0, 1); return k * k * (3 - 2 * k); }],
};
const CONSTS = { pi: Math.PI, e: Math.E };
const PREC = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2, '^': 4, 'neg': 3 };
/**
 * A driver's expression, checked and turned into steps (no eval): numbers, names (variables, pi, e), + − * / % ^ (power,
 * right to left), unary minus, ( ), functions (FUNCS, fixed argument counts). → {ok: true, names: [variables], run(vars) →
 * number} | {ok: false, error: code, at}. A result that isn't a finite number runs as 0.
 */
export function compileExpr(src) {
  const bad = (error, at = 0) => ({ ok: false, error, at });
  if (typeof src !== 'string' || !src.trim()) return bad('empty');
  if (src.length > LIMITS.expr) return bad('long');
  const toks = [], re = /\s*(?:(\d+\.?\d*(?:e[+-]?\d+)?|\.\d+(?:e[+-]?\d+)?)|([a-z_][a-z0-9_]*)|(\*\*|[-+*/%^(),]))/iy;
  let i = 0;
  while (i < src.length) {
    if (/\s/.test(src[i])) { i++; continue; }
    re.lastIndex = i;
    const m = re.exec(src);
    if (!m) return bad('char', i);
    if (m[1] !== undefined) toks.push({ k: 'num', v: Number(m[1]), at: i });
    else if (m[2] !== undefined) toks.push({ k: 'name', v: m[2], at: i });
    else toks.push({ k: 'op', v: m[3] === '**' ? '^' : m[3], at: i });
    i = re.lastIndex;
  }
  // shunting-yard → steps
  const out = [], ops = [], names = new Set();
  let expectValue = true;
  const argc = [];
  for (let j = 0; j < toks.length; j++) {
    const tk = toks[j];
    if (tk.k === 'num') { if (!expectValue) return bad('syntax', tk.at); out.push({ k: 'num', v: tk.v }); expectValue = false; continue; }
    if (tk.k === 'name') {
      if (!expectValue) return bad('syntax', tk.at);
      const lw = tk.v.toLowerCase();
      if (toks[j + 1] && toks[j + 1].v === '(') { if (!FUNCS[lw]) return bad('func', tk.at); ops.push({ k: 'fn', v: lw, at: tk.at }); continue; }
      if (CONSTS[lw] !== undefined) out.push({ k: 'num', v: CONSTS[lw] });
      else { if (!VAR_RE.test(tk.v)) return bad('name', tk.at); names.add(tk.v); out.push({ k: 'var', v: tk.v }); }
      expectValue = false; continue;
    }
    const v = tk.v;
    if (v === '(') { if (!expectValue) return bad('syntax', tk.at); ops.push({ k: '(', fn: ops.length && ops[ops.length - 1].k === 'fn' }); argc.push(1); continue; }
    if (v === ',') {
      if (expectValue) return bad('syntax', tk.at);
      while (ops.length && ops[ops.length - 1].k !== '(') out.push(ops.pop());
      if (!ops.length || !ops[ops.length - 1].fn) return bad('syntax', tk.at);
      argc[argc.length - 1]++; expectValue = true; continue;
    }
    if (v === ')') {
      if (expectValue && !(toks[j - 1] && toks[j - 1].v === '(')) return bad('syntax', tk.at);
      while (ops.length && ops[ops.length - 1].k !== '(') out.push(ops.pop());
      if (!ops.length) return bad('paren', tk.at);
      const open = ops.pop(), n = argc.pop();
      if (open.fn) { const f = ops.pop(); if (FUNCS[f.v][0] !== n) return bad('args', f.at); out.push({ k: 'fn', v: f.v }); }
      else if (expectValue) return bad('syntax', tk.at);
      expectValue = false; continue;
    }
    // an operator
    let op = v;
    if (expectValue) { if (v === '-') op = 'neg'; else if (v === '+') continue; else return bad('syntax', tk.at); }
    while (ops.length) {
      const top = ops[ops.length - 1];
      if (top.k !== 'op') break;
      const right = op === '^' || op === 'neg';
      if (PREC[top.v] > PREC[op] || (PREC[top.v] === PREC[op] && !right)) out.push(ops.pop()); else break;
    }
    ops.push({ k: 'op', v: op });
    expectValue = true;
  }
  if (expectValue) return bad('syntax', src.length);
  while (ops.length) { const o = ops.pop(); if (o.k === '(' || o.k === 'fn') return bad('paren', src.length); out.push(o); }
  if (out.length > 1000) return bad('long');
  const steps = out;
  const run = (vars) => {
    const st = new Float64Array(steps.length + 1);
    let n = 0;
    for (const s2 of steps) {
      if (s2.k === 'num') st[n++] = s2.v;
      else if (s2.k === 'var') { const x = vars && vars[s2.v]; st[n++] = typeof x === 'number' && Number.isFinite(x) ? x : 0; }
      else if (s2.k === 'fn') { const [c, f] = FUNCS[s2.v]; n -= c; const args = []; for (let q = 0; q < c; q++) args.push(st[n + q]); st[n++] = f(...args); }
      else if (s2.v === 'neg') st[n - 1] = -st[n - 1];
      else {
        const b = st[--n], a = st[n - 1];
        st[n - 1] = s2.v === '+' ? a + b : s2.v === '-' ? a - b : s2.v === '*' ? a * b : s2.v === '/' ? a / b : s2.v === '%' ? a % b : Math.pow(a, b);
      }
    }
    const r = st[0];
    return Number.isFinite(r) ? r : 0;
  };
  return { ok: true, names: [...names], run };
}
const compiled = new Map();   // expression text → compileExpr's result (kept: drivers run every frame)
function runDrivers(anim, t, poses, vals, readVar) {
  for (const d of anim.drivers) {
    let c = compiled.get(d.expr);
    if (!c) { c = compileExpr(d.expr); if (compiled.size > 500) compiled.clear(); compiled.set(d.expr, c); }
    if (!c.ok) continue;
    const env = {};
    for (const v of d.vars) {
      let x = null;
      if (v.target === 'time') x = [v.prop === 'frame' ? t * anim.fps : t];
      else if (v.target.startsWith('obj:')) {
        const p = poses.get(v.target.slice(4));
        if (p && TRS.includes(v.prop)) x = matrixToTRS(p.m)[v.prop];
        else if (readVar) x = readVar(v.target, v.prop);
      } else x = vals.get(v.target + '|' + v.prop) || (readVar ? readVar(v.target, v.prop) : null);
      env[v.name] = x && fin(x[v.comp]) ? x[v.comp] : 0;
    }
    const cur = vals.get(d.target + '|' + d.prop), r = c.run(env);
    if (cur && cur.length > 1) { const nv = cur.slice(); nv[0] = r; vals.set(d.target + '|' + d.prop, nv); } else vals.set(d.target + '|' + d.prop, [r]);
  }
}

// ---- armatures (0.7 AN.2): the rig's data; the sums are anim/rig.js ----
export const RIG_ID_RE = /^r\d{1,3}$/;
export const BONE_ID_RE = /^[a-z][a-z0-9_.-]{0,40}$/;   // also the mesh layer 'weight.<id>'
export const RIG_MODES = ['lbs', 'dqs'];
function cleanBone(b) {
  if (!b || typeof b.id !== 'string' || !BONE_ID_RE.test(b.id) || !isPt(b.head) || !isPt(b.tail)) return null;
  if (Math.hypot(b.tail[0] - b.head[0], b.tail[1] - b.head[1], b.tail[2] - b.head[2]) < 1e-6) return null;
  return { id: b.id, name: cleanName(b.name) || b.id, parent: typeof b.parent === 'string' && BONE_ID_RE.test(b.parent) ? b.parent : '', head: b.head.slice(), tail: b.tail.slice(), roll: fin(b.roll) ? clamp(b.roll, -360, 360) : 0, deform: b.deform !== false };
}
const cleanPoseOf = (p) => {
  if (!p || typeof p !== 'object') return null;
  const o = {};
  for (const k of TRS) if (isVec(p[k], 3)) o[k] = p[k].slice();
  return Object.keys(o).length ? o : null;
};
function cleanRig(r) {
  if (!r || typeof r.id !== 'string' || !RIG_ID_RE.test(r.id) || typeof r.def !== 'string' || !DEF_RE.test(r.def) || !Array.isArray(r.bones)) return null;
  const bones = [], ids = new Set();
  for (const b of r.bones.slice(0, LIMITS.bones)) { const c = cleanBone(b); if (c && !ids.has(c.id)) { ids.add(c.id); bones.push(c); } }
  // a parent that isn't a bone of this rig, or a loop of parents: the bone becomes a root
  const by = new Map(bones.map((b) => [b.id, b]));
  for (const b of bones) {
    if (b.parent && !by.has(b.parent)) { b.parent = ''; continue; }
    const seen = new Set([b.id]);
    for (let p = b.parent; p; p = by.get(p)?.parent) { if (seen.has(p)) { b.parent = ''; break; } seen.add(p); }
  }
  const pose = {};
  if (r.pose && typeof r.pose === 'object') for (const b of bones) { if (!own(r.pose, b.id)) continue; const c = cleanPoseOf(r.pose[b.id]); if (c) pose[b.id] = c; }
  return { id: r.id, name: cleanName(r.name) || r.id, def: r.def, mode: pick(RIG_MODES, r.mode, 'lbs'), bones, pose };
}
export const rigsOf = (anim, def) => (anim.rigs || []).filter((r) => def === undefined || r.def === def);
const copyRigs = (a) => (a.rigs || []).map((r) => ({ ...r, bones: r.bones.map((b) => ({ ...b, head: b.head.slice(), tail: b.tail.slice() })), pose: JSON.parse(JSON.stringify(r.pose)) }));
function withRig(anim, id, fn) {
  const i = (anim.rigs || []).findIndex((r) => r.id === id);
  if (i < 0) return anim;
  const a = copy(anim);
  a.rigs = copyRigs(anim);
  const r = fn(a.rigs[i], a);
  if (r === false) return anim;
  a.rigs[i] = cleanRig(a.rigs[i]) || a.rigs[i];
  return a;
}
/** A new rig on mesh definition `def` (no bones yet; setBone adds them). */
export function addRig(anim, def, name) {
  if (typeof def !== 'string' || !DEF_RE.test(def) || (anim.rigs || []).length >= LIMITS.rigs) return anim;
  const a = copy(anim);
  a.rigs = copyRigs(anim);
  let n = 1; while (a.rigs.some((r) => r.id === 'r' + n)) n++;
  a.rigs.push({ id: 'r' + n, name: cleanName(name) || ('Armature ' + n), def, mode: 'lbs', bones: [], pose: {} });   // i18n-ignore: a default the page names
  return a;
}
export const setRig = (anim, id, patch = {}) => withRig(anim, id, (r) => { if (own(patch, 'name')) r.name = patch.name; if (own(patch, 'mode')) r.mode = patch.mode; });
export function removeRig(anim, id) {
  if (!(anim.rigs || []).some((r) => r.id === id)) return anim;
  const a = copy(anim);
  a.rigs = copyRigs(anim).filter((r) => r.id !== id);
  if (!a.rigs.length) delete a.rigs;
  if (a.props) { a.props = a.props.filter((p) => !p.target.startsWith('bone:' + id + '/')); tidy(a); }
  return a;
}
/** Add or change a bone (by id). */
export function setBone(anim, rig, bone) {
  const c = cleanBone(bone);
  if (!c) return anim;
  return withRig(anim, rig, (r) => {
    const i = r.bones.findIndex((b) => b.id === c.id);
    if (i < 0 && r.bones.length >= LIMITS.bones) return false;
    if (c.parent === c.id) c.parent = '';
    if (i >= 0) r.bones[i] = c; else r.bones.push(c);
  });
}
/** Remove a bone: its children hang from its parent; its pose and tracks go (its weight layer is the page's). */
export function removeBone(anim, rig, id) {
  let a = withRig(anim, rig, (r) => {
    const b = r.bones.find((x) => x.id === id);
    if (!b) return false;
    for (const x of r.bones) if (x.parent === id) x.parent = b.parent;
    r.bones = r.bones.filter((x) => x.id !== id);
    delete r.pose[id];
  });
  if (a !== anim && a.props) { a.props = a.props.filter((p) => p.target !== 'bone:' + rig + '/' + id); tidy(a); }
  return a;
}
/** A bone's pose where no track sets it (each part optional). */
export const setPose = (anim, rig, bone, p) => withRig(anim, rig, (r) => {
  if (!r.bones.some((b) => b.id === bone)) return false;
  const c = cleanPoseOf(p);
  if (!c) return false;
  r.pose[bone] = { ...(r.pose[bone] || {}), ...c };
});
export const clearPose = (anim, rig) => withRig(anim, rig, (r) => { r.pose = {}; });
/** A bone's pose out of propsAt's map. */
export function bonePose(vals, rig, bone) {
  const k = 'bone:' + rig + '/' + bone + '|';
  return { location: vals.get(k + 'location') || [0, 0, 0], rotation: vals.get(k + 'rotation') || [0, 0, 0], scale: vals.get(k + 'scale') || [1, 1, 1] };
}

// ---- constraints (0.7 AN.3): the data; anim/constraints.js solves them ----
export const CONSTRAINT_TYPES = ['ik', 'lookat', 'copy', 'limit', 'childof', 'path'];
export const AXES = ['+x', '-x', '+y', '-y', '+z', '-z'];
const CNS_ID_RE = /^n\d{1,3}$/;
const OWNER_RE = /^(?:obj:\d{1,16}(?:\/\d{1,16}){0,31}|bone:r\d{1,3}\/[a-z][a-z0-9_.-]{0,40})$/;
function cleanTarget(x) {
  if (!x || typeof x !== 'object') return null;
  if (x.kind === 'obj' && isPath(x.path)) return { kind: 'obj', path: x.path.slice() };
  if (x.kind === 'bone' && typeof x.rig === 'string' && RIG_ID_RE.test(x.rig) && typeof x.bone === 'string' && BONE_ID_RE.test(x.bone)) return { kind: 'bone', rig: x.rig, bone: x.bone };
  if (x.kind === 'point' && isPt(x.p)) return { kind: 'point', p: x.p.slice() };
  return null;
}
const cleanRange = (r) => (Array.isArray(r) && r.length === 3 ? r.map((x) => (Array.isArray(x) && x.length === 2 && fin(x[0]) && fin(x[1]) && x[0] <= x[1] && Math.abs(x[0]) < 1e9 && Math.abs(x[1]) < 1e9 ? [x[0], x[1]] : null)) : [null, null, null]);
function cleanConstraint(c) {
  if (!c || typeof c.id !== 'string' || !CNS_ID_RE.test(c.id) || typeof c.owner !== 'string' || !OWNER_RE.test(c.owner) || !CONSTRAINT_TYPES.includes(c.type)) return null;
  const bone = c.owner.startsWith('bone:');
  if ((c.type === 'ik' && !bone) || (c.type === 'path' && bone)) return null;
  const out = { id: c.id, name: cleanName(c.name), owner: c.owner, type: c.type, target: cleanTarget(c.target), influence: fin(c.influence) ? clamp(c.influence, 0, 1) : 1, on: c.on !== false };
  if (c.type === 'ik') {
    out.chain = Number.isInteger(c.chain) ? clamp(c.chain, 1, 16) : 2;
    out.iterations = Number.isInteger(c.iterations) ? clamp(c.iterations, 1, 50) : 12;
    out.pole = cleanTarget(c.pole);
  }
  if (c.type === 'lookat' || c.type === 'path') { out.axis = pick(AXES, c.axis, '+y'); out.up = pick(AXES, c.up, '+z'); }
  if (c.type === 'copy') out.mix = { location: c.mix?.location !== false, rotation: c.mix?.rotation !== false, scale: c.mix?.scale === true };
  if (c.type === 'limit') out.limits = { location: cleanRange(c.limits?.location), rotation: cleanRange(c.limits?.rotation), scale: cleanRange(c.limits?.scale) };
  if (c.type === 'childof') out.inverse = isMatrix(c.inverse) ? c.inverse.slice() : null;
  if (c.type === 'path') { out.offset = fin(c.offset) ? clamp(c.offset, 0, 1) : 0; out.follow = c.follow !== false; }
  return out;
}
export const constraintsOf = (anim, owner) => (anim.constraints || []).filter((c) => owner === undefined || c.owner === owner);
const copyCns = (a) => (a.constraints || []).map((c) => JSON.parse(JSON.stringify(c)));
export function addConstraint(anim, owner, type, patch = {}) {
  const list = anim.constraints || [];
  if (list.length >= LIMITS.tracks) return anim;
  let n = 1; while (list.some((c) => c.id === 'n' + n)) n++;
  const c = cleanConstraint({ ...patch, id: 'n' + n, owner, type });
  if (!c) return anim;
  const a = copy(anim);
  a.constraints = [...copyCns(anim), c];
  return a;
}
export function setConstraint(anim, id, patch = {}) {
  const i = (anim.constraints || []).findIndex((c) => c.id === id);
  if (i < 0) return anim;
  const cur = anim.constraints[i], c = cleanConstraint({ ...cur, ...patch, id, owner: cur.owner, type: cur.type });
  if (!c) return anim;
  const a = copy(anim);
  a.constraints = copyCns(anim);
  a.constraints[i] = c;
  return a;
}
export function removeConstraint(anim, id) {
  if (!(anim.constraints || []).some((c) => c.id === id)) return anim;
  const a = copy(anim);
  a.constraints = copyCns(anim).filter((c) => c.id !== id);
  if (!a.constraints.length) delete a.constraints;
  if (a.props) { a.props = a.props.filter((p) => p.target !== 'cns:' + id); tidy(a); }
  return a;
}
/** Move a constraint earlier (dir −1) or later (+1) among those of its owner (they run in order). */
export function moveConstraint(anim, id, dir) {
  const list = anim.constraints || [], i = list.findIndex((c) => c.id === id);
  if (i < 0) return anim;
  let j = i + (dir < 0 ? -1 : 1);
  while (j >= 0 && j < list.length && list[j].owner !== list[i].owner) j += dir < 0 ? -1 : 1;
  if (j < 0 || j >= list.length) return anim;
  const a = copy(anim);
  a.constraints = copyCns(anim);
  [a.constraints[i], a.constraints[j]] = [a.constraints[j], a.constraints[i]];
  return a;
}
/** Keep a placement's own matrix as its rest (once: an existing rest stays). */
export function setRest(anim, path, m) {
  if (!isPath(path) || !isMatrix(m) || (anim.rests || []).some((r) => pathKey(r.path) === pathKey(path))) return anim;
  const a = copy(anim);
  a.rests = [...(a.rests || []), { path: path.slice(), m: m.slice() }];
  return a;
}

// ---- rigid bodies (0.7 AN.5): the settings; anim/physics.js simulates ----
export const PHYSICS_DEFAULTS = Object.freeze({ gravity: [0, 0, -9.81], ground: { on: true, z: 0 }, from: 0, to: 3, substeps: 20, bodies: [] });
/** The animation's physics settings, checked (untrusted like the rest of a file); null = none. */
export function cleanPhysics(x) {
  if (!x || typeof x !== 'object') return null;
  const cl = (v, lo, hi, d) => (fin(v) ? clamp(v, lo, hi) : d);
  const g = Array.isArray(x.gravity) && x.gravity.length === 3 && x.gravity.every((v) => fin(v) && Math.abs(v) < 1000) ? x.gravity.slice() : PHYSICS_DEFAULTS.gravity.slice();
  const bodies = [], seen = new Set();
  for (const b of (Array.isArray(x.bodies) ? x.bodies : []).slice(0, 500)) {
    if (!b || !isPath(b.path) || seen.has(pathKey(b.path))) continue;
    seen.add(pathKey(b.path));
    bodies.push({ path: b.path.slice(), kind: b.kind === 'passive' ? 'passive' : 'active', shape: b.shape === 'sphere' ? 'sphere' : 'box',
      mass: cl(b.mass, 0.001, 1e6, 1), friction: cl(b.friction, 0, 2, 0.5), bounce: cl(b.bounce, 0, 1, 0.1) });
  }
  const from = cl(x.from, 0, LIMITS.length, 0), to = Math.max(from + 0.1, cl(x.to, 0, LIMITS.length, 3));
  return { gravity: g, ground: { on: x.ground?.on !== false, z: cl(x.ground?.z, -1e6, 1e6, 0) }, from, to, substeps: Math.round(cl(x.substeps, 1, 100, 20)), bodies };
}
export const bodyOf = (anim, path) => (anim.physics ? anim.physics.bodies.find((b) => pathKey(b.path) === pathKey(path)) || null : null);
export function setPhysics(anim, patch = {}) {
  const cur = anim.physics || JSON.parse(JSON.stringify(PHYSICS_DEFAULTS));
  const next = cleanPhysics({ ...cur, ...patch, ground: { ...cur.ground, ...(patch.ground || {}) }, bodies: cur.bodies });
  if (!next) return anim;
  const a = copy(anim);
  a.physics = next;
  return a;
}
/** A placement's rigid body (made, changed, or removed with null). */
export function setBody(anim, path, body) {
  const cur = anim.physics || JSON.parse(JSON.stringify(PHYSICS_DEFAULTS));
  const others = cur.bodies.filter((b) => pathKey(b.path) !== pathKey(path));
  const old = bodyOf(anim, path);
  const bodies = body ? [...others, { ...(old || {}), ...body, path }] : others;
  const next = cleanPhysics({ ...cur, bodies });
  const a = copy(anim);
  if (!next.bodies.length && !body) delete a.physics; else a.physics = next;
  return a;
}
/** Many keys on one property track at once (a bake): each {t, v, ease}; a key at the time of one already there replaces it. */
export function putKeys(anim, target, prop, keys, { name, rest } = {}) {
  if (!keys.length) return anim;
  let a = setPropKey(anim, target, prop, keys[0].t, keys[0].v, keys[0].ease, { name, rest });
  const i = findProp(a, target, prop);
  if (i < 0) return anim;
  const tr = a.props[i], n = tr.keys[0].v.length, add2 = [];
  for (const k of keys.slice(1)) {
    if (!fin(k.t) || k.t < 0 || k.t > LIMITS.length || !isVec(k.v, n)) continue;
    add2.push({ t: r3(k.t), v: k.v.slice(), ease: cleanEase(k.ease) });
  }
  // the same track object was copied by setPropKey: safe to fill
  tr.keys = sortKeys([...tr.keys, ...add2]).slice(0, LIMITS.keys);
  for (const k of add2) grow(a, k.t);
  return a;
}
