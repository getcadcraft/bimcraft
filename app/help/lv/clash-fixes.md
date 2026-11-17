---
title: Sadursmju risināšana ar katras disciplīnas labojumiem
summary: No sadursmju rezultātiem sadaļa Ierosinātie risinājumi katrai sadursmei uzskaita, ko katra disciplīna varētu darīt — kanālu apiet zem sijas, cauruli pabīdīt sāniski, kolonnu pārvietot, atvērumu sijā — katru izmēģinātu uz modeļa kopijas ar tā kompromisiem, lai jūs pieņemtu vai noraidītu. Pieņemtie labojumi tiek ievietoti kā viens atsaukšanas solis.
keywords: sadursme, sadursmes labojums, sadursmju risināšana, koordinācija, ierosināt risinājumus, pārvadīt, apiet, nobīde, kanāls, caurule, sija, kolonna, atvērums, ietvars, kompromiss, disciplīna, konstrukcija, mehāniskā, santehnika, elektrība, arhitektūra, palīgs
from: f7bafdd9
---

## Ko jūs darīsiet

Pārvērst sadursmju sarakstu lēmumos. Katra disciplīna (konstrukcija, mehāniskā, santehnika, elektrība, arhitektūra) ierosina labojumus tikai saviem elementiem, katrs ierosinājums tiek pārbaudīts uz modeļa kopijas, un jūs izvēlaties.

## Soļi

1. Vispirms palaidiet sadursmju pārbaudi. Sk. [Pārbaudīt sadursmes](topic:clash-check) un [Pārbaudīt caurules un kanālus pret konstrukciju](topic:mep-against-structure).
2. Zem rezultātiem noklikšķiniet uz {{ui:Ierosināt risinājumus}}. Panelis **Ierosinātie risinājumi** atveras blakus modelim.
3. Katrai sadursmei redzat katras disciplīnas ierosinājumus, labākos pirmos. Katrā rindā teikts, ko tas dara un kādi ir tā kompromisi: vai tas atrisina sadursmi, cik jaunu sadursmju rada, kurus noteikumus pārkāpj, cik daudz trases pievieno vai cik tālu pārvieto, cik savienojumu un izmaksu rādītāju.
4. Noklikšķiniet uz {{ui:Rādīt}}, lai redzētu elementus 3D. Noklikšķiniet uz {{ui:Pieņemt}} labojumam, ko vēlaties (viens katrai sadursmei), vai uz {{ui:Noraidīt}}.
5. Rindā apakšā teikts, ko visi jūsu pieņemtie labojumi dara kopā: cik sadursmju ir atrisinātas, cik paliek un vai kaut kas jauns sadursies.
6. Noklikšķiniet uz {{ui:Lietot pieņemtos labojumus (viens atsaukšanas solis)}}. Sadursmju pārbaude tiek palaista vēlreiz. {{ui:Atsaukt}} atsauc visus uzreiz.

## Ko katra disciplīna drīkst darīt

- **Mehāniskā** (kanāli, apkures un dzesēšanas caurules): apiet virs vai zem cilpas, kas trāpa, paaugstināt vai pazemināt visu trasi, pārvietot sāniski, padarīt taisnstūra kanālu plakanāku ar tādu pašu laukumu.
- **Santehnika** (ūdens, notekas, gāze, ugunsdzēsība): tādas pašas kustības, izņemot to, ka gravitācijas notekai nekad nedod apiešanu; tā var pārvietoties tikai kopumā, saglabājot kritumu.
- **Elektrība** (kabeļu trases un caurules): tādas pašas kustības; trasei virs tās jāatstāj 150 mm brīva vieta kabeļu ievilkšanai.
- **Konstrukcija**: pārvietot kolonnu (līdz 300 mm) vai atvērumu sijas sienā vai pārsegā trasei, kas iet cauri. Katrs konstrukcijas labojums norāda, ka to paraksta konstruktors.
- **Arhitektūra**: ietvars sienā trasei, kas iet cauri, vai pārvietot sienu, par kuru zināms, ka tā nenes slodzi.

## Ko jums vajadzētu redzēt

- Labojumi, kas pārkāpj noteikumu, ir atzīmēti: tuvāk par 25 mm atstarpi līdz kaut kam citam, zem 2100 mm brīvās augstuma līnijas, sijas sienas atvērums lielāks par 40 % no sijas dziļuma vai pārāk tuvu tās galiem, sija, kas mainītu laidumu.
- Labojumus, ko BimCraft var veikt, lieto modelim: trases, ko zīmējāt ar Caurules un Kanāla rīkiem, un kolonnas, ko zīmējāt. Pārējie ir atzīmēti **Tikai ieteikums**: to pieņemšana pievieno problēmu cilnē Problēmas.

## Lietderīga informācija

- Labojumi nāk no lietotnē iebūvētiem noteikumiem; MI to ģenerēšanai netiek izmantots.
- Ja pieslēdzat palīgu (sk. [Ļaut MI palīgam strādāt ar jūsu modeli](topic:assistants)), tas var nolasīt sadursmes un pievienot savus ierosinājumus vienai disciplīnai atvērtajam panelim. Tie tiek pārbaudīti tādā pašā veidā, atzīmēti ar palīga vārdu, un nekas netiek mainīts, kamēr neizvēlaties un nelietojat.
- Kopija tiek pārbaudīta ar lodziņiem ap katru elementu un katru trases posmu, tāpēc slīpa trase var parādīt sadursmi, ko sadursmju pārbaude neparādītu. Pēc labojumu lietošanas palaidiet sadursmju pārbaudi vēlreiz: tā ir galīgā.
- Ierobežojumi (cik tālu trase var pārvietoties, cik augstu apiešana var kāpt, atstarpe) ir noklusējuma vērtības, kas rakstītas panelī.

## Tālāk

- [Problēmas un BCF faili](topic:issues-bcf)
- [Caurules un kanālu trašu zīmēšana](topic:pipes-and-ducts)
