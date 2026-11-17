---
title: Jumlisha kiasi, orodhesha vipengele na panga nafasi
summary: Hesabu vipengele na ujumlishe urefu, maeneo, ujazo au nambari yoyote ya sifa, vikipangwa kwa sifa yoyote; orodhesha safu moja kwa kila kipengele; au panga nafasi kwa maeneo na ujazo wake. Kila kimoja hupakuliwa kama CSV.
keywords: kiasi, ukadiriaji wa kiasi, jumla, ratiba, orodha ya kiasi, boq, qto, csv, panga kwa, hesabu, urefu, eneo, ujazo, nafasi, vyumba, ratiba ya vyumba, ratiba ya maeneo, orodha ya vipengele
from: e2e7210c
---

## Utakachofanya

Pata jumla kutoka kwenye modeli: urefu wa kuta kwa ghorofa, idadi ya milango kwa aina, ujazo wa bamba kwa nyenzo, gharama ya kila kanda.

## Hatua

1. Fungua modeli ya IFC.
2. Fungua {{ui:Jumla za kiasi}} kwenye paneli ya kushoto.
3. Kwenye {{ui:Hesabu}}, chagua {{ui:Kila kipengele}} au vilivyochaguliwa tu.
4. Chini ya {{ui:Panga kwa}}, chagua sifa, kama {{ui:Darasa}}. Bofya {{ui:Ongeza kundi}} ili kugawanya zaidi, hadi mara tatu, kwa mfano kwa {{ui:Ghorofa}}.
5. Chini ya {{ui:Jumlisha}}, weka alama kwenye nambari za kujumlisha. Seti za kiasi za modeli zimewekwa alama tangu mwanzo.
6. Bofya {{ui:Pakua CSV}} ili kufungua jedwali kwenye lahajedwali.

## Utakachoona

- Safu moja kwa kila kundi, ikionyesha vipengele vilivyomo na kila jumla, pamoja na safu ya jumla.
- Vipengele visivyo na thamani vinahesabiwa lakini haviongezi chochote. Hilo likitokea, CSV huongeza safu ya "imeachwa" kando ya jumla ili uone vingapi.
- Nambari ziko katika vitengo vya faili yenyewe, kama faili inavyovihifadhi, mara nyingi milimita kwa urefu.

## Safu moja kwa kila kipengele, au nafasi

Badilisha {{ui:Onyesha}}:

- **Safu moja kwa kila kipengele**: kila kipengele kwenye safu yake, pamoja na sifa chini ya {{ui:Safu}} na nambari chini ya {{ui:Jumlisha}}. CSV huanza na GlobalId ya kila kipengele. Bofya thamani ya kwanza kwenye safu ili uchague kipengele hicho.
- **Nafasi**: kila chumba chenye nambari yake, jina, ghorofa, eneo na ujazo, pamoja na jumla zake. Maeneo na ujazo hutoka kwenye viwango vya nafasi kama faili inavyovitaja. Faili isipokuwa navyo, hupimwa kutoka umbo la nafasi kwa m² na m³ na kuonyeshwa kwa italiki; CSV inaonyesha kipi ni kipi.

## Ijayo

- [Tafuta vipengele kwa darasa, jina au sifa](topic:find)
- [Paka vipengele rangi kwa sifa](topic:color-by-property)

## Miundombinu (IFC 4.3)

Chagua **Miundombinu (IFC 4.3)** kwenye orodha ya mionekano ili kuona barabara, reli, madaraja na kazi za baharini zikijumlishwa kwa darasa na aina, pamoja na urefu, eneo na ujazo ambao faili yenyewe inataja. Kiasi ambacho faili haitaji huachwa tupu, kamwe hakihesabiwi. **Tuma viwango vya miundombinu kwa TakeoffCraft** huhifadhi faili ya `.quantities.json` ambayo TakeoffCraft hufungua kama viwango vyenye aina.
