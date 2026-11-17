---
title: BimCraft inasoma nini kutoka kila umbizo
summary: Hasa kile BimCraft inasoma kutoka faili za IFC, faili za mradi na familia, DWG na DXF, na kile inachokiacha.
keywords: umbizo, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, matoleo, uoanifu, kinachosomwa
from: 9b8dfb4f
---

## IFC

| Husoma | Maelezo |
|---|---|
| Jiometri | Kila kipengele chenye umbo, kikipakwa rangi kama faili inavyosema. Vyumba na nafasi huchorwa wazi na kufichwa mwanzoni |
| Ghorofa | Ghorofa za jengo kwa mpangilio wa mwinuko, na vipengele vilivyo kwenye kila moja. Vipengele visivyo kwenye ghorofa yoyote vimepangwa kama "Not on a storey" |
| Hesabu za vipengele | Vipengele vingapi vya kila aina (kuta, milango, bamba…), vinavyoonyeshwa kwenye {{ui:Elements}} |
| Taarifa za mradi | Jina la mradi, jina refu na awamu; skimu; programu iliyohamisha, mwandishi na tarehe ya kuhamisha kutoka kichwa cha faili |
| Data ya kipengele | Jina, aina, aina ya kitu, lebo, maelezo, GlobalId; kila seti ya sifa na kila seti ya kiasi kwenye kipengele na kwenye aina yake |

Inaweza kuhaririwa: jina, aina ya kitu, lebo, maelezo, na thamani moja za sifa. Inahifadhiwa kama faili mpya ya IFC. Skimu IFC2X3, IFC4 na IFC4X3 hufunguka, zikisomwa na injini yake ya IFC; chochote ambacho bado haiwezi kuchora kinaorodheshwa chini ya **Bado hakijachorwa** kwenye kidirisha cha {{ui:File}}. Modeli inahamishwa hadi asili inapofunguka, kwa hiyo modeli iliyowekwa mbali nayo bado inaonekana katikati ya skrini. `.ifczip` na `.ifcxml` hazifunguki.

## Faili za mradi na familia

`.rvt` miradi, `.rte` violezo vya mradi, `.rfa` familia na `.rft` violezo vya familia.

| Husoma | Maelezo |
|---|---|
| Taarifa za faili | Toleo na muundo, ufanyaji kazi wa pamoja, njia ya modeli kuu, njia ya mwisho iliyohifadhiwa, jina la mtumiaji, lugha, GUID ya hati |
| Taarifa za mradi | Sehemu za mradi zenyewe (jina, namba, mteja, anwani, hali…), bila chaguo-msingi za mradi mpya |
| Taarifa za familia | Jina la familia, kategoria, toleo, sasisho la mwisho, na vigezo vyake kwa kikundi |
| Viungo | Orodha ya modeli zilizounganishwa, viungo vya CAD, picha na majedwali ya maneno muhimu ambayo faili inaelekeza |
| Picha ya hakiki | Picha ndogo iliyohifadhiwa kwenye faili |

Hayasomwi: modeli ya 3D, vipengele, mionekano, karatasi na majedwali. Yamehifadhiwa katika muundo usio wa kumbukumbu. BimCraft husoma kilobaiti chache tu kutoka kila faili, kwa hiyo ukubwa wa faili hauna maana sana.

## Faili za mradi .pln, .pla, .tpl na .bpn

Bado hazisomwi: BimCraft inasema hivyo unapofungua moja. Hamisha IFC kwa modeli na DWG kwa michoro; angalia [Fungua faili za mradi za .pln na .pla](topic:pln-project-files).

## DWG na DXF

| Husoma | Maelezo |
|---|---|
| Nafasi | Nafasi ya modeli na kila karatasi (mpangilio), kwa mpangilio wa vichupo |
| Madirisha ya mtazamo | Kila dirisha la karatasi, pamoja na kipimo chake, mzunguko na tabaka zilizogandishwa |
| Tabaka | Jina, rangi, kuwasha/kuzima, kugandishwa, bendera ya kuchapisha na unene wa mstari |
| Vitu | Mistari, polilaini, upinde, duara, duaradufu, splines, mistari ya kivuli na solidi, maandishi na maandishi ya mistari mingi, bloku na sifa zake, vipimo, viongozi na multileaders, jedwali, nukta, picha |
| Michoro iliyounganishwa | Inachorwa mahali inapoingizwa, michoro yake ikipatikana |
| Picha | Zinachorwa kutoka faili za picha zinapopatikana (PNG, JPEG, GIF, BMP, WebP; si TIFF) |
| Lebo za vifaa | Lebo za vitu vya huduma za chakula (sifa za `KCL-ITEM`), kwa jedwali la vifaa |

Kingine chochote kinahesabiwa chini ya **Bado hakijachorwa**, na hakikisiwi kamwe. Miundo ya DWG kutoka AutoCAD 2000 hadi 2018 ndiyo iliyokaguliwa (faili za R13 na R14 pia zinakubaliwa, lakini hakuna zilizokuwa kwenye seti ya majaribio; DWG za zamani hazifunguki); kidirisha cha {{ui:Drawing}} kinaonyesha msimbo wa umbizo (kama AC1032). Faili za DXF za toleo lolote hufunguka, ikiwemo R12. Zote mbili husomwa na visomaji vya BimCraft yenyewe, katika kichupo hiki. Hakuna kinachohifadhiwa tena kwenye DWG wala DXF.

## Kwenye folda

| Aina | Viendelezi | Kwenye ripoti |
|---|---|---|
| Modeli | `.rvt` `.rfa` `.rte` `.rft` | Zimepangwa pamoja na nakala rudufu zenye namba, zimekaguliwa afya, kadi imesomwa, viungo vimekaguliwa |
| IFC | `.ifc` | Zimeorodheshwa; hufunguka kwenye 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Zimeorodheshwa pamoja na modeli zinazoziunganisha; DWG na DXF hufunguka kwa 2D, DGN haifunguki |
| Mabaki | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Zimeorodheshwa chini ya **Ziweke pembeni** |
| Folda za matengenezo | `*_backup`, `*_log`, `Revit_temp`, folda zilizofichwa | Zimeorodheshwa chini ya **Ziweke pembeni**, hazisomwi |

Angalia [Ripoti ya folda: majukumu, hali na viungo](topic:folder-roles).
