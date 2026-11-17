---
title: Mga hugis ng pader, split, offset, stretch at lock
summary: Gumuhit ng mga pader bilang rectangle, polygon, arc, sa napiling linya o paikot sa isang outline; hatiin ang mga ito, alisin ang isang piraso, mag-offset, box stretch, i-align at i-lock sa isa't isa, sa dimension o sa grid line. Pinananatiling nakadugtong ng bawat pagbabago ang mga pader at isang undo step ito.
keywords: palitan ang type, baguhin ang type, retype, ano ang gumalaw, lod, level of development, join style, mitre, miter, butt, square off, wall joins, next, runs through, disallow join, allow join, layer priority, core, priority, junction, rectangle, rotated rectangle, polygon, inscribed, circumscribed, arc, centre, center, tangent arc, pick lines, tab, trace, outline, magic wand, split, split with gap, gap, delete segment, rejoin, offset, copy, box stretch, marquee, stretch, align, lock, padlock, constraint, lock dimension, edit dimension, grid, lock to grid, move grid line, placement offset, join off, free-standing, grow from, measure from, centre line, inside face, outside face, disjoin, alt
from: 5b7d2f75
---

## Ano ang gagawin mo

Gumawa at baguhin ang mga pader gamit ang mga recipe ng wall tool. Bawat isa ay nagtatapos gaya ng pagguhit ng pader sa pamamagitan ng mga sulok nito: kusang nagdudugtong ang mga sulok, naka-save sa file ang mga dugtong, at ang buong pagbabago ay isang hakbang sa **Changes** na binabawi ng {{ui:Undo}}. Pinananatili ng mga pader ang kanilang pagkakakilanlan: ang pader na hinati, in-offset o in-stretch mo ay nananatiling parehong pader, kasama ang mga pinto, bintana at dimension nito.

## Gumuhit ng rectangle, polygon o arc

Kapag naka-on ang {{ui:Draw}}, buksan ang {{ui:Shapes}} sa grupong Draw (o pumili ng hugis sa listahang **Hugis** ng Wall row). Ipinapakita ng Wall row ang wall type, ang drawing reference, ang outside side at ang tuktok, gaya ng para sa tool na {{ui:Wall}}. Pagkatapos, i-click, o i-type ang mga punto (x,y · @dx,dy · @length<angle · haba sa kahabaan ng pointer):

- **Rectangle**: dalawang magkasalungat na sulok. Apat na pader, apat na dugtong sa sulok, isang hakbang.
- **Rotated rectangle**: kung saan nagsisimula at nagtatapos ang unang gilid (iyon ang nagtatakda ng pagliko at haba nito), pagkatapos ay ikatlong click para sa kabilang gilid.
- **Polygon**: ang sentro, pagkatapos ang sulok (**Inscribed**) o ang gitna ng gilid (**Circumscribed**). Itakda muna ang **Sides** (3 hanggang 64).
- **Arc, centre**: ang sentro, ang simula (iyon ang nagtatakda ng radius), ang dulo. **Way round**: ang mas maikling daan, pakaliwa o pakanan. Ang sweep na lampas tatlong-kapat ng bilog ay iginuguhit bilang dalawang pader.
- **Tangent arc**: i-click ang dulo ng isang pader, pagkatapos kung saan nagtatapos ang arc. Lumalabas ang arc sa dulo ng pader sa sariling direksyon ng pader.

Nakaharap palabas ang labas ng saradong hugis. Kapag iginuhit sa **Outside face** o **Inside face**, ang mukhang iki-click mo ang mananatili sa puwesto.

## Mga pader sa mga linyang mayroon ka na

- **Pick lines**: i-click ang isang linya at may pader na ilalagay dito. Pindutin ang {{key:Tab}} (o pindutin nang matagal ang {{key:Shift}} habang nag-click) para kunin ang buong kadena ng mga linyang magkakadugtong sa dulo. Ang mga linya ay ang drafting line ng view na ito, ang trace reference at ang mga grid line.
- **Trace outline**: i-click sa loob ng lugar na sarado ng mga linyang iyon o ng mga pader. Pumapalibot ang mga pader sa pinakamaliit na lugar sa paligid ng click.

## Itakda bago gumuhit: offset at join

May dalawa pang field ang Wall row, na ginagamit ng tool na {{ui:Wall}} at ng mga hugis:

- **Offset**: iginuguhit ang mga pader sa layong ito mula sa linyang iki-click mo: + sa kaliwa nito, − sa kanan nito, kapag tiningnan sa direksyon ng pagguhit mo.
- **Join**: alisin ang tsek para gumuhit ng nakatayong mag-isang pader. Makakakuha ang mga dulo nito ng **Disallow join** at mananatiling malaya saan man sila pumunta (tingnan ang [Baguhin ang pader](topic:change-a-wall-or-door)).

