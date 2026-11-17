---
title: Vegger og dører fra en mobil- eller laserskanning
summary: Gjør en skanning av et rom om til foreslåtte vegger, dører og rom, som du godtar en etter en.
keywords: skanning, mobilskanning, lidar, punktsky, vegger fra skanning, dører fra skanning, romskanning, ply, e57, las, obj, foreslå
from: a4ef0f10
---

## Hva den gjør

Med en skanning åpen (en punktsky som PLY, E57 eller LAS, eller et nett som OBJ), kutter BimCraft skanningen i planhøyde, dreier den rettvinklet mot bygningen, og leter etter lange, tynne rekker av punkter: det er vegger. Et gap omtrent på dørens bredde mellom to rekker på samme linje blir én vegg med en dør i. Veggene som lukker et rom, lager et rom.

Ingenting tegnes før det godtas. Veggene og dørene kommer som en liste med forslag (de er endringer i forslagsmodus): behold de som stemmer, forkast de andre, og alt som beholdes, tegnes i ett steg i angre. Rommene kommer av seg selv.

## Hva den sjekker

Vegger som ikke lukker seg, veggstrekninger kortere enn tykkelsen på en vegg, og et gap av dørstørrelse uten vegg rundt seg, rapporteres som **Problemer** med en posisjon, så du kan se på skanningen der.

## Ikke verifisert før kontroll

Veggene, dørene og rommene som godtas fra en skanning, er merket uverifisert: en stiplet boks og et «?» i planen, til de merkes som kontrollert. Se [Merk elementer som kontrollert eller verifisert på stedet](topic:verification).

## Hva den ikke kan gjøre

- Den finner ikke vegger som går i to vinkelrette retninger. En skrå eller buet vegg blir ikke funnet.
- Én etasje om gangen. Vinduer finnes ikke (et vindu er bare et gap når snittet er i vindusbrett-høyde).
- Den er prøvd på genererte romskanninger og nett, men ikke ennå på skanninger fra en ekte mobil. Hvor godt den fungerer på en ekte skanning (drift over en lang gange, møbler mot vegger, glass, åpne dører) er ukjent, og å finjustere den på ekte skanninger er neste steg. Kontroller hvert forslag mot skanningen før det godtas.
