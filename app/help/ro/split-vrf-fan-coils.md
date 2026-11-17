---
title: Unități split, VRF și ventiloconvectoare
summary: Plasați unități interioare montate pe perete, tip casetă și cu canale, unități exterioare split și VRF, piese refnet și ventiloconvectoare cu 2 sau 4 țevi, fiecare cu conexiunile sale de agent frigorific, apă, condens și canal, și desenați între ele seturi de linii dimensionate dintr-un tabel pe care îl puteți modifica.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, pompă de căldură, heat pump, unitate interioară, unitate exterioară, unitate condensatoare, montată pe perete, perete înalt, casetă, cu canale, ascunsă, ventiloconvector, fan coil, fcu, 2-pipe, 4-pipe, refnet, piesă de ramificare, piesă în Y, set de linii, lineset, agent frigorific, linia de lichid, linia de gaz, linia de aspirație, acr, cupru, condens, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Ce veți face

Plasați unitățile unui sistem split, multi-split sau VRF și ventiloconvectoarele în model, apoi uniți-le cu seturi de linii: o linie de lichid și una de gaz din cupru ACR, fixate pe racordurile unităților. Unitățile funcționează ca orice altă piesă din [Echipamente MEP cu racorduri](topic:mep-equipment): aceeași bară, aceleași Proprietăți, racorduri și [conexiuni](topic:mep-connections).

:::note
Acesta este un ajutor pentru desenare și coordonare. Unitățile sunt forme generice, dimensionate după valorile pe care le introduceți, nu produse ale unui producător. Dimensiunile tuburilor provin dintr-un tabel de **valori tipice cu caracter de exemplu** pentru echipamente cu R410A și R32, nu de la un producător: manualul de instalare al producătorului unității stabilește dimensiunile reale, iar traseele lungi sau diferențele mari de înălțime le modifică. Modificați tabelul sau introduceți dimensiunile tuburilor, ca să corespundă unităților pe care le folosiți.
:::

## Plasați o unitate

1. Activați {{ui:Desenare}}, deschideți {{ui:Build}} și alegeți {{ui:Echipamente}}.
2. Alegeți tipul și setați valorile:

| Tip | Setați | Racordurile sale |
|---|---|---|
| Unitate interioară split, de perete | capacitate, linia de lichid și linia de gaz, lungime, adâncime, înălțime, dimensiunea evacuării condensului | agent frigorific lichid și gaz, evacuare condens (pe capătul din dreapta, lângă perete) |
| Unitate interioară split, casetă | capacitate, linia de lichid și linia de gaz, panou, corp, înălțime, dimensiunea evacuării condensului | agent frigorific lichid și gaz, evacuare condens (pe o latură, lângă partea de sus) |
| Unitate interioară split, cu canale | capacitate, linia de lichid și linia de gaz, lungime, lățime, înălțime, deschiderile de refulare și de retur, dimensiunea evacuării condensului | ieșire canal de refulare, intrare canal de retur, agent frigorific lichid și gaz, evacuare condens |
| Unitate exterioară split | capacitate, linia de lichid și linia de gaz, lățime, adâncime, înălțime | agent frigorific lichid și gaz (pe latura dreaptă) |
| Unitate exterioară VRF | capacitate, linia de lichid și linia de gaz, lățime, adâncime, înălțime | agent frigorific lichid și gaz (pe față, jos) |
| Piesă refnet | linie de lichid sau de gaz, sarcina de pe fiecare ramificație, tubul de la fiecare capăt | intrare, ramificația A, ramificația B |
| Ventiloconvector | 2 sau 4 țevi, lungime, lățime, înălțime, deschiderile de refulare și de retur, bobina și sistemul ei, țeava de încălzire, dimensiunea evacuării condensului | ieșire canal de refulare, intrare canal de retur, intrare și ieșire bobină, intrare și ieșire încălzire (4 țevi), evacuare condens |

3. Setați **La**: înălțimea bazei unității față de nivel. Baza unei unități de perete este partea ei inferioară (adesea 2100 mm); cea a unei unități tip casetă este fața ei în tavan; cea a unei piese refnet este înălțimea liniei mediane a țevii sale.
4. Faceți clic unde trebuie să fie ({{key:R}} o rotește cu 90°).

