---
title: Los botsings op met elke dissipline se regstellings
summary: Uit die botsingsresultate lys Stel regstellings voor vir elke botsing wat elke dissipline daaraan kan doen — 'n lugkanaal omgelei onder 'n balk, 'n pyp opsy geskuif, 'n kolom verskuif, 'n opening in 'n balk — elk op 'n kopie van die model getoets met sy afwegings, vir jou om te aanvaar of te verwerp. Aanvaarde regstellings gaan in as een ontdoen-stap.
keywords: botsing, botsingsregstelling, botsings oplos, botsings beslis, koördinasie, stel regstellings voor, herlei, omleiding, verskuiwing, lugkanaal, pyp, kabelbak, balk, kolom, opening, mof, afweging, dissipline, struktuur, meganies, loodgieterswerk, elektries, argitektuur, assistent
from: f7bafdd9
---

## Wat jy gaan doen

Verander 'n lys botsings in besluite. Elke dissipline (struktuur, meganies, loodgieterswerk, elektries, argitektuur) stel regstellings voor vir sy eie elemente alleen, elke voorstel word op 'n kopie van die model getoets, en jy kies.

## Stappe

1. Loop eers die botsingstoets. Sien [Kontroleer vir botsings](topic:clash-check) en [Toets pype en lugkanale teen die struktuur](topic:mep-against-structure).
2. Klik onder die resultate op {{ui:Stel regstellings voor}}. Die **Voorgestelde regstellings**-paneel maak oop langs die model.
3. Vir elke botsing sien jy elke dissipline se voorstelle, die beste eerste. Elke reël sê wat dit doen en sy afwegings: of dit die botsing oplos, hoeveel nuwe botsings dit maak, watter reëls dit breek, hoeveel loop dit byvoeg of hoe ver dit skuif, hoeveel passtukke, en 'n kostetelling.
4. Klik {{ui:Wys}} om die elemente in 3D te sien. Klik {{ui:Aanvaar}} op die regstelling wat jy wil hê (een per botsing), of {{ui:Verwerp}}.
5. Die reël onderaan sê wat al jou aanvaarde regstellings saam doen: hoeveel botsings opgelos is, hoeveel oorbly, en of iets nuuts bots.
6. Klik {{ui:Pas aanvaarde regstellings toe (een ontdoen-stap)}}. Die botsingstoets loop weer. {{ui:Ontdoen}} neem almal op een slag terug.

## Wat elke dissipline mag doen

- **Meganies** (lugkanale, verhittings- en verkoelingspype): omlei oor of onder op die been wat tref, die hele loop ophef of laat sak, na die kant skuif, of 'n reghoekige lugkanaal platter maak met dieselfde oppervlakte.
- **Loodgieterswerk** (water, riolering, gas, brand): dieselfde skuiwe, behalwe dat 'n swaartekragriool nooit 'n omleiding kry nie; dit kan slegs as geheel skuif, met sy val behou.
- **Elektries** (kabelbakke en buise): dieselfde skuiwe; 'n kabelbak moet 150 mm vry bo hom hou om kabel te lê.
- **Struktuur**: skuif 'n kolom (tot 300 mm), of 'n opening in 'n balk se lyf of 'n blad vir die loop wat verbyloop. Elke strukturele regstelling vereis die struktuuringenieur se goedkeuring.
- **Argitektuur**: 'n mof in 'n muur vir die loop wat verbyloop, of skuif 'n muur waarvan bekend is dat dit nie las dra nie.

## Wat jy moet sien

- Regstellings wat 'n reël breek, word gemerk: nader as die 25 mm-gaping aan iets anders, onder die 2,100 mm-hoofruimtelyn, 'n webopening groter as 40% van die balk se diepte of te naby sy eindes, of 'n balk wat sy spanwydte sou verander.
- Regstellings wat BimCraft kan maak, word op die model toegepas: lope wat jy met die Pyp- en Lugkanaal-gereedskap geteken het, en kolomme wat jy geteken het. Die ander sê **Slegs advies**: om hulle te aanvaar voeg 'n kwessie in die Kwessies-oortjie by.

## Goed om te weet

- Die regstellings kom uit ingeboude reëls in die program; geen KI word daarvoor gebruik nie.
- As jy 'n assistent koppel (sien [Laat 'n KI-assistent met jou model werk](topic:assistants)), kan dit die botsings lees en sy eie voorstelle vir een dissipline by die oop paneel voeg. Hulle word op dieselfde manier getoets, gemerk met die assistent se naam, en niks word verander totdat jy aanvaar en toepas nie.
- Die kopie word getoets met boksies rondom elke element en elke been van 'n loop, so 'n skuins loop kan 'n botsing wys wat die botsingstoets nie sou nie. Loop die botsingstoets weer na toepassing: dit is die finale woord.
- Die perke (hoe ver 'n loop mag skuif, hoe hoog 'n omleiding mag klim, die gaping) is die verstek wat in die paneel geskryf is.

## Volgende

- [Kwessies en BCF-lêers](topic:issues-bcf)
- [Teken pyp- en lugkanaallope](topic:pipes-and-ducts)
