---
title: Pagtatrabaho sa pagitan ng dalawang BIM program
summary: Magpadala ng model mula sa isang BIM program papunta sa isa pa sa pamamagitan ng IFC, na may BimCraft sa gitna; panatilihin ang GlobalIds, property set at classification nito, itakda ang dalawang program para sa parehong property, at tingnan kung ano ang bumalik.
keywords: ifc, round trip, interoperability, globalid, guid, property sets, psets, classifications, shared parameters, property mapping, translator, bcf, koordinasyon, exchange
from: 9f224176
---

## Ang gagawin mo

Ilipat ang isang model sa pagitan ng dalawang BIM program, halimbawa mula Revit papuntang Archicad at pabalik, sa pamamagitan ng IFC, kasama ang BimCraft sa gitna para suriin ito, dagdagan ito at iulat kung ano ang nakaligtas. Hindi binabasa ang sariling file format ng alinmang program: lahat ay dumadaan bilang IFC.

## Ang itinatago ng BimCraft

Kapag binago mo ang model sa BimCraft at i-click ang {{ui:Save as IFC}}, isinusulat pabalik nang eksakto ang bawat linyang hindi mo binago. Kaya:

- Nananatiling pareho ang **GlobalIds**, at maitutugma ng kabilang program ang bawat element sa ipinadala nito.
- Nananatili ang **property set** at ang mga halaga nito, maliban sa mga halagang binago mo.
- Nananatiling nakakabit sa kanilang mga element ang **classification**.

## Itakda ang dalawang program para sa parehong property

1. Buksan ang model sa BimCraft (at ang project bundle, kung mayroon ka nito: idadagdag ang mga property group nito).
2. Sa kaliwang panel, buksan ang {{ui:Between two BIM programs}}.
3. Sa ilalim ng **Property mapping**, i-download ang kailangan ng bawat program:
   - {{ui:Shared parameters}}: isang shared parameter file. Sa Revit, i-load ito gamit ang Manage › Shared Parameters at idagdag ang mga parameter sa mga kategoryang nangangailangan nito.
   - {{ui:IFC export property sets}}: isang user-defined property set file. Sa mga setting ng IFC export ng Revit, piliin ito sa ilalim ng user-defined property sets, para dala ng na-export na IFC ang parehong set at pangalan ng property.
   - {{ui:Mapping table (CSV)}}: bawat property kasama ang IFC set at pangalan nito, ang uri nito, at ang katugmang pangalan sa bawat program. Hindi nailathalang format ang mapping file ng Archicad, kaya itakda ang IFC translator at property manager nito mula sa talahanayang ito nang manu-mano.
   - {{ui:Mapping file}}: ang buong mapping bilang isang file, na itatabi sa project.

Hindi kasama sa shared parameter file ang mga standard set (Pset_ at Qto_): sinusulat ng parehong program ang mga iyon mula sa sarili nilang data.

## Ipadala ang model at ibalik ito

1. Mag-export ng IFC mula sa unang program na nananatili ang GlobalIds (Revit: naka-on ang "Store the IFC GUID in an element parameter after export").
2. Buksan ito sa BimCraft, suriin ito ({{ui:Model checks}}, {{ui:Clash check}}), magdagdag ng issue ({{ui:Issues}}, BCF), baguhin ang mga halaga kung kailangan, at {{ui:Save as IFC}}.
3. Buksan ang na-save na IFC sa ikalawang program, gawin ang trabaho roon, at mag-export ng IFC mula roon na nananatili ang GlobalIds (translator ng Archicad: "Global Unique Identifiers: Keep existing").
4. Balik sa BimCraft, buksan ang model na lumabas, saka idagdag ang bumalik ({{ui:Magdagdag ng model}} sa ilalim ng Models).
5. Sa {{ui:Between two BIM programs}}, piliin ang **Lumabas** at **Bumalik**, at i-click ang {{ui:Make the report}}.

## Basahin ang report

- **Elements**: ilan ang bumalik na may parehong GlobalId, ilan ang nawawala, at ilan ang bago. Ang mga element na may bagong GlobalId ay lumalabas bilang isang nawawala at isang bago: hindi ito pinanatili ng kabilang program.
- **Nabago ang IFC class**: mga element na bumalik bilang ibang uri ng element.
- **Napanatiling halaga ng property**: ang bahagi ng mga halagang bumalik nang hindi nagbago. Ipinapakita sa ibaba ang mga property na may pinakamaraming nabago o nawawalang halaga.
- **Classifications**: napanatili, nabago (parehong sistema, ibang code) o nawawala.

Ang {{ui:Download the report (CSV)}} ay nagbibigay ng bawat property kasama ang bilang nito. Para makita kung aling element ang gumalaw o nagbago ng hugis, gamitin ang {{ui:Compare versions}} sa parehong dalawang model.

:::note
Hindi pinapatakbo ng BimCraft ang alinmang program. Nakadepende sa IFC settings ng bawat program kung aling setting ang nagdadala ng halaga: ipinapakita ng report kung ano talaga ang bumalik, kaya subukan ang isang setting, mag-export ulit, at ihambing.
:::

## Naglalakbay ang mga issue bilang BCF

Ini-export bilang BCF ({{ui:Issues}}) ang mga issue na itataas mo sa BimCraft, na mababasa ng dalawang program gamit ang kanilang BCF tool, kaya umaabot sa taong nagtatrabaho sa kabilang program ang tanong tungkol sa isang element kasama ang viewpoint nito.

Tingnan din ang [Magbukas ng project bundle](topic:open-project-bundle), [Mula sa project file papuntang BimCraft sa pamamagitan ng IFC](topic:rvt-to-ifc) at [Ihambing ang dalawang bersyon ng model](topic:compare-versions).
