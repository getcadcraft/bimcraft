---
title: Desene de panouri din lemn sau din oțel ușor profilat
summary: Încadrați pereții, planșeele și acoperișurile modelului ca panouri din lemn sau din oțel ușor profilat, vedeți fiecare montant, talpă, buiandrug, grindă de planșeu și căprior la scară și salvați lista de debitare ca CSV și desenele de execuție ca PDF.
keywords: panou, încadrare, desen de execuție, listă de debitare, oțel ușor, montant din oțel, LGS, lemn, grindă de planșeu, căprior, buiandrug, stoc, PDF
from: c09f916e
---

## Deschiderea panourilor

Alegeți {{ui:Desene de panouri}} din meniul {{ui:Build}} (sau tastați {{cmd:PANELS}}). Lista conține fiecare perete desenat, fiecare planșeu și fiecare acoperiș al modelului, fiecare cu o bifă. Pereții vin cu ușile și ferestrele lor ca goluri. Un planșeu este încadrat ca dreptunghiul din jurul conturului său, cu grinzile de planșeu mergând pe latura scurtă. Un acoperiș este încadrat ca un fronton peste conturul pereților săi, cu panta acoperișului; lista spune asta, pentru că un acoperiș în patru ape sau complex nu este un fronton.

## Material, dimensiune și distanță

Alegeți {{ui:Material}}: **Lemn** sau **Oțel ușor**. Piesele din oțel sunt montanți C denumiți după adâncime și grosime (de exemplu C92-1.2), cu o șină pentru tălpi. {{ui:Dimensiunea elementului}} alege o dimensiune pentru fiecare panou bifat, sau lăsați pe Implicit pentru a lua valorile implicite ale fiecărui tip de panou. {{ui:Distanța}} este distanța dintre montanți, grinzi de planșeu sau căpriori. Acestea sunt valori de pornire, pe care le setați. Ele nu sunt o verificare de cod: dacă un montant la acea distanță susține acel perete și dacă un buiandrug acoperă acea deschidere, rămâne în seama tabelelor din normativ (suplimentul Reglementări de construcție are tabelele IRC) și a inginerului de structură.

## Ce obțineți

Primul panou bifat este desenat la scară în casetă, cu cotele. {{ui:Listă de debitare (CSV)}} salvează toate piesele fiecărui panou după marcă, dimensiune și lungime, plus lungimile de stoc de cumpărat pentru ele. {{ui:Desene de execuție (PDF)}} salvează câte o pagină A3 pentru fiecare panou, cu fiecare piesă marcată și lista sa de debitare. {{ui:Desen (SVG)}} salvează primul panou ca desen. Orice nu poate fi încadrat de codul de încadrare (un gol prea aproape de capătul unui perete, un buiandrug care nu încape sub tălpi, o piesă mai lungă decât cea mai lungă piesă de stoc) este listat și în Probleme, pe lângă casetă.

## Ce nu face

Panourile sunt desene făcute din model ori de câte ori sunt cerute: nimic nu este scris în model, deci se potrivesc mereu cu el. Pentru a pune încadrarea în model ca elemente, folosiți {{ui:Încadrare}} pentru pereții, planșeele și acoperișurile din lemn.
