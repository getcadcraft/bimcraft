---
title: Solcelleanlæg, skygge og udbytte
summary: Placér solcelleanlæg på tage eller på jorden, beregn skygge fra modellen, anslå årlig energi, dimensionér strenge og lav data til énlinjediagrammet. Alle input vises, og startmodulet og tabene er generiske.
keywords: solar, pv, fotovoltaisk, anlæg, modul, tag, skygge, udbytte, kwh, kwp, strengdimensionering, vekselretter, énlinje, hældning, azimut, rækkeafstand
from: adf4aaf3
---

## Hvad du skal gøre

Åbn panelet **Solcelle-PV**. Vælg en tagflade (dens hældning og vendning læses fra modellen), eller læg et jordanlæg med en hældning og vendning. Modulerne placeres indvendigt med afstande og tælles, og giver DC-effekten i kWp. Når anlægget placeres, skrives det ind i modellen som solenheder i ét trin i Fortryd.

## Skygge, udbytte og strenge

- **Skygge** sender en stråle fra hvert modul mod solen for typiske dage i hver måned mod modellens egen geometri, så nabobygninger, attiker og rækkerne foran tæller med. Kun det direkte sollys reduceres, og et delvist skygget anlæg taber effekt i samme forhold.
- **Udbytte** giver kWh pr. måned og år, kWh pr. kWp og performance ratio. Solen kommer fra dine egne månedlige summer på en vandret flade, hvis du skriver dem ind. Uden dem bruger panelet en øvre grænse for skyfri himmel og siger det. **Hent klimadata fra NASA POWER** med en knap på fanen Udbytte: den sender kun byggegrundens breddegrad og længdegrad, én gang, og gemmer svaret på denne computer (kontrolleret fra browseren den 2026-10-30). PVGIS tillader ikke en webside at læse sit svar, så fanen giver et link, der åbner PVGIS' månedsdata for stedet i en ny fane. Indsæt det, den viser, i feltet, og de tolv måneder udfyldes.
- **Strenge** kontrollerer moduler pr. streng mod vekselrettens spændingsvindue på den koldeste og varmeste dag, og de parallelle strenge mod dens strøm.
- **Énlinje** laver diagramdata (anlæg, samler, afbryder, vekselretter, panel, forsyning) med ledere og sikringer dimensioneret ud fra de faktorer, du skriver. Det er data og en SVG; Elektrisk add-on i CadCraft kan placere det som symboler.

Modulet, vekselretteren, tabene og ledningsfaktorerne, der følger med BimCraft, er generiske eksempler, mærket i hvert resultat. Skriv producentens data og de normværdier, du dimensionerer efter, og få designet gennemgået af den person, der står ansvarlig for det.
