/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handoff-bim.js — BimCraft's side of the render hand-off (0.8 RE.2, session `engines`; render/handoff.js has the package and the
 * manifest). The Render dialog's `handoff(settings, {w, h})` option is made here from the pieces openRender() already has:
 *
 *   bimHandoff({ scene, entries, matrixOf, name, appVersion, glb? }) → async (settings, { w, h }) → package { manifest, files }
 *     scene(settings) = the dialog's scene (render-bim.js bimScene + lamps), entries = the open models (what Export › USD gets),
 *     matrixOf(mi) = viewer.modelMatrix.
 *     glb() → {lamps, site, names} (what openRender / exportGlb already have): with { glb: true } the package also holds scene.glb.
 *   stageMatrix(entry, matrixOf) → the 4×4 that takes the viewer's Y-up scene to the composed USD stage world (docs/USD-CONVENTIONS § 2).
 *
 * The USD is bimUsd's (usd-bimcraft.js): Z up, each Site's own transform takes the viewer's coordinates back to the IFC file's. The
 * manifest's camera, sun and lamps are written in that composed world (`toStage`), so an engine that loads the stage finds them
 * where BimCraft shows them. Materials: bimUsd writes one `Color_<hex>` material per colour drawn; other looks (library materials
 * on painted elements) are not in the file, so their manifest entries carry an empty `prim` and only the exact values.
 */
import { bimUsd } from './usd-bimcraft.js';
import { cleanSettings } from './render/looks.js';
import { buildManifest, buildPackage } from './render/handoff.js';
import { sceneGlb } from './glb-bim.js';

/** Y up (the viewer) → Z up: (x, y, z) → (x, −z, y), column-major. */
export const Y_TO_Z = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];
const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function mmul(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  return o;
}
/** The inverse of a rigid placement with a uniform scale (what the viewer's model placements are): as usd-bimcraft.js does it. */
function inv(m) {
  const s2 = m[0] * m[0] + m[1] * m[1] + m[2] * m[2] || 1;
  const r = [m[0] / s2, m[4] / s2, m[8] / s2, 0, m[1] / s2, m[5] / s2, m[9] / s2, 0, m[2] / s2, m[6] / s2, m[10] / s2, 0, 0, 0, 0, 1];
  r[12] = -(r[0] * m[12] + r[4] * m[13] + r[8] * m[14]);
  r[13] = -(r[1] * m[12] + r[5] * m[13] + r[9] * m[14]);
  r[14] = -(r[2] * m[12] + r[6] * m[13] + r[10] * m[14]);
  return r;
}

/**
 * scene → composed stage world, for the model whose Site the render is of (the first visible one: the dialog's sun and site come from
 * the current model too). In Y up, scene = P·C·file, so file = (P·C)⁻¹·scene. bimUsd writes the viewer's points turned Z up (A) under a
 * Site whose own transform is A·(P·C)⁻¹·A⁻¹, so a point's composed position is that transform · A · scene = A·(P·C)⁻¹ · scene.
 * A file with no coordination matrix gets no Site transform: composed = A · scene.
 */
export function stageMatrix(entry, matrixOf = () => null) {
  let C = null;
  try { C = entry && entry.ifc && entry.ifc.api && entry.model ? [...entry.ifc.api.GetCoordinationMatrix(entry.model.modelID)] : null; } catch { C = null; }
  if (!C || C.length !== 16) return Y_TO_Z;
  const P = matrixOf(entry.mi) || IDENT;
  return mmul(Y_TO_Z, inv(mmul(P, C)));
}

/** Where bimUsd puts a colour's material; anything but a colour is not in the file. */
export const primOfBim = (key) => (/^#[0-9a-f]{6}$/i.test(key) ? '/World/Looks/Color_' + key.toLowerCase().slice(1) : '');

export function bimHandoff({ scene, entries, matrixOf = () => null, name = 'model.ifc', appVersion = '', glb = null }) {
  return async (settingsIn, { w, h, frames = null, glb: wantGlb = false }) => {
    const settings = cleanSettings({ ...settingsIn, mode: 'hq' });
    const sc = scene(settings);
    try {
      const shown = entries.filter((e) => e.visible !== false);
      const { data } = await bimUsd(entries, { format: 'usdc', name, appVersion, matrixOf });
      const manifest = buildManifest({ app: 'BimCraft', appVersion, scene: sc, settings, w, h, usdFile: 'scene.usdc', primOf: primOfBim, toStage: stageMatrix(shown[0], matrixOf), frames, created: new Date().toISOString() });
      let extra = {};
      if (wantGlb && glb) {
        // the glTF half of "Open in …" (0.6 DC.22's For rendering file): the same scene, lamps and looks, written by glb-bim.js
        const ctx = await glb();
        extra = { 'scene.glb': (await sceneGlb(sc, { settings, ...ctx })).bytes };
      }
      return buildPackage({ manifest, usd: data, ies: manifest.iesFiles, extra });
    } finally { sc.dispose?.(); }
  };
}
