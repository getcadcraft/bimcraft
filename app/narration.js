/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — a script format and subtitle files; the words the person sees are in the language file (narr.*). */
/**
 * narration.js — a narrated walkthrough (0.8 EG.50, session bim-model_PART_4). A walk (views-bim.js) can carry a narration: cues of text at times,
 * in a language. DOM-free. The text is written by the person or by their own connected assistant (rule 35: no AI inside the app); the voice is the
 * computer's own text-to-speech (the browser's speechSynthesis), played live while the walk plays, with the same text as subtitles. The rendered
 * video gets the cues as a subtitle file (.srt or .vtt): the browser cannot record its own speech into a video, so the video file itself has no sound.
 *
 *   MAX_CUES 200 · MAX_TEXT 400
 *   cleanNarration({lang, cues}) → {lang, cues: [{t, text}]} | null        untrusted: times sorted and clamped, text trimmed, control characters out
 *   parseScript(text, duration) → {cues, problems}     lines "12 text", "0:12 text", "01:02.5 text" or plain text; plain lines follow the line above
 *                                                       after its reading time (words / 2.5 per second, at least 2 s); scaled down when the walk is shorter
 *   scriptOf(cues) → text                              the inverse of parseScript (m:ss.s text per line)
 *   readSeconds(text) → seconds                        how long the sentence takes to say (2.5 words a second, at least 2 s)
 *   cueAt(cues, t, duration) → cue | null              the cue showing at time t (a cue lasts to the next one, or its reading time, whichever is shorter)
 *   fit(cues, duration) → { cues, late: n }            cues starting after the walk ends are counted, not dropped
 *   toSrt(cues, duration) · toVtt(cues, duration) → text
 *   encode(n) / decode(s) → the string kept in the IFC (JSON)
 *   voiceFor(voices, lang) → voice | null              the voice whose language matches (exact, then the language part), local voices first
 */
export const MAX_CUES = 200;
export const MAX_TEXT = 400;
const clean = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f\u2028\u2029]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, MAX_TEXT);
const LANG_RE = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8}){0,2}$/;

export function readSeconds(text) {
  const words = String(text).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round((words / 2.5) * 10) / 10);
}

export function cleanNarration(n) {
  if (!n || typeof n !== 'object' || !Array.isArray(n.cues)) return null;
  const cues = [];
  for (const c of n.cues) {
    const t = Number(Array.isArray(c) ? c[0] : c?.t), text = clean(Array.isArray(c) ? c[1] : c?.text);
    if (!Number.isFinite(t) || t < 0 || t > 86400 || !text) continue;
    cues.push({ t: Math.round(t * 10) / 10, text });
    if (cues.length >= MAX_CUES) break;
  }
  if (!cues.length) return null;
  cues.sort((a, b) => a.t - b.t);
  const lang = LANG_RE.test(String(n.lang || '')) ? String(n.lang) : '';
  return { lang, cues };
}

const TIME_RE = /^\s*(?:(\d+):)?(\d{1,2}(?:\.\d+)?|\d+(?:\.\d+)?)\s+(.+)$/;
export function parseScript(text, duration = 0) {
  const lines = String(text ?? '').split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const cues = [], problems = [];
  let at = 0;
  for (const line of lines) {
    const m = TIME_RE.exec(line);
    let t, body;
    if (m && /^\d/.test(line)) { t = (m[1] ? Number(m[1]) * 60 : 0) + Number(m[2]); body = clean(m[3]); }
    else { t = at; body = clean(line); }
    if (!body) continue;
    if (cues.length >= MAX_CUES) { problems.push({ code: 'narr.toomany', severity: 'warning', text: 'Only the first ' + MAX_CUES + ' cues are kept.' }); break; }
    if (cues.length && t < cues[cues.length - 1].t) { t = cues[cues.length - 1].t; problems.push({ code: 'narr.order', severity: 'note', text: 'A cue started before the one above it; it follows it.' }); }
    cues.push({ t: Math.round(t * 10) / 10, text: body });
    at = t + readSeconds(body);
  }
  // plain lines that run past the walk are squeezed into it (only the lines without their own time were placed by reading time)
  if (duration > 0 && cues.length && at > duration && !lines.some((l) => TIME_RE.test(l) && /^\d/.test(l))) {
    const k = duration / at;
    for (const c of cues) c.t = Math.round(c.t * k * 10) / 10;
    problems.push({ code: 'narr.squeezed', severity: 'note', text: 'The narration was longer than the walk (' + Math.round(at) + ' s of speech in ' + Math.round(duration) + ' s); the cues were placed closer together.' });
  }
  return { cues, problems };
}

const pad = (n, w = 2) => String(n).padStart(w, '0');
const stamp = (s) => { const m = Math.floor(s / 60); return pad(m) + ':' + pad(Math.floor(s % 60)) + '.' + (s % 1).toFixed(1).slice(2); };
export function scriptOf(cues) { return cues.map((c) => stamp(c.t) + ' ' + c.text).join('\n'); }

export function endOf(cues, i, duration) {
  const next = cues[i + 1] ? cues[i + 1].t : Infinity;
  const end = Math.min(next, cues[i].t + readSeconds(cues[i].text) + 1);
  return duration > 0 ? Math.min(end, duration) : end;
}
export function cueAt(cues, t, duration = 0) {
  for (let i = cues.length - 1; i >= 0; i--) if (cues[i].t <= t) return t < endOf(cues, i, duration) ? cues[i] : null;
  return null;
}
export function fit(cues, duration) {
  const late = duration > 0 ? cues.filter((c) => c.t >= duration).length : 0;
  return { cues: duration > 0 ? cues.filter((c) => c.t < duration) : cues.slice(), late };
}

const clock = (s, comma) => {
  const ms = Math.round(s * 1000), h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), sec = Math.floor((ms % 60000) / 1000), r = ms % 1000;
  return pad(h) + ':' + pad(m) + ':' + pad(sec) + (comma ? ',' : '.') + pad(r, 3);
};
export function toSrt(cues, duration = 0) {
  const f = fit(cues, duration).cues;
  return f.map((c, i) => (i + 1) + '\n' + clock(c.t, true) + ' --> ' + clock(endOf(f, i, duration), true) + '\n' + c.text + '\n').join('\n');
}
export function toVtt(cues, duration = 0) {
  const f = fit(cues, duration).cues;
  return 'WEBVTT\n\n' + f.map((c, i) => clock(c.t, false) + ' --> ' + clock(endOf(f, i, duration), false) + '\n' + c.text.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '\n').join('\n');
}

export function encode(n) {
  const c = cleanNarration(n);
  return c ? JSON.stringify({ lang: c.lang, cues: c.cues.map((x) => [x.t, x.text]) }) : '';
}
export function decode(s) {
  try { return cleanNarration(JSON.parse(String(s ?? ''))); } catch (e) { return null; }
}

export function voiceFor(voices, lang) {
  const L = String(lang || '').toLowerCase();
  if (!L || !Array.isArray(voices)) return null;
  const same = voices.filter((v) => String(v.lang || '').toLowerCase().replace('_', '-') === L);
  const part = voices.filter((v) => String(v.lang || '').toLowerCase().split(/[-_]/)[0] === L.split('-')[0]);
  const pick = (a) => a.find((v) => v.localService) || a[0] || null;
  return pick(same) || pick(part);
}
