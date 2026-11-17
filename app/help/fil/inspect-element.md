---
title: Pumili ng element at basahin ang mga property nito
summary: I-click ang anumang element sa 3D model para i-highlight ito at basahin ang pangalan, uri, tag, GlobalId, property set at quantity nito.
keywords: properties, pumili, select, click, element, parameters, property sets, pset, quantities, globalid, guid, uri, inspect
from: 43b80aa8
---

## Ang gagawin mo

Pumili ng mga element sa IFC model at basahin ang lahat ng sinasabi ng file tungkol sa mga ito: attribute, property set, type property at quantity.

## Mga hakbang

1. Magbukas ng IFC model.
2. I-click ang isang element, halimbawa isang pinto. I-click nang hindi ini-drag: ang drag na higit sa ilang pixel ay nag-o-orbit sa halip na pumili.
3. Tingnan ang element: naka-highlight ito sa asul.
4. Tingnan ang panel na {{ui:Properties}} sa kanan. Nasa itaas ang uri ng element (gaya ng "Door" o "WallStandardCase") at ang pangalan nito.
5. Basahin ang unang block: **Pangalan**, **Uri**, **Object type**, **Tag**, **Paglalarawan**, **GlobalId** at **Linya**.
6. Mag-scroll pababa sa mga property set. Nakabukas ang unang tatlo; i-click ang pangalan ng alinmang ibang set para buksan ito.
7. I-click ang ibang element para lumipat dito.
8. Pindutin ang {{key:Esc}}, o i-click ang walang laman na background, para alisin ang pagpili.

## Ang makikita mo

- Ang naka-highlight na element at ang datos nito sa kanan.
- Mga property set na nakaayos ayon sa alpabeto. Ang mga set na galing sa **uri** ng element ay may " (type)" pagkatapos ng pangalan nila, at ang note na "Type property: ang pagbabago rito ay nalalapat sa bawat element ng uring ito."
- Mga quantity set (gaya ng haba, lawak at volume) na nakalista kasama ng ibang set. Read-only ang mga quantity.
- Ang mga halagang maaari mong baguhin ay mukhang button. Ipinapakita ng [Baguhin ang IFC property at i-save ang na-edit na kopya](topic:edit-ifc-properties) kung paano.

Ipinapaliwanag ng [Mga field ng panel ng Properties](topic:properties-panel) ang bawat field.

## Pagtingin sa mga nakatagong element

1. Para maabot ang isang bagay sa loob ng gusali, alisin ang tsek sa mga palapag sa itaas nito sa listahan ng {{ui:Mga palapag}}.
2. Para maabot ang pader sa likod ng volume ng silid, i-off ang {{ui:Mga space}}.
3. I-click ang element.

## Mga karaniwang pagkakamali

- **Pag-drag nang kaunti habang nag-click.** Itinuturing ito ng BimCraft na orbit at hindi pumipili. Panatilihing nakatigil ang mouse.
- **Pag-asa ng unit sa tabi ng numero.** Ipinapakita ang mga halaga gaya ng nakaimbak sa file, bilugan sa apat na decimal, nang walang unit symbol. Ang haba sa metric export ay kadalasang millimeter o metro; suriin ang settings ng exporter.
- **Paghahanap ng parameter sa pamilyar nitong pangalan.** Pinapalitan ng pangalan at inaayos muli ng mga exporter ang mga parameter sa mga IFC property set gaya ng `Pset_WallCommon`. Tingnan ang bawat set; kadalasang nasa set na ipinangalan sa exporting program o sa kumpanya mo ang mga custom na parameter.
- **Pag-asa ng search box.** I-click para pumili ng element; ang {{key:Mod}}+click o {{key:Shift}}+click ay pumipili ng marami pa, at ang {{key:Mod+A}} ay pumipili ng bawat element na nakikita. Ang listahan ng {{ui:Mga element}} sa kaliwa ay nagbibilang lang ng mga element ayon sa uri; hindi ito maaaring i-click.
- **Pagpili sa project file card.** Walang element na mapipili sa file card: "Kailangan ng 3D model ang element properties. Magbukas ng IFC export ng file na ito para makita ang mga ito."
