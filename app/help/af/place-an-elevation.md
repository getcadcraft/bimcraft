---
title: Plaas 'n aansig en maak sy aansig oop
summary: Plaas 'n aansigmerker op die vloerplan, wys dit in die rigting waarin dit lyk, vind dan sy tekening in die projekblaaier, wysig daarin en plaas dit op 'n blad. Stappe vir die lintuitlegte en vir die klassieke uitleg.
keywords: aansig, aansigaansig, aansigmerker, aansigetiket, plaas 'n aansig, nuwe aansig, maak 'n aansig, buite-aansig, syaansig, vooraansig, aansig vanaf 'n punt, waar is my aansig, maak aansig oop, aansig op 'n blad, draai aansig om, hernoem aansig, noord-aansig, rangskik aansigte, verdeelde aansig, plan en 3D naasmekaar
from: a7cfd2b9
---

## Wat jy sal doen

Maak jou eie aansig: 'n tekening van die gebou gesien vanaf 'n punt wat jy kies, en in die rigting wat jy kies. Dit neem twee klikke op 'n vloerplan. Die tekening word dan saam met die gebou se ander aansigte gelys.

:::note
Die vier kante is reeds daar. Elke gebou het Noord-, Oos-, Suid- en Wes-aansigte in die {{ui:Project browser}} onder {{ui:Elevations}} sonder dat jy iets hoef te plaas. Plaas jou eie een wanneer jy 'n aansig van elders wil hê: reguit op 'n skuins vleuel, vanuit 'n binnehof, of van een muur binne 'n vertrek.
:::

## Waar die hulpmiddel is

- Lintuitlegte: {{ui:View}} › **Skep** › {{ui:Elevation}}.
- Klassieke uitleg: skakel {{ui:Draw}} aan, en kies dan {{ui:Build}} › {{ui:Elevation}}.
- Enige menustyl: die opdrag heet {{ui:Elevation}}; die opdragpalet vind dit, en die opdragreël neem ELEVATION.

## Stappe

1. Kies {{ui:Elevation}}. 'n Aansig word op 'n vloerplan geplaas, so as jy in die 3D-aansig was, wys BimCraft die plan van die vlak waarop jy was. Die aanwyser sê **Klik waar die aansig staan**.
2. Klik waar die aansig vandaan geneem word. Vir 'n buite-aansig, klik buite die gebou, 'n bietjie weg van die muur wat jy wil sien.
3. Die aanwyser sê nou **Klik hoe dit lyk**. Beweeg na die gebou toe: 'n pyltjie wys die rigting, en die kort lyn oor jou eerste klik is die kant waarvandaan die aansig kyk. Klik.
4. 'n Sirkel met 'n nommer en 'n aanwyser verskyn op die plan. Dit is die aansigmerker. Die eerste is 1, die volgende 2.
5. Druk Esc om klaar te maak, of gaan voort en plaas nog een.

Om 'n merker te plaas is een stap: {{key:Mod+Z}} doen dit ongedaan.

## Maak die tekening oop

Die plan bly voor jou na die tweede klik. Die tekening is in die {{ui:Project browser}}:

1. Maak {{ui:Elevations}} oop. Jou s'n word na die vier kante gelys as **Elevation 1**.
2. Klik die potloodknoppie {{ui:Edit in this view}} op die ry om die tekening te sien en daarin te werk: mure, deure, vensters en vlakke skuif, notas en maatte byvoeg. Sien [Wysig in aansigte en snitte](topic:edit-in-elevations).
3. Klik die ry self om die tekenstel oop te maak, of voeg die aansig by 'n blad van jou eie. Sien [Aansigte en blaaie](topic:views-and-sheets).

In die klassieke uitleg is die projekblaaier in die linkerpaneel terwyl {{ui:Draw}} aan is. In die lintuitlegte is dit die {{ui:Project Browser}}-oortjie onder Eienskappe.

## Wat die aansig wys

- Alles voor die merker, so ver as die gebou gaan. Niks agter dit nie.
- Die vlakke, met hul name en hoogtes.
- As die merker binne die gebou staan, word wat dit omring daar gesny, soos 'n snit dit sny. Vir 'n skoon buite-aansig, staan buite.

## Verander dit

Kies die merker op die plan (klik sy sirkel met {{ui:Select}}). Eienskappe het:

- {{ui:Label}}: sy nommer of 'n naam van jou eie, tot 8 karakters.
- {{ui:Flip the view}}: kyk die teenoorgestelde rigting vanaf dieselfde plek.
- {{ui:Look as far as}}: hoe ver voor die merker die aansig reik. 0 wys alles.

Druk Delete om die merker en sy tekening te verwyder. Ontdoen sit albei terug.

:::tip
Om die plan en die 3D-aansig terselfdertyd te sien terwyl jy werk, gebruik {{ui:View}} › **Vensters** › {{ui:Tile Views}} in die lintuitlegte, of {{ui:Split}} in die klassieke uitleg. 'n Klik op 'n aansig-oortjie gaan terug na een aansig.
:::

## Beperkings

- 'n Merker kan nog nie op die plan gesleep of gedraai word nie. Verwyder dit en plaas dit weer, of gebruik {{ui:Flip the view}}.
- In die lys van aansigte wat jy by 'n blad kan voeg, word 'n aansig van jou eie saam met die snitte gelys.
- Deur- en vensteretikette word op die vier kant-aansigte geteken, nie op een wat jy geplaas het nie.

## In die IFC

Die merker word in die lêer gestoor as 'n IfcAnnotation genaamd "Elevation 1" met die objektipe "Elevation marker", op die vlak waarop dit geplaas is. Ander programme wys dit as 'n annotasie; die tekening self word elke keer deur BimCraft uit die model gemaak.
