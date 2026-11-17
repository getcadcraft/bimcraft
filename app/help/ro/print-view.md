---
title: Verificarea unui desen în vizualizarea de imprimare
summary: Treceți un DWG sau DXF în vizualizarea de imprimare ca să-l vedeți negru pe alb, cu grosimile liniilor sale și fără straturile care nu se imprimă niciodată.
keywords: imprimare, trasare, previzualizare, previzualizare trasare, grosimi de linii, grosime de linie, monocrom, alb-negru, defpoints, fără trasare
from: 1a59c23e
---

## Ce urmează să faceți

Vedeți cum va arăta o foaie pe hârtie înainte s-o imprimați din programul care a creat-o: negru pe alb, cu grosimile liniilor la lățimea lor reală și fără straturile setate să nu se imprime.

## Pași

1. Deschideți un desen DWG sau DXF.
2. Faceți clic pe o filă de foaie deasupra desenului.
3. Faceți clic pe {{ui:Vizualizare imprimare}} la capătul filelor sau apăsați {{key:P}}.
4. Măriți un detaliu ca să comparați liniile groase cu cele subțiri.
5. Faceți clic din nou pe {{ui:Vizualizare imprimare}} sau apăsați {{key:P}}, ca să reveniți la culorile normale.

## Ce ar trebui să vedeți

- Hârtie albă pe un birou gri, fiecare linie și text în negru, oricare ar fi tema.
- Grosimile liniilor: pe o foaie, fiecare grosime se desenează la lățimea sa reală pe hârtie, deci o linie de 0.5 mm este de două ori mai groasă decât una de 0.25 mm, la orice zoom. O linie nu se desenează niciodată mai subțire decât grosimea sa de pe ecran.
- Straturile setate să nu se imprime și stratul DEFPOINTS sunt ascunse.
- Butonul {{ui:Vizualizare imprimare}} rămâne apăsat. Vizualizarea de imprimare rămâne activă când schimbați foaia sau deschideți alt desen, până o dezactivați.

În {{ui:Model}}, vizualizarea de imprimare folosește doar grosimile de pe ecran (liniile subțiri de un pixel, cele mai groase puțin mai late), pentru că spațiul model nu are dimensiune de hârtie.

## Greșeli frecvente

- **Așteptarea să se imprime.** Vizualizarea de imprimare este o previzualizare. Imprimarea și exportul PDF nu sunt încă integrate în BimCraft; imprimați din programul care a creat desenul.
- **Așteptarea stilurilor de trasare.** Tabelele de stilouri și culorile stilurilor de trasare nu se citesc. Totul este negru simplu.
- **Apăsarea lui P în timp ce scrieți.** {{key:F}} și {{key:P}} nu fac nimic cât scrieți într-un câmp sau cât este afișat tabelul de echipamente.
