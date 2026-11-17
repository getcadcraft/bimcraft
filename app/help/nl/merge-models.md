---
title: Bewerkingen van twee personen in één model samenvoegen
summary: Laat git, Fossil of Mercurial twee bewerkte kopieën van hetzelfde IFC-model samenvoegen, object voor object, zodat twee personen aan één gebouw kunnen tekenen en hun werk kunnen combineren.
keywords: samenvoegen, git, fossil, mercurial, versiebeheer, conflict, drieweg, cadcraft merge, gitattributes, ifc, globalid, team, twee kopieën, takken
from: 50733df8
---

Twee personen nemen een kopie van hetzelfde gebouw; de een tekent de oostvleugel en de ander de westvleugel, en later moeten de kopieën één geheel worden. Als ze verschillende objecten hebben aangeraakt, kan een programma dat doen in plaats van een persoon.

## Hoe het werkt

Elke wand, deur, verdieping, ruimte en eigenschapsset in een IFC-bestand heeft een GlobalId die nooit verandert. Het samenvoegen zoekt objecten op die id op, niet op het getal dat het bestand eraan geeft (`#123`), omdat die getallen veranderen wanneer een programma opslaat. De onderdelen die aan een object hangen en geen eigen id hebben (plaatsingen, vormen, eenheden), worden vergeleken op wat ze bevatten.

Beide kopieën moeten dezelfde IFC-versie hebben (2x3, 4 of 4.3). Het samenvoegen houdt uw bestand zoals het is, met zijn volgorde en getallen, en voegt wat nieuw is toe, zodat een git-diff van de samenvoeging alleen laat zien wat het samenvoegen heeft veranderd.

## Instellen

Git heeft eenmalig per repository twee regels nodig:

```
# .gitattributes
*.ifc merge=cadcraft

# eenmalig, op elke computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Zonder git voert u `cadcraft merge <base> <ours> <theirs>` uit. Fossil en Mercurial nemen dezelfde drie bestanden in hun eigen instelling voor het samenvoegprogramma. Er wordt niets geüpload; alles draait op uw computer.

## De regels

- Een attribuut dat aan één kant is gewijzigd, wordt overgenomen. Dezelfde wijziging aan beide kanten wordt één keer overgenomen.
- Hetzelfde attribuut op twee manieren gewijzigd (dezelfde verdieping twee keer hernoemd) is een **conflict**: uw kant blijft staan en het rapport somt beide op. Open het resultaat en los het met de hand op.
- Een lijst van dingen (de wanden van een verdieping, de eigenschappen van een set) wordt als set samengevoegd: wat één kant heeft toegevoegd blijft, wat één kant heeft verwijderd wordt verwijderd. Twee personen die elk wanden aan dezelfde verdieping toevoegen, komen niet in conflict.
- Een object dat aan één kant is toegevoegd, blijft behouden, met zijn vorm en eigenschappen. Aan één kant verwijderd en aan de andere onaangeroerd: verwijderd. Aan één kant verwijderd en aan de andere gewijzigd: verwijderd, en gemeld.
- Het tijdstempel en de auteur van het bestand, en de eigenaarsgeschiedenis van elk object, blijven zoals uw kant ze heeft.

Geometrie wordt als geheel samengevoegd: de vorm van een wand komt van één kant, nooit punt voor punt gemengd. Gecomprimeerde IFC- en IFCX-bestanden worden niet samengevoegd. Open na een samenvoeging het resultaat in BimCraft en kijk in het paneel Problemen voordat u opslaat.
