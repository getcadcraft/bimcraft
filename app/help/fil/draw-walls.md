---
title: Gumuhit ng mga pader
summary: Gumuhit ng mga pader sa plan ng isang level sa pamamagitan ng pag-click sa mga sulok o pag-type ng mga haba; kusang nagdudugtong ang mga sulok, at ang mga pader ay sine-save bilang IFC.
keywords: kurbado, arc, location line, justification, pader, mga pader, gumuhit, plan, floor plan, silid, sulok, dugtong, wall type, 2x6, 2x4, cmu, concrete, taas, level, levels, storey, na-type na haba, ortho, snap
from: 8269cd4b
---

## Ano ang gagawin mo

Gumuhit ng mga pader ng gusali sa plan ng bawat level. I-click kung saan magsisimula ang isang pader at pagkatapos ang bawat sulok; dinudugtong ng BimCraft ang mga sulok para sa iyo, binibigyan ang bawat pader ng mga layer nito (siding, sheathing, studs, drywall …) at itinataas ito hanggang sa level sa itaas. Ipinapakita ng 3D view ang mga pader habang ginagawa mo ang mga ito.

## Buksan ang plan

1. Magsimula ng bagong gusali ([Magsimula ng bagong gusali](topic:start-a-new-building)) o magbukas ng IFC model.
2. I-click ang {{ui:Draw}} sa toolbar. Magbubukas ang bagong gusali na naka-on na ito.
3. Ipinapakita ang plan ng isang level sa kaliwa at ang 3D view sa kanan. Piliin ang level sa listahan sa itaas ng plan, o gamit ang bilog na button sa tabi nito sa **Mga Level** panel.
4. Ang {{ui:Plan}}, {{ui:Split}} at {{ui:3D}} ay mga tool sa {{ui:View}} row ng toolbar (gumagana pa rin ang mga command na PLAN, SPLIT at ang mga key gaya ng dati). Gamitin ang {{ui:Plan}} para sa plan lang, {{ui:Split}} para sa pareho, at {{ui:3D}} para isara ang plan. Kapag makitid ang window (o malaki ang laki ng interface), inilalagay ng {{ui:Split}} ang plan sa itaas ng 3D view sa halip na sa tabi nito.

Pinuputol ng plan ang level 4'-0" (1200 mm) sa itaas ng sahig nito, gaya ng ginagawa ng floor plan. I-scroll para mag-zoom; i-drag gamit ang middle o right button (o pindutin nang matagal ang {{key:Space}} at i-drag) para mag-pan. Kapag naka-on ang {{ui:Select}}, nagpa-pan din ang simpleng drag. Ang {{key:F}} habang nasa ibabaw ng plan ang pointer ay nagkakasya rito.

## Gumuhit ng silid

1. I-click ang {{ui:Wall}} (o pindutin ang {{key:W}}).
2. Piliin ang uri ng pader sa unang listahan, halimbawa **Exterior 2×6** o **Interior 2×4**.
3. Piliin ang taas nito: **Hanggang sa level sa itaas** (susunod ang pader kung gumalaw ang level na iyon), **Hanggang sa** isang level na mas mataas para sa pader na dumadaan sa maraming level (hall ng hagdan, silid na dobleng taas, matataas na gable), o **Fixed height** at i-type ito. Ang ganitong pader ay kabilang sa level kung saan mo ito iginuhit; ipinapakita ito nang mas magaan sa mga plan ng mga level na dinaraanan nito, sumasandal dito ang mga silid doon, at maaari kang mag-click ng mga pinto at bintana papunta rito mula sa mga plan na iyon (nakatayo ang pinto sa sahig ng level na iyon). Para ilipat o hubugin ang mismong pader, pumunta sa level kung saan ito nagsisimula.
4. I-click kung saan magsisimula ang unang pader.
5. I-click ang bawat sulok. Bawat click ay gumagawa ng isang pader; ang susunod ay magsisimula kung saan ito nagtapos. Ipinapakita ang haba at anggulo sa tabi ng pointer.
6. I-click muli ang unang punto para isara ang silid. Sinasabi ng status line kung ilang pader ang mayroon ang silid. Sa centerline mode, makukuha ng bawat pader ang outside layer nito sa labas ng silid.
7. Pindutin ang {{key:Esc}} (o i-right-click, o i-double-click) para huminto nang hindi isinasara.

