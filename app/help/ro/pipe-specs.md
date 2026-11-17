---
title: Specificații de țevi, robinete, clapete și familii de la producători
summary: Configurați propriile specificații de instalații cu tabele de dimensiuni (material, tip de îmbinare și rugozitate), păstrate în fișierul modelului; plasați robinete, un filtru și clapete pe trasee; și aduceți un model de robinet sau de echipament de la un producător ca familie cu porturi de conectare.
keywords: specificație de țevi, specificații de țevi, specificație de instalație de conducte, clasă de conducte, țeavă personalizată, tabel de dimensiuni, tub, tub igienic, inox, tabel, diametru exterior, grosime de perete, diametru interior, rugozitate, clasă de presiune, csv, json, import, export, foaie de calcul, standard, bpe, din, en 10357, en 10255, robinet, robinete, robinet cu clapet fluture, robinet de echilibrare, robinet de reglare, filtru, clapetă, clapetă de volum, clapetă antifoc, oem, producător, fabricant, familie, familii, porturi, conexiune, step, obj, gltf, ifc, radiator, convector, încălzitor cu panou, unitate de tratare a aerului, difuzor, grilă
from: bc2f7c4e
---

## Ce veți face

Desenați țevi pe propria specificație în loc de tabelele încorporate pentru oțel, cupru și plastic, plasați robinete și clapete pe trasee și plasați un model al producătorului cu porturi de care se conectează țevile.

:::note
Un instrument de desenare și coordonare. O specificație de țevi conține cifrele pe care le tastați sau le importați: verificați fiecare tabel față de standardul proiectului. Robinetele, filtrele și clapetele încorporate sunt forme schematice dimensionate după traseu, nu după lungimea unui producător sau a unui standard de robinete.
:::

## Configurarea unei specificații de țevi

1. Activați {{ui:Draw}}, deschideți {{ui:Build}} și alegeți {{ui:Specificații de țevi}}. Același buton se află pe bara instrumentului Țeavă.
2. Alegeți {{ui:New}}, sau porniți de la un fișier, o lipire sau o specificație de bază (mai jos).
3. Tastați numele ei, standardul sau referința urmată, materialul și tipul capătului sau al îmbinării.
4. Tastați câte un rând pentru fiecare dimensiune: numele dimensiunii, diametrul exterior și peretele, în milimetri. Tastați diametrul interior în locul peretelui, dacă aveți doar acesta: celălalt se completează. DN, clasa de presiune și greutatea sunt opționale.
5. Opțional: rugozitatea în milimetri (calculul pierderii de presiune o folosește), grosimea izolației cu care pornesc traseele noi, raza cotului ca factor al diametrului exterior, dacă specificația are teuri și reducții și o culoare proprie în 3D.
6. Bifați serviciile ale căror trasee noi trebuie să pornească în această specificație, de exemplu apa răcită.
7. Alegeți {{ui:Save in the model}}.

Specificațiile sunt salvate în fișierul modelului. Oricine deschide fișierul le are, iar {{ui:Undo}} anulează o modificare.

O specificație, sau una dintre dimensiunile ei, nu poate fi ștearsă cât timp un traseu este desenat în ea. Modificarea cifrelor unei dimensiuni redesenează traseele din acea dimensiune.

## Refolosirea unei specificații într-un alt model

- {{ui:Export .json}} salvează specificația selectată ca un fișier mic; {{ui:Export all}} salvează toate specificațiile modelului. {{ui:Import a file}} le citește înapoi.
- {{ui:Export .csv}} salvează tabelul de dimensiuni pentru o foaie de calcul. {{ui:Import a file}} citește și un `.csv`.
- {{ui:Paste rows}} preia un tabel copiat dintr-o foaie de calcul. Primul rând denumește coloanele: `Size`, `OD` și `Wall` (sau `ID`), iar opțional `DN`, `Pressure`, `Weight`. Un rând pentru fiecare dimensiune. Numerele sunt în milimetri, dacă nu alegeți țoli sau dacă o celulă nu își scrie unitatea (`0.065 in`).

## Specificații de bază

{{ui:Add a starter spec}} adaugă în model una dintre acestea, ca o copie pe care o puteți modifica:

| Specificație de bază | Dimensiuni |
|---|---|
| ASME BPE tube | 1/4" până la 6" |
| EN 10357 series A tube (DIN 11850 row 2) | DN10 până la DN200 |
| EN 10255 steel tube, medium series | DN15 până la DN150 |
| EN 10255 steel tube, heavy series | DN15 până la DN125 |

