---
title: "Udvikl en bygningsmasse fra en grundundersøgelse"
summary: "Tag en bygningsmasse, der er undersøgt i CivilCrafts situationsvisning, og udvikl den til niveauer, vægge og dæk, med stedets placering på kortet bevaret."
keywords: masse, bygningsmasse, massemodellering, grundundersøgelse, udvikl, CivilCraft, overdragelse, niveauer, vægge, dæk, fodaftryk, georeferering, IFC
from: 557b94d1
---

CivilCrafts situationsvisning kan tegne bygningsmasser på en matrikel og teste dem mod terrænet, de grænser, du skriver ind, og solen. **Udvikl i BimCraft** åbner BimCraft i en ny fane med masserne; **Masser som IFC** gemmer dem som en fil, du åbner her på den sædvanlige måde. Uanset hvad, ankommer hver masse som en site, en bygning med ét niveau pr. etage og én blok (selve massen), der bærer dens tal.

## Udvikl en masse

1. Vælg en masse i 3D-visningen. Egenskaber viser dens anvendelse, etager og etagehøjde, fodaftryk, bruttoetageareal, hvordan den står på hældningen, og dens matrikel.
2. Klik på **Udvikl denne masse**.

I ét trin, der kan fortrydes, får hvert niveau i den bygning vægge rundt om fodaftrykket (fodaftrykket er væggenes ydre flade; hver væg går op til niveauet over, og den øverste er én etage høj) og et dæk under hele bygningen. Blokken erstattes, og bygningen beholder studiets tal i egenskabssættet `CadCraft_SiteMass`, markeret som udviklet. Der er intet tag: et tag afhænger af designet.

## Stedets placering

En fil fra CivilCraft skrives i projektets egen længdeenhed og bærer, når CivilCrafts projekt havde et koordinatsystem, det som projektets kortkonvertering. Udvikling af en masse lader det være, så bygningen bliver, hvor kortet siger, den er.
