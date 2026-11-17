---
title: "Politici implicite: stabiliți cu ce pornește o clădire nouă"
summary: Stabiliți o dată ce tip de perete, niveluri, prima foaie, etichete LOD, unități și instrument are la început o clădire nouă, pentru proiecte metrice și imperiale, și distribuiți politicile în birou ca un fișier mic.
keywords: implicit, implicite, politici implicite, politică, standard de birou, valori implicite de birou, șablon, clădire nouă, primul tip de perete, perete metric, zidărie, LOD, nivel de dezvoltare, prima foaie, hârtie, scară, niveluri, înălțime de etaj, nume de niveluri, instrument perete, unități, distribuire, export, import, json
from: 42379aa5
---

## Ce veți face

Spuneți BimCraft cu ce ar trebui să pornească o clădire nouă, ca nimeni din birou să nu schimbe aceleași lucruri de fiecare dată. Acesta este un supliment: este oprit până îl porniți, iar o politică pe care nu o setați lasă valoarea implicită a BimCraft exact cum este.

:::note
Acestea sunt valori implicite pentru clădiri **noi** și lucruri **noi**. Un proiect deja început nu se schimbă.
:::

## Pași

1. Deschideți Setările, mergeți la {{ui:Suplimente}} și porniți {{ui:Politici implicite}}.
2. În Setări, deschideți fila **BimCraft** și alegeți {{ui:Politici implicite}} din lista din stânga.
3. Setați politicile dorite. Fiecare pornește pe **cea proprie a BimCraft**, cu ce este aceea între paranteze. O politică cu o casetă **Metric** și una **Imperial** ia câte o valoare pentru fiecare fel de proiect; completați doar pe cele de care aveți nevoie.
4. Nu există buton Salvare: fiecare modificare se salvează pe măsură ce o faceți. O valoare care nu poate fi folosită este refuzată cu un mesaj, iar cea veche rămâne.
5. Faceți clic pe {{ui:Clădire nouă}}. Caseta de dialog se completează din politicile setate, iar fiecare valoare stabilită de o politică are alături **din Politici implicite**. Oricare dintre ele se poate schimba înainte de {{ui:Creare}}.

## Politicile

- **Unitățile unei clădiri noi**: unitățile trec la aceasta la Creare.
- **Numărul de niveluri**, **Nume de niveluri** și **Înălțimea nivelului**. Într-un nume, `{n}` numără 1, 2, 3; `{n0}` numără 0, 1, 2; `{nn}` și `{nn0}` fac același lucru cu două cifre. Deci `Etaj {nn0}` dă Etaj 00, Etaj 01, Etaj 02.
- **Primul tip de perete**: ce desenează instrumentul Perete mai întâi. Un birou metric poate începe cu Zidărie exterioară 300 mm, în timp ce proiectele imperiale păstrează Exterior 2×6.
- **Eticheta LOD pe tipurile de perete de start**: nivelul de dezvoltare (LOD 100 până la 500) pe care îl arată cele nouă tipuri de start oriunde este listat un tip. Vedeți [Construirea ansamblurilor de perete](topic:wall-assemblies).
- **LOD-ul unui tip de perete nou**: eticheta cu care începe un tip nou în editorul de tipuri. O puteți schimba acolo.
- **Prima foaie**: hârtia, scara, numărul foii și numele (folosiți `{level}` pentru numele celui mai de jos nivel), sau deloc prima foaie.
- **Dimensiunile adnotărilor pe hârtie** (Setări › General › Politici implicite): înălțimile biroului, în milimetri cum se tipăresc, pentru note, text de cotare, etichete, nume de camere, litere ale cercurilor de grilă, titluri de vizualizări și text din tabele. O clădire nouă le ia la Creare și le păstrează în fișierul ei. Vedeți [Desenați la dimensiune reală, adnotați după scară](topic:annotation-sizes).
- **Instrumentul activ după Creare**: Selectare, cum face BimCraft singur, sau Perete, ca primele două clicuri pe plan să deseneze deja un perete.

## Aspectul tabelelor: standardul biroului

În **Setări › General › Politici implicite**, sub **Aspectul tabelelor centralizatoare (standardul biroului)**, stabiliți cum este grupat fiecare tabel, dacă are subtotaluri și un total, titlul lui și forma antetelor de coloane. Fiecare tabel care nu-și spune propriile setări le ia, oricine l-ar configura. Vedeți [Organizarea, salvarea și exportul unui tabel](topic:schedule-layouts).

## Distribuiți-le în birou

1. În Setări, deschideți fila **General** și alegeți {{ui:Politici implicite}}.
2. Tastați **Numele biroului**, dacă doriți. Este scris în fișier.
3. Faceți clic pe {{ui:Salvare într-un fișier}}. Obțineți un fișier mic care se termină în `.ccdefaults.json`.
4. Pe alt calculator, porniți suplimentul, deschideți același loc și faceți clic pe {{ui:Încărcare dintr-un fișier}}. Politicile din fișier înlocuiesc cele de pe calculatorul respectiv.

Fila General are și **Sistemul de unități al unui proiect nou**, care ține pentru fiecare aplicație care are suplimentul, și {{ui:Resetare toate politicile}}. {{ui:Resetare la valorile implicite ale BimCraft}} din fila BimCraft șterge doar pe ale BimCraft.

## De reținut

- Fișierul este JSON simplu, deschis: o listă de nume de politici și valori. O politică pe care fișierul o numește și pe care această versiune nu o cunoaște este lăsată afară și numită în mesaj; restul se încarcă.
- Politicile se păstrează în acest browser, pentru fiecare aplicație CadCraft de pe acest calculator. Nu sunt scrise în fișierul clădirii și nu se sincronizează între calculatoare: folosiți fișierul.
- Eticheta LOD a unui tip de start vine din politica de pe acest calculator. Un tip pe care îl faceți ca o copie a unuia de start își poartă eticheta în fișierul clădirii.
- BimCraft nu are setare de precizie, deci nu există aici o politică de precizie.
- O clădire pornită dintr-un șablon aduce nivelurile și foile proprii ale șablonului. Politica tipului de perete și cea a unităților se aplică în continuare.
- Opriți suplimentul și totul este din nou al BimCraft. Politicile sunt păstrate pentru când îl porniți din nou.
