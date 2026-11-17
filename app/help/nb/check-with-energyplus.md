---
title: Sjekk oppvarming og kjøling med EnergyPlus
summary: Skriv modellen som en EnergyPlus-fil, eller kjør EnergyPlus versjon 26.2.0 på den i nettleseren, og sammenlign dimensjonerende laster med det raske varme- og kjølehjelpemiddelet. En annen vurdering for tidlig prosjektering, ikke en beregning for samsvar.
keywords: energyplus, energisimulering, dimensjonerende dag, varmelast, kjølelast, værfil, epw, idf, termisk masse, årlig energi, simulere
from: b82a5bf2
---

## Hva du gjør

Panelet **Kontroller med EnergyPlus** skriver den åpne modellen som en EnergyPlus-inndatafil (en IDF): én sone per rom, veggene, gulvene, takene og vinduene med sine U-verdier, luftvekslingene, og ideell oppvarming og kjøling. Du kan alltid **lagre den filen** og kjøre den i din egen EnergyPlus.

Hvis du også setter opp motoren, kan panelet simulere på stedet og lister EnergyPlus sin dimensjonerende oppvarming og kjøling ved siden av det raske hjelpemiddelets, rom for rom.

Dette er et prosjekteringshjelpemiddel. Energikrav, sertifisering og tillatelser krever et godkjent verktøy og klimadataene det krever, og resultatet må gjennomgås av personen som står ansvarlig for det.

## Sett opp motoren

BimCraft inneholder ikke EnergyPlus. Det er et stort WebAssembly-bygg (ca. 6 MB komprimert, pluss en datafil på 4.6 MB), så du må selv være vert for det og skrive adressen i panelet. Siden laster det bare når du trykker på en simuleringsknapp, aldri ved oppstart. Adressen må være https, en sti på denne siden, eller localhost.

## Dimensjonerende dager eller et år

- **Simuler dimensjonerende dager** trenger ingen værfil. Den kjører en kald vinterdag uten sol og en varm, klar sommerdag, ved temperaturene i varme- og kjøleinndataene på Dagslys-fanen, og rapporterer lasten for hvert rom i watt.
- **Simuler et år** trenger en værfil i EPW-format som du velger. Den legger til personer, lys og utstyr fra de samme inndataene (alltid på, siden ingen tidsplan er funnet på) og rapporterer varme- og kjøleenergien for hvert rom i kWh. Værfiler har egne lisenser, så bruk en du har lov til å bruke.

## Termisk masse

Kryss av for **Gi vegger med kjente lag termisk masse**, så skrives vegger, tak og gulv der materiallagene er kjent, lag for lag, med tetthet og spesifikk varmekapasitet hentet fra en kort tabell med typiske verdier etter materialnavn. Lagene tas utenfra først, i den rekkefølgen filen lister dem. Elementer uten lag beholder sin U-verdi uten masse.

## Lese sammenligningen

De to metodene svarer på litt ulike spørsmål. Det raske hjelpemiddelet beholder alle elementer; EnergyPlus-filen midler hvert roms U-verdier etter type flate. En forskjell over 15 % i et rom sin dimensjonerende oppvarming listes som et notat i ⚠-panelet, med begge tallene. Kjøling avviker mer med vilje: det raske hjelpemiddelet finner en topp ut fra solen på én dato, mens EnergyPlus dimensjonerer på sin egen dimensjonerende dag.
