---
title: Vægge og døre fra en telefon- eller laserskanning
summary: Lav en skanning af et rum om til foreslåede vægge, døre og rum, som du accepterer ét ad gangen.
keywords: skanning, telefonskanning, lidar, punktsky, vægge fra skanning, døre fra skanning, rumskanning, ply, e57, las, obj, foreslå
from: a4ef0f10
---

## Hvad den gør

Når en skanning er åben (en punktsky som PLY, E57 eller LAS, eller et net som OBJ), skærer BimCraft skanningen i planhøjden, drejer den lige med bygningen og leder efter lange, tynde strækninger af punkter: dem er vægge. Et hul omtrent på størrelse med en dør mellem to strækninger på samme linje bliver til én væg med en dør i. De vægge, der lukker et rum, danner et rum.

Intet tegnes, før du accepterer det. Vægge og døre kommer som en liste med forslag (de er ændringer i tilstanden Foreslå): behold dem, der er rigtige, afvis de andre, og alt du beholder tegnes i ét trin i Fortryd. Rummene dukker op af sig selv.

## Hvad den kontrollerer

Vægge, der ikke lukker, væglængder kortere end en væg er tyk, og et hul på dørstørrelse uden væg omkring, rapporteres som **Problemer** med en position, så du kan kigge på skanningen dér.

## Ikke verificeret, før det er kontrolleret

Vægge, døre og rum, du accepterer fra en skanning, er markeret som ikke verificeret: en stiplet boks og et «?» i planen, til du markerer dem som kontrolleret. Se [Markér elementer som kontrolleret eller verificeret i felten](topic:verification).

## Hvad den ikke kan

- Den finder vægge, der går i to vinkelrette retninger. En skrå eller buet væg findes ikke.
- Én etage ad gangen. Vinduer findes ikke (et vindue er kun et hul, når snittet ligger i vinduesbænkshøjde).
- Den er prøvet på genererede rumskanninger og net, ikke endnu på skanninger fra en rigtig telefon. Hvor godt den klarer sig på en rigtig skanning (drift over en lang gang, møbler op ad vægge, glas, åbne døre), vides ikke; at finjustere den på rigtige skanninger er næste skridt. Kontrollér hvert forslag mod skanningen, før du accepterer det.
