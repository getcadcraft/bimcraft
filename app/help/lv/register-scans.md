---
title: Vairāku skenējumu reģistrēšana vienā
summary: Novietojiet no dažādām pozīcijām uzņemtus skenējumus vienā koordinātu sistēmā, izmantojot izvēlētus punktu pārus vai ierakstītus mērķus, precizējiet tos ar ICP, saglabājiet reģistrāciju kā projektu un eksportējiet reģistrēto mākoni kā LAS vai E57.
keywords: reģistrācija, reģistrēt, skenējumi, punktu mākonis, icp, iteratīvais tuvākā punkta algoritms, mērķi, punktu pāri, stingra transformācija, saskaņot, apvienot, e57, las, skenējums uz BIM
from: e8e270db
---

## Ko jūs darīsiet

Vairāki vienas vietas skenējumi (katrs no savas skenera pozīcijas) sākas savās koordinātēs. Reģistrējiet tos: piešķiriet katram skenējumam vienu novietojumu, lai visi atrastos vienā koordinātu sistēmā, tad saglabājiet to kā projektu un ierakstiet reģistrēto mākoni kā vienu LAS vai E57 failu.

## Novietojiet skenējumus

1. Atveriet dialogu ({{ui:Reģistrēt skenējumus…}} sākuma panelī vai {{ui:Rādīt}} › {{ui:Reģistrēt skenējumus…}}, kad modelis ir atvērts). {{ui:Pievienot skenējumus…}} pieņem LAS, LAZ, E57, PLY, PCD, PTX, PTS vai XYZ failus vai ievilktus failus dialogā. Skenējumi ar atšķirīgām mērvienībām tiek noraidīti ar piezīmi: vispirms pārvērtiet vienu no tiem.
2. Izvēlieties {{ui:Skenējums, ko pārvietot}} un {{ui:Novietot pret}}. Attēlā katrs skenējums rādīts kadrā tādā, kāds tas ir tagad, katrs savā krāsā: {{ui:Plāns}}, {{ui:Priekšpuse}} vai {{ui:Sāns}}; velciet, lai pārvietotos, izmantojiet riteni tālummaiņai.
3. **Pēc punktu pāriem.** Noklikšķiniet uz {{ui:Izvēlēties pāri}}, tad uz punkta skenējumā, ko pārvietot, tad uz to pašu vietu citā skenējumā (stūris, mērķis, kolonnas pamats). Dariet to vismaz trīs reizes, ar punktiem, kas nav uz vienas līnijas un ir izkliedēti. Noklikšķiniet uz {{ui:Novietot pēc pāriem}}: skenējums tiek novietots ar mazāko kvadrātu pielāgojumu, un **Atlikums** rāda, cik tālu katrs pāris vēl nesakrīt. Pārim ar lielu skaitli ir slikta izvēle: noņemiet to ar krustiņu un novietojiet vēlreiz.
4. **Pēc mērķiem.** Ja punkta patiesās koordinātes ir zināmas (uzmērītie mērķi), noklikšķiniet uz {{ui:Izvēlēties, tad ierakstīt mērķi}}, noklikšķiniet uz punkta tā skenējumā un ierakstiet mērķa X, Y un Z rindā. Pārus un ierakstītos mērķus var jaukt brīvi.

## Precizēt ar ICP

Pāri dod aptuvenu novietojumu. {{ui:Precizēt}} pārvieto skenējumu, līdz tā virsmas atrodas uz otra skenējuma virsmām: vispirms **punkts pret punktu**, tad **punkts pret plakni**. Tabulā uzskaitīts katrs solis ar tā kļūdu un to, cik punktu sakrita; līnija virs tās parāda kļūdas samazināšanos. {{ui:Apturēt}} beidz izpildi pēc pašreizējā soļa un saglabā sasniegto. {{ui:Atsaukt}} atsauc visu izpildi (vai pēdējo novietojumu); {{ui:Atiestatīt}} novieto skenējumu atpakaļ tā faila koordinātēs.

Lai ātri strādātu klēpjdatorā, ICP darbojas ar samazinātu punktu daļu ({{ui:Izmantotie punkti}}, 5,000 līdz 60,000) un ignorē sakritības, kas tālākas par {{ui:Lielākais atbilstības attālums}} (pēc noklusējuma 5 % no skenējuma izmēra, kas samazinās, kad tas nostabilizējas). Vispirms tam vajadzīgs aptuvens novietojums: skenējumi, kas gandrīz nepārklājas, ziņo, ka tos nevar sakrītināt. Virsmas, kas ir tikai plakanas vai tikai taisnas, nevar fiksēt pozīciju gar sevi; šādā gadījumā pievienojiet pārus.

## Saglabāt un eksportēt

- {{ui:Saglabāt projektu}} ieraksta nelielu `.ccscans.json` failu: katra skenējuma nosaukumu, izmēru un tā pirmo 64 KB pirkstu nospiedumu kopā ar tā transformāciju. Tajā nav punktu. {{ui:Atvērt projektu…}} atrod skenējumu failus pēc šīm atsaucēm (failiem jau jābūt pievienotiem) un atjauno katru transformāciju.
- {{ui:Eksportēt LAS}} un {{ui:Eksportēt E57}} ieraksta vienu failu ar visiem skenējumiem to reģistrētajā vietā. Oriģinālu punkti nekad netiek pārrakstīti; transformācija tiek pielietota izvadē. Ja ieslēgts {{ui:Nolasīt katru punktu no failiem}}, katrs fails tiek nolasīts no jauna katram punktam (līdz 20 miljoniem katram skenējumam); ja izslēgts, tiek ierakstīti tikai skatītājā redzamie punkti.
- {{ui:Rādīt reģistrēto mākoni}} (BimCraft) ieraksta LAS un atver to 3D skatā blakus modelim kā jebkuru citu mākoni.

:::note
Nekas netiek augšupielādēts. Reģistrācija darbojas failu paša mērvienībās un saglabā milimetrus: LAS tiek ierakstīts ar mērogu, kas der (līdz 0,1 mm), E57 ar dubultās precizitātes skaitļiem. Koordinātu sistēma tiek pārnesta uz LAS tikai tad, kad visi skenējumi nosauc vienu un to pašu EPSG kodu. E57 rakstītājs ir mūsu pašu; tā pārbaude notiek, nolasot tā failus atpakaļ ar šo lasītāju un libE57Format.
:::
