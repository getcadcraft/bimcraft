---
title: Lifandi sýn
summary: Spjald við hliðina á líkaninu sem sýnir það í rauntímaútliti, með sól, skuggum og endurkastsljósi, og fylgir hverri breytingu sem þú gerir. Gakktu um það og stilltu tíma dags og mánuð.
keywords: lifandi sýn, rauntími, rauntímamyndgerð, gönguferð, ganga, fyrstu persónu, kynning, viðskiptavinur, annar skjár, annar gluggi, skjár, tími dags, sól, árstíð, mánuður, skuggar, umhverfisskygging, speglanir, endurkastsljós, global illumination, WebGPU, WebGL
from: ea5c02bf
---

Lifandi sýn sýnir líkanið í rauntímaútliti: himininn og sólina frá staðsetningu og dagsetningu lóðarinnar, skugga sólarinnar, málningu og efni sem þú gafst frumefnunum, lampa og ljós sem endurkastast af veggjum og gólfum. Hún fylgir því sem þú gerir: snýrð þú þrívíddarsýninni snýst hún líka, breytir þú líkaninu sýnir hún breytinguna augnabliki síðar. Ekkert er hlaðið upp.

Hún teiknar sömu senu, málningu, lampa og sól og [Myndgerð](topic:render). Fyrir fullgerða mynd notaðu hana.

## Opna hana

1. Opnaðu líkan og veldu {{ui:Lifandi sýn}} á tækjastikunni. Spjaldið opnast yfir forritinu, neðst til hægri.
2. Dragðu titilstikuna til að færa það og togaðu í hornið til að stækka það.
3. {{ui:Lifandi sýn í nýjum glugga}} (hnappurinn við hliðina) eða {{ui:Nýr gluggi}} í spjaldinu færir það í sinn eigin glugga, fyrir annan skjá. Ef vafrinn lokar sprettigluggum opnast það sem spjald.
4. {{ui:Loka}} lokar því.

## Stýringarnar

| Stýring | Hvað hún gerir |
|---|---|
| {{ui:Fylgja sýninni}} | Kveikt: lifandi sýnin horfir þangað sem þrívíddarsýnin horfir. Gangur slekkur á því |
| {{ui:Ganga}} | Gakktu í gegnum líkanið (sjá hér að neðan) |
| {{ui:Þyngdarafl}} | Meðan gengið er: stattu á gólfum og klifraðu stiga. Slökkt: fljúga |
| {{ui:Tími}} | Klukkustund dagsins. Sólin færist þegar þú dregur |
| {{ui:Mánuður}} | Mánuðurinn, svo þú sjáir sólina að vetri og sumri |
| {{ui:Gæði}} | {{ui:Fyrir þessa tölvu}}, eða {{ui:Lágt}}, {{ui:Miðlungs}} eða {{ui:Hátt}} |

Línan neðst segir hvað teiknar sýnina (WebGPU eða WebGL 2), gæðin og endurkastsljósið.

## Ganga í gegnum líkanið

1. Snúðu þrívíddarsýninni þangað sem þú vilt standa og veldu {{ui:Ganga}}. Þú stendur á gólfinu undir augnpunkti sýnarinnar, 1,6 m á hæð.
2. Smelltu á lifandi sýnina og notaðu síðan {{key:W}} {{key:A}} {{key:S}} {{key:D}} eða örvatakkana. Haltu {{key:Shift}} inni til að hlaupa. Dragðu til að líta í kringum þig.
3. Þrep upp að 40 cm eru klifruð (stigar). Allt sem er hærra er veggur. Veggir stöðva þig og þú rennur meðfram þeim.
4. Með {{ui:Þyngdarafl}} slökkt flýgurðu: {{key:E}} fer upp, {{key:Q}} niður.
5. {{key:Esc}} hættir göngu.

## Endurkastsljós

Ljós sem endurkastast af sólbjörtum vegg á gólfið, og dekkri innhlutinn í herbergi, er reiknað í bakgrunni á öllum örgjörvakjörnum. Meðan það vinnur segir neðsta línan {{ui:Endurkastsljós: 40 %}}; þegar það er tilbúið tekur sýnin það inn. Eftir breytingu byrjar það upp á nýtt.

:::note
Þetta er nálgun fyrir lifandi sýn, ekki fullgerð mynd: smáatriði milli punktanna fá endurkastsljósið frá nálægum punktum.
:::

:::note
Vafrar eru ólíkir. Þar sem vafrinn hefur WebGPU notar lifandi sýnin það. Annars notar hún WebGL 2 og lítur eins út. Með hvorugu segir spjaldið það.
:::
