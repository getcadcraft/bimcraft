---
title: Sales i separadors de sala
summary: Trieu una sala per posar-li nom i número i llegir-ne l'àrea, el perímetre i el volum. Dibuixeu un separador de sala on dues sales es toquen sense mur entre elles.
keywords: sala, sales, separador de sala, línia de separació, espai, IfcSpace, nom, número, àrea, perímetre, volum, planta oberta, dividir una sala, cuina i sala d'estar, no tancat
from: d4c1d66b
---

## Què farà

Doneu nom a les sales que formen els murs, i dividiu una sala oberta en dues sense cap mur.

## On són les eines

- Disposicions de cinta: {{ui:Arquitectura}} › **Sala i àrea** › {{ui:Sala}} i {{ui:Separador de sales}}.
- Disposició clàssica: la barra de dibuix › menú {{ui:Sales}}.
- Qualsevol estil de menú: les ordres es diuen Room i Room Separator; la paleta d'ordres les troba.

## Passos

1. Dibuixeu els murs. Cada bucle tancat de murs ja és una sala: BimCraft la fa, la numera i li dona l'àrea a mesura que dibuixeu.
2. Trieu {{ui:Sala}}. Moveu-vos pel plànol: la sala sota el punter s'il·lumina amb la seva àrea, perímetre i volum.
3. Per posar noms a les sales de pressa, escriviu primer un {{ui:Nom}} i un {{ui:Número}} a la fila i després feu clic a la sala. El número augmenta d'un en un per a la sala següent (101, 102; A-09, A-10).
4. O simplement feu clic a una sala: queda triada, i Propietats té el seu nom, número, àrea, perímetre, volum i la seva etiqueta.
5. Per dividir una sala oberta, trieu {{ui:Separador de sales}} i feu clic a dos punts: de mur a mur, o de mur a un altre separador. Continueu fent clics per fer una cadena; Enter, Esc o un doble clic la finalitza.

## Què fa un separador

- Delimita les sales com un mur sense gruix. Les àrees de les dues sales sumen exactament la sala que eren.
- La sala que conté el centre de l'antiga sala conserva el seu nom i número. L'altra és nova.
- Un separador que s'acaba al mig, sense tocar res per un extrem, no divideix res. Allargueu-lo i ho farà.
- La part d'un separador que queda dins d'un mur s'ignora, de manera que podeu enganxar-vos als eixos centrals dels murs.
- Trieu un separador i premeu Delete per treure'l: les dues sales tornen a ser una. Desfés el torna a posar.

## Si no hi ha cap sala on feu clic

La barra d'estat ho indica: els murs no es tanquen allà. Tanqueu el buit, o dibuixeu un separador a través seu. No es rebutja res; simplement encara no hi ha cap sala tancada.

## A l'IFC

Una sala és un IfcSpace amb el seu número (Name), el seu nom (LongName) i Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. El volum és l'àrea multiplicada per l'alçada fins al nivell de sobre.

Un separador de sala és un IfcVirtualElement, l'entitat que IFC fa servir per a un límit que no està construït. Té una línia i cap cos, de manera que un altre programa no llegeix cap mur i no en comptabilitza cap.

## Encara no implementat

- Separadors corbats.
- Una sala que segueix un sostre inclinat: el volum és sempre l'àrea per l'alçada del nivell.
- Les relacions de límit d'espai (IfcRelSpaceBoundary) no s'escriuen, ni per als murs ni per als separadors.

Vegeu també [Etiquetes de sala i d'àrea](topic:room-and-area-tags), [Àrees i límits d'àrea](topic:areas-and-area-boundaries).
