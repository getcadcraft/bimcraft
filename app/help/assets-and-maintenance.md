---
title: Keep asset data and a maintenance record in the model
summary: Use the handed-over IFC model for running the building: maker, model, serial number, warranty and service life for equipment and fixtures, and a record of the maintenance done, all written into the IFC.
section: tasks
order: 47
keywords: handover, completion certificate, occupancy certificate, as-built, handover package, assets, asset register, facility management, fm, operations, maintenance, service, warranty, serial number, barcode, maker, manufacturer, model, service life, handover, cobie, digital twin, overdue, due, work order
---

The {{ui:Assets}} tab in the right panel turns the open IFC model into a record of the building's equipment. Everything is written into the IFC itself, in IFC's own property sets and tasks, so the next program that opens the file reads it too. Nothing is uploaded and no server is needed: save the IFC to keep it.

## What is listed

- Equipment and fixtures: furniture, sanitary fixtures, light fixtures, appliances, air terminals, valves, pumps, fans, boilers, tanks, outlets, switchboards, lifts and other such elements, and library items with equipment data.
- Any other element you **track**: pick it in the model (a door, a wall, a pump drawn as a plain object) and click {{ui:Track picked}}.
- Anything that already has asset data or a maintenance task, written here or by another program.

What is overdue comes first, then what is due within 30 days. Filter by name, tag, maker, model or serial number, by level, or tick {{ui:Only overdue or due within 30 days}}.

## Asset data

Click an asset in the list (or pick it in the model) to open its data: maker, model, model reference, serial number, barcode, the day it was installed, the warranty number and its start and end, and its service life in years. {{ui:Save the data}} writes them in one step ({{key:Mod+Z}} undoes it). Leave a box empty to remove that value.

## Documents

Under the data, {{ui:Documents}} lists the manuals, warranties, photos, certificates and drawings linked to the asset. Pick the kind, give it a title (or leave it empty: the file name is used) and type where it is:

- a **web address** (`https://…`): it gets an Open link, which opens in a new tab;
- or a **file name or path** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, a network share): keep the files beside the IFC, in the same folder or one under it, so the names still work when you hand the folder over. BimCraft shows the name; open the file from the folder.

The files themselves are never uploaded or copied into the IFC: only the link is written. A web address with a password in it, and any link that is not a web address or a file (such as `javascript:`), are refused. {{ui:Remove}} takes a document off the asset (one step; {{key:Mod+Z}} undoes it).

Documents another program put on the element are listed too. Documents on the element's **type** show on every element of that type and say so; change those where the type was made.

In the IFC each document is an IFC document reference tied to the element, with its kind kept on that tie, in IFC4 and IFC2X3 alike.

## The maintenance record

Under the documents, {{ui:Record work done}}: the day it was done, the work, who did it, when it is next due and notes. Each entry is one step; {{ui:Edit}} and {{ui:Delete}} change it later. The newest entry's next due date decides whether the asset is overdue or due soon.

## How it is kept in the IFC

