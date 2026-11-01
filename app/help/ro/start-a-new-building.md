---
title: Începerea unei clădiri noi
summary: Creați un model de clădire gol cu niveluri, desenați pereții, plasați elemente din bibliotecă și salvați-l ca IFC.
keywords: nou, clădire nouă, gol, necompletat, de la zero, șablon, niveluri, etaje, planșee, creare, model
from: 546b8ae8
---

## Ce veți face

Începeți un model de clădire de la zero, în loc să deschideți unul. BimCraft creează un model IFC gol cu un proiect, un amplasament, clădirea și nivelurile ei. Puteți plasa echipamente și mobilier pe niveluri din bibliotecă și îl puteți salva ca fișier IFC.

:::note
Pereții pot fi desenați acum: vezi [Desenarea pereților](topic:draw-walls). Ușile, ferestrele, planșeele și acoperișurile urmează.
:::

## Pași

1. Faceți clic pe {{ui:Clădire nouă}} sub **Deschideți un fișier sau un dosar**, sau pe pagina de start.
2. Scrieți **Numele clădirii**.
3. Alegeți câte **Niveluri** are (de la 1 la 200).
4. Scrieți **Înălțimea nivelului**, de la pardoseală la pardoseală: de exemplu `10'-0"`, `10'6"` sau `3000 mm`. Un număr simplu înseamnă picioare în SUA, în rest milimetri.
5. Faceți clic pe {{ui:Creare}}. Nivelurile sunt suprapuse începând de la 0, fiecare la o înălțime de nivel peste precedentul, și numite Nivel 1, Nivel 2 și așa mai departe. Apar în arborele modelului, iar planul Nivelului 1 se deschide lângă vizualizarea 3D, cu {{ui:Desenare}} activ.
6. Desenați pereții: vezi [Desenarea pereților](topic:draw-walls). Redenumiți niveluri sau schimbați-le înălțimile în panoul **Niveluri**.
7. Plasați elemente: vezi [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library). Bara de plasare listează fiecare nivel.
8. Faceți clic pe {{ui:Salvare ca IFC}}. Fișierul este numit după clădire, de exemplu `Casa lui Smith.ifc`.

## De reținut

- Modelul este salvat în milimetri, ca IFC4. Alte programe BIM îl pot deschide.
- **Niveluri** din panoul din stânga listează doar nivelurile care au ceva pe ele; arborele modelului le listează pe toate.
- Până îl salvați, clădirea nouă se consideră lucru nesalvat. BimCraft întreabă înainte să deschideți alt fișier sau să ieșiți și păstrează o copie în acest browser, în cazul în care fila se închide.
