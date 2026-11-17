---
title: I-edit ang family
summary: Baguhin ang mga parameter, formula at solid ng family, ipakita ang mga bahagi sa pamamagitan ng Yes / No na parameter, putulin at pagsamahin ang mga solid, bigyan ito ng connector para sa tubo at duct, at makita ang resulta na iginuhit mula sa IFC na isesave nito.
keywords: family editor, i-edit ang family, parameter, parameters, formula, formulas, visibility, yes no, solid, solids, box, extrusion, extrude, revolve, sweep, profile, arc, boolean, booleans, cut, join, difference, union, handle, handles, work plane, sketch, bagong family, connector, connectors, port, ports, pipe connector, duct connector, drain, suplay ng tubig
from: 1ab31c10
---

## Buksan ang editor

Buksan ang family (ang **Families** ng project browser, o {{ui:Build}} › {{ui:Families…}}) at i-click ang {{ui:Edit the family}}. Para magsimula sa wala, i-click ang {{ui:New family}}: bigyan ito ng pangalan, sabihin kung ano ito (pinto, bintana, furniture, fixture o iba pa) at, para sa pinto o bintana, kung saan galing ang plan symbol at hawakan nito na starter. Magbubukas ang editor sa isang family na may ilang parameter at isang solid.

Ang pag-edit ng starter family ay nananatili sa model na ito lamang. Pinapanatili ng ibang model ang starter gaya ng dati.

Walang magbabago sa model hangga't hindi mo i-click ang {{ui:Save the family}}. May sariling undo at redo ang editor (ang mga arrow button sa tabi ng pangalan, o {{key:Mod+Z}} at {{key:Mod+Y}}); ang pag-save ay isang hakbang sa undo ng model.

## Mga parameter

Inililista ng tab na {{ui:Parameters}} ang mga parameter ng family: pangalan, uri at default. Ang mga uri: **Length** (milimetro), **Angle** (degree), **Number**, **Whole number**, **Yes / No**, **Pen** (1–16), at tatlong may hawak ng salita sa halip na numero: **Text**, **Material** (isa sa mga materyal ng proyekto) at **Fill** (plan fill). Hindi ginagamit ang mga salita sa formula; kinukulayan nila ang solid (ang **Material** nito), pinupuno nila ang bahagi ng symbol, o nilalabas bilang `{Name}` sa teksto ng symbol. Ang kahon na **Per element** ay ginagawang bagay na itinatakda ng bawat nailagay na element para sa sarili nito, sa halip na sa laki.

- Ang **formula** ay nagpapasunod ng parameter sa iba, halimbawa `Width / 30` o `if(Width > 1200, 2, 1)`. Milimetro ang haba sa formula, o magsulat ng unit: `3'`, `6in`, `50cm`.
- Kapag pinalitan ang pangalan ng parameter, napapalitan ito sa bawat formula at field na gumagamit nito. Hindi maaaring alisin ang parameter na ginagamit pa.
- Kinukuha ng **Material** ng solid ang kulay ng materyal ng proyekto (o ng Material parameter), ang **Shown at** ay nagtatago nito sa mas magaspang na detalye, at ang **Repeat** ay gumagawa ng mga kopya: isang bilang (numero o whole-number parameter, 1 hanggang 200) at ang hakbang sa pagitan nila sa x, y at z. Ang paulit-ulit na solid ay isang hilera ng board, bar o butas; kapag ginamit sa cut, sabay-sabay na puputulin ang mga kopya.
- Ang door o window family ay may dalawang pangalan mula sa pader nito: `WallThickness` at `Face` (1 o −1, ang gilid kung saan bumubukas ang pinto).

## Mga solid

Inililista ng tab na {{ui:Solids}} ang mga solid. Magdagdag ng box, extrusion, revolve o sweep:

| Solid | Ang itinatakda mo |
|---|---|
| Box | ang dalawang sulok nito: x0 hanggang x1, y0 hanggang y1, z0 hanggang z1 |
| Extrusion | isang profile sa work plane (plan, front o side), kung nasaan ang plane, at isang lalim |
| Revolve | isang profile, isang axis sa plane, at isang anggulo hanggang 360° |
| Sweep | isang path ng mga punto at isang radius (isang baras o riles) |

