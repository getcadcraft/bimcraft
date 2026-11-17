---
title: Mga wall assembly at reference dimension
summary: Gumawa ng sarili mong wall type layer by layer na may tahasang core, panatilihin ang project material library, at mag-dimension sa mga face at centerline na nananatiling nakakabit kapag nagbago ang pader.
keywords: lod, level of development, lod 200, lod 300, generic, wall assembly, wall type, layers, core, core face, core centerline, cavity, air gap, membrane, house wrap, material library, materyales, kapal, reference dimension, dimension, associative, location line, siding, stud, drywall
from: 4ea8fbf5
---

## Ano ang gagawin mo

Gumawa ng wall type na tumutugma sa pader na itatayo mo: siding, sheathing, stud core na 5½-inch at drywall, o brick, air gap at pader na gawa sa kahoy. Markahan kung aling mga layer ang core, para ang isang dimension o location line ay makapagpanatili ng core habang nagbabago ang mga finish sa paligid nito. Pagkatapos, mag-dimension ng mga pader sa mga face at centerline na gusto mo.

## Gumawa ng wall type

1. Magsimula ng building o magbukas ng IFC model at i-on ang {{ui:Draw}}, pagkatapos piliin ang tool na {{ui:Wall}}.
2. Pumili ng starter sa {{ui:Wall type}} at buksan ang {{ui:Wall assemblies…}}. Nagbubukas ang starter bilang kopya; bigyan ng pangalan ang bagong type.
3. Ang mga layer ay mula sa exterior sa itaas ng listahan hanggang sa interior sa ibaba. Piliin ang materyal ng bawat layer, i-type ang kapal nito (project units, o tahasang halaga gaya ng `12.7 mm` o `1/2"`), piliin ang function nito (finish, substrate, structure, insulation, membrane) at lagyan ng tsek ang mga **Core** na layer. Dapat iisang tuloy-tuloy na grupo ang core.
4. Idinaragdag ng {{ui:Add layer}} ang isang layer, idinaragdag ng {{ui:Add cavity}} ang isang air gap kasama ang bentilasyon nito (hindi tinukoy, walang bentilasyon, may bentilasyon), idinaragdag ng {{ui:Add membrane}} ang isang layer na walang nominal na kapal, gaya ng house wrap. Inililipat ng mga arrow ang layer palabas o papasok.
5. Iginuguhit ng preview ang mga layer sa tamang sukat, may salungguhit ang core, may numero gaya ng mga row, at dinidimension ang bawat layer, ang core at ang kabuuan. I-click ang {{ui:Save type}}.

Nasa listahan ng Wall tool at sa **Properties** ng napiling pader ang bagong type. Ang pag-save ng type na iyong ine-edit ay nagbabago sa bawat pader na gumagamit nito; ang {{ui:Duplicate type}} ay gumagawa ng hiwalay na type at ibinibigay lamang ito sa mga pader na napili mo. Bawat save ay isang undo step, kasama ang mga pader na inililipat nito, ang mga pinto at bintana sa loob nila at ang mga dimension na nakadepende sa mga ito.

Nagdaragdag ng lapad ang cavity. Walang dagdag ang membrane: nananatili ito sa type para mahanap ito ng schedule sa hinaharap, at hindi ito binibilang sa kapal ng pader o ng core. Ang cavity o membrane ay hindi kailanman binibilang bilang solid na materyal. Sa file na naka-save bilang IFC2X3, nananatili ang membrane sa record ng type pero wala sa mga pisikal na material layer nito.

## Lagyan ng tag ang type ng level of development (LOD) nito

Maaaring sabihin ng type kung gaano na ito kadetalyado. Sa editor, nag-aalok ang **Level of development (LOD)** ng nakapirming sukat na 100, 200, 300, 350, 400 at 500, o **Not set**. Ang generic na pader ("Wall 230 generic") ay LOD 100 o 200; ang tiyak na build-up na may tunay na layer nito ("230 clay brick, plastered both sides") ay LOD 300 o higit pa. Ikaw ang nagtatakda ng tag: hindi ito kinukuwenta ng BimCraft, at walang tag ang mga starter type.

