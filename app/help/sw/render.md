---
title: Tengeneza picha ya modeli
summary: Tengeneza picha ya mchana ya mwonekano wa 3D: anga, jua kwa latitudo ya eneo lako, vivuli laini, madirisha ya kioo; kwa WebGPU, kwa ufuatiliaji wa njia kwenye kadi ya picha, pamoja na anga, kamera, kuchanganya taa, upangaji wa rangi, ukungu na foleni ya picha.
keywords: tengeneza picha, preset, presets, seti ya tukio, mambo ya ndani, nje, mwonekano wa sehemu ya mkato, usiku, bofya moja, kutoa picha, ufuatiliaji wa njia, path traced, ufuatiliaji wa miale, mwanga wa kimataifa, mwakisho, kupinda kwa mwanga, ubora wa juu, taswira, picha halisi, halisi, picha, tulivu, anga, jua, mwanga wa mchana, vivuli, vivuli laini, kivuli cha mazingira, kioo, madirisha, chuma, nyenzo, mfiduo, mwangaza, mawingu, machweo, studio, uwasilishaji, webgpu, kuondoa kelele, anga halisi, hdri, ies, kina cha uwazi, panorama, usawazishaji wa nyeupe, kuchanganya taa, vipengele vya utoaji, exr, png ya biti 16, ukungu, kaustiki, foleni ya picha
from: beb74cc7
---

{{ui:Render}} kwenye upau wa zana hutengeneza picha ya mwonekano wa 3D inayoonekana kama mwanga wa mchana: anga, jua lilipo kwa latitudo ya eneo, vivuli laini, mwanga kutoka anga zima unaofanya pembe ziwe giza, na rangi zinazoweza kuonekana kama kioo au chuma. Modeli na faili hazibadilishwi.

## Tengeneza picha ya mwonekano

