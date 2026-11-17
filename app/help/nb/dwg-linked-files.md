---
title: Finn tilknyttede tegninger og bilder
summary: Vis en tegnings tilknyttede tegninger (xrefer) og bilder i tegningshodet, ved å åpne mappen eller legge til filene for hånd.
keywords: xref, ekstern referanse, tilknyttet tegning, legg ved, overlegg, bilde, bilde, logo, tegningshode, manglende xref, etransmit, referansebehandler
from: 5593d4b1
---

## Hva du skal gjøre

Gjør en tegning komplett: vis tegningene den lenker til (eksterne referanser, eller xrefer) og bildene den bruker, for eksempel en logo i tegningshodet.

## Den enkle måten: åpne mappen

1. Klikk {{ui:Åpne en mappe}} og velg mappen som holder tegningen og lenkene den, for eksempel hele mappen `Cad` i et prosjekt.
2. I mappeoversikten ruller du til **CAD-tegninger**.
3. Klikk tegningen.
4. Se på panelet {{ui:Egenskaper}} til høyre, under **Tilknyttede tegninger** og **Bilder**.

BimCraft ser etter hver tilknyttet tegning etter navnet ("*navn*.dwg"), først i samme mappe som tegningen, deretter hvor som helst i mappen du åpnet. Bilder finnes på samme måte, og også etter et lignende navn: en eTransmit- eller Revit-eksport legger ofte prosjektets navn foran, slik at `logo.png` blir funnet som `Tower-logo-5425051.png`.

## Den andre måten: legg til filer for hånd

1. Åpne tegningen alene.
2. Til høyre, under **Tilknyttede tegninger**, klikk {{ui:Legg til tilknyttede tegninger…}}. Under **Bilder** er knappen {{ui:Legg til bilder…}}; begge åpner samme velger.
3. Velg de tilknyttede `.dwg`-filene og bildefilene. Du kan velge flere om gangen.
4. Vent mens BimCraft åpner tegningen igjen med dem.

## Hva du bør se

Hver tilknyttet tegning og hvert bilde står oppført med en etikett:

| Etikett | Betyr |
|---|---|
| **Vist** | Funnet og tegnet. Stien under viser hvor den kom fra, eller «lagt til av deg». |
| **Vist, lignende navn** | Et bilde funnet med et lignende navn. Sjekk at det er riktig. |
| **Ikke funnet** | Ikke i mappen eller filene du la til. Et manglende bilde vises som sin tomme ramme. |
| **TIFF kan ikke vises i en nettleser** | Bildet er en TIFF-fil, som nettlesere ikke tegner. Lagre det som PNG med samme navn og legg det til. |
| **Kunne ikke leses** | Filen ble funnet, men kunne ikke åpnes som bilde. |

Panelet {{ui:Tegning}} til venstre viser «*n* av *m* lastet» for tilknyttede tegninger. Layer for tilknyttede tegninger vises i {{ui:Layer}} som «*lenkenavn*|*layer*».

## Vanlige feil

- **Å bare åpne tegningen.** «Denne tegningen viser bare eget innhold til de tilknyttede tegningene er lagt til. Å åpne hele prosjektmappen finner dem automatisk.»
- **Å åpne en for liten mappe.** Hvis lenkene ligger i en søskenmappe, åpne den overordnede mappen i stedet.
- **Omdøpte lenker.** BimCraft finner tilknyttede tegninger etter navn. En lenke som er gitt nytt navn på disken, blir ikke funnet; legg den til for hånd.
- **Lenker til lenker.** BimCraft laster tegningene som den åpne tegningen lenker til. Tegninger lenket inne i dem blir ikke lett etter, så de vises vanligvis ikke i denne versjonen.
