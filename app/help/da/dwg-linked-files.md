---
title: Find eksterne tegninger og billeder
summary: Vis en tegnings eksterne tegninger (xrefs) og billeder i tegningshovedet, ved at åbne dens mappe eller tilføje filerne manuelt.
keywords: xref, ekstern reference, ekstern tegning, vedhæft, overlejring, billede, foto, logo, tegningshoved, manglende xref, etransmit, referencehåndtering
from: 5593d4b1
---

## Hvad du skal gøre

Gør en tegning komplet: vis de tegninger, den linker til (eksterne referencer, eller xrefs), og de billeder den bruger, såsom et logo i tegningshovedet.

## Den nemme måde: åbn mappen

1. Klik på {{ui:Åbn en mappe}} og vælg mappen, der indeholder tegningen og dens links, for eksempel hele `Cad`-mappen i et projekt.
2. Rul i mapperapporten til **CAD-tegninger**.
3. Klik på tegningen.
4. Kig på panelet {{ui:Egenskaber}} til højre, under **Eksterne tegninger** og **Billeder**.

BimCraft leder efter hver ekstern tegning efter dens navn ("*navn*.dwg"), først i samme mappe som tegningen og derefter hvor som helst i den mappe, du åbnede. Billeder findes på samme måde, og også efter et lignende navn: en eTransmit- eller Revit-eksport tilføjer ofte projektets navn foran, så `logo.png` findes som `Tower-logo-5425051.png`.

## Den anden måde: tilføj filer manuelt

1. Åbn tegningen alene.
2. Til højre, under **Eksterne tegninger**, klikker du på {{ui:Tilføj eksterne tegninger…}}. Under **Billeder** hedder knappen {{ui:Tilføj billeder…}}. Begge åbner den samme vælger.
3. Vælg de eksterne `.dwg`-filer og billedfilerne. Du kan vælge flere på én gang.
4. Vent, mens BimCraft åbner tegningen igen med dem.

## Hvad du bør se

Hver ekstern tegning og hvert billede er opført med en etiket:

| Etiket | Betyder |
|---|---|
| **Vist** | Fundet og tegnet. Stien under den viser, hvor den kom fra, eller "tilføjet af dig". |
| **Vist, lignende navn** | Et billede, der er fundet ved et lignende navn. Kontroller, at det er det rigtige. |
| **Ikke fundet** | Ikke i mappen eller i de filer, du tilføjede. Et manglende billede vises som sin tomme ramme. |
| **TIFF kan ikke vises i en browser** | Billedet er en TIFF-fil, som browsere ikke tegner. Gem det som PNG med samme navn, og tilføj det. |
| **Kunne ikke læses** | Filen blev fundet, men kunne ikke åbnes som billede. |

Panelet {{ui:Tegning}} til venstre viser »*n* af *m* indlæst« for eksterne tegninger. Eksterne tegningers lag vises i {{ui:Lag}} som »*linknavn*|*lag*«.

## Almindelige fejl

- **Kun at åbne tegningen.** »Denne tegning viser kun sit eget indhold, indtil dens eksterne tegninger er tilføjet. Hvis du åbner hele projektmappen, findes de automatisk.«
- **At åbne en for lille mappe.** Hvis linkene ligger i en søskendemappe, skal du i stedet åbne den overordnede mappe.
- **Omdøbte links.** BimCraft matcher eksterne tegninger efter navn. Et link, der er omdøbt på disken, findes ikke. Tilføj det manuelt.
- **Links af links.** BimCraft indlæser de tegninger, den åbne tegning linker til. Tegninger, der er linket inde i dem, bliver ikke søgt efter, så de vises normalt ikke i denne version.
