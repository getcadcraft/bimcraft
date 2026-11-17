---
title: Mga model group
summary: Pagsamahin ang mga piniling element sa isang pinangalanang group, ilagay muli ang group sa ibang lugar, at baguhin ang isang kopya para mabago silang lahat.
keywords: group, model group, grouping, ungroup, instance, kopya, ulitin, karaniwang unit, bay, apartment, i-edit ang group, IfcGroup
from: 121c5027
---

## Ano ang gagawin mo

Mag-group ng karaniwang bay, ilagay ito nang ilang beses, at baguhin ang bawat kopya sa pamamagitan ng pagbabago ng isa.

## Nasaan ang tool

- Ribbon layout: {{ui:Architecture}} › **Model** › {{ui:Model Group}}.
- Classic layout: ang Draw bar › menu na {{ui:Mga silid}} › Model Group.

## Mga hakbang

1. Gamit ang Piliin, pumili ng mga element: i-click ang isa, i-Ctrl+click o Shift+click ang iba.
2. Piliin ang {{ui:Model Group}}. Agad silang nagiging group. I-type ang {{ui:Pangalan ng group}} sa row muna para pangalanan ito, o i-type pagkatapos para palitan ang pangalan.
3. Pindutin ang {{ui:Maglagay ng isa pa}} at i-click kung saan dapat nakatayo ang kopya: ang kaliwang-ibabang sulok nito ay mapupunta sa click.
4. Baguhin ang alinmang kopya: ilipat ang dulo ng pader, baguhin ang laki ng pinto, burahin ang column. Magbabago sa parehong hakbang ang bawat ibang kopya ng group, at isang I-undo ang babawi sa lahat.
5. Habang nasa kamay mo ang Model Group, ang pag-click sa element ay pumipili ng buong group nito.

## Iba pang maaari mong gawin

- {{ui:Idagdag ang napili}}: magdagdag ng mas maraming element sa group na huli mong pinili.
- {{ui:I-ungroup}}: ang kopyang ito ay nagiging ordinaryong element muli. Nananatiling group ang ibang kopya.
- Ilipat ang buong kopya gamit ang Ilipat: ito ang parehong group sa bagong lugar; hindi gumagalaw ang iba.
- Burahin ang mga element ng isang kopya at mawawala na ang kopyang iyon.

## Ano ang maaaring nasa group

Ang mga pader kasama ang kanilang pinto at bintana, column, at iginuhit na sahig ay maaaring ilagay muli at panatilihing magkakatulad. Maaari ring may ibang element ang group, pero hindi pa ito maaaring ilagay muli; sinasabi ng row kung bakit.

Ang mga kopya ay inililipat, hindi iniikot o sinasalamin.

## Sa IFC

Ang group ay isang IfcGroup na may IfcRelAssignsToGroup papunta sa mga miyembro nito, na nananatiling ordinaryong pader, column at sahig. Bawat kopya ng isang group ay may parehong definition id.

## Hindi pa nagagawa

- Pag-ikot o pag-mirror ng kopya.
- Hagdan, bubong, sahig ng kuwarto at library item sa group na inilagay muli.
- Ang profile, slant at mga wall opening ng pader ay hindi naikokopya sa mga kopya.
- Mga group sa loob ng mga group.

Tingnan din ang [Ilipat, i-align at ipamahagi](topic:move-align-distribute).
