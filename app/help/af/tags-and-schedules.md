---
title: Merk elemente en skeduleer volgens etiket
summary: Definieer jou eie etikette (’n naam, ’n tipe, die waardes wat toegelaat word, watter klasse), merk baie elemente op een slag, en maak skedules waarvan die kolomme, filters en groepe die etikette lees. Die etikette word in die IFC bewaar.
keywords: etikette, etiket, etikettering, pasgemaakte eienskappe, parameters, gedeelde parameters, eiendomstel, pset, skedule, filter, groepeer volgens, afwerking, brandgradering, grootmaat wysig, csv
from: 9cc7c90d
---

## Wat jy sal doen

'n Etiket is 'n eienskap van jou eie, soos *Afwerking* of *Brandgradering*. Jy definieer dit een keer vir die projek, stel dit op baie elemente op een slag, en elke skedule in BimCraft kan dit lees: die etiketskedule hier, {{ui:Hoeveelhede}}, Soek, Kleur volgens eienskap en [Dokumente uit die model](topic:documents-from-the-model).

## Stappe

1. Open 'n IFC-model, of begin 'n nuwe gebou.
2. In die linkerpaneel, onder {{ui:Hoeveelhede}}, open {{ui:Etikette}}.
3. Klik {{ui:Voeg 'n etiket by}}. Gee dit 'n naam, kies sy tipe, en as jy wil, lys die toegelate waardes (met kommas) en die klasse waarvoor dit is (`IfcDoor`, `IfcWall` …). Klik {{ui:Voeg die etiket by}}.
4. Kies die elemente in die model (Soek help: kies elke deur op een slag).
5. Onder {{ui:Etiketteer die keuse}}, kies of tik 'n waarde vir elke etiket wat jy wil stel, laat die ander soos hulle is, en klik {{ui:Pas toe op … gekose elemente}}.
6. Onder {{ui:Etiketskedule}}, merk die kolomme, voeg filters by, kies {{ui:Groepeer volgens}}, en dan {{ui:Laai CSV af}}.

## Wat jy behoort te sien

- 'n Stap in die veranderingslys vir elke definisie wat gestoor is en elke etikettering; {{ui:Ontdoen}} neem dit terug.
- Elemente van 'n klas waarvoor 'n etiket nie bedoel is nie, word uit daardie etiket gelaat, en die statusreël sê hoeveel.
- Die etiketskedule lys een ry per element, gegroepeer volgens die veld wat jy gekies het; klik op 'n ry se eerste sel om daardie element te kies.
- {{ui:Hoeveelhede}} lys die etikette onder `CadCraft_Tags`, so jy kan oppervlaktes of tellings volgens 'n etiket daar optel.

## Tipes

Die tipes is dieselfde lys as familieparameters: Lengte (millimeter), Hoek (grade), Getal, Heelgetal, Ja / Nee, Pen (1–16), Teks, Materiaal en Vulling. 'n Waarde wat nie by sy tipe pas nie, of nie een van die toegelate waardes is nie, word met 'n boodskap geweier, en niks verander nie.

## Goed om te weet

- Alles is gewone IFC, so ander programme lees die waardes: die definisies is in 'n eiendomstel `CadCraft_TagDefs` op die projek, die waardes in 'n eiendomstel `CadCraft_Tags` op elke element (een eienskap per etiket). Lengtes word in die lêer se lengte-eenheid geskryf.
- `IfcWall` in 'n etiket se klasse neem ook standaardgeval- en elemented-mure.
- Die hernoem van 'n etiket hernoem sy waardes op elke element in dieselfde stap. Die verwydering van 'n etiket verwyder net sy definisie: waardes wat reeds gestel is, bly op die elemente as gewone eienskappe. Maak hulle eers skoon (kies {{ui:Maak skoon}}) om hulle af te haal.
- Etikette in die CadCraft-tekenprogram (blokeienskappe) is nog nie gebou nie.
