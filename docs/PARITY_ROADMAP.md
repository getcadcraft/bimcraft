# BimCraft Rust Edition — Crate Parity Roadmap

> **Goal:** a Rust/egui BIM authoring app in the same shape as the storytold
> Craft workspaces (MIT OR Apache-2.0), with the **VectorCraft look** (charcoal
> chrome, 48 px tool rail, right dock, coral accent) and a **CADCraft-grade
> engine**, while keeping BIM semantics: levels, grids, parametric walls,
> doors, windows, floor slabs, ceilings, rooms, schedules.
>
> **Status: Phase 1 scaffolding landed** (workspace + 5 crates + 2 apps, CI,
> wasm preview, tagged releases). Phases below grow the crate set toward full
> parity. Everything copied or adopted from storytold repos keeps its
> MIT OR Apache-2.0 license and attribution (see NOTICE).

Last updated: 2026-10-22 · Target: v1.0.0 Rust edition parity

---

## 1. Source map — what each storytold crate contributes

### 1.1 CADCraft (`storytold/cadcraft`, v0.10.0) — the *domain/engine* model

| CADCraft crate | Role for BIMCraft | Parity action | Phase |
|---|---|---|---|
| `geom` | f64 drafting math, arcs, offsets, intersections | Adopt interface shape; extend `bimcraft-geom` with arcs/offsets | P2 |
| `color` | ACI + true colour, ByLayer/ByBlock | Reuse directly (git dep or vendor) | P2 |
| `dxf` | DXF tag reader/writer | Depend as-is for IFC/DXF exchange | P3 |
| `dwg` | DWG bridge (MPL-2.0 isolation) | Optional integration, isolated feature flag | P4 |
| `doc` | Entity store, symbol tables, blocks, COW undo | Model BIM elements the same way: COW store, handles | P2 |
| `constraints` | Parametric constraint solver | Host dimension/alignment constraints on walls/openings | P3 |
| `fonts` | Drafting font + shaping | Adopt for plan annotations | P3 |
| `render` | DisplayList + rasteriser | Merge `bimcraft-render` toward this API | P2 |
| `io` | DXF/DWG/SVG/PDF I/O | Reuse for import/export once doc converges | P3 |
| `engine` | Session, commands, snaps, undo, scripting | Follow its Session/command design; add BIM commands | P2 |
| `ui-egui` | egui shell over Session | Follow structure; BimCraft uses VectorCraft theme | P2 |
| `mcp` | JSON-RPC automation server | Ship `bimcraft-mcp` for headless automation | P4 |
| `cadcraft-cli` | Headless CLI | Ship `bimcraft-cli` (batch/schedule export) | P3 |
| `cadcraft-web` | Browser shell (eframe web) | Done in Phase 1 (`bimcraft-web`, trunk) | **P1 ✅** |
| `xtask` | wasm/ci/layers tooling | Adopt `cargo xtask` once crate count grows | P3 |

### 1.2 VectorCraft (`storytold/vectorcraft`, v0.14.0) — the *UI/UX* template

| VectorCraft crate | Role for BIMCraft | Parity action | Phase |
|---|---|---|---|
| `ui-egui` | Illustrator-style chrome (theme tokens, app bar, 48 px rail, dock, status bar) | **Look & layout adopted in Phase 1**; deepen (command palette, floating cards, custom titlebar) | **P1 ✅ → P2** |
| `theme.rs` tokens | Design-token system (Brightness/Accent/Scheme) | Phase 1 ports the token subset; add Brightness/Accent switcher | **P1 ✅ → P2** |
| `tools` | Pointer → Action tool state machines | Refactor BIM tools into the same Action model | P2 |
| `engine` | Session façade, commands + JSON, history/journal | Adopt command-with-JSON-params seam for automation | P2 |
| `doc` | Arc<Node> COW document tree | Mirror COW discipline in BIM model | P2 |
| `geom` | Anchor/path model | Keep separate from CAD geom; only port what walls need | P3 |
| `three-d` | Extrude/bevel/revolve effect geometry | Reuse for roof/body massing later | P4 |
| `format` | Versioned native file format | Design `.bimcraft` format on the same pattern | P3 |
| `render` | Off-thread raster → texture pipeline | When CPU raster becomes a bottleneck | P4 |
| `plugins` | wasmi sandboxed plug-ins | BIM plug-ins (schedules, checks) | P4 |
| `mcp`, `cli`, `web` | Automation/headless/browser shells | Same shape as CADCraft row above | P3–P4 |
| `text`, `trace`, `pdf`, `svg`, `eps`, `metafile`, `affinity`, `brush`, `pathops`, `effects`, `scriptcheck` | 2D-vector domain | **Out of scope** for BIMCraft (vector apps only) | — |

