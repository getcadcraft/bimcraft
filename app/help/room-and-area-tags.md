---
title: Room and area tags
summary: Put a tag with the number, name and area on a room or an area. The tag follows it and is sized by its height on paper.
section: tasks
order: 36
keywords: tag, room tag, area tag, tag room, tag area, tag all, tag all untagged, label, text height, paper height, annotation
---

## What you'll do

Tag rooms and areas one by one or all at once, and move a tag where it reads well.

## Where the tools are

- Ribbon layouts: {{ui:Architecture}} › **Room & Area** › {{ui:Tag Room}} and {{ui:Tag Area}}.
- Classic layout: the Draw bar › {{ui:Rooms}} menu.
- A picked room or area: Properties › {{ui:Add a tag}}.

## Steps

1. Choose {{ui:Tag Room}} and click in a room, where the tag should sit.
2. Or press {{ui:Tag all untagged}} in the row: every room on this level that has no tag gets one, in its middle. It is one undo step.
3. To move a tag, pick it with Select and drag it. Properties has {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} works the same way for areas.

## What a tag does

- It says the number, the name and the area, in your display units.
- It follows its room: rename the room, move a wall, and the tag's words and place change in the same step.
- It is sized on paper: {{ui:Text height on paper}} is in millimetres (2.5 to start). At a view scale of 1:50 a 2.5 mm tag is 125 mm tall in the model; at 1:100 it is 250 mm.
- A room with a tag shows the tag instead of its plain label.
- When its room or area is gone, the tag goes with it. Undo brings both back.

## In the IFC

A tag is an IfcAnnotation (ObjectType ROOMTAG or AREATAG) with its text as a text literal, and the GlobalId of what it names. The text in the file gives the area in square metres.

## Not built yet

- Tag shapes of your own, and a leader line.
- Tags on doors, windows and walls are a separate tool (see the tag styles of the sheets).

See also [Rooms and room separators](topic:rooms-and-separators).
