---
title: Vægge fra et sæt planer (PDF eller skanning)
summary: Lav siderne i en PDF eller en skannet tegning om til vægge, døre og vinduer, ét niveau for hver side, med siden liggende under hver plan.
keywords: pdf, planer, sæt af planer, skanning, skannet tegning, tiff, optegn, vægge fra en pdf, vægge fra en skanning, niveauer, sider, skala, døre, vinduer, udslag, underkant, underlag
from: b70d9db7
---

## Det skal du gøre

Start en model ud fra de planer, du har på papir: en PDF (tegnet som linjer, eller en skanning inde i en PDF) eller en skanning (PNG, JPEG, TIFF med én eller flere sider). Hver side bliver til vægge, døre og vinduer på ét niveau.

## Trin

1. Slå {{ui:Tegn}} til. Vælg {{ui:Build}} › {{ui:Fra en tegning…}}, derefter {{ui:Vælg en tegning…}}, og vælg PDF'en eller skanningen.
2. **Sider og niveauer.** Hver side vises med det, den er (**linjetegning**, eller **et billede (optegnet)**), og det niveau, den går til: et af de niveauer, du har, **et nyt niveau over de andre**, eller **udelad denne side**. Sider matches til dine niveauer i rækkefølge; ændr hver af dem, hvis det er nødvendigt.
3. **Skala.** For en PDF siger du, hvordan den er tegnet (**1 : 100**, **1 : 50** …). For alt andet, eller når du ikke ved det, vælger du **fra en afstand, jeg kender**: klik på de to ender af en målsætning eller en skalastang på forhåndsvisningen, og skriv derefter den rigtige afstand. Alle siderne bruger den ene skala.
4. Vælg **vægtypen** og **højden på et nyt niveau**. Lad **Behold hver side under planen for dens niveau** stå afkrydset for at se hver side som tynde linjer under sin plan.
5. Linjen under valgene siger, hvor mange vægge, døre og vinduer den laver, og på hvor mange niveauer. Klik på {{ui:Lav dem}}.

## Sådan læser den en side

- **Vægge** kommer fra par af parallelle linjer op til 600 mm fra hinanden (de to flader af en væg). Væggen er lige så tyk som afstanden. Skravering og skrift udelades.
- **Døre og vinduer.** Et hul i en væg (500 til 2600 mm) med et dørudslag tegnet ved siden af er en dør, hængslet i den ene ende af hullet og åbnet til udslagets side. Et hul, eller en væg med underkantslinjer i, er et vindue. Et hul uden nogen af delene er en dør op til 1300 mm og et vindue over det.
- **En skanning** rettes først, hvis den blev skannet skævt (dialogen siger det), gøres sort-hvid, renses for pletter og optegnes. En **PDF-side, der er et billede**, tegnes først og behandles derefter på samme måde. Optegningen finder midten af hvert stiktryk og tilpasser rette linjer og buer til den. Den bruger ingen netværk og ingen trænet model.
- **Rum** følger af sig selv af de lukkede sløjfer, væggene danner. Når PDF'en har tekst, får et rum sit navn fra skriften inde i det (den største; en målsætning, en skala eller et tegningsnummer er ikke et navn). En skanning har ingen tekst, så dens rum beholder de navne, programmet giver dem.
- **Alt, der er læst fra siden, er markeret som ikke verificeret**: hver væg, dør, hvert vindue og rum har en stiplet boks og et "?" i planen, indtil du har kontrolleret det. Vælg det, du har kontrolleret, og brug {{ui:Værktøjer}} › {{ui:Markér som kontrolleret}}. Se [Markér elementer som kontrolleret eller verificeret i felten](topic:verification).

## Det skal du se

- Vægge, døre, vinduer og rum på hvert niveau, og eventuelle nye niveauer, alt som ét trin: {{key:Mod+Z}} tager alt tilbage.
- Hver side som tynde linjer under planen for dens niveau, opført under {{ui:Build}} › {{ui:Fra en tegning…}} med {{ui:Fjern}}.

:::note
Dette er, hvad linjerne gav, med den nøjagtighed siden tillader. En skanning kan miste en svag væg, sammenføje to vægge, der ligger meget tæt, eller finde en væg i en plet. Et udslag, tegningen ikke viser, gør et hul til en almindelig dør. Kontrollér hvert niveau mod siden, før du stoler på det, og ret det, der er forkert, med værktøjerne {{ui:Væg}}, {{ui:Dør}} og {{ui:Vindue}}.
:::
