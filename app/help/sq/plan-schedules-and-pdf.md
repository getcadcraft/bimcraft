---
title: Tabela, përmasa dhe një PDF e planimetrisë
summary: Tabelat e dyerve, dritareve, mureve dhe dhomave që ndryshojnë ndërsa vizatoni, përmasat në planimetri, dhe plani i një kati i ruajtur si PDF në një shkallë standarde.
keywords: tabelë, tabelë dyersh, tabelë dritaresh, tabelë mureve, tabelë dhomash, sasi, llogaritje sasish, sipërfaqe, csv, fletëllogaritëse, përmasa, përmasë, printim, pdf, vizatim, shkallë, 1/4", 1:50, fletë
from: d97cd16e
---

## Çfarë do të bëni

Shihni çfarë shuma bën ndërtesa që vizatoni, ndërsa e vizatoni: sa dyer dhe dritare të çdo madhësie, sa mur i çdo lloji, sa e madhe është çdo dhomë. Vendosni përmasa në planimetri dhe ruajeni si PDF për ta printuar ose dërguar.

## Tabelat

Me {{ui:Vizato}} të ndezur, **Tabelat** te paneli i majtë shfaq një tabelë në çdo kohë:

- **Dyert** dhe **Dritaret**: secila sipas shenjës së saj (D1, D2 … dhe W1 …, të dhëna ndërsa i vendosni), llojit, gjerësisë, lartësisë (dhe parapetit), nivelit dhe murit ku është.
- **Muret sipas llojit**: për çdo lloj muri, sa mure, trashësia e tyre, gjatësia totale dhe sipërfaqja anësore si **Sipërfaqja bruto**, **Zbritjet** dhe **Sipërfaqja neto**, me një total.
- **Dhomat**: numri, emri, niveli, sipërfaqja dhe perimetri, me sipërfaqen totale.
- **Dyshemetë**: çdo dysheme me nivelin, llojin dhe trashësinë e saj, dhe sipërfaqen bruto, zbritjet dhe sipërfaqen neto.
- **Përfundimet**: çdo shtresë përfundimi e llojeve të mureve (sipas materialit dhe anës së murit) dhe tavanet, me numrin e faqeve dhe bruto, zbritjet dhe neton.
- **Llojet e mureve: të dhënat e llogaritjes së sasive**: çfarë u fut një herë te çdo lloj muri (njësia, llaçi, norma), me numrin e mureve, gjatësinë dhe sipërfaqen e tyre neto, dhe normën shumëzuar me sasinë e matur. Shih [Murature të përbëra](topic:wall-assemblies).

- **Përfundimet sipas dhomës**, **Përfundimet sipas murit**, **Përfundimet sipas zonës** dhe **Sasitë e përfundimeve**: çfarë mbulon çdo dhomë, me sipërfaqe, numra pllakash duke përfshirë prerjet dhe vëllimet e substratit. Shih [Përfundimet e dhomave dhe tabelat e përfundimeve](topic:room-finishes).
- Konfigurimet tuaja: një tabelë që e keni grupuar, totalizuar dhe ruajtur me një emër. Shih [Hartoni, ruani dhe eksportoni një tabelë](topic:schedule-layouts).

Tabelat ndryshojnë me çdo redaktim. Klikoni një rresht, ose një shifër të vetme, për të zgjedhur elementet nga të cilët erdhi. {{ui:Shkarko CSV}} e ruan tabelën, për ta hapur në një fletëllogaritëse; **Shkarko Excel** dhe **Kopjo për Google Sheets** janë nën të. **Përfundimet e dhomave** dhe **Specifikimi** ([Shkruani specifikimin nga modeli](topic:specification)) hapen nga i njëjti vend.

## Sipërfaqja dhe vëllimi i çdo shtrese

Zgjidhni **Shtresat: sipërfaqe dhe vëllim** te lista e Tabelave. Ka një rresht për çdo shtresë të çdo lloji muri, dyshemeje, çatie dhe tavani në përdorim: elementi, lloji dhe LOD-i i tij, shtresa (e numëruar nga ana e jashtme e murit, ose nga maja e dyshemesë, çatisë ose tavanit), materiali dhe funksioni i saj, trashësia, sa elemente, **sipërfaqja neto** dhe **vëllimi**.

