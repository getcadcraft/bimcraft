---
title: "Klimatframtider: 2050 och 2080 översvämning, värme och skogsbrand"
summary: Kör översvämningen, energiåret och en skogsbrandsscreening igen med framtida klimat (scenarierna SSP2-4.5 och SSP5-8.5, åren 2050 och 2080) från ett klimatdatapaket, visat bredvid nutid.
keywords: klimat, klimatförändring, framtid, 2050, 2080, ssp, cmip6, scenario, havsnivåhöjning, översvämning, värme, väderfil, epw, morph, energyplus, skogsbrand, brandväder
from: 224ecd08
---

Klimatsiffrorna kommer från ett **datapaket**, inte från appen. Slå på tillägget {{ui:Climate futures}} i Inställningar › Tillägg, eller läs in en egen paketfil i blocket {{ui:Klimatframtid}}.

:::warning
Paketet som följer med tillägget är ett **exempel**: tre platser (Denver, Miami, Johannesburg), en klimatmodell, fem år i varje 20-årsperiod. Det finns för att prova verktygen, **inte för projektering**. Panelen säger det med fetstil medan paketet används. Ett fullt paket (många modeller, alla år, fler platser) byggs med `tools/climate/build-pack.mjs` från NASA:s NEX-GDDP-CMIP6-data.
:::

## Välj en framtid

I vänstra panelens {{ui:Uppspelning av fara}} väljer du ett **Scenario** (SSP2-4.5, mellanvägen, eller SSP5-8.5, höga utsläpp) och ett **År** (2050 betyder 2041-2060, 2080 betyder 2071-2090; båda jämförda med 1995-2014). **Platsen** är paketets plats närmast modellens tomt (IfcSite-latitud och -longitud), eller den du väljer. Långt från alla platser används paketets globala medelförändringar, och panelen säger det.

## Översvämning, nutid bredvid framtid

När ett scenario är valt ställer du in **Översvämningstyp**: kust (lägger till havsnivåhöjningen), flod eller kraftigt regn (djupare med förändringen i den blötaste dagens regn), eller båda. Tryck på Kör: översvämningen spelas upp som förut, och en tabell visar nutida och framtida översvämning sida vid sida (vattennivå, rum som blir blöta, djupaste vattnet). Antagandena listas under den:

- en kustnivå stiger med hela havsnivåhöjningen; storm och vågor ändras inte;
- flodflödet stiger ett till ett med regnet under den blötaste dagen, och djupet följer flödet upphöjt till 0.6 (Mannings ekvation för en bred kanal);
- de två delarna läggs helt enkelt ihop.

## Värme: en framtida väderfil

Välj typen {{ui:Heat: future weather file}}, välj en nutida `.epw`-väderfil och tryck på {{ui:Make the future weather file}}. Filen **morfas** månad för månad med den publicerade förskjutnings- och töjningsmetoden (Belcher, Hacker och Powell 2005): månadens medel värms upp med paketets förändring, de heta eftermiddagarna med förändringen i dagens maximum och de kalla nätterna med förändringen i dagens minimum. Relativ luftfuktighet förskjuts med paketets förändring och daggpunkten räknas ut på nytt. Tryck och vind behålls som de var. Tabellen jämför medel- och högsta temperaturerna, dimensionerande temperaturer för 0.4 % kyla och 99.6 % värme, timmarna vid 30 °C och 35 °C samt graddagarna.

{{ui:Save the future weather file}} sparar den; {{ui:Use it in the energy check}} lämnar den till EnergyPlus-kontrollen (fliken Energi). Den framtida filen är samma typiska år, fast varmare: den lägger inte till nya värmeböljor.

## Energiår, nutid bredvid framtid

I EnergyPlus-kontrollen på fliken Energi (ett tillägg i sig, med din egen motor) väljer du en nutida väderfil, sedan ett scenario och ett år i dess block {{ui:Klimatframtid}}, och trycker på {{ui:Simulera ett år: nutid och framtid}}. Året körs på den nutida filen och på dess morfade framtid, och värme och kyla för varje rum listas sida vid sida.

## Skogsbrandsexponering (endast screening)

Välj typen {{ui:Skogsbrandsexponering (endast screening)}}: närmaste vegetation, sluttningen upp från den till byggnaden och avståndet till den. Resultatet är ett band från mycket låg till extrem, för nutid och framtid.

:::warning
**Endast screening.** Detta är vår egen relativa skala för att se om en plats behöver en riktig skogsbrandsbedömning. Den är inte en byggnormklassning eller en bushfire attack level. Den multiplicerar en vikt för vegetationen, en lutningsfaktor (en brand fördubblar i stort sett sin hastighet för varje 10 grader uppåt i sluttningen, räknat upp till 20 grader), en avståndsfaktor (10 m delat med avståndet, högst 1) och paketets förändring i brandväderindexet.
:::

## Varifrån siffrorna kommer

- **Temperatur, luftfuktighet, solsken, nederbörd, brandväder:** NASA NEX-GDDP-CMIP6, daglig nedskalad CMIP6-modellutdata. Varje modells utdata är under CC BY 4.0. Förändringen i brandväder är Canadian Fire Weather Index beräknat dag för dag från modellens väder (med daglig luftfuktighet i stället för middagens luftfuktighet).
- **Havsnivåhöjning:** IPCC AR6:s globala medelvärde (inte lokalt; land som höjer sig eller sjunker ingår inte), om inte ett paket har lokala siffror.
- Paketet anger sin källa, licens och datum. Panelen visar dem.
