---
title: Maghanap ng daan gamit ang model tree
summary: I-browse ang IFC model ayon sa project, site, building, palapag at space, na may mga element na naka-grupo ayon sa uri; lagyan ng tsek ang kahon para ipakita at itago, i-click ang row para pumili, i-double-click para mag-zoom.
keywords: model tree, tree, istruktura, spatial structure, browser, outline, navigator, palapag, level, sahig, space, silid, group, class, itago, ipakita, pumili, piliin, zoom
from: 69de4ab7
---

## Ano ang gagawin mo

Tingnan kung paano binuo ang model at marating ang anumang element nang hindi ito hinahanap sa 3D: ang building, ang mga palapag nito, ang mga space sa bawat palapag, at ang mga element sa loob, naka-grupo ayon sa uri (pader, pinto, slab…).

## Mga hakbang

1. Magbukas ng IFC model. Bumubukas ang {{ui:Model tree}} sa kaliwa hanggang sa mga palapag.
2. I-click ang arrow sa tabi ng row para buksan o isara ito. Unang nakalagay ang mga space ng palapag, pagkatapos ang mga element nito ayon sa uri kasama ang bilang nila. Ang element na binubuo ng mga bahagi, gaya ng hagdan, ay may hawak ng mga bahagi nito.
3. Alisin ang tsek sa kahon ng row para itago ang lahat ng nasa loob nito; lagyan ito ng tsek para ipakita muli. Ang kahong may gitling ay nangangahulugang bahagi lang ng laman nito ang ipinapakita.
4. I-click ang pangalan ng row para piliin ang katumbas nito: isang element, o bawat element sa isang group, palapag o space. Idinaragdag ito ng {{key:Mod}}+click sa pagpili, o inaalis ito.
5. I-click ang {{ui:i}} na button sa tabi ng palapag, space o building para makita ang sarili nitong properties.
6. I-double-click ang row para mag-zoom dito.

## Ang dapat mong makita

- Kapag pumili ka ng element sa 3D view, bumubukas ang tree hanggang dito at minamarkahan ito.
- Naka-strikethrough ang mga nakatagong element. Gumagana nang sabay ang mga kahon ng tree at ang {{ui:Ipakita}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}): tingnan ang [Itago, ihiwalay at silipin ang mga element](topic:hide-and-isolate).
- Ang mga element na hindi inilagay ng model sa anumang palapag ay nasa group sa dulo, **Wala sa spatial structure**.
- Ang mahabang group ay nagpapakita ng 200 row sa isang pagkakataon; i-click ang **Ipakita pa** sa ilalim nito para sa natitira.

## Mga key

Kapag naka-focus ang pangalan ng row: {{key:Up}} at {{key:Down}} ay gumagalaw, {{key:Right}} ay nagbubukas, {{key:Left}} ay nagsasara o umaakyat, {{key:Space}} ay naglalagay ng tsek sa kahon, {{key:Enter}} ay pumipili.

## Karaniwang pagkakamali

- **Naka-tsek ang kahon ng palapag pero walang lumalabas.** Awtomatikong pinapatay ng listahan ng {{ui:Mga palapag}} sa ibaba ng tree ang buong palapag: lagyan din ito ng tsek doon.
- **Walang napipili ang row.** May ilang row, gaya ng walang lamang space, na walang element na maaaring iguhit; sinasabi ito ng status line.

## Susunod

- [Burahin, i-cut, kopyahin at i-paste ang mga building element](topic:edit-elements)
- [Ipakita at itago ang mga palapag, space at gilid](topic:storeys-and-spaces)
