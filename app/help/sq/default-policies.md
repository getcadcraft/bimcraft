---
title: "Politikat e parazgjedhura: cakto me çfarë fillon një ndërtesë e re"
summary: Thuaj një herë cilin lloj muri, nivele, fletë të parë, etiketa LOD, njësi dhe mjet fillon një ndërtesë e re, për projekte metrike dhe imperiale, dhe ndaj politikat në zyrë si një skedar i vogël.
keywords: parazgjedhje, parazgjedhjet, politika e parazgjedhur, politika, standard zyre, parazgjedhjet e zyrës, shabllon, ndërtesë e re, lloji i parë i murit, mur metrik, murature, LOD, nivel zhvillimi, fletë e parë, letër, shkallë, nivele, lartësia e katit, emrat e niveleve, mjeti i murit, njësi, ndaj, eksport, import, json
from: 42379aa5
---

## Çfarë do të bësh

Thuaji BimCraft me çfarë duhet të fillojë një ndërtesë e re, që askush në zyrë të mos ndryshojë të njëjtat gjëra çdo herë. Kjo është një shtojcë: është e fikur derisa ta ndezësh, dhe një politikë që nuk e cakton mbetet ashtu siç është parazgjedhja e vetë BimCraft.

:::note
Këto janë parazgjedhje për ndërtesa **të reja** dhe gjëra **të reja**. Një projekt që ke filluar tashmë nuk ndryshon.
:::

## Hapat

1. Hap Cilësimet, shko te {{ui:Shtojcat}} dhe ndiz {{ui:Politikat e parazgjedhura}}.
2. Te Cilësimet, hap skedën **BimCraft** dhe zgjidh {{ui:Politikat e parazgjedhura}} në listën në të majtë.
3. Cakto politikat që do. Çdo politikë fillon me **atë të BimCraft-it**, me atë që është ai në kllapa. Një politikë me një kuti **Metrike** dhe një **Imperiale** merr një vlerë për çdo lloj projekti; plotëso vetëm ato që të duhen.
4. Nuk ka buton Ruaj: çdo ndryshim ruhet sapo e bën. Një vlerë që nuk mund të përdoret refuzohet me fjalë dhe e vjetra mbetet.
5. Kliko {{ui:Ndërtesë e re}}. Dialogu plotësohet nga politikat e tua, dhe çdo vlerë që një politikë e vendos shfaq pranë saj **nga Politikat e tua të parazgjedhura**. Mund t'i ndryshosh ende çdo njërën para {{ui:Krijo}}.

## Politikat

- **Njësitë e një ndërtese të re**: njësitë kalojnë në këtë kur krijohet.
- **Numri i niveleve**, **Emrat e niveleve** dhe **Lartësia e nivelit**. Në një emër, `{n}` numëron 1, 2, 3; `{n0}` numëron 0, 1, 2; `{nn}` dhe `{nn0}` bëjnë të njëjtën gjë me dy shifra. Pra `Kati {nn0}` jep Kati 00, Kati 01, Kati 02.
- **Lloji i parë i murit**: çfarë vizaton mjeti i Murit i pari. Një zyrë metrike mund të fillojë me murature jashtme 300 mm, ndërsa projektet imperiale mbajnë Jashtë 2×6.
- **Etiketa LOD te llojet fillestare të mureve**: niveli i zhvillimit (LOD 100 deri 500) që tregojnë nëntë llojet fillestare kudo ku listohet një lloj. Shih [Ndërto montimet e mureve](topic:wall-assemblies).
- **LOD i një lloji muri të ri**: etiketa me të cilën fillon një lloj i ri te redaktuesi i llojeve. Mund ta ndryshosh aty.
- **Fleta e parë**: letra, shkalla, numri i fletës dhe emri (përdor `{level}` për emrin e nivelit më të ulët), ose aspak fletë e parë.
- **Madhësitë e shënimeve në letër** (Cilësimet › Globale › Politikat e parazgjedhura): lartësitë e zyrës, në milimetra siç shtypen, për shënime, tekstin e përmasave, etiketat, emrat e dhomave, shkronjat e rrethit të rrjetës, titujt e pamjeve dhe tekstin e tabelave. Një ndërtesë e re i merr ato kur krijohet dhe i mban në skedarin e vet. Shih [Vizato në madhësi të plotë, shëno sipas shkallës](topic:annotation-sizes).
- **Mjeti që është aktiv pas Krijo**: Përzgjidh, siç bën BimCraft vetë, ose Mur, që dy klikimet e para në plan të vizatojnë tashmë një mur.

## Paraqitja e tabelave: standardi i zyrës

Te **Cilësimet › Globale › Politikat e parazgjedhura**, nën **Paraqitja e tabelës (standardi i zyrës)**, cakto si grupohet çdo tabelë, nëse ka nëntotale dhe total, titullin e saj dhe shkronjat e titujve të kolonave. Çdo tabelë që nuk e përcakton vetë i merr, kushdo që e krijon. Shih [Paraqit, ruaj dhe eksporto një tabelë](topic:schedule-layouts).

## Ndaje me zyrën

1. Te Cilësimet, hap skedën **Globale** dhe zgjidh {{ui:Politikat e parazgjedhura}}.
2. Shkruaj **Emrin e zyrës** nëse dëshiron. Shkruhet në skedar.
3. Kliko {{ui:Ruaj në një skedar}}. Do të marrësh një skedar të vogël që mbaron me `.ccdefaults.json`.
4. Në një kompjuter tjetër, ndiz shtojcën, hap të njëjtin vend dhe kliko {{ui:Ngarko nga një skedar}}. Politikat e skedarit zëvendësojnë ato të atij kompjuteri.

Skeda Globale ka edhe **Sistemi i njësive të një projekti të ri**, që vlen për çdo aplikacion që ka shtojcën, dhe {{ui:Rivendos çdo politikë}}. {{ui:Rivendos parazgjedhjet e vetë BimCraft-it}} te skeda BimCraft pastron vetëm ato të BimCraft-it.

## Të dobishme

- Skedari është JSON i thjeshtë e i hapur: një listë emrash politikash dhe vlerash. Një politikë që skedari e përmend dhe kjo version nuk e njeh lihet jashtë dhe emërtohet në mesazh; pjesa tjetër ngarkohet.
- Politikat mbahen në këtë shfletues, për çdo aplikacion CadCraft në këtë kompjuter. Nuk ruhen në skedarin e ndërtesës dhe nuk sinkronizohen ndërmjet kompjuterëve: përdor skedarin.
- Etiketa LOD e një llojit fillestar vjen nga politika në këtë kompjuter. Një lloj që bëhet si kopje e një fillestari e mban etiketën e vet në skedarin e ndërtesës.
- BimCraft nuk ka cilësim saktësie, prandaj nuk ka politikë saktësie këtu.
- Një ndërtesë e nisur nga një shabllon merr nivelet dhe fletët e vetë shabllonit. Politika e llojit të murit dhe ajo e njësive vazhdojnë të zbatohen.
- Çaktivizo shtojcën dhe gjithçka kthehet te ajo e BimCraft-it. Politikat e tua mbahen për kur ta ndezësh sërish.
