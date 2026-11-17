---
title: Massing options kept side by side
summary: Keep several massing options in the same model, make one the current option, check it against the site's building lines and servitudes, take in massing from ModelCraft, and develop the chosen option into walls and floors.
section: tasks
order: 22
keywords: massing, mass, option, options, option set, scheme, concept, concept design, stage 2, alternatives, compare options, current option, building mass, push pull, modelcraft, civilcraft, gross floor area, footprint, volume, develop mass, servitude, easement, building line, setback
---

## What you'll do

Keep the massing options of a concept in one model instead of in separate files: several building masses side by side, one of them the **current option**, the others kept for comparison.

A massing option is a building mass: an outline raised to a height, with a number of floors. It is not walls yet. You can keep as many as you like, grouped in **option sets** (options of one set are alternatives to each other).

## Keep an option

1. Open {{ui:Room program to massing}}, type the room program and the outline, and choose {{ui:Find options}}.
2. Pick one of the options listed.
3. Under {{ui:Massing options in the model}}, type a name for the {{ui:Option set}} if you want one, and choose {{ui:Keep the selected option}}.

The option appears in the model as a building mass and in the list, with its floors, footprint, gross floor area and volume. Nothing is built. Keep another the same way.

The first option of a set is its current option. Each step is one undo step.

## The current option

One option of each set is the current one. That means two things:

- **Its floors count as the building's floor areas.** The current option has one space per floor carrying that floor's gross area, so anything that reads floor areas sees the option in force and no other.
- **It is checked against the site.** If it stands outside the site boundary, over a building line or on a servitude, a warning naming it appears in {{ui:Problems}}. It is a warning only: nothing is refused. Options that are not current are not checked.

Choose {{ui:Make current}} on another option to change it.

{{ui:Hide the options that are not current}} hides the others in the 3D view. That is for this browser only and is not saved in the file.

## Massing from ModelCraft

In ModelCraft, {{ui:Export}} › {{ui:Massing to BimCraft…}} sends each group or component as one option. BimCraft opens the file with the options listed.

To bring them into a model that is already open, choose {{ui:Add massing options from a file}} and pick the `.ifc` file. Its masses come in as options of a set, in one undo step, standing where they were modelled. A file of building masses from CivilCraft works the same way.

An option marked "(shape simplified)" was not a plain upright block in ModelCraft (it steps back, slopes or is not closed). Its mass here is the outline of its base raised to its height; its floor areas and its volume are the ones measured from the solid itself.

## Develop the chosen option

Choose {{ui:Develop}} on an option. It becomes levels (added up to its number of floors), walls round its outline on every floor and a floor slab on each, in one undo step. The option leaves the list; the other options stay as they were. There is no roof yet.

{{ui:Rename}} changes an option's name, {{ui:Remove}} takes it out of the model. Removing the current option makes the set's first other option current.

## What you should see

- Each kept option as a block in the 3D view and a row in the list.
- "(current)" beside one option of each set.
- A warning in {{ui:Problems}} when the current option crosses the site boundary, a building line or a servitude.

## Good to know

- In the IFC file an option is a building element proxy with the property set `CadCraft_SiteMass` (its option set, option name and whether it is current are in that set). The current option's floors are spaces of type `MassingFloor`. Other programs read the proxy as a generic element.
- Keeping an option never adds levels; developing one does.
- An assistant can list the kept options, keep one, make one current, rename, develop or remove it.
