---
title: Okusha ku-0.8 kanye ne-0.8.1
summary: I-BimCraft yengeza abantu abahamba esakhiweni, ukuzwakala kwamagumbi okungezwa, ukudlala kwezikhukhula, umoya nokuzamazama, umbono wempilo yonke yeminyaka engamashumi amahlanu, ukuhlolwa nge-IDS, amathegi nezinhlu, Hambisa, Hlanganisa nokusabalalisa, izithombe ngaphansi kweplani, izindonga kusuka ekuskeniweni, imiklamo yamaphaneli, amandla elanga, ukuhlukanisa nama-VRF, ukulinganisa amapayipi nezintambo, ukukhonkrithi nokuzamazama, noma yiluphi uhlelo lwemephu, ukukhetha injini yokurenda, nokuhlehlisa kwe-Studio; i-0.8.1 ilungisa amathuluzi aphuzile e-Ribbon.
keywords: okusha, yini okusha, amanothi okukhishwa, izinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, izinkinga, abantu, ukuhamba, izikhukhula, umoya, ukuzamazama, ukuzwakala, life cycle, impilo, ids, amathegi, izinhlu, hambisa, hlanganisa, isithombe, isikena, izindonga, imiklamo yamaphaneli, ilanga, pv, ukuhlukanisa, vrf, fan coil, usayizi wamapayipi, ntambo, ukukhonkrithi, ukuzamazama, qhathanisa, epsg, iphrojekshini, amadokhumenti, isifanekiso, ikhabhoni, izindleko, energyplus, injini yokurenda, vula ngo-, usb, glb, unreal, hlehlisa, izengezo, pcf, izimpawu, izitshalo, landela, amapeni, ribbon, umphathi wamaprojekthi, isakhiwo
from: 87b03056
---

Lokhu yikho okushintshile ku-BimCraft 0.8 (2026-11-01) ne-0.8.1 (2026-11-02), uqhathanisa no-0.7. Manje i-BimCraft ingaphendula imibuzo ngesakhiwo futhi iyihlole, ngabantu, ngomsindo, ngamanzi, ngomoya nangokuzamazama, futhi iyidwebe ngamathuluzi amaningi; i-0.8.1 ukukhishwa kokulungisa.

## Okusha

### Hlola isakhiwo

