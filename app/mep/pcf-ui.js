/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mep/pcf-ui.js — the two buttons of the pipe options row: Export PCF (every pipe run of the model) and Import PCF… (a file from a pipe-stress or
 * isometric program becomes runs on the current level). Mounted by mep-ui.js; the work is mep/pcf-bim.js. (0.8 IND.4)
 *   mountPcf(A, { q, getRuns, levelGuid, t })
 */
import { exportPcf, importPcf } from './pcf-bim.js';
import { readPcf, writePcf } from '../interop/pcf.js';
import { readPipes } from '../ifc/pipes.js';           // 0.8 IND.8: piping already in the open IFC
import { extrasOf } from '../interop/pcf-extras.js';   // 0.8 IND.4: what a PCF holds that is not drawn
import { placeRun } from '../mep-model.js';

export function mountPcf(A, { q, getRuns, levelGuid, t }) {
  const base = () => String(A.host.fileName?.() || 'model').replace(/\.[^.]+$/, '');
  let src = null;
  const publish = (list, file) => {
    try {
      if (!window.ccProblems?.source) return;
      src = src || window.ccProblems.source({ id: 'bimcraft.pcf', kind: 'import', label: t('mep.pcf.source') });
      src.set(list.map((p) => ({ code: p.code, severity: p.severity, text: p.text, about: [{ kind: 'file', id: file }] })));
    } catch (e) { /* the panel is optional */ }
  };
  q('[data-mep-pcfout]')?.addEventListener('click', () => {
    const ed = A.ed();
    if (!ed) return;
    let r, ip = null;
    try {
      r = exportPcf(getRuns());
      // 0.8 IND.8: the IFC's own pipe segments, fittings and valves ride along (the open model's cc-ifc IfcFile)
      try { const f = ed.api?.file?.(ed.mid); ip = f ? readPipes(f) : null; } catch (e) { ip = null; }
      if (ip && ip.model.pipelines.length) {
        r.model.pipelines.push(...ip.model.pipelines);
        r.text = writePcf(r.model);
        r.problems = r.problems.filter((p) => p.code !== 'pcf.export.none');   // the IFC alone is enough
      }
    } catch (e) { A.host.status(t('mep.pcf.failed', { why: e.message }), true); return; }
    publish([...r.problems, ...(ip ? ip.problems : [])], base() + '.pcf');
    if (!r.text) { A.host.status(t('mep.pcf.none'), true); return; }
    A.host.download(base() + '.pcf', r.text, 'text/plain');
    A.host.status(t('mep.pcf.exported', { n: r.model.pipelines.reduce((a, p) => a + p.components.length, 0), lines: r.model.pipelines.length }));
  });
  const pick = A.root.ownerDocument.createElement('input');
  pick.type = 'file'; pick.accept = '.pcf,.txt'; pick.hidden = true;
  A.root.append(pick);
  q('[data-mep-pcfin]')?.addEventListener('click', () => { if (A.ed()) pick.click(); });
  pick.addEventListener('change', async () => {
    const f = pick.files?.[0]; pick.value = '';
    if (!f || !A.ed()) return;
    try {
      const model = readPcf(new Uint8Array(await f.arrayBuffer()));
      const r = importPcf(model);
      const x = extrasOf(model);   // 0.8 IND.4: say what was not drawn
      const all = [...model.problems, ...r.problems, ...x.problems];
      publish(all, f.name);
      if (!r.runs.length) { A.host.status(t('mep.pcf.empty', { name: f.name }), true); return; }
      let n = 0;
      for (const run of r.runs) {
        const spec = { storey: levelGuid(), kind: 'pipe', system: run.system, mat: run.mat, cls: run.cls, size: run.size, slope: 0, points: run.points, valves: run.valves, line: run.line, ends: [null, null] };
        A.commit(placeRun(spec), { label: t('mep.run.pipe'), verb: t('model.verb.drew') });
        n++;
      }
      A.host.status(t('mep.pcf.imported', { n, name: f.name, warn: all.filter((p) => p.severity !== 'note').length }));
    } catch (e) { A.host.status(t('mep.pcf.failed', { why: e.message }), true); }
  });
}
