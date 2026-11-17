---
title: Amathebula, izilinganiso kanye ne-PDF yepulani
summary: Amathebula wezicabha, amawindi, izindonga namagumbi ashintsha njengoba udweba, izilinganiso epulanini, kanye nepulani yezinga egcinwa njenge-PDF ngesilinganiso esijwayelekile.
keywords: uhlu, uhlu lwezicabha, uhlu lwamawindi, uhlu lwezindonga, uhlu lwamagumbi, izinani, takeoff, indawo, csv, ishidi lezinani, izilinganiso, dimension, phrinta, pdf, plot, isikali, ishidi, 1/4", 1:50
from: d97cd16e
---

## Okuzokwenza

Bona ukuthi isakhiwo osidwetshile siyini, njengoba usidweba: ziningaki izicabha namawindi ngosayizi ngamunye, udonga olungakanani ngohlobo ngalunye, kanye nokuthi igumbi ngalinye likhulu kangakanani. Beka izilinganiso epulanini bese uyigcina njenge-PDF ukuze uyiphrinte noma uyithumele.

## Uhlu

Ngo-{{ui:Dweba}} usebenza, **Uhlu** kwiphaneli yesobunxele ibonisa ithebula elilodwa ngesikhathi:

- **Izicabha** nemawindi: ngalinye ngophawu lwalo (D1, D2 … kanye no-W1 …, anikezwa njengoba ufaka), uhlobo lwalo, ububanzi, ukuphakama (nesill), izinga kanye nodonga okuwo.
- **Izindonga ngohlobo**: ngohlobo ngalunye lodonga, ziningaki izindonga, ubukhulu bazo, ubude bazo bonke kanye nendawo yazo eseceleni njenge-**Gross area**, **Deductions** kanye **Net area**, nesamba.
- **Amagumbi**: inombolo, igama, izinga, indawo kanye nomjikelezo, kanye nesamba sendawo.
- **Amafulo**: ngayinye ngezinga layo, uhlobo kanye nobukhulu, kanye nendawo yawo egcwele, izinciphiso kanye ne-net area.
- **Ukuphela**: ungqimba ngalunye lokuphela kwezohlobo lwezindonga (ngempahla nangohlangothi lodonga) kanye nesiling, nenani lobuso kanye nesamba, izinciphiso kanye ne-net.
- **Izindonga ngohlobo: idatha yokubalwa**: okufakwe kanye kuhlobo ngalunye lodonga (iyunithi, umhlanganiso, izinga), nenani lezindonga, ubude bazo kanye ne-net area, kanye nezinga eliphindwe ngokulinganiswa okulinganisiwe. Bona [Izinhlelo zezindonga](topic:wall-assemblies).

- **Ukuphela ngegumbi**, **Ukuphela ngodonga**, **Ukuphela ngesigaba** kanye **Izinombolo zokuphela**: okugubha igumbi ngalinye, nezindawo, izinani lamathayili ahlanganisa ukusika kanye nevolumu yesisekelo. Bona [Ukuphela kwamagumbi kanye namathebula okuphela](topic:room-finishes).
- Izinhlelo zakho zokuhlela, **set-ups**: ithebula owayelihlanganise, wenza isamba, wagcina ngegama. Bona [Hlela, gcina futhi uhambise ithebula](topic:schedule-layouts).

Lawa mathebula ashintsha ngalo lonke ushintsho olwenzayo. Chofoza umugqa, noma inani elilodwa, ukukhetha izinto ezivela kulo. {{ui:Landa i-CSV}} igcina ithebula, ukuze uvule kusipredishithi; **Landa i-Excel** kanye **Kopisha ye-Google Sheets** zisezansi kwalo. **Ukuphela kwamagumbi** ne-**Specification** [Bhala i-specification kusuka kumodeli](topic:specification) kuvulwa endaweni efanayo.

## Indawo nevolumu yesendlalelo ngasinye

Khetha **Layers: area and volume** ohlwini lwe-Schedules. Linomugqa owodwa wesendlalelo ngasinye sohlobo lwezindonga, amafulo, uphahla kanye nesiling ezisetshenziswayo: into, uhlobo lwayo kanye ne-LOD, isendlalelo (ibalwa kusuka ohlangothini lwangaphandle lodonga, kusuka phezulu kwefulo, uphahla noma isiling), impahla yaso kanye nomsebenzi, ukujula kwaso, inani lezinto, **net area** kanye **volume**.

