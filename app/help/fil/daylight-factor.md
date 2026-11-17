---
title: Tantyahin ang daylight sa bawat silid
summary: Ang average daylight factor ng bawat silid mula sa mga bintana nito, mga panloob na surface nito, at ang langit na nakikita ng bawat bintana, na may sky angle na sinusukat sa model. Isang maagang tantya sa disenyo, hindi simulation o code check.
keywords: daylight, daylight factor, average daylight factor, adf, vertical sky component, vsc, solar gain, araw, g-value, grid, split flux, sky component, internally reflected component, natural light, bintana, glazing, sky angle, obstruction, overshadowing, balkonahe, overhang, reflectance, transmittance, maagang disenyo, analysis, silid, spaces
from: 5f300a78
---

Kinukuwenta ng tab na {{ui:Daylight}} sa kanang panel ang **average daylight factor** ng bawat silid: gaano karaming liwanag ng maulap na langit sa labas ang umaabot sa silid, sa karaniwan, bilang porsyento. Binabasa nito ang mga silid (spaces) at bintana ng bukas na IFC model. Walang binabago sa model at walang ina-upload.

:::warning
Ang lahat sa tab na ito ay **pantulong sa disenyo, hindi compliance calculation**: mga tantya sa maagang disenyo gamit ang mga nailathalang pamamaraan, **hindi simulation** at **hindi check laban sa building code o standard**. Kailangan ng BS EN 17037, LEED, BREEAM at energy code ng daylight simulation na may klima ng lugar; gumamit ng daylight simulation program para sa mga iyon.
:::

## Kuwentahin

1. Magbukas ng IFC model na may mga silid (spaces) at bintana. Ang mga model na iginuhit dito ay may silid sa loob ng bawat saradong set ng pader.
2. Buksan ang tab na {{ui:Daylight}} at i-click ang {{ui:Calculate}}.
3. Ipinapakita ng bawat silid ang daylight factor nito at isang banda: mas mababa sa 2 %, 2–5 %, 5 % o higit pa. I-click ang isang silid para makita ang mga surface nito, pati ang area at sky angle ng bawat bintana; ang silid at ang mga bintana nito ay napipili sa model.

Kapag nagbago ka ng input, agad sumusunod ang mga numero; pagkatapos baguhin ang model, {{ui:Calculate again}}. Sine-save ng {{ui:CSV}} ang bawat silid kasama ang mga numero nito at ang mga input na ginamit.

## Ang formula

Average daylight factor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), idinadagdag sa mga bintana ng silid (Littlefair's formula, ginagamit ng BRE 209, BS 8206-2 at CIBSE LG10):

- **T**, ang light transmittance ng salamin (0.7 bilang panimula: gamitin ang numero ng gumawa).
- **Ag**, ang glazed area: area ng bawat bintana (kabuuang lapad × taas, o kung wala, ang laki nito sa model) × **glazed share** (0.75 bilang panimula: ang natitira ay frame).
- **θ**, ang anggulo ng langit na nakikita ng bintana, sa digri (sa ibaba).
- **M**, ang maintenance factor para sa dumi sa salamin (1 bilang panimula).
- **A**, bawat panloob na surface ng silid: sahig, pader, kisame at bintana, kinuha mula sa sariling hugis ng silid.
- **R**, ang karaniwang reflectance nila, tinimbang ayon sa area: sahig 0.2, pader 0.5, kisame 0.7 bilang panimula; binibilang ang salamin bilang 0.1.

## Paano sinusukat ang sky angle

Para sa bawat bintana, gumuguhit ang BimCraft ng patayong eroplano na nakahanay sa bintana, mula sa panlabas na mukha ng salamin, at tumitingin mula sa horizon diretso paitaas: lahat ng tinatamaan ng hiwa sa harap ng bintana (isang gusaling nasa tapat, balkonahe o overhang sa itaas, ang eaves) ay nagtatago ng bahagi ng 90° na iyon. Ang natitira ang θ. Hindi kasama ang mismong bintana at ang pader na kinalalagyan nito. Ginagawa ito sa limang lugar sa lapad ng bintana at kinukuha ang average, kaya ang manipis na poste sa harap ng gitna ay kumukuha ng bahagi nito, hindi ng buong langit.

Ang gusaling 8.5 m sa itaas ng gitna ng bintana at 9.9 m ang layo ay nagtatago ng 40.65° (ang anggulo na ang tangent ay 8.5 ÷ 9.9), kaya θ = 49.35°.

## Vertical sky component ng bawat bintana

Sinusukat din ng {{ui:Calculate}}, para sa bawat bintana, kung ano ang nakikita nito sa buong langit: ang parehong patayong hiwa, na iniikot sa bawat direksyon sa harap ng bintana (bawat 2°, mula isang gilid hanggang sa kabila), kaya ang gusaling nasa gilid, fin o malalim na reveal ay kumukuha ng bahagi nito. Mula roon kinukuwenta ng BimCraft ang **vertical sky component (VSC)**: gaano karami sa liwanag ng maulap na langit ang umaabot sa salamin, bilang bahagi ng makukuha ng bukas at patag na bubong. Ang bintanang walang harang sa harap ay nakakakuha ng **39.6 %**, ang pinakamataas na kaya ng patayong bintana; ang mahabang gusaling tumataas ng 25° sa itaas ng bintana ay nag-iiwan ng humigit-kumulang **27 %**, ang numerong ginagamit ng UK guidance (BRE 209) bilang rule of thumb. Ipinapakita ng detalye ng bawat bintana sa silid ang VSC nito at ang **angle of obstruction** nito (gaano kataas ang mga bagay na tumataas nang diretso sa harap nito).

Ang langit ay ang CIE standard overcast sky, na tatlong beses na mas maliwanag diretso sa itaas kaysa sa horizon, at eksakto ang hiwa: walang sine-sample.

## Ang araw sa mga bintana sa isang petsa

Buksan ang {{ui:Sun through the windows on a date}} at pumili ng petsa. Sinusundan ng BimCraft ang araw sa buong araw na iyon bawat quarter-hour at idinadagdag, para sa bawat bintana, ang init na dinadala ng araw sa salamin:

- ang **direct sun**, kapag nasa harap ito ng bintana at walang nakaharang dito sa model (ang parehong eksaktong hiwa, nakaharap sa araw: ang balkonaheng nagtatabing sa mataas na araw ng tag-init sa tanghali ay nagpapapasok ng mababang araw ng taglamig);
- ang **liwanag ng langit** sa salamin, bawas ang hindi nakikita ng bintana;
- ang liwanag **mula sa lupa** (reflectance nito: 0.2 bilang panimula);
- lahat ng ito sa pamamagitan ng **g-value** ng salamin (ang bahagi ng enerhiya ng araw na pinapapasok nito: 0.6 bilang panimula; gamitin ang numero ng gumawa) at ang glazed share nito.

Ipinapakita ng bawat silid ang kabuuan ng araw sa kWh at ang peak nito sa watts kasama ang oras; ang detalye ng silid ay gumuguhit ng araw bilang chart. Malinaw ang langit ayon sa modelo ni Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), kasama ang mga figure ng tag-init o taglamig para sa lugar at panahon, at taas ng site; ang posisyon ng araw ay mula sa NOAA. Galing sa site ng IFC ang latitude at longitude ng site, at mula sa true north ng model ang north; kung walang site ang model, i-type ang latitude at longitude. Standard time (walang summer time) ang mga oras sa time zone na itina-type mo, o sa iminumungkahi ng longitude.

