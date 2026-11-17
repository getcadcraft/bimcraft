---
title: "Klimafremtider: oversvømmelse, hede og skovbrand i 2050 og 2080"
summary: Kør oversvømmelsen, energiåret og en skovbrandsscreening igen med fremtidigt klima (scenarierne SSP2-4.5 og SSP5-8.5, årene 2050 og 2080) fra en klimadatapakke, vist ved siden af nutiden.
keywords: klima, klimaforandringer, fremtid, 2050, 2080, ssp, cmip6, scenarie, havniveau, oversvømmelse, hede, vejrfil, epw, morph, energyplus, skovbrand, buskbrand, brandvejr
from: 224ecd08
---

De klimatiske tal kommer fra en **datapakke**, ikke fra appen. Slå add-on'en {{ui:Klimafremtider}} til under Indstillinger › Add-ons, eller indlæs en datapakkefil, du selv har, i blokken {{ui:Klimafremtid}}.

:::warning
Pakken, der følger med add-on'en, er en **prøve**: tre steder (Denver, Miami, Johannesburg), én klimamodel og fem år i hver 20-årsperiode. Den er der for at prøve værktøjerne, **ikke til design**. Panelet siger det med fed skrift, mens det er i brug. En fuld pakke (mange modeller, alle år, flere steder) bygges med `tools/climate/build-pack.mjs` ud fra NASAs NEX-GDDP-CMIP6-data.
:::

## Vælg en fremtid

Vælg i venstre panels {{ui:Afspilning af fare}} et **Scenario** (SSP2-4.5, middelvejen, eller SSP5-8.5, høje udledninger) og et **År** (2050 betyder 2041-2060, 2080 betyder 2071-2090; begge i forhold til 1995-2014). **Sted** er pakkens sted nærmest modellens grund (IfcSite-breddegrad og -længdegrad), eller det du vælger. Langt fra alle steder bruges pakkens globale gennemsnitlige ændringer, og panelet siger det.

## Oversvømmelse, nutid ved siden af fremtid

Når et scenarie er valgt, sæt **Oversvømmelsestype**: kyst (lægger havniveaustigningen til), flod, eller kraftig regn (dybere med ændringen i den vådeste dags nedbør), eller begge. Tryk Kør: oversvømmelsen afspilles som før, og en tabel viser nutidens og fremtidens oversvømmelse ved siden af hinanden (vandstand, rum der bliver våde, det dybeste vand). Antagelserne listes under den:

- et kystniveau stiger med hele havniveaustigningen; storm og bølger ændres ikke;
- flodens vandføring stiger én til én med nedbøren på den vådeste dag, og dybden følger vandføringen i potens 0.6 (Mannings ligning for en bred kanal);
- de to dele lægges blot sammen.

## Hede: en fremtidig vejrfil

Vælg typen {{ui:Hede: fremtidig vejrfil}}, vælg en `.epw`-vejrfil fra nutiden og tryk {{ui:Lav den fremtidige vejrfil}}. Filen **morphes** måned for måned med den offentliggjorte forskydnings- og strækningsmetode (Belcher, Hacker og Powell 2005): månedens middel varmes op med pakkens ændring, de varme eftermiddage med ændringen i det daglige maksimum og de kolde nætter med ændringen i det daglige minimum; relativ luftfugtighed flytter sig med pakkens ændring, og dugpunktet beregnes igen. Tryk og vind bliver som de var. Tabellen sammenligner middel- og højeste temperaturer, de dimensionerende temperaturer for køling ved 0.4 % og for opvarmning ved 99.6 %, timerne ved 30 °C og 35 °C og graddagene.

{{ui:Gem den fremtidige vejrfil}} gemmer den; {{ui:Brug den i energikontrollen}} overdrager den til EnergyPlus-kontrollen (fanen Energi). Den fremtidige fil er det samme typiske år, blot varmere: den tilføjer ikke nye hedebølger.

## Energiår, nutid ved siden af fremtid

I EnergyPlus-kontrollen på fanen Energi (et add-on for sig selv, med din egen motor) vælg en vejrfil fra nutiden, derefter et scenarie og et år i dens blok {{ui:Klimafremtid}}, og tryk {{ui:Simulér et år: nutid og fremtid}}. Året køres på den nutidige fil og på dens morphede fremtid, og opvarmning og køling for hvert rum listes ved siden af hinanden.

## Brandeksponering (kun screening)

Vælg typen {{ui:Brandeksponering (kun screening)}}: den nærmeste vegetation, hældningen op fra den til bygningen og afstanden til den. Resultatet er et bånd fra meget lav til ekstrem, både for nutid og fremtid.

:::warning
**Kun screening.** Dette er vores egen relative skala til at se, om en grund har brug for en ordentlig brandvurdering. Den er ikke en bygningsnormvurdering og heller ikke et bushfire attack level. Den ganger en vægt for vegetationen, en hældningsfaktor (en brand fordobler nogenlunde sin hastighed for hver 10 grader opad, talt op til 20 grader), en afstandsfaktor (10 m divideret med afstanden, højst 1) og pakkens ændring i brandvejrindekset.
:::

## Hvor tallene kommer fra

- **Temperatur, luftfugtighed, solskin, nedbør, brandvejr:** NASA NEX-GDDP-CMIP6, dagligt nedskaleret CMIP6-modeloutput. Hver models output er under CC BY 4.0. Ændringen i brandvejret er Canadian Fire Weather Index beregnet dag for dag ud fra modellens vejr (med daglig luftfugtighed i stedet for middagsluftfugtighed).
- **Havniveaustigning:** IPCC AR6-globalt gennemsnit (ikke lokalt; landhævning eller -sænkning indgår ikke), medmindre en pakke har lokale tal.
- Pakken navngiver sin kilde, licens og dato; panelet viser dem.
