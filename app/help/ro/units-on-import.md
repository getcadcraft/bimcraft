---
title: Unități la import: un fișier își indică unitățile sau se întreabă înainte
summary: Când un fișier pe care îl aduceți indică unitățile, BimCraft le folosește și o spune. Când nu le indică, BimCraft întreabă înainte să plaseze ceva și reține răspunsul pentru fișierul respectiv.
keywords: unități, import, deschidere, OBJ, STL, DWG, DXF, IFC, nor de puncte, element de bibliotecă, milimetri, metri, țoli, picioare, scară, dimensiune greșită, prea mare, prea mic, de 1000 de ori, întrebare, reținut
from: f044e9bc
---

## Ce veți face

Importați un fișier și asigurați-vă că intră la dimensiunea corectă.

## Pași

1. Deschideți sau adăugați fișierul ca de obicei: {{ui:Deschisă}}, {{ui:Fișiere}} din Bibliotecă, {{ui:Nori de puncte}}, sau Construire › Dintr-un desen.
2. Dacă fișierul indică unitățile, nu se întreabă nimic. Bara de stare spune ce unități indică fișierul.
3. Dacă nu le indică, un dialog întreabă **Unitățile fișierului**. Alegeți ce reprezintă o unitate din fișier și faceți clic pe {{ui:Folosește aceste unități}}. Nimic nu este plasat înainte să răspundeți.
4. {{ui:Anulare}} (sau {{key:Esc}}) nu aduce nimic.

## Ce fișiere indică unitățile

- **IFC**: indică unitatea lui de lungime, iar „Deschis” spune care este. Un IFC care nu indică niciuna este întrebat înainte să se deschidă; răspunsul este scris în model, astfel că fișierul îl indică odată ce îl salvați.
- **DWG și DXF**: unitățile de inserare ale desenului. Un desen fără ele este întrebat (fișierele din Bibliotecă, Construire › Dintr-un desen, terenul din curbe de nivel).
- **Liste de puncte** pentru teren: nu indică unități. Se întreabă.
- **Nori de puncte**: LAS și LAZ cu un sistem de coordonate, E57, PTX și PLY își indică unitățile. Ceilalți sunt întrebați.
- **OBJ și STL**: nu indică niciodată unități. Se întreabă.
- **glTF și GLB**: metri, după regula formatului.
- **Imagini**: nu au dimensiune proprie. O imagine este potrivită la vizualizare, iar dimensiunea o setați cu **Scalare după două puncte**. Dimensiunea dată este reținută pentru fișierul respectiv: plasată din nou, intră la acea dimensiune, iar bara de stare o spune.
- **Suplimentul Nori de puncte**: întreabă când construiți un nor al cărui fișier nu indică nicio unitate și etichetează cifrele norului în unitatea pe care o poartă.

## De reținut

- Răspunsul este reținut pentru fișierul respectiv (numele, dimensiunea și data lui) pe acest calculator, în fiecare aplicație CadCraft. La următoarea intrare a aceluiași fișier nu se mai întreabă, iar bara de stare spune că s-au folosit unitățile reținute.
- Ca să fiți întrebat din nou: paleta de comenzi ({{key:Mod+K}}) › **Întrebare din nou pentru unitățile fișierelor importate**.
- O listă de unități pe care o are deja un import (Unitățile din Bibliotecă, Unitățile din bara norului, Unități desen din Dintr-un desen) schimbă unitățile și după aceea. Lista Unități a instrumentului de teren este acum doar punctul de la care pornește întrebarea.
