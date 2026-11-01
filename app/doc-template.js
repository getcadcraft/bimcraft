/* SPDX-License-Identifier: Apache-2.0 */
/**
 * doc-template.js — documents from the model (0.8 SU.889 "DocumentCAD", session sx-tags; plan docs/0.8-PART2.md § SU.889).
 * No DOM: tools/bimcraft-test/doc-test.mjs (node bin/test-bimcraft.mjs --sx-tags --only docs) runs it in Node.
 *
 * A template is Markdown with fields in {{ }}. It reads the open IFC through the property index (ifc-props.js propertyIndex) and the
 * project's tag definitions (tags.js, SU.915): quantities and IFC properties as the file states them, and tags — never fields of its
 * own (the plan's single property model). render() fills the fields → Markdown → blocks that doc-pdf.js / doc-docx.js / the page draw.
 *
 * Fields (case-blind command words; <sel> = a class, several joined by |, or *, then optional `where`, `by`, `sort`):
 *   {{project}} {{project description}} {{file}} {{date}}
 *   {{count <sel>}}                       how many elements
 *   {{sum <sel> <qty>}}                   a total with its unit (NetSideArea, Qto_WallBaseQuantities.Length, a number tag …)
 *   {{qty <sel> <qty> by <field>}}        a table: one row per value of <field>, its count and total, a total row (no `by` = sum)
 *   {{table <sel> cols <f1>, <f2>, …}}    a table, one row per element
 *   {{calc <expr> [round n] [unit u]}}    arithmetic (+ - * / parentheses, numbers) over bracketed terms: [sum <sel> <qty>] [count <sel>] and, inside an each,
 *                                         [qty <qty>] [prop <field>]; e.g. {{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}; a term that cannot be read, or a division by zero, prints [?…]
 *   {{tags}}                              the tag definitions as a table
 *   {{tag <Name>}}                        in an each: the element's value; elsewhere the distinct values in scope ("Oak, Painted")
 *   {{#each <sel>}} … {{else}} … {{/each}}     per element (sorted by storey then name, or `sort <field>`); else = none matched
 *   {{#group <sel> by <field>}} … {{/group}}   per distinct value (no value last); inside: {{value}} {{count}} {{sum <qty>}},
 *                                              {{tag X}}, and {{#each}} (no class) over the group's elements
 *   inside an each: {{name}} {{type}} {{storey}} {{class}} {{material}} {{mark}} {{guid}} {{n}} {{prop <field>}} {{qty <qty>}}
 *   where: <field> = | != | ~ (contains) | !~ | > | < | >= | <= <value>, or <field> has | hasnot; joined with `and`; "quotes" keep words
 *   <field>: a built-in (name, type, storey, level, class, material, mark = IFC Tag, longname, objecttype, predefined, guid), tag:<Name>
 *     or a defined tag's name, Set.Property, or a bare property / quantity name (quantity sets first)
 *   \{{ prints {{ . A field that cannot be read prints [?…] and adds a warning.
 *
 *   docSource({ ixs: [ix…], defs, units, unitMm, project, file, date }) → src     units { length, area, volume } symbols
 *   projectUnits(api, mid) → { length, area, volume }                               from IfcUnitAssignment
 *   render(template, src, { decimals }) → { markdown, blocks, warnings: [{ key, fill }] }
 *   parseMarkdown(md) → blocks: { t: 'h', level, runs } | { t: 'p', runs } | { t: 'ul' | 'ol', items: [runs] } | { t: 'quote', runs }
 *     | { t: 'table', head: [runs], rows: [[runs]], align: ['l' | 'r' | 'c'] } | { t: 'hr' }; runs [{ s, b?, i?, code? }]
 *   plainText(runs) → text
 */
import { tagField, appliesTo, TAGS_PSET } from './tags.js';
import { find } from './ifc-find.js';

