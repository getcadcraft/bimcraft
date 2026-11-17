---
title: Bou 'n toerustingskedule en voer CSV uit
summary: Verander die itemetikette in 'n voedselbedryf-tekening in 'n toerustingskedule, filtreer dit, spring na elke item op sy blad, en laai dit af as CSV.
keywords: toerusting, skedule, voedselbedryf, kombuis, itemetikette, kcl, eienskappe, bom, materiaallys, csv, sigblad, uitvoer, dataonttrekking
from: e3faa1c8
---

## Wat jy gaan doen

Lees die toerustinglys uit 'n kombuis- of voedselbedryf-tekening, kontroleer dit, vind elke item op die plan, en laai dit af as 'n sigbladlêer.

Dit werk op tekeninge waarvan die toerustingetikette hul data as blokeienskappe dra, soos kombuisontwerp-biblioteke soos KCL doen: elke etiket hou die itemnommer (`KCL-ITEM`), hoeveelheid, kategorie, vervaardiger, model, elektriese en loodgieterswerkdata, en opmerkings. Ander tekeninge het geen {{ui:Equipment}}-oortjie nie.

## Stappe

1. Maak die tekening oop, verkieslik vanaf sy projekgids sodat sy gekoppelde tekeninge ook laai.
2. Klik die {{ui:Equipment}}-oortjie bo die tekening. Die etiket wys hoeveel items op blaaie is, byvoorbeeld "Toerusting (88)".
3. Lees die skedule: **Item**, **Hoev.**, **Toerusting**, **Vervaardiger**, **Model**, **Elektries**, **Loodgieterswerk** en **Waar**.
4. Kies wat in die lys bo die tabel gelys word: **Elke blad**, een blad, **Nie op enige blad nie**, of **Alles met etikette in die tekening**. Elke keuse wys sy telling.
5. Tik in die filterblokkie ("Filter: kategorie, vervaardiger, model…") om die lys te vernou, byvoorbeeld `yskas` of `208`.
6. Klik 'n item se bladnaam in die **Waar**-kolom.
7. Kyk na die tekening: BimCraft skakel na daardie blad, zoom in op die item en trek 'n ring daarom. Die statuslyn sê "Item *n*, *kategorie* is omkring op *blad*."
8. Klik {{ui:Equipment}} om terug te gaan na die skedule.
9. Klik {{ui:Download CSV}}.

## Wat jy moet sien

- 'n Lêer genaamd "*tekeningnaam* equipment.csv" (met die bladnaam in hakies as jy een blad gelys het) in jou aflaaivouer. Dit open in Excel, Numbers, LibreOffice of Google Sheets.
- Die statuslyn: "Afgelaai *lêernaam* (*n* items)."

Die CSV het hierdie kolomme: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (how many tags). Dit laai presies die rye af wat die tabel wys, na die keuselys en die filter.

## Hoe die skedule gebou word

- Dit word uit die **etikette self** gelees, nie uit die skedule-tabel wat op die blad geteken is nie. Die nota bo die tabel sê hoeveel etikette gelees is.
- 'n Ry is een itemnommer met een stel data. Sy hoeveelheid is die **som** van sy etikette, soos 'n gedrukte skedule dit tel: rakke wat "5" op een plek en "3" op 'n ander is, is 8, gewys as "5 + 3".
- **Waar** lys die blaaie wat elke item wys, uitgewerk uit wat elke blad se aansigvensters wys, wat dit is wat druk. "Slegs model" beteken geen blad wys dit nie.
- **Nommer twee keer gebruik** merk een itemnommer op twee verskillende stukke toerusting. Die ry het 'n geel merk.
- Etikette wat geen blad wys nie, word apart gehou onder **Nie op enige blad nie**. Dit is dikwels oorskiet van vroeëre planne of ander werk, en word nooit by **Elke blad** gemeng nie.
- **Elektries** wys amp, kW, HP, volt, fase, aansluiting en prop soos gemerk. **Loodgieterswerk** wys aansluitingsgroottes: CW koue water, HW warm water, DD direkte afvoer, ID indirekte afvoer, en gas. Ander etiketvelde word nog nie gewys nie.

## Algemene foute

- **Geen {{ui:Equipment}}-oortjie nie.** Die tekening het geen `KCL-ITEM`-etikette nie, of sy toerusting is getekend sonder data. Daar is niks om te lees nie.
- **Tellings verskil van die gedrukte skedule.** 'n Gedrukte skedule kan reserwenommers lys of korter name gebruik as die etikette. Vertrou die etikette vir wat geplaas is; gaan verskille met die ontwerper na.
- **Die CSV wys vreemde karakters.** Die lêer is UTF-8. Maak dit oop met jou sigbladprogram se invoeropdrag en kies UTF-8 as die program vra.
- **'n Sel begin met 'n apostrof.** Waardes wat met `=`, `+`, `-` of `@` begin, kry 'n voorste `'` sodat sigblaaie hulle nie as formules uitvoer nie.
- **{{key:F}} en {{key:P}} doen niks nie.** Hulle werk op die tekening, nie op die skedule nie. Klik eers 'n bladoorblad.
