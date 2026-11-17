---
title: Puntos para replanteo y verificaciones según lo construido
summary: Numere los lugares que una cuadrilla replantea desde el modelo —centros de columnas, extremos de muros, pernos de anclaje, pasamuros, cualquier elemento que elija—, escríbalos para una estación total, y luego lea de vuelta los puntos medidos por la cuadrilla y vea qué está fuera.
keywords: puntos de replanteo, replanteo, replantear, marcar en terreno, estación total, relevamiento, archivo de puntos, csv, txt, pnezd, penzd, xyz, norte, este, cota, según lo construido, verificación, tolerancia, desvío, pernos de anclaje, centros de columnas, extremos de muros, pasamuros, coordenadas de relevamiento, conversión cartográfica
from: acea9606
---

La pestaña {{ui:Points}} a la derecha crea los puntos que una cuadrilla replantea en obra desde el modelo abierto, y verifica los puntos que mide después.

## Crear los puntos

1. Abra un modelo IFC y la pestaña {{ui:Points}}.
2. Marque qué replantear: **centros de columnas** (el pie de la línea central de cada columna), **extremos de muros** (ambos extremos del eje de cada muro, en su base), **pernos de anclaje**, **pasamuros** (elementos cuyo nombre o tipo dice pasamuro) y los **elementos elegidos** (cada uno en su punto de colocación; elíjalos antes en la vista).
3. Elija el primer número y un prefijo, las coordenadas, las unidades, las columnas y el archivo:
   - **Modelo**: las coordenadas propias del archivo. **Cuadrícula de relevamiento**: la cuadrícula cartográfica de la georreferencia del modelo (solo se muestra si el IFC tiene una conversión cartográfica), en metros o en la unidad que elija.
   - Columnas **PNEZD** (punto, norte, este, cota, descripción), **PENZD** o **XYZ**; **CSV** (comas) o **TXT** (tabulaciones).
4. Presione {{ui:Make points}}: la lista los muestra y la vista los marca en azul. {{ui:Download the points}} escribe el archivo.

Los puntos salen en un orden fijo —por tipo, y luego en filas a lo largo del plano—, así que crearlos de nuevo desde el mismo modelo da los mismos números. El archivo es el que abre CivilCraft y el que escribe EXPORTPOINTS de CadCraft: un punto por línea, tres decimales, y una descripción entre comillas cuando contiene una coma.

## Verificar los puntos según lo construido

Cuando la cuadrilla envía lo que midió, elija una **tolerancia** en milímetros y cómo emparejar los puntos —por **número de punto** (conservaron sus números) o por la **toma más cercana**— y presione {{ui:Read as-built points…}}. Lea el archivo en las mismas unidades y coordenadas en que lo escribió.

Cada punto de diseño queda entonces **dentro** de la tolerancia, **fuera** de ella, **no medido**, y cualquier toma que nadie pidió figura como **extra**. La tabla da las diferencias en la unidad que elija en la barra de herramientas, con pies mostrados como pulgadas decimales (según lo construido menos diseño: este, norte, altura y la distancia en planta); la vista marca cada punto en verde o en rojo con una línea hacia la toma, y en gris cuando no fue medido. {{ui:Report (CSV)}} escribe la comparación completa.

Nada de esto cambia el modelo. Todavía no está hecho: replantear desde bordes de losas, intersecciones de grillas o aberturas creadas por usted, y enviar los puntos directamente a un instrumento —use el archivo.
