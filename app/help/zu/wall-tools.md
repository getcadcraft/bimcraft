---
title: Imumo yodonga, ukuhlukanisa, ukuhlukanisa ngaphandle, ukweluleka nokukhulula
summary: Dweba izindonga njengesikwele, ipholigoni, ingxenye yesiyingi, emigqeni etholakalayo noma ezungeze umphetho; zihlukanise, zisuse ingxenye, zihlukanise ngaphandle, zelule ngebhokisi, zihlanganise bese uzikhiya ndawonye, nesilinganiso noma nomugqa wegridi. Konke ukushintsha kugcina izindonga zixhumene futhi kuyisinyathelo esisodwa sokuhlehlisa.
keywords: shintsha uhlobo, shintsha uhlobo, ukubuyisa, kwashintsha ini, lod, izinga lokuthuthukiswa, uhlobo lokuhlanganisa, mitre, miter, butt, square off, ukuhlangana kwezindonga, okulandelayo, kudlula, vimba ukuhlangana, vumela ukuhlangana, ukubaluleka kwezendlalelo, ingaphakathi, ukubaluleka, ukuhlangana, isikwele, isikwele esijikelezayo, ipholigoni, ngaphakathi, ngaphandle, ingxenye yesiyingi, ithanjiswa, ukubhala, umugqa ophakathi, imigqa ekhethiwe, thebhu, ukulandela, umphetho, umpheki, ukuhlukanisa, hlukanisa ngegebe, igebe, susa ingxenye, hlanganisa kabusha, ukuhlukanisa, ikhophi, elula ibhokisi, umncele, ukuhlanganisa, ukuvala, ukukhiya, ukukhiya kwegridi, isilinganiso sokukhiya, ukuhlaziya, ukuhlehlisa, ukuma, usondo, ukuhamba kwegridi, ukugcwala, bamba ubukhulu, akuxhumanga, ukuma ngaphandle, ukuqala ngaphezu, ukulinganisa kusukela, umugqa wengaphakathi, ubuso bangaphakathi, ubuso bangaphandle, ukuhlukanisa ukuxhumana, i-alt
from: 5b7d2f75
---

## Okuzokwenza

Yenza futhi ushintshe izindonga ngezindlela zethuluzi lodonga. Ngayinye iphela ngendlela efanayo nokudweba udonga ngamakhona awo: amakhona ahlanganisa ngokwawo, ukuxhumana kugcinwa kufayela, nakho konke ukushintsha kuyisinyathelo esisodwa ku-**Changes** esiqhubeka sihlehlisa nge-{{ui:Undo}}. Izindonga zigcina ubuqu bazo: udonga owuhlukanisile, owuhlukanise ngaphandle noma owulelule usalo lowo owuqala, nezimnyango, amawindi nezilinganiso zawo.

## Dweba isikwele, ipholigoni noma ingxenye yesiyingi

Ngo-{{ui:Draw}} ovulekile, vula {{ui:Shapes}} eqenjini le-Draw (noma khetha umumo ohlwini lwe-**Shape** emugqeni wodonga). Umugqa wodonga ubonisa uhlobo lodonga, ireferensi yokudweba, uhlangothi lwangaphandle nophezulu, njengakwethuluzi le-{{ui:Wall}}. Bese uchofoza, noma uthayiphe amaphuzu (x,y · @dx,dy · @length<angle · ubude ngaphansi kwesikhombi):

- **Rectangle**: amakhona amabili aphambene. Izindonga ezine, amakhona amane okuhlangana, isinyathelo esisodwa.
- **Rotated rectangle**: lapho uhlangothi lokuqala luqala khona nalapho luphela khona (lokho kusetha ukujikeka kwalo nobude), bese uchofoza ngesithathu ukuze uthole olunye uhlangothi.
- **Polygon**: isikhungo, bese ikhona (**Inscribed**) noma uhhafu wohlangothi (**Circumscribed**). Setha **Sides** (3 kuya ku-64) kuqala.
- **Arc, centre**: isikhungo, isiqalo (lokho kusetha ukuma), isiphetho. **Way round**: indlela emfushane, ngokuphambene nokuqondile noma ngokuqondile. Ukujikeka okungaphezu kwezingxenye ezintathu zesiyingi kudwetshwa njengezindonga ezimbili.
- **Tangent arc**: chofoza isiphetho sodonga, bese lapho isiyingi siphela khona. Isiyingi siphuma ekuphetheni kodonga ngendlela yodonga ngokwalo.

