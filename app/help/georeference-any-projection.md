---
title: Georeference with any projection
summary: Tell BimCraft which map system a model's coordinates are in, from the whole EPSG list, any UTM zone, or a projection you define yourself, and use it for Location, map layers and point clouds.
section: tasks
order: 62
keywords: projection, coordinate system, crs, epsg, utm, utm zone, custom projection, proj4, proj string, prj, wkt, georeference, georeferencing, map conversion, ifcprojectedcrs, my projections, latitude, longitude, easting, northing, lambert, gauss-kruger, state plane, national grid
---

Some plans are drawn on a map system that is not in a short list: a UTM zone, a national grid, or a projection somebody wrote down as a text definition. {{ui:Measure}} › {{ui:Coordinate system…}} lets you say which one the model uses.

## Pick the system for a model

1. Open the model, choose {{ui:Measure}}, then {{ui:Coordinate system…}}.
2. Type in the search box. Any of these works:
   - an EPSG number: `32633` or `EPSG:2277`;
   - a UTM zone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - words from the name: `lambert 93`, `mga zone 56`, `texas central`;
   - a projection definition: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, optionally with a name in front (`My grid = +proj=…`);
   - the text of a `.prj` file, or use {{ui:Load a .prj file…}}.
3. Pick a result, then {{ui:Use this system}}.

The choice is saved in the model (a property set named `CadCraft_CRS` on the project), so it reopens with the model. Save the model to keep it. {{ui:Take it off the model}} goes back to what the file says.

If your definition gives the same coordinates as a listed EPSG system, BimCraft says so and uses that code; when several listed systems share the same maths it names the others too.

## My projections

A definition you paste or a `.prj` you load can be kept with {{ui:Keep in My projections}}. The list is on this device (this browser) and is offered the next time you open the picker.

## What uses it

- {{ui:Measure}} › {{ui:Location}} turns a picked point into latitude and longitude through the model's system. It used to stop with a note when the file named its map system without an EPSG code; with a choice saved it gives the answer.
- The map layers under the model use the same system. A point cloud or a terrain file in another system is offered the model's (see below).
- {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Choose another system…}} sets what {{ui:Location}} also reports: latitude and longitude in any listed geographic system, or the easting and northing in any projected one, besides the model's own.

## A model that is not on the map yet

If the file has no map conversion, picking a system opens {{ui:Place this model on the map}}. You can also open it from {{ui:Measure}} › {{ui:Map origin…}}.

1. Give the model's origin as eastings and northings in the system, or type a latitude and longitude and choose {{ui:Convert to eastings and northings}}.
2. Give the rotation to grid north (degrees, counter-clockwise; 0 means the model's Y axis points to grid north) and the height of the origin.
3. The scale starts at the unit difference between the model and the map (0.001 for a millimetre model on a metre grid). Change it only for a combined ground-to-grid factor.
4. Choose {{ui:Place on the map}}. One undo step writes an IfcProjectedCRS and an IfcMapConversion (IFC4). The model itself does not move.

An IFC2X3 file has neither entity. BimCraft writes the same numbers the way that standard allows: the buildingSMART property sets `ePSet_MapConversion` and `ePSet_ProjectedCRS` on the project, the site's latitude and longitude, and true north. The dialog says so. Save the model to keep it.

## A model that is already on the map

When the file already places itself on the map and you pick another system, BimCraft asks:

- {{ui:Only change what Location reports}} keeps the file's own georeference and uses your choice for {{ui:Location}}, the map layers and point clouds (the model's numbers are then read as being in the new system).
- {{ui:Move the model to this system}} rewrites the georeference: the origin goes through the projection (eastings, northings, height, rotation and scale) and the IfcProjectedCRS (name, datum, projection, zone, unit) is rewritten, so the saved IFC says the new system. The place on the earth stays the same: the origin keeps its latitude and longitude. Elements inside the model never change; only the georeference does.

The dialog shows the old and new origin before you choose. Moving there and back returns the origin to within a millimetre.

## Point clouds and terrain in another system

A cloud or a survey file carries its own system (LAS, LAZ, E57, GeoTIFF) or none. When it differs from the model's, BimCraft offers {{ui:Reproject into the model's system}}. The points are moved in batches (in a worker when there are many, so the page stays usable), the file on your computer is not touched, and the status line says what was done. Open the file again to go back to its own system. For a cloud already open, {{ui:Reproject to the model…}} in the cloud bar does the same.

If the file names no system, BimCraft asks {{ui:Which system is this file in?}}: choose it with {{ui:Choose the system…}} and the answer is remembered for that file on this device. {{ui:Keep the file's own system}} leaves the points as they are.

## When something is approximate

Problems are listed in the dialog and in the Problems panel, never silently:

- A place outside the area the system is made for: the numbers work, but distortion grows.
- Datum shifts that need a grid file (NADCON, NTv2 and the like) are not available. Systems on a different datum are moved with the grid-free shift the EPSG registry lists, and the result is approximate to the stated accuracy, which the message gives in metres.
- A point that cannot be projected is left out and counted; a file over the size limit is refused with the limit stated.

:::tip
Map coordinates need a map conversion. A file without one is placed on the map with {{ui:Map origin…}}.
:::

:::note
Moving between datums without a grid file is good to a few metres; the Location result says how far when the catalog knows.
:::
