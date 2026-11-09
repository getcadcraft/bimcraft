---
title: Kipya katika 0.8 na 0.8.1
summary: BimCraft inaongeza watu wanaotembea ndani ya jengo, akustika ya chumba unayoweza kusikia, uigaji wa mafuriko, upepo na tetemeko la ardhi, mtazamo wa mzunguko wa maisha wa miaka hamsini, ukaguzi dhidi ya IDS, lebo na ratiba, Hamisha, Panga na Sambaza, picha chini ya mpango, kuta kutoka skani, michoro ya paneli, nishati ya jua, mifumo ya kugawanyika na VRF, ukubwa wa bomba na kebo, ukaguzi wa zege na tetemeko, makadirio yoyote ya ramani, chaguo la injini ya kutoa picha, na kutendua kwa Studio; 0.8.1 inarekebisha zana zilizofifia za mpangilio wa Ribbon.
keywords: kipya, nini kipya, maelezo ya toleo, orodha ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, uhamishaji, watu, foleni, akustika, muda wa mwangwi, mwitikio wa msukumo, mafuriko, upepo, tetemeko, hatari, mzunguko wa maisha, maisha ya huduma, ids, lebo, ratiba, hamisha, panga, sambaza, picha, mandharinyuma, skani hadi kuta, tovuti kutoka civilcraft, michoro ya paneli, fremu, nishati ya jua, pv, mgawanyiko, vrf, koili ya feni, ukubwa wa bomba, trei ya kebo, mwangaza, zege, tetemeko, linganisha skani, epsg, makadirio, hati, kiolezo, kaboni, gharama, energyplus, injini ya kutoa picha, fungua katika, usd, glb, unreal, kutendua, nyongeza, pcf, alama, mimea, fuatilia, kalamu, ribbon, kivinjari cha mradi, mpangilio
from: 87b03056
---

Haya ndiyo yaliyobadilika katika BimCraft 0.8 (2026-11-01) na 0.8.1 (2026-11-02), ikilinganishwa na 0.7. BimCraft sasa inaweza kujibu maswali kuhusu jengo na kulijaribu, kwa watu, sauti, maji, upepo na matetemeko, na kulichora kwa zana zaidi; 0.8.1 ni toleo la marekebisho.

## Mpya

### Jaribu jengo

- **Watu ndani ya jengo.** Sehemu ya {{ui:Watu kwenye jengo}} ya paneli ya kushoto inawapitisha watu katika uhamishaji au siku ya kawaida ya kuwasili kupitia vyumba, milango na ngazi zako. Unaona foleni mahali jengo linapopungua, njia ndefu zaidi ya kutoka kila chumba na muda ambao mtu wa mwisho anachukua. Tiki {{ui:Imefungwa}} kwenye mlango ili kuona kinachobadilika, na tiki {{ui:Onyesha watu kwenye mwonekano wa 3D}} ili kuwatazama wanaotembea. Matokeo huenda kwenye Matatizo. Ni modeli mbaya ya umati kwa maamuzi ya usanifu, si cheti cha usalama wa moto. Tazama [Pitisha watu kwenye jengo](topic:people-in-the-building).
- **Akustika ya chumba, na usikie.** Sehemu ya {{ui:Akustika ya chumba}} inatoa muda wa mwangwi wa kila chumba kwa bendi ya oktava (Sabine na Eyring) kutoka ukubwa wake na faini unazochagua, na kwa lengo lako mwenyewe inaeleza ni kiasi gani cha kufyonza kingekidhi. {{ui:Cheza ndani ya chumba hiki}} inacheza sauti, kupiga makofi, noti zilizokatwa au faili yako ya sauti kupitia mwitikio wa msukumo uliokokotolewa kwa chumba. Thamani za kufyonza ni thamani za kawaida zilizochapishwa za kubadilisha. Tazama [Akustika ya chumba](topic:room-acoustics).
- **Mafuriko, upepo na tetemeko kwa uigaji.** {{ui:Uigaji wa hatari}} unacheza maji yanayopanda kupitia vyumba, shinikizo la upepo kwenye kila ghorofa na tetemeko linalotikisa ghorofa, kwenye mpango au mwinuko wenye kitelezi cha muda. Modeli rahisi zenye dhana zake kwenye paneli; si ukaguzi wa kanuni. Tazama [Cheza mafuriko, upepo au tetemeko](topic:hazard-playback).
- **Kinachochakaa katika miaka hamsini.** {{ui:Mtazamo wa mzunguko wa maisha}} inaorodhesha madirisha, milango, faini na paa, kila moja na maisha yake ya huduma, miaka ya kubadilishwa na, unapoandika gharama kwa kipimo, gharama kwa mwaka na thamani yake ya sasa. {{ui:Hifadhi ratiba (CSV)}} inaiandika nje. Maisha ya huduma ni takwimu za mpango. Tazama [Ona kinachochakaa katika miaka hamsini](topic:life-cycle-view).
- **Ukaguzi wa zege na tetemeko.** Vizuizi vya {{ui:Vipengele vya zege}} na {{ui:Mizigo ya tetemeko}} vya kichupo cha {{ui:Uchanganuzi}} vinakagua mihimili na nguzo za zege kwa ACI 318-19 na kutengeneza nguvu sawa za mlalo kwa ASCE 7-22 kwenye sakafu ngumu, pamoja na mteremko wa ghorofa. Kwa mhandisi kukagua. Tazama [Kagua vipengele vya zege na tengeneza mizigo ya tetemeko](topic:concrete-and-seismic).

