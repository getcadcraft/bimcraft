---
title: Paneltegninger i træ eller let stål
summary: Indram modellens vægge, gulve og tage som paneler i træ eller let stål, se hver stolpe, plade, overligger, strø og spær i skala, og gem tilskæringslisten som CSV og værkstedstegningerne som PDF.
keywords: panel, indramning, værkstedstegning, tilskæringsliste, let stål, stålstolpe, LGS, træ, strø, spær, overligger, lager, PDF
from: c09f916e
---

## Åbn panelerne

Vælg {{ui:Paneltegninger}} i menuen {{ui:Build}} (eller skriv {{cmd:PANELS}}). Listen har hver tegnet væg, hvert gulv og hvert tag i modellen, hver med et flueben. Vægge kommer med deres døre og vinduer som åbninger. Et gulv indrammes som rektanglet omkring dets kontur, med strøerne løbende den korte vej. Et tag indrammes som en gavl over konturen af dets vægge, med tagets hældning; listen siger det, fordi et valmtag eller et komplekst tag ikke er en gavl.

## Materiale, størrelse og afstand

Vælg {{ui:Materiale}}: **Træ** eller **Let stål**. Stålstykker er C-stolper, navngivet efter deres dybde og tykkelse (for eksempel C92-1.2), med en skinne til pladerne. {{ui:Profilstørrelse}} vælger én størrelse for alle afkrydsede paneler, eller lad den stå på Standard for at bruge standarderne for hver type panel. {{ui:Afstand}} er afstanden mellem stolper, strøer eller spær. Det er startværdier, som du selv skal fastsætte. De er ikke en kontrol mod normer: om en stolpe med den afstand bærer den væg, og om en overligger holder sin spændvidde, er op til normtabellerne (tillægget Byggeforskrifter har IRC'en) og din ingeniør.

## Hvad du får

Det første afkrydsede panel tegnes i skala i dialogen, med målene. {{ui:Tilskæringsliste (CSV)}} gemmer hvert panels stykker efter mærke, størrelse og længde samt de lagerlængder, der skal købes til dem. {{ui:Værkstedstegninger (PDF)}} gemmer én A3-side for hvert panel, med hvert stykke mærket og dets tilskæringsliste. {{ui:Tegning (SVG)}} gemmer det første panel som en tegning. Det, indramningskoden finder, og som ikke kan indrammes (en åbning for tæt på væggens ende, en overligger, der ikke passer under pladerne, et stykke længere end det længste lager), vises under **Problemer** og i dialogen.

## Hvad den ikke gør

Panelerne er tegninger, der laves ud fra modellen, når du beder om dem: intet skrives ind i modellen, så de altid stemmer med den. For at lægge indramningen ind i modellen som elementer bruger du {{ui:Skelet}} til vægge, gulve og tage i træ.
