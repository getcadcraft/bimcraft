---
title: Vouerverslag: rolle, statusse en skakels
summary: Elke etiket in die vouerverslag, wat dit beteken, en hoe die Begin hier-voorstel gekies word.
keywords: vouerverslag, rolle, status, voltooi, onvolledig, onleesbaar, geskakel, agtergrond, begin, sentraal, familie, slegs rugsteun, begin hier, skakelstatus
from: b35bdd10
---

## Kopiestatus

Elke kopie van 'n model, hoofdlêer en genommerde rugsteunlêers ingesluit, kry 'n kopskontrole.

| Etiket | Betekenis |
|---|---|
| **Compleet** | Die lêer se kop en indeks pas binne die lêer |
| **Onvolledig** | Die lêer is korter as sy eie indeks sê: dit is afgesny terwyl dit gekopieer, opgelaai of gesinkroniseer is, of dit is 'n wolklêer wat nog "net aanlyn" is |
| **Onleesbaar** | Die lêer is nie 'n geldige saamgestelde lêer nie, of kon nie gelees word nie |

In die **Status**-kolom wys 'n model **Compleet**, 'n amber "*n* onvolledig" wanneer ten minste een kopie sleg is maar 'n ander gesond is, of rooi **Onvolledig** wanneer geen kopie gesond is nie.

## Rugsteunlêers

Lêers genoem `Name.0001.rvt`, `Name.0002.rvt` en so aan is genommerde rugsteunlêers van `Name.rvt`. Hulle word onder hul model gegroepeer, nuutste eerste, in **Alle … kopieë**. Die kaart word uit die hoofdlêer gelees wanneer dit volledig is, anders uit die nuutste volledige rugsteun ("nuutste volledig").

## Rolle

Word onder 'n model se naam in skuinsdruk gewys.

| Rol | Betekenis |
|---|---|
| Geskakel deur *ander model*: agtergrond | 'n Ander model in die vouer skakel hierdie een, so dit is waarskynlik iemand anders se agtergrond, soos 'n konsultant se model |
| Begin- of naamlose lêer | 'n Naam soos Blank, Template, Default, Untitled of Project1: 'n beginpunt, of 'n lêer wat nooit behoorlik benoem is nie |
| Sentrale model | 'n Werkverdeelde sentrale model. Werk gebeur in 'n plaaslike kopie, nie hier nie |
| Familie ('n onderdeel) | 'n `.rfa`- of `.rft`-lêer: 'n komponent, nie die projek nie |
| Slegs rugsteun | Die hoofdlêer is weg en net genommerde rugsteun bly oor |

## Hoe Begin hier gekies word

BimCraft pas die redenasie toe wat 'n ervare gebruiker sou gebruik:

1. Kandidate is leesbare projeklêers (`.rvt`, `.rte`) wat nie deur 'n ander model geskakel word nie en nie beginlêers is nie.
2. Sentrale modelle en modelle wat net uit rugsteun bestaan, tel net wanneer niks beter bestaan nie.
3. Van die kandidate wen die een wat die laaste gestoor is.

Die kassie lys sy redes, en waarsku wanneer 'n lêer wat soos die voor-die-hand-liggende keuse lyk beskadig is, wanneer ander modelle agtergrond is, en wanneer die keuse 'n sentrale model is. Dit is 'n beste raai; gaan na met wie die projek laas gewerk het.

## Skakelstatus

| Etiket | Betekenis |
|---|---|
| **In hierdie vouer** | Gevind by die gestoorde relatiewe pad, of aan die einde van die gestoorde volle pad binne die vouer |
| **Dieselfde naam gevind** | Nie by sy pad nie, maar 'n lêer met dieselfde naam is in die vouer. Gaan na dat dit die regte een is |
| **Biblioteeklêer** | 'n Sleutelnota- of samestellingskodetabel. Hierdie kom saam met die program op elke rekenaar |
| **Nie in hierdie vouer nie** | Nêrens in die vouer gevind nie |

Die kolom **Skakels gevind** in **Modelle** wys hoeveel van 'n model se skakels gevind is, uit dié wat in die vouer verwag word (biblioteeklêers word nie getel nie).

## Opsy gesit

| Reël | Betekenis |
|---|---|
| Revit-onderhoudsvouers (nie gelees nie) | `*_backup`, `*_log` en `Revit_temp`-vouers, plus versteekte vouers en `__MACOSX` |
| Slot-, log- en rugsteunoorblyfsels | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` en `.slog`-lêers |
| Ander lêers | Alles anders (die eerste 40 word by naam genoem) |
