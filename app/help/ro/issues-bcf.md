---
title: Probleme și fișiere BCF
summary: Salvați o vedere a modelului ca problemă — cameră, elemente alese, elemente ascunse, secțiune — partajați-o ca fișier BCF cu alte instrumente de coordonare și deschideți fișierele lor BCF pentru a vedea problemele lor.
keywords: bcf, bcfzip, problemă, probleme, subiect, punct de vedere, raport de coliziuni, coordonare, comentariu, instantaneu, deschidere BCF, salvare BCF, export, import
from: 2a6cf201
---

## Ce veți face

Indicați o problemă din model și păstrați vederea care o arată, apoi trimiteți-o într-un fișier BCF, formatul pe care îl citesc și îl scriu alte instrumente de coordonare.

## Pași

1. Deschideți un model IFC și reglați vederea: orbitați spre el, alegeți elementele implicate, ascundeți ce stă în cale, tăiați-l cu un plan de secțiune sau o casetă de secțiune.
2. Faceți clic pe fila {{ui:Probleme}} din dreapta, apoi pe {{ui:Problemă nouă din această vizualizare}}.
3. Scrieți un titlu și, dacă doriți, un comentariu; alegeți o stare; indicați numele sau e-mailul (dacă sunteți conectat, numele contului este completat; vedeți [Setările BimCraft](topic:settings#your-name-on-issues)). Faceți clic pe {{ui:Creare problemă}}.
4. Faceți clic pe {{ui:Afișare}} la o problemă pentru a-i reda vederea.
5. Faceți clic pe {{ui:Salvare BCF}} pentru a descărca toate problemele într-un singur fișier `.bcf`.
6. Pentru a vedea probleme făcute de altcineva, faceți clic pe {{ui:Deschidere BCF…}} și alegeți fișierul lor `.bcf` sau `.bcfzip`.

## Ce ar trebui să vedeți

- Fiecare problemă din listă, cu o imagine a vederii sale, titlul, starea, autorul și data.
- {{ui:Afișare}} readuce camera, elementele alese, ce a fost ascuns (sau singurele lucruri afișate) și secțiunea. Elementele sunt găsite după GlobalId în fiecare model deschis; linia de stare spune dacă unele lipsesc.
- Un plan de secțiune sau o casetă de secțiune din alt instrument este afișat când se aliniază cu axele modelului; planele înclinate sau suplimentare revin ca un volum de secțiune (până la 6 plane). O problemă păstrează prima casetă a unui volum format din mai multe casete.

## De reținut

- Fișierul este BCF 2.1 și păstrează vederea în coordonatele proprii ale modelului, astfel încât alte instrumente pun camera în același loc.
- Problemele rămân în această filă până le salvați. Deschiderea altui model păstrează lista; deschideți modelul la care se referă problemele înainte de a le afișa.
- O cameră paralelă (ortogonală) dintr-un alt instrument este afișată cu camera în perspectivă a acestui vizualizator, retrasă astfel încât aceeași parte a modelului să umple vederea.

## Greșeli frecvente

- **Afișarea a mutat camera în locuri ciudate.** Problema a fost făcută pe alt model sau cu alte coordonate. Deschideți mai întâi modelul corect.
- **Fișierul nu se deschide.** Nu este o arhivă BCF sau este deteriorat; linia de stare spune motivul.

## Mai departe

- [Ascundere, izolare și transparență a elementelor](topic:hide-and-isolate)
- [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)
