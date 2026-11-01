/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — BimCraft's end of the project-level undo (0.8 round 5, EG.77; docs/spikes/EG.77_PART_4.md). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Same protocol as CadCraft's hook:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's host forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * The depth is the active model's change list (editor.changes). settle() is called after every render of that list: a longer list is one finished
 * step. A shorter one that the window's own undo() did not announce (Save clears the list, switching the edited model swaps it) is only noted, never
 * reported, so the reporter's probe says "moved" and Studio skips this window instead of forcing it.
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ changes, undoOne, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => changes().length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false, last = depth();
  const labelOf = () => changes().at(-1)?.label || '';
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { undoOne(); } finally { running = false; } }, label: labelOf });
  const hook = {
    rep,
    settle() { const d = depth(); if (d > last && !running) rep.stepDone(labelOf()); last = d; },
    undone() { last = depth(); if (!running) rep.undone(); },
    redone() { last = depth(); rep.redone(); },
  };
  if (win) win.ccUndoReporter = rep;
  return hook;
}
