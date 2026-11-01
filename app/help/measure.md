---
title: Measure distances, face areas and locations in 3D
summary: Measure between two points of an IFC model with snapping to corners and edges, read the difference along X, Y and Z, and measure the area of a flat face.
section: tasks
order: 28
keywords: measure, measurement, distance, length, dimension, area, face area, snap, corner, edge, tape, ruler, clearance, location, latitude, longitude, lat long, coordinates, georeference, map conversion, EPSG, survey, eastings, northings, WGS 84, datum
---

## What you'll do

Check a clearance, a wall length or the size of a face straight from the model, without opening the authoring program.

## Steps

1. Open an IFC model.
2. Click {{ui:Measure}} in the toolbar, or press {{key:M}}. A bar opens at the bottom of the view.
3. **A distance:** with {{ui:Distance}} chosen, click the first point, then the second. Near a corner the pointer snaps to it, near an edge onto the edge; the small label at the pointer says which. Each pair of clicks makes one measurement.
4. **A face's area:** choose {{ui:Face area}} and click a face. The whole flat face lights up and its area shows.
5. **Straight lines:** hold {{key:Shift}} while you pick the second point, or press {{ui:Straight}} in the bar to keep it on. The line then runs along the one axis the pointer is nearest to (in a top view, along X or Y of the plan; in other views along X, Y or Z), and the pointer label says "straight along an axis". {{key:M}} still starts and stops Measure.
6. Click {{ui:Clear}} to remove the measurements, or {{ui:Done}} (or {{key:Esc}}) to stop measuring.

## What you should see

- A line between the two points with its length on it, and in the bar the length with how far it goes along X, Y and Z (in the model's axes, Z up), all in the {{ui:Units}} chosen on the toolbar.
- A face's area in square metres, on the face and in the bar.
- Labels stay on their measurements while you orbit, pan and zoom.
- While you measure, clicks do not pick elements. A section plane or box still cuts the model, and you can measure what it shows, cut faces included.

## Where a point is on the earth

Click {{ui:Location}} in the measure bar, then click a point on the model (it snaps to corners and edges as distances do). The bar shows:

- the **latitude and longitude**, in decimal degrees and in degrees, minutes and seconds, in WGS 84 to start;
- the **map coordinates** (eastings and northings, written in the {{ui:Units}} chosen on the toolbar) in the model's own map system, for example `EPSG:28356`;
- the **height** and the vertical datum the file names, and the file's **own datum** (for example GDA94).

{{ui:Copy}} puts it all on the clipboard in one line. Change the system the latitude and longitude are in under {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}}: WGS 84 (as GPS and web maps), the file's own datum, or another common one such as ETRS89 or NAD83.

This needs a georeferenced model: one exported with map coordinates (a map conversion to a projected system with an EPSG code). A model that only has a site latitude and longitude gets an approximate position, worked out from the site's point and its true north, and the bar says so. With several models open, each point uses the georeference of its own model.

:::note
Moving between datums (for example GDA94 to WGS 84) is done without grid files, so it is good to a few metres; the status line says how good. The map coordinates themselves are exact.
:::

## Common mistakes

- **"…has no georeference".** The file has no map conversion and no site latitude and longitude. Export it again with its coordinate system set (shared coordinates / survey point in the authoring tool).
- **Map coordinates but no latitude and longitude.** The file names its map system without an EPSG code, or with one that is not in the list; the status line says which.

- **The point lands on the face, not the corner.** Snapping looks at the element under the pointer. Move closer to the corner, or zoom in.
- **The area is smaller than expected.** Openings are left out, and a face that bends is several faces: click each.
- **{{key:Esc}} stopped measuring.** The first {{key:Esc}} drops a half-made distance; the second stops.

## Next

- [Cut an IFC model with a section plane](topic:section-plane)
- [Hide, isolate and see through elements](topic:hide-and-isolate)
