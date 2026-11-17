---
title: Render a picture of the model
summary: Make a daylight picture of the 3D view: sky, the sun at your site's latitude, soft shadows, glass windows; with WebGPU, path traced on the graphics card with skies, a camera, light mixing, grading, fog and a render queue.
section: tasks
order: 32
keywords: render, preset, presets, scene preset, interior, exterior, section view, night, one click, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, high quality, photo, photoreal, realistic, picture, image, png, still, sky, sun, daylight, shadows, soft shadows, ambient occlusion, glass, windows, metal, materials, exposure, brightness, overcast, dusk, studio, presentation, visualization, webgpu, denoise, physical sky, hdri, ies, depth of field, panorama, white balance, light mixing, render elements, exr, 16-bit png, fog, caustics, render queue
---

{{ui:Render}} on the toolbar makes a picture of the 3D view that looks like daylight: a sky, the sun where the site's latitude puts it, soft shadows, light from the whole sky that darkens corners, and colors that can look like glass or metal. The model and the file are not changed.

## Render the view

1. Set up the 3D view the way you want the picture: orbit and zoom, hide storeys or elements you don't want, and set a [section](topic:section-plane) if the picture should show a cut.
2. Click {{ui:Render}} on the toolbar.
3. Pick a {{ui:Scene}} if the one pressed is not what you want (see [Scene presets](topic:render#scene-presets-a-good-picture-in-one-click)), choose the {{ui:Size}}, then click {{ui:Render}} in the dialog.

   The picture fills in as it renders and gets smoother with each pass. {{ui:Stop}} (or {{key:Esc}}) ends it early and keeps the picture so far.

4. Click {{ui:Save}} to download it as a PNG, or {{ui:Save as}} for another format (see [Save the picture](topic:render#save-the-picture)). It is named after the model's file.

:::tip
Start with {{ui:Draft}} at {{ui:The view's size}} to check the camera, then render {{ui:Good}} or {{ui:Best}} at a bigger size for the final picture.
:::

## Scene presets: a good picture in one click

The top of the dialog has four {{ui:Scene}} buttons. Each sets the sky, the brightness, the ground, the edge lines, the quality and the sun in one click, so there is nothing to learn before the first picture. Click one, then {{ui:Render}}.

| Scene | What it sets | Use it for |
|---|---|---|
| {{ui:Exterior}} | Clear sky, the model's own sun, ground on | The building from outside |
| {{ui:Interior}} | Overcast sky (even light, no hard sun patches), half a stop brighter | A view from inside a room |
| {{ui:Section view}} | White studio, no ground, edge lines in the fast render | A model cut by a section |
| {{ui:Night}} | The sun down (midnight in midwinter for the site's half of the world), one stop brighter | Lamps lighting the model. With no lamps the picture is dark |

- {{ui:Pick for this view}} chooses for you: {{ui:Section view}} when a section cut is on, {{ui:Interior}} when the camera is inside the model, otherwise {{ui:Exterior}}. The first time you open the dialog it starts this way by itself.
- Every setting stays below and can be changed. Once you change one the scene sets, no button is pressed and the line under the buttons says the settings are your own. Click the scene again to put its values back.
- A scene does not touch the engine, the mode, the size, the materials, the camera or the lamps.

:::note
The scenes give the same values in ModelCraft and BimCraft. How the finished picture looks depends on your model and your graphics card.
:::

## What shows in the picture

What the 3D view shows solid: hidden and see-through elements, hidden storeys and hidden models are left out, and rooms show only when {{ui:Spaces}} is on. A section plane or section box cuts the picture as it cuts the view. Elements show in their own colors: coloring by property (the {{ui:Color}} tab) is not used.

## Settings

| Setting | What it does |
|---|---|
| {{ui:Size}} | The view's size, twice the view's size, Full HD, 4K or a square |
| {{ui:Mode}} | {{ui:Fast}}, or {{ui:High quality (path traced)}} (below) with its {{ui:Time limit}} |
| {{ui:Quality}} | How many passes (or, in high quality, samples) are averaged: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. More passes give smoother shadows and edges and take longer |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} or {{ui:White studio}} (a plain white background) |
| {{ui:Sun}} | June 21 at 15:00 at the latitude the file gives for its site (IfcSite), turned to the model's true north. Tick {{ui:Use another date and time for this picture}} for another time |
| {{ui:Brightness}} | Lighter or darker, in steps (stops) |
| {{ui:Ground under the model}} | A ground at the model's lowest point that takes the shadows and fades into the horizon |
| {{ui:Draw edges}} | Draws the elements' edges thinly over the picture |

When the sun is below the horizon at the chosen time it is night: the sky goes dark and the model's lamps light it.

## Lamps

Every light fixture in the model is a lamp in the picture: the fixtures in an IFC file (IfcLightFixture, or an element typed as a light fixture), including ones you place from the library. Each shines down from just under the fixture. When the file gives a fixture's wattage, its brightness follows from it; otherwise it is 800 lumens, a warm white.

The dialog lists the lamps under {{ui:Lamps}}: untick one to switch it off, or type its brightness in lumens. These changes are saved in the IFC (the fixture's `CadCraft_Light` property set, where you can also change them in Properties), and {{key:Ctrl+Z}} undoes them.

When a file says nothing about where its site is, the sun is placed at 40° north, and the dialog says so. The time is the site's clock time, worked out from its longitude, so it can be an hour off where clocks are set differently.

These settings are kept in this browser for the next picture. They are not saved in the IFC file.

## Glass and other materials

Under {{ui:Materials}}, every color on screen has a look: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} or {{ui:Frosted glass}}. Colors the IFC file makes see-through (window glazing, for example) start as {{ui:Glass}}.

:::note
In the {{ui:Fast}} mode, glass and metal reflect the sky, not the rest of the model, and light does not bend through glass. The {{ui:High quality (path traced)}} mode below does both.
:::

## High quality

Choose {{ui:Mode}} › {{ui:High quality (path traced)}} for a picture that follows light the way a camera sees it:

- light bounces between surfaces, so a room lit through a window, or by a lamp, is lit all round and colors bleed onto their neighbors;
- glass is real glass: light bends through it and it reflects the model;
- metal and polished surfaces reflect the rest of the model;
- light panels light as panels, with soft shadows.

It is much slower than {{ui:Fast}}: each pass traces every pixel's light again. The picture starts grainy and clears as samples add up, so start small ({{ui:The view's size}}, {{ui:Draft}}) and choose a {{ui:Time limit}}: when it runs out, the picture so far is kept. {{ui:Stop}} keeps it too. The first pass waits while the browser prepares the path tracer.

Where the browser has WebGPU, the path tracer is CadCraft's own and runs on the graphics card; the line under the picture says so. After {{ui:Stop}} or the time limit, {{ui:Resume}} carries on with the same picture until it has all its samples; changing a setting or pressing {{ui:Render}} again starts afresh. Without WebGPU the picture is path traced with WebGL instead (the line says so) and {{ui:Resume}} is not offered.

:::linux
Firefox and most Chrome setups on Linux have no WebGPU yet, so high quality uses WebGL there.
:::

In this mode edges are not drawn, textures show their color and roughness but not their bumps, and a section cut is made on the model before the picture starts.

{{ui:Denoise (clears the grain left after the samples)}} is on by default: when the picture is done, or stopped, the grain that is left is cleared by a neural network made for this (Intel Open Image Denoise's published network, run on your own computer: on the graphics card, else on the processor). {{ui:Show}} › {{ui:The picture before denoising}} shows it as rendered.

## Skies and light profiles on the graphics card

With WebGPU, high quality has two more skies:

- {{ui:Physical sky}} works the daylight out from the sun's height: a deep blue overhead, a pale band at the horizon, and a sun that turns warmer and dimmer as it gets low. {{ui:Haze}} goes from a very clear day (2) to a hazy one (10).
- {{ui:Sky picture (HDRI)}} lights the model with a panorama picture of a real place. {{ui:Choose a picture…}} takes an equirectangular `.hdr` or `.exr` file; {{ui:Turn}} turns it round the model and {{ui:Picture brightness}} makes it brighter or darker. The picture carries its own sun, so the model's sun is not added. It is kept only while the page is open: after reopening, choose it again.

Each lamp in the {{ui:Lamps}} list can take a maker's light profile: {{ui:IES profile…}} reads an IES (LM-63) file and the lamp then throws its light the way that fitting does (a narrow downlight, a wall washer). Every lamp with that name uses it, and the lamp keeps its own brightness. Click the profile's name to stop using it.

Windows of clear glass help the sky's light find its way into a room.

The {{ui:Fast}} mode and the WebGL path tracer show the {{ui:Physical sky}} and {{ui:Sky picture (HDRI)}} as a clear sky and ignore light profiles.

## The camera

{{ui:Camera}} sets the picture up like a photograph:

- {{ui:Exposure}}: keep the {{ui:Brightness slider}}, or choose {{ui:Camera settings}} and set the {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} and {{ui:ISO}} as on a camera; the EV next to them is the usual exposure value. f/16 at 1/100 s and ISO 100 matches a sunny day; a darker scene wants a wider aperture, a slower shutter or a higher ISO. This works in every mode.
- {{ui:Depth of field}} blurs what is nearer or farther than the {{ui:Focus distance (m)}} as a lens of that f-stop would (leave it empty to focus on what is in the middle of the view); {{ui:Aperture shape}} gives out-of-focus highlights a round or bladed shape.
- {{ui:Two-point perspective (vertical lines stay vertical)}} levels the camera and shifts the picture, as an architectural tilt-shift lens does, so walls do not lean when you look up or down at a building.
- {{ui:White balance}} sets which light colour shows as white: lower (for example 3000 K) for warm lamp light, higher for shade and overcast days.
- {{ui:Projection}}: {{ui:360° panorama}} makes a 2:1 picture of everything round the camera for panorama viewers; {{ui:360° stereo panorama}} stacks a left-eye and a right-eye panorama for headsets; {{ui:Cube map (6 faces)}} makes six square views in a 3 × 2 grid. The width comes from {{ui:Size}}.

Projection, depth of field, two-point perspective and white balance need the path tracer on the graphics card (WebGPU), so they show only in {{ui:High quality (path traced)}}.

## Finish the picture

{{ui:Picture}} grades the high-quality picture like a photograph, and every control changes the finished picture at once, without rendering again:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (the picture as before), {{ui:AgX}} (softer, keeps colour in very bright light), {{ui:Filmic}} (a gentle film curve) or {{ui:Standard}} (plain, bright light clips to white).
- {{ui:Contrast}} and {{ui:Highlight compression}} (brings back detail in very bright parts).
- {{ui:Bloom}} (a soft glow round bright light), {{ui:Glare}} with its {{ui:Glare streaks}} (star rays from the brightest points) and {{ui:Vignette}} (darker corners).
- {{ui:Colour table (.cube)…}} applies a colour grade from a `.cube` file, with its {{ui:Colour table strength}}; like a sky picture it is kept only while the page is open.

## Save the picture

{{ui:Save as}} next to {{ui:Save}} chooses the file: {{ui:PNG}}, {{ui:JPEG}} or {{ui:WebP}} for sharing (JPEG and WebP only where the browser can write them), and after a high-quality render on the graphics card also:

- {{ui:PNG, 16 bits}}: the graded picture with finer steps between shades, for printing or further editing.
- {{ui:EXR, every layer (32-bit float)}}: the picture as rendered (linear light, no grade) with every render element and light group as its own layer, for compositing programs.
- {{ui:Render file (.ccrender, to grade again later)}}: everything the dialog needs to mix and grade the picture again. {{ui:Open a render file…}} brings it back, with its mix and its grade, without rendering.

## Mix the lights after the render

Turn on {{ui:Light mixing (change each light's colour and brightness after the render)}} before you press {{ui:Render}}. When the picture is done (or stopped), {{ui:Mix the picture}} lists its lights in groups: the sky, the sun, and the lamps by name (every lamp with the same name is one group). Switch a group off, give it a colour, or make it brighter or darker, and the picture changes at once, without rendering again. {{ui:Save mix}} keeps the mix under a name to choose again later; {{ui:As rendered}} goes back to the picture as it was made. {{ui:Save}} saves the mixed picture.

{{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} keeps the picture's parts as well. {{ui:Show}} switches the view to one of them: the surface colours (albedo), the normals, the depth, the diffuse, specular and transmitted light (each direct and indirect), what glows and the sky, and a colour per object or per material for making masks.

Both keep extra layers on the graphics card. At large sizes a graphics card may not have room; the dialog says so and a smaller size works.

## Fog, smoke, noise and caustics

These live in {{ui:Fog, smoke and noise}} and work in {{ui:High quality (path traced)}} on the graphics card; the other engines leave them out.

- {{ui:Fog and haze}} fills the air up to a height with a mist that the sun, the sky and lamps light. {{ui:How far you can see, in meters}} sets how thick it is (about 100 m is a light haze, 20 m a thick fog), {{ui:Fog height above the ground, in meters}} is where it ends, and {{ui:Light shafts}} is how much the mist glows toward the light. Sunlight leaves the fog at its top, so where sun comes through a window or between buildings you see it as shafts of light.
- {{ui:Smoke or cloud}} adds one volume of smoke or cloud lit like the fog. {{ui:Kind}} is a {{ui:Cloud}}, a {{ui:Smoke column}} or {{ui:From a volume file (.ccvol)}}, CadCraft's own grid format. {{ui:Detail}} and {{ui:Variation}} change a made cloud or column, {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} and {{ui:Turn}} place it (it starts in the middle of the model), {{ui:Thickness}} makes it denser, {{ui:Forward glow}} makes it brighter toward the light, and {{ui:Color}} tints it. A volume file is kept only while the page is open, like a sky picture.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} gives no more samples to pixels that have settled. {{ui:Noise to accept}} is how much grain is left when a pixel stops. The line under the picture says how many samples a pixel got on average.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} traces light from the lamps and the sun, so the bright patch under a glass ball or a mirror's light on a wall comes out clean instead of grainy. It is off while fog, smoke, light mixing or render elements are on, and it is made for pictures, not for 360° pictures.

## The render queue

{{ui:Render queue}} in the dialog: {{ui:Add this picture to the queue}} keeps the picture's settings and view, and {{ui:Start the queue}} renders what waits, one after another, on this computer. Closing the page keeps the queue; open the same model to go on. {{ui:Save}} downloads a finished one; {{ui:Remove}} and {{ui:Clear finished}} tidy the list. The queue renders in high quality, so it needs WebGPU.

## How long it takes

The picture is made on your own computer, by its graphics card; nothing is uploaded. Time grows with the passes and the pixels: {{ui:Best}} has 16 times the passes of {{ui:Draft}}, and a 4K picture has about four times the pixels of Full HD. Large models take longer per pass.
