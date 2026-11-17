---
title: Ano ang bago sa 0.9
summary: Mga hugis ng pader, split, offset, stretch at lock-to-grid, mga level sa ilalim ng lupa, grid dimension at Measure sa plan, duplicate na view na may working style at pen table, Report as, Collada at Google Earth export, Scan to BIM, wind at seismic analysis, mga resin printing add-on.
keywords: ano ang bago, 0.9, release notes, wall shapes, rectangle, polygon, arc, pick lines, trace outline, offset, join, box stretch, align and lock, split wall, gap, rejoin, lock to grid, grow from, measure from, add a level below, basement, level command, grid dimensions, measure on the plan, working style, duplicate view, own copy, linked view, pen table, print as shown, report as, type a scale, import svg, place in plan, place in model, collada, dae, kmz, google earth, scan to bim, wind load, seismic, finite element, documents panel, resin printing, whats new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, evacuation, people, queues, acoustics, reverberation, impulse response, flood, wind, earthquake, hazard, life cycle, service life, ids, tags, schedules, move, align, distribute, picture, background, scan to walls, site from civilcraft, panel drawings, framing, solar, pv, split, vrf, fan coil, pipe sizing, cable tray, illuminance, concrete, seismic, compare scan, epsg, projection, documents, template, carbon, cost, energyplus, render engine, open in, usd, glb, unreal, undo, add-ons, pcf, symbols, plants, trace, pens, ribbon, project browser, layout
from: 5624fe88
---

Ito ang mga pagbabago sa BimCraft 0.9, kumpara sa 0.8.1. Ang dalawang pangunahing tema ay isang tunay na wall tool at mga view na kumikilos ayon sa inaasahan ng mga taong galing sa malalaking BIM program. Sa paligid nito ay ang Collada export, mga assistant na kayang maglagay ng electrical device, Scan to BIM, at wind, seismic at finite-element na gawain sa tab na {{ui:Analysis}}.

## Bago

### Mga pader

