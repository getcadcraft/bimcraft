---
title: Staðsetja búnað og húsgögn úr safninu
summary: Finndu hlut í Safninu, skrá eða opinni teikningu, staðsettu hann á hæð IFC-líkans með draugaforskoðun, snúðu honum, smelltu honum að vegg og vistaðu.
keywords: færa, snúa, draga, safn, librarycraft, staðsetja, setja inn, búnaður, húsgögn, blokk, fjölskylda, liður, vörulisti, safnefni, kcl, csv, gltf, obj, rfa, dwg, ifc-gerð
from: 3dad5d4b
---

## Hvað þú gerir

Settu safnhlut inn í IFC-líkan: vask, vinnuborð, stól. BimCraft skrifar hann sem rétt IFC-frumefni með gerð, þannig að sérhvert eintak af sama hlut deilir einu mengi rúmfræði, og gögn hans, liðarnúmer og leyfi fylgja með.

## Skref

1. Opnaðu IFC-líkan.
2. Smelltu á flipann {{ui:Safn}} við hliðina á {{ui:Eiginleikar}} hægra megin, eða {{ui:Safn}} á tækjastikunni fyrir ofan líkanið.
3. Veldu uppruna:
   - **Innbyggð tákn**: almenn pípulagnatákn á grunnmynd sem fylgja BimCraft undir Apache-2.0, aðgengileg án nettengingar. Athugaðu víddir þeirra áður en smíðað er. Fyrir rafmagnstákn á grunnmynd og IFC-rafmagnstæki, notaðu **Smíð › Rafmagn**.
   - **Safn**: CadCraft-safnið á þessari síðu. Opinberir hlutir þurfa ekki innskráningu.
   - **Þessi skrá**: blokkir opinnar DWG- eða DXF-teikningar. Kvik blokk með sýnileikastöðum er boðin einu sinni fyrir hverja stöðu, heitin „Vaskur: Tvöfaldur bolli“, hver teiknuð með aðeins þeim hlutum sem þessi staða hefur.
   - **Skrár…**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA eða CSV skrá á tölvunni þinni. Hún er lesin í þessum flipa; ekkert er sent upp.
   - **Aðrir straumar**: annað safn sem talar sama straumsnið. Bættu við vistfangi þess einu sinni; það er geymt í þessum vafra.
4. Leitaðu eða veldu flokk, og smelltu síðan á spjald. Spjaldið sýnir forskoðun á grunnmynd, heitið, framleiðanda og gerð, leyfið og útgáfuna.
5. Smelltu á {{ui:Staðsetja á grunnmynd}} (í Grunnmynd-útsýninu) eða {{ui:Staðsetja í líkani}} (í þrívíddarútsýninu). Í {{ui:Skipta}}, þar sem grunnmynd og þrívídd sjást bæði, er hnappurinn klofinn: aðgerð hans er {{ui:Staðsetja á grunnmynd}}, og örin í hægri enda hans opnar valmynd með {{ui:Staðsetja í líkani}}. Eða dragðu spjaldið, eða myndina í smáatriðum hlutarins, á grunnmyndina eða þrívíddarmyndina: hluturinn er staðsettur þar sem þú sleppir. Með penna eða fingri, haltu spjaldinu inni augnablik og dragðu síðan.
6. Veldu hæðina í staðsetningastikunni. Í þrívíddarútsýninu eru hæðir fyrir ofan hana faldar meðan þú staðsetur og útsýnið snýr að efstu hlið; á grunnmyndinni sýnir hún þegar þá hæð. Velji maður {{ui:Staðsetja í líkani}} eingöngu af grunnmyndinni, opnast þrívíddarútsýnið við hlið hennar.
7. Færðu bendilinn yfir líkanið: gegnsær kassi sýnir hvar hluturinn fer.
8. Ýttu á {{key:R}} til að snúa honum um 90°. Ýttu á {{key:Tab}} (eða {{ui:Smella að vegg}}) til að setja bakið upp að næsta vegg, snúið að herberginu.
9. Smelltu til að staðsetja hann. Eða sláðu staðsetninguna inn í **X, Y (mm)**, til dæmis `1200, 3400`, og ýttu á {{key:Enter}}.

Ljós eða annað sem hangir að ofan: stilltu **Festing** á **Í lofti**. Efri hluti hlutarins situr þá við neðri hlið loftsins yfir staðnum (eða í hæð hæðarinnar þar sem ekkert loft er). Með loftteikningu á grunnmyndarútsýninu byrjar **Festing** á **Í lofti**.

10. Svaraðu einni spurningu: **liðarnúmerið** (næsta laust númer er fyllt inn), magnið og athugasemd. Ýttu á {{key:Enter}}.
11. Staðsettu fleiri, eða ýttu á {{key:Esc}} til að hætta.
12. Smelltu á {{ui:Vista sem IFC}} til að sækja breytta afritið.

## Grunnmynd eða líkan

Staðsetningarhnappur Safnsins fylgir útsýninu sem þú ert í, og breytist um leið og þú breytir útsýninu ({{ui:Grunnmynd}}, {{ui:Skipta}} og {{ui:3D}} hnapparnir, lyklaborðið, opnun skráar). Grunnmynd sýnir einn hnapp, {{ui:Staðsetja á grunnmynd}}; 3D sýnir einn hnapp, {{ui:Staðsetja í líkani}}; Skipta sýnir klofna hnappinn, með {{ui:Staðsetja á grunnmynd}} sem aðgerð og {{ui:Staðsetja í líkani}} í valmynd sinni. Báðar leiðirnar nota sömu staðsetningastiku og skrifa sama IFC-frumefni: bendillinn virkar á grunnmyndinni fyrir aðra og í þrívíddarútsýninu fyrir hina. Ýttu á {{key:Esc}} hvenær sem er til að hætta.

