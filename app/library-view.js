/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-view.js — BimCraft's Library panel (docs/LIBRARY-SPEC.md §3.1, §3.3, §3.4). Sources:
 *   This file    the blocks of the open DWG/DXF (libitem.js itemsFromDwg)
 *   Files…       a DWG, DXF, IFC, glTF/GLB, OBJ, RFA or CSV picked here, read by the adapters in this tab
 *   LibraryCraft the same-origin public API (/api/v1/library/*); team items too once signed in (Bearer token)
 *   Other feeds  base URLs the user adds that speak the same API (kept in localStorage; CORS is their side's job)
 * Search, category filter, cards (preview, name, maker/model, license badge, version, "Withdrawn"), and a detail view
 * whose buttons hand an entry { item, meta } to the host to place or to swap in.
 * Library data is untrusted: every string goes in through el() (text nodes); previews are <img> only.
 *
 *   const lib = new LibraryPanel(container, host);
 *   host = { mode() 'ifc'|'dwg'|'none', dwg() {db, fileName}|null, ifcApi() Promise<IfcAPI>, readDrawing(bytes, 'dwg'|'dxf') Promise<model>,
 *            readRevit(bytes, name), status(msg, isError), place(entry), swapTarget() {id, name, uuid?, version?, variant?, library?}|null, swap(entry) }
 * 0.7 W3.19: an item with `variants` shows a Variant choice in its detail (the plan, size and body follow it) and is placed as the
 * chosen one (entry.meta.variant = { id, name, values }); a swap target that is a variant of a LibraryCraft item lists its other
 * variants at the top of the panel, each one click away.
 *   lib.open(uuid)  lib.refresh()  lib.updates(refs)  lib.fetchItem(uuid, version)  lib.registerUse(entry, fileLabel)
 */
import { el } from './ui-util.js';
import * as L from './libitem.js';
import { BUILTIN_SYMBOLS } from './library-symbols.js';
import { t, locale } from "./i18n.js";
/** 0.9 (owner 2026-11-09): a Library card or detail picture dragged onto the plan / the 3D view carries this type (not a file: the page's own
 *  file-drop handling checks for it first). The item itself is read when it is dropped (the card's load()). */
export const DRAG_TYPE = 'application/x-cadcraft-library-item';
const NATIVE_DND = !/Firefox\//.test(globalThis.navigator?.userAgent || '');   // Firefox does not start a drag on a <button>: its pointer fallback does the work
import { getDisplayUnits, localizeQuantities } from './model-units.js';   // GH.3-A: a note's lengths in the display unit

const API = '/api/v1/library';
/** 2026-11-02: the axes ('x' | 'y' | 'z') an item may be stretched along, as the Library says ([] = none, the default). */
export const stretchAxes = (v) => (Array.isArray(v) ? ['x', 'y', 'z'].filter((a) => v.includes(a)) : []);
const TOKEN_KEY = 'bimcraft.library.token';
const FEEDS_KEY = 'bimcraft.library.feeds';
// Creative Commons license names are the same in every language; the other two are words, looked up when shown.
const LICENSE_NAMES = { 'CC0-1.0': 'CC0', 'CC-BY-4.0': 'CC BY', 'CC-BY-SA-4.0': 'CC BY-SA' };   // i18n-ignore: license names
const LICENSE_KEYS = { 'MAKER-TERMS': 'lib.license.maker', 'TEAM-ONLY': 'lib.license.team' };
export const licenseLabel = (id) => LICENSE_NAMES[id] || (LICENSE_KEYS[id] ? t(LICENSE_KEYS[id]) : id ? String(id) : t('lib.license.none'));

function readJson(key, dflt) { try { const v = JSON.parse(localStorage.getItem(key) || 'null'); return v ?? dflt; } catch (e) { return dflt; } }
function writeJson(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* private mode */ } }

export class LibraryPanel {
  constructor(container, host) {
    this.box = container;
    this.host = host;
    this.drag = null;           // { name, resolve() → { item, meta }, got, promise } while a card / picture is being dragged
    this.host.onViewMode?.(() => this.syncPlaceButtons());   // the Place button's default follows the view, as soon as it changes
    this.source = 'symbols';
    this.query = '';
    this.category = '';
    this.feed = null;
    this.entries = [];          // [{ key, name, maker, model, category, license, version, preview (url|svg), withdrawn, load() → entry }]
    this.fileEntries = [];      // from Files…
    this.fileNotes = [];
    this.detail = null;
    this.swapVars = null;       // { key, item, got, list } | { key, loading } | { key, error }: the other variants of the swap target
    this.page = 1;
    this.total = 0;
    this.token = this.readToken();
    window.addEventListener('message', (e) => this.onMessage(e));
    this.render();
  }

  // ---- identity (§3.4): a personal token from /library/connect, kept in sessionStorage only ----
  readToken() {
    try {
      const tok = JSON.parse(sessionStorage.getItem(TOKEN_KEY) || 'null');
      if (tok && tok.token && (!tok.expires_at || Date.parse(tok.expires_at) > Date.now())) return tok;
    } catch (e) { /* none */ }
    return null;
  }
  onMessage(e) {
    if (e.origin !== location.origin || !e.data || e.data.type !== 'cadcraft-library-token' || e.data.app !== 'bimcraft') return;
    if (typeof e.data.token !== 'string' || !/^ccu_[A-Za-z0-9]{20,80}$/.test(e.data.token)) return;
    this.token = { token: e.data.token, expires_at: e.data.expires_at || null };
    try { sessionStorage.setItem(TOKEN_KEY, JSON.stringify(this.token)); } catch (err) { /* ignore */ }
    this.host.status(t('lib.signed_in'));
    this.render();
    if (this.source === 'librarycraft') this.load();
  }
  signOut() {
    this.token = null;
    try { sessionStorage.removeItem(TOKEN_KEY); } catch (e) { /* ignore */ }
    this.render();
  }
  headers(base) {
    const h = { Accept: 'application/json' };
    if (this.token && (!base || base === API)) h.Authorization = 'Bearer ' + this.token.token;
    return h;
  }

