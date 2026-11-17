---
title: Baguhin ang type property para sa bawat element ng isang type
summary: Tukuyin ang type property at instance property, baguhin ang halaga sa type para sumunod ang bawat element, at tiyaking nananatili sa sarili nitong edit ang edit ng isang element.
keywords: type, instance, type property, family type, shared, copy on write, lahat ng element, bulk edit, manufacturer, model
from: bffd8789
---

## Ang gagawin mo

Itakda ang manufacturer sa isang door type para makita ito ng bawat door ng type na iyon, saka bigyan ang isang door ng sarili nitong fire rating nang hindi ginagalaw ang iba. Ipinapakita nito ang pagkakaiba ng type at instance property sa BimCraft.

## Type o instance?

- Ang **instance** property ay pag-aari ng isang element: ang tag, mark, room, at sariling fire rating nito.
- Ang **type** property ay pag-aari ng type na pinagsasaluhan ng maraming element: manufacturer, model, lapad ng door type.

Sa {{ui:Properties}} panel, ang mga set na galing sa type ay may " (type)" pagkatapos ng pangalan nila at ang linyang "Type property: ang pagbabago rito ay nalalapat sa bawat element ng type na ito." Pag-aari ng element mismo ang bawat ibang set. Ipinapakita ng **Type** sa unang block ang pangalan ng type.

## Mga hakbang: baguhin ang type

1. Magbukas ng IFC model at i-click ang isang door.
2. Tingnan ang **Type** nito sa unang block ng {{ui:Properties}} panel, halimbawa "Single-Flush 900 x 2100".
3. Mag-scroll sa set na ang pangalan ay nagtatapos sa "(type)".
4. I-click ang halagang gusto mong baguhin, halimbawa **Manufacturer**.
5. I-type ang bagong halaga at pindutin ang {{key:Enter}}.
6. Tingnan ang listahang {{ui:Changes}}: nagtatapos sa "(type)" ang entry.
7. I-click ang isa pang door ng parehong type.
8. Suriin ang parehong halaga: ipinapakita rin nito ang bagong halaga.

## Mga hakbang: baguhin ang isang element lamang

1. I-click ang isang door.
2. Magbukas ng set na walang "(type)" sa pangalan, halimbawa `Pset_DoorCommon`.
3. I-click ang isang halaga, gaya ng **FireRating**, i-type ang bagong halaga at pindutin ang {{key:Enter}}.
4. I-click ang katabing door, ng parehong type.
5. Suriin ang parehong halaga: ipinapakita pa rin nito ang lumang halaga.

Kahit ibinahagi ng exporter ang property set na iyon sa pagitan ng dalawang door, binigyan ng BimCraft ang unang door ng sarili nitong kopya bago ito binago. Tingnan ang [Bakit tanging isang element ang nababago ng edit mo](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## I-save

1. I-click ang {{ui:Save as IFC}} o pindutin ang {{key:Mod+S}}.
2. Buksan ang na-save na kopya sa BimCraft, o sa anumang IFC viewer, para tingnan ang dalawang pagbabago.

## Mga karaniwang pagkakamali

- **Hindi lahat ng model ay may type.** Ang ilang exporter ay hindi nagsusulat ng type object, o inilalagay ang lahat sa instance. Kung ganoon, walang "(type)" na set, at kailangang baguhin ang bawat element nang hiwalay.
- **Ang parehong halaga ay lumalabas sa type set at instance set.** Ang ilang exporter ay nagsusulat ng parameter sa dalawang lugar. Maaaring basahin ng ibang program ang alinman; baguhin ang dalawa kung kailangan mong magkatugma ang mga ito.
- **Pag-asang pipili ng "lahat ng door ng type na ito" at sabay-sabay i-edit.** Walang multi-select sa bersyong ito. Ang type property ang paraan para baguhin ang maraming element nang sabay.
