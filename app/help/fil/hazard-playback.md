---
title: Magpatakbo ng baha, hangin o lindol sa gusali
summary: Tubig na tumataas sa mga silid, presyon ng hangin sa bawat palapag, o lindol na yumayanig sa mga palapag, pinatatakbo sa plano o elevation na may time slider. Simpleng model na nakalista ang mga assumption; hindi ito code check o structural design.
keywords: hazard, baha, hangin, lindol, seismic, drift, sway, base shear, water level, klima, scenario, sea level, playback, palapag, period
from: ff0d34d1
---

Pinatatakbo ng seksyong {{ui:Hazard playback}} ng kaliwang panel ang isang hazard sa bukas na IFC model. Walang nababago sa model.

:::warning
Ito ay **simpleng model para makita kung ano ang ginagawa ng isang hazard sa layout na ito**, hindi flood study, wind-code check o structural design. Nakalista ang mga assumption ng bawat resulta.
:::

## Baha

Itakda ang pinakamataas na antas ng tubig sa ibabaw ng pinakamababang palapag at ang mga minuto ng pagtaas, pagpapanatili at pagbaba. Pumapasok ang tubig sa isang silid sa pamamagitan ng bukana na nalampasan na ng tubig ang sill, at ang mga silid na konektado sa basang silid sa pamamagitan ng bukana sa ilalim ng tubig ay nasa parehong antas (quasi-static). Ibinibigay ng table kung kailan unang nabasa ang bawat silid at gaano kalalim; pinatatakbo ito ng plano. I-type ang pinakamaraming tubig na kayang tanggapin ng silid, at ang mga silid na lampas doon ay magiging babala. **Climate futures:** mag-load ng sarili mong scenario file (JSON o CSV na may taon, sea level rise at flood factor) at pumili ng taon. O i-on ang Climate futures add-on at pumili ng scenario at taon: patatakbuhin ang baha nang dalawang beses, ang kasalukuyan katabi ng hinaharap (tingnan ang "Klima sa hinaharap: baha, init at wildfire sa 2050 at 2080"). Nasa parehong listahan din ang mga uri na Pagkakalantad sa wildfire at Init: future weather file.

## Hangin

Sumusunod ang presyon sa ½ρV² habang tumataas ang bilis kasabay ng taas; ang puwersa sa isang palapag ay ang presyong ito na pinarami ng gust factor, ng dalawang pressure coefficient, ng lapad at ng taas ng palapag. Makukuha mo ang shear, overturning moment at sway.

## Lindol

Isang shear building: isang masa bawat sahig (footprint × kilogram bawat square metro, na itatakda mo), parehong stiffness sa bawat palapag na aakma sa unang period na ibibigay mo (isang ikasampung segundo bawat palapag kung iiwanang blangko, at sinasabi ito ng app), damping, at isang ginawang ground motion (pulse o filtered noise) sa peak acceleration na pipiliin mo. Ang resulta ay drift ng bawat palapag, floor acceleration at base shear; ipinapatakbo ng elevation ang sway, iginuhit nang mas malaki kaysa totoo. I-type ang drift ratio na papayagan mo, at ang mga palapag na lampas doon ay babala. Elastic ito: walang bumibigay o nagbibitak.

## Floor stiffness mula sa Analysis frame

Para sa lindol o wind sway, piliin ang **The Analysis frame** bilang pinagmulan ng stiffness sa halip na i-type ang period. Ang bawat sahig ay itinutulak nang patagilid nang paisa-isa, nilulutas ang frame (beam, column, bracing, slab), at ang stiffness ng mga sahig na sabay-sabay gumagana ang nagpapatakbo sa run. Ang bigat ay ang sariling bigat ng mga member kasama ang floor load bawat square metro na itatakda mo sa plan box ng bawat sahig. Ipinapakita ang totoong unang period. Elastic ito: walang bumibigay, at hindi minomodelo ang torsion. Para sa hangin, nananatiling ang mga puwersa ng palapag ang mga ipinalagay sa itaas (power-law profile, ang gust factor mo at ang nakapirming pressure coefficient, hindi wind code); ang sway lang ang galing sa frame, sa pamamagitan ng paglutas sa buong stiffness matrix ng frame laban sa mga puwersang iyon. Kailangan ng model ng IFC na may frame na mababasa ng Analysis tab.

## Units

Ang lalim ng tubig, ang sway at drift bawat palapag, distansya at lawak ay ipinapakita sa {{ui:Units}} na pinili mo. Nananatili sa sarili nilang unit ang mga puwersa (kN), oras at acceleration, at ang halagang tina-type mo sa kahon na may label na nasa meters ay mananatili sa meters. Pareho ang nangyayari sa mga resulta ng evacuation, daylight, heating at cooling at furnish: sinusunod ng haba, lawak at volume ang pinili mo; hindi kailanman ina-convert ang pressure, flow, temperature, energy at power.
