---
title: Daken: een helling per wand, puntgevels, lessenaarsdaken en dakvlakken
summary: Stel elke wand onder een dak in op hellend, puntgevel of geen, gebruik de voorinstellingen walmdak, puntgevel en lessenaarsdak, til het dak op met de muurplaathoogte, voeg windveer en soffit toe, en teken losse dakvlakken waar het automatische dak niet past.
keywords: dak wijzigen, dak bewerken, geselecteerd dak, dakeigenschappen, ongedaan maken dak, dak, helling, per wand, puntgevel, lessenaarsdak, schuin tegen, walm, dakdal, nok, muurplaathoogte, dakvoet, windveer, soffit, goot, overstek, ortgang, dakvlak, portiekdak, dakkapel, puntdakkapel, lessenaarsdakkapel
from: 096084a7
---

## Wat u gaat doen

Vorm het dak vanuit de wanden eronder. Elke wand krijgt een eigen instelling, zodat één dak aan de voorkant een walm kan hebben, aan de uiteinden puntgevels en aan de achterkant strak tegen een hogere wand kan aansluiten. Voor een portiek of een vlak dat het automatische dak niet kan maken, tekent u een dakvlak via de hoekpunten.

## Een dak plaatsen

1. Klik op het niveau waarvan de wanden het dak dragen op {{ui:Dak}}.
2. Typ de **Helling** (`6/12`, of graden zoals `30`) en het **Overstek**.
3. Kies een voorinstelling: **Walmdak**, **Puntgevels aan de korte zijden**, **Puntgevels aan de lange zijden**, of **Lessenaarsdak** (de zijde het dichtst bij de aanwijzer is de lage goot; de andere zijden zijn puntgevels).
4. Laat **Windveer en soffit** aangevinkt voor afgesloten dakranden met een windveer, of vink het uit voor een kale dakrand.
5. Wijs binnen het gebouw: de goot, de nok, de walmen en de dakdalen verschijnen op het plan. Klik.

Elke omtrek werkt: L-, T-, U- en plusvormen, schuine hoeken en inkepingen. Walmen, nokken en dakdalen worden gevonden waar de dakvlakken samenkomen.

## Eén wand tegelijk

Selecteer het dak (op het niveau boven de wanden, klik binnen de omtrek) en kijk onder **Elke wand** in **Eigenschappen**. Wijzen naar een rij markeert die wand op het plan.

- **Hellend**: de wand heeft een hellend dakvlak erover. Typ er naast een eigen helling, bijvoorbeeld `12/12` voor steile uiteinden op een dak van `6/12`.
- **Puntgevel**: het dak eindigt in een verticale gevel boven die wand, de wand wordt opgevuld tot het dak, en het dak loopt er met het **Overstek puntgevel** voorbij.
- **Geen (sluit gelijk af)**: het dak eindigt bij die wand zonder overstek en zonder puntgevelwand, voor een dak tegen een hogere wand.

De lijst **Uiteinden** bovenaan stelt elke wand tegelijk in; **Per wand instellen** verschijnt wanneer de wanden niet meer overeenkomen met een voorinstelling.

## Een bestaand dak wijzigen

Selecteer het dak en **Eigenschappen** toont dezelfde instellingen als het gereedschap Dak: **Helling**, **Overstek**, **Overstek puntgevel**, **Muurplaathoogte**, **Windveerhoogte**, **Afgesloten dakranden** en **Dikte**. Elke wijziging is meteen zichtbaar in het plan en in 3D, met dezelfde controles als het gereedschap (een helling van 80 graden of meer wordt geweigerd, en ook een instelling die geen dak kan maken). Typ een waarde en druk op {{key:Enter}}, of verlaat het vak.

Elke wijziging is één stap ongedaan maken. Meerdere wijzigingen in hetzelfde vak na elkaar (typ `6/12`, dan `7/12`, dan `8/12`) worden één stap, zodat één {{key:Ctrl}}+{{key:Z}} terugzet wat het dak had vóór de reeks; een ander vak wijzigen begint een nieuwe stap.

## Muurplaathoogte, windveer en soffit

- **Muurplaathoogte** is waar de dakvlakken aan de buitenkant van de wanden samenkomen, gemeten vanaf de vloer van het niveau. Laat hem leeg om het dak op de bovenkant van de wanden te zetten; typ een grotere waarde voor een verhoogde dakvoet.
- **Windveerhoogte** is de plank langs de goten en omhoog langs de ortgangen. Typ `0` voor geen.
- **Afgesloten dakranden** zet een horizontale soffit onder elke goot, van de wand tot de achterkant van de windveer.

Elk vlak raakt zijn wand op de muurplaathoogte, dus wanden met verschillende hellingen houden één muurplaatlijn en hun goten eindigen op verschillende hoogten, zoals ze zouden worden getimmerd.

## Een dakvlak tekenen

1. Open op het niveau waarop het vlak rust {{ui:Build}} en kies {{ui:Dakvlak}}.
2. Typ de **Helling** en, als het niet de bovenkant van de wanden is, de **Goothoogte**.
3. Klik de hoekpunten aan. De eerste zijde die u tekent is de goot; het vlak loopt vanaf daar omhoog naar de rest van de vorm.
4. Klik nogmaals op het eerste hoekpunt, dubbelklik, of druk op {{key:Enter}} om af te ronden. {{key:Esc}} verwijdert de hoekpunten.

Een dakvlak volgt de wanden niet. Selecteer het op het niveau erboven (klik erbinnen) om de helling, goothoogte of dikte te wijzigen, of druk op {{key:Delete}} om het te verwijderen.

## Een dakkapel toevoegen

1. Toon het niveau waarop het dak ligt.
2. Open {{ui:Build}} en kies {{ui:Dakkapel}}.
3. Kies in de rij met opties de **Soort dakkapel** (**Puntgevel** of **Lessenaar**) en stel de **Breedte**, de **Voorwand** (de hoogte van de voorwand van de bovenkant van het dak tot de goot van de dakkapel), de **Helling** en het **Overstek** in.
4. Klik op een dakvlak waar het midden van de voorkant van de dakkapel komt.

BimCraft bouwt de voorwand, twee zijwanden en het dak van de dakkapel, en loopt die terug tot hij het dak raakt. Een puntdakkapel heeft twee vlakken die samenkomen in een nok. Een lessenaarsdakkapel heeft één vlak, dat minder steil moet zijn dan het dak. Het dak onder de dakkapel wordt weggesneden. De dakkapel volgt het dak wanneer de wanden verschuiven.

Selecteer hem om zijn soort, breedte, voorwand, helling of overstek in **Eigenschappen** te wijzigen. {{key:Delete}} verwijdert hem en sluit het dak weer. Hij moet op één dakvlak passen, weg van walmen, dakdalen en de nok, en alleen daken gemaakt met het gereedschap {{ui:Dak}} nemen dakkapellen aan, niet losse dakvlakken die met de hand zijn getekend. Nog niet beschikbaar: een raam in de voorkant van de dakkapel, en dakkapellen op met de hand getekende dakvlakken.

## Wat wordt opgeslagen

Daken zijn IFC-daken, gemaakt van één dakplaat per vlak, puntgevelwanden, één windveerelement en één soffitbekleding. Het dak bevat zijn lengten van nok, walm, dakdal, goot en ortgang, en zijn oppervlakten, voor opmeten. Een dakvlak is een IFC-dak met één plaat.

:::tip
Ongedaan maken haalt elke dakwijziging in één stap terug, ook een voorinstelling die elke wand verandert.
:::
