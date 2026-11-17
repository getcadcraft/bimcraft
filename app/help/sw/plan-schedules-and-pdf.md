---
title: Majedwali, vipimo na PDF ya mpango
summary: Majedwali ya milango, madirisha, kuta na vyumba yanayobadilika unapochora, vipimo kwenye mpango, na mpango wa ngazi uliohifadhiwa kama PDF kwa kipimo cha kawaida.
keywords: jedwali, jedwali la milango, jedwali la madirisha, jedwali la kuta, jedwali la vyumba, wingi, ukadiriaji wa kiasi, eneo, csv, lahajedwali, vipimo, kipimo, chapisha, pdf, chora, kiwango, karatasi, 1/4", 1:50
from: d97cd16e
---

## Utakachofanya

Ona jumla ya jengo ulilochora, unapoendelea kuchora: milango na madirisha ngapi ya kila ukubwa, ukuta kiasi gani wa kila aina, kila chumba kina ukubwa gani. Weka vipimo kwenye mpango na uuhifadhi kama PDF kuchapisha au kutuma.

## Majedwali

Ukiwa umewasha {{ui:Draw}}, **Schedules** kwenye paneli ya kushoto inaonyesha jedwali moja kwa wakati:

- **Doors** na **Windows**: kila moja kwa alama yake (D1, D2 … na W1 …, kama unavyoziweka), aina yake, upana, urefu (na sill), ngazi na ukuta ulio ndani yake.
- **Walls by type**: kwa kila aina ya ukuta, idadi ya kuta, unene wake, urefu wake wote na eneo la pande zake kama **Gross area**, **Deductions** na **Net area**, pamoja na jumla.
- **Rooms**: namba, jina, ngazi, eneo na mzunguko, pamoja na jumla ya eneo.
- **Floors**: kila sakafu yenye ngazi yake, aina yake na unene wake, pamoja na eneo lake la jumla, makato na eneo halisi.
- **Finishes**: kila safu ya umaliziaji wa aina za kuta (kwa nyenzo na upande wa ukuta) na dari, pamoja na idadi ya nyuso na jumla, makato na halisi.
- **Wall types: takeoff data**: kilichoingizwa mara moja kwa kila aina ya ukuta (kitengo, chokaa, kiwango), pamoja na idadi ya kuta, urefu wake na eneo halisi, na kiwango kikizidishwa na kiasi kilichopimwa. Ona [Mikusanyiko ya kuta](topic:wall-assemblies).

- **Finishes by room**, **Finishes by wall**, **Finishes by zone** na **Finish quantities**: kinachofunika kila chumba, pamoja na maeneo, idadi ya vigae ikijumuisha kukatwa na ujazo wa msingi. Ona [Umaliziaji wa vyumba na majedwali ya umaliziaji](topic:room-finishes).
- **Set-ups** zako mwenyewe: jedwali uliloweka pamoja, ukajumlisha na kulihifadhi kwa jina. Ona [Panga, hifadhi na hamisha jedwali](topic:schedule-layouts).

Majedwali yanabadilika kila uhariri. Bofya safu, au takwimu moja, kuchagua vipengele ilivyotoka. **Download CSV** inahifadhi jedwali, kulifungua kwenye lahajedwali; **Download Excel** na **Copy for Google Sheets** ziko chini yake. **Room finishes** na **Specification** ([Andika vipimo kutoka modeli](topic:specification)) zinafunguka kutoka mahali hapo hapo.

## Eneo na ujazo wa kila safu

Chagua **Layers: area and volume** kwenye orodha ya Schedules. Ina safu moja kwa kila safu ya kila aina ya ukuta, sakafu, paa na dari inayotumika: kipengele, aina yake na LOD yake, safu (inahesabiwa kutoka upande wa nje wa ukuta, au kutoka juu ya sakafu, paa au dari), nyenzo na kazi yake, unene wake, idadi ya vipengele, **net area** na **volume**.

