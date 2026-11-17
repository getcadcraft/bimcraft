---
title: Ruimte- en oppervlaktetags
summary: Plaats een tag met het nummer, de naam en de oppervlakte op een ruimte of een oppervlak. De tag volgt die, en de grootte ervan wordt bepaald door de hoogte op papier.
keywords: tag, ruimtetag, oppervlaktetag, tag ruimte, tag oppervlakte, alles taggen, alle niet-getagde taggen, label, teksthoogte, papierhoogte, annotatie
from: 67059d8a
---

## Wat u gaat doen

Tag ruimten en oppervlakken één voor één of allemaal tegelijk, en verplaats een tag naar een plek waar die goed leesbaar is.

## Waar de hulpmiddelen staan

- Lintindelingen: {{ui:Architectuur}} › **Ruimte & oppervlak** › {{ui:Tag ruimte}} en {{ui:Tag oppervlakte}}.
- Klassieke indeling: de tekenbalk › menu {{ui:Ruimten}}.
- Een gekozen ruimte of oppervlak: Eigenschappen › {{ui:Tag toevoegen}}.

## Stappen

1. Kies {{ui:Tag ruimte}} en klik in een ruimte, op de plek waar de tag moet komen.
2. Of druk in de rij op {{ui:Alle niet-getagde taggen}}: elke ruimte op deze verdieping die geen tag heeft, krijgt er een, in het midden. Het is één stap voor Ongedaan maken.
3. Om een tag te verplaatsen, kiest u hem met Selecteren en sleept u hem. Eigenschappen heeft {{ui:Terugzetten in het midden}}.
4. {{ui:Tag oppervlakte}} werkt op dezelfde manier voor oppervlakken.

## Wat een tag doet

- Hij toont het nummer, de naam en de oppervlakte, in uw weergave-eenheden.
- Hij volgt zijn ruimte: hernoemt u de ruimte of verplaatst u een wand, dan veranderen de tekst en de plek van de tag in dezelfde stap.
- Hij is op papier op maat: {{ui:Teksthoogte op papier}} staat in millimeters (begin met 2.5). Bij een weergaveschaal van 1:50 is een tag van 2.5 mm 125 mm hoog in het model; bij 1:100 is hij 250 mm.
- Een ruimte met een tag toont de tag in plaats van het gewone label.
- Wanneer de ruimte of het oppervlak verdwijnt, verdwijnt de tag mee. Ongedaan maken brengt beide terug.

## In de IFC

Een tag is een IfcAnnotation (ObjectType ROOMTAG of AREATAG) met zijn tekst als tekstliteral, en de GlobalId van wat hij benoemt. De tekst in het bestand geeft de oppervlakte in vierkante meter.

## Nog niet beschikbaar

- Eigen tagvormen en een leiderlijn.
- Tags op deuren, ramen en wanden zijn een apart hulpmiddel (zie de tagstijlen van de bladen).

Zie ook [Ruimten en ruimtescheiders](topic:rooms-and-separators).
