---
title: Ruimten en ruimtescheiders
summary: Kies een ruimte om die te benoemen en te nummeren, en lees de oppervlakte, omtrek en het volume af. Teken een ruimtescheider waar twee ruimten samenkomen zonder wand ertussen.
keywords: ruimte, ruimten, ruimtescheider, scheidingslijn, ruimte, IfcSpace, naam, nummer, oppervlakte, omtrek, volume, open plan, een ruimte verdelen, keuken en woonkamer, niet omsloten
from: d4c1d66b
---

## Wat u gaat doen

Benoem de ruimten die de wanden vormen, en verdeel een open ruimte in twee zonder wand.

## Waar de hulpmiddelen staan

- Lintindelingen: {{ui:Architectuur}} › **Ruimte & oppervlak** › {{ui:Ruimte}} en {{ui:Ruimtescheider}}.
- Klassieke indeling: de tekenbalk › menu {{ui:Ruimten}}.
- Elke menustijl: de opdrachten heten Room en Room Separator; het opdrachtenpalet vindt ze.

## Stappen

1. Teken de wanden. Elke gesloten lus van wanden is al een ruimte: BimCraft maakt die, nummert hem en geeft hem zijn oppervlakte terwijl u tekent.
2. Kies {{ui:Ruimte}}. Beweeg over de plattegrond: de ruimte onder de aanwijzer licht op met zijn oppervlakte, omtrek en volume.
3. Om ruimten snel te benoemen, typt u eerst een {{ui:Naam}} en een {{ui:Nummer}} in de rij, en klikt u daarna in de ruimte. Het nummer telt één op voor de volgende ruimte (101, 102; A-09, A-10).
4. Of klik gewoon op een ruimte: die wordt gekozen, en Eigenschappen toont de naam, het nummer, de oppervlakte, de omtrek, het volume en de tag.
5. Om een open ruimte te splitsen, kiest u {{ui:Ruimtescheider}} en klikt u twee punten aan: wand tot wand, of wand tot een andere scheider. Ga door met klikken voor een keten; Enter, Esc of een dubbelklik beëindigt hem.

## Wat een scheider doet

- Hij begrenst ruimten als een wand zonder dikte. De oppervlakten van de twee ruimten tellen precies op tot de oorspronkelijke ruimte.
- De ruimte die het midden van de oude ruimte bevat, behoudt zijn naam en nummer. De andere is nieuw.
- Een scheider die in het open eindigt en aan één uiteinde niets raakt, verdeelt niets. Verleng hem, dan doet hij het wel.
- Het deel van een scheider dat binnen een wand ligt, wordt genegeerd, zodat u kunt vastklikken op de hartlijnen van wanden.
- Kies een scheider en druk op Delete om hem te verwijderen: de twee ruimten worden weer één. Ongedaan maken zet hem terug.

## Als er geen ruimte is waar u klikt

De statusregel zegt dat de wanden daar niet sluiten. Sluit het gat, of teken een scheider erover. Er wordt niets geweigerd; er is alleen nog geen gesloten ruimte.

## In de IFC

Een ruimte is een IfcSpace met zijn nummer (Name), naam (LongName) en Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Het volume is de oppervlakte maal de hoogte tot de verdieping erboven.

Een ruimtescheider is een IfcVirtualElement, de entiteit die IFC gebruikt voor een grens die niet gebouwd is. Hij heeft een lijn en geen lichaam. Een ander programma leest daarom geen wand en telt er niets voor.

## Nog niet beschikbaar

- Gebogen scheiders.
- Een ruimte die een hellend plafond volgt: het volume is altijd oppervlakte maal de verdiepingshoogte.
- Relaties voor ruimtegrenzen (IfcRelSpaceBoundary) worden niet geschreven, niet voor wanden en niet voor scheiders.

Zie ook [Ruimte- en oppervlaktetags](topic:room-and-area-tags), [Oppervlakken en oppervlaktegrenzen](topic:areas-and-area-boundaries).
