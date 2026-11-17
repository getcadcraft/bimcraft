---
title: Kontroller betongelementer og lag seismiske laster
summary: Sett opp armeringen i betongbjelker og -søyler i den åpne modellen, kontroller dem etter ACI 318-19, lag ekvivalente horisontale krefter etter ASCE 7-22 på stive dekker, og se etasjeforskyvning. Et hjelpemiddel for en ingeniør å kontrollere.
keywords: betong, armert betong, ACI 318, ACI 318-19, armering, bjelke, søyle, skjær, bøyler, seismisk, jordskjelv, ekvivalent horisontal kraft, ELF, ASCE 7-22, forskyving, etasjeforskyving, dekker, stiv skive, etasjevekt, utnyttelse, konstruksjon, ingeniør, analyse
from: 2f342e72
---

Blokkene {{ui:Betongstaver}} og {{ui:Seismiske laster}} i fanen {{ui:Analyse}} kontrollerer armerte betongbjelker og -søyler i den åpne IFC-filen, og lager sidelengs krefter fra et jordskjelv på etasjene i rammen. De er de samme blokkene som i DetailCraft, kjørt etter analysen i fanen {{ui:Analyse}}, og lagret i IFC-filen sammen med de andre analyseinnstillingene.

:::warning
Resultatene er **til kontroll av en ingeniør**: et hjelpemiddel inntil en har gjennomgått dem. Betongkontrollene bruker førsteordens krefter (en søyle i en ramme du kaller uten sidesvaiing, dimensjoneres for sitt forsterkede moment), uten forstørrelse for sidesvaiing, ingen dimensjonering for torsjon, ingen seismisk detaljering (ACI kapittel 18) og ingen bøyledetaljering. Lastene for jordskjelv utelater redundansfaktoren, den vertikale seismiske effekten, torsjonsforsterkning og P-delta-effekter. **Vindlaster er ikke bygget**: standardens vindkapitler finnes ikke i prosjektets referansesider.
:::

## Hva BimCraft leser

Analysen leser modellens bjelker, søyler og stag med deres profiler (se [Analyser den bærende rammen](topic:frame-analysis)). Blokken {{ui:Betongstaver}} lister opp alle tverrsnittene de bruker. Trykk {{ui:Sett opp som betong…}} på et tverrsnitt som er betong: BimCraft tar et rektangel fra profilens areal og stivhet (bredden b og høyden h, som du så kan endre). Et tverrsnitt som ikke ligner et rektangel (en valset stålprofil), gir derfor en størrelse du må rette, eller det blir latt være.

Et tverrsnitt satt opp som betong, og ethvert element der materialet heter betong, analyseres som betong: E = 4700 √f′c, 2400 kg/m³, og som standard med **sprukne tverrsnitt** (søyler 0.70 Ig, bjelker 0.35 Ig; ACI 318-19 tabell 6.6.3.1.1(a)). Velg {{ui:Brutto tverrsnitt}} for å slå det av. Uten disse innstillingene analyseres modellen akkurat som før.

## Armering, kombinasjoner, kontroll

Oppgi overdekningen, øvre, nedre og sidestengene (eller en søylebur) og bøylene til hvert tverrsnitt, og angi f′c, fy, fyt, K og sidesvaiing eller ingen sidesvaiing. Gi lasttilfellene deres type, trykk {{ui:Lag kombinasjoner}} (ASCE 7 §5.3.1) og deretter {{ui:Kontroller betong}}: hvert element får en utnyttelsesgrad, fargelagt på modellen. Elementer over kapasitet, og en etasjeforskyvning over grensen, listes i {{ui:Problemer}} med sin paragraf; klikk på ett for å velge elementet.

## Dekker og seismiske laster

I blokken {{ui:Seismiske laster}} tar {{ui:Finn etasjer}} nivåene der to eller flere bjelker møtes; hver blir et stivt dekke. {{ui:Ta vekter fra tilfeller}} leser hver etasjes seismiske vekt fra tilfellene du gir en faktor. Fyll inn SDS, SD1, S1, R, Ie, Cd, TL, systemet og risikokategorien, og trykk deretter {{ui:Lag seismiske tilfeller}} (ASCE 7-22 12.8: periode, grunnskjærkraft, fordeling oppover etasjene, 5 % tilfeldig torsjon). Etasjekreftene og forskyvningskontrollen (12.12) vises etter en kjøring. Den samme perioden og etasjestivheten brukes av jordskjelvet i [Spill av en flom, vind eller et jordskjelv](topic:hazard-playback) når du velger analyserammen som kilde.

Betongdekker og -vegger blir plater i analysen, og blokken {{ui:Dekkearmering}} regner ut stålet de trenger per meter. Detaljene i hver kontroll finnes i DetailCraft-emnet med samme navn.
