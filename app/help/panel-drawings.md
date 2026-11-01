---
title: Panel drawings in timber or light-gauge steel
summary: Frame the model's walls, floors and roofs as panels in timber or light-gauge steel, see every stud, plate, header, joist and rafter to scale, and save the cut list as CSV and the shop drawings as a PDF.
section: tasks
order: 161
keywords: panel, framing, shop drawing, cut list, light-gauge steel, steel stud, LGS, timber, joist, rafter, header, stock, PDF
---

## Open the panels

Choose {{ui:Panel drawings}} in the {{ui:Build}} menu (or type {{cmd:PANELS}}). The list holds every drawn wall, every floor and every roof of the model, each with a tick. Walls come with their doors and windows as openings. A floor is framed as the rectangle round its outline, with the joists running the short way. A roof is framed as a gable over the outline of its walls, with the pitch of the roof; the list says so, because a hip or a complex roof is not a gable.

## Material, size and spacing

Choose {{ui:Material}}: **Timber** or **Light-gauge steel**. Steel pieces are C-studs named by their depth and thickness (for example C92-1.2), with a track for the plates. {{ui:Member size}} picks one size for every ticked panel, or leave it on Default to take the defaults of each kind of panel. {{ui:Spacing}} is the distance between studs, joists or rafters. These are starting values for you to set. They are not a code check: whether a stud at that spacing carries that wall, and a header that span, is for the code tables (the Building regulations add-on has the IRC's) and your engineer.

## What you get

The first ticked panel is drawn to scale in the dialog, with the dimensions. {{ui:Cut list (CSV)}} saves every panel's pieces by mark, size and length, and the stock lengths to buy for them. {{ui:Shop drawings (PDF)}} saves one A3 page for each panel, with every piece marked and its cut list. {{ui:Drawing (SVG)}} saves the first panel as a drawing. Whatever the framing code finds that cannot be framed (an opening too close to the end of a wall, a header that does not fit under the plates, a piece longer than the longest stock) is listed in Problems as well as in the dialog.

## What it does not do

The panels are drawings made from the model whenever you ask: nothing is written into the model, so they always match it. To put the framing into the model as members, use {{ui:Framing}} for timber walls, floors and roofs.
