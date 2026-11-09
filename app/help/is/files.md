---
title: Skrár sem BimCraft opnar og vistar
summary: Hvert snið BimCraft opnar, hvað það geymir, hvað það vistar, hvar vistaðar skrár enda og hvað breytist milli vafra og án nettengingar.
keywords: snið, opna, vista, flytja út, sækja, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, hlaða upp, friðhelgi, skráarstærð
from: a7275dbf
---

BimCraft les skrár á tölvunni þinni, í vafraflipanum. **Engu er hlaðið upp** til CadCraft eða neins annars. Þegar þú vistar afhendir BimCraft vafranum nýja skrá til niðurhals; hún skrifar aldrei yfir skrá sem þú opnaðir.

## Það sem það opnar

| Snið | Skráarendingar | Það sem þú færð |
|---|---|---|
| IFC | `.ifc` | Líkanið í þrívídd, hæðir, fjöldi hluta og eiginleikar hvers hluta. Heiti, merki og stök eiginleikagildi má breyta. |
| Verkefnis- og fjölskylduskrár | `.rvt` `.rfa` `.rte` `.rft` | Skráarspjald: útgáfa, smíð, samvinnustilling, verkupplýsingar, fjölskylduviðföng, tengdar skrár og forskoðunarmynd. Engin þrívídd. |
| DWG | `.dwg` | Teikningin í 2D: líkanrými, hvert blað, lög, tengdar teikningar, myndir og prentsýn. Líkanrými í þrívídd líka. Útgáfur frá AutoCAD 2000 til 2018 eru þær sem eru prófaðar. |
| DXF | `.dxf` | Sama og DWG. |
| STEP | `.step` `.stp` | Hluti, búnaður eða líkan frá birgja í þrívídd (AP203, AP214, AP242): hver fasti hluti verður einn hluti (byggingarhluta-staðgengill) í litlu IFC-líkani á einni hæð, lesinn sem þríhyrningar í réttri stærð; samsetning með hverjum hluta þar sem skráin setur hann. Eftir það virkar það eins og hvert annað IFC: eiginleikar, sneiðmyndir, mæling, vista sem IFC. Litir og samsetningartréð eru ekki lesin. |
| Punktaský | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skönnunin í þrívíddarsýninni, við hlið líkans eða ein sér: sjá [Sýna punktaský við hlið líkans](topic:point-clouds). |
| Verkefnapakki | `.ccbundle.zip` | Líkanið ásamt sýnum, útlitum og eiginleikahópum: sjá [Opna verkefnapakka](topic:open-project-bundle). |
| Mappa | hvaða sem er | Skýrsla um hvert líkan, teikningu og verkefnapakka í henni. Hvert IFC-líkan, líkan, teikning eða pakki í skýrslunni opnast með einum smelli. |

[Það sem BimCraft les úr hverju sniði](topic:file-formats) fer í smáatriði.

BimCraft ákveður hvað skrá er með því að skoða fyrstu bæti hennar en ekki aðeins heitið, svo verkefnaskrá með óvenjulega viðbót opnast samt sem skráarspjald.

### Ekki opnað

- `.ifczip` og `.ifcxml`: BimCraft segir: „.ifczip er ekki stutt enn. Vistaðu eða fluttu líkanið út sem venjulega .ifc-skrá.“ Taktu `.ifczip` úr þjöppun (hún inniheldur venjulega `.ifc`) eða fluttu út aftur sem venjulegt IFC.
- DGN-teikningar eru skráðar í skýrslu möppu en opnast ekki.
- PDF-skjöl, myndir og skrifstofuskrár opnast ekki ein sér. Myndir eru notaðar sem myndir inni í DWG, og {{ui:Smíð}} › {{ui:Úr teikningu…}} breytir síðum PDF-skjals eða skanna í veggi: sjá [Veggir úr teikningasetti](topic:walls-from-plans).

## Það sem það vistar

| Þú smellir á | Þú færð | Hvar |
|---|---|---|
| {{ui:Vista sem IFC}} | Nýja IFC-skrá með breytingunum þínum, nefnda „*upprunalegt heiti* (edited).ifc“ | Niðurhalsmöppu vafrans þíns |
| {{ui:Sækja CSV}} í búnaðarlistanum | CSV-skrá með atriðunum á listanum, nefnda „*heiti teikningar* equipment.csv“ | Niðurhalsmöppu vafrans þíns |