  // ---- API ----
  async getJson(url, base, init = {}) {
    const r = await fetch(url, { ...init, headers: { ...this.headers(base), ...(init.headers || {}) }, credentials: base === API ? 'omit' : 'omit' });
    if (r.status === 401 && base === API && this.token) {
      // The sign-in ended (expired or revoked): forget it, say so, and retry once without it (public items still load).
      this.signOut();
      this.host.status(t('lib.signin_ended'));
      return this.getJson(url, base, init);
    }
    if (r.status === 451) throw new Error(t('lib.err.withdrawn_copyright'));
    if (!r.ok) throw new Error(t('lib.err.status', { status: r.status }));
    const j = await r.json();
    if (j && j.status === 'error') throw new Error(j.message || t('lib.err.refused'));
    return j && 'data' in j ? j.data : j;
  }
  baseOf() { return this.source === 'feed' ? this.feed : API; }

  async fetchItem(uuid, version, base = API) {
    const meta = await this.getJson(base + '/items/' + encodeURIComponent(uuid), base);
    const it = meta.item || meta;
    const versions = it.versions || [];
    const v = version ? versions.find((x) => x.version === version) : versions.filter((x) => x.status !== 'withdrawn').sort((a, b) => b.version - a.version)[0] || versions[0];
    const url = v?.item_url || base + '/items/' + uuid + '/' + (version || it.version) + '/item.json';
    const r = await fetch(url, { headers: this.headers(base), credentials: 'omit' });
    if (r.status === 451) throw new Error(t('lib.err.withdrawn_copyright'));
    if (!r.ok) throw new Error(t('lib.err.download', { status: r.status }));
    const item = normalizeEmpty(await r.json());
    // The library fills uuid, version, license and provenance; older copies may not carry them all.
    if (!item.uuid) item.uuid = it.uuid || uuid;
    if (!item.version) item.version = v?.version || version || it.version;
    if (!item.license && (v?.license || it.license)) item.license = { id: v?.license || it.license, holder: '', attribution: '', url: '' };
    const check = L.validateItem(item);
    if (!check.ok) throw new Error(t('lib.err.format', { errors: check.errors.slice(0, 2).join('; ') }));
    return { item, info: it, version: v || null };
  }

