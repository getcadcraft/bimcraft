---
title: Velja hlut og lesa eiginleika hans
summary: Smelltu á hvaða hlut sem er í þrívíddarlíkaninu til að auðkenna hann og lesa heiti hans, gerð, merki, GlobalId, eiginleikasett og magntölur.
keywords: eiginleikar, velja, smella, hlutur, færibreytur, eiginleikasett, pset, magntölur, globalid, guid, gerð, skoða
from: 43b80aa8
---

## Hvað þú gerir

Veldu hluti í IFC-líkani og lestu allt sem skráin segir um þá: eigindi, eiginleikasett, gerðareiginleika og magntölur.

## Skref

1. Opnaðu IFC-líkan.
2. Smelltu á hlut, til dæmis hurð. Smelltu án þess að draga: dráttur sem er meira en nokkrir pixlar snýr útsýninu í stað þess að velja.
3. Horfðu á hlutinn: hann er auðkenndur í bláu.
4. Horfðu á spjaldið {{ui:Eiginleikar}} hægra megin. Efst er tegund hlutarins (eins og "Door" eða "WallStandardCase") og heiti hans.
5. Lestu fyrsta reitinn: **Name** (Heiti), **Type** (Gerð), **Object type** (Hlutgerð), **Tag** (Merki), **Description** (Lýsing), **GlobalId** og **Line** (Lína).
6. Skrunaðu niður að eiginleikasettunum. Þau þrjú fyrstu eru opin; smelltu á heiti hvers annars setts til að opna það.
7. Smelltu á annan hlut til að skipta yfir í hann.
8. Ýttu á {{key:Esc}}, eða smelltu á tóman bakgrunn, til að hreinsa valið.

## Það sem þú átt að sjá

- Auðkennda hlutinn og gögn hans til hægri.
- Eiginleikasett í stafrófsröð. Sett sem koma frá **gerð** hlutarins hafa " (gerð)" á eftir heitinu og athugasemdina „Gerðareiginleiki: breyting hér gildir um alla hluti af þessari gerð.“
- Magnsett (eins og lengdir, flatarmál og rúmmál) birt með hinum settunum. Magntölur eru aðeins lesanlegar.
- Gildi sem þú getur breytt líta út eins og hnappar. [Breyta IFC-eiginleikum og vista breytt afrit](topic:edit-ifc-properties) sýnir hvernig.

[Reitir eiginleikaspjaldsins](topic:properties-panel) útskýrir hvern reit.

## Að ná í falda hluti

1. Til að komast að einhverju inni í byggingunni, afhakaðu hæðirnar fyrir ofan það í listanum {{ui:Hæðir}}.
2. Til að komast að vegg á bak við rýmisrúmmál, slökktu á {{ui:Rými}}.
3. Smelltu á hlutinn.

## Algeng mistök

- **Að draga örlítið meðan smellt er.** BimCraft meðhöndlar það sem snúning og velur ekki. Haltu músinni kyrri.
- **Búast við einingum við hlið talna.** Gildi eru sýnd eins og þau eru geymd í skránni, námunduð í fjóra aukastafi, án einingatákns. Lengdir í metrískum útflutningi eru yfirleitt millimetrar eða metrar; athugaðu stillingar útflutningsforritsins.
- **Leita að færibreytu eftir kunnuglegu heiti.** Útflutningsforrit endurnefna og flokka færibreytur í IFC-eiginleikasett eins og `Pset_WallCommon`. Skoðaðu hvert sett; sérsniðnar færibreytur eru oft í setti sem heitir eftir útflutningsforritinu eða fyrirtækinu þínu.
- **Búast við leitarreit.** Smelltu til að velja hlut; {{key:Mod}}+smellur eða {{key:Shift}}+smellur velur fleiri, og {{key:Mod+A}} velur alla hluti sem sýndir eru. Listinn {{ui:Hlutir}} vinstra megin telur aðeins hluti eftir flokki; hann er ekki smellanlegur.
- **Velja á skráarkorti verkefnis.** Skráarkort hefur enga hluti til að velja: „Eiginleikar hluta þurfa þrívíddarlíkanið. Opnaðu IFC-útflutning af þessari skrá til að sjá þá.“