export const LIMITS = { template: 200000, output: 2000000, depth: 6, rows: 5000 };
const BUILTIN = { name: 'name', type: 'type', storey: 'storey', level: 'storey', class: 'cls', cls: 'cls', material: 'material', mark: 'tag', ifctag: 'tag',
  longname: 'longname', 'long name': 'longname', objecttype: 'objtype', 'object type': 'objtype', predefined: 'predefined', guid: 'guid', globalid: 'guid' };   // i18n-ignore: field words the template language reads
const OPMAP = { '=': 'is', '==': 'is', is: 'is', '!=': 'isnot', '~': 'contains', contains: 'contains', '!~': 'notcontains', '>': 'gt', '<': 'lt', '>=': 'gte', '<=': 'lte', has: 'has', hasnot: 'hasnot', starts: 'starts' };
const KEYWORDS = new Set(['where', 'by', 'sort', 'cols']);
const SEL_RE = /^(\*|Ifc[A-Za-z0-9]+(\|Ifc[A-Za-z0-9]+)*)$/i;
const w = (key, fill = {}) => ({ key, fill });

// ------------------------------------------------------------------------------------------------ the model as a source
const SYM = { METRE: 'm', SQUARE_METRE: 'm²', CUBIC_METRE: 'm³' };
const PREFIX = { MILLI: 'm', CENTI: 'c', DECI: 'd', KILO: 'k' };
const CONV = { foot: 'ft', feet: 'ft', inch: 'in', 'square foot': 'ft²', 'square feet': 'ft²', 'square inch': 'in²', 'cubic foot': 'ft³', 'cubic feet': 'ft³', 'cubic yard': 'yd³', 'square yard': 'yd²', yard: 'yd' };   // i18n-ignore: IFC unit names
const enumVal = (v) => String(v?.value ?? v ?? '').replace(/^\.|\.$/g, '');
/** The project's length, area and volume units as symbols, from its IfcUnitAssignment (defaults m, m², m³). */
export function projectUnits(api, mid) {
  const out = { length: 'm', area: 'm²', volume: 'm³' };
  let list = [];
  try { const v = api.GetLineIDsWithType(mid, api.GetTypeCodeFromName('IFCUNITASSIGNMENT')); for (let i = 0; i < v.size(); i++) list.push(v.get(i)); } catch (e) { return out; }
  for (const ua of list.slice(0, 1)) {
    const l = api.GetLine(mid, ua, false);
    for (const h of l?.Units || []) {
      const u = api.GetLine(mid, h.value, false);
      if (!u) continue;
      const kind = enumVal(u.UnitType), slot = kind === 'LENGTHUNIT' ? 'length' : kind === 'AREAUNIT' ? 'area' : kind === 'VOLUMEUNIT' ? 'volume' : null;
      if (!slot) continue;
      const name = enumVal(u.Name);
      if (SYM[name]) out[slot] = (PREFIX[enumVal(u.Prefix)] || '') + SYM[name];
      else if (CONV[String(name).toLowerCase()]) out[slot] = CONV[String(name).toLowerCase()];
    }
  }
  return out;
}

/** A source over one or more property indexes (elements, and the spaces' own index when given). */
export function docSource({ ixs = [], defs = [], units = { length: 'mm', area: 'm²', volume: 'm³' }, unitMm = 1, project = {}, file = '', date = '' } = {}) {
  const els = [];
  for (const ix of ixs) if (ix) for (const id of ix.ids) els.push({ ix, id, key: ix.keyBase + id });
  return { ixs: ixs.filter(Boolean), els, defs, units, unitMm, project, file, date };
}

const tagDef = (src, name) => src.defs.find((d) => d.name.toLowerCase() === String(name).trim().toLowerCase()) || null;
const isQtoGroup = (g) => /^Qto_|BaseQuantities/i.test(g || '');
/** A field word → { id, def?, label } or null. pool: the elements it will be read on — of several properties with that name
 *  (Width is in Qto_WallBaseQuantities and Qto_DoorBaseQuantities), the one most of them carry wins. */
