---
title: Pumili kung aling programa ang gumuguhit ng larawan
summary: Ang pagpipilian ng Engine sa dialog ng Render: ang sarili nating dalawang engine, ang ibang programa sa CadCraft Studio, at ang ginagawa ng web sa halip.
keywords: render, engine, renderer, render engine, plug-in, plugin, studio, panlabas na programa, iginuhit ng, queue, add-on engine
from: 44a1ef5e
---

May pagpipiliang **Engine** ang {{ui:Render}} sa itaas ng Mode. Laging nandiyan ang sarili nating dalawang engine at gumagana kahit saan; maaaring magdagdag ng iba ang mga add-on, at sa CadCraft Studio, kasama rin sa listahan ang mga programang kumukuha sa eksena.

| Engine | Ano ang ginagawa | Saan |
|---|---|---|
| Built-in: Fast | Ang mabilis na still: liwanag ng araw, malambot na anino, itsura ng salamin at metal, sa loob ng ilang segundo | Ang browser at Studio |
| Built-in: Path tracer | Liwanag na tumatalbog sa pagitan ng mga surface sa iyong graphics card o processor, ang render queue at ang iba pang computer sa iyong network | Ang browser at Studio |
| Engine ng isang add-on | Gumuguhit ito at ibinabalik ang larawan: tingnan ang [Gumuhit ng larawan gamit ang ibang programa](topic:render-other-program) | Ang browser (engine na nakasulat sa JavaScript) o Studio (engine na nagpapatakbo ng programa) |
| Programang kumukuha ng eksena | Inilalagay ng Studio ang eksena sa folder nito at pinapanatili itong nasa hakbang | Studio |
| Buksan sa … | Sine-save ang eksena at binubuksan sa isang programa; walang ibinabalik: tingnan ang [Buksan ang eksena sa ibang programa](topic:render-open-in) | Sine-save ng web ang file |

## Paano gumagana ang pagpipilian

- Ang pagpili ng Fast o ng Path tracer ay nagbabago rin ng Mode, at ganoon din sa kabilang direksyon. Walang ibang nagbabago sa dialog para sa mga taong hindi gumagamit ng ibang engine.
- Ang engine na hindi available ay nananatili sa listahan kasama ang dahilan ("not found", "needs a newer version"); hindi mo ito mapipili. Sa browser, ang engine na tumatakbo lamang sa Studio ay nagpapakitang "nagse-save ng file": sine-save ng {{ui:Render}} ang eksena at ang mga setting nito sa isang file na dadalhin mo sa programang iyon.
- Naka-save ang pinili mo kasama ng render settings ng file, at ang engine na huli mong pinili ang panimulang engine para sa mga file na walang sariling pinili.
- Ang larawang galing sa ibang programa ay nagsasabi kung aling programa ang gumuhit nito at ang bersyon nito, sa dialog at sa render queue. Ang mga pangako ng pahinang [Render](topic:render) ay sumasaklaw lamang sa **sarili nating** engine: nag-iilaw, nagto-tono at nagsa-sample ng ibang programa sa sarili nitong paraan, kaya magkatulad ang dalawang larawan ng isang eksena sa camera, araw, lampara at exposure, pero hindi pixel-for-pixel.

## Ano ang ibinibigay sa bawat engine

Ang eksena ay napupunta sa ibang programa bilang **package**: ang modelo bilang USD file (ang parehong file na isinusulat ng [Save as USD](topic:usd)), at isang settings file na naglalaman ng mga bagay na hindi mapagkakatiwalaan ng USD importer: ang eksaktong material values, ang mga lampara na nakabukas kasama ang kanilang power at light profiles, ang araw, ang langit, ang exposure, at ang camera gaya ng pagguhit nito sa dialog. Walang ina-upload kahit saan.

## Ang render queue

Maaaring maghintay ang larawan para sa ibang programa sa [render queue](topic:render#the-render-queue) gaya ng sa atin; tandaan ng job nito kung aling engine ang para dito.
