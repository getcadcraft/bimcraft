---
title: Trimiterea modelului către un program de randare
summary: Salvați ce arată vederea 3D ca model glTF (.glb) cu materialele, texturile și lămpile sale, pentru programele de randare și vizualizare care citesc glTF.
keywords: glb, gltf, format de transmisie gl, export, randare, render, vizualizare, timp real, archviz, materiale, texturi, lămpi, lumini, element, element personalizat
from: e62d57dc
---

{{ui:Pentru randare}} din bara de instrumente salvează ce arată vederea 3D ca un singur fișier **.glb** (glTF 2.0, formatul deschis al Khronos Group). Programele de randare care citesc glTF îl deschid cu materialele și lămpile modelului; Twinmotion listează glTF și GLB printre fișierele de geometrie pe care le importă și își păstrează luminile (documentația Epic, „Importing geometry in Twinmotion”): folosiți {{ui:Pentru randare}} și importați acolo fișierul .glb. Nimic nu se încarcă: fișierul se face pe acest calculator.

## Salvați-l

1. Deschideți modelul IFC și pregătiți vederea 3D: ascundeți etajele, elementele sau modelele legate pe care nu le doriți și [pictați materialele](topic:paint-materials) pe care le vreți vizibile.
2. Faceți clic pe {{ui:Pentru randare}} (sau tastați `GLB`).
3. Fișierul se descarcă drept „<numele modelului>.glb”. Bara de stare spune câte triunghiuri, materiale și lămpi conține.

## Ce conține fișierul

- **Geometrie** a fiecărui element pe care îl arată vederea 3D, în metri, cu Y în sus (axele proprii ale glTF). Un obiect pentru fiecare etaj și material, numit „Level 1 — Brick, red”, astfel încât să alegeți un material în programul de randare și să îl înlocuiți cu al său.
- **Materiale:** fiecare culoare cu aspectul ales pentru ea în [Randare](topic:render) (mat, satinat, lucios, metal, sticlă…), și fiecare material de bibliotecă pictat cu culoarea, rugozitatea și **textura** sa (imaginea sa este în fișier, scalată la dimensiunea sa reală: o cărămidă are dimensiunea unei cărămizi). Sticla este transparentă.
- **Lămpi:** fiecare corp de iluminat pornit în Randare › Lămpi, ca lumină punctiformă sau de reflector, cu strălucirea sa (lumeni transformați în candele), culoarea și unghiul fasciculului.
- **Unde se află șantierul:** latitudinea și longitudinea șantierului sunt scrise în fișier ca referință. Programele de randare au propriul soare: introduceți locul acolo.

## Ce lasă afară

- Secțiunea tăiată (se includ elementele întregi) și elementele afișate transparent (sunt lăsate afară).
- Obiecte element cu element (în schimb, câte un obiect pentru fiecare etaj și material), proprietățile IFC, hărțile de relief, vederile salvate și plimbările înregistrate.
- Muchiile și fundalul.

## Enscape și alte randatoare cu modul extern

Enscape rulează în interiorul altui program de proiectare și nu are un fișier pe care să-l deschidă pentru un proiect întreg. Două moduri:

- Deschideți **IFC**-ul modelului (Fișier › Salvare) în programul în care rulează Enscape; majoritatea citesc IFC. Culorile vin cu el; materialele de bibliotecă vin ca propriile culori.
- Aduceți o **piesă mică** (mobilier, un corp de iluminat) ca element personalizat: izolați-o mai întâi, apoi faceți clic pe {{ui:Pentru Enscape (.gltf)}}. Biblioteca de elemente personalizate a Enscape listează fișiere .gltf, .obj și .fbx, nu .glb, deci acest buton salvează aceeași scenă ca un fișier **.gltf** autonom (datele binare și imaginile sunt în fișier; nu trebuie copiat nimic altceva împreună cu el). Enscape recomandă elemente mici (sub aproximativ 20.000 de triunghiuri).

:::note
În CadCraft Studio același fișier glTF (și un fișier USD) poate fi salvat din {{ui:Randare}} › Motor › **Fișier glTF** / **Fișier USD**, sau deschis direct într-un program de pe acest calculator: vezi [Deschiderea scenei în alt program](topic:render-open-in). O legătură de tip plug-in sau live pentru Enscape sau Twinmotion nu este realizată. Formatele FBX și Datasmith nu au o specificație publicată, deci BimCraft nu le scrie; glTF este calea deschisă.
:::