Annað er vistað þar sem það er búið til, hvert í sínu efni: {{ui:USD}} ([Flytja líkanið út sem USD](topic:usd)), {{ui:Collada}} ([Flytja líkanið út sem Collada eða fyrir Google Earth](topic:collada): .dae og .kmz fyrir Google Earth), glb-skráin fyrir {{ui:Fyrir myndgerð}}, myndgerðar myndir, blöð og grunnmyndir sem PDF, áætlanir og listar sem CSV, BCF-mál, COBie-töflureikni, fjölskylduskrár og skráðar skannanir sem LAS eða E57. BimCraft vistar ekki DWG-, DXF- eða verkefnaskrár og breytir aldrei skrám sem þú opnaðir.

:::chromium
Chrome og Edge vista niðurhöl í möppuna sem er stillt í stillingunum, venjulega Niðurhal. Til að vera spurður hvar eigi að vista í hvert skipti skaltu kveikja á „Spyrja hvar eigi að vista hverja skrá áður en hún er sótt“ í niðurhalsstillingum vafrans.
:::

:::firefox
Firefox vistar í möppuna Niðurhal nema þú hafir stillt það á „Spyrja alltaf hvar á að vista skrár“ í stillingunum.
:::

:::safari
Safari vistar í Niðurhal nema þú veljir aðra möppu undir **Safari > Stillingar > Almennt > Staðsetning skráaniðurhals**.
:::

## Að vista aftur

Hver vistun sækir allt líkanið með **öllum breytingum frá því þú opnaðir það**, ekki aðeins breytingunum sem gerðar voru eftir síðustu vistun. Listinn {{ui:Breytingar}} byrjar tómur aftur eftir hverja vistun, svo þú getur ekki afturkallað lengra en að vistun. Til að byrja aftur frá upprunalegu skránni skaltu opna upprunalegu skrána aftur.

## Stórar skrár og minni

- **IFC**-skrár eru lesnar í heilu lagi inn í minni flipans, og þrívíddarrúmfræðin tekur meira minni ofan á það. Líkan upp á nokkur hundruð megabæti getur verið of mikið fyrir fartölvu. Yfir 1,5 milljón þríhyrninga eru brúnir slökktar til að spara minni („Brúnir eru slökktar fyrir mjög stór líkön“).
- **Verkefnaskrár** eru ekki lesnar í heild. BimCraft les aðeins litlu hlutana sem það þarf, um 40 KB til 100 KB, sama hversu stór skráin er, svo miðlægt líkan upp á 500 MB á netdrifi opnast á augabragði.
- **DWG- og DXF**-skrár eru lesnar í heild. Mjög stór teikning sýnir „Þessi teikning er mjög stór; aðeins hluti hennar er sýndur.“
- **Möppur** með allt að 20.000 skrám opnast. Aðeins þau fáu kílóbæti sem hvert líkanspjald þarf eru lesin.

Sjá [Vafrar, tæki og minni](topic:platforms) til frekari upplýsinga.

## Á netinu og án nettengingar

Að opna skrár þarf aldrei netið. Einn lesari hleðst af vefnum í fyrsta skipti sem þú þarft hann: IFC-vélin, í fyrsta skipti sem þú opnar IFC-líkan („Ræsi IFC-vélina…“). DWG- og DXF-lesararnir eru hluti af forritinu.

:::offline
Þú ert án nettengingar. Ef hnappurinn á forritastikunni segir {{ui:Tilbúið án nettengingar}}, opnast hvert snið eins og venjulega. Ef ekki, getur IFC-líkan ekki opnast nema eitt slíkt hafi þegar verið opnað í þessum flipa: tengstu fyrst aftur. Sjá [Á netinu og án nettengingar](topic:online-offline).
:::

Til að nota BimCraft án tengingar skaltu smella á {{ui:Vista til notkunar án nettengingar}} á forritastikunni meðan þú ert tengdur og bíða eftir {{ui:Tilbúið án nettengingar}}. Vistaða afritið er um 33 MB; það inniheldur IFC-vélina, svo IFC-líkön opnast líka án nettengingar. [Vinna án nettengingar](common:offline) útskýrir vistuð afrit almennt.

## Vistun í skýinu

Vistun í skýinu er ekki í boði ennþá. Vistaðu breytt afrit á þinni eigin tölvu eða skráaþjóni skrifstofunnar, eins og þú myndir gera við hvaða skrá sem er. Sjá [Skrárnar þínar](common:your-files).
