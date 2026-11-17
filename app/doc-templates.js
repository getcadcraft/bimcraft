/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the templates are document content (English examples a person edits); their names are lang keys. */
/**
 * doc-templates.js — the example trade templates for Documents from the model (0.8 SU.889, session sx-tags).
 * Each: { id, name (lang key), trade (lang key), tags (definitions it reads: "Add this template's tags" adds the missing ones), text }.
 * Templates per trade in the Library (the plan's step) are not built yet: these four ship with BimCraft (the last two are 0.10 BK.47:
 * the working-drawing schedules and the specification), and a person loads
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

// 0.10 BK.47 (bk-r3-schedules-10): Stage 5 working drawings. The schedules come from the model in the office layout
// ({{schedule <key or the name of a saved set-up>}}), the specification from the types in use ({{specification}}).
const WORKING = `# Working drawing schedules: {{project}}

File {{file}}, {{date}}.

## Doors

{{schedule doors}}

## Windows

{{schedule windows}}

## Finishes by room

{{schedule roomfinishes}}

## Finish quantities

{{schedule finishtotals}}
`;
const SPECIFICATION = `# Specification: {{project}}

File {{file}}, {{date}}.

{{specification}}
`;

// 0.10 BK.63 / BK.170 (bk-r3-stages-10): a client pack and a stage report. Their fields come from pack-ui.js: the stage, the massing
// options compared on area and cost, areas by level, the sheets with their revisions, the issue history, what changed since the last issue.
const CLIENT_PACK = `# Client pack: {{project}}

Stage: {{stage}}. File {{file}}, {{date}}.

## The options compared

{{options}}

## Floor areas

{{areas}}

## Rooms

{{schedule rooms}}

## Drawings

{{sheets}}
`;
const STAGE_REPORT = `# Stage report: {{project}}

Stage: {{stage}}. File {{file}}, {{date}}.

## Floor areas

{{areas}}

## Options

{{options}}

## Drawings and their revisions

{{sheets}}

## Issue history

{{issues}}

## Changed since the last issue

{{changes}}

## Doors

{{schedule doors}}

## Windows

{{schedule windows}}
`;

export const TEMPLATES = [
  { id: 'doors', name: 'sx.su889.tpl.doors', trade: 'sx.su889.trade.joinery', tags: [TEMPLATE_TAGS.doorFinish, TEMPLATE_TAGS.fire, TEMPLATE_TAGS.hardware], text: DOORS },
  { id: 'walls', name: 'sx.su889.tpl.walls', trade: 'sx.su889.trade.finishes', tags: [TEMPLATE_TAGS.wallFinish, TEMPLATE_TAGS.lining, TEMPLATE_TAGS.fire], text: WALLS },
  { id: 'working', name: 'sx.su889.tpl.working', trade: 'sx.su889.trade.working', tags: [], text: WORKING },
  { id: 'spec', name: 'sx.su889.tpl.spec', trade: 'sx.su889.trade.working', tags: [], text: SPECIFICATION },
  { id: 'clientpack', name: 'sx.su889.tpl.clientpack', trade: 'sx.su889.trade.presentation', tags: [], text: CLIENT_PACK },
  { id: 'stagereport', name: 'sx.su889.tpl.stagereport', trade: 'sx.su889.trade.presentation', tags: [], text: STAGE_REPORT },
];

/** The definitions a template reads that the project does not have yet (by name, case-blind). */
export function missingTags(tpl, defs) {
  const have = new Set(defs.map((d) => d.name.toLowerCase()));
  return (tpl?.tags || []).filter((d) => !have.has(d.name.toLowerCase()));
}
