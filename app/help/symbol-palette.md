---
title: The symbol palette
summary: Find electrical and plumbing symbols by name or picture, star the ones you use, and place them on the plan with one click.
section: tasks
order: 28
keywords: symbol palette, symbols toolbar button, wall follows, symbols, electrical symbols, plumbing symbols, plumbing plan, water closet, toilet, lavatory, sink, bathtub, shower, floor drain, cleanout, hose bib, water heater, valve, gate valve, cold water, hot water, waste, vent, line style, favourites, search
---

## What you'll do

Open one panel that lists the electrical symbols and the plumbing plan symbols with their pictures and names, find the one you want, and place it on the plan. Nothing here needs the internet: the symbols ship with the app.

## Open it and place a symbol

1. Open a model and open {{ui:Build}} › {{ui:Symbol palette}} (typed command: SYMBOLS). The same button is in the Tools menu of the Draw bar and as **Symbols** in the Library group of the toolbar.
2. Pick a set: **Electrical** or **Plumbing**, or **All sets**. Type in the search box to narrow the list. You can search by name or by abbreviation (WC, CW, HB).
3. Click a symbol. The plan is ready to place it.
   - An **electrical** symbol starts the Electrical tool with that device chosen, so everything on [The electrical plan](topic:electrical-plan) applies: click the plan, one undo step.
   - A **plumbing** symbol starts the plan symbol tool. Click the plan. A fixture that sits on a wall (a toilet, lavatory, bathtub, sink, hose bib) snaps to the nearest wall face with its back to the wall; drains, valves, the water heater and line styles go where you click.
4. Press {{key:R}} to turn the symbol 90 degrees ({{key:Shift}}+{{key:R}} turns it the other way), or type an angle in **Rotation** in the options bar. Press {{key:Esc}} to stop.

A fixture or hose bib that snapped to a wall face remembers that wall: when the wall moves, the symbol moves with it (same face, same distance along the wall) in the same undo step. If you delete the wall, the symbol stays where it was and Problems lists "lost its wall"; move it or delete it. Symbols placed away from walls are not tied to anything.

Each symbol you place is one undo step. A placed symbol is a plan annotation in the IFC file with its tag (WC1, WC2, ...). Pick it to change its tag or rotation in **Properties**, or press {{key:Delete}}.

## What the plumbing set has

Fixtures (water closet, urinal, lavatory, bathtub, shower, kitchen sink, single sink), a floor drain, floor and wall cleanouts, a hose bib, a wall hydrant, a water heater, valves (gate, globe, ball, check, butterfly, pressure reducing) and line styles with their abbreviations: cold water (CW), hot water (HW), hot water return (HWR), waste (W), vent (V), storm drain (SD) and gas (G). The drawings scale with the plan, so they keep their size on the printed sheet. A line style is a short stub to show the style on the plan; draw the real pipe runs with the pipe tools.

:::note
These are common plumbing plan conventions, drawn by us; not certified to ISO 4067-1 or ASME Y32.4. They were compared with public drawing legends and training manuals (the list is in the set's sources note, which says where we match them and where we differ), not copied from any product, and they are free to use (Apache-2.0). Drawing sets differ, so check the legend of your own project. They are plan symbols, not a plumbing design: they do not size pipes or check codes.
:::

## Favourites and keyboard

- Click the star on a symbol (or press {{key:F}} on it) to keep it as a favourite. Favourites are listed first and stay in this browser. **Only favourites** shows just those.
- {{key:Down}} from the search box moves into the symbols; the arrow keys, {{key:Home}} and {{key:End}} move between them; {{key:Enter}} picks the focused one; {{key:Esc}} closes the palette.
- On a phone the palette is a sheet at the bottom of the screen; it steps aside when you pick a symbol so you can see the plan. Open it again from the Build menu or the **Palette** button in the options bar.

:::tip
If a file uses a symbol set this build does not have, the plan shows a box where the symbol was and Problems lists it.
:::
