---
title: Put a picture under the plan
summary: Place a PNG, JPEG or WebP picture (a scanned plan, a sketch, a site photo, an aerial) under a level's plan or on a vertical plane, scale it by two points, move, turn, fade and lock it, see it in 3D and in the plan PDF, and keep it beside the model in a bundle.
section: tasks
order: 159
keywords: picture, image, background, PNG, JPEG, WebP, scan, sketch, photo, aerial, site plan, scale, opacity, lock, underlay, trace
---

## Place a picture

Turn on {{ui:Draw}}, go to the level, and choose {{ui:Picture}} in the {{ui:Build}} menu. Then {{ui:Insert picture…}} and pick a PNG, JPEG or WebP file. It is read in your browser and never uploaded. It appears under the plan, fitted to the view, and the toolbar says it is not scaled yet. Everything you draw sits on top of it.

## Set the scale

Choose {{ui:Scale}}, click two points on the picture whose real distance you know (two ends of a wall on a scanned plan, a dimension printed on a sketch), then type the distance and press {{key:Enter}}. The picture grows or shrinks about the first point you clicked. {{key:Esc}} cancels.

## Paste a copied area

In MarkupCraft, {{ui:Copy area}} copies part of a PDF sheet as a picture. Back in BimCraft, with a level's plan showing, press {{key:Ctrl+V}} (or {{ui:Paste}} in the {{ui:Edit}} menu): the area lands on the plan as a picture, centred where the pointer is (or in the middle of the view). When the sheet had a drawing scale, it comes in at its true size, so a wall on it is as long as your walls. Without one it comes in at paper size and {{ui:Scale}} starts, so you can click two points and type their distance. An area copied as an overlay starts at the opacity it was copied with. It is one undo step and is kept like any other picture.

Paste takes whichever you copied last: a copied area, or something you copied in BimCraft. {{key:Ctrl+V}} also pastes any other PNG, JPEG or WebP picture on your clipboard, placed like {{ui:Insert picture…}} and not scaled yet. A copied area is remembered for six hours.

## Move, turn, fade, lock

{{ui:Move}} takes a base point on the picture and then the place it should go. {{ui:Turn}} takes an angle in degrees, about the picture's centre. {{ui:Opacity}} fades it so your lines stand out. {{ui:Lock}} keeps it from moving while you draw; a locked picture still lets you change its opacity and hide it. Each change is one undo step.

## Several pictures, several levels

A picture belongs to the level it was placed on and shows on that level's plan and ceiling plan. Click a picture to work on it, or choose it in the list. {{ui:Hide}} turns it off without removing it; {{ui:Remove}} (or {{key:Delete}}) takes it out of the model.

## Pictures in the 3D view

Every picture also stands in the 3D view as a flat plane: a plan picture lies on its level, a vertical-plane picture stands over its section line. It is drawn over the model without hiding it, and the model hides the part of the picture behind it. Overlapping pictures sort by distance. Opacity, Hide, Lock and Remove work the same, and {{ui:Show in 3D}} turns all the planes off in the 3D view only. A level holds at most 8 pictures, to keep the views fast.

## A picture on a vertical plane

Under {{ui:Place on}} choose {{ui:A vertical plane (section line)}}, then {{ui:Insert picture…}}. Click the two ends of a line on the plan (a wall face end snaps), or choose a named section line of the level in {{ui:Over a section line}} and no clicks are needed. The picture stands on the level over that line, as wide as the line. Set its {{ui:Width}}, its place {{ui:Along the line}} and its {{ui:Height above level}} by typing; {{ui:Turn}} turns it in its own plane. A vertical picture is not drawn under the plan; the plan shows its line while you work on it. BimCraft has no interactive 2D section window: sections and elevations are drawn on the sheets, and pictures are not printed in those sheet views yet.

## Printing

{{ui:Print view}} on a plan writes the level's pictures into the PDF under the drawing, at their scale, turn and opacity, clipped to the sheet; a hidden picture stays out. A JPEG goes in as it is; other pictures are brought down to 200 dpi on the sheet first.

## Kept beside the model

The picture's bytes are not written into the IFC text. The model refers to each one by name (an IfcDocumentReference such as pictures/<id>.png) and the bytes travel in a project bundle. Use {{ui:Save as bundle…}} (or {{ui:Save as IFC}} and choose it): you get one .ccbundle file with the model and its pictures, the IFC stays small and edits stay fast. Open the .ccbundle and the pictures are back.

A plain .ifc cannot hold a picture without becoming large. When you save one, BimCraft says how many pictures are kept outside it and offers a bundle, or a plain IFC that embeds the pictures up to 512 KB and leaves the others out. A plain .ifc opened without its bundle shows those pictures as missing and Problems lists them; open the .ccbundle they were saved in. Files saved by the first version, with the picture inside the IFC, still open, and a bundle save moves their pictures out. A picture is kept as it is up to 6 MB; a larger one is brought down in size first, and you are told. Other programs open the model and ignore the pictures. A picture you have not scaled yet is listed in Problems as a note.

## In section and elevation sheets

A picture on a vertical plane (choose {{ui:Vertical}} in the picture panel and click the two ends of a line, or put it over a named section line) is printed in the sheet views that look straight at it. A section shows a picture that stands on its cut line, or that was put over that section line by name. An elevation shows every vertical picture whose plane faces it. The picture is drawn under the view's lines, at the view's scale, clipped to the view, and keeps its opacity. Open {{ui:Sheets…}} to see it; the sheet PDF carries it as an image. Seen from behind a picture is mirrored, as it is in 3D. Hidden pictures are left out.