- **Abantu esakhiweni.** Isigaba se-{{ui:Abantu esakhiweni}} sepaneli yangakwesokunxele sihambisa ukuphuma esakhiweni noma izivakashi zansuku zonke zifike emagumbini, emnyangweni nasezitebhisini. Ubona izindawo lapho isakhiwo sincipha, ukuhamba okude kakhulu ukuya ophumeni kusuka kusigumbi ngasinye, nesikhathi esithatha umuntu wokugcina. Thika {{ui:Valiwe}} emnyangweni ukuze ubone ukuthi yini eshintsha, bese uthika {{ui:Bonisa abantu kumbono we-3D}} ukuze ubuke abahambi. Okutholakele kuya ku-Izinkinga. Kuyisilinganiso sezixuku esincane sezinqumo zokuklama, hhayi isitifiketi sokuphepha komlilo. Bona [Hambisa abantu esakhiweni](topic:people-in-the-building).
- **Ukuzwakala kwegumbi, nokulizwa.** Isigaba se-{{ui:Ukuzwakala kwegumbi}} sinikeza isikhathi sokugcina umsindo ngegumbi ngalinye ngama-octave band (Sabine ne-Eyring) kusuka ngosayizi walo nezipheqo ozikhethayo, futhi ngenjongo yakho yakho itshela ukuthi ukumuncwa okwengeziwe kungakufinyelela kanjani. {{ui:Yidlale kuleligumbi}} idlala izwi, ukushaya kwezandla, amanothi aqhutshiwe noma ifayela lomsindo wakho ngomzila wokusabalalisa umsindo owenzelwe igumbi. Amanani okumuncwa angamanani ajwayelekile ashicilelwe okufanele uwashintshe. Bona [Ukuzwakala kwegumbi](topic:room-acoustics).
- **Izikhukhula, umoya nokuzamazama ekudlaleni.** {{ui:Ukudlala kwengozi}} idlala amanzi akhuphuka emagumbini, ingcindezi yomoya ezitezini ngayinye, nokuzamazama okuzaza izitezi, ku-plani noma ku-elevation nesilayidi sesikhathi. Amamodeli alula nezimo zawo esigabeni; hhayi ukuhlola kwekhodi. Bona [Dlala isikhukhula, umoya noma ukuzamazama](topic:hazard-playback).
- **Okuguga eminyakeni engamashumi amahlanu.** {{ui:Umbono wempilo yonke}} uhlu lwamawindi, izimnyango, izipheqo nophahla, ngalinye nempilo yalo yesevisi, iminyaka lapho zishintshwa, futhi uma uthayipha intengo ngeyunithi, izindleko ngonyaka nenani lazo lamanje. {{ui:Londoloza uhlelo (CSV)}} iyabhala lokho. Izikhathi zempilo yesevisi ziyizinani zokuhlela. Bona [Bona okuguga eminyakeni engamashumi amahlanu](topic:life-cycle-view).
- **Izinhlolo zekhonkrithi nokuzamazama.** Izakhiwo ze-{{ui:Izakhi zekhonkrithi}} ne-{{ui:Imithwalo yokuzamazama}} esigabeni se-{{ui:Ukuhlaziya}} zihlola amabhimu nezinsika zekhonkrithi ngokwe-ACI 318-19 zenze namandla ahlangene ohlangothini ngokwe-ASCE 7-22 ezindaweni eziqinile, nokuphambuka ezitezini. Okokuhlolwa yinjiniyela. Bona [Hlola izakhi zekhonkrithi futhi wenze imithwalo yokuzamazama](topic:concrete-and-seismic).

### Hlola nobike

- **Hlola nge-IDS.** Layisha ifayela le-`.ids` iklayenti elilinikeze bese ubona zonke izinto ezingahlangabezani nalo ku-Izinkinga, ngaphambi kokuthumela i-IFC. Vula {{ui:Hlola nge-IDS}} ngaphansi kwe-{{ui:Ukuhlola imodeli}}. Bona [Hlola imodeli ngokwe-IDS yeklayenti](topic:check-against-ids).
- **Amathegi nezinhlu.** Chaza amathegi akho, uwabeke ezintweni eziningi ngesikhathi esisodwa, futhi wenze izinhlu ezimakholomu, izihlungi namaqembu awafunda; amathegi agcinwa ku-IFC. Bona [Amathegi nezinhlu](topic:tags-and-schedules).
- **Amadokhumenti kusuka emodelini.** {{ui:Amadokhumenti kusuka kumodeli}} igcwalisa ifomu lesipesifikheyishini kusuka ku-IFC evulekile futhi ilondoloze njenge-PDF, idokhumenti ye-Word noma i-Markdown. Bona [Amadokhumenti kusuka emodelini](topic:documents-from-the-model).
- **Qhathanisa isikena nemodeli.** Ngesikena esivulekile, i-{{ui:Qhathanisa}} ihlukanisa ngayinye into njengeyakhiwe, ingxenye yakhiwe, emaphuta noma engafinyelelwanga, futhi ikhombisa iphesenti elakhiwe. Bona [Qhathanisa isikena nemodeli](topic:compare-scan-with-model).
- **Ikhabhoni nezindleko.** Ipaneli ye-Carbon ifaka ikhabhoni ehlangene kusuka kuthebula lezinto ongalihlela, nephaneli ye-Cost isabalalisa amanani kuhlelo lwe-4D. Izinto ezifakwe ne-BimCraft ziyajwayelekile futhi zimakwe njengezingahloliwe. Bona [Ikhabhoni nezindleko](topic:embodied-carbon-and-5d-cost).
- **Noma yiluphi uhlelo lwemephu.** {{ui:Linganisa}} › {{ui:Uhlelo lwezixhumanisi…}} lwamukela inombolo ye-EPSG, isifunda se-UTM, igama noma inchazelo yakho yohlelo. Bona [Bhalisa ngendawo nganoma yiluphi uhlelo](topic:georeference-any-projection).

