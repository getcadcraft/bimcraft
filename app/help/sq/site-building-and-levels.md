---
title: Terreni, ndërtesa mbi të dhe nivelet e saj
summary: Vizato konturin e terrenit, vendos dhe rrotullo ndërtesën mbi terren, shto nivele me lartësi të dhëna ose ndaj lartësinë e ndërtesës, dhe vizato në nivelin që zgjedh.
keywords: terren, plan terreni, vijë ndërtimi, prapambetje, servitut, e drejtë kalimi, vijë pronësie, lot, parcelë, kufi, vendosje ndërtese, rrotullo ndërtesën, vendos ndërtesën, nivele, katet, dysheme, shto nivele, ndaj lartësinë, lartësi nga dysheme në dysheme, IfcSite, IfcBuilding, IfcBuildingStorey, strukturë hapësinore
from: 48d10c1e
---

## Çfarë do të bëni

Vendosni pjesët e një modeli IFC që mbajnë gjithçka tjetër: terrenin, ndërtesën mbi të dhe nivelet e ndërtesës.

Një model organizohet si një **terren** që mban një **ndërtesë**, që mban **nivelet** e saj (katet); muret, dyshemetë dhe çdo gjë tjetër i përkasin një niveli. {{ui:Skedari}} › {{ui:Ndërtesë e re}} i vendos të tre. Një model nga një program tjetër që ka një ndërtesë, por pa terren, merr një terren herën e parë që vizatoni një: ndërtesa vendoset mbi të ashtu si ishte.

## Vizatoni terrenin

1. Ndizni {{ui:Vizato}}, pastaj zgjidhni {{ui:Ndërtimi}} › {{ui:Terreni}}.
2. Klikoni cepat e terrenit (vegla ngjitet si vegla Mur). Klikoni përsëri cepin e parë, bëni dy klikime ose shtypni {{key:Enter}} për ta përfunduar. {{key:Backspace}} heq një cep.
3. Rreshti tregon sipërfaqen e terrenit. Vizatojeni sërish për ta ndryshuar.

Plani i çdo niveli shfaq konturin e terrenit si vijë pronësie.

## Vendosni ndërtesën mbi terren

Me {{ui:Terreni}} të ndezur, shkruani **X** dhe **Y** të ndërtesës mbi terren dhe **Rrotullimin** e saj në gradë, ose klikoni {{ui:Vendos ndërtesën me një klikim}} dhe klikoni ku shkon origjina e ndërtesës. Gjithçka në ndërtesë (nivelet, muret, rrjetat, gjithçka keni vizatuar) lëviz me të; terreni dhe konturi i tij mbeten. Planet vazhdojnë t'i tregojnë çdo nivel drejt me ndërtesën.

## Linjat e ndërtimit dhe servitutet

Linjat e ndërtimit dhe servitutet (servitute, e drejta e kalimit) vizatohen mbi terren si kufizime. Ato **paralajmërojnë, nuk bllokojnë kurrë**: një mur mbi një nga to vizatohet ashtu si e kërkuat, dhe një paralajmërim që emëron murin dhe vijën ose servitutin shfaqet te Problemet. Zhvendoseni murin prapa dhe paralajmërimi pastrohet. Një paralajmërim mund të pranohet me një arsye (një lehtësim që ka dhënë autoriteti, për shembull).

