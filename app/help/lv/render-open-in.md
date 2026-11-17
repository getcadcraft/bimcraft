---
title: Atvērt ainu citā programmā
summary: Saglabājiet ainu kā USD failu vai glTF failu jebkurai programmai, kas tos lasa, vai atveriet to no Studio programmā šajā datorā.
keywords: atvērt citā programmā, usd, gltf, glb, eksports, renderēšanas programma, archviz, studio, usdview, sūtīt, nodošana, pakotne, unreal mape
from: 0a6559ee
---

Izvēlieties ierakstu **Atvērt citā programmā** {{ui:Renderēt}} dzinēju sarakstā, lai nogādātu ainu citā programmā. Nekas neatgriežas modelī.

## Fails jebkurai programmai

- **USD fails** saglabā ainu kā `.usdc` (vai `.usdz`, ja modelis satur attēlus): [tas pats fails kā Saglabāt kā USD](topic:usd), ar materiāliem, lampām un kamerām. Tas saglabā instancēšanu un precīzās materiālu vērtības. Lielākā daļa renderētāju, spēļu dzinēju un skatītāju lasa USD.
- **glTF fails (.glb)** saglabā vieglāku glTF 2.0 failu ar materiāliem, tekstūrām un lampām; skatiet [Sūtīt modeli renderēšanas programmai](topic:model-for-rendering), kas tajā ir un kas izlaists.

- **Unreal projekta mape (.zip)** saglabā mapi, ko [Sūtīt ainu spēļu dzinējam](topic:render-unreal) raksta projektam jebkurā datorā.

Visi trīs darbojas pārlūkā un Studio.

## Studio: atvērt programmā

Studio uzskaita programmas, ko tas atrod šajā datorā un kas var atvērt ainu: usdview, ja tā ir jūsu meklēšanas ceļā, un datora pašas programmas failu tipam. Izvēlieties vienu, izvēlieties USD vai glTF tur, kur tā lasa abus, un noklikšķiniet {{ui:Renderēt}}. Studio ieraksta pakotni jaunā mapē zem Dokumenti (`CadCraft hand-off`; nekas netiek pārrakstīts, katrai sūtīšanai ir sava mape) un palaiž programmu uz tās, tad paziņo, kur atrodas faili.

| Programma | Labāk lasa |
|---|---|
| usdview | USD |
| Datora pašas programma | Ko vien dators atrod šim failu tipam |

Studio palaiž programmas tikai no šī fiksētā saraksta; tā nepalaiž neko, ko lapa pieprasa vārdā, un nekad nepalaiž programmu ar GNU GPL licenci (skatiet [Zīmēt attēlu ar citu programmu](topic:render-other-program#programs-cadcraft-never-runs)). Jebkura programma, kas lasa USD vai glTF, atver failu no **Fails jebkurai programmai** iepriekš.

:::note
Twinmotion, Enscape un citas vizualizācijas programmas nav sarakstā: CadCraft tās nav pārbaudījis un par tām nesniedz apgalvojumus. No šejienes glTF vai USD fails ir ceļš iekšā; skatiet piezīmes par [spraudņu renderētājiem](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
