---
title: Izakhiwo zodonga nezilinganiso zokubhekisela
summary: Yakha izinhlobo zakho zodonga ngesendlalelo ngesendlalelo ngomgogodla ocacile, gcina umtapo wezinto zephrojekthi, bese ulinganisa kubuso nasemigqeni ehlala ixhunyiwe lapho udonga lushintsha.
keywords: lod, izinga lokuthuthukiswa, lod 200, lod 300, jikelele, izakhiwo zodonga, uhlobo lodonga, izendlalelo, ingaphakathi, ubuso bengaphakathi, umugqa wengaphakathi, ingaphakathi lomoya, imembrane, ukugoqa indlu, umtapo wezinto, izinto, ubukhulu, isilinganiso sokubhekisela, isilinganiso, ukuxhumana, umugqa wendawo, ukugoqa, ukuhlaka, ukwakha, ugwadule
from: 4ea8fbf5
---

## Okuzokwenza

Yakha uhlobo lodonga olufana nodonga ozolakha: ukugoqa, ukugoqwa okungaphansi, umgogodla wensimbi ye-5½ amainshi kanye ne-drywall, noma ingqalasizinda, ingaphakathi lomoya kanye nodonga lohlaka lwezinkuni. Phawula izendlalelo ezingumgogodla, ukuze isilinganiso noma umugqa wendawo ugcine ingaphakathi kuthi izendlalelo eziphezu kwalo zishintshe. Bese ulinganisa izindonga ngobuso nangemigqa ehlala iphakathi oyifunayo.

## Yenza uhlobo lodonga

1. Qala isakhiwo noma vula imodeli ye-IFC bese uvula {{ui:Draw}}, bese ukhetha ithuluzi le-{{ui:Wall}}.
2. Khetha isisekelo ku-{{ui:Wall type}} bese uvula {{ui:Wall assemblies…}}. Isisekelo sivula njengekhophi; nika uhlobo olusha igama.
3. Izendlalelo zihamba kusuka ngaphandle, phezulu kuhlu, kuya ngaphakathi, phansi kuhlu. Khetha izinto zendlalelo ngayinye, uthayiphe ubukhulu bayo (ubukhulu bephrojekthi, noma ubukhulu obucacile obufana no-`12.7 mm` noma `1/2"`), khetha umsebenzi wayo (ukuqeda, isisekelo, isakhiwo, ukugoqa, imembrane) bese uyiqaphela izendlalelo ze-**Core**. Ingaphakathi kumele libe yiqoqo elilodwa elingaphazamisekile.
4. {{ui:Add layer}} yengeza isendlalelo, {{ui:Add cavity}} yengeza ingaphakathi lomoya kanye nokungena komoya (akucacisiwe, akunawo umoya, nomoya), {{ui:Add membrane}} yengeza isendlalelo esingenaso ubukhulu obubalwayo, njengokugoqa indlu. Izicibisi zihambisa isendlalelo ngaphandle noma ngaphakathi.
5. Ukubuka kuphrinta izendlalelo ngesikali, ingaphakathi ligcizelelwe, linombolo njengemigqa, futhi kulinganise isendlalelo ngasinye, ingaphakathi nobukhulu bonke. {{ui:Save type}}.

Uhlobo olusha lusemenwini ye-Wall tool nakwi-**Properties** yodonga olukhethiwe. Ukugcina uhlobo olulungisiwe kushintsha yonke indonga esilisebenzisayo; {{ui:Duplicate type}} yenza olunye oluhlukile futhi luninikeze kuphela izindonga ozikhethile. Ukugcina ngakunye kungesinyathelo esisodwa sokuhlehlisa, kanye nezindonga ezihamba nakho, izinmnyango nezifasiteli ezikuzo kanye nezilinganiso ezincike kuzo.

Ingaphakathi lomoya lengeza ububanzi. Imembrane ayengezi lutho: ihlala kuhlobo ukuze uhlu lokuhlola lungayithola kamuva, futhi ayibalwa ekubhekeni ubukhulu bodonga noma bengaphakathi. Ingaphakathi lomoya noma imembrane akusoze kubalwe njengento eqinile. Kufayela elilondolozwe njenge-IFC2X3, imembrane igcinwa erekhodini lohlobo kodwa ishiywa ngaphandle kwezendlalelo zezinto ezibonakalayo.

## Phawula uhlobo ngezinga lokuthuthukiswa (LOD)

Uhlobo lungatshela ukuthi luthuthukiswe kangakanani. Kumhleli, **Level of development (LOD)** inikeza isikali esisethiwe esingu-100, 200, 300, 350, 400 no-500, noma **Not set**. Udonga jikelele ("Wall 230 generic") buyi-LOD 100 noma 200; ukwakha okuthile okunezendlalelo zalo zangempela ("230 clay brick, plastered both sides") buyi-LOD 300 noma ngaphezulu. Ukuphawula kungokwakho ukukusetha: i-BimCraft ayiyibali, futhi izisekelo ezingenazo.

