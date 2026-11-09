---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Nagdaragdag ang BimCraft ng mga taong naglakad sa gusali, acoustics ng silid na maririnig mo, playback ng baha, hangin at lindol, life-cycle view na limampung taon, pagsusuri laban sa IDS, mga tag at schedule, Move, Align at Distribute, mga larawan sa ilalim ng plano, mga pader mula sa scan, mga drawing ng panel, solar, split at VRF system, pipe at cable sizing, pagsusuri ng kongkreto at seismic, anumang map projection, pagpili ng render engine, at Studio undo; inaayos ng 0.8.1 ang mga naka-grey na tool ng Ribbon layout.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, bagong feature, paglikas, tao, pila, acoustics, reverberation, impulse response, baha, hangin, lindol, hazard, life cycle, service life, ids, tag, schedule, move, align, distribute, larawan, background, scan to walls, site mula sa civilcraft, panel drawings, framing, solar, pv, split, vrf, fan coil, pipe sizing, cable tray, illuminance, kongkreto, seismic, compare scan, epsg, projection, dokumento, template, carbon, cost, energyplus, render engine, open in, usd, glb, unreal, undo, add-ons, pcf, symbols, plants, trace, pens, ribbon, project browser, layout
from: 87b03056
---

Ito ang nagbago sa BimCraft 0.8 (2026-11-01) at 0.8.1 (2026-11-02), kumpara sa 0.7. Nakakasagot at nakakasubok na ngayon ang BimCraft tungkol sa isang gusali, sa mga tao, tunog, tubig, hangin at lindol, at nakakaguhit na ito gamit ang mas maraming tool; ang 0.8.1 ay isang fix release.

## Bago

### Subukan ang gusali

- **Mga tao sa gusali.** Ang seksyong {{ui:Mga tao sa gusali}} ng kaliwang panel ay naglalakad sa isang paglikas o sa normal na pagdating ng isang araw sa iyong mga silid, pinto at hagdan. Makikita mo ang mga pila kung saan nagiging makitid ang gusali, ang pinakamahabang lakad papunta sa labasan mula sa bawat silid, at kung gaano katagal ang huling tao. Lagyan ng tsek ang {{ui:Sarado}} sa isang pinto para makita kung ano ang magbabago, at lagyan ng tsek ang {{ui:Ipakita ang mga tao sa 3D view}} para panoorin ang mga naglalakad. Mapupunta sa Problema ang mga resulta. Magaspang na crowd model ito para sa mga desisyon sa disenyo, hindi sertipiko sa kaligtasan sa sunog. Tingnan ang [Lakarin ang mga tao sa gusali](topic:people-in-the-building).
- **Acoustics ng silid, at pakinggan ito.** Ang seksyong {{ui:Acoustics ng silid}} ay nagbibigay ng reverberation time ng bawat silid kada octave band (Sabine at Eyring) mula sa laki nito at sa mga finish na pipiliin mo, at, kasama ang sarili mong target, sinasabi kung gaano karaming absorption ang kailangan para maabot ito. Tumutugtog ang {{ui:I-play sa silid na ito}} ng boses, palakpak, pinitik na nota o sarili mong sound file sa pamamagitan ng impulse response na kinompyut para sa silid. Ang mga figure ng absorption ay karaniwang nai-publish na halaga para palitan mo. Tingnan ang [Acoustics ng silid](topic:room-acoustics).
- **Playback ng baha, hangin at lindol.** Ang {{ui:Hazard playback}} ay nagpapatakbo ng tubig na tumataas sa mga silid, presyon ng hangin sa bawat palapag at lindol na yumuyanig sa mga palapag, sa plano o elevation na may time slider. Simpleng model ito na may kanilang mga assumption sa panel; hindi ito code check. Tingnan ang [Patakbuhin ang baha, hangin o lindol](topic:hazard-playback).
- **Ano ang nasisira sa loob ng limampung taon.** Inililista ng {{ui:Life-cycle view}} ang mga bintana, pinto, finish at bubong na may kanya-kanyang service life, ang mga taon ng pagpapalit nito at, kapag nag-type ka ng cost bawat unit, ang cost kada taon at ang present value nito. Isinusulat ito ng {{ui:I-save ang schedule (CSV)}}. Ang mga service life ay planning figure. Tingnan ang [Tingnan kung ano ang nasisira sa loob ng limampung taon](topic:life-cycle-view).
- **Mga pagsusuri sa kongkreto at seismic.** Sinusuri ng mga block na {{ui:Mga member na kongkreto}} at {{ui:Mga seismic load}} ng tab na {{ui:Analysis}} ang mga concrete beam at column ayon sa ACI 318-19 at gumagawa ng katumbas na lateral force ayon sa ASCE 7-22 sa matitigas na sahig, kasama ang storey drift. Para suriin ng isang engineer. Tingnan ang [Suriin ang mga concrete member at gumawa ng seismic load](topic:concrete-and-seismic).