- Sipërfaqja është sipërfaqja neto e elementeve të atij lloji, e matur saktësisht si te Muret sipas llojit, Dyshemetë dhe Përfundimet, sipas metodës së matjes së projektit. Një çati matet në pjerrësi; asnjë metodë matjeje nuk ka rregull për çatitë.
- Vëllimi është ajo sipërfaqe shumëzuar me trashësinë e vetë shtresës.
- Një dysheme, çati ose tavan pa lloj është një rresht: një shtresë me trashësinë e vet.
- Një hapësirë ajri listohet me sipërfaqen e saj dhe lihet jashtë vëllimit total. Një membranë ka sipërfaqe dhe nuk ka vëllim.

Klikoni një rresht për të zgjedhur elementet e tij. **Shkarko CSV** e ruan tabelën.

## Si matet sipërfaqet

Çdo sipërfaqe është tre numra që mblidhen: bruto minus zbritjet jep neton. Rregulli shkruhet mbi secilën nga këto tabela, dhe është një rregull i vetëm: tabelat, sasitë neto të ruajtura në skedarin IFC dhe llogaritja e sasive e dorëzuar te TakeoffCraft përdorin të njëjtin.

- **Një mur**: bruto është një faqe e murit, gjatësia e tij përgjatë vijës qendrore shumëzuar me lartësinë e tij (faqja reale për një mur me majë ose bazë të formuar). Çdo derë, dritare dhe hapje tjetër zbritet, gjerësi shumëzuar me lartësi, çdo hapje një herë.
- **Një dysheme ose tavan**: bruto është sipërfaqja brenda konturit të tij. Çdo hapje dhe prerje brenda tij zbritet një herë.
- **Një përfundim muri**: çdo shtresë përfundimi e llojit të murit mbulon një faqe të murit, e matur si muri, me të njëjtat hapje të zbritura. Një përfundim është një shtresë e murit: listohet te Përfundimet dhe nuk shtohet te sipërfaqja e murit, kështu që një mur me derë nuk numërohet kurrë dy herë.

Kjo është **parazgjedhja e CadCraft**: çdo hapje zbritet, pavarësisht madhësisë; gjatësitë e mureve janë përgjatë vijës qendrore; zgjerimet nuk maten. Është ajo që përdor çdo projekt derisa të zgjidhni një metodë tjetër.

## Zgjidhni një metodë matjeje

Mbi tabelën, **Metoda e matjes** liston metodat që vijnë me BimCraft, dhe **Ngarko një skedar metode** merr atë të zyrës suaj. Zgjedhja ruhet në skedarin IFC, si një hap i vetëm zhbërjeje, dhe tre gjëra e ndjekin menjëherë: tabelat, sasitë neto të ruajtura në skedar dhe llogaritja e sasive e dorëzuar te TakeoffCraft. Rregulli mbi çdo tabelë atëherë fillon me metodën, burimin e saj, datën kur u lexua burimi dhe fjalët **Pa u kontrolluar nga një matës sasish**.

Metoda është një skedar i vogël faktesh, jo kod programi. Për çdo sasi ajo thotë:

- **hapja më e vogël e zbritur**: për shembull, një hapje 0.5 m² ose më pak mbetet në sipërfaqen e murit;
- **si matën kryqëzimet e mureve**: përgjatë vijës qendrore; ose me një mur që mbaron kundër një tjetri, matur deri te faqja e atij muri; ose me çdo skaj muri që takon një mur tjetër, matur deri te faqja më e afërt;
- **nëse matën zgjerimet** për një përfundim (kthesat e përfundimit brenda hapjeve), si sipërfaqe ose, kur janë të cekëta, si gjatësi. Thellësia e zgjerimit merret si gjysma e trashësisë së murit;
- **çfarë thotë për murarinë**: si matet dhe çdo lejë humbjeje ose llaçi që deklaron.

Metodat që vijnë me BimCraft:

