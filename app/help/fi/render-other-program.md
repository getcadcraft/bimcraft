---
title: Piirrä kuva toisella ohjelmalla
summary: Oma polunseurantamme piirtää Renderöi-kuvan; toinen ohjelma voi piirtää sen vain renderöintimoottorin lisäosan kautta CadCraft Studiossa. Mikä siirtyy mukana ja miksi joitakin ohjelmia ei koskaan tarjota.
keywords: renderöinti, moottori, ulkoinen ohjelma, lisäosan moottori, studio, tausta, jono, usd, gltf, piirtää, blender, gpl
from: 652b413c
---

Kuvan {{ui:Renderöi}}-valintaikkunassa piirtävät **omat moottorimme**: Nopea ja Polunseuranta, selaimessa ja CadCraft Studiossa. Toinen ohjelma voi piirtää kuvan vain silloin, kun **renderöintimoottorin lisäosa** tuo sen: katso [Lisää renderöintimoottori lisäosalla](topic:render-engine-addons). Jos haluat viedä mallin toiseen ohjelmaan ja jatkaa työtä siellä, käytä [Avaa malli toisessa ohjelmassa](topic:render-open-in) tai [Lähetä malli pelimoottoriin](topic:render-unreal).

## Piirrä kuva lisäosan moottorilla

1. Kytke lisäosa päälle kohdassa Asetukset › Lisäosat. Sen moottori ilmestyy {{ui:Renderöi}}-valintaikkunan Moottori-luetteloon.
2. Valitse se. Sen omat asetukset näkyvät Moottori-luettelon alla.
3. Napsauta {{ui:Renderöi}}. Studiossa Studio kysyy ensimmäisen kerran, kun lisäosa suorittaa ohjelman, omassa valintaikkunassaan. Edistyminen näkyy piirron aikana; {{ui:Pysäytä}} lopettaa sen. Kuva ilmestyy merkittynä moottorilla, joka sen piirsi.

JavaScriptillä kirjoitettu moottori toimii myös selaimessa. Moottori, joka suorittaa ohjelman tällä tietokoneella, toimii vain Studiossa; selaimessa se näkyy tiedostona, joka tallennetaan.

## Mikä siirtyy mukana

Moottori saa **paketin**: mallin USD-tiedostona (ja glTF-tiedoston, jos se sitä pyytää) sekä asetustiedoston, jossa ovat tarkat materiaaliarvot, aurinko ja taivas, jokainen päällä oleva lamppu tehoineen ja valoprofiileineen, kamera ja valotus. Jokainen ohjelma valaisee, sävyttää ja ottaa näytteitä omalla tavallaan, joten kuvat ovat kameran, auringon, lamppujen ja valotuksen osalta samankaltaisia, eivät pikseli pikseliltä samoja.

## Ohjelmat, joita CadCraft ei koskaan aja

CadCraft ei koskaan käynnistä GNU GPL -lisenssin alaista ohjelmaa, eikä se koskaan listaa sitä moottorina tai kohteena Avaa ohjelmassa. Blender on yksi niistä, joten sitä ei ole Moottori-luettelossa. USD- tai glTF-tiedosto, jonka tallennat {{ui:Renderöi}}-valintaikkunasta, avautuu siinä silti kuten missä tahansa ohjelmassa, joka lukee näitä tiedostoja.

:::note
Panoraama- ja stereokamerat sekä taivaskuva (taivaan värit käytetään sen sijaan) eivät siirry toiseen ohjelmaan. Toisessa ohjelmassa tehty työ ei palaa malliin.
:::
