---
title: Flytja líkanið út sem Collada eða fyrir Google Earth
summary: Skrifaðu opnu IFC-líkönin sem Collada-skrá (.dae) fyrir Blender og önnur þrívíddarforrit, eða sem Google Earth pakka (.kmz) staðsettan þar sem líkanið er á kortinu.
keywords: collada, dae, kmz, kml, google earth, blender, útflutningur, landstaðsetning, landtenging, breiddargráða, lengdargráða, staðsetning, þrívíddarforrit
from: 81cfec09
---

{{ui:Collada}} á verkfæraslánni (eða {{ui:Flytja út Collada (.dae, .kmz)…}} í {{ui:Skrá}}-valmyndinni í valmynda- og borðastílunum) skrifar það sem er opið sem Collada 1.4.1: sérhvert líkan sem er sýnt, þar með talin tengd líkön þar sem þú settir þau.

## Flytja út

1. Veldu {{ui:Collada}}.
2. Veldu sniðið:
   - {{ui:Collada file (.dae), for Blender and other 3D programs}}.
   - {{ui:Google Earth package (.kmz): the model placed where it is on the map}}. Aðeins í boði þegar líkanið hefur staðsetningu.
3. Veldu valkostina, síðan {{ui:Flytja út}}. Skráin sækist, og stöðustikan segir hversu mörg atriði fóru inn.

| Valkostur | Hvað hann gerir |
|---|---|
| {{ui:Write the location into the file}} | Bætir breiddargráðu, lengdargráðu, hæð og stefnu upphafspunkts skrárinnar við .dae |
| {{ui:Hæð}} | {{ui:On the ground: the model’s level 0 sits on the terrain}}, eða {{ui:The model’s own height above sea level}} |
| {{ui:Include rooms and spaces}} | Rými fara líka inn (þau eru skilin eftir sjálfgefið) |
| {{ui:Include hidden elements}} | Hlutir sem þú faldir eru skrifaðir líka (sjálfgefið er aðeins það sem þú sérð skrifað) |

## Hvað er í skránni

| Í líkaninu | Í Collada-skránni |
|---|---|
| Bygging, hæðir | Hreiðraðir hnútar, hæðir í röð eftir kóta; hlutir á engri hæð undir "Unplaced" |
| Sérhver hlutur | Einn hnútur með eigið net, nefndur eins og í líkaninu (heiti hans, annars flokkur hans og merki) |
| Flokkur, GlobalId, fyrirfram skilgreind gerð | Í viðbótargögnum hnútsins (snið IFC), með nákvæmu heiti (snið ModelCraft) |
| Litir | Efni, með gegnsæi |
| Einingar og ásar | Metrar, Z upp. Kóti 0 líkansins sem er fremst er í hæð 0 |

Líkanið helst nálægt upphafspunktinum á landinu, þannig að forrit sem vinna með einfalda nákvæmni sýna það án skjálfta. ModelCraft skrifar Collada-skrár sínar með sama skrifara og opnar þessar skrár með heitum hlutanna.

## Hvaðan staðsetningin kemur

Líkanið sem er fremst gefur staðsetninguna, á sama hátt og {{ui:Mæla}} reiknar út breiddar- og lengdargráðu punkts:

- Kortabreyting (IFC4 IfcMapConversion, eða IFC2X3 eiginleikasettin) í gegnum hnitakerfi líkansins. Kerfi sem þú valdir fyrir líkanið gengur framar því sem skráin nefnir.
- Annars breiddar- og lengdargráða lóðarinnar (áætluð: nægjanleg yfir lóð).

Stefnan er mæld, ekki gefin fyrir fram: tekið er tillit til snúnings kortsins, réttvísandi norðurs og samleitni kortsins. Til að gefa líkani staðsetningu, notaðu {{ui:Upphafspunktur á korti…}} undir {{ui:Mæla}}.

## Í öðrum forritum

- **Google Earth** les .kmz-skrána: líkanið birtist á staðsetningunni, snúið í norður. Venjuleg .dae-skrá hefur ekki stað sem Google Earth les staðsetningu úr; notaðu .kmz.
- **Blender** (4.x og eldri): File, Import, Collada (.dae). Hver hlutur kemur inn sem sinn eigin hlutur með sínu efni. Staðsetningin er geymd í viðbótargögnum skrárinnar, sem Blender les ekki. Blender 5.0 hætti með innbyggðan Collada-innflutning sinn; þar notaðu {{ui:USD}} eða glTF-útflutninginn í staðinn, eða opnaðu .dae-skrána í Blender 4.5 og vistaðu sem .blend.

Prófanir okkar athuga hverja skrá gegn Collada 1.4.1-skemunni og lesa hana aftur með óháðum Collada-lesara. Þær hafa ekki opnað hana í Blender eða Google Earth.
