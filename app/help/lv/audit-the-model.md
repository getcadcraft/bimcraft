---
title: Pārbaudīt modeli: telpas, marķējumi, LOD, sadursmes un saskarnes
summary: Palaidiet gatavas pārbaudes nenosauktām telpām, trūkstošiem marķējumiem, elementiem zem projekta stadijai prasītā attīstības līmeņa, sadursmēm starp disciplīnām un LOD 350 saskarnēm. Tikai padomi: nekas netiek bloķēts.
keywords: pārbaude, pārbaudīt, nenosaukta telpa, trūkstošs marķējums, marķēt, lod, attīstības līmenis, pagrieziena punkts, stadija, sadursme, disciplīna, koordinācija, saskarne, lod 350, atvere, pārsedze, galvsija, caurejas, apvalks, caurule, gaisa vads, problēmas, pārbaudes atskaite, ieteikums
from: cc83a14d
---

## Ko jūs darīsiet

Apskatiet visu modeli vienā reizē, pirms to izdodat. Pārbaude palaiž gatavus noteikumu kopumus un ieliek atradumus sarakstā {{ui:Problēmas}} kā padomus. Nekas netiek bloķēts: jūs labojat atradumu vai pieņemat to ar pamatojumu, kā jebkuru citu problēmu.

## Soļi

1. Atveriet {{ui:Modeļa pārbaudes}} › {{ui:Pārbaude}} kreisajā panelī vai {{ui:Rīki}} › {{ui:Pārbaudīt modeli…}} (rakstot: `AUDIT`).
2. Izvēlieties {{ui:Projekta stadija}}. Tā ir tā pati stadija kā rasējuma detaļās.
3. Atzīmējiet noteikumu kopas, ko palaist.
4. Noklikšķiniet uz {{ui:Palaist pārbaudi}}.
5. Izlasiet rindu katrai noteikumu kopai, tad atveriet {{ui:Atvērt Problēmu sarakstu}}. Klikšķis uz atradumu atlasa tā elementu.
6. {{ui:Pārbaudes atskaite}} lejupielādē atskaiti: katru atradumu, kas ko pieņēma un kāpēc, un palaistās noteikumu kopas.

## Noteikumu kopas

- **Nenosauktas telpas**: telpa bez nosaukuma vai tāda, kas joprojām saucas tā, kā to nosauca programma ("Telpa 3").
- **Trūkstoši marķējumi**: durvis vai logs bez marķējuma, telpa bez numura, elektroierīce bez apzīmējuma.
- **Elementi zem stadijas LOD**: katra siena, grīda, griesti, jumts, durvis un logs, kura LOD ir zemāks par to, ko prasa stadija. Elements nolasa sava tipa LOD marķējumu; elements, kas verificēts uz vietas, ir LOD 500. Elementi bez marķējuma tiek uzskaitīti vienā piezīmē, jo tos nevar pārbaudīt.
- **Sadursmes starp disciplīnām**: elementi divām disciplīnām (arhitektūra, konstrukcijas, mehāniskā, santehnika, elektrība, pēc IFC klases), kas saskaras viens ar otru. Jumts, kas balstās uz savām sienām, netiek skaitīts.
- **LOD 350 saskarnes**: katrs durvis un logs atrodas savas sienas atverē, atvere ietilpst sienā, divas atveres nepārklājas, atvere, kas platāka par robežu, ir ar pārsedzi vai galvsiju (elements virs tās vai piezīme durvīm vai logam), un caurule, gaisa vads vai kabeļu trase, kas šķērso sienu vai pārsegu, tur ir atverē. Atradumi tiek skaitīti pa disciplīnu pāriem.
- **Atpazīti elementi, ko neviens nav pārbaudījis**: sienas, durvis, logi un telpas, kas nolasīti no PDF, skenējuma vai rasējuma un vēl nav verificēti. Skatiet [Atzīmējiet elementus kā pārbaudītus vai verificētus uz vietas](topic:verification).

## LOD, ko prasa katra stadija

Atveriet {{ui:LOD, ko prasa katra stadija}}, lai redzētu vai mainītu tabulu.

:::note
Tabula un pārsedzes platums ir CadCraft sākumvērtības. Tās nav ņemtas no standarta: projekts iestata LOD pa stadijām savā BIM izpildes plānā. Iestatiet tās atbilstoši savējam. Birojs var iestatīt tabulu visiem sadaļā Iestatījumi › Default Policies › Pārbaude; izmaiņa sadaļā Pārbaude tiek saglabāta šajā datorā.
:::

## Labi zināt

- Pārsedzi var atzīmēt piezīmē, nevis modelēt: atlasiet durvis vai logu un aizpildiet {{ui:Pārsedzes vai galvsijas piezīme}} sadaļā {{ui:Verifikācija}} rekvizītos.
- Caurule, kas iet cauri reālai atverei, nešķērso virsmu un netiek ziņota. Tā, kas modelēta tieši caur sienu, tiek.
- Sadursmju pārbaude ļoti lielā modelī pēc dažām sekundēm apstājas, un par to tiek paziņots. Pilnai divu izvēlētu kopu pārbaudei izmantojiet [Atrast sadursmes starp elementiem](topic:clash-check).
- Palaidiet pārbaudi vēlreiz pēc modeļa maiņas. Pieņemtie atradumi paliek pieņemti, kamēr to skaitļi nemainās.
- Tā nolasa modeli. Tā neaizstāj koordinācijas pārskatu, ko veic atbildīgie cilvēki.

## Tālāk

- [Pārbaudīt modeli uz bieži sastopamām problēmām](topic:model-checks)
- [Atrast sadursmes starp elementiem](topic:clash-check)
- [Atzīmējiet elementus kā pārbaudītus vai verificētus uz vietas](topic:verification)