### Dweba futhi uhlele

- **Hambisa, Hlanganisa nokusabalalisa.** Ngaphansi kwe-{{ui:Ukwakhiwa}}; {{key:Shift+M}} iqala ukuHambisa ({{key:M}} elula isahlala iLinganisa). Hambisa ikopisha njengoba uqhubeka nge-{{key:C}}, ngayinye inyathelo liyinguquko eyodwa, futhi ihamba kunkathi ye-Live TeamWork. Bona [Hambisa, kopisha, hlanganisa nasabalalise](topic:move-align-distribute).
- **Izithombe ngaphansi kweplani.** {{ui:Ukwakhiwa}} › {{ui:Isithombe}} ibeka i-PNG, i-JPEG noma i-WebP ngaphansi kweplani yezinga noma kusihlobo esimile. Setha isilinganiso ngamaphoyinti amabili, bese uyahambisa, uphendule, uqede ukukhanya kwayo futhi uyikhiye. Indawo ekopishwe ku-MarkupCraft inamathiselwa ngesilinganiso sesheet yayo. Bona [Beka isithombe ngaphansi kweplani](topic:pictures-as-backgrounds).
- **Izindonga ezivela ekuskeniweni.** Uma kuvulwe isikena, izindonga, izimnyango namagumbi kufika njengezincomo ozigcina noma uzenqabe ngayinye, ngesinyathelo esisodwa sokuhlehlisa. Izindonga ezisemigqeni emibili ehlukene kuphela ezitholakala. Bona [Shintsha isikena sibe izindonga](topic:scan-to-walls).
- **Landela, amapeni nesitebhisi esidwetshwe.** {{ui:Landela}} ikhombisa elinye izinga eliphuzwe ngaphansi kweplani, {{ui:Amapeni}} inikeza izindonga, izimnyango namawindi umugqa wabo wobubanzi, ngombono owodwa, futhi {{ui:Dweba isitebhisi}} iguqula umugqa wokuhamba ube isitebhisi. Ifayela le-Wavefront OBJ liyavuleka. Bona [Landela izinga, amapeni nesitebhisi esivela esikethini](topic:trace-pens-stairs-obj).
- **Izakhiwo ezizungeze ikheli.** Izakhiwo nepaseli yomhlaba ezitholwe yi-CivilCraft's Address to site ifika njengezincomo; uthikha ezofuna ukuzengeza. Bona [Qala ngesayithi le-CivilCraft](topic:site-from-civilcraft).
- **Imiklamo yamaphaneli.** {{ui:Ukwakhiwa}} › {{ui:Imiklamo yamaphaneli}} ifaka izindonga, amafulowa nophahla ngezinkuni noma ngensimbi enobukhulu obuncane, bese igcina uhlu lokusika njenge-CSV nemidwebo yomsebenzi njenge-PDF. Izinani eziqalayo, hhayi ukuklanywa kwesakhiwo okuqinile. Bona [Imiklamo yamaphaneli](topic:panel-drawings).
- **Iphalethi yezimpawu nezitshalo.** {{ui:Ukwakhiwa}} › {{ui:Iphalethi yezimpawu}} ithola izimpawu zikagesi namapayipi ngamagama awo; umthombo we-{{ui:Izitshalo}} we-{{ui:Umtapo}} uhlu lwezitshalo ezingaba ngu-400 nezimpawu zeplani. Bona [Iphalethi yezimpawu](topic:symbol-palette) no [Beka isitshalo](topic:plant-list).

### Amapayipi, ama-duct namandla