Hindi isinasama: mga ulap (malinaw na araw ito), ang salaming pumapapasok ng mas kaunti sa mababang anggulo, ang frame na nagtatabing sa salamin, blinds, at ang kinukuha ng mga pader at bubong. Ang cooling estimate sa parehong tab ay gumagamit ng peak.

## Ang daylight factor sa grid

Buksan ang {{ui:Daylight factor on a grid}} at {{ui:Work out the grid}}: naglalatag ang BimCraft ng grid sa sahig ng bawat silid sa taas ng working plane (0.85 m bilang panimula), kalahating metro ang layo sa mga pader, at kinukuwenta ang daylight factor sa bawat punto gamit ang **BRE split-flux method**:

- ang **sky component**: ang maulap na langit na nakikita mula sa punto sa pamamagitan ng bukana ng bawat bintana, bawas ang mga frame;
- ang **externally reflected component**: ang nakikita ng punto na mga gusali sa labas sa pamamagitan ng bintana, na kumikinang sa ikasampung bahagi ng langit sa likod nila (baguhin ang obstruction brightness kung mas maliwanag o mas madilim sila nang malaki);
- ang **internally reflected component**: ang liwanag na tumatalbog sa loob ng silid, mula sa mga surface at reflectance ng silid, sa area ng mga bintana, at kung gaano kalaki ang nasa labas nito (ang BRE formula, na may transmittance ng salamin sa lugar ng malinaw na salaming ipinapalagay nito).

Ipinapakita ng bawat silid ang average nito, ang pinakamababang punto nito, at kung gaano karami ang nakakakuha ng 2 % o higit pa; ang detalye ng silid ay gumuguhit ng plano nito, na may bawat punto na kulay ayon sa daylight factor nito at ang mga bintana sa pula. Para mabilis sa anumang computer, may hanggang **400 punto** lamang ang bawat silid: sa malaking silid ay lumalaki ang spacing para magkasya (mag-type ng spacing para ikaw ang pumili).

## Ang hindi isinasama

- Ang roof windows (salaming nakahiga o nakahilig) ay nakalista pero hindi binibilang: ang mga formula dito ay para sa mga bintana sa pader.
- Ang mga bintanang walang silid sa likod (isang hall na walang space, halimbawa) ay nakalista nang hiwalay.
- Window reveals (ang bukana ay kinukuha sa panlabas na mukha), glare, oras ng araw, at climate-based daylight. Para sa BS EN 17037, LEED o BREEAM, gumamit ng daylight simulation program.
- Ang mga banda ay mula sa mas lumang British guidance (BS 8206-2), ipinapakita bilang gabay, hindi kailanman bilang pasado o bagsak.