Umumo ovalekile uthola ukuphuma kwawo ngaphandle. Uma udwetshwe ku-**Outside face** noma **Inside face**, ubuso okuchofozwa kuwo yibona obuhlala bunjalo.

## Izindonga emigqeni osunayo

- **Pick lines**: chofoza umugqa bese udonga luyawuhlala kuwo. Cindezela {{key:Tab}} (noma bamba i-{{key:Shift}} ngenkathi uchofoza) ukuze uthathe ukulandelana konke kwemigqa exhunyiwe ngokuphela. Imigqa yale mbono imigqa yokudweba, ireferensi ye-trace kanye nemigqa yegridi.
- **Trace outline**: chofoza phakathi endaweni evaliwe yimigqa leyo noma izindonga. Izindonga zizungeza indawo encane kakhulu ezungeze lokhu okuchofozwe.

## Setha ngaphambi kokudweba: ukuhlukanisa nokuhlanganisa

Umugqa wodonga unezinkambu ezimbili ezengeziwe, zisetshenziswa ithuluzi le-{{ui:Wall}} nemumo:

- **Offset**: izindonga zidwetshwa kukhashane kuleyo ngxenye emugqeni ochofozayo: + ngakwesobunxele salo, − ngakwesokudla, obukwa ngendlela oyidweba ngayo.
- **Join**: yiqede ukuze udwebe izindonga ezizimele. Iziphetho zazo zithola **Disallow join** zihlale zikhululekile naphi lapho zihamba khona (bheka [Shintsha udonga](topic:change-a-wall-or-door)).

## Hlukanisa, susa ingxenye, hlanganisa kabusha

Vula {{ui:Walls}} eqenjini le-Edit.

- **Split**: chofoza udonga lapho kufanele kusikwe khona, noma thayipha ibanga kusukela esiqalweni salo. Eduze kodonga olwelula kulo, ukusika kuyabambelela lapho bahlangana khona. Izingxenye ezimbili zinohlobo olufanayo futhi zihlala zixhumene ngokulandelana. I-**Gap** ishiya igebe lobude obukhethiwe elimaphakathi nokusika. **Free ends** ikhipha iziphetho zokusika i-Disallow join esikhundleni salokho (Izilungiselelo › BimCraft › Izindonga › **When a wall is split** ikhomba ukuthi yiyiphi ephawulwe ekuqaleni). Umnyango noma iwindi lihamba nengxenye elimi kuyo; ukusika kulo kuyenqatshelwa.
- **Delete segment**: chofoza lapho ingxenye iqala khona nalapho iphela khona. Umnyango kuyo uhamba nayo.
- **Rejoin**: chofoza izingxenye ezimbili zodonga oyedwa (ngomugqa ofanayo, uhlobo olufanayo). Zingaba udonga oyedwa futhi, owokuqala ochofoze, nezimnyango zazo zombili.

## Uhlobo lokuhlangana, Disallow join, ukubaluleka kwezendlalelo

Vula {{ui:Walls}} eqenjini le-Edit.

