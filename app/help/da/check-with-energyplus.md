---
title: Kontrollér opvarmning og køling med EnergyPlus
summary: Skriv modellen som en EnergyPlus-fil, eller kør EnergyPlus version 26.2.0 på den i browseren, og sammenlign dens dimensionerende laster med den hurtige hjælp til opvarmning og køling. Et andet blik i det tidlige design, ikke en overholdelsesberegning.
keywords: energyplus, energisimulering, dimensionerende dag, varmelast, kølelast, vejrfil, epw, idf, termisk masse, årlig energi, simulér
from: b82a5bf2
---

## Hvad du skal gøre

Ruden **Kontrollér med EnergyPlus** skriver den åbne model som en EnergyPlus-inputfil (en IDF): én zone pr. rum, væggene, gulvene, tagene og vinduerne med deres U-værdier, luftskiftet samt ideel opvarmning og køling. Du kan altid **gemme den fil** og køre den i din egen EnergyPlus.

Hvis du også opsætter motoren, kan ruden simulere på stedet og viser EnergyPlus' dimensionerende opvarmning og køling ved siden af den hurtige hjælps, rum for rum.

Dette er en designhjælp. Energikrav, certificering og tilladelser kræver et godkendt værktøj og de klimadata, det kræver, og resultatet skal gennemgås af den person, der står inde for det.

## Opsæt motoren

BimCraft indeholder ikke EnergyPlus. Det er en stor WebAssembly-build (ca. 6 MB komprimeret plus en datafil på 4.6 MB), så du hoster den selv og skriver dens adresse i ruden. Siden indlæser den kun, når du trykker på en simuleringsknap, aldrig ved opstart. Adressen skal være https, en sti på dette websted eller localhost.

## Dimensionerende dage eller et år

- **Simulér dimensionerende dage** kræver ingen vejrfil. Den kører en kold vinterdag uden sol og en varm klar sommerdag ved temperaturerne i opvarmnings- og kølefelterne på fanen Dagslys, og rapporterer hvert rums last i watt.
- **Simulér et år** kræver en vejrfil i EPW-format, som du vælger. Den tilføjer personer, lys og udstyr fra de samme felter (altid tændt, da ingen tidsplan opfindes) og rapporterer hvert rums opvarmnings- og kølingsenergi i kWh. Vejrfiler har deres egne licenser, så brug en, du må bruge.

## Termisk masse

Sæt flueben i **Giv vægge med kendte lag termisk masse**, så skrives vægge, tage og gulve, hvis materialelag er kendte, lag for lag, med densitet og varmekapacitet hentet fra en kort tabel med typiske værdier efter materialenavn. Lagene tages udefra først, i den rækkefølge filen lister dem. Elementer uden lag bliver ved deres U-værdi uden masse.

## Læsning af sammenligningen

De to metoder besvarer lidt forskellige spørgsmål. Den hurtige hjælp beholder hvert element; EnergyPlus-filen gennemsnitter hvert rums U-værdier efter overfladetype. En forskel på over 15 % i et rums dimensionerende opvarmning vises som en note i ⚠-panelet, med begge tal. Køling afviger mere af design: den hurtige hjælp udregner en top ud fra solen på én dato, mens EnergyPlus dimensionerer på sin egen dimensionerende dag.
