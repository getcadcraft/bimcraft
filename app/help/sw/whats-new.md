---
title: Mapya katika 0.9
summary: Maumbo ya ukuta, kugawanya, kukabiliana, kunyoosha na kufunga kwenye gridi, viwango chini ya ardhi, vipimo vya gridi na Pima kwenye mpango, nakala za mionekano zenye mitindo ya kazi na jedwali za kalamu, Ripoti kama, usafirishaji wa Collada na Google Earth, Scan to BIM, uchanganuzi wa upepo na tetemeko, programu-jalizi za uchapishaji wa resini.
keywords: nini kipya, 0.9, maelezo ya toleo, maumbo ya ukuta, mstatili, poligoni, tao, chagua mistari, fuatilia muhtasari, kukabiliana, unganisha, nyoosha kwa kisanduku, panga na funga, gawanya ukuta, pengo, unganisha tena, funga kwenye gridi, kukua kutoka, pima kutoka, ongeza kiwango chini, ghorofa ya chini, amri ya viwango, vipimo vya gridi, pima kwenye mpango, mtindo wa kazi, nakala ya mwonekano, nakala huru, mwonekano uliounganishwa, jedwali la kalamu, chapisha kama inavyoonekana, ripoti kama, andika kipimo, leta svg, weka kwenye mpango, weka kwenye modeli, collada, dae, kmz, google earth, scan to bim, mzigo wa upepo, tetemeko, kipengele kikomo, paneli ya hati, uchapishaji wa resini, nini kipya, what's new, maelezo ya toleo, kumbukumbu ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, uhamishaji, watu, foleni, akustika, mwangwi, jibu la msukumo, mafuriko, upepo, tetemeko la ardhi, hatari, mzunguko wa maisha, muda wa huduma, ids, lebo, ratiba, hamisha, panga, sambaza, picha, mandharinyuma, scan to walls, site from civilcraft, michoro ya paneli, fremu, jua, pv, vrf, fan coil, ukubwa wa bomba, trei ya kebo, mwangaza, zege, linganisha scan, epsg, makadirio, hati, kiolezo, kaboni, gharama, energyplus, injini ya utoaji picha, fungua katika, usd, glb, unreal, tendua, programu-jalizi, pcf, alama, mimea, fuatilia, kalamu, utepe, kivinjari cha mradi, mpangilio
from: 5624fe88
---

Hiki ndicho kilichobadilika katika BimCraft 0.9, ikilinganishwa na 0.8.1. Mada mbili kuu ni zana halisi ya ukuta na mionekano inayofanya kazi kwa namna ambayo watu wanaotoka kwenye programu kubwa za BIM wanatarajia. Pembeni yake kuna usafirishaji wa Collada, visaidizi vinavyoweza kuweka vifaa vya umeme, Scan to BIM, na kazi za upepo, tetemeko na kipengele kikomo kwenye kichupo cha {{ui:Analysis}}.

## Mpya

### Kuta

