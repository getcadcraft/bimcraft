---
title: Vedeți ce se uzează în cincizeci de ani
summary: Ferestrele, ușile, finisajele și acoperișul pe care le conține modelul, duratele lor de exploatare, anii în care fiecare este înlocuit și costul pe an, precum și valoarea sa actualizată atunci când introduceți un cost pe unitate.
keywords: ciclu de viață, ciclul de viață, durată de exploatare, înlocuire, întreținere, cost, valoare actualizată, actualizare, rată de actualizare, inflație, 50 de ani, ferestre, vopsea, acoperiș, finisaje, cost pe durata de viață
from: 1b849545
---

Secțiunea {{ui:Vedere pe ciclul de viață}} din panoul din stânga listează ce conține modelul și se uzează, precum și momentul în care este înlocuit pe durata studiului (50 de ani, la început). Nimic din model nu este modificat.

## Cum se citește

Fiecare componentă își arată cantitatea (măsurată din model: aria ferestrelor, ușile exterioare și interioare, finisajul pereților exteriori, vopseaua interioară, finisajul pardoselii și al tavanului, amprenta acoperișului, scările), o **durată în ani** și un **cost pe unitate**. O componentă este înlocuită la durata sa, la de două ori durata sa și așa mai departe, cât timp acest moment este înainte de sfârșitul studiului. Astfel, o fereastră cu durata de 30 de ani, într-un studiu de 50 de ani, este înlocuită o dată, în anul 30. Duratele de exploatare sunt cifre tipice de planificare: schimbați-le după produsele și clima proiectului. Nu este presupus niciun cost; introduceți unul pentru a vedea banii pe an, totalul și valoarea actualizată. Adăugați o rată de actualizare și o rată a inflației, dacă le doriți.

{{ui:Salvare program (CSV)}} scrie componentele și anii. Conductele, canalele, cablajul și echipamentele sunt de asemenea listate (vezi mai jos).

## Conducte, canale, cablaj și echipamente

- **Conductele și canalele** sunt metrii fiecărui traseu desenat. **Echipamentele** (pompe, ventilatoare, robinete, terminale, corpuri de iluminat, prize, întrerupătoare, tablouri și celelalte lucruri pe care le urmărește fila Active) sunt numărate pe tip, fiecare tip cu o durată de planificare. Un element a cărui *durată de exploatare* proprie este setată în fila Active are propria linie cu acea durată, iar dacă are o dată de montaj, începe la vârsta sa: o pompă în vârstă de 16 ani cu o durată de 10 ani este scadentă acum, apoi la fiecare zece ani.
- **Cablajul** este o **estimare**: distanța în plan de la tablou, de-a lungul dispozitivelor fiecărui circuit, de la cel mai apropiat, înmulțită cu 1,25 pentru traseu. Modelul nu desenează cablu, așa că verificați-l față de propria extragere de cantități.
- Duratele sunt cifre de planificare de revizuit, nu o sursă.

## Carbon pentru fiecare înlocuire

Bifați {{ui:Includeți carbonul încorporat al fiecărei înlocuiri}}. O fereastră, ușă, scară, acoperiș, conductă sau piesă de echipament nouă este contorizată la carbonul pe care îl au elementele proprii din model de acel tip (factorii din fila Carbon, pe unitate). O componentă fără element sau factor, precum vopseaua, finisajele și cablajul, arată o liniuță și este listată. Sfârșitul de viață al piesei vechi și lucrările de înlocuire nu sunt contorizate.
