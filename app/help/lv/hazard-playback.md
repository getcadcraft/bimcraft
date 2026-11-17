---
title: Plūdu, vēja vai zemestrīces atskaņošana ēkā
summary: Ūdens, kas paceļas pa telpām, vēja spiediens katram stāvam vai zemestrīce, kas sakrata stāvus, atskaņota plānā vai fasādē ar laika slīdni. Vienkārši modeļi ar uzskaitītiem pieņēmumiem; nav normu pārbaude un nav konstrukcijas projekts.
keywords: apdraudējums, plūdi, vējš, zemestrīce, seismisks, nobīde, šūpošanās, bāzes bīdes spēks, ūdens līmenis, klimats, scenārijs, jūras līmenis, atskaņošana, stāvs, periods
from: ff0d34d1
---

Sadaļa {{ui:Apdraudējuma atskaņošana}} kreisajā panelī atskaņo apdraudējumu atvērtajā IFC modelī. Modelī nekas netiek mainīts.

:::warning
Šie ir **vienkārši modeļi, lai redzētu, ko apdraudējums dara ar šo plānojumu**, nevis plūdu pētījums, vēja normu pārbaude vai konstrukcijas projekts. Katrs rezultāts uzskaita savus pieņēmumus.
:::

## Plūdi

Iestatiet augstāko ūdens līmeni virs zemākās grīdas un minūtes, cik ilgi tas paceļas, saglabājas un krīt. Ūdens ieplūst telpā caur atveri, kuras slieksni tas jau ir pārsniedzis, un telpas, kas ar atverēm zem ūdens līmeņa savienotas ar mitrām telpām, stāv vienā līmenī (kvazistatiski). Tabulā norādīts, kad katra telpa pirmo reizi samirkst un cik dziļi; plāns to atskaņo. Ierakstiet, cik daudz ūdens telpa drīkst saņemt, un telpas, kurās ir vairāk, tiek atzīmētas kā brīdinājumi. **Klimata nākotne:** ielādējiet savu scenāriju failu (JSON vai CSV ar gadu, jūras līmeņa celšanos un plūdu koeficientu) un izvēlieties gadu. Vai ieslēdziet papildinājumu Klimata nākotne un izvēlieties scenāriju un gadu: plūdi tiek aprēķināti divreiz, blakus pašreizējais un nākotnes (skatiet "Klimata nākotne: 2050. un 2080. gada plūdi, karstums un meža ugunsgrēks"). Veidi Meža ugunsgrēka iedarbība un Karstums: nākotnes laikapstākļu fails atrodas tajā pašā sarakstā.

## Vējš

Spiediens seko ½ρV², ar ātrumu, kas pieaug augstumā; spēks uz stāvu ir šis spiediens, reizināts ar brāzmu koeficientu, abiem spiediena koeficientiem, platumu un stāva augstumu. Iegūstat bīdi, apgāšanās momentu un šūpošanos.

## Zemestrīce

Bīdes ēka: masa katrā stāvā (pamatnes laukums × kilogrami uz kvadrātmetru, ko iestatāt), vienāds stingums katrā stāvā, pielāgots pirmajam periodam, ko norādāt (desmitdaļa sekundes uz stāvu, ja atstājat tukšu, un to parāda), slāpēšana un izveidota zemes kustība (impulss vai filtrēts troksnis) ar jūsu izvēlēto maksimālo paātrinājumu. Rezultāts ir katra stāva nobīde, stāvu paātrinājumi un bāzes bīdes spēks; fasāde atveido šūpošanos, zīmējot to lielāku, nekā tā ir. Ierakstiet pieļaujamo nobīdes attiecību, un stāvi, kas to pārsniedz, būs brīdinājumi. Tas ir elastīgs: nekas nepaliek un neplaisā.

## Stingums no analīzes rāmja

Zemestrīcei vai vēja šūpošanai izvēlieties **Analīzes rāmis** kā stingguma avotu, nevis ierakstiet periodu. Katrs stāvs pa kārtai tiek nobīdīts sāniski, rāmis (sijas, kolonnas, saites, pārsegumi) tiek atrisināts, un stāvu stingums, kad viss strādā kopā, vada aprēķinu. Svars ir elementu paša svars plus grīdas slodze uz kvadrātmetru, ko iestatāt katra stāva plāna lodziņā. Tiek parādīts reālais pirmais periods. Tas ir elastīgs: nekas nelīst, un vērpe nav modelēta. Vējam stāvu spēki joprojām ir augstāk aprakstītie pieņemtie (pakāpes likuma profils, jūsu brāzmu koeficients un fiksētie spiediena koeficienti, nevis vēja norma); tikai šūpošanos dod rāmis, atrisinot rāmja pilno stinguma matricu pret šiem spēkiem. Modelim vajag IFC ar rāmi, ko Analīzes cilne var nolasīt.

## Mērvienības

Ūdens dziļumi, nobīde un šūpošanās pa stāviem, attālumi un laukumi tiek rādīti jūsu izvēlētajās {{ui:Mērvienības}}. Spēki (kN), laiki un paātrinājumi saglabā savas mērvienības, un vērtība, ko ierakstāt lodziņā ar uzrakstu metros, paliek metros. Tas pats attiecas uz evakuācijas, dienasgaismas, apkures un dzesēšanas un iekārtu rezultātiem: garumi, laukumi un tilpumi seko jūsu izvēlei; spiediens, plūsma, temperatūra, enerģija un jauda nekad netiek pārveidoti.
