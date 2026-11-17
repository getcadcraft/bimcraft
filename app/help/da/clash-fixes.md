---
title: Løs kollisioner med hvert fagområdes rettelser
summary: Fra kollisionsresultaterne viser panelet Foreslåede rettelser for hver kollision, hvad hvert fagområde kan gøre ved den — en kanal omført under en bjælke, et rør flyttet til siden, en søjle flyttet, en åbning i en bjælke — hver afprøvet på en kopi af modellen med sine afvejninger, til at acceptere eller afvise. Accepterede rettelser føjes ind som ét fortrydelsestrin.
keywords: kollision, kollisionsrettelse, løs kollisioner, afklar kollisioner, koordination, foreslå rettelser, omførsel, forskydning, kanal, rør, bakke, bjælke, søjle, åbning, muffe, afvejning, fagområde, konstruktion, maskin, VVS, el, arkitektur, assistent
from: f7bafdd9
---

## Hvad du skal gøre

Gør en liste over kollisioner til beslutninger. Hvert fagområde (konstruktion, maskin, VVS, el, arkitektur) foreslår rettelser for sine egne elementer, hver forslag kontrolleres på en kopi af modellen, og du vælger.

## Trin

1. Kør kollisionskontrollen først. Se [Find kollisioner](topic:clash-check) og [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure).
2. Klik under resultaterne på {{ui:Foreslå rettelser}}. Panelet **Foreslåede rettelser** åbner ved siden af modellen.
3. For hver kollision ser du hvert fagområdes forslag, det bedste først. Hver linje siger, hvad den gør, og dens afvejninger: om den løser kollisionen, hvor mange nye kollisioner den skaber, hvilke regler den bryder, hvor meget føring den tilføjer eller hvor langt den flytter, hvor mange fittings der er, og en omkostningsscore.
4. Klik på {{ui:Vis}} for at se elementerne i 3D. Klik på {{ui:Accepter}} ved den rettelse, du vil have (én pr. kollision), eller på {{ui:Afvis}}.
5. Linjen nederst siger, hvad alle dine accepterede rettelser gør sammen: hvor mange kollisioner der er løst, hvor mange der er tilbage, og om noget nyt kolliderer.
6. Klik på {{ui:Anvend accepterede rettelser (ét fortrydelsestrin)}}. Kollisionskontrollen kører igen. {{ui:Fortryd}} tager dem alle tilbage på én gang.

## Hvad hvert fagområde må gøre

- **Maskin** (kanaler, varme- og kølerør): omfør over eller under det ben, der rammer; hæv eller sænk hele føringen; flyt den til siden; gør en rektangulær kanal fladere med samme areal.
- **VVS** (vand, afløb, gas, brand): de samme træk, undtagen at et faldafløb aldrig får en omførsel; det kan kun flyttes som helhed og beholde sit fald.
- **El** (bakker og rør til kabler): de samme træk; en bakke skal have 150 mm frit over sig for at lægge kabel.
- **Konstruktion**: flyt en søjle (op til 300 mm), eller en åbning i en bjælkes krop eller et dæk for den føring, der går igennem. Hver konstruktiv rettelse siger, at den konstruktionsingeniør skal godkende den.
- **Arkitektur**: en muffe i en væg for den føring, der går igennem, eller flyt en væg, der vides ikke at bære last.

## Hvad du bør se

- Rettelser, der bryder en regel, er markeret: tættere end de 25 mm mellemrum til noget andet, under den frie højde på 2,100 mm, en åbning i bjælkens krop større end 40 % af bjælkens højde eller for tæt på dens ender, eller en bjælke, der ville ændre spænd.
- Rettelser, BimCraft kan udføre, anvendes på modellen: føringer, du har tegnet med værktøjerne Rør og Kanal, og søjler, du har tegnet. De andre siger **Kun råd**; at acceptere dem føjer i stedet et emne til fanen Emner.

## Godt at vide

- Rettelserne kommer fra indbyggede regler i appen; der bruges ingen AI til dem.
- Hvis du forbinder en assistent (se [Lad en AI-assistent arbejde med din model](topic:assistants)), kan den læse kollisionerne og tilføje sine egne forslag for ét fagområde til det åbne panel. De kontrolleres på samme måde, markeres med assistentens navn, og intet ændres, før du accepterer og anvender.
- Kopien kontrolleres med bokse rundt om hvert element og hvert ben i en føring, så en skrå føring kan vise en kollision, som kollisionskontrollen ikke ville vise. Kør kollisionskontrollen igen efter anvendelse: den er det endelige svar.
- Grænserne (hvor langt en føring må flyttes, hvor højt en omførsel må gå, mellemrummet) er standardværdierne, der står i panelet.

## Næste

- [Emner og BCF-filer](topic:issues-bcf)
- [Tegn rør- og kanalføringer](topic:pipes-and-ducts)
