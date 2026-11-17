---
title: Kalkulahin ang heating at cooling load
summary: Ang heat loss ng bawat silid, ang heating nito sa buong taon ayon sa degree-day, at ang cooling peak nito, mula sa mga hangganan nito sa model at sa U-value ng bawat element, na may nakikita ang bawat input. Design aid ito, hindi compliance calculation.
keywords: enerhiya, heating, cooling, heat loss, heat load, cooling load, u-value, thermal transmittance, degree-days, hdd, bentilasyon, air changes, internal gains, solar gain, lambda, conductivity, insulation, early design, analysis, mga silid, mga space
from: ec312d20
---

Sa tab na {{ui:Daylight}}, pagkatapos ng {{ui:Calculate}}, buksan ang {{ui:Mga load ng pagpainit at paglamig}} at i-click ang {{ui:Kalkulahin ang mga load}}. Bawat silid ay makakakuha ng **heat loss** nito sa malamig na design day, ang **heating sa buong taon** nito, at ang **cooling peak** nito sa mainit na araw. Walang ina-upload; walang nagbabago sa model maliban kung mag-type ka ng U-value.

:::warning
Ito ay **design aid, hindi compliance calculation**: estimate na steady-state na may bawat input na nasa screen. **Hindi** ito ang ISO 52016-1 method, hindi simulation at hindi energy certificate; hindi nito sinusukat ang boiler, heat pump o chiller. Suriin ang mga resulta, at sukatin ang kagamitan, kasama ang isang engineer.
:::

## Ano ang bumubuo sa bawat silid

Hinahanap ito ng BimCraft sa mismong model, kaya gumagana ang IFC ng anumang program (hindi nito kailangan ang space boundaries na ine-export ng ilang program). Mula sa bawat bahagi ng sariling ibabaw ng bawat silid, tumitingin ito nang diretso palabas:

- ang unang pader, bintana, pinto, sahig, bubong, covering, curtain wall o beam na natagpuan nito ang **bumubuo** sa bahaging iyon;
- sa paglampas lang sa elementong iyon, alinman sa **ibang silid** (ituturing na katabi, sa parehong temperatura: walang loss), **wala** (labas), o, sa ilalim ng sahig sa pinakamababang level, **ang lupa**;
- ang bukas na doorway papunta sa ibang silid ay ituturing na katabi; ang bahaging walang natatamaan (sa loob ng 1.5 m sa gilid o pababa, 8 m pataas) ay nakalista sa ilalim ng silid at hindi isinasama.

Kinukuha ng mga bintana at pinto ang sarili nilang laki mula sa IFC (kabuuang lapad × taas) mula sa pader na kinalalagyan nila. I-click ang isang silid sa table para makita ang bawat element na bumubuo rito, kasama ang lawak nito, U-value nito at kung saan galing ang U-value.

## U-value

Para sa bawat element na ginagamit ng BimCraft, ayon sa pagkakasunod na ito:

1. **Ang sariling U-value ng IFC**: ang `ThermalTransmittance` sa common property set ng element (halimbawa `Pset_WallCommon`) o sa type nito. Kayang isulat ng karamihan sa design program.
2. **Ang material layers nito**: 1 ÷ (inside surface resistance + thickness ng bawat layer ÷ conductivity λ nito + outside surface resistance), na may karaniwang surface resistance (0.13 at 0.04 m²K/W para sa pader; 0.10 pataas at 0.17 pababa sa loob). Karaniwang conductivity para magsimula (mineral wool 0.035, brick 0.77, concrete 1.4…); sa ilalim ng {{ui:Conductivity ng materyal}} i-type ang sa gumawa, at susunod ang bawat U-value mula sa mga layer na iyon.
3. **Tipikal na halaga** (pader 0.3, bubong 0.2, sahig 0.25, bintana 1.4, pinto 1.6 W/m²K), na minarkahan bilang ganoon: i-type ang sa iyo.

Ang U-value na tina-type sa detalye ng silid ay isinusulat sa common property set ng element bilang `ThermalTransmittance` (isang hakbang; binabawi ito ng {{key:Mod+Z}}). Kung ilang element ang nagbabahagi ng set na iyon (halimbawa isang uri ng pader), lahat ng iyon ay magbabago nang sabay, at sinasabi ng status line kung ilan.

## Heating

- **Heat loss** = Σ U × A × (inside − outside) para sa lahat ng nasa labas + Σ U × A × (inside − ground) para sa mga sahig sa lupa + 0.335 × air changes kada oras × volume ng silid × (inside − outside). Ang 0.335 Wh bawat m³ bawat kelvin ay ang density ng hangin (1.2 kg/m³) na pinarami ng heat capacity nito (1005 J/kgK).
- **Heating sa isang taon** = (loss ng silid bawat degree papunta sa labas, sa pamamagitan ng fabric at hangin, kasama ang ground loss nito na iniayon sa parehong pagkakaiba) × ang **degree-days** × 24 ÷ 1000, sa kWh. I-type ang degree-days para sa lugar, o gamitin ang {{ui:Basahin ang degree-day mula sa CSV…}} (isang row bawat araw o buwan; idinaragdag ang huling numero sa bawat row). Gamitin ang degree-days sa base temperature na ginagamit ng source mo: nakalkula na ng base na iyon ang libreng init ng mga tao, ilaw at araw.

## Cooling

Ang **cooling peak** = ang init sa pamamagitan ng fabric at hangin sa summer design temperature + tao (floor kada tao × heat kada tao) + ilaw at kagamitan kada m² ng floor + **ang araw**: ang peak ng {{ui:Araw sa pamamagitan ng mga bintana sa isang petsa}} para sa silid na iyon. Kalkulahin muna ang araw sa mainit na araw; hanggang doon, zero ang araw at sinasabi ito ng section. Idinaragdag ang peak ng bawat bahagi kahit magkaiba ang oras ng pagtama nila, kaya medyo sobra nang kaunti.

## Ano ang inaalis

- Ang buwan-buwan at oras-oras na ISO 52016-1 method (bayad na pamantayan), init na nakaimbak sa masa ng gusali, thermal bridges, paano gumaganap ang heating at cooling system, at mga climate file.
- Ang magkakatabing silid ay itinuturing na nasa parehong temperatura; hindi minomodelo ang mga espasyong walang heating.

Tingnan din ang [Kuwentahin ang daylight sa bawat silid](topic:daylight-factor).
