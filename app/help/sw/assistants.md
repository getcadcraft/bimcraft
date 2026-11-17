---
title: Ruhusu msaidizi wa AI kufanya kazi na modeli yako
summary: Washa visaidizi kwenye Mipangilio ili msaidizi kwenye kompyuta yako aweze kutafuta vipengele, kusoma sifa zao, kuvitenga kwenye mwonekano na kuchora kuta, milango, madirisha, sakafu, viwango na gridi, kupitia CadCraft Studio. Umezimwa hadi uwashe.
keywords: ai, msaidizi, mcp, script, uendeshaji otomatiki, studio, tafuta vipengele, tenga, sifa, ruhusa, tenganisha, shughuli, chora kuta, ongeza milango, ongeza madirisha, viwango, gridi, sakafu, tendua, hifadhi, mstari wa amri, cli, bila dirisha, tumia na visaidizi vya ai
from: c5ee595b
---

## Utajifunza nini

Jinsi ya kuruhusu msaidizi wa AI (msaidizi yeyote anayezungumza MCP) kuangalia modeli ya IFC uliyo nayo wazi na kuchora ndani yake, kile anachoweza na asichoweza kufanya, na jinsi ya kumzuia.

## Msaidizi anachoweza kufanya BimCraft

| Anaomba | Kinachotokea | Inahitaji |
|---|---|---|
| Tafuta vipengele | Anapata orodha ya vipengele kwa darasa, ghorofa, jina au thamani ya sifa, kama **Tafuta** inavyofanya | Soma |
| Soma sifa | Anapata sifa, aina, seti za sifa na wingi wa kipengele kimoja, kama **Sifa** inavyoonyesha | Soma |
| Eleza modeli, orodhesha kuta | Anapata viwango, kuta, milango, madirisha, vyumba, sakafu, gridi na nguzo, pamoja na ncha, aina na urefu wa kila ukuta | Soma |
| Tenga, fanya uwazi, ficha au onyesha | Mwonekano wa 3D unabadilika kama ungetumia menyu ya {{ui:Show}} | Badilisha mwonekano na chora |
| Chora kuta, milango, madirisha, sakafu, viwango au mistari ya gridi | Modeli inabadilika kama ungetumia zana za {{ui:Draw}}: kuta zinaungana, vyumba, sakafu na paa zinafuata | Badilisha mwonekano na chora |
| Badilisha jina au thamani ya sifa | Jina, Maelezo, Object type au Tag ya kipengele kimoja, au thamani ya sifa moja. Thamani inayoshirikiwa na vipengele vingine inanakiliwa kwanza kwa ajili yake; thamani ya aina yake hubadilika tu msaidizi anaposema hivyo, kwa sababu kila kipengele cha aina hiyo kinafuata | Badilisha mwonekano na chora |
| Sogeza, futa, badilisha kuta, milango na madirisha | Vipengele husogea au kufutwa pamoja na vinavyovishikilia; kuta zilizochorwa kwa zana za {{ui:Draw}} hubadilika kwa ncha au aina yake, milango na madirisha kwa mahali, ukubwa au aina yake, na vyumba na viungio vinafuata | Badilisha mwonekano na chora |
| Sanidi, panga na usome jedwali | "Jedwali la milango kwa sakafu, pamoja na kiwango cha moto na vifaa vya milango": msaidizi anataja jedwali, safu zake (sifa au lebo inakuwa safu) na upangaji wake; BimCraft inalijaza kutoka modeli na kulipanga, ikichukua kisichosemwa na msaidizi kutoka kiwango cha ofisi. Usanidi unajiunga na orodha yako ya {{ui:Schedules}}. Kila mstari anaopata unataja vipengele vyake, ili aweze kuvichagua | Soma kusoma; Badilisha mwonekano na chora kuhifadhi usanidi |
| Hamisha jedwali | CSV, Excel, au maandishi yaliyotenganishwa kwa tabo ili kubandika kwenye Google Sheets (hakuna kitu kinachotumwa kwa Google) | Hamisha |
| Soma na weka umaliziaji wa vyumba | Aina za umaliziaji, umaliziaji wa sakafu, ukuta na dari wa kila chumba, kanda; maeneo, idadi ya vigae na ujazo wa msingi kisha vinatoka kwenye majedwali ya umaliziaji | Soma; Badilisha mwonekano na chora kuweka |
| Chagua vipengele, tendua hatua zake yenyewe | Vipengele vinachaguliwa kwenye mwonekano; hatua yake ya mwisho inaondolewa | Badilisha mwonekano na chora |
| Hifadhi | Faili mpya ya IFC yenye mabadiliko yote, kama {{ui:Save as IFC}} inavyotengeneza (ya asili haibadilishwi kamwe) | Hifadhi |
| Hamisha USD | Modeli zilizo wazi kama OpenUSD (.usda, .usdc au .usdz), kama kitufe cha {{ui:USD}} kwenye upau wa zana kinavyoandika | Hamisha |
| Tengeneza picha, endesha foleni ya utoaji | Picha ya mwonekano wa 3D, kama kisanduku cha {{ui:Render}} kinavyoitengeneza kwa mipangilio yako ya Render isipokuwa ikiomba nyingine, au picha za ubora wa juu zilizoongezwa kwenye foleni ya kisanduku na kutolewa moja baada ya nyingine (foleni inahitaji WebGPU). Hakuna kinachobadilika kwenye modeli ([Tengeneza picha](topic:render)) | Hamisha |

