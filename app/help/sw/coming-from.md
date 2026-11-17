---
title: Kutoka kwa programu nyingine za BIM na michoro
summary: Jinsi tabia kutoka uandishi wa BIM wa kompyuta ya mezani na kutazama DWG zinavyolingana na BimCraft, na tofauti zinazowachanganya watu.
keywords: kubadili, kuhamia, inayofahamika, bim ya kompyuta ya mezani, familia, vigezo, kivinjari cha mradi, paleti ya sifa, kipozi cha mtazamo, xref, msimamizi wa tabaka, tofauti, linganisha
from: 2de629af
---

Ukifahamu Revit, sehemu kubwa ya BimCraft itaonekana inafahamika kwa maneno na isiyofahamika kwa upeo. Tofauti kuu kabisa: toleo hili linasoma na kukagua modeli na kuhariri data ya IFC. Bado halibuni kama Revit. Huwezi kuchora kuta, kuweka familia, kutengeneza mionekano au karatasi, wala kuhifadhi faili la mradi. Unachoweza kufanya ni kufungua karibu faili lolote la jengo kwenye kompyuta yoyote yenye kivinjari, kuona lililomo, kukagua folda nzima ya mradi, na kurekebisha data katika modeli ya IFC.

## Tabia zilizolingana

| Ukiwa umezoea | Katika BimCraft |
|---|---|
| Kufungua `.rvt` kwenye Revit ili kuona modeli | BimCraft hufungua `.rvt` kama kadi ya faili: toleo, taarifa za mradi, viungo, onyesho la kukagua. Kwa modeli ya 3D, hamisha IFC kisha ufungue hiyo. [Soma faili la mradi au la familia](topic:read-rvt-file) |
| Kuangalia toleo ambalo faili lilihifadhiwa kabla ya kulifungua | Kadi inasema "imehifadhiwa kwenye Revit …" juu, bila kuboresha wala kugusa faili |
| Kivinjari cha Mradi | Hakuna kivinjari cha mionekano na karatasi. Modeli ya IFC ina orodha za {{ui:Ghorofa}} na {{ui:Vipengele}}; mchoro una vichupo vya karatasi |
| Paleti ya Sifa | Paneli ya {{ui:Sifa}} upande wa kulia, kwa kipengele ulichobofya. Seti za sifa za IFC badala ya vikundi vya vigezo |
| Vigezo vya tukio na vya aina | Seti za sifa za tukio, na seti zenye alama "(aina)". Mabadiliko ya aina yanatumika kwa kila kipengele cha aina hiyo, kama Revit. [Badilisha sifa ya aina kwa kila kipengele cha aina](topic:type-vs-instance) |
| Hariri Aina | Hakuna kisanduku cha mazungumzo: bofya thamani kwenye seti ya "(aina)" kisha uandike |
| Kuchagua vipengele vingi, vichujio, Chagua Matukio Yote | Kipengele kimoja kwa wakati. Bado hakijajengwa |
| Kipozi cha mtazamo na gurudumu la urambazaji | Kipozi cha mtazamo kwenye kona ya chini kulia, vitufe vinne ({{ui:Inafaa}}, {{ui:Juu}}, {{ui:Mbele}}, {{ui:Upande}}) na kuzunguka bure. Hakuna gurudumu la urambazaji |
| Shift na kuburuta kwa kitufe cha kati ili kuzunguka, kuburuta kwa kitufe cha kati ili kusogeza | Burura kwa kitufe cha kushoto ili kuzunguka, kuburuta kwa kitufe cha kulia (au {{key:Shift}} na kuburuta) ili kusogeza, gurudumu kukuza. Mtindo wa menyu wa {{ui:Utepe wa BIM}} unabadilisha hadi kusogeza kwa kuburuta kwa kitufe cha kati, na {{key:Shift}} pamoja na kitufe cha kati ili kuzunguka. [Menyu, vitufe na kipanya](topic:menus-keys-and-mouse) |
| Sakafu, michoro ya sehemu, masanduku ya sehemu | Ndege moja ya {{ui:Sehemu}} kwa wakati ({{key:X}}); hakuna kisanduku cha sehemu wala mipango ya 2D. [Kata modeli ya IFC kwa ndege ya sehemu](topic:section-plane) |
| Ficha kwenye mtazamo, tenga, mwonekano/michoro | {{ui:Ghorofa}} zimewashwa na kuzimwa, {{ui:Nafasi}} na {{ui:Kingo}}. Hakuna kuficha kipengele kimoja kimoja bado |
| Vyumba | Nafasi za IFC, zimefichwa mwanzoni. Bofya {{ui:Nafasi}} |
| Hifadhi, Hifadhi kama, kusawazisha na kati | {{ui:Hifadhi kama IFC}} hupakua faili jipya la IFC. Faili asili halibadiliki kamwe. Hakuna kati wala kushiriki kazi |
| Tendua kwa {{key:Mod+Z}} | Inafanya kazi kwenye mabadiliko ya IFC hadi uhifadhi. [Badilisha sifa za IFC na uhifadhi nakala iliyohaririwa](topic:edit-ifc-properties) |
| Dhibiti Viungo | Fungua folda ya mradi: kila kiungo kinakaguliwa na kuwekewa alama ya **Katika folda hii**, **Jina sawa limepatikana**, **Faili la maktaba** au **Si katika folda hii**. [Fungua folda nzima ya mradi](topic:open-project-folder) |
| Ukaguzi, au kufungua faili kuona kama limeharibika | Ripoti ya folda inakagua kila nakala na nakala rudufu kama zimekatwa, ndani ya sekunde. [Kagua folda kwa nakala zilizoharibika](topic:check-folder-health) |
| Kuchagua faili sahihi kutoka folda iliyochanganyika | Kisanduku cha {{ui:Anza hapa}} kinapendekeza moja, pamoja na sababu zake |