function resolveField(src, word, pool = null) {
  const s = String(word || '').trim();
  if (!s) return null;
  const low = s.toLowerCase();
  if (BUILTIN[low]) return { id: BUILTIN[low], label: s };
  if (low.startsWith('tag:')) { const d = tagDef(src, s.slice(4)); return d ? { id: tagField(d.name), def: d, label: d.name } : null; }
  const d = tagDef(src, s);
  if (d) return { id: tagField(d.name), def: d, label: d.name };
  const fields = src.ixs.flatMap((ix) => ix.fields);
  if (s.includes('.')) { const id = 'p:' + s; if (fields.some((f) => f.id === id)) return { id, label: s.split('.').pop() }; }
  const hits = fields.filter((f) => f.group && f.group !== TAGS_PSET && f.label.toLowerCase() === low);
  const seen = new Map();
  if (pool && hits.length > 1) for (const h of hits) { let c = 0; for (const e of pool.slice(0, 5000)) if (e.ix.value(h.id, e.id) !== undefined) c++; seen.set(h.id, c); }
  hits.sort((a, b) => (seen.get(b.id) || 0) - (seen.get(a.id) || 0) || (isQtoGroup(b.group) ? 1 : 0) - (isQtoGroup(a.group) ? 1 : 0));
  // a bare name reads each element's own set: the first of these it has (Width = Qto_DoorBaseQuantities.Width on a door, …Window… on a window)
  return hits.length ? { id: hits[0].id, label: hits[0].label, group: hits[0].group, alts: hits.slice(1).map((h) => h.id) } : null;
}
function valueOf(src, el, f) {
  let v = el.ix.value(f.id, el.id);
  if (v === undefined && f.alts) for (const a of f.alts) { v = el.ix.value(a, el.id); if (v !== undefined) break; }
  if (v === undefined || v === null) return '';
  if (f.def?.kind === 'length' && typeof v === 'number') v = Math.round(v * src.unitMm * 1e6) / 1e6;
  if (f.def?.kind === 'yesno') v = v === 'Yes' || v === true || v === 1 ? 'Yes' : 'No';   // i18n-ignore: the index's own words
  return v;
}
/** The unit printed after a quantity. */
function unitOf(src, f) {
  if (f.def) return f.def.kind === 'length' ? 'mm' : f.def.kind === 'angle' ? '°' : '';
  const n = String(f.label || f.id);
  if (/Area$/i.test(n)) return src.units.area;
  if (/Volume$/i.test(n)) return src.units.volume;
  if (/(Length|Width|Height|Depth|Perimeter|Thickness|Span)$/i.test(n)) return src.units.length;
  return '';
}