- Indawo iyi-net area yezinto zalolo hlobo, ilinganiswe njengoba kwenziwa ku-Walls by type, Floors kanye ne-Finishes, ngendlela yokulinganisa yephrojekthi. Uphahla lulinganiswa ngokuthambekile; akukho mthetho wendlela yokulinganisa wophahla.
- Ivolumu iyiyo leyo ndawo iphindwe ngokujula kwesendlalelo sayo.
- Ifulo, uphahla noma isiling ngaphandle kohlobo kuyisigaba esisodwa: isendlalelo esisodwa sobukhulu bayo.
- Indawo yomoya ibalwa ngendawo yayo futhi ayifakwa kwevolumu yonke. Imembrane inendawo kodwa ayinavolumu.

Chofoza umugqa ukukhetha izinto zawo. {{ui:Landa i-CSV}} igcina ithebula.

## Indlela izindawo ezilinganiswa ngayo

Yonke indawo inezinombolo ezintathu ezengeza ndawonye: gross ngaphandle kokuncishiswa kuba i-net. Umthetho ubhalwe ngaphezulu kwalawa mathebula wonke, futhi ngumthetho munye: amashidi, izinani ezigcinwe efayeleni le-IFC kanye nokubalwa okunikezwa ku-TakeoffCraft konke kusebenzisa wona.

- **Udonga**: gross ngubuso bodonga bodwa, ubude bayo ngomugqa wasembindini iphindwe ngobude bayo (ubuso bangempela bodonga olunophephelo olumile noma isisekelo esinesimo). Konke okuvulekile (imigoqo, amawindi nezinye izimbobo) kuyancishiswa, ububanzi ngobude, kuvulwe kanye ngalinye.
- **Ifulo noma isiling**: gross ngendawo engaphakathi komgogodla wayo. Konke okuvulekile nokusikwa okungaphakathi kuyancishiswa kanye kanye.
- **Ukuphela kodonga**: ungqimba ngalunye lokuphela lohlobo lodonga lumboza ubuso bodonga bodwa, lulinganiswa njengodonga, kususwa izimbobo ezifanayo. Ukuphela kuyisendlalelo sodonga: sikhonjiswa ngaphansi kwe-Ukuphela futhi asingezwa endaweni yodonga, ngakho udonga olunomnyango alubalwa kabili.

Lowo ngu-**CadCraft default**: konke okuvulekile kuyancishiswa, noma ngabe kunosayizi muni; izindonga zilinganiswa ngomugqa wasembindini; ama-reveal akalinganiswa. Yilokho okusetshenziswa yiphrojekthi ngayinye uze ukhethe enye indlela.

## Khetha indlela yokulinganisa

Ngaphezu kwe-schedule, **Measurement method** ilanda izindlela ezifika ne-BimCraft, bese **Load a method file** ithatha eyakho yehhovisi. Ukukhetha kugcinwa efayeleni le-IFC, njengesinyathelo esisodwa se-undo, futhi izinto ezintathu zilandela kanyekanye: amathebula, izinani ezinetha ezigcinwe efayeleni, kanye nokubalwa okunikezwa ku-TakeoffCraft. Umthetho ongaphezu kwethebula ngalinye-ke uqala ngendlela, umthombo wayo, usuku umthombo wafundwa ngalo namagama **Akuhlolwe ngumsindisi wezinani**.

Indlela ingufayela elincane lezimo, hhayi ikhodi yohlelo. Ngenani ngalinye ithi:

- **imbobo encane kakhulu esusiwe**: isibonelo, imbobo engu-0.5 m² noma ngaphansi ihlala endaweni yodonga;
- **indlela izindawo zezindonga ezihlangana ngayo elinganiswa ngayo**: ngomugqa wasembindini; noma udonga oluphela kudonga olunye lulinganiswa kuya ebusweni balowo mdonga; noma wonke umkhawulo wodonga ohlangana nodonga olunye ulinganiswa kuya ebusweni obuseduze;
- **kulinganiswa yini ama-reveal** okuphela ngawo (ukubuyela kokuphela kwemigoqo), njengendawo noma, uma kuncane, njengobude. Ukujula kwe-reveal kuthathwa njengesigamu sobukhulu bodonga;
- **ithini ngesakhiwo sebhilidi (masonry)**: sinqunywa kanjani, nanoma yimaphi ama-waste noma ama-mortar ayisho.

Izindlela ezifika ne-BimCraft:

