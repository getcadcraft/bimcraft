---
title: Fundamenter under væggene
summary: Læg en plade på terræn, stemvægge med plade, et krybekælder eller en kælder under en bygning med ét klik; punktfundamenter dimensioneres ud fra væggene og antallet af etager, og fundamentet følger med, når væggene flyttes.
keywords: fundament, punktfundament, plade på terræn, fortykket kant, monolitisk plade, stemvæg, krybekælder, kælder, kældervæg, frost, beton, punktfundamentets bredde
from: c0e20172
---

## Hvad du skal gøre

Giv bygningen et fundament, der passer til dens vægge. BimCraft følger ydersiden af væggene, dimensionerer punktfundamenterne ud fra vægtypen og hvor mange etager, der står på dem, og laver fundamentet igen, hver gang væggene ændres.

## Læg et fundament ind

1. På det niveau, hvis vægge står på det (normalt det første), åbn {{ui:Build}} og vælg {{ui:Fundament}}.
2. Vælg typen:
   - **Plade på terræn**: en 4" betonplade, hvis overside er gulvet, med en fortykket kant under væggene.
   - **Stemvægge og plade**: fundamentsvægge op til gulvet på punktfundamenter, med en plade indenfor dem.
   - **Krybekælder**: fundamentsvægge, der stopper under gulvkonstruktionen, på punktfundamenter, uden plade.
   - **Kælder**: fundamentsvægge i fuld højde på punktfundamenter med et kælderdæk under gulvkonstruktionen.
3. Peg inde i bygningen: punktfundamenterne vises stiplet med deres størrelse. Klik.

Klik på en bygning, der allerede har et fundament, og det vælges, så du kan ændre det i stedet for at tilføje et andet.

## Ændr det

Vælg fundamentet (klik inde i bygningen med {{ui:Fundament}}, eller klik på en af dets dele i 3D-visningen eller modeltræet) og ændr det i **Egenskaber**: typen, punktfundamentets bredde og dybde, hvor dybt punktfundamentets underside ligger, væggens tykkelse, hvor langt under gulvet væggene stopper, kælderhøjden og pladens tykkelse. Hver ændring er ét trin i fortrydelse.

Mål markeret **auto** kommer fra væggene: punktfundamenter 12", 15" eller 23" brede for en, to eller tre etager på plade eller stemvægge, 18", 22" eller 27" over et krybekælder eller en kælder, og 4" bredere under mur- eller betonvægge. Skriv et mål for at angive dit eget; skriv `0` for at gå tilbage til auto.

:::warning
De automatiske mål er mærkede standardværdier for typiske lette huse, ikke ingeniørarbejde. En projekterende eller ingeniør kontrollerer punktfundamenter, dybder og vægge for jordbund, frostdybde og laster.
:::

## Hvad der gemmes

Et fundament gemmes som en IFC-elementsamling ("Foundation") bestående af et punktfundament (eller en plades fortykkede kant), en fundamentsvæg og en plade, alt efter hvad typen kræver, alle af beton, hver med sine mængder: længder, bredder, højder, arealer og rumfang, klar til mængdeudtræk.

## Godt at vide

- Flyt, tilføj eller slet vægge, så laves fundamentet under dem igen; tegn vægge på niveauet over, og punktfundamenterne nedenunder bliver bredere for den ekstra etage.
- {{key:Delete}} fjerner et valgt fundament med alle dets dele.
- Med stedets terræn i modellen (se [Stedets terræn, byggeplateauet og belægning](topic:terrain)) trapper stemvægge og krybekælderens punktfundamenter ned med det i 8"-trin.
- Punktfundamenter under indvendige vægge er endnu ikke lavet.
