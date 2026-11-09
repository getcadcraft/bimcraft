---
title: Export the model as Collada or for Google Earth
summary: Write the open IFC models as a Collada (.dae) file for Blender and other 3D programs, or as a Google Earth package (.kmz) placed where the model is on the map.
section: tasks
order: 141
keywords: collada, dae, kmz, kml, google earth, blender, export, geolocation, georeference, latitude, longitude, location, 3d programs
---

{{ui:Collada}} on the toolbar (or {{ui:Export Collada (.dae, .kmz)…}} in the File menu of the menu and ribbon styles) writes what is open as Collada 1.4.1: every model that is shown, federated ones where you placed them.

## Export

1. Choose {{ui:Collada}}.
2. Pick the format:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Only offered when the model has a location.
3. Choose the options, then {{ui:Export}}. The file downloads, and the status bar says how many elements went in.

| Option | What it does |
|---|---|
| {{ui:Write the location into the file}} | Adds the latitude, longitude, height and heading of the file's origin to the .dae |
| {{ui:Height}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, or {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Spaces go in too (they are left out by default) |
| {{ui:Include hidden elements}} | Elements you hid are written as well (by default only what you see is written) |

## What is in the file

| In the model | In the Collada file |
|---|---|
| Building, storeys | Nested nodes, storeys in order of elevation; elements on no storey under "Unplaced" |
| Each element | One node with its own mesh, named as in the model (its name, else its class and tag) |
| Class, GlobalId, predefined type | In the node's extra data (profile IFC), with the exact name (profile ModelCraft) |
| Colours | Materials, with transparency |
| Units and axes | Metres, Z up. Level 0 of the model in front is at height 0 |

The model stays near the origin across the ground, so programs that work in single precision show it without jitter. ModelCraft writes its Collada files with the same writer, and opens these files with their element names.

## Where the location comes from

The model in front gives the location, the same way {{ui:Measure}} works out a point's latitude and longitude:

- A map conversion (IFC4 IfcMapConversion, or the IFC2X3 property sets) through the model's coordinate system. A system you chose for the model wins over the one the file names.
- Otherwise the site's latitude and longitude (approximate: fine across a site).

The heading is measured, not assumed: it takes the map's rotation, true north and the map's convergence into account. To give a model a location, use {{ui:Map origin…}} in Measure.

## In other programs

- **Google Earth** reads the .kmz: the model appears at the location, turned to north. A plain .dae has no place Google Earth reads a location from; use the .kmz.
- **Blender** (4.x and earlier): File, Import, Collada (.dae). Each element comes in as its own object with its material. The location is kept in the file's extra data, which Blender does not read. Blender 5.0 dropped its built-in Collada importer; there, use {{ui:USD}} or the glTF export instead, or open the .dae in Blender 4.5 and save a .blend.

Our tests check every file against the Collada 1.4.1 schema and read it back with an independent Collada reader. They have not opened it in Blender or Google Earth.