- **Chora maumbo kamili.** Katika {{ui:Draw}}, fungua {{ui:Shapes}} (au chagua umbo kwenye orodha ya Shape katika safu ya Wall) kwa mstatili, mstatili uliozungushwa, poligoni yenye pande 3 hadi 64, tao kwa katikati, tao la tangenti, kuta kwenye mistari iliyochaguliwa, au kuta kuzunguka eneo lililofungwa unalobofya ndani yake. Mstatili ni kuta nne zenye pembe nne zilizounganishwa na hatua moja ya kutendua. Angalia [Maumbo ya ukuta, kugawanya, kukabiliana, kunyoosha na kufunga](topic:wall-tools).
- **Weka kabla ya kuchora, badilisha baadaye.** Safu ya Wall ina {{ui:Offset}} na {{ui:Join}} (ondoa tiki ili kuchora kuta zinazojitegemea). Baadaye tumia {{ui:Offset}}, {{ui:Box stretch}} na {{ui:Align and lock}} kwenye kuta zilizochorwa. Ukuta uliohamishwa au kunyoshwa unabaki na milango, madirisha na vipimo vyake. Kila mapishi ni hatua moja ya kutendua.
- **Kata kuta.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} na {{ui:Rejoin}} hukata ukuta kwa kubofya au mahali ukuta mwingine unapoupita. Kukata kupitia mlango hakukubaliwi. Angalia [Maumbo ya ukuta, kugawanya, kukabiliana, kunyoosha na kufunga](topic:wall-tools).
- **Funga kuta kwenye mistari ya gridi.** Chagua ukuta kando ya mstari wa gridi na weka tiki kwenye {{ui:Lock to grid}} katika {{ui:Properties}}. Ukiwa zana ya Grid imewashwa, andika umbali kwenye {{ui:Move by}} kwa mstari uliochaguliwa, na kuta zilizofungwa zitafuata kwa hatua moja ya kutendua.
- **Umbo la ukuta mmoja.** Katika {{ui:Properties}} ya ukuta mmoja unaweza kuunganisha juu au msingi wake kwenye paa, sakafu au dari, kuhariri mtaro wa mwinuko wake, kuegemeza, au kukata tundu la ukuta bila mlango wala dirisha. Angalia [Umbo la ukuta](topic:wall-shape).
- **Urefu unaonyesha ncha inayobaki.** {{ui:Grow from}} huamua kama mwanzo, mwisho au katikati unabaki mahali unapobadilisha urefu.
- **Urefu na kipimo cha mpango vinalingana.** {{ui:Measure from}} (mstari wa katikati, uso wa ndani au uso wa nje) huendesha sehemu ya Urefu na vipimo vya kuta vya mpango. Huanza kwenye mstari wa katikati, kwa hiyo vipimo vya kuta kwenye mpango sasa vinasoma mstari wa katikati mahali vilipokuwa vikisoma uso wa nje hapo awali. Ibadilishe kwenye safu ya Wall, katika {{ui:Properties}} au katika {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}}.

### Viwango, gridi na kupima

- **Ongeza kiwango chini.** {{ui:Add a level below}} katika paneli ya {{ui:Levels}} huongeza kiwango chini ya cha chini kabisa, chenye urefu sawa nacho, kwenye mwinuko hasi (Level -1, Level -2). Hakuna kingine kinachohamia. {{ui:Add levels…}} sasa inakubali urefu hasi. Kuandika LEVEL, LEVELS, STOREY au STOREYS kwenye mstari wa amri hufungua {{ui:Add levels…}}, na kuna kitufe cha {{ui:Levels}} kwenye menyu na vichupo vya utepe. Angalia [Maeneo, majengo na viwango](topic:site-building-and-levels).
- **Vipimo vya gridi kwenye mpango.** Ukiwa zana ya {{ui:Grid}} imewashwa, weka tiki kwenye {{ui:Dimensions}} ili kuchora nafasi kati ya mistari jirani na ukubwa wa jumla nje ya duara kwenye mpango wa kila kiwango. Angalia [Kupima gridi](topic:grid-dimensions).
- **Pima kwenye mpango.** {{ui:Measure}} katika kundi la {{ui:Draw}} hutoa umbali pamoja na tofauti za X na Y kati ya mibofyo miwili. Hakuna kinachohifadhiwa kwenye modeli. Angalia [Pima kwenye mpango](topic:measure-on-the-plan).
- **Badilisha safu kadhaa za nguzo kwa mara moja.** Chagua nguzo pamoja na ukuta, na orodha itaonyesha kila aina yenye {{ui:Keep only these}}. Bofya moja huweka nguzo na kuonyesha sehemu zao zinazofanana.
- **Kitengo kimoja cha kuonyesha kila mahali.** Viwianishi, vipimo, sehemu, vipimo vya karatasi, mizigo na matokeo ya kichupo cha fremu, na maandishi ya {{ui:Problems}} hufuata kitengo unachochagua. Usafirishaji unabaki SI.

### Mionekano, karatasi na uchapishaji

