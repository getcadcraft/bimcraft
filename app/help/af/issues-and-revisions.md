---
title: Kwessies, hersienings en die tekeninglogboek
summary: Teken elke stel blaaie wat jy uitgee aan, sien wat sedertdien op elke blad en element verander het, en hou werfinstruksies, werkstekeninge en gekoppelde modelle by die kwessie waarby hulle hoort.
keywords: kwessie, uitgereikte stel, ingediende stel, indiening, hersiening, hersienings, wat verander het, sedert kwessie, veranderingslogboek, tekeninglogboek, tekeningregister, oordragbrief, werfinstruksie, werkstekening, gekoppelde model, tender, konstruksie, momentopname, vergelyk
from: 4c732832
---

## Wat jy gaan doen

Teken 'n kwessie aan: watter blaaie uitgegaan het, op watter datum, met watter doel, elk by sy hersiening. Later vra jy wat sedert daardie kwessie verander het. Hou werfinstruksies en teruggestuurde werkstekeninge by die kwessie.

## Stappe

1. Maak in die linkerpaneel **Kwessies en hersienings** oop.
2. Kies **Teken 'n kwessie aan**. Die hersiening word voorgestel (A, dan B; 'n genommerde een soos P1 tel op). Kies waarvoor dit uitgereik word, aan wie dit gaan, die datum en die blaaie. Wanneer jou projekfase ingestel is, volg die doel dit. Wanneer die vergunningspakket 'n lys van ondersteunende dokumente het, word die blaaie wat aan daardie lys gekoppel is, vir jou aangemerk.
3. Laat **Stoor ook 'n afskrif van die model as uitgereik** aangemerk om die model presies te hou soos dit uitgegaan het. Die afskrif word afgelaai; sy naam, grootte en SHA-256 word by die kwessie gehou.
4. Kies **Teken hierdie kwessie aan**. 'n Blad wat sedert sy laaste uitreiking verander het, kry die nuwe hersiening. 'n Blad wat nie verander het nie, hou die hersiening wat dit het. Elke blad se titelblok wys sy hersiening.
5. Om te sien wat verander het, kies **Veranderinge sedert** langs 'n kwessie. Elke blad lees Dieselfde of Verander, met die elemente wat daarop bygevoeg, verander en verwyder is. Klik op 'n getal om daardie elemente te kies.
6. Kies **Voeg 'n rekord by** vir 'n werfinstruksie, 'n werkstekening, 'n merkstel, 'n gekoppelde model of 'n nota. Kies die kwessie waarteen dit is. 'n Lêer wat jy kies, word aangeteken volgens sy naam, grootte en SHA-256; die lêer bly waar dit is.
7. **Tekeninglogboek** wys een ry vir elke blad en een kolom vir elke kwessie. **Laai die logboek af (CSV)** stoor dit met die kwessies en rekords.
8. **Stoor die kwessiegeskiedenis** skryf 'n `.issues.json`-lêer. MarkupCraft, TakeoffCraft en DetailCraft lees dit met **Lees 'n kwessiegeskiedenis**.

## Goed om te weet

- Die geskiedenis word binne die IFC-lêer gehou (eiendomstel `CadCraft_Issues` op die projek). Ander programme ignoreer dit.
- 'n Blad tel as verander wanneer sy eie opstelling verander het, of wanneer 'n element wat dit wys, verander het: 'n plan wys sy vlak, 'n aansig of snit wys die hele model, en 'n deur- of vensterskedule wys sy deure of vensters.
- 'n Element tel as verander wanneer 'n eienskap, sy posisie, sy grootte of sy vorm verander het.
- Om presies te sien watter eienskap verander het, maak die gestoorde afskrif van die uitgereikte model oop met **Vergelyk weergawes**.
- Om 'n kwessie te verwyder, hou sy rekords, sonder 'n kwessie. Elke stap is een Ontdoen.
- 'n Model met meer as 60,000 elemente hou nie 'n rekord van elke element by die kwessie nie. Blaaie word steeds vergelyk.

## Nog nie gebou nie

- Blaaie word nie as PDF's met die kwessie gestoor nie.
- 'n Hersieningswolk word nie op BimCraft se eie blaaie geteken nie. Teken wolke in MarkupCraft teen die kwessie aan.