| Indlela | Izindonga: imbobo encane kakhulu esusiwe | Ukuphela kodonga | Iziling | Ukwakha ngebhilidi |
|---|---|---|---|---|
| CadCraft default | konke okuvulekile | konke okuvulekile | konke okusikiwe | akukho okuvunyelwe |
| RICS NRM 2 (United Kingdom), 2nd edition 2021 | 0.5 m² noma ngaphansi kuyahlala | 1 m² noma ngaphansi kuyahlala | 1 m² noma ngaphansi kuyahlala | ngendawo; azikho amaphesenti ashiwo |
| AAQS Standard Method for Africa 2015 | 0.5 m² noma ngaphansi kuyahlala | 0.5 m² noma ngaphansi kuyahlala | 0.5 m² noma ngaphansi kuyahlala | ngendawo; ilinganiswa ngaphandle, 0% waste |
| IS 1200 (India), 1976, brickwork | 0.1 m² noma ngaphansi kuyahlala | okuzenzakalelayo (bona ngezansi) | okuzenzakalelayo | ngevolumu |
| BIA Technical Note 10 (United States), 2009 | konke okuvulekile | okuzenzakalelayo | okuzenzakalelayo | 5% waste kumayunithi, 15% kumortar |

Funda lezi zimingcele ngaphambi kokuthembela endleleni:

- **Akukho quantity surveyor ohlolile noma yiyiphi kuzo.** Ngayinye yenziwa ngokufunda umthombo obhekisela kuwo nokurekhoda izinombolo zawo nesigatshana esizivela kuso. Uma uyi-quantity surveyor futhi ungahlola enye, abenzi be-app bangathanda ukukwazi.
- Lapho umthetho ungafundeka emthonjeni, indlela ithi **not confirmed** kuwo futhi kusetshenziswa i-CadCraft default. Akukho ndlela efika ne-BimCraft enomthetho oqinisekisiwe wezixhumi zezindonga, ama-reveal noma amafulo, ngakho ezo zilinganiswa ngendlela ejwayelekile ngaphansi kwazo zonke.
- IS 1200 ikhipha izimbobo ku-plaster ngamabhendi amathathu. Ifayela lendlela alikwazi ukugcina amabhendi okwamanje, ngakho ukuphela kwezindonga kusebenzisa okuzenzakalelayo ngaphansi kwalolo hlelo, futhi umthetho uyashoyo.
- I-South African Standard System of Measuring Building Work **ayikho** kuzo: umbhalo wayo awukwazanga ukufundwa. Indlela ye-AAQS yase-Africa ithi yakhelwe ku-1991 edition yalolo hlelo, kodwa iyidokhumenti ehlukile.
- BIA Technical Note 10 yinothi yokulinganisa yemboni, hhayi indlela ejwayelekile yokulinganisa.
- Imbobo esayizi encane kakhulu ilandela amagama endlela ("not exceeding", "less than"). Usayizi ongaphakathi kwezingxenye ezi-2 ku-10 000 kuyo ubalwa njengalowo.
- Ngaphansi kwendlela, indawo ye-net yohlangothi lodonga nendawo ye-net yefulo noma isiling kulandela indlela, nesethi yezinani iyitshela. Izinani ezigcwele nevolumu efayeleni zihlala njengoba zidwetshwe.

**Izinkomba zale ndlela**, ngaphansi kwesikhethi, zisho ukuthi yisiphi isithombo ngasinye sishiya siveziwe. **Vula umthombo** ukuya kudokhumenti.

### Indlela yehhovisi lakho

Ifayela lendlela liyi-JSON ngefomethi `cadcraft-measurement-method`. Yonke inani kulo libiza isigatshana lisuka kuso; inani elingenaso isigatshana alamukelwa. Ifayela liyahlolwa lapho ulayisha, inkinga ikhonjiswa ngegama, futhi akukho okusetshenziswa kwifayela elingadlulisi. Uma lisekhethiwe, lilondolozwa ngaphakathi kwephrojekthi, ngakho iphrojekthi ivula ngendlela efanayo kwenye ikhompyutha. Ikhodi yalo ingegama elilula lakho (kungenzeka ingabi ikhodi yendlela enikezwa uhlelo).

## Izitsha, amabhulokhi nomortar