Uphawu luvela eduzane negama lohlobo ohlwini lwe-Wall tool, ku-**Properties** yodonga nohlwini lwe-[Swap type](topic:wall-tools), nombiko emva kokushintsha uhlobo utshela ukuthi izinga liphakame noma liphansi. Ukuze ulibone ku-**Walls by type** nakwi-CSV yalo, phawula i-**Show each wall type's LOD in the wall schedule** ku-Izilungiselelo › BimCraft › Izindonga: kwengezwa ikholomu yokugcina, LOD. Igcinwa kufayela le-IFC kanye nohlobo (kusethi yempahla ye-`CadCraft_WallType`, njengempahla ethi `LOD` nangaphakathi kwerekhodi lohlobo), ukuze ikhona uma uvula kabusha ifayela. Uphawu lusebenza kuhlobo lodonga kuphela okwamanje, hhayi ezintweni ezikodwa noma ezinye izinhlobo zezinto.

## Izindonga ezijikelele zesigaba sokuskeba

Uhlu lohlobo lwe-Wall tool luqala ngezindonga ezimbili **ezijikelele**: **Generic wall 200 mm (exterior)** kanye **Generic wall 100 mm (interior)**. Ngayinye iyisendlalelo esisodwa sempahla ejikelele, ephawulwe njenge-LOD 200. Sebenzisa lezi uma wazi lapho izindonga zizokwenziwa khona kodwa ungakwazi okwenziwe ngakho.

Udonga olunohlobo oluphawulwe **LOD 100** noma **LOD 200** lubonakala kuwo wonke amapulani njengomqimba oyodwa onemigqa, emazingeni wonke wemininingwane: akukho zendlalelo, akukho imigqa yezendlalelo. Lokho kuyiqiniso kwezindonga ezijikelele nakunoma yiluphi uhlobo lwakho oluphawula njenge-LOD 100 noma 200. Udonga ngokwalo luphelele: linobukhulu balo, izinmnyango nezifasiteli zalo, amagumbi alo nobuningi balo.

Ukuzeulithuthukise, shintsha uhlobo lwalo (Edit › Izindonga › **Swap type**, noma Type ku-Properties). Udonga alusoze ludweywe kabusha: udonga olufanayo lungena kuhlobo olusha, nombiko utshela ukuthi yini eshintshile. Uhlobo oluphawulwe LOD 300 noma ngaphezulu lidwetshwa ngezendlalelo zalo njengakuqala.

Ukuze udwebe zonke izindonga ngezendlalelo zazo nanoma yiluphi uphawu: Izilungiselelo › BimCraft › Izindonga, khipha **Draw walls of an LOD 100 or LOD 200 type as one hatched band**.

Izinmnyango nezifasiteli zesisekelo nazo ziyizinhlobo ezijikelele (usayizi kanye nendlela yokuvula, hhayi umkhiqizo). Ngokuthi **Show each wall type's LOD in the wall schedule** isebenze, uhlu lwezinmnyango nezifasiteli lubonisa i-LOD 200 kuzo.

## Nika uhlobo idatha yokubala amanani

Ku-editor yohlobo lodonga, **Takeoff data** ithatha okudingwa yi-estimator ngodonga, kanye kanye ngohlobo: **iyunithi** elakhiwe ngayo (ibhulokhi noma ingyeza: igama lalo, ubude, ukuphakama nobubanzi), **i-mortar** (igama nobukhulu bokuhlanganisa) kanye **ne-rate** ngekhodi yayo yemali (izinhlamvu ezintathu, njengo-USD, EUR noma ZAR) nokuthi iyini ngayinye: isikwele se-metre noma se-foot sendawo yodonga esisebenzayo, imitha noma i-foot yobude bodonga, noma ngayinye indonga. Konke lokhu akunandaba.

Igcinwa nohlobo kufayela. Yonke indonga yohlobo ibika kokukhona: {{ui:Schedules}} › **Wall types: takeoff data** ibhala iyunithi, i-mortar, i-rate kanye ne-rate ephindaphindwe ngesamba esilinganisiwe, futhi isiphakamiso esiya ku-TakeoffCraft sithwala lokho ku-item yalolu hlobo lodonga. Shintsha kuhlobo, bese zonke izindonga ziyalandela.

Ezinye izinkambu ezintathu zokubala izingyeza noma amabhulokhi kanye ne-mortar:

- **Waste on units, %** iyengezwa kunani lamayunithi. Yishiye ingenalutho ukuze usebenzise inani lendlela yokulinganisa yephrojekthi, noma lutho uma indlela ingenalo. Faka 0 ukuze ube nokulahlekelwa okungu-zero noma yini indlela ethi.
- **Extra mortar, %** ilolo amafrogs noma imingxunya eyamukela i-mortar. Yengezwa kuvolumu ye-mortar. Yishiye ingenalutho uma ingekho.
- **Layers built of this unit**: phawula isendlalelo ngasinye esiyiqabunga lalesi singyeza noma ibhulokhi. Udonga oluyingqimba ololubili linamaqabunga amabili. Uma kungekho okuphawulwe, kubalwa izendlalelo ezingumgogodla.