### Suriin at mag-ulat

- **Suriin laban sa IDS.** I-load ang `.ids` file na ibinigay sa iyo ng kliyente at tingnan sa Problema ang bawat element na hindi tumutugon dito, bago mo ihatid ang IFC. Buksan ang {{ui:Suriin laban sa IDS}} sa ilalim ng {{ui:Model checks}}. Tingnan ang [Suriin ang model laban sa IDS ng kliyente](topic:check-against-ids).
- **Mga tag at schedule.** Magtakda ng sarili mong mga tag, ilapat ang mga ito sa maraming element nang sabay-sabay at gumawa ng mga schedule na ang mga column, filter at group ay bumabasa sa mga ito; nananatili ang mga tag sa IFC. Tingnan ang [Mga tag at schedule](topic:tags-and-schedules).
- **Mga dokumento mula sa model.** Pinupunan ng {{ui:Mga dokumento mula sa model}} ang isang specification template mula sa bukas na IFC at sine-save ito bilang PDF, Word document o Markdown. Tingnan ang [Mga dokumento mula sa model](topic:documents-from-the-model).
- **Ihambing ang scan sa model.** Kapag bukas ang point cloud, hinuhusgahan ng {{ui:Ihambing}} ang bawat element bilang built, partly built, missing o not reached, at ipinapakita ang porsyento ng built. Tingnan ang [Ihambing ang scan sa model](topic:compare-scan-with-model).
- **Carbon at cost.** Pinagsasama-sama ng Carbon pane ang embodied carbon mula sa factor table na maaari mong i-edit, at ikinakalat ng Cost pane ang mga presyo sa 4D schedule. Pangkalahatan ang mga factor na kasama ng BimCraft at minarkahang hindi pa nasusuri. Tingnan ang [Embodied carbon at cost](topic:embodied-carbon-and-5d-cost).
- **Anumang map projection.** Tinatanggap ng {{ui:Measure}} › {{ui:Coordinate system…}} ang EPSG number, UTM zone, pangalan o sarili mong depinisyon ng projection. Tingnan ang [Georeference gamit ang anumang projection](topic:georeference-any-projection).

### Gumuhit at mag-edit

- **Move, Align at Distribute.** Sa ilalim ng {{ui:Build}}; sinisimulan ng {{key:Shift+M}} ang Move (ang simpleng {{key:M}} ay Measure pa rin). Kumokopya ang Move habang gumagalaw gamit ang {{key:C}}, bawat hakbang ay isang undo, at dumadaan ito sa isang Live TeamWork session. Tingnan ang [Move, copy, align at distribute](topic:move-align-distribute).
- **Mga larawan sa ilalim ng plano.** Inilalagay ng {{ui:Build}} › {{ui:Larawan}} ang PNG, JPEG o WebP sa ilalim ng plano ng isang level o sa isang vertical na eroplano. Itakda ang scale sa pamamagitan ng dalawang punto, at ilipat, paikutin, palabuin at i-lock ito. Ang area na kinopya sa MarkupCraft ay ipino-paste sa scale ng sheet nito. Tingnan ang [Maglagay ng larawan sa ilalim ng plano](topic:pictures-as-backgrounds).
- **Mga pader mula sa scan.** Kapag bukas ang scan, lumalabas ang mga pader, pinto at silid bilang mga mungkahi na pipiliin mong panatilihin o tanggihan isa-isa, sa iisang undo step. Tanging mga pader sa dalawang direksyong patayo sa isa't isa ang natutukoy. Tingnan ang [Gawing mga pader ang scan](topic:scan-to-walls).
- **Trace, pens at sketch stair.** Ipinapakita ng {{ui:Trace}} ang ibang level na naka-dashed sa ilalim ng plano, binibigyan ng {{ui:Pens}} ang mga pader, pinto at bintana ng sarili nilang line weight sa iisang view, at ginagawang hagdan ng {{ui:Sketch stair}} ang linyang nilalakaran. Nabubuksan ang mesh na Wavefront OBJ. Tingnan ang [Trace ng level, pens at hagdan mula sa sketch](topic:trace-pens-stairs-obj).
- **Mga gusali sa paligid ng address.** Ang mga gusali at parcel na nahanap ng Address to site ng CivilCraft ay dumarating bilang mga mungkahi; lagyan ng tsek ang mga idadagdag mo. Tingnan ang [Magsimula mula sa site ng CivilCraft](topic:site-from-civilcraft).
- **Mga drawing ng panel.** Bumubuo ng frame para sa mga pader, sahig at bubong sa kahoy o light-gauge steel ang {{ui:Build}} › {{ui:Mga drawing ng panel}}, at sine-save ang cut list bilang CSV at ang shop drawing bilang PDF. Mga panimulang halaga ito, hindi structural design. Tingnan ang [Mga drawing ng panel](topic:panel-drawings).
- **Symbol palette at mga halaman.** Hinahanap ng {{ui:Build}} › {{ui:Symbol palette}} ang mga electrical at plumbing symbol ayon sa pangalan; inililista ng {{ui:Mga halaman}} ng {{ui:Library}} ang mga 400 halaman na may plan symbol. Tingnan ang [Symbol palette](topic:symbol-palette) at [Maglagay ng halaman](topic:plant-list).

