---
title: Proveri betonske elemente i napravi seizmička opterećenja
summary: Postavi šipke betonskih greda i stubova otvorenog modela, proveri ih prema ACI 318-19, napravi ekvivalentne bočne sile prema ASCE 7-22 na krutim spratovima i vidi međuspratni pomak. Pomoć inženjeru za proveru.
keywords: beton, armirani beton, ACI 318, ACI 318-19, armatura, greda, stub, smicanje, uzengije, seizmika, zemljotres, ekvivalentna bočna sila, ELF, ASCE 7-22, pomak, međuspratni pomak, spratovi, kruti diafragma, težina sprata, iskorišćenje, konstrukcija, inženjer, analiza
from: 2f342e72
---

Blokovi {{ui:Betonski elementi}} i {{ui:Seizmička opterećenja}} u kartici {{ui:Analiza}} proveravaju armiranobetonske grede i stubove otvorenog IFC-a, i prave bočne sile zemljotresa na spratovima njegovog okvira. Isti su blokovi kao u DetailCraft-u, pokrenuti posle analize kartice {{ui:Analiza}}, i čuvaju se u IFC-u sa ostalim podešavanjima analize.

:::warning
Rezultati su **za proveru od strane inženjera**: pomoć dok je neko ne pregleda. Provere betona koriste sile prvog reda (stub u okviru koji nazivate nepomerljivim računa se za svoj uvećani moment), bez uvećanja zbog pomeranja, bez projektovanja na uvijanje, bez seizmičkog detaljisanja (ACI poglavlje 18) i bez detaljisanja uzengija. Seizmička opterećenja ne uzimaju u obzir faktor redundantnosti, vertikalni seizmički uticaj, pojačanje usled uvijanja i P-delta efekte. **Opterećenja od vetra nisu napravljena**: poglavlja standarda o vetru nisu u referentnim stranicama projekta.
:::

## Šta BimCraft čita

Analiza čita grede, stubove i dijagonale modela sa njihovim profilima (pogledajte [Analiza konstrukcijskog okvira](topic:frame-analysis)). Blok {{ui:Betonski elementi}} navodi svaki presek koji koriste. Pritisnite {{ui:Podesi kao beton…}} na preseku koji je beton: BimCraft uzima pravougaonik iz površine profila i krutosti (širinu b i visinu h, koje zatim možete promeniti), pa presek koji nije blizu pravougaonika (valjani čelični profil) daje veličinu koju morate ispraviti, ili se ostavlja netaknut.

Presek podešen kao beton, i svaki element čiji je materijal nazvan beton, analizira se kao beton: E = 4700 √f′c, 2400 kg/m³, a podrazumevano sa **ispucalim presecima** (stubovi 0.70 Ig, grede 0.35 Ig; ACI 318-19 tabela 6.6.3.1.1(a)). Izaberite {{ui:Bruto preseci}} da to isključite. Bez ovih podešavanja model se analizira potpuno kao pre.

## Šipke, kombinacije, provera

Unesite zaštitni sloj, gornje, donje i bočne šipke (ili kavez stuba) i uzengije svakog preseka, postavite f′c, fy, fyt, K i pomerljiv ili nepomerljiv okvir. Dajte slučajevima opterećenja njihovu vrstu, pritisnite {{ui:Napravi kombinacije}} (ASCE 7 §5.3.1), zatim {{ui:Proveri beton}}: svaki element dobija iskorišćenje, obojeno na modelu. Elementi preko kapaciteta i međuspratni pomak preko granice se navode u {{ui:Problemi}} sa svojim stavom; kliknite jedan da izaberete element.

## Spratovi i seizmička opterećenja

U bloku {{ui:Seizmička opterećenja}}, {{ui:Pronađi spratove}} uzima nivoe na kojima se sastaju dve ili više greda; svaki postaje kruti diafragma. {{ui:Uzmi težine iz slučajeva}} čita seizmičku težinu svakog sprata iz slučajeva kojima dodelite faktor. Popunite SDS, SD1, S1, R, Ie, Cd, TL, sistem i kategoriju rizika, zatim {{ui:Napravi seizmičke slučajeve}} (ASCE 7-22 12.8: period, osnovna sila smicanja, raspodela po spratovima, 5 % slučajne torzije). Sile po spratovima i provera pomaka (12.12) se prikazuju posle izvršavanja. Isti period i krutost sprata ulaze u zemljotres u [Pusti poplavu, vetar ili zemljotres](topic:hazard-playback) kada izaberete okvir analize kao njegov izvor.

Ploče i zidovi od betona postaju ploče u analizi, a blok {{ui:Armatura ploča}} računa čelik koji im je potreban po metru. Detalji svake provere su u temi DetailCraft-a sa istim nazivom.