Kila mabadiliko ambayo msaidizi anafanya ni hatua moja kwenye **Mabadiliko**, yenye jina "Msaidizi: …" (kwa mfano "Msaidizi: ongeza kuta 4"), kwa hiyo {{key:Mod+Z}} inatendua kitendo chake chote, na unaona hatua ilikuwa ya nani. Kwenye dirisha lenyewe hawezi kufungua faili: wewe unafungua modeli; anafanya kazi na iliyo wazi.

## Iwashe

Visaidizi vinafikia BimCraft kupitia CadCraft Studio kwenye kompyuta yako; kivinjari cha kawaida hakina njia ya kuingia.

1. Fungua {{ui:Settings}} kisha uchague kichupo cha **BimCraft**.
2. Chini ya **Visaidizi**, weka alama kwenye **Ruhusu visaidizi vya AI na script kutumia BimCraft**.
3. **Soma** imewekwa alama kwa ajili yako. Weka alama kwenye **Badilisha mwonekano na chora** pia ikiwa msaidizi anaruhusiwa kutenga na kuficha vipengele na kuchora, na kwenye **Hifadhi** ikiwa anaruhusiwa kuhifadhi modeli kama faili mpya.
4. Unganisha msaidizi kwenye Studio (Studio inaonyesha anwani na mipangilio ya kubandika ndani yake).

## Msaidizi akiwa ameunganishwa

Ujumbe juu ya paneli ya kulia unasema msaidizi aliyeunganishwa ni nani na anachoweza kufanya. Bofya {{ui:Disconnect}} ili kumaliza kikao chake mara moja; ni lazima aunganishe tena ili aendelee.

**Shughuli**, chini ya **Visaidizi** kwenye Mipangilio, inaorodhesha kila wito alioufanya msaidizi, mpya zaidi kwanza, pamoja na kama ulifanya kazi.

:::tip
Uliza kwa maneno ya kawaida, kwa mfano "tenga kuta za nje kwenye Level 1", "ni milango ipi isiyo na kiwango cha moto?" au "chora chumba cha mita 6 kwa 4 kwenye Level 1 chenye mlango kwenye ukuta wa kusini". Msaidizi hutafuta vipengele na kuvionyesha kwenye mwonekano wako, au kuvichora.
:::

## Bila dirisha: script na mstari wa amri

Zana zile zile za kuchora hufanya kazi kwenye faili za IFC katika folda unazotaja, bila dirisha lolote wazi: seva ya MCP ya CadCraft na mstari wa amri vinaweza kuanzisha jengo jipya au kufungua faili ya IFC, kulielezea, kuongeza kuta, milango, madirisha, sakafu, viwango na gridi, kutendua, na kulihifadhi kama faili mpya ya `.ifc`. Wewe unaamua ni folda zipi inaweza kutumia na kama inaweza kubadilisha au kuhifadhi chochote.

## Izima

Ondoa alama kwenye **Ruhusu visaidizi vya AI na script kutumia BimCraft**. Kila msaidizi anakatiwa mara moja, na mpangilio unahifadhiwa kwa wakati ujao.

## Tazama pia

- [Mapishi kwa visaidizi vya AI](common:assistants-recipes): mifano iliyokamilika, kila moja pamoja na zana inazoita.
- [Tafuta vipengele kwa darasa, jina au sifa](topic:find)
- [Ficha, tenga na fanya vipengele viwe wazi](topic:hide-and-isolate)
- [Mipangilio ya BimCraft](topic:settings)
