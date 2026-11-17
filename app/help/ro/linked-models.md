---
title: Legarea altor modele pentru coordonare
summary: Afișați alt model IFC alături de modelul curent prin referință (niciodată îmbinat), plasați-l după coordonate comune, coordonate cartografice sau două puncte, agățați-vă de el în timpul desenării și reîncărcați-l când fișierul său se modifică.
keywords: legare, model legat, referință, xref, coordonare, federalizare, structură, MEP, consultant, coordonate comune, topografie, coordonate cartografice, reîncărcare, descărcare din memorie, referință document, IfcDocumentReference
from: 3e0f1eab
---

## Ce veți face

Desenați pe baza modelului unui consultant (structura, instalațiile, clădirea existentă) fără a copia nimic în fișierul propriu.

Un **model legat** este afișat în vizualizarea 3D și tăiat pe planuri, dar nu este niciodată modificat și nu este salvat niciodată în modelul propriu. Modelul păstrează doar legătura: numele fișierului și locul unde trebuie să fie.

## Legarea unui model

1. În secțiunea {{ui:Modele legate}} din panoul din stânga, faceți clic pe {{ui:Legare model…}} și alegeți fișierul IFC. Acesta apare imediat, iar rândul său arată **Afișat**.
2. Alegeți unde se așază în {{ui:Plasare}}:
   - **Coordonate comune** (la început): coordonatele sale sunt ale proiectului, ca atunci când ambele modele au fost trasate din aceeași origine.
   - **Coordonate cartografice**: coordonatele cartografice ale ambelor fișiere le aliniază (ambele au nevoie de o conversie cartografică; BimCraft o spune când unul nu are).
   - **Prin două puncte…**: faceți clic pe un punct din modelul legat, apoi pe locul unde trebuie să ajungă în model; apoi o a doua pereche. Legătura este mutată și rotită (în jurul verticalei) ca să se potrivească.
3. Fiecare modificare a legăturii sau a plasării este un singur pas: {{key:Mod+Z}} o anulează.

## Lucrul cu el

- Planurile arată modelul legat tăiat la înălțimea de tăiere a nivelului, ca linii subțiri, iar instrumentul {{ui:Perete}} și celelalte instrumente de desenare se agață de colțurile și muchiile sale.
- Alegeți elementele sale în vizualizarea 3D pentru a citi proprietățile lor; un model legat nu este cel pe care îl editați, deci butonul său radio din {{ui:Modele}} este dezactivat.
- **Fișierul s-a modificat?** Când browserul poate urmări fișierul (un fișier deschis prin selectorul de fișiere al browserului sau în Studio), BimCraft reîncarcă legătura singur, la câteva secunde după ce fișierul este salvat din nou, și o spune. Altfel, faceți clic pe {{ui:Reîncărcare}}.
- {{ui:Descărcare din memorie}} o ascunde și eliberează memoria; legătura rămâne în model. {{ui:Încărcare…}} o arată din nou (alegeți fișierul: un browser nu poate deschide un fișier doar după nume).
- Simbolul × elimină legătura din model.

## Ce ar trebui să vedeți

- În fișierul IFC: un IfcDocumentReference pentru fiecare legătură (numele fișierului), legat de proiect, și locul său în setul de proprietăți al proiectului CadCraft_Links. La redeschiderea modelului, legăturile sunt listate ca **Neîncărcat** până când le încărcați.

:::note
Verificările de coliziuni, Compararea și Căutarea pot folosi o legătură încărcată ca orice alt model deschis: vezi [Vizualizarea mai multor modele IFC împreună](topic:several-models).
:::
