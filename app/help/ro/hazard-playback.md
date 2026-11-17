---
title: Redarea unei inundații, a vântului sau a unui cutremur asupra clădirii
summary: Apa care urcă prin încăperi, presiunea vântului pe fiecare nivel sau un cutremur care zguduie nivelurile, redate pe un plan sau o elevație cu un glisor de timp. Modele simple, cu ipotezele enumerate; nu este o verificare normativă și nici un proiect structural.
keywords: pericol, inundație, vânt, cutremur, seismic, deriva nivelului, balans, forță tăietoare de bază, nivel al apei, climă, scenariu, nivelul mării, redare, nivel, perioadă
from: ff0d34d1
---

Secțiunea {{ui:Redare a hazardului}} din panoul din stânga redă un pericol pe modelul IFC deschis. Nimic din model nu este modificat.

:::warning
Acestea sunt **modele simple pentru a vedea ce face un pericol cu acest aranjament**, nu un studiu de inundații, o verificare a normei pentru vânt sau un proiect structural. Fiecare rezultat își enumeră ipotezele.
:::

## Inundație

Stabiliți cel mai înalt nivel al apei deasupra celui mai jos etaj și minutele de urcare, menținere și coborâre. Apa intră într-o încăpere printr-o deschidere al cărei prag l-a depășit, iar încăperile unite cu încăperi umede prin deschideri sub nivelul apei au același nivel (cvasi-static). Tabelul indică momentul în care fiecare încăpere se udă prima dată și adâncimea; planul o redă. Scrieți cea mai mare cantitate de apă pe care o poate primi o încăpere, iar încăperile care o depășesc sunt avertismente. **Scenarii climatice:** încărcați propriul fișier de scenariu (JSON sau CSV cu un an, o creștere a nivelului mării și un factor de inundație) și alegeți un an. Sau activați suplimentul Scenarii climatice și alegeți un scenariu și un an: inundația rulează de două ori, prezentul alături de viitor (vedeți „Scenarii climatice: inundație, căldură și incendiu forestier în 2050 și 2080”). Tipurile Expunere la incendii forestiere și Căldură: fișier cu vremea viitoare apar în aceeași listă.

## Vânt

Presiunea urmează ½ρV², cu viteza crescând pe înălțime; forța pe un nivel este această presiune înmulțită cu un factor de rafală, cu cei doi coeficienți de presiune, cu lățimea și cu înălțimea nivelului. Obțineți forța tăietoare, momentul de răsturnare și balansul.

## Cutremur

O clădire de forfecare: o masă pe fiecare planșeu (suprafața amprentei × kilograme pe metru pătrat, pe care o setați), aceeași rigiditate în fiecare nivel, stabilită pe prima perioadă pe care o dați (o zecime de secundă pe nivel dacă lăsați câmpul gol, iar aplicația o spune), amortizare și o mișcare generată a terenului (un impuls sau zgomot filtrat) la accelerația de vârf pe care o alegeți. Rezultatul este deriva fiecărui nivel, accelerațiile planșeelor și forța tăietoare de bază; elevația redă balansul, desenat mai mare decât este. Introduceți o derivă admisă, iar nivelurile care o depășesc sunt avertismente. Este elastic: nimic nu cedează și nu fisurează.

## Rigiditatea planșeelor din cadrul de analiză

Pentru un cutremur sau pentru balansul produs de vânt, alegeți **Cadrul de analiză** drept sursă a rigidității, în loc să introduceți o perioadă. Fiecare planșeu este împins lateral pe rând, cadrul (grinzi, stâlpi, contravântuiri, planșee) este rezolvat, iar rigiditatea planșeelor, cu totul lucrând împreună, conduce calculul. Greutatea este cea proprie a elementelor plus încărcarea de planșeu pe metru pătrat pe care o setați în caseta planului fiecărui planșeu. Se afișează prima perioadă reală. Este elastic: nimic nu cedează, iar torsiunea nu este modelată. Pentru vânt, forțele pe niveluri rămân cele presupuse mai sus (un profil de tip putere, factorul dvs. de rafală și coeficienții de presiune fixi, nu un cod pentru vânt); doar balansul provine din cadru, prin rezolvarea matricei complete de rigiditate a cadrului cu aceste forțe. Modelul are nevoie de un IFC cu un cadru pe care fila Analiză îl poate citi.

## Unități

Adâncimile apei, balansul și deriva pe niveluri, distanțele și suprafețele sunt afișate în {{ui:Unități}} pe care le-ați ales. Forțele (kN), timpii și accelerațiile își păstrează propriile unități, iar o valoare pe care o tastați într-o casetă etichetată în metri rămâne în metri. Același lucru este valabil pentru rezultatele evacuării, luminii naturale, încălzirii și răcirii și amenajării: lungimile, suprafețele și volumele urmează alegerea dvs.; presiunea, debitul, temperatura, energia și puterea nu sunt niciodată convertite.
