---
title: Hariri familia
summary: Badilisha vigezo, fomula na miili imara vya familia, onyesha sehemu kwa kigezo cha Ndiyo / Hapana, kata na unganisha miili, ipe viunganishi vya mabomba na mifereji, na uone matokeo yakichorwa kutoka IFC itakayohifadhiwa.
keywords: mhariri wa familia, hariri familia, kigezo, vigezo, fomula, mwonekano, ndiyo hapana, mwili imara, kisanduku, kutoa, kuzungusha, kupitisha, wasifu, upinde, boolean, kata, unganisha, tofauti, muungano, mpini, ndege ya kazi, mchoro wa awali, familia mpya, kiunganishi, bandari, kiunganishi cha bomba, kiunganishi cha mfereji, mfereji wa maji, usambazaji wa maji
from: 1ab31c10
---

## Fungua mhariri

Fungua familia (**Familia** ya kivinjari cha mradi, au {{ui:Build}} › {{ui:Families…}}) kisha ubofye {{ui:Edit the family}}. Kuanza kutoka mwanzo, bofya {{ui:New family}}: ipe jina, sema ni nini (mlango, dirisha, samani, kifaa au kitu kingine) na, kwa mlango au dirisha, ni familia gani ya kuanzia alama yake ya mpango na mpini wake vinatoka. Mhariri unafunguka kwenye familia yenye vigezo vichache na mwili mmoja imara.

Kuhariri familia ya kuanzia huweka mabadiliko yako kwenye modeli hii pekee. Modeli nyingine zinaendelea kuwa nayo kama ilivyo.

Hakuna kinachobadilika kwenye modeli hadi ubofye {{ui:Save the family}}. Mhariri una kutendua na kurudia yake (vitufe vya mishale kando ya jina, au {{key:Mod+Z}} na {{key:Mod+Y}}); kuhifadhi ni hatua moja kwenye kutendua kwa modeli.

## Vigezo

Kichupo cha {{ui:Parameters}} kinaorodhesha vigezo vya familia: jina, aina na thamani ya msingi. Aina ni: **Urefu** (milimita), **Pembe** (digrii), **Namba**, **Namba kamili**, **Ndiyo / Hapana**, **Kalamu** (1–16), na tatu zinazoshikilia maneno badala ya namba: **Maandishi**, **Nyenzo** (mojawapo ya nyenzo za mradi) na **Kujaza** (kujaza kwa mpango). Maneno hayatumiki kwenye fomula; yanapaka rangi mwili imara (**Nyenzo** yake), yanajaza sehemu ya alama, au yanachapishwa kama `{Name}` ndani ya maandishi ya alama. Kisanduku cha **Kwa kila kipengele** hufanya kigezo kiwe kitu ambacho kila kipengele kilichowekwa hukiweka chenyewe badala ya ukubwa wake.

- **Fomula** inafanya kigezo kufuata vingine, kwa mfano `Width / 30` au `if(Width > 1200, 2, 1)`. Urefu kwenye fomula ni milimita, au andika kitengo: `3'`, `6in`, `50cm`.
- Kubadilisha jina la kigezo kunabadilisha jina lake kwenye kila fomula na sehemu inayokitumia. Kigezo bado kinachotumika hakiwezi kuondolewa.
- **Nyenzo** ya mwili imara inachukua rangi ya nyenzo ya mradi (au ya kigezo cha Nyenzo), **Inaonyeshwa kwa** huificha kwenye viwango vya maelezo vya chini, na **Rudia** hutengeneza nakala: idadi (namba au namba kamili ya kigezo, 1 hadi 200) na hatua kati yake kwenye x, y na z. Mwili unaorudiwa ni safu ya mbao, baa au matundu; ukitumika kwenye kukata, nakala hukatwa pamoja.
- Mlango au dirisha la familia pia hupata majina mawili kutoka ukutani kwake: `WallThickness` na `Face` (1 au −1, upande ambao mlango unafungukia).

## Miili imara

Kichupo cha {{ui:Solids}} kinaorodhesha miili imara. Ongeza sanduku, kutoa, kuzungusha au kupitisha:

| Mwili imara | Unachoweka |
|---|---|
| Sanduku | pembe zake mbili: x0 hadi x1, y0 hadi y1, z0 hadi z1 |
| Kutoa | wasifu kwenye ndege ya kazi (mpango, mbele au kando), mahali ndege ilipo, na kina |
| Kuzungusha | wasifu, mhimili kwenye ndege, na pembe hadi 360° |
| Kupitisha | njia ya nukta na radius (fimbo au reli) |

