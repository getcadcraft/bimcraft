---
title: Merge two people's edits of one model
summary: Let git, Fossil or Mercurial merge two edited copies of the same IFC model object by object, so two people can draw on one building and join the work.
section: tasks
order: 76
keywords: merge, git, fossil, mercurial, version control, conflict, three-way, cadcraft merge, gitattributes, ifc, globalid, team, two copies, branches
---

Two people take a copy of the same building, one draws the east wing and one the west, and later the copies have to become one. If they touched different objects, a program can do it instead of a person.

## What makes it work

Every wall, door, level, room and property set in an IFC file has a GlobalId that never changes. The merge looks objects up by that id, not by the number the file gives them (`#123`), because numbers change when a program saves. The parts hanging off an object that have no id of their own (placements, shapes, units) are compared by what they contain.

Both copies must be the same IFC version (2x3, 4 or 4.3). The merge keeps your file as it is, its order and its numbers, and adds what is new, so a git diff of the merge shows only what the merge changed.

## Set it up

Git needs two lines once per repository:

```
# .gitattributes
*.ifc merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Without git, run `cadcraft merge <base> <ours> <theirs>`. Fossil and Mercurial take the same three files in their own merge-tool setting. Nothing is uploaded; it all runs on your computer.

## The rules

- An attribute changed on one side only is taken. The same change on both sides is taken once.
- The same attribute changed two ways (the same level renamed two ways) is a **conflict**: your side stays and the report lists both. Open the result and fix it by hand.
- A list of things (the walls of a level, the properties of a set) merges as a set: what either side added is kept and what either side removed is removed. Two people each adding walls to the same level do not conflict.
- An object added on either side is kept, with its shape and properties. Removed on one side and untouched on the other: removed. Removed on one side and changed on the other: removed, and reported.
- The time stamp and author of the file, and each object's owner history, stay yours.

Geometry is merged whole: a wall's shape comes from one side, never mixed point by point. Zipped IFC and IFCX files are not merged. After a merge, open the result in BimCraft and look at the Problems panel before you save.
