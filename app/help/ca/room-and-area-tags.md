---
title: Etiquetes de sala i d'àrea
summary: Poseu una etiqueta amb el número, el nom i l'àrea a una sala o una àrea. L'etiqueta la segueix i la seva mida depèn de l'alçada sobre el paper.
keywords: etiqueta, etiqueta de sala, etiqueta d'àrea, etiqueta sala, etiqueta àrea, etiqueta-ho tot, etiqueta totes les no etiquetades, rètol, alçada del text, alçada sobre el paper, anotació
from: 67059d8a
---

## Què farà

Etiqueteu sales i àrees una a una o totes alhora, i moveu una etiqueta on es llegeixi bé.

## On són les eines

- Disposicions de cinta: {{ui:Arquitectura}} › **Sala i àrea** › {{ui:Etiqueta de sala}} i {{ui:Etiqueta d'àrea}}.
- Disposició clàssica: la barra de dibuix › menú {{ui:Sales}}.
- Una sala o àrea triada: Propietats › {{ui:Afegeix una etiqueta}}.

## Passos

1. Trieu {{ui:Etiqueta de sala}} i feu clic en una sala, on ha d'anar l'etiqueta.
2. O premeu {{ui:Etiqueta totes les sense etiqueta}} a la fila: cada sala d'aquest nivell que no tingui etiqueta en rep una, al mig. És un sol pas de desfer.
3. Per moure una etiqueta, trieu-la amb {{ui:Selecciona}} i arrossegueu-la. Propietats té {{ui:Torna-la al mig}}.
4. {{ui:Etiqueta d'àrea}} funciona igual per a les àrees.

## Què fa una etiqueta

- Diu el número, el nom i l'àrea, en les vostres unitats de visualització.
- Segueix la seva sala: si canvieu el nom de la sala o moveu un mur, les paraules i el lloc de l'etiqueta canvien en el mateix pas.
- Té mida sobre el paper: {{ui:Alçada del text sobre el paper}} és en mil·límetres (2.5 per començar). A una escala de vista de 1:50, una etiqueta de 2.5 mm fa 125 mm d'alçada al model; a 1:100, 250 mm.
- Una sala amb etiqueta mostra l'etiqueta en lloc del seu rètol simple.
- Quan desapareix la seva sala o àrea, l'etiqueta se'n va amb ella. Desfés les torna a posar totes dues.

## A l'IFC

Una etiqueta és un IfcAnnotation (ObjectType ROOMTAG o AREATAG) amb el seu text com a literal de text, i el GlobalId de l'element que designa. El text del fitxer dona l'àrea en metres quadrats.

## Encara no implementat

- Formes d'etiqueta pròpies i una línia de crida.
- Les etiquetes de portes, finestres i murs són una eina a part (vegeu els estils d'etiqueta dels fulls).

Vegeu també [Sales i separadors de sala](topic:rooms-and-separators).
