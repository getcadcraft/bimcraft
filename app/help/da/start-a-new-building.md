---
title: Start en ny bygning
summary: Lav en tom bygningsmodel med dens niveauer, tegn dens vægge, placér emner fra biblioteket, og gem den som IFC.
keywords: ny, ny bygning, tom, start fra bunden, skabelon, niveauer, etager, gulve, opret, model
from: 546b8ae8
---

## Det her gør du

Start en bygningsmodel fra ingenting i stedet for at åbne en. BimCraft laver en tom IFC-model med et projekt, en byggegrund, bygningen og dens niveauer. Du kan placere udstyr og møbler på niveauerne fra biblioteket og gemme det som en IFC-fil.

:::note
Vægge kan tegnes nu: se [Tegn vægge](topic:draw-walls). Døre, vinduer, gulve og tage bliver bygget næste gang.
:::

## Trin

1. Klik på {{ui:Ny bygning}} under **Åbn en fil eller mappe** eller på startsiden.
2. Skriv **Bygningens navn**.
3. Vælg, hvor mange **Niveauer** den har (1 til 200).
4. Skriv **Niveauhøjde**, fra gulv til gulv: for eksempel `10'-0"`, `10'6"` eller `3000 mm`. Et almindeligt tal er fod i USA, millimeter andre steder.
5. Klik på {{ui:Opret}}. Niveauerne stables fra 0, hvert en niveauhøjde over det forrige, og får navnene Level 1, Level 2 og så videre. De vises i modeltræet, og planen for Level 1 åbner ved siden af 3D-visningen med {{ui:Tegn}} slået til.
6. Tegn væggene: se [Tegn vægge](topic:draw-walls). Omdøb niveauer eller ændr deres højder i panelet **Niveauer**.
7. Placér emner: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library). Placeringslinjen viser alle niveauer.
8. Klik på {{ui:Gem som IFC}}. Filen får bygningens navn, for eksempel `Smith's house.ifc`.

## Godt at vide

- Modellen gemmes i millimeter som IFC4. Andre BIM-programmer åbner den.
- **Etager** i panelet til venstre viser kun niveauer med noget på; modeltræet viser dem alle.
- Indtil du gemmer, tæller den nye bygning som ugemt arbejde. BimCraft spørger, før du åbner en anden fil eller forlader siden, og beholder en kopi i denne browser, hvis fanen lukkes.
