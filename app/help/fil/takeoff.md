---
title: Quantities papuntang TakeoffCraft
summary: Isang click lang para ipadala ang mga quantity ng model sa TakeoffCraft — mga pader ayon sa uri, bubong ayon sa sloped area, ridges, hips at valleys, pundasyon, pinto at bintana, cabinet, electrical device, floor area at lumber cut list — nakamarkahan sa plan ng bawat level, kasama ang mga assembly ng trade pack sa mga item.
keywords: takeoff, quantity takeoff, tantya, pagtantya, listahan ng materyal, bill of materials, takeoffcraft, quantities, lawak ng pader, lawak ng bubong, squares, footing, kongkreto, cubic yards, cut list, lumber, trade pack, assembly
from: c5a745af
---

## Ano ang gagawin mo

Gawing listahan ng materyal at tantya sa TakeoffCraft ang model. Gumuguhit ang BimCraft ng plan ng bawat level sa karaniwang scale, minamarkahan ang bawat quantity dito, at inilalagay ang takeoff sa loob ng PDF. Sinusukat ng TakeoffCraft mismo ang mga marka, kaya maaaring suriin ang bawat numero sa sheet.

## Ipadala ito

1. I-click ang {{ui:Takeoff}} sa model bar (katabi ng {{ui:Sheets}}).
2. Magbubukas ang TakeoffCraft sa bagong tab kasama ang mga plan. Kapag nagtanong ito, piliin na buksan ang takeoff na nahanap nito sa PDF.
3. Idagdag ang mga presyo mo sa quantities table ng TakeoffCraft; nakalista na ang mga materyal sa mga assembly.

:::note
Kapag hindi available dito ang TakeoffCraft, ida-download ng button ang PDF sa halip. Buksan ito sa TakeoffCraft pagkatapos: hahanapin nito ang takeoff sa loob.
:::

## Ano ang sinusukat

- **Mga pader** ayon sa uri at taas: ang kanilang centreline bilang mga run, kasama ang taas ng pader sa item, para ibigay ng TakeoffCraft ang haba at lawak ng pader. Dala ng bawat run ang mga pinto at bintana ng pader, kaya ibinabawas ito ng TakeoffCraft sa lawak ng pader nang isang beses, ayon sa parehong patakaran ng mga schedule ng BimCraft: pareho ang gross, deductions at net ng dalawa. Ang takeoff data ng uri ng pader (unit, mortar, rate; tingnan ang [Mga wall assembly](topic:wall-assemblies)) ay kasama bilang isang presyadong linya sa item ng uri na iyon. Sa ilalim ng measurement method na iba sa default (tingnan ang [Pumili ng measurement method](topic:plan-schedules-and-pdf#choose-a-measurement-method)), dala ng takeoff ang method, dala ng bawat run ang kinukuha ng mga junction sa mukha ng pader nito, at sinusukat ito ng TakeoffCraft ayon sa parehong method at pinangalanan ito. Ang uri na may unit na may haba at taas ay nagbibigay ng dalawang component na may quantity: ang mga unit na oorderin at ang dami ng mortar, pinepresyuhan kapag per unit, per 1000 unit o per m³ ng mortar ang rate ng uri. Ang bilang na eksaktong tumatama sa buong numero ay maaaring isang unit na mas mataas sa TakeoffCraft, dahil nagra-round ang hand-over ng mga posisyon sa sheet.
- **Bubong**: bawat roof plane bilang area kasama ang pitch nito (ibinibigay ng TakeoffCraft ang sloped area), ridges, hips at valleys (hips at valleys ayon sa kanilang slope), eaves at rakes.
- **Pundasyon**: footing at stem wall bilang mga run na nakapaligid sa gitna nila, slab bilang area kasama ang kapal nito, kaya lumalabas ang kongkreto ayon sa volume.
- **Pinto at bintana** na binibilang ayon sa uri, kasama ang window trim.
- **Base cabinet** ayon sa haba ng harap nito.
- **Electrical device** na binibilang ayon sa uri.
- **Floor area** ng bawat level, mula sa mga kuwarto nito.
- **Ang lumber cut list** mula sa framing, binilang sa sarili nitong sheet (isang tuldok bawat piraso).

Kung may katugmang assembly ang isang trade pack — exterior at interior walls, slabs, footings, stem walls, shingles, ridge at hip cap, valleys, eaves, interior doors, window trim, base cabinets, outlets, switches, lights, junction boxes at ang panel — ang item ay kasama ng mga materyal at formula nito. Walang presyo ang mga pack, at hindi pa nasusuri ng estimator.

:::tip
Ginagawa ang mga plan mula sa model sa bawat pag-click, kaya pagkatapos ng pagbabago, i-click lang ulit ang {{ui:Takeoff}}.
:::
