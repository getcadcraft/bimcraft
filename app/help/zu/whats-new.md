---
title: Okusha ku-0.9
summary: Izimo zezindonga, ukuhlukanisa, ukuhlukana, ukweluleka nokukhiya, amazinga angaphansi komhlaba, izilinganiso zegridi nokulinganisa epulanini, izibonelo eziphindiwe nezitayela zokusebenza namathebhula amapeni, Bika njenge, ukuthumela nge-Collada nakwi-Google Earth, Scan to BIM, ukuhlaziya umoya nokuzamazama, ama-add-on wokuprinta nge-resin.
keywords: okusha, 0.9, amanothi okukhishwa, izimo zezindonga, irektangela, ipholigoni, arc, khetha imigqa, landela umugqa, ukuhlukana, hlanganisa, ukweluleka ngebhokisi, linganisa futhi ukhiye, hlukanisa udonga, igebe, hlanganisa kabusha, khiya egridini, khula kusukela, linganisa kusukela, engeza izinga ngaphansi, ingaphansi, umyalo wezinga, izilinganiso zegridi, linganisa epulanini, isitayela sokusebenza, phinda umbono, ikhophi lalo, umbono oxhunyiwe, ithebhula lamapeni, phrinta njengoba kubonakala, bika njenge, thayipha isikali, ngenisa i-svg, beka epulanini, beka emodelini, collada, dae, kmz, google earth, scan to bim, umthwalo womoya, ukuzamazama, finite element, uphaneli wamadokhumenti, ukuprinta nge-resin, okusha, yini esha, amanothi okukhishwa, umlando wezinguquko, 0.8, 0.8.1, inguqulo, izici ezintsha, ukuphuma, abantu, imigqa yokulinda, ukuzwakala, ukubuya kwesandi, impendulo yomsindo, isikhukhula, umoya, ukuzamazama komhlaba, ingozi, impilo yonke, impilo yokusebenza, ids, amathegi, izinhlelo, hambisa, linganisa, sabalalisa, isithombe, ingemuva, skena ukuya ezindongeni, indawo esuka ku-civilcraft, imidwebo yamaphaneli, ukwakha uhlaka, solar, pv, hlukanisa, vrf, fan coil, ukulinganisa ubukhulu bamapayipi, ithreyi yekhebuli, ukukhanya, ikhonkrithi, qhathanisa i-scan, epsg, ukuprojekthwa, amadokhumenti, isifanekiso, ikhabhoni, izindleko, energyplus, injini yokurenda, vula ku, usd, glb, unreal, hlehlisa, okwengeziwe, pcf, izimpawu, izitshalo, landela, amapeni, ibha, isilawuli sephrojekthi, isakhiwo
from: 5624fe88
---

Lokhu yikho okushintshile ku-BimCraft 0.9, uma kuqhathaniswa ne-0.8.1. Izihloko ezimbili ezinkulu yithuluzi lodonga langempela nemibono eziziphatha ngendlela abantu abavela kumaprogram amakhulu e-BIM abayilindele. Ngaphezu kwalokho kuza ukuthumela nge-Collada, abasizi abangabeka izinto zikagesi, Scan to BIM, nokuhlaziya komoya, ukuzamazama nokusebenza kwe-finite-element kuthebhu le-{{ui:Analysis}}.

## Okusha

### Izindonga

