---
title: Desenați la scară reală, adnotați după scară
summary: Clădirea este desenată mereu la scară reală. Textul, cotele, etichetele, numele camerelor, cercurile de grilă și simbolurile sunt dimensionate pe hârtie, în milimetri așa cum sunt tipăriți, și își păstrează dimensiunea când scara unui desen trece de la 1:100 la 1:50.
keywords: scară adnotare, adnotativ, dimensiune text, înălțime text, înălțime pe hârtie, dimensiune text de cotare, dimensiune etichetă, dimensiune nume cameră, cerc de grilă, dimensiune simbol, scară desen, 1:50, 1:100, standard de birou, scriere, desenare la 1:1, scară reală, text pe planșă
from: 94118788
---

## Ce veți face

Stabiliți înălțimea scrisului desenelor pe hârtie, o singură dată pentru clădire. Modelul nu se scalează niciodată, iar textul nu se redimensionează pentru o scară: BimCraft calculează dimensiunea din înălțimea pe hârtie și din scara desenului.

## Cum funcționează

- Modelul este la scară reală. Un perete lung de 10 m are 10 000 mm la orice scară.
- O adnotare are o **înălțime pe hârtie**: înălțimea unei litere mari pe foaia tipărită, în milimetri.
- La scara 1:100, un text de 2.5 mm are 250 mm în model; la 1:50 are 125 mm. Pe hârtie are 2.5 mm în ambele cazuri.
- Simbolurile de plan (electrice, sanitare) sunt desenate în milimetri de hârtie și urmează aceeași regulă.

## Pași

1. Deschideți browserul de proiect. Sub {{ui:Planșe}} faceți clic pe {{ui:Dimensiuni adnotări…}}.
2. Scrieți o înălțime în milimetri pentru tipurile pe care doriți să le stabiliți: {{ui:Note și etichete}}, {{ui:Text de cotare}}, {{ui:Etichete și nume de niveluri}}, {{ui:Nume de camere}}, {{ui:Litere ale cercurilor de grilă}}, {{ui:Titluri de vizualizare pe planșe}} și {{ui:Text de tabel}}. O casetă goală păstrează dimensiunea proprie a BimCraft, afișată cu gri.
3. Faceți clic pe {{ui:Salvare}}. Este un singur pas, pe care îl puteți anula.

Fiecare planșă, setul de desene, planul PDF, fațadele și secțiunile folosesc dimensiunile de atunci încolo. Distanța dintre o linie de cotă și textul ei, dimensiunea unui cerc de grilă și înălțimea unui rând de tabel cresc odată cu textul lor.

## Un plan cu scară proprie

Dați unui plan o scară în intervalul său de vizualizare ({{ui:Scară}}; vezi [Vizualizări și planșe](topic:views-and-sheets)). Atunci:

- pe ecran, numele camerelor, etichetele, textul cotelor și cercurile de grilă sunt desenate la dimensiunea tipărită, raportate la model, astfel încât ceea ce vedeți este ceea ce va arăta planșa;
- simbolurile de plan și etichetele lor sunt dimensionate pentru acea scară. Schimbați scara de la 1:100 la 1:50 și ele devin jumătate ca mărime în model, rămânând aceleași pe hârtie.

Un plan fără scară proprie își păstrează textul fix de pe ecran, iar simbolurile sale sunt dimensionate pentru 1:50 (1/4" = 1'-0" în picioare și țoli), ca înainte.

## Dimensiunile biroului

Cu suplimentul Default Policies activat, setați înălțimile biroului în Setări › Global › Default Policies › {{ui:Dimensiuni adnotări pe hârtie}}. O clădire nouă le preia când faceți clic pe Creare. Într-o clădire deja începută, caseta de dialog are {{ui:Folosiți dimensiunile biroului meu}}. Vezi [Default Policies](topic:default-policies).

## Dimensiunile unui pachet de reglementări

Un pachet de reglementări poate da înălțimile de text cerute de locul său (suplimentul Building regulations, convențiile de desen). Bifați pachetul în Setări › Building regulations, apoi, în caseta de dialog, faceți clic pe {{ui:Folosiți dimensiunile unui pachet de reglementări}}: casetele se completează, le verificați și salvați. O dimensiune pe care un pachet o dă în puncte este o dimensiune de font și este transformată într-o înălțime de majuscule, așa că verificați-o. Nimic nu se stabilește până nu salvați.

## Ce ar trebui să vedeți

- Aceeași înălțime a textului în milimetri pe o planșă la 1:100 și pe una la 1:50, în timp ce planul în sine este de două ori mai mare la 1:50.
- Dimensiunile merg odată cu clădirea: sunt salvate în fișierul său IFC.

## De reținut

- Dimensiunile proprii ale BimCraft sunt cele pe care planșele sale le-au folosit mereu (aproximativ 1.5 mm majuscule pentru textul cotelor). Nu sunt un standard de desen: stabiliți-le pe ale biroului.
- Înălțimea trebuie să fie între 0.5 și 50 mm.
- Scrisul cartușului și legendele notelor-cheie nu fac parte din acest lucru: își păstrează propriile dimensiuni.