- **Ukuhlukanisa, VRF nama-fan coil.** Amayunithi angaphakathi nangaphandle namaxhumanisi awo, nemigqa yezinto ethe, usayizi wayo ngokwethebula lezinani ezijwayelekile ezingumzekeliso ongawashintsha. Bona [Ukuhlukanisa, VRF nama-fan coil](topic:split-vrf-fan-coils).
- **Izibalo.** Ipaneli yezibalo ihlola usayizi wamapayipi nama-duct okuhlinzeka ngoxinzelelo olwehla, ihambisa izintambo ngamathreyi nama-conduit futhi ikhombise ukugcwala kwazo, futhi ibale ukukhanya kusuka emafayeleni e-IES noma e-EULUMDAT. Okuzenzakalelayo kubhalwe; bhala izinani zekhodi yakho. Bona [Izibalo zamapayipi, ama-duct, izintambo nokukhanya](topic:mep-calculations).
- **Amafayela e-PCF.** Ithuluzi lepayipi elithi **Thumela i-PCF** libhala ukuhamba kwamapayipi kumaprogram okuhlaziya uxinzelelo nemifanekiso ye-isometric, nefayela le-PCF elifundwa libuye lidwebe ipayipi lalo. Bona [Amafayela ezingxenye zepayipi](topic:piping-pcf).
- **Solar PV.** Faka izinhlelo zamalanga ophahleni noma phansi, uzithunzele ngomthunzi kusuka emodelini, ulinganise amandla onyaka, uhlole amakhamelo futhi wenze idatha yedayagramu yomugqa owodwa. Imodyuli yokuqala namalahlekelo ngokwejwayelekile. Bona [Solar PV](topic:solar-pv).
- **Ifayela le-EnergyPlus.** Ipaneli ethi Hlola nge-EnergyPlus ibhala imodeli njenge-IDF ukuze uyihambise ku-EnergyPlus yakho. Ukuyihambisa kusiphequluli kudinga ibhilidi oyibambisa wena futhi uthaye ikheli lalo; i-BimCraft ayiyiphathi. Bona [Hlola ukushisa nokupholisa nge-EnergyPlus](topic:check-with-energyplus).

### Izithombe namafayela

- **Khetha injini yokurenda.** {{ui:Renda}} inesinqumo {{ui:Injini}}. Izinjini zethu ezimbili ezakhelwe ngaphakathi (Fast ne-Path tracer) zisala njengokuzenzakalelayo. **Vula ngo-** ilondoloza isimo njenge-USD noma i-glTF, nefolda yephrojekthi ye-Unreal njenge-.zip; ku-CadCraft Studio i-add-on ingangeza injini. I-plug-in ye-Unreal evula iphrojekthi ayikakhishwa. Bona [Khetha uhlelo olwenza isithombe](topic:render-engines).
- **Ukuhlehlisa kwe-Studio.** Ngaphakathi kwe-CadCraft Studio, i-BimCraft itshela i-Studio ngesinyathelo ngasinye esiqediwe ukuze i-Studio ihlehlise isinyathelo sakho sokugcina kunoma iyiphi iwindi osebenzise ekugcineni. Bona [Hlehlisa kuzo zonke izinhlelo](topic:undo-across-apps).
- **Ama-add-on kufayela lakho.** I-IFC iqopha ukuthi yiziphi ama-add-on abhale kuyo, futhi inikeza owodwa ongawaphethe lapho uyivula. Bona [Ama-add-on kufayela lakho](topic:add-ons-in-your-file).

### Kuzo zonke izinhlelo

- **Xhumanisa i-AI yakho.** Umsizi wakho ngokwakhe ungasebenzisa i-BimCraft ngoxhumano lwe-Studio futhi aphendule imibuzo ngemodeli, njengokuthi yiyiphi amagumbi angaphansi kwendawo ethile. I-Studio ayinayo i-AI yayo. Bona [Vumela umsizi we-AI asebenze nemodeli yakho](topic:assistants).
- **Imigqa yebha yamathuluzi.** {{ui:Izilungiselelo}} › {{ui:Okujwayelekile}} › {{ui:Imigqa yebha yamathuluzi}} inikeza i-Wrap, imigqa engu-2 noma engu-1; i-Wrap ihlala njengokuzenzakalelayo.
- **Izinkinga nokuxhumana.** Ipaneli yezexwayiso nemisebenzi ye-Live isebenza njengangaphambili, nezheke ezintsha ngenhla zisebenza ku-Izinkinga.
- **Izilimi.** Izilimi ezingama-54, eziyishumi zazo ezintsha. Eziwolunye ngaphandle kwesiNgisi ziyizihumusho zemishini ezingakafundwa umuntu wendabuko; izihloko zosizo ziningi ngesiNgisi.