| Metoda | Muret: hapja më e vogël e zbritur | Përfundimet e mureve | Tavanet | Murari |
|---|---|---|---|---|
| Parazgjedhja CadCraft | çdo hapje | çdo hapje | çdo prerje | pa lejë |
| RICS NRM 2 (Mbretëria e Bashkuar), edicioni i 2-të 2021 | 0.5 m² ose më pak mbetet në sipërfaqe | 1 m² ose më pak mbetet në sipërfaqe | 1 m² ose më pak mbetet në sipërfaqe | sipas sipërfaqes; pa përqindje të deklaruara |
| Metoda Standarde AAQS për Afrikën 2015 | 0.5 m² ose më pak mbetet në sipërfaqe | 0.5 m² ose më pak mbetet në sipërfaqe | 0.5 m² ose më pak mbetet në sipërfaqe | sipas sipërfaqes; matet neto, 0% humbje |
| IS 1200 (Indi), 1976, murime me tulla | 0.1 m² ose më pak mbetet në sipërfaqe | parazgjedhja (shih më poshtë) | parazgjedhja | sipas vëllimit |
| BIA Technical Note 10 (Shtetet e Bashkuara), 2009 | çdo hapje | parazgjedhja | parazgjedhja | 5% humbje për njësitë, 15% për llaçin |

Lexoni këto kufizime para se të mbështeteni te një metodë:

- **Asnjë matës sasish nuk ka kontrolluar asnjërën prej tyre.** Secila u bë duke lexuar burimin e emërtuar dhe duke regjistruar numrat e tij me klauzolën nga vijnë. Nëse jeni matës sasish dhe mund të kontrolloni një prej tyre, krijuesit e aplikacionit do të donin të dëgjonin nga ju.
- Kur një rregull nuk mund të lexohej nga burimi, metoda shkruan **nuk u konfirmua** për të, dhe përdoret parazgjedhja CadCraft. Asnjë metodë që vjen me BimCraft nuk ka rregull të konfirmuar për kryqëzimet e mureve, zgjerimet ose dyshemetë, prandaj ato maten në mënyrën e parazgjedhur sipas të gjitha.
- IS 1200 zbret hapjet në suva në tre brez. Një skedar metode nuk mban ende brez, prandaj përfundimet e mureve përdorin parazgjedhjen nën atë metodë, dhe rregulli e thotë këtë.
- Sistemi Standard Afrikan i Matjes së Punimeve të Ndërtimit **nuk** është midis tyre: teksti i tij nuk u lexua. Metoda AAQS për Afrikën thotë se u ndërtua mbi edicionin 1991 të atij sistemi, por është një dokument tjetër.
- BIA Technical Note 10 është një shënim vlerësimi i industrisë, jo një metodë standarde matjeje.
- Një hapje që është saktësisht madhësia më e vogël ndjek fjalët e vetë metodës ("jo më shumë se", "më pak se"). Madhësitë brenda 2 pjesë në 10 000 të saj numërohen si saktësisht ajo.
- Nën një metodë, sipërfaqja neto anësore e murit dhe sipërfaqja neto e dyshemesë ose tavanit në skedar ndjekin metodën, dhe grupi i sasive e emërton atë. Sipërfaqet bruto dhe vëllimet në skedar qëndrojnë siç u vizatuan.

**Shënimet për metodën**, nën zgjedhësin, thonë çfarë lë hapur secili burim. **Hap burimin** të çon te dokumenti.

### Metoda e zyrës suaj

Një skedar metode është JSON në formatin `cadcraft-measurement-method`. Çdo vlerë në të emërton klauzolën nga vjen; një vlerë pa klauzolë refuzohet. Skedari kontrollohet kur e ngarkoni, një fushë e gabuar emërtohet, dhe asgjë nuk përdoret nga një skedar që nuk kalon. Pasi zgjidhet, skedari ruhet brenda projektit, që projekti të hapet njësoj në një kompjuter tjetër. ID-ja e tij është një emër i thjeshtë i juaji (mund të mos jetë ID e një metode që vjen me aplikacionin).

## Tulla, blloqe dhe llaç

