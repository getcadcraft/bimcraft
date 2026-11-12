/* SPDX-License-Identifier: Apache-2.0 */
// Every bundled add-on (app/addons/index.json) has a manifest the loader accepts for this app and API, and the strings its
// code asks for (t('key')) are in its lang/en.json; other languages only translate keys en.json has.
import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const app = [path.join(here, '../app'), path.join(here, '../../app'), path.join(here, '../public_html/assets/apps/bimcraft/dev')]
  .find((d) => fs.existsSync(path.join(d, 'addons.js')));
const { checkManifest } = await import(pathToFileURL(path.join(app, 'addons.js')));
const read = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const apiVersion = fs.readFileSync(path.join(app, 'addons/bimcraft-api.js'), 'utf8').match(/BIMCRAFT_API_VERSION = '([\d.]+)'/)[1];
const dir = path.join(app, 'addons');
const ids = read(path.join(dir, 'index.json')).addons;
for (const id of ids) {
  const r = checkManifest(read(path.join(dir, id, 'addon.json')), { app: 'bimcraft', apiVersion });
  assert(r.ok, `${id}: ${r.reason} ${r.detail}`);
  assert(fs.existsSync(path.join(dir, id, r.manifest.entry)), `${id}: entry`);
  if (!r.manifest.lang) continue;
  const lang = path.join(dir, id, r.manifest.lang);
  const en = read(path.join(lang, 'en.json'));
  const code = fs.readFileSync(path.join(dir, id, r.manifest.entry), 'utf8');
  // literal keys only (t('a.' + x) is not checked), and only where t is api.t itself: plant and sprinkler wrap it (setT) with strings of their own
  if (!/\bsetT\(/.test(code)) for (const [, key] of code.matchAll(/\bt\('([^']+)'\s*[,)]/g)) assert(key in en, `${id}: t('${key}') is not in lang/en.json`);
  for (const f of fs.readdirSync(lang)) {
    if (f === 'en.json' || !f.endsWith('.json')) continue;
    for (const key of Object.keys(read(path.join(lang, f)))) assert(key.startsWith('@') || key in en, `${id}: ${f} has "${key}", en.json does not`);   // "@locale" is metadata
  }
}
console.log(`addons: ${ids.length} manifests ok (API ${apiVersion})`);
