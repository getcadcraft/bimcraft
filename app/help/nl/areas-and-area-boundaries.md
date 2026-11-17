---
title: Oppervlakten en oppervlaktegrenzen
summary: Meet de bruto bouwoppervlakte of de verhuurbare oppervlakte binnen grenslijnen die u tekent of uit de wanden neemt, en zet de oppervlakten in een staat.
keywords: oppervlakte, oppervlakten, oppervlaktegrens, oppervlakteschema, bruto bouwoppervlakte, GFA, verhuurbaar, oppervlakteplan, staat van oppervlakten, wanden kiezen, niet omsloten
from: c79f96d2
---

## Wat u gaat doen

Teken de grenzen van een oppervlakteschema, plaats de oppervlakten erbinnen en lees de totalen af.

## Waar de hulpmiddelen staan

- Lintindelingen: {{ui:Architecture}} › **Room & Area** › {{ui:Area}} en {{ui:Area Boundary}}.
- Klassieke indeling: de werkbalk Tekenen › menu {{ui:Rooms}}.

## Stappen

1. Kies {{ui:Area Boundary}}. Kies in de rij het {{ui:Scheme}}: Bruto bouwoppervlakte of Verhuurbaar. Elk schema heeft zijn eigen grenzen.
2. Kies hoe de lijnen worden gemaakt in {{ui:Make by}}:
   - **Tekenen**: klik punt na punt.
   - **Wanden kiezen: middenlijn**: klik op een wand, en de middenlijn ervan is een grens.
   - **Wanden kiezen: het aangeklikte vlak**: klik op een wand aan de zijde die u wilt; dat vlak is de grens. Voor de bruto bouwoppervlakte klikt u op de buitenkant van de buitenmuren.
3. Kies {{ui:Area}}. Kies hetzelfde schema, typ indien gewenst een naam, nummer of type, en klik binnen de grenzen.
4. De oppervlakte wordt meteen gemeten. Selecteer haar om haar naam, nummer of type te wijzigen in Eigenschappen.

## Wat volgt op wat

- Een grens die is gemaakt door een wand te kiezen, volgt die wand: verplaatst u de wand, dan wordt de oppervlakte in dezelfde stap opnieuw gemeten.
- Een grens die u tekende, blijft staan waar u haar tekende.
- Vlakken van wanden die op een hoek samenkomen, komen daar ook samen, zodat vier gekozen wanden een oppervlakte sluiten zonder openingen.
- Oppervlaktegrenzen worden op het plan getoond zolang een ruimte- of oppervlaktehulpmiddel in uw hand is, zodat ze het plan de rest van de tijd niet vervuilen.

## Als de grenzen niet sluiten

De oppervlakte wordt nog steeds geplaatst. Ze toont **Niet omsloten** en meet niets totdat de grenzen eromheen sluiten. Dit is een advies: er wordt niets geweigerd.

## De staat

Linkerpaneel › {{ui:Schedules}} › **Oppervlakten**: schema, nummer, naam, type, niveau, oppervlakte en omtrek, met een totaal. Een klik op een rij selecteert de oppervlakte. {{ui:Download CSV}} geeft dezelfde tabel.

## In het IFC

Een oppervlakte is een IfcSpace zonder lichaam: PredefinedType GFA voor het bruto bouwschema, USERDEFINED met ObjectType Rentable voor verhuurbaar. Ze heeft GrossFloorArea en GrossPerimeter, en geen netto oppervlakte, zodat ze niet voor een ruimte wordt aangezien. Een grens is een IfcVirtualElement.

## Nog niet beschikbaar

- Eigen schema's (alleen Bruto bouwoppervlakte en Verhuurbaar).
- Kleurvulling per oppervlaktetype.
- Regels die de grens voor u plaatsen, zoals "tot de glaslijn".

Zie ook [Ruimten en ruimtescheiders](topic:rooms-and-separators), [Ruimte- en oppervlaktetags](topic:room-and-area-tags).
