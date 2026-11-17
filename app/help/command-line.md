---
title: The command line in the status strip
summary: In a layout with a command line, type anywhere and the letters land in the line at the bottom. It lists what matches, keeps a history, and never covers the drawing.
section: tasks
order: 35
keywords: command line, type anywhere, typed command, status strip, status bar, history, arrow keys, enter, space, WALL, DOOR, Duncan layout, Rhino layout, shortcut, keys, command finder
---

## What you'll do

Run tools by typing their names, without clicking in a box first.

## Steps

1. Choose a layout that has a command line: open {{ui:Settings}}, choose {{ui:Global}}, then {{ui:Layout}}, and pick **Duncan** (or **Rhino**). The line sits in the status strip at the bottom of the window.
2. With the pointer anywhere and no box in use, type `wall`. The letters appear in the command line and a list above it shows the commands that match.
3. Press {{key:Enter}}. The Wall tool starts.
4. Click in the command line (or press a key again). With the line empty, the list shows the commands you typed before. {{key:Up}} and {{key:Down}} walk through them; {{key:Enter}} runs the one shown.

## What you can type

- A command word of the menu style in use, where the style has them (`WALL`, `WA`, `DOOR` in the Drafting style).
- The key of a command, as a word: `W` then {{key:Enter}} or {{key:Space}} is Wall, `D` is Door.
- The name of a command, with or without its spaces: `split wall`, `wallrectangle`.
- The start of a word or name, when only one command starts that way.
- Anything else opens the command finder with what you typed.

## Good to know

- {{key:Esc}} empties the line and gives the keys back to the drawing.
- In these layouts a single letter no longer starts a tool on its own: it waits in the line for {{key:Enter}} or {{key:Space}}. Keys with {{key:Ctrl}}, the function keys, {{key:Delete}} and {{key:Esc}} work as before. In the other layouts nothing changes.
- While a Draw tool runs, digits stay with the tool (a typed length).
- Typing in a box, a dialog or Settings stays there.
- The history is kept on this computer, 50 commands for each app.
