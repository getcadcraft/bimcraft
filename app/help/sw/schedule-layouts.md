---
title: Panga, hifadhi na hamisha jedwali
summary: Panga jedwali, lipe jumla ndogo na jumla, ongeza safu inayosomwa kutoka sifa, lihifadhi kama usanidi kwenye faili, na lihamishe kama kitabu cha lahajedwali (.xlsx), kama maandishi ya kubandika kwenye lahajedwali la mtandaoni, au kama CSV. Kiwango cha ofisi kinajaza kile jedwali halisemi.
keywords: mpangilio wa jedwali, panga kwa, jumla ndogo, jumla, vichwa, kiwango cha ofisi, sera chaguomsingi, usanidi, jedwali la milango kwa ghorofa, ukadiriaji wa moto, vifaa vya milango, xlsx, kitabu cha kazi, lahajedwali la mtandaoni, bandika, csv, hamisha, lahajedwali, vipengele, chagua kutoka jedwali, takwimu
from: 95dfd801
---

## Utakachofanya

Geuza jedwali la kawaida kuwa lile ambalo ofisi yako inalitoa: lililopangwa kwa ghorofa, aina au chumba, pamoja na jumla ndogo na jumla, pamoja na safu unazohitaji, chini ya jina lake. Kisha lipeleke kwenye lahajedwali. Kila safu na kila takwimu bado inajua vipengele ilikotoka.

## Hatua

1. Washa {{ui:Draw}} na ufungue **Jedwali** kwenye paneli ya kushoto. Chagua jedwali, kwa mfano **Doors**.
2. Juu ya jedwali, chagua **Group by** (safu ya jedwali, kama Level au Type, au **No grouping**) na **Totals** (**No totals**, **One total**, au **Subtotals and a total**). **As set** inaacha uchaguzi kwa usanidi uliohifadhiwa au kwa kiwango cha ofisi.
3. Ili kuongeza safu inayosomwa kutoka kwa vipengele, andika jina la sifa au tag chini ya jedwali (kwa mfano `FireRating`, `Pset_DoorCommon.FireRating` au jina la tag kama `Ironmongery`) kisha ubofye **Add column**. BimCraft inasoma seti za sifa za kipengele kwanza, kisha za aina yake. Kipengele kisicho na thamani bado kinaonyesha hivyo; safu inajijaza yenyewe thamani ikiwekwa.
4. Andika jina (kwa mfano "Door schedule by floor") kisha ubofye **Save as a set-up**. Usanidi unahifadhiwa kwenye faili la jengo na unajiunga na orodha ya Jedwali kwa jina lake. Unafuata kila mabadiliko ya modeli. **Remove this set-up** unauondoa. Vyote viwili ni hatua moja kwenye Undo.

## Bofya takwimu kuchagua kilichoitoa

Bofya safu yoyote, au takwimu yoyote moja, ili kuchagua vipengele vilivyo nyuma yake kwenye mpango na 3D:

- safu inachagua vipengele vya safu hiyo;
- jumla ndogo au jumla inachagua kila kitu inachojumlisha, na kichwa cha kundi kinachagua kundi lake;
- takwimu yenye vipengele vyake inachagua hivyo: **Deductions** za aina ya ukuta zinachagua milango na madirisha yake, na eneo la ukuta la chumba linachagua kuta zake.

Hii hufanya kazi pia kwenye hati iliyotengenezwa kutoka modeli: kwenye onyesho la kukagua, bofya takwimu ya jedwali.

## Hamisha

- **Download Excel** inahifadhi kitabu cha .xlsx. Urefu, maeneo, ujazo na hesabu ni namba halisi katika kipimo ambacho safu inaonyesha (futi na inchi zinabaki maandishi). Karatasi ya pili, **Elements**, inaorodhesha kwa kila mstari GlobalId za vipengele vilivyo nyuma yake.
- **Copy for Google Sheets** inaweka jedwali kwenye ubao wako wa kunakili kama maandishi yaliyotenganishwa na tabo. Kwenye Google Sheet, bofya seli A1 kisha ubandike. **Open a new Google Sheet** inafungua `sheets.new`, anwani ya Google yenyewe ya lahajedwali tupu, kwenye akaunti yako ya Google. BimCraft haiingii kwenye Google wala haituma chochote huko: kubandika ni kazi yako.
- **Download CSV** inahifadhi jedwali kama lilivyopangwa kwenye skrini.

## Kiwango cha ofisi

Ofisi inaweza kusema mara moja jinsi majedwali yake yanavyopangwa. Washa nyongeza ya **Default Policies** ([Default Policies](topic:default-policies)) na uweke, kwenye **Mipangilio › Global › Default Policies › Schedule layout (the office standard)**:

| Sera | Inachofanya |
|---|---|
| Panga majedwali kwa | Ghorofa, Aina, Chumba au bila kupanga, kwa kila jedwali lenye safu kama hiyo |
| Jumla katika majedwali | Bila jumla, jumla moja mwishoni, au jumla ndogo chini ya kila kundi na jumla |
| Kichwa cha jedwali | Muundo, kwa mfano `{project}: {schedule}` |
| Vichwa vya safu | Kama ilivyoandikwa, KWA HERUFI KUBWA au Herufi Kubwa Kila Neno |

Kiwango kinatumika kwa kila jedwali, bila kujali nani aliliweka: majedwali ya kawaida kwenye paneli, usanidi uliohifadhiwa, jedwali alilolisanidi msaidizi, mauzo ya nje na majedwali kwenye hati. Usanidi unaotaja upangaji, jumla au kichwa chake unavihifadhi; kiwango kinajaza kilichobaki. Paneli inaonyesha sehemu zipi ziliwekwa na kiwango cha ofisi. Sera zinasafiri pamoja na faili la Default Policies pamoja na nyingine.

## Mambo ya kujua

- Usanidi unataja jedwali lake la chanzo na safu zake; haushikilii namba zozote. Namba zinasomwa kutoka modeli kila wakati.
- Orodha zisizo safu za vipengele (mikusanyiko ya kuta na hadithi ya vifaa) hazina mpangilio wala usafirishaji hapa.
- Msaidizi wa AI anaweza kufanya haya yote kwa niaba yako: angalia [Mruhusu msaidizi wa AI afanye kazi na modeli yako](topic:assistants).
