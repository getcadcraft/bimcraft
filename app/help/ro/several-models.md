---
title: Vizualizarea mai multor modele IFC împreună
summary: Adăugați mai multe fișiere IFC în scenă, de exemplu de arhitectură, structură și instalații, vedeți-le în aceleași coordonate, mutați unul, ascundeți unul și alegeți care se editează.
keywords: federare, model federat, mai multe modele, mai multe fișiere, combinare, suprapunere, coordonare, disciplină, structură, mep, instalații, decalaj, mutare model, model activ, adăugare model
from: df0efbbf
---

## Ce veți face

Priviți modelele de discipline diferite într-un singur loc: modelul arhitectului împreună cu modelele de structură și instalații. Fiecare rămâne propriul fișier; BimCraft doar le afișează împreună.

## Pași

1. Deschideți primul model IFC ca de obicei.
2. În {{ui:Modele}} din stânga, faceți clic pe {{ui:Adăugare model…}} și alegeți unul sau mai multe fișiere IFC. Fiecare apare în listă și în vederea 3D.
3. Debifați un model ca să-l ascundeți; bifați-l ca să-l afișați din nou.
4. Dacă un model apare în locul greșit (alt punct de măsurătoare), faceți clic pe {{ui:Mutare}} de sub el, tastați cât să-l mutați pe X, Y și Z, în metri, și faceți clic pe {{ui:Aplicare}}.
5. Modelul cu punctul este cel care se editează. Faceți clic pe punctul altui model ca să editați acela.
6. Faceți clic pe × lângă un model ca să-l scoateți din scenă.

## Deschiderea modelelor echipei

Când modelul deschis este un fișier din cloud dintr-un proiect de echipă, sub listă apare {{ui:Deschideți modelele echipei}}. Acesta deschide alături celelalte modele IFC ale proiectului, fiecare mutat cu decalajul setat de proiect. Modelele ascunse pentru utilizatorul curent rămân afară și sunt numărate; un model rotit în proiect se deschide fără rotire și este numărat și el; fișierele care nu sunt IFC (de exemplu un DWG) sunt omise și numite în linia de stare. Un model deja deschis nu se deschide niciodată a doua oară. Butonul este ascuns pentru un fișier care nu face parte dintr-un proiect de echipă.

## Ce ar trebui să vedeți

- Fiecare model în coordonatele primului model, așa cum le plasează fișierul său. Modelele exportate din același proiect se aliniază fără să fie mutate.
- Selectarea unui element al unui model pe care nu îl editați afișează proprietățile doar în citire, cu {{ui:Editare acel model}} pentru comutare.
- {{ui:Arborele modelului}}, {{ui:Niveluri}}, {{ui:Culoare}}, lista {{ui:Modificări}}, plasarea elementelor din bibliotecă și {{ui:Salvare ca IFC}} funcționează pe modelul pe care îl editați. Ascunderea, izolarea, transparența și {{ui:Selectare totală}} funcționează pe toate modelele.
- {{ui:Salvare ca IFC}} descarcă modelul pe care îl editați, doar cu modificările lui.

## Greșeli frecvente

- **Un model este departe sau lipsește.** Fișierul său folosește alte coordonate. Folosiți {{ui:Potrivire}} ca să-l găsiți, apoi {{ui:Mutare}} ca să-l puneți la locul lui.
- **Ștergerea sau Copierea este inactivă pentru un element selectat.** Acesta aparține altui model: comutați întâi la el.
- **Deschiderea unui fișier cu „Alegere fișier” a înlocuit tot.** Asta creează o scenă nouă. Folosiți {{ui:Adăugare model…}} ca să adăugați fișiere la cea pe care o aveți.

## Urmează

- [Ascunderea, izolarea și vederea prin elemente](topic:hide-and-isolate)
- [Colorarea elementelor după o proprietate](topic:color-by-property)
