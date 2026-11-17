---
title: Tengja önnur líkön til samræmingar
summary: Sýndu annað IFC-líkan við hliðina á þínu með tilvísun (aldrei sameinað), staðsettu það eftir sameiginlegum hnitum, kortahnitum eða tveimur punktum, smelltu á það við teikningu og endurhladdu það þegar skráin breytist.
keywords: tengja, tengt líkan, tilvísun, xref, samræming, samtenging, burðarvirki, MEP, ráðgjafi, sameiginleg hnit, mæling, kortahnit, endurhlaða, losa, skjalatilvísun, IfcDocumentReference
from: 3e0f1eab
---

## Hvað þú gerir

Teiknaðu við líkan ráðgjafa (burðarvirkið, lagnirnar, núverandi bygginguna) án þess að afrita nokkurs í þína skrá.

**Tengt líkan** er sýnt í þrívíddarsýninni og skorið á grunnmyndunum, en það er aldrei breytt og aldrei vistað í þínu líkani. Líkanið þitt geymir aðeins tengilinn: nafn skrárinnar og hvar hún er staðsett.

## Tengja líkan

1. Í vinstri spjaldinu, hlutanum {{ui:Tengd líkön}}, smelltu á {{ui:Tengja líkan…}} og veldu IFC-skrána. Hún birtist strax og röðin hennar segir **Sýnt**.
2. Veldu hvar hún er staðsett í {{ui:Staðsetning}}:
   - **Sameiginleg hnit** (til að byrja með): hnit hennar eru þín, eins og þegar bæði líkönin voru mæld út frá sama upphafspunkti.
   - **Kortahnit**: kortahnit beggja skránna samræma þau. Báðar þurfa kortaumbreytingu; BimCraft segir til um það ef önnur hefur enga.
   - **Eftir tveimur punktum…**: smelltu á punkt á tengda líkaninu og síðan á hvar hann á að vera í þínu líkani; svo annað par. Tengillinn er færður og snúinn (um lóðrétta ásinn) til að passa.
3. Hver breyting á tengli og staðsetningu er eitt skref: {{key:Mod+Z}} afturkallar hana.

## Vinna með það

- Grunnmyndirnar sýna tengda líkanið skorið á skurðarhæð hæðarinnar sem þunnar línur, og {{ui:Veggur}}-tólið og önnur teiknitól smella á horn þess og brúnir.
- Veldu hluti þess í þrívíddarsýninni til að lesa eiginleika þeirra. Tengt líkan er aldrei það sem þú breytir, þannig að útvarpshnappur þess í {{ui:Líkön}} er óvirkur.
- **Skráin breyttist?** Þegar vafrinn getur fylgst með skránni (skrá sem var opnuð í gegnum skráarvalið, eða í Studio), endurhleður BimCraft tenglinum sjálfkrafa nokkrum sekúndum eftir að skráin er vistuð aftur, og segir frá því. Annars smelltu á {{ui:Endurhlaða}}.
- {{ui:Losa}} felur tengilinn og losar minnið; tengillinn helst í líkaninu þínu. {{ui:Hlaða…}} sýnir hann aftur (þú velur skrána, því vafri getur ekki opnað skrá eftir nafni af sjálfsdáðum).
- Krossinn × fjarlægir tengilinn úr líkaninu þínu.

## Hvað þú ættir að sjá

- Í IFC-skránni þinni: IfcDocumentReference fyrir hvern tengil (nafn skrárinnar), tengt verkefninu, og hvar hún er staðsett í eiginleikasafni verkefnisins CadCraft_Links. Þegar þú opnar líkanið aftur sýnir það tenglana þína sem **Ekki hlaðið** þar til þú hleður þeim.

:::note
Árekstrarathuganir, Bera saman og Finna geta notað hlaðinn tengil eins og hvert annað opið líkan: sjá [Skoða nokkur IFC-líkön saman](topic:several-models).
:::
