---
title: Modelgroepe
summary: Maak gekose elemente een benoemde groep, plaas die groep weer elders, en verander een kopie om hulle almal te verander.
keywords: groep, modelgroep, groepering, ontgroepeer, instansie, kopieer, herhaal, tipiese eenheid, baai, woonstel, wysig groep, IfcGroup
from: 121c5027
---

## Wat jy sal doen

Groepeer 'n tipiese baai, plaas dit verskeie kere, en verander elke kopie deur een te verander.

## Waar die hulpmiddel is

- Lintuitlegte: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Klassieke uitleg: die Teken-balk › {{ui:Rooms}}-kieslys › Modelgroep.

## Stappe

1. Met Kies, kies die elemente: klik een, Ctrl+klik of Shift+klik die ander.
2. Kies {{ui:Model Group}}. Hulle word dadelik 'n groep. Tik eers 'n {{ui:Groepnaam}} in die ry om dit te benoem, of tik een daarna om dit te hernoem.
3. Druk {{ui:Plaas nog een}} en klik waar die kopie moet staan: die linkeronderhoek daarvan gaan na die klik.
4. Verander enige kopie: skuif 'n muurpunt, verander die grootte van 'n deur, skrap 'n kolom. Elke ander kopie van die groep verander in dieselfde stap, en een Ontdoen neem alles terug.
5. Solank Modelgroep in jou hand is, kies 'n klik op 'n element sy hele groep.

## Ander dinge wat jy kan doen

- {{ui:Add the picked}}: voeg meer elemente by die groep wat jy laas gekies het.
- {{ui:Ungroup}}: hierdie kopie word weer gewone elemente. Die ander kopieë bly 'n groep.
- Skuif 'n hele kopie met Skuif: dit is dieselfde groep op 'n nuwe plek; die ander beweeg nie.
- Skrap die elemente van 'n kopie en daardie kopie is weg.

## Wat in 'n groep kan wees

Mure met hul deure en vensters, kolomme en geteekende vloere kan weer geplaas word en gelyk gehou word. 'n Groep mag ook ander elemente bevat, maar dan kan dit nog nie weer geplaas word nie; die ry sê waarom.

Kopieë word geskuif, nie gedraai of gespieël nie.

## In die IFC

'n Groep is 'n IfcGroup met 'n IfcRelAssignsToGroup na sy lede, wat gewone mure, kolomme en vloere bly. Elke kopie van een groep dra dieselfde definisie-ID.

## Nog nie gebou nie

- Draai of spieël 'n kopie.
- Trappe, dakke, kamervloere en biblioteekitems in 'n groep wat weer geplaas word.
- 'n Muur se profiel, skuinste en muuropenings word nie na kopieë gedra nie.
- Groepe binne groepe.

Sien ook [Skuif, belyn en versprei](topic:move-align-distribute).
