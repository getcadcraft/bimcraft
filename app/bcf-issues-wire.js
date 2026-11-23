/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bcf-issues-wire.js: bimcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountBcfIssuesWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountBcfIssuesWire(ctx) {
  const { ST, status, settingsDlg, fileHost, typedAuthor, accountName, keepAuthor } = ctx;

  // Settings › BimCraft › Your name on issues: "From your account (<name>)" + "Use another name", or the typed name
  ST.authorOther = false;
  function syncAuthorForm() {
    const box = settingsDlg && settingsDlg.querySelector('[data-bc-author-set]');
    if (!box) return;
    const acc = accountName(), typed = typedAuthor(), other = !!typed || ST.authorOther;
    const input = box.querySelector('[name="bcAuthor"]');
    if (input && document.activeElement !== input) input.value = typed;
    const from = box.querySelector('[data-bc-author-account]');
    if (from) from.hidden = !acc;
    const line = box.querySelector('[data-bc-author-from]');
    if (line) line.textContent = acc ? t('set.author.account', { name: acc }) : '';
    const ob = box.querySelector('[data-bc-author-other]');
    if (ob) ob.hidden = other;
    const row = box.querySelector('[data-bc-author-row]');
    if (row) row.hidden = !!acc && !other;
    const mine = box.querySelector('[data-bc-author-mine]');
    if (mine) mine.hidden = !acc || !other;
  }
  if (settingsDlg) {
    new MutationObserver(() => { if (settingsDlg.open) { ST.authorOther = false; syncAuthorForm(); } }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
    settingsDlg.addEventListener('change', (e) => {
      if (e.target.name !== 'bcAuthor') return;
      const v = e.target.value.trim().slice(0, 120);
      keepAuthor(v);
      if (!v) ST.authorOther = false;
      syncAuthorForm();
      status(v && v !== accountName() ? t('set.author.done', { name: v }) : accountName() ? t('set.author.account.done', { name: accountName() }) : t('set.author.cleared'));
    });
    settingsDlg.addEventListener('click', (e) => {
      if (e.target.closest('[data-bc-author-other]')) { ST.authorOther = true; syncAuthorForm(); settingsDlg.querySelector('[name="bcAuthor"]')?.focus(); }
      else if (e.target.closest('[data-bc-author-mine]')) { keepAuthor(''); ST.authorOther = false; syncAuthorForm(); status(t('set.author.account.done', { name: accountName() })); }
    });
  }
  fileHost.on('account', () => { syncAuthorForm(); if (ST.issueForm) ctx.renderIssues(); });
  syncAuthorForm();
}
