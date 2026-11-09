// SPDX-License-Identifier: Apache-2.0
// three-host.js — the app's own copy of three.js for add-ons (0.9, owner 2026-11-09). An add-on may only import its own files or `host:<file>`; it
// imports `host:three-host.js` and lists it in addon.json imports.host. Resolved by this page's import map, so the add-on and the scene share ONE three.
export * from 'three';