### Kagua na ripoti

- **Kagua dhidi ya IDS.** Pakia faili ya `.ids` uliyopewa na mteja na uone kila kipengele kisichokidhi katika Matatizo, kabla ya kuwasilisha IFC. Fungua {{ui:Kagua dhidi ya IDS}} chini ya {{ui:Ukaguzi wa modeli}}. Tazama [Kagua modeli dhidi ya IDS ya mteja](topic:check-against-ids).
- **Lebo na ratiba.** Fafanua lebo zako mwenyewe, uziweke kwenye vipengele vingi kwa wakati mmoja na uunde ratiba ambazo safu, vichujio na vikundi vyake vinazisoma; lebo zinahifadhiwa kwenye IFC. Tazama [Lebo na ratiba](topic:tags-and-schedules).
- **Hati kutoka modeli.** {{ui:Hati kutoka modeli}} inajaza kiolezo cha vipimo kutoka IFC iliyofunguliwa na kuihifadhi kama PDF, hati ya Word au Markdown. Tazama [Hati kutoka modeli](topic:documents-from-the-model).
- **Linganisha skani na modeli.** Skani ikiwa wazi, {{ui:Linganisha}} inahukumu kila kipengele kama kilichojengwa, kilichojengwa kwa sehemu, kinachokosekana au kisichofikiwa, na inaonyesha asilimia iliyojengwa. Tazama [Linganisha skani na modeli](topic:compare-scan-with-model).
- **Kaboni na gharama.** Kidirisha cha Kaboni kinajumlisha kaboni iliyojengewa ndani kutoka jedwali la vipengele unaloweza kuhariri, na kidirisha cha Gharama kinasambaza bei kwenye ratiba ya 4D. Vipengele vinavyokuja na BimCraft ni vya jumla na vimewekwa alama kuwa havijakaguliwa. Tazama [Kaboni iliyojengewa ndani na gharama](topic:embodied-carbon-and-5d-cost).
- **Makadirio yoyote ya ramani.** {{ui:Pima}} › {{ui:Mfumo wa kuratibu…}} inachukua nambari ya EPSG, eneo la UTM, jina au ufafanuzi wako mwenyewe wa makadirio. Tazama [Weka georeference kwa makadirio yoyote](topic:georeference-any-projection).

### Chora na uhariri

