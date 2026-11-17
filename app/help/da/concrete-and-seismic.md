---
title: Kontrollér betonelementer og lav jordskælvslaster
summary: Opsæt armeringen i bjælker og søjler af beton i den åbne model, kontrollér dem efter ACI 318-19, lav ækvivalente sidelæggende kræfter efter ASCE 7-22 på stive etager, og se etagedrift. Et hjælpemiddel for en ingeniør til kontrol.
keywords: beton, armeret beton, ACI 318, ACI 318-19, armering, bjælke, søjle, forskydning, bøjler, jordskælv, ækvivalent sidelast, ELF, ASCE 7-22, drift, etagedrift, etager, stiv skive, etagevægt, udnyttelse, konstruktion, ingeniør, analyse
from: 2f342e72
---

Blokkene {{ui:Betonelementer}} og {{ui:Jordskælvslaster}} under fanen {{ui:Analyse}} kontrollerer armerede betonbjælker og -søjler i den åbne IFC og laver jordskælvets sidelæggende kræfter på modellens etager i dens ramme. De er de samme blokke som i DetailCraft, kørt efter analysen under fanen {{ui:Analyse}}, og gemt i IFC'en sammen med de andre analyseindstillinger.

:::warning
Resultaterne er **til kontrol af en ingeniør**: et hjælpemiddel, indtil en ingeniør har gennemgået det. Betonkontrollerne bruger førsteordenskræfter (en søjle i en ramme, du kalder ikke-svajende, dimensioneres for sit forstørrede moment), uden svajforstørrelse, uden dimensionering for vridning, uden jordskælvsdetaljering (ACI kapitel 18) og uden bøjledetaljering. Jordskælvslasterne udelader redundansfaktoren, den lodrette jordskælvspåvirkning, vridningsforstærkning og P-delta-effekter. **Vindlaster er ikke bygget**: standardens vindkapitler findes ikke i projektets referencesider.
:::

## Hvad BimCraft læser

Analysen læser modellens bjælker, søjler og stænger med deres profiler (se [Analysér den bærende ramme](topic:frame-analysis)). Blokken {{ui:Betonelementer}} lister hvert tværsnit, de bruger. Tryk på {{ui:Sæt op som beton…}} på et tværsnit, der er beton: BimCraft tager et rektangel ud fra profilens areal og stivhed (bredden b og højden h, som du derefter kan ændre), så et tværsnit, der ikke ligner et rektangel (en valset stålprofil), giver en størrelse, du må rette, eller lades være.

Et tværsnit sat op som beton, og ethvert element, hvis materiale hedder beton, analyseres som beton: E = 4700 √f′c, 2400 kg/m³, og som standard med **revnede tværsnit** (søjler 0.70 Ig, bjælker 0.35 Ig; ACI 318-19 tabel 6.6.3.1.1(a)). Vælg {{ui:Bruttotværsnit}} for at slå det fra. Uden disse indstillinger analyseres modellen præcis som før.

## Armering, kombinationer, kontrol

Angiv dæklaget, de øverste, nederste og side-armeringsjern (eller en søjlekurv) og bøjlerne for hvert tværsnit, og angiv f′c, fy, fyt, K og svajende eller ikke-svajende. Angiv lasttilfældenes type, tryk på {{ui:Lav kombinationer}} (ASCE 7 §5.3.1) og derefter på {{ui:Kontrollér beton}}: hvert element får en udnyttelse, farvet på modellen. Elementer over kapacitet og en etagedrift over grænsen står på listen under {{ui:Problemer}} med deres punkt; klik på et for at vælge elementet.

## Etager og jordskælvslaster

I blokken {{ui:Jordskælvslaster}} finder {{ui:Find etager}} de niveauer, hvor to eller flere bjælker mødes; hver bliver en stiv skive. {{ui:Tag vægte fra tilfælde}} læser hver etages jordskælvsvægt fra de tilfælde, du giver en faktor. Udfyld SDS, SD1, S1, R, Ie, Cd, TL, systemet og risikokategorien, og tryk derefter på {{ui:Lav jordskælvstilfælde}} (ASCE 7-22 12.8: periode, grundforskydning, fordeling op gennem etagerne, 5 % tilfældig vridning). Etagekræfterne og driftskontrollen (12.12) vises efter en kørsel. Den samme periode og etagestivhed giver jordskælvet i [Afspil en oversvømmelse, vind eller et jordskælv](topic:hazard-playback), når du vælger analyserammen som dens kilde.

Dæk og vægge af beton bliver til plader i analysen, og blokken {{ui:Dækarmering}} udregner den stålmængde, de har brug for pr. meter. Detaljerne for hver kontrol står i DetailCraft's emne med samme navn.
