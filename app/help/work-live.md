---
title: Work on one model together with Live TeamWork
summary: What changes in BimCraft while you are in a Live TeamWork session from CadCraft Studio: everyone's edits to the same IFC model, your own undo, and joining from a browser on the same network.
section: tasks
order: 199
keywords: live, live teamwork, studio live, together, collaborate, session, share live, join, ifc, properties, rename, undo, host
---

## What you will learn

What happens to an IFC model while several people edit it at the same time. CadCraft Studio starts and joins the Live TeamWork session (Share, Join); this page is about the model itself.

## Everyone edits at once

The host's model comes to everyone who joins. Rename elements, change their property values, place, swap or remove library items and elements as usual. Your own edits show at once; other people's appear a moment after they make them. When an edit changes what you see (an element placed or removed), BimCraft redraws the model and keeps your view.

- **Two people change one element:** the later change to the same line of the model wins. A property set shared by several elements is copied for the element you edit, as always, so the others keep their values.
- **An element someone just removed** can't be edited any more: your edit is taken back, and the status bar says why.
- Each person's new lines in the model get numbers of their own, so two people never make the same one.

## Undo undoes your own work

{{ui:Undo}} undoes your own last edit and leaves everyone else's alone. When someone changed the same thing since, nothing is undone and the status bar says who.

## Join from a browser

A teammate without Studio can scan the picture under the host's code with a phone, tablet or computer on the same network. BimCraft opens in the browser and opens the host's model once the host lets you in. Invite links, for joining from another network, are not open yet.

## When the session ends

Only the host saves the model. Everyone else keeps an unsaved copy: Save as IFC if you want to keep it.

:::note
Only the first model in the scene is shared. Opening another file during a session leaves the session in that window.
:::