- **Hamisha, Panga na Sambaza.** Chini ya {{ui:Muundo}}; {{key:Shift+M}} inaanza Hamisha ({{key:M}} ya kawaida bado ni Pima). Hamisha hunakili unaposogea kwa {{key:C}}, kila hatua ni kutendua moja, na inasafiri kwenye kikao cha Live TeamWork. Tazama [Hamisha, nakili, panga na sambaza](topic:move-align-distribute).
- **Picha chini ya mpango.** {{ui:Muundo}} › {{ui:Picha}} inaweka PNG, JPEG au WebP chini ya mpango wa kiwango au kwenye ndege wima. Weka kipimo kwa nukta mbili, kisha sogeza, geuza, fifiza na funga. Eneo lililonakiliwa katika MarkupCraft hubandikwa kwa kipimo cha karatasi yake. Tazama [Weka picha chini ya mpango](topic:pictures-as-backgrounds).
- **Kuta kutoka skani.** Skani ikiwa wazi, kuta, milango na vyumba vinakuja kama mapendekezo unayoweka au kukataa moja moja, katika hatua moja ya kutendua. Kuta zenye pande mbili zilizo perpendicular pekee ndizo zinazopatikana. Tazama [Geuza skani kuwa kuta](topic:scan-to-walls).
- **Fuatilia, kalamu na ngazi ya mchoro.** {{ui:Fuatilia}} inaonyesha kiwango kingine kwa mistari-mistari chini ya mpango, {{ui:Kalamu}} inapa kuta, milango na madirisha unene wake wa mstari katika mwonekano mmoja, na {{ui:Chora ngazi}} inageuza mstari wa kutembea kuwa ngazi. Mesh ya Wavefront OBJ inafunguka. Tazama [Fuatilia kiwango, kalamu na ngazi kutoka mchoro](topic:trace-pens-stairs-obj).
- **Majengo kuzunguka anwani.** Majengo na kiwanja ambavyo Anwani kwa tovuti ya CivilCraft ilipata vinafika kama mapendekezo; unatiki yale ya kuongeza. Tazama [Anza kutoka tovuti ya CivilCraft](topic:site-from-civilcraft).
- **Michoro ya paneli.** {{ui:Muundo}} › {{ui:Michoro ya paneli}} inaweka fremu kwenye kuta, sakafu na paa kwa mbao au chuma chepesi, na inahifadhi orodha ya kukata kama CSV na michoro ya warsha kama PDF. Ni thamani za kuanzia, si muundo wa kimuundo. Tazama [Michoro ya paneli](topic:panel-drawings).
- **Paleti ya alama na mimea.** {{ui:Muundo}} › {{ui:Paleti ya alama}} inatafuta alama za umeme na mabomba kwa jina; chanzo cha {{ui:Mimea}} cha {{ui:Maktaba}} kinaorodhesha mimea takriban 400 yenye alama za mpango. Tazama [Paleti ya alama](topic:symbol-palette) na [Weka mmea](topic:plant-list).

### Mabomba, mifereji na nishati

- **Mgawanyiko, VRF na koili za feni.** Vitengo vya ndani na nje pamoja na miunganisho yao, na seti za mistari zenye ukubwa kutoka jedwali la thamani za mfano za kawaida unazoweza kubadilisha. Tazama [Mgawanyiko, VRF na koili za feni](topic:split-vrf-fan-coils).
- **Hesabu.** Kidirisha cha Hesabu kinakagua ukubwa wa bomba la usambazaji na mifereji kwa upotevu wa shinikizo, kinapitisha kebo kupitia trei na mirija na kuonyesha ujazo wake, na kinakokotoa mwangaza kutoka faili za IES au EULUMDAT. Chaguo-msingi zimewekewa lebo; andika thamani za kanuni yako. Tazama [Hesabu za bomba, mfereji, kebo na mwanga](topic:mep-calculations).
- **Faili za PCF.** **Hamisha PCF** ya zana ya Bomba inaandika njia kwa programu za mkazo wa bomba na isometric, na faili ya PCF iliyosomwa tena inachora bomba lake. Tazama [Faili za vipengele vya bomba](topic:piping-pcf).
- **Nishati ya jua PV.** Weka safu kwenye paa au ardhini, zivulie kivuli kutoka modeli, kadiria nishati ya kila mwaka, kagua nyuzi na utengeneze data ya mchoro wa mstari mmoja. Moduli ya mwanzo na hasara ni za jumla. Tazama [Nishati ya jua PV](topic:solar-pv).
- **Faili ya EnergyPlus.** Kidirisha cha Kagua kwa EnergyPlus kinaandika modeli kama IDF ya kuendesha kwenye EnergyPlus yako mwenyewe. Kuiendesha kwenye kivinjari kunahitaji muundo unaoweka mwenyewe na kuandika anwani yake; BimCraft haiibebi. Tazama [Kagua kupasha joto na kupoza kwa EnergyPlus](topic:check-with-energyplus).

### Picha na faili

- **Chagua injini ya kutoa picha.** {{ui:Tengeneza picha}} ina chaguo la {{ui:Injini}}. Injini zetu mbili zilizojengwa (Haraka na Kifuatiliaji cha njia) zinabaki chaguo-msingi. **Fungua katika** inahifadhi tukio kama faili ya USD au glTF, na folda ya mradi wa Unreal kama .zip; katika CadCraft Studio nyongeza inaweza kuongeza injini. Programu-jalizi ya Unreal inayofungua mradi haijatolewa. Tazama [Chagua programu inayochora picha](topic:render-engines).
- **Kutendua Studio.** Ndani ya CadCraft Studio, BimCraft humwambia Studio kila hatua iliyokamilika ili Studio iweze kutendua hatua yako ya mwisho katika dirisha lolote ulilotumia mwisho. Tazama [Kutendua kwenye programu](topic:undo-across-apps).
- **Nyongeza kwenye faili yako.** IFC inarekodi nyongeza zilizoandika ndani yake, na inatoa zile huna unapoifungua. Tazama [Nyongeza kwenye faili yako](topic:add-ons-in-your-file).

