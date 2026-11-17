---
title: Familia na ukubwa wake
summary: Milango, madirisha na samani huja katika familia. Kila ukubwa wa familia ni aina moja kwenye faili ya IFC, ili orodha ya aina ibaki fupi kwenye BimCraft wakati programu nyingine zinasoma aina za kawaida.
keywords: familia, aina, ukubwa, aina ya mlango, aina ya dirisha, samani, meza, rafu, kabati, ukubwa mpya, rudufu, weka familia, faili ya familia, ccfamily, maktaba ya IFC, maktaba ya mradi, kikundi, mwonekano, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Familia ni nini

Familia ni aina moja ya kitu katika ukubwa kadhaa: mlango mmoja wa kufungua unaokuja na upana wa 32, 36 na 42 inchi, au meza inayokuja ndefu na fupi. Katika BimCraft unaona familia mara moja, pamoja na ukubwa wake chini yake, badala ya orodha ndefu ya aina.

IFC haina familia. Kwenye faili kila ukubwa ni aina ya kawaida (aina ya mlango, aina ya dirisha, aina ya samani…), na familia ni kikundi kinachoorodhesha ukubwa wake. Programu nyingine za BIM husoma aina na kikundi kama zilivyo; BimCraft inasoma familia tena kutoka kwao.

## Zinapatikana wapi

- Kikundi cha **Familia** cha kivinjari cha mradi kinaorodhesha familia za modeli hii, na kila moja ina ukubwa mangapi na mangapi yamewekwa. Chini yake kuna **Familia za kuanzia**: milango na madirisha ya zana za Mlango na Dirisha, pamoja na meza, kabati la rafu na kabati la chini.
- {{ui:Build}} › {{ui:Families…}} inaonyesha orodha hiyo hiyo kwenye dirisha.
- Bofya familia ili kuifungua: ukubwa wake, thamani za kila ukubwa, na vipengele vingapi vinatumia kila moja.

## Milango na madirisha

Zana za Mlango na Dirisha zinaorodhesha familia za aina hiyo, kisha **orodha ya ukubwa** pembeni yake. Chagua ukubwa, au andika **W** na **H**: upana na urefu ambao hakuna ukubwa wowote unao bado unakuwa ukubwa mpya wa familia unapoweka mlango. Milango ya ukubwa mmoja hushiriki aina moja.

Katika {{ui:Properties}}, mlango au dirisha lililochaguliwa linaonyesha **Familia** na **Ukubwa** wake. Chagua ukubwa mwingine kutoka kwenye orodha, au andika upana au urefu mpya. {{ui:Open the family}} inafungua familia ambayo ni yake.

Fremu ya kila mlango au dirisha hufuata unene wa ukuta wake, kama ilivyokuwa kabla ya familia. Aina ya ukubwa pia huhifadhi mlango ukiwa umechorwa kwenye ukuta wa 140 mm, kwa programu zinazosoma aina.

## Ukubwa mpya kutoka familia hii

1. Fungua familia.
2. Chini ya **Ukubwa mpya kutoka familia hii**, andika thamani zake (Upana, Urefu na vigezo vingine vya familia) na, ukipenda, jina. Bila jina, linapewa jina kutokana na thamani zake.
3. Bofya {{ui:Make the size}}.

Hakuna ukubwa mbili unaoweza kuwa na thamani zile zile. **Badilisha jina** hubadilisha jina la ukubwa; **Ondoa** huondoa ukubwa ambao hakuna anayeutumia; **Chagua** huchagua vipengele vya ukubwa huo.

## Weka samani

1. {{ui:Build}} › {{ui:Place family}}, au {{ui:Place}} kwenye dirisha la familia.
2. Kwenye upau, chagua familia na ukubwa wake.
3. Bofya kwenye mpango ili kuweka kipande kwenye ngazi. Bonyeza {{key:R}} ili kukigeuza digrii 90 kabla ya kubofya. {{key:Esc}} inasimamisha.

{{ui:Properties}} ya kipande kilichowekwa inaonyesha ukubwa wake, mahali kilipo na kiasi kilichogeuzwa; {{key:Delete}} huondoa. Kila kipande cha ukubwa mmoja hushiriki umbo la ukubwa huo, kwa hiyo kubadilisha familia kunabadilisha vyote.

## Ukubwa kutoka jedwali

{{ui:Sizes from a table…}} kwenye dirisha la familia husoma faili ya CSV (koma, nukta-koma au tabu). Safu ya kwanza inataja safu: jina au lebo ya kigezo, na kwa hiari `Name`. Urefu ni milimita isipokuwa uandike kitengo (`1.2 m`, `36 in`); safu za Ndiyo / Hapana zinakubali yes, no, true, false, 1 au 0; na kigezo kisicho na safu kinabaki na thamani yake ya msingi. Kila safu inakuwa ukubwa, katika hatua moja unayoweza kutendua; ukubwa ambao tayari upo unaruka. Safu moja isiyosomeka, au ambayo familia haiwezi kuchora, inakataa jedwali zima na kutaja mstari wake. Kiwango cha juu ni safu 200 na 1 MB. {{ui:Save the sizes as a table}} huandika jedwali hilo hilo tena.

