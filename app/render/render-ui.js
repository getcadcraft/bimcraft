/* SPDX-License-Identifier: Apache-2.0 */
/**
 * render-ui.js — the Render dialog (0.5 RC.11 (a)), shared by ModelCraft and BimCraft: canonical in modelcraft/dev/render/,
 * byte-identical copy in bimcraft/dev/render/ (node tools/render/sync.mjs). Words through t() with keys `render.*`; the
 * sync script copies those keys from ModelCraft's lang/en.json into BimCraft's.
 *
 *   openRenderDialog({
 *     scene(settings) → scene        the app's adapter (render-mc.js / render-bim.js); called at each Render
 *     viewSize() → {w, h}            the 3D view in CSS pixels (the "view" sizes)
 *     colors() → [{key, faces, look?}]   the colours on screen ('default' = unpainted) and their own look, for Materials
 *     modelSun() → {month, day, hour, src, lat} | null   the base date and time; src 'style' (ModelCraft's Style › sun),
 *                                    'site' (the file's site latitude) or 'assumed' (no location in the file)
 *     settings, save(settings)       the remembered settings (looks.js cleanSettings) and where to keep changes
 *     download(blob, name), fileBase() → string, onClose()
 *     lamps() → [{key, name, lumens, on}], setLamp(key, {on | lumens})   optional: the model's lamps listed to switch and dim
 *                                    (BimCraft's light fixtures; ModelCraft edits its lamps in its own Lights panel)
 *     engines                        optional: the engine registry (engines.js); default = the page's shared one for `where`
 *     where: 'web' | 'studio'        which edition this is (outside engines run only in Studio; the web saves their package)
 *     handoff(settings, {w, h}) → {files, manifest}   optional: the hand-off package for an outside engine (handoff.js, RE.2)
 *     parent                         where the dialog goes (the app's root, so its own key handling sees a dialog open)
 *   }) → {dialog, close()}
 *
 * A modal <dialog>: settings on the right, the picture on the left, filling in as the passes add up. Render ⇄ Stop
 * (Stop keeps the picture so far); Save PNG downloads the last picture. High quality on WebGPU (0.7 RN.1) can Resume a
 * stopped picture (the same samples carry on) until a setting changes or Render starts again; the status line says which
 * engine path traced it. Nothing here touches the model.
 */
import { t, locale } from "../i18n.js";
import { QUALITY, SIZES, SKIES, LOOK_KEYS, MODES, MINUTES, IES_MAX_TEXT, IES_MAX_LAMPS, CAM_FSTOPS, CAM_SHUTTERS, CAM_ISOS, CAM_BLADES, PROJECTIONS, cleanSettings, sizeFor } from "./looks.js";
import { ev100 } from "./pt-camera.js";
import { BUILTIN, sharedRegistry, engineFor, modeFor, cleanEngineOpts, defaultEngine, saveDefaultEngine } from "./engines.js";
import { compose, mixKey, cleanMix, SHOW, MAX_PRESETS } from "./pt-mix.js";
import { VIEWS, STREAKS, cleanPost } from "./pt-post.js";
import { SESSION, hdriFor, lutFor, volumeFor } from "./session.js";
import { mountMedia } from "./media-ui.js";
import { readCcvol } from "./pt-volume.js";
import { renderStill, webglInfo } from "./render-core.js";

const CSS = `
.cc-render { width: min(64rem, calc(100vw - 2rem)); max-height: calc(100vh - 2rem); padding: 0; color: var(--ink); background: var(--sheet-2);
  border: var(--pen-2, 1.5px) solid var(--ink); border-radius: var(--radius, 2px); }
.cc-render::backdrop { background: color-mix(in srgb, var(--ink) 35%, transparent); }
.cc-render-head, .cc-render-foot { display: flex; align-items: center; gap: .75rem; padding: .6rem 1rem; }
.cc-render-head { border-bottom: var(--pen-1, 1px) solid var(--line); }
.cc-render-head h2 { margin: 0; font-size: var(--fs-md, 1.1rem); flex: 1; }
.cc-render-foot { border-top: var(--pen-1, 1px) solid var(--line); flex-wrap: wrap; }
.cc-render-status { flex: 1; min-width: 12rem; font-size: var(--fs-sm, .875rem); color: var(--ink-2); }
.cc-render-body { display: grid; grid-template-columns: minmax(0, 1fr) 18rem; gap: 1rem; padding: 1rem; overflow: auto; max-height: calc(100vh - 9rem); }
.cc-render-pic { display: grid; place-items: center; min-height: 14rem; background: var(--sheet); border: var(--pen-1, 1px) solid var(--line); }
.cc-render-pic canvas, .cc-render-pic img { display: block; max-width: 100%; max-height: calc(100vh - 12rem); height: auto; }
.cc-render-pic p { margin: 1rem; color: var(--ink-2); text-align: center; }
.cc-render-form { display: grid; gap: .7rem; align-content: start; font-size: var(--fs-sm, .875rem); }
.cc-render-form label { display: grid; gap: .2rem; }
.cc-render-form .cc-render-check { display: flex; gap: .45rem; align-items: center; }
.cc-render-form fieldset { border: 0; padding: 0; margin: 0; display: grid; gap: .4rem; }
.cc-render-form legend { float: none; width: auto; font-size: inherit; font-weight: 600; line-height: inherit; padding: 0; margin-bottom: .2rem; }
.cc-render-row { display: flex; gap: .5rem; align-items: center; }
.cc-render-row > * { flex: 1 1 0; min-width: 0; }
.cc-render-date { display: grid; grid-template-columns: minmax(0, 1fr) 4rem; gap: .5rem; }
.cc-render-date input[type=time] { grid-column: 1 / -1; }
.cc-render .form-control { background-color: var(--sheet-2); color: var(--ink); border-color: var(--line); }
.cc-render .form-control:disabled, .cc-render select:disabled { background-color: var(--sheet); color: var(--ink-2); border-color: var(--line); opacity: 1; }
.cc-render-note { margin: 0; color: var(--ink-2); font-size: var(--fs-sm, .875rem); }
.cc-render-looks { display: grid; gap: .35rem; max-height: 14rem; overflow: auto; padding-right: .25rem; }
.cc-render-look { display: grid; grid-template-columns: 1.25rem minmax(0, 1fr) 7.5rem; gap: .45rem; align-items: center; }
.cc-render-swatch { width: 1.25rem; height: 1.25rem; border: var(--pen-1, 1px) solid var(--ink); }
.cc-render-look span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cc-render input[type=range] { width: 100%; }
@media (max-width: 760px) { .cc-render-body { grid-template-columns: 1fr; } }
`;

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v;
    else if (k === 'dataset') Object.assign(e.dataset, v);
    else if (k === 'style') e.style.cssText = v;
    else if (k in e && typeof v !== 'string') e[k] = v;
    else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const k of kids.flat()) if (k !== null && k !== undefined && k !== false) e.append(k instanceof Node ? k : document.createTextNode(String(k)));
  return e;
}

/** The dialogs' styles (this one and the video dialog, video-ui.js), added to the page once. */
export function injectCss() {
  if (document.getElementById('cc-render-css')) return;
  const s = document.createElement('style');
  s.id = 'cc-render-css';
  s.textContent = CSS;
  document.head.append(s);
}

// the sky picture (HDRI) and the colour table chosen in this session: kept in memory only (session.js; settings keep the names)
const MAX_HDRI_BYTES = 256 * 1024 * 1024;

const pad = (n) => String(n).padStart(2, '0');
const hourText = (h) => pad(Math.floor(h)) + ':' + pad(Math.round((h % 1) * 60) % 60);

