---
title: Suriin ang mga tubo at duct laban sa istruktura
summary: Patakbuhin ang mga handang clash set ng mga tubo at duct laban sa mga pader, slab, biga at haligi, hanapin ang mga run na mas malapit sa istruktura kaysa sa insulation at gap nila, at ilista ang mga opening na kailangan ng mga run sa mga pader at slab bilang CSV at BCF.
keywords: mep, clash, clash check, coordination, istruktura, pader, slab, biga, haligi, clearance, soft clash, insulation, gap, opening, openings, penetration, sleeve, core, builder's work, bcf, csv
from: 2d597f01
---

## Ano ang gagawin mo

Siguraduhing kasya ang mga service sa gusali: ano ang tumatama sa istruktura, ano ang masyadong malapit dito, at saan kailangan ng butas ang mga pader at slab. Buksan ang {{ui:Clash check}} sa kaliwang panel; ang seksyong **Mga tubo at duct laban sa istruktura** ay nasa ilalim ng karaniwang check.

## Mahigpit na clash

Ang dalawang listahan ng set ay nag-aalok na rin ng **Mga tubo at duct**, **Mga pader**, **Mga slab at bubong**, **Mga biga**, **Mga haligi** at **Istruktura** (lahat ng apat), kasama ang bilang ng elementong laman ng bawat isa. I-click ang {{ui:Mga tubo at duct × istruktura}} para piliin ang una at ang huli at patakbuhin ang check; o pumili ng alinmang pares at i-click ang {{ui:Patakbuhin}}. Tingnan ang [Suriin para sa clash](topic:clash-check).

## Clearance

May ilang service na nangangailangan ng espasyo sa paligid nila: ang kanilang insulation, at espasyo para magtrabaho o para sa sleeve.

1. Bigyan ng kapal na **Insulation** ang isang run ng tubo o duct sa Properties (walang iginuguhit para dito).
2. I-type ang **Gap sa palibot ng mga tubo at duct** (mm) sa Clash check.
3. I-click ang {{ui:Suriin ang clearance}}: bawat bahaging mas malapit sa pader, slab, biga o haligi kaysa sa insulation nito kasama ang gap ay nakalista, kasama ang distansyang mayroon ito at ang distansyang kailangan nito. I-click ang isang linya para makita ang dalawa.

Ang bahaging dumadaan sa pader o slab ay opening, hindi clearance, at nakalista roon sa halip.

## Kailangang opening

I-click ang {{ui:Mga kailangang opening}}. Kung saan dumadaan ang centre line ng isang run sa pader o slab, inililista ng BimCraft ang opening na kailangan nito: bilog para sa bilog na tubo o duct, kung hindi ay parihaba, kasing laki ng outside size ng run kasama ang dalawang beses ng insulation nito at dalawang beses ng gap, nakasentro kung saan tumatawid ang run. I-click ang isang linya para makita ang run at ang pader o slab.

- {{ui:Mga opening bilang CSV}}: isang linya bawat opening, kasama ang run, laki at insulation nito, laki ng opening, ang elementong dinaraanan nito at ang GlobalId nito, ang level, ang X, Y at Z ng gitna, at kung gaano kalayo ang nadadaanan ng run.
- {{ui:Mga opening bilang BCF issue}}: isang issue bawat opening, kasama ang camera na nakatingin dito at ang run at elementong napili, para sa program ng structural engineer.

:::note
Walang pinuputol: ang mga opening ay listahan para sa mga taong nagsusukat nito. Ikaw ang mag-t-type ng gap; walang code na nagsasabi kung gaano kalaki dapat ang opening. Ang biga at haligi ay clash, hindi opening: kung pwedeng dumaan ang tubo sa isa sa mga ito ay desisyon ng structural engineer.
:::
