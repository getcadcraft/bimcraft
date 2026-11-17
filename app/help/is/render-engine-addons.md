---
title: Bæta við myndgerðarvél með viðbót
summary: Hvað viðbót getur bætt við vélalistann í myndgerðarglugganum, heimildin sem hún þarf til að keyra forrit, og hvað Studio athugar og spyr um.
keywords: viðbót, addon, vél, myndgerðarvél, þróandi, engine.run, heimild, forrit, handrit, undirritað, studio, api
from: 06295376
---

Viðbót (Stillingar › Viðbætur) getur bætt vél í vélalistann í {{ui:Render}}. Allur textinn fyrir höfunda viðbóta er í kafla 16 í forskriftinni fyrir viðbætur; í stuttu máli:

- Viðbótin skráir vél með auðkenni sem byrjar á hennar eigin, heiti, valfrjálsum stillingum og **annaðhvort** forriti sem keyrt er **eða** falli í JavaScript sem teiknar myndina.
- Vél sem keyrir forrit þarf **`engine.run`** heimildina, sem birtist áður en viðbótin er sett upp og í Stillingum. Hún keyrir aðeins í Studio; í vafranum birtist hún sem skrá til að vista.
- Viðbótin nefnir forritið (venjulegt skráarheiti, aldrei skel), handrit sem er **inni í undirritaðri viðbótinni**, og viðföng úr staðgenglum og venjulegum orðum. Studio finnur forritið eða biður þig um að benda á það einu sinni.
- Í fyrsta skipti sem viðbót keyrir forrit **spyr Studio þig í sínum eigin glugga**: hvaða viðbót, hvaða forrit, og að handrit geti gert allt sem forritið getur. Leyfðu það aðeins fyrir viðbót sem þú treystir. Svar þitt er munað fyrir þá viðbót og það forrit.
- Pakkinn (senan sem USD og stillingaskrá, með glTF-skrá þegar viðbótin biður um hana) og handrit viðbótarinnar fara í nýja, tímabundna möppu, forritið keyrir þar, og myndin skilar sér merkt með heiti vélar viðbótarinnar.

:::note
Viðbætur geta aðeins bætt við myndgerðarvélum frá viðbóta-API 1.4. Unnið dæmi um opinn skipanalínumyndgerðarforrit er í eigin safni; það hefur ekki enn verið keyrt í þeirri myndgerðarvél.
:::