Kila nambari inaweza kuwa namba iliyoandikwa au usemi wa vigezo. Kila mwili imara una rangi na **Inaonyeshwa wakati**: iache tupu ili ionekane kila wakati, au taja kigezo cha Ndiyo / Hapana (au andika ulinganisho kama `Shelves >= 3`) ili ionekane wakati huo pekee. Hicho ni kigezo cha mwonekano.

### Chora wasifu

Wasifu wa kutoa au kuzungusha unachorwa kwenye ndege yake ya kazi chini ya onyesho la kuchungulia:

- Bofya kwenye karatasi ili kuongeza nukta baada ya ile iliyochaguliwa.
- Buruta nukta ili kuisogeza. Nukta hujibandika kwenye gridi; shikilia {{key:Shift}} ili kuziweka kwa uhuru.
- Bofya mraba mdogo kwenye sehemu ili kuongeza nukta hapo. {{key:Shift}}+bofya huifanya sehemu hiyo kuwa upinde (bofya tena kwa upande mwingine, kisha mstari ulionyooka).
- Bofya mara mbili nukta ili kuiondoa.

Nukta zilizo tupu zinawekwa na vigezo: zibadilishe kwenye jedwali, si kwa kuburuta.

## Booleans

Kichupo cha {{ui:Booleans}} hukata mwili wa pili kutoka wa kwanza, au kuziunganisha. Matokeo ya Boolean yanaweza kukatwa au kuunganishwa tena. Mwili unaotumika kwenye Boolean unachorwa kama sehemu yake pekee.

Mwili wa pili unapofichwa na kigezo chake cha Ndiyo / Hapana, cha kwanza kinabaki kama kilivyo; cha kwanza kikifichwa, matokeo yanafichwa.

## Alama ya mpango

Kichupo cha {{ui:Plan symbol}} huchora kile mpango unachoonyesha kwa familia hii badala ya kata ya miili yake imara: mistari, mistatili, duara, upinde, poligoni na maandishi, katika shoka zake yenyewe. Kila sehemu ina **kalamu** (1–16, usemi au kigezo cha Kalamu), **kujaza** (hakuna, imara, mistari ya ulalo, iliyovuka, zege, insulesheni, ardhi, au kigezo cha Kujaza), **inaonyeshwa kwa** usemi, **safu ya kukata** kwa milimita juu ya msingi wake (sehemu inachorwa kwa uzito kamili kata ya mpango ikiwa ndani yake, nyembamba chini yake, na yenye mistari juu yake: kabati lililo juu ya kata linaonyeshwa kwa mistari), kiwango cha maelezo na kurudia. Maandishi yanaweza kutaja vigezo kama `{Name}`. **Mpango unaonyesha: Kata ya miili imara** huweka mpango ukikata miili huku alama ikibaki kwenye familia. Programu nyingine husoma alama kama alama ya msingi ya familia (mistari na maumbo; maandishi yanabaki kwenye BimCraft).

## Familia zilizomo

Kichupo cha {{ui:Families inside}} huweka familia nyingine ndani ya hii: mguu katika meza, mpini kwenye mlango. Chagua familia, kisha mahali inapokwenda (x, y, z), inageuzwa kwa kiasi gani (robo zamu tu: 0, 90, 180, 270), inaonyeshwa lini, na thamani zake, kila moja kwenye mstari wake kama `Height = Height - 40`. Kuhifadhi familia ya ndani kunachora hii tena; familia inayoshikiliwa na nyingine haiwezi kufutwa; familia haiwezi kujishikilia yenyewe, hata kupitia nyingine, na kiota kinaishia kwenye ngazi nne.

## Sehemu za kuvuta

Sehemu ya kuvuta ni nukta au ukingo unaoburutwa ili kubadilisha kigezo. Kwenye kichupo cha {{ui:Hotspots}} ongeza moja, chagua mhimili wa kuburuta na kigezo cha namba inachobadilisha, kisha andika nafasi yake kwa usemi uleule wa miili imara. Kwenye onyesho la kuchungulia, chagua **Hotspots** chini ya mipini ili kuziburuta. Kwenye kipengele kilichowekwa kwenye mpango (kichague kwa {{ui:Select}}), sehemu za kuvuta za x na y zinaonekana kama vishikio; buruta moja na kipengele kinachukua ukubwa unaoweka sehemu hiyo hapo, kupitia fomula zozote zilizo kati yao; Kutendua mara moja kunakirudisha. Sehemu ya kuvuta haiwezi kubadilisha kigezo kinachoendeshwa, Ndiyo / Hapana, wala neno.

