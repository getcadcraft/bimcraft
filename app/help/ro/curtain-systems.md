---
title: "Sisteme de cortină: pereți vitrați pe o grilă, cu montanți"
summary: Desenați un sistem de cortină ca pe un perete sau așezați-l pe o față, apoi stabiliți liniile grilei și montanții. Se salvează ca IfcCurtainWall, cu panourile și montanții lui.
keywords: sistem de cortină, perete cortină, grilă cortină, montant, vitrare, vitrină comercială, perete de sticlă, panou, geam, pe față, față, masă, linie de grilă, distanță, profil, traversă, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Ce veți face

Realizați un perete vitrat din geamuri între montanți, schimbați locul liniilor grilei și alegeți ce linii poartă un montant.

## Pași

1. Activați **Desenare** și deschideți meniul **Construire** (într-un aspect cu panglică: fila Arhitectură).
2. Alegeți **Sistem de cortină**. În rândul lui setați partea de sus (etajul de deasupra sau o înălțime), o linie la fiecare atâta pe lungime, o linie la fiecare atâta în sus (lăsați gol pentru niciuna), dacă primește montanți și profilul montantului.
3. Faceți clic unde începe și unde se termină, cum desenați un perete. Shift îl ține pătrat.
4. Ca să schimbați grila, alegeți **Grilă cortină** și faceți clic pe sistem:
   - **Adăugare linie**: o linie verticală se pune acolo unde faceți clic. Pentru o linie orizontală, tastați mai întâi înălțimea ei în **La**.
   - **Mutare linie**: faceți clic pe linie, apoi unde trebuie să ajungă.
   - **Eliminare linie**: faceți clic pe linie.
   - **Stabilire după distanță**: tastați distanța în **La fiecare**, apoi faceți clic pe sistem.
5. Ca să schimbați montanții, alegeți **Montant**, alegeți ce acționează (linia verticală pe care faceți clic, linia orizontală la o înălțime, marginea sau fiecare linie), alegeți **Plasare montanți** sau **Eliminare montanți** și un profil, apoi faceți clic pe sistem.
6. Selectați un sistem ca să-l vedeți în întregime în **Proprietăți**: fiecare linie a grilei cu locul ei, o bifă pentru montantul ei și un buton ca să-l eliminați; distanța; marginea; profilul; grosimea geamului.

## Prin față

**Prin față** creează un sistem de cortină pe o față plană pe care faceți clic în vizualizarea 3D. Rândul lui are aceleași setări de grilă și montanți.

- Funcționează pe orice față plană a oricărui element pe care îl arată vizualizarea 3D: o masă, un perete, un planșeu, un plan de acoperiș, un stâlp, un element plasat. Fața poate fi verticală, înclinată sau orizontală.
- Sistemul preia conturul feței. Un fronton sau altă formă neobișnuită taie geamurile și montanții după el.
- Poate face în schimb un **perete**, de-a lungul bazei unei fețe verticale și până la înălțimea feței. Un perete de aici stă întotdeauna vertical, deci o față înclinată sau orizontală nu poate primi unul.
- Nu face un acoperiș. Un acoperiș în BimCraft se calculează din conturul unui nivel și dintr-o pantă, nu dintr-o singură față.
- O față curbată este multe fețe plane mici: un clic ia una dintre ele.
- O față cu goluri: sistemul acoperă conturul exterior al feței.

## Cum se măsoară

- **Aria brută** este conturul sistemului.
- **Aria vitrată** sunt geamurile așa cum sunt făcute: fiecare geam pierde o jumătate de lățime de montant pe o latură cu montant de grilă și o lățime întreagă la un montant de margine.
- Un montant vertical trece de la margine la margine. Un montant orizontal se oprește la fiecare montant vertical și la margine. Montanții de margine stau în interiorul conturului; unde se întâlnesc doi, cel mai vertical trece prin. Îmbinările sunt tăiate drept, nu la unghi.
- **Tabelele centralizatoare** au o listă **Sisteme de cortină** cu aceste cifre, odată ce modelul are unul.

## În fișierul IFC

Un IfcCurtainWall pe nivelul lui, format dintr-un IfcPlate (panou de cortină) pentru fiecare geam și un IfcMember (montant) pentru fiecare bucată de montant, fiecare cu propria formă, material și cantități de bază.

## De reținut

- Orice dimensiune se face cum cereți. Doar un contur fără suprafață este refuzat, pentru că nu există nimic de făcut.
- Un sistem desenat ca un perete își păstrează înălțimea cu care a fost desenat. Dacă mutați un nivel mai târziu, setați din nou înălțimea în Proprietăți.
- Instrumentul Mutare nu mută încă un sistem de cortină. Ștergeți-l și desenați-l din nou sau schimbați-i grila pe loc.
- Anulare revine la fiecare pas: întregul sistem, o modificare a grilei, o modificare a montanților.
