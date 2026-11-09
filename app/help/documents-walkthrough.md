---
title: Documents and revisions (the vault)
summary: A step-by-step walk through one real job: put a project folder of IFC models under control, check a model out, change it, check it in with a note, send it for review, approve and release it, see the history and what uses it, what a second person sees while it is locked, and how it works with cloud folders.
section: tasks
order: 119
keywords: vault, documents, walkthrough, tutorial, check out, check in, revision, release, approve, lock, history, where used, ifc, model, cloud folder, project folder, two people, shared folder
---

## What you will do

You are Ana, working on the Riverside Clinic with a colleague, Ben. The project's IFC models live in one folder that you both reach (a shared drive, a synced folder, or a cloud folder). By the end, one file has gone from its first copy to a released revision **A**, has been changed again as **B.1**, you have seen who did what, and you have seen what Ben sees when you hold the file.

Everything is kept in a hidden `.ccvault` folder beside your files: no server, nothing uploaded (a cloud folder is the exception, see the last step). For every button and rule in one place, see the topic *Documents: check out, revisions and release* where your app has it.

## 1. Set up the project folder

1. Choose {{ui:Documents}} beside {{ui:Open a folder}} on the start screen, or {{ui:Documents…}} in the **File** menu.
2. Choose {{ui:Choose the project folder}} and pick the folder that holds the project's IFC models. (Project folders work in Studio and in browsers that can open a folder, such as Chrome and Edge. In other browsers the panel says so.)
3. Choose {{ui:Change}} beside **You:** and type your name, `Ana` (if it asks, also the name of this computer). The panel now says *You: Ana on* and your computer. Your name goes on everything you do.
4. Choose {{ui:Start a vault in this folder}} and type the project's name, `Riverside clinic`. The panel says *Vault started for Riverside clinic.*

## 2. Bring a file under control

1. Open **Files not in the vault** and choose {{ui:Add}} beside `models/House.ifc`.
2. It appears under **Files in the vault** at revision **A.1**, state **Work in progress**. A.1 is its first copy; the vault keeps a copy of every revision.

## 3. Check out, change, check in

1. Choose {{ui:Open}} beside `models/House.ifc`. The model opens in BimCraft and the panel closes so you can see it. Open the panel again from {{ui:Documents}}.
2. Open the panel again and choose {{ui:Check out}}. The row now says **Checked out to you**. A lock file has been made in `.ccvault/locks`; nobody else can check this file out until you check it in.
3. Change the model: move a wall, add a door. Save is refused unless the model is checked out to you, and says why; Save As always works for a copy of your own.
4. Open the panel, choose {{ui:Check in}} and type what changed (`Moved the door`). The panel says *checked in as A.2*. The file in the project folder is now the model you had open, and the lock is gone. Checking in with no change keeps the revision.

If you change your mind, {{ui:Undo check-out}} gives the file back without a new revision.

## 4. Review and release

1. Choose {{ui:Send for review}}. The state becomes **For review** and the file is read-only.
2. Before approving, choose {{ui:Project settings}} and list who may approve (one name per line), for example `Ben` and `Carla`, and tick the rule that the approver must be someone other than the author. Choose {{ui:Save settings}}. Now the vault itself refuses anyone else.
3. Ben (or Carla) chooses {{ui:Approve}} and types the approver's name. The state becomes **Released** and the revision becomes **A**, with *approved by* and the name. A released file is read-only. {{ui:Send back}} would have returned it to Work in progress, with a reason.

The approver's name is the name typed in the panel; it is a record of who signed off, not a proof of identity.

## 5. A new revision

1. On the released file, choose {{ui:New revision}}. You hold it for the next letter.
2. Change it, then {{ui:Check in}}. The revision is **B.1**, work in progress. Release it the same way and it becomes **B**. {{ui:Undo check-out}} before the first check-in leaves it at **A**.

Revision letters run A, B … Z, AA, AB. If your standard leaves some letters out, the project setting *Use the ASME Y14.35 sequence* skips I, O, Q, S, X and Z for the next revisions.

## 6. See what happened

Choose the file's name to open its details:

- **{{ui:History}}**: every event, newest first, with who, which computer and when: *Checked in A.2* by Ana, *Released* by Ben, and so on.
- **{{ui:Revisions}}**: the revision table: every revision kept, with its date, who checked it in, the note, and who approved it. The vault keeps a copy of each in `.ccvault/revs`.
- **{{ui:Uses}}**: the documents an IFC model points to.
- **{{ui:Used by}}**: Used by lists every model in the vault that points to this file.

## Models that point to other documents

An IFC model that points to other documents in the folder (drawings, schedules) shows them under **Uses**, and each of those shows the model under **Used by**. Check a document in and you can see which models refer to it.

## 7. What Ben sees while you hold the file

Now check the file out again, and ask Ben to open the same project folder on his computer and open the panel. On the file's row he sees **Checked out by Ana on** your computer **since** the time, and no {{ui:Check out}} button. If he tries anyway the vault refuses: the lock is a file the system will not make twice, so two people cannot both hold the file, even in the same split second, when the folder is on disk in Studio. (In a browser the folder only allows a best effort, and the panel says so under **Folder**.)

If Ana is away and Ben needs the file, {{ui:Break check-out}} frees it. He must type a reason; it goes in the log with whose check-out it was. When the project lists admins, only they can. A check-out older than the stale limit (14 days by default) is marked *a long time*. After the break, Ana's late check-in is refused, so the two of you cannot overwrite each other.

## 8. Cloud folders

A cloud folder is a project folder kept in your team's cloud storage, so the team needs no shared drive. In Studio, signed in to your CadCraft account, the panel shows {{ui:Open a cloud folder}} beside {{ui:Choose the project folder}}. Choose it and pick the folder, listed as workspace / folder. A workspace owner makes the folder first, and the team's cloud storage must be in force. Everything above works the same; the server makes the lock, which is strict across people. If you are not signed in the panel says to sign in. In an ordinary browser tab the cloud button is not offered; use Studio.

## Try it

Do the eight steps above with a copy of a real file. For the two-person steps you need another person, or two windows with two names. If you do try it with a real shared folder, the Community testing page lists a check that asks exactly this, and takes results.
