---
title: Model maken van een scan
summary: Een korte handleiding van een laserscan naar muren: open de puntenwolk naast een nieuw gebouw, lijn die uit met een verdieping en teken de muren op de plattegrond over.
keywords: scan, laserscan, puntenwolk, as-built, bestaand gebouw, opmeting, traceren, scan naar BIM, model van scan, snede, uitlijnen, haaks, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Wat u gaat doen

Teken een bestaand gebouw uit zijn laserscan: muren waar de scan ze toont, op de juiste verdieping, haaks op elkaar.

## Stappen

1. **Een gebouw om in te tekenen.** {{ui:Bestand}} › {{ui:Nieuw gebouw}}, met zoveel verdiepingen als het gebouw heeft (u kunt later verdiepingen toevoegen, zie [Het terrein, het gebouw erop en de verdiepingen](topic:site-building-and-levels)). {{ui:Tekenen}} wordt ingeschakeld.
2. **De scan.** {{ui:Tonen}} › {{ui:Puntenwolk}} en kies het bestand (LAS, LAZ, E57, PLY, PCD, PTX of XYZ: zie [Een puntenwolk naast het model tonen](topic:point-clouds)). De wolk verschijnt in de 3D-weergave, en de plattegrond toont de **snede**: de gescande punten 1200 mm (4 feet) boven de verdieping, als stipjes. Dat is de hoogte waarop muren, deuren en ramen het best te lezen zijn.
3. **Lijn hem uit met de verdieping.** Open het menu {{ui:Scan}} van de modelbalk en klik op {{ui:Zijn vloer op deze verdieping uitlijnen}}: de wolk schuift omhoog of omlaag tot de vloer die hij scande op de getoonde verdieping staat. Controleer of de snede nu door de muren snijdt.
4. **Haaks op het gebouw.** {{ui:Scan}} › {{ui:Haaks op het gebouw zetten}} draait de wolk zodat de muren in zijn snede langs de assen van de plattegrond lopen. Muren die u met {{key:Shift}} ingedrukt tekent, sluiten daardoor aan op de scan. De wolk draait om het midden van de muren die hij heeft gevonden, zodat bomen of een muur van de buren in de snede de scan niet wegdraaien. Lijn eerst de vloer uit: de snede snijdt dan door de muren.
5. **De muren overtrekken.** Kies {{ui:Wand}} en klik langs de stipjes: het gereedschap snapt naar gescande punten (de snapmarkering is een klein ruitje) en naar de muren die u al hebt getekend. Een muur wordt getekend op zijn middellijn; klik dus midden tussen de twee rijen stipjes die een muur oplevert. Typ de dikte door eerst het muurtype te kiezen. Voeg daarna de deuren en ramen toe waar de snede de openingen toont.
6. **De volgende verdieping.** Kies de verdieping erboven in de verdiepingenlijst van de plattegrond: de snede volgt de snijhoogte van die verdieping. Lijn de vloer alleen opnieuw uit met die verdieping als de vloeren van de scan niet op uw verdiepingen liggen.

## Wat u zou moeten zien

- De snede verandert wanneer u van verdieping wisselt, en een dikkere snede ({{ui:Scan}} › {{ui:Dikte van de snede}}) toont meer punten waar een scan dun is.
- {{ui:Scan}} › {{ui:Het uitlijnen ongedaan maken}} zet de wolk terug op de plek waar hij stond toen hij werd geopend. Uitlijnen verplaatst de wolk alleen in de weergave: hij wordt niet opgeslagen in het IFC-bestand, en muren die u hebt getekend blijven staan. De uitlijning gaat met de wolk mee als u {{ui:Plaatsen}} of {{ui:Eenheden}} wijzigt, of een ander model opent.
- {{ui:Scan}} › {{ui:De snede op het plan tonen}} verbergt of toont de stipjes.

:::tip
Grote scans: de plattegrond tekent tot 60,000 punten van de snede en de 3D-weergave een paar miljoen van de hele wolk, beide gelijkmatig verdeeld over de scan, zodat een groot bestand snel blijft. Om in de tekenapp te traceren, gebruikt u {{ui:Traceren in CadCraft}} op de wolkbalk.
:::
