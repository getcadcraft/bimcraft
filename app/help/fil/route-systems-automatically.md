---
title: I-route ang duct, drain, tubig at refrigerant pipe nang awtomatiko
summary: Sa clash check, naghahanap ng daan ang BimCraft sa paligid ng bukas na model para sa mga duct, drainage sa pamamagitan ng gravity, malamig at mainit na tubig, at split o multi-split na refrigerant pipe, at iginuguhit ang mga takbo kasama ng kanilang fitting sa isang undo step. Pantulong ito sa drafting: ang mga laki, slope at check ay mula sa mga talahanayan ng programa at sa mga numerong tina-type mo; walang sinasabi rito na tumutugon ang disenyo sa anumang code.
keywords: auto route, autoroute, i-route ang duct, i-route ang pipe, drainage, sanitary, gravity, stack, vent, trap, tubig, mainit na tubig, return loop, recirculation, refrigerant, split, multi-split, VRF, equivalent length, branch kit, wye
from: 5841d513
---

## Ano ang gagawin mo

Hayaan ang BimCraft na ilatag ang isang network ng takbo sa pagitan ng mga connector na nasa model na, paikot sa mga pader at beam, at pagkatapos ay suriin ito laban sa mga numerong nakikita mo.

## Mga hakbang

1. Buksan ang model at ang clash check. Sa ilalim ng **I-route ang mga duct nang awtomatiko**, pumili ng air handler at mga terminal nito, o sa ilalim ng **I-route ang ibang system nang awtomatiko**, pumili ng system.
2. **Sanitary drainage sa pamamagitan ng gravity.** I-type ang posisyon ng outlet at, kung mayroon ka, ang mga posisyon ng stack. Lagyan ng tsek ang **I-route ang bawat palapag nang sabay** para kunin ang bawat palapag na may fixture: ang drain ng bawat palapag ay sasalubong sa stack sa sarili nitong level, at ang stack ay tatakbo mula sa itaas ng pinakamataas na gripo hanggang sa paanan nito. Pindutin ang {{ui:Route}}.
3. **Trap papunta sa vent.** Inililista ng panel ang distansya ng bawat trap papunta sa vent nito. I-type sa **Pinakamalayo mula sa trap papunta sa vent nito** ang pinakamalaking pinapayagan ng code mo; ang anumang fixture na lalampas doon ay ililista bilang hindi tapos, kasama ang milimetrong lampas. Lagyan ng tsek ang **Vent sa pamamagitan ng stack** kapag walang sariling vent stub ang mga fixture: sa stack sinusukat ang distansya. Walang code table ang BimCraft para dito: ikaw ang mag-type ng numero.
4. **Malamig at mainit na tubig.** Pumili ng source, i-type ang presyon sa source at ang presyong kailangan mo sa isang fixture. Lagyan ng tsek ang **Mainit na tubig**, piliin ang mainit na connection ng heater, at lagyan ng tsek ang **Return loop** para tapusin ang return line sa **hot-return** connection ng heater, o sa anumang ibang connection na piliin mo (ang isang iyon ay magtatapos 150 mm ang layo, bukas, para ikaw ang mag-join).
5. **Split, multi-split at VRF.** Pumili ng outdoor unit, lagyan ng tsek ang mga indoor unit at i-type ang kapasidad ng bawat isa. I-type ang mga limit mula sa data ng maker mo. I-type ang **equivalent length** ng isang bend at ng isang branch kit (mga halaga ng maker), at susuriin ang pinakamahaba at kabuuang haba batay sa equivalent length.
6. Pindutin ang {{ui:Route}}. Sinasabi ng panel kung ilang takbo ang nagawa nito, at ang anumang hindi nito nagawa at kung bakit. Binabawi ng {{ui:Undo}} ang lahat sa isang hakbang.

## Ano ang dapat mong makita

Mga pipe na may elbow, tee at reducer; mga drain na bumababa nang hindi bababa sa pinakamaliit na slope para sa laki nila; mga vent stub sa mga fixture; mga refrigerant line bilang pares ng liquid at gas na nananatiling magkasunod ang pagliko sa bawat sulok, na may branch kit na minarkahan kung saan lumalabas ang branch sa trunk.

## Mabuting malaman

- Kapag nagsalubong ang isang drain sa ibang drain, gumuguhit ang model ng tee. Tinatawag ng plano ang mga lugar na iyon na 45-degree wye junction para mapalitan mo ang fitting.
- Ginagamit ng mainit na tubig ang sarili nitong mainit na connection ng fixture kapag mayroon ito ang family nito, at isang connection na 100 mm sa tabi ng malamig kapag wala.
- Nagsisimula ang mga refrigerant line sa pagitan ng dalawang port ng bawat unit. Kapag masyadong magkalapit ang dalawang port para sa isang bend, nananatiling nakasentro ang pares sa pagitan nila.
- Ginagamit ng water network ang demand curve at friction number na ipinapakita sa calculations; palitan ang mga ito ng sa code mo bago umasa sa mga presyon.
- Maaaring abutin ng kalahating minuto o higit pa ang malalaking bahay, karamihan dahil sa mainit na network.
- Pantulong ito sa drafting. Dapat suriin ng kwalipikadong tao ang laki, slope, vent at presyon laban sa code na naaangkop.

## Susunod

[Suriin ang mga clash](topic:clash-check) · [Suriin ang pipe at duct laban sa istruktura](topic:mep-against-structure) · [Mga koneksyon ng pipe at kagamitan](topic:mep-connections)
