---
title: Preverjanje kolizij
summary: Poiščite, kje elementi ene množice segajo v elemente druge — kanali skozi grede, stene v plošče — v enem modelu ali v več, z dopustnim odstopanjem, in kolizijo spremenite v zadevo.
keywords: kolizija, zaznavanje kolizij, preverjanje kolizij, trda kolizija, interferenca, trk, usklajevanje, prekrivanje, toleranca, mep, konstrukcija
from: 9cb12346
---

## Kaj boste naredili

Poiščite mesta, kjer se dve množici elementov križata, na primer vse v modelu instalacij proti konstrukciji. Nato si oglejte vsako in obdržite tiste, ki so pomembne, kot zadeve.

## Koraki

1. Odprite model IFC in dodajte druge z {{ui:Add a model…}}, če preverjate več modelov. Glejte [Hkratni ogled več modelov IFC](topic:several-models).
2. Odprite {{ui:Clash check}} v levem podoknu.
3. V {{ui:Check}} in {{ui:Against}} izberite dve množici: elemente, ki ste jih izbrali, razred (čez vse odprte modele), shranjeno iskalno množico (glejte [Iskanje elementov po razredu, imenu ali lastnosti](topic:find)) ali vse.
4. Nastavite, koliko prekrivanja naj se ignorira, v metrih. 0.01 ignorira elemente, ki se komaj dotikajo.
5. Kliknite {{ui:Run}}. Preverjanje teče v ozadju; {{ui:Cancel}} ga ustavi.
6. Kliknite rezultat, da si ga ogledate: oba elementa se izbereta in prikažeta, vse drugo postane prosojno, pogled pa se približa njima.
7. Pod rezultatom kliknite {{ui:Make an issue of it}}, da ga zapišete v zavihek {{ui:Issues}}. Glejte [Zadeve in datoteke BCF](topic:issues-bcf).

## Kaj boste videli

- Kolizije, navedene z imenoma obeh elementov (in njunima datotekama, kadar je odprtih več modelov) ter globino prekrivanja, najgloblja najprej.
- Ploskve, ki se samo dotikajo, na primer stena, ki stoji na plošči, ali vrata v svoji odprtini, niso kolizije.

## Dobro je vedeti

- To je osnovno preverjanje trdih kolizij: elementi, katerih površine se križajo. Element, ki je popolnoma skrit v drugem (cev, vgrajena v steno), še ni najden.
- Globina je, kako daleč se meje obeh elementov najmanj prekrivajo: vodilo, ne natančna meritev.

## Naslednje

- [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure)
- [Skrivanje, izoliranje in prosojnost elementov](topic:hide-and-isolate)
