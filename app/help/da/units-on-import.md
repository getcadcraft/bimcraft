---
title: Enheder ved import: en fil angiver sine enheder, eller du bliver spurgt først
summary: Når en fil du importerer angiver sine enheder, bruger BimCraft dem og siger det. Når den ikke gør, spørger BimCraft, før noget placeres, og husker dit svar for den fil.
keywords: enheder, import, åbn, OBJ, STL, DWG, DXF, IFC, punktsky, biblioteksemne, millimeter, meter, tommer, fod, skala, forkert størrelse, for stor, for lille, 1000 gange, spørg, husket
from: f044e9bc
---

## Hvad du gør

Importér en fil og sørg for, at den kommer ind i den rigtige størrelse.

## Trin

1. Åbn eller tilføj filen som vanligt: {{ui:Åben}}, {{ui:Filer}} i biblioteket, {{ui:Punktskyer}} eller Byg › Fra en tegning.
2. Hvis filen angiver sine enheder, bliver du ikke spurgt om noget. Statuslinjen siger, hvilke enheder filen angiver.
3. Hvis den ikke gør, vises en dialog, der spørger om **Enheder for** filen. Vælg, hvad én enhed i filen er, og klik på {{ui:Brug disse enheder}}. Intet placeres, før du har svaret.
4. {{ui:Annuller}} (eller {{key:Esc}}) henter intet ind.

## Hvilke filer angiver deres enheder

- **IFC**: angiver sin længdeenhed, og "Åbnet" siger, hvilken. En IFC, der ikke angiver nogen, bliver spurgt om, før den åbnes. Dit svar skrives ind i modellen, så filen angiver den én gang, når du gemmer.
- **DWG og DXF**: tegningens indsætningsenheder. En tegning uden dem bliver spurgt om (filer i biblioteket, Byg › Fra en tegning, terræn fra højdekurver).
- **Lister med punkter** til terræn: angiver ingen enheder. Du bliver spurgt.
- **Punktskyer**: LAS og LAZ med et koordinatsystem, E57, PTX og PLY angiver deres. Andre bliver spurgt om.
- **OBJ og STL**: angiver aldrig enheder. Du bliver spurgt.
- **glTF og GLB**: meter, efter formatets egen regel.
- **Billeder**: har ingen størrelse i sig selv. Et billede tilpasses visningen, og du sætter dets størrelse med **Skalér efter to punkter**. Den størrelse, du angiver, huskes for den fil: placeres den igen, kommer den ind i den størrelse, og statuslinjen siger det.
- **Tilføjelsen Punktskyer**: spørger, når du bygger en sky, hvis dens fil ikke angiver nogen enhed, og den mærker skyens tal med den enhed, den bærer.

## Godt at vide

- Svaret huskes for den fil (dens navn, størrelse og dato) på denne computer, i alle CadCraft-apps. Næste gang den samme fil kommer ind, bliver du ikke spurgt, og statuslinjen siger, at de huskede enheder blev brugt.
- For at blive spurgt igen: kommandopaletten ({{key:Mod+K}}) › **Spørg igen om enheder for importerede filer**.
- En enhedsliste, som en import allerede har (bibliotekets Enheder, punktskyens værktøjslinje Enheder, Tegningsenheder i Fra en tegning), ændrer stadig enhederne bagefter. Terrænværktøjets liste Enheder er nu kun det, spørgsmålet starter på.
