<img src="screenshots/icon.svg" alt="" width="64" height="64">

# BimCraft

One model. Every plan, section and schedule.

**[Website](https://getcadcraft.com/apps/bimcraft) | [Use it in your browser](https://getcadcraft.com/use/bimcraft) | [Download CadCraft Studio](https://getcadcraft.com/download#studio) | [Help and tutorials](https://getcadcraft.com/tutorials/bimcraft) | [News](https://getcadcraft.com/news) | [Suggest a feature](https://getcadcraft.com/suggest)**

[![BimCraft](screenshots/paper.png)](https://getcadcraft.com/use/bimcraft)

<sub>Paper space above; [the same in model space](screenshots/model.png). Both are from the browser edition.</sub>

BimCraft is the BIM authoring app in the [CadCraft](https://getcadcraft.com) family: Parametric walls, doors and windows on levels and grids, with views, schedules, sheets and clash checks from one model.

## Use it

Use it now at https://getcadcraft.com/use/bimcraft, or install CadCraft Studio, which carries all eight apps. Your files stay on your computer either way.

| Platform | Status |
|---|---|
| [Browser](web/) | 0.6: `bimcraft-browser-edition-v0.6.0.zip` in [Releases](https://github.com/getcadcraft/bimcraft/releases), or build it from a clone ([BUILDING.md](BUILDING.md#the-browser-edition)) |
| Desktop: [Windows](windows/), [Linux](linux/) | In [CadCraft Studio 0.6](https://github.com/getcadcraft/studio/releases/tag/studio-v0.6.0) (installer, `.deb`, AppImage); not code-signed yet |
| [macOS](macos/) | In [CadCraft Studio 0.6](https://github.com/getcadcraft/studio/releases/tag/studio-v0.6.0) (universal disk image; not code-signed or notarized yet) |
| [Android](android/) | The Studio APK, on the [download page](https://getcadcraft.com/download#studio) |
| [iPad](ios/) | Planned, in 0.7 at the earliest |

## Work on it

```sh
node devshell/serve.mjs     # Node 20.19 or newer, no packages; then open http://127.0.0.1:8000/
npm test                    # the app's tests; libraries are fetched by exact version
```

`app/` is the code in development (the same code on every platform; each release is a tag), `web/` `windows/` `linux/` `macos/` `ios/` `android/` hold what ships or builds it on each, `devshell/` runs it without the website (`devshell/README.md`), `tests/` and `fixtures/` are its tests and public sample files. How to contribute: [CONTRIBUTING.md](CONTRIBUTING.md); building from source: [BUILDING.md](BUILDING.md).

## License

Apache License 2.0 ([LICENSE](LICENSE), [NOTICE](NOTICE)). Libraries and their licenses: [THIRD_PARTY.md](THIRD_PARTY.md). Where the code comes from: [PROVENANCE.md](PROVENANCE.md). The names are trademarks; a fork must rename: [TRADEMARKS.md](TRADEMARKS.md).

## Rust edition (in development)

A Rust/egui edition of BimCraft is being built alongside the JS edition, following the same workspace shape as the open-source storytold Craft apps (MIT OR Apache-2.0): the UI adopts the VectorCraft look (charcoal chrome, 48 px tool rail, right dock), the engine follows the CADCraft session/display-list seams, and the domain is BIM: levels, grids, parametric walls, doors, windows, floor slabs and ceilings, in both a 2D plan view and an orbiting 3D view with a Blender-style XYZ grid.

- Crate parity map and phase gates: [docs/PARITY_ROADMAP.md](docs/PARITY_ROADMAP.md)
- Desktop: `cargo run -p bimcraft` · Browser: `trunk build` in `apps/bimcraft-web` (see [BUILDING.md](BUILDING.md))
- CI: `rust.yml` (fmt/clippy/test + wasm check), `wasm.yml` (GitHub Pages preview on every push to main), `release.yml` (desktop + browser bundles on `bimcraft-rs-v*` tags)
