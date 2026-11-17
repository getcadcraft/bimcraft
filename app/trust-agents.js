/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * trust-agents.js: elements an assistant made are unverified until a person checks them (0.10 BK.143; session assistant-10; principle 3 of
 * assets/js/ai-principles.js, "trust but verify"). The state itself is BK.64's: property set CadCraft_Verification on the element
 * (verify-model.js), shown and cleared by a PERSON in Properties › Verification (verify-ui.js). Scans, traced drawings and PDFs already mark what
 * they make; this file does the same for what an assistant makes, without touching the tools that make it.
 *
 *   withUnverified(apply, { merge? }) → apply'      wraps the agents' one undo step: every element (and room) whose GlobalId was not in the model
 *                                                    before the step is marked unverified (source 'assistant', note "Made by an assistant: <step>")
 *                                                    in the SAME undo step (the journals are merged), and again on redo. A wall the assistant only
 *                                                    changed keeps its GlobalId and its mark (a checked wall stays checked only if the step left its record alone).
 *   trustTools({ ed }) → [unverified_list]           read: what is still unverified, by source, class and level, with the elements' GlobalIds
 *
 * There is NO tool that marks an element checked or takes the mark off: only a person does (rule 43 of the principles: a person clears them).
 * Mount (bim-core-10's agents.js): `const apply = withUnverified(apply0)` around the `apply` the tools receive, and
 * `for (const d of trustTools({ ed })) C.tool(d)` beside the schedule tools.
 * Until 'assistant' is in modelaudit/verify.js SOURCES the record's Source stays empty and the note carries the words (makeRecord drops an unknown source).
 */
import { ids } from './ifc-util.js';
import { ModelWriter } from './model-write.js';
import { markRecognised, readVerification } from './verify-model.js';

export const ASSISTANT_SOURCE = 'assistant';
const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });

/** The GlobalIds of every element and room in the model. */
function guidsOf(w) {
  const out = new Map();
  for (const name of ['IFCELEMENT', 'IFCSPACE']) {
    for (const id of ids(w.api, w.mid, name, name === 'IFCELEMENT')) { const g = w.guidOf(id); if (g && !out.has(g)) out.set(g, id); }
  }
  return out;
}

/** One journal from two (the second's first states of lines the first already changed are dropped): the same rule as model-ui.js mergeJournals. */
export function mergeJournals(a, b) {
  if (!a) return b; if (!b) return a;
  const before = new Map(a.before);
  for (const [id, line] of b.before) if (!before.has(id) && !a.created.includes(id)) before.set(id, line);
  return { created: [...a.created, ...b.created], before, retyped: [...(a.retyped || []), ...(b.retyped || [])] };
}

const SKIP = /^IfcOpening/i;

export function withUnverified(apply, { merge = mergeJournals } = {}) {
  return (label, opFn) => apply(label, (editor) => {
    const before = guidsOf(new ModelWriter(editor.W, editor.api, editor.mid));
    const r = opFn(editor);
    if (!r || typeof r !== 'object') return r;
    const w = new ModelWriter(editor.W, editor.api, editor.mid);
    const m = w.run((ww) => {
      const fresh = [];
      for (const [g, id] of guidsOf(ww)) {
        if (before.has(g)) continue;
        let raw = ''; try { raw = String(ww.api.GetNameFromTypeCode(ww.api.GetLineType(ww.mid, id)) || ''); } catch { raw = ''; }
        if (!SKIP.test(raw)) fresh.push(id);
      }
      if (fresh.length) markRecognised(ww, fresh, ASSISTANT_SOURCE, 'Made by an assistant: ' + String(label).slice(0, 100));
      return { n: fresh.length };
    });
    return m.n ? { ...r, journal: merge(r.journal, m.journal), unverified: m.n } : r;
  });
}

export function trustTools({ ed }) {
  return [{
    name: 'unverified_list', group: 'read', untrusted: true, title: 'Elements nobody has checked',
    description: 'Lists the elements that are still unverified: made by an assistant, read from a scan, a traced drawing or a PDF, and not yet checked by a person. Gives the totals by source, class and level and the elements (GlobalId, class, name, level, source, note), at most `limit`. Say in what you tell the person that these are unverified. You cannot mark an element checked or field-verified: only the person does, in Properties › Verification.',
    inputSchema: obj({ limit: { type: 'integer', minimum: 1, maximum: 500, description: 'How many elements to list. Default 100.' } }),
    run: (a) => {
      const e = ed(); if (!e) throw new Error('Open an IFC model first.');
      const all = readVerification(new ModelWriter(e.W, e.api, e.mid));
      const open = all.filter((x) => x.record && x.record.state === 'unverified');
      const tally = (f) => { const t = {}; for (const x of open) { const k = f(x) || '(none)'; t[k] = (t[k] || 0) + 1; } return t; };
      const limit = a && a.limit ? a.limit : 100;
      return {
        unverified: open.length, checkedOrFieldVerified: all.length - open.length,
        bySource: tally((x) => x.record.source), byClass: tally((x) => (x.cls || '').replace(/^Ifc/, '')),
        elements: open.slice(0, limit).map((x) => ({ id: x.guid, class: (x.cls || '').replace(/^Ifc/, ''), name: x.name, source: x.record.source || null, note: x.record.note || null })),
        truncated: open.length > limit,
        note: 'Only a person marks an element checked or takes the mark off.',
      };
    },
  }];
}
