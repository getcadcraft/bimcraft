---
title: Renderēšanas dzinēja pievienošana ar papildinājumu
summary: Ko papildinājums var pievienot renderēšanas dialoga dzinēju sarakstam, atļauja, kas tam nepieciešama programmas palaišanai, un ko Studio pārbauda un jautā.
keywords: papildinājums, addon, dzinējs, renderēšanas dzinējs, izstrādātājs, engine.run, atļauja, programma, skripts, parakstīts, studio, api
from: 06295376
---

Papildinājums (Iestatījumi › Papildinājumi) var pievienot dzinēju {{ui:Renderēt}} dialoga dzinēju sarakstam. Pilnais teksts papildinājumu autoriem ir papildinājumu specifikācijas 16. nodaļā; īsumā:

- Papildinājums reģistrē dzinēju ar ID, kas sākas ar paša papildinājuma identifikatoru, nosaukumu, izvēles iestatījumiem un **vai nu** programmu, ko palaist, **vai** funkciju JavaScript, kas zīmē attēlu.
- Dzinējam, kas palaiž programmu, nepieciešama **`engine.run`** atļauja, kas tiek parādīta pirms instalēšanas un iestatījumos. Tā darbojas tikai Studio; pārlūkā tā rādās kā fails, ko saglabāt.
- Papildinājums nosauc programmu (vienkāršu faila nosaukumu, nekad apvalku), skriptu, kas ir **parakstītajā papildinājumā**, un argumentus, kas sastāv no vietturiem un vienkāršiem vārdiem. Studio atrod programmu vai vienreiz lūdz norādīt, kur tā atrodas.
- Pirmo reizi, kad papildinājums palaiž programmu, **Studio jautā savā dialogā**: kurš papildinājums, kura programma un ka skripts var darīt jebko, ko var programma. Atļaujiet to tikai papildinājumam, kam uzticaties. Jūsu atbilde tiek atcerēta šim papildinājumam un programmai.
- Pakotne (aina kā USD un iestatījumu fails, kopā ar glTF failu, ja papildinājums to pieprasa) un papildinājuma skripts tiek ievietoti jaunā pagaidu mapē, programma tiek palaista tur, un attēls atgriežas ar papildinājuma dzinēja nosaukumu.

:::note
Papildinājumi var pievienot renderēšanas dzinējus tikai no papildinājumu API 1.4. Darba piemērs atvērtā koda komandrindas renderētājam ir tā paša repozitorijā; to vēl nav palaists tajā renderētājā.
:::
