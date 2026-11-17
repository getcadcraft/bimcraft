---
title: Online og offline
summary: Hvad BimCraft henter fra webstedet, hvordan Gem til offline brug får IFC-modeller og DWG-tegninger til at åbne uden forbindelse, og hvorfor det, du åbner, aldrig uploades.
keywords: offline, online, internet, forbindelse, intet netværk, fly, besøg på stedet, gem til offline brug, klar offline, upload, privatliv, wasm, webassembly, IFC-motor, dwg, sky
from: 39e5c7eb
---

BimCraft læser dine filer inde i browserfanen. Åbning, gennemsyn, redigering og gemning sender aldrig dine filer nogen steder, online eller offline. [Arbejd offline](common:offline) forklarer, hvordan offline-kopier virker i alle apps; denne side dækker det, der er særligt for BimCraft.

## Hvad BimCraft henter fra webstedet

| Del | Hvornår den indlæses uden offline-kopi | Størrelse |
|---|---|---|
| Selve appen, med 3D-fremviseren og IFC-motorens kode | Når du åbner BimCraft | Flere megabyte |
| IFC-motorens WebAssembly-del | Den første IFC-fil, du åbner i fanen: "Starter IFC-motoren…" | Ca. 1.6 MB |

DWG- og DXF-tegninger, projekt- og familiefiler og mapper kræver ikke noget ekstra: deres læsere er en del af appen.

## Gem BimCraft til offline brug

1. Åbn BimCraft, mens du er online.
2. Klik på {{ui:Gem til offline brug}} i appbjælken øverst.
3. Se knappens tal tælle op: "Gemmer 40 af 212", for eksempel. BimCraft-kopien fylder ca. 11 MB, fordi den indeholder IFC-motoren.
4. Vent på {{ui:Klar offline}}.

Når der står {{ui:Klar offline}}, åbner IFC-modeller, DWG- og DXF-tegninger, projektfiler, mapper og denne hjælp uden forbindelse. Du behøver ikke at åbne en IFC- eller DWG-fil først for at "varme" læserne op.

Vil du opdatere eller fjerne kopien, klik på {{ui:Klar offline}} og vælg {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}.

## Hvad knappen siger

| Knap | Betyder |
|---|---|
| {{ui:Gem til offline brug}} | Ingen offline-kopi i denne browser endnu. Klik for at gemme en |
| "Gemmer *n* af *m*" | Gemmer; hold fanen åben, til det er færdigt |
| {{ui:Klar offline}} | Gemt. Hold musen over for at se hvornår; klik for menuen |
| {{ui:Kunne ikke gemme}} | Nogle filer blev ikke hentet. Tjek din forbindelse, og klik for at prøve igen. Den sidste gode kopi, hvis der er en, bevares |
| {{ui:Offline er ikke tilgængelig}} | Dette vindue kan ikke gemme en offline-kopi (et privat vindue eller en administreret computer). Se [Arbejd offline](common:offline) |

:::offline
Du er offline.

- Står der {{ui:Klar offline}} på knappen, åbner alle slags filer som normalt.
- Gør den ikke det, virker kun det, som denne fane allerede har indlæst: en læser, der aldrig er indlæst i denne fane, kan ikke starte, og åbning af den slags fil viser en fejl fra browseren i statuslinjen. Genindlæs ikke fanen, før du igen er online.
:::

## Det kræver aldrig forbindelse

Når BimCraft er åbent i fanen, virker disse uden forbindelse, selv uden en gemt kopi:

- Læsning af projekt- og familiefiler og gennemsyn af mapper.
- Valg af elementer, læsning af egenskaber og redigering af IFC-værdier i en model, der allerede er åben.
- {{ui:Gem som IFC}} og {{ui:Download CSV}}: begge er downloads, der laves i fanen.

## Det er ikke tilgængeligt endnu

- **Skylagring.** Filer gemmes kun på din computer.

Se [Hvor dine filer gemmes](common:your-files).
