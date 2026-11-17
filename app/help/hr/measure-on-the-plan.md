---
title: Mjerenje na tlocrtu
summary: Kliknite dvije točke na tlocrtu etaže da pročitate udaljenost i razlike u X i Y, nizom klikova dodajte zbroj, a ništa ne spremajte u model.
keywords: mjerenje, tlocrt, udaljenost, kota, vrpca, zbroj, lanac, dx, dy, ravno, hvatanje, krajevi zidova, osi, stupovi, provjera duljine
from: 7235633f
---

## Što ćete raditi

Provjerite duljinu na tlocrtu etaže, poput širine prostorije ili udaljenosti između dviju osi, bez dodavanja ičega u model. Za mjerenje u 3D prikazu vidi [Mjerenje udaljenosti, površina ploha i lokacija u 3D](topic:measure).

## Koraci

1. Prikažite tlocrt etaže koju želite: {{ui:Tlocrt}} za sam tlocrt ili {{ui:Podijeli}}.
2. U grupi {{ui:Crtanje}} kliknite {{ui:Mjeri}}. Kad je prikazan samo tlocrt, možete pritisnuti {{key:M}}.
3. Kliknite prvu točku. Točke se hvataju za zidove, osi i stupove.
4. Kliknite drugu točku. Kota prikazuje udaljenost, a statusna traka daje udaljenost s razlikama u X i Y.
5. Za nastavak mjerenja kliknite treću točku. Svaki krak se mjeri i zbroj se dodaje.
6. Držite {{key:Shift}} dok klikate da krak ostane ravan u odnosu na prethodni.
7. Pritisnite {{key:Esc}} da očistite mjerenje ili odaberite drugi alat.

## Napomene

- Ništa se ne zapisuje u model, a kota nestaje kad je očistite. Za kote koje ostaju vidi [Zidni sklopovi i referentne kote](topic:wall-assemblies).
- Dok je 3D prikaz na zaslonu, {{key:M}} ostaje 3D Mjeri. {{key:Shift+M}} je Pomakni.
- Udaljenost koristi jedinicu prikaza koju ste odabrali u {{ui:Postavke}}.
