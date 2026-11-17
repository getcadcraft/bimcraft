---
title: Mga view, view range at sarili mong mga sheet
summary: Hanapin ang bawat plano, elevation, section, 3D view, schedule at sheet sa project browser, itakda kung paano pinuputol ang bawat plano at kung ano ang ipinapakita nito, gumawa ng callout, gumuhit ng linya at hatch sa iisang view, panatilihin ang mga setting sa view template, at ayusin ang sarili mong mga sheet.
keywords: callout, callout view, detail view, pinalaking plano, drafting, detail lines, drafting lines, hatch, hatch region, filled region, fill pattern, reflected ceiling plan, rcp, ceiling plan, ceiling grid, light fixtures, project browser, views, view range, crop, crop region, crop view, view scale, underlay, ipakita ang ibang level, halftone, cut plane, cut height, top, bottom, view depth, visibility, categories, itago sa view, view template, templates, sheet, sheets, title block, viewport, scale, ayusin ang sheets, layout, pdf, plan view settings, browser
from: ee1d5afe
---

## Ano ang gagawin mo

Ayusin ang trabaho gaya ng pagsasaayos ng mga BIM project: bawat view sa iisang listahan, bawat plano ay pinuputol kung saan mo gusto, parehong setting para sa maraming plano sa pamamagitan ng template, at mga sheet na ikaw mismo ang naglalatag.

## Ang project browser

1. I-on ang {{ui:Draw}}. May {{ui:Project browser}} sa kaliwang panel sa ilalim ng mga model.
2. Inililista nito:
   - **Floor plans**: bawat level. I-click ang isa para makita ang plano nito. Ang slider button sa tabi nito ay nagtatakda ng view range nito (sa ibaba). Ang plano na sumusunod sa template ay nagpapakita ng pangalan ng template.
   - **Ceiling plans**: ang reflected ceiling plan ng bawat level (sa ibaba).
   - **Callouts**: bawat callout kasama ang view na iginuguhit dito, at ang {{ui:Bagong callout}}. Ang **Nawawala** ay naglilista ng mga callout na wala na ang view.
   - **Elevations** at **Sections**: ang apat na gilid at bawat section line. I-click ang isa para buksan ang drawing set kung saan sila iginuguhit.
   - **3D views**: ang mga view na sinave mo gamit ang {{ui:Views}}.
   - **Schedules**: i-click ang isa para ipakita sa ilalim ng plano.
   - **Sheets**: ang mga sheet na ginawa mo, ang {{ui:Bagong sheet}}, at ang {{ui:Drawing set…}} para sa buong set na gawa mula sa model.
   - **View templates**, kasama ang {{ui:Bagong template}}, at **Mga link** (ang mga naka-link na model).

## Itakda ang view range ng plano

1. I-click ang slider button sa tabi ng level sa **Floor plans**.
2. Itakda ang mga taas, sa ibabaw ng level na iyon:
   - **Cut at**: kung saan pinuputol ng plano ang mga pader, pinto at bintana (1200 mm, mga 4 ft, maliban kung babaguhin mo).
   - **Top**: ang mga bagay sa itaas ng cut at sa ilalim ng top ay iginuguhit na dashed (halimbawa ang mataas na cabinet, beam). Iwanang walang laman para sa taas ng level.
   - **Bottom** at **Depth below the bottom**: ang mga bagay na mas mababa sa cut ay iginuguhit sa manipis na linya pababa sa bottom, at hanggang ganoon kalayo sa ilalim nito.
3. Sa ilalim ng **Shown in this plan**, alisin ang tsek ng ayaw mong isama sa planong ito: muwebles, silid, column at iba pa.
4. Para mag-alis ng mga indibidwal na elemento: piliin ang mga ito sa plano o sa 3D view, buksan ang dialog at i-click ang {{ui:Itago dito ang napili}}. Ibinabalik sila ng {{ui:Ipakita lahat}}.
5. I-click ang {{ui:Gamitin ang mga setting na ito}}.

Muling pinuputol kaagad ang plano, at sumusunod dito ang drawing set at ang iyong mga sheet. Sumusunod din ang hiwa ng point cloud sa cut height.

## I-crop ang plano, bigyan ito ng scale, ipakita ang ibang level sa ilalim nito

Nasa iisang dialog ang tatlong ito (ang slider button sa tabi ng level):

- **Scale**: ang scale kung saan ipi-print ang plano ({{ui:I-print}} sa bar ng plano) at kung saan ito mapupunta sa sheet. Pinipili ng **Fit** ang pinakamalaking standard scale na kasya.
- **Crop region**: i-click ang {{ui:Gumuhit sa plano…}}, saka i-click ang isang sulok at ang kabilang sulok sa plano ({{key:Esc}} ang humihinto). Ang plano sa labas ng region ay tinatabunan sa screen, at maaari ka pa ring magtrabaho doon; sa print, sa mga sheet at sa drawing set, ang plano ay nagpapakita lang ng nasa loob. Ang {{ui:I-clear}} ang nag-aalis ng crop. Ang {{ui:Fit}} ang nagfi-fit sa crop.
- **Underlay**: pumili ng ibang level. Ang mga pader, cut elements, pinto at bintana nito ay iginuguhit nang magaan sa ilalim ng planong ito, para maiayon sa level sa ibaba o sa itaas. Hindi mo sila mapipili rito, at naka-light grey ang print nila.

