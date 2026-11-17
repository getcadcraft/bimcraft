---
title: Deuren en ramen
summary: Plaats deuren en ramen in getekende wanden: wijs een wand aan, zie de draairichting en de afstanden tot de hoeken, klik; de wandopening snijdt zichzelf uit.
keywords: deur, deuren, raam, ramen, opening, draairichting, scharnier, hand, omdraaien, schuifdeur, inbouwschuifdeur, garagedeur, dubbele deur, draairaam, enkel hangraam, dubbel hangraam, schuifraam, vast raam, dorpel, latei, vouwdeur, kastdeur, Franse deuren, schuurdeur, zijlichten, entreedeur, uitzetraam, panoramaraam, bovenlicht
from: 4d8ac009
---

## Wat u gaat doen

Plaats deuren en ramen in wanden die u hebt getekend ([Wanden tekenen](topic:draw-walls)). Wijs een wand aan en de deur of het raam laat zien waar het komt, welke kant het opendraait en hoe ver het van elke hoek af is. Klik, en de opening snijdt zichzelf uit de wand, in het plan en in 3D.

## Een deur plaatsen

1. Zet {{ui:Tekenen}} aan en klik op {{ui:Deur}} (of druk op {{key:D}}).
2. Kies het type: **Enkele draaideur**, **Dubbele draaideur**, **Schuifdeur**, **Inbouwschuifdeur**, **Garagedeur**, **Vouwdeur voor kast**, **Franse deuren**, **Schuurdeur (op de wand)** of **Entreedeur met zijlichten**. Het gebruikelijke formaat vult **W** en **H**; kies een ander uit de formaatlijst ernaast, of typ andere, bijvoorbeeld `2'-8"` of `800`. De lijst biedt ook de deurfamilies van dit model aan (zie [Families en hun formaten](topic:families)).
3. Wijs een wand aan. Het symbool van de deur volgt de aanwijzer langs de wand, en de afstand vanaf elk uiteinde van dat vlak wordt op het plan getoond.
4. De deur draait naar de zijde van de wand waar de aanwijzer staat. Druk op {{key:H}} (of klik op {{ui:Omdraaien}}) om de scharnieren aan het andere uiteinde te zetten.
5. Klik. De deur is geplaatst en het gereedschap blijft aan voor de volgende. Wijs het midden van een wand aan, en de deur centreert zichzelf.

Om hem op een exacte afstand te plaatsen: wijs de wand dicht bij de hoek waarvandaan u meet aan, typ de afstand (bijvoorbeeld `2'` of `600`) en druk op {{key:Enter}}. De afstand loopt van het dichtstbijzijnde uiteinde van het wandvlak tot de rand van de deur.

## Een raam plaatsen

1. Klik op {{ui:Raam}} (of druk op {{key:N}}).
2. Kies het type: **Vast raam**, **Enkel hangraam**, **Dubbel hangraam**, **Draairaam**, **Schuifraam**, **Uitzetraam**, **Panoramaraam** of **Bovenlicht**, en zijn **W**, **H** en **Onderdorpel** (de hoogte van de onderkant van het raam boven de vloer).
3. Wijs een wand aan en klik, of typ een afstand en druk op {{key:Enter}} zoals bij deuren. Een raam zit aan de buitenkant van de wand.

## Verplaatsen, omdraaien, verwijderen

- Met {{ui:Selecteren}} aan, sleept u een deur of raam langs zijn wand. Sleep het naar een andere wand om het daarheen te verplaatsen.
- {{key:Delete}} verwijdert de gekozen deuren en ramen; de wand sluit zich.
- Een wand verplaatsen of verwijderen verplaatst of verwijdert wat erin zit. Wanneer het begin van een wand langs zijn eigen lijn verschuift, houden de deuren en ramen erin hun plaats.
- {{ui:Ongedaan maken}} en {{ui:Opnieuw}} nemen elke plaatsing, verplaatsing of verwijdering heen en weer terug.

## Wat wordt geweigerd

- **Het past niet in die wand.** De deur of het raam is breder dan de wand, of zou aan een uiteinde uitsteken. Probeer een kleinere breedte of een langere wand.
- **Het is hoger dan de wand.** De onderdorpel plus de hoogte ligt boven de bovenkant van de wand.

## Wat wordt opgeslagen

Elke deur of elk raam is een IFC-deur of IFC-raam met zijn formaat, werking (bijvoorbeeld enkele draaideur links), zijn formaattype (één type voor elk formaat van zijn familie), `Pset_DoorCommon` of `Pset_WindowCommon` en basishoeveelheden, en vult een IFC-opening in zijn wand. De netto zijoppervlakte en het volume van de wand laten de opening weg. Andere BIM-programma's openen het als een deur in een wand.

## Goed om te weten

- Het plan toont deuren geopend onder 90° met hun draairichting, schuifdeuren als twee panelen, inbouwschuifdeuren die in de wand schuiven, garagedeuren als een gestreepte lijn erboven, en ramen met hun kozijn- en glaslijnen.
- De breedte is de totale breedte van het kozijn; het deurblad is de breedte min de twee kozijnstijlen.
- Het kopiëren van getekende deuren en ramen is nog niet beschikbaar: plaats er een andere.

## Kelder-vluchtraam en lichtkoker

Kies **Kelder-vluchtraam met lichtkoker** in de lijst met raamtypen. Het begint als een draairaam van 36 × 48 inch met een onderdorpel 36 inch boven het niveau. De lichtkoker staat aan de buitenkant van de wand, met minimaal 48 inch vrije breedte, 36 inch uitsteeksel en een bodem 6 inch onder de onderdorpel. Hij verschijnt als gestreepte lijnen in het plan en als drie open zijden zonder bovenkant in 3D. De lichtkoker maakt deel uit van het IFC-lichaam van het raam, dus opslaan, verplaatsen, het formaat wijzigen of verwijderen van het raam neemt hem mee. Bij het wijzigen van het formaat blijft minstens 6 inch naast elke kozijnstijl over.

Dit zijn modelleerstandaarden, geen certificering van naleving van vluchtwegeisen. Controleer de werkelijke vrije opening van de fabrikant, de lokale eisen, het maaiveld, de afwatering en eventuele vereiste ladders apart. De diepte en hoogte van de lichtkoker zijn vooraf ingestelde maten; ze volgen het terrein niet.
