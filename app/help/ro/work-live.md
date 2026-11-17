---
title: Lucrul la un model împreună cu Live TeamWork
summary: Ce se schimbă în BimCraft cât timp sunteți într-o sesiune Live TeamWork din CadCraft Studio: modificările tuturor la același model IFC, propria anulare și alăturarea dintr-un browser din aceeași rețea.
keywords: live, live teamwork, studio live, împreună, colaborare, sesiune, partajare live, alăturare, ifc, proprietăți, redenumire, cursor, indicator, se văd unii pe alții, nume, culoare, selecție, anulare, gazdă
from: 32061b72
---

## Ce veți învăța

Ce se întâmplă cu un model IFC când mai multe persoane îl editează în același timp. CadCraft Studio pornește și alătură sesiunea Live TeamWork (Partajare, Alăturare); această pagină se referă la modelul în sine.

## Toți editează simultan

Modelul gazdei ajunge la toți cei care se alătură. Redenumiți elemente, modificați valorile proprietăților lor, plasați, înlocuiți sau eliminați elemente de bibliotecă și elemente, ca de obicei. Modificările dvs. apar imediat; ale celorlalți apar puțin după ce le fac. Când o modificare schimbă ce vedeți (un element plasat sau eliminat), BimCraft redesenează modelul și vă păstrează vederea.

- **Două persoane modifică un element:** modificarea mai recentă a aceleiași linii din model câștigă. Un set de proprietăți comun mai multor elemente este copiat pentru elementul pe care îl editați, ca întotdeauna, astfel încât celelalte își păstrează valorile.
- **Un element pe care tocmai cineva l-a eliminat** nu mai poate fi editat: modificarea dvs. este anulată, iar bara de stare explică motivul.
- Fiecare persoană primește numere proprii pentru liniile noi din model, astfel încât două persoane nu obțin niciodată același număr.

## Vă vedeți unii pe alții

Fiecare persoană din sesiune are o culoare proprie. În vizualizarea 3D vedeți indicatorul fiecăruia ca o săgeată în culoarea sa, cu numele alături, pe elementul spre care indică, și un contur punctat în culoarea sa în jurul fiecărui element selectat.

Indicatorii, numele și selecțiile există doar pe durata sesiunii: nu sunt salvate niciodată în fișier și nu intră niciodată în istoricul de anulare al nimănui. Alunecă lin spre locul unde se află fiecare persoană, astfel încât rămân fluide și pe o conexiune lentă.

## Anularea anulează doar lucrul dvs.

{{ui:Undo}} anulează ultima modificare a dvs. și lasă neatinse modificările celorlalți. Dacă cineva a modificat între timp același lucru, nu se anulează nimic, iar bara de stare spune cine.

## Alăturare dintr-un browser

Un coleg fără Studio poate scana imaginea de sub codul gazdei cu un telefon, o tabletă sau un calculator din aceeași rețea. BimCraft se deschide în browser și deschide modelul gazdei după ce gazda vă permite accesul. Un link de invitație permite cuiva să se alăture dintr-o altă rețea: gazda are nevoie de un loc Team Cloud Plan pentru aplicație, ceilalți se alătură gratuit, iar linkul funcționează doar cât timp sesiunea gazdei este deschisă.

## Când se termină sesiunea

Doar gazda salvează modelul. Ceilalți păstrează o copie nesalvată: folosiți Salvare ca IFC dacă doriți să o păstrați.

:::note
Doar primul model din scenă este partajat. Deschiderea unui alt fișier în timpul unei sesiuni lasă sesiunea în acea fereastră.
:::
