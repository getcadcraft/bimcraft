---
title: "Klimaframtider: flom, varme og skogbrann i 2050 og 2080"
summary: Kjør flom, energiåret og en skogbrannscreening på nytt med fremtidig klima (scenariene SSP2-4.5 og SSP5-8.5, årene 2050 og 2080) fra en klimadatapakke, vist side om side med nåtid.
keywords: klima, klimaendring, fremtid, 2050, 2080, ssp, cmip6, scenario, havnivå, flom, varme, værfil, epw, morfing, energyplus, skogbrann, brannfare, brannvær
from: 224ecd08
---

Klimatallene kommer fra en **datapakke**, ikke fra appen. Slå på tillegget {{ui:Klimaframtider}} i Innstillinger › Tillegg, eller last inn en egen pakkefil i {{ui:Klimaframtid}}-blokken.

:::warning
Pakken som følger med tillegget, er et **eksempel**: tre steder (Denver, Miami, Johannesburg), én klimamodell, fem år i hver 20-årsperiode. Den er der for å prøve verktøyene, **ikke til prosjektering**. Panelet sier det i fet skrift mens den er i bruk. En full pakke (mange modeller, alle år, flere steder) bygges med `tools/climate/build-pack.mjs` fra NASAs NEX-GDDP-CMIP6-data.
:::

## Velg en framtid

I venstre panels {{ui:Farefremvisning}}, velg et **Scenario** (SSP2-4.5, middelveien, eller SSP5-8.5, høye utslipp) og et **År** (2050 betyr 2041–2060, 2080 betyr 2071–2090; begge mot 1995–2014). **Sted** er pakkens sted nærmest modellens tomt (IfcSite-breddegrad og -lengdegrad), eller det du velger. Langt fra alle steder brukes pakkens globale gjennomsnittsendringer, og panelet sier fra om det.

## Flom, nåtid ved siden av fremtid

Med et scenario valgt, velg **Flomtype**: kystflom (legger til havnivåstigningen), elveflom eller kraftig regn (dypere med endringen i den våteste dagens nedbør), eller begge. Trykk {{ui:Kjør}}: flommen spilles av som før, og en tabell viser nåtidens og fremtidens flom side om side (vannstand, rom som blir våte, dypeste vann). Forutsetningene er listet under den:

- en kystvannstand stiger med hele havnivåstigningen; stormflo og bølger endres ikke;
- elvestrømmen stiger én til én med nedbøren den våteste dagen, og dybden følger strømmen opphøyd i 0.6 (Mannings ligning for en bred kanal);
- de to delene legges ganske enkelt sammen.

## Varme: en fremtidig værfil

Velg typen {{ui:Varme: fremtidig værfil}}, velg en `.epw`-værfil for dagens klima, og trykk {{ui:Lag den fremtidige værfilen}}. Filen **morfes** måned for måned med den publiserte forskyvnings- og strekkmetoden (Belcher, Hacker og Powell 2005): månedens middel varmes opp med pakkens endring, de varme ettermiddagene med endringen i det daglige maksimum, og de kalde nettene med endringen i det daglige minimum. Relativ fuktighet flyttes med pakkens endring, og duggpunktet beregnes på nytt. Trykk og vind står som de var. Tabellen sammenligner middel- og varmeste temperatur, dimensjonerende temperaturer for kjøling (0.4 %) og oppvarming (99.6 %), timene ved 30 °C og 35 °C, og graddagene.

{{ui:Lagre den fremtidige værfilen}} lagrer den. {{ui:Bruk den i energikontrollen}} gir den til EnergyPlus-kontrollen (Energi-fanen). Den fremtidige filen er det samme typiske året, bare varmere: den legger ikke til nye hetebølger.

## Energiår, nåtid ved siden av fremtid

I Energi-fanens EnergyPlus-kontroll (et eget tillegg, med din egen motor), velg en værfil for nåtid, deretter et scenario og et år i dens {{ui:Klimaframtid}}-blokk, og trykk {{ui:Simuler et år: nåtid og fremtid}}. Året kjøres på nåtidens fil og på dens morfede fremtidsfil, og oppvarming og kjøling for hvert rom listes side om side.

## Brannfare (kun screening)

Velg typen {{ui:Brannfare (kun screening)}}: nærmeste vegetasjon, stigningen opp fra den til bygningen, og avstanden til den. Resultatet er et bånd fra svært lav til ekstrem, for nåtid og fremtid.

:::warning
**Kun screening.** Dette er vår egen relative skala for å se om et sted trenger en ordentlig vurdering av brannfare. Den er ikke en byggeforskriftsvurdering eller en Bushfire Attack Level. Den multipliserer en vekt for vegetasjonen, en skråningsfaktor (en brann nesten dobler farten for hver 10 grader oppover, regnet opp til 20 grader), en avstandsfaktor (10 m delt på avstanden, høyst 1) og pakkens endring i brannværindeksen.
:::

## Hvor tallene kommer fra

- **Temperatur, fuktighet, solskinn, nedbør, brannvær:** NASA NEX-GDDP-CMIP6, daglig nedskalert utdata fra CMIP6-klimamodeller. Hver modells utdata er under CC BY 4.0. Endringen i brannværindeksen er Canadian Fire Weather Index beregnet dag for dag ut fra modellens vær (med daglig fuktighet i stedet for middagsfuktighet).
- **Havnivåstigning:** IPCCs AR6 globale middel (ikke lokalt; land som hever seg eller synker, er ikke med), med mindre en pakke har lokale tall.
- Pakken oppgir sin kilde, lisens og dato; panelet viser dem.
