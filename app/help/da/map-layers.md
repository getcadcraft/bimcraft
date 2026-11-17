---
title: Et kort på jorden under modellen
summary: Læg et vejkort eller et luftfoto på jorden under en georefereret IFC-model, fra kortfliser, kortservices eller et billede med en verdensfil.
keywords: kort, kortlag, baggrundskort, luftfoto, satellit, grund, jord, fliser, xyz, wms, wmts, kortservice, verdensfil, georeferering, ifcmapconversion, projiceret CRS, EPSG, grundens kontekst
from: 84e2e9df
---

## Hvad du skal gøre

Se modellen på sit sted: grundens vejkort eller luftfoto på jorden under den.

## Trin

1. Åbn en IFC-model, der har sit sted på kortet (en kortkonvertering, IfcMapConversion, med et projiceret koordinatsystem). Eksportører skriver det, når projektets koordinater (opmålingspunkt, fælles koordinater) er sat.
2. Vælg {{ui:Vis}} › {{ui:Kortlag…}}. Dialogen siger modellens system, for eksempel EPSG:28356. En model uden kortkonvertering kan ikke have kortlag: dialogen siger det.
3. Slå {{ui:Kortlag fra internettet}} til. Indtil da spørges ingen server om noget. Når den er til, ser de servere, du tilføjer, området omkring modellen og din internetadresse, aldrig din model.
4. I {{ui:Tilføj et lag}} vælg fliser (en adresse med `{z}`, `{x}` og `{y}`), en WMS-, WMTS- eller ArcGIS-tjeneste ({{ui:Hent lag}}, og vælg derefter ét), eller et billede med dens verdensfil.
5. Luk dialogen. Kortet ligger på jorden lige under modellens laveste punkt, over modellens fodaftryk og lige så langt rundt om det.

:::note
Kortet vises kun på skærmen; det gemmes ikke i IFC-filen. Listen over lag gemmes i denne browser. Brug kun kortservices, hvis vilkår tillader det.
:::