// ------------------------------------------------------------------------------------------------ the template
/** Words, keeping "quoted text" together (quotes taken off). */
function words(s) {
  const out = [];
  const re = /"([^"]*)"|(\S+)/g;
  let m;
  while ((m = re.exec(s))) out.push(m[1] !== undefined ? { w: m[1], q: true } : { w: m[2], q: false });
  return out;
}
/** `<head words> [where …] [by …] [sort …] [cols …]` → { head: [words], where, by, sort, cols } (each a string). */
function sections(s) {
  const ws = words(s), out = { head: [] };
  let cur = 'head';
  for (const x of ws) {
    if (!x.q && KEYWORDS.has(x.w.toLowerCase())) { cur = x.w.toLowerCase(); out[cur] = out[cur] || []; continue; }
    (out[cur] = out[cur] || []).push(x);
  }
  return out;
}
const join = (ws) => (ws || []).map((x) => x.w).join(' ');
/** where words → rules for ifc-find.js, or an error. */
function rulesOf(src, ws, pool = null) {
  if (!ws || !ws.length) return { rules: [] };
  const parts = [[]];
  for (const x of ws) { if (!x.q && x.w.toLowerCase() === 'and') parts.push([]); else parts[parts.length - 1].push(x); }
  const rules = [];
  for (const p of parts) {
    const i = p.findIndex((x) => !x.q && OPMAP[x.w.toLowerCase()]);
    if (i <= 0) return { error: w('sx.su889.warn.where', { text: join(p) }) };
    const f = resolveField(src, join(p.slice(0, i)), pool);
    if (!f) return { error: w('sx.su889.warn.field', { name: join(p.slice(0, i)) }) };
    let value = join(p.slice(i + 1));
    if (f.def?.kind === 'yesno') value = /^(1|yes|true)$/i.test(value) ? 'Yes' : /^(0|no|false)$/i.test(value) ? 'No' : value;   // i18n-ignore: the index's own words
    if (f.def?.kind === 'length' && Number.isFinite(Number(value))) value = String(Number(value) / src.unitMm);
    rules.push({ field: f.id, op: OPMAP[p[i].w.toLowerCase()], value });
  }
  return { rules };
}
const cmp = (a, b) => {
  if (a === b) return 0;
  if (a === '') return 1;
  if (b === '') return -1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
};
/** Elements a selection names, narrowed by where, sorted. pool = the scope's elements when the selection has no class. */
function select(src, sec, pool, warn) {
  const head = sec.head || [];
  let list = pool;
  if (head.length && SEL_RE.test(head[0].w)) {
    const sel = head[0].w;
    list = sel === '*' ? src.els : src.els.filter((e) => appliesTo({ classes: sel.split('|') }, e.ix.value('cls', e.id)));
  }
  if (sec.where) {
    const r = rulesOf(src, sec.where, list);
    if (r.error) { warn(r.error); return []; }
    const hit = new Set();
    for (const ix of src.ixs) for (const k of find(ix, { rules: r.rules })) hit.add(k);
    list = list.filter((e) => hit.has(e.key));
  }
  const sortF = sec.sort ? resolveField(src, join(sec.sort), list) : null;
  if (sec.sort && !sortF) warn(w('sx.su889.warn.field', { name: join(sec.sort) }));
  const st = { id: 'storey' }, nm = { id: 'name' };
  return [...list].sort((a, b) => (sortF ? cmp(valueOf(src, a, sortF), valueOf(src, b, sortF)) : cmp(valueOf(src, a, st), valueOf(src, b, st)) || cmp(valueOf(src, a, nm), valueOf(src, b, nm))) || a.key - b.key);
}
/** The words after the selection (the quantity or field name). */
const restOf = (sec) => { const h = sec.head || []; return join(h.length && SEL_RE.test(h[0].w) ? h.slice(1) : h); };

