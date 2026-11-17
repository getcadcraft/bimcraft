---
title: Kagua vipengele vya zege na utengeneze mizigo ya tetemeko
summary: Weka nondo za mihimili ya zege na nguzo za modeli iliyofunguliwa ya IFC, zikague kwa ACI 318-19, tengeneza nguvu sawa za upande kwa ASCE 7-22 kwenye sakafu ngumu, na uone mteremko wa ghorofa. Ni msaada kwa mhandisi kukagua.
keywords: zege, zege iliyoimarishwa, ACI 318, ACI 318-19, nondo, boriti, nguzo, nguvu ya kukata, vifungo, tetemeko, tetemeko la ardhi, nguvu sawa ya upande, ELF, ASCE 7-22, mteremko, mteremko wa ghorofa, sakafu, diafragm ngumu, uzito wa ghorofa, matumizi ya uwezo, muundo, mhandisi, uchanganuzi
from: 2f342e72
---

Vizuizi vya {{ui:Vipengele vya zege}} na {{ui:Mizigo ya tetemeko}} katika kichupo cha {{ui:Uchanganuzi}} vinakagua mihimili na nguzo za zege zilizoimarishwa za IFC iliyofunguliwa, na kutengeneza nguvu za upande za tetemeko la ardhi kwenye sakafu za fremu yake. Ni vizuizi vilevile vya DetailCraft, vinavyoendeshwa baada ya uchanganuzi wa kichupo cha {{ui:Uchanganuzi}}, na vinahifadhiwa kwenye IFC pamoja na mipangilio mingine ya uchanganuzi.

:::warning
Matokeo ni **ya mhandisi kukagua**: ni msaada hadi mmoja akaupitie. Ukaguzi wa zege unatumia nguvu za mpangilio wa kwanza (nguzo katika fremu uliyoiita isiyoyumba imeundwa kwa wakati wake ulioongezwa), bila ukuzaji wa kuyumba, bila usanifu wa torsheni, bila maelezo ya tetemeko (sura ya 18 ya ACI) na bila maelezo ya vifungo. Mizigo ya tetemeko haijumuishi kipengele cha ziada, athari ya wima ya tetemeko, ukuzaji wa torsheni wala athari za P-delta. **Mizigo ya upepo haijajengwa**: sura za kiwango za upepo hazimo kwenye kurasa za marejeo za mradi.
:::

## Kinachosomwa na BimCraft

Uchanganuzi unasoma mihimili, nguzo na mabano ya modeli pamoja na wasifu wake (tazama [Chambua fremu ya muundo](topic:frame-analysis)). Kizuizi cha {{ui:Vipengele vya zege}} kinaorodhesha kila sehemu wanazotumia. Bofya {{ui:Weka kama zege…}} kwenye sehemu iliyo zege: BimCraft inachukua mstatili kutoka eneo na ugumu wa wasifu (upana b na kina h ambavyo unaweza kubadilisha baadaye), kwa hiyo sehemu isiyokaribia mstatili (umbo la chuma lililoviringishwa) inatoa ukubwa unaohitaji kusahihishwa, au inaachwa.

Sehemu iliyowekwa kama zege, na kipengele chochote ambacho nyenzo yake imetajwa zege, kinachambuliwa kama zege: E = 4700 √f′c, 2400 kg/m³, na kwa chaguo-msingi **sehemu zilizopasuka** (nguzo 0.70 Ig, mihimili 0.35 Ig; ACI 318-19 Jedwali 6.6.3.1.1(a)). Chagua {{ui:Sehemu kamili}} ili kuzima hilo. Bila mipangilio hii modeli inachambuliwa kama awali kabisa.

## Nondo, michanganyiko, ukaguzi

Weka kifuniko, nondo za juu, chini na za pembeni (au kiunzi cha nguzo), pamoja na vifungo vya kila sehemu, kisha weka f′c, fy, fyt, K na kuyumba au kutoyumba. Ipe kila kesi ya mzigo aina yake, bofya {{ui:Tengeneza michanganyiko}} (ASCE 7 §5.3.1), kisha {{ui:Kagua zege}}: kila kipengele kinapata matumizi ya uwezo, yakipakwa rangi kwenye modeli. Vipengele vilivyozidi uwezo, na mteremko wa ghorofa unaozidi kikomo chake, vinaorodheshwa kwenye {{ui:Matatizo}} pamoja na kifungu chake; bofya moja ili kuchagua kipengele hicho.

## Sakafu na mizigo ya tetemeko

Katika kizuizi cha {{ui:Mizigo ya tetemeko}}, {{ui:Tafuta ghorofa}} huchukua viwango ambapo mihimili miwili au zaidi inakutana; kila kimoja kinakuwa diafragm ngumu. {{ui:Chukua uzito kutoka kesi}} husoma uzito wa tetemeko wa kila sakafu kutoka kwenye kesi unazotoa kipengele. Jaza SDS, SD1, S1, R, Ie, Cd, TL, mfumo na kundi la hatari, kisha {{ui:Tengeneza kesi za tetemeko}} (ASCE 7-22 12.8: kipindi, nguvu ya msingi wa kukata, usambazaji juu ya sakafu, mteremko wa torsheni wa 5 % wa bahati mbaya). Nguvu za ghorofa na ukaguzi wa mteremko (12.12) zinaonekana baada ya kuendesha. Kipindi sawa na ugumu wa ghorofa hulisha tetemeko katika [Cheza mafuriko, upepo au tetemeko la ardhi](topic:hazard-playback) unapochagua fremu ya uchanganuzi kama chanzo chake.

Bamba na kuta za zege zinakuwa sahani katika uchanganuzi, na kizuizi cha {{ui:Uimarishaji wa bamba}} kinakokotoa chuma wanachohitaji kwa kila mita. Maelezo ya kila ukaguzi yako katika mada ya DetailCraft yenye jina hilo hilo.
