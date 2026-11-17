---
title: El terreno del sitio, la plataforma de edificación y la pavimentación
summary: Incorporar el terreno al modelo desde puntos de relevamiento, curvas de nivel, un escaneo LAS / LAZ, un GeoTIFF, una superficie LandXML (de CivilCraft) o unas pocas cotas puntuales; recortar la plataforma de edificación de la casa con sus pendientes y desmonte / relleno; colocar entradas de vehículos, veredas y patios sobre él; entregarlo a CivilCraft como LandXML.
keywords: terreno, sitio, topografía, relevamiento, puntos, PNEZD, curvas de nivel, LAS, LAZ, LiDAR, GeoTIFF, DEM, elevación, cota puntual, nivelación, plataforma, plataforma de edificación, desmonte, relleno, movimiento de suelo, talud de corte, pendiente, entrada de vehículos, vereda, patio, pavimento, LandXML, CivilCraft
from: 208298d6
---

## Qué va a hacer

Ubicar la casa en su sitio. El terreno pasa a formar parte del modelo: se muestra en 3D, se corta en cortes y elevaciones, y con curvas de nivel en la planta. Debajo de la casa se recorta una plataforma de edificación, las entradas y veredas la siguen, y los cimientos bajan con ella.

## Incorporar el terreno

1. Abra {{ui:Build}} y elija {{ui:Terrain}}.
2. Elija una de estas opciones:
   - **Abrir un archivo de relevamiento…**: puntos de relevamiento (PNEZD, PENZD o simplemente este, norte, elevación; separados por coma, tabulación o espacio), curvas de nivel en un DXF o DWG (polilíneas a su elevación, polilíneas 3D), un escaneo LAS o LAZ (se conservan los puntos del suelo, reducidos a aproximadamente uno por metro cuadrado), una cuadrícula de elevaciones GeoTIFF o ASCII, o una superficie **LandXML** como la que exporta CivilCraft (se conservan sus propios puntos y triángulos; cuando el archivo tiene varias superficies, BimCraft pregunta cuál es el terreno; sus unidades vienen del archivo). Elija primero las unidades del archivo (LandXML las indica por sí mismo).
   - O escriba una **Cota puntual** (desde el piso de este nivel, así que `-1'` es un pie por debajo de él) y haga clic en los puntos de la planta; cambie la elevación y haga clic en más puntos, y luego en **Crear el terreno**. Con tres puntos alcanza para empezar.

Las coordenadas de relevamiento lejos del modelo (sistema de coordenadas estatal, UTM) se trasladan sobre la casa, y las elevaciones se ajustan para que el terreno en la casa quede unas 8" por debajo del primer piso. **Elevar el terreno** en **Propiedades** corrige eso en la medida que haga falta.

## La plataforma de edificación

1. Elija {{ui:Building pad}}.
2. Defina el **Margen** alrededor de la casa, cuánto **queda la plataforma por debajo del piso** (8" bajo una losa, más bajo un espacio bajo piso) y las **Pendientes** hacia el terreno existente (`2:1` = dos pies hacia afuera por cada pie hacia arriba o hacia abajo).
3. Haga clic dentro de la casa.

El terreno se nivela bajo la casa y hasta el margen, y luego sube en forma de pendiente hacia la ladera (desmonte) y baja hacia el lado bajo (relleno) hasta encontrar el terreno existente. Las **Propiedades** del terreno y de la plataforma dan los volúmenes de desmonte y relleno. Si mueve los muros, la plataforma los sigue.

## Entradas, veredas y patios

Elija {{ui:Paving}}, seleccione **Vereda**, **Entrada de vehículos** o **Patio**, y haga clic en las esquinas. Haga clic otra vez en la primera esquina, haga doble clic o presione {{key:Enter}} para terminar. La pavimentación sigue el nivel terminado; cambie su tipo o espesor en **Propiedades**.

## Los cimientos siguen el nivel

Con el terreno en el modelo, los muros de cimiento y los cimientos de espacio bajo piso lo siguen: a lo largo de cada muro, el cimiento mantiene su profundidad bajo el terreno exterior, y escalona en pasos de 8" enteros donde el terreno baja (ver [Cimientos bajo los muros](topic:foundations)).

## Entregarlo a CivilCraft

**LandXML para CivilCraft** (en la fila Terreno, o en las **Propiedades** del terreno) descarga el terreno existente y el nivel terminado como archivo LandXML. Ábralo en CivilCraft para la nivelación, el drenaje y el movimiento de suelo reales.

## Conviene saber

- El terreno necesita un modelo IFC4, como todo edificio nuevo.
- Las curvas de nivel se muestran en la planta del nivel del terreno con el intervalo fijado en las **Propiedades** del terreno; cada quinta es más gruesa.
- El terreno se guarda como elemento de terreno IFC (una superficie triangulada cerrada, para que los cortes la atraviesen); la plataforma y la pavimentación se guardan junto con él. Elimine el terreno para empezar de nuevo: su plataforma y su pavimentación se eliminan con él.