- Eneo ni eneo halisi la vipengele vya aina hiyo, lililopimwa kama ilivyo kwenye Walls by type, Floors na Finishes, kwa mbinu ya kupima ya mradi. Paa hupimwa kwenye mteremko; hakuna mbinu ya kupima yenye kanuni ya paa.
- Ujazo ni eneo hilo likizidishwa na unene wa safu yenyewe.
- Sakafu, paa au dari isiyo na aina ni safu moja: safu moja ya unene wake yenyewe.
- Nafasi ya hewa inaorodheshwa na eneo lake na haijumuishwi kwenye jumla ya ujazo. Membrane ina eneo bila ujazo.

Bofya safu kuchagua vipengele vyake. **Download CSV** inahifadhi jedwali.

## Jinsi maeneo yanavyopimwa

Kila eneo ni namba tatu zinazojumlika: jumla ukiondoa makato ni halisi. Kanuni imeandikwa juu ya kila jedwali hizi, na ni kanuni moja: majedwali, wingi uliohifadhiwa kwenye faili la IFC na ukadiriaji uliotumwa kwa TakeoffCraft vyote vinaitumia.

- **Ukuta**: jumla ni uso mmoja wa ukuta, urefu wake kando ya mstari wa katikati mara urefu wake (uso halisi kwa ukuta wenye juu au chini yenye umbo). Kila mlango, dirisha na ufunguzi mwingine unakatwa, upana mara urefu, kila ufunguzi mara moja.
- **Sakafu au dari**: jumla ni eneo ndani ya mstari wake wa nje. Kila ufunguzi na kata ndani yake inakatwa mara moja.
- **Umaliziaji wa ukuta**: kila safu ya umaliziaji wa aina ya ukuta inafunika uso mmoja wa ukuta, ikipimwa kama ukuta, na fursa zile zile zikikatwa. Umaliziaji ni safu ya ukuta: unaorodheshwa chini ya Finishes na haujumlishwi kwenye eneo la ukuta, kwa hivyo ukuta wenye mlango hauhesabiwi mara mbili.

Hiyo ni **CadCraft default**: kila ufunguzi unakatwa, bila kujali ukubwa wake; urefu wa kuta ni kando ya mstari wa katikati; reveal hazipimwi. Ndiyo inayotumika kwenye kila mradi hadi uchague mbinu nyingine.

## Chagua mbinu ya kupima

Juu ya jedwali, **Measurement method** inaorodhesha mbinu zinazokuja na BimCraft, na **Load a method file** inachukua ya ofisi yako mwenyewe. Chaguo huhifadhiwa kwenye faili la IFC, kama hatua moja ya kutendua, na mambo matatu hufuata mara moja: majedwali, wingi halisi uliohifadhiwa kwenye faili, na ukadiriaji uliotumwa kwa TakeoffCraft. Kanuni iliyo juu ya kila jedwali kisha inaanza na mbinu, chanzo chake, tarehe chanzo kilichosomwa, na maneno **Unchecked by a quantity surveyor**.

Mbinu ni faili dogo la ukweli, si msimbo wa programu. Kwa kila kiasi inasema:

- **kufungua kidogo zaidi kinachokatwa**: kwa mfano, ufunguzi wa 0.5 m² au chini unabaki kwenye eneo la ukuta;
- **jinsi makutano ya kuta yanavyopimwa**: kando ya mstari wa katikati; au ukuta unaoishia dhidi ya mwingine unapimwa hadi uso wa ukuta huo; au kila ncha ya ukuta inayokutana na ukuta mwingine inapimwa hadi uso wa karibu;
- **kama reveal zinapimwa** kwa umaliziaji (kurudi kwa umaliziaji ndani ya fursa), kama eneo au, zikiwa duni, kama urefu. Kina cha reveal kinachukuliwa kuwa nusu ya unene wa ukuta;
- **inasema nini kuhusu uashi**: jinsi unavyopimwa, na posho yoyote ya taka au chokaa inayotaja.

Mbinu zinazokuja na BimCraft:

