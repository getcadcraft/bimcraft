---
title: Sahig sa anumang hugis, mga bukas na bahagi at ramp
summary: Gumuhit ng sahig o slab ayon sa outline nito (balcony, cantilever, landing), maglagay ng mga bukas na bahagi dito, at gumuhit ng ramp kasama ang mga landing nito.
keywords: sahig, floor, slab, outline, balcony, cantilever, landing, deck, floor opening, hole, shaft, void, ramp, slope, accessible ramp, wheelchair ramp, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ano ang gagawin mo

Gumawa ng mga sahig na hindi sumusunod sa mga silid, gaya ng balcony sa labas ng mga pader, at gumuhit ng mga ramp sa pagitan ng mga level.

## Gumuhit ng sahig ayon sa outline nito

1. I-on ang {{ui:Draw}}, piliin ang level, saka {{ui:Build}} › {{ui:Floor by outline}}.
2. Sa row sa ilalim ng mga tool, pumili ng uri (concrete slab o wood floor), gamit nito (floor o landing), kapal nito, at kung gaano kataas ang tuktok nito sa level (0 = kapantay ng sahig ng level; ang negatibong halaga ay nagpapababa rito).
3. I-click ang mga sulok. Dumidikit ang tool sa mga pader, grid line at sa kanilang mga intersection; hawakan ang {{key:Shift}} para panatilihing parisukat ang gilid. Ipinapakita ang haba ng bawat gilid at ang lawak habang gumuguhit. Binabawi ng {{key:Backspace}} ang huling sulok.
4. I-click ulit ang unang sulok, i-double-click, o pindutin ang {{key:Enter}} para tapusin.

## Maglagay ng bukas na bahagi

I-click ang sahig (sa 3D view, o ang outline nito sa plano), saka sa {{ui:Properties}} i-click ang {{ui:Add an opening}} at i-click ang mga sulok ng bukas na bahagi sa loob ng sahig, tapusin gaya ng nasa itaas. Nakalista sa {{ui:Properties}} ng sahig ang mga bukas nitong bahagi, bawat isa ay may {{ui:Delete}}, at ang lawak nito nang wala ang mga ito.

## Gumuhit ng ramp

1. Piliin ang {{ui:Build}} › {{ui:Ramp}}. Itakda ang lapad nito, at kung ito ay papunta **sa level sa itaas** o **paakyat ng rise** na iti-type mo.
2. Piliin kung paano ito itatakda: **by slope** (1:12 bilang panimula; kasing haba ng kailangan ng rise ang ramp) o **by length** (ang ikalawang click ang magtatakda ng haba, at susunod ang slope).
3. I-click ang paanan ng ramp (ang gitna ng ilalim nitong gilid), saka i-click ang direksyon paakyat. Ipinapakita ng preview ang haba nito, mga flight at slope.

Ang rise na higit sa 30 inches (760 mm) ay hinahati sa mga flight na may 5-foot (1525 mm) na landing sa pagitan. Ito ay karaniwang halaga sa pagpaplano, hindi ang iyong code: suriin ang mga patakaran sa lugar na pagtatayuan mo. Ang ramp na mas matarik sa 1:12 ay minamarkahan sa {{ui:Properties}} nito.

## Ano ang makikita mo

- Ang bawat sahig, bukas na bahagi at ramp ay isang hakbang: binabawi ito ng {{key:Mod+Z}}.
- Sa plano, ang outline ng iginuhit na sahig (naka-cross ang bukas na bahagi), at ang outline ng ramp, mga flight, landing at arrow paakyat na may slope nito.
- Ang Properties ng iginuhit na sahig (uri, gamit, kapal, tuktok, lawak, mga bukas) at ng ramp (lapad, tuktok, rise, slope o haba); inaalis ng {{key:Delete}} ang alinman sa mga ito.
- Sumusunod ang ramp na papunta sa level sa itaas sa tuwing nagbabago ang taas nito.
- Sa IFC file: ang iginuhit na sahig ay slab (IfcSlab, floor o landing) na may mga bukas na bahaging inukit (IfcOpeningElement); ang ramp ay IfcRamp na binubuo ng sloped na flight (IfcRampFlight) at landing slab, kasama ang slope at lapad nito.

:::note
Nananatili sa lugar kung saan mo ito iginuhit ang mga sahig na ginuhit sa ganitong paraan. Ang mga sahig na ginawa gamit ang {{ui:Floor}} ay sumusunod sa mga silid kapag gumalaw ang mga pader: tingnan ang [Mga silid, sahig, kisame at bubong](topic:floors-and-roofs).
:::
