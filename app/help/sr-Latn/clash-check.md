---
title: Proveri sudare
summary: Pronađi mesta gde elementi jednog skupa upadaju u elemente drugog, na primer kanali kroz grede ili zidovi u međuspratne konstrukcije, u jednom modelu ili u više njih, uz toleranciju, i pretvori sudar u problem.
keywords: sudar, detekcija sudara, provera sudara, tvrdi sudar, interferencija, kolizija, koordinacija, preklapanje, tolerancija, mep, konstrukcija
from: 9cb12346
---

## Šta ćeš uraditi

Pronađi mesta gde se dva skupa elemenata međusobno sudaraju, na primer sve iz modela instalacija prema konstrukciji, pa pogledaj svako mesto i zadrži kao probleme one koji su važni.

## Koraci

1. Otvori IFC model, a ostale dodaj preko {{ui:Dodaj model…}} ako proveravaš među više modela. Vidi [Pogledaj više IFC modela zajedno](topic:several-models).
2. Otvori {{ui:Provera sudara}} u levom panelu.
3. U {{ui:Proveri}} i {{ui:Prema}} izaberi dva skupa: elemente koje si izabrao, klasu (preko svih otvorenih modela), sačuvani skup pretrage (vidi [Pronađi elemente po klasi, imenu ili svojstvu](topic:find)) ili sve.
4. Podesi koliko preklapanja da zanemariš, u metrima. 0.01 zanemaruje elemente koji se tek dodiruju.
5. Klikni {{ui:Pokreni}}. Provera se izvodi u pozadini; {{ui:Otkaži}} je zaustavlja.
6. Klikni rezultat da ga vidiš: dva elementa se biraju i prikazuju, sve ostalo je prozirno, a prikaz se zumira na njih.
7. Klikni {{ui:Napravi problem od toga}} ispod rezultata da ga zapišeš na kartici {{ui:Problemi}}. Vidi [Problemi i BCF datoteke](topic:issues-bcf).

## Šta bi trebalo da vidiš

- Sudari navedeni sa imenima oba elementa (i njihovim datotekama, kad je otvoreno više modela) i dubinom preklapanja, od najdublje.
- Površine koje se samo dodiruju, kao zid koji stoji na međuspratnoj konstrukciji ili vrata u svom otvoru, nisu sudari.

## Dobro je znati

- Ovo je osnovna provera tvrdih sudara: elementi čije se površine seku. Element potpuno skriven unutar drugog (cev zazidana u zid) još se ne nalazi.
- Dubina je koliko se granice dva elementa najmanje preklapaju: to je vodič, a ne tačno merenje.

## Dalje

- [Meri rastojanja, površine lica i lokacije u 3D](topic:measure)
- [Sakrij, izoluj i prikaži kroz elemente](topic:hide-and-isolate)
