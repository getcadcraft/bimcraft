---
title: Mga tag ng silid at lawak
summary: Maglagay ng tag na may numero, pangalan at lawak sa isang silid o lugar. Sumusunod ang tag dito at ang laki nito ay nakabase sa taas nito sa papel.
keywords: tag, room tag, area tag, tag room, tag area, tag all, tag all untagged, label, taas ng teksto, taas sa papel, anotasyon
from: 67059d8a
---

## Ang gagawin mo

Lagyan ng tag ang mga silid at lugar isa-isa o lahat nang sabay, at ilipat ang tag sa lugar kung saan ito madaling basahin.

## Nasaan ang mga tool

- Ribbon layout: {{ui:Architecture}} › **Silid at Lawak** › {{ui:I-tag ang Silid}} at {{ui:I-tag ang Lawak}}.
- Classic layout: ang Draw bar › menu na {{ui:Mga silid}}.
- Pinili na silid o lawak: Properties › {{ui:Magdagdag ng tag}}.

## Mga hakbang

1. Piliin ang {{ui:I-tag ang Silid}} at i-click sa loob ng silid, kung saan dapat nakalagay ang tag.
2. O pindutin ang {{ui:I-tag ang lahat ng walang tag}} sa row: bawat silid sa level na ito na walang tag ay makakakuha ng isa, sa gitna nito. Isang undo step ito.
3. Para ilipat ang tag, piliin ito gamit ang Piliin at i-drag. May {{ui:Ibalik sa gitna}} ang Properties.
4. Gumagana nang pareho ang {{ui:I-tag ang Lawak}} para sa mga lawak.

## Ang ginagawa ng tag

- Ipinapakita nito ang numero, pangalan at lawak, sa iyong display units.
- Sumusunod ito sa silid nito: palitan ang pangalan ng silid, ilipat ang pader, at magbabago ang mga salita at lugar ng tag sa parehong hakbang.
- Nakabase ang laki nito sa papel: ang {{ui:Taas ng teksto sa papel}} ay nasa milimetro (2.5 sa umpisa). Sa view scale na 1:50, ang tag na 2.5 mm ay 125 mm ang taas sa model; sa 1:100, 250 mm.
- Kapag may tag ang silid, ipinapakita ang tag sa halip na ang simpleng label nito.
- Kapag nawala ang silid o lawak nito, kasama nitong mawawala ang tag. Ibinabalik ng Undo ang pareho.

## Sa IFC

Ang tag ay isang IfcAnnotation (ObjectType ROOMTAG o AREATAG) na may teksto nito bilang text literal, at ang GlobalId ng pinangalanan nito. Ibinibigay ng teksto sa file ang lawak sa square metres.

## Hindi pa nagagawa

- Sariling hugis ng tag, at leader line.
- Ang mga tag sa pinto, bintana at pader ay hiwalay na tool (tingnan ang tag styles ng mga sheet).

Tingnan din ang [Mga silid at room separator](topic:rooms-and-separators).