export function openRenderDialog(o) {
  injectCss();
  let settings = cleanSettings(o.settings);
  const gl = webglInfo();
  let running = null, lastBlob = null, lastPic = null, resumable = null;
  const dropResume = () => { if (resumable) { resumable.release?.(); resumable = null; } resumeBtn.hidden = true; };
  const msun = o.modelSun ? o.modelSun() : null;
  const loc = (() => { try { return locale(); } catch { return 'en'; } })();
  const monthName = (m) => { try { return new Date(2026, m - 1, 1).toLocaleDateString(loc === 'en-XA' ? 'en' : loc, { month: 'long' }); } catch { return String(m); } };

  const opt = (value, label, cur) => el('option', { value, selected: value === cur }, label);
  const v = o.viewSize();
  const sizeLabel = (k) => {
    const z = sizeFor({ size: k }, v.w, v.h);
    return t('render.size.' + k, { w: z.w, h: z.h });
  };
  const sizeSel = el('select', { className: 'select-cc', dataset: { renderSize: '' } }, Object.keys(SIZES).map((k) => opt(k, sizeLabel(k), settings.size)));
  // 0.8 RE.1: the Engine choice above Mode. Our two engines are the Mode's two values; the rest are plug-ins (engines.js).
  const where = o.where || (globalThis.cadcraftDesktop ? 'studio' : 'web');   // Studio's shell hands the page window.cadcraftDesktop
  const registry = o.engines || sharedRegistry(where);
  const engineSel = el('select', { className: 'select-cc', dataset: { renderEngine: '' } }, [opt('', t('render.engine.loading'), '')]);
  const engineNote = el('p', { className: 'cc-render-note', dataset: { renderEngineNote: '' } }, '');
  const engineFs = el('fieldset', { dataset: { renderEngineOpts: '' }, hidden: true });
  let engineRows = [];
  const engineId = () => engineSel.value || engineFor(settings);
  const isOutside = () => !BUILTIN.includes(engineId());
  const modeSel = el('select', { className: 'select-cc', dataset: { renderMode: '' } }, MODES.map((k) => opt(k, t('render.mode.' + k), settings.mode)));
  const minSel = el('select', { className: 'select-cc', dataset: { renderMinutes: '' } }, MINUTES.map((k) => opt(String(k), k ? t('render.minutes', { n: k }) : t('render.minutes.none'), String(settings.minutes))));
  const minRow = el('label', { dataset: { renderMinutesRow: '' } }, t('render.limit'), minSel);
  const modeNote = el('p', { className: 'cc-render-note', dataset: { renderModeNote: '' } }, '');
  const qualSel = el('select', { className: 'select-cc', dataset: { renderQuality: '' } }, Object.keys(QUALITY).map((k) => opt(k, t('render.quality.' + k, { n: QUALITY[k] }), settings.quality)));
  const skySel = el('select', { className: 'select-cc', dataset: { renderSky: '' } }, Object.keys(SKIES).map((k) => opt(k, t('render.sky.' + k), settings.sky)));
  const expIn = el('input', { type: 'range', min: '-3', max: '3', step: '0.5', value: String(settings.exposure), dataset: { renderExposure: '' } });
  const expOut = el('output', {}, '');
  // 0.7 RN.3: the physical sky's haze; the sky picture, its turn and brightness (path tracer on the graphics card only)
  const turbIn = el('input', { type: 'range', min: '2', max: '10', step: '0.5', value: String(settings.turbidity), dataset: { renderTurbidity: '' } });
  const turbOut = el('output', {}, '');
  const turbRow = el('label', { dataset: { renderTurbidityRow: '' } }, el('span', {}, t('render.sky.turbidity'), ' ', turbOut), turbIn);
  const hdriFile = el('input', { type: 'file', accept: '.hdr,.exr', className: 'visually-hidden', dataset: { renderHdriFile: '' } });
  const hdriBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderHdriPick: '' } }, t('render.hdri.pick'));
  const hdriName = el('span', { className: 'cc-render-note', dataset: { renderHdriName: '' } }, '');
  const rotIn = el('input', { type: 'range', min: '-180', max: '180', step: '5', value: String(settings.envRotation), dataset: { renderEnvRotation: '' } });
  const rotOut = el('output', {}, '');
  const envExpIn = el('input', { type: 'range', min: '-5', max: '5', step: '0.5', value: String(settings.envExposure), dataset: { renderEnvExposure: '' } });
  const envExpOut = el('output', {}, '');
  const hdriRows = el('div', { dataset: { renderHdriRows: '' } },
    el('div', { className: 'cc-render-check' }, hdriBtn, hdriName, hdriFile),
    el('label', {}, el('span', {}, t('render.hdri.rotation'), ' ', rotOut), rotIn),
    el('label', {}, el('span', {}, t('render.hdri.exposure'), ' ', envExpOut), envExpIn));
  const skyNote = el('p', { className: 'cc-render-note', dataset: { renderSkyNote: '' } }, t('render.sky.gpu.note'));
  hdriBtn.addEventListener('click', () => hdriFile.click());
  hdriFile.addEventListener('change', async () => {
    const f = hdriFile.files && hdriFile.files[0];
    hdriFile.value = '';
    if (!f) return;
    if (f.size > MAX_HDRI_BYTES) { status.textContent = t('render.hdri.too_big'); return; }
    try {
      const { readHdrImage } = await import('../exr/index.js');
      const img = readHdrImage(new Uint8Array(await f.arrayBuffer()));
      SESSION.hdri = { name: f.name, img };
      settings = { ...readForm(), hdriName: f.name };
      settings = cleanSettings(settings);
      o.save?.(settings);
      dropResume();
      syncForm();
      status.textContent = t('render.hdri.loaded', { file: f.name, w: img.width, h: img.height });
    } catch (e) { status.textContent = t('render.hdri.bad', { error: String(e?.message || e) }); }
  });
  // 0.7 RN.4: the physical camera (projection, lens and white balance on the graphics card; exposure everywhere)
  const shutterText = (x) => (x < 1 ? t('render.cam.shutter.frac', { n: Math.round(1 / x) }) : t('render.cam.shutter.s', { n: x }));
  const projSel = el('select', { className: 'select-cc', dataset: { renderProjection: '' } }, PROJECTIONS.map((k) => opt(k, t('render.cam.proj.' + k), settings.projection)));
  const expModeSel = el('select', { className: 'select-cc', dataset: { renderExposureMode: '' } }, ['slider', 'camera'].map((k) => opt(k, t('render.cam.exp.' + k), settings.exposureMode)));
  const fSel = el('select', { className: 'select-cc', 'aria-label': t('render.cam.fstop'), dataset: { renderFstop: '' } }, CAM_FSTOPS.map((x) => opt(String(x), 'f/' + x, String(settings.fstop))));
  const shSel = el('select', { className: 'select-cc', 'aria-label': t('render.cam.shutter'), dataset: { renderShutter: '' } }, CAM_SHUTTERS.map((x) => opt(String(x), shutterText(x), String(settings.shutter))));
  const isoSel = el('select', { className: 'select-cc', 'aria-label': t('render.cam.iso'), dataset: { renderIso: '' } }, CAM_ISOS.map((x) => opt(String(x), t('render.cam.iso.n', { n: x }), String(settings.iso))));
  const evOut = el('output', { dataset: { renderEv: '' } }, '');
  const camRow = el('div', { className: 'cc-render-date', dataset: { renderCameraRow: '' } }, fSel, shSel, isoSel, evOut);
  const dofIn = el('input', { type: 'checkbox', checked: settings.dof, dataset: { renderDof: '' } });
  const focusIn = el('input', { type: 'number', min: '0', max: '10000', step: '0.1', value: settings.focus ? String(settings.focus) : '', placeholder: t('render.cam.focus.auto'), className: 'form-control form-control-sm', 'aria-label': t('render.cam.focus'), dataset: { renderFocus: '' } });
  const bladeSel = el('select', { className: 'select-cc', 'aria-label': t('render.cam.blades'), dataset: { renderBlades: '' } }, CAM_BLADES.map((n) => opt(String(n), n ? t('render.cam.blades.n', { n }) : t('render.cam.blades.round'), String(settings.blades))));
  const dofRow = el('div', { className: 'cc-render-date', dataset: { renderDofRow: '' } }, el('label', {}, t('render.cam.focus'), focusIn), bladeSel);
  const twoIn = el('input', { type: 'checkbox', checked: settings.twoPoint, dataset: { renderTwoPoint: '' } });
  const wbIn = el('input', { type: 'range', min: '2000', max: '12000', step: '100', value: String(settings.whiteBalance), dataset: { renderWhiteBalance: '' } });
  const wbOut = el('output', {}, '');
  const camFs = el('fieldset', { dataset: { renderCamera: '' } }, el('legend', {}, t('render.cam')),
    el('label', {}, t('render.cam.proj'), projSel),
    el('label', {}, t('render.cam.exp'), expModeSel), camRow,
    el('label', { className: 'cc-render-check' }, dofIn, t('render.cam.dof')), dofRow,
    el('label', { className: 'cc-render-check' }, twoIn, t('render.cam.two')),
    el('label', {}, el('span', {}, t('render.cam.wb'), ' ', wbOut), wbIn),
    el('p', { className: 'cc-render-note', dataset: { renderCameraNote: '' } }, t('render.cam.note')));
  // 0.7 RN.6: render elements and light mixing (asked before the render; mixed after it, without rendering again)
  const elemIn = el('input', { type: 'checkbox', checked: settings.elements, dataset: { renderElements: '' } });
  const denoiseIn = el('input', { type: 'checkbox', checked: settings.denoise, dataset: { renderDenoise: '' } });   // RN.5
  const mixIn = el('input', { type: 'checkbox', checked: settings.lightMix, dataset: { renderLightMix: '' } });
  const layersFs = el('fieldset', { dataset: { renderLayers: '' } }, el('legend', {}, t('render.mix.title')),
    el('label', { className: 'cc-render-check' }, denoiseIn, t('render.denoise.on')),
    el('label', { className: 'cc-render-check' }, mixIn, t('render.mix.on')),
    el('label', { className: 'cc-render-check' }, elemIn, t('render.elements.on')),
    el('p', { className: 'cc-render-note' }, t('render.mix.hint')));
  // after a render: what to show, a row per light group, named mixes
  const mixPanel = el('fieldset', { dataset: { renderMixPanel: '' }, hidden: true }, el('legend', {}, t('render.mix.after')));
  let layers = null, showKey = 'beauty', mixTimer = 0;
  // mixing changes the picture shown, never the render's own settings: keep these events from the form's listeners (Resume stays)
  for (const ev of ['input', 'change']) mixPanel.addEventListener(ev, (e) => e.stopPropagation());
  const groupLabel = (g) => (g.kind === 'lamp' ? (g.name || t('render.mix.lamp')) : t('render.mix.' + g.kind));
  const recompose = (keepBlob = false) => {
    if (!layers) return;
    const bytes = compose(layers, settings.mix, { exposure: layers.exposure, wb: layers.wb, show: showKey, post: settings.post, lut: lutFor(settings) });
    const c = el('canvas', { width: layers.w, height: layers.h, role: 'img', 'aria-label': t('render.alt'), dataset: { renderImage: '' } });
    c.getContext('2d').putImageData(new ImageData(bytes, layers.w, layers.h), 0, 0);
    pic.replaceChildren(c);
    if (keepBlob) return;
    clearTimeout(mixTimer);
    mixTimer = setTimeout(() => c.toBlob((b) => { if (b) lastBlob = b; }, 'image/png'), 150);   // i18n-ignore: a media type
  };
  let dnTimer = 0, dnRun = 0;
  const saveMix = (m) => {
    settings = cleanSettings({ ...readForm(), mix: m, mixPresets: settings.mixPresets });
    o.save?.(settings);
    // RN.5: a mixed picture is denoised again once the controls rest (the noisy mix shows meanwhile)
    if (layers && layers.denoised && layers.aux && layers.stride > layers.nElements) {
      clearTimeout(dnTimer);
      const run = ++dnRun, mix = settings.mix;
      dnTimer = setTimeout(async () => {
        try {
          const [{ denoiseLayers }, { mixedLinear, isPlainMix }] = await Promise.all([import('./denoise.js'), import('./pt-mix.js')]);
          if (isPlainMix(mix)) return;
          const d = await denoiseLayers(layers, mixedLinear(layers, mix));
          if (run !== dnRun || !layers) return;
          layers.denoisedMix = { key: JSON.stringify(mix), lin: d.lin };
          recompose();
        } catch { /* the noisy mix stays */ }
      }, 450);
    }
  };
  function buildMixPanel() {
    mixPanel.replaceChildren(el('legend', {}, t('render.mix.after')));
    if (!layers) { mixPanel.hidden = true; return; }
    mixPanel.hidden = false;
    const guides = ['albedo', 'normal', 'depth'];
    const opts = SHOW.filter((k) => k === 'beauty' || (k === 'noisy' && layers.denoised) || (layers.nElements >= 10 && k !== 'noisy') || (layers.nElements >= 2 && guides.includes(k)));
    const showSel = el('select', { className: 'select-cc', dataset: { renderShow: '' } }, opts.map((k) => opt(k, t('render.show.' + k.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase())), showKey)));
    showSel.addEventListener('change', () => { showKey = showSel.value; recompose(); });
    mixPanel.append(el('label', {}, t('render.show'), showSel));
    if (!layers.groups || !layers.groups.length || !(layers.stride > layers.nElements)) return;
    const rows = el('div', { className: 'cc-render-looks', dataset: { renderMixGroups: '' } });
    for (const g of layers.groups) {
      const key = mixKey(g), cur = settings.mix[key] || { on: true, color: '#ffffff', stops: 0 };
      const on = el('input', { type: 'checkbox', checked: cur.on !== false, 'aria-label': t('render.mix.group.on', { name: groupLabel(g) }), dataset: { renderMixOn: key } });
      const col = el('input', { type: 'color', value: cur.color || '#ffffff', 'aria-label': t('render.mix.group.color', { name: groupLabel(g) }), dataset: { renderMixColor: key } });
      const st = el('input', { type: 'range', min: '-6', max: '6', step: '0.1', value: String(cur.stops || 0), 'aria-label': t('render.mix.group.stops', { name: groupLabel(g) }), dataset: { renderMixStops: key } });
      const out = el('output', {}, '');
      const sync1 = () => { const v = Number(st.value); out.value = (v > 0 ? '+' : '') + v.toFixed(1); };
      const apply = () => { sync1(); saveMix({ ...settings.mix, [key]: { on: on.checked, color: col.value, stops: Number(st.value) } }); showKey = 'beauty'; showSel.value = 'beauty'; recompose(); };
      for (const x of [on, col, st]) x.addEventListener('input', apply);
      sync1();
      rows.append(el('div', { className: 'cc-render-look' }, on, el('span', { title: groupLabel(g) }, groupLabel(g)), col, st, out));
    }
    mixPanel.append(rows);
    // named mixes
    const presetSel = el('select', { className: 'select-cc', 'aria-label': t('render.mix.presets'), dataset: { renderMixPreset: '' } },
      [el('option', { value: '', className: 'select-placeholder' }, t('render.mix.presets.choose')), ...Object.keys(settings.mixPresets).map((n) => opt(n, n, ''))]);
    const nameIn = el('input', { type: 'text', maxlength: '60', className: 'form-control form-control-sm', placeholder: t('render.mix.presets.name'), 'aria-label': t('render.mix.presets.name'), dataset: { renderMixName: '' } });
    const keep = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderMixKeep: '' } }, t('render.mix.presets.save'));
    const reset = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderMixReset: '' } }, t('render.mix.reset'));
    presetSel.addEventListener('change', () => { const m = settings.mixPresets[presetSel.value]; if (m) { saveMix(cleanMix(m)); buildMixPanel(); recompose(); } });
    keep.addEventListener('click', () => {
      const nm = nameIn.value.trim();
      if (!nm) { nameIn.focus(); return; }
      if (!settings.mixPresets[nm] && Object.keys(settings.mixPresets).length >= MAX_PRESETS) { status.textContent = t('render.mix.presets.many', { n: MAX_PRESETS }); return; }
      settings = cleanSettings({ ...readForm(), mix: settings.mix, mixPresets: { ...settings.mixPresets, [nm]: settings.mix } });
      o.save?.(settings);
      status.textContent = t('render.mix.presets.saved', { name: nm });
      buildMixPanel();
    });
    reset.addEventListener('click', () => { saveMix({}); buildMixPanel(); recompose(); });
    mixPanel.append(el('div', { className: 'cc-render-date' }, presetSel, nameIn, keep, reset));
  }
  // 0.7 RN.8: post and colour on the linear picture — changes after the render redraw it, never render again
  const P0 = settings.post;
  const viewSel = el('select', { className: 'select-cc', dataset: { renderView: '' } }, VIEWS.map((k) => opt(k, t('render.post.view.' + k), P0.view)));
  const slider = (key, min, max, step, val) => el('input', { type: 'range', min: String(min), max: String(max), step: String(step), value: String(val), dataset: { renderPost: key } });
  const contrastIn = slider('contrast', -0.5, 0.5, 0.05, P0.contrast), hiIn = slider('highlights', 0, 1, 0.05, P0.highlights);
  const bloomIn = slider('bloom', 0, 1, 0.05, P0.bloom), glareIn = slider('glare', 0, 1, 0.05, P0.glare), vigIn = slider('vignette', 0, 1, 0.05, P0.vignette);
  const streakSel = el('select', { className: 'select-cc', 'aria-label': t('render.post.streaks'), dataset: { renderStreaks: '' } }, STREAKS.map((n) => opt(String(n), t('render.post.streaks.n', { n }), String(P0.streaks))));
  const lutFile = el('input', { type: 'file', accept: '.cube', className: 'visually-hidden', dataset: { renderLutFile: '' } });
  const lutBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderLutPick: '' } }, t('render.post.lut.pick'));
  const lutName = el('span', { className: 'cc-render-note', dataset: { renderLutName: '' } }, '');
  const lutStr = slider('lutStrength', 0, 1, 0.05, P0.lutStrength);
  const postFs = el('fieldset', { dataset: { renderPostFs: '' } }, el('legend', {}, t('render.post')),
    el('label', {}, t('render.post.view'), viewSel),
    el('label', {}, t('render.post.contrast'), contrastIn), el('label', {}, t('render.post.highlights'), hiIn),
    el('label', {}, t('render.post.bloom'), bloomIn), el('div', { className: 'cc-render-date' }, el('label', {}, t('render.post.glare'), glareIn), streakSel),
    el('label', {}, t('render.post.vignette'), vigIn),
    el('div', { className: 'cc-render-check' }, lutBtn, lutName, lutFile), el('label', { dataset: { renderLutRow: '' } }, t('render.post.lut.strength'), lutStr),
    el('p', { className: 'cc-render-note' }, t('render.post.hint')));
  const readPost = () => cleanPost({ view: viewSel.value, contrast: Number(contrastIn.value), highlights: Number(hiIn.value), bloom: Number(bloomIn.value),
    glare: Number(glareIn.value), streaks: Number(streakSel.value), vignette: Number(vigIn.value), lutName: settings.post.lutName, lutStrength: Number(lutStr.value), bloomSize: settings.post.bloomSize });
  const syncPost = () => {
    lutName.textContent = settings.post.lutName ? (SESSION.lut && SESSION.lut.name === settings.post.lutName ? settings.post.lutName : t('render.post.lut.again', { file: settings.post.lutName })) : t('render.post.lut.none');
    lutStr.closest('label').hidden = !settings.post.lutName;
    lutBtn.textContent = settings.post.lutName ? t('render.post.lut.clear') : t('render.post.lut.pick');
  };
  /** Put settings.post into the controls (a reopened render file brings its own). */
  const postToForm = () => {
    const P = settings.post;
    viewSel.value = P.view; contrastIn.value = String(P.contrast); hiIn.value = String(P.highlights); bloomIn.value = String(P.bloom);
    glareIn.value = String(P.glare); streakSel.value = String(P.streaks); vigIn.value = String(P.vignette); lutStr.value = String(P.lutStrength);
    syncPost();
  };
  const postChanged = () => { settings = cleanSettings({ ...settings, post: readPost() }); o.save?.(settings); syncPost(); recompose(); };
  for (const ev of ['input', 'change']) postFs.addEventListener(ev, (e) => { e.stopPropagation(); if (e.target !== lutFile) postChanged(); });
  lutBtn.addEventListener('click', () => {
    if (settings.post.lutName) { settings = cleanSettings({ ...settings, post: { ...readPost(), lutName: '' } }); o.save?.(settings); syncPost(); recompose(); return; }
    lutFile.click();
  });
  lutFile.addEventListener('change', async () => {
    const f = lutFile.files && lutFile.files[0];
    lutFile.value = '';
    if (!f) return;
    if (f.size > 64 * 1024 * 1024) { status.textContent = t('render.post.lut.bad', { error: '64 MB' }); return; }
    try {
      const { readCube } = await import('../exr/cube.js');
      SESSION.lut = { name: f.name, lut: readCube(await f.text()) };
      settings = cleanSettings({ ...settings, post: { ...readPost(), lutName: f.name } });
      o.save?.(settings);
      syncPost(); recompose();
      status.textContent = t('render.post.lut.loaded', { file: f.name });
    } catch (e) { status.textContent = t('render.post.lut.bad', { error: String(e?.message || e) }); }
  });
  syncPost();
  // 0.7 RN.10: the render queue (queue-ui.js): this picture added as it is set now; the list is the page's one queue
  const queueBox = el('div', { dataset: { renderQueue: '' } });
  const queueAdd = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderQueueAdd: '' } }, t('render.queue.add'));
  const queueFs = el('fieldset', { dataset: { renderQueueFs: '' } }, el('legend', {}, t('render.queue')), queueAdd, queueBox);
  let queueUi = null;
  import('./queue-ui.js').then(({ mountQueue }) => { queueUi = mountQueue({ el, t, box: queueBox, o, getSettings: () => settings }); }).catch(() => { queueFs.hidden = true; });
  queueAdd.addEventListener('click', async () => {
    if (!queueUi) return;
    queueAdd.disabled = true;
    try { settings = readForm(); await queueUi.addStill(); status.textContent = t('render.queue.added'); }
    catch (e) { status.textContent = t('render.failed', { error: String(e?.message || e) }); }
    finally { queueAdd.disabled = false; }
  });
  const edgesIn = el('input', { type: 'checkbox', checked: settings.edges, dataset: { renderEdges: '' } });
  const groundIn = el('input', { type: 'checkbox', checked: settings.ground, dataset: { renderGround: '' } });

  // the sun: the model's own date and time, or this render's
  let sunFs = null, ownIn = null, monSel = null, dayIn = null, timeIn = null, sunNote = null;
  if (msun) {
    const cur = settings.sun || msun;
    ownIn = el('input', { type: 'checkbox', checked: !!settings.sun, dataset: { renderSunOwn: '' } });
    monSel = el('select', { className: 'select-cc', 'aria-label': t('render.sun.month') }, Array.from({ length: 12 }, (_, i) => opt(String(i + 1), monthName(i + 1), String(cur.month))));
    dayIn = el('input', { type: 'number', min: '1', max: '31', step: '1', value: String(cur.day), 'aria-label': t('render.sun.day'), className: 'form-control form-control-sm' });
    timeIn = el('input', { type: 'time', step: '900', value: hourText(cur.hour), 'aria-label': t('render.sun.time'), className: 'form-control form-control-sm', dataset: { renderSunTime: '' } });
    const sunKey = msun.src === 'site' ? 'render.sun.site' : msun.src === 'assumed' ? 'render.sun.assumed' : 'render.sun.model';
    sunNote = el('p', { className: 'cc-render-note', dataset: { renderSunNote: '' } }, t(sunKey, { date: monthName(msun.month) + ' ' + msun.day, time: hourText(msun.hour), lat: Math.round((msun.lat ?? 0) * 10) / 10 }));
    sunFs = el('fieldset', {}, el('legend', {}, t('render.sun')), sunNote,
      el('label', { className: 'cc-render-check' }, ownIn, t('render.sun.own')),
      el('div', { className: 'cc-render-date' }, monSel, dayIn, timeIn));
  }

  // materials: a look per colour on screen
  const lookSel = new Map();
  const colors = o.colors ? o.colors().slice(0, 200) : [];
  const ownLook = new Map(colors.map((c) => [c.key, LOOK_KEYS.includes(c.look) ? c.look : 'matte']));
  const looksBox = el('div', { className: 'cc-render-looks', dataset: { renderLooks: '' } }, colors.map(({ key, faces }) => {
    const sel = el('select', { className: 'select-cc', 'aria-label': t('render.look.for', { color: key === 'default' ? t('render.default') : key }), dataset: { renderLook: key } },
      LOOK_KEYS.map((k) => opt(k, t('render.look.' + k), settings.looks[key] || ownLook.get(key))));
    lookSel.set(key, sel);
    return el('div', { className: 'cc-render-look' },
      el('span', { className: 'cc-render-swatch', style: 'background:' + (key === 'default' ? 'var(--sheet)' : key) }),
      el('span', { title: t('render.faces', { n: faces }) }, key === 'default' ? t('render.default') : key),
      sel);
  }));

  // the model's lamps (when the app lists them): switch each on or off and set its brightness; saved in the model
  const lamps = o.lamps ? o.lamps().slice(0, 100) : [];
  const lampsFs = lamps.length ? el('fieldset', { dataset: { renderLamps: '' } }, el('legend', {}, t('render.lamps')), el('p', { className: 'cc-render-note' }, t('render.lamps.hint')),
    el('div', { className: 'cc-render-looks' }, lamps.map((L) => {
      const on = el('input', { type: 'checkbox', checked: L.on, 'aria-label': t('render.lamp.on', { name: L.name }), dataset: { renderLampOn: String(L.key) } });
      const lm = el('input', { type: 'number', min: '1', max: '200000', step: '50', value: String(L.lumens), className: 'form-control form-control-sm', 'aria-label': t('render.lamp.lumens', { name: L.name }), dataset: { renderLampLumens: String(L.key) } });
      on.addEventListener('change', () => o.setLamp(L.key, { on: on.checked }));
      lm.addEventListener('change', () => { const v = Number(lm.value); if (Number.isFinite(v) && v > 0) o.setLamp(L.key, { lumens: v }); });
      // an IES light profile for every lamp of this name (path tracer on the graphics card)
      const iesFile = el('input', { type: 'file', accept: '.ies', className: 'visually-hidden' });
      const iesBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderLampIes: String(L.key) } }, '');
      const iesShow = () => { const v = settings.ies[L.name]; iesBtn.textContent = v ? t('render.ies.named', { file: v.file || 'IES' }) : t('render.ies.pick'); iesBtn.title = v ? t('render.ies.clear') : t('render.ies.hint'); };
      iesBtn.addEventListener('click', () => {
        if (settings.ies[L.name]) { const ies = { ...settings.ies }; delete ies[L.name]; settings = cleanSettings({ ...settings, ies }); o.save?.(settings); dropResume(); iesShow(); return; }
        iesFile.click();
      });
      iesFile.addEventListener('change', async () => {
        const f = iesFile.files && iesFile.files[0];
        iesFile.value = '';
        if (!f) return;
        if (f.size > IES_MAX_TEXT) { status.textContent = t('render.ies.too_big'); return; }
        const text = await f.text();
        try {
          const { readIes } = await import('./pt-ies.js');
          readIes(text);
        } catch (e) { status.textContent = t('render.ies.bad', { file: f.name, code: String(e?.code || 'bad_numbers') }); return; }
        if (!settings.ies[L.name] && Object.keys(settings.ies).length >= IES_MAX_LAMPS) { status.textContent = t('render.ies.many', { n: IES_MAX_LAMPS }); return; }
        settings = cleanSettings({ ...settings, ies: { ...settings.ies, [L.name]: { file: f.name, text } } });
        o.save?.(settings);
        dropResume();
        iesShow();
        status.textContent = t('render.ies.loaded', { file: f.name, name: L.name });
      });
      iesShow();
      return el('div', { className: 'cc-render-look' }, on, el('span', { title: L.name }, L.name), lm, iesBtn, iesFile);
    }))) : null;
  const pic = el('div', { className: 'cc-render-pic', dataset: { renderPic: '' } }, el('p', {}, gl.ok ? t('render.placeholder') : t('render.nogl')));
  const status = el('p', { className: 'cc-render-status', role: 'status', dataset: { renderStatus: '' } }, '');
  const media = mountMedia({ el, t, settings, SESSION, readCcvol, onStatus: (m) => { status.textContent = m; }, blocked: () => elemIn.checked || mixIn.checked });   // 0.7 RN.7: fog, a smoke or cloud volume, adaptive sampling
  const goBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-cc', dataset: { renderGo: '' }, disabled: !gl.ok }, t('render.go'));
  const resumeBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderResume: '' }, hidden: true }, t('render.resume'));
  const saveBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderSave: '' }, disabled: true }, t('render.save'));
  // 0.7 RN.9: what Save writes, and reopening a render file
  const FORMATS = ['png', 'png16', 'jpeg', 'webp', 'exr', 'ccrender'], NEEDS_LAYERS = new Set(['png16', 'exr', 'ccrender']);
  const fmtSel = el('select', { className: 'select-cc', 'aria-label': t('render.out.format'), dataset: { renderFormat: '' } }, FORMATS.map((k) => opt(k, t('render.out.' + k), 'png')));
  const openFile = el('input', { type: 'file', accept: '.ccrender', className: 'visually-hidden', dataset: { renderOpenFile: '' } });
  const openBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderOpen: '' } }, t('render.out.open'));
  let lastSamples = 0;
  const syncFormats = () => { for (const op of fmtSel.options) op.disabled = NEEDS_LAYERS.has(op.value) && !layers; if (fmtSel.selectedOptions[0]?.disabled) fmtSel.value = 'png'; };
  const closeBtn = el('button', { type: 'button', className: 'btn-line btn-sm-cc', dataset: { renderClose: '' } }, t('render.close'));

  const form = el('form', { className: 'cc-render-form', method: 'dialog' },
    el('label', {}, t('render.engine'), engineSel),
    engineNote,
    engineFs,
    el('label', { dataset: { renderModeRow: '' } }, t('render.mode'), modeSel),
    modeNote,
    minRow,
    el('label', {}, t('render.size'), sizeSel),
    el('label', {}, t('render.quality'), qualSel),
    el('label', {}, t('render.sky'), skySel),
    turbRow,
    hdriRows,
    skyNote,
    sunFs,
    el('label', {}, el('span', {}, t('render.exposure'), ' ', expOut), expIn),
    camFs,
    media.fs,
    el('label', { className: 'cc-render-check' }, groundIn, t('render.ground')),
    el('label', { className: 'cc-render-check' }, edgesIn, t('render.edges')),
    postFs,
    layersFs,
    mixPanel,
    queueFs,
    colors.length ? el('fieldset', {}, el('legend', {}, t('render.looks')), el('p', { className: 'cc-render-note' }, t('render.looks.hint')), looksBox) : null,
    lampsFs);
  form.addEventListener('submit', (e) => e.preventDefault());
  const dlg = el('dialog', { className: 'cc-render', 'aria-labelledby': 'cc-render-h', dataset: { renderDialog: '' } },
    el('div', { className: 'cc-render-head' }, el('h2', { id: 'cc-render-h' }, t('render.title'))),
    el('div', { className: 'cc-render-body' }, pic, form),
    el('div', { className: 'cc-render-foot' }, status, goBtn, resumeBtn, fmtSel, saveBtn, openBtn, openFile, closeBtn));

  /** The outside engine's own fields (its `settings` list) → {engineId: {key: value}} for the engine now chosen. */
  function readEngineOpts() {
    const id = engineSel.value, row = engineRows.find((r) => r.id === id);
    if (!row || !row.settings.length) return {};
    const cur = {};
    for (const f of row.settings) { const i = engineFs.querySelector('[data-engine-field="' + f.key + '"]'); if (i) cur[f.key] = f.type === 'check' ? i.checked : f.type === 'number' ? Number(i.value) : i.value; }
    return { [id]: cleanEngineOpts(cur, row.settings) };
  }
  /** Fill the Engine select from the registry: unavailable engines stay listed, with the reason (D1). */
  async function loadEngines() {
    if (where === 'studio' && !o.engines) { try { (await import('./engine-unreal.js')).registerUnreal(registry, globalThis); } catch { /* the engines Studio has are simply not listed */ } }   // 0.8 RE.5 (no Blender: rule 43, RE.4 decided 2026-10-30)
    if (!o.engines) { try { (await import('./engine-unreal.js')).registerUnrealFile(registry); } catch { /* the Unreal folder file is simply not listed */ } }   // 0.8 RE.5 the folder as a zip, web and Studio
    if (!o.engines) { try { await (await import('./engine-open.js')).registerOpenIn(registry, globalThis); } catch { /* Open in … is simply not listed */ } }   // 0.8 RE.6
    engineRows = await registry.describe(t);
    const want = settings.engine || defaultEngine(globalThis.localStorage) || engineFor(settings);
    const cur = engineRows.some((r) => r.id === want) ? want : engineFor(settings);
    engineSel.replaceChildren(...engineRows.map((r) => {
      const why = r.saveOnly ? t('render.engine.why.save_only') : r.ok ? '' : t('render.engine.why.' + (r.why || 'unknown'), { name: r.name });
      const op = opt(r.id, r.name + (why ? ' — ' + why : ''), cur);
      op.disabled = !r.ok && !r.saveOnly;
      return op;
    }));
    engineSel.value = cur;
    if (cur !== settings.engine && !BUILTIN.includes(cur)) { settings = { ...settings, engine: cur }; }
    if (BUILTIN.includes(cur)) modeSel.value = modeFor(cur);
    drawEngineFields();
    syncForm();
  }
  function drawEngineFields() {
    const row = engineRows.find((r) => r.id === engineSel.value);
    engineFs.replaceChildren();
    engineFs.hidden = !row || !row.settings.length;
    if (engineFs.hidden) return;
    const mine = cleanEngineOpts((settings.engineOpts || {})[row.id], row.settings);
    engineFs.append(el('legend', {}, t('render.engine.opts', { name: row.name })), ...row.settings.map((f) => {
      const lab = f.labelKey ? t(f.labelKey) : f.label || f.key;
      const input = f.type === 'select' ? el('select', { className: 'select-cc', dataset: { engineField: f.key } }, f.options.map((p) => opt(String(p.value), p.labelKey ? t(p.labelKey) : p.label || String(p.value), String(mine[f.key]))))
        : f.type === 'check' ? el('input', { type: 'checkbox', checked: !!mine[f.key], dataset: { engineField: f.key } })
        : el('input', { type: f.type === 'number' ? 'number' : 'text', value: String(mine[f.key] ?? ''), min: f.min, max: f.max, step: f.step, className: 'form-control form-control-sm', dataset: { engineField: f.key } });
      return el('label', f.type === 'check' ? { className: 'cc-render-check' } : {}, ...(f.type === 'check' ? [input, lab] : [lab, input]));
    }));
  }
  const readForm = () => {
    const s = {
      mode: modeSel.value, engine: engineSel.value && !BUILTIN.includes(engineSel.value) ? engineSel.value : '', engineOpts: { ...settings.engineOpts, ...readEngineOpts() }, minutes: Number(minSel.value),
      size: sizeSel.value, quality: qualSel.value, sky: skySel.value, exposure: Number(expIn.value), edges: edgesIn.checked, ground: groundIn.checked,
      sun: null, looks: {},
      turbidity: Number(turbIn.value), envRotation: Number(rotIn.value), envExposure: Number(envExpIn.value),
      hdriName: settings.hdriName, ies: settings.ies,
      projection: projSel.value, exposureMode: expModeSel.value, fstop: Number(fSel.value), shutter: Number(shSel.value), iso: Number(isoSel.value),
      dof: dofIn.checked, focus: Number(focusIn.value) || 0, blades: Number(bladeSel.value), bladeRot: settings.bladeRot,
      twoPoint: twoIn.checked, whiteBalance: Number(wbIn.value),
      elements: elemIn.checked, lightMix: mixIn.checked, denoise: denoiseIn.checked, mix: settings.mix, mixPresets: settings.mixPresets, post: settings.post,
      ...media.read(),
    };
    if (ownIn && ownIn.checked) {
      const [hh, mm] = (timeIn.value || '12:00').split(':').map(Number);
      s.sun = { month: Number(monSel.value), day: Number(dayIn.value), hour: (hh || 0) + (mm || 0) / 60 };
    }
    for (const [k, sel] of lookSel) if (sel.value !== ownLook.get(k)) s.looks[k] = sel.value;
    // keep looks of colours not on screen now (hidden tags, other scenes)
    for (const [k, val] of Object.entries(settings.looks)) if (!lookSel.has(k)) s.looks[k] = val;
    return cleanSettings(s);
  };
  const syncForm = () => {
    const ext = isOutside();
    if (!ext && engineSel.value && modeSel.value !== modeFor(engineSel.value)) modeSel.value = modeFor(engineSel.value);
    const erow = engineRows.find((r) => r.id === engineSel.value);
    engineNote.textContent = erow ? (erow.saveOnly ? t('render.engine.note.save_only', { name: erow.name }) : erow.ok && erow.version ? t('render.engine.note.version', { name: erow.name, version: erow.version }) : '') : '';
    modeSel.closest('label').hidden = ext;
    if (!running && typeof goBtn !== 'undefined') goBtn.textContent = goLabel();
    const hq = modeSel.value === 'hq';
    minRow.hidden = !hq;
    modeNote.textContent = ext ? '' : t(hq ? 'render.mode.hq.note' : 'render.mode.fast.note');
    edgesIn.closest('label').hidden = hq;
    const ev = Number(expIn.value);
    expOut.value = (ev > 0 ? '+' : '') + ev;
    const sk = SKIES[skySel.value] || {};
    turbRow.hidden = !sk.physical;
    hdriRows.hidden = !sk.hdri;
    skyNote.hidden = !(sk.physical || sk.hdri);
    turbOut.value = String(Number(turbIn.value));
    rotOut.value = rotIn.value + '°';
    const ee = Number(envExpIn.value);
    envExpOut.value = (ee > 0 ? '+' : '') + ee;
    media.sync(hq, settings);
    layersFs.hidden = !hq || ext;
    postFs.hidden = !hq || ext;
    queueFs.hidden = !hq;
    camRow.hidden = expModeSel.value !== 'camera';
    dofRow.hidden = !dofIn.checked || !hq;
    // exposure from the camera works in every mode; the projection, lens, two-point view and white balance need the path tracer
    for (const x of [projSel.closest('label'), dofIn.closest('label'), twoIn.closest('label'), wbIn.closest('label'), camFs.querySelector('[data-render-camera-note]')]) x.hidden = !hq;
    evOut.value = t('render.cam.ev', { ev: (Math.round(ev100({ fstop: Number(fSel.value), shutter: Number(shSel.value), iso: Number(isoSel.value) }) * 10) / 10).toString() });
    wbOut.value = t('render.cam.wb.k', { k: wbIn.value });
    hdriName.textContent = SESSION.hdri ? SESSION.hdri.name : settings.hdriName ? t('render.hdri.again', { file: settings.hdriName }) : t('render.hdri.none');
    if (ownIn) for (const x of [monSel, dayIn, timeIn]) x.disabled = !ownIn.checked || !!running;
  };
  engineSel.addEventListener('change', () => {
    if (!BUILTIN.includes(engineSel.value)) settings = { ...settings, engine: engineSel.value };
    else { modeSel.value = modeFor(engineSel.value); settings = { ...settings, engine: '' }; }
    saveDefaultEngine(globalThis.localStorage, engineSel.value);
    drawEngineFields();
  });
  for (const ev of ['input', 'change']) modeSel.addEventListener(ev, () => { if (BUILTIN.includes(engineSel.value) || !engineSel.value) engineSel.value = modeSel.value === 'hq' ? 'pt' : 'fast'; });   // before the form's own listener puts Mode back
  form.addEventListener('input', () => { syncForm(); settings = readForm(); o.save?.(settings); dropResume(); });
  form.addEventListener('change', () => { syncForm(); settings = readForm(); o.save?.(settings); dropResume(); });
  syncForm();
  loadEngines();

  /** The Render button's words: "Send to …" / "Open in …" / "Save for …" for engines that do not draw the picture here. */
  function goLabel() {
    const r = engineRows.find((x) => x.id === engineSel.value);
    if (!r || BUILTIN.includes(r.id)) return t('render.go');
    if (registry.get(r.id)?.saveAs) return t('render.engine.go.file', { name: r.name });
    return r.saveOnly ? t('render.engine.go.save', { name: r.name }) : r.kind === 'link' ? t('render.engine.go.link', { name: r.name }) : r.kind === 'open' ? t('render.engine.go.open', { name: r.name }) : t('render.go');
  }
  const setRunning = (on) => {
    for (const x of form.querySelectorAll('input, select, button')) x.disabled = on;
    goBtn.textContent = on ? t('render.stop') : goLabel();
    goBtn.className = (on ? 'btn-line' : 'btn-plot') + ' btn-sm-cc';
    saveBtn.disabled = on || !lastBlob;
    fmtSel.disabled = on; openBtn.disabled = on;
    resumeBtn.disabled = on;
    if (on) resumeBtn.hidden = true;
    syncForm();
  };

  const engineLine = (r) => (r.engine === 'webgpu' ? ' ' + t('render.engine.webgpu') : r.engine === 'webgl' ? ' ' + t(r.fallback && r.fallback !== 'no-webgpu' ? 'render.engine.webgl.failed' : 'render.engine.webgl') : '');
  /** Show a finished (or stopped) result and its status line. */
  const finish = (r, hq, sunUp) => {
    layers = r.layers || null;
    lastSamples = r.passes || 0;
    showKey = 'beauty';
    buildMixPanel();
    syncFormats();
    if (layers && Object.keys(settings.mix).length && r.blob) {
      // a mix chosen earlier applies to the new picture too
      lastBlob = r.blob;
      recompose();
    } else if (r.blob) {
      lastBlob = r.blob;
      if (lastPic) URL.revokeObjectURL(lastPic);
      lastPic = URL.createObjectURL(r.blob);
      pic.replaceChildren(el('img', { src: lastPic, alt: t('render.alt'), width: String(r.w), height: String(r.h), dataset: { renderImage: '' } }));
    }
    const s = (r.ms / 1000).toFixed(1);
    const adNote = r.adaptive ? ' ' + t(r.adaptive.converged ? 'render.adaptive.converged' : 'render.adaptive.done', { avg: r.adaptive.avg, max: r.adaptive.max }) : '';
    const dnNote = r.layers && r.layers.denoised ? ' ' + t(r.layers.denoiseEngine === 'cpu' ? 'render.denoise.done.cpu' : 'render.denoise.done') : r.layers && r.layers.denoiseError ? ' ' + t('render.denoise.failed', { code: r.layers.denoiseError }) : '';
    status.textContent = (r.budget ? t('render.budget', { passes: r.passes, s })
      : r.stopped ? (r.passes ? t(hq ? 'render.hq.stopped' : 'render.stopped', { passes: r.passes, s }) : t('render.stopped.none'))
      : t(hq ? 'render.hq.done' : 'render.done', { w: r.w, h: r.h, passes: r.passes, s })) + (hq ? engineLine(r) : '') + (sunUp ? '' : ' ' + t('render.sun.down')) + (hq && SKIES[settings.sky]?.hdri && !SESSION.hdri ? ' ' + t('render.hdri.missing') : '') + adNote + dnNote;
    if (r.resume) { resumable = r; resumeBtn.hidden = false; }
  };
  const progressTo = (w, h, n, hq) => {
    let shown = null;
    return (f, canvas) => {
      if (!shown) { shown = el('canvas', { width: w, height: h, 'aria-label': t('render.alt'), role: 'img' }); pic.replaceChildren(shown); }
      shown.getContext('2d').drawImage(canvas, 0, 0);
      status.textContent = t(hq ? 'render.hq.progress' : 'render.progress', { done: Math.round(f * n), n });
    };
  };
  let lastSunUp = true;
  async function resume() {
    if (!resumable || running) return;
    const r0 = resumable;
    resumable = null;
    running = new AbortController();
    setRunning(true);
    try {
      const n = QUALITY[settings.quality];
      const r = await r0.resume({ signal: running.signal, onProgress: progressTo(r0.w, r0.h, n, true), seconds: settings.minutes * 60 });
      finish(r, true, lastSunUp);
    } catch (e) {
      r0.release?.();
      status.textContent = t('render.failed', { error: String(e?.message || e) });
    } finally {
      running = null;
      setRunning(false);
    }
  }
  /**
   * An outside engine (0.8 RE.1): the hand-off package (o.handoff) goes to the engine. A 'render' engine hands the picture back, which is
   * shown like our own and labelled with the engine that drew it (D5); 'link' and 'open' engines send the package and say so; on the web
   * (saveOnly) the package is saved as a file (D4) and nothing runs.
   */
  async function goOutside(w, h) {
    const row = engineRows.find((r) => r.id === engineSel.value), eng = registry.get(engineSel.value);
    if (!row || !eng) { status.textContent = t('render.engine.gone'); return; }
    if (!row.ok && !row.saveOnly) { status.textContent = t('render.engine.why.' + (row.why || 'unknown'), { name: row.name }); return; }
    if (!o.handoff) { status.textContent = t('render.engine.nohandoff'); return; }
    running = new AbortController();
    setRunning(true);
    status.textContent = t('render.engine.preparing', { name: row.name });
    try {
      const eopts = cleanEngineOpts((settings.engineOpts || {})[eng.id], eng.settings);
      const wantGlb = typeof eng.needsGlb === 'function' ? !!eng.needsGlb(eopts) : !!eng.needsGlb;
      const pkg = await o.handoff(settings, { w, h, glb: wantGlb });
      const base = o.fileBase ? o.fileBase() : 'scene';
      if (eng.saveAs) {
        // a file for any program that reads it (USD or glTF): the scene file alone
        const out = await eng.saveAs(pkg, { base, opts: eopts });
        o.download(out.blob, out.name);
        status.textContent = t('render.engine.saved', { file: out.name, name: row.name });
        return;
      }
      if (row.saveOnly) {
        const { zipPackage } = await import('./handoff.js');
        const name = (o.fileBase ? o.fileBase() : 'scene') + ' for ' + row.name + '.zip';
        o.download(new Blob([zipPackage(pkg)], { type: 'application/zip' }), name);   // i18n-ignore: media type
        status.textContent = t('render.engine.saved', { file: name, name: row.name });
        return;
      }
      if (eng.kind === 'link' || eng.kind === 'open') {
        const r = await eng.send(pkg, { settings, opts: eopts, base, signal: running.signal });
        status.textContent = t(eng.kind === 'link' ? 'render.engine.sent' : 'render.engine.opened', { name: row.name }) + (r && r.note ? ' ' + t('render.engine.opened.where', { folder: r.note }) : '');
        return;
      }
      const t0 = Date.now();
      const r = await eng.render({ id: 'dialog', kind: 'still', w, h, settings, engine: eng.id, pkg, opts: cleanEngineOpts((settings.engineOpts || {})[eng.id], eng.settings) },
        { signal: running.signal, onProgress: (f) => { status.textContent = t('render.engine.progress', { name: row.name, pct: Math.round(f * 100) }); } });
      if (!r || !r.blob) { status.textContent = running.signal.aborted ? t('render.stopped.none') : t('render.engine.nopicture', { name: row.name }); return; }
      layers = null; lastSamples = 0;
      buildMixPanel(); syncFormats();
      lastBlob = r.blob;
      if (lastPic) URL.revokeObjectURL(lastPic);
      lastPic = URL.createObjectURL(r.blob);
      pic.replaceChildren(el('img', { src: lastPic, alt: t('render.alt'), width: String(r.w || w), height: String(r.h || h), dataset: { renderImage: '' } }));
      const made = r.madeBy || { engine: row.name, version: row.version };
      status.textContent = t('render.engine.done', { w: r.w || w, h: r.h || h, s: ((Date.now() - t0) / 1000).toFixed(1), name: made.engine || row.name, version: made.version || '' });
    } catch (e) {
      status.textContent = e?.code === 'cancelled' ? t('render.stopped.none') : e?.code === 'no_glb' ? t('render.engine.noglb') : t('render.failed', { error: String(e?.message || e) });
    } finally {
      running = null;
      setRunning(false);
    }
  }
  async function go() {
    if (running) { running.abort(); return; }
    dropResume();
    settings = readForm();
    o.save?.(settings);
    const vs = o.viewSize(), { w, h } = sizeFor(settings, vs.w, vs.h);
    if (isOutside()) return goOutside(w, h);
    let scene;
    try { scene = o.scene(settings); } catch (e) { status.textContent = t('render.failed', { error: String(e?.message || e) }); return; }
    if (!scene.items.some((it) => !it.lines)) { scene.dispose?.(); status.textContent = t('render.empty'); return; }
    running = new AbortController();
    setRunning(true);
    const n = QUALITY[settings.quality], hq = settings.mode === 'hq';
    status.textContent = hq ? t('render.hq.preparing') : t('render.progress', { done: 0, n });
    try {
      const onProgress = progressTo(w, h, n, hq);
      let r;
      if (hq) {
        let PTm;
        try { PTm = await import('./render-pt.js'); } catch (e) { throw new Error(t('render.hq.load', { error: String(e?.message || e) })); }
        r = await PTm.pathTraceStill(scene, settings, { w, h, signal: running.signal, onProgress, seconds: settings.minutes * 60, hdri: hdriFor(settings), lut: lutFor(settings), volumeData: volumeFor(settings) });
      } else r = await renderStill(scene, settings, { w, h, signal: running.signal, onProgress });
      lastSunUp = !!scene.sun;
      finish(r, hq, lastSunUp);
    } catch (e) {
      status.textContent = e?.code === 'aux_too_big' ? t('render.mix.too_big') : t('render.failed', { error: String(e?.message || e) });
    } finally {
      scene.dispose?.();
      running = null;
      setRunning(false);
    }
  }
  syncFormats();
  goBtn.addEventListener('click', go);
  resumeBtn.addEventListener('click', resume);
  const shownCanvas = () => {
    const x = pic.querySelector('canvas, img');
    if (!x || x.tagName === 'CANVAS') return x;
    const c = el('canvas', { width: x.naturalWidth, height: x.naturalHeight });
    c.getContext('2d').drawImage(x, 0, 0);
    return c;
  };
  saveBtn.addEventListener('click', async () => {
    if (!lastBlob) return;
    const fmt = fmtSel.value, base = (o.fileBase ? o.fileBase() : 'render') + ' render';
    const MIME = { png: 'image/png', jpeg: 'image/jpeg', webp: 'image/webp' };   // i18n-ignore: media types
    try {
      let blob = lastBlob, name = base + '.png';
      if (fmt === 'jpeg' || fmt === 'webp') {
        const c = shownCanvas();
        blob = await new Promise((res) => c.toBlob(res, MIME[fmt], 0.92));
        if (!blob || blob.type !== MIME[fmt]) { status.textContent = t('render.out.unsupported', { format: t('render.out.' + fmt) }); return; }
        name = base + (fmt === 'jpeg' ? '.jpg' : '.webp');
      } else if (NEEDS_LAYERS.has(fmt) && layers) {
        const OUT = await import('./pt-output.js');
        const lut = lutFor(settings);
        let bytes;
        if (fmt === 'png16') {
          const f = compose(layers, settings.mix, { exposure: layers.exposure, wb: layers.wb, show: showKey, post: settings.post, lut, float: true });
          bytes = f instanceof Float32Array ? OUT.png16(f, layers.w, layers.h) : OUT.pngBytes(layers.w, layers.h, Uint16Array.from({ length: layers.w * layers.h * 3 }, (_, i) => f[Math.floor(i / 3) * 4 + (i % 3)] * 257), 16);
          name = base + ' 16-bit.png';
        } else if (fmt === 'exr') { bytes = OUT.exrBytes(layers, { samples: lastSamples, app: o.appName || 'CadCraft' }); name = base + '.exr'; }
        else { bytes = OUT.writeRenderFile(layers, settings, { samples: lastSamples, app: o.appName || 'CadCraft', created: new Date().toISOString() }); name = base + '.ccrender'; }
        blob = new Blob([bytes], { type: fmt === 'png16' ? 'image/png' : 'application/octet-stream' });   // i18n-ignore: media types
      }
      o.download(blob, name);
      status.textContent = t('render.saved', { file: name });
    } catch (e) { status.textContent = t('render.failed', { error: String(e?.message || e) }); }
  });
  openBtn.addEventListener('click', () => openFile.click());
  openFile.addEventListener('change', async () => {
    const f = openFile.files && openFile.files[0];
    openFile.value = '';
    if (!f || running) return;
    try {
      if (f.size > 4 * 1024 * 1024 * 1024) throw Object.assign(new Error('too big'), { code: 'too_big' });   // i18n-ignore: caught below
      const [OUT, EXR] = await Promise.all([import('./pt-output.js'), import('../exr/exr.js')]);
      const r = OUT.readRenderFile(new Uint8Array(await f.arrayBuffer()), EXR.readExr);
      dropResume();
      layers = r.layers;
      lastSamples = r.meta.samples;
      const fs = cleanSettings({ ...settings, mix: r.settings.mix, mixPresets: { ...settings.mixPresets, ...(r.settings.mixPresets || {}) }, post: r.settings.post });
      settings = fs;
      o.save?.(settings);
      postToForm();
      showKey = 'beauty';
      buildMixPanel(); syncFormats();
      recompose();
      saveBtn.disabled = false;
      status.textContent = t('render.out.opened', { file: f.name, w: layers.w, h: layers.h, n: Math.round(r.meta.samples) });
    } catch (e) { status.textContent = t('render.out.bad', { file: f.name, code: String(e?.code || 'damaged') }); }
  });
  const close = () => { if (running) running.abort(); if (dlg.open) dlg.close(); };
  closeBtn.addEventListener('click', close);
  // Esc while rendering stops the render and keeps the dialog (handled on keydown: a prevented cancel is not reliable)
  dlg.addEventListener('keydown', (e) => { if (e.key === 'Escape' && running) { e.preventDefault(); e.stopPropagation(); running.abort(); } });
  dlg.addEventListener('cancel', (e) => { if (running) { e.preventDefault(); running.abort(); } });
  dlg.addEventListener('close', () => { queueUi?.dispose(); dropResume(); if (lastPic) URL.revokeObjectURL(lastPic); dlg.remove(); o.onClose?.(); });
  (o.parent || document.body).append(dlg);
  dlg.showModal();
  (gl.ok ? goBtn : closeBtn).focus();
  return { dialog: dlg, close };
}
