---
title: Åpne en hel prosjektmappe
summary: Pek BimCraft på en prosjektmappe for å se alle modeller, sikkerhetskopiene og koblingene på en gang, og la boksen Start her foreslå hvilken fil du bør arbeide med.
keywords: mappe, katalog, prosjektmappe, nettverksstasjon, server, start her, hvilken fil, sikkerhetskopier, koblinger, xrefs, nylige mapper, dra mappe
from: 16fbdce2
---

## Hva du skal gjøre

Åpne en hel prosjektmappe, slik som den du fikk til en jobb, og la BimCraft ordne den: hvilke modeller som finnes, hvilke kopier som er sikkerhetskopier, hva som er koblet til hva, hvilke filer som er skadet, og hvilken fil du mest sannsynlig vil åpne.

Bare de få kilobyte hvert modellkort trenger leses, så en mappe på en nettverksstasjon eller en synkronisert skymappe er i orden.

## Steg

:::chromium
1. Klikk {{ui:Åpne en mappe}} til venstre (eller midt på den tomme skjermen).
2. Velg prosjektmappen i vinduet som åpnes, og klikk **Velg** (eller **Last opp** eller **Åpne**, avhengig av systemet ditt).
3. Klikk **Vis filer** når nettleseren spør «Tillate at siden ser filene?». Dette lar bare fanen lese mappen; ingenting lastes opp.
4. Vent mens statuslinjen teller: «Lister mappen: … filer», deretter «Sjekker Revit-filer: … av …».
:::

:::firefox
1. Klikk {{ui:Åpne en mappe}} til venstre (eller midt på den tomme skjermen).
2. Velg prosjektmappen i vinduet som åpnes, og bekreft. Firefox kan be deg bekrefte at siden kan lese mappens filer; de blir fortsatt på datamaskinen din.
3. Vent mens statuslinjen sier «Leser mappen: … filer», deretter «Sjekker Revit-filer: … av …».
:::

:::safari
1. Klikk {{ui:Åpne en mappe}} til venstre (eller midt på den tomme skjermen).
2. Velg prosjektmappen i vinduet som åpnes, og klikk **Last opp**. Til tross for ordet forlater ingenting Macen: filene overlates bare til fanen.
3. Vent mens statuslinjen sier «Leser mappen: … filer», deretter «Sjekker Revit-filer: … av …».
:::

Du kan også **dra mappen** fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} og slippe den på siden. En dratt mappe åpnes uten tillatelsesspørsmål i alle nettlesere.

## Hva du bør se

Mappe-rapporten fyller midten:

- Mappenavnet, antall modeller, CAD-tegninger, IFC-modeller og filer, og totalstørrelsen.
- Røde eller gule merknader hvis noen filer er ufullstendige, eller hvis koblede filer mangler i mappen.
- Boksen {{ui:Start her}}: filen BimCraft foreslår at du åpner, med begrunnelsene.
- **Modeller**: én rad per modell, med sikkerhetskopiene gruppert under.
- **Koblede og refererte filer**, **IFC-modeller**, **CAD-tegninger** og **Satt til side**, når mappen har noen.

Til venstre oppsummerer panelet {{ui:Mappe}} saken; **Problemer** sier «Ingen» når alle kopiene er i orden.

## Bruk boksen Start her

Boksen nevner én fil og sier hvorfor, for eksempel:

- «Nyeste lagrede arbeid i denne mappen (3. mars 2025).»
- «*Consultant.rvt* er koblet inn i andre modeller, så den er bakgrunn, ikke filen å redigere.»
- «*Tower.rvt* ser ut som det åpenbare valget, men den er skadet; den siste gode kopien er fra …»
- «Dette er en sentral modell: i Revit åpner du den med «Create New Local» og arbeider i den lokale kopien.»

1. Les begrunnelsene.
2. Klikk {{ui:Åpne kortet}} for å lese den filens kort, eller {{ui:Vis den i listen}} for å finne raden i **Modeller**.
3. Sjekk med den som sist arbeidet med prosjektet før du stoler på den. Boksen sier det også: det er et beste gjett basert på navn, datoer og koblinger.

## Åpne filer fra rapporten

1. Klikk på en modells navn for å åpne kortet. Kortet sjekker hver kobling mot mappen.
2. Klikk {{ui:Tilbake til}} og mappenavnet øverst på kortet (eller {{ui:Tilbake til mappen}} til venstre) for å gå tilbake.
3. Klikk på en IFC-fil under **IFC-modeller** for å åpne den i 3D.
4. Klikk på en DWG eller DXF under **CAD-tegninger** for å åpne den i 2D. Dens koblede tegninger og bilder finnes i mappen automatisk.

## Åpne en mappe igjen senere

:::chromium
Mapper du åpnet med {{ui:Åpne en mappe}} eller ved å dra, listes under {{ui:Nylige mapper}} til venstre. Klikk {{ui:Åpne igjen}} og mappenavnet for å åpne den igjen uten å velge den. Etter at nettleseren startes på nytt, spør Chrome eller Edge én gang til; velg «Tillat ved hvert besøk» for å slutte å bli spurt. Listen lagres bare i denne nettleseren og sendes aldri noe sted. Klikk × for å glemme en mappe.
:::

:::firefox safari
Denne nettleseren kan ikke huske mapper mellom besøk. Velg mappen på nytt med {{ui:Åpne en mappe}}, eller dra den inn.
:::

## Vanlige feil

- **Å velge en mappe som er for stor.** Over 20 000 filer: «Denne mappen har mer enn 20 000 filer. Velg en mindre mappe, for eksempel ett prosjekt.» Velg prosjektmappen, ikke hele stasjonen.
- **Å velge overordnet mappe for flere prosjekter.** Boksen {{ui:Start her}} velger da på tvers av prosjekter. Velg ett prosjekt.
- **Revits egne mapper ser ut til å ignoreres.** Mapper som `*_backup`, `*_log` og `Revit_temp` er vedlikeholdsfiler og listes under **Satt til side**, ikke leses.
- **Å vente at en modell åpnes i 3D fra kortet.** En prosjektfil er bare et kort. Åpne dens IFC-eksport.
- **Telefoner og nettbrett.** Mange mobilnettlesere kan ikke velge mapper i det hele tatt. Bruk en datamaskin.

Se [Sjekk en mappe for skadede kopier, manglende koblinger og rester](topic:check-folder-health) og [Mappe-rapport: roller, statuser og koblinger](topic:folder-roles).
