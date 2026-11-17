---
title: Provjera sudara
summary: Pronađite mjesta gdje elementi jednog skupa upadaju u elemente drugog, npr. kanali kroz grede, zidovi u ploče, u jednom modelu ili u više njih, uz toleranciju, i pretvorite sudar u temu.
keywords: sudar, otkrivanje sudara, provjera sudara, tvrdi sudar, interferencija, kolizija, koordinacija, preklapanje, tolerancija, mep, konstrukcija
from: 9cb12346
---

## Što ćete napraviti

Pronađite mjesta gdje se dva skupa elemenata sudaraju, npr. sve u modelu instalacija u odnosu na konstrukciju, zatim pogledajte svako mjesto i zadržite ona koja su bitna kao teme.

## Koraci

1. Otvorite IFC model i dodajte ostale pomoću {{ui:Dodaj model…}} ako provjeravate među modelima. Vidi [Prikaz više IFC modela zajedno](topic:several-models).
2. Otvorite {{ui:Provjera sudara}} u lijevoj ploči.
3. U {{ui:Provjeri}} i {{ui:Prema}} odaberite dva skupa: elemente koje ste odabrali, klasu (preko svih otvorenih modela), spremljeni skup pretrage (vidi [Pronalaženje elemenata prema klasi, nazivu ili svojstvu](topic:find)) ili sve.
4. Postavite koliko preklapanja zanemariti, u metrima. 0.01 zanemaruje elemente koji se tek dodiruju.
5. Kliknite {{ui:Pokreni}}. Provjera se izvodi u pozadini; {{ui:Odustani}} je zaustavlja.
6. Kliknite rezultat da ga vidite: dva elementa se odaberu i prikažu, sve ostalo postane prozirno, a prikaz se zumira na njih.
7. Kliknite {{ui:Napravi temu od toga}} ispod rezultata da ga zapišete na kartici {{ui:Teme}}. Vidi [Teme i BCF datoteke](topic:issues-bcf).

## Što biste trebali vidjeti

- Sudari navedeni s nazivima oba elementa (i njihovim datotekama kad je otvoreno više modela) te dubinom preklapanja, najdublji prvi.
- Površine koje se samo dodiruju, kao zid koji stoji na ploči ili vrata u svom otvoru, nisu sudari.

## Dobro je znati

- Ovo je osnovna provjera tvrdog sudara: elementi čije se površine sijeku. Element potpuno skriven unutar drugog (cijev ugrađena u zid) još se ne pronalazi.
- Dubina je koliko se granice dvaju elemenata najmanje preklapaju: vodilja, a ne točno mjerenje.

## Dalje

- [Mjerenje udaljenosti, površina i položaja u 3D](topic:measure)
- [Skrivanje, izolacija i prozirnost elemenata](topic:hide-and-isolate)
