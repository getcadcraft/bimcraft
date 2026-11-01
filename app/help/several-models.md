---
title: See several IFC models together
summary: Add more IFC files to the scene, such as architecture, structure and services, see them in the same coordinates, move one, hide one, and choose which one you edit.
section: tasks
order: 27
keywords: federate, federation, federated model, several models, multiple files, combine, overlay, coordination, discipline, structure, mep, services, offset, move model, active model, add a model
---

## What you'll do

Look at models from different disciplines in one place: the architect's model with the structural and services models in it. Each stays its own file; BimCraft only shows them together.

## Steps

1. Open the first IFC model as usual.
2. In {{ui:Models}} on the left, click {{ui:Add a model…}} and choose one or more IFC files. Each appears in the list and in the 3D view.
3. Untick a model to hide it; tick it to show it again.
4. If a model comes in at the wrong place (a different survey point), click {{ui:Move}} under it, type how far to move it along X, Y and Z in metres, and click {{ui:Apply}}.
5. The model with the dot is the one you edit. Click another model's dot to edit that one.
6. Click × beside a model to take it out of the scene.

## Open the team's models

When the open model is a cloud file in a team project, {{ui:Open the team's models}} appears under the list. It opens the project's other IFC models beside this one, each moved by the offset the project set. Models hidden from you stay out and are counted; a model the project turns is opened unturned and counted too; files that are not IFC (a DWG, say) are skipped and named in the status line. A model that is already open is never opened twice. The button is hidden for a file that is not in a team project.

## What you should see

- Every model in the first model's coordinates, as its file places it. Models exported from the same project line up without moving anything.
- Picking an element of a model you are not editing shows its properties read only, with {{ui:Edit that model}} to switch.
- The {{ui:Model tree}}, {{ui:Storeys}}, {{ui:Color}}, the {{ui:Changes}} list, placing library items and {{ui:Save as IFC}} all work on the model you edit. Hide, isolate, see-through and {{ui:Select all}} work across every model.
- {{ui:Save as IFC}} downloads the model you edit, with its changes only.

## Common mistakes

- **A model is far away or missing.** Its file uses other coordinates. Use {{ui:Fit}} to find it, then {{ui:Move}} it into place.
- **Delete or Copy is greyed out on a picked element.** It belongs to another model: switch to it first.
- **Opening a file with Choose a file replaced everything.** That starts a new scene. Use {{ui:Add a model…}} to add files to the one you have.

## Next

- [Hide, isolate and see through elements](topic:hide-and-isolate)
- [Color elements by a property](topic:color-by-property)
