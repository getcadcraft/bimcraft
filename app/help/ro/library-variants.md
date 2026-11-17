---
title: Plasarea și înlocuirea unui element de bibliotecă cu variante
summary: Unele elemente de bibliotecă vin în mai multe dimensiuni sau opțiuni. Alegeți varianta înainte de plasare, vedeți care variantă are un element plasat, înlocuiți-o cu alta dintr-un clic și păstrați-o când elementul este actualizat.
keywords: variantă, variante, dimensiuni, opțiuni, configurație, bibliotecă, librarycraft, plasare, înlocuire, configurator, familie, tip, actualizare, porturi
from: c05f0af3
---

## Ce veți face

Plasați un element de bibliotecă în dimensiunea sau opțiunea de care aveți nevoie și schimbați ulterior varianta fără să-l plasați din nou. Un element cu variante este un singur element în bibliotecă (un nume, o licență, o versiune) cu un tabel al variantelor în care vine: de exemplu o placă de montaj în Mică, Medie și Mare, sau aceeași placă fără găuri.

## Alegerea variantei și plasarea

1. Deschideți fila {{ui:Bibliotecă}} și faceți clic pe cardul elementului.
2. Sub nume, alegerea {{ui:Variantă}} listează fiecare variantă cu dimensiunea ei. Varianta implicită a elementului este aleasă prima.
3. Alegeți una. Planul, dimensiunea și rândul corpului 3D urmează alegerea.
4. Faceți clic pe {{ui:Plasare în plan}} (sau {{ui:Plasare în model}} în vizualizarea 3D) și plasați-l ca orice element: vedeți [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library).

Elementul plasat primește numele elementului și al variantei, de exemplu *Placă de montaj — Mare*, ca tabelul {{ui:Echipamente}} și arborele să le deosebească. Fiecare variantă este propriul tip IFC: plasarea aceleiași variante de două ori partajează un tip, iar o variantă diferită primește propriul tip.

## Aflarea variantei unui element plasat

Alegeți elementul. În {{ui:Proprietăți}}, caseta **Element de bibliotecă** are o linie **Variantă**. IFC o păstrează în `CadCraft_LibraryItem`: `Variant` (id-ul variantei), `VariantName` și `VariantValues` (valorile opțiunilor, ca text), ca alte programe să le poată citi.

## Înlocuirea cu altă variantă

1. Alegeți elementul plasat și faceți clic pe {{ui:Înlocuire element…}} din caseta **Element de bibliotecă**. Se deschide fila {{ui:Bibliotecă}}.
2. Sus, **Alte variante ale** *elementului* listează fiecare variantă cu dimensiunea ei. Cea plasată este marcată și nu poate fi aleasă.
3. Faceți clic pe {{ui:Înlocuire cu …}} la varianta dorită.

Elementul își păstrează locul, rotirea, etajul, numărul elementului, cantitatea și notele; tipul, forma și datele sale se schimbă în cele ale celeilalte variante. {{key:Mod+Z}} readuce prima variantă. Puteți alege în continuare oricare alt element din lista de mai jos, ca înainte: vedeți [Înlocuirea unui element plasat și actualizarea elementelor din bibliotecă](topic:swap-and-update-library-items).

## Copiere, lipire și actualizări

- O copie a unei variante plasate este aceeași variantă: în acest model și în alt model deschis în aceeași filă a browserului, prin Copiere și Lipire.
- **Actualizările** păstrează varianta: dacă noua versiune a elementului o mai are, plasarea devine acea variantă a noii versiuni. Dacă noua versiune nu o mai are, plasarea ia varianta implicită a elementului.

## De reținut

- Doar unele elemente de bibliotecă au variante. Cardurile nu spun asta; alegerea {{ui:Variantă}} apare când deschideți unul.
- Un element poate lista **porturi** (puncte de conectare pentru conducte și canale) pe variantă. Fila Bibliotecă arată câte are o variantă. Ele **nu** sunt scrise încă în IFC când plasați elementul din fila Bibliotecă.
- O variantă fără corp 3D este plasată cu o cutie de rezervă, ca orice simbol 2D.
- Dimensiunile din alegere sunt în mm, așa cum le scrie biblioteca.
