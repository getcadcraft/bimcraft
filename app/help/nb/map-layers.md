---
title: Et kart på bakken under modellen
summary: Legg et gatekart eller et flyfoto på bakken under en georeferert IFC-modell, fra karttiles, kartjenester eller et bilde med en verdensfil.
keywords: kart, kartlag, bakgrunnskart, flyfoto, satellitt, tomt, bakke, tiles, xyz, wms, wmts, kartjeneste, verdensfil, georeferering, ifcmapconversion, projisert koordinatsystem, EPSG, tomtekontekst
from: 84e2e9df
---

## Hva du gjør

Se modellen på sin plass: stedets gatekart eller flyfoto på bakken under den.

## Steg

1. Åpne en IFC-modell som har sin plass på kartet (en kartkonvertering, IfcMapConversion, med et projisert koordinatsystem). Eksportører skriver den når prosjektets koordinater (oppmålingspunkt, felles koordinater) er satt.
2. Velg {{ui:Vis}} › {{ui:Kartlag…}}. Dialogen sier modellens system, for eksempel EPSG:28356. En modell uten kartkonvertering kan ikke ha kartlag: dialogen sier fra om det.
3. Slå på {{ui:Kartlag fra internett}}. Inntil da spørres ingen server om noe. Når den er på, ser serverne du legger til området rundt modellen og internettadressen din, aldri modellen din.
4. I {{ui:Legg til et lag}} velger du fliser (en adresse med `{z}`, `{x}` og `{y}`), en WMS-, WMTS- eller ArcGIS-tjeneste ({{ui:Hent lag}}, og velg så ett), eller et bilde med sin verdensfil.
5. Lukk dialogen. Kartet ligger på bakken rett under modellens laveste punkt, over modellens fotavtrykk og like langt ut rundt det.

:::note
Kartet vises bare på skjermen; det lagres ikke i IFC-filen. Listen over lag beholdes i denne nettleseren. Bruk bare kartjenester der vilkårene tillater det.
:::
