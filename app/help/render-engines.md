---
title: Choose which program draws the picture
summary: The Engine choice in the Render dialog: our own two engines, other programs in CadCraft Studio, and what the web does instead.
section: tasks
order: 33
keywords: render, engine, renderer, render engine, plug-in, plugin, studio, outside program, drawn by, queue, add-on engine
---

{{ui:Render}} has an **Engine** choice above Mode. Our own two engines are always there and work everywhere; add-ons can add more, and in CadCraft Studio the list also holds the programs that take the scene over.

| Engine | What it does | Where |
|---|---|---|
| Built-in: Fast | The quick still: daylight, soft shadows, glass and metal looks, in seconds | The browser and Studio |
| Built-in: Path tracer | Light bouncing between surfaces on your graphics card or processor, the render queue and the other computers on your network | The browser and Studio |
| An add-on's engine | It draws and hands the picture back: see [Draw the picture with another program](topic:render-other-program) | The browser (an engine written in JavaScript) or Studio (an engine that runs a program) |
| A program that takes the scene over | Studio puts the scene in its folder and keeps it in step | Studio |
| Open in … | Saves the scene and opens it in a program; nothing comes back: see [Open the scene in another program](topic:render-open-in) | The web saves the file |

## How the choice behaves

- Picking Fast or the Path tracer changes Mode with it, and the other way round. Nothing else about the dialog changes for people who never use another engine.
- An engine that is not available stays in the list with the reason ("not found", "needs a newer version"); you cannot pick it. In the browser an engine that only runs in Studio shows "saves a file": {{ui:Render}} then saves the scene and its settings to a file you take to that program.
- The choice is saved with the file's render settings, and the engine you chose last is the starting engine for files that have no choice of their own.
- A picture from another program says which program drew it and its version, in the dialog and in the render queue. The promises of the [Render](topic:render) page cover **our own** engines only: another program lights, tones and samples in its own way, so two pictures of one scene are alike in camera, sun, lamps and exposure, not pixel for pixel.

## What every engine is given

The scene goes to another program as a **package**: the model as a USD file (the same file [Save as USD](topic:usd) writes), and a settings file that holds what a USD importer cannot be trusted with: the exact material values, the lamps that are on with their power and light profiles, the sun, the sky, the exposure and the camera as the dialog would draw it. Nothing is uploaded anywhere.

## The render queue

A picture for another program can wait in [the render queue](topic:render#the-render-queue) like our own; its job remembers which engine it is for.
