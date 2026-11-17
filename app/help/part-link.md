---
title: Send an element to PartCraft and take it back
summary: Pick a support, bracket, railing or piece of equipment, design it as a part in PartCraft with the building around it, and accept the new shape back into the model.
section: tasks
order: 84
keywords: partcraft, part, send, link, element, support, bracket, fence, railing, equipment, design, round trip, accept, changed, part links
---

## What you'll do

Design one element of the building as a part: send it to PartCraft, change it there (cut, add, drill, resize), and bring the new shape back into the model.

## Steps

1. Pick one element in the model: a generic element, equipment, a column, a beam, a railing or furniture.
2. Choose {{ui:Part links}} on the toolbar and then {{ui:Send to PartCraft}}. PartCraft opens in a new tab with the element as a part. The elements within 3 m are drawn grey beside it so you can design it in place. They cannot be changed there.
3. Change the part in PartCraft. In PartCraft choose {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. You can save back as often as you like.
4. Back in BimCraft the {{ui:Part links}} button shows a count, and the card lists the element as {{ui:Changed in PartCraft}} with the size and volume change in words.
5. Choose {{ui:Show}} to look at it, then {{ui:Accept}} to give the element the new shape, or {{ui:Keep mine}} to leave it as it was.

## What you should see

- Accepting is one undo step. The element keeps its place, GlobalId, type, material and properties. Only its body is replaced.
- The element gets a property set {{ui:CadCraft_PartLink}} with the link, its status and the revision.
- {{ui:Send again}} opens the same element in PartCraft once more, on the same link.

## Good to know

- Walls, floors, roofs, doors, windows, stairs, ramps and spaces are drawn by the building tools from an outline and rebuilt after every change. A body from another app would be written over, so these are refused with a reason.
- The shape comes back as a mesh (an IFC tessellation), not as the part's features. The part's history stays in PartCraft.
- If the element changed in the model after you sent it, the card says so before you accept: accepting replaces those changes.
- Nothing is uploaded. The two apps are pages of one site and pass the element between them in this browser. Both need to be open in the same browser.
- The element must close into a solid in PartCraft. An element whose shape has large open gaps is refused there with the number of open edges.
- To accept, make the model that holds the element the active one.
