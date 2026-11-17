---
title: El terreno del sitio, la plataforma del edificio y el pavimento
summary: Traiga el terreno al modelo desde puntos de levantamiento, curvas de nivel, un escaneo LAS / LAZ, un GeoTIFF, una superficie LandXML (de CivilCraft) o unas cuantas elevaciones puntuales; excave la plataforma del edificio de la casa con sus pendientes y corte / relleno; coloque entradas de vehículos, andadores y patios sobre él; entréguelo a CivilCraft como LandXML.
keywords: terreno, suelo, sitio, topografía, levantamiento, puntos, PNEZD, curvas de nivel, LAS, LAZ, LiDAR, GeoTIFF, DEM, elevación, elevación puntual, rasante, nivelación, plataforma, plataforma del edificio, corte, relleno, movimiento de tierras, talud, pendiente, entrada de vehículos, andador, patio, pavimento, LandXML, CivilCraft
from: 208298d6
---

## Lo que hará

Coloque la casa en su sitio. El terreno pasa a formar parte del modelo: se muestra en 3D, se corta en secciones y alzados, y aparece con curvas de nivel en la planta. Bajo la casa se excava una plataforma del edificio, las entradas y los andadores se adaptan al terreno, y las zapatas bajan con él.

## Traer el terreno

1. Abra {{ui:Compilación}} y elija {{ui:Terreno}}.
2. Elija una de estas opciones:
   - **Abra un archivo de levantamiento…**: puntos de levantamiento (PNEZD, PENZD o simplemente este, norte, elevación; separados por coma, tabulador o espacio), curvas de nivel en DXF o DWG (polilíneas a su elevación, polilíneas 3D), un escaneo LAS o LAZ (se conservan los puntos del suelo y se reducen a unos cuantos por metro cuadrado), un GeoTIFF o una malla de elevaciones ASCII, o una superficie **LandXML** como las que exporta CivilCraft (se conservan sus puntos y triángulos; si el archivo contiene varias superficies, BimCraft le pregunta cuál es el terreno; sus unidades provienen del archivo). Elija primero las unidades del archivo (LandXML indica las suyas).
   - O escriba una **Elevación puntual** (desde el piso de este nivel, así que `-1'` es un pie por debajo de él), haga clic en los puntos de la planta, cambie la elevación, haga clic en más puntos y después pulse **Crear el terreno**. Tres puntos bastan para empezar.

Las coordenadas del levantamiento alejadas del modelo (sistema de coordenadas estatal, UTM) se trasladan hasta la casa, y las elevaciones se ajustan para que el terreno en la casa quede aproximadamente 8" por debajo del primer piso. **Elevar el terreno** en **Propiedades** corrige eso en cualquier magnitud.

## La plataforma del edificio

1. Elija {{ui:Plataforma del edificio}}.
2. Establezca el **Margen** alrededor de la casa, qué tanto **queda la plataforma por debajo del piso** (8" bajo una losa, más bajo un espacio de gateo) y las **Pendientes** hacia el terreno existente (`2:1` = dos pies hacia afuera por cada pie hacia arriba o hacia abajo).
3. Haga clic dentro de la casa.

El terreno se aplana bajo la casa y hasta el margen, luego sube hacia la ladera (corte) y baja hacia el lado bajo (relleno) hasta encontrar el terreno existente. Las **Propiedades** del terreno y de la plataforma dan los volúmenes de corte y relleno. Si mueve los muros, la plataforma los sigue.

## Entradas de vehículos, andadores y patios

Elija {{ui:Pavimento}}, luego **Andador**, **Entrada de vehículos** o **Patio**, y haga clic en las esquinas. Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar. El pavimento sigue la rasante terminada; cambie su tipo o espesor en **Propiedades**.

## Las zapatas siguen la rasante

Con el terreno en el modelo, los muros de cimentación y las zapatas de espacio de gateo lo siguen. A lo largo de cada muro, la zapata conserva su profundidad bajo el terreno exterior y escalona en pasos completos de 8" donde el terreno baja (vea [Cimentaciones bajo los muros](topic:foundations)).

## Entréguelo a CivilCraft

**LandXML para CivilCraft** (en la fila Terreno, o en las **Propiedades** del terreno) descarga el terreno existente y la rasante terminada como archivo LandXML. Ábralo en CivilCraft para la nivelación real, el drenaje y el movimiento de tierras.

## Conviene saber

- El terreno requiere un modelo IFC4, como cualquier edificio nuevo.
- Las curvas de nivel se muestran en la planta del nivel del terreno con el intervalo definido en las **Propiedades** del terreno; cada quinta es más gruesa.
- El terreno se guarda como elemento de terreno IFC (una superficie triangulada cerrada, para que las secciones la corten); la plataforma y el pavimento se guardan con él. Elimine el terreno para empezar de nuevo; su plataforma y su pavimento se eliminan con él.
