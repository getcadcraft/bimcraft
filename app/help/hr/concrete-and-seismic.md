---
title: Provjerite betonske štapove i izradite potresna opterećenja
summary: Postavite šipke betonskih greda i stupova otvorenog modela, provjerite ih prema ACI 318-19, izradite ekvivalentne bočne sile prema ASCE 7-22 na krutim etažama i pogledajte pomak etaže. Pomoć inženjeru za provjeru.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stup, poprečna sila, uzengije, potres, ekvivalentna bočna sila, ELF, ASCE 7-22, pomak, pomak etaže, kruta dijafragma, težina etaže, iskorištenost, konstrukcija, inženjer, analiza
from: 2f342e72
---

Blokovi {{ui:Betonski štapovi}} i {{ui:Potresna opterećenja}} u kartici {{ui:Analiza}} provjeravaju armiranobetonske grede i stupove otvorenog IFC-a i izrađuju bočne sile potresa na etažama njegova okvira. To su isti blokovi kao u DetailCraftu, pokrenuti nakon analize kartice {{ui:Analiza}}, i spremljeni u IFC zajedno s ostalim postavkama analize.

:::warning
Rezultati su **za provjeru od strane inženjera**: pomoć dok je ne pregleda inženjer. Provjere betona koriste sile prvog reda (stup u okviru koji nazivate nepomičnim projektira se za svoj povećani moment), bez povećanja zbog pomaka, bez proračuna uvijanja, bez seizmičkog detalja (poglavlje 18 ACI) i bez detalja uzengija. Potresna opterećenja izostavljaju faktor redundancije, vertikalni potresni učinak, pojačanje uvijanjem i P-delta učinke. **Opterećenja vjetrom nisu izrađena:** poglavlja standarda o vjetru nisu u referentnim stranicama projekta.
:::

## Što BimCraft čita

Analiza čita grede, stupove i dijagonale modela s njihovim profilima (vidi [Analizirajte konstrukcijski okvir](topic:frame-analysis)). Blok {{ui:Betonski štapovi}} popisuje svaki presjek koji koriste. Pritisnite {{ui:Postavi kao beton…}} na presjeku koji je beton: BimCraft uzima pravokutnik iz površine i krutosti profila (širinu b i visinu h koje zatim možete promijeniti), pa presjek koji nije blizu pravokutnika (valjani čelični profil) daje veličinu koju morate ispraviti ili se ostavlja netaknut.

Presjek postavljen kao beton i svaki element čiji je materijal imenovan beton analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, a prema zadanim postavkama s **pukotinskim presjecima** (stupovi 0.70 Ig, grede 0.35 Ig; ACI 318-19 tablica 6.6.3.1.1(a)). Odaberite {{ui:Bruto presjeci}} da to isključite. Bez tih postavki model se analizira kao i prije.

## Štapovi, kombinacije, provjera

Unesite zaštitni sloj, gornje, donje i bočne šipke (ili armaturni koš stupa) i uzengije svakog presjeka, postavite f′c, fy, fyt, K te pomak ili nepomak. Odredite vrste slučajeva opterećenja, pritisnite {{ui:Izradi kombinacije}} (ASCE 7 §5.3.1) i zatim {{ui:Provjeri beton}}: svaki element dobiva iskorištenost, obojanu na modelu. Elementi iznad kapaciteta i pomak etaže iznad svoje granice popisuju se u {{ui:Problemi}} s odgovarajućom klauzulom; kliknite jedan da odaberete element.

## Etaže i potresna opterećenja

U bloku {{ui:Potresna opterećenja}} {{ui:Pronađi etaže}} uzima razine na kojima se sastaju dvije ili više greda; svaka postaje kruta dijafragma. {{ui:Uzmi težine iz slučajeva}} čita seizmičku težinu svake etaže iz slučajeva kojima dajete faktor. Unesite SDS, SD1, S1, R, Ie, Cd, TL, sustav i kategoriju rizika, zatim {{ui:Izradi potresne slučajeve}} (ASCE 7-22 12.8: period, ukupna poprečna sila, raspodjela po etažama, 5 % slučajne torzije). Sile po etažama i provjera pomaka (12.12) prikazuju se nakon izvođenja. Isti period i krutost etaža pokreću potres u [Reproducirajte poplavu, vjetar ili potres](topic:hazard-playback) kad odaberete okvir analize kao izvor.

Betonske ploče i zidovi u analizi postaju ploče, a blok {{ui:Armatura ploče}} izračunava čelik koji trebaju po metru. Pojedinosti svake provjere nalaze se u temi programa DetailCraft s istim nazivom.