Kwenye mwonekano wa 3D, sehemu zile zile za kuvuta zinaonekana kama vishikio kwenye kipengele kilichochaguliwa, na zile za juu-chini (mhimili z) pia zinaonekana hapo, ambazo mpango hauwezi kuchora. Chagua kipengele, buruta kishikio kwenye mhimili wake kisha uachie: kipengele kinachukua ukubwa unaoweka sehemu hiyo hapo, kama hatua moja ya kutendua. Vishikio vimefichwa wakati sanduku la sehemu limewashwa, kwa kuwa linatumia vishikio hivyo hivyo.

## Viunganishi

Familia zilizowekwa sakafuni (samani, vifaa na nyingine) zina kichupo cha {{ui:Connectors}}: nukta ambapo bomba au mfereji hujiunga na kipengele, kama kwenye bomba la maji na mfereji wa beseni. Bofya {{ui:Add a connector}} na uweke:

- **Aina**: bomba au mfereji, na **Mfumo** wake (maji baridi, mfereji wa maji taka, hewa ya usambazaji…).
- **x**, **y** na **z**: zilipo, kwenye shoka za familia yenyewe. Kama namba za mwili imara, kila moja inaweza kuwa namba au fomula ya vigezo, kwa hiyo kiunganishi kinasogea na ukubwa.
- **Njia ya kutoka**: mwelekeo ambao bomba au mfereji unatoka nao, kando ya mojawapo ya shoka za familia (mfereji chini ya beseni unaenda **Chini**).
- **Ukubwa (mm)**: ukubwa wa kawaida wa bomba (DN) au kipenyo cha mfereji wa duara.
- **Mtiririko**: **Ndani** kwa kiunganishi kinachoingiza maji (bomba la maji), **Nje** kwa kinachotoa maji.

Onyesho la kuchungulia linachora kila kiunganishi kama pete yenye mshale wa njia ya kutoka. Milango na madirisha havina viunganishi.

Kwa kifaa cha mabomba, chagua kifaa kipi ni chini ya **Kifaa cha mabomba** (choo, sinki ya kunawa, sinki ya jikoni, bafu, beseni la kufulia). Familia za kuanzia za vifaa tayari zinasema hivyo.

Kila kipengele kilichowekwa kutoka familia hupata viunganishi vyake kama bandari kwenye faili ya IFC, na hutengenezwa upya kipengele kinapobadilisha ukubwa au familia inapohifadhiwa. Programu zinazosoma mifumo ya IFC zinaona bomba au mfereji wa kila kipengele unakoenda.

## Onyesho la kuchungulia na mipini yake

Onyesho la kuchungulia ni familia iliyoandikwa kama IFC, kwa msimbo uleule unaoihifadhi kwenye modeli, kisha inachorwa tena. Unachokiona ndicho programu nyingine zinachopata. Chini yake, **Ukubwa unaoonyeshwa** huweka thamani za vigezo ambazo onyesho linatumia.

**Mipini** ni nukta kwenye onyesho: **Ukubwa** unaonyesha mpini kwa Upana, Kina na Urefu; **Mwili uliochaguliwa** unaonyesha mmoja kwenye kila uso wa mwili uliochaguliwa. Buruta mpini:

- kwenye uso unaowekwa na kigezo, ukubwa unaoonyeshwa unabadilika (fomula za familia zinabaki);
- kwenye uso unaowekwa na namba iliyoandikwa, namba inabadilika.

## Kuhifadhi

{{ui:Save the family}} inakagua familia, kisha inachora tena kila ukubwa wake na kutengeneza upya kila kipengele chake, kama hatua moja unayoweza kutendua. Ikiwa ukubwa hauwezi kuchorwa pamoja na mabadiliko (kwa mfano mwili ungekosa upana kwenye ukubwa huo), hakuna kinachohifadhiwa na mhariri unasema ni ukubwa upi.

Ikiwa mtu mwingine alihifadhi familia hiyo hiyo wakati mhariri wako uko wazi (katika kikao cha Live TeamWork, au dirisha lingine), {{ui:Save the family}} inakataa na kusema hivyo badala ya kubadilisha mabadiliko yao kwa yako. Funga mhariri, fungua familia tena ili uone mabadiliko yao, kisha fanya yako tena.

:::note
Jiometri imehifadhiwa kama miili imara ya IFC yenyewe: kutoa, kuzungusha, diski zilizopitishwa, na matokeo ya Boolean. Hakuna kinachogeuzwa kuwa orodha ya pembetatu, kwa hiyo faili zinabaki ndogo na programu nyingine zinaweza kusoma maumbo kama maumbo. Wasifu wenye upinde unahifadhiwa na upinde kwenye IFC4; IFC2X3 haina sehemu za upinde kwenye wasifu, kwa hiyo huko upinde huhifadhiwa kama vipande vifupi vilivyonyooka.
:::

Angalia pia [Familia na ukubwa wake](topic:families).