## Weka kwenye kila kipengele

Kigezo chenye alama ya **Kwa kila kipengele** kwenye mhariri (Ndiyo / Hapana inayoongeza fremu ya juu, lebo au nyenzo) si sehemu ya ukubwa: milango miwili ya ukubwa mmoja inaweza kutofautiana. Chagua kipengele na {{ui:Properties}} inaonyesha vigezo hivi; badilisha moja na kipengele hicho kinachorwa tena kwa umbo lake (samani na vifaa hupata umbo lao wenyewe, milango na madirisha hutengenezwa upya ukutani mwao). Virudishe vyote kwenye thamani zao za msingi na kinarudi kwenye umbo la ukubwa wake.

## Kiwango cha maelezo

{{ui:Build}} › {{ui:Families…}} › **Detail level** huweka, kwa kila familia kwenye modeli, kinachohifadhiwa kwenye miili imara na kinachochorwa kwenye alama za mpango: **Fine** huhifadhi kila kitu, **Medium** na **Coarse** huacha sehemu ambazo mhariri unaweka kuwa ndogo zaidi (faili ndogo, mionekano ya haraka). **Automatic** huhifadhi kila kitu na kuruhusu mwonekano wa karatasi uchague kwa kipimo chake: 1:50 na kubwa zaidi ni fine, 1:100 ni medium, 1:200 na ndogo zaidi ni coarse. Hatua moja unayoweza kutendua.

## Rudufu familia

Huhitaji kuanza kutoka mwanzo. {{ui:Duplicate}} hunakili familia pamoja na vigezo vyake, miili imara na ukubwa wake chini ya jina jipya. Badilisha nakala kwenye mhariri; asili inabaki ilivyokuwa.

## Faili za familia

- {{ui:Save the family file}} huhifadhi `.ccfamily.json`: vigezo, miili imara na ukubwa wa familia. Ifungue kwenye modeli nyingine kwa {{ui:Open a family file…}} kwenye kikundi cha Familia.
- {{ui:Save as IFC}} huhifadhi familia kama faili ndogo ya IFC: aina za ukubwa wake na kikundi chake, vilivyotangazwa na maktaba ya mradi ya IFC. Programu nyingine huifungua kama seti ya aina; BimCraft huifungua tena kama familia.

Faili ya familia iliyofunguliwa hapa inasomwa kama data na kukaguliwa kabla ya kuandika chochote. Familia ambayo ufunguo wake tayari uko kwenye modeli huingia kama familia tofauti. Familia inayoshikilia nyingine (ona Familia zilizomo kwenye msaada wa mhariri) huleta zile pamoja nayo: faili inazitaja, na modeli huweka zile ilizonazo tayari.

## Familia kwenye Maktaba

Fungua {{ui:Families…}} kisha uchague {{ui:From the Library…}} ili kuona familia zilizoshirikiwa kwenye Maktaba. {{ui:Add to this project}} husoma moja kama faili ya familia: BimCraft inakagua kila sehemu kabla haijatengeneza chochote, familia huingia kama familia yake yenyewe, na hufunguka kwenye mhariri. Kuiongeza ni hatua moja ya kutendua. Ili kushiriki yako, tumia {{ui:Save all as a library}} kisha utume faili kwenye Maktaba (wafanyakazi wa Maktaba huchapisha faili ya familia kwa amri, na kila familia ni kipengee chake chenye ukubwa wake). Maktaba isipofikika, orodha inasema hivyo na hakuna kinachobadilika.

## Aina za programu nyingine

Aina zilizotengenezwa na programu nyingine pia zinaonekana kwenye kikundi cha Familia, zikipangwa kwa makisio: kwa sehemu ya jina la vipengele vyao kabla ya koloni ya kwanza, au kwa majina ya aina yanayotofautiana tu kwa namba zake. Dirisha la familia linasema makisio lililotumika. Zinaorodheshwa na unaweza kuchagua vipengele vyake, lakini hazihaririwi hapa kwa kuwa hazina mapishi ya familia.

:::note
Milango na madirisha ya kuanzia huchorwa kama zilivyokuwa kabla ya familia. Faili zilizotengenezwa kabla ya familia hufunguka bila mabadiliko: milango na madirisha yake huonekana chini ya familia yao pamoja na ukubwa unaotumika, na huhamia kwenye ukubwa wao wenyewe mara ya kwanza unapoyabadilisha.
:::

Angalia pia [Hariri familia](topic:family-editor) na [Milango na madirisha](topic:doors-and-windows).