Ang view template ay nagdadala ng scale kasama ng mga taas at categories. Ang crop region at underlay ay palaging sa iisang plano lang.

## Ceiling plan ng isang level

Bawat level ay may reflected ceiling plan sa tabi ng floor plan nito: ang plano na tiningnan mula sa ibaba, para sa paglalatag ng mga kisame at ng mga nakasabit dito.

1. I-click ang level sa ilalim ng **Ceiling plans** sa browser, o piliin ang {{ui:Ceiling plan}} sa tabi ng level sa bar ng plano.
2. Pinuputol ang mga pader sa 2300 mm (mga 7'-6"). Iginuguhit ang nasa itaas ng cut na iyon at sa ilalim ng taas ng level: mga kisame kasama ang kanilang grid at height tag (`CLG 2438`), mga ilaw, beam. Hindi isinasama ang mga pinto, bintana at ang nasa ilalim ng cut.
3. Para gumawa ng kisame, gamitin ang {{ui:Ceiling}} gaya sa floor plan, saka piliin ito at piliin ang **Pattern** nito sa Properties. Tingnan ang [Mga silid, sahig, kisame at bubong](topic:floors-and-roofs).
4. Para magsabit ng ilaw dito, ilagay ang item mula sa library habang nakikita ang ceiling plan: mapupunta ito sa **At the ceiling**. Tingnan ang [Maglagay ng equipment at muwebles mula sa library](topic:place-from-library).
5. Ang slider button sa tabi ng ceiling plan ay nagtatakda ng cut at top nito, scale, categories, crop region at underlay, gaya ng sa floor plan. Hindi tumatanggap ng view template ang ceiling plans.

Iginuguhit ito sa parehong direksyon ng floor plan (reflected na plano, hindi mirror image). Hindi iginuguhit ang kisameng mas mababa sa cut: ibaba ang cut para sa ceiling plan ng level na iyon. Napupunta ang ceiling plans sa sarili mong mga sheet tulad ng plano; hindi ito idinadagdag ng drawing set nang mag-isa.

## Gumawa ng callout

Ipinapakita ng callout ang bahagi ng plano nang mas malaki, sa sarili nitong scale, bilang sarili nitong view: isang kusina, hagdan, o sulok ng pader.

1. Ipakita ang plano, ceiling plan o callout na kinabibilangan nito.
2. Piliin ang {{ui:Annotate}} › {{ui:Callout}} sa bar ng plano (o ang {{ui:Bagong callout}} sa browser), saka i-click ang isang sulok ng lugar at ang kabilang sulok. Humihinto ang {{key:Esc}}.
3. Ginagawa ang callout sa 1:20 (1/2" = 1'-0" sa feet at inches). Iginuguhit sa plano ang rectangle nito at isang bilog na tag.
4. I-click ang tag gamit ang {{ui:Select}}, o ang callout sa browser, para buksan ito: ipinapakita ng plano ang lugar lamang, sa scale ng callout. Sinasabi ng bar ang {{ui:Callout:}} at ang pangalan nito; ang {{ui:Up}} ay bumabalik sa view kung saan ito iginuguhit.
5. Ang slider button sa tabi nito (sa browser o sa bar) ay nagpapalit ng pangalan nito, nagbabago ng scale nito, muling gumuguhit ng rectangle nito, o nagbubura nito.

Ipinapakita ng callout ang ipinapakita ng view nito: parehong cut, parehong categories, ang mga kisame ng ceiling plan. Ganoon din ang callout ng callout. Ilagay ang callout sa sheet gaya ng plano; sasabihin ng tag nito kung nasaan ito (`1 / A-501`: ang unang view sa sheet A-501). Ang {{ui:I-print}} sa callout ay nagpi-print lang ng lugar na iyon sa scale nito.

Ang pagbura ng callout ay binubura rin ang mga callout na iginuhit sa loob nito, at ang mga linya at hatch na iginuhit sa mga iyon (tinatanong ka muna). Kapag nabura ang level kung saan iginuhit ang callout, mananatili ang callout sa ilalim ng **Nawawala** hanggang burahin mo ito, at iuulat ng mga sheet na kinaroroonan nito na nawawala ito.

## Gumuhit ng linya at hatch sa iisang view

Ang drafting ay 2D na gawain na kabilang sa isang view lang: mga tala sa linya, isang hatched na lugar ng kongkreto o lupa, isang filled region. Hindi ito nasa 3D view kailanman, at hindi rin sa ibang plano.

1. Ipakita ang floor plan, ceiling plan o callout na guguhitan.
2. Pumili mula sa {{ui:Annotate}} sa bar ng plano:
   - {{ui:Line}}: i-click kung saan ito magsisimula at saan magtatapos. Ang susunod na linya ay magsisimula kung saan natapos ang huli; ang {{key:Enter}} ay nagsisimula ulit.
   - {{ui:Polyline}}: i-click ang mga punto nito; ang {{key:Enter}} o double-click ang nagtatapos dito, at ang click sa unang punto ang nagsasara nito.
   - {{ui:Rectangle}}: dalawang magkasalungat na sulok.
   - {{ui:Hatch region}}: piliin ang **Pattern** (Solid, Diagonal, Cross-hatch, Concrete, Insulation, Earth) at ang scale nito sa bar, saka i-click ang mga sulok; ang {{key:Enter}}, double-click, o click sa unang sulok ang nagsasara. Kapag naka-tsek ang {{ui:Fill a room}}, isang click sa loob ng silid ay ina-hatch ang outline nito.
3. Sumusunod sa mga pader ang mga punto sa pag-snap; pinapanatiling parisukat ng {{key:Shift}} ang linya, at maaari kang mag-type ng haba gaya ng sa pader. Inaalis ng {{key:Backspace}} ang huling punto.

Pumili ng linya o hatch gamit ang {{ui:Select}} sa plano. Binabago ng Properties ang pattern at scale ng hatch, at may {{ui:Move…}} ito (i-click ang punto na aalisan, saka kung saan ito pupunta). Binubura ito ng {{key:Delete}}. Bawat linya, hatch at pagbabago ay isang hakbang.

Nagpi-print ang mga linya at hatch kasama ng plano, napupunta sa iyong mga sheet kasama nito, at nasa drawing set. Alisin ang tsek sa **Mga annotation** sa view range para iwan sila sa labas ng view na iyon.

## Panatilihin ang mga setting sa view template

1. I-click ang {{ui:Bagong template}} sa browser, o ang {{ui:I-save bilang template…}} sa view range ng isang plano (saka gagamit ng template ang planong iyon).
2. Bigyan ito ng pangalan, itakda ang mga taas at categories, at i-click ang {{ui:I-save ang template}}.
3. Sa view range ng anumang plano, pumili ng template. Kinukuha ng plano ang mga taas at categories nito; palitan ang template para baguhin ang bawat plano na gumagamit nito. Ang mga elementong isa-isa mong itinago ay nananatiling nakatago sa sarili nilang plano.
4. I-click ang isang template sa browser para baguhin, palitan ang pangalan o burahin. Ang pagbura nito ay nag-iiwan sa mga plano nito ng sarili nilang setting.

## Ayusin ang sarili mong sheet

1. I-click ang {{ui:Bagong sheet}}. I-type ang numero at titulo nito, at piliin ang papel.
2. I-click ang {{ui:Add}} sa tabi ng plano, ceiling plan, callout, elevation, section o schedule. Mapupunta ito sa gitna ng sheet.
3. I-drag ito sa nais na lugar. Kapag napili ito, pumili ng **Scale**, o iwan sa scale ng plano (kapag may scale ang plano), o kung wala, ang scale na kasya sa ikatlong bahagi ng sheet. Inaalis ng {{ui:Alisin ang sheet}} ang plano sa sheet.
4. I-click ang {{ui:I-save ang sheet}}. Nakalista ito sa ilalim ng **Sheets**; i-click ito para baguhin mo sa susunod.
5. Sine-save ng {{ui:I-download bilang PDF}} ang sheet na iyon bilang isang pahina.

## Ano ang dapat mong makita

- Mga plano na pinutol sa iyong mga taas, kung saan dashed ang nasa itaas ng cut at wala ang mga inalis mo.
- Isang cropped na plano na tinatabunan sa labas ng region nito sa screen, at pinuputol dito sa papel, sa scale na ibinigay mo.
- Ceiling plan na may grid ng mga kisame at height tag, at ang mga ilaw sa kisame.
- Mga callout na may rectangle at tag sa plano, bawat isa ay nagbubukas sa sarili nitong scale.
- Mga linya at hatch lamang sa view kung saan mo sila iginuhit.
- Ang iyong mga sheet ay muling iginuguhit mula sa model sa bawat pagbukas, kaya laging tugma ang mga ito. Ang view na nawala ang level o section line nito ay iniuulat, hindi iginuguhit.
- Bawat pagbabago rito ay isang hakbang: ang {{key:Mod+Z}} ang nag-u-undo nito.

:::note
Lahat ng ito ay nakatago sa IFC file bilang property set na hindi ginagalaw ng ibang programa: ang view range at ceiling plan ng bawat level sa level, at ang mga template, callout at iyong mga sheet sa project. Ang mga linya at hatch ay IFC annotations sa kanilang level, kaya nakikita sila ng ibang programa bilang 2D curves at hatched areas (sarili nilang drawing ng bawat pattern), bagaman hindi kung aling view sila kabilang.
:::

:::tip
Tinatawag ng ibang BIM program ang cut na view range o cut plane, ang mga template ay view templates o view settings, ang drafting lines ay detail lines, at ang hatch regions ay filled regions. Pareho ang mga ideya; hindi naglalakbay ang mga view setting papunta sa kanila.
:::
