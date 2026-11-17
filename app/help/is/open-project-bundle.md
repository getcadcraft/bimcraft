---
title: Opna verkefnapakka
summary: Verkefnapakki er ein zip-skrá með líkani, sýnum þess, blöðum og eiginleikahópum. Opnaðu hann, sýndu sýn með hæð og lögum, opnaðu blað og sjáðu eiginleika í hópum verkefnisins.
keywords: pakki, verkefnapakki, ccbundle, zip, sýnir, sýnakort, blöð, blaðabók, lagasamsetning, eiginleikahópar, staðlar, pln, sniðmát
from: b5b86e8f
---

## Það sem þú gerir

Opnaðu **verkefnapakka** (`.ccbundle.zip`) og vinndu með verkefnið eins og það var skipulagt: sýnir þess, blöð og eiginleikahópa, ofan á líkaninu.

Pakki geymir:

- líkanið sem IFC,
- blöðin sem PDF og DWG,
- lista yfir það sem IFC skilur eftir: sýnirnar (hver með hæð, lagasamsetningu og mælikvarða), blöðin og teikningarnar sem eru settar á þau, skilgreiningar eiginleika í hópum þeirra, flokkanir og staðla eins og lög, pennasett, línugerðir, skyggingar, yfirborð og samsett efni.

Pakkana skrifar opið skriftuforrit sem keyrir inni í Archicad og biður Archicad sjálft um þessa lista. BimCraft les aldrei `.pln`- eða `.tpl`-skrár beint; sjá [Opna .pln- og .pla-verkefnaskrár](topic:pln-project-files).

## Búa til pakka

Skriftan er forskoðun: hún hefur ekki verið prófuð á öllum útgáfum Archicad enn. Sæktu hana af [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Þú þarft Archicad 24 eða nýrra og Python 3.8 eða nýrra; ekkert annað þarf að setja upp.

1. Vistaðu `archicad_bundle.py` í möppu, til dæmis `C:\cc-bundle`.
2. Í Archicad, opnaðu verkefnið og búðu til útgáfusett sem heitir nákvæmlega **CadCraft bundle**: 3D-sýnin sem IFC, hvert blað sem PDF, og hvert blað aftur sem DWG, gefið út í skrár á diski í einni flatri möppu.
3. Með verkefnið opið, keyrðu `python archicad_bundle.py --probe --out .` einu sinni. Það les aðeins og skrifar `probe.json`.
4. Keyrðu `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (notaðu IFC-þýðandann sem þú valdir). Archicad gefur settið út og skriftan skrifar `<project>.ccbundle.zip`.

Ef útgáfa í gegnum skriftuna mistekst, gefðu settið út handvirkt og keyrðu `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. README-skráin í geymslunni lýsir öllum valkostum. Ef eitthvað skilar sér ekki, opnaðu mál þar og hengdu `probe.json` við.

## Opna pakka

1. Smelltu á {{ui:Veldu skrá}}, eða slepptu `.ccbundle.zip` á BimCraft. Í möppu sem þú opnaðir með {{ui:Opna möppu}} eru pakkar skráðir undir **Verkefnapakkar**; smelltu á einn eftir nafni.
2. Líkanið opnast eins og hvert IFC, og hlutinn **Verkefnapakki** birtist vinstra megin, undir staðreyndum skrárinnar.

Ekkert er hlaðið upp: pakkinn er lesinn á tölvunni þinni, eina skrá í einu, svo stórt líkan er ekki afritað tvisvar.

## Sýna sýn

Undir **Sýnir** eru sýnirnar flokkaðar eftir möppunum sem þær höfðu í verkefninu. Smelltu á heiti sýnar:

- **Grunnmynd** sýnir aðeins hæð sína, séða að ofan.
- **Lagasamsetning hennar** felur þætti á lögunum sem samsetningin felur. Stöðulínan segir hversu marga þætti það faldi.
- **Mælikvarði hennar** birtist við hliðina á heitinu og í stöðulínunni.
- **3D-sýn** sýnir allar hæðir.

Til að sýna allt aftur, notaðu {{ui:Sýna allt}} í {{ui:Sýna}} og merktu við allar hæðir.

:::note
BimCraft finnur lögin í gegnum lagaúthlutanir IFC-skrárinnar. Ef IFC var flutt út án þeirra, felur lagasamsetning ekkert, og stöðulínan segir 0 þætti faldir.
:::

## Opna blað

Undir **Blöð** sýnir hvert blað númer sitt, heiti, pappírsstærð og sýnirnar sem eru settar á það.

- **PDF** vistar PDF-skrá blaðsins úr pakkanum.
- **DWG** opnar teikningu blaðsins í 2D-sýninni. Smelltu á hvaða sýn sem er til að fara aftur í líkanið.
- **Opna í …** sendir skrá blaðsins til forritsins sem vinnur með hana, í nýjum flipa: PDF í MarkupCraft, DWG í CadCraft. Hnappurinn birtist aðeins þar sem það forrit er opið við hlið BimCraft. Skráin er lesin úr pakkanum þegar flipinn hleðst, og ekkert er hlaðið upp.

Blað án hvorugs segir **Engin skrá í pakkanum**.

## Sjá eiginleika í hópum verkefnisins

Veldu þátt. **Eiginleikahópar** sýnir eiginleika hans undir hópunum sem verkefnið skilgreindi, paraða eftir eiginleikasetti og heiti sem skilgreiningin gefur fyrir IFC, eða annars eftir heiti hans. Hinir eru áfram í {{ui:Eiginleikar}} eins og venjulega. **Skilgreiningar eiginleika** sýnir hverja skilgreiningu með hópi, gerð og IFC-heiti hennar.

## Staðlar og athugasemdir

- **Staðlar** telur lögin, lagasamsetningar, pennasett, línugerðir, skyggingar, yfirborð, samsett efni og efni í pakkanum.
- **Athugasemdir** listar það sem skriftan gat ekki fengið úr þeirri útgáfu Archicad, hvaða reit sem BimCraft gat ekki lesið, og hvaða skrá sem pakkinn nefnir en geymir ekki.

## Úrræðaleit

- **"… er zip-skrá en ekki verkefnapakki."** Zip-skráin hefur enga `manifest.json`. Pakkaðu henni upp og opnaðu `.ifc`-skrána inni í henni.
- **"… er nýrri verkefnapakki en BimCraft les."** Uppfærðu BimCraft.
- **"… geymir ekki líkanið sem manifestið nefnir."** Zip-skráin var stytt eða breytt. Búðu til pakkann aftur.
- **Sýn sýnir allar hæðir.** Hæðin er ekki í IFC-líkani sýnarinnar (stöðulínan segir það). Athugaðu hvort IFC-útflutningurinn innihélt þá hæð.

Sjá einnig [Vinna á milli tveggja BIM-forrita](topic:two-bim-programs) og [Hvað BimCraft les úr hverju sniði](topic:file-formats).