- **Vijë ndërtimi nga prapambetjet.** {{ui:Ndërtimi}} › {{ui:Vijë ndërtimi}}, pastaj {{ui:Prapambetjet}}: shkruani sa larg del vija nga secili kufi i terrenit. Kufijtë numerohen në plan ndërsa vegla është e ndezur. Vija llogaritet nga ato distanca dhe ndjek konturin e terrenit nëse e vizatoni sërish me po aq kufij. Distancat janë tuajat, të lexuara nga akti i pronës ose plani i zonimit; BimCraft nuk plotëson asnjë.
- **Një vijë ndërtimi e vizatuar.** Me {{ui:Vijë ndërtimi}} të ndezur, klikoni pikat e saj dhe përfundoni me dy klikime ose {{key:Enter}}. Përfundoni te pika e parë për një vijë të mbyllur: sipërfaqja brenda është ku mund të ndërtohet, dhe një mur me çdo pjesë jashtë saj paralajmërohet. Një vijë e hapur paralajmëron vetëm për një mur që e kryqëzon.
- **Një servitut.** {{ui:Ndërtimi}} › {{ui:Servitut}}: zgjidhni llojin, shkruani emrin e tij, referencën e regjistruar dhe gjerësinë, pastaj klikoni vijën e tij qendrore dhe përfundoni (një shirit), ose mbylleni te pika e parë (një sipërfaqe). Një mur me çdo pjesë mbi të paralajmërohet, në çdo nivel.
- Një faqe saktësisht mbi një vijë është në prekje, jo në kryqëzim (toleranca është 1 mm).
- Opsioni aktual i masës së çdo grupi opsionesh kontrollohet njësoj si muret: një masë jashtë kufirit, mbi një vijë ndërtimi ose mbi një servitut merr paralajmërim. Shih [Opsionet e masës të mbajtura krah për krah](topic:massing-options).
- Zgjidhni një me {{ui:Përzgjidh}} për të ndryshuar emrin, referencën, llojin ose gjerësinë, për ta zhvendosur ose fshirë.

Ato vizatohen në planin e çdo niveli, në fletë dhe në PDF-në e planit: vijat e ndërtimit me viza, servitutet me pika, secila me etiketën e vet. Në skedarin IFC secila është një shënim (IfcAnnotation, lloji BuildingLine ose Servitude) mbi terrenin, me vijën e vet si kurbë e thjeshtë që programet e tjera e lexojnë. Kontrolli përdor konturin real të çdo muri në plan, me bashkimet e vizatuara; një mur i lakuar kontrollohet me trashësinë e vet përgjatë vijës qendrore.

## Shtoni nivele

Te paneli {{ui:Nivelet}}, {{ui:Shto një nivel sipër}} shton një; {{ui:Shto një nivel më poshtë}} shton një nën më të ulëtin (një bodrum, në kuotë negative). {{ui:Shto nivele…}} shton disa njëherësh:

- **Në këto lartësi**: shkruani lartësitë mbi nivelin më të ulët, të ndara me presje (për shembull `12', 24', 36'`). Lartësitë që kanë tashmë një nivel kapërcehen.
- **Ndaj lartësinë e ndërtesës**: shkruani lartësinë e ndërtesës dhe numrin e niveleve. Nivelet që keni zhvendosen në lartësitë e reja nga më i ulëti lart, nivelet që mungojnë shtohen, dhe ato mbi to mbeten aty ku janë.

Muret që shkojnë deri te niveli sipër ndjekin atë, njësoj si kolonat dhe rampat.

{{ui:Kopjo këtë nivel…}} (në të njëjtin panel) kopjon atë që është vizatuar në nivelin që shikoni në një nivel tjetër ose në një nivel të ri sipër, që një plan kati të ngjitet lart në ndërtesë me një hap. Shih [Vizato muret](topic:draw-walls).

## Vizatoni në një nivel

Çdo vegël {{ui:Vizato}} punon në nivelin e zgjedhur në listën e niveleve të planit (ose të zgjedhur në panelin {{ui:Nivelet}}): ajo që vizatoni i përket atij niveli.

## Çfarë duhet të shihni

- Çdo nga këto ndryshime është një hap: {{key:Mod+Z}} e zhbën.
- Në skedarin IFC: terreni (IfcSite) me konturin dhe sipërfaqen e tij, ndërtesa (IfcBuilding) e vendosur mbi të, dhe nivelet (IfcBuildingStorey) në ndërtesë.

Shih gjithashtu [Koordinatat në BimCraft](topic:coordinates) për origjinën e projektit dhe pikën e rilevimit.