- **Join style**: chofoza ikhona lapho izindonga ezimbili ezigudlekile zihlangana khona. Ngayinye ukuchofoza kudlulela kolandelayo: **Mitre** (zombili iziphetho zisikwa emugqeni osuka kwikhona elingaphakathi kuya kwelingaphandle, okuqala ngakho konke ikhona), **Butt** (udonga olulodwa ludlula kubuso bangaphandle bomunye, oluma ngaseceleni lawo) kanye **Square off** (njenge-butt, nodonga oludlulayo luphela ngokuqondile; ekhoneni elilungile lubukeka njenge-butt). **Next**, noma {{key:Tab}}, yenza omunye udonga abe ngowedlulayo. Uhlu lwe-**Style** emugqeni lubonisa ikhona oliqonde kulo ekugcineni. Lezi zinketho ezimbili zisemaphrophathini wodonga oyedwa we-**Properties**: **Join style at start / at end** kanye **Runs through**. Ngayinye iyisinyathelo esisodwa ku-**Changes**. Ipulani, umzimba we-3D, amagumbi kanye nezinto kuyalandela.
- Ku-T udonga osebhekwe ngohlangothi lwalo luhlala ludlulayo. Lapho izindonga ezimbili zidlula ezinye, ukuchofoza (noma **Continuous where it crosses** ku-Properties) kuchaza ukuthi yiyiphi eyodwa eqhubekayo; lokho kunquma ukuthi izendlalelo zodonga zidwetshwa kanjani ngokudlula.
- Isitayela sisemuhlanganweni: sihlala lapho izindonga zihamba, sihamba kuphela uma ukuhlangana kuhamba (udonga uyasuswa, uhlukaniswa ekugcineni lapho, noma ugcina i-Disallow join). Ikhona lapho kukhona udonga oluyigobo, noma lapho izindonga ezintathu noma ngaphezulu zihlangana, lihlala lingu-mitre. Ikhona elibukhali ngaphezu kwama-30 degrees, noma elincane kakhulu kuno-150, nalo luyabuya lube mitre.
- **Disallow join**: chofoza eduze kwesiphetho sodonga. Lowo mphetho uyakhululeka: awuhlanganisi lutho, noma udonga lunjani, kuze kube yilapho uyichofoza kabusha. Iziphetho ezikhululekile ziphawulwa ngesiphambano uma ithuluzi livuliwe. Isiwishi esifanayo yi **Join at start / Join at end** ku-Properties.
- **Layer priority**: lapho izindonga ezinezendlalelo zihlangana, isendlalelo esinamandla siyasika esibuthakathaka, ngakho izingqikithi zihlangana nezingqikithi, nokuqeda kumile phambi kwesendlalelo esinamandla. Isendlalelo ngasinye sinokubaluleka okusuka ku-0 kuya ku-999; ngokuzenzakalela kuvela emsebenzini wesendlalelo (isakhiwo 800, isisekelo 600, ukugoqa 400, imembrane 300, ukuqeda 200, ingaphakathi 100). {{ui:Layer priority}} ivula izakhiwo zodonga, lapho ikholomu ethi **Priority** isetha inombolo yesendlalelo ngasinye. Izendlalelo ezinokubaluleka okufanayo ziyamelana, nomugqa udwetshwa phakathi kwezinto ezehlukene kuphela. Ubona lokhu epulanini ngemininingwane **Medium** noma **Fine**, ezikhoneni, kuma-T nasemiqansweni yezindonga ezimbili ezigudlekile; i-Izilungiselelo › BimCraft › Izindonga › **Clean wall layers where walls meet** iyavala. Ishintsha okudwetshwa phakathi kwezindonga kuphela: imiphetho yezindonga nezinto zazo zihlala njengoba uhlobo lokuhlangana lukunika.

## Shintsha uhlobo lwezindonga eziningi

Ukusuka ezipulanini zokuskeba kuya ezipulanini zokusebenza kuyikakhulu ushintsho lohlobo: udonga ojwayelekile uba ukwakha okuthile. Ayikho into oyidweba kabusha.

1. Khetha izindonga (eyodwa, noma eziningi nge-{{key:Ctrl}} noma {{key:Shift}}).
2. Ku-Properties, cindezela **Swap type…** ngaphansi kuka-Wall type (noma vula {{ui:Walls}} eqenjini le-Edit bese ukhetha {{ui:Swap type}}, okuvula uhlu olufanayo). Uhlu luvula ngaphakathi ku-Properties, endaweni yezindonga ezikhethiwe. Ayisiyo ingxoxo futhi ayimboni lutho: ipulani, umbono we-3D nokukhetha kuyaqhubeka nokusebenza lapho luvuliwe, futhi lulandela izindonga oziKhethayo.
3. Uhlu lukhombisa wonke uhlobo lodonga nobukhulu bawo nophawu lwe-LOD, isibonelo "Wall 230 generic, LOD 200" kanye "230 clay brick, plastered both sides, LOD 300". Izinhlobo izindonga ezikhethiwe zinazo manje ziyamakwa. Thayipha **Find** ukuze uncishise: igama, ubukhulu, noma `lod 300`.
4. Chofoza uhlobo. Yonke indonga ekhethiwe iyashintsha kuso kwisinyathelo esisodwa, ngakho i-{{ui:Undo}} eyodwa ibuyisela konke ukushintsha. Inkinobho encane x ivala uhlu.

