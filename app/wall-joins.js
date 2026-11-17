/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-joins.js — the join record (0.9 FX.60, wall tool spec section 5). Since walls-join-10 the rules live once, in lib/walls/joins.js
 * (copied byte for byte to walls/joins.js by `node tools/walls/sync.mjs bimcraft`; never edit the copy): this file only hands them on,
 * so BimCraft, CadCraft plan walls and SuperCad Studio read the same code. model-walls.js keeps the records in the file as
 * IfcRelConnectsPathElements (readJoinRecords / syncJoins).
 *
 *   deriveJoins(walls, { tol }) · reconcile(derived, stored) · joinsIndex(records) · joinKey(a, b) · kindOf(p, q) · posOf(end) · JOIN_TOL
 */
export * from './walls/joins.js';