## Okulungisiwe ku-0.8.1

- **Ukuma kwe-Ribbon + ukuhlela kwe-Project browser.** Insert › Import CAD, Insert › Image kanye ne-Manage › Project Units bekuthi "Akakakhiwa ku-BimCraft okwamanje". Manje i-Image ivula ithuluzi lesithombe, i-Import CAD ivula {{ui:Ukwakhiwa}} › {{ui:Kusuka emdwebeni…}} (i-DWG, i-DXF, i-PDF noma i-scan), futhi i-Project Units ivula {{ui:Izilungiselelo}} › {{ui:Jikelele}} › {{ui:Amayunithi}}. I-Move ne-Align ziqalisa amathuluzi aziwo, i-Level ivula {{ui:Engeza amazinga…}}, i-Phases ivula isigaba sezigaba zokuvuselela, futhi i-Materials ivula umtapo wezinto zokwakha.
- **Uhlu lwezakhiwo ze-DWG.** Lwalufundwa njengohlobo olungalungile; kulungisiwe ku-BimCraft nakwezinye izinhlelo ezifunda i-DWG.
- **Ulimi ngesikhathi sokusebenza.** I-Studio namaphakheji ahlanganisiwe manje angashintsha ulimi ngaphandle kokuqalisa kabusha. Lokhu akukahlolwa kuzo zonke izinhlelo; sitshele uma ulimi lungashintshi.
- **Umugqa we-Archicad.** `archicad_bundle.py`, ukulanda okuhlukile, manje ithola indlela ye-Archicad, ibuka ifolda isikhathi esifika kumasekhondi angu-20 futhi iphinde izame eduze kwebhanduli.

## Akukatholakali kule nguqulo

- **Izinsiza zokuphepha nokuklama.** Abantu esakhiweni abanamkhawulo wokuhamba kumakhodi wokwakha (uyawufaka wena) futhi abakahlolwa ngesandla kuplani yangempela. Izinani zomsindo, zempilo yonke nezikhukhula ziyizinani zokuhlela, hhayi ukuhlolwa kwekhodi.
- **Izimo zesikhathi esizayo nobuchwepheshe bomoya (EnergyPlus).** Akukho izimo zesikhathi esizayo ezakhelwe ngaphakathi: ungalayisha ifayela lesimo ukuze usebenzise isikhukhula. Ukusebenza kwe-EnergyPlus kusiphequluli akusiyo ingxenye yalokhu kukhishwa.
- **Uhlelo lwe-Ribbon.** I-Material Takeoff ihlala ithi "Not built" ngoba i-BimCraft ayinalo uhlu lwezinto oluthatha inani, namathuluzi angu-54 ancishisiwe e-ribbon angekho ithuluzi le-BimCraft ngemuva kwawo okwamanje.
- **Ukusayinwa nezinhlelo.** Ukufakwa kwe-Windows nefayela le-macOS .dmg akusayinwanga, ngakho i-SmartScreen ibonisa {{ui:Ulwazi olwengeziwe}}, bese {{ui:Qhubeka noma kunjalo}}, futhi i-macOS idinga ukuchofoza ngesokudla bese {{ui:Ivulekile}}. Ukwakha kwe-iPad ne-iPhone akukabuyiselwa ku-0.8.1.
- **Izivivinyo zamakhasi wangempela.** Ezinye izivivinyo zesiphequluli se-BimCraft ezidala zisahluleka ekhasini lethu lokuhlola, njengangaphambi kwe-0.8.1.

Konke okunye kukuthi [Akukakhiwa](topic:not-built-yet). Izinguquko zangaphambilini zisesihlokweni [Okusha ku-0.7](topic:whats-new-0-7).
