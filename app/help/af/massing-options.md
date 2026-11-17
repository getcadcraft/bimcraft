---
title: Massa-opsies langs mekaar gehou
summary: Hou verskeie massa-opsies in dieselfde model, maak een die huidige opsie, kontroleer dit teen die terrein se boulyne en serwitute, neem massa van ModelCraft oor, en ontwikkel die gekose opsie in mure en vloere.
keywords: massa, massa-opsie, opsie, opsies, opsiestel, skema, konsep, konseptontwerp, fase 2, alternatiewe, vergelyk opsies, huidige opsie, gebou-massa, druk-trek, modelcraft, civilcraft, bruto vloeroppervlakte, voetspoor, volume, ontwikkel massa, serwituut, boulyn, terugsprong
from: 69a01459
---

## Wat jy gaan doen

Hou die massa-opsies van 'n konsep in een model in plaas van in aparte lêers: verskeie gebou-massas langs mekaar, een daarvan die **huidige opsie**, die ander bewaar vir vergelyking.

'n Massa-opsie is 'n gebou-massa: 'n omtrek wat tot 'n hoogte opgetel is, met 'n aantal verdiepings. Dit is nog nie mure nie. Jy kan soveel hou as jy wil, gegroepeer in **opsiestelle** (opsies van een stel is alternatiewe vir mekaar).

## Hou 'n opsie

1. Open {{ui:Vertrekprogram na massa}}, tik die vertrekprogram en die omtrek in, en kies {{ui:Soek opsies}}.
2. Kies een van die opsies wat gelys word.
3. Onder {{ui:Massa-opsies in die model}} tik 'n naam vir die {{ui:Opsiestel}} as jy een wil hê, en kies {{ui:Hou die gekose opsie}}.

Die opsie verskyn in die model as 'n gebou-massa en in die lys, met sy verdiepings, voetspoor, bruto vloeroppervlakte en volume. Niks word gebou nie. Hou 'n ander op dieselfde manier.

Die eerste opsie van 'n stel is sy huidige opsie. Elke stap is een ontdoen-stap.

## Die huidige opsie

Een opsie van elke stel is die huidige een. Dit beteken twee dinge:

- **Sy verdiepings tel as die gebou se vloeroppervlaktes.** Die huidige opsie het een ruimte per verdieping wat daardie verdieping se bruto oppervlakte dra, so enigiets wat vloeroppervlaktes lees, sien die opsie wat van krag is en geen ander nie.
- **Dit word teen die terrein gekontroleer.** As dit buite die terreingrens staan, oor 'n boulyn of op 'n serwituut, verskyn 'n waarskuwing wat dit noem in {{ui:Probleme}}. Dit is net 'n waarskuwing: niks word geweier nie. Opsies wat nie huidig is nie, word nie gekontroleer nie.

Kies {{ui:Maak huidig}} op 'n ander opsie om dit te verander.

{{ui:Verberg die opsies wat nie huidig is nie}} verberg die ander in die 3D-aansig. Dit is net vir hierdie blaaier en word nie in die lêer gestoor nie.

## Massa van ModelCraft

In ModelCraft stuur {{ui:Voer uit}} › {{ui:Massa na BimCraft…}} elke groep of komponent as een opsie. BimCraft maak die lêer oop met die opsies gelys.

Om hulle in 'n model te bring wat reeds oop is, kies {{ui:Voeg massa-opsies uit 'n lêer by}} en kies die `.ifc`-lêer. Sy massas kom in as opsies van 'n stel, in een ontdoen-stap, en staan waar hulle gemodelleer is. 'n Lêer van gebou-massas van CivilCraft werk op dieselfde manier.

'n Opsie wat "(vorm vereenvoudig)" gemerk is, was nie 'n gewone regop blok in ModelCraft nie (dit trek terug, hel af of is nie geslote nie). Sy massa hier is die omtrek van sy basis, opgetel tot sy hoogte. Sy vloeroppervlaktes en sy volume is die wat uit die soliede self gemeet is.

## Ontwikkel die gekose opsie

Kies {{ui:Ontwikkel}} op 'n opsie. Dit word vlakke (opgetel tot sy aantal verdiepings), mure rondom sy omtrek op elke verdieping en 'n vloerplaat op elkeen, in een ontdoen-stap. Die opsie verlaat die lys; die ander opsies bly soos hulle was. Daar is nog geen dak nie.

{{ui:Hernoem}} verander 'n opsie se naam, en {{ui:Verwyder}} haal dit uit die model. Om die huidige opsie te verwyder maak die stel se eerste ander opsie huidig.

## Wat jy behoort te sien

- Elke gehoude opsie as 'n blok in die 3D-aansig en 'n ry in die lys.
- "(huidig)" langs een opsie van elke stel.
- 'n Waarskuwing in {{ui:Probleme}} wanneer die huidige opsie die terreingrens, 'n boulyn of 'n serwituut kruis.

## Goed om te weet

- In die IFC-lêer is 'n opsie 'n building element proxy met die eiendomstel `CadCraft_SiteMass` (sy opsiestel, opsienaam en of dit huidig is, is in daardie stel). Die huidige opsie se verdiepings is ruimtes van tipe `MassingFloor`. Ander programme lees die proxy as 'n generiese element.
- Om 'n opsie te hou voeg nooit vlakke by nie; om een te ontwikkel doen wel.
- 'n Assistent kan die gehoude opsies lys, een hou, een huidig maak, hernoem, ontwikkel of verwyder.
