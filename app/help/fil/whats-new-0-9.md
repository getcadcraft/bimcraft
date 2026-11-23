---
title: Ano ang bago sa 0.9 (mas maaga)
summary: Mga hugis ng pader, split, offset, stretch at lock-to-grid, mga level sa ibaba ng lupa, dimension ng grid at Measure sa plano, mga duplicate na view na may working style at pen table, Report as, Collada at Google Earth export, Scan to BIM, wind at seismic analysis, mga add-on sa resin printing.
keywords: ano ang bago 0.9, naunang release, ano ang bago, 0.9, release notes, mga hugis ng pader, rectangle, polygon, arc, pumili ng linya, trace outline, offset, join, box stretch, align and lock, split wall, gap, rejoin, lock to grid, grow from, measure from, magdagdag ng level sa ibaba, basement, level command, dimension ng grid, measure sa plano, working style, duplicate view, sariling kopya, linked view, pen table, print as shown, report as, type a scale, import svg, place in plan, place in model, collada, dae, kmz, google earth, scan to bim, wind load, seismic, finite element, panel ng mga dokumento, resin printing, ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, evacuation, mga tao, queue, acoustics, reverberation, impulse response, baha, hangin, lindol, hazard, life cycle, service life, ids, tags, schedules, move, align, distribute, picture, background, scan to walls, site mula sa civilcraft, panel drawings, framing, solar, pv, split, vrf, fan coil, pipe sizing, cable tray, illuminance, concrete, seismic, compare scan, epsg, projection, documents, template, carbon, cost, energyplus, render engine, open in, usd, glb, unreal, undo, add-ons, pcf, symbols, plants, trace, pens, ribbon, project browser, layout
from: 816df7f8
---

Ito ang nagbago sa BimCraft 0.9, kumpara sa 0.8.1. Ang dalawang pangunahing tema ay isang totoong tool sa pader at mga view na kumikilos ayon sa inaasahan ng mga galing sa malalaking BIM program. Kasama rin ang Collada export, mga assistant na kayang maglagay ng electrical device, Scan to BIM, at wind, seismic at finite-element na trabaho sa tab na {{ui:Analysis}}.

## Bago

### Mga pader

