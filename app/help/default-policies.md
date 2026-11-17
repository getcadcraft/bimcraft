---
title: "Default Policies: set what a new building starts with"
summary: Say once which wall type, levels, first sheet, LOD tags, units and tool a new building starts with, for metric and for imperial projects, and share the policies across the office as a small file.
section: tasks
order: 16
keywords: default, defaults, default policies, policy, office standard, office defaults, template, new building, first wall type, metric wall, masonry, LOD, level of development, first sheet, paper, scale, levels, storey height, level names, wall tool, units, share, export, import, json
---

## What you'll do

Tell BimCraft what a new building should start with, so nobody in the office has to change the same things each time. This is an add-on: it is off until you switch it on, and a policy you do not set leaves BimCraft's own default exactly as it is.

:::note
These are defaults for **new** buildings and **new** things. A project you already started is not changed.
:::

## Steps

1. Open Settings, go to {{ui:Add-ons}} and switch on {{ui:Default Policies}}.
2. In Settings, open the **BimCraft** tab and pick {{ui:Default Policies}} in the list on the left.
3. Set the policies you want. Each one starts on **BimCraft's own**, with what that is in brackets. A policy with a **Metric** and an **Imperial** box takes one value for each kind of project; fill in only the ones you need.
4. There is no Save button: each change is saved as you make it. A value that cannot be used is refused in words and the old one stays.
5. Click {{ui:New building}}. The dialog is filled in from your policies, and each value a policy set says **from your Default Policies** beside it. You can still change any of them before {{ui:Create}}.

## The policies

- **Units of a new building**: the units switch to this on Create.
- **Number of levels**, **Level names** and **Level height**. In a name, `{n}` counts 1, 2, 3; `{n0}` counts 0, 1, 2; `{nn}` and `{nn0}` do the same with two digits. So `Floor {nn0}` gives Floor 00, Floor 01, Floor 02.
- **First wall type**: what the Wall tool draws first. A metric office can start on Exterior masonry 300 mm while imperial projects keep Exterior 2×6.
- **LOD tag on the starter wall types**: the level of development (LOD 100 to 500) the nine starter types show wherever a type is listed. See [Build wall assemblies](topic:wall-assemblies).
- **LOD of a newly made wall type**: the tag a new type starts with in the type editor. You can change it there.
- **First sheet**: its paper, scale, sheet number and name (use `{level}` for the lowest level's name), or no first sheet at all.
- **Annotation sizes on paper** (Settings › Global › Default Policies): the office's heights, in millimetres as printed, for notes, dimension text, tags, room names, grid bubble letters, view titles and schedule text. A new building takes them on Create and keeps them in its file. See [Draw at full size, annotate by scale](topic:annotation-sizes).
- **Tool that is active after Create**: Select, as BimCraft does on its own, or Wall, so the first two clicks on the plan already draw a wall.

## Schedule layout: the office standard

In **Settings › Global › Default Policies**, under **Schedule layout (the office standard)**, set how every schedule is grouped, whether it has subtotals and a total, its title and the case of its column headings. Every schedule that does not state its own takes them, whoever sets it up. See [Lay out, save and export a schedule](topic:schedule-layouts).

## Share them across the office

1. In Settings, open the **Global** tab and pick {{ui:Default Policies}}.
2. Type the **Office name** if you like. It is written into the file.
3. Click {{ui:Save to a file}}. You get a small file ending in `.ccdefaults.json`.
4. On another computer, switch the add-on on, open the same place and click {{ui:Load from a file}}. The file's policies replace the ones on that computer.

The Global tab also has the **Unit system of a new project**, which holds for every app that has the add-on, and {{ui:Reset every policy}}. {{ui:Reset to BimCraft's own defaults}} on the BimCraft tab clears only BimCraft's.

## Good to know

- The file is plain, open JSON: a list of policy names and values. A policy the file names that this version does not know is left out and named in the message; the rest still loads.
- Policies are kept in this browser, for every CadCraft app on this computer. They are not stored in the building file, and they are not synced between computers: use the file.
- The LOD tag on a starter type comes from the policy on this computer. A type you make as a copy of a starter carries its tag in the building file.
- BimCraft has no precision setting, so there is no precision policy here.
- A building started from a template brings the template's own levels and sheets. The wall type and the units policy still apply.
- Switch the add-on off and everything is BimCraft's own again. Your policies are kept for when you switch it back on.