| Mbinu | Kuta: ufunguzi mdogo zaidi unaokatwa | Umaliziaji wa kuta | Dari | Uashi |
|---|---|---|---|---|
| CadCraft default | kila ufunguzi | kila ufunguzi | kila kata | hakuna posho |
| RICS NRM 2 (Uingereza), toleo la 2 la 2021 | 0.5 m² au chini inabaki ndani | 1 m² au chini inabaki ndani | 1 m² au chini inabaki ndani | kwa eneo; hakuna asilimia iliyotajwa |
| AAQS Standard Method for Africa 2015 | 0.5 m² au chini inabaki ndani | 0.5 m² au chini inabaki ndani | 0.5 m² au chini inabaki ndani | kwa eneo; halisi iliyopimwa, taka 0% |
| IS 1200 (India), 1976, brickwork | 0.1 m² au chini inabaki ndani | chaguo-msingi (ona hapa chini) | chaguo-msingi | kwa ujazo |
| BIA Technical Note 10 (Marekani), 2009 | kila ufunguzi | chaguo-msingi | chaguo-msingi | taka 5% kwenye vitengo, 15% kwenye chokaa |

Soma mipaka hii kabla ya kutegemea mbinu:

- **Hakuna mtaalamu wa upimaji wa wingi aliyekagua yoyote kati ya hizi.** Kila moja ilitengenezwa kwa kusoma chanzo kilichotajwa na kurekodi namba zake pamoja na kifungu zinakotoka. Ukiwa mtaalamu wa upimaji wa wingi na unaweza kukagua mojawapo, watengenezaji wa programu wangependa kusikia kutoka kwako.
- Pale kanuni isipoweza kusomwa kutoka chanzo, mbinu inasema **not confirmed** kwa ajili yake na CadCraft default inatumika. Hakuna mbinu inayokuja na BimCraft yenye kanuni iliyothibitishwa kwa makutano ya kuta, reveal au sakafu, kwa hivyo hizo hupimwa kwa njia ya chaguo-msingi chini ya zote.
- IS 1200 hukata fursa kwenye plasta kwa bendi tatu. Faili la mbinu bado haliwezi kubeba bendi, kwa hivyo umaliziaji wa kuta hutumia chaguo-msingi chini ya mbinu hiyo, na kanuni inasema hivyo.
- South African Standard System of Measuring Building Work **haimo** kati ya hizi: maandishi yake hayakuweza kusomwa. Mbinu ya AAQS ya Afrika inasema ilijengwa juu ya toleo la 1991 la mfumo huo, lakini ni hati tofauti.
- BIA Technical Note 10 ni noti ya makadirio ya sekta, si mbinu ya kawaida ya kupima.
- Ufunguzi unaolingana kabisa na ukubwa mdogo zaidi unafuata maneno ya mbinu yenyewe ("not exceeding", "less than"). Ukubwa ndani ya sehemu 2 kati ya 10 000 yake unahesabiwa kuwa yenyewe kabisa.
- Chini ya mbinu, eneo halisi la upande wa ukuta na eneo halisi la sakafu au dari kwenye faili vinafuata mbinu, na seti ya wingi inataja mbinu hiyo. Maeneo jumla na ujazo kwenye faili yanabaki kama yalivyochorwa.

**Maelezo ya mbinu hii**, chini ya kichagua, yanasema kila chanzo kinachoacha wazi. **Open the source** inaenda kwenye hati.

### Mbinu ya ofisi yako mwenyewe

Faili la mbinu ni JSON katika muundo `cadcraft-measurement-method`. Kila thamani ndani yake inataja kifungu inakotoka; thamani isiyo na kifungu inakataliwa. Faili linakaguliwa unapolipakia, sehemu mbaya inatajwa kwa jina, na hakuna kinachotumika kutoka faili lisilopita ukaguzi. Ukishachaguliwa, faili linahifadhiwa ndani ya mradi, kwa hivyo mradi unafunguka vile vile kwenye kompyuta nyingine. Kitambulisho chake ni jina rahisi lako mwenyewe (huenda lisiwe kitambulisho cha mbinu inayokuja na programu).

## Matofali, vitalu na chokaa

