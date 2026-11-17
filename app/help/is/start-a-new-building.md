---
title: Byrjaðu nýja byggingu
summary: Búðu til autt bygginglíkan með kótum sínum, teiknaðu veggi þess, settu hluti úr safninu inn og vistaðu það sem IFC.
keywords: nýtt, ný bygging, autt, tómt, byrja frá grunni, sniðmát, kótar, hæðir, gólf, búa til, líkan
from: 68786865
---

## Það sem þú gerir

Byrjaðu bygginglíkan frá grunni í stað þess að opna eitt. BimCraft býr til autt IFC-líkan með verkefni, lóð, byggingunni og kótum hennar. Þú getur sett búnað og húsgögn á kótana úr safninu og vistað það sem IFC-skrá.

:::note
Veggi er hægt að teikna núna: sjá [Teikna veggi](topic:draw-walls). Hurðir, gluggar, gólf og þök eru næst á dagskrá.
:::

## Skref

1. Smelltu á {{ui:Ný bygging}} undir **Opna skrá eða möppu**, eða á upphafssíðunni.
2. Skrifaðu **Heiti byggingar**.
3. Veldu hversu marga **Kóta** hún hefur (1 til 200).
4. Skrifaðu **Kótahæð**, frá gólfi til gólfs: til dæmis `10'-0"`, `10'6"` eða `3000 mm`. Venjuleg tala er fet í Bandaríkjunum, millimetrar annars staðar.
5. Hver reitur er þegar fylltur út, svo þú mátt skilja þá alla eftir eins og þeir eru. Fyrir neðan þá segir kassinn hvað þú byrjar með: einingarnar, **Veggtegundina** sem veggtólið teiknar fyrst (veldu aðra af listanum ef þú vilt) og fyrsta blaðið.
6. Smelltu á {{ui:Búa til}}. Kótarnir eru settir upp frá 0, hver einni kótahæð ofar en sá síðasti, og heita Kóti 1, Kóti 2 og svo framvegis. Þeir birtast í {{ui:Líkantré}}, og grunnmynd af Kóti 1 opnast við hlið 3D-sýnarinnar með {{ui:Teikna}} kveikt.
7. Teiknaðu veggina: smelltu á {{ui:Veggur}} og tvo punkta. Sjá [Teikna veggi](topic:draw-walls). Endurnefndu kóta eða breyttu hæðum þeirra í spjaldinu **Kótar**.
8. Settu hluti inn: sjá [Setja búnað og húsgögn inn úr safninu](topic:place-from-library). Staðsetningastikan listar alla kótana.
9. Smelltu á {{ui:Vista sem IFC}}. Skráin fær nafn byggingarinnar, til dæmis `Smith's house.ifc`.

## Gott að vita

- Líkanið er vistað í millimetrum, sem IFC4. Önnur BIM-forrit opna það.
- Ný bygging fylgir með einu blaði, **A-101**, sem heldur grunnmynd lægsta kótans: A3 í 1:100 þegar unnið er í metrakerfi, Tabloid í 1/8" = 1'-0" annars. Það er autt þangað til fyrsti veggurinn er teiknaður og sýnir þá grunnmyndina eins og þú teiknar hana. Opnaðu það undir **Blöð** í verkefnavafranum til að breyta pappír þess, mælikvarða eða titli, bæta við sýnum eða eyða því. Bygging sem er byrjuð úr sniðmáti fær blöð sniðmátsins í staðinn.
- Til að breyta því sem hver ný bygging byrjar með (veggtegundinni fyrir metrísk verkefni, kótunum, fyrsta blaðinu og verkfærinu sem er virkt eftir Búa til), sjá [Sjálfgefnar stillingar](topic:default-policies).
- Ekkert þarf að setja upp áður en fyrsti veggurinn er teiknaður. Veggtegundina, kótahæðirnar, einingarnar og blaðið má allt breyta síðar.
- **Hæðir** í vinstra spjaldinu lista aðeins kóta sem hafa eitthvað á sér; {{ui:Líkantré}} listar þá alla.
- Þangað til þú vistar telst nýja byggingin óvistuð vinna. BimCraft spyr áður en þú opnar aðra skrá eða ferð, og geymir afrit í þessum vafra ef flipinn lokast.
