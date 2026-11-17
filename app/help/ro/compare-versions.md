---
title: Compararea a două versiuni ale unui model
summary: Deschideți două versiuni ale aceluiași model IFC și vedeți ce elemente au fost adăugate, eliminate și modificate, potrivite după GlobalId-urile lor, cu un CSV cu fiecare modificare.
keywords: comparare, diferență, diff, versiuni, revizie, modificări, modificat, adăugat, eliminat, mutat, globalid, guid, ce s-a schimbat
from: cfca6971
---

## Ce veți face

Vedeți ce s-a schimbat între modelul pe care îl aveați și cel pe care vi l-au trimis: ce elemente sunt noi, care au dispărut, care s-au mutat sau au primit valori noi de proprietăți.

## Pași

1. Deschideți versiunea mai nouă, apoi faceți clic pe {{ui:Adăugare model…}} și alegeți-o pe cea mai veche. Vedeți [Vizualizarea mai multor modele IFC împreună](topic:several-models).
2. În {{ui:Modele}}, deschideți {{ui:Comparare versiuni}}.
3. Alegeți {{ui:Versiune mai veche}} și {{ui:Versiune mai nouă}}.
4. Faceți clic pe {{ui:Comparare}}.
5. Faceți clic pe un element dintr-o listă ca să-l selectați și să vedeți proprietățile sale. Faceți clic pe {{ui:Descărcare CSV}} pentru fiecare modificare, proprietate cu proprietate.
6. Faceți clic pe {{ui:Ștergere}} ca să reveniți la vederea normală.

## Ce ar trebui să vedeți

- Elementele **Adăugate** în albastru, din versiunea mai nouă.
- Elementele **Eliminate** în roșu, din versiunea mai veche.
- Elementele **Modificate** în ocru, din versiunea mai nouă, fiecare spunând ce s-a schimbat: proprietăți, o mutare cu distanța parcursă sau o formă nouă.
- Tot ce este la fel, transparent.

## De reținut

- Elementele sunt potrivite după GlobalId. Un program care dă elementelor GlobalId-uri noi la fiecare export face ca fiecare element să pară eliminat și apoi adăugat din nou.
- Pozițiile sunt comparate acolo unde modelele se află în scenă. Dacă o versiune a fost mutată intenționat, aliniați-le mai întâi cu {{ui:Mutare}} din {{ui:Modele}}.
- Un GlobalId folosit de două ori într-un model este lăsat din comparare. [Verificați un model pentru probleme frecvente](topic:model-checks) găsește acestea.

## Următorul pas

- [Probleme și fișiere BCF](topic:issues-bcf)
- [Adunarea cantităților după o proprietate](topic:quantity-totals)
