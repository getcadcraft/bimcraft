---
title: Wanden en deuren uit een telefoon- of laserscan
summary: Maak van een scan van een ruimte voorgestelde wanden, deuren en ruimten, die u een voor een accepteert.
keywords: scan, telefoonscan, lidar, puntenwolk, wanden uit scan, deuren uit scan, ruimtescan, ply, e57, las, obj, voorstellen
from: a4ef0f10
---

## Wat het doet

Met een scan geopend (een puntenwolk zoals PLY, E57 of LAS, of een mesh zoals OBJ), snijdt BimCraft de scan op de hoogte van de plattegrond, zet die haaks op het gebouw en zoekt naar lange, dunne reeksen punten. Dat zijn wanden. Een opening ter breedte van een deur tussen twee reeksen op één lijn wordt één wand met een deur erin. De wanden die een ruimte afsluiten, vormen samen een ruimte.

Niets wordt getekend totdat u het accepteert. De wanden en deuren komen als een lijst met voorstellen (het zijn wijzigingen in de modus Suggereren). Behoud de juiste, verwerp de andere, en alles wat u behoudt, wordt in één stap van Ongedaan maken getekend. De ruimten verschijnen vanzelf.

## Wat het controleert

Wanden die niet sluiten, wandreeksen die korter zijn dan de dikte van een wand, en een opening ter grootte van een deur zonder wand eromheen, worden gemeld als Problemen, met een positie, zodat u daar in de scan kunt kijken.

## Niet geverifieerd tot u het controleert

De wanden, deuren en ruimten die u uit een scan accepteert, zijn gemarkeerd als niet-geverifieerd: een gestreept kader en een "?" in de plattegrond, totdat u ze als gecontroleerd markeert. Zie [Elementen markeren als gecontroleerd of op locatie geverifieerd](topic:verification).

## Wat het niet kan

- Het vindt geen wanden die in twee loodrechte richtingen lopen. Een schuine of gebogen wand wordt niet gevonden.
- Het werkt per verdieping. Ramen worden niet gevonden; een raam is alleen een opening wanneer de snede op vensterbankhoogte ligt.
- Het is uitgeprobeerd op gegenereerde ruimtescans en meshes, nog niet op scans van een echte telefoon. Hoe goed het op een echte scan werkt (afwijking over een lange wandeling, meubels tegen wanden, glas, open deuren) is niet bekend. Het afstellen op echte scans is de volgende stap. Controleer elk voorstel tegen de scan voordat u het accepteert.
