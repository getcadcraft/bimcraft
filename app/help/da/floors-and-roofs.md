---
title: Rum, gulve, lofter og tage
summary: Rum fremkommer, når vægge lukker dem; giv et rum eller hele bygningen et gulv og et loft, og læg en valmtag eller sadeltag på væggene. Alt følger med, når væggene flyttes.
keywords: rum, rum (flertal), zone, areal, omkreds, gulv, dæk, underdæk, loft, tag, valmtag, sadeltag, taghældning, udhæng, tagfod, rygning, dal, 6/12
from: 1fb1813c
---

## Hvad du skal gøre

Færdiggør bygningens skal. Rum kommer af sig selv fra væggene; gulve, lofter og taget tager ét klik hver. Fordi de findes ud fra væggene, følger de med, når væggene flyttes.

## Rum

Ethvert område lukket af tegnede vægge er et rum. Det vises, så snart den sidste væg lukker det, med et nummer (101, 102 … på første niveau, 201 … på næste) og et navn (**Rum 1**, **Rum 2** …), og dets areal vises midt i rummet på planen.

- Med {{ui:Vælg}} slået til klikker du inde i et rum for at vælge det. I **Egenskaber** ændrer du dets **Navn** (for eksempel `Køkken`) og **Nummer**; dets areal og omkreds vises.
- Slet en væg mellem to rum, og de bliver ét; tegn en væg tværs over et rum, og det bliver til to. Et rum beholder sit navn og nummer, mens væggene omkring det flyttes.
- Et rum kan ikke slettes alene: det er det rum, væggene danner.

Arealer måles inden for vægfladerne. Rum gemmes som IFC-rum med deres gulvareal, omkreds, højde og rumfang, så listerne kan læse dem (se [Læg mængder sammen, lav lister over elementer og rum](topic:quantity-totals)).

## Gulve

1. Klik på {{ui:Gulv}}.
2. Vælg **Dette rum** eller **Hele bygningen**, **Type** (trægulv eller betondæk) og dets tykkelse.
3. Peg inde i et rum (eller et hvilket som helst sted inde i bygningen). Det, gulvet ville dække, fremhæves med sit areal.
4. Klik. Gulvets overside er niveauets gulv; det går ned med sin tykkelse. Et gulv for hele bygningen når til væggenes ydersider.

## Lofter

1. Klik på {{ui:Loft}}.
2. Vælg **Dette rum** eller **Hele bygningen**, og dets **Højde** over gulvet.
3. Peg inde i området og klik.
4. For at se det nedefra, med dets gitter og lamperne på, skifter du planen til dens loftsplan: se [Visninger, visningsområder og egne ark](topic:views-and-sheets).

## Et tag

1. På det niveau, hvis vægge bærer taget, klik på {{ui:Tag}}.
2. Skriv **Taghældning** som stigning over 12 (`6/12`) eller i grader (`30`), og **Udhæng**.
3. Vælg **Ender**: **Valmtag** (alle sider hælder), **Gavle på de korte sider** eller **Gavle på de lange sider** (en bygning med fire sider), eller **Pulttag**.
4. Peg inde i bygningen: tagfoden og rygningen vises på planen. Klik.

Taget står oven på væggene, på niveauet over dem, og dets underside møder væggenes ydre flade. Gavlender udfyldes med en gavlvæg, lige så tyk som væggen under. En L-, T- eller U-formet bygning får et valmtag, hvis fløje mødes i dale.

## Ændr dem

Vælg et gulv, loft eller tag (i 3D-visningen, i modeltræet eller et tag ved at klikke inde i dets omrids på niveauet over) og ændr det i **Egenskaber**: et gulvs type, tykkelse og hvor højt dets overside ligger over niveauet; et lofts højde, tykkelse og **Mønster** (det gitter, en loftsplan tegner på det: ingen, 600 × 600, 600 × 1200, 2' × 2' eller 2' × 4'); et tags taghældning, udhæng, ender og tykkelse. Hver ændring er ét trin i fortrydelse.

## Giv et gulv, loft eller tag en type med lag

Et gulv, et loft og et tag kan få en **type**, ligesom en væg kan: en navngivet opbygning af lag, hvert med sit materiale og sin rigtige tykkelse.

- **Når du placerer det.** Værktøjerne Gulv, Loft, Tag og Tegn gulv har en liste **Type** på deres række. **Ingen type** placerer det som før, med sin egen tykkelse. En type placerer det så tykt, som typens lag er samlet.
- **Senere.** Vælg gulvet, loftet eller taget og vælg **Type** i Egenskaber. Elementet forbliver det samme element: dets placering, dets rum og dets data bevares, og intet tegnes igen. Kun dets type, tykkelse og materiale ændres. Sådan bliver et element på skitsestadiet til et udarbejdet element: byt dets generiske type ud med en rigtig.
- **Redigér typen…** åbner typeredigeringen for den type: lagene fra **oven** og ned, kernen, hvert lags funktion og typens LOD-mærke. Gemning ændrer hvert element af typen i ét trin, og ét Fortryd tager det tilbage. Ændrer du en startertype, gemmes en kopi som din egen type.
- Mens et element har en type, er dets **Tykkelse** typens og kan ikke skrives. Vælg en anden type, eller **Ingen type**, for at ændre den.

Startertyperne er én **generisk** type for hver (ét lag af det generiske materiale, mærket LOD 200) og to lagdelte (mærket LOD 300): et trægulv på tømmerbjælker og et betongulv med afretning; et tømmertag og et fladt betontag; et loft af gipsplader og et nedhængt fliseloft. De er udgangsværdier, ikke afprøvede konstruktioner: kontrollér lagene, før du stoler på dem.

Listen **Lag: areal og rumfang** viser hvert lag i hver type i brug; se [Lister, mål og PDF](topic:plan-schedules-and-pdf). Gulv-, tag- og loftstyper flytter mellem projekter i en typepakke eller som et biblioteksemne; se [Typepakker](topic:type-packs).

## Godt at vide

- Flytning, tilføjelse eller sletning af vægge gør rummene, gulvene, lofterne og taget over dem igen.
- Et tag passer til alle omrids. For at give hver væg sin egen taghældning, gavl eller pulttag, en hævet rem, vindskede og underside, eller for at tegne et enkelt tagplan, se [Tage: en taghældning for hver væg, gavle, pulttage og tagplaner](topic:roofs).
- {{key:Delete}} sletter et valgt gulv, loft eller tag.