/** Template text → a tree of { t: 'text', s } | { t: 'field', s } | { t: 'each' | 'group', s, body, alt }. */
function parseTemplate(text, warn) {
  const root = { body: [] }, stack = [root];
  const re = /\\\{\{|\{\{([\s\S]*?)\}\}/g;
  let at = 0, m;
  const top = () => stack[stack.length - 1];
  const push = (n) => (top().inAlt ? top().alt : top().body).push(n);
  while ((m = re.exec(text))) {
    if (m.index > at) push({ t: 'text', s: text.slice(at, m.index) });
    at = re.lastIndex;
    if (m[0] === '\\{{') { push({ t: 'text', s: '{{' }); continue; }
    const inner = m[1].trim(), low = inner.toLowerCase();
    const open = /^#(each|group)\b/.exec(low);
    if (open) {
      if (stack.length > LIMITS.depth) { warn(w('sx.su889.warn.depth')); continue; }
      const n = { t: open[1], s: inner.slice(open[0].length).trim(), body: [], alt: [] };
      push(n); stack.push(n);
      continue;
    }
    if (low === 'else') { if (top().t === 'each') top().inAlt = true; else warn(w('sx.su889.warn.stray', { text: '{{else}}' })); continue; }
    const close = /^\/(each|group)$/.exec(low);
    if (close) {
      if (top().t === close[1]) { delete top().inAlt; stack.pop(); } else warn(w('sx.su889.warn.stray', { text: '{{' + inner + '}}' }));
      continue;
    }
    push({ t: 'field', s: inner });
  }
  if (at < text.length) push({ t: 'text', s: text.slice(at) });
  while (stack.length > 1) { const n = stack.pop(); delete n.inAlt; warn(w('sx.su889.warn.unclosed', { text: '{{#' + n.t + '}}' })); }
  return root.body;
}

/** Text from the model put into Markdown: the characters that would change it are escaped. */
export const esc = (v) => String(v ?? '').replace(/\r?\n/g, ' ').replace(/([\\*_`|#[\]])/g, '\\$1');

export function render(template, src, { decimals = 2 } = {}) {
  const warnings = [];
  const seen = new Set();
  const warn = (x) => { const k = x.key + JSON.stringify(x.fill); if (!seen.has(k)) { seen.add(k); warnings.push(x); } };
  const tree = parseTemplate(String(template ?? '').slice(0, LIMITS.template), warn);
  const fmtNum = (n, fixed) => (typeof n !== 'number' ? String(n) : fixed ? n.toFixed(decimals) : String(Number(n.toFixed(Math.max(decimals, 3)))));
  const show = (v) => (typeof v === 'number' ? fmtNum(v, false) : String(v));
  const withUnit = (n, u) => fmtNum(n, true) + (u ? ' ' + u : '');
  const missing = (s) => '[?' + esc(s) + ']';
  const sumOf = (els, f) => { let s = 0, any = false; for (const e of els) { const v = valueOf(src, e, f); if (typeof v === 'number') { s += v; any = true; } } return any ? Number(s.toPrecision(12)) : 0; };
  const distinct = (els, f) => [...new Set(els.map((e) => valueOf(src, e, f)).filter((v) => v !== ''))].sort(cmp).map(show);
  const table = (head, rows, align) => '\n\n' + [head, align.map((a) => (a === 'r' ? '---:' : '---')), ...rows].map((r) => '| ' + r.join(' | ') + ' |').join('\n') + '\n\n';

  function field(s, ctx) {
    const sec = sections(s);
    const head = sec.head || [];
    const cmd = (head[0]?.w || '').toLowerCase();
    const rest = head.slice(1);
    const scope = ctx.group ? ctx.group.els : ctx.els;
    const sub = { ...sec, head: rest };
    switch (cmd) {
      case 'project': {
        const k = join(rest).toLowerCase() || 'name';
        return esc(src.project?.[k] ?? '');
      }
      case 'file': return esc(src.file);
      case 'date': return esc(src.date);
      case 'n': return ctx.el ? String(ctx.n) : missing(s);
      case 'value': return ctx.group ? (ctx.group.value === '' ? esc(ctx.t?.none ?? '—') : esc(show(ctx.group.value))) : missing(s);
      case 'count': return String(rest.length || sec.where ? select(src, sub, scope, warn).length : scope.length);
      case 'tags': return table(['Tag', 'Type', 'Allowed values', 'Applies to'], src.defs.map((d) => [esc(d.name), esc(d.kind), esc(d.values.join(', ')), esc(d.classes.join(', '))]), ['l', 'l', 'l', 'l']);   // i18n-ignore: template output (English, like the templates)
      case 'tag': {
        const d = tagDef(src, join(rest));
        if (!d) { warn(w('sx.su889.warn.tag', { name: join(rest) })); return missing(s); }
        const f = { id: tagField(d.name), def: d };
        const v = ctx.el ? show(valueOf(src, ctx.el, f)) : distinct(scope, f).join(', ');
        return v === '' ? '—' : esc(v);
      }
      case 'prop': {
        const f = resolveField(src, join(rest), ctx.el ? [ctx.el] : scope);
        if (!f) { warn(w('sx.su889.warn.field', { name: join(rest) })); return missing(s); }
        if (!ctx.el) return esc(distinct(scope, f).join(', '));
        const v = valueOf(src, ctx.el, f);
        return esc(show(v));
      }
      case 'calc': {   // {{calc [sum IfcWall NetSideArea] * 1.1 + [count IfcDoor] round 1 unit m²}}: arithmetic over the same sums and counts
        let ex = s.replace(/^\s*calc\s*/i, ''), places = null, unit = '';
        let mm;
        if ((mm = /\s+unit\s+(\S+)\s*$/i.exec(ex))) { unit = mm[1]; ex = ex.slice(0, mm.index); }
        if ((mm = /\s+round\s+(\d{1,2})\s*$/i.exec(ex))) { places = Number(mm[1]); ex = ex.slice(0, mm.index); }
        const num = (inner) => {   // one [term]: count / sum / qty (this element) / prop (this element)
          const sc = sections(inner), hd = sc.head || [], c = (hd[0]?.w || '').toLowerCase(), rs = hd.slice(1), sb = { ...sc, head: rs };
          if (c === 'count') return rs.length || sc.where ? select(src, sb, scope, warn).length : scope.length;
          if (c === 'sum' || c === 'qty') {
            const fname = restOf(sb);
            const own = c === 'qty' && ctx.el && !(rs.length && SEL_RE.test(rs[0].w));
            const els = own ? [ctx.el] : select(src, sb, scope, warn);
            const f = resolveField(src, fname, els);
            if (!f) { warn(w('sx.su889.warn.field', { name: fname })); return NaN; }
            if (own) { const v = valueOf(src, ctx.el, f); return typeof v === 'number' ? v : NaN; }
            return sumOf(els, f);
          }
          if (c === 'prop' && ctx.el) { const f = resolveField(src, join(rs), [ctx.el]); const v = f ? valueOf(src, ctx.el, f) : NaN; return typeof v === 'number' ? v : NaN; }
          return NaN;
        };
        const toks = [];
        const tk = /\s*(\[[^\]]*\]|\d+(?:\.\d+)?|[-+*/()])/y;
        let at = 0;
        for (let t; (t = (tk.lastIndex = at, tk.exec(ex))); at = tk.lastIndex) toks.push(t[1]);
        if (ex.slice(at).trim() || !toks.length) { warn(w('sx.su889.warn.unknown', { text: s })); return missing(s); }
        let i = 0, bad = false;
        const prim = () => {
          const t = toks[i++];
          if (t === undefined) { bad = true; return NaN; }
          if (t === '(') { const v = sum(); if (toks[i++] !== ')') bad = true; return v; }
          if (t === '-') return -prim();
          if (t[0] === '[') return num(t.slice(1, -1));
          if (/^\d/.test(t)) return Number(t);
          bad = true; return NaN;
        };
        const prod = () => { let v = prim(); while (toks[i] === '*' || toks[i] === '/') { const o = toks[i++], r = prim(); v = o === '*' ? v * r : (r === 0 ? (bad = true, NaN) : v / r); } return v; };
        const sum = () => { let v = prod(); while (toks[i] === '+' || toks[i] === '-') { const o = toks[i++], r = prod(); v = o === '+' ? v + r : v - r; } return v; };
        const v = sum();
        if (bad || i < toks.length || !Number.isFinite(v)) { warn(w('sx.su889.warn.unknown', { text: s })); return missing(s); }
        return esc((places === null ? fmtNum(v, true) : v.toFixed(places)) + (unit ? ' ' + unit : ''));
      }
      case 'sum':
      case 'qty': {
        const fname = restOf(sub);
        const own = cmd === 'qty' && ctx.el && !(rest.length && SEL_RE.test(rest[0].w));
        const els = own ? [ctx.el] : select(src, sub, scope, warn);
        const f = resolveField(src, fname, els);
        if (!f) { warn(w('sx.su889.warn.field', { name: fname })); return missing(s); }
        const u = unitOf(src, f);
        if (own) { const v = valueOf(src, ctx.el, f); return typeof v === 'number' ? esc(withUnit(v, u)) : esc(show(v)); }
        if (cmd === 'qty' && sec.by) {
          const g = resolveField(src, join(sec.by), els);
          if (!g) { warn(w('sx.su889.warn.field', { name: join(sec.by) })); return missing(s); }
          const groups = new Map();
          for (const e of els) { const k = valueOf(src, e, g); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
          const keys = [...groups.keys()].sort(cmp);
          const rows = keys.map((k) => [k === '' ? '—' : esc(show(k)), String(groups.get(k).length), fmtNum(sumOf(groups.get(k), f), true)]);
          rows.push(['**Total**', '**' + els.length + '**', '**' + fmtNum(sumOf(els, f), true) + '**']);   // i18n-ignore: template output
          return table([esc(g.label), 'Count', esc(f.label) + (u ? ' (' + esc(u) + ')' : '')], rows, ['l', 'r', 'r']);   // i18n-ignore: template output
        }
        return esc(withUnit(sumOf(els, f), u));
      }
      case 'table': {
        const els = select(src, sub, scope, warn);
        const names = join(sec.cols).split(',').map((x) => x.trim()).filter(Boolean);
        if (!names.length) { warn(w('sx.su889.warn.cols')); return missing(s); }
        const fs = names.map((n) => { const f = resolveField(src, n, els); if (!f) warn(w('sx.su889.warn.field', { name: n })); return f; });
        const nums = fs.map((f) => !!f && els.some((e) => typeof valueOf(src, e, f) === 'number'));
        const rows = els.slice(0, LIMITS.rows).map((e) => fs.map((f) => (f ? esc(show(valueOf(src, e, f))) : '')));
        if (!rows.length) return '\n\n' + esc(ctx.t?.empty ?? '—') + '\n\n';
        return table(names.map((n, i) => esc(fs[i]?.label || n) + (fs[i] && nums[i] && unitOf(src, fs[i]) ? ' (' + esc(unitOf(src, fs[i])) + ')' : '')), rows, nums.map((x) => (x ? 'r' : 'l')));
      }
      default: {
        if (ctx.el) {
          const f = BUILTIN[cmd] ? { id: BUILTIN[cmd] } : resolveField(src, s, [ctx.el]);
          if (f) { const v = valueOf(src, ctx.el, f); return esc(show(f.id === 'cls' ? String(v).replace(/^Ifc/, '') : v)); }
        }
        warn(w('sx.su889.warn.unknown', { text: s }));
        return missing(s);
      }
    }
  }

  let size = 0;
  function run(nodes, ctx) {
    let out = '';
    for (const n of nodes) {
      if (size > LIMITS.output) { warn(w('sx.su889.warn.toolong')); break; }
      let piece = '';
      if (n.t === 'text') piece = n.s;
      else if (n.t === 'field') piece = field(n.s, ctx);
      else if (n.t === 'each') {
        const sec = sections(n.s);
        const els = select(src, sec, ctx.group ? ctx.group.els : ctx.els, warn);
        if (!els.length) piece = run(n.alt, ctx);
        else els.slice(0, LIMITS.rows).forEach((el, i) => { piece += run(n.body, { ...ctx, el, n: i + 1 }); });
      } else if (n.t === 'group') {
        const sec = sections(n.s);
        const els = select(src, sec, ctx.group ? ctx.group.els : ctx.els, warn);
        const g = sec.by ? resolveField(src, join(sec.by), els) : null;
        if (!g) { warn(sec.by ? w('sx.su889.warn.field', { name: join(sec.by) }) : w('sx.su889.warn.by')); continue; }
        const groups = new Map();
        for (const e of els) { const k = valueOf(src, e, g); if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); }
        for (const k of [...groups.keys()].sort(cmp)) piece += run(n.body, { ...ctx, el: null, group: { value: k, els: groups.get(k) } });
      }
      size += piece.length;
      out += piece;
    }
    return out;
  }
  const markdown = run(tree, { els: src.els, group: null, el: null, t: {} }).replace(/\n{3,}/g, '\n\n').trim() + '\n';
  return { markdown, blocks: parseMarkdown(markdown), warnings };
}

// ------------------------------------------------------------------------------------------------ Markdown → blocks
/** Inline Markdown: **bold**, *italic* / _italic_, `code`, \ escapes. */
export function inline(s) {
  const runs = [];
  let b = false, i = false, buf = '';
  const flush = () => { if (buf) { const r = { s: buf }; if (b) r.b = true; if (i) r.i = true; runs.push(r); buf = ''; } };
  for (let k = 0; k < s.length; k++) {
    const c = s[k];
    if (c === '\\' && k + 1 < s.length && /[\\*_`|#[\]{}()+\-.!>~]/.test(s[k + 1])) { buf += s[++k]; continue; }
    if (c === '`') { const e = s.indexOf('`', k + 1); if (e > k) { flush(); runs.push({ s: s.slice(k + 1, e), code: true }); k = e; continue; } }
    if (c === '*' && s[k + 1] === '*') { flush(); b = !b; k++; continue; }
    if (c === '*' || (c === '_' && (k === 0 || /\W/.test(s[k - 1]) || i))) { flush(); i = !i; continue; }
    buf += c;
  }
  flush();
  return runs;
}
export const plainText = (runs) => runs.map((r) => r.s).join('');
/** Split a table line on | that is not escaped. */
function cells(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|') && !s.endsWith('\\|')) s = s.slice(0, -1);
  const out = [];
  let cur = '';
  for (let k = 0; k < s.length; k++) {
    if (s[k] === '\\' && k + 1 < s.length) { cur += s[k] + s[k + 1]; k++; continue; }
    if (s[k] === '|') { out.push(cur.trim()); cur = ''; continue; }
    cur += s[k];
  }
  out.push(cur.trim());
  return out;
}
export function parseMarkdown(md) {
  const lines = String(md ?? '').replace(/\r\n?/g, '\n').split('\n');
  const blocks = [];
  let para = [];
  const flush = () => { if (para.length) { blocks.push({ t: 'p', runs: inline(para.join(' ')) }); para = []; } };
  for (let k = 0; k < lines.length; k++) {
    const line = lines[k];
    const t = line.trim();
    if (!t) { flush(); continue; }
    let m;
    if ((m = /^(#{1,4})\s+(.*)$/.exec(t))) { flush(); blocks.push({ t: 'h', level: m[1].length, runs: inline(m[2].replace(/\s+#+\s*$/, '')) }); continue; }
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(t)) { flush(); blocks.push({ t: 'hr' }); continue; }
    if (t.startsWith('|') && k + 1 < lines.length && /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/.test(lines[k + 1].trim())) {
      flush();
      const head = cells(t);
      const align = cells(lines[k + 1]).map((c) => (/^:-+:$/.test(c) ? 'c' : /-:$/.test(c) ? 'r' : 'l'));
      const rows = [];
      k += 2;
      while (k < lines.length && lines[k].trim().startsWith('|')) { rows.push(cells(lines[k])); k++; }
      k--;
      const n = head.length;
      blocks.push({ t: 'table', head: head.map(inline), align: Array.from({ length: n }, (_, j) => align[j] || 'l'), rows: rows.map((r) => Array.from({ length: n }, (_, j) => inline(r[j] ?? ''))) });
      continue;
    }
    if ((m = /^[-*+]\s+(.*)$/.exec(t)) || (m = /^\d+[.)]\s+(.*)$/.exec(t))) {
      flush();
      const kind = /^\d/.test(t) ? 'ol' : 'ul';
      const last = blocks[blocks.length - 1];
      if (last && last.t === kind && last.open) last.items.push(inline(m[1]));
      else blocks.push({ t: kind, items: [inline(m[1])], open: true });
      continue;
    }
    if ((m = /^>\s?(.*)$/.exec(t))) { flush(); blocks.push({ t: 'quote', runs: inline(m[1]) }); continue; }
    const last = blocks[blocks.length - 1];
    if (!para.length && last && (last.t === 'ul' || last.t === 'ol') && last.open && /^\s{2,}/.test(line)) { last.items[last.items.length - 1].push({ s: ' ' }, ...inline(t)); continue; }
    para.push(t);
  }
  flush();
  for (const b of blocks) delete b.open;
  return blocks;
}
