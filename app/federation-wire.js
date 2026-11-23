/* SPDX-License-Identifier: Apache-2.0 */
/**
 * federation-wire.js: bimcraft.js's 0 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFederationWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';

export function mountFederationWire(ctx) {
  const { status, guard, showTeamBtn, teamTw, addModel, models, teamBtn } = ctx;

  window.addEventListener('cc-teamwork-ready', showTeamBtn);
  teamBtn?.addEventListener('click', () => guard(async () => {
    const tw = teamTw();
    if (!tw) return;
    const { loadTeamModels } = await import('./team-models.js');
    status(t('fed.team.reading'));
    const r = await loadTeamModels({ tw, addModel, have: () => models.map((m) => m.teamDrawing).filter(Boolean) });
    if (!r.ok) { status(t('fed.team.failed', { why: r.message || '' }), true); return; }
    status(t(r.added.length ? 'fed.team.done' : 'fed.team.none', { n: r.added.length, hidden: r.hidden, turned: r.turned, skipped: r.skipped.length }));
  }));
  showTeamBtn();
}
