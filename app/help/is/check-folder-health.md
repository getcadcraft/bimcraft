---
title: Athuga möppu fyrir skemmd afrit, vantandi tengla og afganga
summary: Notaðu möppuskýrsluna til að finna afskorin líkanaskrár, velja nýjasta heila afritið, sjá hvaða tenglar vantar og finna læsingar- og tímaskrár.
keywords: heilsufarsskoðun, skemmd, spillt, ófullgerð, afskorin, afrit, vantandi tenglar, xref vantar, úttekt, afgangar, læsiskrár, dwl, bak, afhending
from: 3025a539
---

## Hvað þú gerir

Athugaðu verkefnamöppu áður en þú afhendir hana eða byrjar að vinna í henni: er hvert líkan heilt, hvaða afrit er síðasta gilda, og eru allar tengdar skrár þar?

## Skref: skemmd afrit

1. Opnaðu verkefnamöppuna. Sjá [Opna heila verkefnamöppu](topic:open-project-folder).
2. Lestu athugasemdirnar undir heiti möppunnar. „2 skrár eru ófullgerðar eða ólæsilegar. Sjá líkönin hér að neðan.“ þýðir að það er eitthvað að skoða.
3. Í **Líkön** skaltu líta á dálkinn **Staða**. **Heil** er í lagi. Gulbrúnt „1 ófullgert“ þýðir að eitt eintak er skemmt en annað er heilt. Rauð **Ófullgert** þýðir að ekkert heilt eintak fannst.
4. Opnaðu **Öll … afrit** undir líkani með vandamál. Þar eru aðalskráin og hvert númerað afrit, nýjast fyrst, með stærð, dagsetningu og stöðu.
5. Lestu athugasemdina fyrir ofan listann, til dæmis „Tower.rvt er ófullgert (183.2 MB, ætti að vera að minnsta kosti 214.0 MB). Spjaldið sýnir nýjasta heila eintakið, Tower.0012.rvt (3. mars 2025).“
6. Smelltu á eintakið sem þú vilt opna. Aðeins heil eintök er hægt að smella á.

## Hvað heilsufarsskoðunin gerir

Hvert eintak af hverju líkani fær fljótlega skoðun á hausnum sínum, 512 bæti hver, þannig að jafnvel mappa með stórum líkönum er skoðuð á sekúndum. Skrá sem vísar í eigin vísi sem nær út fyrir endann var afskorin meðan hún var afrituð, hlaðin upp eða samstillt. Skrá á skýjadrifi sem er enn „aðeins á netinu“ lítur eins út.

Spjaldið fyrir hvert líkan er lesið úr aðalskránni þegar hún er heil, og úr nýjasta heila afritinu þegar hún er það ekki.

## Skref: týndir tenglar

1. Leitaðu að athugasemdinni „*n* tengdar skrár eru ekki í þessari möppu.“ undir heiti möppunnar.
2. Skrunaðu að **Tengdar og tilvísaðar skrár**. Týndir tenglar eru fyrst á listanum.
3. Lestu dálkinn **Hvar** fyrir hvern tengil:
   - **Í þessari möppu**: fannst á slóðinni sem líkanið vistaði.
   - **Fannst með sama heiti**: skrá með sama heiti er annars staðar í möppunni. Athugaðu hvort hún sé rétta skráin.
   - **Safnskrá**: lykilkóðatafla eða samsetningarkóðatafla. Þær fylgja forritinu á hverri tölvu, þannig að þær eiga ekki að vera í möppunni.
   - **Ekki í þessari möppu**: fannst hvergi í möppunni.
4. Lestu **Notað af** til að sjá hvaða líkön tengja hverja skrá.

BimCraft leitar að hverjum tengli fyrst eftir hlutfallslegri slóð sinni, síðan eftir enda vistuðu slóðarinnar (þannig að `\\server\jobs\Tower\Cad\X-Refs\site.dwg` finnst sem `X-Refs/site.dwg` þegar þú valdir möppuna `Cad`), og loks eftir skráarheiti hvar sem er í möppunni.

## Skref: afgangar

1. Skrunaðu að **Til hliðar** neðst í skýrslunni.
2. Lestu þrjár línur sem kunna að birtast:
   - Hreinsimöppur (`*_backup`, `*_log`, `Revit_temp`): ekki lesnar.
   - Læsingar-, skráningar- og afritaafgangar: skrár eins og `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Þær eru skildar eftir af forritum sem hrundu eða voru opin þegar möppan var afrituð. Yfirleitt er óhætt að eyða þeim þegar enginn hefur skrárnar opnar.
   - Aðrar skrár: allt annað sem BimCraft les ekki.

## Algeng mistök

- **Að eyða skemmdu aðalskránni áður en gott afrit hefur verið vistað.** Afritaðu nýjasta heila afritið fyrst, og fjallaðu síðan um skemmdu skrána.
- **Að treysta „Fannst með sama heiti“ blint.** Tvær mismunandi teikningar geta heitið eins. Opnaðu báðar ef þú ert í vafa.
- **Að halda að vantandi safnskrá sé vandamál.** Lykilkóðatöflur og samsetningarkóðatöflur eru á hverri tölvu með forritinu.
- **Skráafjöldinn er ólíkur milli vafra.** Í Firefox og Safari sendir {{ui:Opna möppu}} allar skrár, þar með taldar þær í hreinsimöppum, þannig að fjöldinn (og 20,000 skráa mörkin) telur þær með. Ef þú dregur möppuna inn sleppir þú þeim, eins og Chrome og Edge gera. Skýrslan er annars sú sama.
