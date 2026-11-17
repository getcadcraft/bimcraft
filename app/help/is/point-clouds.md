---
title: Sýna punktský við hlið líkansins
summary: Opna laserskönnun (LAS, LAZ, E57, PLY, PCD, PTX, PTS eða XYZ) í 3D-sýninni ein sér eða með IFC-líkani, lita hana, skera þunna sneið í gegnum hana, mæla að punktum hennar og senda hana til teiknihugbúnaðarins til að rekja uppmæld línur.
keywords: punktský, laserskönnun, skanni, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, eins og byggt, mæling, samstilling, sneið, grunnmyndarskurður, smella, mæla, rekja, skanni í BIM
from: d0a3e740
---

## Hvað þú gerir

Skoðar laserskönnun af byggingu við hlið líkans hennar: athugar hvort það sem var byggt sé í samræmi við hönnunina, mælir milli skannaðra punkta og sker þunna sneið til að lesa veggi, hurðir og súlur af.

## Skref

1. Opnaðu skýið: {{ui:Opið}} `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eða `.xyz`-skrá, eða dragðu hana á síðuna (sjá efnið um snið punktskýja um hvað hvert þeirra skilar og hvað skal flytja út úr hugbúnaði skannans). Þegar líkan er opið sameinast skýið líkaninu í 3D-sýninni; að opna ský lokar aldrei líkaninu né óvistuðum breytingum á því. Án líkans opnast skýið eitt og sér.
2. Skýjastikan birtist undir verkfærastikunni. Hún segir hversu marga punkta er verið að sýna og hversu marga skráin hefur.
3. Veldu {{ui:Litur eftir}}: eigin liti skráarinnar (þegar skanninn geymdi þá), {{ui:Hæð}}, {{ui:Styrkur}}, {{ui:Flokkur}} (LiDAR-flokka eins og jörð, gróður og byggingu) eða {{ui:Einn litur}}. {{ui:Stærð}} gerir punktana stærri eða minni.
4. Smelltu á {{ui:Grunnmynd}} undir {{ui:Sneið}} til að halda aðeins þunnu belti 1.2 m yfir lægsta punkti, séð að ofan: veggir, hurðaop og súlur lesast eins og grunnmynd. {{ui:Framan}} og {{ui:Hlið}} skera lóðrétt belti fyrir útlit og snið. Færðu beltið með {{ui:Við}} og breyttu {{ui:Þykkt}} (metrar). {{ui:Slökkt}} sýnir allt skýið aftur.
5. Smelltu á {{ui:Mæla}} á verkfærastikunni. Bendillinn smellur á punkta skýsins (merkið segir "punktský"), svo þú getir mælt frá vegg til veggs í sneiðinni, eða frá hlut líkansins að skönnuninni. Horn eða brún líkansins innan seilingar vinnur samt.
6. Með {{ui:Mæla}} › {{ui:Staðsetning}} gefur punktur skýsins breiddar- og lengdargráðu úr eigin hnitakerfi skýsins, þegar skráin tilgreinir eitt.
7. {{ui:Fela}} felur skýið í bili; {{ui:Fjarlægja}} tekur það út. {{ui:Sýna}} › {{ui:Punktský}} felur eða sýnir stikuna.

## Hvert skýið fer

{{ui:Setja}} á stikunni segir hvernig skýið raðast við líkanið:

- **Líkanshnit**: tölur skýsins eru tölur líkansins sjálfs (skanni samstilltur við hnit hönnunarinnar).
- **Kortahnit**: líkanið hefur kortaumbreytingu (IfcMapConversion) og skýið er í sama vörpuðu kerfi: skýið er staðsett í gegnum hana. Ef kerfin tvö heita ólíkum nöfnum, segir stöðulínan það.
- **Miðjað á líkaninu**: þegar hvorugt setur skýið nálægt líkaninu, fer miðja þess á miðju líkansins og lægsti punktur þess á gólf líkansins. Veldu annan valkost til að yfirskrifa það.

Þegar skráin tilgreinir ekki einingar les BimCraft metra og býður upp á {{ui:Einingar}} á stikunni.

## Rekja uppmæld línur

Smelltu á {{ui:Rekja í CadCraft}} til að senda skýið yfir í teiknihugbúnaðinn í nýjum flipa. Það opnast þar undir teikningunni, þar sem sneið af grunnmynd og hlutasmellun gera þér kleift að teikna veggina yfir skönnunina. Sjá CadCraft-efnið um punktský.

## Hversu margir punktar

Skanni getur haldið hundruðum milljóna punkta. BimCraft les hvern punkt einu sinni og heldur jöfnum hluta þeirra til að teikna: {{ui:Sýna}} á stikunni ákveður hversu marga (1, 2, 5 eða 10 milljónir). Fleiri punktar þurfa meira minni og hraðvirkara skjákort. Fjöldi eftir LiDAR-flokki miðast við alla punkta í skránni.

:::note
Skrárnar eru lesnar á þessari tölvu; ekkert er sent upp. LAS 1.0–1.4 og LAZ eru lesin (LAZ-skrár allt að 1 GB, geymdar í minni meðan þær eru lesnar); E57-skrár allt að 6 milljónum punkta og 512 MB eins og er (stærri skannar: fluttu út LAS eða LAZ); PLY, PCD og PTX í heild; textaský eru `x y z`, með litadálkum (`r g b`) og styrkdálkum þegar þeir eru til staðar.
:::

## Nokkrir skannar

Skannar teknir frá mismunandi stöðum má samstilla í einn ramma, betrumbæta með ICP og flytja út sem eina LAS- eða E57-skrá: sjá [Samstilla nokkra skanna í eitt](topic:register-scans).
