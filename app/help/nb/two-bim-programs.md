---
title: Arbeide mellom to BIM-programmer
summary: Send en modell fra ett BIM-program til et annet gjennom IFC med BimCraft i midten, behold GlobalId-ene, egenskapssettene og klassifiseringene, sett opp begge programmene for de samme egenskapene, og se hva som kom tilbake.
keywords: ifc, rundtur, samhandling, globalid, guid, egenskapssett, psets, klassifiseringer, delte parametere, egenskapsavbildning, oversetter, bcf, koordinering, utveksling
from: 9f224176
---

## Hva du skal gjøre

Flytt en modell mellom to BIM-programmer, for eksempel fra Revit til Archicad og tilbake, gjennom IFC, med BimCraft i midten for å kontrollere den, legge til i den og rapportere hva som overlevde. Ingen av programmenes egne filformater leses: alt reiser som IFC.

## Hva BimCraft beholder

Når du endrer en modell i BimCraft og klikker {{ui:Lagre som IFC}}, skrives hver linje du ikke endret tilbake nøyaktig som den var. Derfor:

- **GlobalId-ene** forblir de samme, og det andre programmet kan matche hvert element med det det sendte.
- **Egenskapssettene** og verdiene deres forblir, bortsett fra verdiene du endret.
- **Klassifiseringene** forblir knyttet til sine elementer.

## Sett begge programmene opp for de samme egenskapene

1. Åpne modellen i BimCraft (og prosjektpakken, hvis du har en: egenskapsgruppene legges til).
2. Åpne {{ui:Mellom to BIM-programmer}} i venstre panel.
3. Under **Egenskapsavbildning** laster du ned det hvert program trenger:
   - {{ui:Delte parametere}}: en fil med delte parametere. I Revit laster du den med Administrer › Delte parametere og legger parameterne til kategoriene som trenger dem.
   - {{ui:Egenskapssett for IFC-eksport}}: en fil med brukerdefinerte egenskapssett. I Revits innstillinger for IFC-eksport velger du den under brukerdefinerte egenskapssett, slik at den eksporterte IFC-filen bærer de samme sett- og egenskapsnavnene.
   - {{ui:Avbildningstabell (CSV)}}: hver egenskap med sitt IFC-sett og navn, sin type, og de tilsvarende navnene i hvert program. Archicads avbildningsfiler er ikke et publisert format, så sett opp dens IFC-oversetter og egenskapsbehandling fra denne tabellen for hånd.
   - {{ui:Avbildningsfil}}: hele avbildningen som én fil, som du tar vare på sammen med prosjektet.

Standardsett (Pset_ og Qto_) utelates fra filen med delte parametere: begge programmene skriver dem fra sine egne data.

## Send modellen og hent den tilbake

1. Eksporter IFC fra det første programmet med GlobalId-ene beholdt (Revit: "Store the IFC GUID in an element parameter after export" på).
2. Åpne den i BimCraft, kontroller den ({{ui:Modellkontroller}}, {{ui:Kollisjonskontroll}}), legg til saker ({{ui:Saker}}, BCF), endre verdier om nødvendig, og {{ui:Lagre som IFC}}.
3. Åpne den lagrede IFC-filen i det andre programmet, arbeid i den, og eksporter IFC derfra med GlobalId-ene beholdt (Archicads oversetter: "Global Unique Identifiers: Keep existing").
4. Tilbake i BimCraft: åpne modellen som ble sendt ut, og legg så til den som kom tilbake ({{ui:Legg til en modell}} under Modeller).
5. I {{ui:Mellom to BIM-programmer}} velger du **Sendt ut** og **Kom tilbake**, og klikker {{ui:Lag rapporten}}.

## Les rapporten

- **Elementer**: hvor mange som kom tilbake med samme GlobalId, hvor mange som mangler, og hvor mange som er nye. Elementer med ny GlobalId vises som ett manglende og ett nytt: det andre programmet beholdt den ikke.
- **IFC-klasse endret**: elementer som kom tilbake som en annen type element.
- **Egenskapsverdier beholdt**: andelen verdier som kom tilbake uendret. Listen nedenfor viser egenskapene med flest endrede eller manglende verdier.
- **Klassifiseringer**: beholdt, endret (samme system, en annen kode) eller manglende.

{{ui:Last ned rapporten (CSV)}} gir hver egenskap med sine tall. For å se hvilke elementer som flyttet seg eller endret form, bruk {{ui:Sammenlign versjoner}} på de samme to modellene.

:::note
BimCraft kjører verken det ene eller det andre programmet. Hvilke innstillinger som bærer en verdi videre, avhenger av hvert programs IFC-innstillinger: rapporten viser hva som faktisk kom tilbake, så prøv en innstilling, eksporter på nytt og sammenlign.
:::

## Saker sendes som BCF

Saker du reiser i BimCraft eksporteres som BCF ({{ui:Saker}}), som begge programmene kan lese med sine BCF-verktøy, slik at et spørsmål om et element når personen som jobber i det andre programmet, med sin visning.

Se også [Åpne en prosjektpakke](topic:open-project-bundle), [Fra en prosjektfil til BimCraft gjennom IFC](topic:rvt-to-ifc) og [Sammenlign to versjoner av en modell](topic:compare-versions).