**Izindonga ngohlobo: idatha yokubalwa** ibala amayunithi nomortar wohlobo ngalunye lodonga oluneyunithi enobude nokuphakama (bona [Nika uhlobo idatha yalo yokubalwa](topic:wall-assemblies#give-a-type-its-takeoff-data)). Lezi yizifomula, njengoba zibalwa ngokuqondile:

- **Amayunithi ngendawo yesendlalelo esisodwa** = 1 / ((ubude besiyunithi + ijoyinti) × (ukuphakama kwesiyunithi + ijoyinti)). Ibhulokhi elingu-215 × 65 mm elinejoyinti elingu-10 mm: 1 / (225 × 75 mm) = 59.26 ngu-m².
- **Amayunithi abubanzi ngokuhlanganyela kwesendlalelo** = (ukujula kwesendlalelo + ijoyinti) / (ububanzi besiyunithi + ijoyinti), kusondelwe ku-whole number, okungenani 1. Isendlalelo esingu-102.5 mm sezibhulokhi ezingu-102.5 mm singu-1; udonga olungu-215 mm lwezibhulokhi zefanayo lungu-2.
- **Amayunithi** = amayunithi ngendawo × amayunithi abubanzi × indawo ye-net yobuso bodonga, ihlanganiswe phezu kwezendlalelo zohlobo.
- **Amayunithi okuoda** = amayunithi × (1 + waste % / 100), asondelwe phezulu ku-whole unit. Ukonakala kuthathwa kohlobo, uma kukhona; uma kungekho, kwendlela, uma ikhombisa okuthile; kungenjalo 0%.
- **Umortar** = indawo ye-net × ukujula kwesendlalelo, ngaphandle kwevolumu yamayunithi (amayunithi × ubude × ukuphakama × ububanzi), bese kwengezwa iphesenti elengeziwe elifakwe kohlobo lwama-frog noma imbobo, bese kwengezwa okuvunyelwe kwendlela uma luyakhomba. Idinga ububanzi besiyunithi.

Okuthathwayo: isendlalelo ngasinye sohlobo sakhiwa ngeyunithi yohlobo lwaso; isendlalelo esijulile kunobubanzi bayunithi eyodwa sibalwa njengobubanzi bayunithi abaningi, ngayinye njengesendlalelo esibekwe ngobude, ngakho izinhlaka ezisikiwe, ama-closer nezimo ezikhethekile azibalwa ngokwahlukana; lapho kungakhethwa sendlalelo esakhiwe ngeyunithi, izendlalelo eziphakathi zithathwa njengezendlalelo, futhi inothi ngaphezulu kwethebula liyakutshela lokho. **Amount** yisilinganiso esiphindwe ngalokho esilinganiswa ngakho, okungaba futhi iyunithi yokuoda, amayunithi okuoda angu-1000 noma i-m³ yomortar.

Amamaki yizinombolo ze-IFC zezinto: shintsha enye ku-**Properties** (Tag) nethebula lilandele. Kuyo yonke imodeli ye-IFC, edwetshiwe noma cha, [Engeza izinani, uhlu izinto kanye nezikhala zethebula](topic:quantity-totals) yengeza noma yiyiphi impahla.

## Izilinganiso

Ipulani likhombisa ubude bodonga ngalunye odwetshiwe ngaseceleni langaphandle (udonga wangaphakathi: ngohlangothi olunye) futhi, kudonga oneminyango namawindi, ichain esuka emakhoneni iye kwelinye nelinye imbobo. {{ui:Izilinganiso}} ebhareni lemodeli iyazicasha futhi ibuyise.

## Gcina ipulani njenge-PDF

1. Bonisa izinga ofuna bese usetha iyunithi ephaneli ethi **Levels**.
2. Chofoza {{ui:Phrinta}} ebhareni lemodeli.
3. I-BimCraft igcina "<file> — <level>.pdf": ipulani ngombala omnyama nomhlophe ngesilinganiso esijwayelekile esikhulu esifanele ikhasi (1/4" = 1'-0", 1/8" = 1'-0" … ku-Letter ngamafiti namayintshi; 1:50, 1:100 … ku-A4 ngamamillimitha), nodonga ogcwele, iminyango, amawindi, amagama wamagumbi nezindawo, izilinganiso, kanye nebhande lesihloko elinezinga, ifayela, ukuphakama kokusika, usuku kanye nesilinganiso.

I-PDF idwetshwe ngemigqa nombhalo, ngakho ihlala icacile kunoma yisiphi isilinganiso sokusondeza futhi umbhalo wayo ungasesakwa.

## Okufanele ukwazi

- Amathebula abala okudwetshwe ngamathuluzi wokudweba. Izicabha namawindi avela kwezinye izinhlelo zibonakala ku-Quantity totals esikhundleni salokho.
- Ukuze ubize umsebenzi, nikeza izinani ku-TakeoffCraft: bona [Izinani ku-TakeoffCraft](topic:takeoff). Ukulanda kwe-CSV kuhlala kwelamathebula.
