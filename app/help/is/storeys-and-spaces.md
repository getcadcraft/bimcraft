---
title: Sýna og fela hæðir, rými og brúnir
summary: Slökktu á hæðum til að sjá inn í byggingu, sýndu herbergi og rými og kveiktu og slökktu á brúnalínunum.
keywords: hæðir, kótar, gólf, fela, einangra, herbergi, rými, ifcspace, brúnir, sýnileiki, snið
from: b838dcc0
---

## Það sem þú gerir

Skoðaðu IFC-líkan að innan með því að slökkva á hæðunum fyrir ofan þá sem þú hefur áhuga á, sýndu síðan herbergi og rými, og slökktu á brúnalínunum fyrir hreinna útlit.

## Skref: skoða eina hæð

1. Opnaðu IFC-líkan. Sjá [Opna IFC-líkan og skoða í 3D](topic:open-ifc-model).
2. Finndu listann {{ui:Hæðir}} til vinstri. Efsta hæðin er fyrst, eins og þegar lesið er snið frá þakinu niður.
3. Taktu hakið úr þakinu og öllum hæðum fyrir ofan gólfið sem þú vilt.
4. Smelltu á {{ui:Ofan}} til að horfa niður á þá hæð.
5. Merktu aftur við hæðirnar til að setja þær til baka.

## Það sem þú átt að sjá

Hver hæð sem þú tekur hakið úr hverfur strax, ásamt öllu sem er á henni. Listinn sýnir aðeins hæðir sem hafa eitthvað sýnilegt. Hlutir sem eru ekki settir á neina hæð eru flokkaðir sem **Ekki á hæð** neðst; lóðarhlutir og sumt húsgögn lenda þar oft.

## Skref: sýna herbergi og rými

1. Smelltu á {{ui:Rými}} á tækjastikunni fyrir ofan líkanið. Hnappurinn helst niðurþrýstur.
2. Skoðaðu líkanið: herbergi og rými birtast sem ljósir, gegnsæir rúmmálshlutir.
3. Smelltu á rými til að lesa eiginleika þess, eins og heiti, númer og flatarmál, hægra megin.
4. Smelltu aftur á {{ui:Rými}} til að fela þau.

Rými eru falin þegar líkan opnast, því annars myndu þau hylja veggi og gólf.

## Skref: brúnir

1. Smelltu á {{ui:Brúnir}} til að slökkva á þunnu brúnalínunum.
2. Smelltu aftur til að kveikja á þeim.

Á mjög stórum líkönum (yfir 1,5 milljón þríhyrninga) er hnappurinn grár með ábendingunni „Brúnir eru slökktar fyrir mjög stór líkön“. Þetta sparar minni.

## Algeng mistök

- **Taka hakið úr hæð og sjá samt hluta af henni.** Frumefni tilheyrir þeirri hæð sem útflutningsforritið úthlutaði því. Hár veggur eða stigi tilheyrir oft aðeins grunnhæð sinni, svo hann helst þegar hæðin fyrir ofan er falin, eða hverfur með hæðinni fyrir neðan.
- **Fela hæðir til að sjá inn.** Skurðarkassi er oft fljótlegri: sjá [Skera IFC-líkan með sniðfleti](topic:section-plane#a-section-box). Þú getur líka tekið hakið úr línum í {{ui:Líkantré}} (sjá [Rata um líkantréð](topic:model-tree)).
- **Smella á rými í gegnum vegg.** Smellt er á næsta sýnilega yfirborð. Felddu hæðina fyrir ofan, eða skiptu yfir í {{ui:Ofan}}, og smelltu síðan.
- **Heiti hæða líta undarlega út.** BimCraft sýnir heiti hæðanna sem eru vistuð í skránni. Ef þau segja „Level 1“ eða tölu, þá er það sem útflutningsforritið skrifaði.