  /** §6.3: [{uuid, version}] → results. */
  async updates(refs, base = API) {
    const r = await this.getJson(base + '/updates', base, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: refs.slice(0, 500) }) });
    return r.results || [];
  }

  /** §6.5: register a use (signed in only). Failures are quiet: placing never depends on it. */
  async registerUse(entry, fileLabel) {
    if (!this.token || !entry.item.uuid || entry.meta.library !== 'librarycraft') return;
    try {
      await fetch(API + '/uses', { method: 'POST', credentials: 'omit', headers: { ...this.headers(API), 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid: entry.item.uuid, version: entry.item.version, app: 'bimcraft', file_label: String(fileLabel || '').slice(0, 200) }) });
    } catch (e) { /* offline: fine */ }
  }

  // ---- sources ----
  setSource(s) { this.source = s; this.detail = null; this.page = 1; this.render(); this.load(); }
  refresh() { if (this.source === 'this') this.load(); else this.render(); }

  async load() {
    const token = (this.loadToken = (this.loadToken || 0) + 1);
    this.error = null;
    if (this.source === 'symbols') {
      this.entries = BUILTIN_SYMBOLS.map((item, i) => ({
        key: 'symbol:' + i, name: item.name, maker: '', model: '', category: item.category, local: true, item,
        load: async () => ({ item, meta: { library: 'file', source: t('lib.src.symbols'), sourceFile: 'BimCraft built-in symbols (Apache-2.0)', sha256: await L.itemHash(item), notes: [t('lib.src.symbols.license')] } }),
      }));
    } else if (this.source === 'plants') {
      // 0.8 LD.1: the plant list written by CadCraft (CC0, plants/plants-seed.json) as library items; one list for CivilCraft, BimCraft and ModelCraft
      try {
        const P = await import('./plants/plants.js');
        const bundled = P.readPlants(await (await fetch(new URL('./plants/plants-seed.json', import.meta.url))).json()).library.species;
        // 0.8 LD.1 (landscape_PART_4): live Library plants, the bundled list on any failure
        let sp = bundled;
        try { const { loadPlants } = await import('./plants/plants-live.js'); sp = (await loadPlants({ seed: bundled })).species; } catch (e) { sp = bundled; }
        if (token !== this.loadToken) return;
        this.entries = sp.map((s) => {
          const item = P.libraryItem(s, { lang: locale() });
          return { key: 'plant:' + s.key, name: item.name, maker: '', model: '', category: item.category, local: true, item,
            load: async () => ({ item, meta: { library: 'file', source: t('lib.src.plants'), sourceFile: 'plants-seed.json (CC0)', sha256: await L.itemHash(item), notes: [] } }) };
        });
      } catch (e) { this.entries = []; this.error = (e && e.message) || t('lib.err.unreachable'); }
    } else if (this.source === 'this') {
      const d = this.host.dwg();
      this.entries = d ? this.dwgEntries(d.db, d.fileName) : [];
    } else if (this.source === 'files') {
      this.entries = this.fileEntries;
    } else {
      const base = this.baseOf();
      if (!base) { this.entries = []; this.render(); return; }
      this.loading = true; this.render();
      try {
        const q = new URLSearchParams({ q: this.query, category: this.category, page: String(this.page), per: '24', openings: '1' });   // doors and windows: this build places them (the API leaves them out otherwise)
        const d = await this.getJson(base + '/items?' + q, base);
        if (token !== this.loadToken) return;
        this.total = d.total || 0;
        this.entries = (d.items || []).map((x) => this.apiEntry(x, base));
      } catch (e) {
        if (token !== this.loadToken) return;
        this.entries = [];
        this.error = (e && e.message) || t('lib.err.unreachable');
      }
      this.loading = false;
    }
    this.render();
  }

  apiEntry(x, base) {
    const library = base === API ? 'librarycraft' : base;
    return {
      key: x.uuid, name: x.name, maker: x.maker, model: x.model, category: x.category, license: x.license, version: x.version,
      preview: safeUrl(x.preview_url, base), withdrawn: x.status === 'withdrawn', team: x.visibility === 'team', uuid: x.uuid, base,
      load: async () => {
        const { item, info, version } = await this.fetchItem(x.uuid, x.version, base);
        // i18n-ignore: product name (LibraryCraft)
        return { item, meta: { library, source: base === API ? 'Library' : t('lib.source.feed'), sha256: item.provenance?.sha256 || await L.itemHash(item), info, version, withdrawn: version?.status === 'withdrawn',
          stretch: stretchAxes(version?.stretch ?? info?.stretch) } };   // 2026-11-02: the axes the Library lets it be stretched along
      },
    };
  }

  dwgEntries(db, fileName) {
    let r;
    try { r = L.itemsFromDwg(db, { list: true, fileName }); } catch (e) { this.error = e.message; return []; }
    this.fileNotes = r.notes;
    return r.candidates.filter((c) => c.entities > 0).map((c) => ({
      key: 'this:' + c.key, name: (c.attrs['KCL-CATEGORY'] || c.name), sub: c.name, maker: c.attrs['KCL-MFR-SCHDNAME'] || c.attrs['KCL-MFR'] || '', model: c.attrs['KCL-MODEL'] || '',
      category: '', license: null, version: null, local: true,
      load: async () => {
        const one = L.itemFromBlock(db, c.name, { fileName });
        if (!one.item) throw new Error(one.notes.join(' '));
        const item = L.cleanItem(one.item);
        return { item, meta: { library: 'file', source: t('lib.source.drawing'), sourceFile: fileName, sha256: await L.itemHash(item), notes: one.notes } };
      },
    }));
  }

  /** Files…: run the adapters here, in the browser. */
  async readFile(file) {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const bytes = new Uint8Array(await file.arrayBuffer());
    const head = new TextDecoder('latin1').decode(bytes.subarray(0, 16));
    const units = this.box.querySelector('[data-lib-units]')?.value || '';
    const up = this.box.querySelector('[data-lib-up]')?.value || '';
    let r;
    if (head.startsWith('AC10') || ext === 'dwg' || ext === 'dxf') {
      let db;
      try { db = await this.host.readDrawing(bytes, head.startsWith('AC10') || ext === 'dwg' ? 'dwg' : 'dxf'); }
      catch (e) { console.warn(e); throw new Error(t('lib.err.read_here', { file: file.name })); }
      r = L.itemsFromDwg(db, { fileName: file.name, units: units || null });
    } else if (head.startsWith('ISO-10303-21') || ext === 'ifc') {
      const api = await this.host.ifcApi();
      const { itemsFromIfc } = await import('./libitem-ifc.js');
      const mid = api.OpenModel(bytes, { COORDINATE_TO_ORIGIN: false });
      try { r = itemsFromIfc(api, mid); } finally { api.CloseModel(mid); }
    } else if (ext === 'glb' || ext === 'gltf' || head.startsWith('glTF')) {
      r = L.itemFromMesh(bytes, ext === 'gltf' ? 'gltf' : 'glb', { units: units || null, upAxis: up || null, name: file.name.replace(/\.[^.]+$/, '') });
    } else if (ext === 'obj') {
      r = L.itemFromMesh(bytes, 'obj', { units: units || null, upAxis: up || null, name: file.name.replace(/\.[^.]+$/, '') });
    } else if (ext === 'rfa' || (bytes[0] === 0xd0 && bytes[1] === 0xcf)) {
      r = L.itemFromRfa(await this.host.readRevit(bytes, file.name));
    } else if (ext === 'csv') {
      r = L.itemsFromCsv(new TextDecoder().decode(bytes));
    } else throw new Error(t('lib.err.unsupported', { file: file.name }));
    this.fileNotes = r.notes;
    this.fileEntries = r.items.map((raw, i) => {
      const item = L.cleanItem(raw);
      return { key: 'file:' + i + ':' + item.name, name: L.localized(item, locale()).name, maker: item.maker, model: item.model, category: item.category, license: null, version: null, local: true, item,
        load: async () => ({ item, meta: { library: 'file', source: file.name, sourceFile: file.name, sha256: await L.itemHash(item), notes: r.notes.filter((n) => n.startsWith(raw.name) || !/: /.test(n)) } }) };
    });
    this.source = 'files';
    this.detail = null;
    await this.load();
    this.host.status(t('lib.read_file', { file: file.name, n: this.fileEntries.length }));
  }

  // ---- deep link ----
  async open(uuid) {
    this.source = 'librarycraft';
    this.render();
    try { await this.showDetail(this.apiEntry({ uuid, name: t('clip.name.libitem'), version: null }, API)); }
    catch (e) { this.host.status(e.message || String(e), true); }
  }

  async showDetail(entry) {
    this.detail = { entry, loading: true };
    this.render();
    try {
      const got = await entry.load();
      if (this.detail?.entry !== entry) return;
      this.detail = { entry, ...got };
    } catch (e) {
      this.detail = { entry, error: e.message || String(e) };
    }
    this.render();
  }

  // ---- rendering ----
  render() {
    const mode = this.host.mode();
    const src = (key, label, title) => el('button', { type: 'button', className: 'bc-lib-src', 'aria-pressed': this.source === key ? 'true' : 'false', title, onClick: () => this.setSource(key) }, label);
    const feeds = readJson(FEEDS_KEY, []);
    const kids = [
      el('div', { className: 'bc-lib-srcs', role: 'group', 'aria-label': t('lib.sources') },
        src('symbols', t('lib.src.symbols'), t('lib.src.symbols.title')),
        src('plants', t('lib.src.plants'), t('lib.src.plants.title')),
        src('librarycraft', 'Library', t('lib.src.librarycraft.title')),   // i18n-ignore: product name
        src('this', t('lib.src.this'), t('lib.src.this.title')),
        src('files', t('lib.src.files'), t('lib.src.files.title')),
        src('feed', t('lib.src.feed'), t('lib.src.feed.title'))),
    ];
    const swapV = this.swapVariantsBlock();
    // 2026-11-02 (owner: "the place button should be higher … small viewports"): one item stands on its own — its name and Place first,
    // without the list's source buttons and sign-in line above it
    if (this.detail) {
      kids.length = 0;
      if (swapV) kids.push(swapV);
      kids.push(this.detailView());
      this.box.replaceChildren(...kids.filter(Boolean));
      // opened from far down the list: bring its name and Place to the top of the panel (once per item, not on every redraw)
      const key = this.detail.entry?.key ?? null;
      if (key !== this._shownDetail) { this._shownDetail = key; scrollPanelTo(this.box.querySelector('.bc-lib-detail')); }
      return;
    }
    this._shownDetail = null;
    if (swapV) kids.unshift(swapV);
    if (this.source === 'librarycraft') kids.push(this.signInRow());
    if (this.source === 'feed') kids.push(this.feedRow(feeds));
    if (this.source === 'files') kids.push(this.filesRow());
    if (this.source === 'this' && mode !== 'dwg') kids.push(el('p', { className: 'bc-muted' }, t('lib.this.needs_dwg')));
    if (this.source === 'this' && mode === 'dwg') kids.push(el('p', { className: 'bc-muted' }, t('lib.this.intro')));

    if (this.detail) kids.push(this.detailView());
    else {
      kids.push(this.filterRow());
      if (this.loading) kids.push(el('p', { className: 'bc-muted', 'aria-live': 'polite' }, t('lib.loading')));
      else if (this.error) kids.push(el('p', { className: 'bc-input-err', role: 'alert' }, this.error));
      const shown = this.filtered();
      if (!this.loading && !this.error && !shown.length) kids.push(el('p', { className: 'bc-muted' }, this.emptyText()));
      kids.push(el('ul', { className: 'bc-lib-cards' }, shown.slice(0, 300).map((e) => this.card(e))));
      if ((this.source === 'librarycraft' || this.source === 'feed') && this.total > this.page * 24) {
        kids.push(el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => { this.page++; this.load(); } }, t('lib.next_page'))));
      }
      if ((this.source === 'files' || this.source === 'this') && this.fileNotes.length) {
        kids.push(el('details', { className: 'bc-lib-notes' }, el('summary', {}, t('lib.notes.file', { n: this.fileNotes.length })),
          el('ul', {}, this.fileNotes.slice(0, 200).map((n) => el('li', {}, localizeQuantities(n, getDisplayUnits()))))));
      }
    }
    this.box.replaceChildren(...kids.filter(Boolean));
  }

  /** The other variants of the item the swap target is a variant of (0.7 W3.19): read once per item version, then one button each. */
  swapVariantsBlock() {
    const tg = this.host.swapTarget();
    if (!tg || !tg.uuid || tg.library !== 'librarycraft' || this.host.mode() !== 'ifc') return null;
    const key = tg.uuid + '@' + tg.version;
    if (!this.swapVars || this.swapVars.key !== key) { this.swapVars = { key, loading: true }; this.loadSwapVariants(tg, key); return null; }
    const sv = this.swapVars;
    if (!sv.list || sv.list.length < 2) return null;
    return el('div', { className: 'bc-lib-swapvars', 'data-lib-swapvars': '' },
      el('p', { className: 'bc-h' }, t('lib.swap.variants.title', { name: sv.item.name })),
      el('ul', { className: 'bc-lib-variants' }, sv.list.map((v) => {
        const vi = L.itemAsVariant(sv.item, v.id), here = v.id === tg.variant;
        return el('li', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', 'data-lib-swap-variant': v.id, disabled: here,
          onClick: () => this.host.swap(this.variantEntry(sv.item, v, sv.got)) },
          el('i', { className: 'bi bi-arrow-left-right', 'aria-hidden': 'true' }), ' ' + (here ? t('lib.swap.variants.placed', { name: v.name }) : t('lib.swap.variants.to', { name: v.name })),
          el('span', { className: 'bc-sub' }, ' ' + this.variantSize(vi))));
      })));
  }
  async loadSwapVariants(tg, key) {
    try {
      const got = await this.fetchItem(tg.uuid, tg.version);
      const item = L.localizedItem(got.item, locale());
      this.swapVars = { key, item, got, list: L.variantList(item) };
    } catch (e) { this.swapVars = { key, error: (e && e.message) || String(e) }; }
    this.render();
  }
  /** An entry for the host to place or swap in: the item read as that variant, and the meta that says which. */
  variantEntry(item, v, got) {
    return {
      item: L.itemAsVariant(item, v.id, { named: true }),
      meta: { library: 'librarycraft', source: 'Library', sha256: got?.item?.provenance?.sha256 || item.provenance?.sha256 || '', info: got?.info, version: got?.version,   // i18n-ignore: product name
        withdrawn: got?.version?.status === 'withdrawn', variant: { id: v.id, name: v.name, values: v.values } },
    };
  }
  /** "180 × 90 × 10 mm" of an item read as a variant, or ''. */
  variantSize(vi) {
    const p = vi.params || {};
    const parts = [p.width, p.depth, p.height].filter((x) => x > 0).map((x) => String(Math.round(x * 100) / 100));
    return parts.length ? parts.join(' × ') + ' mm' : '';
  }

  emptyText() {
    if (this.source === 'files') return t('lib.empty.files');
    if (this.source === 'feed') return this.feed ? t('lib.empty.feed') : t('lib.empty.nofeed');
    if (this.source === 'this') return this.host.mode() === 'dwg' ? t('lib.empty.noblocks') : '';
    return this.query || this.category ? t('lib.empty.nomatch') : t('lib.empty.library');
  }

  filtered() {
    if (this.source === 'librarycraft' || this.source === 'feed') return this.entries;
    const words = this.query.toLowerCase().split(/\s+/).filter(Boolean);
    return this.entries.filter((e) => (!this.category || e.category === this.category)
      && words.every((w) => [e.name, e.sub, e.maker, e.model].join(' ').toLowerCase().includes(w)));
  }

  filterRow() {
    const search = el('input', { type: 'search', className: 'bc-lib-search', placeholder: t('lib.search.placeholder'), 'aria-label': t('lib.search'), value: this.query });
    let timer = 0;
    search.addEventListener('input', () => {
      this.query = search.value.trim();
      clearTimeout(timer);
      timer = setTimeout(() => { this.page = 1; if (this.source === 'librarycraft' || this.source === 'feed') this.load(); else this.renderListOnly(); }, 300);
    });
    const cat = el('select', { className: 'select-cc bc-lib-cat', 'aria-label': t('lib.category') },
      el('option', { value: '' }, t('lib.category.any')),
      Object.entries(L.CATEGORIES).map(([k, v]) => el('option', { value: k, selected: this.category === k }, t('lib.category.option', { group: k.split('/')[0].replace(/^./, (c) => c.toUpperCase()), label: v }))));
    cat.addEventListener('change', () => { this.category = cat.value; this.page = 1; if (this.source === 'librarycraft' || this.source === 'feed') this.load(); else this.render(); });
    return el('div', { className: 'bc-lib-filter' }, search, cat);
  }
  renderListOnly() {
    const list = this.box.querySelector('.bc-lib-cards');
    if (!list) return this.render();
    list.replaceChildren(...this.filtered().slice(0, 300).map((e) => this.card(e)));
  }

  signInRow() {
    if (this.token) {
      return el('p', { className: 'bc-muted bc-lib-signin' }, el('i', { className: 'bi bi-person-check', 'aria-hidden': 'true' }), ' ' + t('lib.signin.done') + ' ',
        el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => this.signOut() }, t('lib.signin.forget')));
    }
    // 2026-11-02 (BIMBro: "sign in is wrong, I'm signed in"): signed in to the site, the panel says so; the link only connects the team library
    let member = null;
    try { member = JSON.parse(document.getElementById('cc-account')?.textContent || 'null'); } catch (e) { member = null; }
    // One sentence with the link inside it: the words round {link} come from the same string.
    const [before, after = ''] = t(member ? 'lib.signin.member' : 'lib.signin.prompt', { link: '{link}', name: member?.name || '' }).split('{link}');
    return el('p', { className: 'bc-muted bc-lib-signin' }, before || null,
      el('a', { href: '/library/connect?app=bimcraft', className: 'bc-linkbtn', 'data-lib-signin': '', onClick: (e) => {
        e.preventDefault();
        const w = window.open('/library/connect?app=bimcraft', 'cc-library-connect', 'width=600,height=720');
        if (!w) location.assign('/library/connect?app=bimcraft');
      } }, t(member ? 'lib.signin.link.member' : 'lib.signin.link')),
      after);
  }

  feedRow(feeds) {
    const input = el('input', { type: 'url', className: 'bc-lib-search', placeholder: 'https://example.org/api/v1/library', 'aria-label': t('lib.feed.address') });   // i18n-ignore: example address
    const add = el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => {
      let u;
      try { u = new URL(input.value.trim()); } catch (e) { this.host.status(t('lib.feed.bad_url'), true); return; }
      if (u.protocol !== 'https:' && u.hostname !== 'localhost') { this.host.status(t('lib.feed.https'), true); return; }
      const url = u.href.replace(/\/+$/, '');
      const list = readJson(FEEDS_KEY, []).filter((x) => x !== url);
      list.unshift(url);
      writeJson(FEEDS_KEY, list.slice(0, 20));
      this.feed = url; this.page = 1;
      this.render(); this.load();
    } }, t('lib.feed.add'));
    return el('div', { className: 'bc-lib-feeds' },
      el('p', { className: 'bc-muted' }, t('lib.feed.intro', { uuid: '{uuid}' })),
      el('div', { className: 'bc-lib-filter' }, input, add),
      feeds.length ? el('ul', { className: 'bc-lib-feedlist' }, feeds.map((f, i) => el('li', {},
        el('button', { type: 'button', className: 'bc-linkbtn', 'aria-pressed': this.feed === f ? 'true' : 'false', onClick: () => { this.feed = f; this.page = 1; this.render(); this.load(); } }, f),
        el('button', { type: 'button', className: 'bc-forget', title: t('lib.feed.remove', { feed: f }), 'aria-label': t('lib.feed.remove', { feed: f }), onClick: () => {
          const list = readJson(FEEDS_KEY, []); list.splice(i, 1); writeJson(FEEDS_KEY, list); if (this.feed === f) { this.feed = null; this.entries = []; } this.render();
        } }, el('i', { className: 'bi bi-x', 'aria-hidden': 'true' }))))) : null);
  }

  filesRow() {
    const input = el('input', { type: 'file', className: 'visually-hidden', accept: '.dwg,.dxf,.ifc,.glb,.gltf,.obj,.rfa,.csv', 'data-lib-file': '' });
    input.addEventListener('change', () => {
      const f = input.files[0];
      input.value = '';
      if (f) this.readFile(f).catch((e) => { console.error(e); this.host.status(e.message || String(e), true); });
    });
    const unitSel = el('select', { className: 'select-cc', 'data-lib-units': '', 'aria-label': t('lib.files.units') },
      el('option', { value: '' }, t('lib.files.units.file')), ...[['mm', 'lib.files.units.mm'], ['cm', 'lib.files.units.cm'], ['m', 'lib.files.units.m'], ['in', 'lib.files.units.in'], ['ft', 'lib.files.units.ft']].map(([k, key]) => el('option', { value: k }, t(key))));
    const upSel = el('select', { className: 'select-cc', 'data-lib-up': '', 'aria-label': t('lib.files.up') }, el('option', { value: '' }, t('lib.files.up.y')), el('option', { value: 'z' }, t('lib.files.up.z')));
    return el('div', { className: 'bc-lib-files' },
      el('p', {}, el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => input.click() }, el('i', { className: 'bi bi-file-earmark-plus', 'aria-hidden': 'true' }), ' ' + t('lib.files.choose')), input),
      el('p', { className: 'bc-muted' }, t('lib.files.intro')),
      el('div', { className: 'bc-lib-filter' }, unitSel, upSel));
  }

  previewImg(e) {
    if (e.preview) return el('img', { src: e.preview, alt: '', loading: 'lazy', decoding: 'async', width: 72, height: 72 });
    if (e.item) {
      return el('img', { src: svgUrl(L.previewSvg(e.item)), alt: '', width: 72, height: 72 });
    }
    return el('span', { className: 'bc-lib-noprev', 'aria-hidden': 'true' }, el('i', { className: 'bi bi-box' }));
  }

  card(e) {
    const btn = el('button', { type: 'button', className: 'bc-lib-card', 'data-lib-card': '', onClick: () => { if (!this.justDragged) this.showDetail(e); } },
      el('span', { className: 'bc-lib-prev' }, this.previewImg(e)),
      el('span', { className: 'bc-lib-body' },
        el('span', { className: 'bc-lib-name' }, e.name || t('clip.unnamed')),
        e.sub && e.sub !== e.name ? el('span', { className: 'bc-sub' }, e.sub) : null,
        (e.maker || e.model) ? el('span', { className: 'bc-sub' }, [e.maker, e.model].filter(Boolean).join(', ')) : null,
        el('span', { className: 'bc-lib-tags' },
          e.local ? el('span', { className: 'bc-pill is-info' }, t('lib.card.fromfile')) : el('span', { className: 'bc-pill' }, licenseLabel(e.license)),
          e.version ? el('span', { className: 'bc-pill is-info' }, t('lib.card.version', { version: e.version })) : null,
          e.team ? el('span', { className: 'bc-pill is-info' }, t('lib.card.team')) : null,
          e.withdrawn ? el('span', { className: 'bc-pill is-bad' }, t('lib.card.withdrawn')) : null)));
    // a card is draggable onto the plan or the 3D view: it is placed there, through the same process as the Place button
    if (!e.withdrawn) this.dragSource(btn, e.name || t('clip.unnamed'), async () => {
      const got = await e.load();
      return { item: L.localizedItem(got.item, locale()), meta: got.meta };
    });
    return el('li', {}, btn);
  }

  // ---- drag a card / picture onto the plan or the 3D view (mouse: HTML5 drag and drop; touch and pen: press and drag) ----
  /** Make `node` draggable. `resolve()` gives the { item, meta } to place (read when it is dropped, or earlier to show the ghost). */
  dragSource(node, name, resolve) {
    node.setAttribute('draggable', 'true');
    let ptype = 'mouse';
    const spec = { name, resolve };
    node.addEventListener('pointerdown', (ev) => { ptype = ev.pointerType || 'mouse'; this.pointerDrag(ev, node, spec); });
    node.addEventListener('dragstart', (ev) => {
      if (ptype !== 'mouse' || !NATIVE_DND) { ev.preventDefault(); return; }   // the pointer fallback owns touch and pen
      ev.dataTransfer.setData(DRAG_TYPE, '1');
      ev.dataTransfer.setData('text/plain', name);
      ev.dataTransfer.effectAllowed = 'copy';
      this.beginDrag(spec);
    });
    node.addEventListener('dragend', (ev) => { const none = ev.dataTransfer?.dropEffect === 'none'; this.endDrag(); if (none) this.host.dragRefused?.(ev.clientX, ev.clientY); });   // released where nothing takes it
  }
  beginDrag(spec) {
    const d = this.drag = { name: spec.name, resolve: spec.resolve, got: null, promise: null };
    d.load = () => (d.promise ||= spec.resolve().then((g) => { d.got = g; return g; }));
    d.load().catch(() => { /* shown when it is dropped */ });
  }
  endDrag() { this.drag = null; this.host.dragEnd?.(); }
  /** Touch and pen (and Firefox's mouse): press, hold (touch) or move (pen, mouse), then drag; a quick swipe on the list still scrolls it. */
  pointerDrag(ev, node, spec) {
    const type = ev.pointerType || 'mouse';
    if ((type === 'mouse' && NATIVE_DND) || (type === 'mouse' && ev.button > 0)) return;
    const x0 = ev.clientX, y0 = ev.clientY, touch = type === 'touch';
    let active = false, chip = null, timer = null;
    const block = (te) => { if (active && te.cancelable) te.preventDefault(); };   // once the drag has begun the finger no longer scrolls
    const noMenu = (ce) => { if (touch) ce.preventDefault(); };
    const begin = () => {
      active = true; this.beginDrag(spec);
      chip = el('div', { className: 'bc-lib-dragchip', 'aria-hidden': 'true' }, spec.name);
      document.body.append(chip);
      try { node.setPointerCapture(ev.pointerId); } catch { /* gone */ }
    };
    const clean = () => {
      clearTimeout(timer);
      document.removeEventListener('pointermove', move, true); document.removeEventListener('pointerup', up, true); document.removeEventListener('pointercancel', cancel, true);
      document.removeEventListener('touchmove', block, true); node.removeEventListener('contextmenu', noMenu);
      chip?.remove(); chip = null;
    };
    const move = (m) => {
      if (m.pointerId !== ev.pointerId) return;
      if (!active) {
        if (Math.hypot(m.clientX - x0, m.clientY - y0) <= 8) return;
        if (touch) { clean(); return; }   // moved before the hold: it is a scroll
        begin();
      }
      chip.style.left = m.clientX + 12 + 'px'; chip.style.top = m.clientY + 12 + 'px';
      this.host.dragOver?.(this.drag, m.clientX, m.clientY);
    };
    const up = (u) => {
      if (u.pointerId !== ev.pointerId) return;
      const was = active, d = this.drag;
      clean();
      if (!was) return;
      this.justDragged = true; setTimeout(() => { this.justDragged = false; }, 400);   // the click that follows is not "open this card"
      this.drag = null; this.host.dragEnd?.();
      this.host.dropIt?.(d, u.clientX, u.clientY);
    };
    const cancel = (c) => { if (c.pointerId !== ev.pointerId) return; clean(); if (active) { this.drag = null; this.host.dragEnd?.(); } };
    document.addEventListener('pointermove', move, true); document.addEventListener('pointerup', up, true); document.addEventListener('pointercancel', cancel, true);
    if (touch) { document.addEventListener('touchmove', block, { capture: true, passive: false }); node.addEventListener('contextmenu', noMenu); timer = setTimeout(() => { if (!active) begin(); }, 350); }
  }

  /** What the Place control is for the view showing: Plan -> one plain "Place in plan"; 3D alone -> one plain "Place in model";
   *  Split (both showing) -> the split button: main "Place in plan", its menu "Place in model". */
  placeForm() { const v = this.host.viewMode?.() || 'model'; return v === 'plan' ? 'plan' : v === 'split' ? 'split' : 'model'; }
  /** One function draws it. The slot is refilled in place when the view changes, so the open item, its variant and the focus stay. */
  placeSplit(put, m) {
    const slot = el('span', { className: 'bc-place-slot', 'data-lib-place-slot': '' });
    slot._put = put; slot._meta = m;
    this.fillPlaceSlot(slot);
    return slot;
  }
  fillPlaceSlot(slot) {
    const put = slot._put, m = slot._meta, form = this.placeForm();
    if (slot.dataset.form === form) return;
    const hadFocus = slot.contains(document.activeElement);
    slot.dataset.form = form;
    const go = (where) => this.host.place({ item: put, meta: m, where });
    const where = form === 'model' ? 'model' : 'plan';
    const main = el('button', { type: 'button', className: 'btn-plot btn-sm-cc bc-place-main' + (form === 'split' ? '' : ' bc-place-plain'), 'data-lib-place': '', 'data-lib-where': where, onClick: () => go(where) },
      el('i', { className: 'bi bi-plus-square', 'aria-hidden': 'true' }), ' ' + t('lib.place.' + where));
    if (form !== 'split') { slot.replaceChildren(main); if (hadFocus) main.focus(); return; }
    const toggle = el('button', { type: 'button', className: 'btn-plot btn-sm-cc dropdown-toggle dropdown-toggle-split bc-place-toggle', 'data-lib-place-toggle': '', 'data-bs-toggle': 'dropdown', 'data-bs-popper-config': '{"strategy":"fixed"}',
      'aria-expanded': 'false', 'aria-haspopup': 'menu', 'aria-label': t('lib.place.choose'), title: t('lib.place.choose') });
    const menu = el('ul', { className: 'dropdown-menu bc-place-menu' }, el('li', {}, el('button', { type: 'button', className: 'dropdown-item', 'data-lib-place-where': 'model', onClick: () => go('model') },
      el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), ' ' + t('lib.place.model'))));
    slot.replaceChildren(el('div', { className: 'btn-group bc-place-split', role: 'group', 'aria-label': t('lib.place.choose'), 'data-lib-place-group': '' }, main, toggle, menu));
    if (hadFocus) main.focus();
  }
  /** The view changed: every Place control on screen takes the form for it. */
  syncPlaceButtons() { for (const slot of this.box.querySelectorAll('[data-lib-place-slot]')) this.fillPlaceSlot(slot); }

  detailView() {
    const d = this.detail, e = d.entry;
    const back = el('p', {}, el('button', { type: 'button', className: 'bc-linkbtn', onClick: () => { this.detail = null; this.render(); } }, el('i', { className: 'bi bi-arrow-left', 'aria-hidden': 'true' }), ' ' + t('lib.back')));
    if (d.loading) return el('div', { className: 'bc-lib-detail' }, back, el('p', { className: 'bc-muted', 'aria-live': 'polite' }, t('lib.detail.reading')));
    if (d.error) return el('div', { className: 'bc-lib-detail' }, back, el('p', { className: 'bc-input-err', role: 'alert' }, d.error));
    const it = d.item, m0 = d.meta;
    const loc = L.localized(it, locale()), put0 = L.localizedItem(it, locale());   // 0.6 WL.7: the item in the page's language
    // 0.7 W3.19: an item with variants: the chosen one (the default until a choice is made) is what is shown and placed
    const vlist = L.variantList(put0);
    const vid = vlist.length ? (vlist.some((v) => v.id === d.variant) ? d.variant : vlist.find((v) => v.default).id) : null;
    const vrow = vid ? vlist.find((v) => v.id === vid) : null;
    const shown = vid ? L.itemAsVariant(it, vid) : it;
    const put = vid ? L.itemAsVariant(put0, vid, { named: true }) : put0;
    const m = vid ? { ...m0, variant: { id: vid, name: vrow.name, values: vrow.values } } : m0;
    const p = shown.params || {};
    const fmt = (v) => (v > 0 ? Math.round(v) + ' mm' : '');
    const mode = this.host.mode(), swapT = this.host.swapTarget();
    const lic = it.license;
    const rows = [[t('lib.row.type'), loc.type || ''], [t('lib.row.category'), L.CATEGORIES[it.category] ? t('lib.category.option', { group: it.category.split('/')[0], label: L.CATEGORIES[it.category] }) : it.category], [t('lib.row.kind'), it.kind],
      [t('lib.row.maker'), it.maker], [t('lib.row.model'), it.model], [t('lib.row.width'), fmt(p.width)], [t('lib.row.depth'), fmt(p.depth)], [t('lib.row.height'), fmt(p.height)],
      [t('lib.row.elec'), p.elec ? Object.entries(p.elec).map(([k, v]) => loc.label('elec.' + k, k) + ' ' + v).join(', ') : ''], [t('lib.row.plumb'), p.plumb ? Object.entries(p.plumb).map(([k, v]) => loc.label('plumb.' + k, k.toUpperCase()) + ' ' + v).join(', ') : ''],
      [t('lib.row.remarks'), p.remarks], [t('lib.row.body'), shown.body ? (shown.body.type === 'box' ? t('lib.body.box') : t('lib.body.mesh', { n: shown.body.indices.length / 3 })) : t('lib.body.none')],
      [t('lib.row.ports'), (shown.ports || []).length ? t('lib.ports.count', { n: shown.ports.length }) : ''],
      [t('lib.row.version'), it.version ? String(it.version) : ''], [t('lib.row.from'), m.source],
      [t('lib.row.stretch'), m.stretch ? (m.stretch.length ? m.stretch.map((a) => t('lib.stretch.' + a)).join(', ') : t('lib.stretch.none')) : '']];
    const url = svgUrl(L.previewSvg(shown));
    const withdrawn = m.withdrawn || e.withdrawn;
    let variantPick = null;
    if (vid) {
      const sel = el('select', { id: 'bc-lib-variant', className: 'select-cc', 'data-lib-variant': '' },
        vlist.map((v) => el('option', { value: v.id, selected: v.id === vid }, t('lib.variant.option', { name: v.name, size: this.variantSize(L.itemAsVariant(it, v.id)) }))));
      sel.addEventListener('change', () => { d.variant = sel.value; this.render(); });
      variantPick = el('div', { className: 'bc-lib-variant' }, el('label', { for: 'bc-lib-variant', className: 'bc-h' }, t('lib.variant.label', { n: vlist.length })), sel);
    }
    const bigprev = el('div', { className: 'bc-lib-bigprev' }, el('img', { src: url, alt: t('lib.detail.plan_alt', { name: it.name }), draggable: 'false' }));
    // the detail picture drags too, with the variant chosen here
    if (mode === 'ifc' && !withdrawn) this.dragSource(bigprev, loc.name, async () => ({ item: put, meta: m }));
    const actions = el('div', { className: 'bc-lib-actions bc-lib-actions-top', 'data-lib-actions': '' },
      mode === 'ifc' && !withdrawn ? this.placeSplit(put, m) : null,
      mode === 'ifc' && swapT && !withdrawn ? el('button', { type: 'button', className: 'btn-line btn-sm-cc', onClick: () => this.host.swap({ item: put, meta: m }) },
        el('i', { className: 'bi bi-arrow-left-right', 'aria-hidden': 'true' }), ' ' + t('lib.swap', { name: swapT.name })) : null,
      mode !== 'ifc' ? el('span', { className: 'bc-muted' }, t('lib.needs_ifc')) : null);
    return el('div', { className: 'bc-lib-detail' }, back,
      el('p', { className: 'bc-prop-name', 'data-lib-name': '' }, loc.name),
      loc.translated && loc.name !== it.name ? el('p', { className: 'bc-muted', 'data-lib-original': '' }, t('lib.detail.original', { name: it.name })) : null,
      variantPick,
      withdrawn ? el('p', { className: 'bc-input-err', role: 'alert' }, m.version?.withdrawn_reason ? t('lib.withdrawn.reason', { reason: m.version.withdrawn_reason }) : t('lib.withdrawn.default')) : null,
      actions,
      bigprev,
      loc.description ? el('p', { className: 'bc-lib-desc', 'data-lib-desc': '' }, loc.description) : null,
      el('dl', { className: 'bc-dl' }, rows.filter(([, v]) => v).flatMap(([k, v]) => [el('dt', {}, k), el('dd', {}, String(v))])),
      el('div', { className: 'bc-lib-license' },
        el('p', { className: 'bc-h' }, t('lib.license.heading')),
        lic ? el('p', {}, el('span', { className: 'bc-pill' }, licenseLabel(lic.id)), ' ', lic.attribution || lic.holder || '') : el('p', { className: 'bc-muted' }, t('lib.license.fromfile')),
        lic && lic.url && /^https?:/.test(lic.url) ? el('p', {}, el('a', { href: lic.url, rel: 'noopener noreferrer', target: '_blank' }, t('lib.license.link'))) : null),   // i18n-ignore: rel attribute value
      m.notes && m.notes.length ? el('details', { className: 'bc-lib-notes' }, el('summary', {}, t('lib.notes', { n: m.notes.length })), el('ul', {}, m.notes.map((n) => el('li', {}, localizeQuantities(n, getDisplayUnits()))))) : null,
      it.uuid && m.library === 'librarycraft' ? el('p', {}, el('a', { className: 'bc-linkbtn', href: '/library/item/' + encodeURIComponent(m.info?.slug || ''), target: '_blank', rel: 'noopener' }, t('lib.open_on'))) : null);
  }
}

