---
title: "Suriin ang init at lamig gamit ang EnergyPlus"
summary: "Isulat ang model bilang EnergyPlus file, o patakbuhin ang EnergyPlus version 26.2.0 dito sa browser, at ihambing ang design load nito sa mabilisang tulong sa init at lamig. Pangalawang opinyon para sa early design, hindi compliance calculation."
keywords: "energyplus, simulation ng enerhiya, design day, heating load, cooling load, weather file, epw, idf, thermal mass, taunang enerhiya, simulate"
from: b82a5bf2
---

## Ano ang gagawin mo

Isinusulat ng panel na **Suriin gamit ang EnergyPlus** ang bukas na model bilang EnergyPlus input file (isang IDF): isang zone bawat kuwarto, ang mga pader, sahig, bubong at bintana kasama ang kanilang U-values, ang air changes, at ang ideal na heating at cooling. Maaari mong palaging **i-save ang file** at patakbuhin ito sa sarili mong EnergyPlus.

Kung na-setup mo rin ang engine, maaaring mag-simulate ang panel dito mismo, at inililista nito ang design heating at cooling ng EnergyPlus kasama ng sa mabilisang tulong, kuwarto kada kuwarto.

Isa itong design aid. Ang energy code, certification at permit ay nangangailangan ng aprubadong tool at ng climate data na kailangan nito, at ang resulta ay kailangang suriin ng taong mananagot dito.

## I-setup ang engine

Hindi kasama ng BimCraft ang EnergyPlus. Malaking WebAssembly build ito (mga 6 MB na compressed, kasama ang 4.6 MB na data file), kaya ikaw ang mag-ho-host nito at ita-type ang address nito sa panel. Ini-load lang ng page ito kapag pinindot mo ang simulate button, hindi kailanman sa start-up. Dapat https ang address, path sa site na ito, o localhost.

## Design days o isang taon

- **I-simulate ang design days** ay hindi nangangailangan ng weather file. Nagpapatakbo ito ng malamig na araw ng taglamig na walang araw at isang mainit at malinaw na araw ng tag-init, sa mga temperatura ng heating at cooling inputs ng Daylight tab, at iniuulat ang load ng bawat kuwarto sa watts.
- **I-simulate ang isang taon** ay nangangailangan ng weather file sa EPW format na pipiliin mo. Nagdaragdag ito ng mga tao, ilaw at kagamitan mula sa parehong inputs (laging naka-on, dahil walang iniimbentong schedule), at iniuulat ang heating at cooling energy ng bawat kuwarto sa kWh. May sariling lisensya ang mga weather file, kaya gumamit ng file na may karapatan kang gamitin.

## Thermal mass

Lagyan ng tsek ang **Give walls with known layers thermal mass**, at ang mga pader, bubong at sahig na may kilalang material layers ay isinusulat layer por layer, kasama ang density at specific heat na kinuha mula sa maikling talahanayan ng karaniwang halaga ayon sa pangalan ng material. Unang kinukuha ang mga layer mula sa labas, ayon sa pagkakasunod-sunod na nakalista sa file. Ang mga element na walang layer ay nananatili sa kanilang U-value nang walang mass.

## Pagbasa sa paghahambing

Magkaiba nang kaunti ang tanong na sinasagot ng dalawang pamamaraan. Pinananatili ng mabilisang tulong ang bawat element; inaaverage ng EnergyPlus file ang U-values ng bawat kuwarto ayon sa uri ng surface. Ang pagkakaibang higit sa 15 % sa design heating ng isang kuwarto ay nililista bilang note sa ⚠ panel, kasama ang dalawang figure. Mas malaki ang pagkakaiba sa cooling ayon sa disenyo: kinukuwenta ng mabilisang tulong ang peak mula sa araw sa isang petsa, samantalang kinukuha ng EnergyPlus ang sukat batay sa sarili nitong design day.