Lumalabas ang tag sa tabi ng pangalan ng type sa listahan ng type ng Wall tool, sa Properties ng pader, at sa listahan ng [Palitan ang type](topic:wall-tools), at sinasabi ng ulat pagkatapos ng swap kung tumaas o bumaba ang level. Para makita ito sa schedule na **Mga pader ayon sa type** at sa CSV nito, lagyan ng tsek ang **Ipakita ang LOD ng bawat wall type sa wall schedule** sa Mga setting › BimCraft › Mga pader: idinaragdag ang huling column, LOD. Naka-save ito sa IFC file kasama ng type (sa property set na `CadCraft_WallType` ng type, bilang property na `LOD` at sa loob ng record ng type), kaya nandoon ito kapag muling binuksan ang file. Sa ngayon, sa wall type lamang ang tag, hindi sa iisang elemento o sa iba pang uri ng elemento.

## Mga generic na pader para sa yugto ng sketch

Nagsisimula ang listahan ng Type ng Wall tool sa dalawang **generic** na pader: **Generic wall 200 mm (exterior)** at **Generic wall 100 mm (interior)**. Bawat isa ay isang layer ng generic na materyal, may tag na LOD 200. Gamitin ang mga ito kapag alam mo kung saan pupunta ang mga pader pero hindi pa alam kung ano ang gawa ng mga ito.

Ang pader na may type na may tag na **LOD 100** o **LOD 200** ay iginuguhit sa bawat plan bilang **isang hatched band**, sa bawat detail level: walang layer, walang linya ng layer. Totoo iyon sa mga generic na pader at sa anumang type na sarili mo na tina-tag mo bilang LOD 100 o 200. Kumpleto ang pader mismo: may kapal ito, mga pinto at bintana, mga silid at mga dami nito.

Para i-develop ito, palitan ang type nito (I-edit › Walls › **Swap type**, o Type sa Properties). Hindi na muling iginuguhit ang pader: ang parehong pader ay kukuha ng bagong type, at sinasabi ng ulat kung ano ang gumalaw. Ang type na may tag na LOD 300 o mas mataas ay iginuguhit kasama ang mga layer nito gaya ng dati.

Para iguhit ang bawat pader ayon sa mga layer nito anuman ang tag nito: Mga setting › BimCraft › Mga pader, alisin ang tsek sa **Iguhit ang mga pader ng LOD 100 o LOD 200 na type bilang isang hatched band**.

Generic na uri rin ang mga starter na pinto at bintana (isang sukat at isang paraan ng pagbukas, hindi isang produkto). Kapag naka-on ang **Ipakita ang LOD ng bawat wall type sa wall schedule**, ipinapakita ng mga schedule ng Doors at Windows ang LOD 200 para sa mga ito.

## Bigyan ang type ng datos para sa takeoff

Sa wall type editor, kinukuha ng **Takeoff data** ang kailangang malaman ng estimator tungkol sa pader, minsan lamang para sa type: ang **unit** na binubuo nito (isang brick o block: pangalan, haba, taas at lapad nito), ang **mortar** (pangalan at kapal ng joint) at isang **rate** kasama ang currency code nito (tatlong letra, gaya ng USD, EUR o ZAR) at kung kada ano ito: kada square metro o square foot ng netong lawak ng pader, kada metro o foot ng haba ng pader, o kada pader. Opsyonal ang lahat ng ito.

Naka-save ito sa file kasama ng type. Iniuulat ito ng bawat pader ng type: inililista ng {{ui:Schedules}} › **Wall types: takeoff data** ang unit, ang mortar, ang rate at ang rate na pinarami ng sinukat na dami, at dala ng takeoff na ipinapasa sa TakeoffCraft ang datos sa item ng wall type na iyon. Palitan ito sa type at susunod ang bawat pader.

Tatlo pang field ang para sa pagbibilang ng brick o block at mortar:

- **Waste sa mga unit, %** ay idinaragdag sa bilang ng mga unit. Iwanang walang laman para gamitin ang halaga ng measurement method ng project, o wala kung walang halaga ang method. Ilagay ang 0 para walang waste anuman ang sabi ng method.
- **Extra mortar, %** ay para sa frog o butas na sumisipsip ng mortar. Idinaragdag ito sa volume ng mortar. Iwanang walang laman kung wala.
- **Mga layer na gawa sa unit na ito**: lagyan ng tsek ang bawat layer na dahon (leaf) ng brick o block na ito. Dalawa ang sa cavity wall. Kapag walang nakalagay na tsek, binibilang ang mga core layer.

