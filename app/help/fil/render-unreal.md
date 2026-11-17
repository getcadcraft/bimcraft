---
title: Ipadala ang eksena sa game engine
summary: Maaaring isulat ng Studio ang eksena sa proyekto ng Unreal Engine at panatilihin itong nasa hakbang sa bawat pagpapadala; ang sarili mong edit ay nasa layer na hindi kailanman isinusulat ng CadCraft. Hindi pa inilalabas ang plug-in na magbubukas nito.
keywords: unreal, unreal engine, game engine, link, ipadala, usd stage, project, live, cine camera, movie render queue
from: 154d55ef
---

Sa CadCraft Studio, maaaring maglaman ang listahan ng Engine ng **link** sa proyekto ng Unreal Engine. Isang direksyon lamang: mula CadCraft papunta sa Unreal.

## Ipadala ang eksena

1. Piliin ang entry ng Unreal sa listahan ng Engine. Sa unang beses, hihingin ng Studio na piliin mo ang folder ng proyekto mo (ang may `.uproject` file); naaalala nito ito.
2. I-click ang {{ui:Send}}. Isinusulat ng Studio ang `CadCraft/<file name>/` sa loob ng proyekto: ang eksena bilang USD file, ang settings file, light profiles, at dalawang maliit na layer file.
3. Baguhin ang modelo, i-save at ipadala muli. Ang eksena at ang settings file lamang ang napapalitan.

## Ligtas ang sarili mong edit

Ang stage na binubuksan ng Unreal ay isang maliit na root layer na ginawa minsan, na may dalawang layer sa ilalim nito: **sa iyo** sa itaas (`<name>.user.usda`, walang laman sa simula, hindi kailanman muling isinusulat ng CadCraft), at ang eksena ng CadCraft sa ibaba. Nananatili ang mga edit na isine-save mo sa sarili mong layer kapag muling ipinadala ang eksena. Ang mga ilaw at iba pang actor na inilalagay mo sa Unreal level ay nasa labas ng stage at hindi rin ginagalaw.

## Kung walang Studio

Sa browser, o sa computer na hindi nakikita ng Studio ang Unreal, piliin ang **Unreal project folder (.zip)** sa listahan ng Engine at i-click ang {{ui:Render}}. Isinasave nito ang parehong folder bilang zip: i-unzip ito sa `CadCraft` folder ng proyekto mo. Panatilihing naka-on ang **Isama ang stage files** sa unang beses; i-off ito para sa mga susunod na save, para ang zip ay maglaman lamang ng eksena at ng settings file, at hindi kailanman mapapalitan ang sarili mong layer.

:::note
Ang Unreal plug-in na magbubukas ng stage, maglalapat ng araw, lampara, camera at exposure, susunod sa bawat pagpapadala, at mag-re-render ng camera ay **hindi pa inilalabas** at hindi pa napapatakbo sa Unreal. Hanggang doon, inilalagay ng Send ang mga file sa proyekto at mabubuksan ito ng sariling USD tools ng Unreal. Windows ang unang sistema; susunod ang macOS.
:::
