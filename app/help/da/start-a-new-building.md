---
title: Start en ny bygning
summary: Lav en tom bygningsmodel med dens niveauer, tegn dens vægge, placér emner fra biblioteket og gem den som IFC.
keywords: ny, ny bygning, tom, blank, start fra bunden, skabelon, niveauer, etager, gulve, opret, model
from: 68786865
---

## Hvad du skal gøre

Start en bygningsmodel fra bunden i stedet for at åbne en. BimCraft laver en tom IFC-model med et projekt, en grund, bygningen og dens niveauer. Du kan placere udstyr og møbler fra biblioteket på niveauerne og gemme den som IFC-fil.

:::note
Vægge kan tegnes nu: se [Tegn vægge](topic:draw-walls). Døre, vinduer, dæk og tage er det næste, der bygges.
:::

## Trin

1. Klik på {{ui:Ny bygning}} under **Åbn en fil eller mappe**, eller på startsiden.
2. Skriv **Bygningens navn**.
3. Vælg, hvor mange **Niveauer** den har (1 til 200).
4. Skriv **Niveauhøjden**, fra gulv til gulv: for eksempel `10'-0"`, `10'6"` eller `3000 mm`. Et rent tal er fod i USA og millimeter ellers.
5. Alle felter er allerede udfyldt, så du kan lade dem stå, som de er. Under dem siger boksen, hvad du starter med: enhederne, **Vægtype**, som Vægværktøjet tegner først (vælg en anden fra listen, hvis du vil), og det første ark.
6. Klik på {{ui:Opret}}. Niveauerne stables fra 0, hvert en niveauhøjde over det forrige, og de hedder Niveau 1, Niveau 2 og så videre. De vises i modeltræet, og planen for Niveau 1 åbner ved siden af 3D-visningen med {{ui:Tegn}} slået til.
7. Tegn væggene: klik på {{ui:Væg}} og to punkter. Se [Tegn vægge](topic:draw-walls). Omdøb niveauer eller ændr deres højder i panelet **Niveauer**.
8. Placér emner: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library). Placeringslinjen viser alle niveauer.
9. Klik på {{ui:Gem som IFC}}. Filen navngives efter bygningen, for eksempel `Smiths hus.ifc`.

## Godt at vide

- Modellen gemmes i millimeter, som IFC4. Andre BIM-programmer kan åbne den.
- En ny bygning får ét ark, **A-101**, med planen for det laveste niveau: A3 i 1:100, når du arbejder i metriske enheder, ellers Tabloid i 1/8" = 1'-0". Det er tomt, indtil den første væg tegnes, og viser derefter planen, mens du tegner. Åbn det under **Ark** i projektbrowseren for at ændre papir, målestok eller titel, tilføje visninger eller slette det. En bygning startet fra en skabelon får i stedet skabelonens ark.
- Vil du ændre, hvad hver ny bygning starter med (vægtypen for metriske projekter, niveauerne, det første ark, værktøjet der er aktivt efter Opret), se [Standardpolitikker](topic:default-policies).
- Intet skal sættes op, før den første væg tegnes. Vægtypen, niveauhøjderne, enhederne og arket kan alle ændres senere.
- **Etager** i venstre panel viser kun niveauer, der har noget på sig; modeltræet viser dem alle.
- Indtil du gemmer, tæller den nye bygning som ikke-gemte ændringer. BimCraft spørger, før du åbner en anden fil eller forlader, og gemmer en kopi i denne browser, i tilfælde af at fanen lukkes.
