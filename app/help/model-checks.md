---
title: Check a model for common problems
summary: Find elements missing a property you need, GlobalIds used twice, elements on no storey and copies stacked on top of each other.
section: tasks
order: 32
keywords: check, model check, validation, qa, quality, missing property, required, duplicate, globalid, guid, storey, stacked, overlap
---

## What you'll do

Look over a model before you hand it on: the problems that break schedules, quantities and other people's software.

## Steps

1. Open an IFC model.
2. Open {{ui:Model checks}} in the left panel.
3. Under {{ui:Required properties}} a rule is already there (any class, Name). Change its class (or {{ui:Any class}}) and property, or click {{ui:Add a property}} for another rule; the x removes one. An element fails a rule when the property is missing or empty. The rules stay in this browser for every model.
4. Click {{ui:Run checks}}.
5. Click a result to pick those elements and zoom to them.

## What you should see

- **Missing a required property**: each rule with the elements that have no value for it.
- **GlobalId used twice**: elements sharing one GlobalId. Other software treats them as one element.
- **On no storey**: elements with a shape that no storey contains.
- **Copies on top of each other**: elements of the same class and type with the same shape in the same place, which count twice in quantities.

Each line in the results is a button: click it to pick and zoom to those elements. Only the first 50 groups of a check are listed. The same findings also appear in {{ui:Problems}}.

## Good to know

- Checks look at the active model when several are open. See [See several IFC models together](topic:several-models).
- After an edit, run the checks again.
- In the {{ui:Problems}} panel, lengths, areas and volumes in a problem's words follow the {{ui:Units}} picked in the toolbar (an "800 mm" door reads 2'-7 1/2" in feet and inches); change the unit and the panel rewords them.

## Next

- [Audit the model: rooms, tags, LOD, clashes and interfaces](topic:audit-the-model)
- [Find elements by class, name or property](topic:find)
- [Delete, cut, copy and paste elements](topic:copy-paste)