### Katika kila programu

- **Unganisha AI yako.** Msaidizi wako mwenyewe anaweza kuendesha BimCraft kupitia muunganisho wa Studio na kujibu maswali kuhusu modeli, kama vyumba vipi viko chini ya eneo fulani. Studio haina AI yake yenyewe. Tazama [Acha msaidizi wa AI afanye kazi na modeli yako](topic:assistants).
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Safu za upau wa zana}} inatoa Wrap, safu 2 au safu 1; Wrap inabaki chaguo-msingi.
- **Vifaa vya kuingiza.** Mipangilio ya trackpad, kalamu, kipanya cha 3D, kidhibiti na MIDI inashirikiwa na programu zote.
- **Matatizo na Live.** Kidirisha cha maonyo na vikao vya Live vinafanya kazi kama hapo awali, huku ukaguzi mpya hapo juu ukilisha Matatizo.
- **Lugha.** Lugha 54, kumi kati yake ni mpya. Zisizo Kiingereza ni rasimu za mashine ambazo mzungumzaji wa asili bado hajazisoma; mada nyingi za usaidizi ziko kwa Kiingereza.

## Imerekebishwa katika 0.8.1

- **Mpangilio wa Ribbon + Kivinjari cha mradi.** Ingiza › Leta CAD, Ingiza › Picha na Simamia › Vipimo vya Mradi vilisema "Bado haijajengwa katika BimCraft". Picha sasa inafungua zana ya {{ui:Picha}}, Leta CAD inafungua {{ui:Muundo}} › {{ui:Kutoka mchoro…}} (DWG, DXF, PDF au skani), na Vipimo vya Mradi vinafungua {{ui:Mipangilio}} › {{ui:Kimataifa}} › {{ui:Vipimo}}. Hamisha na Panga zinaendesha zana za Hamisha na Panga, Kiwango kinafungua {{ui:Ongeza viwango…}}, Awamu zinafungua sehemu ya Awamu za ukarabati na Nyenzo zinafungua maktaba ya nyenzo.
- **Sehemu ya DWG classes.** Ilisomwa kama aina isiyo sahihi; imerekebishwa katika BimCraft na programu nyingine zinazosoma DWG.
- **Lugha wakati wa kukimbia.** Studio na matoleo yaliyofungashwa sasa yanaweza kubadilisha lugha bila kuanzisha upya. Hili bado halijajaribiwa kwenye kila jukwaa; tuambie lugha isipobadilika.
- **Hati ya Archicad.** `archicad_bundle.py`, upakuaji tofauti, sasa inatafuta njia ya Archicad, inaangalia folda kwa hadi sekunde 20 na kujaribu tena kando ya kifurushi.

## Bado haijawepo katika toleo hili

- **Zana za usalama na muundo.** Watu ndani ya jengo hawana kikomo cha umbali wa kutoka kilichotolewa na kanuni ya jengo (wewe unaandika kikomo), na hakijakaguliwa kwa mkono kwenye mpango halisi. Takwimu za akustika, mzunguko wa maisha na hatari ni thamani za mpango, si ukaguzi wa kanuni.
- **Hali za hewa za baadaye na EnergyPlus.** Hakuna hali za hewa za baadaye zilizojengwa: unaweza kupakia faili ya senario kwa uendeshaji wa mafuriko. Uendeshaji wa EnergyPlus kwenye kivinjari si sehemu ya toleo hili.
- **Mpangilio wa Ribbon.** Ukadiriaji wa kiasi wa nyenzo unabaki "Haijajengwa" kwa sababu BimCraft haina orodha ya kiasi cha nyenzo, na zana nyingine 54 za ribbon zilizofifia hazina zana ya BimCraft nyuma yake bado.
- **Usajili na majukwaa.** Visakinishi vya Windows na .dmg ya macOS havijasainiwa, kwa hiyo SmartScreen inaonyesha {{ui:Maelezo zaidi}}, kisha {{ui:Endesha hata hivyo}}, na macOS inahitaji kubofya kulia kisha {{ui:Wazi}}. Muundo wa iPad na iPhone haukujengwa upya kwa 0.8.1.
- **Majaribio ya kurasa halisi.** Baadhi ya majaribio ya zamani ya kivinjari cha BimCraft bado yanashindwa kwenye ukurasa wetu wa majaribio, kama yalivyofanya kabla ya 0.8.1.

Kila kitu kingine kiko katika [Kisichojengwa bado](topic:not-built-yet). Mabadiliko ya awali yako katika [Kipya katika 0.7](topic:whats-new-0-7).