## Hatiin, alisin ang isang piraso, pagdugtungin muli

Buksan ang {{ui:Walls}} sa grupong Edit.

- **Split**: i-click ang pader kung saan dapat putulin, o i-type ang distansya mula sa simula nito. Malapit sa pader na tumatawid dito, dumidikit ang hiwa sa lugar kung saan sila nagtatagpo. Iisa ang type ng dalawang bahagi at nananatiling magkadugtong sa dulo. Ang **Gap** ay nag-iiwan ng puwang na may ganoong haba na nakasentro sa hiwa. Ang **Libreng dulo** ay ibinibigay sa mga dulong pinutol ang Disallow join sa halip (Mga setting › BimCraft › Mga pader › **Kapag hinati ang pader** ang nagtatakda kung alin ang may tsek sa simula). Sumasama sa bahaging kinatatayuan nito ang pinto o bintana; tinatanggihan ang hiwang dumadaan dito.
- **Burahin ang segment**: i-click kung saan nagsisimula at nagtatapos ang piraso. Kasama nitong mabubura ang pinto sa piraso.
- **Rejoin**: i-click ang dalawang bahagi ng iisang pader (nasa iisang linya, iisang type). Nagiging muling iisang pader sila, ang una mong na-click, kasama ang mga pinto ng dalawa.

## Join style, Disallow join, layer priority

Buksan ang {{ui:Walls}} sa grupong Edit.

- **Join style**: i-click ang sulok kung saan nagtatapos ang dalawang tuwid na pader. Lumilipat ang bawat click sa susunod na istilo: **Mitre** (pinuputol ang dalawang dulo sa linyang mula sa panloob patungong panlabas na sulok, ito ang pinagsisimulan ng bawat sulok), **Butt** (dumadaan ang isang pader hanggang sa panlabas na mukha ng isa, na humihinto sa gilid nito) at **Square off** (gaya ng butt, at ang dumadaang pader ay nagtatapos nang parisukat; sa tamang anggulo, mukhang butt ito). **Next**, o {{key:Tab}}, ang ginagawang dumadaan na pader ang kabilang pader. Ipinapakita ng listahang **Style** sa bar ang sulok na huli mong na-click. Ang parehong dalawang pagpipilian ay nasa **Properties** ng isang pader: **Join style at start / at end** at **Runs through**. Bawat pagbabago ay isang hakbang sa **Changes**. Sumusunod ang plan, ang 3D body, ang mga silid at ang mga dami.
- Sa T, laging dumadaan ang pader na tinamaan sa gilid nito. Kung saan nagtatawid ang dalawang pader, ang isang click (o ang **Continuous where it crosses** sa Properties) ang nagsasabi kung alin sa dalawa ang tuloy-tuloy; iyon ang nagpapasya kung aling layer ng pader ang iginuguhit sa pagtawid.
- Ang istilo ay pag-aari ng dugtong: nananatili ito kapag gumalaw ang mga pader at nawawala lamang kapag nawala ang dugtong (nabura ang pader, nahati sa dulong iyon, o nakakuha ang dulo ng Disallow join). Ang sulok na may kurbadong pader, o kung saan nagtatagpo ang tatlo o higit pang pader, ay nananatiling mitre. Ang sulok na mas matalas sa mga 30 degree, o mas patag sa mga 150, ay bumabalik din sa mitre.
- **Disallow join**: i-click malapit sa dulo ng pader. Pinapalaya ang dulong iyon: wala itong dinudugtong, saan man pumunta ang pader, hanggang i-click mo ulit. Namamarkahan ng krus ang mga malayang dulo habang naka-on ang tool. Ang parehong switch ay **Join at start / Join at end** sa Properties.
- **Layer priority**: kung saan nagtatagpo ang mga pader na may layer, pinuputol ng mas malakas na layer ang mas mahina, kaya nagdudugtong ang mga core sa core at humihinto ang finish sa mas malakas na layer. May prayoridad ang bawat layer mula 0 hanggang 999; bilang default ay mula ito sa function ng layer (structure 800, substrate 600, insulation 400, membrane 300, finish 200, cavity 100). Binubuksan ng {{ui:Layer priority}} ang wall assembly, kung saan ang column na **Priority** ang nagtatakda ng sariling numero ng layer. Humihinto ang mga layer na magkapareho ang prayoridad laban sa isa't isa, at iginuguhit lamang ang isang linya sa pagitan ng magkakaibang materyal. Makikita ito sa mga plan na may detalyeng **Katamtaman** o **Pino**, sa mga sulok, T join at pagtawid ng dalawang tuwid na pader; ang Mga setting › BimCraft › Mga pader › **Clean wall layers where walls meet** ang nag-o-off nito. Sa loob lamang ng mga pader nito binabago ang iginuguhit: nananatili ang mga outline at dami ng mga pader gaya ng ibinibigay ng join style.