### Mga pipe, duct at enerhiya

- **Split, VRF at fan coil.** Mga indoor at outdoor unit kasama ang kanilang koneksyon, at mga line set na may sukat batay sa talahanayan ng karaniwang halimbawang halaga na maaari mong baguhin. Tingnan ang [Split, VRF at fan coil](topic:split-vrf-fan-coils).
- **Mga kalkulasyon.** Sinusuri ng Calculations pane ang sukat ng supply pipe at duct gamit ang pressure drop, dinadaanan ng cable ang mga tray at conduit at ipinapakita ang fill ng mga ito, at kinakalkula ang illuminance mula sa IES o EULUMDAT file. Nakalagay ang label sa mga default; i-type ang mga halaga ng iyong code. Tingnan ang [Mga kalkulasyon ng pipe, duct, cable at ilaw](topic:mep-calculations).
- **PCF file.** Isinusulat ng **Export PCF** ng Pipe tool ang mga run para sa mga program ng pipe-stress at isometric, at kapag binasa muli ang PCF file, ginuguhit nito ang pipe nito. Tingnan ang [Mga piping component file](topic:piping-pcf).
- **Solar PV.** Ikabit ang mga array sa bubong o sa lupa, kalkulahin ang anino nila mula sa model, tantyahin ang taunang enerhiya, suriin ang mga string at gumawa ng data ng one-line diagram. Pangkalahatan ang starter module at mga loss. Tingnan ang [Solar PV](topic:solar-pv).
- **EnergyPlus file.** Isinusulat ng Check with EnergyPlus pane ang model bilang IDF para patakbuhin sa sarili mong EnergyPlus. Para patakbuhin ito sa browser, kailangan ng build na ikaw mismo ang mag-host at i-type ang address nito; hindi ito dala ng BimCraft. Tingnan ang [Suriin ang init at lamig gamit ang EnergyPlus](topic:check-with-energyplus).

### Mga larawan at file

- **Pumili ng render engine.** May pagpipiliang {{ui:Engine}} ang {{ui:Render}}. Nananatiling default ang dalawang built-in na engine namin (Fast at Path tracer). Sine-save ng **Buksan sa** ang scene bilang USD o glTF file, at ang Unreal project folder bilang .zip; sa CadCraft Studio, maaaring magdagdag ng engine ang isang add-on. Hindi pa inilalabas ang Unreal plug-in na nagbubukas ng project. Tingnan ang [Pumili kung aling program ang gumuguhit ng larawan](topic:render-engines).
- **Studio undo.** Sa loob ng CadCraft Studio, sinasabi ng BimCraft sa Studio ang bawat natapos na hakbang para mai-undo ng Studio ang huling hakbang mo sa alinmang window ang huli mong ginamit. Tingnan ang [I-undo sa pagitan ng mga app](topic:undo-across-apps).
- **Mga add-on sa iyong file.** Itinatala ng IFC kung aling mga add-on ang sumulat dito, at nag-aalok ng mga wala ka pa kapag binuksan mo ito. Tingnan ang [Mga add-on sa iyong file](topic:add-ons-in-your-file).

