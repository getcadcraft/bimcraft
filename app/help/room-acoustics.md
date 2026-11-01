---
title: Check a room's reverberation and listen to it
summary: Reverberation time by octave band for each room (Sabine and Eyring) from its size and finishes, a target of your own, and a voice, a clap or music played through a computed impulse response of the room.
section: tasks
order: 61
keywords: acoustics, reverberation, reverb time, rt60, sabine, eyring, absorption, echo, sound, listen, impulse response, speech, classroom, office, carpet, ceiling tile, noise
---

The {{ui:Room acoustics}} section of the left panel works out how long sound lingers in each room. It reads each room's floor area, height, walls, doors and windows from the open IFC model. Nothing in the model is changed.

## Choose the finishes

Where the model says what is on a surface, the room reads it: the inside layer of each wall's type (gypsum, plaster, brick, concrete and block are known), the floor's kind (wood or concrete) and whether a ceiling is tiled. The label beside each choice says whether it is from the model, a default, or your pick; pick a different finish to override it. Anything the model does not say stays at the default. The coefficients are **typical published values**; replace them with a product's test data when you have it. Type a **target** (the longest mid-frequency reverberation you want) and any room over it is a warning, with the absorption that would bring it down.

## Read the table

Reverberation is given for 125 Hz to 4 kHz. Sabine suits live rooms and Eyring dead ones; the line marked *Used* takes Eyring where the average absorption is over 0.2. The air's absorption is included (it shortens the high bands in big rooms). It is a statistical model: it assumes sound spreads evenly, so long or flat rooms and very small rooms are a rough guide, and furniture, people and open doors are not counted.

## Listen

{{ui:Play it in this room}} plays a voice (made here), a clap, plucked notes or **your own sound file** (it stays on your computer) through an impulse response computed for the room: the direct sound, the first reflections of a box that size, and a tail that dies away at the room's own reverberation time in each band. {{ui:Play it dry}} plays the same sound at the same level without the room. You can save the impulse response or the sound in the room as WAV files. It sounds like a room of that size and finish, not like any real room.

## People and furniture

Type the number of **people in this room** to add their absorption. Furniture the model holds (sofas, beds, chairs, tables, wardrobes, found by name) adds its own. The figures are rough planning values, rounded; replace them with measurements for a room that matters.

## Source and listener

Under {{ui:Source and listener}}, press {{ui:Place the source}} or {{ui:Place the listener}} and click the room's plan. The sound you play is then heard from there: the direct sound arrives after the distance, and the reverberant part is at the level for that distance. Clear both to go back to the distance box.

## Uneven absorption and room modes

Under {{ui:Uneven absorption (box room)}}, type the room as a box and pick its floor, ceiling and wall finishes. The table adds Fitzroy and Arau-Puchades to Sabine and Eyring: they treat the three pairs of opposite surfaces separately, so a carpeted room with a hard ceiling is not read too short. When the pairs differ a lot, a note says which to trust. Below the table, **Room modes** lists the lowest standing waves of the box and the frequency under which the room has separate modes instead of an even sound field. These are predictions for a box room, a design aid and not a measurement.

## Units

Room areas, heights, volumes and distances are shown in the {{ui:Units}} you chose (square and cubic feet, inches, millimeters, centimeters or meters). The calculation itself stays in SI; only the display changes. Times (seconds), frequencies and levels are unchanged.
