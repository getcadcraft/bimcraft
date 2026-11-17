---
title: Pārbaudīt betona elementus un izveidot seismiskās slodzes
summary: Iestatīt atvērtā modeļa betona sijas un kolonnas, pārbaudīt tās pēc ACI 318-19, izveidot ekvivalentos sānu spēkus pēc ASCE 7-22 uz stingrām stāvu segām un redzēt stāvu nobīdi. Palīglīdzeklis inženierim pārbaudei.
keywords: betons, dzelzsbetons, ACI 318, ACI 318-19, armatūra, sija, kolonna, bīde, saites, seismika, zemestrīce, ekvivalents sānu spēks, ELF, ASCE 7-22, nobīde, stāvu nobīde, stāvu segas, stingra diafragma, stāva svars, izmantojums, konstrukcija, inženieris, aprēķins
from: 2f342e72
---

Blokos {{ui:Betona elementi}} un {{ui:Seismiskās slodzes}} cilnē {{ui:Aprēķins}} pārbauda atvērtā IFC dzelzsbetona sijas un kolonnas un izveido zemestrīces sānu spēkus uz tā rāmja stāvu segām. Tie ir tie paši bloki kā DetailCraft, palaisti pēc cilnes {{ui:Aprēķins}} aprēķina, un saglabāti IFC kopā ar citiem aprēķina iestatījumiem.

:::warning
Rezultāti ir **paredzēti inženiera pārbaudei**: palīglīdzeklis, kamēr to nav pārskatījis inženieris. Betona pārbaudēs izmantoti pirmās kārtas spēki (kolonna rāmī, ko saucat par nebīdāmu, ir projektēta tās palielinātajam momentam), bez bīdes palielinājuma, bez vērpes projektēšanas, bez seismiskās detalizācijas (ACI 18. nodaļa) un bez saišu detalizācijas. Seismiskās slodzes neietver redundances koeficientu, vertikālo seismisko iedarbi, vērpes palielinājumu un P-delta efektus. **Vēja slodzes nav izveidotas**: standarta vēja nodaļas nav projekta atsauces lappusēs.
:::

## Ko BimCraft nolasa

Aprēķins nolasa modeļa sijas, kolonnas un sastatnes ar to profiliem (skatiet [Analizēt konstrukcijas rāmi](topic:frame-analysis)). Bloks {{ui:Betona elementi}} uzskaita katru izmantoto griezumu. Nospiediet {{ui:Iestatīt kā betonu…}} griezumam, kas ir betons: BimCraft no profila laukuma un stingrības ņem taisnstūri (platumu b un augstumu h, ko pēc tam varat mainīt), tāpēc griezums, kas nav tuvu taisnstūrim (valcēta tērauda profils), dod izmēru, kas jālabo, vai tiek atstāts neskarts.

Griezums, kas iestatīts kā betons, un jebkurš elements, kura materiāls nosaukts kā betons, tiek aprēķināts kā betons: E = 4700 √f′c, 2400 kg/m³, pēc noklusējuma ar **plaisātiem griezumiem** (kolonnas 0.70 Ig, sijas 0.35 Ig; ACI 318-19 tabula 6.6.3.1.1(a)). Izvēlieties {{ui:Bruto griezumi}}, lai to izslēgtu. Bez šiem iestatījumiem modelis tiek aprēķināts tieši kā iepriekš.

## Stieņi, kombinācijas, pārbaude

Norādiet segumu, augšējos, apakšējos un sānu stieņus (vai kolonnas karkasu) un katra griezuma saites, iestatiet f′c, fy, fyt, K un bīdāms vai nebīdāms. Piešķiriet slodžu gadījumiem to veidu, nospiediet {{ui:Izveidot kombinācijas}} (ASCE 7 §5.3.1), tad {{ui:Pārbaudīt betonu}}: katram elementam tiek dots izmantojums, krāsots modelī. Elementi virs kapacitātes un stāvu nobīde virs robežas uzskaitīti {{ui:Problēmas}} ar savu punktu; noklikšķiniet vienu, lai atlasītu elementu.

## Stāvu segas un seismiskās slodzes

Blokā {{ui:Seismiskās slodzes}} {{ui:Atrast stāvus}} atrod līmeņus, kur sastopas divas vai vairākas sijas; katrs kļūst par stingru diafragmu. {{ui:Ņemt svarus no gadījumiem}} nolasa katra stāva seismisko svaru no gadījumiem, kuriem dodat koeficientu. Aizpildiet SDS, SD1, S1, R, Ie, Cd, TL, sistēmu un riska kategoriju, tad {{ui:Izveidot seismiskos gadījumus}} (ASCE 7-22 12.8: periods, pamata bīdes spēks, sadalījums pa stāviem, 5 % nejaušs vērpes spēks). Stāvu spēki un nobīdes pārbaude (12.12) parādās pēc aprēķina. Tas pats periods un stāvu stingrība baro zemestrīci sadaļā [Atskaņot plūdus, vēju vai zemestrīci](topic:hazard-playback), kad kā tās avotu izvēlaties analīzes rāmi.

Betona pārsegi un sienas analīzē kļūst par plātnēm, un bloks {{ui:Pārsegumu armatūra}} aprēķina tām nepieciešamo tēraudu uz metru. Katras pārbaudes detaļas ir DetailCraft tēmā ar tādu pašu nosaukumu.
