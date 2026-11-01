---
title: Send the scene to a game engine
summary: Studio can write the scene into an Unreal Engine project and keep it in step on every send; your own edits live in a layer CadCraft never writes. The plug-in that opens it is not released yet.
section: tasks
order: 36
keywords: unreal, unreal engine, game engine, link, send, usd stage, project, live, cine camera, movie render queue
---

In CadCraft Studio the Engine list can hold a **link** to an Unreal Engine project. One way only: from CadCraft to Unreal.

## Send the scene

1. Choose the Unreal entry in the Engine list. The first time, Studio asks you to pick your project's folder (the one with the `.uproject` file); it remembers it.
2. Click {{ui:Send}}. Studio writes `CadCraft/<file name>/` inside the project: the scene as a USD file, the settings file, light profiles, and two small layer files.
3. Change the model, save and send again. Only the scene and the settings file are replaced.

## Your own edits are safe

The stage Unreal opens is a small root layer made once, with two layers under it: **yours** on top (`<name>.user.usda`, empty at first, never rewritten by CadCraft) and CadCraft's scene below. Edits you save into your own layer stay when the scene is sent again. Lights and other actors you place in the Unreal level are outside the stage and are not touched either.

## Without Studio

In the browser, or on a computer where Studio does not find Unreal, choose **Unreal project folder (.zip)** in the Engine list and click {{ui:Render}}. It saves the same folder as a zip: unzip it into your project's `CadCraft` folder. Leave **Include the stage files** on the first time; turn it off for later saves, so the zip holds only the scene and the settings file and your own layer is never replaced.

:::note
The Unreal plug-in that opens the stage, applies the sun, lamps, cameras and exposure, follows each send and renders a camera is **not released yet** and has not been run in Unreal. Until it is, Send puts the files in the project and Unreal's own USD tools can open them. Windows is the first system; macOS follows.
:::