- **Gumuhit ng buong hugis.** Sa {{ui:Draw}}, buksan ang {{ui:Shapes}} (o pumili ng hugis sa listahang Shape ng Wall row) para sa rectangle, rotated rectangle, polygon na may 3 hanggang 64 na gilid, arc ayon sa sentro, tangent arc, mga pader sa napiling linya, o mga pader sa paligid ng saradong lugar na iki-click mo sa loob. Ang rectangle ay apat na pader na may apat na nakadugtong na sulok at isang undo step. Tingnan ang [Mga hugis ng pader, split, offset, stretch at lock](topic:wall-tools).
- **Itakda bago gumuhit, baguhin pagkatapos.** May {{ui:Offset}} at {{ui:Join}} ang Wall row (alisin ang tsek para gumuhit ng nakatayong mag-isang pader). Pagkatapos, gamitin ang {{ui:Offset}}, {{ui:Box stretch}} at {{ui:Align and lock}} sa mga iginuhit na pader. Pinananatili ng pader na nailipat o na-stretch ang mga pinto, bintana at dimension nito. Iisang undo step ang bawat recipe.
- **Hatiin ang mga pader.** Pinuputol ng {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} at {{ui:Rejoin}} ang isang pader sa isang click o kung saan ito tinatawid ng ibang pader. Tinatanggihan ang hiwang dumadaan sa pinto. Tingnan ang [Mga hugis ng pader, split, offset, stretch at lock](topic:wall-tools).
- **I-lock ang mga pader sa grid line.** Piliin ang pader sa kahabaan ng grid line at lagyan ng tsek ang {{ui:Lock to grid}} sa {{ui:Properties}}. Kapag naka-on ang Grid tool, i-type ang distansya sa {{ui:Move by}} para sa napiling linya, at susunod ang mga naka-lock na pader sa iisang undo step.
- **Hubugin ang isang pader.** Sa {{ui:Properties}} ng isang pader, maaari mong ikabit ang tuktok o base nito sa bubong, sahig o kisame, i-edit ang outline nito sa elevation, ikiling ito, o maghiwa ng opening na walang pinto o bintana. Tingnan ang [Hubog ng pader](topic:wall-shape).
- **Sinasabi ng haba kung aling dulo ang nananatili.** Itinatakda ng {{ui:Grow from}} kung ang simula, dulo o gitna ang nananatili kapag binago mo ang haba.
- **Nagkakasundo ang haba at ang dimension sa plan.** Kinokontrol ng {{ui:Measure from}} (centre line, inside face o outside face) ang field na Length at ang mga dimension ng pader sa plan. Nagsisimula ito sa centre line, kaya ang mga dimension ng pader sa plan ngayon ay bumabasa sa centre line kung saan dati ay outside face. Baguhin ito sa Wall row, sa {{ui:Properties}} o sa {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Mga level, grid at pagsukat

- **Magdagdag ng level sa ibaba.** Ang {{ui:Add a level below}} sa panel na {{ui:Levels}} ay nagdaragdag ng level sa ilalim ng pinakamababa, kasing taas nito, sa negatibong elevation (Level -1, Level -2). Walang ibang gumagalaw. Tumatanggap na ngayon ang {{ui:Add levels…}} ng negatibong taas. Ang pag-type ng LEVEL, LEVELS, STOREY o STOREYS sa command line ay nagbubukas ng {{ui:Add levels…}}, at may button na {{ui:Levels}} sa mga menu at ribbon tab. Tingnan ang [Mga site, gusali at level](topic:site-building-and-levels).
- **Grid dimension sa plan.** Kapag naka-on ang {{ui:Grid}} tool, lagyan ng tsek ang {{ui:Dimensions}} para iguhit ang espasyo sa pagitan ng magkakatabing linya at ang kabuuang sukat sa labas ng mga bubble sa plan ng bawat level. Tingnan ang [I-dimension ang grid](topic:grid-dimensions).
- **Sukatin sa plan.** Ang {{ui:Measure}} sa grupong {{ui:Draw}} ay nagbibigay ng distansya kasama ang pagkakaiba ng X at Y sa pagitan ng dalawang click. Walang nise-save sa model. Tingnan ang [Sukatin sa plan](topic:measure-on-the-plan).
- **Baguhin ang ilang haligi nang sabay.** Pumili ng mga haligi kasama ng isang pader at ililista ng pagpili ang bawat uri kasama ang {{ui:Keep only these}}. Iniiwan ng isang click ang mga haligi at ipinapakita ang mga shared field nito.
- **Iisang unit ng display sa lahat ng dako.** Sumusunod sa unit na pipiliin mo ang mga coordinates, sukat, section, sheet scale, load at resulta ng frame tab, at teksto ng Problems. Nananatiling SI ang mga export.

### Mga view, sheet at print

- **Working style.** Pinipili ng {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} kung ang bawat view ay may sariling annotation at pen table, o nagbabahagi sa mga ito. Tingnan ang [Working style, mga duplicate na view, pen sa papel, Report as at mga template](topic:working-style).
- **I-duplicate ang view.** Maaaring i-duplicate ang mga plan, ceiling plan, callout, elevation at section bilang {{ui:Own copy}} o {{ui:Linked}}; ginagawang independent ng {{ui:Make own copy}} ang naka-link. Tingnan ang [Working style, mga duplicate na view, pen sa papel, Report as at mga template](topic:working-style).
- **I-print gaya ng nakikita, o sa pamamagitan ng pen table.** Naka-save sa IFC kasama ng view ang mga pen override, at ginagawa ng mga sheet at PDF ang mga ito gaya ng screen. Sakop ng parehong topic ang mga pen table.
- **Report as.** Isinusulat ng {{ui:Report as}} sa {{ui:Properties}} ang slab na iginuhit bilang kalsada, pader bilang panel o bubong bilang ramp sa IFC bilang class na pipiliin mo, at binibilang ito sa ganoong paraan sa mga schedule, Quantities, Find, Color by at Problems.
- **I-edit sa elevation at section.** Iguhit at ilipat ang mga pader, opening, level, dimension at note mismo sa elevation o section, kasama ang sarili mong laki ng sheet at title block. Tingnan ang [I-edit sa elevation at section](topic:edit-in-elevations).
- **Mga sheet.** Maaaring landscape o portrait ang bawat sheet. May kahon na {{ui:Type a scale}} sa tabi ng listahan ng scale sa bawat nailagay na view (1:64, 2:1, 1/4" = 1'). Maaari mong i-drag ang nailagay na drawing o itulak ito gamit ang arrow key, at ginagawang title block ng {{ui:Formats…}} › {{ui:Import SVG…}} ang sarili mong disenyo ng sheet, na may mga field na tinype kada sheet.
- **Mga credit ng library sa sheet.** Ang set ng drawing na may item ng Library ay nakakakuha ng schedule na Library credits na maaari mong ilagay sa anumang sheet. Tingnan ang [Library credits](topic:library-credits).

### Library: paglalagay

- **Sumusunod ang paglalagay sa view.** Sa Plan view, ipinapakita ng Library ang {{ui:Place in plan}}; sa 3D ipinapakita nito ang {{ui:Place in model}}; sa Split ipinapakita nito ang split button na may {{ui:Place in plan}} bilang pangunahing aksyon. Parehong nagsusulat ng parehong IFC na elemento ang dalawang paraan. Maaari ka ring mag-drag ng card ng Library papunta sa plan o sa 3D view; gamit ang pen o daliri, pindutin nang matagal, pagkatapos mag-drag. Tingnan ang [Maglagay mula sa Library](topic:place-from-library).

### Mga file at assistant

- **Collada at Google Earth.** Isinusulat ng {{ui:Collada}} sa toolbar (menu na File sa mga estilo ng menu) ang isang .dae, o isang .kmz na nakalagay kung nasaan ang model sa mapa. Tingnan ang [I-export ang model bilang Collada o para sa Google Earth](topic:collada).
- **Makapaglalagay ng electrical device ang mga assistant.** May mga bagong tool ang nakakabit mong assistant para magdagdag, maglista, magbago at magbura ng mga device at magtakda ng mga ilaw. Nananatiling naka-off ang mga assistant hanggang i-on mo ang mga ito sa {{ui:Settings}}. Tingnan ang [Hayaang gumawa ng AI assistant sa model mo](topic:assistants).
- **Scan to BIM (add-on).** Naka-off bilang default at kailangan ang Point clouds add-on. Nagmumungkahi ito ng mga sahig, pader, pinto at bintana mula sa scan kasama ang sukat na paglihis ng bawat isa; isang undo step ang pagtanggap.

### Analysis

- **Datos ng site para sa hangin at lindol.** Sa tab na {{ui:Analysis}}: mga wind load ayon sa ASCE 7-10 o 7-16 para sa matigas at nakasarang gusali, na may puwersa sa bawat palapag bilang mga load case, at datos ng seismic site na may paghahanap sa USGS at ang design spectrum.
- **Sunod na structural at finite element.** Mga concrete check ayon sa ACI 318-19, katumbas na lateral force ayon sa ASCE 7-22, storey drift, mga slab at pader bilang plate, at mga kombinasyon ng load mula sa ASCE 7 at EN 1990. Ang sariling finite-element engine namin ang gumagawa ng shell, tetrahedra at modal analysis. Tingnan ang [Suriin ang mga concrete member at gumawa ng seismic load](topic:concrete-and-seismic) at [Pagsusuri ng frame](topic:frame-analysis).

### Iba pang add-on at dokumento

- **Interior lighting (add-on).** Naglalagay ng mga light fixture at isinusulat ang lux bilang mga numero sa plan ng bawat level, kasama ang tantiya ng glare at isang report na maaaring i-print.
- **Panel ng dokumento.** Ang {{ui:File}} › {{ui:Documents…}} ay may check out at in gamit ang lock file, mga letra ng revision, mga release state at history.
- **Mga rehiyon at steel.** Mga pakete ng drawing at building regulation ng South Africa sa Regulations add-on, at 976 na laki ng UK steel sa shared section table.
- **Libreng resin printing add-on.** Slicer, support at raft, exposure test, at ang mga format ng file na GOO, SL1, Chitubox at Anycubic, lahat ay naka-off bilang default.

## Sa bawat app

- Ang pag-hover sa button o kontrol ay nagpapakita ng Bootstrap tooltip.
- Ang start tip sa walang lamang drawing area ay may close button; naaalala ng BimCraft na isinara ito.
- Ang tab strip ng panel na hindi kasya ay nag-i-scroll na ngayon sa halip na maputol.
- Kapag may bukas na dokumento, binabasa ng browser tab ang "<document> - BimCraft | CadCraft".
- Sa {{ui:Settings}} › {{ui:General}} › {{ui:Layout}}, ang mga layout ay drop-down ng mga pagpipiliang dalawang linya.
- Mas maraming wika ang listahan ng wika sa {{ui:Settings}} kaysa sa 0.8; ang mga wikang hindi Ingles ay mga machine draft.

## Naayos

- **Gumagana na ang Move sa hagdan,** at sa ramp, railing, eroplano ng bubong, nakatayong device, larawan at path.
- **Hindi na nababaluktot ng pag-drag ng pader ang silid.** Ginagalaw ng gitnang grip ang pader na parisukat sa sarili nito at dumudulas ang mga sulok nito sa mga nakadugtong na pader. Pindutin nang matagal ang {{key:Mod}} para sa lumang malayang paggalaw; ibinabalik ng {{ui:Square up}} ang 90 degree.
- **Ang pagbabago ng kapal o type sa nakadugtong na node** ay pinananatiling sarado ang sulok sa L, sa T, sa node ng tatlong pader at katabi ng kurbadong pader.
- **Ang paglipat o pagkopya ng grupo ng mga silid** ay pinananatiling nakadugtong ang mga pader sa labas ng grupo.
- **Pinananatili ng redo ang pagkakakilanlan ng dimension ng pader.**
- **Ang pagpili ng pader kapag naka-off ang Draw** ay hindi na nagbibigay ng error sa Properties.
- **Bumabalik ang Render sa WebGL** kapag hindi masimulan ng GPU, sa halip na huminto.
- **Maaari nang i-on muli ang EnergyPlus check.**
- **Nagbubukas ang Documents bilang nakatitikang dialog.** Isinasara ito ng {{key:Esc}}, ng X o ng click sa madilim na pahina.
- **Lumalabas ang mga button na {{ui:Plan}}, {{ui:Split}} at {{ui:3D}}** sa sandaling may bukas na model, hindi lamang pagkatapos mong i-on ang Draw nang isang beses.

## Tapat na mga limitasyon

- Walang na-print sa totoong hardware. Bago at hindi pa napatunayan ang mga resin support.
- Ang mga resulta ng wind, seismic, concrete at finite-element ay mga kasangkapan sa pagsusuri para sa isang engineer, nasuri laban sa mga saradong formula, hindi laban sa totoong gusali.
- Sinubukan ang Scan to BIM sa isang sintetikong gusali, hindi sa totoong scan, at mga silid na tuwid lamang ang nahahanap nito.
- Hindi pa nabubuksan ang Collada sa Blender o Google Earth dito.
- Ang tantiya ng ilaw ay sinuri laban sa sarili naming trace, hindi laban sa ibang lighting program.
- Hindi pa beripikado ang mga numero ng South Africa.
- Hindi pa nagagawa ang mga istilo ng dugtong ng pader (butt, mitre, square off) at layer priority; mitre ang mga sulok.
- Ang mga wikang hindi Ingles ay mga machine draft.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Ang mga naunang pagbabago ay nasa 0.8 at 0.8.1 na tala sa ibaba ng pahinang ito.

## Mas maaga: 0.8 at 0.8.1

Ito ang mga pagbabago sa BimCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Nakasasagot na ngayon ang BimCraft sa mga tanong tungkol sa gusali at nakasusubok ito, kasama ang mga tao, tunog, tubig, hangin at lindol, at nakaguguhit ito gamit ang mas maraming tool; ang 0.8.1 ay isang release ng pag-aayos.

### Bago

**Subukan ang gusali**

- **Mga tao sa gusali.** Nilalakad ng seksyong {{ui:People in the building}} ng kaliwang panel ang isang evacuation o karaniwang araw ng pagdating sa iyong mga silid, pinto at hagdan. Nakikita mo ang mga pila kung saan nagiging makitid ang gusali, ang pinakamahabang lakad papunta sa exit mula sa bawat silid at kung gaano katagal ang huling tao. Lagyan ng tsek ang {{ui:Shut}} sa isang pinto para makita kung ano ang nagbabago, at lagyan ng tsek ang {{ui:Show the people in the 3D view}} para panoorin ang mga naglalakad. Napupunta sa Problems ang mga resulta. Isang magaspang na crowd model para sa mga desisyon sa disenyo, hindi sertipiko ng fire safety. Tingnan ang [Lakarin ang mga tao sa gusali](topic:people-in-the-building).
- **Acoustics ng silid, at pakinggan ito.** Ibinibigay ng seksyong {{ui:Room acoustics}} ang reverberation time ng bawat silid kada octave band (Sabine at Eyring) mula sa laki nito at sa mga finish na pipiliin mo, at sa target na sarili mo ay sinasabi kung gaano karaming absorption ang makakatugon dito. Pinatutugtog ng {{ui:Play it in this room}} ang boses, palakpak, pinitik na nota o sarili mong sound file sa pamamagitan ng impulse response na kinuwenta para sa silid. Mga karaniwang nailathalang halaga ang mga absorption figure para mapalitan mo. Tingnan ang [Acoustics ng silid](topic:room-acoustics).
- **Playback ng baha, hangin at lindol.** Pinapatakbo ng {{ui:Hazard playback}} ang tubig na tumataas sa mga silid, presyon ng hangin sa bawat palapag at lindol na nagpapayanig sa mga palapag, sa plan o elevation na may time slider. Simpleng model na may mga assumption nito sa panel; hindi ito code check. Tingnan ang [Patakbuhin ang baha, hangin o lindol](topic:hazard-playback).
- **Ano ang nasisira sa limampung taon.** Inililista ng {{ui:Life-cycle view}} ang mga bintana, pinto, finish at bubong na may service life bawat isa, ang mga taon kung kailan sila pinapalitan, at kapag nag-type ka ng gastos kada unit, ang gastos kada taon at ang present value nito. Isinusulat ito ng {{ui:Save the schedule (CSV)}}. Mga planning figure ang mga service life. Tingnan ang [Tingnan kung ano ang nasisira sa loob ng limampung taon](topic:life-cycle-view).
- **Mga concrete at seismic check.** Sinusuri ng mga block na {{ui:Concrete members}} at {{ui:Seismic loads}} ng tab na {{ui:Analysis}} ang mga concrete beam at column ayon sa ACI 318-19 at gumagawa ng katumbas na lateral force ayon sa ASCE 7-22 sa matigas na palapag, kasama ang storey drift. Para masuri ng isang engineer. Tingnan ang [Suriin ang mga concrete member at gumawa ng seismic load](topic:concrete-and-seismic).

**Suriin at mag-ulat**

- **Suriin laban sa IDS.** I-load ang file na `.ids` na ibinigay sa iyo ng kliyente at makikita ang bawat elementong hindi nakakatugon dito sa Problems, bago mo ihatid ang IFC. Buksan ang {{ui:Check against an IDS}} sa ilalim ng {{ui:Model checks}}. Tingnan ang [Suriin ang model laban sa IDS ng kliyente](topic:check-against-ids).
- **Mga tag at schedule.** Magtakda ng sarili mong mga tag, itakda ang mga ito sa maraming elemento nang sabay at gumawa ng mga schedule na ang mga column, filter at grupo ay bumabasa sa mga ito; naka-save sa IFC ang mga tag. Tingnan ang [Mga tag at schedule](topic:tags-and-schedules).
- **Mga dokumento mula sa model.** Pinupunan ng {{ui:Documents from the model}} ang template ng specification mula sa bukas na IFC at ise-save ito bilang PDF, Word document o Markdown. Tingnan ang [Mga dokumento mula sa model](topic:documents-from-the-model).
- **Ihambing ang scan sa model.** Kapag may bukas na point cloud, hinuhusgahan ng {{ui:Compare}} ang bawat elemento bilang built, bahagyang built, nawawala o hindi naabot, at ipinapakita ang porsyento ng built. Tingnan ang [Ihambing ang scan sa model](topic:compare-scan-with-model).
- **Carbon at gastos.** Dinadagdag ng pane na Carbon ang embodied carbon mula sa factor table na maaari mong i-edit, at ikinakalat ng pane na Cost ang mga presyo sa 4D schedule. Generic at minarkahang hindi pa nasusuri ang mga factor na kasama ng BimCraft. Tingnan ang [Embodied carbon at gastos](topic:embodied-carbon-and-5d-cost).
- **Anumang map projection.** Tumatanggap ang {{ui:Measure}} › {{ui:Coordinate system…}} ng numero ng EPSG, UTM zone, pangalan o sarili mong depinisyon ng projection. Tingnan ang [Georeference gamit ang anumang projection](topic:georeference-any-projection).

**Gumuhit at mag-edit**

- **Move, Align at Distribute.** Nasa ilalim ng {{ui:Build}}; sinisimulan ng {{key:Shift+M}} ang Move (ang simpleng {{key:M}} ay Measure pa rin). Kumokopya ang Move habang gumagalaw gamit ang {{key:C}}, bawat hakbang ay isang undo, at nakakarating ito sa isang Live TeamWork session. Tingnan ang [Move, copy, align at distribute](topic:move-align-distribute).
- **Mga larawan sa ilalim ng plan.** Naglalagay ang {{ui:Build}} › {{ui:Picture}} ng PNG, JPEG o WebP sa ilalim ng plan ng level o sa vertical na eroplano. Itakda ang scale sa pamamagitan ng dalawang punto, at ilipat, paikutin, palabuin at i-lock ito. Ang area na kinopya sa MarkupCraft ay idinidikit sa scale ng sheet nito. Tingnan ang [Maglagay ng larawan sa ilalim ng plan](topic:pictures-as-backgrounds).
- **Mga pader mula sa scan.** Kapag may bukas na scan, ang mga pader, pinto at silid ay dumarating bilang mga mungkahi na pinananatili o tinatanggihan mo nang isa-isa, sa isang undo step. Tanging mga pader sa dalawang magkapatayong direksyon lamang ang nahahanap. Tingnan ang [Gawing mga pader ang scan](topic:scan-to-walls).
- **Trace, pen at sketch stair.** Ipinapakita ng {{ui:Trace}} ang ibang level na may guhit sa ilalim ng plan, binibigyan ng {{ui:Pens}} ang mga pader, pinto at bintana ng sarili nilang line weight sa isang view, at ginagawang hagdan ng {{ui:Sketch stair}} ang linya ng paglalakad. Nagbubukas na ang Wavefront OBJ mesh. Tingnan ang [Trace ng level, pen at hagdan mula sa sketch](topic:trace-pens-stairs-obj).
- **Mga gusali sa paligid ng address.** Ang mga gusali at parcel na nahanap ng Address to site ng CivilCraft ay dumarating bilang mga mungkahi; tina-tick mo ang mga idadagdag. Tingnan ang [Magsimula sa site ng CivilCraft](topic:site-from-civilcraft).
- **Mga drawing ng panel.** Ang {{ui:Build}} › {{ui:Panel drawings}} ay bumubuo ng frame ng mga pader, sahig at bubong na gawa sa kahoy o light-gauge steel at nagse-save ng cut list bilang CSV at shop drawing bilang PDF. Mga panimulang halaga, hindi structural design. Tingnan ang [Mga drawing ng panel](topic:panel-drawings).
- **Symbol palette at mga halaman.** Hinahanap ng {{ui:Build}} › {{ui:Symbol palette}} ang mga electrical at plumbing symbol ayon sa pangalan; ang pinagmulang {{ui:Plants}} ng {{ui:Library}} ay naglilista ng mga 400 halaman na may plan symbol. Tingnan ang [Symbol palette](topic:symbol-palette) at [Maglagay ng halaman](topic:plant-list).

**Tubo, duct at enerhiya**

- **Split, VRF at fan coil.** Mga indoor at outdoor unit kasama ang kanilang koneksyon, at mga line set na sinukat mula sa talahanayan ng karaniwang halimbawang halaga na maaari mong baguhin. Tingnan ang [Split, VRF at fan coil](topic:split-vrf-fan-coils).
- **Mga kuwenta.** Tinitingnan ng pane ng Calculations ang mga laki ng supply pipe at duct ayon sa pressure drop, dinadaanan ng cable ang mga tray at conduit at ipinapakita ang fill nito, at kinukuwenta ang illuminance mula sa IES o EULUMDAT file. Nakalabel ang mga default; i-type ang mga halaga ng iyong code. Tingnan ang [Mga kuwenta sa pipe, duct, cable at ilaw](topic:mep-calculations).
- **PCF file.** Isinusulat ng **Export PCF** ng Pipe tool ang mga run para sa pipe-stress at isometric na program, at ang PCF file na binasa pabalik ay gumuguhit ng tubo nito. Tingnan ang [Piping component files](topic:piping-pcf).
- **Solar PV.** Maglagay ng array sa bubong o lupa, lilim ang mga ito mula sa model, tantiyahin ang taunang enerhiya, suriin ang string at gumawa ng one-line diagram data. Generic ang starter module at mga pagkalugi. Tingnan ang [Solar PV](topic:solar-pv).
- **EnergyPlus file.** Isinusulat ng pane na Suriin gamit ang EnergyPlus ang model bilang IDF na patakbuhin sa sarili mong EnergyPlus. Kailangan ng build na ikaw ang nagho-host at ang address na tinype mo ang pagpapatakbo nito sa browser; hindi ito dala ng BimCraft. Tingnan ang [Suriin ang init at lamig gamit ang EnergyPlus](topic:check-with-energyplus).

**Mga larawan at file**

- **Piliin ang render engine.** May pagpipiliang {{ui:Engine}} ang {{ui:Render}}. Nananatiling default ang aming dalawang built-in na engine (Fast at Path tracer). Sine-save ng **Open in** ang eksena bilang USD o glTF file, at ang folder ng proyekto ng Unreal bilang .zip; sa CadCraft Studio, maaaring magdagdag ng engine ang add-on. Hindi pa inilalabas ang Unreal plug-in na nagbubukas ng proyekto. Tingnan ang [Piliin kung aling programa ang gumuguhit ng larawan](topic:render-engines).
- **Studio undo.** Sa loob ng CadCraft Studio, sinasabi ng BimCraft sa Studio ang bawat natapos na hakbang para mabawi ng Studio ang huli mong hakbang sa alinmang window ang huli mong ginamit. Tingnan ang [Undo sa iba't ibang app](topic:undo-across-apps).
- **Mga add-on sa file mo.** Itinatala ng IFC kung aling mga add-on ang nagsulat dito, at iniaalok ang mga wala ka kapag binuksan mo ito. Tingnan ang [Mga add-on sa file mo](topic:add-ons-in-your-file).

**Sa bawat app**

- **Ikonekta ang AI mo.** Maaaring patakbuhin ng sarili mong assistant ang BimCraft sa pamamagitan ng koneksyon ng Studio at sumagot ng mga tanong tungkol sa model, gaya ng aling mga silid ang nasa ilalim ng ibinigay na lawak. Walang sariling AI ang Studio. Tingnan ang [Hayaang gumawa ng AI assistant sa model mo](topic:assistants).
- **Mga row ng toolbar.** Nag-aalok ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ng Wrap, 2 row o 1 row; nananatiling default ang Wrap.
- **Mga input device.** Ibinabahagi ng lahat ng app ang mga setting ng trackpad, pen, 3D mouse, controller at MIDI.
- **Problems at Live.** Gumagana pa rin ang warnings panel at mga Live session gaya ng dati, kasama ang mga bagong check sa itaas na nagpapakain sa Problems.
- **Mga wika.** 54 na wika, sampu sa mga ito ay bago. Ang mga hindi Ingles ay mga machine draft na hindi pa nababasa ng katutubong nagsasalita; karamihan sa mga topic ng tulong ay Ingles.

### Naayos sa 0.8.1

- **Ribbon + layout ng Project browser.** Ang Insert › Import CAD, Insert › Image at Manage › Project Units ay nagsabing "Hindi pa nagagawa sa BimCraft". Ngayon, binubuksan ng Image ang tool na Picture, binubuksan ng Import CAD ang {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF o scan), at binubuksan ng Project Units ang {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Pinapatakbo ng Move at Align ang mga tool na Move at Align, binubuksan ng Level ang {{ui:Add levels…}}, binubuksan ng Phases ang seksyong Renovation phases, at binubuksan ng Materials ang material library.
- **Seksyon ng DWG classes.** Mali ang pagkakabasa nito bilang uri; naayos sa BimCraft at sa iba pang app na nagbabasa ng DWG.
- **Wika habang tumatakbo.** Maaaring magpalit ng wika ang Studio at ang mga naka-pack na edition nang walang restart. Hindi pa ito nasusubukan sa bawat platform; sabihin sa amin kung hindi nagbago ang wika.
- **Archicad bundle script.** Ang `archicad_bundle.py`, hiwalay na download, ay hinahanap na ngayon ang path ng Archicad, binabantayan ang folder hanggang 20 segundo, at sumusubok muli sa tabi ng bundle.

### Wala pa sa bersyong ito

- **Mga kasangkapan sa kaligtasan at disenyo.** Walang limitasyon sa layo ng paglalakad mula sa building code ang People in the building (ikaw ang mag-type ng limitasyon) at hindi pa ito nasuri nang manwal sa totoong plan. Mga planning value, hindi code check, ang mga resulta ng acoustics, life-cycle at hazard.
- **Climate future at EnergyPlus.** Walang built-in na climate future: maaari kang mag-load ng scenario file para sa flood run. Wala sa release na ito ang EnergyPlus run sa browser.
- **Ribbon layout.** Nananatiling "Not built" ang Material Takeoff dahil walang listahan ng dami ng materyal ang BimCraft, at may 54 pang kulay-abong ribbon tool na walang tool ng BimCraft sa likod nito pa.
- **Signing at platform.** Hindi naka-sign ang mga installer ng Windows at ang macOS .dmg, kaya nagpapakita ang SmartScreen ng {{ui:More info}}, pagkatapos ang {{ui:Run anyway}}, at kailangan ng macOS ang right-click pagkatapos ang {{ui:Open}}. Hindi muling ginawa ang build ng iPad at iPhone para sa 0.8.1.
- **Mga test sa totoong pahina.** Ilang lumang browser test ng BimCraft ang pumapalya pa rin sa aming test page, gaya ng dati bago ang 0.8.1.

Ang iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Ang mga naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).