### 1.3 Shared foundation (`storytold/craft-libs`)

| Crate | Role | Action |
|---|---|---|
| `craft-docpath` | External reference path policy | Adopt as git dependency when BIMCraft gains links/xrefs (P3) |
| `craft-ui` | Shared widget palette | Adopt when the theme converges with Phase 2 polish |

Dependency pattern (as used by cadcraft itself):

```toml
craft-docpath = { version = "0.1.0", git = "https://github.com/storytold/craft-libs", rev = "<pin>" }
```

---

## 2. BIMCraft Rust workspace today (Phase 1, shipped)

| Crate / app | Purpose | Status |
|---|---|---|
| `crates/geom` | f64 Vec2/Vec3 (Z-up), polygon area, ray/ground, segment distance | ✅ P1 |
| `crates/bim` | Levels, grids, walls, openings (doors/windows), floor slabs, ceilings; cascade delete; hosting; bounds | ✅ P1 |
| `crates/engine` | Session, snapshot undo/redo, tools (Select/Wall/Door/Window/Slab/Ceiling), 2D plan + orbit 3D camera, ground picking | ✅ P1 |
| `crates/render` | DisplayList (lines/tris/texts); 2D plan with opening-aware wall lines + door arcs; 3D shaded prisms, Blender-style XYZ axes + 1 m ground grid | ✅ P1 |
| `crates/ui-egui` | Craft look: app bar, tool rail, right dock (Properties/Levels/Model), status bar, 2D/3D canvas, shortcuts (W/D/N/F/C, Tab, Ctrl+Z/Y) | ✅ P1 |
| `apps/bimcraft` | Desktop (eframe/glow) | ✅ P1 |
| `apps/bimcraft-web` | Browser edition (trunk → wasm32) + GitHub Pages preview | ✅ P1 |
| `.github/workflows` | `rust.yml` (fmt/clippy/test/wasm-check), `wasm.yml` (Pages preview), `release.yml` (3-OS desktop + browser zip on tags) | ✅ P1 |

The legacy JS edition (`app/`, v0.6) remains untouched and continues to ship;
the Rust edition grows alongside it until it reaches parity.

## 3. BIM feature parity with the JS edition (what "same UI, 3D+2D" means)

| Feature | JS edition (v0.6) | Rust edition |
|---|---|---|
| Parametric walls on levels | ✅ `model-walls.js` | ✅ P1 |
| Doors / windows in walls | ✅ `model-openings.js` | ✅ P1 (hosting, dims; swing angles P2) |
| Floor slabs | ✅ `model-slabs.js` | ✅ P1 (rect; polygon picker P2) |
| Ceilings | ✅ (via slabs/ceilings) | ✅ P1 |
| Levels | ✅ `model-levels.js` | ✅ P1 (add/select; rename/drag P2) |
| Grids | ✅ `model-grids.js` | ✅ P1 (V/H datum lines with bubbles) |
| 2D plan view | ✅ | ✅ P1 |
| 3D view | ✅ `viewer3d.js` | ✅ P1 (orbit + pan + zoom; walk mode P3) |
| Rooms / schedules / sheets | ✅ | P3 |
| Roofs / stairs / railings | ✅ `model-roof.js`, `res-*` | P3–P4 |
| MEP, clash, IFC round-trip | ✅ | P4+ |
| Multi-open documents, autosave | ✅ | P3 |

## 4. Phase gates

- **P1 (done):** workspace + core BIM objects + 2D/3D single-level editing + CI + wasm preview + tagged releases.
- **P2 (engine parity):** COW entity store, tool Action model, JSON command seam, polygon slab picker, opening swing, level editing, theme Brightness/Accent switcher, adopt `craft-libs` git dep.
- **P3 (exchange):** DXF in/out via `cadcraft-dxf`, `.bimcraft` native format, rooms + schedules + sheets, `bimcraft-cli`, `cargo xtask` layers/parity checks.
- **P4 (pro):** IFC bridge, roofs/stairs, MEP views, plug-in host, `bimcraft-mcp`, off-thread render pipeline.

## 5. Release scheme

- Tags: `bimcraft-rs-vX.Y.Z` → `release.yml` builds Linux/Windows/macOS desktop + browser zip and attaches them to a GitHub Release.
- Every push to `main` → `wasm.yml` publishes the browser edition to GitHub Pages (live preview).
- The JS edition keeps its own `bimcraft-browser-edition-v0.6.0.zip` release line — unchanged.
