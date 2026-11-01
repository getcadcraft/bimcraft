/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pv-oneline.js — the PV one-line diagram as data (0.8 EG.15, session `energy_PART_2`). No DOM, no model. Array → string fuses / combiner → DC disconnect →
 * inverter → AC disconnect → panel → utility, with a conductor and an overcurrent device on each run, sized from the FACTORS AND TABLES THE PERSON TYPES
 * (CODE_DEFAULTS holds an example set, labelled). Nothing here says a design complies with any code: it multiplies the numbers it is given.
 *
 *   CODE_DEFAULTS                         { iscFactor 1.25, contFactor 1.25, acFactor 1.25, derate 1, fuseFromStrings 3, ocpd [A…], wire [{ size, amps }…], label }
 *   nextOcpd(amps, list) → the smallest standard device ≥ amps      pickWire(amps, table, derate) → { size, amps } | null
 *   buildOneline(plan) → { nodes, edges, notes, totals }
 *       plan = { name, module, arrays: [{ id, name, modules, strings: { n, count, perMppt: [..] } }], inverter, inverters (count), ac: { voltage, phases },
 *                panel: 'Main panel', code }
 *   onelineSvg(diagram) → an SVG string (text escaped)
 *   pvOnelineForElectrical(plan) → the plain structure the CadCraft Electrical add-on places as symbols:
 *       { format: 'cadcraft-pv-oneline', version: 1, name, units, nodes: [{ id, kind, symbol, label, col, row, rating }], edges: [{ id, from, to, circuit: 'dc'|'ac', current, wire, ocpd, label }], notes }
 *       `symbol` is one of pv-array, fuse, combiner, disconnect, inverter, breaker, panel, meter, utility; col/row are a left-to-right grid (col 0 = the array).
 */
export const CODE_DEFAULTS = Object.freeze({
  iscFactor: 1.25, contFactor: 1.25, acFactor: 1.25, derate: 1, fuseFromStrings: 3,
  ocpd: Object.freeze([10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 400]),
  wire: Object.freeze([{ size: '14 AWG', amps: 25 }, { size: '12 AWG', amps: 30 }, { size: '10 AWG', amps: 40 }, { size: '8 AWG', amps: 55 }, { size: '6 AWG', amps: 75 }, { size: '4 AWG', amps: 95 },
    { size: '3 AWG', amps: 115 }, { size: '2 AWG', amps: 130 }, { size: '1 AWG', amps: 145 }, { size: '1/0 AWG', amps: 170 }, { size: '2/0 AWG', amps: 195 }, { size: '3/0 AWG', amps: 225 }, { size: '4/0 AWG', amps: 260 }]),
  label: 'example factors and an example copper wire table (ampacities typed here) — type the ones your code and conditions give; this is not a compliance statement',
});
const r1 = (x) => Math.round(x * 10) / 10;
const r2 = (x) => Math.round(x * 100) / 100;

export function nextOcpd(amps, list = CODE_DEFAULTS.ocpd) { const l = [...list].sort((a, b) => a - b); return l.find((x) => x >= amps - 1e-9) ?? null; }
export function pickWire(amps, table = CODE_DEFAULTS.wire, derate = 1) { const t = [...table].sort((a, b) => a.amps - b.amps); return t.find((w) => w.amps * derate >= amps - 1e-9) ?? null; }