Kusang nagdudugtong ang mga sulok: nagtatagpo ang dalawang pader sa mitre, ang pader na nagtatapos sa iba ay humihinto sa face nito (isang T), at ang tatlo o higit pang pader sa iisang punto ay nagbabahagi ng sulok. Ang mga pader na nagsasalubong ay iniiwan lang kung ano sila.

Isang buong silid nang sabay-sabay: buksan ang {{ui:Shapes}} para sa rectangle, rotated rectangle, polygon, arko, pader sa napiling linya, o pader sa paligid ng outline (tingnan ang [Mga hugis ng pader, split, offset, stretch at lock](topic:wall-tools)).

## Piliin ang drawing reference

Piliin ang **Centerline**, **Inside face** o **Outside face** bago ang unang click. Kapag may napiling face, ang iyong mga click at na-type na haba ay naglalarawan sa face na iyon; ini-offset ng BimCraft ang centerline ng pader ng kalahati ng kabuuang kapal at dinudugtong ang magkasunod na sulok. Piliin ang **Outside on left** o **Outside on right** batay sa direksyon ng iyong pagguhit. Para sa closed outline na iginuhit nang counterclockwise, nasa kanan ang labas; clockwise, nasa kaliwa. Sa **Inside face**, ang katawan ng pader ay napupunta sa labas na bahagi ng iyong linya; sa **Outside face**, sa kabilang bahagi. Pinapanatili ng face drawing ang napili mong outside side kapag isinara mo ang loop. Sa centerline, ang mga pader na hindi nagsasara ng silid ay kukunin ang outside side na pinili mo; ang pagsasara ng silid ay awtomatikong nagtatakda ng outside ng bawat pader sa labas ng silid, anuman ang direksyon ng pagguhit.

Ang pagpalit ng uri ng pader, reference o outside side ay nagtatapos sa kasalukuyang chain. Malapit sa pabaligtad na sulok, ang mahahabang mitre ay nilalagyan ng hangganan sa pamamagitan ng pag-iwan ng square na dulo.

Habang gumuguhit, ang endpoint sa bakanteng espasyo ay maaaring mag-align nang pahalang o patayo sa endpoint ng pader o sa naunang sulok. Ikinokonekta ng dashed guide ang puntong iyon sa snapped na pointer. Pinananatiling square ng Shift ang direksyon ng pagguhit; hihinto na ang alignment sa kahabaan ng direksyong iyon. Nauuna ang mga kalapit na endpoint, midpoint at intersection ng pader kaysa sa malayong alignment.

## Location line

Kapag ang **Reference** ay nasa **Outside face** o **Inside face**, pinapanatili ng pader ang face na iyon bilang location line nito. Kung kalaunan ay lumapot ang pader o na-flip ang outside nito, nananatili sa lugar nito ang face na iyon at lumalaki o nagfa-flip ang pader sa paligid nito. Sumusunod ang isang tuwid na pader na nagtatagpo rito sa sulok, kaya nagsasara pa rin ang sulok. Maaari mong baguhin ang location line pagkatapos sa **Properties**: tingnan ang [Baguhin ang pader, pinto o bintana](topic:change-a-wall-or-door).

## Gumuhit ng kurbadong pader

1. I-click ang {{ui:Wall}}, pagkatapos piliin ang **Curved** sa listahan ng **Shape** sa options row.
2. I-click kung saan magsisimula ang pader, pagkatapos kung saan ito magtatapos.
3. I-click ang isang punto sa arko nito. O i-type ang taas ng arko at pindutin ang {{key:Enter}}.
4. Nagpapatuloy ang chain mula sa dulo ng pader. Pindutin ang {{key:Esc}} para tapusin ito.

Dinudugtong ng kurbadong pader ang mga pader sa mga dulo nito (gumagana ang mga dugtong sa sulok at T), bumubuo ng mga silid, at may hawak na mga pinto at bintana sa kahabaan ng arko nito. Nananatili silang tuwid na unit, parisukat sa pader sa gitna nila, at sinusukat ang distansya nila sa kahabaan ng arko. Hanggang tatlong-kapat ng bilog lang ang maaaring liko ng isang pader. Nagsa-snap ito sa mga dulo nito at sa gitna ng arko nito.

Hindi pa nagagawa para sa kurbadong pader: {{ui:Trim / extend}} at {{ui:Corner}}, framing, awtomatikong dimension sa plan, at snapping sa kahabaan ng arko. Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).

## I-type ang haba sa halip na mag-click