1. Weka mwonekano wa 3D jinsi unavyotaka picha iwe: zungusha na kukuza, ficha ghorofa au vipengele usivyotaka, na weka [sehemu ya mkato](topic:section-plane) ikiwa picha inapaswa kuonyesha kipande kilichokatwa.
2. Bofya {{ui:Render}} kwenye upau wa zana.
3. Chagua {{ui:Scene}} ikiwa uliyobonyezwa si unayotaka (tazama [Seti za tukio](topic:render#scene-presets-a-good-picture-in-one-click)), chagua {{ui:Size}}, kisha bofya {{ui:Render}} kwenye kidirisha.

   Picha inajaa kadiri inavyotolewa na inazidi kuwa laini kwa kila pasi. {{ui:Stop}} (au {{key:Esc}}) inamaliza mapema na kubakiza picha ilipofikia.

4. Bofya {{ui:Save}} kupakua kama PNG, au {{ui:Save as}} kwa umbizo jingine (tazama [Hifadhi picha](topic:render#save-the-picture)). Inapewa jina kulingana na faili la modeli.

:::tip
Anza na {{ui:Rasimu}} kwa {{ui:Ukubwa wa mwonekano}} kukagua kamera, kisha tengeneza {{ui:Nzuri}} au {{ui:Bora}} kwa ukubwa mkubwa zaidi kwa picha ya mwisho.
:::

## Seti za tukio: picha nzuri kwa bofya moja

Juu ya kidirisha kuna vitufe vinne vya {{ui:Scene}}. Kila kimoja huweka anga, mwangaza, ardhi, mistari ya kingo, ubora na jua kwa bofya moja, kwa hiyo hakuna cha kujifunza kabla ya picha ya kwanza. Bofya moja, kisha {{ui:Render}}.

| Tukio | Linaweka nini | Tumia kwa |
|---|---|---|
| {{ui:Exterior}} | Anga safi, jua la modeli yenyewe, ardhi imewashwa | Jengo kutoka nje |
| {{ui:Interior}} | Anga yenye mawingu (mwanga sawa, bila viraka vikali vya jua), nusu hatua angavu zaidi | Mwonekano kutoka ndani ya chumba |
| {{ui:Section view}} | Studio nyeupe, bila ardhi, mistari ya kingo katika picha ya haraka | Modeli iliyokatwa na sehemu ya mkato |
| {{ui:Night}} | Jua limezama (usiku wa manane wakati wa baridi kwa upande wa dunia wa eneo), hatua moja angavu zaidi | Taa zinazomulika modeli. Bila taa picha ni giza |

- {{ui:Chagua kwa mwonekano huu}} inachagua kwa niaba yako: {{ui:Section view}} sehemu ya mkato inapokuwa imewashwa, {{ui:Interior}} kamera ikiwa ndani ya modeli, vinginevyo {{ui:Exterior}}. Mara ya kwanza unapofungua kidirisha huanza hivi chenyewe.
- Kila mpangilio unabaki chini na unaweza kubadilishwa. Ukibadilisha mmoja, tukio halibaki na kitufe kilichobonyezwa, na mstari chini ya vitufe unasema kwamba mipangilio ni yako. Bofya tukio tena ili kurejesha thamani zake.
- Seti ya tukio haigusi injini, Hali, ukubwa, nyenzo, kamera wala taa.

:::note
Seti za tukio zinatoa thamani zilezile katika ModelCraft na BimCraft. Picha iliyokamilika inavyoonekana inategemea modeli yako na kadi yako ya picha.
:::

## Kinachoonekana kwenye picha

Kinachoonekana kikiwa kigumu kwenye mwonekano wa 3D: vipengele vilivyofichwa na vinavyoonekana kupitia, ghorofa zilizofichwa na modeli zilizofichwa vinaachwa nje, na vyumba vinaonekana tu {{ui:Spaces}} ikiwa imewashwa. Ndege ya sehemu ya mkato au kisanduku cha sehemu hukata picha kama vinavyokata mwonekano. Vipengele vinaonyeshwa kwa rangi zao wenyewe: upakaji rangi kwa sifa (kichupo cha {{ui:Color}}) hautumiki.

## Mipangilio

| Mpangilio | Inafanya nini |
|---|---|
| {{ui:Size}} | Ukubwa wa mwonekano, mara mbili ya ukubwa wa mwonekano, Full HD, 4K au mraba |
| {{ui:Mode}} | {{ui:Haraka}}, au {{ui:Ubora wa juu (ufuatiliaji wa njia)}} (hapa chini) pamoja na {{ui:Kikomo cha muda}} yake |
| {{ui:Quality}} | Pasi ngapi (au, katika ubora wa juu, sampuli ngapi) zinawiana kwa wastani: {{ui:Rasimu}} 16, {{ui:Nzuri}} 64, {{ui:Bora}} 256. Pasi zaidi hutoa vivuli na kingo laini zaidi, na huchukua muda mrefu zaidi |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} au {{ui:White studio}} (mandharinyuma nyeupe tupu) |
| {{ui:Sun}} | 21 Juni saa 15:00 kwa latitudo ambayo faili linatoa kwa eneo lake (IfcSite), ikielekezwa kwenye kaskazini halisi ya modeli. Weka tiki {{ui:Use another date and time for this picture}} kwa muda mwingine |
| {{ui:Brightness}} | Angavu zaidi au nyeusi zaidi, kwa hatua (stops) |
| {{ui:Ground under the model}} | Ardhi katika sehemu ya chini kabisa ya modeli inayopokea vivuli na kufifia kuelekea upeo wa macho |
| {{ui:Draw edges}} | Huchora kingo za vipengele kwa mistari myembamba juu ya picha |

Jua likiwa chini ya upeo wa macho kwa muda uliochaguliwa, ni usiku: anga linazama giza na taa za modeli zinaiangaza.

## Taa

Kila kifaa cha taa katika modeli ni taa katika picha: vifaa vilivyo kwenye faili la IFC (IfcLightFixture, au kipengele kilichoandikwa kama kifaa cha taa), pamoja na vile unavyoweka kutoka maktaba. Kila kimoja kinang'aa chini kidogo ya kifaa. Faili linapotoa wati ya kifaa, mwangaza wake unafuata hilo; vinginevyo ni lumeni 800, nyeupe yenye joto.

Kidirisha kinaorodhesha taa chini ya {{ui:Lamps}}: ondoa tiki moja ili kuizima, au andika mwangaza wake kwa lumeni. Mabadiliko haya yanahifadhiwa kwenye IFC (seti ya sifa ya kifaa `CadCraft_Light`, ambapo unaweza pia kuyabadilisha katika Sifa), na {{key:Ctrl+Z}} inayatengua.

Faili lisipotaja mahali eneo lake lilipo, jua linawekwa 40° kaskazini, na kidirisha kinasema hivyo. Muda ni saa ya eneo, unaokokotolewa kutoka longitudo yake, kwa hiyo unaweza kuwa saa moja mbali pale saa zinapowekwa kwa njia tofauti.

Mipangilio hii inahifadhiwa kwenye kivinjari hiki kwa picha inayofuata. Haihifadhiwi kwenye faili la IFC.

## Kioo na nyenzo nyingine

Chini ya {{ui:Materials}}, kila rangi kwenye skrini ina mwonekano: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} au {{ui:Frosted glass}}. Rangi ambazo faili la IFC linazifanya ziwe zinazopitisha mwanga (kwa mfano kioo cha dirisha) zinaanza kama {{ui:Glass}}.

:::note
Katika hali ya {{ui:Haraka}}, kioo na chuma vinaakisi anga, si sehemu nyingine ya modeli, na mwanga hauinami kupitia kioo. Hali ya {{ui:Ubora wa juu (ufuatiliaji wa njia)}} hapa chini inafanya yote mawili.
:::

## Ubora wa juu

Chagua {{ui:Mode}} › {{ui:Ubora wa juu (ufuatiliaji wa njia)}} kwa picha inayofuata mwanga jinsi kamera inavyouona:

- mwanga unarudi kati ya nyuso, kwa hiyo chumba kinachomulikwa kupitia dirisha, au na taa, kinamulikwa pande zote na rangi zinasambaa kwenye jirani zake;
- kioo ni kioo halisi: mwanga unainama kupitia humo na kinaakisi modeli;
- chuma na nyuso zilizong'arishwa zinaakisi sehemu nyingine ya modeli;
- paneli za mwanga zinang'aa kama paneli, na vivuli laini.

Ni polepole zaidi kuliko {{ui:Haraka}}: kila pasi inafuatilia tena mwanga wa kila pikseli. Picha inaanza ikiwa na chembe-chembe na inasafika kadiri sampuli zinavyoongezeka, kwa hiyo anza kwa ukubwa mdogo ({{ui:Ukubwa wa mwonekano}}, {{ui:Rasimu}}) na uchague {{ui:Kikomo cha muda}}: muda ukiisha, picha iliyofikia inabakizwa. {{ui:Simamisha}} nayo inaibakiza. Pasi ya kwanza husubiri kivinjari kinapoandaa kifuatilia njia.

Kivinjari kinapokuwa na WebGPU, kifuatilia njia ni chetu cha CadCraft na kinaendeshwa kwenye kadi ya picha; mstari chini ya picha unasema hivyo. Baada ya {{ui:Simamisha}} au kikomo cha muda, {{ui:Endelea}} inaendelea na picha hiyo hiyo hadi ipate sampuli zake zote; kubadilisha mpangilio au kubonyeza {{ui:Tengeneza picha}} tena kunaanza upya. Bila WebGPU picha inafuatiliwa kwa WebGL badala yake (mstari unasema hivyo), na {{ui:Endelea}} haitolewi.

:::linux
Firefox na mipangilio mingi ya Chrome kwenye Linux bado hazina WebGPU, kwa hiyo ubora wa juu unatumia WebGL hapo.
:::

Katika hali hii kingo hazichorwi, tekstua zinaonyesha rangi na ukali wake lakini si matuta yake, na kipande cha sehemu ya mkato kinatengenezwa kwenye modeli kabla picha haijaanza.

{{ui:Ondoa kelele (inaondoa chembe zilizobaki baada ya sampuli)}} imewashwa kwa chaguo-msingi: picha ikikamilika, au ikisimamishwa, chembe zilizobaki zinaondolewa na mtandao wa neva uliotengenezwa kwa kazi hii (mtandao uliochapishwa wa Intel Open Image Denoise, unaoendeshwa kwenye kompyuta yako: kwenye kadi ya picha, na kama haipo, kwenye kichakataji). {{ui:Onyesha}} › {{ui:Picha kabla ya kuondoa kelele}} inaionyesha kama ilivyotolewa.

## Anga na wasifu wa mwanga kwenye kadi ya picha

Kwa WebGPU, ubora wa juu una anga mbili zaidi:

- {{ui:Anga halisi}} inakokotoa mwanga wa mchana kutoka urefu wa jua: buluu nzito juu, mkanda mwepesi kwenye upeo wa macho, na jua linalozidi kuwa la joto na kufifia linaposhuka. {{ui:Ukungu}} inaenda kutoka siku safi sana (2) hadi yenye ukungu (10).
- {{ui:Picha ya anga (HDRI)}} inaangazia modeli kwa picha ya panorama ya mahali halisi. {{ui:Chagua picha…}} inachukua faili la equirectangular la `.hdr` au `.exr`; {{ui:Geuza}} inalizungusha kuzunguka modeli na {{ui:Mwangaza wa picha}} inalifanya liwe angavu zaidi au nyeusi zaidi. Picha hiyo ina jua lake lenyewe, kwa hiyo jua la modeli haliongezwi. Inabakizwa tu wakati ukurasa uko wazi: baada ya kuufungua tena, ichague upya.

Kila taa kwenye orodha ya {{ui:Lamps}} inaweza kupokea wasifu wa mwanga wa mtengenezaji: {{ui:IES profile…}} inasoma faili la IES (LM-63), na taa kisha inatupa mwanga wake jinsi kifaa hicho kinavyofanya (taa ya dari inayomulika chini, kiosha ukuta). Kila taa yenye jina hilo inaitumia, na taa inabakiza mwangaza wake yenyewe. Bofya jina la wasifu ili kuacha kuutumia.

Madirisha ya kioo safi husaidia mwanga wa anga kufika ndani ya chumba.

Hali ya {{ui:Haraka}} na kifuatilia njia cha WebGL zinaonyesha {{ui:Anga halisi}} na {{ui:Picha ya anga (HDRI)}} kama anga safi, na hazizingatii wasifu wa mwanga.

## Kamera

{{ui:Kamera}} inaweka picha kama picha ya kamera:

- {{ui:Mfiduo}}: weka {{ui:Kitelezi cha mwangaza}}, au chagua {{ui:Mipangilio ya kamera}} na uweke {{ui:Tundu la lenzi (f-stop)}}, {{ui:Kasi ya kifunga}} na {{ui:ISO}} kama kwenye kamera; EV iliyo karibu nazo ni thamani ya kawaida ya mfiduo. f/16 kwa 1/100 s na ISO 100 inalingana na siku yenye jua; tukio jeusi zaidi linataka tundu pana zaidi, kifunga cha polepole zaidi au ISO ya juu zaidi. Hili linafanya kazi katika kila hali.
- {{ui:Kina cha uwazi}} kinafifisha kilicho karibu au mbali zaidi ya {{ui:Umbali wa kulenga (m)}} kama lenzi ya f-stop hiyo ingefanya (acha wazi ili kulenga kilichopo katikati ya mwonekano); {{ui:Umbo la tundu}} linatoa mwanga wa vitu visivyolenga umbo la duara au lenye pembe.
- {{ui:Mtazamo wa nukta mbili (mistari wima inabaki wima)}} unanyoosha kamera na kuhamisha picha, kama lenzi ya usanifu ya tilt-shift inavyofanya, ili kuta zisiegemee unapotazama juu au chini kwenye jengo.
- {{ui:Usawazishaji wa nyeupe}} unaweka rangi ya mwanga ipi itaonekana kama nyeupe: chini (kwa mfano 3000 K) kwa mwanga wa taa wenye joto, juu zaidi kwa kivuli na siku zenye mawingu.
- {{ui:Makadirio}}: {{ui:Panorama ya 360°}} inatengeneza picha ya 2:1 ya kila kitu kinachozunguka kamera kwa vionyeshi vya panorama; {{ui:Panorama ya stereo ya 360°}} inapanga panorama ya jicho la kushoto na la kulia kwa vifaa vya kichwani; {{ui:Ramani ya mchemraba (nyuso 6)}} inatengeneza mionekano sita ya mraba kwenye gridi ya 3 × 2. Upana unatoka {{ui:Ukubwa}}.

Makadirio, kina cha uwazi, mtazamo wa nukta mbili na usawazishaji wa nyeupe vinahitaji kifuatilia njia cha kadi ya picha (WebGPU), kwa hiyo vinaonekana tu katika {{ui:Ubora wa juu (ufuatiliaji wa njia)}}.

## Kumaliza picha

{{ui:Picha}} inapanga rangi ya picha ya ubora wa juu kama picha ya kamera, na kila kidhibiti kinabadilisha picha iliyokamilika papo hapo, bila kutoa tena:

- {{ui:Mwonekano wa rangi (view transform)}}: {{ui:ACES filmic}} (picha kama ilivyokuwa), {{ui:AgX}} (laini zaidi, inahifadhi rangi kwenye mwanga mkali sana), {{ui:Filmic}} (mkunjo mpole wa filamu) au {{ui:Kawaida}} (tupu, mwanga mkali unakatwa hadi nyeupe).
- {{ui:Utofautishaji}} na {{ui:Kupunguza mwangaza wa juu}} (inarudisha maelezo katika sehemu angavu sana).
- {{ui:Bloom}} (mng'ao laini kuzunguka mwanga angavu), {{ui:Mng'ao}} pamoja na {{ui:Mistari ya mng'ao}} (miale ya nyota kutoka sehemu angavu zaidi) na {{ui:Vignette}} (pembe nyeusi zaidi).
- {{ui:Jedwali la rangi (.cube)…}} inatumia upangaji wa rangi kutoka faili la `.cube`, pamoja na {{ui:Nguvu ya jedwali la rangi}} yake; kama picha ya anga, inabakizwa tu wakati ukurasa uko wazi.

## Hifadhi picha

{{ui:Hifadhi kama}} karibu na {{ui:Hifadhi}} inachagua faili: {{ui:PNG}}, {{ui:JPEG}} au {{ui:WebP}} kwa kushiriki (JPEG na WebP pale kivinjari kinapoweza kuviandika tu), na baada ya kutoa picha ya ubora wa juu kwenye kadi ya picha, pia:

- {{ui:PNG, biti 16}}: picha iliyopangwa rangi yenye hatua nzuri zaidi kati ya vivuli, kwa uchapishaji au uhariri zaidi.
- {{ui:EXR, kila tabaka (float ya biti 32)}}: picha kama ilivyotolewa (mwanga wa mstari, bila upangaji wa rangi) pamoja na kila kipengele cha utoaji na kila kundi la mwanga kama tabaka lake, kwa programu za kuunganisha picha.
- {{ui:Faili la utoaji (.ccrender, ili kupanga rangi tena baadaye)}}: kila kitu ambacho kidirisha kinahitaji kuchanganya na kupanga rangi ya picha tena. {{ui:Fungua faili la utoaji…}} inalirudisha, pamoja na mchanganyiko wake na upangaji wake wa rangi, bila kutoa.

## Changanya taa baada ya utoaji

Washa {{ui:Kuchanganya taa (badilisha rangi na mwangaza wa kila taa baada ya utoaji)}} kabla ya kubonyeza {{ui:Tengeneza picha}}. Picha ikikamilika (au ikisimamishwa), {{ui:Changanya picha}} inaorodhesha taa zake katika makundi: anga, jua, na taa kwa jina lake (kila taa yenye jina moja ni kundi moja). Zima kundi, lipe rangi, au lifanye liwe angavu zaidi au nyeusi zaidi, na picha inabadilika papo hapo, bila kutoa tena. {{ui:Hifadhi mchanganyiko}} inaweka mchanganyiko chini ya jina la kuchagua tena baadaye; {{ui:Kama ilivyotolewa}} inarudi kwenye picha kama ilivyotengenezwa. {{ui:Hifadhi}} inahifadhi picha iliyochanganywa.

{{ui:Vipengele vya utoaji (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} inahifadhi pia sehemu za picha. {{ui:Onyesha}} inabadilisha mwonekano kuwa mojawapo: rangi za nyuso (albedo), normals, depth, mwanga wa diffuse, specular na uliopitishwa (kila moja la moja kwa moja na lisilo la moja kwa moja), kinachong'aa na anga, na rangi moja kwa kila kitu au kwa kila nyenzo kwa ajili ya kutengeneza mask.

Zote mbili zinabakiza tabaka za ziada kwenye kadi ya picha. Kwa ukubwa mkubwa kadi ya picha inaweza kukosa nafasi; kidirisha kinasema hivyo, na ukubwa mdogo unafanya kazi.

## Ukungu, moshi, kelele na kaustiki

Hivi viko katika {{ui:Ukungu, moshi na kelele}} na vinafanya kazi katika {{ui:Ubora wa juu (ufuatiliaji wa njia)}} kwenye kadi ya picha; injini nyingine hazivijumuishi.

- {{ui:Ukungu na ukungu mwepesi}} unajaza hewa hadi urefu fulani kwa ukungu ambao jua, anga na taa vinaumulika. {{ui:Unaweza kuona umbali gani, kwa mita}} inaweka unene wake (takriban 100 m ni ukungu mwepesi, 20 m ni ukungu mzito), {{ui:Urefu wa ukungu juu ya ardhi, kwa mita}} ni mahali unapoishia, na {{ui:Miale ya mwanga}} ni kiasi ambacho ukungu unang'aa kuelekea mwanga. Mwanga wa jua unatoka kwenye ukungu juu yake, kwa hiyo mahali jua linapopenya dirishani au kati ya majengo unaliona kama miale ya mwanga.
- {{ui:Moshi au wingu}} inaongeza ujazo mmoja wa moshi au wingu unaomulikwa kama ukungu. {{ui:Aina}} ni {{ui:Wingu}}, {{ui:Safu ya moshi}} au {{ui:Kutoka faili ya ujazo (.ccvol)}}, muundo wa gridi wa CadCraft wenyewe. {{ui:Undani}} na {{ui:Tofauti}} zinabadilisha wingu au safu iliyotengenezwa; {{ui:Ukubwa wa upande wake mrefu zaidi, kwa mita (0 = ukubwa wa modeli)}}, {{ui:Sogeza X (m)}}, {{ui:Sogeza Y (m)}}, {{ui:Sogeza Z (m)}} na {{ui:Geuza}} vinaliweka (linaanza katikati ya modeli); {{ui:Unene}} unalifanya liwe zito zaidi, {{ui:Mng'ao wa mbele}} unalifanya liwe angavu zaidi kuelekea mwanga, na {{ui:Rangi}} inalipaka rangi. Faili la ujazo linabakizwa tu wakati ukurasa uko wazi, kama picha ya anga.
- {{ui:Simamisha mapema pale picha ilipo safi (sampuli zinazojirekebisha)}} haitoi sampuli zaidi kwa pikseli zilizotulia. {{ui:Kelele inayokubalika}} ni kiasi cha chembe kinachobaki pikseli inaposimama. Mstari chini ya picha unasema pikseli ilipata sampuli ngapi kwa wastani.
- {{ui:Kaustiki (mwanga unaopindwa na kioo au kurudishwa na vioo)}} inafuatilia mwanga kutoka kwenye taa na jua, kwa hiyo doa angavu chini ya mpira wa kioo au mwanga wa kioo kwenye ukuta unatoka safi badala ya kuwa na chembe. Imezimwa wakati ukungu, moshi, kuchanganya taa au vipengele vya utoaji vimewashwa, na imetengenezwa kwa picha, si kwa picha za 360°.

## Foleni ya picha

{{ui:Foleni ya picha}} kwenye kidirisha: {{ui:Ongeza picha hii kwenye foleni}} inahifadhi mipangilio na mwonekano wa picha, na {{ui:Anza foleni}} inatoa kile kinachosubiri, moja baada ya kingine, kwenye kompyuta hii. Kufunga ukurasa kunabakiza foleni; fungua modeli ileile kuendelea. {{ui:Hifadhi}} inapakua iliyokamilika; {{ui:Ondoa}} na {{ui:Futa zilizokamilika}} zinasafisha orodha. Foleni inatoa picha katika ubora wa juu, kwa hiyo inahitaji WebGPU.

## Muda unaochukua

Picha inatengenezwa kwenye kompyuta yako, na kadi yako ya picha; hakuna kinachopakiwa. Muda unakua pamoja na pasi na pikseli: {{ui:Bora}} ina mara 16 ya pasi za {{ui:Rasimu}}, na picha ya 4K ina takriban mara nne ya pikseli za Full HD. Modeli kubwa huchukua muda mrefu zaidi kwa kila pasi.
