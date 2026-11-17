---
title: Ang live view
summary: Panel sa tabi ng model na nagpapakita nito sa real-time na itsura, may araw, anino at bounce light, at sumusunod sa bawat pagbabagong gagawin mo; lakaran ito at itakda ang oras ng araw at ang buwan.
keywords: live view, real time, realtime, real-time render, walkthrough, walk, walk through, first person, presentation, client, second screen, second window, monitor, oras ng araw, araw, season, buwan, anino, ambient occlusion, reflections, bounce light, global illumination, webgpu, webgl
from: ea5c02bf
---

Ipinapakita ng live view ang model sa real-time na itsura: ang langit at ang araw ayon sa lugar at petsa ng iyong site, ang mga anino ng araw, ang mga pintura at materyal na itinakda mo sa mga elemento, mga lampara, at liwanag na tumatalbog mula sa mga pader at sahig. Sumusunod ito sa ginagawa mo: iikot ang 3D view at iikot din ito, babaguhin mo ang model at ipapakita nito ang pagbabago makalipas ang saglit. Walang ina-upload.

Gumuguhit ito ng parehong eksena, pintura, lampara at araw gaya ng [I-render ang larawan](topic:render); para sa tapos na larawan, gamitin iyon.

## Buksan ito

1. Magbukas ng model at piliin ang {{ui:Live view}} sa toolbar. Bubukas ang panel sa ibabaw ng app, sa kanang ibaba.
2. I-drag ang title bar nito para ilipat, hilahin ang sulok nito para palakihin.
3. {{ui:Live view sa bagong window}} (ang button sa tabi nito) o {{ui:Bagong window}} sa panel ay inililipat ito sa sariling window, para sa pangalawang screen. Kung hinaharangan ng browser mo ang pop-up window, bubukas ito bilang panel.
4. Isinasara ito ng {{ui:Isara}}.

## Mga kontrol

| Kontrol | Ano ang ginagawa |
|---|---|
| {{ui:Sundan ang view}} | Naka-on: tumitingin ang live view kung saan tumitingin ang 3D view. Kapag naglalakad, nag-o-off ito |
| {{ui:Walk}} | Maglakad sa model (sa ibaba) |
| {{ui:Gravity}} | Habang naglalakad: tumayo sa sahig at umakyat ng hagdan. Naka-off: lumipad |
| {{ui:Oras}} | Ang oras ng araw. Gumagalaw ang araw habang dinadrag mo |
| {{ui:Buwan}} | Ang buwan, para makita mo ang araw sa taglamig at tag-init |
| {{ui:Kalidad}} | {{ui:Para sa computer na ito}}, o {{ui:Mababa}}, {{ui:Katamtaman}} o {{ui:Mataas}} |

Ang linya sa ibaba ay nagsasabi kung ano ang gumuguhit ng view (WebGPU o WebGL 2), ang kalidad, at ang bounce light.

## Maglakad sa model

1. Ituro ang 3D view kung saan mo gustong tumayo at piliin ang {{ui:Walk}}. Tatayo ka sa sahig sa ibaba ng eye point ng view, 1.6 m ang taas.
2. I-click ang live view, saka gamitin ang {{key:W}} {{key:A}} {{key:S}} {{key:D}} o ang mga arrow key. Pindutin nang matagal ang {{key:Shift}} para tumakbo. I-drag para tumingin sa paligid.
3. Ang mga hakbang na hanggang 40 cm ay inaakyat (hagdan); anumang mas mataas ay pader. Pinipigilan ka ng mga pader at dumudulas ka sa tabi nila.
4. Kapag naka-off ang {{ui:Gravity}}, lumilipad ka: umaakyat ang {{key:E}}, bumababa ang {{key:Q}}.
5. Itinitigil ng {{key:Esc}} ang paglakad.

## Bounce light

Ang liwanag na tumatalbog mula sa pader na tinatamaan ng araw papunta sa sahig, at ang mas madilim na loob ng kuwarto, ay kinukuwenta sa background sa bawat processor core. Habang ginagawa ito, ang ibabang linya ay nagsasabing {{ui:Bounce light: 40 %}}; kapag handa na, isinasama ito ng view. Pagkatapos ng pagbabago, magsisimula itong muli.

:::note
Ito ay approximation para sa live view, hindi tapos na larawan: ang maliliit na detalye sa pagitan ng mga punto ay nakakakuha ng bounce light ng mga kalapit na punto.
:::

:::note
Nagkakaiba ang mga browser. Kung may WebGPU ang browser, ginagamit ng live view ang WebGPU; sa iba, gumagamit ito ng WebGL 2 at magkapareho ang itsura. Kung wala ang alinman, sinasabi ito ng panel.
:::