### Sa bawat app

- **Ikonekta ang iyong AI.** Maaaring kontrolin ng sarili mong assistant ang BimCraft sa pamamagitan ng koneksyon ng Studio at sumagot sa mga tanong tungkol sa model, gaya ng aling mga silid ang nasa ilalim ng ibinigay na area. Walang sariling AI ang Studio. Tingnan ang [Hayaang makatrabaho ng AI assistant ang iyong model](topic:assistants).
- **Mga row ng toolbar.** Nag-aalok ang {{ui:Mga setting}} › {{ui:Pangkalahatan}} › {{ui:Mga row ng toolbar}} ng Wrap, 2 row o 1 row; nananatiling default ang Wrap.
- **Mga input device.** Ibinabahagi ng lahat ng app ang mga setting ng trackpad, pen, 3D mouse, controller at MIDI.
- **Problema at Live.** Gumagana pa rin gaya ng dati ang panel ng babala at mga Live session, at ang mga bagong pagsusuri sa itaas ay nagpapakain sa Problema.
- **Mga wika.** 54 na wika, sampu sa mga ito ay bago. Ang mga hindi Ingles ay machine draft pa na hindi pa nababasa ng katutubong tagapagsalita; karamihan sa mga help topic ay nasa Ingles.

## Naayos sa 0.8.1

- **Ribbon + Project browser layout.** Ang Insert › Import CAD, Insert › Image at Manage › Project Units ay nagsabing "Not built in BimCraft yet". Hindi pa ito nagagawa sa BimCraft. Ngayon, binubuksan ng Image ang tool na Picture, binubuksan ng Import CAD ang {{ui:Build}} › {{ui:Mula sa drawing…}} (DWG, DXF, PDF o scan), at binubuksan ng Project Units ang {{ui:Mga setting}} › {{ui:Global}} › {{ui:Units}}. Pinapatakbo ng Move at Align ang mga tool na Move at Align, binubuksan ng Level ang {{ui:Magdagdag ng level…}}, binubuksan ng Phases ang seksyong Renovation phases at binubuksan ng Materials ang material library.
- **Seksyong DWG classes.** Mali ang uri ng pagkakabasa dito; naayos sa BimCraft at sa iba pang app na bumabasa ng DWG.
- **Wika habang tumatakbo.** Maaari nang magpalit ng wika ang Studio at ang mga packed edition nang hindi nire-restart. Hindi pa ito nasusubukan sa lahat ng platform; sabihan kami kung hindi nagbabago ang wika.
- **Archicad bundle script.** Ang `archicad_bundle.py`, hiwalay na download, ay nahahanap na ngayon ang path ng Archicad, binabantayan ang folder nang hanggang 20 segundo at sumusubok muli sa tabi ng bundle.

## Wala pa sa bersyong ito

- **Mga tulong sa kaligtasan at disenyo.** Walang limitasyon sa distansya ng paglalakbay mula sa building code ang Mga tao sa gusali (ikaw ang mag-type ng limitasyon), at hindi pa ito nasusuri nang mano-mano sa totoong plano. Ang mga figure ng acoustics, life-cycle at hazard ay planning value, hindi code check.
- **Mga climate future at EnergyPlus.** Walang built-in na climate future: maaari kang mag-load ng scenario file para sa flood run. Hindi bahagi ng release na ito ang pagpapatakbo ng EnergyPlus sa browser.
- **Ribbon layout.** Nananatiling "Not built" ang Material Takeoff dahil walang material quantity list ang BimCraft, at 54 pang naka-grey na ribbon tool ang wala pang katumbas na tool ng BimCraft.
- **Pag-sign at mga platform.** Walang signature ang mga installer ng Windows at ang macOS .dmg, kaya ipinapakita ng SmartScreen ang {{ui:Higit pang impormasyon}}, at pagkatapos ang {{ui:Patakbuhin pa rin}}, at kailangan ng macOS ng right-click at pagkatapos ang {{ui:Bukas}}. Hindi muling na-build ang build para sa iPad at iPhone para sa 0.8.1.
- **Mga real-page test.** Ilang lumang browser test ng BimCraft ang pumapalya pa rin sa aming test page, gaya ng dati bago ang 0.8.1.

Ang lahat ng iba pa ay nasa [Ano ang hindi pa nagagawa](topic:not-built-yet). Ang mga naunang pagbabago ay nasa [Ano ang bago sa 0.7](topic:whats-new-0-7).