## Palitan ang type ng maraming pader

Ang paglipat mula sa sketch plan patungo sa working drawing ay halos pagbabago ng type: nagiging tiyak na build-up ang generic na pader. Wala kang kailangang iguhit muli.

1. Pumili ng mga pader (isa, o marami gamit ang {{key:Ctrl}} o {{key:Shift}}).
2. Sa Properties, pindutin ang **Palitan ang type…** sa ilalim ng Uri ng pader (o buksan ang {{ui:Walls}} sa grupong Edit at piliin ang {{ui:Swap type}}, na nagbubukas ng parehong listahan). Nagbubukas ang listahan sa loob ng Properties, sa sariling bloke ng mga napiling pader. Hindi ito dialog at wala itong tinatakpan: patuloy na gumagana ang plan, ang 3D view at ang pagpili habang bukas ito, at sinusundan nito ang mga pader na pinipili mo.
3. Ipinapakita ng listahan ang bawat wall type kasama ang kapal at LOD tag nito, halimbawa "Wall 230 generic, LOD 200" at "230 clay brick, plastered both sides, LOD 300". Namamarkahan ang mga type na mayroon na ang mga napiling pader. I-type sa **Hanapin** para paliitin ito: isang pangalan, isang kapal, o `lod 300`.
4. I-click ang isang type. Lumilipat sa type na iyon ang bawat napiling pader sa iisang hakbang, kaya binabawi ng isang {{ui:Undo}} ang buong pagpapalit. Isinasara ng maliit na x ang listahan.

Pinananatili ng bawat pader ang location line nito. Ang pader sa centre line nito ay lumalaki sa magkabilang gilid; ang pader na ang location line ay isang face ay pinananatili ang face na iyon at lumalaki sa kabilang direksyon, at ang mga pader na nakadugtong dito ay sumusunod sa mga sulok. Ang mga pader na naka-lock sa napalitang pader ay sumusunod din dito. Nananatili sa kanilang pader ang mga pinto at bintana at muling pinuputol para sa bagong kapal.

Pagkatapos ng pagpapalit, ipinapakita ng listahan ang **Ano ang gumalaw**: ilang pader ang nagbago at sa ano, ang kapal at LOD bago at pagkatapos, ang mga pader na gumalaw sa gilid para mapanatili ang location line nito, ang mga nakadugtong na pader na sumunod, ang mga pinto at bintanang muling ikinabit sa pader, at ang bawat silid na nagbago ang lawak, kasama ang lawak nito bago at pagkatapos. Sinasabi rin ito ng status bar sa isang linya. Sinasabi lamang ng ulat ang nangyari; hindi nito kailanman pinipigilan ang pagpapalit. Ang pagpili ng type sa **Properties › Uri ng pader** ay gumagawa ng parehong pagpapalit at nagbibigay ng parehong ulat.

Dalawang bagay ang humihinto sa pagpapalit, at kapag nangyari iyon, walang nababago: ang pinto o bintanang hindi na kakasya sa pader nito (nagiging mas maikli ang pader kapag sumunod ang sulok; gawing mas makitid ang pinto o ilayo muna ito sa sulok), at ang lock na masisira ng pagpapalit (pader na naka-lock sa grid line sa pamamagitan ng centre line nito habang face ang location line nito; i-unlock ito o ibalik ang location line sa centre line).

Magagawa ng assistant na nakakabit sa BimCraft ang parehong pagpapalit (mga tool na `wall_types_list` at `walls_swap_type`) at makukuha ang parehong ulat pabalik.

Itinatakda ang LOD tag ng type sa wall assembly editor: tingnan ang [Wall assemblies](topic:wall-assemblies).

## Offset at box stretch

- **Offset**: i-click ang pader, pagkatapos ang gilid kung saan ililipat, o i-type ang distansya. Gumagalaw ang pader na parisukat sa sarili nito at humahaba ang mga pader na nakadugtong dito. Lagyan ng tsek ang **Copy** para sa parallel na kopya (hindi ito nakadugtong sa orihinal).
- **Box stretch**: i-click ang dalawang sulok ng isang kahon, pagkatapos ang punto kung saan gagalaw at ang punto kung saan pupunta. Gumagalaw ang bawat dulo ng pader sa loob ng kahon; gumagalaw ang pader na nasa loob nang buo at kasama rin ang mga pader na nakasandal dito; humahaba ang mga pader na tumatawid sa kahon.