Maaari ring ang rate ay kada unit na oorderin, kada 1000 unit na oorderin o kada m³ ng mortar. Kapag may haba at taas ang unit, ipinapakita ng **Wall types: takeoff data** ang mga unit kada m² (o ft²) ng isang dahon, ang mga unit na oorderin at ang volume ng mortar; nasa [Bricks, blocks and mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar) ang mga formula. Iisa ang unit ng isang type: hindi pa mabibilang sa iisang type ang dalawang dahon ng magkaibang unit (isang panlabas na dahon ng brick at panloob na dahon ng block).

## Panatilihing nakapirme ang core

Sa **Properties**, itakda ang **Location line** ng pader sa core face o sa core centerline. Kapag nagdagdag ka o nagpakapal ng finish sa susunod, mananatili sa lugar nito ang linyang iyon at lalaki ang pader sa palibot nito; ang mga pader na nagtatagpo rito sa sulok ay susunod, kaya nananatiling sarado ang mga tuwid na sulok.

## Mga materyal ng project

Inililista ng {{ui:Material library…}} ang mga materyal ng project: pangalan, kategorya, kapal na sinisimulan ng layer, display color, cut fill pattern at mga tala. Naka-save ang library sa IFC kasama ng project. Kapag pumili ka ng materyal para sa isang layer, ibinibigay sa layer na iyon ang default na kapal ng materyal, na maaari mo namang palitan; ang pag-edit ng library sa susunod ay hindi kailanman nagbabago ng laki ng mga pader na nagawa mo na. Maaari ka ring gumawa ng materyal mula sa listahan ng materyal ng layer gamit ang {{ui:+ New material…}}.

## Mga reference dimension

{{ui:Annotate}} › {{ui:Reference dimension}}: pumili ng pahalang, patayo o aligned, at ng isang reference: ang exterior o interior na finish face, ang exterior o interior na core face, ang wall centerline o ang core centerline. Piliin ang unang pader, baguhin ang reference kung gusto mo, piliin ang pangalawa, pagkatapos i-click kung saan ilalagay ang linya ng dimension. Ang dalawang reference sa iisang pader ay sumusukat sa kabuuan nitong kapal o sa kapal ng core nito. Inililista ng {{ui:Reference dimensions…}} ang mga dimension ng view, kasama ang anumang nawalan ng pader, kasama ang Properties, I-rebind ang mga reference at Burahin.

### I-dimension ang buong plan ayon sa mga patakaran

Dina-dimension ng {{ui:Annotate}} › {{ui:Dimension the plan…}} ang labas ng floor plan na tinitingnan mo: ang kabuuang sukat sa bawat direksyon, isang hilera ng dimension sa bawat panlabas na gilid (mga dulo ng pader, mga pader na nagtatagpo sa gilid, at ang mga pinto at bintana roon), na nakaayos nang malinaw sa gusali. Lagyan ng tsek ang gusto mo, basahin ang bilang, pagkatapos i-click ang {{ui:Add the dimensions}}. Karaniwang reference dimension ang mga ito, kaya sumusunod ang mga ito sa mga pader kapag gumalaw ang mga pader, at maaari mong piliin, ilipat o burahin ang alinman sa mga ito; ang buong set ay isang undo step, at ang pag-ulit nito ay hindi gumagawa ng kahit isang doble.

Labas lamang ang dine-dimension nito: ang mga silid sa loob ng gusali, mga kurbadong pader at mga pader na hindi parisukat sa plan ay naiiwan para sa mga hand tool, at hindi pader ang mga grid line, kaya hindi nagagawa rito ang mga dimension sa pagitan ng grid. Magagawa rin ito ng nakakabit mong assistant gamit ang `plan_dimension`.

Nakakabit ang dimension sa mga pader, hindi sa isang puwesto sa screen: kapag gumalaw ang pader o nagbago ang type nito, susunod ang halaga. Kapag nabura ang pader, sinasabi ng dimension na hindi ito na-resolve at walang ipinapakitang numero, hanggang i-rebind mo ito o i-undo. Tumatanggap din ang length box ng plan coordinates gaya ng `10',12'` para sa linya ng dimension sa eksaktong lugar.

Para sa mga pader na iginuhit ng BimCraft ang mga dimension, sa mga plan view. Hindi pa nagagawa: mga dimension sa section at elevation, sa mga pinto, bintana at iba pang component, at mga assembly layer na iginuhit sa plan at section; tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).

## Tingnan din

[Gumuhit ng mga pader](topic:draw-walls), [Baguhin ang pader, pinto o bintana](topic:change-a-wall-or-door), [Properties](topic:properties-panel).
