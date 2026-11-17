---
title: Începeți o clădire nouă
summary: Creați un model de clădire gol, cu niveluri, desenați pereții, plasați elemente din bibliotecă și salvați-l ca IFC.
keywords: nou, clădire nouă, gol, necompletat, de la zero, șablon, niveluri, etaje, pardoseli, creare, model
from: 68786865
---

## Ce veți face

Începeți un model de clădire de la zero, în loc să deschideți unul existent. BimCraft creează un model IFC gol, cu un proiect, un amplasament, clădirea și nivelurile ei. Puteți plasa echipamente și mobilier pe niveluri din bibliotecă și puteți salva modelul ca fișier IFC.

:::note
Pereții se pot desena acum: vezi [Desenarea pereților](topic:draw-walls). Uși, ferestre, planșee și acoperișuri urmează să fie realizate.
:::

## Pași

1. Faceți clic pe {{ui:Clădire nouă}} sub **Deschideți un fișier sau un dosar**, sau pe pagina de start.
2. Scrieți **Numele clădirii**.
3. Alegeți câte **Niveluri** are (de la 1 la 200).
4. Scrieți **Înălțimea nivelului**, de la pardoseală la pardoseală: de exemplu `10'-0"`, `10'6"` sau `3000 mm`. Un număr fără unitate înseamnă picioare în SUA și milimetri în rest.
5. Fiecare câmp este deja completat, deci le puteți lăsa așa cum sunt. Sub ele, caseta spune cu ce începeți: unitățile, **Tipul de perete** pe care îl desenează primul instrument Perete (alegeți altul din listă, dacă doriți) și prima foaie.
6. Faceți clic pe {{ui:Creare}}. Nivelurile se așază de la 0, fiecare la o înălțime de nivel deasupra celui anterior, și se numesc Nivel 1, Nivel 2 și așa mai departe. Apar în arborele modelului, iar planul Nivelului 1 se deschide lângă vederea 3D, cu {{ui:Desenare}} activat.
7. Desenați pereții: faceți clic pe {{ui:Perete}} și apoi pe două puncte. Vezi [Desenarea pereților](topic:draw-walls). Redenumiți nivelurile sau le schimbați înălțimile în panoul **Niveluri**.
8. Plasați elemente: vezi [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library). Bara de plasare listează fiecare nivel.
9. Faceți clic pe {{ui:Salvare ca IFC}}. Fișierul se numește după clădire, de exemplu `Smith's house.ifc`.

## De reținut

- Modelul se salvează în milimetri, ca IFC4. Alte programe BIM îl pot deschide.
- O clădire nouă vine cu o singură foaie, **A-101**, care conține planul celui mai de jos nivel: A3 la 1:100 când lucrați în unități metrice, Tabloid la 1/8" = 1'-0" în rest. Foaia este goală până la primul perete și apoi arată planul pe măsură ce desenați. O deschideți sub **Planșe** în navigatorul de proiect ca să-i schimbați hârtia, scara sau cartușul, să adăugați vederi sau s-o ștergeți. O clădire pornită dintr-un șablon aduce în schimb foile șablonului.
- Pentru a schimba ce primește fiecare clădire nouă (tipul de perete pentru proiectele metrice, nivelurile, prima foaie, instrumentul activ după {{ui:Creare}}), vezi [Politici implicite](topic:default-policies).
- Nu trebuie configurat nimic înainte de primul perete. Tipul de perete, înălțimile nivelurilor, unitățile și foaia pot fi schimbate mai târziu.
- **Niveluri** din panoul din stânga listează doar nivelurile care au ceva pe ele; arborele modelului le listează pe toate.
- Până la salvare, clădirea nouă este considerată lucru nesalvat. BimCraft întreabă înainte să deschideți alt fișier sau să ieșiți și păstrează o copie în acest browser, în cazul în care fila se închide.