- **Mag-draw ng buong hugis.** Sa {{ui:Draw}}, buksan ang {{ui:Shapes}} (o pumili ng hugis sa Shape list ng Wall row) para sa rectangle, rotated rectangle, polygon na 3 hanggang 64 na gilid, arc sa pamamagitan ng center, tangent arc, mga pader sa mga piniling linya, o mga pader sa paligid ng saradong lugar na i-click mo sa loob. Ang rectangle ay apat na pader na may apat na nagdugtong na sulok at isang undo step. Tingnan ang [Mga hugis ng pader, split, offset, stretch at lock](topic:wall-tools).
- **Itakda bago mag-draw, baguhin pagkatapos.** Nasa Wall row ang {{ui:Offset}} at {{ui:Join}} (alisin ang tsek para mag-draw ng free-standing na mga pader). Pagkatapos, gamitin ang {{ui:Offset}}, {{ui:Box stretch}} at {{ui:Align and lock}} sa mga naguhit na pader. Pinananatili ng pader na nailipat o na-stretch ang mga pinto, bintana at dimension nito. Ang bawat recipe ay isang undo step.
- **Hiwain ang mga pader.** Ang {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} at {{ui:Rejoin}} ay humihiwa ng pader sa isang click o kung saan ito tinatawid ng ibang pader. Tinatanggihan ang hiwa sa pamamagitan ng pinto. Tingnan ang [Mga hugis ng pader, split, offset, stretch at lock](topic:wall-tools).
- **I-lock ang mga pader sa grid line.** Pumili ng pader sa kahabaan ng grid line at lagyan ng tsek ang {{ui:Lock to grid}} sa {{ui:Properties}}. Kapag naka-on ang Grid tool, mag-type ng distansya sa {{ui:Move by}} para sa napiling linya, at susunod ang mga naka-lock na pader sa isang undo step.
- **Hubugin ang isang pader.** Sa {{ui:Properties}} ng isang pader, maaari mong ikabit ang tuktok o base nito sa bubong, sahig o kisame, i-edit ang elevation outline nito, ikiling ito, o maglagay ng opening sa pader nang walang pinto o bintana. Tingnan ang [Hugis ng pader](topic:wall-shape).
- **Ipinapakita ng length kung aling dulo ang nananatili.** Itinatakda ng {{ui:Grow from}} kung ang simula, dulo o gitna ang mananatili kapag binago mo ang haba.
- **Nagkakasundo ang length at ang dimension sa plano.** Ang {{ui:Measure from}} (centre line, inside face o outside face) ang nagpapatakbo sa Length field at sa mga dimension ng pader sa plano. Nagsisimula ito sa centre line, kaya ngayon ang mga dimension ng pader sa plano ay nagbabasa ng centre line, kung saan dati ay outside face. Baguhin ito sa Wall row, sa {{ui:Properties}} o sa {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Mga level, grid at pagsukat

- **Magdagdag ng level sa ibaba.** Ang {{ui:Add a level below}} sa panel ng {{ui:Levels}} ay nagdadagdag ng level sa ilalim ng pinakamababa, kasing taas nito, sa negatibong elevation (Level -1, Level -2). Walang ibang gumagalaw. Tumatanggap na ng negatibong taas ang {{ui:Add levels…}}. Ang pag-type ng LEVEL, LEVELS, STOREY o STOREYS sa command line ay nagbubukas ng {{ui:Add levels…}}, at may {{ui:Levels}} na button sa mga menu at ribbon tab. Tingnan ang [Mga site, gusali at level](topic:site-building-and-levels).
- **Dimension ng grid sa plano.** Gamit ang {{ui:Grid}} tool na naka-on, lagyan ng tsek ang {{ui:Dimensions}} para iguhit ang espasyo sa pagitan ng magkakatabing linya at ang kabuuang sukat sa labas ng mga bubble sa plano ng bawat level. Tingnan ang [Mag-dimension ng grid](topic:grid-dimensions).
- **Measure sa plano.** Ang {{ui:Measure}} sa grupong {{ui:Draw}} ay nagbibigay ng distansya kasama ang X at Y na pagkakaiba sa pagitan ng dalawang click. Walang na-save sa model. Tingnan ang [Measure sa plano](topic:measure-on-the-plan).
- **Baguhin ang ilang column nang sabay.** Pumili ng mga column kasama ng pader, at ililista ng pick ang bawat uri na may {{ui:Keep only these}}. Isang click lang ang magtatago sa mga column at magpapakita ng mga shared field nila.
- **Isang display unit saanman.** Ang mga coordinate, sukat, section, sheet scale, loads at results ng frame tab, at ang teksto ng Problems ay sumusunod sa unit na pipiliin mo. Nananatiling SI ang mga export.

### Mga view, sheet at print

- **Working style.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} ay pumipili sa pagitan ng bawat view na may sariling annotation at pen table, o pagbabahagi ng mga ito. Tingnan ang [Working style, mga duplicate na view, pens sa papel, Report as at mga template](topic:working-style).
- **Mag-duplicate ng view.** Ang mga plano, ceiling plan, callout, elevation at section ay maaaring i-duplicate bilang {{ui:Own copy}} o {{ui:Linked}}; ginagawang independent ng {{ui:Make own copy}} ang naka-link. Tingnan ang [Working style, mga duplicate na view, pens sa papel, Report as at mga template](topic:working-style).
- **Print as shown, o sa pamamagitan ng pen table.** Nananatili sa IFC kasama ng view ang pen overrides, at iginuguhit ito ng mga sheet at PDF gaya ng nasa screen. Sakop din ng parehong topic ang pen tables.
- **Report as.** Isinusulat ng {{ui:Report as}} sa {{ui:Properties}} ang slab na iginuhit bilang kalsada, ang pader bilang panel, o ang bubong bilang ramp sa IFC bilang class na pipiliin mo, at binibilang ito sa ganoong paraan sa mga schedule, Quantities, Find, Color by at Problems.
- **I-edit sa mga elevation at section.** Mag-draw at ilipat ang mga pader, opening, level, dimension at note mismo sa elevation o section, gamit ang sarili mong sheet sizes at title block. Tingnan ang [I-edit sa mga elevation at section](topic:edit-in-elevations).
- **Mga sheet.** Maaaring landscape o portrait ang bawat sheet. May kahon na {{ui:Type a scale}} sa tabi ng listahan ng scale sa bawat nakalagay na view (1:64, 2:1, 1/4" = 1'). Maaari mong i-drag ang nakalagay na drawing o usugin ito gamit ang arrow keys, at ang {{ui:Formats…}} › {{ui:Import SVG…}} ay ginagawang title block ang sarili mong disenyo ng sheet, na may mga field na tina-type kada sheet.
- **Library credits sa sheet.** Ang drawing set na may mga item ng Library ay nakakakuha ng Library credits schedule na maaari mong ilagay sa kahit anong sheet. Tingnan ang [Library credits](topic:library-credits).

### Library: paglalagay

- **Sumusunod ang paglalagay sa view.** Sa Plan view, ipinapakita ng Library ang {{ui:Place in plan}}; sa 3D, ang {{ui:Place in model}}; sa Split, may split button ito na may {{ui:Place in plan}} bilang pangunahing aksyon. Pareho ang IFC element na nalilikha ng dalawang paraan. Maaari ka ring mag-drag ng Library card papunta sa plano o sa 3D view; gamit ang pen o daliri, pindutin nang matagal, saka i-drag. Tingnan ang [Ilagay mula sa Library](topic:place-from-library).

### Mga file at assistant

- **Collada at Google Earth.** Ang {{ui:Collada}} sa toolbar (File menu sa mga menu style) ay nagsusulat ng .dae, o .kmz na nakalagay kung nasaan ang model sa mapa. Tingnan ang [I-export ang model bilang Collada o para sa Google Earth](topic:collada).
- **Kayang maglagay ng electrical device ng mga assistant.** Ang nakakonektang assistant mo ay may bagong tool para magdagdag, maglista, magbago at magbura ng device, at magtakda ng mga ilaw. Naka-off ang mga assistant hanggang i-on mo ang mga ito sa {{ui:Settings}}. Tingnan ang [Hayaang magtrabaho ang AI assistant sa model mo](topic:assistants).
- **Scan to BIM (add-on).** Naka-off bilang default at kailangan ang Point clouds add-on. Nagmumungkahi ito ng mga floor, pader, pinto at bintana mula sa scan, kasama ang sinukat na deviation ng bawat isa; ang pagtanggap nito ay isang undo step.

### Analysis

- **Wind at seismic na site data.** Sa tab na {{ui:Analysis}}: wind loads ayon sa ASCE 7-10 o 7-16 para sa rigid na nakasarang gusali, na may puwersa sa bawat palapag bilang load case, at seismic site data na may USGS lookup at design spectrum.
- **Structural follow-up at finite element.** Concrete checks ayon sa ACI 318-19, equivalent lateral forces ayon sa ASCE 7-22, storey drift, mga slab at pader bilang plate, at load combinations mula sa ASCE 7 at EN 1990. Ang sarili naming finite-element engine ay gumagawa ng shells, tetrahedra at modal analysis. Tingnan ang [Suriin ang concrete members at gumawa ng seismic loads](topic:concrete-and-seismic) at [Frame analysis](topic:frame-analysis).

### Iba pang add-on at dokumento

- **Interior lighting (add-on).** Naglalagay ng light fixture at isinusulat ang lux bilang mga numero sa plano ng bawat level, kasama ang estimate ng glare at isang printable na ulat.
- **Panel ng mga dokumento.** Ang {{ui:File}} › {{ui:Mga dokumento…}} ay may check out at in gamit ang lock file, mga revision letter, release state at history.
- **Mga rehiyon at bakal.** Mga South African na drawing at building-regulation pack sa Regulations add-on, at 976 na laki ng UK steel sa shared section table.
- **Libreng resin printing add-ons.** Slicer, supports at raft, exposure test, at ang GOO, SL1, Chitubox at Anycubic na file format, lahat naka-off bilang default.

## Sa bawat app

- Ang paglagay ng cursor sa button o control ay nagpapakita ng Bootstrap tooltip.
- Ang start tip sa walang lamang drawing area ay may close button; naaalala ng BimCraft na isinara ito.
- Ang tab strip ng panel na hindi kasya ay nag-scroll na ngayon sa halip na maputol.
- Kapag may bukas na dokumento, ang browser tab ay nagbabasa ng "<document> - BimCraft | CadCraft".
- Sa {{ui:Settings}} › {{ui:General}} › {{ui:Layout}}, ang mga layout ay isang drop-down ng dalawang-linyang pagpipilian.
- Ang listahan ng wika sa {{ui:Settings}} ay may mas maraming wika kaysa sa 0.8; ang mga wikang hindi English ay mga machine draft.

## Naayos

- **Gumagana na ang Move sa stairs,** at sa ramps, railings, roof plane, free-standing na device, larawan at path.
- **Hindi na nasisira ng pag-drag ng pader ang silid.** Ang gitnang grip ay ginagalaw ang pader na parisukat sa sarili nito, at dumudulas ang mga sulok nito sa mga nakadugtong na pader. Pindutin ang {{key:Mod}} para sa lumang free move; ibinabalik ng {{ui:Square up}} ang 90 degrees.
- **Ang pagbabago ng kapal o type sa nakadugtong na node** ay nagpapanatiling sarado ang sulok sa L, T, three-wall node at katabi ng curved wall.
- **Ang paglipat o pagkopya ng grupo ng mga silid** ay nagpapanatiling nakadugtong sa labas ng grupo ang mga pader na nakadugtong.
- **Pinapanatili ng Redo ang identity ng dimension ng pader.**
- **Ang pagpili ng pader kapag naka-off ang Draw** ay hindi na nagbibigay ng error sa Properties.
- **Babalik sa WebGL ang Render** kapag hindi masimulan ng GPU, sa halip na tumigil.
- **Maaari nang i-on muli ang EnergyPlus check.**
- **Ang Documents ay bumubukas bilang centred dialog.** Ang {{key:Esc}}, ang X, o click sa madilim na pahina ay nagsasara nito.
- **Ang mga button na {{ui:Plan}}, {{ui:Split}} at {{ui:3D}} ay lumalabas** na sa sandaling may nakabukas na model, hindi lang pagkatapos ma-on ang Draw minsan.

## Mga tapat na limitasyon

- Walang na-print sa totoong hardware. Bago at hindi pa napapatunayan ang mga resin support.
- Pantulong sa pagsusuri para sa engineer ang mga resulta ng wind, seismic, concrete at finite element, na tinsek laban sa closed form, hindi laban sa totoong gusali.
- Nasubukan ang Scan to BIM sa sintetikong gusali, hindi sa totoong scan, at nakakahanap lang ito ng rectilinear na silid.
- Hindi pa nabubuksan dito ang Collada sa Blender o Google Earth.
- Ang lighting estimate ay sinuri laban sa sarili naming trace, hindi laban sa ibang lighting program.
- Hindi pa beripikado ang mga numero ng South Africa.
- Hindi pa nagagawa ang mga wall join style (butt, mitre, square off) at layer priority; mitred ang mga sulok.
- Ang mga wikang hindi English ay machine draft.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Nasa mga note ng 0.8 at 0.8.1 sa ibaba ng pahinang ito ang mas naunang pagbabago.

## Mas naunang: 0.8 at 0.8.1

Ito ang nagbago sa BimCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Masasagot na ngayon ng BimCraft ang mga tanong tungkol sa gusali at masusubukan ito, kasama ang mga tao, tunog, tubig, hangin at lindol, at may mas maraming tool na pang-draw; ang 0.8.1 ay release ng pag-aayos.

### Bago

**Subukan ang gusali**

- **Mga tao sa gusali.** Ang seksyong {{ui:People in the building}} ng left panel ay naglalakad ng evacuation o karaniwang pagdating ng mga tao sa mga silid, pinto at hagdan mo. Makikita mo ang mga pila kung saan sumisikip ang gusali, ang pinakamahabang lakad papuntang exit mula sa bawat silid, at kung gaano katagal ang huling tao. Lagyan ng tsek ang {{ui:Shut}} sa isang pinto para makita kung ano ang magbabago, at ang {{ui:Show the people in the 3D view}} para panoorin ang mga naglalakad. Mapupunta sa Problems ang mga resulta. Magaspang na modelo ng tao para sa mga desisyon sa disenyo, hindi sertipiko ng fire safety. Tingnan ang [Lakarin ang mga tao sa gusali](topic:people-in-the-building).
- **Room acoustics, at pakinggan ito.** Ibinibigay ng seksyong {{ui:Room acoustics}} ang reverberation time ng bawat silid sa bawat octave band (Sabine at Eyring) mula sa laki nito at sa mga finish na pipiliin mo, at kung may sarili kang target, sinasabi nito kung gaano karaming absorption ang kailangan para maabot ito. Pinatutugtog ng {{ui:Play it in this room}} ang boses, palakpak, pinitik na nota o sarili mong sound file sa pamamagitan ng impulse response na kinalkula para sa silid. Mga karaniwang nai-publish na halaga ang mga absorption figure para mapalitan mo. Tingnan ang [Room acoustics](topic:room-acoustics).
- **Pagbaha, hangin at lindol na playback.** Pinatatakbo ng {{ui:Hazard playback}} ang tubig na tumataas sa mga silid, presyon ng hangin sa bawat palapag, at lindol na yumuyanig sa mga palapag, sa plano o elevation na may time slider. Simpleng modelo na may nakasulat na mga palagay sa panel; hindi ito code check. Tingnan ang [Patakbuhin ang baha, hangin o lindol](topic:hazard-playback).
- **Ano ang masisira sa limampung taon.** Inililista ng {{ui:Life-cycle view}} ang mga bintana, pinto, finish at bubong, kasama ang service life ng bawat isa, ang mga taon ng pagpapalit, at, kapag nag-type ka ng halaga kada unit, ang gastos kada taon at ang present value nito. Isinusulat ito ng {{ui:Save the schedule (CSV)}}. Mga planning figure ang service life. Tingnan ang [Tingnan kung ano ang masisira sa loob ng limampung taon](topic:life-cycle-view).
- **Concrete at seismic checks.** Sinusuri ng mga block na {{ui:Concrete members}} at {{ui:Seismic loads}} ng tab na {{ui:Analysis}} ang mga concrete beam at column ayon sa ACI 318-19 at gumagawa ng equivalent lateral forces ayon sa ASCE 7-22 sa rigid na sahig, kasama ang storey drift. Para suriin ng engineer. Tingnan ang [Suriin ang concrete members at gumawa ng seismic loads](topic:concrete-and-seismic).

**Suriin at mag-report**

- **Suriin laban sa IDS.** I-load ang `.ids` file na ibinigay ng kliyente mo at makikita sa Problems ang bawat element na hindi tumutugon dito, bago mo i-deliver ang IFC. Buksan ang {{ui:Check against an IDS}} sa ilalim ng {{ui:Model checks}}. Tingnan ang [Suriin ang model laban sa IDS ng kliyente](topic:check-against-ids).
- **Mga tag at schedule.** Mag-define ng sarili mong tag, itakda ang mga ito sa maraming element nang sabay, at gumawa ng schedule na ang mga column, filter at grupo ay bumabasa sa mga iyon; nananatili sa IFC ang mga tag. Tingnan ang [Mga tag at schedule](topic:tags-and-schedules).
- **Mga dokumento mula sa model.** Pinupunan ng {{ui:Documents from the model}} ang isang specification template mula sa bukas na IFC at sine-save ito bilang PDF, Word document o Markdown. Tingnan ang [Mga dokumento mula sa model](topic:documents-from-the-model).
- **Ihambing ang scan sa model.** Kapag may bukas na point cloud, hinuhusgahan ng {{ui:Compare}} ang bawat element bilang nagawa na, bahagyang nagawa, nawawala o hindi naabot, at ipinapakita ang porsyento ng nagawa. Tingnan ang [Ihambing ang scan sa model](topic:compare-scan-with-model).
- **Carbon at cost.** Dinadagdagan ng Carbon pane ang embodied carbon mula sa factor table na maaari mong i-edit, at ikinakalat ng Cost pane ang mga presyo sa 4D schedule. Generic ang mga factor na kasama ng BimCraft at minarkahang hindi pa nasusuri. Tingnan ang [Embodied carbon at cost](topic:embodied-carbon-and-5d-cost).
- **Anumang map projection.** Ang {{ui:Measure}} › {{ui:Coordinate system…}} ay tumatanggap ng EPSG number, UTM zone, pangalan o sarili mong projection definition. Tingnan ang [Georeference gamit ang anumang projection](topic:georeference-any-projection).

**Mag-draw at mag-edit**

- **Move, Align at Distribute.** Nasa ilalim ng {{ui:Build}}; sinisimulan ng {{key:Shift+M}} ang Move (ang simpleng {{key:M}} ay nananatiling Measure). Kumokopya ang Move habang gumagalaw gamit ang {{key:C}}, bawat hakbang ay isang undo, at dumadaan ito sa Live TeamWork session. Tingnan ang [Ilipat, kopyahin, i-align at i-distribute](topic:move-align-distribute).
- **Mga larawan sa ilalim ng plano.** Ang {{ui:Build}} › {{ui:Picture}} ay naglalagay ng PNG, JPEG o WebP sa ilalim ng plano ng isang level o sa vertical plane. Itakda ang scale sa pamamagitan ng dalawang point, at ilipat, ikiling, palabuin at i-lock ito. Ang area na kinopya sa MarkupCraft ay nagpi-paste sa scale ng sheet nito. Tingnan ang [Maglagay ng larawan sa ilalim ng plano](topic:pictures-as-backgrounds).
- **Mga pader mula sa scan.** Kapag may nakabukas na scan, lalabas ang mga pader, pinto at silid bilang mga mungkahi na isa-isa mong pinapanatili o tinatanggihan, sa isang undo step. Tanging mga pader sa dalawang magkapatong na direksyon ang nahahanap. Tingnan ang [Gawing pader ang scan](topic:scan-to-walls).
- **Trace, pens at sketch stair.** Ang {{ui:Trace}} ay nagpapakita ng ibang level na may tuldok-tuldok na linya sa ilalim ng plano, ang {{ui:Pens}} ay nagbibigay sa mga pader, pinto at bintana ng sariling line weight sa iisang view, at ang {{ui:Sketch stair}} ay ginagawang hagdan ang linyang iginuhit mo. Nagbubukas na ang Wavefront OBJ mesh. Tingnan ang [Trace ng level, pens at hagdan mula sa sketch](topic:trace-pens-stairs-obj).
- **Mga gusaling nakapalibot sa isang address.** Ang mga gusali at parcel na nahanap ng Address to site ng CivilCraft ay dumarating bilang mga mungkahi; piliin ang mga gusto mong idagdag. Tingnan ang [Magsimula mula sa site ng CivilCraft](topic:site-from-civilcraft).
- **Panel drawings.** Ang {{ui:Build}} › {{ui:Panel drawings}} ay nagbabalangkas ng mga pader, sahig at bubong sa kahoy o light-gauge steel at nagse-save ng cut list bilang CSV at shop drawing bilang PDF. Mga panimulang halaga ang mga ito, hindi structural design. Tingnan ang [Panel drawings](topic:panel-drawings).
- **Symbol palette at mga halaman.** Ang {{ui:Build}} › {{ui:Symbol palette}} ay naghahanap ng electrical at plumbing symbol ayon sa pangalan; ang source na {{ui:Plants}} ng {{ui:Library}} ay naglilista ng halos 400 halaman na may plan symbol. Tingnan ang [Symbol palette](topic:symbol-palette) at [Maglagay ng halaman](topic:plant-list).

**Mga pipe, duct at enerhiya**

- **Split, VRF at fan coil.** Mga indoor at outdoor unit na may kanilang connection, at mga line set na sukat ayon sa talahanayan ng mga tipikal na halimbawang halaga na maaari mong baguhin. Tingnan ang [Split, VRF at fan coil](topic:split-vrf-fan-coils).
- **Mga kalkulasyon.** Sinusuri ng Calculations pane ang laki ng supply pipe at duct ayon sa pressure drop, dinadaanan ng mga cable sa tray at conduit at ipinapakita ang fill nila, at kinukuwenta ang illuminance mula sa mga file ng IES o EULUMDAT. Nakalagay na malinaw ang mga default; i-type ang mga halaga ng code mo. Tingnan ang [Mga kalkulasyon ng pipe, duct, cable at ilaw](topic:mep-calculations).
- **Mga PCF file.** Ang **Export PCF** ng Pipe tool ay nagsusulat ng mga takbo para sa pipe-stress at isometric program, at ang PCF file na binasa pabalik ay gumuguhit ng pipe nito. Tingnan ang [Piping component files](topic:piping-pcf).
- **Solar PV.** Maglagay ng array sa bubong o sa lupa, lagyan ng anino mula sa model, tantyahin ang taunang enerhiya, suriin ang mga string at gumawa ng data ng one-line diagram. Generic ang starter module at mga loss. Tingnan ang [Solar PV](topic:solar-pv).
- **EnergyPlus file.** Ang pane na Check with EnergyPlus ay nagsusulat ng model bilang IDF na patatakbuhin sa sarili mong EnergyPlus. Para tumakbo ito sa browser, kailangan ng build na ikaw ang nagho-host at ang address na ita-type mo; hindi ito dala ng BimCraft. Tingnan ang [Suriin ang pagpainit at paglamig gamit ang EnergyPlus](topic:check-with-energyplus).

**Mga larawan at file**

- **Piliin ang render engine.** Ang {{ui:Render}} ay may pagpipiliang {{ui:Engine}}. Nananatiling default ang dalawa naming built-in na engine (Fast at Path tracer). Ang **Buksan sa** ay nagse-save ng scene bilang USD o glTF file, at isang Unreal project folder bilang .zip; sa CadCraft Studio, maaaring magdagdag ng engine ang isang add-on. Hindi pa inilalabas ang Unreal plug-in na nagbubukas ng project. Tingnan ang [Piliin kung aling program ang gumuguhit ng larawan](topic:render-engines).
- **Studio undo.** Sa loob ng CadCraft Studio, sinasabi ng BimCraft sa Studio ang bawat tapos na hakbang para mabawi ng Studio ang huli mong hakbang sa alinmang window na huli mong ginamit. Tingnan ang [Undo sa lahat ng app](topic:undo-across-apps).
- **Mga add-on sa file mo.** Itinatala ng IFC kung aling mga add-on ang sumulat dito, at iniaalok ang mga wala ka kapag binuksan mo ito. Tingnan ang [Mga add-on sa file mo](topic:add-ons-in-your-file).

**Sa bawat app**

- **Ikonekta ang AI mo.** Maaaring patakbuhin ng sarili mong assistant ang BimCraft sa pamamagitan ng koneksyon ng Studio at sagutin ang mga tanong tungkol sa model, gaya ng aling mga silid ang nasa ilalim ng isang area. Walang sariling AI ang Studio. Tingnan ang [Hayaang magtrabaho ang AI assistant sa model mo](topic:assistants).
- **Mga row ng toolbar.** Ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ay nag-aalok ng Wrap, 2 row o 1 row; nananatiling default ang Wrap.
- **Mga input device.** Ang mga setting ng trackpad, pen, 3D mouse, controller at MIDI ay shared ng lahat ng app.
- **Problems at Live.** Gumagana pa rin ang warnings panel at mga Live session gaya ng dati, at pinapakain ng mga bagong check sa itaas ang Problems.
- **Mga wika.** 54 na wika, sampu sa mga ito ay bago. Ang mga wikang hindi English ay machine draft na hindi pa nababasa ng native speaker; karamihan ng help topic ay English.

### Naayos sa 0.8.1

- **Ribbon at layout ng Project browser.** Ang Insert › Import CAD, Insert › Image at Manage › Project Units ay nagsasabing "Not built in BimCraft yet". Ngayon, binubuksan ng Image ang Picture tool, binubuksan ng Import CAD ang {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF o scan), at binubuksan ng Project Units ang {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Pinapatakbo ng Move at Align ang Move at Align tools, binubuksan ng Level ang {{ui:Add levels…}}, binubuksan ng Phases ang seksyong Renovation phases, at binubuksan ng Materials ang material library.
- **Seksyong DWG classes.** Mali ang pagkakabasa nito sa type; naayos sa BimCraft at sa iba pang app na bumabasa ng DWG.
- **Wika habang tumatakbo.** Maaari nang magpalit ng wika ang Studio at ang mga packed edition nang hindi nire-restart. Hindi pa ito nasusubukan sa bawat platform; sabihin sa amin kung hindi nagbago ang wika.
- **Archicad bundle script.** Ang `archicad_bundle.py`, isang hiwalay na download, ay hinahanap na ngayon ang path ng Archicad, binabantayan ang folder nang hanggang 20 segundo at sumusubok muli sa tabi ng bundle.

### Wala pa sa bersyong ito

- **Mga aid sa kaligtasan at disenyo.** Ang People in the building ay walang limitasyon sa distansya ng paglalakbay mula sa building code (ikaw ang mag-type ng limitasyon) at hindi pa nasusuri nang mano-mano sa totoong plano. Mga planning value, hindi code check, ang mga figure ng acoustics, life-cycle at hazard.
- **Climate futures at EnergyPlus.** Walang built-in na climate futures: maaari kang mag-load ng scenario file para sa flood run. Hindi bahagi ng release na ito ang EnergyPlus run sa browser.
- **Layout ng ribbon.** Nananatiling "Not built" ang Material Takeoff dahil walang material quantity list ang BimCraft, at 54 pang kulay-abong ribbon tool ang walang katumbas na tool sa BimCraft.
- **Pag-sign at mga platform.** Hindi naka-sign ang mga Windows installer at ang macOS .dmg, kaya ipinapakita ng SmartScreen ang {{ui:More info}}, pagkatapos ang {{ui:Run anyway}}, at kailangan ng macOS ng right-click pagkatapos ang {{ui:Open}}. Hindi muling na-build ang iPad at iPhone build para sa 0.8.1.
- **Mga test sa totoong pahina.** Ang ilang mas lumang browser test ng BimCraft ay bumabagsak pa rin sa test page namin, gaya ng dati bago ang 0.8.1.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Ang mas naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).
