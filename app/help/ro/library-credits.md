---
title: Listarea creditelor bibliotecii și conectarea la bibliotecă
summary: Vedeți fiecare element de bibliotecă folosit într-un model, cu licența și atribuirea sa, copiați creditele sau descărcați-le împreună cu tabelul, și conectați-vă ca să vedeți elementele echipei.
keywords: credite, atribuire, licență, CC BY, CC0, drepturi de autor, bibliotecă de echipă, conectare, token, tabel de echipamente, CSV
from: 81971658
---

## Ce veți face

Acordați creditul acolo unde o licență îl cere și ajungeți la elementele de bibliotecă ale echipei.

## Creditele bibliotecii

1. Deschideți modelul.
2. Faceți clic pe {{ui:Credite}} din bara de instrumente.
3. Citiți lista: fiecare element folosit, versiunea sa, licența, atribuirea și numerele de element sub care apare.
4. Faceți clic pe {{ui:Copiere credite}} pentru a copia liniile de atribuire, sau pe {{ui:CSV cu tabelul}} pentru un tabel de calcul cu fiecare plasare și creditul ei.

Licența și atribuirea apar și în {{ui:Proprietăți}} când alegeți un element plasat, iar sunt salvate în IFC (`CadCraft_LibraryItem`), deci călătoresc cu fișierul.

## Tabelul de echipamente al unui model

Faceți clic pe {{ui:Echipamente}} din bara de instrumente. Tabelul este construit din elementele de bibliotecă plasate: numărul elementului, cantitatea, numele, producătorul, modelul, datele electrice și de instalații sanitare, grupate pe etaj. Se descarcă ca același CSV pe care îl dă tabelul unui desen.

## Conectarea la bibliotecă

1. În fila {{ui:Bibliotecă}}, alegeți **Bibliotecă**.
2. Faceți clic pe {{ui:Conectare la bibliotecă}}. Se deschide o fereastră mică pe acest site.
3. Conectați-vă dacă vi se cere, apoi faceți clic pe **Conectare**. Fereastra îi dă BimCraft o cheie de bibliotecă și puteți închide fereastra.

## Ce ar trebui să vedeți

- „Conectat la bibliotecă” în partea de sus a listei Bibliotecă. Elementele echipei apar lângă cele publice.
- Elementele plasate sunt înregistrate ca folosite, ca biblioteca să poată spune când se schimbă.

## De reținut

- Cheia este păstrată doar în această filă și se încheie când închideți fila. {{ui:Uitare conectare}} o elimină mai devreme.
- Pagina de securitate a contului listează cheia ca „BimCraft library (browser)”; revocați-o acolo.
- Nimic despre model nu este trimis: doar ce elemente de bibliotecă au fost plasate.