Að draga spjald hefur engan eigin lykil. Klofni hnappurinn, eða venjulegi hnappurinn, gerir það sama með lyklaborðinu.

## Færðu eða snúðu staðsettum hlut

Í {{ui:Teikna}}, veldu hlutinn á grunnmyndinni. Ferningsgrip birtist á innsetningarpunkti hans og hringlaga grip við hliðina.

- Dragðu hlutinn, eða ferninginn, til að færa hann. Hann smellur eins og Veggtólið (veggendar og fletir); {{key:Shift}} heldur honum hornréttum á þar sem hann var.
- Dragðu hringlaga gripið til að snúa honum í 15° skrefum. Haltu inni {{key:Shift}} fyrir 1° skref.
- Ýttu á {{key:R}} til að snúa honum um 90°.
- Í **Eiginleikum** (líka í þrívíddarútsýninu), sláðu inn **X**, **Y** og **Snúning (°)**, eða smelltu á **Snúa um 90°**.

Hver færsla er eitt skref af afturköllun og ferðast í Live TeamWork. Hluturinn heldur liðarnúmeri sínu, safngögnum sínum og hæð sinni yfir hæðinni. Ekki enn tilbúið: að draga hann í þrívíddarútsýninu.

## Hvað þú ættir að sjá

- Hlutinn í líkaninu, valinn, með eiginleikum sínum hægra megin: **Safnhlutur**-reitur með leyfi sínu og eignun, og mengin `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` og, fyrir hluti úr merktum teikningum, `CadCraft_SourceAttributes`.
- „Staðsett: *liður* (liður *n*)“ í breytingalistanum. {{key:Mod+Z}} afturkallar það.
- Stöðulínan: „Staðsetti *liður* sem lið *n*.“

## Gott að vita

- Sumir hlutir koma í nokkrum stærðum eða valkostum: spjaldið hefur þá **Afbrigði**-val, og sá sem þú velur er sá sem er staðsettur. Sjá [Staðsettu og skiptu út safnhlut sem hefur afbrigði](topic:library-variants).
- Hlutur án þrívíddarlíkama (2D-tákn) er staðsettur með staðgengils kassa; þú gefur hæð hans þegar beðið er um hana.
- Fleiri eins: veldu staðsettan hlut og notaðu {{ui:Afrita}} og {{ui:Líma}}, eða {{key:Mod+D}}. Sjá [Afritaðu, límdu og tvöfaldaðu safnhluti](topic:copy-paste).
- Til að hafa veggsmellingu kveikta í hverri staðsetningu, kveiktu á **Byrja með veggsmellingu** í [Stillingum BimCraft](topic:settings).
- Lengdir eru umreiknaðar yfir í einingar líkansins, hverjar sem þær eru.
- **Umhverfisefni** (tré, runnar, fólk, bílar) er líka í safninu: leitaðu að „tré“, „persóna“ eða „bíll“. Þessir eru teiknaðir af CadCraft (CC0) og halda litum sínum þegar þeir eru staðsettir (bolur brúnn, lauf græn, gluggar bíls gegnsæir), í BimCraft og í öðrum BIM-forritum. Þeir birtast í [myndgerðum myndum](topic:render).
- Í IFC2X3-skrá er líkaminn skrifaður sem fleka fast form; í IFC4 sem þríhyrnd flatarnet. Báðar opnast í öðrum IFC-verkfærum.
- Teikningu (DWG eða DXF) er ekki hægt að vista hér, þannig að hlutir eru aðeins settir í IFC-líkön. Notaðu **Þessi skrá** á teikningu til að sjá hvað blokkir hennar yrðu.

## Hlutir á þínu tungumáli

Hlutur getur borið heiti sitt, lýsingu og gerð á öðrum tungumálum. Þegar hann hefur þau á tungumálinu sem BimCraft er stillt á (Stillingar › Almennt › Tungumál), sýnir síða hlutarins þau, með heitinu sem framleiðandinn gaf undir sér, og **Staðsetja** skrifar heitið á þínu tungumáli inn í líkanið, þannig að {{ui:Búnaður}}-listinn sýnir það þannig. Hluturinn er áfram sami hluturinn: athugun á uppfærslum og skipti fara eftir hlutnum sjálfum, aldrei eftir heiti hans. Hlutir án þýðingar halda sínum eigin orðum.

## Algeng mistök

- **Staðsetningarhnappinn vantar.** Ekkert IFC-líkan er opið. Opnaðu eitt fyrst.
- **Draugurinn fylgir ekki bendlinum.** Bendillinn er utan svæðis líkansins, eða hæðarflöturinn er utan sjónsviðs. Smelltu á {{ui:Ofan}}.
- **{{ui:Smella að vegg}} segir að það séu engir veggir.** Hæðin hefur enga veggi í IFC (sumir útflutningar setja veggi á aðra hæð). Veldu þá hæð, eða sláðu inn X og Y.
- **Stærð hluta skráar er röng.** Skráin hefur enga einingu, eða segir ranga. Í {{ui:Skrár…}} veldu einingarnar og lestu hana aftur.

:::tip
Að staðsetja sama hlut tvisvar deilir einni IFC-gerð, þannig að líkan með fjörutíu stólum geymir stólinn einu sinni.
:::
