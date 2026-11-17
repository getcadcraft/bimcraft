/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/oem-families-ui.js — manufacturers' models as MEP families (0.9.1, suggestion #1499), through model-ui.js `extend()`;
 * mep-ui.js mounts it.
 *
 *   Families…  [data-oem-open] (Build ribbon; also on the Valve tool's bar)
 *     the model's families, each with Edit, Download as a Library item (.json, with its ports: the file the Library takes)
 *     and Delete (refused while it is placed). Import a model… reads a manufacturer's file with the readers BimCraft already
 *     has — IFC, STEP (.stp / .step), OBJ, STL, glTF / GLB, or a Library item (.json) — nothing new is parsed here. Then the
 *     ports dialog: the name, maker and model, whether it goes ON a run (a valve, strainer or damper: exactly two ports in
 *     line) or stands as equipment, what it is written as, and one row per port: name, pipe or duct, service, flow direction,
 *     size (a pipe's outside diameter), nominal size, end type, where it is (X, Y, Z in the model's own millimetres) and the
 *     way it faces. "On a face" puts a port at the centre of a face of the model's box; a small top view shows them.
 *     Save keeps the family in the model (one undo step). It is then in the Valve tool's list (on a run) or under Equipment
 *     › Manufacturer's family.
 * Test hook: window.bimcraftOemFamilies = { open(), edit(draft), importFile(file), state() }.
 */
import { modelFamilies, familyById, cleanFamily, inlineFrame, meshBox, planHull, familyToLibraryItem, familyFromItem, freeFamilyId, EQUIP_CLASSES, FAMILY_LIMITS, PORT_DIRECTIONS } from './oem-families.js';
import { saveFamily, removeFamily, familyUse, syncMepData } from './pipe-specs-model.js';
import { inlineKindsFor } from './inline.js';
import { JOINTS } from './pipe-specs.js';
import { PIPE_SYSTEMS, DUCT_SYSTEMS, systemLabel } from '../mep-model.js';
import { ModelWriter } from '../model-write.js';
import { el } from '../ui-util.js';

const FACES = { '+x': [1, 0, 0], '-x': [-1, 0, 0], '+y': [0, 1, 0], '-y': [0, -1, 0], '+z': [0, 0, 1], '-z': [0, 0, -1] };
const faceOf = (ax) => Object.keys(FACES).find((k) => FACES[k].every((v, i) => Math.abs(v - ax[i]) < 1e-6)) || '';
const SVG = 'http://www.w3.org/2000/svg';

export function mountOemFamilies(modelUi, { changed = () => {} } = {}) {
  let A = null, ST = null;
  const t = (...a) => A.t(...a);
  const W = () => new ModelWriter(A.ed().W, A.ed().api, A.ed().mid);
  const n2 = (v) => (Number.isFinite(v) ? String(Math.round(v * 100) / 100) : '');
  const num = (s) => Number(String(s ?? '').trim().replace(',', '.'));
  const errText = (c) => t(c.error || c.key || 'mep.oem.err.format', c.fill || {});
  const baseName = (role, b) => (role === 'inline' ? t('mep.valve.' + b) : t('mep.oem.cls.' + b));

  /** A file → a family draft (its mesh, and the ports it already has), through the readers the app has. */
  async function readFile(file) {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const bytes = new Uint8Array(await file.arrayBuffer());
    const head = new TextDecoder('latin1').decode(bytes.subarray(0, 64));
    const name = file.name.replace(/\.[^.]+$/, '');
    const L = await import('../libitem.js');
    const notes = [];
    const fromIfc = async (ifcBytes, format) => {
      const api = A.ed().api, { itemsFromIfc } = await import('../libitem-ifc.js');
      const mid = api.OpenModel(ifcBytes, { COORDINATE_TO_ORIGIN: false });
      let r;
      try { r = itemsFromIfc(api, mid); } finally { api.CloseModel(mid); }
      const items = (r.items || []).filter((it) => it.body && it.body.type !== 'box' && it.body.indices?.length);
      if (!items.length) throw Object.assign(new Error('mep.oem.err.nomesh'), { key: 'mep.oem.err.nomesh' });
      items.sort((a, b) => b.body.indices.length - a.body.indices.length);
      if (items.length > 1) notes.push(t('mep.oem.note.largest', { n: items.length, name: items[0].name || '' }));
      return familyFromItem(items[0], { name, file: file.name, format });
    };
    if (ext === 'json' || /^\s*\{/.test(head)) {
      let v;
      try { v = JSON.parse(new TextDecoder().decode(bytes)); } catch (e) { throw Object.assign(new Error('mep.oem.err.json'), { key: 'mep.oem.err.json' }); }
      if (v?.format === 'cadcraft-mep-family') return { draft: v, notes };
      const d = familyFromItem(v, { name, file: file.name, format: 'json' });
      if (!d) throw Object.assign(new Error('mep.oem.err.nomesh'), { key: 'mep.oem.err.nomesh' });
      return { draft: d, notes };
    }
    if (ext === 'stp' || ext === 'step' || (head.startsWith('ISO-10303-21') && /AP2\d\d|AUTOMOTIVE_DESIGN|CONFIG_CONTROL_DESIGN|MANAGED_MODEL/i.test(new TextDecoder('latin1').decode(bytes.subarray(0, 2000))))) {
      const r = (await import('../step-ifc.js')).stepToIfc(bytes, { name });
      return { draft: await fromIfc(new TextEncoder().encode(r.text), 'step'), notes };
    }
    if (ext === 'ifc' || head.startsWith('ISO-10303-21')) return { draft: await fromIfc(bytes, 'ifc'), notes };
    if (['obj', 'stl', 'glb', 'gltf'].includes(ext) || head.startsWith('glTF')) {
      const kind = head.startsWith('glTF') ? 'glb' : ext;
      const units = ST?.units || (kind === 'obj' || kind === 'stl' ? 'mm' : null);
      const r = L.itemFromMesh(bytes, kind, { units, upAxis: ST?.up || null, name });
      const item = (r.items || [])[0];
      const d = item && familyFromItem(item, { name, file: file.name, format: kind });
      if (!d) throw Object.assign(new Error('mep.oem.err.nomesh'), { key: 'mep.oem.err.nomesh' });
      return { draft: d, notes };
    }
    throw Object.assign(new Error('mep.oem.err.type'), { key: 'mep.oem.err.type' });
  }

  // ---- the list ----
  function open() {
    if (!A.ed()) { A.host.status(t('mep.spec.err.nomodel'), true); return; }
    A.root.querySelector('[data-oem-dialog]')?.remove();
    let use = new Map();
    try { const w = W(); syncMepData(w); use = familyUse(w); } catch (e) { use = new Map(); }
    ST = { units: 'mm', up: 'z' };
    const err = el('p', { className: 'bc-input-err', role: 'alert', 'data-oem-err': '' });
    const body = el('tbody', {});
    const fams = modelFamilies();
    for (const f of fams) {
      const b = (key, attr, fn) => { const x = el('button', { type: 'button', className: 'btn-line btn-sm-cc', [attr]: f.id }, t(key)); x.addEventListener('click', fn); return x; };
      const fr = f.role === 'inline' ? inlineFrame(f) : null;
      body.append(el('tr', { 'data-oem-row': f.id }, el('td', {}, f.name, f.maker || f.model ? el('span', { className: 'bc-sub' }, ' ' + [f.maker, f.model].filter(Boolean).join(' ')) : null),
        el('td', {}, t('mep.oem.role.' + f.role) + ' · ' + baseName(f.role, f.base)), el('td', {}, t('mep.oem.ports.n', { n: f.ports.length }) + (fr?.ok ? ' · ' + t('mep.oem.length', { mm: n2(fr.L) }) : '')), el('td', {}, String(use.get(f.id) || 0)),
        el('td', { className: 'bc-oem-acts' }, b('mep.oem.edit', 'data-oem-edit', () => { dlg.close(); edit(f); }),
          b('mep.oem.libitem', 'data-oem-lib', () => A.host.download(f.id + '.library-item.json', JSON.stringify(familyToLibraryItem(f)), 'application/json')),
          b('mep.spec.delete', 'data-oem-del', () => { if (use.get(f.id)) { err.textContent = t('mep.oem.err.inuse', { n: use.get(f.id) }); return; } A.commit(removeFamily(f.id), { label: t('mep.oem.title'), verb: t('model.verb.deleted') }); changed(); dlg.close(); open(); }))));
    }
    const file = el('input', { type: 'file', accept: '.ifc,.stp,.step,.obj,.stl,.glb,.gltf,.json', hidden: true, 'data-oem-file': '' });
    const units = el('select', { className: 'bc-mb-select', 'data-oem-units': '', 'aria-label': t('mep.oem.units') }, ...['mm', 'cm', 'm', 'in', 'ft'].map((u) => el('option', { value: u }, u)));
    const up = el('select', { className: 'bc-mb-select', 'data-oem-up': '', 'aria-label': t('mep.oem.up') }, el('option', { value: 'z' }, t('mep.oem.up.z')), el('option', { value: 'y' }, t('mep.oem.up.y')));
    units.addEventListener('change', () => { ST.units = units.value; }); up.addEventListener('change', () => { ST.up = up.value; });
    const imp = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', 'data-oem-import': '' }, t('mep.oem.import'));
    imp.addEventListener('click', () => file.click());
    file.addEventListener('change', async () => { const fl = file.files?.[0]; file.value = ''; if (!fl) return; err.textContent = ''; const r = await importFile(fl).catch((e) => ({ error: e })); if (r?.error) { err.textContent = t(r.error.key || 'mep.oem.err.read', { file: fl.name, why: r.error.message || '' }); return; } dlg.close(); });
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide bc-oem', 'aria-labelledby': 'bc-oem-h', 'data-oem-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-oem-h' }, t('mep.oem.title')),
        el('p', { className: 'bc-muted' }, t('mep.oem.note')),
        fams.length ? el('div', { className: 'bc-pspec-scroll' }, el('table', { className: 'bc-table', 'data-oem-table': '' }, el('thead', {}, el('tr', {}, el('th', {}, t('mep.oem.c.name')), el('th', {}, t('mep.oem.c.kind')), el('th', {}, t('mep.oem.c.ports')), el('th', {}, t('mep.oem.c.placed')), el('th', {}, ''))), body))
          : el('p', { className: 'bc-sub', 'data-oem-none': '' }, t('mep.oem.none')),
        el('p', { className: 'bc-lib-actions' }, imp, el('label', {}, el('span', { className: 'bc-sub' }, t('mep.oem.units')), ' ', units), el('label', {}, el('span', { className: 'bc-sub' }, t('mep.oem.up')), ' ', up), file),
        el('p', { className: 'bc-sub' }, t('mep.oem.formats')), err,
        el('p', { className: 'bc-lib-actions' }, el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel' }, t('mep.oem.close')))));
    dlg.addEventListener('close', () => dlg.remove());
    A.root.append(dlg);
    dlg.showModal();
  }
  async function importFile(file) {
    if (!A.ed()) throw Object.assign(new Error('mep.spec.err.nomodel'), { key: 'mep.spec.err.nomodel' });
    ST ||= { units: 'mm', up: 'z' };
    const { draft, notes } = await readFile(file);
    const tris = (draft.body?.indices?.length || 0) / 3;
    if (tris > FAMILY_LIMITS.triangles) throw Object.assign(new Error('mep.oem.err.big'), { key: 'mep.oem.err.big', fill: { n: FAMILY_LIMITS.triangles, have: tris } });
    edit(draft, notes);
    return { draft };
  }

  // ---- the ports dialog ----
  function edit(src, notes = []) {
    A.root.querySelector('[data-oemed-dialog]')?.remove();
    const isNew = !(src.id && familyById(src.id));
    const D = { ...src, role: src.role === 'equipment' ? 'equipment' : 'inline', ports: (src.ports || []).map((p) => ({ ...p, axis: (p.axis || [1, 0, 0]).slice() })) };
    const box = meshBox(D.body), size = box.max.map((v, i) => v - box.min[i]), mid = box.max.map((v, i) => (v + box.min[i]) / 2);
    const faceCentre = (k) => { const ax = FACES[k], q = mid.slice(); for (let i = 0; i < 3; i++) if (ax[i]) q[i] = ax[i] > 0 ? box.max[i] : box.min[i]; return q; };
    // a new in-line family starts with a port on each end of its longest horizontal side (sizes left for the person to type)
    if (isNew && !D.ports.length) { const k = size[0] >= size[1] ? 'x' : 'y'; D.ports = [['-' + k, 'in'], ['+' + k, 'out']].map(([f, nm]) => { const q = faceCentre(f); return { name: nm, kind: 'pipe', system: 'chw', direction: 'both', shape: 'round', size: NaN, nominal: '', end: '', x: q[0], y: q[1], z: q[2], axis: FACES[f].slice() }; }); }
    const err = el('p', { className: 'bc-input-err', role: 'alert', 'data-oemed-err': '' });
    const rows = el('tbody', { 'data-oemed-rows': '' });
    const view = document.createElementNS(SVG, 'svg');
    view.setAttribute('class', 'bc-oem-view'); view.setAttribute('data-oemed-view', ''); view.setAttribute('role', 'img'); view.setAttribute('aria-label', t('mep.oem.view'));
    const hull = planHull(D.body);
    const f = (k) => dlg.querySelector('[data-oemed-f="' + k + '"]');

    function readPorts() {
      return [...rows.children].map((tr) => {
        const c = (k) => tr.querySelector('[data-oemed-c="' + k + '"]');
        const face = c('face').value, kind = c('kind').value;
        const ax = face ? FACES[face] : [num(c('ax').value), num(c('ay').value), num(c('az').value)];
        return { name: c('name').value.trim(), kind, system: c('system').value, direction: c('direction').value, shape: 'round', size: num(c('size').value), nominal: c('nominal').value.trim(), end: c('end').value, x: num(c('x').value), y: num(c('y').value), z: num(c('z').value), axis: ax };
      });
    }
    function drawView() {
      const ports = readPorts(), pad = Math.max(size[0], size[1]) * 0.25 + 10;
      const x0 = box.min[0] - pad, y0 = box.min[1] - pad, w = size[0] + 2 * pad, h = size[1] + 2 * pad;
      view.setAttribute('viewBox', [x0, -(y0 + h), w, h].join(' '));
      const mk = (tag, attrs) => { const n = document.createElementNS(SVG, tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); return n; };
      const sw = Math.max(w, h) / 220;
      view.replaceChildren(mk('polygon', { points: hull.map((q) => q[0] + ',' + -q[1]).join(' '), class: 'bc-oem-hull', 'stroke-width': sw }));
      ports.forEach((p, i) => {
        if (![p.x, p.y].every(Number.isFinite)) return;
        const r = Math.max(w, h) / 60, a = p.axis.every(Number.isFinite) ? p.axis : [0, 0, 0], l = Math.hypot(a[0], a[1]) || 1;
        view.append(mk('circle', { cx: p.x, cy: -p.y, r, class: 'bc-oem-port' }));
        if (Math.hypot(a[0], a[1]) > 0.2) view.append(mk('line', { x1: p.x, y1: -p.y, x2: p.x + a[0] / l * r * 4, y2: -(p.y + a[1] / l * r * 4), class: 'bc-oem-axis', 'stroke-width': sw * 1.5 }));
        const tx = mk('text', { x: p.x + r * 1.4, y: -p.y - r * 1.4, 'font-size': r * 3, class: 'bc-oem-label' }); tx.textContent = p.name || String(i + 1); view.append(tx);
      });
    }
    function portRow(p) {
      const inp = (k, v, sz, label, cls = 'bc-input bc-num') => el('input', { type: 'text', className: cls, size: sz, value: v, 'data-oemed-c': k, 'aria-label': label });
      const sel = (k, list, v, label) => el('select', { className: 'bc-mb-select', 'data-oemed-c': k, 'aria-label': label }, ...list.map(([val, lab]) => el('option', { value: val, selected: val === v }, lab)));
      const kind = sel('kind', [['pipe', t('mep.kind.pipe')], ['duct', t('mep.kind.duct')]], p.kind, t('mep.oem.p.kind'));
      const sysList = (kd) => Object.keys(kd === 'duct' ? DUCT_SYSTEMS : PIPE_SYSTEMS).filter((s) => !DUCT_SYSTEMS[s]?.carrier).map((s) => [s, systemLabel(kd, s)]);
      const system = sel('system', sysList(p.kind), p.system, t('mep.system'));
      kind.addEventListener('change', () => { system.replaceChildren(...sysList(kind.value).map(([v, l]) => el('option', { value: v }, l))); });
      const fc = faceOf(p.axis);
      const face = sel('face', [...Object.keys(FACES).map((k) => [k, t('mep.oem.face.' + (k[0] === '+' ? 'p' : 'n') + k[1])]), ['', t('mep.oem.face.custom')]], fc, t('mep.oem.p.faces'));
      const ax = inp('ax', n2(p.axis[0]), 3, 'X'), ay = inp('ay', n2(p.axis[1]), 3, 'Y'), az = inp('az', n2(p.axis[2]), 3, 'Z');   // i18n-ignore: axis letters
      const custom = el('span', { className: 'bc-oem-axis3', hidden: fc !== '' }, ax, ay, az);
      const x = inp('x', n2(p.x), 6, 'X'), y = inp('y', n2(p.y), 6, 'Y'), z = inp('z', n2(p.z), 6, 'Z');   // i18n-ignore: axis letters
      const onFace = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-oemed-onface': '', title: t('mep.oem.onface.title') }, t('mep.oem.onface'));
      onFace.addEventListener('click', () => { if (!face.value) return; const q = faceCentre(face.value); x.value = n2(q[0]); y.value = n2(q[1]); z.value = n2(q[2]); drawView(); });
      face.addEventListener('change', () => { custom.hidden = face.value !== ''; });
      const del = el('button', { type: 'button', className: 'bc-pspec-x', 'data-oemed-delport': '', 'aria-label': t('mep.oem.port.remove'), title: t('mep.oem.port.remove') }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }));
      const tr = el('tr', {}, el('td', {}, inp('name', p.name || '', 6, t('mep.oem.p.name'), 'bc-input')), el('td', {}, kind), el('td', {}, system),
        el('td', {}, sel('direction', PORT_DIRECTIONS.map((d) => [d, t('mep.eq.dir.' + d)]), p.direction || 'both', t('mep.oem.p.dir'))),
        el('td', {}, inp('size', n2(p.size), 5, t('mep.oem.p.size'))), el('td', {}, inp('nominal', p.nominal || '', 6, t('mep.oem.p.nominal'), 'bc-input')),
        el('td', {}, sel('end', [['', '—'], ...JOINTS.map((j) => [j, t('mep.spec.joint.' + j)])], p.end || '', t('mep.oem.p.end'))),
        el('td', { className: 'bc-oem-xyz' }, x, y, z), el('td', {}, face, custom, ' ', onFace), el('td', {}, del));
      del.addEventListener('click', () => { tr.remove(); drawView(); });
      tr.addEventListener('change', drawView);
      return tr;
    }
    for (const p of D.ports) rows.append(portRow(p));
    const role = el('select', { className: 'bc-mb-select', 'data-oemed-f': 'role' }, el('option', { value: 'inline', selected: D.role === 'inline' }, t('mep.oem.role.inline')), el('option', { value: 'equipment', selected: D.role === 'equipment' }, t('mep.oem.role.equipment')));
    const base = el('select', { className: 'bc-mb-select', 'data-oemed-f': 'base' });
    const fillBase = () => { const list = role.value === 'inline' ? [...inlineKindsFor('pipe'), ...inlineKindsFor('duct')] : Object.keys(EQUIP_CLASSES); const want = list.includes(D.base) ? D.base : list[0]; base.replaceChildren(...list.map((k) => el('option', { value: k, selected: k === want }, baseName(role.value, k)))); };
    fillBase();
    role.addEventListener('change', fillBase);
    const addPort = el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-oemed-addport': '' }, t('mep.oem.port.add'));
    addPort.addEventListener('click', () => { if (rows.children.length >= FAMILY_LIMITS.ports) return; const q = faceCentre('+x'); rows.append(portRow({ name: 'port-' + (rows.children.length + 1), kind: 'pipe', system: 'chw', direction: 'both', size: NaN, nominal: '', end: '', x: q[0], y: q[1], z: q[2], axis: [1, 0, 0] })); drawView(); });
    const txt = (k, v, sz) => el('input', { type: 'text', className: 'bc-input', value: v || '', size: sz, 'data-oemed-f': k });
    const lab = (text, input) => el('label', { className: 'bc-pspec-f' }, el('span', {}, text), input);
    const head = (k) => el('th', { scope: 'col' }, t('mep.oem.p.' + k));
    const dlg = el('dialog', { className: 'bc-dialog bc-dialog-wide bc-oem', 'aria-labelledby': 'bc-oemed-h', 'data-oemed-dialog': '' },
      el('form', { method: 'dialog' },
        el('h2', { className: 'bc-h', id: 'bc-oemed-h' }, t(isNew ? 'mep.oem.ed.new' : 'mep.oem.ed.title')),
        el('p', { className: 'bc-muted' }, t('mep.oem.ed.note')),
        notes.length ? el('p', { className: 'bc-sub', 'data-oemed-notes': '' }, notes.join(' ')) : null,
        el('div', { className: 'bc-oem-top' },
          el('div', { className: 'bc-pspec-fields' }, lab(t('mep.oem.f.name'), txt('name', D.name, 28)), lab(t('mep.oem.f.maker'), txt('maker', D.maker, 16)), lab(t('mep.oem.f.model'), txt('model', D.model, 16)),
            lab(t('mep.oem.f.role'), role), lab(t('mep.oem.f.base'), base),
            el('p', { className: 'bc-sub', 'data-oemed-box': '' }, t('mep.oem.box', { x: n2(size[0]), y: n2(size[1]), z: n2(size[2]), n: D.body.indices.length / 3 }), el('br'), t('mep.oem.boxfrom', { x0: n2(box.min[0]), x1: n2(box.max[0]), y0: n2(box.min[1]), y1: n2(box.max[1]), z0: n2(box.min[2]), z1: n2(box.max[2]) }))),
          view),
        el('div', { className: 'bc-pspec-scroll' }, el('table', { className: 'bc-table bc-pspec-table', 'data-oemed-table': '' },
          el('thead', {}, el('tr', {}, head('name'), head('kind'), el('th', {}, t('mep.system')), head('dir'), head('size'), head('nominal'), head('end'), head('at'), head('faces'), el('th', {}, ''))), rows)),
        el('p', { className: 'bc-lib-actions' }, addPort), err,
        el('p', { className: 'bc-lib-actions' },
          el('button', { type: 'submit', className: 'btn-plot btn-sm-cc', value: 'ok', 'data-oemed-save': '' }, t('mep.oem.save')),
          el('button', { type: 'submit', className: 'btn-line btn-sm-cc', value: 'cancel', formnovalidate: true }, t('model.gp.cancel')))));
    dlg.querySelector('form').addEventListener('submit', (e) => {
      if (e.submitter?.value !== 'ok') return;
      const stop = (text) => { e.preventDefault(); err.textContent = text; };
      const name = f('name').value.trim();
      const raw = { ...D, id: isNew ? freeFamilyId(name, modelFamilies().map((x) => x.id)) : D.id, name, maker: f('maker').value, model: f('model').value, role: role.value, base: base.value, ports: readPorts() };
      const c = cleanFamily(raw);
      if (c.error) return stop(errText(c));
      if (c.family.role === 'inline') { const fr = inlineFrame(c.family); if (!fr.ok) return stop(t(fr.error)); const want = inlineKindsFor(fr.kind); if (!want.includes(c.family.base)) return stop(t('mep.oem.err.base.' + fr.kind)); }
      else if (!c.family.ports.length) return stop(t('mep.oem.err.noports'));
      A.commit(saveFamily(c.family), { label: t('mep.oem.title'), verb: t(isNew ? 'model.verb.added' : 'model.verb.changed') });
      changed();
      A.host.status(t(c.family.role === 'inline' ? 'mep.oem.saved.inline' : 'mep.oem.saved.equipment', { name: c.family.name }));
    });
    dlg.addEventListener('close', () => dlg.remove());
    dlg.addEventListener('input', () => { err.textContent = ''; });
    A.root.append(dlg);
    drawView();
    dlg.showModal();
  }

  A = modelUi.extend({ tools: [], refresh() { /* the families in force follow the model through mep-model.js readRuns */ } });
  for (const b of A.root.querySelectorAll('[data-oem-open]')) if (!b.dataset.bound) { b.dataset.bound = '1'; b.addEventListener('click', () => { const m = b.closest('details'); if (m) m.open = false; open(); }); }
  const api = { open, edit, importFile, state: () => ST };
  if (typeof window !== 'undefined') window.bimcraftOemFamilies = api;   // for tests
  return api;
}
