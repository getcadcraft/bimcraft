---
title: The electrical plan
summary: Place outlets, switches, lights, sensors, junction boxes and panels on the plan with the same symbols as CadCraft's Electrical add-on, link switches to the lights they turn on, and list devices and circuits in the schedules.
section: tasks
order: 27
keywords: electrical, electrical plan, outlet, receptacle, duplex, switch, three-way, dimmer, light, ceiling light, recessed light, downlight, motion sensor, junction box, panel, distribution board, circuit, load, watts, amps, switch leg, device schedule, panel schedule
---

## What you'll do

Draw the house's electrical plan in the model: outlets, switches and panels on the walls, lights and sensors on the ceiling. Each device is a real electrical element in the IFC file, with its tag, circuit and load, and switches remember the lights they turn on.

## Place devices

1. On a level, open {{ui:Build}} and choose {{ui:Electrical}}.
2. Choose the device: outlets (power, data, phone, audio-video), switches and sensors (a thermostat and a timer too), lights, detectors and alarms, a junction box, a panel or a sub-panel.
3. Type a **Circuit** if you know it (any name: 1, 2, A-3). Leave **Mounting height** blank for the usual height of that device.
4. Click on the plan. Outlets, switches and panels go on the face of the nearest wall, facing into the room; lights, sensors and junction boxes go on the ceiling where you click.

Devices are tagged as you place them: **R** for outlets, **S** for switches, **L** for lights, **M** for motion sensors, **J** for junction boxes, **P** for panels. Devices on a wall move with it when you move the wall.

Prefer to browse by picture? Open the **Symbol palette** from {{ui:Build}} to find a device by name, star the ones you use and place it with one click: see [The symbol palette](topic:symbol-palette).

## Link switches to lights

1. Pick a switch (or a motion sensor) and click **Link lights** in **Properties**.
2. Click each light it turns on. Click a linked light again to unlink it.
3. Press {{key:Enter}} or click **Done**.

The plan draws a dashed curve from the switch to each of its lights. A light's **Properties** shows which switches turn it on.

## Change and list them

Pick a device to change its tag, circuit, load (watts) and mounting height. Pick several to put them all on one circuit at once. Press {{key:Delete}} to remove one; a deleted light is taken off its switches.

In {{ui:Schedules}} choose **Electrical devices** for every device with its level, circuit, load, height and the lights each switch turns on, or **Circuits** for each circuit's devices, total load and current. Both are on the drawing set's schedule sheet too: see [Elevations, sections and sheets](topic:sheets).

:::note
Mounting heights and loads are planning defaults (an outlet 16" up and 200 W, a switch at 48", a ceiling light 60 W), not a design: the electrician or engineer sizes the circuits and checks the code.
:::

:::tip
The symbols are the ones CadCraft's Electrical add-on draws on installation plans, so a plan from either app reads the same.
:::
