---
title: Voeg twee mense se wysigings van een model saam
summary: Laat git, Fossil of Mercurial twee gewysigde afskrifte van dieselfde IFC-model voorwerp-vir-voorwerp saamvoeg, sodat twee mense op een gebou kan teken en die werk kan saamvoeg.
keywords: samevoeg, git, fossil, mercurial, weergawebeheer, konflik, drieweg, cadcraft-samevoeg, gitattributes, ifc, globalid, span, twee afskrifte, takke
from: 50733df8
---

Twee mense neem 'n afskrif van dieselfde gebou, een teken die oostelike vleuel en een die westelike, en later moet die afskrifte een word. As hulle verskillende voorwerpe aangeraak het, kan 'n program dit doen in plaas van 'n persoon.

## Wat dit laat werk

Elke muur, deur, vlak, vertrek en eienskapstel in 'n IFC-lêer het 'n GlobalId wat nooit verander nie. Die samevoeging soek voorwerpe op daardie id, nie op die nommer wat die lêer aan hulle gee nie (`#123`), want nommers verander wanneer 'n program stoor. Die dele wat aan 'n voorwerp hang sonder 'n id van hul eie (plasings, vorms, eenhede) word vergelyk volgens wat hulle bevat.

Beide afskrifte moet dieselfde IFC-weergawe wees (2x3, 4 of 4.3). Die samevoeging hou jou lêer soos dit is, sy volgorde en sy nommers, en voeg wat nuut is by, sodat 'n git-diff van die samevoeging net wys wat die samevoeging verander het.

## Stel dit op

Git benodig twee reëls een keer per bewaarplek:

```
# .gitattributes
*.ifc merge=cadcraft

# eenmalig, op elke rekenaar
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sonder git, voer `cadcraft merge <base> <ours> <theirs>` uit. Fossil en Mercurial neem dieselfde drie lêers in hul eie samevoeg-hulpmiddelinstelling. Niks word opgelaai nie; alles loop op jou rekenaar.

## Die reëls

- 'n Eienskap wat net aan een kant verander is, word geneem. Dieselfde verandering aan albei kante word een keer geneem.
- Dieselfde eienskap wat op twee maniere verander is (dieselfde vlak twee keer hernoem) is 'n **konflik**: jou kant bly en die verslag lys albei. Maak die resultaat oop en regstel dit met die hand.
- 'n Lys van dinge (die mure van 'n vlak, die eienskappe van 'n stel) word as 'n stel saamgevoeg: wat enige kant bygevoeg het, word behou, en wat enige kant verwyder het, word verwyder. Twee mense wat elk mure by dieselfde vlak voeg, veroorsaak nie 'n konflik nie.
- 'n Voorwerp wat aan enige kant bygevoeg is, word behou, met sy vorm en eienskappe. Aan een kant verwyder en aan die ander kant onaangeraak: verwyder. Aan een kant verwyder en aan die ander kant verander: verwyder, en gerapporteer.
- Die tydstempel en outeur van die lêer, en elke voorwerp se eienaargeskiedenis, bly joune.

Geometrie word as geheel saamgevoeg: 'n muur se vorm kom van een kant, nooit punt-vir-punt gemeng nie. Gesipte (zip) IFC- en IFCX-lêers word nie saamgevoeg nie. Ná 'n samevoeging, maak die resultaat oop in BimCraft en kyk na die Probleme-paneel voordat jy stoor.
