---
title: Vifurushi vya mteja, ripoti za hatua na ulinganisho wa chaguo
summary: Tengeneza kifurushi cha mteja au ripoti ya hatua kutoka kwenye modeli, pamoja na chaguo za umbo la jengo zilizolinganishwa kwa eneo na gharama, maeneo ya sakafu, michoro pamoja na marekebisho yake, na historia ya masuala. Kila takwimu inahifadhi vipengele vilivyo nyuma yake.
keywords: kifurushi cha mteja, uwasilishaji, ripoti ya hatua, ripoti, ulinganisho wa chaguo, chaguo, linganisha chaguo, eneo na gharama, gharama kwa chaguo, bila kiwango, umbo, maeneo ya sakafu, orodha ya michoro, historia ya masuala, takwimu, takwimu zilizounganishwa
from: f6679bf5
---

## Utakachofanya

Tengeneza kifurushi cha mteja au ripoti ya hatua kutoka kwenye modeli ilivyo sasa, na linganisha chaguo za umbo zilizohifadhiwa kwa kando kwa eneo na gharama.

## Hatua

1. Kwenye paneli ya kushoto fungua **Kifurushi cha mteja na ripoti ya hatua**.
2. Chagua **Fungua katika Hati** karibu na Kifurushi cha mteja au Ripoti ya hatua. Hati inaonekana kwenye Hati kutoka kwenye modeli, ambako unaweza kubadilisha maandishi yake.
3. Kwenye hakikisho, bofya takwimu ili kuchagua vipengele vilivyo nyuma yake.
4. Chagua **Tengeneza kifurushi**. Zip moja inahifadhiwa: hati kama PDF, picha ya mwonekano wa 3D, na `figures.csv`, inayoorodhesha kila takwimu pamoja na GlobalIds za vipengele vyake.

## Sehemu

Unaweza kutumia hizi katika hati yoyote.

| Sehemu | Inachapisha nini |
|---|---|
| `{{stage}}` | Hatua ya mradi kutoka kwenye maelezo ya michoro. |
| `{{options}}` | Chaguo za umbo zilizohifadhiwa, kwa kando: sakafu, urefu, eneo la msingi, eneo jumla la sakafu, bahasha na gharama. |
| `{{areas}}` | Eneo la sakafu kwa kiwango, kutoka kwenye vyumba. |
| `{{sheets}}` | Karatasi pamoja na marekebisho ambayo kila moja imefikia na wakati ilipotolewa mara ya mwisho. |
| `{{issues}}` | Historia ya masuala na orodha ya mabadiliko ya michoro. |
| `{{changes}}` | Kilichobadilika tangu toleo la mwisho, karatasi kwa karatasi. |

## Gharama za chaguo zinavyopimwa

Gharama inatoka kwenye jedwali la bei la mradi wako pekee (Energy/Cost, gharama ya 5D). Hakuna kinachokadiriwa kwa ajili yako.

- Mstari wa bei hupima chaguo pale tu madarasa yake yanapotaja `IfcBuildingElementProxy`.
- Eneo la sakafu hupimwa na mstari ambao maneno yake yanataja matumizi ya chaguo, kama ofisi. Bila hilo, mstari wenye maneno gross floor area au building mass hutumika. Mstari wa m² hutumia eneo jumla la sakafu. Mstari wa m³ hutumia ujazo.
- Bahasha (mzunguko mara urefu) hupimwa na mstari wenye neno envelope au facade.
- Chaguo lisilo na mstari unaolingana linaonyesha **Hakuna kiwango**. Jumla inaonyeshwa pale tu kila sehemu iliyoombwa ina kiwango.

## Mambo ya kujua

- Weka chaguo kwa **Hifadhi kama chaguo** kwenye orodha ya umbo ya mpango wa chumba. Tazama Chaguo za umbo.
- PDF haiwezi kuchagua vipengele. Nje ya BimCraft, `figures.csv` hubeba kiungo kutoka kila takwimu hadi vipengele vyake.

## Bado havijajengwa

- Karatasi na mionekano iliyochorwa haiwekwi ndani ya hati. Kifurushi kina picha ya mwonekano wa 3D pekee.
