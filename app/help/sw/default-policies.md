---
title: "Sera Chaguomsingi: weka kinachoanza nacho jengo jipya"
summary: Sema mara moja aina ya ukuta, viwango, karatasi ya kwanza, lebo za LOD, vipimo na zana ambazo jengo jipya linaanza nazo, kwa miradi ya metriki na ya imperial, kisha shiriki sera ofisini kama faili dogo.
keywords: chaguomsingi, sera chaguomsingi, sera, kiwango cha ofisi, chaguomsingi za ofisi, kiolezo, jengo jipya, aina ya kwanza ya ukuta, ukuta wa metriki, uashi, LOD, kiwango cha maendeleo, karatasi ya kwanza, karatasi, skeli, viwango, kimo cha ghorofa, majina ya viwango, zana ya ukuta, vipimo, shiriki, hamisha nje, ingiza, json
from: 42379aa5
---

Mwambie BimCraft jengo jipya linapaswa kuanza na nini, ili hakuna mtu ofisini anayelazimika kubadilisha mambo yale yale kila mara. Hii ni programu-jalizi: imezimwa mpaka uiwashe, na sera usiyoweka huacha chaguomsingi la BimCraft kama lilivyo.

:::note
Hizi ni chaguomsingi kwa majengo **mapya** na vitu **vipya**. Mradi ulioanza tayari haubadiliki.
:::

## Hatua

1. Fungua Mipangilio, nenda kwenye {{ui:Programu-jalizi}} kisha uwashe {{ui:Sera Chaguomsingi}}.
2. Katika Mipangilio, fungua kichupo cha **BimCraft** kisha uchague {{ui:Sera Chaguomsingi}} kwenye orodha ya kushoto.
3. Weka sera unazotaka. Kila moja huanza na **ya BimCraft** yenyewe, pamoja na kile kilichomo kwenye mabano. Sera yenye kisanduku cha **Metriki** na **Imperial** huchukua thamani moja kwa kila aina ya mradi; jaza zile unazohitaji tu.
4. Hakuna kitufe cha Hifadhi: kila badiliko huhifadhiwa unapolifanya. Thamani isiyoweza kutumika hukataliwa kwa maneno na ile ya zamani inabaki.
5. Bofya {{ui:Jengo jipya}}. Mazungumzo yanajazwa kutoka sera zako, na kila thamani ambayo sera imeiweka huonyesha **kutoka Sera Chaguomsingi zako** kando yake. Bado unaweza kubadilisha yoyote kabla ya {{ui:Unda}}.

## Sera

- **Vipimo vya jengo jipya**: vipimo hubadilika kuwa hivi wakati wa Unda.
- **Idadi ya viwango**, **Majina ya viwango** na **Kimo cha kiwango**. Katika jina, `{n}` huhesabu 1, 2, 3; `{n0}` huhesabu 0, 1, 2; `{nn}` na `{nn0}` hufanya vivyo hivyo kwa tarakimu mbili. Kwa hiyo `Ghorofa {nn0}` hutoa Ghorofa 00, Ghorofa 01, Ghorofa 02.
- **Aina ya kwanza ya ukuta**: kile zana ya Ukuta inachochora kwanza. Ofisi ya metriki inaweza kuanza na Exterior masonry 300 mm wakati miradi ya imperial inabaki na Exterior 2×6.
- **Lebo ya LOD kwenye aina za kuanzia za ukuta**: kiwango cha maendeleo (LOD 100 hadi 500) ambacho aina tisa za kuanzia huonyesha kila mahali aina inapoorodheshwa. Angalia [Jenga mikusanyiko ya ukuta](topic:wall-assemblies).
- **LOD ya aina mpya ya ukuta**: lebo ambayo aina mpya huanza nayo kwenye kihariri cha aina. Unaweza kuibadilisha hapo.
- **Karatasi ya kwanza**: karatasi yake, skeli, namba ya karatasi na jina lake (tumia `{level}` kwa jina la kiwango cha chini kabisa), au hakuna karatasi ya kwanza kabisa.
- **Ukubwa wa maelezo kwenye karatasi** (Mipangilio › Kwa ujumla › Sera Chaguomsingi): vimo vya ofisi, kwa milimita kama vinavyochapishwa, kwa dokezo, maandishi ya vipimo, lebo, majina ya vyumba, herufi za duara la gridi, vichwa vya mionekano na maandishi ya jedwali. Jengo jipya huvichukua wakati wa Unda na kuvihifadhi kwenye faili lake. Angalia [Chora kwa ukubwa kamili, weka maelezo kwa skeli](topic:annotation-sizes).
- **Zana inayotumika baada ya Unda**: Chagua, kama BimCraft inavyofanya yenyewe, au Ukuta, ili mibofyo miwili ya kwanza kwenye mpango iwe tayari inachora ukuta.

## Mpangilio wa jedwali: kiwango cha ofisi

Katika **Mipangilio › Kwa ujumla › Sera Chaguomsingi**, chini ya **Mpangilio wa jedwali (kiwango cha ofisi)**, weka jinsi kila jedwali linavyopangwa, kama lina jumla ndogo na jumla kuu, kichwa chake na herufi kubwa au ndogo za vichwa vya safu. Kila jedwali lisilotaja lake lenyewe huchukua hizi, bila kujali nani aliliweka. Angalia [Panga, hifadhi na hamisha jedwali](topic:schedule-layouts).

## Shiriki kote ofisini

1. Katika Mipangilio, fungua kichupo cha **Kwa ujumla** kisha uchague {{ui:Sera Chaguomsingi}}.
2. Andika **Jina la ofisi** ukipenda. Linaandikwa kwenye faili.
3. Bofya {{ui:Hifadhi kwenye faili}}. Utapata faili dogo linaloishia na `.ccdefaults.json`.
4. Kwenye kompyuta nyingine, washa programu-jalizi, fungua mahali pale pale kisha ubofye {{ui:Pakia kutoka faili}}. Sera za faili hubadilisha zile zilizo kwenye kompyuta hiyo.

Kichupo cha Kwa ujumla pia kina **Mfumo wa vipimo wa mradi mpya**, unaotumika kwa kila programu yenye programu-jalizi hii, na {{ui:Weka upya sera zote}}. {{ui:Weka upya kwa chaguomsingi za BimCraft}} kwenye kichupo cha BimCraft hufuta za BimCraft pekee.

## Vya kujua

- Faili ni JSON wazi, rahisi: orodha ya majina ya sera na thamani zake. Sera ambayo faili inaitaja na toleo hili halijui huachwa nje na kutajwa kwenye ujumbe; zilizobaki zinapakiwa.
- Sera huhifadhiwa kwenye kivinjari hiki, kwa kila programu ya CadCraft kwenye kompyuta hii. Hazihifadhiwi kwenye faili la jengo, na hazisawazishwi kati ya kompyuta: tumia faili.
- Lebo ya LOD ya aina ya kuanzia hutoka kwenye sera ya kompyuta hii. Aina unayotengeneza kama nakala ya kuanzia hubeba lebo yake kwenye faili la jengo.
- BimCraft haina mpangilio wa usahihi, kwa hiyo hakuna sera ya usahihi hapa.
- Jengo lililoanzishwa kutoka kiolezo huleta viwango na karatasi za kiolezo chenyewe. Aina ya ukuta na sera ya vipimo bado zinatumika.
- Zima programu-jalizi na kila kitu kinarudi kuwa cha BimCraft. Sera zako zinahifadhiwa kwa ajili ya utakapoiwasha tena.
