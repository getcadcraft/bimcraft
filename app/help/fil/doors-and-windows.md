---
title: Mga pinto at bintana
summary: Maglagay ng mga pinto at bintana sa mga pader na iginuhit mo: ituro ang pader, makita ang swing at ang mga distansya sa mga sulok, saka i-click; awtomatikong puputulin ng butas ng pader ang sarili nito.
keywords: pinto, door, doors, bintana, window, windows, butas, opening, swing, hinge, hand, flip, sliding door, pocket door, garage door, double door, casement, single hung, double hung, slider, fixed window, sill, header, bifold, closet door, French doors, barn door, sidelites, entry door, awning, picture window, transom
from: 4d8ac009
---

## Ano ang gagawin mo

Maglagay ng mga pinto at bintana sa mga pader na iginuhit mo ([Gumuhit ng pader](topic:draw-walls)). Ituro ang pader at ipinapakita ng pinto o bintana kung saan ito pupunta, aling direksyon ang bubuksan nito, at gaano kalayo sa bawat sulok. I-click, at ang butas ay awtomatikong puputulin mula sa pader sa plano at sa 3D.

## Maglagay ng pinto

1. Kapag naka-on ang {{ui:Draw}}, i-click ang {{ui:Door}} (o pindutin ang {{key:D}}).
2. Piliin ang uri: **Single swing door**, **Double swing door**, **Sliding door**, **Pocket door**, **Garage door**, **Bifold closet door**, **French doors**, **Barn door (on the wall)** o **Entry door with sidelites**. Pinupunan ng karaniwang laki nito ang **W** at **H**; pumili ng iba mula sa listahan ng laki sa tabi nito, o mag-type ng iba, halimbawa `2'-8"` o `800`. Nag-aalok din ang listahan ng mga door family ng model na ito (tingnan ang [Mga family at ang kanilang laki](topic:families)).
3. Ituro ang pader. Sinusundan ng simbolo ng pinto ang pointer sa kahabaan ng pader, at lumalabas sa plano ang distansya mula sa bawat dulo ng mukhang iyon.
4. Bumubukas ang pinto sa gilid ng pader kung nasaan ang pointer. Pindutin ang {{key:H}} (o i-click ang {{ui:Flip}}) para ilipat ang hinge sa kabilang dulo.
5. I-click. Nailagay na ang pinto at nananatiling aktibo ang tool para sa susunod. Ituro ang gitna ng pader at kusang nasa gitna ang pinto.

Para ilagay ito sa eksaktong distansya, ituro ang pader malapit sa sulok na sinusukatan mo, i-type ang distansya (halimbawa `2'` o `600`), at pindutin ang {{key:Enter}}. Ang distansya ay mula sa mas malapit na dulo ng mukha ng pader hanggang sa gilid ng pinto.

## Maglagay ng bintana

1. I-click ang {{ui:Window}} (o pindutin ang {{key:N}}).
2. Piliin ang uri: **Fixed window**, **Single hung window**, **Double hung window**, **Casement window**, **Sliding window**, **Awning**, **Picture window** o **Transom**, at ang **W**, **H** at **Sill** nito (ang taas ng ilalim ng bintana sa ibabaw ng sahig).
3. Ituro ang pader at i-click, o mag-type ng distansya at pindutin ang {{key:Enter}} gaya ng sa pinto. Nakapuwesto ang bintana sa labas ng pader.

## Ilipat, i-flip, burahin

- Kapag naka-on ang {{ui:Select}}, i-drag ang pinto o bintana sa kahabaan ng pader nito. I-drag ito sa ibang pader para ilipat doon.
- Binubura ng {{key:Delete}} ang mga napiling pinto at bintana; nagsasara ang pader.
- Ang paglipat o pagbura ng pader ay naglilipat o nagbubura ng nasa loob nito. Kapag gumalaw ang simula ng pader sa sarili nitong linya, nananatili sa lugar nila ang mga pinto at bintana nito.
- Ibinabalik ng {{ui:Undo}} at {{ui:Redo}} ang bawat paglalagay, paglipat o pagbura, pabalik-balik.

## Ano ang tinatanggihan

- **Hindi ito kasya sa pader na iyon.** Mas malapad ang pinto o bintana kaysa sa pader, o lalabas sa dulo nito. Subukan ang mas maikling lapad o mas mahabang pader.
- **Mas mataas ito sa pader.** Ang sill kasama ang taas ay nasa itaas ng tuktok ng pader.

## Ano ang sine-save

Bawat pinto o bintana ay isang IFC door o window na may laki, operation (halimbawa single swing left), uri ng laki nito (isang uri para sa bawat laki ng family nito), `Pset_DoorCommon` o `Pset_WindowCommon` at base quantities, na pumupuno sa IFC opening sa pader nito. Hindi kasama sa net side area at volume ng pader ang butas. Binubuksan ito ng ibang BIM program bilang pinto sa pader.

## Good to know

- Ipinapakita ng plano ang mga pinto na bukas sa 90° kasama ang swing nila, ang sliding door bilang dalawang panel, ang pocket door na dumudulas sa loob ng pader, ang garage door bilang dashed line sa itaas, at ang mga bintana kasama ang linya ng frame at salamin.
- Ang lapad ay ang kabuuang lapad ng frame; ang dahon ng pinto ay ang lapad bawas ang dalawang jamb.
- Hindi pa nagagawa ang pagkopya ng iginuhit na pinto at bintana: maglagay ng isa pa.

## Basement egress window at well

Piliin ang **Basement egress with well** sa listahan ng uri ng bintana. Nagsisimula ito bilang 36 × 48 inch na casement na may sill na 36 inches sa itaas ng level. Nasa labas ng pader ang well, na may hindi bababa sa 48 inches na malinaw na lapad, 36 inches na projection, at ilalim na 6 inches sa ibaba ng sill. Lumalabas ito bilang dashed line sa plano at bilang tatlong bukas-ang-tuktok na gilid sa 3D. Bahagi ng IFC body ng bintana ang well, kaya kasama nito ang pag-save, paglipat, pagbabago ng laki o pagbura ng bintana. Ang pagbabago ng laki ay nagpapanatili ng hindi bababa sa 6 inches na espasyo sa bawat jamb.

Ito ay modeling defaults, hindi certification ng egress compliance. Suriin nang hiwalay ang aktwal na malinaw na bukana ng manufacturer, ang lokal na requirements, grade, drainage, at anumang kailangang hagdan. Preset na dimensyon ang lalim at taas ng well; hindi sumusunod ang mga ito sa terrain.