**Wall types: takeoff data** inahesabu vitengo na chokaa cha kila aina ya ukuta ambayo kitengo chake kina urefu na urefu (ona [Mpe aina yako data ya ukadiriaji](topic:wall-assemblies#give-a-type-its-takeoff-data)). Hizi ni fomula, kama zinavyokokotolewa:

- **Vitengo kwa eneo la upande mmoja** = 1 / ((urefu wa kitengo + pamoja) × (urefu wa kitengo + pamoja)). Tofali la 215 × 65 mm lenye pamoja ya 10 mm: 1 / (225 × 75 mm) = 59.26 kwa m².
- **Upana wa vitengo kuvuka upande mmoja** = (unene wa upande + pamoja) / (upana wa kitengo + pamoja), kuzungushwa kuwa namba nzima, angalau 1. Upande wa 102.5 mm wa matofali ya 102.5 mm ni 1; ukuta wa 215 mm wa matofali yale yale ni 2.
- **Vitengo** = vitengo kwa eneo × upana wa vitengo kuvuka × eneo halisi la uso wa ukuta, vilivyojumlishwa kwa pande zote za uashi za aina hiyo.
- **Vitengo vya kuagiza** = vitengo × (1 + taka % / 100), vilivyozungushwa juu kuwa kitengo kizima. Taka ni ile iliyoingizwa kwenye aina; isipoingizwa, ni ya mbinu, ikiwa inataja moja; vinginevyo 0%.
- **Chokaa** = eneo halisi × unene wa upande, ukitoa ujazo wa vitengo (vitengo × urefu × urefu × upana), kisha ukiongeza asilimia ya ziada iliyoingizwa kwenye aina kwa ajili ya mashimo au matundu, kisha posho ya mbinu ikiwa inataja. Inahitaji upana wa kitengo.

Kinachodhaniwa: kila upande wa uashi wa aina hujengwa kwa kitengo kimoja cha aina hiyo; upande mnene zaidi ya upana mmoja wa kitengo unahesabiwa kama upana mwingi wa kitengo, kila mmoja kama upande uliowekwa urefu, kwa hivyo vitengo vilivyokatwa, vya kufunga na maumbo maalum havihesabiwi kando; pale safu isipokuwa na alama ya kujengwa kwa kitengo, safu za msingi huchukuliwa kama pande, na noti iliyo juu ya jedwali inasema hivyo. **Amount** ni kiwango kikizidishwa na kile kiwango kinachohusu, ambacho sasa pia kinaweza kuwa kitengo cha kuagiza, vitengo 1000 vya kuagiza au m³ ya chokaa.

Namba za kila kipengele ni lebo yake ya IFC: ibadilishe kwenye **Properties** (Tag) na jedwali linafuata. Kwa kila modeli ya IFC, iliyochorwa au la, [Jumlisha wingi, orodhesha vipengele na upange nafasi](topic:quantity-totals) inajumlisha sifa yoyote.

## Vipimo

Mpango unaonyesha urefu wa kila ukuta uliochorwa kando ya uso wake wa nje (ukuta wa ndani: kando ya uso mmoja), na kwa ukuta wenye milango au madirisha, mnyororo kutoka pembe hadi kila ufunguzi. {{ui:Dimensions}} kwenye upau wa modeli inavificha na kuvionyesha tena.

## Hifadhi mpango kama PDF

1. Onyesha ngazi unayotaka na weka vitengo kwenye paneli ya **Levels**.
2. Bofya {{ui:Print}} kwenye upau wa modeli.
3. BimCraft inahifadhi "<faili> — <ngazi>.pdf": mpango kwa nyeusi na nyeupe kwa kipimo kikubwa zaidi cha kawaida kinachotoshea ukurasa (1/4" = 1'-0", 1/8" = 1'-0" … kwenye Letter kwa futi na inchi; 1:50, 1:100 … kwenye A4 kwa milimita), kuta zikijazwa, milango, madirisha, majina ya vyumba na maeneo yao, vipimo, na ukanda wa kichwa wenye ngazi, faili, urefu wa kata, tarehe na kipimo.

PDF inachorwa kama mistari na maandishi, kwa hivyo inabaki wazi kwa ukuzaji wowote na maandishi yake yanaweza kutafutwa.

## Vizuri kujua

- Majedwali yanaorodhesha kile zana za kuchora zilichotengeneza. Milango na madirisha kutoka programu nyingine yanaonekana kwenye Quantity totals badala yake.
- Kukadiria kazi, kabidhi wingi kwa TakeoffCraft: ona [Wingi kwa TakeoffCraft](topic:takeoff). Upakuaji wa CSV unabaki kwa lahajedwali.
