---
title: Chambua fremu ya muundo
summary: Nguvu, miitikio na mikengeuko ya mihimili, nguzo na mabano ya modeli chini ya kesi za mizigo na michanganyiko unayoweka, zikihifadhiwa kwenye IFC. Ni msaada wa uchanganuzi, si ukaguzi wa kanuni.
keywords: uchanganuzi, vipimo, futi na inchi, kitengo cha kuonyesha, uchanganuzi wa muundo, ukaguzi wa muundo, matumizi, iliyoviringishwa, iliyochomelewa, AISC 360, EN 1993-1-1, uchanganuzi wa fremu, modeli ya uchanganuzi, mbinu ya ugumu, mizigo, kesi ya mzigo, mchanganyiko, mzigo wa kudumu, mzigo hai, uzito binafsi, miitikio, wakati wa kupinda, kukata, nguvu ya axial, mkengeuko, umbo lililopinda, vishikilizi, imebanwa, imefungwa, kuachia, ripoti, pdf, csv, craftscript, frame3d, mihimili, nguzo, vipengele
from: b93b58c4
---

Kichupo cha {{ui:Analysis}} upande wa kulia kinatafuta nguvu kwenye mihimili, nguzo na mabano ya modeli iliyofunguliwa, miitikio kwenye miguu ya nguzo, na kiasi ambacho vipengele vinapinda, kwa mizigo unayoitoa.

