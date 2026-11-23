---
title: What BimCraft reads from each format
summary: Exactly what BimCraft reads from IFC, project and family files, DWG and DXF, and what it leaves alone.
section: reference
order: 20
keywords: formats, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versions, compatibility, what is read
---

## IFC

| Read | Details |
|---|---|
| Geometry | Every element with a shape, colored as the file says. Rooms and spaces are drawn see-through and hidden at first |
| Storeys | Building storeys in elevation order, and which elements sit on each. Elements on no storey are grouped as "Not on a storey" |
| Element counts | How many elements of each kind (walls, doors, slabs…), shown in {{ui:Elements}} |
| Project facts | Project name, long name and phase; schema; the exporting program, author and export date from the file header |
| Element data | Name, type, object type, tag, description, GlobalId; every property set and quantity set on the element and on its type |

Editable: name, object type, tag, description, and single property values. Saved as a new IFC file. Schemas IFC2X3, IFC4 and IFC4X3 open, read by BimCraft's own IFC engine; anything it cannot draw yet is listed under **Not drawn yet** in the {{ui:File}} panel. The model is moved to the origin when it opens, so a model placed far from it still shows in the middle of the screen. `.ifczip` and `.ifcxml` do not open.

## Project and family files

`.rvt` projects, `.rte` project templates, `.rfa` families and `.rft` family templates.

| Read | Details |
|---|---|
| File information | Release and build, worksharing, central model path, last saved path, user name, locale, document GUID |
| Project information | The project's own fields (name, number, client, address, status…), without new-project defaults |
| Family information | Family name, category, release, last update, and its parameters by group |
| Links | The list of linked models, CAD links, images and keynote tables the file points to |
| Preview picture | The thumbnail saved in the file |

Not read: the 3D model, elements, views, sheets and schedules. They are stored in an undocumented format. BimCraft reads only a few tens of kilobytes from each file, so file size barely matters.

## .pln, .pla, .tpl and .bpn project files

Not read yet: BimCraft says so when you open one. Export IFC for the model and DWG for the drawings; see [Open .pln and .pla project files](topic:pln-project-files).

## DWG and DXF

| Read | Details |
|---|---|
| Spaces | Model space and every sheet (layout), in tab order |
| Viewports | Each sheet's viewports, with their scale, twist and frozen layers |
| Layers | Name, color, on/off, frozen, plot flag and line weight |
| Objects | Lines, polylines, arcs, circles, ellipses, splines, hatches and solids, text and multiline text, blocks and attributes, dimensions, leaders and multileaders, tables, points, images |
| Linked drawings | Drawn where they are inserted, when their files are found |
| Images | Drawn from the picture files when found (PNG, JPEG, GIF, BMP, WebP; not TIFF) |
| Equipment tags | Foodservice item tags (`KCL-ITEM` attributes), for the equipment schedule |

Anything else is counted under **Not drawn yet**, never guessed. DWG formats from AutoCAD 2000 to 2018 are the ones checked (R13 and R14 files are accepted too, but none were in the test set; older DWGs do not open); the {{ui:Drawing}} panel shows the format code (such as AC1032). DXF files of every version open, R12 included. Both are read by BimCraft's own readers, in this tab. A drawing you opened is never saved back; BimCraft's own plans, elevations and sections can be saved as new DWG or DXF files: see [Save a plan, elevation or section as DWG or DXF](topic:save-dwg-dxf).

## In a folder

| Kind | Extensions | In the report |
|---|---|---|
| Models | `.rvt` `.rfa` `.rte` `.rft` | Grouped with numbered backups, health-checked, card read, links checked |
| IFC | `.ifc` | Listed; opens in 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listed with the models that link them; DWG and DXF open in 2D, DGN does not |
| Leftovers | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listed under **Set aside** |
| Housekeeping folders | `*_backup`, `*_log`, `Revit_temp`, hidden folders | Listed under **Set aside**, not read |

See [Folder report: roles, statuses and links](topic:folder-roles).
