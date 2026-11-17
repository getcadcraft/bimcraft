---
title: Menu's, toetsen en muis
summary: Kies een menustijl die aansluit op de manier waarop u al werkt, geef elk commando een eigen toets, verplaats commando's naar andere menu's en stel in wat het wiel en elke muisknop doen.
keywords: menustijl, menu's, menubalk, lint, opdrachtregel, sneltoetsen, toetsencombinaties, toetsen, aanpassen, opnieuw toewijzen, muis, wiel, omkeren, zoomrichting, middelste knop, verschuiven, orbit, tweeletterige toetsen, exporteren, importeren, wisselen, vertrouwd
from: a424e836
---

De commando's van BimCraft zijn hetzelfde, hoe u ze ook opent. Een **menustijl** bepaalt alleen waar ze op het scherm staan, hoe ze daar heten en met welke toetsen ze worden uitgevoerd, zodat u uw gewoonten kunt behouden. Kies er een in {{ui:Instellingen}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menu's, toetsen en muis}}; de wijziging is meteen zichtbaar en deze browser onthoudt haar.

## De vijf stijlen

| Stijl | Wat u krijgt |
|---|---|
| {{ui:CadCraft}} | De eigen werkbalk en toetsen van BimCraft ({{key:W}} wand, {{key:D}} deur, {{key:N}} raam, {{key:X}} doorsnede, {{key:F}} passend maken). Het uitgangspunt. |
| {{ui:Woonontwerp}} | Een menubalk (Bestand, Bewerken, Build, Bibliotheek, 3D, CAD, Hulpmiddelen, Weergave) boven een rij bouwtools, zoals woningontwerpprogramma's die indelen. Dezelfde losse toetsen, plus {{key:Mod+L}} voor de bibliotheek, {{key:F9}} voor de 3D-weergave, {{key:F10}} voor de plattegrond en {{key:F11}} voor beide. |
| {{ui:BIM-lint}} | Tabbladen met grote knoppen (Architectuur, Invoegen, Annoteren, Wijzigen, Weergave, Uitvoer) met een Bestand-menu en snelknoppen rechts. Tweeletterige toetsen: {{key:W}} en dan {{key:A}} voor een wand, {{key:D}} {{key:R}} deur, {{key:W}} {{key:N}} raam, {{key:S}} {{key:C}} doorsnede, {{key:Z}} {{key:F}} passend maken. De middelste knop verschuift; {{key:Shift}} en de middelste knop draaien (orbit). |
| {{ui:Klassiek tekenen}} | Een klein lint en een opdrachtregel, voor wie commando's typt: WALL, DOOR, WINDOW, ROOF, U (ongedaan maken), ZOOM, SECTION, PLOT, INSERT, HELP. Typ waar u wilt en de letters gaan naar de opdrachtregel; {{key:Enter}} voert uit, {{key:Enter}} op een lege regel herhaalt het laatste commando, {{key:Esc}} wist de invoer. |
| {{ui:Bekijken}} | Voor het openen en controleren van modellen in plaats van tekenen: de menu's {{ui:Bestand}}, {{ui:Weergave}}, {{ui:Tonen}}, {{ui:Controleer}} en {{ui:Bewerken}} boven een rij beeldtools (passend maken, boven, voor, zij, doorsnede, meten, verbergen, isoleren, doorzichtig, alles tonen, lopen). De bouwtools staan aan het eind in een {{ui:Model}}-menu. Dezelfde toetsen als de eigen stijl van BimCraft. |

De menu's en linten verschijnen zodra een model is geopend of u een nieuw gebouw start; daarvoor opent het paneel links bestanden en start gebouwen.

:::tip
Een toets die bij de eigen indeling van BimCraft hoort, maar niet bij de gekozen stijl, doet niets, en de statusregel zegt waar het commando naartoe is gegaan ("In BIM-lint, Doorsnede is SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} en de pijltjes behouden altijd hun betekenis, en een lopend hulpmiddel houdt zijn eigen toetsen: {{key:R}} en {{key:Tab}} tijdens het plaatsen, {{key:W}} {{key:A}} {{key:S}} {{key:D}} tijdens het lopen, {{key:H}} bij het deur- en raamgereedschap, en cijfers terwijl u een lengte typt.
:::

## Maak het op uw eigen manier

1. Kies de stijl die het dichtst bij uw wensen ligt en klik op {{ui:Aanpassen…}}.
2. Zoek op {{ui:Toetsen en menu's}} een commando (het zoekveld helpt). Klik op {{ui:Een toets toevoegen}} en druk op de toets, of op twee toetsen achter elkaar voor een tweeletterige toets. Klik op een toets om die te verwijderen.
3. Bij een menubalk of lint verplaatst {{ui:Waar het staat}} het commando naar een ander menu of paneel, of naar {{ui:Alleen toetsen}}.
4. Stel bij {{ui:Muis}} het wiel in, de knoppen die de plattegrond verschuiven, en wat elke knop doet in de 3D-weergaven.
5. Geef de stijl een naam en klik op {{ui:Opslaan}}.

Een ingebouwde stijl opslaan maakt uw eigen kopie ("Mijn Woonontwerp"); de ingebouwde stijl verandert nooit. Een toets die aan twee commando's is gegeven, of die een tweeletterige toets zou onderscheppen voordat die getypt kan worden, wordt rood weergegeven en moet worden opgelost voordat u kunt opslaan.

## Muis

- **Muiswiel**: {{ui:Omhoog scrollen zoomt in}} (het uitgangspunt) of {{ui:Omhoog scrollen zoomt uit}}, en hoe snel. Een knijpgebaar op het trackpad zoomt altijd in de richting waarin uw vingers bewegen.
- **De plattegrond en tekeningen verschuiven met**: elk van de linker-, middelste en rechterknop. {{key:Space}} en slepen verschuift ook; een linkersleep verschuift alleen waar een klik niets zou selecteren of tekenen.
- **Slepen in de 3D-weergaven**: {{ui:Eigen van elke weergave}} behoudt de knoppen van BimCraft (links draaien, rechts verschuiven). Of stel elke knop in op draaien, verschuiven, zoomen of niets; {{key:Shift}} met de knop wisselt draaien en verschuiven om. Een klik zonder slepen selecteert nog steeds.

## Meenemen

{{ui:Exporteren}} slaat de gebruikte stijl op als klein `.ccinput.json`-bestand; {{ui:Importeren…}} voegt er een toe, van een andere computer of van een collega. Een geïmporteerd bestand kan alleen verwijzen naar de eigen commando's van BimCraft: alles anders erin (een commando dat deze versie niet heeft, een toets die hier niet werkt) wordt weggelaten en in de statusregel geteld. {{ui:Deze stijl verwijderen}} verwijdert een van uw eigen stijlen.

:::note
Deze instellingen blijven in deze browser. {{ui:Deze stijl in elke app gebruiken}} onder de stijlkaarten zorgt dat elke app opent in de bijbehorende stijl (de eigen werkbalk, een menubalk, een lint of Klassiek tekenen; {{ui:Bekijken}} is alleen van BimCraft en heeft nergens een tegenhanger), met de wijzigingen die u in elke app hebt gemaakt. Een app zonder bijpassende stijl behoudt de eigen stijl. Een andere stijl kiezen in één app wijzigt alleen die app.
:::

Gerelateerd: [Toetsenbord en muis](topic:keyboard) · [BimCraft-instellingen](topic:settings) · [Overstappen vanuit andere BIM- en tekenprogramma's](topic:coming-from)