:::warning
**Ni msaada wa uchanganuzi, si ukaguzi wa kanuni.** Uchanganuzi hautumii kanuni yoyote ya usanifu: hauzipimi vipengele wala kukagua uwezo wake, na hauchagui vipengele vya mizigo. Mhandisi anakagua modeli ya uchanganuzi, mizigo yake na vishikilizi vyake, na kuamua maana ya namba. Kizuizi cha {{ui:Design checks}} chini yake kinakagua sehemu za I za chuma zilizoviringishwa kwa AISC 360 au EN 1993-1-1; ni msaada hadi mhandisi aukague: tazama [Ukaguzi wa muundo](topic:frame-analysis#design-checks).
:::

## Iendeshe

1. Fungua modeli ya IFC na kichupo cha {{ui:Analysis}}.
2. Chagua mihimili, nguzo au mabano moja au zaidi kwenye mwonekano, chagua {{ui:Case}}, {{ui:Load}} na {{ui:Direction}}, andika thamani na ubonyeze {{ui:Add load}}: kN/m kwa mzigo unaoenea kando ya kipengele, kN kwa mzigo wa nukta.
3. Bonyeza {{ui:Run analysis}}.

Jedwali linaorodhesha nguvu kubwa zaidi ya axial ya kila kipengele, nguvu za kukata, wakati wa kupinda, mzunguko na mkengeuko; bofya jina la kipengele ili ukichague kwenye mwonekano. Chini ni miitikio. {{ui:On the model}} inachora umbo lililopinda, au kitendo kimoja kama mchoro kando ya kila kipengele. Matokeo yanapitwa na wakati modeli inapobadilika: iendeshe tena.

Kila mzigo na mpangilio ni mabadiliko moja kwenye orodha ya {{ui:Changes}}: {{ui:Undo}} inairudisha, na {{ui:Save as IFC}} inaiweka kwenye faili (seti ya sifa `CadCraft_Analysis` ya mradi), ili modeli ikifunguliwa hapa wakati ujao, mizigo yake bado ipo.

## Jinsi modeli ya uchanganuzi inavyotengenezwa

- Kila IfcBeam, IfcColumn na IfcMember ambayo umbo lake ni extrusion moja iliyonyooka inakuwa kipengele kwenye mstari wa katikati wa sehemu yake. Sifa zake za sehemu zinatokana na wasifu: maumbo ya I, U, L na T, mistatili na mabomba, duara na mabomba ya duara, au mstari wowote uliofungwa (basi konstanti ya torsion ni makisio, na inasemwa kwenye ripoti). Kitu kingine chochote kinaachwa na kuhesabiwa.
- Kwenye modeli, mihimili inaishia kwenye uso wa nguzo na kukaa chini ya sakafu. Kila ncha ya kipengele inasogezwa kando ya mstari wake hadi kwenye mhimili wa kipengele inachounganishwa nacho, pale mhimili huo unapokaribiana (ndani ya ukubwa wa takriban wa sehemu), na kipengele hicho kinagawanywa pale. Ripoti inasema ncha ngapi zimehamishwa.
- **Miguu ya nguzo** ambayo hakuna kinachoenda chini yake ni vishikilizi: vimefungwa (mwanzo) au vimebanwa (vimeshikiliwa mahali na dhidi ya kupindishwa, huru kuzunguka).
- **Ncha za mihimili** ni ngumu au zimebanwa kwa kanuni ya {{ui:Beam ends with no connection}}; **mabano** (IfcMember) yamebanwa pande zote mbili. Chagua kipengele kimoja ili kutoa ncha zake, au mguu wa nguzo, kanuni yake yenyewe.
- Nyenzo kwa jina: zege (E = 30 GPa), mbao (E = 11 GPa), vinginevyo chuma (E = 200 GPa).

Ikiwa fremu inaweza kusogea bila kupinda chochote (utaratibu), uendeshaji unasimama na kusema wapi na upande upi.

## Kesi, michanganyiko, ishara na ripoti

Uchanganuzi unaanza na **Kudumu** (uzito binafsi), **Hai** na **Kudumu + hai**; ongeza kesi na michanganyiko kwa vipengele ambavyo kanuni yako ya usanifu inahitaji. N > 0 ni mvutano; My > 0 huweka upande wa -z wa ndani wa kipengele kwenye mvutano (boriti inayoshuka chini ya mvuto ina My > 0). {{ui:Report (PDF)}} na {{ui:Report (CSV)}} zina dhana, sehemu, kesi, miitikio pamoja na jumla zake, nguvu za vipengele, mikengeuko na bahasha. {{ui:Export as CraftScript}} huandika fremu kwa nafasi ya kazi ya Script ya PartCraft, ambapo kazi ya maktaba `frame3d` inaitatua kwa msimbo unaosomeka.

Mbinu ni mbinu ya moja kwa moja ya ugumu, ya mstari na ya mpangilio wa kwanza isipokuwa uweke alama *Mpangilio wa pili (P-Delta)*, na imekaguliwa dhidi ya kesi za vitabu vya kiada.

**Mpangilio wa pili (P-Delta).** Weka alama *Mpangilio wa pili (P-Delta)* karibu na Run: kila mchanganyiko unatatuliwa tena kwa nguvu za axial za vipengele zinazofanya kazi kwenye fremu iliyopinda (kila kipengele kikikatwa vipande 4, ili kupinda kati ya ncha zake pia kuhesabiwe), hadi nguvu za axial zitulie. Mstari wa matokeo unatoa idadi ya mizunguko na kiasi ambacho sway imekua; wakati wa kupinda, mikengeuko, ukaguzi wa muundo na ripoti hutumia matokeo haya. Juu ya mzigo muhimu wa elastic wa fremu, uendeshaji unasimama na kusema hivyo. Ni ya elastic yenye mizunguko midogo, ya kupinda pekee, bila kupunguzwa kwa ugumu wala mizigo ya dhana (si mbinu ya moja kwa moja ya AISC peke yake); bamba, kuta na sakafu ngumu zinabaki za mpangilio wa kwanza.

**Shinikizo la sakafu kwenye bamba.** Kwa bamba za zege (uchanganuzi unasoma bamba kama sahani pale nyenzo yake ni zege), kizuizi cha Mizigo kina {{ui:Pressure on every slab}}: andika kN/m², chagua kesi hapo juu na ubonyeze {{ui:Add to slabs}}. Shinikizo linasambazwa kwa kila bamba iliyopatikana na uchanganuzi, kuelekea chini, na linaorodheshwa pamoja na kiungo cha Ondoa. Ni shinikizo moja kwa bamba zote, si moja kwa kila bamba, na si mzigo wa kanuni: andika thamani ambayo mhandisi wako anakupa.

**Masafa asilia (vipengele vya kimaumbo).** Kizuizi cha {{ui:Finite elements: natural frequencies}} chini ya matokeo kinapata moduli za chini za modeli hiyo hiyo kwa injini ya vipengele vya kimaumbo: mihimili yenye kuachia kwa ncha zake, bamba na kuta kama ganda bapa la nukta nne, sakafu ngumu, na vishikilizi. Chagua idadi ya moduli (3, 6, 10 au 20) na kipengele cha bamba (ganda la nukta nne kwa bamba nene au nyembamba, au la bamba nyembamba), kisha ubonyeze {{ui:Find the frequencies}}. Jedwali linatoa masafa ya kila moduli kwa Hz, kipindi chake kwa sekunde na wingi wa moduli unaofanya kazi kwenye X, Y na Z kama sehemu ya wingi unaoweza kusogea. {{ui:Show on the model}} inachora moduli yoyote kama umbo lililopinda linavyochorwa. Wingi ni uzito wa nyenzo mara ujazo: mizigo haiongezi wingi, na nyenzo isiyo na uzito haina wingi. Ripoti (PDF, CSV) inabeba jedwali. Ni ya elastic na ya mwendo mdogo tu, na hakuna mzigo wa tetemeko au upepo unaotengenezwa hapa kutoka kanuni. Si ukaguzi wa kanuni; mhandisi wako anakagua matokeo.

**Wigo wa mwitikio, historia ya muda na pushover.** Vizuizi vitatu zaidi vinakaa chini ya masafa, vikitumia modeli hiyo hiyo ya vipengele vya kimaumbo. Wingi kwao wote ni uzito wa nyenzo pamoja na mizigo ya chini ya kesi ulizochagua, kila moja likizidishwa na kipengele unachoandika (kwa mfano Kudumu kwa 1 na Hai kwa sehemu unayohesabu kama wingi).

{{ui:Response spectrum}} inasoma kila moduli kutoka wigo unaotoa (jedwali la kipindi na kuongeza kasi, au umbo la ASCE 7 kutoka SDS, SD1 na TL; kitufe cha {{ui:Use the Seismic block values}} hunakili thamani hizo kutoka kizuizi cha {{ui:Seismic}}), kisha inachanganya moduli kwa CQC, SRSS, kanuni ya asilimia kumi au jumla kamili, na kuunganisha mwelekeo wa X, Y na Z (100 % + 30 % au SRSS). Inatoa nguvu ya msingi ya kukata, kuhama kwa ghorofa, nguvu za ncha za vipengele, na jedwali la moduli linaloonya moduli zinapobeba chini ya 90 % ya wingi. Unaweza kupima matokeo kwa kipengele au hadi nguvu ya msingi ya kukata unayoandika; kizuizi hakikokotoi nguvu hiyo ya msingi chenyewe. Matokeo hayana ishara.

{{ui:Time history}} huendesha kuongeza kasi ya ardhi kwa superposition ya moduli (sahihi kwa mistari iliyonyooka ya rekodi kati ya nukta) au kwa ujumuishaji wa moja kwa moja (Newmark average acceleration na Rayleigh damping). Ingizo ni sine au pulse ya kubuni (daima limewekwa lebo kama synthetic), rekodi unayobandika, au faili ya maandishi unayofungua (wakati na kuongeza kasi, kipimo kimoja kwa mstari pamoja na hatua, au faili ya mtindo wa PEER yenye kichwa DT=; kwa g au m/s²). Inatoa mkengeuko wa paa na nguvu ya msingi ya kukata dhidi ya wakati, mkengeuko wa kila ngazi, na bahasha ya nguvu za ncha za vipengele. Modeli zenye rekodi ndefu sana huiweka kwa kikao hiki tu.

{{ui:Pushover}} husukuma paa kando kwa hatua ndogo (mfumo kama moduli ya kwanza, au sawa), na bawaba za plastiki kwenye ncha za vipengele vyenye umbo la I. Bawaba hutoa mavuno kwenye wakati wa plastiki, ambao hushuka nguvu ya axial inapoongezeka (unahesabiwa kutoka umbo lililochorwa, pembe za mviringo zikipuuzwa); ugumu ni wa hiari, P-delta ni ya hiari, na mchanganyiko wa mvuto unaweza kutumika kwanza. Inatoa curve ya uwezo (nguvu ya msingi ya kukata dhidi ya mkengeuko wa paa), bawaba ya kwanza, na hali na mzunguko wa plastiki wa kila bawaba. {{ui:Run the nonlinear time history}} huendesha bawaba zile zile chini ya rekodi ya kizuizi cha Historia ya muda kwenye modeli ndogo. Bawaba huundwa kwenye ncha za vipengele pekee (weka nukta mahali bawaba inapaswa kuundwa ndani ya nafasi kati ya nguzo); kipengele kilichoachiwa ncha zote mbili hakipati chochote; mavuno na kujikunja kwa mabano hazijaigwa; sakafu na kuta hubaki elastic; na hakuna vigezo vya kukubalika vinavyotolewa. Si ukaguzi wa kanuni; mhandisi wako anakagua matokeo. Mipangilio inahifadhiwa na modeli, na ripoti inabeba majedwali.

Bado hakijajengwa: kujikunja (buckling), marekebisho ya wingi unaokosekana kwa wigo wa mwitikio, kupima rekodi, vigezo vya kukubalika kwa bawaba, mizigo ya eneo isipokuwa shinikizo moja kwenye kila bamba, mikengeuko ya vipengele, mabano ya mvutano pekee, kuta na bamba kwenye fremu, na ukaguzi wa kanuni wa maumbo yaliyochomelewa na sehemu zisizo za I zilizoviringishwa. Tazama [Bado hakijajengwa](topic:not-built-yet).

## Vipimo

Urefu hufuata kipimo unachochagua kwenye upau wa zana ({{ui:Units}}), kama sehemu nyingine za BimCraft: nafasi za mzigo unazoandika na kuona ({{ui:From}}, {{ui:To}}, {{ui:At}}), nukta za mizigo ya nodi na miitikio, urefu wa sakafu kwenye {{ui:Seismic}}, na safu za mkengeuko na kuhama (feet na inches zinaonyesha urefu huu mdogo kama inches za desimali). Badilisha kipimo wakati wowote; kichupo kinachora upya. Nguvu zinabaki kN na kN·m, na ripoti (PDF, CSV) pamoja na faili ya CraftScript zinabaki milimita, na kitengo kimeandikwa. Ukubwa wa sehemu, kipenyo cha baa na vifuniko kwenye kizuizi cha {{ui:Concrete}} vinabaki milimita, kama vilivyotajwa kwa jina.

## Ukaguzi wa muundo

Kizuizi cha {{ui:Design checks}} (sawa na cha DetailCraft) kinachukua {{ui:Design code}}, ASCE 7 + AISC 360 au EN 1990 + EN 1993-1-1, na {{ui:Steel grade}}. Mpe kila kesi ya mzigo aina yake (kudumu, hai, upepo …), na {{ui:Make combinations}} huandika michanganyiko ya mizigo ya kanuni kutoka kesi zako; uchanganuzi kisha unaiendesha kama mchanganyiko mwingine wowote.

{{ui:Check members}} kisha hukagua kila **sehemu ya I ya chuma iliyoviringishwa** kwa ukaguzi wa DetailCraft (mvutano, mgandamizo pamoja na kujikunja, kupinda pamoja na kujikunja kwa pembeni, kukata, kupinda pamoja na nguvu ya axial, mkengeuko; vifungu viko kwenye ripoti), na kuonyesha ni kiasi gani cha uwezo wake kinatumika, kwa rangi kwenye modeli. Ni **msaada hadi mhandisi aukague**.

**Ni vipengele vipi vinakaguliwa.** Wasifu wa IFC hausemi kama chuma cha I ni kilichoviringishwa au kilichochomelewa, kwa hiyo BimCraft inasema ni kilichoviringishwa tu pale jina lake la wasifu (au, kama halipo, jina la aina ya kipengele) ni ukubwa kutoka jedwali la AISC W au S, au la EN 10365 IPE, HEA au HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`), **na** kina, upana, wavuti na flensi kwenye faili vinalingana na ukubwa huo ndani ya 1 %. Kila I nyingine (girder ya sahani, ukubwa chini ya jina lingine, au ukubwa uliohaririwa) inachukuliwa kuwa uliochomelewa na inarudi **haijakaguliwa**, na vivyo hivyo mabomba, pembe, chaneli na sehemu nyingine, sehemu nyembamba na torsion. Kagua vipengele hivyo na mhandisi.
