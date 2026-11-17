---
title: Cerca col·lisions
summary: Trobeu els llocs on els elements d'un conjunt es creuen amb els d'un altre (conductes a través de bigues, murs dins de forjats), en un model o en diversos, amb una tolerància, i convertiu una col·lisió en una incidència.
keywords: col·lisió, detecció de col·lisions, comprovació de col·lisions, col·lisió dura, interferència, xoc, coordinació, solapament, tolerància, mep, estructura
from: 9cb12346
---

## Què hi fareu

Trobeu els llocs on dos conjunts d'elements es creuen, per exemple tot el model d'instal·lacions contra l'estructura, i després mireu cadascun i quedeu-vos amb els que importen com a incidències.

## Passos

1. Obriu un model IFC, i afegiu-ne els altres amb {{ui:Afegeix un model…}} si comproveu entre models. Vegeu [Mostra diversos models IFC junts](topic:several-models).
2. Obriu {{ui:Comprovació de col·lisions}} al panell de l'esquerra.
3. A {{ui:Comprova}} i {{ui:Contra}}, trieu dos conjunts: els elements que heu triat, una classe (en tots els models oberts), un conjunt de cerca desat (vegeu [Cerca elements per classe, nom o propietat](topic:find)), o tots.
4. Definiu quant solapament s'ignora, en metres. 0.01 ignora els elements que només es toquen.
5. Cliqueu {{ui:Executa}}. La comprovació s'executa en segon pla; {{ui:Cancel·la}} l'atura.
6. Cliqueu un resultat per veure'l: els dos elements es trien i es mostren, tota la resta es veu transparent, i la vista fa zoom fins a ells.
7. Cliqueu {{ui:Fes-ne una incidència}} sota un resultat per redactar-lo a la pestanya {{ui:Incidències}}. Vegeu [Incidències i fitxers BCF](topic:issues-bcf).

## Què hauríeu de veure

- Les col·lisions llistades amb els noms dels dos elements (i els seus fitxers, quan hi ha diversos models oberts) i quant es solapen, la més profunda primer.
- Les cares que només es toquen, com un mur que descansa sobre un forjat o una porta dins del seu buit, no són col·lisions.

## Bon de saber

- Es tracta d'una comprovació bàsica de col·lisió dura: elements les superfícies dels quals es creuen. Un element completament amagat dins d'un altre (un tub encastat en un mur) encara no es troba.
- La profunditat és com de molt se solapen els límits dels dos elements, com a mínim: una guia, no una mesura exacta.

## Següent

- [Mesura distàncies, àrees de cares i ubicacions en 3D](topic:measure)
- [Amaga, aïlla i fes transparents els elements](topic:hide-and-isolate)
