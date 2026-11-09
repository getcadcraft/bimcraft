---
title: Byrjun með BimCraft
summary: Hvað BimCraft gerir núna, hvernig þú opnar fyrsta líkanið, skoðar það í þrívídd, breytir einu gildi og vistar afrit.
keywords: byrjun, fyrsta keyrsla, opna, ifc, rvt, dwg, fljótleg byrjun, inngangur, skoðari, bim
from: fc2dea19
---

BimCraft er byggingarlíkanaforritið í CadCraft-fjölskyldunni. Í þessari útgáfu **opnar, les og skoðar** það byggingarskrár, og það **breytir gögnum í IFC-líkönum**. Það teiknar eða mótar ekki nýja hluti ennþá. Hugsaðu um það sem skoðara og yfirferðartól fyrir líkön, sem leyfir þér líka að leiðrétta heiti, merki og eiginleikagildi í IFC-skrá.

Það sem það opnar:

| Skrá | Það sem þú færð |
|---|---|
| IFC (`.ifc`) | Allt líkanið í þrívídd: snúningur, hæðir, eiginleikar hluta og breytingar á heitum og eiginleikagildum |
| Verkefnis- og fjölskylduskrár (`.rvt`, `.rfa`, `.rte`, `.rft`) | Skráarspjald: útgáfan sem hún var vistuð í, verkupplýsingar, forskoðunarmynd og tengdar skrár. Engin þrívídd. |
| DWG og DXF | Teikningin í 2D: líkanrými og hvert blað, lög, tengdar teikningar, prentsýn og búnaðarlisti fyrir merktar teikningar veitingaeldhúsa |
| Verkefnamappa | Skýrsla um hvert líkan í möppunni: öryggisafrit, tenglar, skemmd afrit og tillaga um hvaða skrá á að byrja með |

Allt gerist í vafranum þínum, á tölvunni þinni. **Engu er hlaðið upp.** Sjá [Skrár sem BimCraft opnar og vistar](topic:files) til frekari upplýsinga.

## Opna BimCraft

1. Opnaðu BimCraft í nýlegum vafra. Chrome, Edge, Firefox og Safari virka öll; [Vafrar, tæki og minni](topic:platforms) listar muninn.
2. Bíddu eftir auða skjánum sem segir „Opnaðu líkan af byggingu.“

:::note
BimCraft keyrir í vafranum, og á skjáborðinu inni í CadCraft Studio, með hinum forritunum. Vistun í skýinu er ekki í boði ennþá: þú opnar skrár úr tölvunni þinni og vistar afrit aftur á hana.
:::

## Opna fyrsta líkanið

Fljótlegasta leiðin til að sjá hvað BimCraft gerir er IFC-skrá.

1. Smelltu á {{ui:Veldu skrá}} í miðju skjásins.
2. Veldu `.ifc`-skrá í {{pick:mac=Finder|windows=Skráarkönnuður|linux=skráastjórinn þinn}} og staðfestu.
3. Bíddu meðan stöðulínan neðst á skjánum segir „Ræsi IFC-vélina…“ og svo „Smíða rúmfræði“.

Þú ættir að sjá líkanið í þrívídd í miðjunni, reitinn {{ui:Skrá}} og listann {{ui:Hæðir}} vinstra megin, og tóman reitinn {{ui:Eiginleikar}} hægra megin. Stöðulínan endar á „Opnað“ og fjölda hluta.

:::tip
Þú getur líka dregið skrá úr {{pick:mac=Finder|windows=Skráarkönnuður|linux=skráastjórinn þinn}} beint inn á síðuna. Skjárinn sýnir „Slepptu til að opna“ meðan þú dregur.
:::

:::offline
IFC-vélin hleðst af vefnum í fyrsta skipti sem þú opnar IFC-líkan, nema BimCraft hafi verið vistað til notkunar án nettengingar. DWG- og DXF-teikningar, verkefnaskrár og möppur þurfa ekkert aukalega: lesararnir þeirra eru hluti af forritinu. Ef hnappurinn á forritastikunni segir {{ui:Tilbúið án nettengingar}}, opnast allt án nettengingar. Ef ekki, opnast IFC-líkön ekki fyrr en þú tengist aftur, nema eitt slíkt hafi þegar verið opnað í þessum flipa. Sjá [Á netinu og án nettengingar](topic:online-offline).
:::

:::online
Ertu á leiðinni eitthvað án tengingar? Smelltu á {{ui:Vista til notkunar án nettengingar}} á forritastikunni og bíddu eftir {{ui:Tilbúið án nettengingar}}. Vistaða afritið (um 11 MB) inniheldur IFC-vélina. Sjá [Vinna án nettengingar](common:offline).
:::

## Líttu í kringum þig

:::mouse
1. Dragðu með vinstri músarhnappi til að snúa um líkanið.
2. Skrunaðu með hjólinu til að þysja.
3. Dragðu með hægri músarhnappi til að hliðra. Á Mac-snertiborði skaltu halda inni {{key:Shift}} og draga í staðinn.
4. Ýttu á {{key:F}} eða smelltu á {{ui:Passa}} til að sjá allt líkanið aftur.
:::

:::touch
1. Dragðu með einum fingri til að snúa.
2. Klíptu með tveimur fingrum til að þysja, og færðu tvo fingur saman til að hliðra.
3. Pikkaðu á {{ui:Passa}} til að sjá allt líkanið aftur.
:::

## Gerðu eitt raunverulegt: lagfærðu merki

1. Smelltu á vegg, hurð eða annan hluta í líkaninu. Hann verður blár og eiginleikar hans birtast hægra megin.
2. Í reitnum {{ui:Eiginleikar}} smelltu á gildið við hliðina á **Merki**.
3. Skrifaðu nýja merkið og ýttu á {{key:Enter}}.
4. Skoðaðu hlutann {{ui:Breytingar}} sem opnaðist vinstra megin: breytingin þín er skráð með gamla og nýja gildinu.

## Vista afrit

1. Smelltu á {{ui:Vista sem IFC}} í hlutanum {{ui:Breytingar}}, eða ýttu á {{key:Mod+S}}.
2. Finndu nýju skrána í niðurhalsmöppunni. Hún er nefnd eftir upprunalegu skránni með „ (edited)“ bætt við, til dæmis `Clinic (edited).ifc`.

Upprunalega skráin er aldrei breytt. [Breyta eiginleikum IFC og vista breytt afrit](topic:edit-ifc-properties) útskýrir breytingar í heild.

## Næst

- [Skjár BimCraft](topic:workspace): hvert spjald með nafni.
- [Fyrir þá sem koma úr öðrum BIM- og teikniforritum](topic:coming-from): hvað er öðruvísi ef þú ert vanur Revit.
- [Opna alla verkefnamöppuna](topic:open-project-folder): beindu BimCraft að verkefnamöppu og láttu það raða skránum.
- [Skoða DWG- eða DXF-teikningu](topic:view-dwg): blöð, lög og prentsýn.
