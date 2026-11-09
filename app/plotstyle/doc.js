/* SPDX-License-Identifier: Apache-2.0 */
// plotstyle/doc.js — the ACI colour functions of cadcraft/dev/doc.js, cut unchanged by tools/bimcraft-test/plotstyle-sync.mjs. Never edit.

// Colours (AutoCAD Color Index)

const ACI_BASE = { 1: '#ff0000', 2: '#ffff00', 3: '#00ff00', 4: '#00ffff', 5: '#0000ff', 6: '#ff00ff', 7: '#ffffff', 8: '#808080', 9: '#c0c0c0' };
const ACI_GRAYS = ['#333333', '#505050', '#696969', '#828282', '#bebebe', '#ffffff'];

/** '#rrggbb' for an ACI number; ACI 7 is reported as 'ink' (black on paper, white on a dark screen). */
export function aciHex(i) {
  if (i === 7) return 'ink';
  if (ACI_BASE[i]) return ACI_BASE[i];
  if (i >= 250 && i <= 255) return ACI_GRAYS[i - 250];
  if (i < 10 || i > 249) return 'ink';
  const hue = Math.floor((i - 10) / 10) * 15, j = (i - 10) % 10;
  const v = [1, 1, 0.8, 0.8, 0.6, 0.6, 0.5, 0.5, 0.3, 0.3][j], s = j % 2 === 0 ? 1 : 0.5;
  return hsvHex(hue, s, v);
}
function hsvHex(h, s, v) {
  const f = (n) => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); };
  return '#' + [f(5), f(3), f(1)].map((x) => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}

/** Nearest ACI (1–255) for a '#rrggbb' — used when writing R12 DXF, which has no true colour. */
export function nearestAci(hex) {
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [r, g, b] = rgb(hex);
  let best = 7, bd = Infinity;
  for (let i = 1; i <= 255; i++) {
    const c = aciHex(i) === 'ink' ? '#ffffff' : aciHex(i);
    const [r2, g2, b2] = rgb(c), d = (r - r2) ** 2 + (g - g2) ** 2 + (b - b2) ** 2;
    if (d < bd) { bd = d; best = i; }
  }
  return best;
}
