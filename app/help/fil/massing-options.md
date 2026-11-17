---
title: Mga massing option na magkatabi
summary: Panatilihin ang ilang massing option sa iisang model, gawing kasalukuyang option ang isa, suriin ito laban sa building line at servitude ng site, kumuha ng massing mula sa ModelCraft, at i-develop ang napiling option sa mga pader at sahig.
keywords: massing, mass, option, options, option set, scheme, concept, concept design, stage 2, mga alternatibo, ihambing ang mga option, kasalukuyang option, building mass, push pull, modelcraft, civilcraft, gross floor area, footprint, volume, i-develop ang mass, servitude, easement, building line, setback
from: 69a01459
---

## Ano ang gagawin mo

Panatilihin ang mga massing option ng isang concept sa iisang model sa halip na sa magkakahiwalay na file: ilang building mass na magkatabi, ang isa ay ang **kasalukuyang option**, at ang iba ay itinatabi para sa paghahambing.

Ang massing option ay isang building mass: isang outline na itinaas sa isang taas, na may bilang ng palapag. Hindi pa ito mga pader. Maaari kang magtabi ng kahit ilan, nakapangkat sa **option set** (ang mga option ng iisang set ay alternatibo sa isa't isa).

## Magtabi ng option

1. Buksan ang {{ui:Room program tungo sa massing}}, i-type ang room program at ang outline, at piliin ang {{ui:Mga opsyon sa paghahanap}}.
2. Pumili ng isa sa mga option na nakalista.
3. Sa ilalim ng {{ui:Mga massing option sa model}}, mag-type ng pangalan para sa {{ui:Set ng option}} kung gusto mo, at piliin ang {{ui:Itago ang napiling option}}.

Lumalabas ang option sa model bilang building mass at sa listahan, kasama ang mga palapag, footprint, gross floor area at volume nito. Walang ginagawang gusali. Magtabi ng iba sa parehong paraan.

Ang unang option ng isang set ang kasalukuyang option nito. Ang bawat hakbang ay isang undo step.

## Ang kasalukuyang option

Isang option ng bawat set ang kasalukuyan. Ibig sabihin nito ay dalawang bagay:

- **Ang mga palapag nito ay binibilang bilang floor area ng gusali.** Ang kasalukuyang option ay may isang space bawat palapag na may dalang gross area ng palapag na iyon, kaya anumang bumabasa ng floor area ay nakikita ang option na may bisa at wala nang iba.
- **Sinusuri ito laban sa site.** Kung nasa labas ito ng site boundary, sa ibabaw ng building line o sa servitude, may babalang nagbabanggit dito na lilitaw sa {{ui:Mga problema}}. Babala lamang ito: walang tinatanggihan. Hindi sinusuri ang mga option na hindi kasalukuyan.

Piliin ang {{ui:Gawing kasalukuyan}} sa ibang option para baguhin ito.

Itinatago ng {{ui:Itago ang mga option na hindi kasalukuyan}} ang iba sa 3D view. Para lamang ito sa browser na ito at hindi nise-save sa file.

## Massing mula sa ModelCraft

Sa ModelCraft, ang {{ui:I-export}} › {{ui:Massing sa BimCraft…}} ay nagpapadala ng bawat group o component bilang isang option. Binubuksan ng BimCraft ang file na nakalista ang mga option.

Para dalhin ang mga ito sa model na bukas na, piliin ang {{ui:Magdagdag ng massing option mula sa file}} at piliin ang `.ifc` file. Papasok ang mga mass nito bilang option ng isang set, sa isang undo step, nakatayo kung saan ito minodelo. Pareho rin ang gumagana sa file ng building mass mula sa CivilCraft.

Ang option na may markang "(shape simplified)" ay hindi simpleng tuwid na block sa ModelCraft (umuurong ito, may slope o hindi sarado). Ang mass nito rito ay ang outline ng base nito na itinaas sa taas nito; ang floor area at volume nito ay ang mga sinukat mula mismo sa solid.

## I-develop ang napiling option

Piliin ang {{ui:I-develop}} sa isang option. Nagiging levels ito (idinadagdag hanggang sa bilang ng palapag nito), mga pader sa paligid ng outline nito sa bawat palapag, at floor slab sa bawat isa, sa isang undo step. Umaalis ang option sa listahan; nananatili ang iba sa dati. Wala pang bubong.

Binabago ng {{ui:Palitan ang pangalan}} ang pangalan ng option, at inaalis ito sa model ng {{ui:Alisin}}. Ang pag-alis ng kasalukuyang option ay ginagawang kasalukuyan ang unang iba pang option ng set.

## Dapat mong makita

- Bawat naitagong option bilang block sa 3D view at isang row sa listahan.
- "(kasalukuyan)" sa tabi ng isang option ng bawat set.
- Babala sa {{ui:Mga problema}} kapag lumampas ang kasalukuyang option sa site boundary, sa building line o sa servitude.

## Dapat tandaan

- Sa IFC file, ang option ay building element proxy na may property set na `CadCraft_SiteMass` (nasa set na iyon ang option set nito, pangalan ng option at kung kasalukuyan ito). Ang mga palapag ng kasalukuyang option ay mga space na uring `MassingFloor`. Binabasa ng ibang program ang proxy bilang generic element.
- Hindi kailanman nagdaragdag ng levels ang pagtatabi ng option; ang pag-develop nito ang nagdaragdag.
- Maaaring ilista ng isang assistant ang mga naitabing option, magtabi ng isa, gawing kasalukuyan, palitan ang pangalan, i-develop o alisin ito.