Udonga ngalunye ugcina umugqa wendawo yalo. Udonga olusemgqeni wayo wephakathi lukhula ngakuzo zombili izinhlangothi; udonga umugqa wendawo waso ubuso uyagcina lobo buso bese ukhula ngenye indlela, nezindonga ezixhunyiwe kuwo zilandela ezikhoneni. Izindonga ezikhiyiwe ngokushintshiwe nazo ziyalandela. Izinmnyango nezifasiteli zihlala ezindongeni zazo futhi zisikwa kabusha ngobukhulu obusha.

Emva kokushintsha uhlu lubonisa **What moved**: izindonga ezingaki ezishintshile nokuthi zishintshele kwini, ubukhulu ne-LOD ngaphambi nangemva, izindonga ezinyakazele ngohlangothini ukuze zigcine umugqa wazo wendawo, izindonga ezixhunyiwe ezilandele, izinmnyango nezifasiteli ezifakwe kabusha, nagumbi ngalinye elishintshe indawo yalo nendawo yalo ngaphambi nangemva. Umugqa wesimo ukusho okufanayo ngomugqa owodwa. Umbiko ukutshela kuphela; awukaze umise ukushintsha. Izinto ezimbili zingama ukushintsha, bese kungashintshi lutho: umnyango noma iwindi okungeke lilingane odongeni lwalo (udonga luyafinyeleka lapho ikhona ilandela, yenza umnyango ube mncane noma uwususele kude nekhona kuqala), kanye nokukhiya okuzophula ukushintsha (udonga okhiywe kugridi ngomugqa wawo wephakathi lapho umugqa wendawo uyibuso; ukhulule noma ubuyisele umugqa wendawo emugqeni wephakathi).

Umsizi oxhunyiwe ku-BimCraft angenza ukushintsha okufanayo (amathuluzi `wall_types_list` kanye `walls_swap_type`) futhi uthola umbiko ofanayo.

Uhlobo lodonga lwe-LOD lusethwa kumhleli wezakhiwo zodonga: bheka [Wall assemblies](topic:wall-assemblies).

## Ukuhlukanisa ngaphandle kanye nokweluleka ngebhokisi

- **Offset**: chofoza udonga, bese uchofoza uhlangothi okufanele lunyakazele kulo, noma thayipha ibanga. Udonga uyanyakaza ngqo kuwona, nezindonga ezixhunyiwe kuwo zelula. Khetha **Copy** ukuze uthole ikhophi ehambisana neyokuqala (ayixhunyiwe kuyo).
- **Box stretch**: chofoza amakhona amabili ebhokisi, bese uphawu lokunyakaza nephuzu lokuya kulo. Yonke isiphetho sodonga esingaphakathi kwebhokisi siyanyakaza; udonga oluphelele ngaphakathi luyanyakaza nezindonga ezihlanganayo nalo nazo ziyeza; izindonga ezidlula ebhokisini ziyelulwa.

## Hlela ibanga bese uyikhiya

Khetha isilinganiso sesibhekiselo (Annotate › {{ui:Reference dimension}}) bese uthayipha inani lakho ku-**Properties**: udonga wesibhekiselo sesibili uyanyakaza ngqo kuwona, isibhekiselo sokuqala siyahlala, nezindonga ezixhunyiwe ziyalandela. Khetha **Lock this dimension** ukuze ugcine inani: uma kamuva udonga olulodwa lunyakaza, elinye liyalandela. Inani elikhiyiwe alikwazi ukubhalwa phezu kwalo uze uliphinde ukhetha.

## Hlanganisa futhi ukhiye