/** Scroll only the panel's own scroll box so `node` is at its top (scrollIntoView would also move the page and the drawing under the pointer). */
function scrollPanelTo(node) {
  if (!node) return;
  let sc = node.parentElement;
  while (sc && sc !== document.body && sc !== document.documentElement) {
    const oy = getComputedStyle(sc).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && sc.scrollHeight > sc.clientHeight) break;
    sc = sc.parentElement;
  }
  if (!sc || sc === document.body || sc === document.documentElement) return;
  sc.scrollTop += node.getBoundingClientRect().top - sc.getBoundingClientRect().top;
}

/** A PHP server writes an empty object as []: take [] as {} where the format has an object. */
function normalizeEmpty(item) {
  const fix = (o, k) => { if (o && Array.isArray(o[k]) && o[k].length === 0) o[k] = {}; };
  for (const k of ['source_attrs', 'params', 'ifc', 'license', 'provenance']) fix(item, k);
  if (item && item.params) { fix(item.params, 'elec'); fix(item.params, 'plumb'); }
  return item;
}
const svgUrl = (svg) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

function safeUrl(u, base) {
  if (!u) return null;
  try {
    const url = new URL(u, base === API ? location.origin : base);
    return url.protocol === 'https:' || url.origin === location.origin ? url.href : null;
  } catch (e) { return null; }
}
