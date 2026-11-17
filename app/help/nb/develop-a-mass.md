---
title: Utvikle en bygningsmasse fra en tomtestudie
summary: Ta en bygningsmasse studert i CivilCraft sin tomtevisning og utvikle den til etasjer, vegger og gulv, med tomtas plassering i kartet bevart.
keywords: masse, bygningsmasse, massing, tomtestudie, utvikle, CivilCraft, overlevering, etasjer, vegger, gulv, fotavtrykk, georeferering, IFC
from: 557b94d1
---

Tomtevisningen i CivilCraft kan tegne bygningsmasser på en tomt og teste dem mot terrenget, grensene du skriver inn, og solen. **Utvikle i BimCraft** åpner BimCraft i en ny fane med massene. **Masser som IFC** lagrer dem som en fil du åpner her på vanlig måte. Uansett kommer hver masse inn som en tomt, en bygning med én etasje for hver etasje i massen, og ett blokkelement (selve massen) som bærer tallene sine.

## Utvikle en masse

1. Velg en masse i 3D-visningen. Egenskaper viser bruken, etasjene og etasjehøyden, fotavtrykket, bruttoarealet, hvordan den ligger i skråningen, og tomten.
2. Klikk på **Utvikle denne massen**.

I ett angresteg får hver etasje i den bygningen vegger rundt fotavtrykket (fotavtrykket er veggenes ytterside; hver vegg går opp til etasjen over, og den øverste er én etasje høy) og et gulv under hele bygningen. Blokken erstattes, og bygningen beholder tallene fra studien i egenskapssettet `CadCraft_SiteMass`, merket som utviklet. Det er ikke noe tak: et tak avhenger av prosjekteringen.

## Tomtens plassering

En fil fra CivilCraft skrives i prosjektets egen lengdeenhet og, når CivilCraft-prosjektet hadde et koordinatsystem, bærer den det med seg som prosjektets kartomregning. Å utvikle en masse lar den være urørt, så bygningen står der kartet sier at den står.
