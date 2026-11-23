/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autosave-pictures.js — 0.11 PERF.24 (BimCraft, models with pictures): the autosave journal (history/ifc-journal.js) carries the model's pictures
 * as files beside it instead of falling back to the whole IFC on every write. A picture (model-picture.js, round 3) is an IfcAnnotation + an
 * IfcDocumentReference whose Location names bytes kept in picture-store.js; the IFC lines are journaled as any other edit, and the bytes go in
 * the copy as `files` ([loc, bytes]): all of them with a base or a whole copy, then only the ones that changed (by the bytes object: the store
 * keeps one Uint8Array per picture until it is replaced) and the ones that went. Recovery puts them back in the store before the IFC opens,
 * so the pictures come back with the model (also the big ones a plain-IFC copy could not embed). Host-free (Node tests run it).
 *
 *   const j = withPictures(ifcJournal({...}), { files: () => [{ loc, bytes }], meta });
 *   …at recovery…   for (const [loc, bytes] of recoverPictures(rec)) putBytes(loc, bytes);   then recoverIfc(rec, IfcFile)
 */
import { IFC_WHOLE, IFC_DELTA } from './history/ifc-journal.js';

export function withPictures(journal, { files, meta = null }) {
  let written = new Map();   // loc → bytes the copy on disk holds
  const now = () => { const m = new Map(); try { for (const f of files() || []) if (f && f.loc && f.bytes?.length) m.set(f.loc, f.bytes); } catch (e) { /* no pictures readable: none carried */ } return m; };
  const bytesOf = (list) => list.reduce((n, [, b]) => n + b.length + 64, 0);
  const all = (r, cur) => {
    const list = [...cur];
    r.data = { ...r.data, files: list };
    r.size = (r.size || 0) + bytesOf(list);
    const c = r.commit;
    r.commit = () => { c?.(); written = cur; };
    return r;
  };
  return {
    kind: journal.kind,
    epoch: () => journal.epoch(),
    async base() {
      const r = await journal.base();
      return r ? all(r, now()) : r;
    },
    async delta() {
      const r = await journal.delta();
      const cur = now();
      if (r && r.data?.kind === IFC_WHOLE) return all(r, cur);   // a whole copy starts over: every picture with it
      const put = [...cur].filter(([loc, b]) => written.get(loc) !== b), gone = [...written.keys()].filter((loc) => !cur.has(loc));
      if (!put.length && !gone.length) return r;
      const out = r || { data: { kind: IFC_DELTA, v: 1, set: [], unset: [], goneAdd: [], goneDel: [] }, size: 0, meta: meta ? meta() : undefined, commit() {} };
      out.data = { ...out.data, files: put, filesGone: gone };
      out.size = (out.size || 0) + bytesOf(put) + gone.length * 64;
      const c = out.commit;
      out.commit = () => { c?.(); written = cur; };
      return out;
    },
  };
}

/** The pictures a copy holds after its base and every change: [[loc, bytes]] (Uint8Array). */
export function recoverPictures(rec) {
  let files = new Map();
  const u8 = (b) => (b instanceof Uint8Array ? b : new Uint8Array(b));
  const whole = (d) => { files = new Map(); for (const [loc, b] of d?.files || []) files.set(loc, u8(b)); };
  whole(rec?.data);
  for (const s of rec?.segments || []) {
    if (!s) continue;
    if (s.kind === IFC_WHOLE) { whole(s); continue; }
    for (const [loc, b] of s.files || []) files.set(loc, u8(b));
    for (const loc of s.filesGone || []) files.delete(loc);
  }
  return [...files];
}