- **Mtindo wa kazi.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} huchagua kati ya kila mwonekano kuwa na maelezo yake na jedwali zake za kalamu, au kushiriki hizo. Angalia [Mtindo wa kazi, mionekano iliyonakiliwa, kalamu kwenye karatasi, Ripoti kama na violezo](topic:working-style).
- **Nakili mwonekano.** Mipango, mipango ya dari, wito, mwinuko na sehemu zinaweza kunakiliwa kama {{ui:Own copy}} au {{ui:Linked}}; {{ui:Make own copy}} hufanya uliounganishwa kuwa huru. Angalia [Mtindo wa kazi, mionekano iliyonakiliwa, kalamu kwenye karatasi, Ripoti kama na violezo](topic:working-style).
- **Chapisha kama inavyoonekana, au kupitia jedwali la kalamu.** Mabadiliko ya kalamu yanahifadhiwa kwenye IFC pamoja na mwonekano, na karatasi na PDF huyachora kama skrini inavyofanya. Mada hiyo hiyo inaeleza jedwali za kalamu.
- **Ripoti kama.** {{ui:Report as}} katika {{ui:Properties}} huandika slab iliyochorwa kama barabara, ukuta kama paneli au paa kama rampu kwenye IFC kama darasa unalochagua, na kuihesabu hivyo kwenye ratiba, Quantities, Find, Color by na {{ui:Problems}}.
- **Hariri kwenye mwinuko na sehemu.** Chora na usogeze kuta, matundu, viwango, vipimo na maelezo moja kwa moja kwenye mwinuko au sehemu, ukiwa na ukubwa wako wa karatasi na vizuizi vya jina. Angalia [Hariri kwenye mwinuko na sehemu](topic:edit-in-elevations).
- **Karatasi.** Kila karatasi inaweza kuwa mlalo au wima. Kisanduku cha {{ui:Type a scale}} kipo kando ya orodha ya kipimo kwenye kila mwonekano uliowekwa (1:64, 2:1, 1/4" = 1'). Unaweza kuburuta mchoro uliowekwa au kuusogeza kidogo kwa vitufe vya mshale, na {{ui:Formats…}} › {{ui:Import SVG…}} hubadilisha muundo wako wa karatasi kuwa kizuizi cha jina chenye sehemu zinazoandikwa kwa kila karatasi.
- **Sifa za maktaba kwenye karatasi.** Seti ya michoro yenye vipengee vya Library hupata ratiba ya sifa za Library unayoweza kuweka kwenye karatasi yoyote. Angalia [Sifa za Library](topic:library-credits).

### Maktaba: kuweka

- **Kuweka hufuata mwonekano.** Katika mwonekano wa Plan, Library huonyesha {{ui:Place in plan}}; katika 3D huonyesha {{ui:Place in model}}; katika Split huonyesha kitufe chenye {{ui:Place in plan}} kama kitendo kikuu. Njia zote mbili huandika kipengele kile kile cha IFC. Unaweza pia kuburuta kadi ya Library hadi kwenye mpango au mwonekano wa 3D; kwa kalamu au kidole, bonyeza na ushikilie, kisha buruta. Angalia [Weka kutoka Library](topic:place-from-library).

### Faili na visaidizi

- **Collada na Google Earth.** {{ui:Collada}} kwenye upau wa zana (menyu ya Faili katika mitindo ya menyu) huandika .dae, au .kmz iliyowekwa mahali modeli ilipo kwenye ramani. Angalia [Hamisha modeli kama Collada au kwa Google Earth](topic:collada).
- **Visaidizi vinaweza kuweka vifaa vya umeme.** Kisaidizi chako kilichounganishwa kina zana mpya za kuongeza, kuorodhesha, kubadilisha na kufuta vifaa, na kuweka taa. Visaidizi vinabaki kuzimwa hadi uviwashe katika {{ui:Settings}}. Angalia [Acha kisaidizi cha AI kifanye kazi na modeli yako](topic:assistants).
- **Scan to BIM (programu-jalizi).** Imezimwa kwa chaguo-msingi na inahitaji programu-jalizi ya wingu la pointi. Inapendekeza sakafu, kuta, milango na madirisha kutoka kwenye skani pamoja na mkengeuko uliopimwa wa kila kimoja; kukubali ni hatua moja ya kutendua.

### Uchanganuzi

- **Data ya tovuti kwa upepo na tetemeko.** Katika kichupo cha {{ui:Analysis}}: mizigo ya upepo kwa ASCE 7-10 au 7-16 kwa jengo gumu lililofungwa, lenye nguvu kwenye kila sakafu kama kesi za mizigo, na data ya tovuti ya tetemeko yenye utafutaji wa USGS na wigo wa usanifu.
- **Ufuatiliaji wa kimuundo na kipengele kikomo.** Ukaguzi wa zege kwa ACI 318-19, nguvu sawa za upande kwa ASCE 7-22, mteremko wa ghorofa, slab na kuta kama bamba, na mchanganyiko wa mizigo kutoka ASCE 7 na EN 1990. Injini yetu wenyewe ya kipengele kikomo hushughulikia ganda, tetrahedra na uchanganuzi wa modal. Angalia [Kagua vipengele vya zege na fanya mizigo ya tetemeko](topic:concrete-and-seismic) na [Uchanganuzi wa fremu](topic:frame-analysis).

### Programu-jalizi nyingine na hati

- **Taa ya ndani (programu-jalizi).** Huweka vifaa vya taa na kuandika lux kama nambari kwenye mpango wa kila kiwango, pamoja na makadirio ya mwangaza wa kung'aa na ripoti inayoweza kuchapishwa.
- **Paneli ya hati.** {{ui:File}} › {{ui:Documents…}} ina kutoa na kurudisha kwa faili ya kufunga, herufi za marekebisho, hali za kutolewa na historia.
- **Maeneo na chuma.** Vifurushi vya michoro na kanuni za ujenzi vya Afrika Kusini katika programu-jalizi ya Regulations, na ukubwa 976 wa chuma wa Uingereza kwenye jedwali la sehemu la pamoja.
- **Programu-jalizi za bure za uchapishaji wa resini.** Slicer, msaada na raft, jaribio la mwangaza, na miundo ya faili ya GOO, SL1, Chitubox na Anycubic, zote zimezimwa kwa chaguo-msingi.

## Katika kila programu

- Kuelekeza kipanya kwenye kitufe au kidhibiti kunaonyesha kidokezo cha Bootstrap.
- Kidokezo cha kuanza kwenye eneo tupu la michoro kina kitufe cha kufunga; BimCraft inakumbuka kilifungwa.
- Safu ya vichupo vya paneli isiyotoshea sasa inasogea badala ya kukatwa.
- Hati ikiwa wazi, kichupo cha kivinjari kinasomeka "<document> - BimCraft | CadCraft".
- Katika {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} mipangilio ni orodha kunjuzi ya chaguo za mistari miwili.
- Orodha ya lugha katika {{ui:Settings}} inatoa lugha nyingi zaidi kuliko 0.8; lugha zisizo za Kiingereza ni rasimu za mashine.

## Imerekebishwa

- **Kusogeza kunafanya kazi kwenye ngazi,** na kwenye rampu, reli, ndege za paa, vifaa vinavyojitegemea, picha na njia.
- **Kuburuta ukuta hakupindishi tena chumba.** Mpini wa katikati unasogeza ukuta ukiwa mraba kwa yenyewe, na pembe zake zinateleza kando ya kuta zilizounganishwa. Shikilia {{key:Mod}} kwa usogezaji huru wa zamani; {{ui:Square up}} inarudisha digrii 90.
- **Mabadiliko ya unene au aina kwenye nodi iliyounganishwa** sasa yanahifadhi kona ikiwa imefungwa kwenye L, T, nodi ya kuta tatu na karibu na ukuta uliopinda.
- **Kusogeza au kunakili kikundi cha vyumba** kunahifadhi kuta zilizounganishwa nje ya kikundi zikiwa zimeunganishwa.
- **Redo inahifadhi utambulisho wa kipimo cha ukuta.**
- **Kuchagua ukuta na Draw ikiwa imezimwa** hakutupi tena hitilafu katika Properties.
- **Render hurudi kwa WebGL** GPU isipoweza kuanza, badala ya kusimama.
- **Ukaguzi wa EnergyPlus** unaweza kuwashwa tena.
- **Documents hufunguka kama kisanduku cha mazungumzo kilichowekwa katikati.** {{key:Esc}}, X au kubofya ukurasa uliofifia kunafunga.
- **Vitufe vya {{ui:Plan}}, {{ui:Split}} na {{ui:3D}} vinaonekana** mara tu modeli inapofunguliwa, si tu baada ya Draw kuwashwa mara moja.

## Mipaka halisi

- Hakuna kilichochapishwa kwenye vifaa halisi. Misaada ya resini ni mipya na haijathibitishwa.
- Matokeo ya upepo, tetemeko, zege na kipengele kikomo ni misaada ya kukagua kwa mhandisi, yaliyokaguliwa dhidi ya fomula zilizofungwa, si dhidi ya jengo halisi.
- Scan to BIM ilijaribiwa kwenye jengo bandia, si skani halisi, na inatambua vyumba vya mstatili pekee.
- Collada haijafunguliwa katika Blender wala Google Earth hapa.
- Makadirio ya mwangaza yamekaguliwa dhidi ya trace yetu wenyewe, si dhidi ya programu nyingine za taa.
- Nambari za Afrika Kusini hazijathibitishwa.
- Mitindo ya kujiunga kwa kuta (butt, mitre, square off) na kipaumbele cha tabaka havijajengwa; pembe zimekatwa kwa mitre.
- Lugha zisizo za Kiingereza ni rasimu za mashine.

Kila kitu kingine kiko katika [Havijajengwa bado](topic:not-built-yet). Mabadiliko ya awali yako kwenye maelezo ya 0.8 na 0.8.1 chini ya ukurasa huu.

## Awali: 0.8 na 0.8.1

Hiki ndicho kilichobadilika katika BimCraft 0.8 (2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. BimCraft sasa inaweza kujibu maswali kuhusu jengo na kulijaribu, kwa watu, sauti, maji, upepo na matetemeko, na kulichora kwa zana nyingi zaidi; 0.8.1 ni toleo la marekebisho.

### Mpya

**Jaribu jengo**

- **Watu kwenye jengo.** Sehemu ya {{ui:People in the building}} ya paneli ya kushoto inatembeza uhamishaji au siku ya kawaida ya kuwasili kupitia vyumba, milango na ngazi zako. Unaona foleni mahali jengo linapopungua, safari ndefu zaidi kwenda kutoka kila chumba, na muda ambao mtu wa mwisho anachukua. Weka tiki kwenye {{ui:Shut}} kwenye mlango kuona kinachobadilika, na weka tiki kwenye {{ui:Show the people in the 3D view}} kuwatazama watembeaji. Matokeo yanaenda kwenye {{ui:Problems}}. Ni modeli mbaya ya umati kwa maamuzi ya usanifu, si cheti cha usalama wa moto. Angalia [Tembeza watu kupitia jengo](topic:people-in-the-building).
- **Akustika ya chumba, na kusikia.** Sehemu ya {{ui:Room acoustics}} inatoa muda wa mwangwi wa kila chumba kwa bendi ya oktava (Sabine na Eyring) kutoka ukubwa wake na faini ulizochagua, na kwa lengo lako mwenyewe inasema ufyonzaji kiasi gani ungefikia. {{ui:Play it in this room}} inacheza sauti, kupiga makofi, noti zilizokatwa au faili yako ya sauti kupitia jibu la msukumo lililokokotolewa kwa chumba. Takwimu za ufyonzaji ni thamani zilizochapishwa za kawaida za kubadilishwa na zako. Angalia [Akustika ya chumba](topic:room-acoustics).
- **Uigaji wa mafuriko, upepo na tetemeko.** {{ui:Hazard playback}} inacheza maji yanayopanda kupitia vyumba, shinikizo la upepo kwenye kila ghorofa na tetemeko linalotikisa ghorofa, kwenye mpango au mwinuko wenye kitelezi cha muda. Modeli rahisi zenye dhana zake kwenye paneli; si ukaguzi wa kanuni. Angalia [Cheza mafuriko, upepo au tetemeko](topic:hazard-playback).
- **Kinachochakaa katika miaka hamsini.** {{ui:Life-cycle view}} inaorodhesha madirisha, milango, faini na paa, kila moja ikiwa na muda wa huduma, miaka ya kubadilishwa, na, ukiandika gharama kwa kila kipimo, gharama kwa mwaka na thamani yake ya sasa. {{ui:Save the schedule (CSV)}} inaiandika. Muda wa huduma ni takwimu za kupanga. Angalia [Ona kinachochakaa katika miaka hamsini](topic:life-cycle-view).
- **Ukaguzi wa zege na tetemeko.** Vizuizi vya {{ui:Concrete members}} na {{ui:Seismic loads}} vya kichupo cha {{ui:Analysis}} hukagua mihimili na nguzo za zege kwa ACI 318-19 na kutengeneza nguvu sawa za upande kwa ASCE 7-22 kwenye sakafu ngumu, pamoja na mteremko wa ghorofa. Kwa mhandisi kukagua. Angalia [Kagua vipengele vya zege na fanya mizigo ya tetemeko](topic:concrete-and-seismic).

**Kagua na ripoti**

- **Kagua dhidi ya IDS.** Pakia faili ya `.ids` uliyopewa na mteja na uone kila kipengele kisichokidhi katika Problems kabla ya kutoa IFC. Fungua {{ui:Check against an IDS}} chini ya {{ui:Model checks}}. Angalia [Kagua modeli dhidi ya IDS ya mteja](topic:check-against-ids).
- **Lebo na ratiba.** Fafanua lebo zako, ziweke kwenye vipengele vingi kwa mara moja na utengeneze ratiba ambazo safu, vichujio na vikundi vyake vinazisoma; lebo zinahifadhiwa kwenye IFC. Angalia [Lebo na ratiba](topic:tags-and-schedules).
- **Hati kutoka modeli.** {{ui:Documents from the model}} hujaza kiolezo cha vipimo kutoka IFC iliyofunguliwa na kuihifadhi kama PDF, hati ya Word au Markdown. Angalia [Hati kutoka modeli](topic:documents-from-the-model).
- **Linganisha skani na modeli.** Ukiwa na wingu la pointi wazi, {{ui:Compare}} hupima kila kipengele kama kilivyojengwa, kimejengwa kiasi, kimekosekana au hakijafikiwa, na kuonyesha asilimia iliyojengwa. Angalia [Linganisha skani na modeli](topic:compare-scan-with-model).
- **Kaboni na gharama.** Kidirisha cha Carbon kinajumlisha kaboni iliyomo kutoka jedwali la vipengele unaloweza kuhariri, na kidirisha cha Cost hugawanya bei kwenye ratiba ya 4D. Vipengele vinavyokuja na BimCraft ni vya jumla na vimewekwa alama kuwa havijakaguliwa. Angalia [Kaboni iliyomo na gharama](topic:embodied-carbon-and-5d-cost).
- **Makadirio yoyote ya ramani.** {{ui:Measure}} › {{ui:Coordinate system…}} inachukua nambari ya EPSG, eneo la UTM, jina au ufafanuzi wako wa makadirio. Angalia [Georeference kwa makadirio yoyote](topic:georeference-any-projection).

**Chora na hariri**

- **Hamisha, Panga na Sambaza.** Chini ya {{ui:Build}}; {{key:Shift+M}} inaanzisha Hamisha (kawaida {{key:M}} bado ni Pima). Hamisha hunakili unapoendelea kwa {{key:C}}, kila hatua ni hatua moja ya kutendua, na husafiri katika kikao cha Live TeamWork. Angalia [Hamisha, nakili, panga na sambaza](topic:move-align-distribute).
- **Picha chini ya mpango.** {{ui:Build}} › {{ui:Picture}} huweka PNG, JPEG au WebP chini ya mpango wa kiwango au kwenye ndege wima. Weka kipimo kwa nukta mbili, kisha sogeza, geuza, fifiza na funga. Eneo lililonakiliwa kwenye MarkupCraft hubandikwa kwa kipimo cha karatasi yake. Angalia [Weka picha chini ya mpango](topic:pictures-as-backgrounds).
- **Kuta kutoka skani.** Ukiwa na skani wazi, kuta, milango na vyumba huja kama mapendekezo unayoweka au kukataa moja moja, katika hatua moja ya kutendua. Kuta za pande mbili zinazonyooka kwa pembe ya kulia pekee ndizo zinazopatikana. Angalia [Geuza skani kuwa kuta](topic:scan-to-walls).
- **Trace, kalamu na ngazi kutoka mchoro.** {{ui:Trace}} inaonyesha kiwango kingine chenye mistari-mistari chini ya mpango, {{ui:Pens}} inapa kuta, milango na madirisha uzito wake wa mstari katika mwonekano mmoja, na {{ui:Sketch stair}} hubadilisha mstari wa kutembea kuwa ngazi. Wavu wa Wavefront OBJ unafunguka. Angalia [Fuatilia kiwango, kalamu na ngazi kutoka mchoro](topic:trace-pens-stairs-obj).
- **Majengo kuzunguka anwani.** Majengo na kiwanja ambavyo Address to site ya CivilCraft ilivipata vinafika kama mapendekezo; unaweka tiki zile unazotaka kuongeza. Angalia [Anza kutoka tovuti ya CivilCraft](topic:site-from-civilcraft).
- **Michoro ya paneli.** {{ui:Build}} › {{ui:Panel drawings}} huunda fremu za kuta, sakafu na paa kwa mbao au chuma chepesi na kuhifadhi orodha ya kukata kama CSV na michoro ya warsha kama PDF. Thamani za kuanzia, si muundo wa kimuundo. Angalia [Michoro ya paneli](topic:panel-drawings).
- **Paleti ya alama na mimea.** {{ui:Build}} › {{ui:Symbol palette}} hutafuta alama za umeme na mabomba kwa jina; chanzo cha {{ui:Plants}} cha {{ui:Library}} kinaorodhesha mimea takriban 400 yenye alama za mpango. Angalia [Paleti ya alama](topic:symbol-palette) na [Weka mmea](topic:plant-list).

**Mabomba, mifereji na nishati**

- **Split, VRF na fan coil.** Vitengo vya ndani na nje pamoja na miunganisho yake, na seti za mistari zenye ukubwa kutoka jedwali la thamani za mfano za kawaida unazoweza kubadilisha. Angalia [Split, VRF na fan coil](topic:split-vrf-fan-coils).
- **Hesabu.** Kidirisha cha Calculations kinakagua ukubwa wa bomba la usambazaji na mifereji kwa upotevu wa shinikizo, kupitisha kebo kwenye trei na mifereji na kuonyesha ujazo wake, na kukokotoa mwangaza kutoka faili za IES au EULUMDAT. Chaguo-msingi zina lebo; andika thamani za kanuni yako. Angalia [Hesabu za bomba, mfereji, kebo na mwanga](topic:mep-calculations).
- **Faili za PCF.** **Export PCF** ya zana ya Pipe huandika njia kwa programu za mkazo wa bomba na isometriki, na faili ya PCF inayosomwa tena huchora bomba lake. Angalia [Faili za vipengele vya mabomba](topic:piping-pcf).
- **Solar PV.** Weka safu kwenye paa au ardhini, zivulie kivuli kutoka modeli, kadiria nishati ya kila mwaka, kagua nyuzi na utengeneze data ya mchoro wa mstari mmoja. Moduli ya kuanzia na hasara ni za jumla. Angalia [Solar PV](topic:solar-pv).
- **Faili ya EnergyPlus.** Kidirisha cha Check with EnergyPlus huandika modeli kama IDF ili uiendeshe kwenye EnergyPlus yako. Kuiendesha kwenye kivinjari kunahitaji muundo unaoupangisha mwenyewe na kuandika anwani yake; BimCraft haibebi. Angalia [Kagua joto na baridi kwa EnergyPlus](topic:check-with-energyplus).

**Picha na faili**

- **Chagua injini ya utoaji picha.** {{ui:Render}} ina chaguo la {{ui:Engine}}. Injini zetu mbili zilizojengwa ndani (Fast na Path tracer) bado ndizo chaguo-msingi. **Open in** huhifadhi onyesho kama faili ya USD au glTF, na folda ya mradi wa Unreal kama .zip; katika CadCraft Studio programu-jalizi inaweza kuongeza injini. Programu-jalizi ya Unreal inayofungua mradi haijatolewa. Angalia [Chagua programu inayochora picha](topic:render-engines).
- **Kutendua kwa Studio.** Ndani ya CadCraft Studio, BimCraft inaiambia Studio kila hatua iliyokamilika ili Studio iweze kutendua hatua yako ya mwisho katika dirisha lolote ulilotumia mwisho. Angalia [Tendua kati ya programu](topic:undo-across-apps).
- **Programu-jalizi kwenye faili yako.** IFC inarekodi programu-jalizi zilizoandika ndani yake, na inatoa zile unazokosa unapoifungua. Angalia [Programu-jalizi kwenye faili yako](topic:add-ons-in-your-file).

**Katika kila programu**

- **Unganisha AI yako.** Kisaidizi chako mwenyewe kinaweza kuendesha BimCraft kupitia muunganisho wa Studio na kujibu maswali kuhusu modeli, kama ni vyumba vipi viko chini ya eneo fulani. Studio haina AI yake yenyewe. Angalia [Acha kisaidizi cha AI kifanye kazi na modeli yako](topic:assistants).
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inatoa Wrap, safu 2 au safu 1; Wrap inabaki chaguo-msingi.
- **Vifaa vya kuingiza.** Mipangilio ya trackpad, kalamu, kipanya cha 3D, kidhibiti na MIDI inashirikiwa na programu zote.
- **Problems na Live.** Paneli ya onyo na vikao vya Live vinafanya kazi kama awali, huku ukaguzi mpya ukilisha Problems.
- **Lugha.** Lugha 54, kumi kati yake mpya. Zisizo za Kiingereza ni rasimu za mashine ambazo mzungumzaji wa asili hajazisoma bado; mada za msaada ni za Kiingereza zaidi.

### Imerekebishwa katika 0.8.1

- **Mpangilio wa Ribbon + Project browser.** Insert › Import CAD, Insert › Image na Manage › Project Units zilisema "Not built in BimCraft yet". Image sasa inafungua zana ya Picture, Import CAD inafungua {{ui:Build}} › {{ui:From a drawing…}} (DWG, DXF, PDF au skani), na Project Units inafungua {{ui:Settings}} › {{ui:Global}} › {{ui:Units}}. Move na Align zinaendesha zana za Move na Align, Level inafungua {{ui:Add levels…}}, Phases inafungua sehemu ya Renovation phases, na Materials inafungua maktaba ya nyenzo.
- **Sehemu ya madarasa ya DWG.** Ilisomwa kama aina isiyo sahihi; imerekebishwa katika BimCraft na programu nyingine zinazosoma DWG.
- **Lugha wakati wa kuendesha.** Studio na matoleo yaliyofungashwa sasa yanaweza kubadilisha lugha bila kuanzisha upya. Hii bado haijajaribiwa kwenye kila jukwaa; tuambie kama lugha haibadiliki.
- **Hati ya Archicad bundle.** `archicad_bundle.py`, upakuaji tofauti, sasa inapata njia ya Archicad, inaangalia folda kwa hadi sekunde 20 na kujaribu tena pembeni ya bundle.

### Bado haipo katika toleo hili

- **Misaada ya usalama na usanifu.** People in the building haina kikomo cha umbali wa kusafiri kutoka kanuni ya ujenzi (unaandika kikomo) na haijakaguliwa kwa mkono kwenye mpango halisi. Takwimu za akustika, mzunguko wa maisha na hatari ni thamani za kupanga, si ukaguzi wa kanuni.
- **Mabadiliko ya hali ya hewa na EnergyPlus.** Hakuna mabadiliko ya hali ya hewa yaliyojengwa ndani: unaweza kupakia faili ya hali kwa uendeshaji wa mafuriko. Uendeshaji wa EnergyPlus kwenye kivinjari si sehemu ya toleo hili.
- **Mpangilio wa Ribbon.** Material Takeoff inabaki "Not built" kwa kuwa BimCraft haina orodha ya kiasi cha vifaa, na zana 54 nyingine za ribbon zilizofifia hazina zana ya BimCraft nyuma yake bado.
- **Sahihi na majukwaa.** Visakinishi vya Windows na .dmg ya macOS havijasainiwa, kwa hiyo SmartScreen inaonyesha {{ui:More info}}, kisha {{ui:Run anyway}}, na macOS inahitaji kubofya kulia kisha {{ui:Open}}. Toleo la iPad na iPhone halikujengwa upya kwa 0.8.1.
- **Majaribio ya kurasa halisi.** Baadhi ya majaribio ya zamani ya kivinjari cha BimCraft bado yanashindwa kwenye ukurasa wetu wa majaribio, kama ilivyokuwa kabla ya 0.8.1.

Kila kitu kingine kiko katika [Havijajengwa bado](topic:not-built-yet). Mabadiliko ya awali yako katika [Nini kipya katika 0.7](topic:whats-new-0-7).
