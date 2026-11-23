/* SPDX-License-Identifier: Apache-2.0 */
/**
 * walk-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountWalkWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountWalkWire(ctx) {
  const { ST, status, walkOpts, eyeShow, eyeBad, walkOff, walkOn, uw } = ctx;

  ST.walking = false;
  uw.height.addEventListener('change', () => { walkOpts(); });   // a typed height is kept (in metres) when the unit changes
  eyeShow();
  window.addEventListener('bimcraft-units', eyeShow);
  uw.bar.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') e.target.blur();   // the walking keys go on working after a tick
    if (!ST.viewer?.walk) return;
    const o = walkOpts();
    if (!(o.height > 0 && o.height < 10)) { eyeBad(); return; }
    const old = ST.viewer.walk.o.height;
    Object.assign(ST.viewer.walk.o, o);
    ST.viewer.walk.pos.y += o.height - old;
    ST.viewer.settle();
    ST.viewer.applyWalk();
  });
  uw.bar.querySelector('[data-walk-done]').addEventListener('click', () => { walkOff(); status(t('walk.off')); });
  // the on-screen walk pad (touch screens): held = the key held
  for (const b of uw.bar.querySelectorAll('[data-walk-key]')) {
    const k = b.dataset.walkKey;
    const off = () => ST.viewer?.walkKey(k, false);
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); b.setPointerCapture?.(e.pointerId); ST.viewer?.walkKey(k, true); });
    b.addEventListener('pointerup', off);
    b.addEventListener('pointercancel', off);
    b.addEventListener('lostpointercapture', off);
    b.addEventListener('contextmenu', (e) => e.preventDefault());   // a long press on a pad button is not a right-click
  }
  window.bimcraftWalk = { on: walkOn, off: walkOff, state: () => ST.viewer?.walk && { pos: ST.viewer.walk.pos.toArray(), o: { ...ST.viewer.walk.o } } };   // for tests
}