**Align and lock**: chofoza ubuso bodonga (noma umugqa wephakathi, eduze kwephakathi kodonga) noma umugqa wegridi, bese ubuso bodonga obuzolethwa kulowo mugqa. Udonga uyanyakaza ngqo kuwo. Khetha **Lock** kuqala ukuze ugcine zihlanganisiwe: iphadi lokukhiya liyabonakala epulanini, uma udonga olulodwa lunyakaza elinye liyalandela. **Properties** zodonga zihlu ngezikhiyo zalo, ngayinye no-**Unlock**.

## Khiya izindonga emigqeni yegridi

Khetha udonga ohamba ngomugqa wegridi, noma osekhoneni lapho lukhona, bese ukhetha umugqa wegridi ku-**Properties** › **Lock to grid**. Bese ukhetha umugqa wegridi ngethuluzi {{ui:Grid}} bese uthayipha ibanga ku-**Move by**: umugqa uyanyakaza ngqo kuwona, nezindonga ezikhiyiwe kuwo ziyalandela, nezindonga ezixhunyiwe kuzo, kwisinyathelo esisodwa. Udonga okhiywe kumugqa wegridi awukwazi ukuphuma kuwo wedwa (hambisa umugqa, noma khulula udonga); umugqa wegridi oshintshwa ngendlela lapho udonga okhiywe ungahlala ungqo kuwo unqatshelwa. Ukuqamba kabusha umugqa kugcina ukukhiya; ukususa kuyakususa.

## Ubude: iyiphi inhlangothi emile, nokukalwa

- **Grow from** (Properties yodonga oyedwa): **Start holds** (isiphetho siyanyakaza), **End holds** (isiqalo siyanyakaza) noma **Centre holds** (zombili iziphetho zinyakaza ngehhafu). Ngenkathi uthayipha ubude, ipulani ibonisa iphuzu elimile. Udonga oxhunyiwe esiphethweni esinyakazayo uyanyakaza ngqo kuwona futhi ugcina ikona layo.
- **Measure from** (ngasese kwe-Dimensions epulanini, ku-Properties, nakwi-Izilungiselelo › BimCraft › Izindonga): umugqa wephakathi, ubuso bangaphakathi noma ubuso bangaphandle. Inkambu yobude nezilinganiso zezindonga zepulani zifunda okufanayo, ngakho ziyavumelana. Iqala emugqeni wephakathi.
- Ukuhambisa udonga ngaphandle kwezixhumanisi zawo (ziyephuka, udonga ugcina ubuqu bawo), bamba i-{{key:Alt}} uma uhudula isibambi sawo esiphakathi.

## Okuhle ukukwazi

- Lezi zindlela zichazwe ngumbhalo wethuluzi lodonga (amakhasi 4 kuya ku-9). Uhlobo lokuhlangana nokubaluleka kwezendlalelo kwakhelwe izindonga ezigudlekile; ukubaluleka kwezendlalelo kubonakala epulanini kuphela (hhayi ezigatshaneni, ekubukekeni kohlangothi noma ku-3D, lapho udonga kuwumzimba munye), hhayi ezindaweni zezindonga ezintathu noma ngaphezulu, futhi imembrane ayithwalwa.
- Uhlobo lokuhlangana lugcinwa erekhodini layo kufayela le-IFC (igama le-`IfcRelConnectsPathElements`, isibonelo `CadCraft join L butt 1`), ngakho ezinye izinhlelo zisafunda ukuhlangana futhi ifayela elidala livula nge-mitre.
- Izikhiyo nokuhlangana kugcinwa kufayela le-IFC (izikhiyo njenge-`CadCraft_WallHolds` kwiphrojekthi, ukuhlangana njenge-`IfcRelConnectsPathElements`), ngakho zikhona uma uvula kabusha ifayela.
- Izindonga ezigobile zingahlukaniswa, zihlanganiswe kabusha futhi zisuswe ingxenye; azihlanganisi noma zikhiywe.
- Bheka futhi [Dweba izindonga](topic:draw-walls), [Shintsha udonga, umnyango noma iwindi](topic:change-a-wall-or-door) kanye [Yakha udonga](topic:wall-shape).