Bawat numero ay maaaring typed na numero o ekspresyon ng mga parameter. May kulay at **Shown when** ang bawat solid: iwanang blangko para laging ipakita, o magpangalan ng Yes / No na parameter (o magsulat ng paghahambing gaya ng `Shelves >= 3`) para ipakita lamang kapag totoo iyon. Visibility parameter iyon.

### Gumuhit ng profile

Iginuguhit ang profile ng extrusion o revolve sa work plane nito sa ilalim ng preview:

- I-click sa papel para magdagdag ng punto pagkatapos ng napiling punto.
- I-drag ang punto para ilipat ito. Dumidikit ang mga punto sa grid; hawakan ang {{key:Shift}} para ilagay ang mga ito nang malaya.
- I-click ang maliit na parisukat sa segment para magdagdag ng punto doon. {{key:Shift}}+click dito para gawing arko ang segment na iyon (i-click muli para sa kabilang direksyon, pagkatapos ay tuwid).
- I-double-click ang punto para alisin ito.

Ang mga butas na punto ay itinatakda ng mga parameter: baguhin sila sa table, hindi sa pag-drag.

## Booleans

Pinuputol ng tab na {{ui:Booleans}} ang ikalawang solid mula sa una, o pinagsasama ang mga ito. Maaaring putulin o pagsamahin muli ang resulta ng Boolean. Ang solid na ginamit sa Boolean ay iginuguhit lamang bilang bahagi nito.

Kapag nakatago ang ikalawang solid ng Yes / No parameter nito, pinananatili ang una gaya ng dati; kapag nakatago ang una, nakatago ang resulta.

## Plan symbol

Iginuguhit ng tab na {{ui:Plan symbol}} ang ipinapakita ng plan para sa family na ito sa halip na ang hiwa ng mga solid nito: mga linya, parihaba, bilog, arko, polygon at teksto, sa sarili nitong axes ng family. Bawat bahagi ay may **pen** (1–16, ekspresyon o Pen parameter), **fill** (wala, solid, diagonal, crossed, concrete, insulation, earth, o Fill parameter), **shown by** na ekspresyon, **cut range** sa milimetro sa itaas ng base nito (iginuguhit nang buong bigat kapag nasa loob ng hiwa ng plan, manipis kapag nasa ibaba, may tuldok kapag nasa itaas: ang cabinet na nasa itaas ng cut ay ipinapakitang may tuldok), isang detail level at isang repeat. Maaaring banggitin ng teksto ang mga parameter bilang `{Name}`. Ang **Ipinapakita ng plan: Ang hiwa ng mga solid** ay nagpapanatili ng plan na pinuputol ang mga solid habang nananatili ang symbol sa family. Binabasa ng ibang program ang symbol bilang footprint ng family (mga linya at hugis; nananatili ang teksto sa BimCraft).

## Families inside

Inilalagay ng tab na {{ui:Families inside}} ang ibang family sa loob ng isang ito: isang paa sa table, isang hawakan sa pinto. Piliin ang family, pagkatapos kung saan ito ilalagay (x, y, z), gaano ito kaikot (quarter turn lamang: 0, 90, 180, 270), kailan ito ipapakita, at ang mga halagang makukuha nito, isa bawat linya gaya ng `Height = Height - 40`. Ang pag-save ng inner family ay muling iguguhit ang isang ito; hindi maaaring burahin ang family na hawak ng iba; hindi maaaring maglaman ng sarili ang family, kahit sa pamamagitan ng iba, at humihinto ang nesting sa apat na antas.

## Hotspots

Ang hotspot ay punto o gilid na dina-drag mo para baguhin ang isang parameter. Sa tab na {{ui:Hotspots}}, magdagdag ng isa, piliin ang axis na dina-dragan nito at ang number parameter na binabago nito, at isulat ang posisyon nito gamit ang parehong ekspresyon ng mga solid. Sa preview, piliin ang **Hotspots** sa ilalim ng handles para i-drag ang mga ito. Sa nailagay na element sa plan (piliin ito gamit ang {{ui:Select}}), ipinapakita ang x at y hotspot bilang grip: i-drag ang isa at kukunin ng element ang laking naglalagay ng hotspot doon, sa pamamagitan ng anumang formula sa pagitan nila; ibinabalik ito ng isang Undo. Hindi mababago ng hotspot ang driven parameter, Yes / No, o salita.