export function buildOneline(plan) {
  const C = { ...CODE_DEFAULTS, ...(plan.code || {}) }, M = plan.module, inv = plan.inverter, nInv = Math.max(1, plan.inverters | 0 || 1);
  const ac = { voltage: plan.ac?.voltage ?? inv.vac ?? 240, phases: plan.ac?.phases ?? inv.phases ?? 1 };
  const nodes = [], edges = [], notes = [{ key: 'pv.note.code' }];
  let nid = 0;
  const node = (kind, label, col, row, rating = {}) => { const n = { id: kind + '-' + (++nid), kind, label, col, row, rating }; nodes.push(n); return n; };
  const edge = (a, b, circuit, current, extra = {}) => { const required = extra.required ?? current; const o = nextOcpd(required, C.ocpd), w = pickWire(required, C.wire, C.derate); edges.push({ id: 'e' + (edges.length + 1), from: a.id, to: b.id, circuit, current: r1(current), required: r1(required), ocpd: extra.noOcpd ? null : o, wire: w?.size ?? null, ...(extra.label ? { label: extra.label } : {}), ...(o === null || w === null ? { over: true } : {}) }); };
  const factor = C.iscFactor * C.contFactor;
  const totals = { kwp: 0, dcCurrentMax: 0 };
  const inverterNodes = [];
  for (let i = 0; i < nInv; i++) inverterNodes.push(null);
  let row = 0;
  const dcDisc = [];
  (plan.arrays || []).forEach((a, ai) => {
    const S = a.strings || { n: 0, count: 0 }, ii = Math.min(nInv - 1, a.inverter ?? ai % nInv);
    const arr = node('pv-array', a.name || ('Array ' + (ai + 1)), 0, row, { modules: a.modules, perString: S.n, strings: S.count, kwp: r2(a.modules * M.wp / 1000), voc: r2(S.n * M.voc), isc: M.isc });
    totals.kwp += a.modules * M.wp / 1000;
    const Iscs = M.isc, perCircuit = factor * Iscs;
    const combine = S.count >= C.fuseFromStrings;
    let last = arr;
    if (combine) {
      const cb = node('combiner', 'DC combiner', 1, row, { inputs: S.count, fuse: nextOcpd(perCircuit, C.ocpd) });
      edge(arr, cb, 'dc', Iscs, { required: perCircuit, label: S.count + ' strings of ' + S.n });
      last = cb;
    }
    const out = S.count * Iscs, req = factor * out;
    totals.dcCurrentMax = Math.max(totals.dcCurrentMax, out);
    const dd = node('disconnect', 'DC disconnect', 2, row, { rated: nextOcpd(req, C.ocpd) });
    edge(last, dd, 'dc', out, { required: req, label: combine ? 'combined output' : (S.count === 1 ? 'one string' : S.count + ' strings (fused ' + 'where required)') });
    dcDisc.push({ node: dd, ii });
    row++;
  });
  const acRows = [];
  const perInvAc = inv.pacKw * 1000 / (ac.voltage * (ac.phases === 3 ? Math.sqrt(3) : 1));
  const invs = [];
  for (let i = 0; i < nInv; i++) {
    const rowI = i, n = node('inverter', (inv.name || 'Inverter') + (nInv > 1 ? ' ' + (i + 1) : ''), 3, rowI, { pacKw: inv.pacKw, vdcMax: inv.vdcMax, mpptMin: inv.mpptMin, mpptMax: inv.mpptMax });
    invs.push(n);
    for (const d of dcDisc.filter((x) => x.ii === i)) edge(d.node, n, 'dc', edges.find((e) => e.to === d.node.id)?.current ?? 0, { required: edges.find((e) => e.to === d.node.id)?.required, label: 'to inverter input' });
    const adisc = node('disconnect', 'AC disconnect', 4, rowI, { rated: nextOcpd(C.acFactor * perInvAc, C.ocpd) });
    edge(n, adisc, 'ac', perInvAc, { required: C.acFactor * perInvAc, label: ac.voltage + ' V ' + (ac.phases === 3 ? '3-phase' : '1-phase') });
    acRows.push(adisc);
  }
  const panel = node('panel', plan.panel || 'Main panel', 5, 0, { voltage: ac.voltage, phases: ac.phases });
  const totalAc = perInvAc * nInv;
  for (const a of acRows) edge(a, panel, 'ac', perInvAc, { required: C.acFactor * perInvAc, label: 'PV breaker' });
  const util = node('utility', 'Utility', 6, 0, {});
  edge(panel, util, 'ac', totalAc, { required: C.acFactor * totalAc, noOcpd: true, label: 'service' });
  totals.kwp = r2(totals.kwp); totals.acKw = r2(inv.pacKw * nInv); totals.acCurrent = r1(totalAc);
  if (edges.some((e) => e.over)) notes.push({ key: 'pv.oneline.over' });
  return { name: plan.name || 'PV system', nodes, edges, notes, totals, code: { iscFactor: C.iscFactor, contFactor: C.contFactor, acFactor: C.acFactor, derate: C.derate, label: C.label } };
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
/** A plain SVG, left to right. Colours are inherited (currentColor) so it takes the page's theme. */
export function onelineSvg(d) {
  const W = 150, H = 62, GX = 46, GY = 30, cols = Math.max(...d.nodes.map((n) => n.col)) + 1, rows = Math.max(...d.nodes.map((n) => n.row)) + 1;
  const pos = (n) => ({ x: 20 + n.col * (W + GX), y: 20 + n.row * (H + GY) });
  const width = 40 + cols * W + (cols - 1) * GX, height = 40 + rows * H + (rows - 1) * GY;
  const by = new Map(d.nodes.map((n) => [n.id, n]));
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${esc(d.name)}" fill="none" stroke="currentColor" stroke-width="1.5" font-family="sans-serif" font-size="11">`];
  for (const e of d.edges) {
    const a = pos(by.get(e.from)), b = pos(by.get(e.to)), x1 = a.x + W, y1 = a.y + H / 2, x2 = b.x, y2 = b.y + H / 2, mx = (x1 + x2) / 2;
    parts.push(`<path d="M${x1} ${y1} H${mx} V${y2} H${x2}" ${e.circuit === 'dc' ? 'stroke-dasharray="0"' : 'stroke-dasharray="6 3"'}/>`);
    const t = [e.current + ' A', e.wire, e.ocpd ? e.ocpd + ' A' : ''].filter(Boolean).join(' · ');
    parts.push(`<text x="${mx - 4}" y="${Math.min(y1, y2) - 4}" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">${esc(t)}</text>`);
  }
  for (const n of d.nodes) {
    const p = pos(n);
    parts.push(`<rect x="${p.x}" y="${p.y}" width="${W}" height="${H}" rx="3"/>`);
    parts.push(`<text x="${p.x + W / 2}" y="${p.y + 20}" text-anchor="middle" fill="currentColor" stroke="none" font-weight="bold">${esc(n.label)}</text>`);
    const sub = n.kind === 'pv-array' ? `${n.rating.strings} × ${n.rating.perString} modules, ${n.rating.kwp} kWp` : n.kind === 'inverter' ? `${n.rating.pacKw} kW AC` : n.kind === 'combiner' ? `${n.rating.inputs} inputs` : n.kind === 'disconnect' ? (n.rating.rated ? `rated ${n.rating.rated} A` : '') : n.kind === 'panel' ? `${n.rating.voltage} V` : '';
    if (sub) parts.push(`<text x="${p.x + W / 2}" y="${p.y + 40}" text-anchor="middle" fill="currentColor" stroke="none">${esc(sub)}</text>`);
  }
  parts.push('</svg>');
  return parts.join('');
}

const SYMBOL = { 'pv-array': 'pv-array', combiner: 'combiner', disconnect: 'disconnect', inverter: 'inverter', panel: 'panel', utility: 'utility' };
/** The hand-off to the CadCraft Electrical add-on (docs/0.8-sessions/energy_PART_2-pv-electrical-handoff.md): plain data, no references to BimCraft. */
export function pvOnelineForElectrical(plan) {
  const d = buildOneline(plan);
  const nodes = d.nodes.map((n) => ({ id: n.id, kind: n.kind, symbol: SYMBOL[n.kind] || n.kind, label: n.label, col: n.col, row: n.row, rating: n.rating }));
  const edges = d.edges.map((e) => ({ id: e.id, from: e.from, to: e.to, circuit: e.circuit, current: e.current, wire: e.wire, ocpd: e.ocpd, label: e.label || '' }));
  return { format: 'cadcraft-pv-oneline', version: 1, name: d.name, units: { current: 'A', voltage: 'V', power: 'kW' }, nodes, edges, notes: d.notes.map((n) => n.key), code: d.code, totals: d.totals };
}
