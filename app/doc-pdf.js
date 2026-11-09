/* SPDX-License-Identifier: Apache-2.0 */
/** doc-pdf.js — a document's blocks as a PDF: the shared lib/report/doc-pdf.js (synced to ./report/ by tools/report/sync.mjs), printing as BimCraft. */
import { docPdf as shared } from './report/doc-pdf.js';
export const docPdf = (blocks, opts = {}) => shared(blocks, { producer: 'BimCraft', ...opts });   // i18n-ignore: PDF metadata (the program's name)
