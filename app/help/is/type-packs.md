---
title: Gerðarpakkar: deildu veggjagerðum sem opnum skrám
summary: Vistaðu veggjagerðir með lögum, efnum, merkjum og flokkunarkóðum, ásamt fjölskyldum, sem eina opna skrá (venjulegan JSON-texta eða IFC), og bættu þeim við annað verkefni. Veggjagerðir úr IFC-skrá frá öðru forriti er líka hægt að lesa.
keywords: gerðarpakki, gerðir, veggjagerð, deila, útflutningur, innflutningur, safn, opið snið, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, efni, lög, sniðmát, skrifstofustaðall, fjölskyldur
from: e4c91331
---

## Það sem þú gerir

Berðu veggjagerðir þínar milli verkefna, eða afhentu þær einhverjum sem vinnur í öðru forriti. Gerðarpakki geymir hverja veggjagerð með lögum sínum, þykktum, efnum, kjarna, holrýmum, forgangi laga, þróunarstigi, magnatökugögnum og flokkunarkóðum, og allar fjölskyldur sem þú bætir við. Hann er opin skrá: venjulegur JSON-texti sem hver sem er getur lesið, eða IFC-skrá. Ekkert í honum er bundið við fyrirtæki, land eða aðgang.

## Vista gerðir úr verkefni

1. Opnaðu **Gögn** á líkanastikunni og veldu {{ui:Gerðarpakkar}}.
2. Undir {{ui:Vista gerðir úr þessu verkefni}}, hakaðu við veggjagerðirnar sem eiga að fara með. Gerðir verkefnisins eru hakaðar sjálfgefið; upphafsgerð má bæta við og fer með sem afrit. Hakaðu við fjölskyldur ef þú vilt hafa þær með.
3. Skrifaðu {{ui:Heiti pakka}}.
4. {{ui:Vista sem pakka (.json)}} hleður niður `.cctypes.json`-skrá. {{ui:Vista sem IFC (.ifc)}} hleður niður IFC-skrá sem geymir aðeins gerðir: hverja veggjagerð sem IfcWallType með efnislagasettinu, efnum og flokkun sinni, fyrir hvaða BIM-forrit sem er.

## Bæta gerðum við verkefni

1. Í sama glugga, veldu {{ui:Opna pakka eða IFC-skrá…}} og veldu `.json`-pakka eða `.ifc`-skrá.
2. Glugginn telur upp það sem skráin geymir: hverja veggjagerð með þykkt sinni, fjölda laga og kóðum, efnin og fjölskyldurnar.
3. Veldu hvað gerist við {{ui:Gerð sem þetta verkefni hefur nú þegar}}: **Halda gerð verkefnisins**, **Bæta pakkans við sem afriti** (fær nýtt heiti sem endar á „(2)"), eða **Skipta út (aðeins þegar enginn veggur notar hana)**.
4. {{ui:Bæta í verkefnið}}. Glugginn telur upp hvað var bætt við, afritað, skipt út eða haldið eftir. Það er eitt afturköllunarskref.

Nýju gerðirnar birtast í gerðalista veggjaverkfærisins strax.

## Gólf-, þak- og loftgerðir

Listinn yfir gerðir til að vista geymir einnig gólf-, þak- og loftgerðir verkefnisins og upphafsgerðir þeirra (merktar Gólf, Þak, Loft). Pakki getur borið allar fjórar tegundirnar; hver gerð nefnir sinn IFC-flokk (IfcWallType, IfcSlabType, IfcCoveringType). Gólf-, þak- eða loftgerð sem einingar nota er ekki skipt út úr pakka: breyttu henni í gerðaritlinum.

## Ein gerð sem safnsatriði

Veldu nákvæmlega eina gerð og veldu **Vista sem safnsatriði…**. Það vistar `.cctype.json`-skrá: safnsatriði af gerðaflokki sem geymir þá einu gerð (lög, efni, þróunarstig og flokkunarkóða). Hladdu henni upp í Safnið til að deila henni. **Opna pakka eða IFC-skrá** les slíkt safnsatriði líka og bætir gerðinni við verkefnið eins og pakka.

## Gott að vita

- IFC-skrá frá öðru forriti er líka hægt að opna hér. Hver veggjagerð hennar sem hefur efnislög er lesin: heitið, efni laganna, þykktir, og holrými eru skráarinnar eigin. Hvaða lög eru kjarninn og hvað hvert lag gerir (frágangur, burðarvirki, einangrun) er giskað, gerðin er merkt **(giskað)**, og þú ættir að athuga hana í ritlinum fyrir veggjagerðir. Veggjagerð án laga er skilin eftir og nefnd.
- Efni sem verkefnið hefur þegar er geymt eins og það er. Nýtt efni þar sem heitið er þegar í notkun fær „(pakki)" aftan við heitið.
- Gerð sem veggir nota er aldrei skipt út úr pakka. Breyttu henni í ritlinum fyrir veggjagerðir, sem færir veggi hennar rétt.
- Kóði sem stilltur er á einum vegg ferðast ekki: hann tilheyrir þeim vegg. Kóði sem stilltur er á gerðina gerir það.
- Skrá með reit sem sniðið hefur ekki, lagi sem efnið vantar, eða einhverju sem er ekki venjulegur texti er hafnað, og skilaboðin segja hvar og af hverju.
- Ekki smíðað ennþá: gólf-, þak- og loftgerðir (þær hafa ekki gerðir í þessari útgáfu: hver hefur sína þykkt), hurða- og gluggagerðir aðrar en fjölskyldur, og skyggingar eða litir úr skrá annars forrits.
