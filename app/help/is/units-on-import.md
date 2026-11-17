---
title: Einingar við innflutning: skrá tilgreinir einingar sínar, eða spurt er fyrst
summary: Þegar skrá sem þú flytur inn tilgreinir einingar sínar notar BimCraft þær og segir frá því. Þegar hún gerir það ekki spyr BimCraft áður en nokkuð er sett og man svar þitt fyrir þá skrá.
keywords: einingar, innflutningur, opna, OBJ, STL, DWG, DXF, IFC, punktaský, safnaatriði, millimetrar, metrar, tommur, fet, mælikvarði, röng stærð, of stór, of lítil, 1000 sinnum, spyrja, munað
from: f044e9bc
---

## Það sem þú gerir

Flyttu inn skrá og gakktu úr skugga um að hún komi inn í réttri stærð.

## Skref

1. Opnaðu eða bættu við skránni eins og venjulega: {{ui:Open}}, {{ui:Files}} í Safninu, {{ui:Point clouds}}, eða Smíða › Úr teikningu.
2. Ef skráin tilgreinir einingar sínar er ekkert spurt. Stöðulínan segir hvaða einingar skráin tilgreinir.
3. Ef hún gerir það ekki birtist gluggi sem spyr um **einingar** skráarinnar. Veldu hvað ein eining í skránni er og smelltu á {{ui:Use these units}}. Ekkert er sett áður en þú svarar.
4. {{ui:Cancel}} (eða {{key:Esc}}) flytur ekkert inn.

## Hvaða skrár tilgreina einingar sínar

- **IFC**: tilgreinir lengdareiningu sína, og „Opnað“ segir hvaða. IFC-skrá sem tilgreinir enga er spurt um áður en hún opnast; svar þitt er skrifað í líkanið, svo skráin tilgreinir hana einu sinni þegar þú vistar.
- **DWG og DXF**: innsetningareiningar teikningarinnar. Teikning án þeirra er spurð (skrár í Safninu, Smíða › Úr teikningu, landslag úr hæðarlínum).
- **Punktalistar** fyrir landslag: tilgreina engar einingar. Spurt er.
- **Punktaský**: LAS og LAZ með hnitakerfi, E57, PTX og PLY tilgreina sínar. Spurt er um aðrar.
- **OBJ og STL**: tilgreina aldrei einingar. Spurt er.
- **glTF og GLB**: metrar, samkvæmt reglu sniðsins.
- **Myndir**: hafa enga stærð sjálfar. Mynd er löguð að sýninni og stærð hennar stillt með Mælikvarði eftir tveimur punktum. Stærðin sem þú gefur er munuð fyrir þá skrá: þegar hún er sett aftur inn kemur hún inn í þeirri stærð og stöðulínan segir það.
- **Punktaský-viðbótin**: spyr þegar þú smíðar ský sem skráin tilgreinir enga einingu fyrir, og merkir tölur skýsins í þeirri einingu sem það ber.

## Gott að vita

- Svarið er munað fyrir þá skrá (heiti, stærð og dagsetning) á þessari tölvu, í öllum CadCraft-forritum. Næst þegar sama skrá kemur inn er ekki spurt, og stöðulínan segir að munaðar einingar hafi verið notaðar.
- Til að vera spurt aftur: skipanavalmynd ({{key:Mod+K}}) › **Spyrja aftur um einingar innfluttra skráa**.
- Einingalisti sem innflutningur hefur þegar (Einingar í Safninu, Einingar í punktaskýjastikunni, Einingar teikningar í Smíða › Úr teikningu) breytir einingunum samt á eftir. Einingalisti landslagsverkfærisins er nú aðeins það sem spurningin byrjar á.
