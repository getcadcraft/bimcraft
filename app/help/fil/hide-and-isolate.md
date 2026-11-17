---
title: Itago, i-isolate at gawing transparent ang mga element
summary: Pumili ng ilang element, itago ang mga ito, ipakita lang ang mga ito, o ipakita sila habang transparent ang lahat ng iba, pagkatapos ibalik ang lahat.
keywords: itago, hide, isolate, see-through, transparent, ghost, x-ray, ipakita lahat, unhide, pumili ng ilan, multiple selection, ctrl click, shift click, visibility
from: 97e98b8c
---

## Ang gagawin mo

Linisin ang view hanggang sa tinitingnan mo: itago ang mga element na nakaharang, ipakita lang ang mga pinili mo, o panatilihin sa screen ang lahat ng iba bilang maputlang outline para alam mo pa rin kung nasaan ka.

## Mga hakbang

1. Magbukas ng IFC model. Tingnan ang [Magbukas ng IFC model at tumingin sa 3D](topic:open-ifc-model).
2. I-click ang isang element para piliin ito. Para pumili pa, pindutin nang matagal ang {{key:Mod}} o {{key:Shift}} at i-click ang bawat isa. Ang pag-click sa napiling element nang ganoon ay tinatanggal ito muli.
3. Buksan ang {{ui:Ipakita}} sa toolbar at piliin kung ano ang gagawin, o pindutin ang susi nito:
   - {{ui:Itago}} ({{key:H}}) ay nagtatago ng mga napili.
   - {{ui:I-isolate}} ({{key:I}}) ay nagpapakita lang ng mga napili.
   - {{ui:Transparent}} ({{key:T}}) ay nagpapakita ng mga napili gaya ng mga ito, at transparent ang lahat ng iba.
4. I-click ang {{ui:Ipakita lahat}} sa parehong menu, o pindutin ang {{key:Shift+H}}, para ipakita muli ang bawat element.
5. Para putulin ang lahat sa paligid ng mga napili, i-click ang {{ui:Section box sa paligid ng pinili}} sa parehong menu, o pindutin ang {{key:Shift+X}}. Tingnan ang [Hiwain ang IFC model gamit ang section plane](topic:section-plane).

## Ang makikita mo

- Kapag may ilang element na napili, sinasabi ng {{ui:Properties}} kung ilan ang mga ito at nililista ayon sa class. I-click ang isa lang para makita ang properties nito.
- Hindi mapipili ang mga nakatagong element: ang click ay tatama sa anumang nasa likod nila.
- Hindi rin mapipili ang mga see-through na element, kaya maaari kang mag-click diretso sa mga pader papunta sa mga na-isolate mo.
- Nagtatago ang mga edge kasama ng element nila, at nagiging maputla kasama nito.
- Nananatili ang pagtatago, pag-isolate at see-through habang nag-e-edit ka, naglalagay ng library item, o hinihiwa ang model gamit ang section plane. Ang pagbukas ng ibang model ay nagpapakita ulit ng lahat.

## Mga karaniwang pagkakamali

- **Naka-grey out ang mga menu item.** Walang napili. I-click muna ang isang element; ituro ang item para mabasa kung bakit hindi ito makakilos.
- **Nagpakita ang Isolate ng pader na itinago ko.** Ipinapakita ng isolate nang eksakto ang pinili mo, nakatago man o hindi.
- **Nawawala ang buong palapag.** Iyon ang listahan ng {{ui:Mga palapag}}, hindi ang {{ui:Ipakita lahat}}: lagyan muli ng tsek ang palapag.

## Susunod

- [Ipakita at itago ang mga palapag, space at edge](topic:storeys-and-spaces)
- [Hiwain ang IFC model gamit ang section plane](topic:section-plane)
