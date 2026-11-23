/* SPDX-License-Identifier: Apache-2.0 */
/**
 * library-wire.js: bimcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountLibraryWire(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */

export function mountLibraryWire(ctx) {
  const { ST, showTab, tabs, root } = ctx;

  const rpanes = root.querySelectorAll('[data-rpane]');   // kept: the right panel may move to the panels window
  ST.libraryLoaded = false;
  tabs.forEach((t) => {
    t.addEventListener('click', () => showTab(t.dataset.rtab));
    t.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const list = [...tabs], i = list.indexOf(t), next = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
      next.focus(); showTab(next.dataset.rtab);
    });
  });

  ST.libKinds = null;   // set where the model tools mount (library-kinds-bim.js)
}
