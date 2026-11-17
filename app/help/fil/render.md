---
title: Mag-render ng larawan ng modelo
summary: Gumawa ng larawan ng 3D view na parang liwanag ng araw: langit, araw sa latitude ng site, malambot na anino, salamin na bintana; sa WebGPU, path traced sa graphics card, may langit, camera, paghahalo ng ilaw, grading, fog at render queue.
keywords: render, preset, presets, scene preset, panloob, panlabas, section view, gabi, isang click, rendering, path tracing, path traced, ray tracing, global illumination, reflections, refraction, high quality, litrato, photoreal, realistic, larawan, image, png, still, langit, araw, liwanag ng araw, anino, malambot na anino, ambient occlusion, salamin, bintana, metal, materyal, exposure, liwanag, maulap, takipsilim, studio, presentation, visualization, webgpu, denoise, physical sky, hdri, ies, depth of field, panorama, white balance, paghahalo ng ilaw, render elements, exr, 16-bit png, fog, caustics, render queue
from: beb74cc7
---

Ang {{ui:Render}} sa toolbar ay gumagawa ng larawan ng 3D view na mukhang liwanag ng araw: langit, ang araw sa posisyong ibinibigay ng latitude ng site, malambot na anino, liwanag mula sa buong langit na nagpapadilim sa mga sulok, at mga kulay na mukhang salamin o metal. Hindi binabago ang modelo at ang file.

## I-render ang view

