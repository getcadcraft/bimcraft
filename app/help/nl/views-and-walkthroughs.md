---
title: Weergaven en wandelingen opslaan
summary: Bewaar cameraweergaven van het model op naam, ga er weer naar terug, speel ze na elkaar af en neem een wandeling door het gebouw op om af te spelen.
keywords: weergaven, opgeslagen weergaven, camera, camera's, gezichtspunt, scène, scènes, rondleiding, presentatie, stap-voor-stap-gids, wandeling, doorwandelen, vliegdoorvlucht, opnemen, afspelen, pad, animatie
from: 3af19a36
---

{{ui:Weergaven}} op de werkbalk bewaart camera's van de 3D-weergave in het bestand van het model, zodat u en iedereen die u het stuurt er direct naar terug kunnen.

## Een weergave opslaan

1. Stel de 3D-weergave in: draai, zoom, verberg wat u niet wilt.
2. Klik op {{ui:Weergaven}}, typ een naam (of behoud de aangeboden naam) en klik op {{ui:Weergave opslaan}} of druk op {{key:Enter}}.

Opslaan met een naam die al in de lijst staat, werkt die weergave bij. Klik op de naam van een weergave om er terug naar te gaan; de camera beweegt er soepel naartoe.

De pijltjes wijzigen de volgorde, het potlood hernoemt en de prullenbak verwijdert. Elke wijziging is één stap, dus {{key:Ctrl+Z}} maakt haar ongedaan.

## De weergaven afspelen

{{ui:De weergaven afspelen}} gaat van de ene weergave naar de volgende in de volgorde van de lijst, en blijft even stilstaan bij elke weergave. {{key:Esc}} of {{ui:Stoppen}} beëindigt het.

## Een wandeling opnemen

1. Zet [Lopen](topic:walk) aan en begin binnen het gebouw te lopen.
2. Klik in {{ui:Weergaven}} op {{ui:Een wandeling opnemen}}.
3. Loop met {{key:W}} {{key:A}} {{key:S}} {{key:D}} en kijk om u heen met de muis.
4. Klik op {{ui:Opnemen stoppen}}. De wandeling wordt opgeslagen als "Walk 1", met zijn lengte.

Klik op een wandeling om hem af te spelen zoals u hem liep. {{key:Esc}} stopt hem.

## Een wandeling renderen als video

Klik op het filmpictogram naast een wandeling. Het videovenster tekent elk beeld van de wandeling met de renderinstellingen die u als laatste koos, in de grootte, beeldsnelheid en kwaliteit die u hier kiest. Sla het op als WebM- of MP4-video, of als ZIP met één afbeelding per beeld. Beelden kosten net zoveel tijd als afbeeldingen, dus begin met {{ui:Snel}}.

## Een wandeling van commentaar voorzien

Klik op het spraakbellenpictogram naast een wandeling. Schrijf één regel voor elk ding dat gezegd wordt, en begin een regel met de tijd waarop die begint (`12`, `0:12` of `1:02.5`). Een regel zonder tijd volgt de regel erboven, na de tijd die het kost om hem uit te spreken. Kies de taal, in de taal van de klant als die de kijker is. {{ui:Voorbeeld}} speelt de woorden af met de stem van deze computer en toont ze als ondertitels; hetzelfde gebeurt wanneer de wandeling wordt afgespeeld. {{ui:Opslaan met de wandeling}} bewaart het commentaar in de IFC bij de wandeling.

Uw eigen verbonden assistent kan het commentaar voor u schrijven: vraag hem de wandeling en de opgeslagen weergaven te bekijken, dan zet hij de regels in de taal die u noemt, als één ongedaan-maakstap.

De gerenderde video heeft geen eigen geluid, omdat een browser zijn eigen stem niet kan opnemen. Sla de ondertitels op (`.srt` of `.vtt`) en voeg ze toe aan de video in uw videospeler of -editor. Welke stemmen u kunt kiezen, hangt af van de computer: een taal zonder geïnstalleerde stem krijgt de ondertitels wel.

## In het bestand

Weergaven en wandelingen worden in de IFC bewaard als de eigenschapsset `CadCraft_Views` op het project: gewone IFC die andere programma's negeren. Ze staan in de coördinaten van het eerste model, dus ze passen nog steeds nadat het model opnieuw is geladen of een ander model is toegevoegd.

:::tip
Om een afbeelding van een opgeslagen weergave te renderen, gaat u naar de weergave en klikt u op [Renderen](topic:render).
:::