## I-edit ang dimension at i-lock ito

Pumili ng reference dimension (Mag-annotate › {{ui:Reference dimension}}) at i-type ang halaga nito sa **Properties**: gumagalaw ang pader ng pangalawang reference nito na parisukat sa sarili nito, nananatili ang unang reference, at sumusunod ang mga nakadugtong na pader. Lagyan ng tsek ang **I-lock ang dimension na ito** para panatilihin ang halaga: kapag gumalaw ang alinmang pader sa susunod, susunod ang isa. Hindi maaaring i-type sa ibabaw ng naka-lock na halaga hanggang alisin mo ang tsek nito.

## I-align at i-lock

**I-align at i-lock**: i-click ang mukha ng pader (o ang centre line, malapit sa gitna ng pader) o isang grid line, pagkatapos ang mukha ng pader na dadalhin sa linyang iyon. Gumagalaw ang pader na parisukat papunta rito. Lagyan muna ng tsek ang **I-lock** para manatiling nakahanay sila: may lumalabas na padlock sa plan, at kapag gumalaw ang isang pader, susunod ang isa. Inililista ng **Properties** ng pader ang mga **Mga lock** nito, bawat isa ay may **I-unlock**.

## I-lock ang mga pader sa grid line

Pumili ng pader na tumatakbo sa kahabaan ng grid line, o ang dulo nito ay nakapatong dito, at piliin ang grid line sa **Properties** › **I-lock sa grid**. Pagkatapos, piliin ang grid line gamit ang tool na {{ui:Grid}} at i-type ang distansya sa **Ilipat ng**: gumagalaw ang linya na parisukat sa sarili nito at sumusunod ang mga pader na naka-lock dito, kasama ang mga nakadugtong nilang pader, sa iisang hakbang. Hindi maaaring ilipat palayo sa grid line ang pader na naka-lock dito nang mag-isa (ilipat ang linya, o i-unlock ang pader); tinatanggihan ang grid line na naka-turn kaya hindi na mananatiling parisukat dito ang naka-lock na pader. Hindi nawawala ang lock kapag pinalitan ng pangalan ang linya; natatanggal ang lock kapag binura ito.

## Haba: aling panig ang nananatili, at ano ang sinusukat nito

- **Grow from** (Properties ng isang pader): **Nananatili ang simula** (gumagalaw ang dulo), **Nananatili ang dulo** (gumagalaw ang simula) o **Nananatili ang gitna** (gumagalaw ang magkabilang dulo nang kalahati). Habang nagta-type ka ng Haba, minamarkahan ng plan ang punto na nananatili. Ang pader na nakadugtong sa dulong gumagalaw ay gumagalaw na parisukat sa sarili nito at pinananatili ang anggulo nito.
- **Measure from** (katabi ng Dimensions sa plan, sa Properties, at sa Mga setting › BimCraft › Mga pader): ang centre line, ang inside face o ang outside face. Iisa ang binabasa ng field na Haba at ng mga dimension ng pader sa plan, kaya nagkakasundo sila. Nagsisimula ito sa centre line.
- Para ilipat ang pader nang hiwalay sa mga dugtong nito (nasisira ang mga ito, nananatili ang pagkakakilanlan ng pader), pindutin nang matagal ang {{key:Alt}} habang dina-drag ang gitnang grip nito.

## Mabuting malaman

- Ang mga recipe na ito ay mula sa espesipikasyon ng wall tool (pahina 4 hanggang 9). Ginawa ang join style at layer priority para sa tuwid na pader; ang layer priority ay lumalabas sa plan lamang (hindi sa section, elevation o 3D, kung saan iisang katawan ang pader), hindi sa mga node ng tatlo o higit pang pader, at hindi dinadala ang mga membrane.
- Naka-save ang istilo ng dugtong sa record nito sa IFC file (ang pangalan ng `IfcRelConnectsPathElements`, halimbawa `CadCraft join L butt 1`), kaya nababasa pa rin ng ibang programa ang dugtong at ang mas lumang file ay nagbubukas na may mitre.
- Naka-save sa IFC file ang mga lock at dugtong (ang mga lock bilang `CadCraft_WallHolds` sa project, ang mga dugtong bilang `IfcRelConnectsPathElements`), kaya nandoon ang mga ito kapag muling binuksan mo ang file.
- Maaaring hatiin, pagdugtungin muli at alisan ng piraso ang kurbadong pader; hindi ito maaaring i-offset o i-lock.
- Tingnan din ang [Gumuhit ng mga pader](topic:draw-walls), [Baguhin ang pader, pinto o bintana](topic:change-a-wall-or-door) at [Hubog ng pader](topic:wall-shape).
