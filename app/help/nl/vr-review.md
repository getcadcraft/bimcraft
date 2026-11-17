---
title: Het model bekijken met een VR-headset
summary: Loop door het IFC-model op ware grootte in een VR-headset: spring rond, draai, meet, snij het open, plaats BCF-issues met een afbeelding, bekijk het als tafelmodel en ontmoet de anderen van een live-sessie.
keywords: vr, virtual reality, headset, webxr, xr, meeslepend, quest, oculus, vive, index, pico, doorlopen, stap-voor-stap-gids, teleporteren, ontwerpbeoordeling, coördinatie, beoordeling, meten, doorsnede, snijden, issue, issues, bcf, tafelblad, schaalmodel, aanwezigheid, avatars, live, samen
from: 8994b36d
---

{{ui:VR}} op de werkbalk zet u in het model met een VR-headset, op ware grootte. U staat waar de camera van de 3D-weergave staat, op de vloer eronder, en kijkt dezelfde kant op. De headset toont wat de 3D-weergave toont: verborgen verdiepingen, elementen en modellen blijven verborgen, en geschilderde materialen komen mee. Er wordt niets geüpload: de browser tekent het op deze computer (of in de eigen browser van de headset).

## Wat u nodig hebt

- Een headset die de browser kan aansturen (WebXR): de eigen browser van een zelfstandige headset, of Chrome of Edge op een pc met een aangesloten headset.
- Een open IFC-model, op een beveiligde pagina (https), zoals die op deze site is.

Zonder headset is {{ui:VR}} grijs, met een uitleg waarom.

## Starten

1. Stel de 3D-weergave in waar u wilt beginnen: in een kamer, of buiten, kijkend naar het gebouw.
2. Klik op {{ui:VR}} op de werkbalk.
3. Zet de headset op.

Het menu zit op de achterkant van uw linkerhand. Wijs ernaar met de rechtercontroller en trek de trekker over om een knop te kiezen. (Met maar één hand zweeft het menu voor de plek waar u begon.)

## Bewegen

- **Springen:** kies in {{ui:Verplaatsen}} een vloer aan en trek de trekker over; u landt daar. Of duw de stick vooruit om te richten en laat los om te springen. U kunt alleen op vloeren, vloerplaten en grond landen (oppervlakken die omhoog wijzen), nooit op een muur.
- **Draaien:** duw de stick links of rechts: u draait elke keer 30°.
- **Lopen:** loop gewoon in uw speelruimte.

## Meten

Kies {{ui:Meten}} en trek de trekker over twee punten. De afstand verschijnt ertussen, in meter. Een punt bij een hoek snapt naar die hoek.

## Het openen door te snijden

Kies {{ui:Doorsnede}} en trek de trekker over een oppervlak:

- op een muur (of iets dat geen vloer is): alles tussen u en dat oppervlak wordt weggesneden, zodat u erin kunt kijken. Dit werkt het best van buiten, of over een kamer heen;
- op een vloer, van bovenaf: een plattegrondsnede 1.2 m boven die vloer, zodat de muren hun onderste deel tonen.

{{ui:Wissen}} verwijdert de snede en de metingen. Als een [doorsnedevlak](topic:section-plane) het model snijdt wanneer u begint, begint de headset ermee.

## Een issue plaatsen

Kies {{ui:Issue}} en trek de trekker over waar het probleem is. Een genummerde speld markeert het, en de issue gaat naar het tabblad {{ui:Issues}} als BCF-onderwerp, met een afbeelding van wat u zag en de camera waar u stond, in de eigen coördinaten van het model. Sla ze op met de rest van uw [issues](topic:issues-bcf) als BCF-bestand; andere coördinatietools openen ze op dezelfde weergave.

Voeg een opmerking aan een issue toe nadat u VR verlaat, in het tabblad Issues: typen in de headset is nog niet beschikbaar.

## Het bekijken als tafelmodel

{{ui:Tafelblad}} verkleint het model zodat het op een tafel voor u past; loop eromheen, of draai het met de stick. {{ui:Ware grootte}} zet u terug waar u was.

## Met anderen, live

In een [live-sessie](topic:work-live) ziet iedereen in VR de anderen als een hoofd en twee handen in hun eigen kleur, met hun naam, en een stip waar iedereen naar wijst. Bewerkingen van iemand bereiken uw headset binnen een moment. Mensen aan het bureau worden in de headset nog niet getoond.

## Verlaten

Kies {{ui:VR verlaten}} (of zet de headset af en beëindig het daar). De 3D-weergave op het scherm verplaatst zich naar waar uw hoofd was.

:::note
Getest met een headset-emulator, nog niet op elke headset. Een groot model kan de headset laten haperen: verberg eerst de verdiepingen of modellen die u niet nodig hebt ([verbergen en isoleren](topic:hide-and-isolate)).
:::