Aceste tabele sunt diametrele exterioare și pereții pe care două sau mai multe pagini publicate ale furnizorilor îi tipăresc pentru standard și pe care sunt de acord. Ele nu sunt luate din standardele în sine. Dimensiunile date de o singură pagină sunt lăsate afară. Fiecare specificație de bază arată paginile sursă și este marcată „verificați față de standardul proiectului”. Nu este dată nicio rugozitate, clasă de presiune sau greutate.

## Desenarea unui traseu într-o specificație

1. Alegeți {{ui:Țeavă}}. Un serviciu bifat într-o specificație pornește în ea. Pentru orice alt traseu, alegeți specificația din lista de materiale: specificațiile apar după materialele încorporate, ca „Spec: nume”.
2. Lista de dimensiuni conține acum numai dimensiunile acelei specificații. Alegeți una și desenați traseul.

Pentru a muta mai târziu un traseu într-o specificație, selectați-l și schimbați **Material** în Proprietăți. Dimensiunea lui devine cea mai apropiată dimensiune a specificației, după diametrul exterior.

În fișierul IFC, țeava poartă numele specificației, standardul, materialul, îmbinarea și dimensiunile (`CadCraft_PipeSpec` și `Pset_PipeSegmentTypeCommon`, pe țeavă și pe tipul ei).

Calculele de dimensionare și de pierdere de presiune citesc diametrul interior al specificației. Când specificația are o rugozitate, frecarea unui traseu se calculează cu ea (Darcy-Weisbach); fără ea se folosește valoarea implicită obișnuită a calculului.

## Robinete, un filtru și clapete

1. Alegeți {{ui:Valve}} și alegeți tipul din bară: robinet cu sertar, cu bilă, fluture, cu ventil, de reținere, de echilibrare sau de reglare, sau un filtru, pentru țevi; o clapetă de reglare a volumului sau o clapetă antifoc, pentru conducte de aer.
2. Faceți clic pe traseul unde merge. Traseul este tăiat în jurul lui, iar ambele părți rămân conectate. Robinetul ia dimensiunea traseului și se mișcă odată cu el.

Proprietățile traseului le listează pe fiecare cu {{ui:Remove}}; traseul se închide din nou.

Calculul pierderii de presiune include o pierdere de racord numai pentru robinetele cu sertar, cu bilă, cu ventil și de reținere. Celelalte tipuri, clapetele și familiile producătorilor nu adaugă pierdere acolo: luați-le în calcul în propria verificare. Sunt numărate în tabelul **Racorduri și robinete** și în extragerea de cantități și sunt scrise în IFC ca robinete, un filtru (filtrul) și clapete cu două porturi conectate.

## Un model al producătorului ca familie

1. Deschideți {{ui:Build}} și alegeți {{ui:Families}}, apoi {{ui:Import a model}}. Se citesc fișierele IFC, STEP, OBJ, STL, glTF și elementele de bibliotecă. Pentru OBJ și STL, setați mai întâi unitățile fișierului și axa de sus.
2. În caseta de porturi, tastați numele, producătorul și numărul modelului.
3. Alegeți dacă merge **On a run** (un robinet, filtru sau clapetă) sau este **Equipment**, și cum este scris.
4. Dați-i porturile. Fiecare are un nume, țeavă sau conductă de aer, serviciul, dimensiunea în milimetri (diametrul exterior al unei țevi), dimensiunea nominală așa cum o numește specificația, tipul capătului, poziția și modul în care este orientat. {{ui:On a face}} pune un port în centrul unei fețe a cutiei modelului. Vederea de sus mică arată porturile.
5. Alegeți {{ui:Save the family in the model}}.

O familie care merge pe un traseu are nevoie de exact două porturi orientate unul spre celălalt, pe o singură linie. Alegeți-o din lista instrumentului Robinet și faceți clic pe un traseu: este plasată la lungimea ei, iar țevile se conectează la porturile ei.

O familie nu este niciodată întinsă. Dacă porturile ei nu au dimensiunea traseului, aflați asta când o plasați, iar {{ui:Check connections}} o listează.

O familie de echipament se plasează cu {{ui:Equipment}}, tipul **Familie de producător**. Țevile și conductele de aer se fixează de porturile ei.

{{ui:Download as a Library item}} salvează o familie cu porturile ei ca fișier pe care îl puteți trimite în Bibliotecă.

## Radiatoare și convectoare

{{ui:Equipment}} are și **Radiator** și **Convector / încălzitor cu panou**: corpuri generice cu un racord de tur și unul de retur pentru apă de încălzire. Vezi [Echipamente MEP cu porturi](topic:mep-equipment).
