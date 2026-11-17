---
title: Naboygninger og grunden fra CivilCraft
summary: Tag de bygninger og den grund, som CivilCrafts Adresse til byggegrund fandt omkring en adresse, som forslag, og tilføj dem, du sætter flueben ved.
keywords: byggegrund, adresse, grund, naboer, kontekst, civilcraft, ccsite, bygninger, byggegrundens kontur, foreslå
from: 3be9407b
---

## Hvad den gør

I CivilCraft finder Terræn › Mere › Adresse til byggegrund bygningerne, grunden, zonen, oversvømmelseszonen og jorden omkring en adresse ud fra åbne data. Knappen "Send til BimCraft som forslag" (eller "Gem byggegrunden som en fil", og åbn `.ccsite.json` her) bringer dem til BimCraft. Intet tilføjes, før du siger det.

## Sådan bruger du den

1. Start eller åbn en model. Adressepunktet sidder i udgangspunktet for det niveau, du er på.
2. En boks lister hver naboygning og grunden med et afkrydsningsfelt. Fjern markeringen i det, du ikke vil have.
3. Bygninger, hvis højde kilden ikke gav, bruger den højde, der er skrevet øverst i boksen. En bygning, der kun har fået antallet af niveauer, tæller 3 m pr. niveau, og boksen siger det.
4. Tryk "Tilføj de markerede". Bygningerne bliver vægge rundt om deres fodaftryk, så høje som angivet, i ét trin i Fortryd. Grunden bliver byggegrundens kontur som et andet trin i Fortryd.

Zone, oversvømmelseszone og jord vises kun til orientering; de tegnes ikke.

## Det bør du vide

- Konturerne er lige så gode som de åbne data: OpenStreetMap og matrikellagene adskiller sig meget fra sted til sted. Kontrollér det, der betyder noget, mod en opmåling.
- Positioner er meter øst og nord for adressepunktet på en flad tilnærmelse, præcise til få meter inden for få kilometer.
- Data har deres kilders licenser (OpenStreetMap er ODbL); boksen viser kreditlinjen.
