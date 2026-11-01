---
title: Draw the picture with another program
summary: Our own path tracer draws the Render picture; another program can draw it only through a render-engine add-on in CadCraft Studio. What is carried over, and why some programs are never offered.
section: tasks
order: 34
keywords: render, engine, outside program, add-on engine, studio, background, queue, usd, gltf, drawn by, blender, gpl
---

The picture in {{ui:Render}} is drawn by **our own engines**: Fast and the Path tracer, in the browser and in CadCraft Studio. Another program can draw it only when a **render-engine add-on** brings it: see [Add a render engine with an add-on](topic:render-engine-addons). To take the scene to another program and keep working there, use [Open the scene in another program](topic:render-open-in) or [Send the scene to a game engine](topic:render-unreal).

## Draw a picture with an add-on's engine

1. Turn the add-on on in Settings › Add-ons. Its engine appears in the Engine list of {{ui:Render}}.
2. Choose it. Its own settings show under the Engine list.
3. Click {{ui:Render}}. In Studio, the first time an add-on runs a program, Studio asks you in its own dialog. Progress shows while it draws; {{ui:Stop}} ends it. The picture appears marked with the engine that drew it.

An engine written in JavaScript runs in the browser too. An engine that runs a program on this computer runs only in Studio; in the browser it shows as a file to save.

## What is carried over

The engine gets a **package**: the model as a USD file (and a glTF file when it asks for one), and a settings file with the exact material values, the sun and the sky, every lamp that is on with its power and light profile, the camera and the exposure. Each program lights, tones and samples in its own way, so pictures are alike in camera, sun, lamps and exposure, not pixel for pixel.

## Programs CadCraft never runs

CadCraft never starts a program under the GNU GPL licence, and never lists one as an engine or an Open in target. Blender is one of them, so it is not in the Engine list. A USD or glTF file saved from {{ui:Render}} still opens in it like in any program that reads those files.

:::note
Panorama and stereo cameras and a sky picture (the sky's colors are used instead) are not carried over to another program. Nothing done in another program comes back to the model.
:::
