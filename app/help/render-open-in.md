---
title: Open the scene in another program
summary: Save the scene as a USD file or a glTF file for any program that reads them, or open it from Studio in a program on this computer.
section: tasks
order: 35
keywords: open in, usd, gltf, glb, export, rendering program, archviz, studio, usdview, send, hand-off, package, unreal folder
---

Choose an **Open in** entry in the Engine list of {{ui:Render}} to take the scene to another program. Nothing comes back to the model.

## A file for any program

- **USD file** saves the scene as `.usdc` (or `.usdz` when the model carries pictures): the [same file as Save as USD](topic:usd), with materials, lamps and cameras. It keeps instancing and the exact material values. Most renderers, game engines and viewers read USD.
- **glTF file (.glb)** saves the lighter glTF 2.0 file with materials, textures and lamps; see [Send the model to a rendering program](topic:model-for-rendering) for what it carries and leaves out.

- **Unreal project folder (.zip)** saves the folder [Send the scene to a game engine](topic:render-unreal) writes, for a project on any computer.

All three work in the browser and in Studio.

## In Studio: open it in a program

Studio lists the programs it finds on this computer that can open the scene: usdview if it is on your search path, and the computer's own program for the file type. Choose one, choose USD or glTF where it reads both, and click {{ui:Render}}. Studio writes the package into a new folder under Documents (`CadCraft hand-off`; nothing is overwritten, each send gets its own folder) and starts the program on it, then says where the files are.

| Program | Reads best |
|---|---|
| usdview | USD |
| The computer's own program | Whatever the computer has for the file type |

Studio only starts programs from this fixed list; it does not run anything the page asks for by name, and it never starts a program under the GNU GPL licence (see [Draw the picture with another program](topic:render-other-program#programs-cadcraft-never-runs)). Any program that reads USD or glTF opens the file from **A file for any program** above.

:::note
Twinmotion, Enscape and other visualization programs are not in the list: CadCraft has not been checked with them and makes no claim about them. A glTF or USD file from here is the route in; see the notes on [plug-in renderers](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
