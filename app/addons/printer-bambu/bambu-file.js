/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bambu-file.js — reading and finishing the sliced .gcode.3mf OrcaSlicer writes (roadmap PS.8). No DOM.
 *   readZip(bytes) → Promise<[{ name, data }]>     stored or deflated entries
 *   finish(entries, modelId) → entries             OrcaSlicer's command line leaves printer_model_id empty (it reads a machine_full folder its releases lack); the model's id goes in
 *   plateGcode(entries) → text | null
 *   P2S_ID                                         model_id in OrcaSlicer's machine/Bambu Lab P2S.json
 */
export const P2S_ID = 'N7';

async function inflate(data) {
  return new Uint8Array(await new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer());
}

export async function readZip(bytes) {
  const v = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), out = [];
  let end = bytes.length - 22;
  while (end >= 0 && v.getUint32(end, true) !== 0x06054b50) end--;
  if (end < 0) throw new Error('not a zip');
  let at = v.getUint32(end + 16, true);
  for (let i = v.getUint16(end + 10, true); i > 0; i--) {
    if (v.getUint32(at, true) !== 0x02014b50) throw new Error('bad zip');
    const method = v.getUint16(at + 10, true), size = v.getUint32(at + 20, true), nameLen = v.getUint16(at + 28, true), extra = v.getUint16(at + 30, true), note = v.getUint16(at + 32, true), local = v.getUint32(at + 42, true);
    const name = new TextDecoder().decode(bytes.subarray(at + 46, at + 46 + nameLen));
    const start = local + 30 + v.getUint16(local + 26, true) + v.getUint16(local + 28, true), raw = bytes.subarray(start, start + size);
    if (method !== 0 && method !== 8) throw new Error('unknown zip method');
    out.push({ name, data: method === 0 ? raw : await inflate(raw) });
    at += 46 + nameLen + extra + note;
  }
  return out;
}

export function finish(entries, modelId) {
  return entries.map((e) => (e.name !== 'Metadata/slice_info.config' ? e : { name: e.name, data: new TextEncoder().encode(new TextDecoder().decode(e.data).replace('key="printer_model_id" value=""', `key="printer_model_id" value="${modelId}"`)) }));
}

export function plateGcode(entries) {
  const e = entries.find((x) => /^Metadata\/plate_\d+\.gcode$/.test(x.name));
  return e ? new TextDecoder().decode(e.data) : null;
}
