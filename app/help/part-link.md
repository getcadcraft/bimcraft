---
title: Send an element to PartCraft or ModelCraft and take it back
summary: Pick a support, bracket, railing or piece of equipment, design it in PartCraft or ModelCraft with the building around it, and accept the new shape back into the model.
section: tasks
order: 84
keywords: partcraft, modelcraft, part, extrusion, solid, csg, send, link, element, support, bracket, fence, railing, equipment, design, round trip, accept, changed, part links
---

## What you'll do

Design one element of the building in another app: send it to PartCraft (cut, add, drill, resize) or ModelCraft (push, pull, draw on it), change it there, and bring the new shape back into the model.

## Steps

1. Pick one element in the model: a generic element, equipment, a column, a beam, a railing or furniture.
2. Choose {{ui:Part links}} on the toolbar and then {{ui:Send to PartCraft}} or {{ui:Send to ModelCraft}}. The app opens in a new tab with the element in it (a part in PartCraft, a group in ModelCraft). The elements within 3 m are drawn grey beside it so you can design it in place. They cannot be changed there.
3. Change it there, then choose {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}} in that app. You can save back as often as you like.
4. Back in BimCraft the {{ui:Part links}} button shows a count, and the card lists the element as {{ui:Changed in PartCraft}} (or {{ui:Changed in ModelCraft}}) with the size and volume change in words.
5. Choose {{ui:Show}} to look at it, then {{ui:Accept}} to give the element the new shape, or {{ui:Keep mine}} to leave it as it was.

## What you should see

- Accepting is one undo step. The element keeps its place, GlobalId, type, material and properties. Only its body is replaced.
- The element gets a property set {{ui:CadCraft_PartLink}} with the link, its status and the revision.
- {{ui:Send again}} opens the same element once more, on the same link, in the app it last came back from.

## Good to know

- Walls, floors, roofs, doors, windows, stairs, ramps and spaces are drawn by the building tools from an outline and rebuilt after every change. A body from another app would be written over, so these are refused with a reason.
- The shape comes back as IFC's own solids when it is one. A part made in PartCraft from a straight element with extrudes and holes comes back as an extrusion with each feature added or cut ({{ui:CSG}}). A shape that is one straight prism, from either app, comes back as one extrusion ({{ui:SweptSolid}}). Anything else (fillets, curved or sculpted shapes) comes back as a mesh (an IFC tessellation). The status line after {{ui:Accept}} says which.
- BimCraft checks that the solids build to the shape that was sent (volume and size). If they do not, it writes the mesh instead and says so.
- Fillets, patterns and the rest of the part's history stay in PartCraft.
- If the element changed in the model after you sent it, the card says so before you accept: accepting replaces those changes.
- Nothing is uploaded. The two apps are pages of one site and pass the element between them in this browser. Both need to be open in the same browser.
- The element must close into a solid in PartCraft. An element whose shape has large open gaps is refused there with the number of open edges.
- To accept, make the model that holds the element the active one.
