---
title: Crearea unui tabel de echipamente și exportul CSV
summary: Transformați etichetele de element dintr-un desen de alimentație publică într-un tabel de echipamente, filtrați-l, mergeți la fiecare element pe foaia sa și descărcați-l ca CSV.
keywords: echipamente, tabel de echipamente, alimentație publică, bucătărie, etichete de element, kcl, atribute, bom, listă de materiale, csv, foaie de calcul, export, extragere de date
from: e3faa1c8
---

## Ce veți face

Citiți lista de echipamente dintr-un desen de bucătărie sau de alimentație publică, verificați-o, găsiți fiecare element în plan și descărcați-o ca fișier de foaie de calcul.

Acest lucru funcționează pe desene ale căror etichete de echipamente își poartă datele ca atribute de bloc, așa cum fac bibliotecile de proiectare a bucătăriilor precum KCL: fiecare etichetă conține numărul elementului (`KCL-ITEM`), cantitatea, categoria, producătorul, modelul, datele electrice și sanitare și observațiile. Alte desene nu au fila {{ui:Equipment}}.

## Pași

1. Deschideți desenul, de preferat din dosarul proiectului, pentru ca desenele sale legate să se încarce și ele.
2. Faceți clic pe fila {{ui:Equipment}} de deasupra desenului. Eticheta sa arată câte elemente se află pe foi, de exemplu „Echipamente (88)”.
3. Citiți tabelul: **Element**, **Cant.**, **Echipament**, **Producător**, **Model**, **Electric**, **Instalații sanitare** și **Unde**.
4. Alegeți ce să enumerați în meniul de deasupra tabelului: **Fiecare foaie**, o foaie, **Pe nicio foaie** sau **Tot ce este etichetat în desen**. Fiecare alegere arată numărul său.
5. Scrieți în caseta de filtrare („Filtru: categorie, producător, model…”) pentru a restrânge lista, de exemplu `frigider` sau `208`.
6. Faceți clic pe numele foii dintr-un element din coloana **Unde**.
7. Uitați-vă la desen: BimCraft trece la acea foaie, mărește vederea pe element și desenează un inel în jurul său. Linia de stare spune „Elementul *n*, *categorie* este încercuit pe *foaie*.”
8. Faceți clic pe {{ui:Equipment}} pentru a reveni la tabel.
9. Faceți clic pe {{ui:Download CSV}}.

## Ce ar trebui să vedeți

- Un fișier numit „*numele desenului* equipment.csv” (cu numele foii între paranteze când ați enumerat o singură foaie) în dosarul de descărcări. Se deschide în Excel, Numbers, LibreOffice sau Google Sheets.
- Linia de stare: „Descărcat *numele fișierului* (*n* elemente).”

CSV-ul are aceste coloane: Element, Cant., Categorie, Producător, Model, Electric, Instalații sanitare, Observații, Observații electrice, Observații sanitare, Foi, Plasat (câte etichete). Descarcă exact rândurile afișate în tabel, după meniu și filtru.

## Cum este construit tabelul

- Este citit din **etichetele înseși**, nu din tabelul de echipamente desenat pe foaie. Nota de deasupra tabelului arată câte etichete au fost citite.
- Un rând este un număr de element cu un set de date. Cantitatea sa este **suma** etichetelor sale, așa cum o numără un tabel tipărit: rafturi etichetate „5” într-un loc și „3” în altul fac 8, afișat ca „5 + 3”.
- **Unde** enumeră foile care arată fiecare element, determinate din ce arată ferestrele de vizualizare ale fiecărei foi, adică ce se tipărește. „Doar model” înseamnă că nicio foaie nu-l arată.
- **Număr folosit de două ori** marchează un număr de element pe două piese diferite de echipament. Rândul are un semn chihlimbariu.
- Etichetele pe care nicio foaie nu le arată sunt păstrate separat sub **Pe nicio foaie**. Adesea sunt rămase din planuri anterioare sau din alte lucrări și nu sunt niciodată amestecate în **Fiecare foaie**.
- **Electric** arată amperi, kW, HP, volți, fază, conexiune și priză, așa cum sunt etichetate. **Instalații sanitare** arată dimensiunile racordurilor: CW apă rece, HW apă caldă, DD scurgere directă, ID scurgere indirectă și gaz. Alte câmpuri ale etichetei nu sunt afișate încă.

## Greșeli frecvente

- **Lipsește fila {{ui:Equipment}}.** Desenul nu are etichete `KCL-ITEM` sau echipamentele sale sunt desenate fără date. Nu există nimic de citit.
- **Numărătorile diferă de tabelul tipărit.** Un tabel tipărit poate lista numere de rezervă sau folosi nume mai scurte decât etichetele. Aveți încredere în etichete pentru ce este plasat; verificați diferențele cu proiectantul.
- **Deschiderea CSV-ului arată caractere ciudate.** Fișierul este UTF-8. Deschideți-l cu comanda de import a foii de calcul și alegeți UTF-8 dacă programul o cere.
- **O celulă începe cu un apostrof.** Valorile care încep cu `=`, `+`, `-` sau `@` primesc un `'` în față, ca foile de calcul să nu le execute ca formule.
- **{{key:F}} și {{key:P}} nu fac nimic.** Ele lucrează pe desen, nu pe tabel. Faceți mai întâi clic pe fila unei foi.
