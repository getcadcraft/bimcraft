---
title: Merkja frumefni sem yfirfarin eða staðfest á vettvangi
summary: Frumefni sem er lesið úr PDF-skrá eða skönnun er óstaðfest þar til þú yfirferð það. Merktu frumefni sem yfirfarin, eða sem staðfest á vettvangi (LOD 500) með hver mældi þau, hvenær og hvernig, og skilaðu líkani eins og smíðað var sem sýnir hvað er hvað.
keywords: óstaðfest, staðfest, yfirfarið, staðfest á vettvangi, eins og smíðað, as-built, lod 500, lokauppgjör, skil, mælt á vettvangi, málband, leysir, skönnun, mæling, núverandi bygging, breyting, merkja sem yfirfarið, staðfesting, stig 7
from: df35d908
---

## Það sem þú gerir

Fylgstu með því í líkaninu sem einhver hefur raunverulega skoðað. Frumefni hefur eitt af þremur merkjum, eða ekkert:

- **Óstaðfest**: forritið þekkti það úr PDF-skrá, skannaðri teikningu, raktri teikningu eða punktaskýjaskönnun. Enginn hefur yfirfarið það enn.
- **Yfirfarið**: einhver bar það saman við teikninguna sem það kemur úr.
- **Staðfest á vettvangi (LOD 500)**: einhver mældi það á staðnum. Hver, hvenær og hvernig er geymt með því.
- **Ekkert merki**: teiknað af einhverjum. Líkanið fullyrðir ekkert um það.

## Skref

1. Veldu eitt frumefni eða mörg (veggi, hurðir, glugga, rými, hvaða frumefni sem er).
2. Í {{ui:Properties}} opnaðu {{ui:Verification}}.
3. Skrifaðu hver yfirfór eða mældi það. Dagsetningin er í dag nema þú breytir henni.
4. Smelltu á {{ui:Mark as checked}}. Fyrir mælingu á staðnum velurðu hvernig það var mælt (málband, leysifjarlægðarmælir, skönnun, landmæling) og smellir á {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} og {{ui:Take the mark off}} afturkalla. Hver smellur er eitt skref sem þú getur afturkallað, fyrir allt valið.

Til að merkja val fljótt: {{ui:Tools}} › {{ui:Mark as checked}} (skrifað: `MARKCHECKED`) merkir það sem yfirfarið af þér, í dag.

## Það sem þú sérð

- Á grunnmyndinni hefur óstaðfest frumefni brotinn reit og „?“; staðfest á vettvangi hefur hakmerki. Afmerktu {{ui:Show verification marks in the plan}} í hlutanum {{ui:Audit}} til að fela þau.
- {{ui:Schedules}} › {{ui:Verification}} listar hvert merkt frumefni með hæð sinni, ástandi, hver, hvenær, hvernig og hvaðan það kom.
- Úttektin listar óstaðfest frumefni og telur staðfest á vettvangi sem LOD 500. Sjá [Úttekt á líkaninu](topic:audit-the-model).

## Úr skönnun

Þegar þú berð skönnun saman við líkanið merkir Merkja samsvarandi frumefni sem staðfest á vettvangi hvert frumefni sem skönnunin sá sem smíðað innan skekkjumarka, með aðferðinni „skönnun“ og skekkjumörkunum í athugasemdinni. Sjá [Bera skönnun saman við líkanið](topic:compare-scan-with-model).

:::warning
Sá samanburður parar kassa hvers frumefnis við skönnunarpunkta. Hann er ekki landmæling. Notaðu hann fyrir frumefni sem þú hefur líka skoðað.
:::

## Líkanið eins og smíðað og skilapakkinn

{{ui:Build the handover package}} á flipanum {{ui:Assets}} setur líkanið eins og smíðað í zip-skrána, með:

- yfirlýsingu í verkefninu um hversu mörg frumefni eru staðfest á vettvangi, yfirfarin, óstaðfest og án merkis;
- `as-built/verified-elements.csv`: hvert frumefni og rými með ástandi sínu, hver, hvenær og hvernig;
- `as-built/as-built-drawings.pdf`: teikningasettið eins og það er núna;
- breytingaskrá teikninga, þegar líkanið hefur gefið út sett.

Sjá [Eignir og viðhald](topic:assets-and-maintenance).

## Hvernig það er geymt í IFC

Hvert merkt frumefni ber eiginleikasafnið `CadCraft_Verification`: State, By, On, Method, Source, Note og LevelOfDevelopment (`LOD 500` meðan það er staðfest á vettvangi). Þetta eru venjulegir textaeiginleikar, svo önnur forrit birta þá, og Leit, Litur eftir eiginleika og merkjalistar geta notað þá. Yfirlýsingin um eins og smíðað er eigindasafnið `CadCraft_AsBuilt` á verkefninu. Frumefni án safnsins var ekki mælt á vettvangi.

## Næst

- [Veggir úr settum teikninga](topic:walls-from-plans)
- [Úttekt á líkaninu](topic:audit-the-model)
