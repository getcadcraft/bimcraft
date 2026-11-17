---
title: Mga spool ng steel pipe at mga spool sheet
summary: Hiwain ang isang steel butt-weld pipe run sa mga spool na may pinakamahabang haba at sa mga field weld na ilalagay mo, bilangin ang mga ito, at mag-download ng spool sheet bawat spool (3D view, cut length, fitting, weld, listahan ng materyales) bilang PDF at CSV; ang mga duct ay may cut list ng mga tuwid na piraso.
keywords: spool, spools, spool sheet, isometric, fabrication, prefabrication, field weld, shop weld, butt weld, cut length, cut list, bill of materials, bom, steel pipe, schedule 40, line number, duct cut list, mga piraso ng ductwork
from: 539f51de
---

## Ano ang gagawin mo

Gawing mga piraso ang isang steel pipe run na welded ng shop at ikakabit ng fitter: mga spool na hindi lalampas sa haba na pipiliin mo, hinati sa mga lugar kung saan ka maglalagay ng field weld, bawat isa ay may sariling sheet.

Tanging **steel butt-weld pipe** ang hinihiwa sa mga spool (mga size ng pipe ayon sa ASME B36.10M, elbow sa long radius ng ASME B16.9). Hindi butt weld ang mga joint ng copper, PVC at PEX, kaya walang spool ang kanilang mga run.

## Hiwain ang run sa mga spool

1. Pumili ng steel pipe run. Sa Properties, lagyan ng tsek ang **Cut into spools**.
2. **Longest spool**: ang pinakamalaking haba sa centre line na puwedeng taglayin ng isang spool (6 m, mga 20 ft, bilang panimula).
3. **Line number**: bahagi ng numero ng bawat spool. Ang bagong run na may spool ay makakakuha ng susunod na bakanteng numero ng sistema nito.

Nilalagyan ng numero ang mga spool ayon sa run mula sa unang punto nito: `CHW-12-S01`, `CHW-12-S02` … (ang sistema, ang line number, ang spool). Lumalaki ang isang spool bahagi kada bahagi; ang bahaging magpapahaba rito nang sobra ay nagsisimula ng susunod, at ang tuwid na haba na mas mahaba sa isang spool ay hinihiwa kung saan puno na ang spool.

## Maglagay ng field weld

1. Buksan ang {{ui:Build}} at piliin ang {{ui:Field weld}}.
2. I-click ang pipe na may spool kung saan pupunta ang field weld. Sa loob ng tuwid na haba, puputulin doon ang pipe; sa loob ng fitting o valve, ililipat ang weld sa mas malapit na joint.

Nakalista sa Properties ang mga field weld ng run, bawat isa ay may {{ui:Alisin}}. Ang bawat pagbabago ay isang hakbang ng {{ui:I-undo}}.

## Mga spool sheet

Sa Properties ng run na may spool:

- {{ui:Mga sheet ng spool (PDF)}}: isang pahina kada spool. Sa kaliwa, ang spool sa 30° isometric view: nakanumerong tuwid na haba nito, shop weld bilang tuldok, field weld na minarkahang FW, at ang north ng plano. Sa kanan, ang numero, size, schedule at haba ng spool, pagkatapos ang **cut lengths**, **fittings**, **welds** (shop butt weld sa bawat joint sa loob ng spool, field weld kung saan ito sumasalubong sa susunod na spool) at ang **bill of materials** nito na may timbang ng pipe (ASME B36.10M plain-end weight).
- {{ui:Listahan ng spool (CSV)}}: pareho, isang block bawat spool.

:::note
Ang cut length ay dulo-sa-dulo ayon sa iginuhit: walang binawas na root gap o weld allowance. Ang elbow ay nasa B16.9 long radius; ang tee, reducer at valve ay generic, sinukat base sa pipe, hindi sa B16.9 o sa maker, at sinasabi ito ng sheet. Hindi ibinibigay ang timbang ng fitting. Pantulong sa drafting at coordination; dapat suriin ng isang engineer ang laki.
:::

## Sa IFC file

Bawat bahagi ng run na may spool ay may dalang **CadCraft_Spool** kasama ang SpoolId nito, ang run, numero ng spool sa run, at kung saan ito nagsisimula at nagtatapos sa kahabaan ng run. Pinananatili ng run ang mga patakaran nito (pinakamahabang spool, field weld, line number) sa sarili nitong set, kaya babalik na pareho ang mga spool kapag muling binuksan ang file.

## Mga duct: cut list

Buksan ang {{ui:Build}} at i-click ang {{ui:Listahan ng putol ng duct}}: isang CSV ng mga tuwid na piraso ng duct ayon sa sistema, hugis at size. Bawat tuwid na haba ay hinihiwa sa mga piraso ng **Piece length** sa Duct bar (1500 mm, mga 5 ft, bilang panimula), at ang natira. Haba lamang: walang seam, gauge o connector.
