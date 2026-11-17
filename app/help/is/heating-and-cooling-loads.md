---
title: Áætla hita- og kæliálag
summary: Varmatap hvers herbergis, hitun yfir ár eftir gráðudögum og kæliálagstopp þess, úr því sem afmarkar það í líkaninu og U-gildi hvers hluta, með öllum inntökum sýndum. Hönnunarhjálp, ekki samræmisútreikningur.
keywords: orka, hitun, kæling, varmatap, hitaálag, kæliálag, U-gildi, varmaleiðni, gráðudagar, hdd, loftræsting, loftskipti, innri hitagjafar, sólarhitun, lambda, leiðnistuðull, einangrun, snemmhönnun, greining, herbergi, rými
from: ec312d20
---

Í flipanum {{ui:Dagsbirta}}, eftir {{ui:Reikna}}, opnaðu {{ui:Hita- og kældarálag}} og smelltu á {{ui:Reikna álagið}}. Hvert herbergi fær **varmatap** sitt á kaldan hönnunardag, **hitun yfir ár** og **kæliálagstopp** sitt á heitum degi. Ekkert er sent upp; ekkert breytist í líkaninu nema þú slærð inn U-gildi.

:::warning
Þetta er **hönnunarhjálp, ekki samræmisútreikningur**: áætlun í stöðugu ástandi með öllum inntökum á skjánum. Það er **ekki** ISO 52016-1 aðferðin, ekki hermun og ekki orkuvottorð; það mælir ekki stærð katla, varmadæla né kæliverkja. Yfirfarðu niðurstöður og ákvarðaðu stærð búnaðar með verkfræðingi.
:::

## Hvað afmarkar hvert herbergi

BimCraft finnur það í líkaninu sjálfu, svo IFC frá hvaða forriti sem er virkar (það þarf ekki rýmismörkin sem sum forrit flytja út). Frá hverjum bita af yfirborði hvers herbergis horfir það beint út:

- fyrsti veggur, gluggi, hurð, gólf, þak, klæðning, gluggatjaldsveggur eða bitinn sem það mætir **afmarkar** þann bita;
- rétt handan þess hlutar annaðhvort **annað herbergi** (talið sem næsta herbergi, við sama hitastig: ekkert tap), **ekkert** (úti), eða, undir gólfi á lægstu hæð, **jörðin**;
- opin dyragöng inn í annað herbergi teljast næsta herbergi; bútur sem mætir engu (innan 1.5 m til hliðar eða niður, 8 m upp) er skráður undir herberginu og látinn vera utan útreiknings.

Gluggar og hurðir fá eigin stærð úr IFC (heildarbreidd × hæð) úr veggnum sem þær sitja í. Smelltu á herbergi í töflunni til að sjá alla hluti sem afmarka það með flatarmáli sínu, U-gildi og hvaðan U-gildið kemur.

## U-gildi

Fyrir hvern hlut sem BimCraft notar, í þessari röð:

1. **U-gildi IFC-skrárinnar sjálfrar** — `ThermalTransmittance` í sameiginlega eiginleikasetti hlutarins (til dæmis `Pset_WallCommon`) eða í gerð hans. Flest hönnunarforrit geta skrifað það.
2. **Lög efnisins** — 1 ÷ (yfirborðsviðnám innan + þykkt hvers lags ÷ leiðni þess λ + yfirborðsviðnám utan), með venjulegum yfirborðsviðnámum (0.13 og 0.04 m²K/W fyrir veggi; 0.10 upp á við, 0.17 niður á við innan). Algengar leiðnistuðlar til að byrja með (steinull 0.035, múrsteinn 0.77, steinsteypa 1.4…); undir {{ui:Leiðni efna}} skaltu slá inn gildi framleiðandans og öll U-gildi út frá þessum lögum fylgja.
3. **Dæmigert gildi** (veggir 0.3, þök 0.2, gólf 0.25, gluggar 1.4, hurðir 1.6 W/m²K), merkt sem slíkt — sláðu inn þitt eigið.

U-gildi sem slegið er inn í upplýsingar herbergis er skrifað í sameiginlega eiginleikasett hlutarins sem `ThermalTransmittance` (eitt skref; {{key:Mod+Z}} afturkallar það). Ef nokkrir hlutir deila því setti (til dæmis ein veggtegund), breytast þeir allir saman og stöðulínan segir hversu margir.

## Hitun

- **Varmatap** = Σ U × A × (innan − utan) fyrir allt sem snýr út + Σ U × A × (innan − jörð) fyrir gólf á jörðu + 0.335 × loftskipti á klukkustund × rúmmál herbergisins × (innan − utan). 0.335 Wh á m³ á kelvin er eðlismassi lofts (1.2 kg/m³) margfaldaður með varmarýmd þess (1005 J/kgK).
- **Hitun yfir ár** = (tap herbergisins á hverja gráðu út, um byggingarhlutana og loftið, auk jarðtaps þess skalað að sama mismun) × **gráðudagarnir** × 24 ÷ 1000, í kWh. Sláðu inn gráðudagana fyrir staðinn, eða {{ui:Lesa gráðudaga úr CSV…}} (ein röð á dag eða mánuð; síðasta talan í hverri röð er lögð saman). Notaðu gráðudaga miðað við grunnhitastigið sem heimildin notar: sá grunnur tekur nú þegar tillit til ókeypis varma frá fólki, ljósum og sólinni.

## Kæling

**Kæliálagstoppurinn** = hitinn um byggingarhlutana og loftið við sumarhönnunarhitastigið + fólk (gólfflötur á mann × varmi á mann) + lýsing og búnaður á m² gólfflatar + **sólin**: toppurinn af {{ui:Sól í gegnum glugga á dagsetningu}} fyrir það herbergi. Reiknaðu sólina fyrst, á heitum degi; þangað til telur sólin 0 og kaflinn segir það. Toppur hvers hluta er lagður saman þótt þeir falli á mismunandi klukkustundir, sem ofmetur örlítið.

## Það sem er ekki með

- ISO 52016-1 mánaðar- og klukkustundaraðferðirnar (greiddur staðall), varmi sem geymdur er í efnismassa byggingarinnar, kuldabrýr, hvernig hita- og kælikerfi virka, og veðurskrár.
- Herbergi hlið við hlið eru tekin við sama hitastig; óhituð rými eru ekki líkt eftir.

Sjá einnig [Áætla dagsbirtu í hverju herbergi](topic:daylight-factor).
