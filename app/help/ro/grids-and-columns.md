---
title: Axe și stâlpi
summary: Trasați liniile de axe cu bule numerotate și literate, prin distanțare sau una câte una, desenați pereți și stâlpi de-a lungul lor și vedeți-i pe planuri, elevații și secțiuni.
keywords: axă, axe, linie de axă, rețea de axe, axă de stâlpi, bulă, linie de axă, rețea structurală, 1 2 3, A B C, stâlp, stâlpi, pilon, agățare, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ce veți face

Trasați o clădire pe o rețea de axe, apoi desenați pereți și plasați stâlpi de-a lungul liniilor ei.

## Plasarea unei rețele întregi

1. Activați {{ui:Desenare}}, apoi alegeți {{ui:Build}} › {{ui:Axe}}.
2. Faceți clic pe {{ui:Plasare rețea…}}. Indicați câte **linii numerotate** (1, 2, 3…) și câte **linii cu litere** (A, B, C…) doriți și la ce distanță. Introduceți o distanță sau mai multe, separate prin virgule, pentru deschideri inegale (de exemplu `20', 24', 20'`). {{ui:Dincolo de ultimele linii}} reprezintă cât se prelungește fiecare linie peste liniile exterioare de celălalt tip, iar {{ui:Rotit (grade)}} rotește întreaga rețea.
3. Faceți clic pe {{ui:Plasare}}, apoi faceți clic acolo unde trebuie să fie prima intersecție (1 / A). Previzualizarea urmează cursorul.

Liniile numerotate sunt verticale pe plan și distanțate pe orizontală; liniile cu litere sunt orizontale și distanțate pe verticală. Literele sar peste I și O, ca pe desene, astfel încât nu sunt citite niciodată ca 1 și 0.

## Desenarea liniilor de axe una câte una

Cu {{ui:Axe}} activat, faceți clic unde începe o linie și unde se termină. Linia primește următoarea etichetă din șirul liniilor pe care le urmează (după 3 vine 4; după B vine C). Apăsați {{key:Esc}} pentru a opri.

## Modificarea unei linii de axă

Cu {{ui:Axe}} activat, faceți clic pe o linie pentru a o alege. Tastați o {{ui:Etichetă}} nouă și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Ștergere această linie}} (sau apăsați {{key:Delete}}). {{ui:Bule}} plasează bulele la ambele capete, la începutul sau sfârșitul fiecărei linii, sau nicăieri. Fiecare modificare este un singur pas: {{key:Mod+Z}} o anulează.

## Desenarea de-a lungul rețelei

Instrumentul {{ui:Perete}}, instrumentul {{ui:Stâlp}} și celelalte instrumente de desenare se agață de liniile de axă și de locurile în care acestea se intersectează (marcajul de agățare este un cerc mic cu o cruce).

**Stâlpi:** alegeți {{ui:Build}} › {{ui:Stâlp}}, selectați forma (dreptunghiulară sau rotundă), dimensiunea și dacă stâlpul merge **până la nivelul de deasupra** sau până la o înălțime fixă, apoi faceți clic. {{ui:La fiecare intersecție a rețelei}} plasează un stâlp în fiecare intersecție care nu are încă unul. Faceți clic pe un stâlp pentru a-i modifica forma, dimensiunea sau înălțimea în {{ui:Proprietăți}}; {{key:Delete}} îl elimină. Stâlpii care merg până la nivelul de deasupra urmează acel nivel când i se schimbă înălțimea.

## Ce ar trebui să vedeți

- Rețeaua pe planul fiecărui nivel, cu o bulă și eticheta ei la capătul fiecărei linii.
- Liniile de axă în setul de desene: pe planuri și, pe elevații și secțiuni, acolo unde o linie se vede din capăt, cu bula deasupra clădirii. Vedeți [Elevații, secțiuni și foi](topic:sheets).
- În fișierul IFC: o rețea pentru clădire (IfcGrid, cu liniile numerotate într-o listă și liniile cu litere în cealaltă), iar stâlpii ca IfcColumn, cu dimensiunea, înălțimea și cantitățile lor. Alte programe BIM afișează ambele.

:::note
O rețea venită într-un fișier de la alt program este afișată, iar instrumentele se agață de ea, dar liniile ei nu pot fi modificate aici.
:::
