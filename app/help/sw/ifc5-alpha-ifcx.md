---
title: Fungua na hamisha faili za IFC5 alpha (faili za IFCX)
summary: Chaguo la maabara kwa umbizo la faili la IFC5 alpha (.ifcx): fungua faili pamoja na tabaka zake, angalia kile ambacho usomaji haukuweza kukagua, na hamisha modeli zilizofunguliwa. Umbizo bado linabadilika, kwa hiyo soma kwanza.
keywords: ifc5, ifcx, alpha, buildingsmart, json, tabaka, skimu, maabara, wingi, qto, hamisha, ingiza
from: cffe1669
---

IFC5 alpha (faili lenye kiendelezi {{ui:.ifcx}}) ni umbizo la faili ambalo buildingSMART bado linalibuni. Si la mwisho: faili, na usomaji wetu wa faili hizo, vinaweza kubadilika. Ndiyo maana hili ni chaguo la maabara na kwa nini kusoma kunakuja kwanza.

## Liwashe

1. Chagua {{ui:Settings}}, kisha sehemu ya {{ui:IFC5 alpha (IFCX)}} kwenye kichupo cha BimCraft.
2. Tia tiki {{ui:IFC5 alpha (IFCX) - the format is still changing; read first}}.

Limezimwa kwa chaguo-msingi. Likiwa limezimwa, faili la .ifcx linakataliwa kwa sentensi inayoelekeza hapa. {{ui:Open IFC5 alpha (.ifcx)…}} na kitufe cha usafirishaji cha {{ui:IFC5 alpha}} vinaonekana likiwa limewashwa.

## Fungua

- Chagua faili la .ifcx kwa {{ui:Open a file or folder}} (linabadilisha modeli iliyofunguliwa, baada ya swali la kawaida kuhusu mabadiliko), au
- chagua {{ui:Open IFC5 alpha (.ifcx)…}} kisha uchague mafaili kadhaa kwa pamoja: faili lenyewe, tabaka zake, na mafaili ya skimu linayoingiza. Ikiwa modeli tayari imefunguliwa, faili linaongezwa **kando yake**; x kwenye orodha ya modeli inaliondoa tena, ambayo ndiyo kurudisha nyuma.

Faili la IFCX linaorodhesha nodi (njia, watoto wake, kile wanachorithi, sifa zake). Mafaili kadhaa yanaweza kuelezea nodi moja: faili la baadaye (tabaka) linabatilisha sifa za faili la awali, na mtoto batili anaondoa mtoto. BimCraft inayaunganisha, kisha inachora matokeo kama modeli ndogo ya IFC4: mradi, eneo, jengo, ghorofa na vipengele vyenye majina, madarasa, sifa, wingi, rangi na mesh.

Hakuna kinachopakuliwa kutoka mtandaoni. Mafaili ya skimu linayoingiza (kwa mfano `ifc@v5a.ifcx`) yanatumika tu ikiwa uliyachagua pamoja na faili; vinginevyo ripoti inasema hivyo na sifa zinasomwa bila kukagua aina.

### Ripoti

Baada ya kufungua, ripoti inaorodhesha kile usomaji ulichopata: data isiyolingana na skimu yake, mafaili ya skimu ambayo hayakutolewa, na sifa zisizo na maana ya IFC hapa. Sifa zisizo na ramani zinabaki **kwenye** modeli, hazifutwi, na zinaandikwa tena wakati wa usafirishaji.

## Kipi kinakuwa nini

| Kwenye faili la IFCX | Kwenye BimCraft |
|---|---|
| Nodi yenye darasa la IFC (mradi, eneo, jengo, ghorofa, ukuta …) | Kipengele cha IFC4 kinacholingana; darasa ambalo usomaji huu haulijui linakuwa kipengele cha jengo cha wakala (proxy) |
| Jina ambalo nodi inalo chini ya mzazi wake | Jina la kipengele |
| Sifa zenye aina ya wingi (Length, Area, Volume, Mass …) | Seti ya wingi ya IFC4 iitwayo `Qto_IFCX` (wingi wa IFC4 unabaki seti za IFC4 `Qto_*`) |
| Sifa zingine za mali | Seti ya sifa iitwayo `Pset_IFCX` |
| Sifa za mesh na mabadiliko | Pembetatu za kipengele na mahali kilipo; mesh zisizoonekana hazichorwi |
| Rangi, uwazi, nyenzo, uainishaji | Mtindo wa uso, nyenzo na uainishaji wa kipengele |

Vipimo vinachukuliwa kama mita, na Z ikielekea juu: alpha inasema vipimo vitaandikwa baadaye.

## Hamisha

Chagua {{ui:IFC5 alpha}} kwenye upau wa zana, soma kidokezo, kisha {{ui:Export .ifcx}}. Faili lina kichwa chetu (mwandishi CadCraft, toleo ifcx_alpha) na linajitangaza ndani yake kuwa umbizo la alpha. Kila modeli inaandikwa kwenye viwianishi vyake yenyewe, kwa mita, pamoja na majina, madarasa, seti za sifa, wingi (kama sifa zenye aina yake), rangi na pembetatu. Tabaka na urithi vinaandikwa vimebapwa. Kagua faili kwenye programu unayolituma.

## Mipaka

- Jiometri iliyopinda (mikunjo, nyuso) haisomwi: mesh za pembetatu tu.
- Milango na madirisha yaliyo ndani ya ukuta yanawekwa kwenye ghorofa; ukuta waliotoka haujaunganishwa.
- Majina ya seti za `Qto_*` za IFC4 yanabaki kama vikundi vya sifa vyetu (`cadcraft::qto::…`); skimu ya alpha ya kawaida ina majina machache tu ya wingi.
- Umbizo linaweza kubadilika chini yetu; faili lililotengenezwa leo huenda lisisomeke kesho.
