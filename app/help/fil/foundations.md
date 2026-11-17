---
title: Pundasyon sa ilalim ng mga pader
summary: Maglagay ng slab on grade, stem wall na may slab, crawlspace o basement sa ilalim ng gusali sa isang click; ang mga footing ay sinusukat ayon sa mga pader at bilang ng palapag, at sumusunod ang pundasyon kapag gumalaw ang mga pader.
keywords: pundasyon, foundation, footing, slab on grade, thickened edge, monolithic slab, stem wall, crawlspace, crawl space, basement, basement wall, frost, concrete, lapad ng footing
from: c0e20172
---

## Ano ang gagawin mo

Bigyan ang gusali ng pundasyong tugma sa mga pader nito. Sinusundan ng BimCraft ang labas ng mga pader, sinusukat ang mga footing ayon sa uri ng pader at kung ilang palapag ang nakapatong sa mga ito, at muling ginagawa ang pundasyon tuwing nagbabago ang mga pader.

## Maglagay ng pundasyon

1. Sa level na kinatatayuan ng mga pader (karaniwan ang una), buksan ang {{ui:Build}} at piliin ang {{ui:Foundation}}.
2. Piliin ang uri:
   - **Slab on grade**: 4" na concrete slab na ang tuktok ay ang sahig, may thickened edge sa ilalim ng mga pader.
   - **Stem walls and slab**: mga foundation wall hanggang sahig sa mga footing, may slab sa loob ng mga ito.
   - **Crawlspace**: mga foundation wall na humihinto sa ilalim ng framing ng sahig, nasa mga footing, walang slab.
   - **Basement**: mga foundation wall na buong taas sa mga footing, may basement slab, sa ilalim ng framing ng sahig.
3. Ituro ang loob ng gusali: lumalabas nang may tuldok-tuldok na linya ang mga footing kasama ang laki nila. I-click.

Ang pag-click sa gusaling mayroon nang pundasyon ay pipiliin ito, para mabago mo ito sa halip na magdagdag ng pangalawa.

## Baguhin ito

Piliin ang pundasyon (i-click ang loob ng gusali gamit ang {{ui:Foundation}}, o i-click ang alinman sa mga bahagi nito sa 3D view o sa model tree) at baguhin ito sa **Properties**: ang uri, ang lapad at lalim ng footing, gaano kalalim ang ilalim ng footing, ang kapal ng pader, gaano kababa sa sahig humihinto ang mga pader, ang taas ng basement at ang kapal ng slab. Bawat pagbabago ay isang undo step.

Ang mga laking may markang **auto** ay galing sa mga pader: mga footing na 12", 15" o 23" ang lapad para sa isa, dalawa o tatlong palapag sa slab o stem wall, 18", 22" o 27" sa ibabaw ng crawlspace o basement, at 4" pang lapad sa ilalim ng masonry o concrete na pader. I-type ang laki para itakda ang sarili mo; i-type ang `0` para bumalik sa auto.

:::warning
Ang mga awtomatikong laki ay mga markadong default para sa karaniwang light-frame na bahay, hindi engineering. Sinusuri ng designer o engineer ang mga footing, lalim at pader para sa lupa, lalim ng frost at mga load.
:::

## Ano ang naka-save

Ang pundasyon ay sine-save bilang IFC element assembly ("Foundation") na binubuo ng footing (o thickened edge ng slab), foundation wall at slab ayon sa kailangan ng uri nito, lahat ay concrete, bawat isa ay may sariling dami: haba, lapad, taas, lawak at volume, handa para sa takeoff.

## Mga dapat tandaan

- Ilipat, dagdagan o burahin ang mga pader at muling gagawin ang pundasyon sa ilalim ng mga ito; ang pagguhit ng pader sa level sa itaas ay magpapalapad sa mga footing sa ibaba para sa dagdag na palapag.
- Binubura ng {{key:Delete}} ang piniling pundasyon kasama ang lahat ng bahagi nito.
- Kapag nasa model ang lupa ng site (tingnan ang [Ang lupa ng site, building pad at paving](topic:terrain)), bumababa kasabay nito ang mga stem wall at crawlspace footing sa mga hakbang na 8".
- Hindi pa nagagawa ang mga footing sa ilalim ng mga interior wall.
