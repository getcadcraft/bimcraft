---
title: Files BimCraft opens and saves
summary: Every format BimCraft opens, what it keeps, what it saves, where saved files go, and what changes between browsers and when you are offline.
section: start
order: 30
keywords: formats, open, save, export, download, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, upload, privacy, file size
---

BimCraft reads files on your computer, in the browser tab. **Nothing is uploaded** to CadCraft or anyone else. When you save, BimCraft hands the browser a new file to download; it never writes over a file you opened.

## What it opens

| Format | Extensions | What you get |
|---|---|---|
| IFC | `.ifc` | The model in 3D, storeys, element counts and every element's properties. Names, tags and single property values can be changed. |
| Project and family files | `.rvt` `.rfa` `.rte` `.rft` | A file card: release, build, worksharing, project information, family parameters, linked files and the preview picture. No 3D. |
| DWG | `.dwg` | The drawing in 2D: model space, every sheet, layers, linked drawings, images and print view. Model space in 3D too. Formats from AutoCAD 2000 to 2018 are the ones checked. |
| DXF | `.dxf` | The same as DWG. |
| STEP | `.step` `.stp` | A part, a piece of equipment or a supplier's model (AP203, AP214, AP242) in 3D: each solid becomes one element (a building element proxy) of a small IFC model on one storey, read as triangles at its true size, an assembly with every part where the file places it. It works like any IFC from there: properties, sections, measure, save as IFC. Colors and the assembly tree are not read. |
| Point clouds | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | The scan in the 3D view, beside a model or on its own: see [Show a point cloud beside the model](topic:point-clouds). |
| Project bundle | `.ccbundle.zip` | The model with its views, layouts and property groups: see [Open a project bundle](topic:open-project-bundle). |
| A folder | any | A report of every model, drawing and project bundle in it. Any IFC, model, drawing or bundle in the report opens with a click. |

[What BimCraft reads from each format](topic:file-formats) goes into detail.

BimCraft decides what a file is by looking at its first bytes as well as its name, so a project file with an unusual extension still opens as a file card.

### Not opened

- `.ifczip` and `.ifcxml`: BimCraft says ".ifczip is not supported yet. Save or export the model as a plain .ifc file." Unzip the `.ifczip` (it holds a plain `.ifc`) or export again as plain IFC.
- DGN drawings are listed in a folder report but do not open.
- PDF, images and office files do not open on their own. Images are used as pictures inside a DWG, and {{ui:Build}} › {{ui:From a drawing…}} turns the pages of a PDF or a scan into walls: see [Walls from a set of plans](topic:walls-from-plans).

## What it saves

| You click | You get | Where |
|---|---|---|
| {{ui:Save as IFC}} | A new IFC file with your edits, named "*original name* (edited).ifc" | Your browser's downloads folder |
| {{ui:Download CSV}} in the equipment schedule | A CSV of the items in the list, named "*drawing name* equipment.csv" | Your browser's downloads folder |

Other things are saved where they are made, each in its own topic: {{ui:USD}} ([Export the model as USD](topic:usd)), {{ui:Collada}} (.dae and the Google Earth .kmz: [Export the model as Collada or for Google Earth](topic:collada)), the .glb {{ui:For rendering}}, rendered pictures, sheets and plans as PDF, schedules and lists as CSV, BCF issues, the COBie spreadsheet, family files, and registered scans as LAS or E57. BimCraft does not save DWG, DXF or project files, and it never changes the files you opened.

:::chromium
Chrome and Edge save downloads to the folder set in their settings, usually Downloads. To be asked where to save each time, turn on "Ask where to save each file before downloading" in the browser's download settings.
:::

:::firefox
Firefox saves to the Downloads folder unless you set it to "Always ask you where to save files" in its settings.
:::

:::safari
Safari saves to Downloads unless you choose another folder under **Safari > Settings > General > File download location**.
:::

## Saving a second time

Each save downloads the whole model with **every edit since you opened it**, not only the edits made after the last save. The {{ui:Changes}} list starts empty again after each save, so you cannot undo past a save. To start again from the original, open the original file again.

## Large files and memory

- **IFC** files are read completely into the tab's memory, and the 3D geometry takes more memory on top. A model of a few hundred megabytes can be too much for a laptop. Above 1.5 million triangles, edges are turned off to save memory ("Edges are off for very large models").
- **Project files** are not read in full. BimCraft reads only the small parts it needs, about 40 KB to 100 KB however large the file is, so a 500 MB central model on a network drive opens in a moment.
- **DWG and DXF** files are read completely. A very large drawing shows "This drawing is very large; only part of it is shown."
- **Folders** up to 20,000 files open. Only the few kilobytes each model card needs are read.

See [Browsers, devices and memory](topic:platforms) for more.

## Online and offline

Opening files never needs the internet. One reader loads from the site the first time you need it: the IFC engine, the first time you open an IFC model ("Starting the IFC engine…"). The DWG and DXF readers are part of the app.

:::offline
You are offline. If the app bar's button says {{ui:Offline ready}}, every format opens as usual. If not, an IFC model cannot open unless one already opened in this tab: reconnect first. See [Online and offline](topic:online-offline).
:::

To use BimCraft with no connection, click {{ui:Save for offline}} in the app bar while you are online and wait for {{ui:Offline ready}}. The saved copy is about 33 MB; it includes the IFC engine, so IFC models open offline too. [Working offline](common:offline) explains saved copies in general.

## Cloud saving

Cloud saving is not available yet. Save your edited copies on your own computer or your office's file server, as you would any other file. See [Your files](common:your-files).
