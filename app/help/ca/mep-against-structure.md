---
title: Comprova les canonades i els conductes contra l'estructura
summary: Executa els conjunts de col·lisions preparats de canonades i conductes contra murs, forjats, bigues i pilars, troba els trams més a prop de l'estructura que el seu aïllament i una separació, i llista les obertures que els trams necessiten pels murs i forjats en CSV i BCF.
keywords: mep, col·lisió, comprovació de col·lisions, coordinació, estructura, murs, forjats, bigues, pilars, distància lliure, col·lisió tova, aïllament, separació, obertura, obertures, penetració, manega, nucli, obra auxiliar, bcf, csv
from: 2d597f01
---

## Què faràs

Assegureu-vos que els serveis encaixen en l'edifici: què topa amb l'estructura, què passa massa a prop i on els murs i forjats necessiten forats. Obriu {{ui:Comprovació de col·lisions}} al tauler de l'esquerra; la secció **Canonades i conductes contra l'estructura** és sota la comprovació habitual.

## Col·lisions dures

Les dues llistes de conjunts ara també ofereixen **Canonades i conductes**, **Murs**, **Forjats i cobertes**, **Bigues**, **Pilars** i **Estructura** (els quatre), amb quants elements té cadascun. Cliqueu {{ui:Canonades i conductes × estructura}} per triar el primer i l'últim i executar la comprovació; o trieu qualsevol parell i cliqueu {{ui:Executa}}. Vegeu [Comprova si hi ha col·lisions](topic:clash-check).

## Distàncies lliures

Alguns serveis necessiten espai al voltant: el seu aïllament, i espai per treballar o per a una manega.

1. Doneu a un tram de canonada o de conducte el seu gruix d'**Aïllament** a Propietats (no es dibuixa res per a això).
2. Escriviu la **Separació al voltant de canonades i conductes** (mm) a la Comprovació de col·lisions.
3. Cliqueu {{ui:Comprova les distàncies lliures}}: cada part més a prop d'un mur, forjat, biga o pilar que el seu aïllament més la separació es llista amb la distància que té i la distància que vol. Cliqueu una línia per veure les dues.

Una part que travessa un mur o forjat és una obertura, no una distància lliure, i es llista allà.

## Obertures necessàries

Cliqueu {{ui:Obertures necessàries}}. On l'eix d'un tram travessa un mur o un forjat, BimCraft llista l'obertura que necessita: rodona per a una canonada o conducte rodó, en cas contrari rectangular, tan gran com la mida exterior del tram més dues vegades el seu aïllament més dues vegades la separació, centrada on el tram creua. Cliqueu una línia per veure el tram i el mur o forjat.

- {{ui:Obertures en CSV}}: una línia per obertura amb el tram, la seva mida i aïllament, la mida de l'obertura, l'element que travessa i el seu GlobalId, la planta, les coordenades X, Y i Z del centre, i quant entra el tram a través seu.
- {{ui:Obertures com a incidències BCF}}: una incidència per obertura, amb una càmera que la mira i el tram i l'element seleccionats, per al programa de l'enginyer d'estructures.

:::note
No es talla res: les obertures són una llista per a qui les dimensiona. La separació la escriviu vosaltres; cap norma no diu quina ha de ser la mida d'una obertura. Les bigues i els pilars són col·lisions, no obertures: si una canonada pot passar per un d'ells, és decisió de l'enginyer d'estructures.
:::
