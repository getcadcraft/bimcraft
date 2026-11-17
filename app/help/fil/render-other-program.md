---
title: Gumuhit ng larawan gamit ang ibang programa
summary: Ang sarili nating path tracer ang gumuguhit ng larawan ng Render; ang ibang programa ay makakagawa nito sa pamamagitan lamang ng render-engine add-on sa CadCraft Studio. Ano ang naidadala at bakit may ilang programang hindi kailanman inaalok.
keywords: render, engine, panlabas na programa, add-on engine, studio, background, queue, usd, gltf, iginuhit ng, blender, gpl
from: 652b413c
---

Ang larawan sa {{ui:Render}} ay iginuguhit ng **sarili nating engine**: ang Fast at ang Path tracer, sa browser at sa CadCraft Studio. Maaaring iguhit ng ibang programa ang larawan lamang kapag may dalang **render-engine add-on**: tingnan ang [Magdagdag ng render engine gamit ang add-on](topic:render-engine-addons). Para dalhin ang eksena sa ibang programa at magpatuloy doon, gamitin ang [Buksan ang eksena sa ibang programa](topic:render-open-in) o [Ipadala ang eksena sa game engine](topic:render-unreal).

## Gumuhit ng larawan gamit ang engine ng add-on

1. I-on ang add-on sa Mga setting › Mga add-on. Lalabas ang engine nito sa listahan ng Engine ng {{ui:Render}}.
2. Piliin ito. Lalabas ang sarili nitong mga setting sa ilalim ng listahan ng Engine.
3. I-click ang {{ui:Render}}. Sa Studio, sa unang pagpapatakbo ng add-on ng programa, magtatanong ang Studio sa sarili nitong dialog. Makikita ang progreso habang gumuguhit; itinitigil ito ng {{ui:Stop}}. Lalabas ang larawang may markang engine na gumuhit nito.

Tumatakbo rin sa browser ang engine na nakasulat sa JavaScript. Ang engine na nagpapatakbo ng programa sa computer na ito ay tumatakbo lamang sa Studio; sa browser, lumalabas ito bilang file na ise-save.

## Ano ang naidadala

Tumatanggap ang engine ng **package**: ang modelo bilang USD file (at glTF file kapag hinihingi nito), at isang settings file na may eksaktong material values, ang araw at langit, bawat lampara na nakabukas kasama ang power at light profile nito, ang camera at ang exposure. Ang bawat programa ay nag-iilaw, nagto-tono at nagsa-sample sa sarili nitong paraan, kaya magkatulad ang mga larawan sa camera, araw, lampara at exposure, pero hindi pixel-for-pixel.

## Programs CadCraft never runs

Hindi kailanman nagsisimula ang CadCraft ng programang nasa ilalim ng GNU GPL na lisensya, at hindi ito inililista bilang engine o bilang target ng Buksan sa. Isa rito ang Blender, kaya wala ito sa listahan ng Engine. Ang USD o glTF file na sine-save mula sa {{ui:Render}} ay bubuksan pa rin dito gaya ng sa anumang programang bumabasa ng mga file na iyon.

:::note
Hindi naidadala sa ibang programa ang panorama at stereo na camera, at ang larawan ng langit (ginagamit ang kulay ng langit sa halip). Walang anumang gawin sa ibang programa ang babalik sa modelo.
:::
