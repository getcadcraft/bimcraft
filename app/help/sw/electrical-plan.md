---
title: Mpango wa umeme
summary: Weka soketi, swichi, taa, vihisi, visanduku vya makutano na paneli kwenye mpango kwa alama zile zile za Programu-jalizi ya Umeme ya CadCraft, unganisha swichi na taa wanazowasha, na orodhesha vifaa na saketi kwenye majedwali.
keywords: umeme, mpango wa umeme, soketi, kipokezi, duplex, swichi, njia tatu, dimmer, taa, taa ya dari, taa iliyozama, taa ya chini, kihisi cha mwendo, kisanduku cha makutano, paneli, bodi ya usambazaji, saketi, mzigo, wati, ampea, mguu wa swichi, jedwali la vifaa, jedwali la paneli
from: f7de1947
---

## Utakachofanya

Chora mpango wa umeme wa nyumba kwenye modeli: soketi, swichi na paneli kwenye kuta, taa na vihisi kwenye dari. Kila kifaa ni kipengele halisi cha umeme kwenye faili ya IFC, chenye lebo, saketi na mzigo wake, na swichi hukumbuka taa zinazowasha.

## Weka vifaa

1. Kwenye kiwango, fungua {{ui:Build}} kisha uchague {{ui:Electrical}}.
2. Chagua kifaa: soketi (nguvu, data, simu, sauti na picha), swichi na vihisi (pamoja na kidhibiti joto na kipima muda), taa, vigunduzi na kengele, kisanduku cha makutano, paneli au paneli ndogo.
3. Andika **Saketi** ukiijua (jina lolote: 1, 2, A-3). Acha **Urefu wa kuweka** tupu ili kupata urefu wa kawaida wa kifaa hicho.
4. Bofya kwenye mpango. Soketi, swichi na paneli huwekwa kwenye uso wa ukuta ulio karibu, zikielekea ndani ya chumba; taa, vihisi na visanduku vya makutano huwekwa kwenye dari mahali unapobofya.

Vifaa hupewa lebo unapoviweka: **R** kwa soketi, **S** kwa swichi, **L** kwa taa, **M** kwa vihisi vya mwendo, **J** kwa visanduku vya makutano, **P** kwa paneli. Vifaa vilivyo ukutani husogea nao unaposogeza ukuta.

Unapendelea kuvinjari kwa picha? Fungua **Palette ya alama** kutoka {{ui:Build}} ili kutafuta kifaa kwa jina, weka nyota kwenye unavyotumia, kisha kiweke kwa bofya moja: angalia [Palette ya alama](topic:symbol-palette).

## Unganisha swichi na taa

1. Chagua swichi (au kihisi cha mwendo), kisha ubofye **Unganisha taa** katika {{ui:Properties}}.
2. Bofya kila taa inayowashwa nayo. Bofya tena taa iliyounganishwa ili kuiondoa.
3. Bonyeza {{key:Enter}} au ubofye **Imekamilika**.

Mpango unachora mstari wenye vitone kutoka kwenye swichi hadi kila taa yake. {{ui:Properties}} ya taa inaonyesha swichi zinazoiwasha.

## Chumba ambamo kifaa kimo

Kila kifaa kinajua chumba kilichomo. Kifaa cha ukutani kiko kwenye chumba kinachoelekea; kifaa cha dari kiko kwenye chumba kilicho chini yake. {{ui:Properties}} inaonyesha **Chumba**, na jedwali la **Vifaa vya umeme** lina safu ya **Chumba** (namba na jina, kama 101 Jikoni).

Kinasasishwa kila wakati: badilisha jina au namba ya chumba, sogeza kifaa, au sogeza ukuta, na chumba hufuata katika hatua hiyo hiyo. Kifaa kilicho upande wa nje wa jengo, au katika nafasi isiyo chumba, kinasema hakiko kwenye chumba.

Chumba pia kimeandikwa kwenye faili, katika seti ya sifa ya kifaa `CadCraft_Location` (Room, RoomNumber, RoomName), ili Tafuta, Pakaa rangi kwa sifa na jedwali la lebo viweze kukitumia, na programu nyingine pia iweze. Alama za mpango na vipengele vilivyounganishwa na alama hupata seti hiyo hiyo; angalia [Palette ya alama](topic:symbol-palette).

## Acha msaidizi wako aweke vifaa

Ukiwa na msaidizi aliyeunganishwa (Mipangilio › Wasaidizi, pamoja na ruhusa ya kuhariri), unaweza kuomba vifaa kwa maneno: "weka soketi mbili kila 2 m kando ya kuta za sebule, 300 mm juu, kwenye saketi 3", au "ongeza taa ya dari pamoja na swichi yake karibu na mlango". Msaidizi hutumia zana tano: `devices_add`, `device_change`, `lights_set`, `devices_delete` na `devices_list`. Zinatengeneza vifaa vile vile ambavyo zana ya Umeme hutengeneza, kwenye kuta zile zile na zenye lebo, saketi, mizigo na urefu uleule, na kila wito ni hatua moja ya kutendua.

Kifaa hakipewi aina ambayo zana ya Umeme haina kamwe: aina isiyojulikana inakataliwa na msaidizi hupewa orodha. Soketi au swichi lazima iwe ndani ya 600 mm kutoka uso wa ukuta, kama kubofya, la sivyo wito unakataliwa na hakuna kilichowekwa. Urefu wa msingi uko kwa milimita: 300 kwa soketi, 1100 kwa swichi; kifaa cha dari hutundikwa kutoka dari.

## Badilisha na orodhesha

Chagua kifaa ili kubadilisha lebo, saketi, mzigo (wati) na urefu wa kuweka. Chagua vingi ili kuviweka vyote kwenye saketi moja kwa wakati mmoja. Bonyeza {{key:Delete}} ili kuondoa kimoja; taa iliyofutwa huondolewa kwenye swichi zake.

Katika {{ui:Schedules}} chagua **Vifaa vya umeme** kwa kila kifaa chenye kiwango chake, saketi, mzigo, urefu na taa ambazo kila swichi huwasha, au **Saketi** kwa vifaa vya kila saketi, jumla ya mzigo na mkondo. Zote mbili pia ziko kwenye karatasi ya majedwali ya seti ya michoro: angalia [Miinuko, sehemu za mkato na karatasi](topic:sheets).

:::note
Urefu wa kuweka na mizigo ni thamani za msingi za upangaji (soketi 16" juu na 200 W, swichi 48", taa ya dari 60 W), si muundo wa mwisho: fundi umeme au mhandisi hupanga saketi na kukagua kanuni.
:::

:::tip
Alama ni zile ambazo Programu-jalizi ya Umeme ya CadCraft huchora kwenye michoro ya usakinishaji, kwa hiyo mpango kutoka programu yoyote unasomeka vile vile.
:::
