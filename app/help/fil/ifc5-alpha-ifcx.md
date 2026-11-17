---
title: Magbukas at mag-export ng IFC5 alpha (IFCX)
summary: Isang lab option para sa IFC5 alpha file format (.ifcx): magbukas ng file kasama ang mga layer nito, tingnan kung ano ang hindi natiyak ng pagbasa, at mag-export ng mga bukas na model. Nagbabago pa ang format, kaya basahin muna.
keywords: ifc5, ifcx, alpha, buildingsmart, json, mga layer, schema, lab, mga quantity, qto, export, import
from: cffe1669
---

Ang IFC5 alpha (file na nagtatapos sa {{ui:.ifcx}}) ay file format na dinidisenyo pa ng buildingSMART. Hindi pa ito tapos: maaaring magbago ang mga file, at ang pagbasa natin sa mga ito. Kaya ito ay lab option, at kailangang basahin muna.

## I-on ito

1. Piliin ang {{ui:Mga setting}}, pagkatapos ang seksyong {{ui:IFC5 alpha (IFCX)}} ng BimCraft tab.
2. Lagyan ng tsek ang {{ui:IFC5 alpha (IFCX) - nagbabago pa ang format; basahin muna}}.

Naka-off ito bilang default. Habang naka-off, tinatanggihan ang .ifcx file kasama ng pangungusap na tumuturo dito. Lumalabas ang {{ui:Buksan ang IFC5 alpha (.ifcx)…}} at ang export button na {{ui:IFC5 alpha}} kapag naka-on ito.

## Magbukas

- Pumili ng .ifcx file gamit ang {{ui:Magbukas ng file o folder}} (papalitan nito ang bukas na model, pagkatapos ng karaniwang tanong tungkol sa mga edit), o
- piliin ang {{ui:Buksan ang IFC5 alpha (.ifcx)…}} at pumili ng ilang file nang sabay: ang file, ang mga layer nito, at ang mga schema file na iniimport nito. Kapag may bukas na model na, ang file ay **idinaragdag sa tabi nito**; tinatanggal ito muli ng x sa listahan ng model, at iyon ang undo.

Naglilista ang isang IFCX file ng mga node (path, ang mga child nito, ang minamana nito, ang mga attribute nito). Maaaring maglarawan ang maraming file sa parehong node: ang mas huling file (layer) ay nagpapalit ng attribute ng mas naunang file, at ang null child ay nagtatanggal ng child. Pinagsasama ito ng BimCraft, pagkatapos ay ginuguhit ang resulta bilang maliit na IFC4 model: project, site, building, storey at element na may pangalan, class, property, quantity, kulay at mesh.

Walang kinukuha mula sa network. Ginagamit lang ang mga schema file na iniimport ng isang file (halimbawa `ifc@v5a.ifcx`) kung pinili mo ang mga ito kasama ng file; kung hindi, sinasabi ito ng report at binabasa ang mga attribute nang walang type check.

### Ang report

Pagkatapos magbukas, nililista ng report ang nakita ng pagbasa: datos na hindi tugma sa schema nito, mga schema file na hindi ibinigay, at mga attribute na walang IFC na kahulugan dito. Ang mga attribute na walang mapping ay **pinapanatili** sa model, hindi tinatanggal, at isinusulat muli sa export.

## Ano ang nagiging ano

| Sa IFCX file | Sa BimCraft |
|---|---|
| Isang node na may IFC class (project, site, building, storey, wall …) | Ang katugmang IFC4 element; ang class na hindi kilala ng pagbasang ito ay nagiging building element proxy |
| Ang pangalang taglay ng node sa ilalim ng parent nito | Ang pangalan ng element |
| Mga attribute na may uri ng quantity (Length, Area, Volume, Mass …) | Isang IFC4 quantity set na tinatawag na `Qto_IFCX` (nananatiling IFC4 `Qto_*` set ang mga IFC4 quantity) |
| Iba pang property attribute | Isang property set na tinatawag na `Pset_IFCX` |
| Mga attribute ng mesh at transform | Ang mga triangle at placement ng element; hindi iginuguhit ang mga hindi nakikitang mesh |
| Kulay, opacity, materyal, classification | Surface style, materyal at classification ng element |

Kinukuha ang mga unit bilang metro, na may Z pataas: sinasabi ng alpha na idodokumento pa ang mga unit sa hinaharap.

## Export

Piliin ang {{ui:IFC5 alpha}} sa toolbar, basahin ang note, pagkatapos {{ui:I-export ang .ifcx}}. May sariling header ang file natin (author CadCraft, version ifcx_alpha) at sinasabi nito sa sarili na ito ang alpha format. Bawat model ay isinusulat sa sarili nitong file coordinates, sa metro, kasama ang mga pangalan, class, property set, quantity (bilang attribute kasama ang uri nito), kulay at triangle. Flattened ang mga layer at inheritance sa pagsulat. Suriin ang file sa program na ipapadala mo rito.

## Mga limitasyon

- Hindi binabasa ang curved geometry (curves, surfaces): mga triangle mesh lang.
- Ang mga pinto at bintanang nakapaloob sa pader ay inilalagay sa palapag; hindi naka-link ang pader na pinanggalingan nila.
- Ang mga pangalan ng IFC4 `Qto_*` set ay pinapanatili bilang sarili nating attribute group (`cadcraft::qto::…`); ang standard alpha schema ay may iilang pangalan lang ng quantity.
- Maaaring magbago ang format sa ilalim natin; ang file na ginawa ngayon ay maaaring hindi mabasa bukas.
