---
title: Indvendige facader
summary: Lav ét ark, der viser de fire vægge i et rum set indefra, med mål og mærker, og gem det som PDF.
keywords: indvendig facade, rum, væg, skab, køkken, facade, ark, PDF, målsætning, mærke, zone, A-501
from: 1e3a70a8
---

## Hvad du gør

Vælg et rum, og få ét ark, der viser dets fire vægge, sådan som du ser dem, når du står inde i rummet. Den er lavet til køkkener, bade og alle rum, hvor du skal se skabene, dørene og vinduerne på hver væg.

## Lav arket

1. Vælg rummet. I planen med {{ui:Tegn}} slået til klikker du inde i rummet. I 3D-visningen eller modeltræet vælger du zonen (en IfcSpace).
2. Under **Egenskaber** klikker du på {{ui:Indvendige facader…}}.
3. Dialogen åbner med arket.
4. Klik på {{ui:Download PDF}} for at gemme det. Filen hedder "<file> — Interior elevations — <room>.pdf" og er en vektor-PDF.
5. Klik på {{ui:Luk}}, når du er færdig.

## Hvad arket viser

Arket har fire visninger i to rækker af to, i én målestok: den største standardmålestok, der kan være plads til. De er **Nordvæg**, **Østvæg**, **Sydvæg** og **Vestvæg**. Et tegningshoved har arknummeret A-501, titlen "Indvendige facader — " med rumnummer og rumnavn, projektet og datoen.

Hver visning er skåret igennem midten af rummet og ser på væggen på den side. Sidevæggene og alt, der er skåret i dem, fx et vindue, vises som en grå snitflade rundt om visningen. Visningen stopper lige efter vægfladen, så intet bag væggen vises.

Hver visning har:

- rummets bredde under den, fra indvendig side til indvendig side;
- rummets højde ved siden af den, fra gulvet til niveauet ovenover;
- et kvadratisk mærke på hver dør og et sekskantet mærke på hvert vindue i den væg, med dets nummer (D1, W1 og så videre);
- et cirkulært mærke med varenummeret på hvert biblioteksemne, der er placeret foran væggen: skabe, armaturer og udstyr.

:::note
Visningerne laves ud fra modellen, hver gang du åbner dialogen, så de altid stemmer med den. Flyt et skab, og åbn dialogen igen.
:::

## På dine egne ark

Hver væg i hvert rum er også en visning, som du kan lægge på et ark, du selv laver: i projektbrowseren klikker du på {{ui:Nyt ark}} og tilføjer derefter under **Indvendige facader** "101 Køkken — Nordvæg" og de andre. Den får de samme mål og mærker.

## Ikke lavet endnu

Indvendige facader i det genererede tegningssæt (de kommer fra rummets **Egenskaber** eller dine egne ark), rum, der ikke er næsten rektangulære (visningen ser firkantet ud på hver side af rummets boks), tegning, noter eller egne mål på dem, og valg af hvilke vægge der vises. Se [Hvad der ikke er lavet endnu](topic:not-built-yet).
