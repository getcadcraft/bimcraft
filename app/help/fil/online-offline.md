---
title: Online at offline
summary: Ano ang nilo-load ng BimCraft mula sa site, paano ginagawang nabubuksan ng Save for offline ang mga IFC model at DWG drawing nang walang koneksyon, at bakit hindi kailanman ina-upload ang anumang binubuksan mo.
keywords: offline, online, internet, koneksyon, walang network, airplane mode, site visit, save for offline, offline ready, upload, privacy, wasm, webassembly, ifc engine, dwg, cloud
from: 39e5c7eb
---

Binabasa ng BimCraft ang iyong mga file sa loob ng browser tab. Ang pagbubukas, pag-inspeksyon, pag-edit at pag-save ay hindi kailanman nagpapadala ng iyong mga file kahit saan, online man o offline. Ipinapaliwanag ng [Pagtatrabaho offline](common:offline) kung paano gumagana ang offline copy sa bawat app; sakop ng pahinang ito ang partikular sa BimCraft.

## Ano ang nilo-load ng BimCraft mula sa site

| Bahagi | Kailan ito nilo-load nang walang offline copy | Laki |
|---|---|---|
| Mismong app, kasama ang 3D viewer at code ng IFC engine | Kapag binuksan mo ang BimCraft | Ilang megabyte |
| Ang WebAssembly na bahagi ng IFC engine | Ang unang IFC file na bubuksan mo sa tab: "Sinisimulan ang IFC engine…" | Mga 1.6 MB |

Ang mga DWG at DXF drawing, project at family file, at folder ay hindi nangangailangan ng dagdag: nasa loob ng app ang kanilang mga reader.

## I-save ang BimCraft para sa offline na paggamit

1. Buksan ang BimCraft habang online ka.
2. I-click ang {{ui:I-save para sa offline}} sa app bar sa itaas.
3. Panoorin ang button na tumataas ang bilang: "Nagsa-save ng 40 sa 212", halimbawa. Mga 11 MB ang kopya ng BimCraft, dahil kasama rito ang IFC engine.
4. Maghintay sa {{ui:Handa offline}}.

Kapag nagsabi na ng {{ui:Handa offline}}, bumubukas nang walang koneksyon ang mga IFC model, DWG at DXF drawing, project file, folder, at ang help na ito. Hindi mo kailangang magbukas muna ng IFC o DWG para "painitin" ang mga reader.

Para i-update o alisin ang kopya, i-click ang {{ui:Handa offline}} at piliin ang {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}.

## Ano ang sinasabi ng button

| Button | Ibig sabihin |
|---|---|
| {{ui:I-save para sa offline}} | Wala pang offline copy sa browser na ito. I-click para mag-save ng isa |
| "Nagsa-save ng *n* sa *m*" | Nagsa-save; panatilihing bukas ang tab hanggang matapos |
| {{ui:Handa offline}} | Naka-save na. I-hover para makita kailan; i-click para sa menu |
| {{ui:Hindi na-save}} | May ilang file na hindi na-download. Suriin ang koneksyon mo at i-click para subukan muli. Mananatili ang huling magandang kopya, kung meron |
| {{ui:Hindi available ang offline}} | Hindi makapag-imbak ng offline copy ang window na ito (private window o managed na computer). Tingnan ang [Pagtatrabaho offline](common:offline) |

:::offline
Offline ka.

- Kung nagsasabi ang button ng {{ui:Handa offline}}, bumubukas ang bawat uri ng file gaya ng dati.
- Kung hindi, tanging ang na-load na ng tab na ito ang gumagana: hindi makapagsisimula ang reader na hindi pa na-load sa tab na ito, at ang pagbubukas ng ganoong uri ng file ay magpapakita ng error mula sa browser sa status line. Huwag i-reload ang tab hanggang muling maging online.
:::

## Ano ang hindi kailanman nangangailangan ng koneksyon

Kapag bukas na ang BimCraft sa tab, gumagana ang mga ito offline kahit walang na-save na kopya:

- Pagbasa ng project at family file at pag-check ng mga folder.
- Pagpili ng element, pagbasa ng properties, at pag-edit ng IFC value sa model na bukas na.
- {{ui:I-save bilang IFC}} at {{ui:I-download ang CSV}}: parehong download na ginagawa sa tab.

## Ano ang hindi pa available

- **Pag-save sa cloud.** Sa computer mo lang nise-save ang mga file.

Tingnan ang [Saan napupunta ang iyong mga file](common:your-files).
