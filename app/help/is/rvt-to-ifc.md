---
title: Úr verkefnaskrá í BimCraft með IFC
summary: IFC-útflutningsstillingarnar sem opnast best í BimCraft (útgáfa, eiginleikasöfn, grunnmagn, rými, tengd líkön, hnit), hvernig opna á útkomuna og hvað útflutningurinn geymir.
keywords: útflutningur, IFC-útflutningur, rvt í ifc, breyta, 3D, rúmfræði, ifc2x3, ifc4, samræmingarsýn, viðmiðunarsýn, hönnunarflutningssýn, eiginleikasöfn, grunnmagn, rými, bil, tengdar skrár, sameiginleg hnit, mælipunktur, verkefnagrunnpunktur, stillingar
from: 3efd5fc9
---

## Hvað þú gerir

Breyttu verkefnaskrá í IFC-skrá sem þú getur snúið, skoðað, athugað og breytt í BimCraft. BimCraft les ekki 3D-líkanið inni í `.rvt`-skrá enn, þannig að útflutningurinn fer fram í forritinu sem bjó hana til (Revit); BimCraft opnar útkomuna.

## Skref

1. Opnaðu verkefnið í forritinu sem bjó það til. Spjald BimCraft nefnir útgáfuna sem það var vistað í.
2. Opnaðu 3D-sýn sem sýnir það sem þú vilt flytja út.
3. Veldu **Skrá > Flytja út > IFC**.
4. Í útflutningsglugganum velurðu uppsetningu (eða **Breyta uppsetningu…**) með stillingunum hér að neðan.
5. Veldu möppu og skráarheiti, og fluttu út.
6. Í BimCraft smellirðu á {{ui:Veldu skrá}} og velur nýju `.ifc`-skrána. Tengd líkön sem eru flutt út sem sérskrár opnast í sömu senu með {{ui:Bæta við líkani}}.

## Stillingarnar sem opnast best hér

| Stilling í útflytjandanum | Veldu | Af hverju |
|---|---|---|
| IFC-útgáfa | **IFC4 Reference View** til skoðunar, athugunar og magntöku; **IFC2X3 Coordination View 2.0** þegar aðrir þurfa IFC2X3 | Bæði opnast að fullu. **IFC4 Design Transfer View** opnast líka, með nákvæmari formum, en skráin er stærri og hægari. |
| Skráargerð | **IFC** (venjuleg) | BimCraft opnar ekki `.ifczip` eða `.ifcxml`. |
| Áfangi / sýnilegir hlutir | Áfangann sem þú átt við, og **Flytja út aðeins hluti sem sjást í sýn** þegar þú setur upp 3D-sýnina í því skyni | Sleppir því sem þú faldir viljandi. |
| Eiginleikasöfn | **Flytja út Revit-eiginleikasöfn** og **Flytja út almenn IFC-eiginleikasöfn** | Þau verða eiginleikasöfnin sem BimCraft sýnir í {{ui:Eiginleikar}}, og sem {{ui:Leita}}, {{ui:Litur}} og {{ui:Líkanathuganir}} nota. |
| Grunnmagn | **Flytja út grunnmagn** | {{ui:Magnsummur}} og listar nota það (lengdir, flatarmál, rúmmál) í stað þess að giska. |
| Rými og svæði | **Flytja út rými í 3D-sýnum** (eða valkostinn Rooms / Spaces) | Rými koma sem bil: smelltu á {{ui:Rými}} til að sjá þau. |
| Tengdar skrár | **Flytja út tengdar skrár sem sérstakar IFC-skrár** | Hver tenging verður sérskrá; opnaðu þær saman með {{ui:Bæta við líkani}} og þær raðast saman. |
| Hnitagrunnur | **Sameiginleg hnit** (eða mælipunkturinn) | Skráin ber þá með sér staðsetningu sína á kortinu (IfcMapConversion), svo Mæling › Staðsetning, kortalög á jörðinni og punktaský sett eftir kortahnitum virki. Verkefnagrunnpunkturinn heldur líkaninu nálægt uppruna en án staðsetningar á kortinu. |
| Skipta veggjum og súlum eftir hæð | Kveikt, þegar þú tekur magn eftir hæðum | Hluti hverrar hæðar er sitt eigið frumefni. |

## Það sem þú átt að sjá

Líkanið í 3D, með hæðum teknum úr hæðum verkefnisins og upplýsingum verkefnisins í spjaldinu {{ui:Skrá}}. **Flutt út frá** nefnir útflytjandann.

## Hvað útflutningurinn geymir og hvað ekki

- **Geymt**: rúmfræði, hæðir, tegundir frumefna, heiti, gerðir, flestar breytur (sem eiginleikasöfn), grunnmagn þegar beðið er um það, rými sem bil, og staðsetningin á kortinu með sameiginlegum hnitum.
- **Ekki geymt**: sýnir, blöð, skýringar, fjölskyldur sem breytanlegar fjölskyldur, vinnusett og hönnunarvalkostir. IFC-skrá er mynd af frumefnum líkansins, ekki verkefnið sjálft. Fyrir blöðin skaltu flytja út DWG og opna það í 2D-sýninni.

## Algeng mistök

- **Breytur vantar í BimCraft.** Kveiktu á eiginleikasafnavalkostunum hér að ofan og fluttu út aftur.
- **Rými vantar.** Kveiktu á rýmavalkostinum og smelltu síðan á {{ui:Rými}}.
- **Vistað sem `.ifczip`.** Veldu venjulega IFC, eða taktu `.ifczip` úr þjöppun.
- **Engin staðsetning á kortinu.** Fluttu út með sameiginlegum hnitum; athugaðu að mælipunktur verkefnisins sé stilltur.
- **Búist við að breytingar skili sér til baka.** Breytingar sem þú vistar í BimCraft fara í nýja IFC-skrá, ekki í verkefnaskrána.
