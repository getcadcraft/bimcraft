---
title: Stuur pyp na 'n spanningsprogram of isometriese program, en lees dit terug (PCF)
summary: Skryf die model se pyplope as 'n PCF-pypkomponentlêer, of lees 'n PCF-lêer van 'n pypspanning- of isometriese program en teken sy pyp as lope.
keywords: pcf, pypkomponentlêer, pypspanning, isometries, isometriese, uitvoer, invoer, pypwerk, aanleg, staalpyp, 'n projek skuif, ander sagteware
from: 24f91355
---

## Wat jy gaan doen

PCF is die platteks-lêer wat pypspanning- en isometriese programme lees en skryf. Dit lys elke pyplyn se komponente met hul eindpunte en boorings.

## Uitvoer

1. Kies die Pyp-gereedskap. Die opsiebalk wys **Voer PCF uit**.
2. Klik daarop. Elke pyploop in die model word geskryf: reguit pyp, elmboë ('n draai van 90 grade, anders 'n buiging), T-stukke met hul takpunt, reduseerstukke en kleppe.
3. Die lêer gebruik millimeter. Boorings is nominale deursnee in millimeter. 'n Elmboog se middelpunt is sy hoek, waar sy twee bene ontmoet.

PCF word vir staal-stomplaspyp geskryf. 'n Loop in 'n ander materiaal word ook geskryf, met staalkomponentsleutels, en in die Probleme-paneel aangeteken.

## Invoer

1. Kies die Pyp-gereedskap en klik **Voer PCF in…**, en kies dan die lêer.
2. Reguit pyp tot elmboë, buigings, kleppe en flense word een loop op die huidige vlak. 'n Groottewisseling begin 'n nuwe loop. 'n T-stuk se tak word sy eie loop wat by die T-stuk se middelpunt begin.
3. Die model lê sy eie passtukke. Reduseerstukke en T-stukke word nie gekopieer nie: hulle verskyn waar lope van verskillende groottes, of 'n tak, ontmoet.

:::note
Hoogtes in die lêer word gelees as hoogtes bo die huidige vlak. Laste, beperkings en die spanningsanalise self is nie in 'n PCF-lêer nie en kom nie oor nie.
:::

## Kontroleer wat oorgekom het

- Die totale pyplengte per pyplyn moet by die bron pas.
- Die Probleme-paneel lys, elk een keer, 'n elmboog wie se middelpunt nie dieselfde afstand van albei punte af is nie, pyp sonder lengte, en 'n boring wat nie 'n standaardgrootte is nie.

## Pype wat al in 'n IFC-lêer is

Wanneer 'n IFC-lêer oop is, skryf **Voer PCF uit** ook sy eie pypsegmente, passtukke en kleppe, langs die lope wat jy geteken het. 'n Segment kry sy punte van sy poorte, of van die punte van sy liggaam. 'n Passtuk sonder poorte word weggelaat en die Probleme-paneel sê so. Jy kan net uit die IFC voer wanneer die model geen geteekende lope het nie.

By invoer word steun, olets, flense, pakkings en doppe in die lêer nie geteken nie. Die Probleme-paneel lys hoeveel van elk weggelaat is, sodat niks sonder 'n spoor verdwyn nie.
