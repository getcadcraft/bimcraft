/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — BimCraft's Studio Live adapter (0.5 LV.21, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: tools/live-apps-test/test-bimcraft-live.mjs drives it in Node with
 * cc-ifc and BimCraft's own IfcEditor against the real session server.
 *
 *   const live = createLive({ editor: () => ed, open, refresh })   → the adapter (spec § 4)
 *   live.bind(client) / live.unbind();  live.reloading() / live.loaded()   around the app reloading its model
 *   createLiveAdapter({ host })                                    → Studio's entry point, for window.bimcraftLive
 *
 * An IFC model is lines (#id = TYPE(params)). Every edit BimCraft makes (IfcEditor: names, properties, library items placed
 * or swapped, elements removed or pasted, and modelChange: the building tools' walls, doors, roofs …) writes lines
 * through cc-ifc's IfcFile (set / remove); the adapter watches those writes during an edit and sends, when the edit is
 * recorded (editor.record):
 *   {o:'line', id, t, p}    the line as it is now (type + cc-ifc's raw parameters)    key e:<id>: a new line (c) or a
 *                           rewritten one (p, field 'line': the later one wins)
 *   {o:'gone', id}          the line removed                                           (d)
 * The inverse is the same lines as they were before the edit. New lines take ids from the client's own range
 * (1e9 + c × 1e7 + n), so two people's new lines never share an id; the file's own ids stay. Keys are STEP ids (spec § 4).
 * Holds and locks name elements by their STEP id too.
 * The model BimCraft shows is rebuilt from the edited file; while it reloads (rebuild(), a joiner opening the snapshot),
 * others' edits wait in a queue and land in the new file as soon as it is open.
 */

import { pack, unpack } from './live-client.js';
import { t } from './i18n.js';

export const SCHEMA = 1;
export const ID_BASE = 1e9, ID_BLOCK = 1e7;
const DER = { derived: 1 };   // cc-ifc's DERIVED ('*') on the wire
/** Attribute positions an attribute edit touches on an element (Name, Description, ObjectType, Tag): no new geometry. */
const ATTR_AT = new Set([2, 3, 4, 7]);
const PROP_TYPES = /^IFC(PROPERTYSINGLEVALUE|PROPERTYSET|RELDEFINESBYPROPERTIES|PROPERTYENUMERATEDVALUE|ELEMENTQUANTITY|QUANTITY\w+)$/;

export function createLive(opts) {
  const ed = () => opts.editor();
  const file = () => { const e = ed(); return e && e.api && typeof e.api.file === 'function' && e.mid !== null && e.mid !== undefined ? e.api.file(e.mid) : null; };
  let client = null, g = 0, step = null, applying = false, hooked = null, myMax = 0, waiting = false, buffer = [], DERIVED = null, refreshKind = null;

  // ---- raw parameters ↔ wire values (cc-ifc's DERIVED is one frozen object; MessagePack carries plain data) ----------
  const enc = (v) => (v === DERIVED ? DER : Array.isArray(v) ? v.map(enc) : v);
  const dec = (v) => (v && typeof v === 'object' && !Array.isArray(v) && v.derived && Object.keys(v).length === 1 ? DERIVED : Array.isArray(v) ? v.map(dec) : v);
  const clone = (v) => (v === DERIVED ? v : Array.isArray(v) ? v.map(clone) : v && typeof v === 'object' ? { ...v } : v);

  /** The file's own writes, while an edit runs: the first time each line is touched, how it was before. */
  function hook(f) {
    if (!f || hooked === f) return;
    unhook();
    const set = f.set, remove = f.remove;
    const before = (id) => { if (!step || applying || step.prev.has(id)) return; step.prev.set(id, f.has(id) && f.type(id) ? { t: f.type(id), p: clone(f.params(id)) } : null); step.order.push(id); };
    f.set = function (id, type, params) { id = Number(id); before(id); const r = set.call(f, id, type, params); if (!applying && inMine(id)) myMax = Math.max(myMax, id); if (!applying) f.maxId = Math.max(myMax, lo()); return r; };
    f.remove = function (id) { before(Number(id)); return remove.call(f, id); };
    hooked = f; hooked.__live = { set, remove };
    if (!DERIVED) DERIVED = findDerived(f);
    claimIds();
  }
  function unhook() { if (hooked && hooked.__live) { hooked.set = hooked.__live.set; hooked.remove = hooked.__live.remove; delete hooked.__live; } hooked = null; }
  const lo = () => (client && client.c ? ID_BASE + client.c * ID_BLOCK : 0);
  const inMine = (id) => client && client.c && id > lo() && id < lo() + ID_BLOCK;
  /** New lines number from this client's range (cc-ifc gives a new line maxId + 1). */
  function claimIds() {
    const f = hooked;
    if (!f || !client || !client.c) return;
    let m = lo();
    for (const id of f.newIds ? f.newIds() : []) if (inMine(id) && id > m) m = id;
    myMax = Math.max(myMax, m);
    f.trueMax = Math.max(f.trueMax || 0, f.maxId);
    f.maxId = myMax;
  }
  function findDerived(f) {
    // the sentinel is cc-ifc's step.js export; read it off any line that has one, else keep a stand-in that never matches
    try { for (const id of f.ids()) { const p = f.params(id); if (Array.isArray(p)) { const d = p.find((x) => x && typeof x === 'object' && x.derived === true && Object.isFrozen(x)); if (d) return d; } } } catch { /* a complex line */ }
    return Object.freeze({ derived: true });
  }

  // ---- an edit of ours: open it, then send it when the editor records it ---------------------------------------------
  function begin() { if (!step) step = { prev: new Map(), order: [] }; }
  function end(label) {
    const s = step; step = null;
    const f = file();
    if (!s || !f || !client || !s.order.length) return;
    const ops = [], inv = [];
    for (const id of s.order) {
      const was = s.prev.get(id), now = f.has(id) && f.type(id) ? { t: f.type(id), p: f.params(id) } : null;
      if (!was && !now) continue;
      if (was && now && was.t === now.t && JSON.stringify(enc(was.p)) === JSON.stringify(enc(now.p))) continue;
      ops.push(now ? { o: 'line', id, t: now.t, p: enc(now.p), ...(was ? {} : { n: 1 }) } : { o: 'gone', id });
      inv.push(was ? { o: 'line', id, t: was.t, p: enc(was.p), ...(now ? {} : { n: 1 }) } : { o: 'gone', id });
    }
    if (!ops.length) return;
    const mark = { o: 'g', g: 's' + (++g) };
    client.localChange({ label: label || '', ops: [mark, ...ops], inverse: [mark, ...inv.reverse()] });
  }

  // ---- someone else's lines --------------------------------------------------------------------------------------------
  function applyOps(ops) {
    const f = file();
    if (!f || waiting) { buffer.push(ops); return; }
    applying = true;
    let geometry = false;
    try {
      for (const op of ops) {
        if (op.o === 'line') {
          const p = dec(op.p);
          if (!geometry) geometry = needsGeometry(f, op.id, op.t, p);
          f.set(op.id, op.t, p);
        } else if (op.o === 'gone') { f.remove(op.id); geometry = true; }
      }
    } finally {
      applying = false;
      f.trueMax = Math.max(f.trueMax || 0, f.maxId);
      if (client && client.c) f.maxId = Math.max(myMax, lo());
    }
    const e = ed();
    if (e) { e.reindex?.(); try { e.api.dirty?.(e.mid); } catch { /* web-ifc */ } }
    queueRefresh(geometry);
  }
  function needsGeometry(f, id, type, p) {
    if (!f.has(id)) return !PROP_TYPES.test(type);
    if (PROP_TYPES.test(type)) return false;
    const old = f.params(id);
    if (f.type(id) !== type || !Array.isArray(old) || old.length !== p.length) return true;
    for (let i = 0; i < p.length; i++) if (!ATTR_AT.has(i) && JSON.stringify(enc(old[i])) !== JSON.stringify(enc(p[i]))) return true;
    return false;
  }
  function queueRefresh(geometry) {
    const first = refreshKind === null;
    refreshKind = refreshKind || (geometry ? 'geometry' : 'props');
    if (geometry) refreshKind = 'geometry';
    if (first) Promise.resolve().then(() => { const k = refreshKind; refreshKind = null; opts.refresh?.(k === 'geometry'); });
  }
  function invertOp(op) {
    const f = file();
    if (!f) return null;
    if (op.o === 'g') return op;
    if (op.o !== 'line' && op.o !== 'gone') return null;
    // a removal comes back as a line created again (n); a rewrite as the line it was
    return f.has(op.id) && f.type(op.id) ? { o: 'line', id: op.id, t: f.type(op.id), p: enc(clone(f.params(op.id))), ...(op.o === 'gone' ? { n: 1 } : {}) } : { o: 'gone', id: op.id };
  }

  function touched(ops) {
    const out = [], seen = new Set();
    for (const op of ops) {
      const k = 'e:' + op.id;
      if (op.o === 'line') { const x = op.n ? { k, m: 'c' } : { k, m: 'p', f: 'line' }; const key = k + x.m; if (!seen.has(key)) { seen.add(key); out.push(x); } }
      else if (op.o === 'gone') { const key = k + 'd'; if (!seen.has(key)) { seen.add(key); out.push({ k, m: 'd' }); } }
    }
    return out;
  }

  /** The host's checks: every line an edit writes points only at lines that exist once it is applied. */
  function validate(ops) {
    const f = file();
    if (!f) return null;
    const born = new Set(ops.filter((o) => o.o === 'line').map((o) => o.id)), gone = new Set(ops.filter((o) => o.o === 'gone').map((o) => o.id));
    const refs = (v, out) => { if (Array.isArray(v)) v.forEach((x) => refs(x, out)); else if (v && typeof v === 'object' && 'ref' in v) out.push(v.ref); return out; };
    for (const op of ops) {
      if (op.o !== 'line') continue;
      if (typeof op.t !== 'string' || !/^IFC[A-Z0-9]+$/.test(op.t) || !Array.isArray(op.p) || !f.schema.entity(op.t)) return 'invalid';
      for (const r of refs(op.p, [])) if (gone.has(r) || (!born.has(r) && !f.has(r))) return 'invalid';
    }
    return null;
  }

  const live = {
    app: 'bimcraft', schema: SCHEMA,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    // presence (0.6 LC.19, session lc-model): only design review in a headset (xr/xr-session.js) sends any — heads, hands and
    // pointers of the people in VR; the client keeps the newest of each peer and hands them here
    others: new Map(),
    drawPresence(peers) { live.others = new Map(peers); },
    setPresence(p) { client?.setPresence(p); },
    peers() { return live.others; },
    nameOf(c) { const p = client && client.peers && client.peers.get(c); return (p && p.name) || t('live.someone'); },
    apply(ops) { applyOps(ops); },
    invert(ops) { const out = []; for (let i = ops.length - 1; i >= 0; i--) { const r = invertOp(ops[i]); if (r) out.push(r); } const gi = out.findIndex((o) => o.o === 'g'); if (gi > 0) out.unshift(out.splice(gi, 1)[0]); return out; },
    touched, validate,
    /** EG.41 (studio_PART_2; bim_PART_3): where a step landed — the storey it is on is the "sheet" (its Name), the IFC classes of the elements it writes are
     *  the `tags` (so a discipline can be held to walls or pipes). Containment is read from the file, or from the step's own IfcRelContainedInSpatialStructure
     *  lines when the elements are new. No box: the IFC lines carry no plan extent here. null = nothing in the step is an element, or the file is not open. */
    where(ops) {
      const f = file();
      if (!f || !Array.isArray(ops)) return null;
      const REL = 'IFCRELCONTAINEDINSPATIALSTRUCTURE';
      const home = new Map();   // element id → storey id (file first, then the step's own relations)
      try { for (const [el, rels] of f.inverse(REL, 'RelatedElements')) for (const r of rels) { const st = f.attr(r, 'RelatingStructure'); if (st && st.ref) home.set(el, st.ref); } } catch { /* a file without the relation */ }
      for (const op of ops) {
        if (!op || op.o !== 'line' || op.t !== REL || !Array.isArray(op.p)) continue;
        const to = op.p[5], list = op.p[4];
        if (to && to.ref && Array.isArray(list)) for (const r of list) if (r && r.ref) home.set(r.ref, to.ref);
      }
      let sheet, tags = new Set(), any = false;
      const nameOf = (id) => { try { const n = f.has(id) ? f.attr(id, 'Name') : null; return typeof n === 'string' ? n : String(id); } catch { return String(id); } };
      for (const op of ops) {
        if (!op || (op.o !== 'line' && op.o !== 'gone')) continue;
        const type = op.o === 'line' ? op.t : (f.has(op.id) ? f.type(op.id) : null);
        let element = false;
        try { element = !!type && f.schema.isA(type, 'IFCPRODUCT'); } catch { element = false; }
        if (!element) continue;
        any = true;
        tags.add(type);
        const st = home.get(op.id);
        if (st !== undefined) { const name = nameOf(st); if (sheet === undefined) sheet = name; else if (sheet !== name) sheet = '\u0000mixed'; }
      }
      if (!any) return null;
      return { sheet, box: null, tags: [...tags].slice(0, 8) };
    },
    snapshot() { const e = ed(); return pack({ v: SCHEMA, name: opts.name?.() || 'model.ifc', bytes: e.save() }); },
    load(bytes) {
      const s = unpack(bytes);
      if (!s || s.v !== SCHEMA || !(s.bytes instanceof Uint8Array)) throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
      waiting = true;   // the app opens it in its own time; commits until then wait in the queue
      opts.open(s.bytes, s.name || 'model.ifc');
    },
    /** The app is about to reload its model from editor.save(): others' edits wait until it is open again. */
    reloading() { waiting = true; unhook(); },
    /** …and it is open: hook the new file, then let the waiting edits in. */
    loaded() {
      waiting = false;
      hook(file());
      live.onLoaded?.();   // watchEditor: the (new) editor gets its hooks before anyone can edit
      const q = buffer; buffer = [];
      for (const ops of q) applyOps(ops);
    },
    /** IfcEditor.record (one finished edit): what our writes did goes out. */
    recorded(label) { end(label); },
    begin,
    get busy() { return waiting; },
    hash() { const f = file(); if (!f) return ''; const lines = []; for (const id of f.ids()) lines.push(id + '=' + f.type(id) + JSON.stringify(enc(f.params(id)))); return lines.sort().join('\n'); },
    bind(c) {
      client = c;
      c.on('welcome', () => claimIds());
      hook(file());
      return live;
    },
    unbind() { const f = hooked; unhook(); if (f && f.trueMax) f.maxId = Math.max(f.maxId, f.trueMax); client = null; step = null; buffer = []; },
  };
  return live;
}

/**
 * Hooks on the app's IfcEditor while live: every recorded change goes out; undo / redo are per person. `editor` is read
 * each time (BimCraft makes a new editor for each model it opens). Returns the function that removes the hooks.
 */
export function watchEditor(getEditor, a, client) {
  let wrapped = null;
  const wrap = () => {
    const e = getEditor();
    if (!e || e === wrapped) return e;
    unwrap();
    const orig = { record: e.record, undo: e.undo, redo: e.redo, setAttribute: e.setAttribute, setProperty: e.setProperty, placeItem: e.placeItem, placeLike: e.placeLike, swapItem: e.swapItem, removeElements: e.removeElements, pasteElements: e.pasteElements, modelChange: e.modelChange };
    // an edit opens before its first write, and goes out when the editor records it
    for (const k of ['setAttribute', 'setProperty', 'placeItem', 'placeLike', 'swapItem', 'removeElements', 'pasteElements', 'modelChange']) {
      e[k] = function (...args) { const rec = args[args.length - 1]; if (!(rec && typeof rec === 'object' && rec.record === false)) a.begin(); return orig[k].apply(e, args); };
    }
    e.record = function (c) { const r = orig.record.call(e, c); a.recorded(c && (c.label || (c.kind === 'attr' ? c.attr : c.propName) || c.kind)); return r; };
    const top = (st) => (st.length ? st[st.length - 1].label || '' : '');
    e.undo = () => { const l = top(client.undoStack); return client.undo() ? { kind: 'live', label: l, journal: [] } : null; };
    e.redo = () => { const l = top(client.redoStack); return client.redo() ? { kind: 'live', label: l, journal: [] } : null; };
    e.__live = orig;
    wrapped = e;
    return e;
  };
  const unwrap = () => { if (wrapped && wrapped.__live) { Object.assign(wrapped, wrapped.__live); for (const k of Object.keys(wrapped.__live)) delete wrapped[k]; delete wrapped.__live; } wrapped = null; };
  wrap();
  a.onLoaded = wrap;
  const timer = setInterval(wrap, 500);   // a new model opened some other way: its editor gets the hooks
  return { wrap, stop: () => { clearInterval(timer); a.onLoaded = null; unwrap(); } };
}

/** Studio's entry point: the adapter for the IFC model open in this window (window.bimcraftLive), or null. */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.bimcraftLive;
  if (!app) return null;
  // pinned to the model the session shares: activating another model of the scene changes app.editor, not this one
  let pinned = null;
  const editor = () => pinned || (pinned = app.editor || null);
  const a = createLive({ editor, open: (bytes, name) => { pinned = null; return app.open(bytes, name); }, refresh: (geometry) => app.refresh(geometry), name: () => app.name });
  if (app.editor && !(app.editor.api && typeof app.editor.api.file === 'function')) return null;   // web-ifc (old builds): no line-level access
  const lv = host && host.live;
  if (lv && lv.on) {
    let w = null, offs = [];
    const say = (m) => { try { app.status && app.status(m); } catch { /* no status bar */ } };
    const off = lv.on((c) => {
      if (c && c.adapter === a) {
        a.bind(c); w = watchEditor(editor, a, c);
        app.live = a;
        offs = [
          c.on('refused', (r) => say(t(r.reason === 'locked' ? 'live.refused.locked' : r.reason === 'role' ? 'live.refused.role' : 'live.refused', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('undo-skipped', (r) => say(t('live.undo_skipped', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('ended', () => say(t('live.ended'))),
          c.on('status', ({ status, first }) => {
      // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
      if (status === 'live') { if (first !== false || c.toldDrop) say(t('live.status.live')); c.toldDrop = false; }
      else if (status === 'reconnecting') setTimeout(() => { if (c.status === 'reconnecting') { c.toldDrop = true; say(t('live.status.reconnecting')); } }, 1500);
      else if (status === 'waiting') say(t('live.status.waiting'));
    }),
        ];
      } else if (!c && a.client) { offs.forEach((f) => f()); if (w) w.stop(); a.unbind(); app.live = null; off(); }
    });
  }
  return a;
}

/** A browser opening a link with #live=<code> (a page a host serves on the LAN) or ?live=<ROOM>#<secret> joins. */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }
    }
  }
  if (!code && !link) return false;
  const adapter = createLiveAdapter({ host: fileHost });
  if (!adapter) return false;
  await lv.join({ adapter, name: t('live.guest'), code: code || undefined, link: link || undefined, url });
  return true;
}
