/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the templates are document content (English examples a person edits); their names are lang keys. */
/**
 * doc-templates.js — the example trade templates for Documents from the model (0.8 SU.889, session sx-tags).
 * Each: { id, name (lang key), trade (lang key), tags (definitions it reads: "Add this template's tags" adds the missing ones), text }.
 * Templates per trade in the Library (the plan's step) are not built yet: these two ship with BimCraft, and a person loads
 * their own .md file or keeps an edited one in this browser.
 */
export const TEMPLATE_TAGS = {
  fire: { name: 'Fire rating', kind: 'integer', values: [0, 20, 30, 45, 60, 90, 120], classes: [], note: 'Minutes' },
  doorFinish: { name: 'Door finish', kind: 'text', values: ['Paint grade', 'Oak veneer', 'Laminate', 'Factory primed'], classes: ['IfcDoor'] },
  hardware: { name: 'Hardware set', kind: 'text', values: [], classes: ['IfcDoor'] },
  wallFinish: { name: 'Wall finish', kind: 'text', values: ['Paint', 'Tile', 'Wallpaper', 'Exposed'], classes: ['IfcWall'] },
  lining: { name: 'Lining', kind: 'text', values: ['12.5 mm board', '2 x 12.5 mm board', '15 mm fire board', 'None'], classes: ['IfcWall'] },
};

const DOORS = `# Doors and hardware

**Project:** {{project}}. **Model:** {{file}}. **Issued:** {{date}}.

Quantities are read from the model's quantity sets; finishes, fire ratings and hardware come from the model's tags.

## Summary

The project has {{count IfcDoor}} doors.

{{qty IfcDoor Area by Type}}

## Door schedule

{{table IfcDoor cols Mark, Type, Storey, Width, Height, tag:Door finish, tag:Fire rating, tag:Hardware set}}

## Doors by type

{{#group IfcDoor by Type}}
### {{value}}

{{count}} doors. Finishes: {{tag Door finish}}. Fire ratings: {{tag Fire rating}}.

{{#each}}
- **{{mark}} {{name}}** ({{storey}}): finish {{tag Door finish}}, hardware set {{tag Hardware set}}.
{{/each}}
{{/group}}

## Fire-rated doors

{{#each IfcDoor where Fire rating > 0}}
1. {{mark}} {{name}} on {{storey}}: {{tag Fire rating}} minutes, {{tag Door finish}}.
{{else}}
No door is tagged with a fire rating above 0.
{{/each}}

## Workmanship

Supply and install the doors above complete with frames, hardware to the named sets and the finishes stated. Check every opening
on site before ordering.
`;

const WALLS = `# Walls, linings and finishes

**Project:** {{project}}. **Model:** {{file}}. **Issued:** {{date}}.

## Quantities by wall type

{{qty IfcWall NetSideArea by Type}}

{{qty IfcWall Length by Type}}

## Quantities by finish

{{qty IfcWall NetSideArea by tag:Wall finish}}

## Wall types

{{#group IfcWall by Type}}
### {{value}}

{{count}} walls, {{sum NetSideArea}} net side area, {{sum Length}} long in all.

- Lining: {{tag Lining}}
- Finish: {{tag Wall finish}}
- Fire rating: {{tag Fire rating}}
{{/group}}

## Walls with no finish tagged

{{#each IfcWall where Wall finish hasnot}}
- {{name}} ({{type}}, {{storey}})
{{else}}
Every wall has a finish.
{{/each}}

## Workmanship

Areas are net of openings as the model's quantity sets state them. Allow for waste and laps when ordering.
`;

export const TEMPLATES = [
  { id: 'doors', name: 'sx.su889.tpl.doors', trade: 'sx.su889.trade.joinery', tags: [TEMPLATE_TAGS.doorFinish, TEMPLATE_TAGS.fire, TEMPLATE_TAGS.hardware], text: DOORS },
  { id: 'walls', name: 'sx.su889.tpl.walls', trade: 'sx.su889.trade.finishes', tags: [TEMPLATE_TAGS.wallFinish, TEMPLATE_TAGS.lining, TEMPLATE_TAGS.fire], text: WALLS },
];

/** The definitions a template reads that the project does not have yet (by name, case-blind). */
export function missingTags(tpl, defs) {
  const have = new Set(defs.map((d) => d.name.toLowerCase()));
  return (tpl?.tags || []).filter((d) => !have.has(d.name.toLowerCase()));
}
