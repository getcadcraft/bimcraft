---
title: Linii de model și text de model: desenate în model, pe planul de lucru
summary: O linie de model este o linie, o polilinie sau un arc care există în model și apare în fiecare vizualizare care îl vede. Textul de model este scriere 3D cu adâncime reală. Ambele se desenează pe planul de lucru.
keywords: linie de model, text de model, text 3D, litere, semn, semnalistică, linie în 3D, arc, polilinie, plan de lucru, text extrudat, font, adâncime, linie de detaliu, linie de desen, adnotare, IfcAnnotation
from: fc9cccb5
---

## Ce veți face

Desenați linii și litere care fac parte din model, nu dintr-o singură vizualizare.

## Pași

1. Setați întâi planul de lucru (vezi **Planul de lucru**). Un plan de nivel se desenează pe plan; un plan vertical se desenează în Work Plane Viewer.
2. Pentru o linie, alegeți **Linie de model** din meniul {{ui:Build}} și alegeți **Linie**, **Polilinie** sau **Arc (trei puncte)**:
   - o linie se face cu două clicuri;
   - o polilinie are câte un clic pentru fiecare punct, apoi Enter sau dublu clic. Un clic pe primul punct o închide;
   - un arc se face cu trei clicuri: începutul, un punct prin care trece și sfârșitul.
3. Pentru text alegeți **Text de model**. Tastați cuvintele, setați înălțimea literelor mari și adâncimea, apoi faceți clic unde începe textul (capătul din stânga al liniei de bază).
4. Selectați o linie sau un text ca să îl vedeți în {{ui:Proprietăți}}. Cuvintele, înălțimea și adâncimea unui text pot fi schimbate acolo. Delete îl elimină.

## Unde apar

- O linie de model apare în planul nivelului ei, în vizualizarea 3D, în panoul de fațade și secțiuni și în Work Plane Viewer, când se află pe planul de lucru. O linie de desen (Adnotare, Linie) aparține doar unei singure vizualizări.
- Textul de model este geometrie solidă: apare oriunde apare modelul, în plan, în 3D, în fațade și secțiuni și pe planșe.
- Liniile de model nu se desenează încă pe planșele tipărite. Textul de model se desenează.

## Fontul

Textul de model folosește același font ca planșele și PDF-urile: Liberation Sans, sub SIL Open Font License. O literă pe care fontul nu o are se desenează ca semnul întrebării, iar dvs. sunteți anunțat care este. Există un singur font și o singură grosime. Literele sunt distanțate după lățimile proprii ale fontului, fără kerning.

## În fișierul IFC

- O linie de model este un IfcAnnotation cu tipul de obiect ModelLine. Forma ei este o curbă 3D: o polilinie sau un cerc tăiat pentru un arc.
- Textul de model este un IfcBuildingElementProxy cu tipul de obiect ModelText. Forma lui este câte un solid extrudat pentru fiecare piesă de literă, cu găurile literelor precum O și B. Cantitățile sale sunt aria fețelor și volumul (aria fețelor înmulțită cu adâncimea).

## De știut

- Orice dimensiune se face așa cum cereți. Doar o linie fără lungime, un arc ale cărui trei puncte sunt pe aceeași linie sau un text fără litere sunt refuzate, pentru că nu există ce să se facă.
- Fiecare linie, precum și fiecare text sau modificare a acestuia, este un pas al {{ui:Anulare}}.
