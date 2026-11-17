---
title: Byggegrundens terræn, byggeplateau og belægning
summary: Hent terrænet ind i modellen fra opmålingspunkter, højdekurver, en LAS / LAZ-scanning, en GeoTIFF, en LandXML-overflade (CivilCraft's) eller nogle få koteangivelser; grav husets byggeplateau ind med dets skråninger og afgravning / opfyld; læg indkørsler, stier og terrasser på det; overdrag det til CivilCraft som LandXML.
keywords: terræn, grund, byggegrund, topografi, opmåling, punkter, PNEZD, højdekurver, LAS, LAZ, LiDAR, GeoTIFF, DEM, kote, koteangivelse, fald, planering, plateau, byggeplateau, afgravning, opfyld, jordarbejde, skæring i terræn, skråning, indkørsel, sti, terrasse, belægning, LandXML, CivilCraft
from: 208298d6
---

## Hvad du laver

Placér huset på dets grund. Terrænet bliver en del af modellen: vist i 3D, skåret i snit og facader, med højdekurver på planen. Et byggeplateau skæres ind under huset, indkørsler og stier følger det, og fundamenter trapper ned med det.

## Hent terrænet ind

1. Åbn {{ui:Build}} og vælg {{ui:Terrain}}.
2. Enten:
   - **Åbn en opmålingsfil…**: opmålingspunkter (PNEZD, PENZD eller almindelig øst, nord, kote; adskilt med komma, tabulator eller mellemrum), højdekurver i en DXF eller DWG (polylinjer ved deres kote, 3D-polylinjer), en LAS- eller LAZ-scanning (jordpunkter bevaret, reduceret til ca. ét pr. kvadratmeter), en GeoTIFF eller et ASCII-koteraster, eller en **LandXML**-overflade, som CivilCraft eksporterer (dens egne punkter og trekanter bevares; når filen indeholder flere overflader, spørger BimCraft, hvilken der er terrænet; dens enheder kommer fra filen). Vælg filens enheder først (LandXML angiver sine egne).
   - Eller skriv en **Koteangivelse** (fra denne etages gulv, så `-1'` er en fod under det) og klik punkter på planen, ændr koten og klik flere, og klik derefter på **Lav terrænet**. Tre punkter er nok til at starte.

Opmålingskoordinater langt fra modellen (state plane, UTM) flyttes hen til huset, og koterne sættes, så terrænet ved huset ligger ca. 8" under første etage. **Hæv terrænet** i **Egenskaber** korrigerer det med et vilkårligt beløb.

## Byggeplateauet

1. Vælg {{ui:Building pad}}.
2. Angiv **Margin** rundt om huset, hvor langt **plateauet ligger under gulvet** (8" under et dæk, mere under en krybekælder) og **Skråninger** ud til det eksisterende terræn (`2:1` = to fod ud for hver fod op eller ned).
3. Peg inde i huset og klik.

Terrænet udjævnes under huset og ud til margenen, og skråner derefter op i skrænten (afgravning) og ned til den lave side (opfyld), indtil det møder det eksisterende terræn. **Egenskaber** for terrænet og for plateauet angiver volumen for afgravning og opfyld. Flytter du væggene, følger plateauet med.

## Indkørsler, stier og terrasser

Vælg {{ui:Paving}}, vælg **Sti**, **Indkørsel** eller **Terrasse**, og klik hjørnerne. Klik på første hjørne igen, dobbeltklik eller tryk på {{key:Enter}} for at afslutte. Belægningen følger det færdige niveau; ændr dens type eller tykkelse i **Egenskaber**.

## Fundamenter følger terrænet

Med terrænet i modellen følger sokkelvægge og fundamenter under krybekælderen det. Langs hver væg bliver fundamentet liggende i sin dybde under terrænet udenfor og trinner i hele 8"-trin, hvor terrænet falder (se [Fundamenter under væggene](topic:foundations)).

## Overdrag til CivilCraft

**LandXML til CivilCraft** (i rækken Terræn eller i terrænets **Egenskaber**) downloader det eksisterende terræn og det færdige niveau som en LandXML-fil. Åbn den i CivilCraft til egentlig planering, dræning og jordarbejde.

## Godt at vide

- Terrænet kræver en IFC4-model, ligesom alle nye bygninger.
- Højdekurver vises på planen for terrænets niveau med den afstand, der er angivet i terrænets **Egenskaber**; hver femte er tykkere.
- Terrænet gemmes som et IFC-terrænelement (en lukket trianguleret overflade, så snit skærer i den); plateauet og belægningen gemmes sammen med det. Slet terrænet for at starte forfra: dets plateau og belægning går med.
