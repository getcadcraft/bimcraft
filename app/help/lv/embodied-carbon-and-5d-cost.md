---
title: Iegultais ogleklis un izmaksas specifikācijā
summary: Saskaitiet modeļa iegulto oglekli no atvērtas, rediģējamas koeficientu tabulas un sadaliet cenas 4D grafikā izmaksu un naudas plūsmas līknē. Abi sākas no vērtībām, ko ievadāt vai importējat.
keywords: iegultais ogleklis, ogleklis, co2, kgco2e, emisijas, koeficientu tabula, epd, 5d, izmaksas, naudas plūsma, S līkne, grafika izmaksas, cenas, apjomu cenas
from: 83e82840
---

## Iegultais ogleklis

Atveriet paneli **Ogleklis**. Katra elementa daudzums (tilpums, laukums vai garums) tiek reizināts ar koeficientu no tabulas pēc dzīves cikla moduļa: ražošanas posms ir obligāts, transports un atkritumi ir pēc izvēles. Kopsummas tiek aprēķinātas pēc materiāla, klases un stāva, un uz kvadrātmetru grīdas.

**Koeficientu tabula ir jūsu.** Rindas, kas nāk komplektā ar BimCraft, ir vispārīgas sākuma vērtības ar pareizu lielumu kārtu. Tās nav no datubāzes, ir atzīmētas kā neverificētas, un tās jāaizstāj ar avotu, ko izmantojat (EPD, nacionālo datubāzi vai jūsu uzņēmuma datus). Rediģējiet rindas panelī vai importējiet un eksportējiet tabulu kā CSV vai JSON. Pievienotās rindas aizstāj sākuma rindu ar to pašu id. Tabula tiek saglabāta modelī.

Elementi bez atbilstības vai bez daudzuma tiek uzskaitīti kā Problēmas, nevis skaitīti kā nulle.

## Izmaksas 4D grafikā

Atveriet paneli **Izmaksas** blakus 4D grafikam. Ievadiet cenas (rakstiet tās, importējiet CSV vai JSON, vai ievelciet TakeoffCraft rindas), piesaistiet katru cenu modeļa materiāliem ar atslēgvārdiem, un tā aprēķina katra uzdevuma elementu izmaksas. Uzdevuma izmaksas tiek sadalītas pa tā sākuma un beigu dienām (vienmērīgi vai ar slodzi sākumā vai beigās), un panelis zīmē kumulatīvo naudas plūsmas līkni pa dienām, nedēļām vai mēnešiem, ar izmaksām pa posmiem un paketēm un to, kas ir plānots salīdzinājumā ar to, kas ir uzbūvēts konkrētā datumā. CSV eksportā. Neko necenē, kamēr neievadāt cenas: komplektā nav nevienas.

## Valūta

Cenu tabulā var norādīt, kādā valūtā ir cenas (trīs burti, piemēram, USD vai EUR). Panelī 5D ir lodziņš tai; tā tiek glabāta failā kopā ar cenām, un JSON eksporti to pārnes. Tabula, kas izveidota pirms tam, vai tāda, kurā atstājāt tukšu, nav valūtas: tās izmaksas tiek rādītas kā USD, lietotnes noklusētā valūta, un panelis un kopsummas to norāda. Valūtas netiek pārvērstas.
