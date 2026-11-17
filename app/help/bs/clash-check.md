---
title: Provjeri kolizije
summary: Pronađi mjesta gdje se elementi jednog skupa sudaraju s elementima drugog — kanali kroz grede, zidovi u međuspratne konstrukcije — u jednom modelu ili u više njih, s tolerancijom, i pretvori koliziju u problem.
keywords: kolizija, detekcija kolizija, provjera kolizija, tvrda kolizija, interferencija, sudar, koordinacija, preklapanje, tolerancija, mep, konstrukcija
from: 9cb12346
---

## Šta ćete uraditi

Pronađi mjesta gdje se dva skupa elemenata sudaraju, na primjer sve u modelu instalacija naspram konstrukcije, pa pogledaj svaki i zadrži one koji su važni kao probleme.

## Koraci

1. Otvori IFC model i dodaj ostale pomoću {{ui:Add a model…}} ako provjeravaš kroz više modela. Vidi [Pogledaj nekoliko IFC modela zajedno](topic:several-models).
2. Otvori {{ui:Clash check}} u lijevom panelu.
3. U {{ui:Check}} i {{ui:Against}} odaberi dva skupa: elemente koje si odabrao, klasu (preko svih otvorenih modela), sačuvani skup pretrage (vidi [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)), ili sve.
4. Postavi koliko preklapanja ignorisati, u metrima. 0.01 ignoriše elemente koji se samo dodiruju.
5. Klikni {{ui:Run}}. Provjera teče u pozadini; {{ui:Cancel}} je zaustavlja.
6. Klikni rezultat da ga vidiš: dva elementa se odaberu i prikažu, sve ostalo postaje providno, a pogled zumira na njih.
7. Klikni {{ui:Make an issue of it}} ispod rezultata da ga zapišeš na kartici {{ui:Issues}}. Vidi [Problemi i BCF datoteke](topic:issues-bcf).

## Šta biste trebali vidjeti

- Kolizije navedene s nazivima oba elementa (i njihovim datotekama, kad je otvoreno više modela) i koliko se dubinski preklapaju, najdublje prve.
- Površine koje se samo dodiruju, kao zid koji stoji na međuspratnoj konstrukciji ili vrata u svom otvoru, nisu kolizije.

## Dobro je znati

- Ovo je osnovna provjera tvrde kolizije: elementi čije se površine sijeku. Element skriven potpuno unutar drugog (cijev ugrađena u zid) zasad se ne nalazi.
- Dubina je koliko se granice dva elementa najmanje preklapaju: vodilja, a ne tačno mjerenje.

## Dalje

- [Mjeri udaljenosti, površine ploha i položaje u 3D](topic:measure)
- [Sakrij, izoluj i učini elemente providnim](topic:hide-and-isolate)
