---
title: Editarea în fațade și secțiuni, formate de planșă, cartușe și redenumire
summary: Mutați pereții, ușile, ferestrele și nivelurile și desenați pereți, goluri, niveluri, cote și note direct într-o fațadă sau secțiune, păstrați formatele și cartușele proprii ca date și redenumiți familii, dimensiuni și elemente din navigatorul de proiect.
keywords: nivel nou în fațadă, cotă în fațadă, editare în fațadă, editare în secțiune, vizualizare fațadă, vizualizare secțiune, mutare perete în fațadă, pervaz fereastră, înălțime nivel, tragere nivel, desenare perete în secțiune, note pe fațadă, adnotare, format de planșă, format personalizat, dimensiune hârtie, cartuș, șablon cartuș, format planșă, chenar, câmpuri, client, desenat de, revizie, redenumire familie, redenumire tip, redenumire element, navigator de proiect
from: 8726cf83
---

## Scop

Modificați clădirea acolo unde o vedeți din lateral, configurați planșele pe care le folosește biroul și dați familiilor, dimensiunilor și elementelor numele pe care le doriți.

## Editare într-o fațadă sau secțiune

1. Activați {{ui:Draw}}. În {{ui:Project browser}}, deschideți {{ui:Elevations}} sau {{ui:Sections}}.
2. Faceți clic pe butonul creion {{ui:Edit in this view}} de pe un rând. Vizualizarea se deschide așa cum o desenează planșele, cu ce puteți modifica deasupra.
3. Cu {{ui:Select and move}}:
   - trageți un perete care este orientat spre vizualizare, de-a lungul lui;
   - trageți o ușă sau o fereastră de-a lungul peretelui său, iar o fereastră în sus sau în jos pentru a-i schimba pervazul;
   - trageți linia unui nivel în sus sau în jos pentru a-i schimba înălțimea;
   - trageți o notă.
4. {{ui:Door}} și {{ui:Window}}: faceți clic pe un perete unde trebuie să ajungă (o fereastră la înălțimea la care faceți clic).
5. {{ui:Wall}} (în secțiuni): faceți clic unde începe și unde se termină pe planul secțiunii; peretele se desenează pe nivelul de sub primul clic, până la nivelul următor.
6. {{ui:Note}}: faceți clic și scrieți. Notele se păstrează în fișier și se desenează pe fiecare planșă care arată vizualizarea.
7. {{ui:Level}}: faceți clic la înălțimea unde trebuie să ajungă un nivel nou. Are înălțimea spațiului până la nivelul de deasupra (3000 mm la cel mai de sus); trageți linia lui pentru a o schimba. Un al doilea nivel aflat la mai puțin de 50 mm de altul este refuzat.
8. {{ui:Dimension}}: faceți clic unde începe și unde se termină. Clicurile prind muchiile peretelui, ușii, ferestrei și nivelului, iar cota este orizontală sau verticală, în funcție de direcția în care mutați. Se păstrează în fișier și se desenează, cu lungimea ei, pe fiecare planșă care arată vizualizarea. Faceți clic pe ea cu {{ui:Select and move}} pentru a o selecta.
9. {{ui:Delete}} sau tasta Delete elimină peretele, ușa, fereastra, cota sau nota selectată. Ctrl+Z anulează ultima modificare cât timp panoul este deschis. Esc revine la {{ui:Select and move}}.

Fiecare modificare este aceeași cu cea făcută în plan, un pas de anulare: planul, vizualizarea 3D și planșele urmează.

## Formate de planșă și cartușe

1. Deschideți o planșă ({{ui:New sheet}}, sau una a dumneavoastră din {{ui:Sheets}}). Lângă {{ui:Paper}} se află {{ui:Title block}} și {{ui:Formats…}}.
2. {{ui:Paper}} listează fiecare dimensiune standard (de la Letter la Arch E, de la A4 la A0) și pe ale dumneavoastră.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} cu câmpurile obișnuite sau propriul dumneavoastră. Câmpurile celui ales apar sub numele planșei: tastați clientul, cine a desenat, revizia.
4. {{ui:Formats…}} creează ale dumneavoastră: o dimensiune de planșă (nume, lățime, înălțime, chenar) și un cartuș (unde se află, lățimea lui, câmpurile lui, unul pe rând; terminați un câmp cu * pentru a-l face mare).
5. {{ui:Export}} le salvează ca fișier de bibliotecă, iar {{ui:Import…}} adaugă unul la alt model. Ele se păstrează în model, deci un șablon le poartă cu el.

## Redenumirea familiilor, dimensiunilor și elementelor

1. În {{ui:Project browser}}, deschideți {{ui:Families}}.
2. Creionul de lângă o familie o redenumește; tipul fiecărei dimensiuni primește noul nume.
3. Deschideți dimensiunile unei familii pentru a redenumi o dimensiune sau un element plasat din ea (se listează până la 40 pe dimensiune).

Fiecare redenumire este un pas de anulare.
