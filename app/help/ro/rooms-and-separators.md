---
title: Încăperi și separatoare de încăperi
summary: Alegeți o încăpere ca să-i dați nume și număr și să-i citiți suprafața, perimetrul și volumul. Desenați un separator de încăpere acolo unde două încăperi se întâlnesc fără perete între ele.
keywords: încăpere, încăperi, separator de încăpere, linie de separare, spațiu, IfcSpace, nume, număr, suprafață, perimetru, volum, plan deschis, împărțirea unei încăperi, bucătărie și living, nedelimitată
from: d4c1d66b
---

## Ce veți face

Dați nume încăperilor formate de pereți și împărțiți o încăpere deschisă în două, fără perete.

## Unde sunt instrumentele

- Panglici: {{ui:Arhitectură}} › **Cameră și suprafață** › {{ui:Cameră}} și {{ui:Separator de încăpere}}.
- Layout clasic: bara Desenare › meniul {{ui:Încăperi}}.
- Orice stil de meniu: comenzile se numesc Room și Room Separator; paleta de comenzi le găsește.

## Pași

1. Desenați pereții. Fiecare contur închis de pereți este deja o încăpere: BimCraft o creează, o numerotează și îi dă suprafața pe măsură ce desenați.
2. Alegeți {{ui:Cameră}}. Treceți cu cursorul peste plan: încăperea de sub cursor se luminează, cu suprafața, perimetrul și volumul ei.
3. Pentru a da rapid nume încăperilor, scrieți mai întâi în rând un {{ui:Nume}} și un {{ui:Număr}}, apoi faceți clic în încăpere. Numărul crește cu unu pentru următoarea încăpere (101, 102; A-09, A-10).
4. Sau faceți clic pe o încăpere: este selectată, iar în Proprietăți aveți numele, numărul, suprafața, perimetrul, volumul și eticheta ei.
5. Pentru a împărți o încăpere deschisă, alegeți {{ui:Separator de încăpere}} și faceți clic în două puncte: de la perete la perete sau de la perete la alt separator. Continuați să faceți clic pentru un lanț; Enter, Esc sau un dublu clic îl încheie.

## Ce face un separator

- Delimitează încăperile ca un perete fără grosime. Suprafețele celor două încăperi adunate dau exact încăperea de dinainte.
- Încăperea care conține mijlocul vechii încăperi își păstrează numele și numărul. Cealaltă este nouă.
- Un separator care se oprește în deschis, fără să atingă nimic la un capăt, nu împarte nimic. Prelungiți-l și o va face.
- Partea unui separator aflată în interiorul unui perete este ignorată, astfel încât puteți agăța de axele pereților.
- Selectați un separator și apăsați Delete ca să-l ștergeți: cele două încăperi devin din nou una. Anularea îl readuce.

## Dacă nu există încăpere acolo unde faceți clic

Bara de stare o spune: pereții nu se închid acolo. Închideți golul sau desenați un separator peste el. Nu se refuză nimic; pur și simplu nu există încă o încăpere închisă.

## În IFC

O încăpere este un IfcSpace, cu numărul ei (Name), numele (LongName) și Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volumul este suprafața înmulțită cu înălțimea până la nivelul de deasupra.

Un separator de încăpere este un IfcVirtualElement, entitatea prin care IFC reprezintă o limită care nu este construită. Are o linie și niciun corp, așa că un alt program nu citește niciun perete pentru el și nu numără nimic.

## Încă nerealizat

- Separatoare curbe.
- O încăpere care urmează un tavan înclinat: volumul este întotdeauna suprafața înmulțită cu înălțimea nivelului.
- Relațiile de limită ale spațiului (IfcRelSpaceBoundary) nu sunt scrise, nici pentru pereți, nici pentru separatoare.

Vedeți și [Etichete pentru încăperi și suprafețe](topic:room-and-area-tags), [Suprafețe și limite de suprafață](topic:areas-and-area-boundaries).
