---
title: Kwessies en BCF-lêers
summary: Stoor 'n aansig van die model as 'n kwessie — kamera, gekose elemente, versteekte elemente, snit — deel dit as 'n BCF-lêer met ander koördineringsinstrumente, en maak hulle BCF-lêers oop om hulle kwessies te sien.
keywords: bcf, bcfzip, kwessie, kwessies, onderwerp, aansigpunt, botsingsverslag, koördinasie, kommentaar, momentopname, maak bcf oop, stoor bcf, uitvoer, invoer
from: 2a6cf201
---

## Wat jy gaan doen

Wys na 'n probleem in die model en hou die aansig wat dit wys, en gee dit dan aan in 'n BCF-lêer, die formaat wat ander koördineringsinstrumente lees en skryf.

## Stappe

1. Maak 'n IFC-model oop en stel die aansig op: wentel daarna, kies die betrokke elemente, versteek wat in die pad is, en sny dit met 'n snitvlak of -boks.
2. Klik die {{ui:Kwessies}}-oortjie regs, dan {{ui:Nuwe kwessie uit hierdie aansig}}.
3. Tik 'n titel, en 'n kommentaar as jy wil; kies 'n status; gee jou naam of e-pos (as jy aangemeld is, word jou rekening se naam ingevul; sien [BimCraft-instellings](topic:settings#your-name-on-issues)). Klik {{ui:Skep kwessie}}.
4. Klik {{ui:Wys}} op 'n kwessie om sy aansig terug te plaas.
5. Klik {{ui:Stoor BCF}} om elke kwessie as een `.bcf`-lêer af te laai.
6. Om kwessies wat iemand anders gemaak het te sien, klik {{ui:Maak BCF oop…}} en kies hulle `.bcf`- of `.bcfzip`-lêer.

## Wat jy behoort te sien

- Elke kwessie in die lys met 'n prent van sy aansig, sy titel, status, outeur en datum.
- {{ui:Wys}} plaas die kamera, die gekose elemente, wat versteek was (of die enigste dinge wat gewys is), en die snit terug. Elemente word volgens hul GlobalId in elke oop model gevind; die statuslyn sê as sommige nie daar is nie.
- 'n Snitvlak of -boks van 'n ander instrument word gewys wanneer dit met die model se asse in lyn is; skuins of ekstra vlakke kom terug as 'n snitvolume (tot 6 vlakke). 'n Kwessie hou die eerste boks van 'n volume van verskeie bokse.

## Goed om te weet

- Die lêer is BCF 2.1 en hou die aansig in die model se eie koördinate, sodat ander instrumente die kamera op dieselfde plek sit.
- Kwessies bly in hierdie oortjie totdat jy hulle stoor. 'n Ander model oopmaak hou die lys; maak die model waaroor die kwessies gaan oop voordat jy hulle wys.
- 'n Parallelle (ortogonale) kamera van 'n ander instrument word gewys met hierdie kyker se perspektiefkamera, agteruit getrek sodat dieselfde deel van die model die aansig vul.

## Algemene foute

- **Wys het die kamera iewers vreemd geskuif.** Die kwessie is op 'n ander model of met ander koördinate gemaak. Maak eers die regte model oop.
- **Die lêer sal nie oopmaak nie.** Dit is nie 'n BCF-zip nie, of dit is beskadig; die statuslyn sê waarom.

## Volgende

- [Versteek, isoleer en sien deur elemente](topic:hide-and-isolate)
- [Sny 'n IFC-model met 'n snitvlak](topic:section-plane)
