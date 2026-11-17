---
title: Puntos para replanteo y verificación de lo construido
summary: Numere los lugares que una cuadrilla replantea desde el modelo —centros de columnas, extremos de muros, anclajes, pasamuros, cualquier elemento que elija—, escríbalos para una estación total, y luego lea los puntos medidos en obra por la cuadrilla y vea qué está fuera de lugar.
keywords: puntos de replanteo, replanteo, replantear, estación total, levantamiento, archivo de puntos, csv, txt, pnezd, penzd, xyz, norte, este, elevación, como construido, verificación, tolerancia, desviación, anclajes, centros de columnas, extremos de muros, pasamuros, coordenadas de levantamiento, conversión de mapa
from: acea9606
---

La pestaña {{ui:Points}} de la derecha crea los puntos que una cuadrilla replantea en obra desde el modelo abierto, y verifica los puntos que mide después.

## Crear los puntos

1. Abra un modelo IFC y la pestaña {{ui:Points}}.
2. Marque lo que se replanteará: **centros de columnas** (el pie de la línea central de cada columna), **extremos de muros** (ambos extremos del eje de cada muro, en su base), **anclajes**, **pasamuros** (elementos cuyo nombre o tipo dice pasamuro) y los **elementos elegidos** (cada uno en su punto de colocación; elíjalos primero en la vista).
3. Elija el primer número y un prefijo, las coordenadas, las unidades, las columnas y el archivo:
   - **Modelo**: las propias coordenadas del archivo. **Cuadrícula de levantamiento**: la cuadrícula de mapa de la georreferencia del modelo (se muestra solo cuando el IFC tiene una conversión de mapa), en metros o en la unidad que elija.
   - Columnas **PNEZD** (punto, norte, este, elevación, descripción), **PENZD** o **XYZ**; **CSV** (comas) o **TXT** (tabuladores).
4. Haga clic en {{ui:Make points}}: la lista los muestra y la vista los marca en azul. {{ui:Download the points}} escribe el archivo.

Los puntos siguen un orden fijo —por tipo, y luego en filas a lo largo de la planta—, así que volver a crearlos desde el mismo modelo da los mismos números. El archivo es el que abre CivilCraft y el que escribe EXPORTPOINTS de CadCraft: un punto por línea, tres decimales, y una descripción entre comillas cuando lleva una coma.

## Verificar los puntos medidos en obra

Cuando la cuadrilla devuelva lo que midió, elija una **tolerancia** en milímetros y cómo emparejar los puntos —por **número de punto** (conservaron sus números) o por la **toma más cercana**— y haga clic en {{ui:Read as-built points…}}. Lea el archivo en las mismas unidades y coordenadas en que lo escribió.

Cada punto de diseño queda entonces **dentro** de la tolerancia, **fuera** de ella o **no medido**, y cualquier toma que nadie pidió aparece como **extra**. La tabla da las diferencias en la unidad que elija en la barra de herramientas, con los pies mostrados como pulgadas decimales (medido menos diseño: este, norte, altura, y la distancia en planta). La vista marca cada punto en verde o rojo, con una línea hacia la toma, y en gris cuando no fue medido. {{ui:Report (CSV)}} escribe la comparación completa.

Nada de esto cambia el modelo. Todavía no está disponible: replantear desde bordes de losa, intersecciones de ejes o aberturas que usted haga, ni enviar puntos directamente a un instrumento; para esto use el archivo.
