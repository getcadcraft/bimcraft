---
title: Save views and walkthroughs
summary: Keep camera views of the model by name, go back to them, play them one after another, and record a walk through the building to play back.
section: tasks
order: 34
keywords: views, saved views, camera, cameras, viewpoint, scene, scenes, tour, presentation, walkthrough, walk through, fly through, record, play, path, animation
---

{{ui:Views}} on the toolbar keeps cameras of the 3D view in the model's file, so you and anyone you send it to can go straight back to them.

## Save a view

1. Set up the 3D view: orbit, zoom, hide what you don't want.
2. Click {{ui:Views}}, type a name (or keep the one offered) and click {{ui:Save view}} or press {{key:Enter}}.

Saving with a name that is already in the list updates that view. Click a view's name to go back to it; the camera moves there smoothly.

The arrows change the order, the pencil renames, the bin deletes. Each change is one step, so {{key:Ctrl+Z}} undoes it.

## Play the views

{{ui:Play the views}} moves from one view to the next in the list's order, stopping a moment at each. {{key:Esc}} or {{ui:Stop}} ends it.

## Record a walkthrough

1. Turn on [Walk](topic:walk) and start walking inside the building.
2. In {{ui:Views}}, click {{ui:Record a walk}}.
3. Walk with {{key:W}} {{key:A}} {{key:S}} {{key:D}} and look round with the mouse.
4. Click {{ui:Stop recording}}. The walk is saved as "Walk 1", with its length.

Click a walk to play it back as you walked it. {{key:Esc}} stops it.

## Render a walkthrough as a video

Click the film icon beside a walk. The video dialog draws every frame of the walk with the Render settings you chose last, at the size, frame rate and quality you pick here. Save it as a WebM or MP4 video, or as a ZIP with one picture per frame. Frames take as long as pictures do, so start with {{ui:Quick}}.

## Narrate a walkthrough

Click the speech-bubble icon beside a walk. Write one line for each thing said, and start a line with the time it starts (`12`, `0:12` or `1:02.5`); a line with no time follows the line above after the time it takes to say it. Pick the language, in the client's language if that is who will watch. {{ui:Preview}} plays the words with this computer's own voice and shows them as subtitles; the same happens whenever the walk plays. {{ui:Save with the walk}} keeps the narration in the IFC with the walk.

Your own connected assistant can write the narration for you: ask it to look at the walk and the saved views, and it sets the lines in the language you name, as one undo step.

The rendered video has no sound of its own, because a browser cannot record its own voice. Save the subtitles (`.srt` or `.vtt`) and add them to the video in your video player or editor. Which voices you can pick depends on the computer: a language with no voice installed still gets the subtitles.

## In the file

Views and walks are kept in the IFC as the property set `CadCraft_Views` on the project: plain IFC that other programs ignore. They are in the first model's coordinates, so they still fit after the model is reloaded or another model is added.

:::tip
To render a picture from a saved view, go to the view, then click [Render](topic:render).
:::
