---
title: Orientarea în model cu arborele modelului
summary: Răsfoiți un model IFC după proiect, amplasament, clădire, nivel și spațiu, cu elementele grupate pe tip; bifați casetele ca să afișați și să ascundeți, faceți clic pe un rând ca să îl alegeți, dublu clic ca să măriți.
keywords: arborele modelului, arbore, structură, structură spațială, răsfoire, contur, navigator, nivel, etaj, spațiu, încăpere, grup, clasă, ascundere, afișare, alegere, selectare, zoom
from: 69de4ab7
---

## Ce veți face

Vedeți cum este alcătuit un model și ajungeți la orice element fără să îl căutați în 3D: clădirea, nivelurile ei, spațiile de pe fiecare nivel și elementele din ele, grupate pe tip (pereți, uși, planșee…).

## Pași

1. Deschideți un model IFC. {{ui:Arborele modelului}} din stânga se deschide până la niveluri.
2. Faceți clic pe săgeata de lângă un rând ca să îl deschideți sau închideți. Un nivel conține întâi spațiile sale, apoi elementele pe tip, cu câte sunt. Un element format din piese, precum o scară, conține piesele sale.
3. Debifați caseta unui rând ca să ascundeți tot ce se află în el; bifați-o ca să îl afișați din nou. O casetă cu liniuță înseamnă că se vede doar o parte din ce este în ea.
4. Faceți clic pe numele unui rând ca să alegeți ce reprezintă: un element sau toate elementele dintr-un grup, nivel sau spațiu. {{key:Mod}}+clic adaugă la alegere sau scoate din ea.
5. Faceți clic pe butonul {{ui:i}} de lângă un nivel, spațiu sau clădire ca să vedeți proprietățile lui.
6. Faceți dublu clic pe un rând ca să faceți zoom până la el.

## Ce ar trebui să vedeți

- Când alegeți un element în vizualizarea 3D, arborele se deschide până la el și îl marchează.
- Elementele ascunse sunt tăiate cu o linie. Casetele arborelui și {{ui:Afișare}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) lucrează împreună: vezi [Ascundere, izolare și transparență a elementelor](topic:hide-and-isolate).
- Elementele pe care modelul nu le plasează în niciun nivel se află într-un grup la sfârșit, **Nu se află în structura spațială**.
- Un grup lung arată 200 de rânduri odată; faceți clic pe **Afișare mai multe** sub el pentru restul.

## Taste

Cu numele unui rând activ: {{key:Up}} și {{key:Down}} mută, {{key:Right}} deschide, {{key:Left}} închide sau urcă, {{key:Space}} bifează caseta, {{key:Enter}} alege.

## Greșeli frecvente

- **Caseta unui nivel este bifată, dar nu se vede nimic.** Lista {{ui:Niveluri}} de sub arbore oprește singură niveluri întregi: bifați-o și acolo.
- **Un rând nu alege nimic.** Unele rânduri, precum un spațiu gol, nu au elemente care pot fi desenate; linia de stare spune asta.

## Continuare

- [Ștergere, decupare, copiere și lipire a elementelor clădirii](topic:edit-elements)
- [Afișare și ascundere a nivelurilor, spațiilor și muchiilor](topic:storeys-and-spaces)
