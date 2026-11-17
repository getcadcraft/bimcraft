---
title: Enheter ved import: en fil oppgir sine enheter, eller du blir spurt først
summary: Når en fil du henter inn oppgir sine enheter, bruker BimCraft dem og sier fra om det. Når den ikke gjør det, spør BimCraft før noe plasseres, og husker svaret ditt for den filen.
keywords: enheter, import, åpne, OBJ, STL, DWG, DXF, IFC, punktsky, bibliotekselement, millimeter, meter, tommer, fot, skala, feil størrelse, for stor, for liten, 1000 ganger, spør, husket
from: f044e9bc
---

## Det du skal gjøre

Hent inn en fil og vær sikker på at den kommer inn i riktig størrelse.

## Steg

1. Åpne eller legg til filen som vanlig: {{ui:Åpen}}, {{ui:Filer}} i biblioteket, {{ui:Punktskyer}}, eller Bygg › Fra en tegning.
2. Hvis filen oppgir sine enheter, blir du ikke spurt om noe. Statuslinjen sier hvilke enheter filen oppgir.
3. Hvis ikke, spør en dialogboks etter **Enheter for** filen. Velg hva én enhet i filen er, og klikk {{ui:Bruk disse enhetene}}. Ingenting plasseres før du har svart.
4. {{ui:Avbryt}} (eller {{key:Esc}}) henter ikke inn noe.

## Hvilke filer som oppgir sine enheter

- **IFC**: oppgir sin lengdeenhet, og «Åpnet» sier hvilken. En IFC som ikke oppgir noen, blir spurt om før den åpnes. Svaret ditt skrives inn i modellen, så filen oppgir den når du lagrer.
- **DWG og DXF**: tegningens innsettingsenheter. En tegning uten dem blir spurt om (filer i biblioteket, Bygg › Fra en tegning, terreng fra høydekurver).
- **Punktlister** for terreng: oppgir ingen enheter. Du blir spurt.
- **Punktskyer**: LAS og LAZ med et koordinatsystem, E57, PTX og PLY oppgir sine. Andre blir spurt om.
- **OBJ og STL**: oppgir aldri enheter. Du blir spurt.
- **glTF og GLB**: meter, etter formatets egen regel.
- **Bilder**: har ingen størrelse i seg selv. Et bilde tilpasses visningen, og du setter størrelsen med **Skaler med to punkter**. Størrelsen du gir, huskes for den filen: plassert igjen, kommer den inn i den størrelsen, og statuslinjen sier det.
- **Tillegget for punktskyer**: spør når du bygger en sky hvis filen ikke oppgir noen enhet, og merker skyens tall med enheten den har.

## Greit å vite

- Svaret huskes for filen (navn, størrelse og dato) på denne datamaskinen, i alle CadCraft-programmene. Neste gang samme fil kommer inn, blir du ikke spurt, og statuslinjen sier at de huskede enhetene ble brukt.
- For å bli spurt igjen: kommandopaletten ({{key:Mod+K}}) › **Spør igjen om enhetene for importerte filer**.
- En enhetsliste som en import allerede har (Enheter i biblioteket, Enheter i skyfeltet, Tegningsenheter i Fra en tegning) endrer fortsatt enhetene etterpå. Terrengverktøyets Enheter-liste er nå bare det spørsmålet starter med.