**Llojet e mureve: të dhënat e llogaritjes së sasive** numëron njësitë dhe llaçin e çdo lloji muri, njësia e të cilit ka gjatësi dhe lartësi (shih [Jepni një llojit të dhënat e llogaritjes së sasive](topic:wall-assemblies#give-a-type-its-takeoff-data)). Këto janë formulat, saktësisht si llogariten:

- **Njësi për sipërfaqe të një fletë** = 1 / ((gjatësia e njësisë + bashkimi) × (lartësia e njësisë + bashkimi)). Një tullë 215 × 65 mm me bashkim 10 mm: 1 / (225 × 75 mm) = 59.26 për m².
- **Gjerësi njësish përgjatë një fletë** = (trashësia e fletës + bashkimi) / (gjerësia e njësisë + bashkimi), e rrumbullakosur në numër të plotë, të paktën 1. Një fletë 102.5 mm me tulla 102.5 mm është 1; një mur 215 mm me të njëjtat tulla është 2.
- **Njësi** = njësi për sipërfaqe × gjerësi njësish përgjatë × sipërfaqja neto e faqes së murit, të mbledhura mbi fletët e murarisë të llojit.
- **Njësi për t'u porositur** = njësi × (1 + % humbje / 100), e rrumbullakosur lart në njësi të plotë. Humbja është ajo e futur te lloji; nëse nuk është futur asnjë, ajo e metodës, nëse deklaron një; përndryshe 0%.
- **Llaç** = sipërfaqja neto × trashësia e fletës, minus vëllimin e njësive (njësi × gjatësi × lartësi × gjerësi), pastaj plus përqindja shtesë e futur te lloji për vrima ose perforime, pastaj plus lejën e metodës nëse deklaron një. Kërkon gjerësinë e njësisë.

Çfarë supozohet: çdo fletë murarie e një lloji ndërtohet nga njësia e vetme e llojit; një fletë më e trashë se një gjerësi njësie numërohet si aq gjerësi njësish, secila si një fletë e vendosur gjatësisht, kështu që njësitë e prera, mbyllësit dhe format speciale nuk numërohen veç. Ku asnjë shtresë nuk është shënuar si e ndërtuar nga njësia, shtresat bërthamë merren si fletë, dhe shënimi mbi tabelë e thotë këtë. **Shuma** është norma shumëzuar me atë për të cilën është norma, që tani mund të jetë gjithashtu një njësi për t'u porositur, 1000 njësi për t'u porositur ose një m³ llaç.

Shenjat janë etiketat IFC të elementeve: ndryshojeni një te **Vetitë** (Etiketa) dhe tabela ndjek. Për çdo model IFC, të vizatuar ose jo, [Mblidh sasitë, listo elementët dhe tabelo hapësirat](topic:quantity-totals) mbledh çdo veti.

## Përmasat

Planimetria shfaq gjatësinë e çdo muri të vizatuar përgjatë faqes së tij të jashtme (një mur i brendshëm: përgjatë një faqeje) dhe, për një mur me dyer ose dritare, një zinxhir nga cepat deri te çdo hapje. {{ui:Përmasat}} në shiritin e modelit i fsheh dhe i shfaq përsëri.

## Ruajeni planimetrinë si PDF

1. Shfaqni katin që dëshironi dhe vendosni njësitë te paneli **Nivelet**.
2. Klikoni {{ui:Printo}} në shiritin e modelit.
3. BimCraft ruan "<file> — <level>.pdf": planimetria në bardhë e zi, në shkallën më të madhe standarde që përshtatet në faqe (1/4" = 1'-0", 1/8" = 1'-0" … në Letter me këmbë dhe inç; 1:50, 1:100 … në A4 me milimetra), me muret e mbushur, dyert, dritaret, emrat e dhomave dhe sipërfaqet, përmasat, dhe një shirit titulli me nivelin, skedarin, lartësinë e prerjes, datën dhe shkallën.

PDF-ja vizatohet si vija dhe tekst, kështu mbetet e qartë në çdo zmadhim dhe teksti i saj mund të kërkohet.

## Të mirëpërdorura

- Tabelat listojnë atë që kanë vizatuar veglat e vizatimit. Dyert dhe dritaret nga një program tjetër shfaqen te **Totalet e sasive** në vend të kësaj.
- Për të vlerësuar punën, jepni sasitë te TakeoffCraft: shih [Sasitë te TakeoffCraft](topic:takeoff). Shkarkimi CSV mbetet për një fletëllogaritëse.