Sa 3D view, ang parehong hotspot ay ipinapakita bilang grip sa napiling element, at ang pataas-at-pababang (axis z) ay lumalabas din doon, na hindi kayang iguhit ng plan. Piliin ang element, i-drag ang grip sa kahabaan ng axis nito at bitawan: kukunin ng element ang laking naglalagay ng hotspot doon, bilang isang undo step. Nakatago ang mga grip habang nakabukas ang section box, dahil iisang grip ang ginagamit nito.

## Connectors

May tab na {{ui:Connectors}} ang mga family na nakalagay sa sahig (furniture, fixture at iba pa): ang mga punto kung saan sumasali ang tubo o duct sa element, gaya ng gripo at drain ng basin. I-click ang {{ui:Add a connector}} at itakda:

- **Kind**: pipe o duct, at ang **System** nito (cold water, sanitary drain, supply air…).
- **x**, **y** at **z**: kung nasaan ito, sa sariling axes ng family. Gaya ng mga numero ng solid, maaaring numero o formula ng mga parameter ang bawat isa, kaya gumagalaw ang connector kasama ng laki.
- **Way out**: ang direksyon kung saan lumalabas ang tubo o duct, kasama ang isa sa mga axis ng family (ang drain sa ilalim ng basin ay **Down**).
- **Size (mm)**: ang nominal size ng tubo (DN) o ang diameter ng bilog na duct.
- **Flow**: **In** para sa connector na pinapakain (gripo), **Out** para sa nag-d-drain.

Iginuguhit ng preview ang bawat connector bilang singsing na may arrow palabas. Walang connector ang pinto at bintana.

Para sa plumbing fixture, piliin kung alin ito sa ilalim ng **Plumbing fixture** (water closet, lavatory, kitchen sink, shower, laundry tub). Sinasabi na ito ng mga starter fixture.

Bawat element na nailagay mula sa family ay nakakakuha ng mga connector nito bilang port sa IFC file, at muling ginagawa ang mga ito kapag nagbago ang laki ng element o na-save ang family. Nakikita ng mga program na nagbabasa ng IFC system kung saan dapat sumali ang bawat tubo o duct.

## Ang preview at ang mga handle nito

Ang preview ay ang family na isinulat bilang IFC, ng parehong code na nagsesave nito sa model, at ibinalik na iginuhit. Ang nakikita mo ay ang makukuha ng ibang program. Sa ilalim nito, itinatakda ng **Size shown** ang mga halaga ng parameter na ginagamit ng preview.

Ang **Handles** ay mga tuldok sa preview: ipinapakita ng **The size** ang handle para sa Width, Depth at Height; ipinapakita ng **The solid picked** ang isa sa bawat mukha ng solid na napili mo. I-drag ang handle:

- sa mukhang itinakda ng parameter, nagbabago ang ipinapakitang laki (nananatili ang mga formula ng family);
- sa mukhang itinakda ng typed na numero, nagbabago ang numero.

## Pag-save

Sinusuri ng {{ui:Save the family}} ang family, pagkatapos ay muling iginuguhit ang bawat laki nito at muling ginagawa ang bawat element nito, bilang isang hakbang na maaari mong i-undo. Kapag hindi maiguhit ang isang laki kasama ng pagbabago (halimbawa, walang lapad ang isang solid sa laking iyon), walang sine-save at sinasabi ng editor kung aling laki.

Kung may ibang nag-save ng parehong family habang bukas ang editor mo (sa Live TeamWork session, o sa ibang window), tinatanggihan ng {{ui:Save the family}} ito at sinasabi, sa halip na palitan ang pagbabago nila ng iyo. Isara ang editor, buksan muli ang family para makita ang kanilang pagbabago, at gawin muli ang sa iyo.

:::note
Ang geometry ay sine-save bilang sariling solid ng IFC: extrusion, revolve, swept disk, at resulta ng Boolean. Walang ginagawang listahan ng triangle, kaya maliit ang mga file at nababasa ng ibang program ang mga hugis bilang hugis. Ang mga profile na may arko ay sine-save na may arko sa IFC4; walang arc segment sa profile ang IFC2X3, kaya doon ay sine-save ang mga arko bilang maikling tuwid na piraso.
:::

Tingnan din ang [Mga family at ang kanilang mga laki](topic:families).
