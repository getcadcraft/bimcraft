---
title: Calchiere a unui nivel, penițe pe vedere, scară dintr-o schiță și deschiderea unui OBJ
summary: Afișați alt nivel punctat sub plan și aliniați-l, dați pereților, ușilor și ferestrelor propria peniță într-o vedere, desenați o linie de mers ca să obțineți o scară și deschideți o plasă Wavefront OBJ.
keywords: referință de calchiere, fantomă, suport, peniță, grosime de linie, tip de linie, suprascriere, scară, schiță, podest, OBJ, plasă, import, Wavefront
from: 333ebbde
---

## Calchiere a unui nivel

Alegeți {{ui:Calchiere}} din meniul {{ui:Build}}, apoi o vedere din listă: planul altui nivel, planul tavanului unui nivel sau un indicator (decupat la cadrul lui). Pereții, stâlpii și planșeele lui apar punctate sub planul pe care desenați. Mutați-o făcând clic pe un punct de bază de pe referință și apoi pe locul unde trebuie să ajungă acel punct, sau tastați X, Y și un unghi (se rotește în jurul centrului ei). {{ui:Resetare}} o readuce la loc, {{ui:Ascundere}} o înlătură. Este doar o referință: nimic nu o poate alege, nu se imprimă și nu se salvează în IFC. BimCraft o reține pentru fiecare nivel în acest browser.

## Penițe pe vedere

Alegeți {{ui:Penițe}}. Spuneți pentru ce este peniță: toți pereții, toate ușile, toate ferestrele, tipul elementului ales sau elementele alese. Alegeți o grosime, un tip de linie (continuă, întreruptă, punctată) și o culoare, apoi {{ui:Aplicare}}. Modificarea este doar pentru planul acestui nivel. O alegere directă bate un tip, iar un tip bate o categorie întreagă. {{ui:Ștergere totală}} le elimină. Sunt păstrate în acest browser. Bifați **Culori de penițe în 3D** ca să colorați penițele colorate pe model în vizualizarea 3D (grosimea sau tiparul punctat aparțin liniei, deci acolo se vede doar culoarea); debifați ca să reveniți. {{ui:Imprimare}} le desenează pe PDF-ul planului: grosimea se scalează de pe ecran (penița implicită a peretelui, de 1.75 pixeli, este de 0.5 mm), liniile punctate rămân punctate, iar o culoare se imprimă în valoarea ei din tema hârtiei.

## Scară dintr-o schiță

Alegeți {{ui:Schițare scară}} și faceți clic pe colțurile liniei de mers, începând cu prima treaptă. O linie este o scară dreaptă, două linii care se întâlnesc în unghi drept sunt un L, iar trei linii (în sus, transversal, înapoi) sunt un U. Apăsați {{key:L}} ca să desenați un podest: faceți clic pe colțurile lui și apăsați {{key:Enter}}; latura lui scurtă stabilește lățimea scării. Apăsați {{key:Enter}} ca să plasați scara. Fiecare treaptă este calculată din lungimea liniei trasate și din numărul de contratrepte cerut de înălțime. După aceea scara este una obișnuită: o schimbați în Proprietăți, iar golul scării și balustradele urmează.

Bifați **Fă din ea o familie** în rândul uneltei (sau apăsați {{key:F}}) înainte de {{key:Enter}}, ca scara să fie plasată ca familie (scară dreaptă, L sau U). Intră ca un singur element și se deschide în editorul de familii cu lățimea, treapta, înălțimea totală, treptele din fiecare rampă și golul unui U ca parametri, ca să puteți adăuga dimensiuni, un simbol în plan sau puncte active. Treptele și înălțimea contratreptei urmează din acestea. Nu are balustrade sau gol de scară: acestea aparțin unei scări obișnuite.

## Deschiderea unui OBJ

Deschideți un fișier `.obj` ca orice alt fișier. Un OBJ nu are unități, deci BimCraft citește metri cu Y în sus, cum scriu majoritatea programelor. Fiecare obiect sau grup devine un element de plasă pe un singur nivel, pe care îl puteți apoi vedea, măsura, secționa, plasa într-un model și salva ca IFC. Liniile, curbele și suprafețele sunt lăsate deoparte, iar linia de stare o spune.

Un obiect care este exact o prismă dreaptă (o plasă închisă cu două fețe de capăt paralele și identice și laturi plane perpendiculare pe ele: o placă, un stâlp, un bloc de zid, o placă cu găuri) este salvat în IFC ca solid extrudat propriu IFC, cu conturul și adâncimea lui, nu ca o listă de triunghiuri. Alte programe îl citesc ca solid real, rămâne mic, iar adâncimea și conturul pot fi modificate ulterior. Linia de stare arată câte obiecte au fost păstrate astfel. Orice nu este exact o prismă (o formă conică, o plasă cu un vârf mutat, o plasă cu un gol) rămâne sub formă de triunghiuri. Un fișier STEP este citit la fel.