**Capacitatea** este capacitatea nominală de răcire a unității, în kW, cu Btu/h alături. Dacă **Linia de lichid** și **Linia de gaz** rămân pe **Din tabel**, racordurile unității iau dimensiunile din tabel pentru acea capacitate; alegeți o dimensiune de tub ca să folosiți tubul propriu al unității. Intrarea unei piese refnet este dimensionată pentru ambele ramificații împreună, iar fiecare ramificație pentru propria sarcină.

Racordurile de agent frigorific funcționează în ambele sensuri (o pompă de căldură poate merge în oricare direcție). Evacuarea condensului este o dimensiune de țeavă, ca orice scurgere.

## Desenați un set de linii

1. Alegeți două piese ({{key:Shift}}+clic pe a doua): o unitate exterioară și una interioară (un split simplu), sau o unitate exterioară și o piesă refnet, o piesă refnet și o unitate interioară, ori două piese refnet (VRF).
2. Deschideți {{ui:Build}} și alegeți {{ui:Set de linii}}.

BimCraft desenează traseele de lichid și de gaz între racordurile lor libere, ieșind din fiecare racord și urcând până la o înălțime comună, din cupru ACR (serpentină recoaptă până la 1-5/8 in, tub trasat peste această dimensiune), ca un singur pas de {{ui:Anulare}}. O piesă refnet primește doar propria linie: în intrarea sa dinspre unitatea exterioară și ieșind dintr-o ramificație spre unitățile interioare. Fiecare traseu ia dimensiunea capătului din aval (unitatea interioară sau intrarea refnet); acolo unde racordul celuilalt capăt are altă dimensiune, {{ui:Verificare conexiuni}} o listează: acolo trebuie pusă o reducție. Două unități interioare au nevoie de o piesă refnet între ele.

Mutați traseele după aceea, ca orice traseu de țeavă; capetele lor rămân pe racorduri. Traseele dintre niveluri se desenează cu {{ui:Țeavă}}: o țeavă începută pe un racord de agent frigorific preia sistemul, cuprul ACR și dimensiunea sa.

## Modificați tabelul seturilor de linii

Deschideți {{ui:Build}} și alegeți {{ui:Dimensiuni set de linii}}. Fiecare rând spune: până la această capacitate (kW), acest tub de lichid și acest tub de gaz.

| Până la | Lichid | Gaz |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Acestea sunt valorile inițiale, tipice. Modificați un rând, adăugați sau eliminați rânduri și alegeți {{ui:Salvare}}: tabelul este păstrat în model, deci toți cei care lucrează la fișier folosesc același tabel, iar {{ui:Anulare}} îl readuce la forma anterioară. {{ui:Folosire valori tipice}} pune la loc tabelul inițial. Piesele deja plasate își păstrează racordurile până le modificați.

## În fișierul IFC

Unitățile interioare și exterioare ale sistemelor split și VRF sunt IfcUnitaryEquipment de tipul SPLITSYSTEM, iar tipul de obiect spune care anume („Unitate interioară split, montată pe perete”, „Unitate interioară split, casetă de tavan”, „Unitate interioară split, cu canale”, „Unitate exterioară split”, „Unitate exterioară VRF”). Un ventiloconvector este IfcUnitaryEquipment de tipul AIRHANDLER, cu tipul de obiect „Unitate fan coil”: IFC4 nu are un tip pentru ventiloconvector, iar un ventilator, o bobină și un filtru pentru o singură încăpere sunt ceea ce descrie AIRHANDLER. O piesă refnet este un IfcPipeFitting de tipul JUNCTION („Piesă refnet”). Fișierele IFC2X3 primesc IfcEnergyConversionDevice și IfcFlowFitting cu tipurile corespunzătoare.

Racordurile și traseele de agent frigorific sunt în sisteme REFRIGERATION (unul pentru liniile de lichid, unul pentru liniile de gaz), iar condensul într-un sistem DRAINAGE. Traseele ACR sunt denumite după diametrul exterior. Tabelul seturilor de linii este setul de proprietăți CadCraft_HvacLineSets de pe proiect.

Vezi și [Echipamente MEP cu racorduri](topic:mep-equipment), [Conectarea țevilor și canalelor la echipamente](topic:mep-connections) și [Țevi și canale](topic:pipes-and-ducts).
