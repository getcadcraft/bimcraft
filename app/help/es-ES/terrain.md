---
title: El terreno del solar, la plataforma del edificio y el pavimento
summary: Incorpore el terreno al modelo a partir de puntos topográficos, curvas de nivel, un escaneo LAS / LAZ, un GeoTIFF, una superficie LandXML (de CivilCraft) o unas pocas cotas puntuales; practique la plataforma del edificio bajo la casa con sus pendientes y su desmonte / terraplén; ajuste accesos, senderos y patios sobre el terreno; entréguelo a CivilCraft como LandXML.
keywords: terreno, suelo, solar, topografía, levantamiento, puntos, PNEZD, curvas de nivel, LAS, LAZ, LiDAR, GeoTIFF, DEM, cota, cota puntual, rasante, nivelación, plataforma, plataforma del edificio, desmonte, terraplén, movimiento de tierras, línea de talud, pendiente, acceso, sendero, patio, pavimento, LandXML, CivilCraft
from: 208298d6
---

## Qué va a hacer

Sitúe la casa en su emplazamiento. El terreno pasa a formar parte del modelo: se muestra en 3D, se corta en secciones y alzados, y las curvas de nivel aparecen en la planta. Bajo la casa se practica una plataforma, los accesos y los senderos se ajustan a ella y las zapatas descienden con el terreno.

## Incorporar el terreno

1. Abra {{ui:Compilación}} y elija {{ui:Terreno}}.
2. Elija una de estas opciones:
   - **Abrir un archivo de levantamiento…**: puntos topográficos (PNEZD, PENZD o simplemente este, norte, cota; separados por coma, tabulación o espacio), curvas de nivel en DXF o DWG (polilíneas con su cota, polilíneas 3D), un escaneo LAS o LAZ (se conservan los puntos del suelo, reducidos a unos por metro cuadrado), una cuadrícula de cotas GeoTIFF o ASCII, o una superficie **LandXML** como la que exporta CivilCraft (se conservan sus puntos y triángulos; si el archivo contiene varias superficies, BimCraft le pregunta cuál es el terreno; sus unidades proceden del archivo). Elija primero las unidades del archivo (LandXML indica las suyas).
   - O bien escriba una **Cota puntual** (medida desde el suelo de esta planta, así que `-1'` es un pie por debajo de ella), haga clic en los puntos de la planta, cambie la cota y haga clic en más puntos, y después pulse **Crear el terreno**. Con tres puntos basta para empezar.

Las coordenadas de levantamiento alejadas del modelo (sistema de coordenadas planas, UTM) se trasladan sobre la casa, y las cotas se ajustan para que el terreno en la casa quede a unas 8" bajo la primera planta. **Elevar el terreno** en **Propiedades** lo corrige en la cuantía que haga falta.

## La plataforma del edificio

1. Elija {{ui:Plataforma del edificio}}.
2. Defina el **Margen** alrededor de la casa, a qué distancia **queda la plataforma por debajo del suelo** (8" bajo una losa, más bajo un vacío sanitario) y los **Taludes** hasta el terreno existente (`2:1` = dos pies hacia fuera por cada pie de subida o bajada).
3. Señale el interior de la casa y haga clic.

El terreno se aplana bajo la casa hasta el margen, y después asciende hacia la ladera (desmonte) y desciende hacia el lado bajo (terraplén) hasta encontrar el terreno existente. Las **Propiedades** del terreno y de la plataforma indican los volúmenes de desmonte y de terraplén. Si mueve los muros, la plataforma se actualiza.

## Accesos, senderos y patios

Elija {{ui:Pavimento}}, elija **Sendero**, **Acceso de vehículos** o **Patio**, y haga clic en las esquinas. Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar. El pavimento sigue la rasante terminada; cambie su tipo o su espesor en **Propiedades**.

## Las zapatas se escalonan según la rasante

Con el terreno en el modelo, los muros de cimentación y las zapatas de vacío sanitario lo siguen: a lo largo de cada muro, la zapata mantiene su profundidad bajo el terreno exterior y se escalona en peldaños completos de 8" donde el terreno desciende (véase [Cimentaciones bajo los muros](topic:foundations)).

## Pasar a CivilCraft

**LandXML para CivilCraft** (en la fila Terreno o en las **Propiedades** del terreno) descarga el terreno existente y la rasante terminada como archivo LandXML. Ábralo en CivilCraft para la nivelación real, el drenaje y el movimiento de tierras.

## Para tener en cuenta

- El terreno requiere un modelo IFC4, como cualquier edificio nuevo.
- Las curvas de nivel se muestran en la planta del nivel del terreno con el intervalo definido en las **Propiedades** del terreno; cada quinta es más gruesa.
- El terreno se guarda como elemento de terreno IFC (una superficie triangulada cerrada, de modo que las secciones lo cortan); la plataforma y el pavimento se guardan con él. Para empezar de nuevo, elimine el terreno: su plataforma y su pavimento se eliminan con él.
