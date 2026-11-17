---
title: Verificarea conflictelor
summary: Găsiți locurile în care elemente dintr-un set intră în elemente din alt set — conducte prin grinzi, pereți în planșee — într-un model sau în mai multe, cu o toleranță, și transformați un conflict într-o problemă.
keywords: conflict, detectare conflicte, verificare conflicte, conflict dur, interferență, coliziune, coordonare, suprapunere, toleranță, mep, structură
from: 9cb12346
---

## Ce veți face

Găsiți locurile în care două seturi de elemente intră unul în altul, de exemplu tot ce ține de modelul instalațiilor față de structură, apoi examinați fiecare și păstrați ca probleme pe cele care contează.

## Pași

1. Deschideți un model IFC și adăugați celelalte cu {{ui:Adăugare model…}} dacă verificați între mai multe modele. Vedeți [Vizualizarea mai multor modele IFC împreună](topic:several-models).
2. Deschideți {{ui:Verificare conflicte}} în panoul din stânga.
3. La {{ui:Verificare}} și {{ui:Față de}}, alegeți două seturi: elementele pe care le-ați selectat, o clasă (în toate modelele deschise), un set de căutare salvat (vedeți [Găsirea elementelor după clasă, nume sau proprietate](topic:find)) sau totul.
4. Stabiliți cât de mult suprapunere să ignorați, în metri. 0.01 ignoră elementele care doar se ating.
5. Faceți clic pe {{ui:Rulare}}. Verificarea rulează în fundal; {{ui:Anulare}} o oprește.
6. Faceți clic pe un rezultat ca să îl vedeți: cele două elemente sunt selectate și afișate, restul este transparent, iar vizualizarea face zoom la ele.
7. Faceți clic pe {{ui:Creare problemă din el}} sub un rezultat ca să îl descrieți în fila {{ui:Probleme}}. Vedeți [Probleme și fișiere BCF](topic:issues-bcf).

## Ce ar trebui să vedeți

- Conflictele listate cu numele ambelor elemente (și cu fișierele lor, când sunt deschise mai multe modele) și cât de adânc se suprapun, cel mai adânc primul.
- Fețele care doar se ating, precum un perete așezat pe un planșeu sau o ușă în golul ei, nu sunt conflicte.

## De reținut

- Aceasta este o verificare de bază a conflictelor dure: elemente ale căror suprafețe se intersectează. Un element complet ascuns în interiorul altuia (o conductă îngropată într-un perete) nu este găsit încă.
- Adâncimea este cât de mult se suprapun limitele celor două elemente, în cel mai mic caz: un ghid, nu o măsurătoare exactă.

## Următorul pas

- [Măsurarea distanțelor, a ariilor fețelor și a locațiilor în 3D](topic:measure)
- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
