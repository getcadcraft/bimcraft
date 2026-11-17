---
title: Vind gekoppelde tekeninge en prente
summary: Wys 'n tekening se gekoppelde tekeninge (xrefs) en titelblokprente, deur die vouer oop te maak of die lêers met die hand by te voeg.
keywords: xref, eksterne verwysing, gekoppelde tekening, heg, oorlê, beeld, prent, logo, titelblok, ontbrekende xref, etransmit, verwysingbestuurder
from: 5593d4b1
---

## Wat jy sal doen

Maak 'n tekening volledig: wys die tekeninge waarna dit skakel (eksterne verwysings, of xrefs) en die prente wat dit gebruik, soos 'n logo in die titelblok.

## Die maklike manier: maak die vouer oop

1. Klik {{ui:Maak 'n vouer oop}} en kies die vouer wat die tekening en sy skakels hou, byvoorbeeld die hele `Cad`-vouer van 'n projek.
2. Blaai in die vouerverslag na **CAD-tekeninge**.
3. Klik die tekening.
4. Kyk na die {{ui:Eienskappe}}-paneel aan die regterkant, onder **Gekoppelde tekeninge** en **Beelde**.

BimCraft soek elke gekoppelde tekening volgens sy naam ("*naam*.dwg"), eers in dieselfde vouer as die tekening, dan oral in die vouer wat jy oopgemaak het. Prente word op dieselfde manier gevind, en ook volgens 'n soortgelyke naam: 'n eTransmit- of Revit-uitvoer voeg dikwels die projek se naam voor, so `logo.png` word gevind as `Tower-logo-5425051.png`.

## Die ander manier: voeg lêers met die hand by

1. Maak die tekening alleen oop.
2. Klik aan die regterkant, onder **Gekoppelde tekeninge**, {{ui:Voeg gekoppelde tekeninge by…}}. Onder **Beelde** is die knoppie {{ui:Voeg prente by…}}; albei open dieselfde kieser.
3. Kies die gekoppelde `.dwg`-lêers en die prentlêers. Jy kan verskeie tegelyk kies.
4. Wag terwyl BimCraft die tekening weer met hulle oopmaak.

## Wat jy behoort te sien

Elke gekoppelde tekening en prent word gelys met 'n etiket:

| Etiket | Beteken |
|---|---|
| **Gewys** | Gevind en geteken. Die pad daaronder sê waar dit vandaan kom, of "deur jou bygevoeg". |
| **Gewys, soortgelyke naam** | 'n Prent gevind volgens 'n soortgelyke naam. Kontroleer dat dit die regte een is. |
| **Nie gevind nie** | Nie in die vouer of die lêers wat jy bygevoeg het nie. 'n Ontbrekende prent wys as sy leë raamwerk. |
| **TIFF kan nie in 'n blaaier gewys word nie** | Die prent is 'n TIFF-lêer, wat blaaiers nie teken nie. Stoor dit as PNG met dieselfde naam en voeg dit by. |
| **Kon nie gelees word nie** | Die lêer is gevind, maar kon nie as 'n prent oopgemaak word nie. |

Die {{ui:Tekening}}-paneel aan die linkerkant wys "*n* van *m* gelaai" vir gekoppelde tekeninge. Gekoppelde tekeninge se lae verskyn in {{ui:Lae}} as "*skakelnaam*|*laag*".

## Algemene foute

- **Net die tekening oopmaak.** "Hierdie tekening wys net sy eie inhoud totdat sy gekoppelde tekeninge bygevoeg word. As jy die hele projekvouer oopmaak, word hulle outomaties gevind."
- **'n Vouer te klein oopmaak.** As die skakels in 'n sustervouer woon, maak eerder die ouervouer oop.
- **Hernoemde skakels.** BimCraft pas gekoppelde tekeninge volgens naam. 'n Skakel wat op die skyf hernoem is, word nie gevind nie; voeg dit met die hand by.
- **Skakels van skakels.** BimCraft laai die tekeninge waarna die oop tekening skakel. Tekeninge wat binne daardie tekeninge gekoppel is, word nie gesoek nie, so hulle wys gewoonlik nie in hierdie weergawe nie.