- Maker and model in `Pset_ManufacturerTypeInformation`, serial number, barcode and the installed day in `Pset_ManufacturerOccurrence`, the warranty in `Pset_Warranty`, the service life in `Pset_ServiceLife`, on the element itself. When the element's type already carries a maker or model, it shows until you type your own.
- Each maintenance entry is an IFC **task** of the maintenance kind, tied to the element, with its dates (in IFC4 also as the task's own times) and a `CadCraft_Maintenance` set with the day, who did it and the next due day.
- Values another element shares are copied first: changing one asset never changes its neighbours.
- In older IFC2X3 files the dates are written as text (YYYY-MM-DD); that version wants a separate date record there, which BimCraft does not write.

## Sensor readings

Open {{ui:Sensor values}} and {{ui:Open readings (CSV)…}} to bring in readings exported from a building management system, a data logger or a spreadsheet:

- The **first column is the time**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` or Unix seconds. A time without a zone is read in your computer's own time zone. Day-first dates such as `23/10/2026` are not read (they are ambiguous); export ISO dates.
- **Every other column is one sensor**, headed by its asset's **tag**, **name** or **GlobalId**. A heading that matches no asset, or more than one, is listed and left out. Commas, semicolons or tabs separate the columns; with semicolons or tabs a decimal comma (`21,5`) is read too.
- Times or values that do not read (a word, a unit typed into the cell) are counted and left out, never guessed.

The latest reading shows in the list's {{ui:Reading}} column and in the asset's {{ui:Sensor}} block, with a **chart** of every reading (on a phone, charts wait until you tap {{ui:Show the chart}}). Set a **low and high limit** and a unit on an asset and {{ui:Save the limits}}: a reading outside them flags the asset. Tick {{ui:Show on the model}} to paint each asset by its reading — blue below its low limit, green within its limits, red above its high limit, and, for assets with no limits, a single blue scale from the lowest to the highest reading — with its reading as a label (up to 60 labels, flagged ones first).

**Readings stay in this browser tab**: they are not saved in the IFC and not sent anywhere; open the CSV again next time. The **limits are saved in the IFC** (a `CadCraft_Sensor` set on the element: Low, High, Unit), so the next person who opens the file sees the same flags.

## Live readings

{{ui:Live feed}} reads values as they happen, **straight from this browser to your own system**. Nothing passes through our server and nothing is stored anywhere but your browser tab. Nothing connects when a file opens: only {{ui:Connect}} does.

- **MQTT over WebSockets**: the address of your broker's WebSocket listener (`wss://broker.example.com:8884/mqtt`), and one or more topics with `{tag}` where the asset's tag goes, for example `site/{tag}/temperature` (BimCraft subscribes to `site/+/temperature` and reads the tag from each message's topic). Topics without `{tag}` name the sensor themselves. A message is either a plain number (`21.5`) or JSON such as `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (set {{ui:Value field in JSON}} if yours is called something else).
- **Ask an address (HTTP)**: a web address your building management system or a small script of yours answers, asked every so many seconds (5 at the least). It may answer with JSON keyed by tag (`{"AHU-1": 21.5}`), a JSON list (`[{"tag": "AHU-1", "value": 21.5}]`), or a CSV of readings like the one above. If it does not answer, BimCraft waits twice as long before asking again, up to five minutes.

Each reading goes to the asset whose tag, name or GlobalId it names, exactly as a CSV column would; names that match no asset are listed. The readings join the {{ui:Sensor values}}: the list, the charts, the limits and the colours on the model work the same.

**Your password or token** is typed for one connection: it is handed to the connection and the box is emptied; it is never saved in this browser or in the IFC. A token goes as a standard `Authorization: Bearer` header, and no cookies are sent.

{{ui:Keep these settings in the IFC}} writes the address, the topics, the value field and how often to ask into the model (a `CadCraft_Feed` set on the project; there is no field for a password), so the next person who opens the file only types their own login and clicks {{ui:Connect}}. Do not put a password or a key in the address itself: an address with a user name and password in it is refused.

:::note
**What your broker or address needs.** A browser page can only talk to a server that allows it:
- The page is secure (https), so the browser only connects to `wss://` and `https://` addresses — except on your own computer (`localhost`), where `ws://` and `http://` work for testing.
- An HTTP address must allow requests from this page (CORS: the header `Access-Control-Allow-Origin`, and `Authorization` among the allowed headers if you use a token).
- Most brokers (Mosquitto, EMQX, HiveMQ and others) offer a WebSocket listener; it is often off until switched on. BimCraft speaks MQTT 3.1.1.
:::

There are **no alerts** when BimCraft is closed: limits flag an asset while the model is open with a feed connected. Watching a building around the clock needs a server, which BimCraft does not run.

## COBie spreadsheet

**COBie** is the handover spreadsheet many owners and facility teams ask for (published by the National BIM Standard in the US; BS 1192-4 in the UK). Open {{ui:COBie spreadsheet}} in the tab:

- {{ui:Save as COBie (.xlsx)}} writes the COBie 2.4 sheets — Contact, Facility, Floor, Space, Type, Component, System, Job, Document and Attribute — from the model and the asset data: the building, its levels and rooms (areas from the model's quantities), every asset as a component with its serial number, installed day, warranty start, tag and barcode, its type with maker, model, service life and warranty length, the systems it belongs to, the maintenance record as jobs and the linked documents. Each component carries the element's IFC GlobalId. Type your email address for COBie's "created by" column, or leave it empty (it then says n/a). Values the model does not have say **n/a**; the category columns carry the IFC class, not an OmniClass code.
- {{ui:Read a COBie spreadsheet…}} reads one back, from BimCraft or another program, and **lists every change first**: which asset, which value, from what to what, and new documents. {{ui:Apply}} writes them all in one step ({{key:Mod+Z}} undoes it). Rows are matched by the GlobalId, then by the component's name. Rows that match nothing in the model are listed, not added.

A spreadsheet is treated as untrusted: formulas are never read or run (only the value last saved in the cell), a value that would make a warranty end before it starts and a document link that is not a web address or a file name are left out and counted, and very large workbooks are refused. COBie's jobs are a type's planned work, so they are written out but not read back. In the spreadsheet BimCraft writes, text that a spreadsheet could take for a formula (starting with `=`, `+`, `-` or `@`) is marked as text.

The workbook is checked in our tests against an independent spreadsheet reader; it has not been through a COBie validator. If a receiving team runs one, tell us what it says.

## Handover documents

The papers that go to the owner with the finished building belong to the project, not to one asset. On the {{ui:Assets}} tab, open {{ui:Handover documents}}:

1. {{ui:Add a document}}, choose its kind (completion certificate, occupancy certificate, warranty, manual, as-built drawings, other), and type its title, date of issue, who issued it and its reference number.
2. Say where it is: a web address, a file name kept beside the IFC, or {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} and {{ui:Remove}} change the list; each is one step you can undo.

{{ui:Build the handover package}} downloads one zip: a cover page listing every document, the same list as a spreadsheet, the COBie workbook (the documents are on its Document sheet, as rows about the Facility), the model, and each attached file. A completion or occupancy certificate that is not in the list yet is named on the cover; the package is built all the same.

The model in the package is the **as-built model**: it states which elements were measured on site. With it, in the folder `as-built`: the statement, a list of every element with its verification state, the drawing set as it is now as one PDF (the as-built drawings), and the drawing changelog when the model has issued sets. See [Mark elements as checked or field-verified](topic:verification).

- In the IFC file each document is an IfcDocumentInformation tied to the project (IfcRelAssociatesDocument), with its title, reference, date, issuer and place, so other programs list it.
- An attached file is recorded by name, size and SHA-256. To keep the file itself with the project, use {{ui:Save the project as a bundle}} (a .ccbundle holds the model and the attached files; opening it gives them back, each checked against its record). An ordinary save asks which you want.
- A plain .ifc keeps the record, not the file: after opening it, use {{ui:Attach the file again}}. The same file is recognised; a different one replaces the record.

## CSV

{{ui:CSV}} saves every asset with its data, every maintenance entry and every document, one row each, for a spreadsheet or another maintenance program.

:::note
Not built: a hosted service that keeps readings and sends alerts while BimCraft is closed, and reading COBie's jobs back. See [Not built yet](topic:not-built-yet).
:::
