---
title: Kontroleer pype en lugkanale teen die struktuur
summary: Laat die voorafgemaakte botsingstelle van pype en lugkanale teen mure, plate, balke en kolomme loop, vind lope wat nader aan die struktuur is as hul isolasie en 'n speling, en lys die openings wat lope deur mure en plate nodig het as CSV en BCF.
keywords: mep, botsing, botsingstoets, koördinasie, struktuur, mure, plate, balke, kolomme, vrye ruimte, sagte botsing, isolasie, speling, opening, openings, deurdringing, mou, kern, bouwerk, bcf, csv
from: 2d597f01
---

## Wat jy gaan doen

Maak seker die dienste pas by die gebou: wat in die struktuur indring, wat te na aan dit loop, en waar die mure en plate gate nodig het. Maak {{ui:Botsingstoets}} oop in die linkerpaneel; die afdeling **Pype en lugkanale teen die struktuur** is onder die gewone toets.

## Harde botsings

Die twee stellyste bied nou ook **Pype en lugkanale**, **Mure**, **Plate en dakke**, **Balke**, **Kolomme** en **Struktuur** (al vier) aan, met hoeveel elemente elk hou. Klik {{ui:Pype en lugkanale × struktuur}} om die eerste en die laaste te kies en die toets te laat loop; of kies enige paar self en klik {{ui:Begin}}. Sien [Kontroleer vir botsings](topic:clash-check).

## Vrye ruimtes

Sommige dienste het ruimte rondom nodig: hul isolasie, en ruimte om te werk of vir 'n mou.

1. Gee 'n pyp- of lugkanaallope hul **Isolasie**-dikte in Eienskappe (niks word daarvoor geteken nie).
2. Tik die **Speling rondom pype en lugkanale** (mm) in die Botsingstoets.
3. Klik {{ui:Kontroleer vrye ruimte}}: elke deel wat nader aan 'n muur, plaat, balk of kolom is as sy isolasie plus die speling, word gelys met die afstand wat dit het en die afstand wat dit wil hê. Klik op 'n reël om die twee te sien.

'n Deel wat deur 'n muur of plaat loop, is 'n opening, nie 'n vrye ruimte nie, en word daar gelys.

## Openings nodig

Klik {{ui:Openings nodig}}. Waar 'n lope se middellyn deur 'n muur of plaat gaan, lys BimCraft die opening wat dit nodig het: rond vir 'n ronde pyp of lugkanaal, andersins reghoekig, so groot soos die lope se buitegrootte plus twee keer sy isolasie plus twee keer die speling, gesentreer waar die lope kruis. Klik op 'n reël om die lope en die muur of plaat te sien.

- {{ui:Openings as CSV}}: een reël per opening met die lope, sy grootte en isolasie, die opening se grootte, die element wat dit deurloop en sy GlobalId, die vlak, die middelpunt se X, Y en Z, en hoe ver die lope deur gaan.
- {{ui:Openings as BCF-kwessies}}: een kwessie per opening, met 'n kamera wat daarna kyk en die lope en die element wat gekies is, vir die strukturele ingenieur se program.

:::note
Niks word gesny nie: die openings is 'n lys vir die mense wat hulle dimensioneer. Die speling is joune om te tik; geen kode sê hoe groot 'n opening moet wees nie. Balke en kolomme is botsings, nie openings nie: of 'n pyp een mag deurloop, is die strukturele ingenieur se besluit.
:::
