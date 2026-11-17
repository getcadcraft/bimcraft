---
title: Senda líkanið í myndgerðarforrit
summary: Vistaðu það sem 3D-sýnin sýnir sem glTF-líkan (.glb) með efnum sínum, áferðum og lömpum, fyrir myndgerðar- og sjónrænunarforrit sem lesa glTF.
keywords: glb, gltf, gl transmission format, útflutningur, myndgerð, sjónræning, rauntími, archviz, efni, áferðir, lampar, ljós, eign, sérsniðin eign
from: e62d57dc
---

{{ui:Fyrir myndgerð}} á tækjastikunni vistar það sem 3D-sýnin sýnir sem eina **.glb**-skrá (glTF 2.0, opið snið frá Khronos Group). Myndgerðarforrit sem lesa glTF opna hana með efnum og lömpum líkansins; Twinmotion telur glTF og GLB meðal rúmfræðiskráa sem það flytur inn og heldur ljósum þeirra (skjöl Epic, „Importing geometry in Twinmotion“): notaðu {{ui:Fyrir myndgerð}} og fluttu .glb inn þar. Ekkert er sent upp: skráin er búin til á þessari tölvu.

## Vistaðu hana

1. Opnaðu IFC-líkanið og stilltu 3D-sýnina: feldu hæðirnar, hlutina eða tengdu líkönin sem þú vilt ekki, og [málaðu efnin](topic:paint-materials) sem þú vilt sjá.
2. Smelltu á {{ui:Fyrir myndgerð}} (eða skrifaðu `GLB`).
3. Skráin sækist sem „<model name>.glb“. Stöðustikan segir hve marga þríhyrninga, efni og lampa hún inniheldur.

## Það sem skráin ber

- **Rúmfræði** af öllu sem 3D-sýnin sýnir, í metrum, með Y upp (eigin ása glTF). Einn hlutur á hverja hæð og efni, nefndur „Level 1 — Brick, red“, svo þú getir valið efni í myndgerðarforritinu og skipt því út fyrir sitt eigið.
- **Efni:** hver litur með útlitinu sem þú valdir fyrir hann í [Myndgerð](topic:render) (matt, satín, glansandi, málmur, gler…), og hvert málað safnefni með lit sínum, grófleika og **áferð** (mynd hennar er í skránni, skalað í raunstærð sína: múrsteinn er á stærð múrsteins). Gler er gegnsætt.
- **Lampar:** sérhver ljósabúnaður sem er kveiktur í Myndgerð › Lampar, sem punkt- eða spotljós með birtu sinni (lúmen umreiknuð í kandela), lit og geislahorni.
- **Hvar staðurinn er:** breiddar- og lengdargráður lóðarinnar eru skrifuð í skrána til viðmiðunar. Myndgerðarforrit hafa eigin sól: sláðu inn staðinn þar.

## Hvað er skilið eftir

- Skurðurinn í sniðinu (heilir hlutir fara inn) og hlutir sem sjást gegnsæir (þeir eru skildir eftir).
- Hlutir fyrir hvern byggingarhluta (einn hlutur fyrir hverja hæð og efni í staðinn), IFC-eiginleikar, höggkort, vistuð sjónarhorn og skráðar göngur.
- Brúnir og bakgrunnurinn.

## Enscape og aðrir viðbótarmyndgerðarforrit

Enscape keyrir innan annars hönnunarforrits og hefur enga skrá til að opna heilt verkefni. Tvær leiðir:

- Opnaðu **IFC** líkansins (Skrá › Vista) í forritinu sem Enscape keyrir í; flest þeirra lesa IFC. Litir fylgja með; safnefnin koma sem litir sínir.
- Færðu **lítinn hluta** (húsgögn, búnað) inn sem sérsniðna eign: einangraðu hann fyrst, smelltu síðan á {{ui:Fyrir Enscape (.gltf)}}. Eignasafn Enscape listar .gltf, .obj og .fbx skrár, ekki .glb, svo þessi hnappur vistar sömu senu sem eina sjálfstæða **.gltf**-skrá (tvíundargögnin og myndirnar eru inni í skránni; ekkert annað þarf að afrita með henni). Enscape mælir með litlum eignum (undir um 20,000 þríhyrningum).

:::note
Í CadCraft Studio er sama glTF-skráin (og USD-skrá) einnig hægt að vista úr {{ui:Myndgerð}} › Vél › **glTF-skrá** / **USD-skrá**, eða opna beint í forriti á þessari tölvu: sjá [Opna senuna í öðru forriti](topic:render-open-in). Viðbót eða bein tenging fyrir Enscape eða Twinmotion er ekki byggð. FBX- og Datasmith-snið hafa ekki birta forskrift, svo BimCraft skrifar þau ekki; glTF er opna leiðin.
:::
