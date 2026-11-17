---
title: Write the specification from the model
summary: One specification section for each wall, door, window, floor and finish type in use, with its facts read from the model and your own text, made into a PDF or Word document.
section: tasks
order: 23
keywords: specification, spec, working drawings, stage 5, construction documents, section, wall type, door type, window type, finish, classification, uniclass, omniclass, masterformat, document, pdf, word, docx, schedules
---

## What you'll do

Get a specification that follows the model: a section for every type that is really in the building, each with its build-up and quantities read from the model, and the text you write for it.

## Steps

1. Turn {{ui:Draw}} on, open **Schedules** in the left panel and click **Specification**.
2. The dialog lists one section for each wall type, door type, window type, floor and room finish in use. Under each heading are its **facts**, read from the model: thickness, the layers one by one, the level of development, sizes, how many and how much. A section whose elements carry a classification code shows the code in its heading.
3. Write your specification text in the box under a section. **Select its elements** shows what the section is about.
4. Click **Save**. It is one step in Undo, and the text is kept in the building file.
5. Open **Documents from the model**, choose the **Specification** template and click **Preview**, then save it as PDF, Word or Markdown. See [Documents from the model](topic:documents-from-the-model).

## The working-drawing schedules as a document

The **Working drawing schedules** template prints the door, window and finish schedules straight from the model, in your office layout. In your own template write `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, or the name of a saved set-up, for example `{{schedule Door schedule by floor}}`. `{{specification}}` prints the specification.

## Good to know

- The facts are the model's. They change when the model changes; your text does not.
- BimCraft writes no clause of any standard and no manufacturer's text. A section with no text prints "No specification text written yet."
- Text written for a type that is no longer in the model is kept and listed under "Text for types no longer in the model".
- To change a generic type for a specific build-up, see [Wall tools](topic:wall-tools) (Swap type).
