---
title: Acota una graella
summary: Mostra l'espaiat entre les línies veïnes de la graella i la mida total de la graella a la planta de cada nivell, desada a l'IFC i que segueix la graella quan les línies canvien.
keywords: graella, cotes de graella, cota, espaiat, trams, mida total, cercles, graella de pilars, planta, full
from: aaea5d08
---

## Què cal fer

Poseu l'espaiat entre les línies de la graella i la mida total de la graella a les plantes, més enllà dels cercles, perquè els fulls fets a partir d'elles portin les cotes. Primer cal tenir una graella: vegeu [Graelles i pilars](topic:grids-and-columns).

## Passos

1. Mostreu la planta d'un nivell i feu clic a {{ui:Graella}} per activar l'eina de graella. Surt la fila d'opcions de la graella.
2. Marqueu {{ui:Dimensions}}. Es dibuixen a la planta l'espaiat entre les línies numerades veïnes i entre les línies lletrades veïnes, i la mida total en cada direcció.
3. Trieu un altre nivell: les mateixes cotes es mostren a la seva planta.
4. Moveu una línia, canvieu-ne el nom o n'afegiu una. Les cotes segueixen la graella.
5. Desmarqueu {{ui:Dimensions}} per tornar-les a treure.

## Notes

- Cada canvi és un sol pas: {{key:Mod+Z}} el desfà.
- La configuració es desa a l'IFC amb la graella, i els plànols col·locats als fulls porten les cotes.
- Si el model no té una graella que es pugui canviar (una graella que ha arribat en un fitxer d'un altre programa no es pot canviar aquí), la línia d'estat diu "No hi ha cap graella per canviar."
