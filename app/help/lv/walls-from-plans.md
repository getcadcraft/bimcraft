---
title: Sienas no plānu komplekta (PDF vai skenējums)
summary: Pārveidojiet PDF lapas vai skenētu rasējumu par sienām, durvīm un logiem, pa vienam stāvam katrai lapai, ar lapu, kas paliek zem katra plāna.
keywords: pdf, plāni, plānu komplekts, skenējums, skenēts rasējums, tiff, pārzīmēt, sienas no PDF, sienas no skenējuma, stāvi, lapas, mērogs, durvis, logi, atvēršanās virziens, palodze, fons
from: b70d9db7
---

## Ko jūs darīsiet

Sāciet modeli no plāniem, kas jums ir uz papīra: PDF (zīmēts kā līnijas vai skenējums PDF iekšienē) vai skenējums (PNG, JPEG, TIFF ar vienu vai daudzām lapām). Katra lapa kļūst par sienām, durvīm un logiem vienā stāvā.

## Soļi

1. Ieslēdziet {{ui:Zīmēšana}}. Izvēlieties {{ui:Būvējums}} › {{ui:No rasējuma…}}, tad {{ui:Izvēlēties rasējumu…}} un izvēlieties PDF vai skenējumu.
2. **Lapas un stāvi.** Katra lapa ir uzskaitīta ar to, kas tā ir (**līniju darbs** vai **attēls (pārzīmēts)**), un stāvu, uz kuru tā iet: vienu no jūsu stāviem, **jaunu stāvu virs pārējiem** vai **neiekļaut šo lapu**. Lapas tiek saskaņotas ar jūsu stāviem pēc kārtas; mainiet katru no tām.
3. **Mērogs.** PDF gadījumā norādiet, kā tas zīmēts (**1 : 100**, **1 : 50**…). Citiem gadījumiem vai ja nezināt, izvēlieties **no zināma attāluma**: noklikšķiniet uz divu izmēra vai mēroga joslas galiem priekšskatījumā, tad ierakstiet patieso attālumu. Visas lapas izmanto vienu mērogu.
4. Izvēlieties **sienas tipu** un **jauna stāva augstumu**. Atstājiet **Turēt katru lapu zem sava stāva plāna** atzīmētu, lai redzētu katru lapu kā plānas līnijas zem sava plāna.
5. Līnija zem izvēlēm saka, cik sienu, durvju un logu tā izveidos un uz cik stāviem. Noklikšķiniet uz {{ui:Izveidot tās}}.

## Kā tā lasa lapu

- **Sienas** nāk no paralēlu līniju pāriem līdz 600 mm attālumā (sienas abas malas); siena ir tik bieza, cik sprauga. Šrafējums un teksts tiek izlaisti.
- **Durvis un logi.** Sprauga sienā (no 500 līdz 2600 mm) ar blakus uzzīmētu durvju atvēršanās līniju ir durvis, eņģētas vienā sprauga galā un atveras uz atvēršanās līnijas pusi. Sprauga vai siena ar palodzes līnijām ir logs. Sprauga bez abiem ir durvis līdz 1300 mm un logs virs tā.
- **Skenējums** vispirms tiek iztaisnots, ja tas skenēts sašķiebts (dialogs to saka), padarīts melnbalts, notīrīts no traucējumiem un pārzīmēts; **PDF lapa, kas ir attēls**, vispirms tiek uzzīmēta un tad apstrādāta tāpat. Pārzīmēšana atrod katras līnijas centru un pielāgo tam taisnas līnijas un lokus; tā neizmanto tīklu un nav apmācīta modeļa.
- **Telpas** veidojas pašas no slēgtām cilpām, ko veido sienas. Kad PDF ir teksts, telpa saņem savu nosaukumu no tajā esošā teksta (lielākā; izmērs, mērogs vai lapas numurs nav nosaukums). Skenējumam teksta nav, tāpēc tā telpas saglabā programmas tām dotos nosaukumus.
- **Viss, kas nolasīts no lapas, ir atzīmēts kā nepārbaudīts**: katrai sienai, durvīm, logam un telpai ir punktēta kaste un "?" plānā, kamēr jūs to nepārbaudāt. Atlasiet to, ko esat pārbaudījis, un izmantojiet {{ui:Rīki}} › {{ui:Atzīmēt kā pārbaudītu}}. Skatiet [Atzīmēt elementus kā pārbaudītus vai pārbaudītus uz vietas](topic:verification).

## Ko jums vajadzētu redzēt

- Sienas, durvis, logi un telpas katrā stāvā, un visi jaunie stāvi, viss kā viens solis: {{key:Mod+Z}} atceļ visu.
- Katra lapa kā plānas līnijas zem sava stāva plāna, uzskaitīta {{ui:Būvējums}} › {{ui:No rasējuma…}} ar {{ui:Noņemt}}.

:::note
Tas ir tas, ko deva līnijas, ar lapas precizitāti. Skenējums var pazaudēt vāju sienu, savienot divas ļoti tuvas sienas vai atrast sienu traipā; atvēršanās līnija, ko rasējums nerāda, padara spraugu par vienkāršām durvīm. Pirms paļaušanās uz katru stāvu pārbaudiet to pret lapu un labojiet, kas nav pareizi, ar {{ui:Siena}}, {{ui:Durvis}} un {{ui:Logs}} rīkiem.
:::
