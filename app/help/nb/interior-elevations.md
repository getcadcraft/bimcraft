---
title: Innvendige fasader
summary: Lag ett ark som viser de fire veggene i et rom sett innenfra, med mål og merkelapper, og lagre det som PDF.
keywords: innvendig fasade, rom, vegg, skap, kjøkken, fasade, ark, PDF, mål, merkelapp, rom (Space), A-501
from: 1e3a70a8
---

## Formål

Velg et rom og få ett ark som viser de fire veggene slik du ville sett dem når du står inne i rommet. Det er laget for kjøkken, bad og alle rom der du må se skap, dører og vinduer på hver vegg.

## Lag arket

1. Velg rommet. I planen med {{ui:Tegn}} på klikker du inne i rommet. I 3D-visningen eller modelltreet velger du rommet (et IfcSpace).
2. Under **Egenskaper** klikker du {{ui:Innvendige fasader…}}.
3. Dialogen åpnes med arket.
4. Klikk {{ui:Last ned PDF}} for å lagre det. Filen får navnet "<file> — Innvendige fasader — <room>.pdf" og er en vektor-PDF.
5. Klikk {{ui:Lukk}} når du er ferdig.

## Hva arket viser

Arket har fire visninger, to og to, i én målestokk: den største standardmålestokken som får plass. De er **Nordvegg**, **Østvegg**, **Sørvegg** og **Vestvegg**. Tegningshodet viser arknummer A-501, tittelen "Innvendige fasader — " med romnummer og romnavn, prosjektet og datoen.

Hver visning er skåret gjennom midten av rommet og ser mot veggen på den siden. Sideveggene, og det som er kuttet i dem, for eksempel et vindu, vises som grå skravert snittflate rundt visningen. Visningen stopper like etter veggens flate, så ingenting bak veggen vises.

Hver visning har:

- rommets bredde under den, fra innside til innside;
- rommets høyde ved siden av den, fra gulvet til nivået over;
- en kvadratisk merkelapp på hver dør og en sekskantet merkelapp på hvert vindu i den veggen, med merket (D1, W1 og så videre);
- en sirkulær merkelapp med elementnummeret på hvert bibliotekselement som er plassert foran veggen: skap, armaturer og utstyr.

:::note
Visningene lages på nytt fra modellen hver gang du åpner dialogen, så de stemmer alltid med modellen. Flytt et skap, og åpne dialogen igjen.
:::

## På egne ark

Hver vegg i hvert rom er også en visning du kan legge på et ark du lager selv: I prosjektoversikten klikker du {{ui:Nytt ark}}, og under **Innvendige fasader** legger du til "101 Kjøkken — Nordvegg" og de andre. Den får de samme målene og merkelappene.

## Ikke bygget ennå

Innvendige fasader i det genererte tegningssettet (de kommer fra rommets **Egenskaper** eller dine egne ark), rom som ikke er stort sett rektangulære (visningen ser firkantet ut på hver side av rommets boks), tegning, merknader eller egne mål på dem, og valg av hvilke vegger som vises. Se [Hva som ikke er bygget ennå](topic:not-built-yet).
