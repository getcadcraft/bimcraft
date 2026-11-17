---
title: Puntos de replanteo y comprobaciones tal como construido
summary: Numere los lugares que una cuadrilla replantea desde el modelo —centros de pilares, extremos de muros, pernos de anclaje, pasatubos, cualquier elemento que elija—, escríbalos para una estación total y luego lea los puntos medidos por la cuadrilla y vea qué está fuera.
keywords: puntos de replanteo, replanteo, replantear, estacado, estación total, topografía, archivo de puntos, csv, txt, pnezd, penzd, xyz, norte, este, cota, tal como construido, tolerancia, desviación, pernos de anclaje, centros de pilares, extremos de muros, pasatubos, coordenadas topográficas, conversión cartográfica
from: acea9606
---

La pestaña {{ui:Puntos}} de la derecha crea los puntos que una cuadrilla replantea en obra a partir del modelo abierto, y comprueba los puntos que mide después.

## Crear los puntos

1. Abra un modelo IFC y la pestaña {{ui:Puntos}}.
2. Marque lo que se replantea: **centros de pilares** (el pie de la línea central de cada pilar), **extremos de muros** (ambos extremos del eje de cada muro, en su base), **pernos de anclaje**, **pasatubos** (elementos cuyo nombre o tipo indica pasatubo) y los **elementos seleccionados** (cada uno en su punto de colocación; selecciónelos antes en la vista).
3. Elija el primer número y un prefijo, las coordenadas, las unidades, las columnas y el archivo:
   - **Modelo**: las propias coordenadas del archivo. **Cuadrícula topográfica**: la cuadrícula cartográfica de la georreferenciación del modelo (se muestra solo cuando el IFC tiene una conversión cartográfica), en metros o en la unidad que elija.
   - Columnas **PNEZD** (punto, norte, este, cota, descripción), **PENZD** o **XYZ**; **CSV** (comas) o **TXT** (tabulaciones).
4. Pulse {{ui:Crear puntos}}: la lista los muestra y la vista los marca en azul. {{ui:Descargar los puntos}} escribe el archivo.

Los puntos salen en un orden fijo —por tipo, y luego en filas a lo largo de la planta—, así que volver a crearlos desde el mismo modelo da los mismos números. El archivo es el que abre CivilCraft y el que escribe EXPORTPOINTS de CadCraft: un punto por línea, tres decimales, y una descripción entre comillas cuando contiene una coma.

## Comprobar los puntos tal como construido

Cuando la cuadrilla devuelva lo que midió, elija una **tolerancia** en milímetros y cómo emparejar los puntos —por **número de punto** (conservaron sus números) o por la **lectura más cercana**— y pulse {{ui:Leer puntos medidos…}}. Lea el archivo en las mismas unidades y coordenadas que escribió.

Cada punto de diseño queda entonces **dentro** de la tolerancia, **fuera** de ella o **no medido**, y cualquier lectura que nadie pidió figura como **extra**. La tabla da las diferencias en la unidad que elija en la barra de herramientas, con los pies mostrados como pulgadas decimales (tal como construido menos diseño: este, norte, altura, y la distancia en planta); la vista marca cada punto en verde o rojo con una línea hasta la lectura, y en gris cuando no se midió. {{ui:Informe (CSV)}} escribe la comparación completa.

Nada de esto modifica el modelo. Todavía no está disponible: replantear desde bordes de losa, intersecciones de ejes o huecos creados automáticamente, ni enviar puntos directamente a un instrumento; use el archivo.