Ikiwa unafungua modeli zaidi kwa kukagua, kama katika programu ya kukagua au kutazama IFC, chagua mtindo wa menyu wa {{ui:Kitazamaji}}: zana za kutazama na kukagua zinakuja kwanza, na zana za ujenzi zinasubiri kwenye menyu moja. Tazama [Menyu, vitufe na kipanya](topic:menus-keys-and-mouse).

## Kutoka kutazama faili za DWG

Ukifungua DWG kwenye AutoCAD au kitazamaji cha DWG:

| Ukiwa umezoea | Katika BimCraft |
|---|---|
| Vichupo vya modeli na mpangilio chini | Vichupo juu ya mchoro: {{ui:Modeli}} na kimoja kwa kila karatasi |
| ZOOM Extents, bofya mara mbili gurudumu | Bofya mara mbili, {{key:F}} au {{ui:Inafaa}} |
| Kusogeza kwa kitufe cha kati | Burura kwa kitufe chochote |
| Meneja wa tabaka | Orodha ya {{ui:Tabaka}}: weka alama ili kuonyesha, ondoa alama ili kuficha, {{ui:Zote zimewashwa}} na {{ui:Zote zimezimwa}} |
| Meneja wa xref | **Michoro iliyounganishwa** upande wa kulia, yenye **Inaonyeshwa** au **Haijapatikana**, na {{ui:Ongeza michoro iliyounganishwa…}} |
| Onyesho la uchapishaji | {{ui:Mwonekano wa kuchapisha}} au {{key:P}}: nyeusi kwenye nyeupe yenye unene wa mistari. Haichapishi |
| Utoaji wa data ya sifa za block | Kichupo cha {{ui:Vifaa}} kwa michoro ya huduma za chakula yenye lebo, pamoja na {{ui:Pakua CSV}} |
| Pima, chora, hariri, hifadhi kama | Si katika BimCraft. Programu ya kuchora ya CadCraft ndiyo inayochora na kuhariri |

## Tofauti zinazowachanganya watu

- **Inafanya kazi kwenye kivinjari, na kivinjari kinatunza faili zako kwa uangalifu.** BimCraft inaweza kusoma faili na folda ulizozipa tu, kwa kuzichagua au kuziburuta. Haiwezi kufungua faili yenyewe, wala kuhifadhi juu yake. Kila uhifadhi ni upakuaji.
- **Hakuna kinachopakiwa.** Neno "upload" kwenye madirisha ya folda ya baadhi ya vivinjari ni maneno ya kivinjari chenyewe. Faili zinabaki kwenye kompyuta yako.
- **IFC ndiyo umbizo la modeli.** Faili la mradi hufunguka kama kadi kwa sababu maudhui yake ya 3D hayajaandikwa. Chukulia IFC kuwa njia ambayo modeli zinaingia BimCraft.
- **Mabadiliko ni nakala-wakati-wa-kuandika.** Kubadilisha thamani ya kipengele kimoja hakibadilishi majirani zake, hata kama kisafirishaji kiliitumia thamani hiyo pamoja. Sifa za aina ni ubaguzi wa makusudi.
- **Hakuna mradi, hakuna mionekano.** BimCraft inaonyesha faili moja kwa wakati na haikumbuki chochote kuhusu faili hilo baada ya kufunga kichupo, isipokuwa majina ya folda za hivi karibuni kwenye Chrome na Edge.
- **Vitufe vya Mac.** Pale njia za mkato za Windows za Revit zinapotumia Ctrl, njia za mkato za BimCraft zinatumia {{key:Mod}}: Command kwenye Mac.
- **Tabia zako za kipanya.** Kuzunguka ni kitufe cha kushoto, si Shift na kitufe cha kati, isipokuwa uchague mtindo wa menyu wa {{ui:Utepe wa BIM}} au uweke vitufe mwenyewe kwenye [Menyu, vitufe na kipanya](topic:menus-keys-and-mouse).

Tazama [Ambavyo bado havijajengwa](topic:not-built-yet) kwa kile cha kutumia leo.
