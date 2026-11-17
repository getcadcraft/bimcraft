---
title: Baguhin ang IFC properties at i-save ang na-edit na kopya
summary: Palitan ang pangalan, tag, paglalarawan o value ng property ng isang elemento, i-undo, at i-download ang bagong IFC file habang nananatiling pareho ang orihinal.
keywords: i-edit, baguhin, properties, parameters, tag, pangalan, palitan ang pangalan, mark, i-save bilang, i-download, i-undo, kopyahin, ifc, isulat
from: f8035d62
---

## Ano ang gagawin mo

Itama ang data sa IFC model: palitan ang pangalan ng elemento, ayusin ang tag nito, palitan ang value ng property. Pagkatapos, mag-save ng bagong IFC file na may mga pagbabago mo. Hindi kailanman ginagalaw ang file na binuksan mo.

## Ano ang maaari mong baguhin

| Field | Maaaring i-edit |
|---|---|
| Name, Object type, Tag, Description | Oo |
| Mga single property value (text, numero, Yes/No) | Oo |
| Mga type property (mga set na may markang "(type)") | Oo, at nalalapat ang pagbabago sa bawat elemento ng uring iyon |
| Type, GlobalId, Line | Hindi |
| Quantities (haba, lawak, volume, bilang) | Hindi |
| Mga listahan, enumeration at iba pang multi-part value | Hindi |
| Geometry, posisyon, pagdaragdag o pagbura ng mga elemento | Hindi |

## Mga hakbang

1. Magbukas ng IFC model at i-click ang elementong gusto mong baguhin.
2. Sa {{ui:Properties}} panel, i-click ang value na gusto mong palitan. Nagiging text box ito. Ang walang lamang value ay ipinapakita bilang *walang laman*.
3. I-type ang bagong value.
4. Pindutin ang {{key:Enter}}, o mag-click sa ibang lugar, para panatilihin ito. Pindutin ang {{key:Esc}} para kanselahin.
5. Tingnan ang value: naka-bold na ito na may asul na bar sa tabi, na nagmamarka ng na-edit na value.
6. Tingnan ang seksyong {{ui:Changes}} sa kaliwa: nakalista ang pagbabago bilang *elemento*: *field*, lumang value papunta sa bagong value.
7. Ulitin para sa ibang value o ibang elemento.
8. I-click ang {{ui:Save as IFC}} (ipinapakita nito kung ilang pagbabago ang naghihintay, halimbawa "Save as IFC (3)"), o pindutin ang {{key:Mod+S}}.
9. Hanapin ang "*original name* (edited).ifc" sa iyong downloads folder.

## Ano ang dapat mong makita

Sinasabi ng status line na "Na-save ang *name* (edited).ifc na may *n* pagbabago (… bytes). Hindi nabago ang orihinal mong file." Nauubos ang listahan ng {{ui:Changes}}, handa para sa susunod na ikot.

## Mga uri ng value

- **Text**: anumang i-type mo ay pinapanatili nang eksakto. Ang pag-clear ng Name, Object type, Tag o Description ay nag-aalis ng value.
- **Mga numero**: mag-type ng payak na numero, gaya ng `2.4` o `1200`, sa sariling units ng file. Walang unit symbol. Ang iba pa ay nagpapakita ng "Gumamit ng numero."
- **Buong numero** (bilang, integer): "Gumamit ng buong numero." kapag nag-type ka ng decimal.
- **Yes/No**: nagiging menu ang value na may Yes at No.

Pinananatili ng bawat value ang IFC type nito, kaya nananatiling numero ang numero, at tama itong nababasa ng ibang programa.

## Undo

1. I-click ang {{ui:Undo}} sa seksyong {{ui:Changes}}, o pindutin ang {{key:Mod+Z}} habang hindi ka nagta-type sa field.
2. Ulitin para mag-undo nang higit pa. Bawat undo ay nag-aalis ng pinakabagong pagbabago.

Hindi ka maaaring mag-undo lampas sa save: pagkatapos ng save, nagsisimula muli ang listahan. Pinananatili ng na-save na file ang lahat.

## Bakit isang elemento lang ang nababago ng edit mo

Nagtitipid ng espasyo ang mga exporter sa pamamagitan ng pagbabahagi ng data. Maaaring ibahagi ng isang property set ang dalawampung pinto, at maaaring nakalista ang isang value ("Fire rating: 60 min") sa siyamnapung set. Kung basta papalitan ng BimCraft ang nakabahaging value, magbabago rin ang bawat elementong nagbabahagi nito.

Kaya kumokopya muna ang BimCraft bago sumulat:

- Kung ang property set na ine-edit mo ay nakabahagi sa ibang elemento, makakakuha ang elemento mo ng sarili nitong kopya ng set, at ang kopya lang ang nagbabago.
- Kung ang value ay nakabahagi sa ibang set, makakakuha ang set mo ng sarili nitong kopya ng value.

Hindi nagbabago ang mga kapitbahay: nananatili ang lumang data nila. Tinatawag itong *copy-on-write*. Nagdaragdag ito ng ilang maliliit na entry sa file, na binabasa nang normal ng bawat IFC program.

**Ang type properties ay sadyang eksepsiyon.** Ang set na may markang "(type)" ay kabilang sa uri ng elemento, at sa IFC, binabasa ito ng bawat elemento ng uri mula roon. Ang pagbabago nito ay nagbabago sa uri, kaya ipinapakita ng bawat elemento ng uri ang bagong value. Minamarkahan ng listahan ng {{ui:Changes}} ang gayong pag-edit ng "(type)". Tingnan ang [Baguhin ang type property para sa bawat elemento ng isang uri](topic:type-vs-instance).

## Mga babala bago ka mawalan ng trabaho

- Ang pagbubukas ng ibang file habang may hindi naka-save na pagbabago ay nagtatanong ng "May *n* hindi pa naka-save na pagbabago sa *file*. Itapon ang mga ito?" I-click ang Kanselahin para magpatuloy sa trabaho, pagkatapos i-save.
- Ang pagsara o pag-reload ng tab na may hindi naka-save na pagbabago ay nagtatanong sa browser kung aalis ka.

## Mga karaniwang pagkakamali

- **Pag-type ng units.** Tinatanggihan ang `2400 mm`. I-type ang `2400`.
- **Pagpalit ng type property kung elemento lang ang gusto mo.** Hanapin ang tala na "(type)" bago ka mag-type. Kung gusto mong magkaiba ang isang elemento, palitan ang instance property nito, o ang Tag o Name nito.
- **Inaasahang magbabago ang orihinal na file.** Laging nagda-download ng bagong file ang pag-save. Palitan mo mismo ang orihinal kung iyon ang gusto mo, at magtabi ng kopya.
- **Pagpindot sa {{key:Mod+S}} nang walang pagbabago.** Nagsa-save lang ang BimCraft kapag may dapat i-save; kung hindi, maaaring bumukas ang "Save page" ng browser. Isara ito.
- **Pag-save nang dalawang beses at inaasahang dalawang maliit na file.** Bawat save ay naglalaman ng bawat edit mula nang buksan mo ang model.
- **Inaasahang babalik ang mga edit sa project file.** IFC lang ang isinusulat ng BimCraft. Dalhin ang na-edit na IFC sa iyong authoring program gaya ng pag-import mo ng anumang IFC.
