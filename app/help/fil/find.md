---
title: Hanapin ang element ayon sa class, pangalan o property
summary: Hanapin ang bawat element na tumutugma sa isa o higit pang rule — ang class, pangalan, type, storey, material o anumang value ng property nito — piliin silang lahat, at itago ang mga rule bilang pinangalanang search set.
keywords: hanapin, find, search, filter, query, rule, search set, selection set, naka-save na search, property, value, class, material, piliin lahat
from: 3d293bc2
---

## Ano ang gagawin mo

Pumili ng bawat element ng iisang uri o may iisang value sa isang hakbang lang: bawat pinto, bawat pader sa Level 2, bawat element na may fire rating na EI60, bawat pader na lampas sa itinakdang halaga.

## Mga hakbang

1. Magbukas ng IFC model.
2. Buksan ang {{ui:Find}} sa kaliwang panel.
3. Sa unang rule, pumili ng property (ang sariling property ng element muna, gaya ng {{ui:Class}} at {{ui:Storey}}, saka ang mga property set ng model), kung paano ito ihahambing, at isang value. Ipinapakita ng value box ang mga value na mayroon ang model.
4. Para paliitin, i-click ang {{ui:Add a rule}}. Piliin ang {{ui:Every rule}} kung kailangan lahat, o {{ui:Any rule}} kung isa lang sa mga ito.
5. I-click ang {{ui:Find}}, o pindutin ang {{key:Enter}} sa value box. Ang mga tumutugma ay mapipili.
6. Para itago ang mga rule, i-click ang {{ui:Save as a set}}, i-type ang pangalan at i-click ulit. Sa susunod, i-click ang pangalan ng set para maghanap gamit ito.

## Ano ang makikita mo

- Ang mga tumutugma ay nakapili sa 3D view at sa model tree, at ang {{ui:Properties}} ay nagsasabi kung ilan ayon sa class. Pindutin ang {{key:I}} para ipakita lang sila, {{key:H}} para itago sila.
- Tumutugma ang mga salita kahit hindi pinapansin ang malaki o maliit na letra. Inihahambing bilang numero ang mga numero: ang "is more than 1000" ay tumutukoy sa value, hindi sa teksto.
- Ang {{ui:has a value}} at {{ui:has no value}} ay hindi nangangailangan ng value; hinahanap nila ang may laman, o ang walang laman.
- Nananatili sa browser na ito ang mga naka-save na set para sa bawat model na bubuksan mo.

## Mga karaniwang pagkakamali

- **Walang nahanap.** Kailangan ng rule ng value na maitutugma nito: tingnan ang mga suggestion sa value box.
- **Walang property sa listahan.** Walang element na may hugis sa model na ito ang mayroon nito.

## Susunod

- [Kulayan ang mga element ayon sa property](topic:color-by-property)
- [Itago, ihiwalay at gawing transparent ang mga element](topic:hide-and-isolate)
