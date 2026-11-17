---
title: Kontroleer vir botsings
summary: Vind waar elemente van een stel in elemente van 'n ander stel inloop — lugkanale deur balke, mure in blaaie — in een model of oor verskeie, met 'n toleransie, en maak 'n botsing 'n kwessie.
keywords: botsing, botsingsopsporing, botsingstoets, harde botsing, inmenging, bots, koördinasie, oorvleueling, toleransie, mep, struktuur
from: 9cb12346
---

## Wat jy gaan doen

Vind die plekke waar twee stelle elemente in mekaar loop, byvoorbeeld alles in die dienste-model teen die struktuur, kyk dan na elkeen en hou die wat saak maak as kwessies.

## Stappe

1. Maak 'n IFC-model oop, en voeg die ander by met {{ui:Voeg 'n model by…}} as jy oor modelle heen kontroleer. Sien [Sien verskeie IFC-modelle saam](topic:several-models).
2. Maak {{ui:Botsingstoets}} oop in die linkerpaneel.
3. In {{ui:Kontroleer}} en {{ui:Teen}} kies twee stelle: die elemente wat jy gekies het, 'n klas (oor elke oop model), 'n gestoorde soekstel (sien [Vind elemente volgens klas, naam of eienskap](topic:find)), of alles.
4. Stel hoeveel oorvleueling om te ignoreer, in meter. 0.01 ignoreer elemente wat net net raak.
5. Klik {{ui:Begin}}. Die toets loop op die agtergrond; {{ui:Kanselleer}} stop dit.
6. Klik op 'n resultaat om dit te sien: die twee elemente word gekies en gewys, al die ander is deursigtig, en die aansig zoem na hulle.
7. Klik {{ui:Maak 'n kwessie daarvan}} onder 'n resultaat om dit in die {{ui:Kwessies}}-oortjie op te skryf. Sien [Kwessies en BCF-lêers](topic:issues-bcf).

## Wat jy moet sien

- Die botsings gelys met albei elemente se name (en hul lêers, wanneer verskeie modelle oop is) en hoe diep hulle oorvleuel, die diepste eerste.
- Vlakke wat net raak, soos 'n muur wat op 'n blad staan of 'n deur in sy opening, is nie botsings nie.

## Goed om te weet

- Dit is 'n basiese harde botsingstoets: elemente waarvan die oppervlaktes kruis. 'n Element wat heeltemal binne 'n ander weggesteek is ('n pyp wat in 'n muur ingebed is), word nog nie gevind nie.
- Die diepte is hoe ver die twee elemente se grense op die minste oorvleuel: 'n gids, nie 'n presiese meting nie.

## Volgende

- [Meet afstande, vlakoppervlaktes en liggings in 3D](topic:measure)
- [Verberg, isoleer en maak elemente deursigtig](topic:hide-and-isolate)
