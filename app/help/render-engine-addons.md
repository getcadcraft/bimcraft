---
title: Add a render engine with an add-on
summary: What an add-on can add to the Render dialog's Engine list, the permission it needs to run a program, and what Studio checks and asks.
section: reference
order: 37
keywords: add-on, addon, engine, render engine, developer, engine.run, permission, program, script, signed, studio, api
---

An add-on (Settings › Add-ons) can add an engine to the Engine list of {{ui:Render}}. The full text for add-on authors is section 16 of the add-on specification; in short:

- The add-on registers an engine with an id that starts with its own, a name, optional settings and **either** a program to run **or** a function in JavaScript that draws the picture.
- An engine that runs a program needs the **`engine.run`** permission, shown before install and in Settings. It runs only in Studio; in the browser it shows as a file to save.
- The add-on names the program (a plain file name: never a shell), a script that is **inside the signed add-on**, and arguments made of placeholders and plain words. Studio finds the program or asks you to point at it once.
- The first time an add-on runs a program, **Studio asks you in its own dialog**: which add-on, which program, and that a script can do anything the program can. Only allow it for an add-on you trust. Your answer is remembered for that add-on and program.
- The package (the scene as USD and a settings file, with the glTF file when the add-on asks for it) and the add-on's script go into a fresh temporary folder, the program runs there, and the picture comes back marked with the add-on's engine name.

:::note
Add-ons can only add render engines from add-on API 1.4. A worked example for an open-source command-line renderer is in its own repository; it has not been run in that renderer yet.
:::
