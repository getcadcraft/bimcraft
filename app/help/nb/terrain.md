---
title: Tomtens terreng, byggeplaten og dekker i belegg
summary: Før terrenget inn i modellen fra målepunkter, høydekurver, en LAS- / LAZ-skanning, en GeoTIFF, en LandXML-flate (fra CivilCraft) eller noen få kotehøyder; skjær husets byggeplate inn med skråninger og skjæring / fylling; legg innkjørsler, gangveier og uteplasser over den; lever den til CivilCraft som LandXML.
keywords: terreng, grunn, tomt, topografi, oppmåling, punkter, PNEZD, høydekurver, LAS, LAZ, LiDAR, GeoTIFF, DEM, kote, kotehøyde, fall, planering, byggeplate, skjæring, fylling, massetak, dagslinje, skråning, innkjørsel, gangvei, uteplass, belegg, LandXML, CivilCraft
from: 208298d6
---

## Hva du skal gjøre

Plasser huset på tomta. Terrenget blir en del av modellen: vist i 3D, skåret i snitt og fasader, med høydekurver på planen. En byggeplate skjæres inn under huset, innkjørsler og gangveier følger terrenget, og fundamenter trappes ned med det.

## Før inn terrenget

1. Åpne {{ui:Bygg}} og velg {{ui:Terreng}}.
2. Enten:
   - **Åpne en målefil…**: målepunkter (PNEZD, PENZD eller ren øst, nord, kote; skilt med komma, tabulator eller mellomrom), høydekurver i en DXF- eller DWG-fil (polylinjer på sin høyde, 3D-polylinjer), en LAS- eller LAZ-skanning (bakkepunkter beholdes, redusert til omtrent ett per kvadratmeter), et GeoTIFF- eller ASCII-høydegrid, eller en **LandXML**-flate slik CivilCraft eksporterer den (egne punkter og trekanter beholdes; når filen inneholder flere flater, spør BimCraft hvilken som er terrenget; enhetene hentes fra filen). Velg filens enheter først (LandXML oppgir sine egne).
   - Eller skriv inn en **Kotehøyde** (fra denne etasjens gulv, slik at `-1'` er én fot under det) og klikk punkter på planen, endre koten og klikk flere, og deretter **Lag terrenget**. Tre punkter er nok til å starte.

Målekoordinater langt fra modellen (statsplan, UTM) flyttes opp til huset, og kotene settes slik at terrenget ved huset ligger omtrent 8" under første etasje. **Hev terrenget** i **Egenskaper** korrigerer dette med et hvilket som helst beløp.

## Byggeplaten

1. Velg {{ui:Byggeplate}}.
2. Sett **Margin** rundt huset, hvor langt **platen ligger under gulvet** (8" under en plate, mer under et kryperom) og **Skråninger** ut til eksisterende terreng (`2:1` = to fot ut for hver fot opp eller ned).
3. Pek inne i huset og klikk.

Terrenget jevnes ut under huset og ut til margin, og stiger deretter opp i skråningen (skjæring) og ned til den lave siden (fylling) til det møter eksisterende terreng. **Egenskaper** for terrenget og for platen gir massene for skjæring og fylling. Flytter du veggene, følger platen med.

## Innkjørsler, gangveier og uteplasser

Velg {{ui:Dekke i belegg}}, velg **Gangvei**, **Innkjørsel** eller **Uteplass**, og klikk hjørnene. Klikk første hjørne igjen, dobbeltklikk eller trykk {{key:Enter}} for å avslutte. Dekket følger det ferdige terrenget; endre type eller tykkelse i **Egenskaper**.

## Fundamenter følger terrenget

Når terrenget er i modellen, følger sokkelvegger og fundamenter for kryperom det. Langs hver vegg ligger fundamentet like dypt under terrenget utenfor, og trapper seg i hele 8"-trinn der terrenget faller (se [Fundamenter under veggene](topic:foundations)).

## Lever det til CivilCraft

**LandXML for CivilCraft** (i raden for Terreng, eller i terrengets **Egenskaper**) laster ned eksisterende terreng og ferdig planering som en LandXML-fil. Åpne den i CivilCraft for reell planering, drenering og massearbeid.

## Greit å vite

- Terrenget krever en IFC4-modell, slik alle nye bygg gjør.
- Høydekurver vises på planen for terrengnivået med intervallet satt i terrengets **Egenskaper**; hver femte er tykkere.
- Terrenget lagres som et IFC-terrengelement (en lukket trianguleret flate, slik at snitt kan skjære den); byggeplaten og dekkene lagres med det. Slett terrenget for å starte på nytt — byggeplaten og dekkene går med.
