/* SPDX-License-Identifier: Apache-2.0 */
/**
 * recover-offer.js — BimCraft's "Recover your work?" that does not lock the page (0.9 FX.41, session bim-fix-09).
 *
 * The shared Autosave.offer() (app-autosave.js) shows its list with showModal(), which makes the rest of the page inert: while saved copies
 * are listed, "New building" and "Choose a file" cannot be pressed. Measured 2026-11-05 (tools/bimcraft-test/browser-recovery09.mjs):
 * with the dialog up, a real click on either button never reaches it. BimCraft lists the copies in the same dialog, but non-modal (show()),
 * as a card at the corner: the person can start a new building, open a file, or press Recover when ready. The shared module is not edited
 * (a byte-identical copy in every app); the one call that makes the dialog is told to open it non-modal.
 *
 * offerRecovery({ autosave, onRecover, status, t }) → the offer's promise ({recovered, discarded, kept}).
 */
export function offerRecovery({ autosave, onRecover, status, t }) {
  const proto = typeof HTMLDialogElement !== 'undefined' ? HTMLDialogElement.prototype : null;
  const run = async () => {
    const list = await autosave.orphans();
    if (!list.length) return { recovered: 0, discarded: 0, kept: 0 };
    // what the person sees while the copies are read and while a big one opens: the status line says it, with the size
    const wrapped = async (rec) => {
      const mb = (rec.size || 0) / 1048576;
      status(t('recover.reading', { file: rec.name || 'model.ifc', mb: mb < 10 ? mb.toFixed(1) : String(Math.round(mb)) }));
      return onRecover(rec);
    };
    if (!proto) return autosave.offer({ list, onRecover: wrapped });
    const modal = proto.showModal;
    let promise;
    // only the dialog this call makes (it is created and shown synchronously inside offer) is opened non-modal; restored at once
    proto.showModal = function () {
      if (this.hasAttribute('data-autosave-dialog')) { this.classList.add('bc-recover-float'); return this.show(); }
      return modal.call(this);
    };
    try { promise = autosave.offer({ list, onRecover: wrapped }); } finally { proto.showModal = modal; }
    status(t('recover.pending', { n: list.length }));
    return promise;
  };
  return run();
}