I-rate ingaba futhi ngeyunithi ngayinye yokuyoda, ngamayunithi angu-1000 ngayinye okuyoda, noma nge-m³ ye-mortar. Lapho iyunithi inobude nokuphakama, **Wall types: takeoff data** ibonisa amayunithi nge-m² (noma ft²) yeqabunga elilodwa, amayunithi okuyoda kanye nevolumu ye-mortar; izifomula zisekuthi [Bricks, blocks and mortar](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Uhlobo linombono oyodwa weyunithi: amaqabunga amabili ngamayunithi ahlukene (iqabunga langaphandle lengyeza kanye neqabunga langaphakathi lebhulokhi) akwazi ukubalwa kuhlobo oluyodwa okwamanje.

## Bamba umgogodla ungashintshi

Ku-**Properties**, setha **Location line** yodonga ibe ubuso bengaphakathi noma umugqa wengaphakathi. Uma kamuva wengeza noma ukhulisa okuqediwe, lowo mugqa uhlala lapho ukhona bese udonga lukhula luzungeze wona; izindonga ezihlangana nawo ekhoneni ziyawulandela, ngakho amakhona aqondile avale.

## Izinto zephrojekthi

{{ui:Material library…}} idla izinto zephrojekthi: igama, isigaba, ubukhulu isendlalelo esiqala ngabo, umbala wokubonisa, iphethini yokugcwalisa yokusika kanye namanothi. Umtapo ugcinwa ku-IFC kanye nephrojekthi. Ukukhetha into yesendlalelo kunika leso sendlalelo ubukhulu bokuzenzakalela bento, obungashintshwa; ukuhlela umtapo kamuva akuwushintshi udonga ovele wadweba. Ungenza futhi into entsha ohlwini lwezinto zesendlalelo ngo-{{ui:+ New material…}}.

## Izilinganiso zokubhekisela

{{ui:Annotate}} › {{ui:Reference dimension}}: khetha okuthi horizontal, vertical noma aligned, bese ukhetha isibhekiselo: ubuso bokuqeda bangaphandle noma bangaphakathi, ubuso womgogodla bangaphandle noma bangaphakathi, umugqa wodonga ophakathi noma umugqa womgogodla. Khetha udonga lokuqala, shintsha isibhekiselo uma ufuna, khetha lesibili, bese uchofoza lapho umugqa wesilinganiso uzohlala khona. Izibhekiselo ezimbili kudonga oyodwa zilinganisa ubukhulu bayo bonke noma bomgogodla. {{ui:Reference dimensions…}} ibhala izilinganiso zombono, kuhlanganise nalezo ezilahlekelwe udonga, ngePhrophathi, Rebind references kanye Delete.

### Linganisa ipulani yonke ngemithetho

{{ui:Annotate}} › {{ui:Dimension the plan…}} ilinganisa ingaphandle lepulani yesitezi oyibukile: usayizi ophelele ngaleyo ndlela, umugqa wezilinganiso eduze kwangaphandle ngalinye (izikhawu zezindonga, izindonga ezihlangana nomphetho, nezinmnyango nezifasiteli kuwo), izimiso zibekwe zikhululekile ekwakheni. Phawula okufunayo, bese ufunda inani, bese uchofoza {{ui:Add the dimensions}}. Ziyizilinganiso zesibhekiselo ezijwayelekile, ngakho zilandela izindonga uma zinyakaza, futhi ungakhetha, uhambise noma usule noma yiyiphi kuzo; konke kuyisinyathelo esisodwa sokuhlehlisa, futhi ukuqalisa kabusha akwenzi nakancane.

Ilinganisa ingaphandle kuphela: amagumbi angaphakathi kwesakhiwo, izindonga ezigobile nezindonga ezingekho ngokuqondile kwepulani ziyashiywa ngamathuluzi wesandla, futhi imigqa yegridi akuyona izindonga, ngakho izilinganiso phakathi kwegridi azenziwa lapha. Umsizi wakho oxhunyiwe angenza okufanayo nge-`plan_dimension`.

Isilinganiso sixhunyiwe ezindongeni, hhayi endaweni ethile esikrinini: lapho udonga luhamba noma uhlobo lwalo lushintsha, inani liyalandela. Uma udonga lususiwe isilinganiso sithi asixazululiwe futhi asibonisi inombolo, kuze kube yilapho usibopha kabusha noma uhlehlise. Ibhokisi lobude lamukela nezixhumanisi zepulani ezifana no-`10',12'` womugqa wesilinganiso endaweni ethile.

Izilinganiso zezindonga ezakhiwe yi-BimCraft, emibonweni yepulani. Akusakhiwe okwamanje: izilinganiso ezigatshaneni nasemibonweni yobude, kwizinhlobo, amawindi nezinye izingxenye, nezendlalelo zokwakha ezidwetshwe epulanini nasigatshaneni; bheka [Okungakakhiwa](topic:not-built-yet).

## Bona nokunye

[Dweba izindonga](topic:draw-walls), [Shintsha udonga, umnyango noma iwindi](topic:change-a-wall-or-door), [Properties](topic:properties-panel).
