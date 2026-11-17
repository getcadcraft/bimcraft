---
title: Provjeri betonske elemente i napravi seizmička opterećenja
summary: Postavi šipke betonskih greda i stubova otvorenog modela, provjeri ih prema ACI 318-19, napravi ekvivalentne bočne sile prema ASCE 7-22 na krutim podovima i pogledaj međuspratni pomak. Pomoć za inženjera koji provjerava.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stub, smicanje, uzengije, seizmika, zemljotres, ekvivalentna bočna sila, ELF, ASCE 7-22, pomak, međuspratni pomak, etaže, kruti disk, težina sprata, iskorištenost, konstrukcija, inženjer, analiza
from: 2f342e72
---

Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} na kartici {{ui:Analiza}} provjeravaju armiranobetonske grede i stubove otvorenog IFC-a, i prave bočne sile zemljotresa na podovima njegovog okvira. To su isti blokovi kao u DetailCraft-u, pokrenuti nakon analize na kartici {{ui:Analiza}}, i spašeni u IFC-u sa ostalim postavkama analize.

:::warning
Rezultati su **za provjeru od strane inženjera**: pomoć dok je neko ne pregleda. Provjere betona koriste sile prvog reda (stub u okviru koji nazivate nepomjerljivim projektuje se za svoj uvećani moment), bez uvećanja zbog pomjeranja, bez projektovanja uvijanja, bez seizmičkih detalja (ACI poglavlje 18) i bez detalja uzengija. Seizmička opterećenja ne uključuju faktor redundanse, vertikalni seizmički efekat, pojačanje uvijanja i P-delta efekte. **Opterećenja od vjetra nisu napravljena**: poglavlja standarda o vjetru nisu u referentnim stranama projekta.
:::

## Šta BimCraft čita

Analiza čita grede, stubove i dijagonale modela sa njihovim profilima (pogledajte [Analiziraj konstruktivni okvir](topic:frame-analysis)). Blok {{ui:Betonski elementi}} navodi svaki presjek koji koriste. Pritisnite {{ui:Postavi kao beton…}} na presjeku koji je beton: BimCraft uzima pravougaonik iz površine i krutosti profila (širinu b i visinu h koje zatim možete mijenjati), tako da presjek koji nije blizu pravougaonika (valjani čelični profil) daje dimenziju koju morate ispraviti, ili se ostavlja netaknut.

Presjek postavljen kao beton, i svaki element čiji je materijal nazvan betonom, analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, i podrazumijevano sa **pukotinama presjecima** (stubovi 0,70 Ig, grede 0,35 Ig; ACI 318-19 tabela 6.6.3.1.1(a)). Odaberite {{ui:Bruto presjeci}} da to isključite. Bez ovih postavki model se analizira potpuno kao prije.

## Šipke, kombinacije, provjera

Unesite zaštitni sloj, gornje, donje i bočne šipke (ili kavez stuba) i uzengije svakog presjeka, postavite f′c, fy, fyt, K i pomjerljiv ili nepomjerljiv okvir. Dajte slučajevima opterećenja njihovu vrstu, pritisnite {{ui:Napravi kombinacije}} (ASCE 7 §5.3.1), zatim {{ui:Provjeri beton}}: svaki element dobija iskorištenost, obojenu na modelu. Elementi iznad kapaciteta i međuspratni pomak iznad granice navedeni su u {{ui:Problemi}} sa svojom klauzulom; kliknite jedan da odaberete element.

## Podovi i seizmička opterećenja

U bloku {{ui:Seizmička opterećenja}}, {{ui:Pronađi etaže}} uzima nivoe na kojima se sastaju dvije ili više greda; svaki postaje kruti disk. {{ui:Uzmi težine iz slučajeva}} čita seizmičku težinu svakog poda iz slučajeva kojima date faktor. Unesite SDS, SD1, S1, R, Ie, Cd, TL, sistem i kategoriju rizika, zatim {{ui:Napravi seizmičke slučajeve}} (ASCE 7-22 12.8: period, osnovna sila smicanja, raspodjela po spratovima, 5 % slučajnog uvijanja). Sile po spratovima i provjera pomaka (12.12) pojavljuju se nakon pokretanja. Isti period i krutost sprata ulaze u zemljotres u [Pusti poplavu, vjetar ili zemljotres](topic:hazard-playback) kada odaberete okvir analize kao njegov izvor.

Ploče i zidovi od betona postaju ploče u analizi, a blok {{ui:Armatura ploča}} računa potrebni čelik po metru. Detalji svake provjere nalaze se u temi DetailCraft-a istog naziva.
