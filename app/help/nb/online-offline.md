---
title: Tilkoblet og frakoblet
summary: Hva BimCraft laster fra nettstedet, hvordan Lagre for frakoblet bruk gjør at IFC-modeller og DWG-tegninger åpnes uten forbindelse, og hvorfor ingenting du åpner noen gang lastes opp.
keywords: frakoblet, tilkoblet, internett, forbindelse, ingen nettverk, flymodus, besøk på stedet, lagre for frakoblet bruk, klar frakoblet, opplasting, personvern, wasm, webassembly, IFC-motor, dwg, sky
from: 39e5c7eb
---

BimCraft leser filene dine inne i nettleserfanen. Åpning, inspeksjon, redigering og lagring sender aldri filene dine noe sted, verken tilkoblet eller frakoblet. [Arbeide frakoblet](common:offline) forklarer hvordan frakoblede kopier fungerer i alle appene; denne siden dekker det som er spesielt for BimCraft.

## Hva BimCraft laster fra nettstedet

| Del | Når den lastes uten frakoblet kopi | Størrelse |
|---|---|---|
| Selve appen, med 3D-viseren og IFC-motorens kode | Når du åpner BimCraft | Flere megabyte |
| IFC-motorens WebAssembly-del | Den første IFC-filen du åpner i fanen: «Starter IFC-motoren…» | Omtrent 1.6 MB |

DWG- og DXF-tegninger, prosjekt- og familiefiler og mapper trenger ingenting ekstra: leserne deres er en del av appen.

## Lagre BimCraft for frakoblet bruk

1. Åpne BimCraft mens du er tilkoblet.
2. Klikk {{ui:Lagre for frakoblet bruk}} i programlinjen øverst.
3. Se knappen telle opp: «Lagrer 40 av 212», for eksempel. BimCrafts kopi er omtrent 11 MB, fordi den inkluderer IFC-motoren.
4. Vent på {{ui:Klar frakoblet}}.

Når det står {{ui:Klar frakoblet}}, åpnes IFC-modeller, DWG- og DXF-tegninger, prosjektfiler, mapper og denne hjelpen uten forbindelse. Du trenger ikke å åpne en IFC- eller DWG-fil først for å «varme opp» leserne.

For å oppdatere eller fjerne kopien, klikk {{ui:Klar frakoblet}} og velg {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}.

## Hva knappen sier

| Knapp | Betyr |
|---|---|
| {{ui:Lagre for frakoblet bruk}} | Ingen frakoblet kopi i denne nettleseren ennå. Klikk for å lagre en |
| «Lagrer *n* av *m*» | Lagrer; hold fanen åpen til den er ferdig |
| {{ui:Klar frakoblet}} | Lagret. Hold musepekeren over for å se når; klikk for menyen |
| {{ui:Kunne ikke lagre}} | Noen filer ble ikke lastet ned. Sjekk forbindelsen og klikk for å prøve igjen. Den siste gode kopien, hvis det finnes en, beholdes |
| {{ui:Frakoblet bruk er ikke tilgjengelig}} | Dette vinduet kan ikke beholde en frakoblet kopi (et privat vindu eller en administrert datamaskin). Se [Arbeide frakoblet](common:offline) |

:::offline
Du er frakoblet.

- Hvis knappen sier {{ui:Klar frakoblet}}, åpnes alle typer filer som vanlig.
- Hvis ikke, fungerer bare det denne fanen allerede har lastet: en leser som aldri er lastet i denne fanen, kan ikke starte, og åpning av den typen fil viser en feil fra nettleseren i statuslinjen. Ikke last inn fanen på nytt før du er tilkoblet igjen.
:::

## Hva som aldri trenger forbindelse

Når BimCraft er åpen i fanen, virker disse frakoblet selv uten lagret kopi:

- Lesing av prosjekt- og familiefiler og kontroll av mapper.
- Plukking av elementer, lesing av egenskaper og redigering av IFC-verdier i en modell som allerede er åpen.
- {{ui:Lagre som IFC}} og {{ui:Last ned CSV}}: begge er nedlastinger gjort i fanen.

## Hva som ikke er tilgjengelig ennå

- **Skylagring.** Filer lagres bare på datamaskinen din.

Se [Hvor filene dine går](common:your-files).