Pagkatapos ng unang click, i-type at pindutin ang {{key:Enter}}:

| I-type | Gumuguhit |
|---|---|
| `12'6"` o `3810` | pader na ganoon kahaba, sa direksyong ipinapakita ng pointer |
| `12'6"<90` | ganoon kahaba, sa ganoong anggulo (degrees, counter-clockwise mula sa kanan) |
| `@3000,0` | hanggang sa puntong ganoon kalayo mula sa huli, pahalang at pataas |
| `1200,3400` | hanggang sa puntong iyon sa plan |

Ang pag-type ng numero habang naka-on ang Wall tool ay direktang napupunta sa kahon ng {{ui:Length}}. Sa feet at inches, ang simpleng numero ay inches; sa millimeters, millimeters ito. Maaari mong i-type palagi ang unit: `3.5 m`, `10 ft`, `6 1/2"`.

## Snaps

- Nagsa-snap ang mga dulo ng pader, ang kanilang mga face corner, at ang mga midpoint ng pader kapag malapit ang pointer sa mga ito (isang parisukat, isang tatsulok).
- Nagsa-snap ang pointer sa center line ng pader o sa alinmang face (isang krus).
- Mula sa huling punto, nananatili ang direksyon sa bawat 15° kapag malapit; pindutin nang matagal ang {{key:Shift}} para manatili ito sa 0°, 90°, 180° o 270°.
- Bina-round ng mga libreng direksyon ang haba sa 1/2" (o 10 mm).

## Baguhin, i-undo, burahin

- Bawat pader ay isang hakbang sa **Changes**: binabawi ng {{ui:Undo}} at {{ui:Redo}} ang mga pader at ibinabalik ang mga ito.
- Kapag naka-on ang {{ui:Select}}, i-click ang pader sa plan para piliin ito; sinusundan ito ng 3D view at ng **Properties**. Binubura ng {{key:Delete}} ang mga napiling pader, at nililinis muli ang mga pader na dinugtungan nila.

## Mga Level

Inililista ng **Mga Level** panel ang bawat level kasama ang elevation at taas nito.

- I-type ang bagong pangalan, elevation o taas at pindutin ang {{key:Enter}}. Ang pagpalit ng taas ng level (o elevation) ay naglilipat ng mga level sa itaas nito ng parehong halaga, at sumusunod ang mga pader na umaabot sa isang level.
- Nagdaragdag ang {{ui:Add a level on top}} ng level sa itaas ng pinakamataas, kasing-taas nito.
- Nagdaragdag ang {{ui:Add a level below}} ng level sa ilalim ng pinakamababa (isang basement), kasing-taas nito: negatibo ang elevation nito kapag nasa 0 ang pinakamababang level, at walang ibang level na gumagalaw. Inaalis ito ng Undo.
- Ang {{ui:Copy this level…}} ay muling gumuguhit ng nasa level na tinitingnan mo sa ibang level, o sa bagong level sa itaas: ang mga pader nito kasama ang mga pinto at bintana, mga sahig at kisame (hindi bubong). Ang mga pader na umabot sa level sa itaas ay aabot na sa level sa itaas ng bago; kusang lumilitaw ang mga silid. Isang {{ui:Undo}} lang ang bumabawi sa lahat ng ito. Kung may mga pader na ang kabilang level, idinadagdag sa mga ito ang kopya.
- Ang {{ui:Units}} sa toolbar ang pumipili ng units (feet at inches, inches, decimal feet, millimeters, centimeters o meters) para sa lahat ng ipinapakita at binabasa ng mga drawing tool.

## I-save

I-click ang {{ui:Save as IFC}}. Bawat pader ay isang IFC wall na may center line nito, pinagdugtong na hugis, uri at mga layer, `Pset_WallCommon` at base quantities (haba, taas, lawak at volume), kaya nabubuksan ito ng ibang BIM program at naiiskedyul.

## Mabuting malaman

- Iginuguhit ang mga pader sa kanilang center line. Nanggagaling ang kapal sa uri ng pader.
- Ipinapakita ng plan na puno ang mga pader na iginuhit dito, at ang lahat ng iba pa (mga item sa library, mga model mula sa ibang programa) na pinutol ng parehong eroplano, na may nasa ilalim ng hiwa sa manipis na linya.
- Ang mga pader na gawa ng ibang programa ay lumalabas sa plan ngunit hindi pa maaaring baguhin gamit ang mga tool na ito.
