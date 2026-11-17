/* SPDX-License-Identifier: Apache-2.0 */
/**
 * wall-square.js — moving walls and keeping their corners (0.9 FX.22, FX.62, FX.67): the join solver. Since walls-join-10 it lives once,
 * in lib/walls/square.js (copied byte for byte to walls/square.js by `node tools/walls/sync.mjs bimcraft`; never edit the copy): this file
 * only hands it on, so BimCraft, CadCraft plan walls and SuperCad Studio run the same solver.
 *
 *   squareMove · moveJoined · squareUp · setAngle / angleOf · setLength / setLengthGrow / lengthFrom · roomSize / setRoomSize ·
 *   moveOutward · squareSnap · fixedPoint · MEASURE_FROM · SQUARE_TOL   (see walls/square.js for each)
 */
export * from './walls/square.js';
