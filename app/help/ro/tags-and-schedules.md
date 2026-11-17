---
title: Etichetați elementele și faceți tabele după etichetă
summary: Definiți-vă propriile etichete (un nume, un tip, valorile permise, clasele la care se aplică), etichetați multe elemente deodată și faceți tabele ale căror coloane, filtre și grupări citesc etichetele. Etichetele sunt păstrate în IFC.
keywords: etichete, etichetare, proprietăți personalizate, parametri, parametri partajați, set de proprietăți, pset, tabel, filtru, grupare după, finisaj, rezistență la foc, editare în masă, csv
from: 9cc7c90d
---

## Ce veți face

O etichetă este o proprietate a dumneavoastră, cum ar fi *Finisaj* sau *Rezistență la foc*. O definiți o dată pentru proiect, o setați pe multe elemente deodată, iar fiecare tabel din BimCraft o poate citi: tabelul de etichete de aici, {{ui:Cantități}}, Căutarea, Colorare după proprietate și [Documente din model](topic:documents-from-the-model).

## Pași

1. Deschideți un model IFC sau începeți o clădire nouă.
2. În panoul din stânga, sub {{ui:Cantități}}, deschideți {{ui:Etichete}}.
3. Faceți clic pe {{ui:Adăugare etichetă}}. Dați-i un nume, alegeți tipul și, dacă doriți, listați valorile permise (separate prin virgule) și clasele pentru care este (`IfcDoor`, `IfcWall` …). Faceți clic pe {{ui:Adăugare etichetă}}.
4. Selectați elementele din model (Căutarea vă ajută: alegeți toate ușile deodată).
5. Sub {{ui:Etichetarea selecției}}, alegeți sau scrieți o valoare pentru fiecare etichetă pe care vreți s-o setați, lăsați celelalte neschimbate și faceți clic pe {{ui:Aplicare la … elemente selectate}}.
6. Sub {{ui:Tabel centralizator de etichete}}, bifați coloanele, adăugați filtre, alegeți {{ui:Grupare după}}, apoi faceți clic pe {{ui:Descărcare CSV}}.

## Ce ar trebui să vedeți

- Un pas în lista de modificări pentru fiecare definiție salvată și fiecare etichetare; {{ui:Anulare}} o readuce.
- Elementele unei clase pentru care o etichetă nu este făcută sunt lăsate în afara acelei etichete, iar linia de stare spune câte sunt.
- Tabelul de etichete listează un rând pentru fiecare element, grupat după câmpul ales; faceți clic pe prima celulă a unui rând ca să alegeți acel element.
- {{ui:Cantități}} listează etichetele sub `CadCraft_Tags`, deci puteți aduna acolo suprafețe sau numărări pe etichetă.

## Tipuri

Tipurile sunt aceeași listă ca la parametrii de familie: Lungime (milimetri), Unghi (grade), Număr, Număr întreg, Da / Nu, Stilou (1–16), Text, Material și Umplere. O valoare care nu se potrivește cu tipul sau nu este una dintre valorile permise este refuzată cu un mesaj, iar nimic nu se schimbă.

## De reținut

- Totul este IFC simplu, deci alte programe citesc valorile: definițiile sunt într-un set de proprietăți `CadCraft_TagDefs` de pe proiect, iar valorile într-un set de proprietăți `CadCraft_Tags` pe fiecare element (o proprietate pentru fiecare etichetă). Lungimile sunt scrise în unitatea de lungime a fișierului.
- `IfcWall` din clasele unei etichete include și pereții de tip standard și pereții compuși.
- Redenumirea unei etichete îi redenumește valorile pe fiecare element, în același pas. Eliminarea unei etichete șterge doar definiția ei: valorile deja setate rămân pe elemente ca proprietăți simple. Ștergeți-le mai întâi (alegeți {{ui:Ștergere}}) ca să le scoateți.
- Etichetele din aplicația de desenare CadCraft (atribute de bloc) nu sunt realizate încă.
