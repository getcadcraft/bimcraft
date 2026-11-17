---
title: Paneltegninger i trevirke eller lettstål
summary: Ramm inn modellens vegger, dekker og tak som paneler i trevirke eller lettstål, se hver stender, svill, overligger, bjelke og sperre i målestokk, og lagre kappelisten som CSV og verkstedtegningene som PDF.
keywords: panel, innramming, verkstedtegning, kappeliste, lettstål, stålstender, LGS, trevirke, bjelke, sperre, svill, overligger, lager, PDF
from: c09f916e
---

## Åpne panelene

Velg {{ui:Paneltegninger}} i menyen {{ui:Bygg}} (eller skriv {{cmd:PANELS}}). Listen inneholder hver tegnede vegg, hvert dekke og hvert tak i modellen, hver med en avmerkingsboks. Vegger kommer med sine dører og vinduer som åpninger. Et dekke innrammes som rektangelet rundt sin omriss, med bjelkene gående den korte veien. Et tak innrammes som en gavl over veggenes omriss, med takets takvinkel; listen sier det, fordi et valmet tak eller et komplekst tak ikke er en gavl.

## Materiale, størrelse og avstand

Velg {{ui:Materiale}}: **Trevirke** eller **Lettstål**. Stålstykker er C-stendere navngitt etter høyde og tykkelse (for eksempel C92-1.2), med en skinne for svillene. {{ui:Dimensjon på stav}} velger én størrelse for hvert avmerkede panel, eller la den stå på Standard for å bruke standardene for hver type panel. {{ui:Avstand}} er avstanden mellom stendere, bjelker eller sperrer. Dette er utgangsverdier for deg å sette. De er ikke en normkontroll: om en stender med den avstanden bærer den veggen, og en overligger den spennvidden, er noe for normtabellene (tillegget Byggeforskrifter har IRC-tabellene) og for din ingeniør.

## Hva du får

Det første avmerkede panelet tegnes i målestokk i dialogen, med målene. {{ui:Kappeliste (CSV)}} lagrer hvert panels stykker etter merke, størrelse og lengde, og lagerlengdene du skal kjøpe for dem. {{ui:Verkstedtegninger (PDF)}} lagrer én A3-side for hvert panel, med hvert stykke merket og dets kappeliste. {{ui:Tegning (SVG)}} lagrer det første panelet som en tegning. Det som rammeverket finner og ikke kan rammes inn (en åpning for nær enden av en vegg, en overligger som ikke får plass under svillene, et stykke lengre enn lengste lager), listes under {{ui:Problemer}} i tillegg til i dialogen.

## Hva det ikke gjør

Panelene er tegninger laget av modellen når du ber om dem: ingenting skrives inn i modellen, så de stemmer alltid med den. For å legge innrammingen inn i modellen som elementer, bruk {{ui:Bindingsverk}} for vegger, dekker og tak i trevirke.
