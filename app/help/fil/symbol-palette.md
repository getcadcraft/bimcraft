---
title: Ang symbol palette
summary: Hanapin ang electrical at plumbing na symbol sa pangalan o larawan, i-star ang mga ginagamit mo, at ilagay ang mga ito sa plan sa isang click.
keywords: symbol palette, button ng symbols sa toolbar, sumusunod na pader, symbols, electrical symbols, plumbing symbols, plumbing plan, water closet, toilet, lavatory, sink, bathtub, shower, floor drain, cleanout, hose bib, water heater, valve, gate valve, cold water, hot water, waste, vent, line style, paborito, paghahanap
from: 67f20bc0
---

## Ano ang gagawin mo

Buksan ang isang panel na naglilista ng electrical symbol at plumbing plan symbol kasama ang kanilang larawan at pangalan, hanapin ang gusto mo, at ilagay ito sa plan. Walang kailangang internet dito: kasama sa app ang mga symbol.

## Buksan ito at maglagay ng symbol

1. Magbukas ng model at buksan ang {{ui:Build}} › {{ui:Symbol palette}} (command na itina-type: SYMBOLS). Nasa Tools menu ng Draw bar ang parehong button, at bilang **Symbols** sa Library group ng toolbar.
2. Pumili ng set: **Electrical** o **Plumbing**, o **Lahat ng set**. I-type sa search box para paliitin ang listahan. Puwede kang maghanap sa pangalan o pagdadaglat (WC, CW, HB).
3. I-click ang isang symbol. Handa na ang plan para ilagay ito.
   - Ang **electrical** na symbol ay nagsisimula ng Electrical tool na may napiling device na iyon, kaya gumagana ang lahat ng nasa [Ang electrical plan](topic:electrical-plan): i-click ang plan, isang undo step.
   - Ang **plumbing** na symbol ay nagsisimula ng plan symbol tool. I-click ang plan. Ang fixture na nasa pader (toilet, lavatory, bathtub, sink, hose bib) ay dumidikit sa pinakamalapit na mukha ng pader, nakatalikod dito; ang drain, valve, water heater at line style ay napupunta kung saan ka nag-click.
4. Pindutin ang {{key:R}} para paikutin ang symbol ng 90 degrees ({{key:Shift}}+{{key:R}} ang nagpapaikot sa kabilang direksyon), o mag-type ng anggulo sa **Pag-ikot** sa options bar. Pindutin ang {{key:Esc}} para huminto.

Ang fixture o hose bib na dumikit sa mukha ng pader ay natatandaan ang pader na iyon: kapag gumalaw ang pader, gumagalaw din ang symbol kasama nito (parehong mukha, parehong layo sa kahabaan ng pader), sa iisang undo step. Kapag binura mo ang pader, nananatili ang symbol kung nasaan ito, at nakalista sa Problems ang "lost its wall"; ilipat o burahin ito. Ang mga symbol na nailagay nang malayo sa pader ay hindi nakatali sa anuman.

Ang bawat symbol na inilagay mo ay isang undo step. Ang nailagay na symbol ay plan annotation sa IFC file, kasama ang tag nito (WC1, WC2, ...). Piliin ito para baguhin ang tag o pag-ikot nito sa **Properties**, o pindutin ang {{key:Delete}}.

## Ano ang nasa plumbing set

Mga fixture (water closet, urinal, lavatory, bathtub, shower, kitchen sink, single sink), floor drain, floor at wall cleanout, hose bib, wall hydrant, water heater, mga valve (gate, globe, ball, check, butterfly, pressure reducing), at mga line style kasama ang kanilang pagdadaglat: cold water (CW), hot water (HW), hot water return (HWR), waste (W), vent (V), storm drain (SD) at gas (G). Nag-i-scale ang mga drawing kasama ng plan, kaya pinananatili nila ang laki sa naka-print na sheet. Maikling stub ang line style para ipakita ang style sa plan; iguhit ang totoong pipe run gamit ang pipe tools.

:::note
Mga karaniwang plumbing plan convention ang mga ito, iginuhit namin; hindi sertipikado sa ISO 4067-1 o ASME Y32.4. Ikinumpara ang mga ito sa mga pampublikong drawing legend at training manual (nasa sources note ng set ang listahan, na nagsasabi kung saan kami tumutugma at kung saan kami nagkakaiba). Hindi ito kinopya mula sa anumang produkto, at libre gamitin (Apache-2.0). Magkakaiba ang mga drawing set, kaya suriin ang legend ng sarili mong project. Mga plan symbol ang mga ito, hindi plumbing design: hindi nila sinusukat ang pipe o chini-check ang code.
:::

## Mga paborito at keyboard

- I-click ang star sa isang symbol (o pindutin ang {{key:F}} dito) para itago ito bilang paborito. Nauuna sa listahan ang mga paborito at nananatili sa browser na ito. Ang **Only favourites** ay nagpapakita lamang ng mga iyon.
- Ang {{key:Down}} mula sa search box ay lilipat sa mga symbol; ang arrow keys, {{key:Home}} at {{key:End}} ang gumagalaw sa pagitan nila; pinipili ng {{key:Enter}} ang naka-focus; isinasara ng {{key:Esc}} ang palette.
- Sa telepono, nasa ibaba ng screen ang palette bilang sheet; umuurong ito kapag pumili ka ng symbol para makita mo ang plan. Buksan ulit ito mula sa Build menu, o sa **Palette** button sa options bar.

:::tip
Kung gumagamit ang file ng symbol set na wala sa build na ito, magpapakita ang plan ng kahon kung saan dapat ang symbol, at nakalista ito sa Problems.
:::

## I-link ang nailagay na elemento sa symbol

Ang light fitting mula sa Library ay 3D element, pero ipinapakita ng electrical layout ang symbol nito. Ilagay mo ito **minsan** at i-link:

1. Piliin ang Build › **Symbol link** (o i-type ang SYMBOLLINK). Bubukas ang Symbol link section sa kaliwang panel.
2. Piliin ang mga nailagay na elemento sa plan o sa 3D. Sinasabi ng section kung ilan ang napili at kung ano ang naka-link sa mga ito.
3. Piliin ang **Symbol** (mula sa anumang symbol set: Electrical, Plumbing) at piliin ang **Link**.

Nananatiling iisang elemento ito, at binibilang ito ng bawat schedule nang isang beses:

- Palaging ipinapakita ng **3D** ang katawan nito.
- Ipinapakita ng **plan** ang plan form nito, gaya ng dati.
- Ang plan na ang **Ipinapakita ng view na ito ang mga naka-link na elemento bilang** ay nakatakda sa **Sarili nilang symbol (services layout)** ay nagpapakita ng symbol sa lugar nito. Ang pag-click sa symbol ay pumipili ng elemento. Naka-save sa file ang pagpili para sa view na iyon (ang floor plan ng level, ceiling plan nito, o callout).

Ang **Paikutin ang symbol ng 90°** ay pinapaikot ang symbol kaugnay ng elemento nito. Ang **Alisin ang link** ay tinatanggal ang link; nananatili ang elemento. Inililista ng schedule na **Mga naka-link na symbol** ang bawat naka-link na elemento nang minsan, kasama ang level at kuwartong kinatatayuan nito.

Hindi pa nagagawa: ang pagpili ng view sa sheet ay pagpili ng plan ng level na ipinapakita nito; ang mga device na inilagay gamit ang Electrical tool ay symbol sa bawat plan, gaya ng dati.
