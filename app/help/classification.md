---
title: Classification codes (Uniclass, OmniClass, UniFormat)
summary: Give every element and type a classification code, choose which systems a project uses, search the Uniclass tables that come with the app, load your office's own licensed tables, and show the codes in schedules. The codes are written into the IFC file for other software.
section: tasks
order: 18
keywords: classification, classify, code, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, table, element code, type code, default code, IfcClassification, IfcClassificationReference, cobie, schedule column, csv, licence, license
---

## What you'll do

Put a classification code on walls, floors, roofs, doors, windows and anything else in the model, in up to three systems side by side: Uniclass, OmniClass and UniFormat. Other disciplines and other software rely on the code, not on the name, so the codes are saved in the IFC file as classification references that any BIM program reads.

## Give an element a code

1. Select an element (or several) and open **Properties**. Open the {{ui:Classification}} section.
2. Type the code in the box of its system and press Enter. With a code list loaded, type part of a code or a few words ("curtain wall") and pick from the matches: the code's title is filled in for you.
3. {{ui:Applies to}} says where the code goes: **This element**, or **Its type (every element of the type)**. A code on a wall type is read by every wall of that type, also the ones you draw later.
4. {{ui:Clear}} takes a code away.

Under each code the section says where it comes from: set on this element, from its type, or the project default for its class. An element's own code always wins over its type's, and the type's over a default. With several elements selected, a box that says "varies" means they do not share one code; typing one gives it to all of them. Each change is one undo step.

A code can always be typed, whether a list is loaded or not. If it does not look like a code of that system, or is not in the loaded list, a hint says so and the code is kept as you typed it.

## Choose the project's systems

Open **Data** on the model bar and choose {{ui:Classification}} (or {{ui:Project classification…}} in the Properties section).

- Tick the systems this project uses. Properties then shows only those.
- **Uniclass**: the Elements/ functions (EF), Systems (Ss) and Products (Pr) tables come with the app. They are © NBS, licensed Creative Commons Attribution-NoDerivatives 4.0, and are passed on unchanged. The dialog shows each table's edition and the day it was read. They are not the newest tables: the publisher issues new ones each quarter on its own site.
- **OmniClass** and **UniFormat**: no code list comes with the app, because their publisher does not allow the tables to be passed on without a licence. Type any code, or load your office's own licensed table.
- {{ui:Load a table (CSV)…}} reads your office's own table from a CSV file with a code column and a title column (a header row named Code, Number or Identifier and Title, Name or Description is found by itself; without one the first two columns are used). The table stays in this browser and is never put into the project file. Only the codes you assign are saved in the file. You can load a newer Uniclass table the same way.
- {{ui:Give elements a default code by their class}} gives every wall, floor, roof, door, window, stair, ramp, column, beam and piece of furniture a starting Uniclass code from the Elements/ functions table when it has none of its own. Elements you draw afterwards get it too.
- {{ui:Show the codes as columns in the schedules}} adds one column per system to the Doors, Windows, Walls by type and Rooms schedules and their CSV. A row of several elements shows "varies" when their codes differ.

## Good to know

- The default codes are CadCraft's own starting choice, not the publisher's, and have not been checked by a practitioner. Check them against your project's standard.
- In the file a default is a real classification, marked with the relation name "CadCraft default", and it goes as soon as the element or its type gets a code of its own.
- Codes that an imported file already has are read and shown, whatever spelling the other program used for the system's name. Codes of any other system (an office's own) are listed and left alone.
- The codes are read back when the file is opened again, here or in another program. They are also carried into the IFC5 alpha (IFCX) export when that lab option is on, except a code set on a roof.
- Not built: a tree to browse a table level by level, codes on levels and rooms as project defaults, and checking a code against the edition named in the file.
