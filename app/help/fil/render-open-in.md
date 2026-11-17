---
title: Buksan ang eksena sa ibang programa
summary: I-save ang eksena bilang USD file o glTF file para sa anumang programang bumabasa nito, o buksan ito mula sa Studio sa isang programa sa computer na ito.
keywords: buksan sa, usd, gltf, glb, export, rendering program, archviz, studio, usdview, ipadala, hand-off, package, unreal folder
from: 0a6559ee
---

Pumili ng entry na **Buksan sa …** sa listahan ng Engine ng {{ui:Render}} para dalhin ang eksena sa ibang programa. Walang ibinabalik sa modelo.

## Isang file para sa anumang programa

- **USD file** ay nagse-save ng eksena bilang `.usdc` (o `.usdz` kapag may kasamang larawan ang modelo): ang [parehong file ng Save as USD](topic:usd), kasama ang materials, lampara at camera. Pinapanatili nito ang instancing at ang eksaktong material values. Karamihan sa renderer, game engine at viewer ay bumabasa ng USD.
- **glTF file (.glb)** ay nagse-save ng mas magaan na glTF 2.0 file na may materials, textures at lampara; tingnan ang [Ipadala ang modelo sa rendering program](topic:model-for-rendering) para sa kung ano ang dala at iniiwan nito.
- **Unreal project folder (.zip)** ay nagse-save ng folder na isinusulat ng [Ipadala ang eksena sa game engine](topic:render-unreal), para sa proyekto sa anumang computer.

Gumagana ang tatlong ito sa browser at sa Studio.

## Sa Studio: buksan sa isang programa

Inililista ng Studio ang mga programang nahanap nito sa computer na ito na kayang magbukas ng eksena: ang usdview kung nasa search path mo ito, at ang sariling programa ng computer para sa uri ng file. Pumili ng isa, pumili ng USD o glTF kung parehong binabasa nito, at i-click ang {{ui:Render}}. Isinusulat ng Studio ang package sa bagong folder sa ilalim ng Documents (`CadCraft hand-off`; walang na-overwrite, bawat ipadala ay may sariling folder) at sinisimulan ang programa dito, saka sinasabi kung nasaan ang mga file.

| Programa | Pinakamahusay basahin |
|---|---|
| usdview | USD |
| Sariling programa ng computer | Anuman ang meron ang computer para sa uri ng file |

Sinisimulan lamang ng Studio ang mga programa mula sa nakapirming listahang ito; hindi nito pinapatakbo ang anumang hinihingi ng pahina sa pangalan, at hindi ito kailanman nagsisimula ng programang nasa ilalim ng GNU GPL na lisensya (tingnan ang [Gumuhit ng larawan gamit ang ibang programa](topic:render-other-program#programs-cadcraft-never-runs)). Anumang programang bumabasa ng USD o glTF ay bubuksan ang file mula sa **Isang file para sa anumang programa** sa itaas.

:::note
Wala sa listahan ang Twinmotion, Enscape at iba pang visualization program: hindi pa nasusuri ng CadCraft ang mga ito at walang inaangking anuman tungkol sa mga ito. Ang glTF o USD file mula rito ang daan papasok; tingnan ang mga tala tungkol sa [plug-in renderers](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
