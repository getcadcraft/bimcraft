---
title: "Climate futures: baha, init at wildfire sa 2050 at 2080"
summary: "Patakbuhin muli ang baha, energy year at wildfire screening gamit ang future climate (mga scenario na SSP2-4.5 at SSP5-8.5, mga taon na 2050 at 2080) mula sa climate data pack, na ipinapakita sa tabi ng present."
keywords: "klima, climate change, future, 2050, 2080, ssp, cmip6, scenario, antas ng dagat, baha, init, weather file, epw, morph, energyplus, wildfire, bushfire, panahon para sa sunog"
from: 224ecd08
---

Galing ang mga figure ng klima sa **data pack**, hindi sa app. I-on ang {{ui:Climate futures}} add-on sa Settings › Add-ons, o mag-load ng sarili mong pack file sa {{ui:Kinabukasang klima}} block.

:::warning
Ang pack na kasama ng add-on ay isang **sample**: tatlong lugar (Denver, Miami, Johannesburg), isang climate model, at limang taon sa bawat 20-taong panahon. Naroon ito para subukan ang mga tool, **hindi para sa disenyo**. Sinasabi ito ng panel nang naka-bold habang ginagamit ito. Ang buong pack (maraming model, lahat ng taon, mas maraming lugar) ay ginagawa gamit ang `tools/climate/build-pack.mjs` mula sa NASA NEX-GDDP-CMIP6 data.
:::

## Pumili ng future

Sa {{ui:Hazard playback}} sa kaliwang panel, pumili ng **Scenario** (SSP2-4.5, ang gitnang landas, o SSP5-8.5, mataas na emission) at ng **Year** (ang 2050 ay nangangahulugang 2041-2060, ang 2080 ay 2071-2090; parehong kumpara sa 1995-2014). Ang **Place** ay ang lugar ng pack na pinakamalapit sa site ng model (IfcSite latitude at longitude), o ang pipiliin mo. Kapag malayo sa bawat lugar, ginagamit ang global average na pagbabago ng pack at sinasabi ito ng panel.

## Baha, present sa tabi ng future

Kapag may napiling scenario, itakda ang **Flood type**: coastal (dinadagdagan ng pagtaas ng antas ng dagat), river o heavy rain (mas malalim ayon sa pagbabago sa ulan ng pinakabasang araw), o pareho. Pindutin ang Run: tatakbo ang baha gaya ng dati, at ipinapakita ng talahanayan ang present at future na baha nang magkatabi (antas ng tubig, mga kuwartong mababasa, pinakamalalim na tubig). Nakalista sa ilalim nito ang mga palagay:

- ang antas sa baybayin ay tumataas ng buong pagtaas ng antas ng dagat; hindi binabago ang surge at alon;
- ang daloy ng ilog ay tumataas nang one-to-one sa ulan ng pinakabasang araw, at ang lalim ay sumusunod sa daloy na nakataas sa kapangyarihang 0.6 (equation ng Manning para sa malapad na channel);
- ang dalawang bahagi ay simpleng idinadagdag.

## Init: future weather file

Piliin ang uri na {{ui:Heat: future weather file}}, pumili ng present-day na `.epw` weather file, at pindutin ang {{ui:Make the future weather file}}. Ang file ay **morphed** buwan-buwan gamit ang nailathalang paraan ng shift at stretch (Belcher, Hacker and Powell 2005): ang average ng buwan ay umiinit ayon sa pagbabago ng pack, ang mainit na hapon ayon sa pagbabago sa araw-araw na maximum, at ang malamig na gabi ayon sa pagbabago sa araw-araw na minimum; gumagalaw ang relative humidity ayon sa pagbabago ng pack at muling kinukuwenta ang dew point. Nananatili ang pressure at hangin. Ikinukumpara ng talahanayan ang average at pinakamainit na temperatura, ang 0.4 % cooling at 99.6 % heating design temperatures, ang oras sa 30 °C at 35 °C, at ang degree-days.

{{ui:Save the future weather file}} ay nagse-save nito; {{ui:Use it in the energy check}} ay ibinibigay ito sa EnergyPlus check (Energy tab). Ang future file ay ang parehong tipikal na taon, mas mainit: hindi ito nagdaragdag ng bagong heat wave.

## Energy year, present sa tabi ng future

Sa EnergyPlus check ng Energy tab (isang add-on na sarili nito, gamit ang sarili mong engine), pumili ng present weather file, pagkatapos ay scenario at taon sa block nitong {{ui:Kinabukasang klima}}, at pindutin ang {{ui:I-simulate ang isang taon: present at future}}: tatakbo ang taon sa present na file at sa morphed nitong future, at magkatabing ililista ang heating at cooling ng bawat kuwarto.

## Wildfire exposure (screening only)

Piliin ang uri na {{ui:Wildfire exposure (screening only)}}: ang pinakamalapit na halaman, ang slope paakyat mula roon hanggang sa gusali, at ang distansya rito. Ang resulta ay isang banda mula very low hanggang extreme, present at future.

:::warning
**Screening lamang.** Ito ay sariling relatibong sukat namin para malaman kung kailangan ng site ng tamang wildfire assessment, hindi isang code rating o bushfire attack level. Pinaparami nito ang timbang para sa halaman, ang slope factor (halos dumodoble ang bilis ng apoy sa bawat 10 degree paakyat, binibilang hanggang 20 degree), ang distance factor (10 m hinati sa distansya, pinakamataas na 1), at ang pagbabago sa fire-weather index ng pack.
:::

## Saan galing ang mga numero

- **Temperatura, halumigmig, sikat ng araw, ulan, fire weather:** NASA NEX-GDDP-CMIP6, araw-araw na downscaled na output ng CMIP6 model. Nasa ilalim ng CC BY 4.0 ang output ng bawat model. Ang pagbabago sa fire-weather ay ang Canadian Fire Weather Index na kinuwenta araw-araw mula sa panahon ng model (gamit ang araw-araw na halumigmig sa halip na halumigmig ng tanghali).
- **Pagtaas ng antas ng dagat:** ang global mean ng IPCC AR6 (hindi lokal; hindi kasama rito ang pagtaas o paglubog ng lupa), maliban kung may dalang lokal na figure ang pack.
- Sinasabi ng pack ang pinagmulan, lisensya at petsa nito; ipinapakita ito ng panel.
