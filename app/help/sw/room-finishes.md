---
title: Faini za vyumba na jedwali za faini
summary: Sema kinachofunika sakafu, kuta na dari ya kila chumba, ongeza maeneo kama ukuta wa vigae nyuma ya sinki, na pata jedwali za faini kwa chumba, ukuta na eneo pamoja na maeneo, idadi ya vigae ikijumuisha vipande vilivyokatwa na ujazo wa msingi.
keywords: faini, faini, jedwali la faini, faini za vyumba, faini ya sakafu, faini ya ukuta, faini ya dari, ubao wa chini, kigae, vigae, vigae vilivyokatwa, idadi ya vigae, taka, msingi, screed, ubao wa nyuma, plasta, eneo, ukuta wa vigae, dado, eneo la maji, ndani, kiasi
from: 8c30498c
---

## Utakachofanya

Mwambie BimCraft mara moja kila chumba kimemalizwa kwa nini. Majedwali ya faini kisha yanatoa maeneo, vigae vya kuagiza na ujazo wa msingi, na yanabadilika kulingana na modeli.

## Hatua

1. Washa {{ui:Draw}}, fungua **Jedwali** kwenye paneli ya kushoto kisha ubofye **Room finishes**.
2. Chini ya **Finish types**, bofya **Add a finish type**. Ipe jina, aina (Tile, Sheet, Coat au Board) na unene. Kwa kigae, toa urefu na upana wa kigae, pengo na asilimia ya taka. Kama kuna kitu chini ya faini (screed, ubao wa nyuma, safu ya plasta), kitaje chini ya **Substrate** na utoe unene wake.
3. Chini ya **Rooms**, chagua faini ya sakafu, ukuta na dari ya kila chumba. Andika jina la ubao wa chini na urefu wake kama chumba kina.
4. Chini ya **Zones**, bofya **Add a zone** kwa sehemu ya chumba inayopata faini nyingine:
   - eneo la **ukuta** ni mkanda kati ya urefu mbili juu ya sakafu (ukuta wa vigae kutoka 0 hadi 1200, dado). Liko kwenye kila ukuta wa chumba, au chagua kuta za chumba hicho kwenye modeli na ubofye kitufe cha **On** ili kulizuia kwenye hizo;
   - eneo la **sakafu** au **dari** ni eneo unaloandika. Linatolewa kutoka kwenye faini ya chumba chenyewe.
5. Bofya **Save**. Ni hatua moja kwenye Undo. Urefu unaandikwa kwa vipimo vya mradi.

## Majedwali

Maingizo manne yanaungana kwenye orodha ya Jedwali:

- **Finishes by room**: kila chumba chenye faini ya sakafu, ukuta na dari, maeneo yake, pamoja na ubao wa chini na urefu wake.
- **Finishes by wall**: kila sehemu ya ukuta upande wa chumba na mkanda wake unaofunikwa na faini, pamoja na urefu wake, eneo jumla, punguzo, eneo halisi na, kwa vigae, vigae kamili, vigae vilivyokatwa na vigae vya kuagiza.
- **Finishes by zone**: kila eneo lenye faini yake, eneo halisi, vigae na ujazo wa msingi.
- **Finish quantities**: safu moja kwa kila faini: eneo halisi, vigae kamili na vilivyokatwa, vigae vya kuagiza, msingi na ujazo wake, pamoja na ujazo wa faini yenyewe.

Panga, jumlisha, hifadhi na hamisha kama jedwali lolote: angalia [Panga, hifadhi na hamisha jedwali](topic:schedule-layouts). Bofya takwimu ili kuchagua kile kilichoitoa: punguzo la ukuta huchagua milango na madirisha yake.

## Jinsi faini zinavyopimwa

- **Kuta**: kila sehemu ya ukuta upande wa chumba, urefu wake kando ya chumba ukizidishwa kwa urefu ambao faini inafunika, ukitoa sehemu ya kila mlango na dirisha ndani ya urefu huo. Ukuta ulio chini ya chumba unamalizwa hadi juu yake. Mbinu ya kupima ya mradi inaamua ni fursa zipi ni ndogo mno kutolewa ([Majedwali](topic:plan-schedules-and-pdf)).
- **Sakafu na dari**: chumba ndani ya nyuso za kuta zake, ukitoa visiwa vilivyomo.
- **Ubao wa chini**: urefu wa ukuta wa chumba ukitoa upana wa milango yake.
- **Vigae**: vimewekwa kama gridi kuanzia kona moja ya uso, pamoja na pengo moja kati ya vigae. Kigae kilicho kwenye uso mzima ni kigae kamili; kigae kilicho kwa sehemu (kwenye ukingo, kuzunguka fursa) ni kigae kilichokatwa. Vigae vya kuagiza ni kamili pamoja na vilivyokatwa, pamoja na asilimia ya taka, vikizungushwa juu. Kila kigae kilichokatwa kinahesabiwa kuwa kigae kipya: vipande vilivyobaki havitumiki tena.
- **Ujazo wa msingi**: eneo halisi likizidishwa kwa unene wa msingi.
- Hesabu iliyowekwa alama **≈** inakokotolewa kutoka eneo badala ya kupangwa kigae kwa kigae: uso ulio na eneo la aina uliloandika likitolewa, au uso mkubwa sana.

## Mambo ya kujua

- Faini zinahifadhiwa kwenye faili ya jengo (seti ya sifa `CadCraft_Finishes` kwenye mradi). Kila chumba chenye faini pia kinapata seti ya kawaida ya sifa za IFC `Pset_SpaceCoveringRequirements`, ili programu nyingine zisome majina.
- Mpangilio wa vigae unaanzia kwenye kona. Mpangilio uliokatikati ya chumba, muundo (herringbone, brick bond) na matumizi tena ya vipande vilivyokatwa hayahesabiwi.
- Ukuta uliopinda, na mpaka wa chumba usio ukuta (kitenganishi cha chumba), unaorodheshwa kama **Other boundary** pamoja na urefu wake na bila fursa.
- Ingizo la **Finishes** lililokuwepo awali linaorodhesha tabaka za faini za aina za kuta; **Layers: area and volume** inaorodhesha kila tabaka la kila aina yenye tabaka. Faini za vyumba hapa ndizo zinazotumika kwa chumba juu ya tabaka hizo.
- Msaidizi wa AI anaweza kuweka faini kwa niaba yako kwa `finishes_set`: angalia [Mruhusu msaidizi wa AI afanye kazi na modeli yako](topic:assistants).