1. Ayusin ang 3D view ayon sa gusto mong larawan: i-orbit at i-zoom, itago ang mga palapag o elementong ayaw mo, at magtakda ng [section](topic:section-plane) kung dapat ipakita ng larawan ang isang hiwa.
2. I-click ang {{ui:Render}} sa toolbar.
3. Pumili ng {{ui:Scene}} kung hindi tama ang napindot (tingnan ang [Scene presets](topic:render#scene-presets-a-good-picture-in-one-click)), piliin ang {{ui:Size}}, saka i-click ang {{ui:Render}} sa dialog.

   Unti-unting lumilitaw ang larawan habang nagre-render, at lumilinis ito sa bawat pass. Ihihinto ito ng {{ui:Stop}} (o {{key:Esc}}) nang maaga at itatabi ang larawang nagawa na.

4. I-click ang {{ui:Save}} para i-download ito bilang PNG, o {{ui:Save as}} para sa ibang format (tingnan ang [Save the picture](topic:render#save-the-picture)). Ipinapangalan ito ayon sa file ng modelo.

:::tip
Magsimula sa {{ui:Draft}} sa {{ui:The view's size}} para suriin ang camera, saka mag-render ng {{ui:Good}} o {{ui:Best}} sa mas malaking laki para sa huling larawan.
:::

## Scene presets: a good picture in one click

Nasa itaas ng dialog ang apat na button na {{ui:Scene}}. Bawat isa ay nagtatakda ng langit, liwanag, lupa, mga linya ng gilid, kalidad at araw sa isang click, kaya walang kailangang matutunan bago ang unang larawan. I-click ang isa, saka {{ui:Render}}.

| Scene | Ano ang itinatakda | Gamitin para sa |
|---|---|---|
| {{ui:Exterior}} | Maaliwalas na langit, ang sariling araw ng modelo, naka-on ang lupa | Ang gusali mula sa labas |
| {{ui:Interior}} | Maulap na langit (pantay na liwanag, walang matatalas na sinag ng araw), kalahating stop na mas maliwanag | Tanaw mula sa loob ng kuwarto |
| {{ui:Section view}} | Puting studio, walang lupa, mga linya ng gilid sa mabilis na render | Modelong hiniwa ng section |
| {{ui:Night}} | Nakalubog ang araw (hatinggabi sa kalagitnaan ng taglamig para sa kalahati ng mundo ng site), isang stop na mas maliwanag | Mga lampara na nagbibigay-liwanag sa modelo. Kapag walang lampara, madilim ang larawan |

- {{ui:Piliin para sa view na ito}} ay pumipili para sa iyo: {{ui:Section view}} kapag may naka-on na section cut, {{ui:Interior}} kapag nasa loob ng modelo ang camera, kung hindi ay {{ui:Exterior}}. Sa unang pagbukas mo ng dialog, ganito ito magsisimula nang kusa.
- Nananatili sa ibaba ang bawat setting at maaaring baguhin. Kapag binago mo ang isa sa mga setting na itinakda ng eksena, walang button na napipindot, at sinasabi ng linyang nasa ilalim ng mga button na sarili mo na ang mga setting. I-click muli ang eksena para ibalik ang mga value nito.
- Hindi ginagalaw ng eksena ang engine, ang mode, ang laki, ang materials, ang camera o ang mga lampara.

:::note
Pareho ang mga value ng mga eksena sa ModelCraft at BimCraft. Ang itsura ng tapos na larawan ay nakadepende sa modelo mo at sa graphics card mo.
:::

## Ano ang lumalabas sa larawan

Ang nakikitang solid sa 3D view ang lumalabas sa larawan: ang mga nakatago at see-through na elemento, mga nakatagong palapag at nakatagong modelo ay hindi isinasama, at lalabas lamang ang mga kuwarto kapag naka-on ang {{ui:Spaces}}. Hinihiwa ng section plane o section box ang larawan gaya ng paghiwa nito sa view. Lumalabas ang mga elemento sa sarili nilang kulay: hindi ginagamit ang pagkukulay ayon sa property (ang tab na {{ui:Color}}).

## Mga setting

| Setting | Ano ang ginagawa |
|---|---|
| {{ui:Size}} | Laki ng view, dalawang beses ang laki ng view, Full HD, 4K o parisukat |
| {{ui:Mode}} | {{ui:Fast}}, o {{ui:High quality (path traced)}} (sa ibaba) kasama ang {{ui:Time limit}} nito |
| {{ui:Quality}} | Ilang pass (o, sa high quality, mga sample) ang pinagsasama-sama: {{ui:Draft}} 16, {{ui:Good}} 64, {{ui:Best}} 256. Mas maraming pass, mas makinis na anino at gilid, at mas matagal |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} o {{ui:White studio}} (simpleng puting background) |
| {{ui:Sun}} | Hunyo 21 sa 15:00 sa latitude na ibinibigay ng file para sa site nito (IfcSite), nakaharap sa tunay na north ng modelo. Lagyan ng tsek ang {{ui:Use another date and time for this picture}} para sa ibang oras |
| {{ui:Brightness}} | Mas maliwanag o mas madilim, sa mga hakbang (stop) |
| {{ui:Ground under the model}} | Lupa sa pinakamababang punto ng modelo na tumatanggap ng anino at unti-unting nawawala sa horizon |
| {{ui:Draw edges}} | Gumuguhit ng manipis na gilid ng mga elemento sa ibabaw ng larawan |

Kapag nasa ilalim ng horizon ang araw sa napiling oras, gabi na: nagdidilim ang langit at pinaiilaw ito ng mga lampara ng modelo.

## Mga lampara

Bawat light fixture sa modelo ay lampara sa larawan: ang mga fixture sa IFC file (IfcLightFixture, o elementong naka-type bilang light fixture), kasama ang mga inilagay mo mula sa library. Bawat isa ay nagniningning pababa mula sa ilalim lamang ng fixture. Kapag ibinigay ng file ang wattage ng fixture, ang liwanag nito ay sumusunod doon; kung hindi, 800 lumens ito, maputing-mainit na liwanag.

Inililista ng dialog ang mga lampara sa ilalim ng {{ui:Lamps}}: alisan ng tsek ang isa para patayin ito, o i-type ang liwanag nito sa lumens. Ang mga pagbabagong ito ay sine-save sa IFC (ang property set na `CadCraft_Light` ng fixture, kung saan maaari mo rin itong baguhin sa Properties), at ina-undo ang mga ito ng {{key:Ctrl+Z}}.

Kapag walang sinasabi ang file tungkol sa lokasyon ng site nito, nakalagay ang araw sa 40° north, at sinasabi ito ng dialog. Ang oras ay oras ng orasan ng site, kinukuwenta mula sa longitude nito, kaya maaaring mali ng isang oras sa mga lugar na iba ang pagkaka-set ng orasan.

Naka-save ang mga setting na ito sa browser na ito para sa susunod na larawan. Hindi sila isinasave sa IFC file.

## Salamin at iba pang materyal

Sa ilalim ng {{ui:Materials}}, bawat kulay sa screen ay may itsura: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} o {{ui:Frosted glass}}. Ang mga kulay na ginagawang see-through ng IFC file (halimbawa ang window glazing) ay nagsisimula bilang {{ui:Glass}}.

:::note
Sa {{ui:Fast}} mode, sinasalamin ng salamin at metal ang langit, hindi ang iba pang bahagi ng modelo, at hindi yumuyuko ang liwanag sa salamin. Ginagawa ito ng {{ui:High quality (path traced)}} mode sa ibaba.
:::

## High quality

Piliin ang {{ui:Mode}} › {{ui:High quality (path traced)}} para sa larawang sumusunod sa liwanag gaya ng pagtingin ng camera:

- tumatalbog ang liwanag sa pagitan ng mga surface, kaya ang kuwartong naiilawan sa pamamagitan ng bintana o ng lampara ay naiilawan sa lahat ng gilid, at nagkakahalo ang kulay sa kalapit na bahagi;
- tunay na salamin ang salamin: yumuyuko ang liwanag dito at sinasalamin nito ang modelo;
- sinasalamin ng metal at pinakintab na surface ang iba pang bahagi ng modelo;
- naiilawan ng light panel ang sarili bilang panel, may malambot na anino.

Mas mabagal ito nang husto kaysa sa {{ui:Fast}}: muling sinusundan ng bawat pass ang liwanag ng bawat pixel. Magaspang sa simula ang larawan at lumilinis habang nadadagdagan ang mga sample, kaya magsimula sa maliit ({{ui:Laki ng view}}, {{ui:Draft}}) at pumili ng {{ui:Time limit}}: kapag naubos ito, nananatili ang larawang nagawa na. Nananatili rin ito kapag pinindot ang {{ui:Stop}}. Naghihintay ang unang pass habang inihahanda ng browser ang path tracer.

Kapag may WebGPU ang browser, ang path tracer ay sarili ng CadCraft at tumatakbo sa graphics card; sinasabi ito ng linyang nasa ilalim ng larawan. Pagkatapos ng {{ui:Stop}} o ng time limit, ipinagpapatuloy ng {{ui:Resume}} ang parehong larawan hanggang makuha nito ang lahat ng sample; ang pagbabago ng setting o muling pagpindot sa {{ui:Render}} ay nagsisimula mula sa simula. Kapag walang WebGPU, WebGL ang gamit na path tracer (sinasabi ito ng linya), at hindi inaalok ang {{ui:Resume}}.

:::linux
Wala pang WebGPU ang Firefox at karamihan ng setup ng Chrome sa Linux, kaya gumagamit ng WebGL ang high quality doon.
:::

Sa mode na ito, hindi iginuguhit ang mga gilid, ipinapakita ng texture ang kulay at pagkamagaspang nito pero hindi ang bump nito, at ginagawa ang section cut sa modelo bago magsimula ang larawan.

{{ui:Denoise (inaalis ang grain na naiwan pagkatapos ng samples)}} ay naka-on bilang default: kapag tapos na ang larawan, o naihinto, ang grain na naiwan ay inaalis ng neural network na ginawa para dito (ang nailathalang network ng Intel Open Image Denoise, tumatakbo sa sarili mong computer: sa graphics card, kung hindi ay sa processor). Ang {{ui:Show}} › {{ui:Ang larawan bago i-denoise}} ay nagpapakita nito gaya ng na-render.

## Langit at light profile sa graphics card

Sa WebGPU, may dalawa pang langit ang high quality:

- {{ui:Physical sky}} ay kinukuwenta ang liwanag ng araw mula sa taas ng araw: malalim na asul sa itaas, maputlang banda sa horizon, at araw na nagiging mas mainit at mas mahina habang mababa ito. Ang {{ui:Haze}} ay mula sa napakalinaw na araw (2) hanggang sa maulap na araw (10).
- {{ui:Sky picture (HDRI)}} ay nagbibigay-liwanag sa modelo gamit ang panoramang larawan ng totoong lugar. Ang {{ui:Choose a picture…}} ay kumukuha ng equirectangular na `.hdr` o `.exr` file; ang {{ui:Turn}} ay pinapaikot ito sa paligid ng modelo, at ang {{ui:Picture brightness}} ay ginagawa itong mas maliwanag o mas madilim. May sariling araw ang larawan, kaya hindi idinadagdag ang araw ng modelo. Nananatili lamang ito habang bukas ang pahina: pagkatapos magbukas muli, piliin ulit.

Maaaring kumuha ng light profile ng gumawa ang bawat lampara sa listahang {{ui:Lamps}}: binabasa ng {{ui:IES profile…}} ang IES (LM-63) file at itinatapon ng lampara ang liwanag nito gaya ng ginagawa ng fixture na iyon (makitid na downlight, wall washer). Ginagamit ito ng bawat lampara na may ganoong pangalan, at pinapanatili ng lampara ang sarili nitong liwanag. I-click ang pangalan ng profile para itigil ang paggamit nito.

Nakakatulong ang mga bintanang malinaw na salamin para makapasok ang liwanag ng langit sa kuwarto.

Ang {{ui:Fast}} mode at ang WebGL path tracer ay nagpapakita ng {{ui:Physical sky}} at {{ui:Sky picture (HDRI)}} bilang malinaw na langit at binabalewala ang light profiles.

## Ang camera

{{ui:Camera}} ay nag-aayos sa larawan gaya ng litrato:

- {{ui:Exposure}}: panatilihin ang {{ui:Brightness slider}}, o piliin ang {{ui:Camera settings}} at itakda ang {{ui:Aperture (f-stop)}}, {{ui:Shutter speed}} at {{ui:ISO}} gaya sa camera; ang EV sa tabi nila ay ang karaniwang exposure value. Tumutugma sa maaraw na araw ang f/16 sa 1/100 s at ISO 100; ang mas madilim na eksena ay nangangailangan ng mas malawak na aperture, mas mabagal na shutter o mas mataas na ISO. Gumagana ito sa bawat mode.
- {{ui:Depth of field}} ay nagpapalabo sa mas malapit o mas malayo sa {{ui:Focus distance (m)}} gaya ng gagawin ng lenteng may ganoong f-stop (iwanang blangko para mag-focus sa nasa gitna ng view); ang {{ui:Aperture shape}} ay nagbibigay ng bilog o may-talim na hugis sa mga highlight na wala sa focus.
- {{ui:Two-point perspective (vertical lines stay vertical)}} ay nagpapantay ng camera at nag-uusog ng larawan, gaya ng architectural tilt-shift lens, para hindi tumagilid ang mga pader kapag tumingala o tumingin pababa sa gusali.
- {{ui:White balance}} ay nagtatakda kung aling kulay ng liwanag ang lumalabas na puti: mas mababa (halimbawa 3000 K) para sa mainit na ilaw ng lampara, mas mataas para sa lilim at maulap na araw.
- {{ui:Projection}}: ang {{ui:360° panorama}} ay gumagawa ng 2:1 na larawan ng lahat sa paligid ng camera para sa panorama viewer; ang {{ui:360° stereo panorama}} ay nagsasalansan ng panorama para sa kaliwang mata at kanang mata para sa headset; ang {{ui:Cube map (6 faces)}} ay gumagawa ng anim na parisukat na view sa grid na 3 × 2. Nagmumula ang lapad sa {{ui:Size}}.

Kailangan ng path tracer sa graphics card (WebGPU) ang projection, depth of field, two-point perspective at white balance, kaya lalabas lamang ang mga ito sa {{ui:High quality (path traced)}}.

## Tapusin ang larawan

{{ui:Picture}} ay nagme-grade ng high-quality na larawan gaya ng litrato, at binabago ng bawat kontrol ang tapos na larawan agad, nang walang muling pag-render:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (gaya ng dati ang larawan), {{ui:AgX}} (mas malambot, pinananatili ang kulay sa napakaliwanag na ilaw), {{ui:Filmic}} (banayad na film curve) o {{ui:Standard}} (simple, ang napakaliwanag na ilaw ay nagiging puti).
- {{ui:Contrast}} at {{ui:Highlight compression}} (ibinabalik ang detalye sa napakaliwanag na bahagi).
- {{ui:Bloom}} (malambot na liwanag sa paligid ng maliwanag na ilaw), {{ui:Glare}} kasama ang {{ui:Glare streaks}} (sinag-bituin mula sa pinakamaliliwanag na punto), at {{ui:Vignette}} (mas madilim na sulok).
- {{ui:Colour table (.cube)…}} ay naglalapat ng color grade mula sa `.cube` file, kasama ang {{ui:Colour table strength}} nito; gaya ng larawan ng langit, nananatili lamang ito habang bukas ang pahina.

## Save the picture

{{ui:Save as}} sa tabi ng {{ui:Save}} ay pumipili ng file: {{ui:PNG}}, {{ui:JPEG}} o {{ui:WebP}} para sa pagbabahagi (JPEG at WebP lamang kung kaya itong isulat ng browser), at pagkatapos ng high-quality na render sa graphics card, pati ang:

- {{ui:PNG, 16 bits}}: ang naka-grade na larawan na may mas pinong hakbang sa pagitan ng mga shade, para sa pag-print o karagdagang pag-edit.
- {{ui:EXR, every layer (32-bit float)}}: ang larawang gaya ng na-render (linear light, walang grade) na may bawat render element at light group bilang sariling layer, para sa compositing na programa.
- {{ui:Render file (.ccrender, to grade again later)}}: lahat ng kailangan ng dialog para muling paghaluin at i-grade ang larawan. Ibinabalik ito ng {{ui:Open a render file…}} kasama ang mix at grade nito, nang walang muling pag-render.

## Mix the lights after the render

I-on ang {{ui:Light mixing (change each light's colour and brightness after the render)}} bago pindutin ang {{ui:Render}}. Kapag tapos na ang larawan (o naihinto), inililista ng {{ui:Mix the picture}} ang mga ilaw nito sa mga grupo: ang langit, ang araw, at ang mga lampara ayon sa pangalan (bawat lampara na may parehong pangalan ay isang grupo). I-off ang isang grupo, bigyan ito ng kulay, o gawing mas maliwanag o mas madilim, at agad magbabago ang larawan, nang walang muling pag-render. Itinatabi ng {{ui:Save mix}} ang mix sa ilalim ng pangalan para mapili muli sa susunod; ibinabalik ng {{ui:As rendered}} ang larawan gaya ng pagkakagawa nito. Sine-save ng {{ui:Save}} ang na-mix na larawan.

Pinapanatili rin ng {{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} ang mga bahagi ng larawan. Inililipat ng {{ui:Show}} ang view sa isa sa mga ito: ang kulay ng surface (albedo), ang normals, ang depth, ang diffuse, specular at transmitted na liwanag (bawat direct at indirect), ang mga bagay na nagniningning at ang langit, at isang kulay bawat bagay o bawat materyal para sa paggawa ng mask.

Parehong nag-iimbak ng dagdag na layer sa graphics card ang dalawa. Sa malalaking laki, maaaring kulang ang graphics card; sinasabi ito ng dialog, at gumagana ang mas maliit na laki.

## Fog, usok, ingay at caustics

Nasa {{ui:Fog, usok at ingay}} ang mga ito at gumagana sa {{ui:High quality (path traced)}} sa graphics card; hindi ito kasama sa ibang engine.

- {{ui:Fog and haze}} ay pinupuno ang hangin hanggang sa isang taas ng ambon na pinaiilaw ng araw, langit at lampara. Itinatakda ng {{ui:How far you can see, in meters}} kung gaano ito kakapal (mga 100 m ay magaang haze, 20 m ay makapal na fog), ang {{ui:Fog height above the ground, in meters}} ang kung saan ito nagtatapos, at ang {{ui:Light shafts}} ang kung gaano kakinang ang ambon patungo sa liwanag. Umaalis ang sikat ng araw sa fog sa itaas nito, kaya kapag pumapasok ang araw sa bintana o sa pagitan ng mga gusali, makikita ito bilang sinag ng liwanag.
- {{ui:Smoke or cloud}} ay nagdadagdag ng isang volume ng usok o ulap na naiilawan gaya ng fog. Ang {{ui:Kind}} ay isang {{ui:Cloud}}, isang {{ui:Smoke column}} o {{ui:From a volume file (.ccvol)}}, ang sariling grid format ng CadCraft. Binabago ng {{ui:Detail}} at {{ui:Variation}} ang ginawang ulap o haligi; inilalagay ito ng {{ui:Size of its longest side, in meters (0 = the size of the model)}}, {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} at {{ui:Turn}} (nagsisimula ito sa gitna ng modelo); ginagawang mas siksik ng {{ui:Thickness}}, mas maliwanag patungo sa liwanag ng {{ui:Forward glow}}, at tinatinta ito ng {{ui:Color}}. Nananatili lamang ang volume file habang bukas ang pahina, gaya ng larawan ng langit.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} ay hindi nagbibigay ng dagdag na sample sa mga pixel na tumahimik na. Ang {{ui:Noise to accept}} ay kung gaano karaming grain ang natitira kapag tumigil ang isang pixel. Sinasabi ng linyang nasa ilalim ng larawan kung ilang sample ang nakuha ng isang pixel sa average.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} ay sinusundan ang liwanag mula sa mga lampara at araw, kaya malinis na lumalabas ang maliwanag na batik sa ilalim ng glass ball o ang ilaw ng salamin sa pader, sa halip na magaspang. Naka-off ito kapag naka-on ang fog, usok, light mixing o render elements, at ginawa ito para sa larawan, hindi para sa 360° na larawan.

## The render queue

{{ui:Render queue}} sa dialog: ang {{ui:Add this picture to the queue}} ay pinapanatili ang setting at view ng larawan, at ang {{ui:Start the queue}} ay nagre-render ng naghihintay, isa-isa, sa computer na ito. Nananatili ang queue kapag isinara ang pahina; buksan ang parehong modelo para magpatuloy. Dina-download ng {{ui:Save}} ang tapos na, at naglilinis ng listahan ang {{ui:Remove}} at {{ui:Clear finished}}. High quality ang ginagamit ng queue, kaya kailangan nito ng WebGPU.

## Gaano katagal

Ginagawa ang larawan sa sarili mong computer, ng graphics card nito; walang ina-upload. Tumataas ang oras kasabay ng mga pass at pixel: ang {{ui:Best}} ay may 16 na beses na mga pass ng {{ui:Draft}}, at ang 4K na larawan ay may humigit-kumulang apat na beses na pixel ng Full HD. Mas matagal bawat pass ang malalaking modelo.