- **Dweba izimo ezigcwele.** Ku-{{ui:Draw}}, vula {{ui:Shapes}} (noma khetha isimo ohlwini lwezimo kumugqa wodonga) ukuze uthole irektangela, irektangela ejikiwe, ipholigoni ezinhlangothini ezi-3 kuya kwezingu-64, i-arc ngesikhungo, i-arc ethintayo, izindonga ezingqinamele imigqa ekhethiwe, noma izindonga ezizungeze indawo evaliwe oyichofoza ngaphakathi. Irektangela iyizindonga ezine ezinamakhona amane ahlanganisiwe kanye nesinyathelo esisodwa sokuhlehlisa. Bona [Izimo zezindonga, ukuhlukanisa, ukuhlukana, ukweluleka nokukhiya](topic:wall-tools).
- **Beka ngaphambi kokudweba, shintsha ngemva.** Umugqa wodonga unawo {{ui:Offset}} no-{{ui:Join}} (susa ukukhetha ukuze udwebe izindonga ezimi ngokwazo). Ngemva kwalokho sebenzisa {{ui:Offset}}, {{ui:Box stretch}} no-{{ui:Align and lock}} ezindongeni ezidwetshiwe. Udonga olusuthisiwe noma oluweluziwe lugcina izincele, amawindi nezilinganiso zalo. Yonke iresiphi iyisinyathelo esisodwa sokuhlehlisa.
- **Sika izindonga.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} no-{{ui:Rejoin}} sika udonga ngokuchofoza noma lapho olunye udonga lulidlula khona. Ukusika ngesicabha kwenqatshwa. Bona [Izimo zezindonga, ukuhlukanisa, ukuhlukana, ukweluleka nokukhiya](topic:wall-tools).
- **Khiya izindonga emigqeni yegridi.** Khetha udonga oluhambisana nomugqa wegridi bese ukhetha {{ui:Lock to grid}} ku-{{ui:Properties}}. Uma ithuluzi le-{{ui:Grid}} livulekile, thayipha ibanga ku-{{ui:Move by}} somugqa okhethiwe, izindonga ezikhiyiwe zilandele ngesinyathelo esisodwa sokuhlehlisa.
- **Umumo wodonga oyodwa.** Ku-{{ui:Properties}} yodonga oyodwa ungabophela phezulu nasezansi kwalo ophahleni, uphahla noma uling, uhlele isiphetho sokukhuphuka kwalo, ulithambekise, noma usike ukuvulwa kodonga ngaphandle kwesicabha noma iwindi. Bona [Umumo wodonga](topic:wall-shape).
- **Ubude buveza ukuthi yiliphi iphetho elimile.** {{ui:Grow from}} ibeka ukuthi ukuqala, ukuphela noma isikhungo kuyahlala yini uma ushintsha ubude.
- **Ubude nesilinganiso sepulani kuyavumelana.** {{ui:Measure from}} (umugqa wesikhungo, uhlangothi lwangaphakathi noma uhlangothi lwangaphandle) ilawula kokubili inkambu yobude nezilinganiso zezindonga epulanini. Iqala emugqeni wesikhungo, ngakho-ke izilinganiso zezindonga zepulani manje zifunda umugqa wesikhungo lapho bezifunda uhlangothi lwangaphandle ngaphambili. Yishintshe emugqeni wodonga, ku-{{ui:Properties}} noma ku-{{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Amazinga, amagridi nokulinganisa

- **Engeza izinga ngaphansi.** {{ui:Add a level below}} kuphaneli ye-{{ui:Levels}} yengeza izinga ngaphansi kwelisezansi kakhulu, eliphakame njengalo, ngokuphakama okungeyo (Level -1, Level -2). Akukho okunye okunyakazayo. Manje i-{{ui:Add levels…}} yamukela ukuphakama okungemuva. Ukuthayipha LEVEL, LEVELS, STOREY noma STOREYS kumugqa womyalo kuvula i-{{ui:Add levels…}}, futhi kukhona inkinobho ye-{{ui:Levels}} emenyuini nasethebhini le-ribbon. Bona [Izindawo, izakhiwo namazinga](topic:site-building-and-levels).
- **Izilinganiso zegridi epulanini.** Uma ithuluzi le-{{ui:Grid}} livulekile, khetha {{ui:Dimensions}} ukuze udwebe igebe phakathi kwemigqa eseduze nosayizi jikelele ngaphesheya kwamabhamuza epulani yanoma yiliphi izinga. Bona [Linganisa igridi](topic:grid-dimensions).
- **Linganisa epulanini.** {{ui:Measure}} eqenjini le-{{ui:Draw}} inikeza ibanga nemehluko ye-X ne-Y phakathi kwamachofozo amabili. Akukho okulondolozwa kumodeli. Bona [Linganisa epulanini](topic:measure-on-the-plan).
- **Shintsha izinsika eziningi ngesikhathi esisodwa.** Khetha izinsika kanye nodonga bese uhlu lokukhetha lukhombisa uhlobo ngalunye nge-{{ui:Keep only these}}. Ukuchofoza kanye kugcina izinsika bese kubonisa izinkambu abazabelana ngazo.
- **Iyunithi eyodwa yokubonisa yonke indawo.** Izixhumanisi, izilinganiso, izigaba, izikali zamashidi, imithwalo nemiphumela yethebhu lefreyimu kanye nombhalo wezinkinga walandela iyunithi oyikhethayo. Ukuthumela kugcina i-SI.

### Imibono, amashidi nokuphrinta

- **Isitayela sokusebenza.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} ikhetha phakathi kokuthi umbono ngamunye uba nezincazelo namathebhula amapeni awo, noma wabelane ngawo. Bona [Isitayela sokusebenza, imibono ephindiwe, amapeni ephepheni, Bika njenge nezifanekiso](topic:working-style).
- **Phinda umbono.** Amapulani, amapulani ophahla, izimemo, ukubukeka kohlangothi nezigaba zingaphindwa njenge-{{ui:Own copy}} noma {{ui:Linked}}; {{ui:Make own copy}} yenza okuxhunyiwe kube okuzimele. Bona [Isitayela sokusebenza, imibono ephindiwe, amapeni ephepheni, Bika njenge nezifanekiso](topic:working-style).
- **Phrinta njengoba kubonakala, noma ngethebhula lamapeni.** Ukushintsha kwamapeni kugcinwa ku-IFC kanye nombono, namashidi nama-PDF adweba kanjalo njengoba isikrini senza. Lo hlokwana ufaka namathebhula amapeni.
- **Bika njenge.** {{ui:Report as}} ku-{{ui:Properties}} ibhala isilabhu esidwetshwe njengendlela, udonga njengephaneli noma uphahla njengengxande ku-IFC njengohlobo oluyikhethayo, ibale kanjalo ezinhlelweni, emananeni, ekuthola, ekumbaleni ngemibala nasezinkingeni.
- **Hlela ezibukweni zohlangothi nasezigabeni.** Dweba futhi uhambise izindonga, izimbobo, amazinga, izilinganiso namanothi ngqo kubukeka kohlangothi noma esigabeni, ngosayizi bamashidi wakho namabhulokhi wesihloko. Bona [Hlela ezibukweni zohlangothi nasezigabeni](topic:edit-in-elevations).
- **Amashidi.** Ishidi ngalinye lingaba ohlangothini olubanzi noma olude. Ibhokisi le-{{ui:Type a scale}} lihlala eduze kohlu lwezikali kumbono ngamunye obekiwe (1:64, 2:1, 1/4" = 1'). Ungadonsa umdwebo obekiwe noma usunyakazise ngezinkinobho zomcibisholo, futhi {{ui:Formats…}} › {{ui:Import SVG…}} iguqula ukwakheka kwakho kweshidi ibe yibhulokhi yesihloko enezinkambu ezibhalwe ngeshidi ngalinye.
- **Izikweletu zomtapo ephepheni.** Isethi yemidwebo enezinto zoMtapo ithola uhlelo lwezikweletu zoMtapo oyifaka kunoma iyiphi ishidi. Bona [Izikweletu zomtapo](topic:library-credits).

### Umtapo: ukubeka

- **Ukubeka kulandela umbono.** Kumbono wePulani uMtapo ubonisa {{ui:Place in plan}}; ku-3D ubonisa {{ui:Place in model}}; kumodi yokuhlukanisa ubonisa inkinobho ehlukanisiwe enesenzo esiyinhloko {{ui:Place in plan}}. Zombili izindlela zibhala into efanayo ye-IFC. Ungadonsa nekhadi loMtapo kupulani noma kumbono we-3D; ngepeni noma ngomunwe, cindezela ubambe, bese udonsa. Bona [Beka usuka kuMtapo](topic:place-from-library).

### Amafayela nabasizi

- **I-Collada ne-Google Earth.** {{ui:Collada}} kwithuluzi (kumenyu ye-{{ui:File}} ezitayelweni zemenyu) ibhala i-.dae, noma i-.kmz ebekwe lapho imodeli ikhona kumephu. Bona [Thumela imodeli njenge-Collada noma ye-Google Earth](topic:collada).
- **Abasizi bangabeka izinto zikagesi.** Umsizi wakho oxhunyiwe unamathuluzi amasha okungeza, ukubhala ohlwini, ukushintsha nokususa izinto nokusetha izibani. Abasizi bahlala bevaliwe kuze uwavule ku-{{ui:Settings}}. Bona [Vumela umsizi we-AI asebenze nemodeli yakho](topic:assistants).
- **Scan to BIM (i-add-on).** Ivaliwe ngokuzenzakalela futhi idinga i-add-on yamafu amaphoyinti. Iphakamisa amaphansi, izindonga, izicabha namawindi kusuka ku-scan nokuphambuka okulinganisiwe kwalokho ngakunye; ukwamukela kuyisinyathelo esisodwa sokuhlehlisa.

### Ukuhlaziya

- **Idatha yesayithi yomoya nokuzamazama.** Kuthebhu ye-{{ui:Analysis}}: imithwalo yomoya nge-ASCE 7-10 noma 7-16 yesakhiwo esiqinile esivaliwe, nokuphoqelela kuwo wonke amaphansi njengezimo zomthwalo, kanye nedatha yesayithi yokuzamazama nge-USGS lookup nesipeksitra yokuklama.
- **Ukulandelela kwesakhiwo nezinhlayiya ezinqamile.** Ukuhlolwa kwekhonkrithi ngokwe-ACI 318-19, amandla anyanyekayo alinganayo ngokwe-ASCE 7-22, ukuhamba kwezitezi, amaslabhu nezindonga njengamapuleti, nokuhlanganiswa kwemithwalo kusuka ku-ASCE 7 ne-EN 1990. Injini yethu yezinhlayiya ezinqamile yenza amashelu, ama-tetrahedra nokuhlaziya kwemodi. Bona [Hlola izakhi zekhonkrithi bese wenza imithwalo yokuzamazama](topic:concrete-and-seismic) no-[Ukuhlaziya kohlaka](topic:frame-analysis).

### Okunye okwengeziwe namadokhumenti

- **Ukukhanyisa kwangaphakathi (i-add-on).** Ibeka izibani futhi ibhala i-lux njengezinombolo epulanini lalo lonke izinga, nesilinganiso sokuqhaqhazela nombiko ophrintekayo.
- **Uphaneli wamadokhumenti.** {{ui:File}} › {{ui:Documents…}} unokuphuma nokungena nefayela lokukhiya, izinhlamvu zokubuyekeza, izimo zokukhishwa nomlando.
- **Izifunda nensimbi.** Amaphakheji emidwebo nemithetho yokwakha yaseNingizimu Afrika ku-add-on yeMithetho, kanye nezilinganiso zensimbi ezingu-976 zaseUK kuthebhu elabelwanayo lezigaba.
- **Ama-add-on wokuprinta nge-resin mahhala.** I-slicer, izibambi nerafu, ukuhlolwa kokuvezwa, namafomethi amafayela i-GOO, SL1, Chitubox ne-Anycubic, konke kuvaliwe ngokuzenzakalela.

## Kuyo yonke i-app

- Ukuhamba phezu kwenkinobho noma ulawulo kubonisa ithiphi ye-Bootstrap.
- Ithiphu lokuqala endaweni yomdwebo engenalutho linenkinobho yokuvala; i-BimCraft ikhumbula ukuthi livaliwe.
- Ibhande lamathebhu ophaneli elingeneki manje liyaskrola kunokuba liqunywe.
- Uma idokhumenti ivuliwe, ithebhu yesiphequluli ifunda "<document> - BimCraft | CadCraft".
- Ku-{{ui:Settings}} › {{ui:General}} › {{ui:Layout}} izakhiwo zingu-drop-down wokukhetha okunemigqa emibili.
- Uhlu lwezilimi ku-{{ui:Settings}} linikeza izilimi eziningi kunasku-0.8; izilimi ngaphandle kwesiNgisi ngamadrafthi emishini.

## Okulungisiwe

- **Ukuhambisa kusebenza ezitebhisini,** nasemigwaqweni, ezigxobeni, ezindizeni zophahla, ezintweni ezimi ngokwazo, ezithombeni nasezindleleni.
- **Ukudonsa udonga akusaguquli igumbi.** Ukubamba esikhungweni kuhambisa udonga ube sesikwele kawo futhi amakhona awo ayashelela ngezindonga ezihlanganisiwe. Bamba {{key:Mod}} ukuze uthole ukuhamba kwasendulo okukhululekile; {{ui:Square up}} ibuyisela amadigri angu-90.
- **Ukushintsha ukuqina noma uhlobo ePhoyinti elihlanganisiwe** manje kugcina ikhona livaliwe ku-L, ku-T, endaweni yezindonga ezintathu nakufu wodonga ogobile.
- **Ukuhambisa noma ukukopisha iqembu lamagumbi** kugcina izindonga ezihlanganisiwe ngaphandle kweqembu zihlanganisiwe.
- **Phinda wenze igcina ubunikazi besilinganiso sodonga.**
- **Ukukhetha udonga nge-Draw ecimiwe** akusaphonsi iphutha ku-{{ui:Properties}}.
- **I-Render iwela ku-WebGL** uma i-GPU ingaqali, esikhundleni sokuma.
- **Ukuhlola kwe-EnergyPlus kungavulwa** futhi.
- **Amadokhumenti avula njengengxoxo emaphakathi.** {{key:Esc}}, i-X noma ukuchofoza ekhasini elilutshiwe kuyayivala.
- **Izinkinobho ze-{{ui:Plan}}, {{ui:Split}} ne-{{ui:3D}} zibonakala** uma imodeli ivuliwe, hhayi kuphela ngemva kokuvula i-Draw kanye.

## Imikhawulo eqotho

- Akukho okuprintiwe ku-hardware yangempela. Izibambi ze-resin zintsha futhi azikafakazelwa.
- Imiphumela yomoya, yokuzamazama, yekhonkrithi nezinhlayiya ezinqamile ngusizo lokuhlola kunjiniyela, ihlolwe ngezimo ezivaliwe, hhayi ngesakhiwo sangempela.
- I-Scan to BIM ihlolwe esakhiweni esenziwe ngekhompyutha, hhayi ku-scan yangempela, futhi ithola amagumbi ayisikwele kuphela.
- I-Collada ayikavulwa ku-Blender noma ku-Google Earth lapha.
- Isilinganiso sokukhanya sihlolwe ngokulandela kwethu, hhayi ngezinye izinhlelo zokukhanya.
- Izinombolo zaseNingizimu Afrika azikaqinisekiswa.
- Izitayela zokuhlanganisa izindonga (butt, mitre, square off) nokubaluleka kwezingqimba azikakwakhiwa; amakhona enziwa ngo-mitre.
- Izilimi ngaphandle kwesiNgisi ngamadrafthi emishini.

Konke okunye kusencwadi [Okungakakwakhiwa](topic:not-built-yet). Izinguquko zangaphambili zisezincwadini ze-0.8 ne-0.8.1 ezingaphansi kwalelikhasi.

## Kwangaphambili: 0.8 ne-0.8.1

Lokhu yikho okushintshile ku-BimCraft 0.8 (2026-11-01) ne-0.8.1 (2026-11-02), uma kuqhathaniswa ne-0.7. Manje i-BimCraft ingaphendula imibuzo ngesakhiwo futhi iyihlole ngabantu, umsindo, amanzi, umoya nokuzamazama, futhi iyidwebe ngamathuluzi amaningi; i-0.8.1 ukukhishwa kokulungisa.

### Okusha

**Hlola isakhiwo**

- **Abantu esakhiweni.** Isigaba se-{{ui:People in the building}} sephaneli yangakwesobunxele sihambisa ukuphuma noma izimo zansuku zonke zokufika ngamagumbi, izicabha nezitebhisi zakho. Ubona imigqa yokulinda lapho isakhiwo sincipha, ukuhamba okude kakhulu ukuya ekuphumeni kusuka kulo lonke igumbi nokuthi umuntu wokugcina uthatha isikhathi esingakanani. Khetha {{ui:Shut}} esicabheni ukuze ubone okushintshile, futhi khetha {{ui:Show the people in the 3D view}} ukuze ubuke abahambi. Okutholiwe kuya ezinkingeni. Umklamo ojwayelekile wesixuku wezinqumo zokuklama, hhayi isitifiketi sokuphepha komlilo. Bona [Hambisa abantu ngesakhiwo](topic:people-in-the-building).
- **Ukuzwakala kwegumbi, nokulalela.** Isigaba se-{{ui:Room acoustics}} sinikeza isikhathi sokubuya kwesandi kwegumbi ngalinye ngebhendi ye-octave (Sabine ne-Eyring) kusuka kusayizi walo nezipheki ozikhethayo, futhi ngomgomo wakho sitshela ukuthi yimuphi umthamo wokumuncwa owenza kufezeke. {{ui:Play it in this room}} idlala izwi, ukuklaza, amanothi aqhutshwayo noma ifayela lakho lomsindo ngomphumela womsindo okhoniwe ngegumbi. Izinombolo zokumuncwa yizinani ezivamile ezishicilelwe okufanele uzishintshe. Bona [Ukuzwakala kwegumbi](topic:room-acoustics).
- **Ukudlala kwesikhukhula, umoya nokuzamazama komhlaba.** {{ui:Hazard playback}} idlala amanzi ekhuphuka ngamagumbi, ingcindezi yomoya kuwo wonke isitezi nokuzamazama komhlaba okuwuqhuqhazela amasitezi, epulanini noma kubukeka kohlangothi nge-slider yesikhathi. Imodeli elula nezimo zayo ephaneli; hhayi ukuhlolwa kwekhodi. Bona [Dlala isikhukhula, umoya noma ukuzamazama komhlaba](topic:hazard-playback).
- **Okuguga eminyakeni engamashumi amahlanu.** {{ui:Life-cycle view}} ibala amawindi, izicabha, okuqedwa nophahla ngalunye nenkathi yokusebenza yalo, iminyaka okushintshwa ngayo, nalapho uthayipha izindleko ngeyunithi, izindleko ngonyaka nenani lazo lamanje. {{ui:Save the schedule (CSV)}} iyakubhala. Izinkathi zokusebenza zinani lokuhlela. Bona [Bona okuguga eminyakeni engamashumi amahlanu](topic:life-cycle-view).
- **Ukuhlolwa kwekhonkrithi nokuzamazama.** Izingxenye ze-{{ui:Concrete members}} ne-{{ui:Seismic loads}} zethebhu ye-{{ui:Analysis}} zihlola amabhimu nezinsika zekhonkrithi ngokwe-ACI 318-19 zenze amandla anyanyekayo alinganayo ngokwe-ASCE 7-22 kumaphansi aqinile, nokuhamba kwezitezi. Kunjiniyela ahlole. Bona [Hlola izakhi zekhonkrithi bese wenza imithwalo yokuzamazama](topic:concrete-and-seismic).

**Hlola nobike**

- **Hlola nge-IDS.** Layisha ifayela le-`.ids` umkhlanyeli akunikeze khona bese ubona yonke into engahlangabezani nalo ezinkingeni, ngaphambi kokuthi uhambise i-IFC. Vula {{ui:Check against an IDS}} ngaphansi kuka-{{ui:Model checks}}. Bona [Hlola imodeli ngokwe-IDS yomkhlanyeli](topic:check-against-ids).
- **Amathegi nezinhlelo.** Chaza amathegi akho, ubeke kuzinto eziningi ngesikhathi esisodwa futhi wenze izinhlelo ezifunda izinkololo, izihlungi namaqembu awo; amathegi agcinwa ku-IFC. Bona [Amathegi nezinhlelo](topic:tags-and-schedules).
- **Amadokhumenti kusuka kumodeli.** {{ui:Documents from the model}} igcwalisa isifanekiso sespesifikheshini kusuka ku-IFC evuliwe bese isigcina njenge-PDF, idokhumenti ye-Word noma i-Markdown. Bona [Amadokhumenti kusuka kumodeli](topic:documents-from-the-model).
- **Qhathanisa i-scan nemodeli.** Uma i-point cloud ivuliwe, {{ui:Compare}} ihlola ngayinye into njengakhiwe, akhiwe ngengxenye, ayikho noma ayifinyelelwanga, futhi ibonise iphesenti elakhiwe. Bona [Qhathanisa i-scan nemodeli](topic:compare-scan-with-model).
- **Ikhabhoni nezindleko.** Iphaneli le-Carbon liyengeza ikhabhoni esakhiwe ngetafula lezinto ongalihlela, futhi iphaneli le-Cost lisabalalisa amanani ohlelweni lwe-4D. Izinto ezifika ne-BimCraft ziyizinto ezijwayelekile futhi zimakwe njengezingahloliwe. Bona [Ikhabhoni ekhiwe nezindleko](topic:embodied-carbon-and-5d-cost).
- **Noma iyiphi iprojekshini yemephu.** {{ui:Measure}} › {{ui:Coordinate system…}} wamukela inombolo ye-EPSG, izone ye-UTM, igama noma inchazelo yakho yeprojekshini. Bona [Ukubhekisela endaweni ngeprojekshini yanoma iyiphi](topic:georeference-any-projection).

**Dweba nohlele**

- **Hambisa, Linganisa nosabalalisa.** Ngaphansi kuka-{{ui:Build}}; {{key:Shift+M}} iqala Ukuhambisa ({{key:M}} isaqhubeka iyiLinganisa). Ukuhambisa kukopisha njengoba uqhubeka nge-{{key:C}}, yonke inyathelo ingesinyathelo esisodwa sokuhlehlisa, futhi ihamba kuseshini ye-Live TeamWork. Bona [Hambisa, kopisha, linganisa nosabalalisa](topic:move-align-distribute).
- **Izithombe ngaphansi kwepulani.** {{ui:Build}} › {{ui:Picture}} ibeka i-PNG, i-JPEG noma i-WebP ngaphansi kwepulani lezinga noma endizeni eqondile. Setha isikali ngamaphoyinti amabili, bese uhambisa, uphendule, ufifaze futhi ukhiye. Indawo ekopishwe ku-MarkupCraft iphastwa ngesikali sishidi sayo. Bona [Beka isithombe ngaphansi kwepulani](topic:pictures-as-backgrounds).
- **Izindonga kusuka ku-scan.** Uma i-scan ivuliwe, izindonga, izicabha namagumbi kuza njengezincomo ozigcinayo noma ozenqabayo ngayinye, kwisinyathelo esisodwa sokuhlehlisa. Kutholakala izindonga ezisemaqondweni amabili ahlangene kuphela. Bona [Guqula i-scan ibe yizindonga](topic:scan-to-walls).
- **Landela, amapeni nesitebhisi esiskethwe.** {{ui:Trace}} ibonisa elinye izinga eliphuka ngaphansi kwepulani, {{ui:Pens}} inika izindonga, izicabha namawindi ubukhulu bomugqa bawo kumbono owodwa, futhi {{ui:Sketch stair}} iguqula umugqa wokuhamba ube yisitebhisi. Kuvula i-mesh ye-Wavefront OBJ. Bona [Landela izinga, amapeni nesitebhisi esivela kusketshi](topic:trace-pens-stairs-obj).
- **Izakhiwo ezungeze ikheli.** Izakhiwo nesakhiwo somhlaba ezitholwe yi-Address to site ye-CivilCraft ziza njengezincomo; uyakhetha ezifuna ukuzengeza. Bona [Qala ngesayithi ye-CivilCraft](topic:site-from-civilcraft).
- **Imidwebo yamaphaneli.** {{ui:Build}} › {{ui:Panel drawings}} yakha uhlaka lwezindonga, amaphansi nophahla ngezinkuni noma ngensimbi yegeji elincane, futhi igcina uhlu lokusika njenge-CSV nemidwebo yomsebenzi njenge-PDF. Izinani zokuqala, hhayi umklamo wesakhiwo. Bona [Imidwebo yamaphaneli](topic:panel-drawings).
- **Iphalethi yezimpawu nezitshalo.** {{ui:Build}} › {{ui:Symbol palette}} ithola izimpawu zikagesi nezempompo ngegama; umthombo we-{{ui:Plants}} ye-{{ui:Library}} uhlu lunezitshalo ezingu-400 ezinezimpawu zepulani. Bona [Iphalethi yezimpawu](topic:symbol-palette) no-[Beka isitshalo](topic:plant-list).

**Amapayipi, imiphongolo namandla**

- **Hlukanisa, i-VRF ne-fan coil.** Amayunithi angaphakathi nangaphandle nokuxhumeka kwawo, namasethi emigqa alinganiswe ngethebhula lezinani ezivamile ongazishintsha. Bona [Hlukanisa, i-VRF ne-fan coil](topic:split-vrf-fan-coils).
- **Ukubalwa.** Iphaneli lokubala lihlola usayizi wamapayipi okuhlinzeka nemiphongolo ngokwehla koxinzelelo, liqondisa amakhebuli ngamathreyi nemipayipi ebhodwe bese libonisa ukugcwala kwawo, futhi libale ukukhanya ngamafayela e-IES noma e-EULUMDAT. Okuzenzakalelayo kuyamakwa; thayipha izinani zekhodi yakho. Bona [Ukubala kwamapayipi, emiphongolo, amakhebuli nokukhanya](topic:mep-calculations).
- **Amafayela e-PCF.** I-**Thumela i-PCF** yethuluzi lePayipi ibhala imigqa yezinhlelo zokucindezeka kwepayipi nezohlelo ze-isometric, nefayela le-PCF elifundwayo lidweba ipayipi lalo. Bona [Izingxenye zephayipi zefayela le-PCF](topic:piping-pcf).
- **I-Solar PV.** Faka izinhlelo zamapaneli ophahleni noma phansi, zibekwe ithunzi kusuka kumodeli, balela amandla onyaka, hlola izintambo futhi wenze idatha yomdwebo womugqa owodwa. Imodyuli yokuqala nokulahlekelwa kwayo ngokujwayelekile. Bona [I-Solar PV](topic:solar-pv).
- **Ifayela le-EnergyPlus.** Iphaneli le-Check with EnergyPlus libhala imodeli njenge-IDF ukuze isebenze ku-EnergyPlus yakho. Ukuyisebenzisa kusiphequluli kudinga ibhilidi oyibambayo wena ngokwakho nokuthayipha ikheli layo; i-BimCraft ayiyiphathi. Bona [Hlola ukushisa nokupholisa nge-EnergyPlus](topic:check-with-energyplus).

**Izithombe namafayela**

- **Khetha injini yokurenda.** {{ui:Render}} inokukhetha kwe-{{ui:Engine}}. Izinjini zethu ezimbili ezakhelwe ngaphakathi (Fast ne-Path tracer) zihlala zingokuzenzakalela. **Vula ku** igcina isigcawu njenge-USD noma ifayela le-glTF, nefolda yephrojekthi ye-Unreal njenge-.zip; ku-CadCraft Studio i-add-on ingangeza injini. I-plug-in ye-Unreal evula iphrojekthi ayikakhishwa. Bona [Khetha uhlelo olwenza isithombe](topic:render-engines).
- **Ukuhlehlisa kwe-Studio.** Ngaphakathi kwe-CadCraft Studio, i-BimCraft itshela i-Studio ngayo yonke inyathelo eliqediwe ukuze i-Studio ikwazi ukuhlehlisa inyathelo lakho lokugcina kunoma iyiphi iwindi osebenzise kugcina. Bona [Hlehlisa kuzo zonke izinhlelo](topic:undo-across-apps).
- **Ama-add-on kufayela lakho.** I-IFC igcina ukuthi ama-add-on abhale kuyo, futhi ikunikeza lawo okungawaniwe lapho uyivula. Bona [Ama-add-on kufayela lakho](topic:add-ons-in-your-file).

**Kuyo yonke i-app**

- **Xhuma i-AI yakho.** Umsizi wakho ungaqhuba i-BimCraft ngokuxhumeka kwe-Studio aphendule imibuzo ngemodeli, njengokuthi yimaphi amagumbi angaphansi kwendawo enikeziwe. I-Studio ayinayo i-AI yayo. Bona [Vumela umsizi we-AI asebenze nemodeli yakho](topic:assistants).
- **Imigqa yebha yamathuluzi.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inikeza i-Wrap, imigqa emi-2 noma umugqa ongu-1; i-Wrap ihlala iyinketho ezenzakalelayo.
- **Amadivayisi okufaka.** Izilungiselelo ze-trackpad, ipeni, imawuseyi ye-3D, ikhontrola ne-MIDI zabelwa zonke izinhlelo.
- **Izinkinga ne-Live.** Iphaneli yezexwayiso namaseshini e-Live asebenza njengakuqala, nezindlela ezintsha ezingenhla zithela ezinkingeni.
- **Izilimi.** Izilimi ezingu-54, eziyishumi kuzo ezintsha. Ezingaphandle kwesiNgisi ngamadrafthi emishini angakafundwa umuntu owayo; izihloko zosizo ziningi ngesiNgisi.

### Okulungisiwe ku-0.8.1

- **Isakhiwo sebha + isilawuli sephrojekthi.** Faka › Ngenisa i-CAD, Faka › Isithombe no-Phatha › Amayunithi wephrojekthi bekutshele "Akukakwakhiwa ku-BimCraft okwamanje". Manje i-Isithombe ivula ithuluzi lesithombe, i-Ngenisa i-CAD ivula {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF noma i-scan), no-Amayunithi wephrojekthi uvula {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Hambisa no-Linganisa zisebenzisa amathuluzi okuhambisa nokulinganisa, i-Level ivula {{ui:Add levels…}}, i-Phases ivula isigaba sezigaba zokuvuselela, no-Izinto ivula umtapo wezinto.
- **Isigaba samakilasi e-DWG.** Safundwa njengohlobo olungalungile; silungisiwe ku-BimCraft nakwezinye izinhlelo ezifunda i-DWG.
- **Ulimi ngesikhathi sokusebenza.** I-Studio nezinguqulo ezipakishiwe manje zingashintsha ulimi ngaphandle kokuqala kabusha. Lokhu akukahlolwa kuwo wonke amapuletifomu; sitshele uma ulimi lungashintshi.
- **Isikripthi se-Archicad bundle.** `archicad_bundle.py`, okulandwa ngokwehlukile, manje ithola indlela ye-Archicad, ibheka ifolda isikhathi esingafika kumasekhondi angu-20 bese iphinda eduze kwebhande.

### Akukakwenziwa kule nguqulo

- **Izinsiza zokuphepha nokuklama.** Abantu esakhiweni abanawo umkhawulo wobude bokuhamba ukusuka emthethweni wekhodi yokwakha (uthayipha umkhawulo) futhi awukahlolwa ngesandla kupulani langempela. Izibalo zokuzwakala, zempilo yonke nengozi ziyizinani zokuhlela, hhayi ukuhlolwa kwekhodi.
- **Izikhathi zesimo sezulu nge-EnergyPlus.** Alikho ikusasa lesimo sezulu elakhelwe ngaphakathi: ungalayisha ifayela lesimo sokuqagela sokusebenza kwesikhukhula. Ukusebenza kwe-EnergyPlus kusiphequluli akuyona ingxenye yalokhu kukhishwa.
- **Isakhiwo sebha.** I-Material Takeoff ihlala ithi "Not built" ngoba i-BimCraft ayinalo uhlu lwamanani ezinto, futhi ezinye ezingu-54 zamathuluzi ebha ezimnyama azinawo ithuluzi le-BimCraft okwamanje.
- **Ukusayina namapuletifomu.** Abafakeli be-Windows ne-.dmg ye-macOS abasayinwanga, ngakho i-SmartScreen ibonisa {{ui:More info}}, bese {{ui:Run anyway}}, no-macOS udinga ukuchofoza ngokwesokudla bese {{ui:Open}}. Isakhiwo se-iPad ne-iPhone asizange sakhiwe kabusha ku-0.8.1.
- **Ukuhlolwa kwamakhasi angempela.** Ezinye izivivinyo zesiphequluli se-BimCraft zakudala kusaphela ekhasini lethu lokuhlola, njengoba bebephela ngaphambi kwe-0.8.1.

Konke okunye kusencwadi [Okungakakwakhiwa](topic:not-built-yet). Izinguquko zangaphambili zisencwadini [Okusha ku-0.7](topic:whats-new-0-7).
