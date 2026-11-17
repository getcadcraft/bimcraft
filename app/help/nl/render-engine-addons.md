---
title: Een renderengine toevoegen met een add-on
summary: Wat een add-on kan toevoegen aan de lijst Engine van het dialoogvenster Renderen, de toestemming die het nodig heeft om een programma uit te voeren, en wat Studio controleert en vraagt.
keywords: add-on, addon, engine, renderengine, ontwikkelaar, engine.run, toestemming, programma, script, ondertekend, studio, api
from: 06295376
---

Een add-on (Instellingen › Add-ons) kan een engine toevoegen aan de lijst Engine van {{ui:Renderen}}. De volledige tekst voor auteurs van add-ons staat in hoofdstuk 16 van de add-on-specificatie; kort samengevat:

- De add-on registreert een engine met een id dat begint met het eigen add-on-id, een naam, optionele instellingen en **ofwel** een programma om uit te voeren **ofwel** een functie in JavaScript die de afbeelding tekent.
- Een engine die een programma uitvoert, heeft de toestemming **`engine.run`** nodig; die wordt getoond vóór de installatie en in Instellingen. Die werkt alleen in Studio; in de browser verschijnt die als een bestand om op te slaan.
- De add-on noemt het programma (alleen een gewone bestandsnaam, nooit een shell), een script dat **binnen de ondertekende add-on** staat, en argumenten die bestaan uit plaatshouders en gewone woorden. Studio zoekt het programma of vraagt u er één keer naar te wijzen.
- De eerste keer dat een add-on een programma uitvoert, **vraagt Studio u in een eigen dialoogvenster**: welke add-on, welk programma, en dat een script alles kan doen wat het programma kan. Sta dit alleen toe voor een add-on die u vertrouwt. Uw antwoord wordt onthouden voor die add-on en dat programma.
- Het pakket (de scène als USD en een instellingenbestand, met het glTF-bestand als de add-on daar om vraagt) en het script van de add-on worden in een nieuwe tijdelijke map gezet, het programma wordt daar uitgevoerd, en de afbeelding komt terug met de naam van de engine van de add-on.

:::note
Add-ons kunnen alleen renderengines toevoegen vanaf add-on-API 1.4. Een uitgewerkt voorbeeld voor een open-source renderer op de opdrachtregel staat in een eigen repository; het is in die renderer nog niet uitgevoerd.
:::
