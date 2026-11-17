---
title: Antas ng development (LOD) at mga milestone check
summary: Bigyan ang mga elemento ng antas ng development, tingnan kung saan ito galing, suriin ang model laban sa LOD na hinihingi ng milestone, at ayusin ang nawawalang tag at mga walang pangalang silid. Nagbibigay lang ng payo ang bawat check; walang hinaharangan.
keywords: lod, antas ng development, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milestone, milestone table, model checks, nawawalang tag, mga walang pangalang silid, generic nang maaga, ifc class, classification
from: 2091c79b
---

## Ano ang gagawin mo

Sabihin kung gaano na kaunlad ang bawat elemento, pagkatapos suriin ang buong model laban sa hinihingi ng milestone ng proyekto.

## Mga hakbang

1. Pumili ng elemento (o ilan) at buksan ang {{ui:Properties}}. Hanapin ang {{ui:Level of development}}.
2. Pumili ng antas mula sa listahan. Ipinangalan ang bawat antas ayon sa kahulugan nito, at kasama rito ang mga nasa ibaba nito. Isang hakbang ng I-undo ang sumasaklaw sa buong pagpili.
3. Basahin kung saan galing ang antas: ang elementong ito, ang uri nito, o isang markang na-verify sa field.
4. Para suriin ang model, buksan ang {{ui:Model checks}} sa kaliwa, pagkatapos ang {{ui:LOD milestones}}. Piliin ang milestone at ang table (ang panimulang table, o sarili mong CSV o JSON file gamit ang {{ui:Load}}).
5. I-click ang {{ui:Check the model}}. Ipinapakita ng mga total at ng linya para sa bawat row ng table kung ano ang umabot na sa antas nito at ano ang hindi pa; lumalabas din ang mga natuklasan sa listahan ng Problema.
6. Sa ilalim ng {{ui:Missing tags and unnamed rooms}}, i-click ang {{ui:Find them}}, i-edit ang mga mungkahi kung gusto mo, at i-click ang {{ui:Apply}}.

## Ano ang dapat mong makita

- Ang antas na pinili mo sa elemento, kasama ang IFC class at mga classification code sa tabi nito.
- Mga total at row para sa milestone. Hindi kailanman binabago ng table ang kahulugan ng isang antas: nakapirmi ang scale, at sinasabi lang ng table kung anong antas ang kailangan ng milestone.
- "Pananatiling generic nang maaga": payo na panatilihing generic ang mga elemento sa maagang milestone. Payo lang ito.

## Dapat tandaan

- Walang hinaharangan dito. Ang model na mas mababa sa antas na hinihingi ng milestone ay nakalista, hindi tinatanggihan.
- Maaaring itakda nang isa-isa ang tatlong bahagi ng isang antas (geometry, impormasyon, dokumentasyon); ang marka ay nagpapakita ng natugunan, mas mababa, o hindi nakasaad.
