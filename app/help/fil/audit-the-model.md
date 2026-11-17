---
title: "I-audit ang model: mga silid, tag, LOD, clash at interface"
summary: Magpatakbo ng mga handang tseke para sa mga hindi pinangalanang silid, nawawalang tag, mga elementong mas mababa sa level of development na hinihingi ng yugto ng proyekto, mga clash sa pagitan ng mga disiplina, at mga LOD 350 na interface. Payo lang ito: walang hinaharangan.
keywords: audit, tseke, hindi pinangalanang silid, nawawalang tag, mark, lod, level of development, milestone, stage, clash, discipline, coordination, interface, lod 350, opening, lintel, header, penetration, sleeve, pipe, duct, problema, ulat ng tseke, payo
from: cc83a14d
---

## Ano ang gagawin mo

Tingnan ang buong model nang isang beses bago mo ito ilabas. Pinapatakbo ng audit ang mga handang rule set at inilalagay ang nakita nito sa listahan ng {{ui:Problems}} bilang payo. Walang hinaharangan: inaayos mo ang isang finding, o tinatanggap ito na may dahilan, gaya ng ibang problema.

## Mga hakbang

1. Buksan ang {{ui:Model checks}} › {{ui:Audit}} sa kaliwang panel, o {{ui:Tools}} › {{ui:Audit the model…}} (i-type: `AUDIT`).
2. Piliin ang {{ui:Project stage}}. Ito ang parehong yugto na nasa mga detalye ng drawing.
3. Lagyan ng tsek ang mga rule set na patatakbuhin.
4. I-click ang {{ui:Run the audit}}.
5. Basahin ang linya para sa bawat rule set, pagkatapos ay buksan ang {{ui:Open the Problems list}}. Ang click sa isang finding ay pumipili ng elemento nito.
6. Dina-download ng {{ui:The check report}} ang ulat: bawat finding, sino ang tumanggap ng ano at bakit, at ang mga rule set na tumakbo.

## Ang mga rule set

- **Hindi pinangalanang silid**: silid na walang pangalan, o pangalan pa rin na itinakda ng program ("Room 3").
- **Nawawalang tag**: pinto o bintanang walang mark, silid na walang numero, electrical device na walang tag.
- **Mga elementong mas mababa sa LOD ng yugto**: bawat pader, sahig, kisame, bubong, pinto at bintana na may LOD na mas mababa sa hinihingi ng yugto. Binabasa ng elemento ang LOD tag ng type nito; ang elementong na-verify sa field ay LOD 500. Ang mga elementong walang tag ay binibilang sa isang note, dahil hindi sila masusuri.
- **Mga clash sa pagitan ng mga disiplina**: mga elemento ng dalawang disiplina (arkitektura, istruktura, mechanical, plumbing, electrical, ayon sa IFC class) na nagbabanggaan. Ang bubong na nakapatong sa mga pader nito ay hindi binibilang.
- **Mga LOD 350 na interface**: bawat pinto at bintana ay nasa isang opening ng pader nito, kasya ang opening sa loob ng pader, hindi nagsasalikop ang dalawang opening, ang opening na mas malapad sa limitasyon ay may lintel o header (isang elementong nasa ibabaw nito, o isang note sa pinto o bintana), at ang pipe, duct, o cable tray na tumatawid sa pader o slab ay may opening doon. Binibilang ang mga finding bawat pares ng disiplina.
- **Mga kilalang elementong walang nag-check**: mga pader, pinto, bintana at silid na binasa mula sa PDF, scan, o drawing na hindi pa na-verify. Tingnan ang [Markahan ang mga elemento bilang nasuri o na-verify sa field](topic:verification).

## Ang LOD na hinihingi ng bawat yugto

Buksan ang {{ui:The LOD each stage asks for}} para makita o baguhin ang talahanayan.

:::note
Hindi galing sa pamantayan ang talahanayan at ang lapad ng lintel: mga panimulang halaga ng CadCraft ang mga ito. Itinatakda ng isang proyekto ang LOD bawat yugto sa BIM execution plan nito. Itakda ang sa iyo. Maaaring itakda ng isang opisina ang talahanayan para sa lahat sa Settings › Default Policies › Audit; nananatili sa computer na ito ang pagbabago sa seksyong Audit.
:::

## Mabuting malaman

- Maaaring i-note ang lintel sa halip na i-model: piliin ang pinto o bintana at punan ang {{ui:Lintel or header note}} sa ilalim ng {{ui:Verification}} sa Properties.
- Ang pipe na dumaraan sa tunay na opening ay hindi tumatawid sa anumang surface at hindi iniuulat. Ang pipe na naka-model na tuwid sa pader ay iniuulat.
- Huminto ang clash check pagkaraan ng ilang segundo sa napakalaking model, at sinasabi nito iyon. Para sa buong tseke ng dalawang piniling set, gamitin ang [Maghanap ng clash sa pagitan ng mga elemento](topic:clash-check).
- Patakbuhin muli ang audit pagkatapos mong baguhin ang model. Nananatiling tinanggap ang mga tinanggap na finding habang hindi nagbabago ang mga numero nito.
- Binabasa nito ang model. Hindi nito pinapalitan ang coordination review ng mga taong responsable.

## Susunod

- [Suriin ang model para sa mga karaniwang problema](topic:model-checks)
- [Maghanap ng clash sa pagitan ng mga elemento](topic:clash-check)
- [Markahan ang mga elemento bilang nasuri o na-verify sa field](topic:verification)
