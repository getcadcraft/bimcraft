---
title: Muros a partir de un plano calcado
summary: Convertí un plano DWG o DXF en muros, puertas y ventanas en un nivel, y mantené el dibujo debajo de la planta como referencia.
keywords: dwg, dxf, calcar, calcado, importar plano, convertir, de CAD a BIM, de 2D a 3D, muros desde líneas, capas, bloques, puertas desde bloques, base, dibujo de referencia, fondo, xref, aplicación de dibujo
from: 3bf213f1
---

## Mba'e rejapóta

Usá un plano que dibujaste (o que alguien dibujó) en la aplicación de dibujo como punto de partida del modelo: sus líneas de muro se convierten en muros, y sus bloques de puerta y ventana en puertas y ventanas.

## Pasos

1. Activá {{ui:Draw}} y elegí en la lista de niveles de la planta el nivel que muestra el plano.
2. Elegí {{ui:Build}} › {{ui:From a drawing…}}, luego {{ui:Choose a drawing…}} y elegí el DWG o DXF.
3. En el diálogo:
   - **Drawing units** vienen del plano; elegí otras si están mal (un plano dibujado en pies y leído como pulgadas queda doce veces más chico).
   - **Layers with the walls**: marcá las capas en las que están las líneas de muro. Las capas cuyo nombre dice "wall" ya vienen marcadas.
   - **The lines are**: **both faces of each wall** (la forma habitual de dibujar planos: cada par de líneas paralelas separadas hasta 600 mm se convierte en un muro del grosor del espacio), **the walls' center lines** (los ejes de los muros), o **one face** con el muro a su izquierda o derecha. Con ejes o una cara, el tipo de muro fija el espesor.
   - **Wall type** y **Wall height**, igual que para la herramienta {{ui:Wall}}.
   - **Blocks**: elegí un tipo de puerta o ventana para cada bloque que sea una puerta o ventana, o dejalo afuera. Los bloques cuyo nombre dice "door" o "window" se eligen solos. Cada uno se pone en el muro donde está, tan ancho como el bloque a lo largo del muro; una puerta abre hacia el lado al que apunta su giro dibujado.
   - **Where it goes**: en las coordenadas propias del dibujo, o con su esquina inferior izquierda en el origen de la planta.
   - **Keep the drawing under the plan of this level**: dejalo marcado para ver el dibujo como líneas finas debajo de lo que hacés.
4. La línea debajo de las opciones dice cuántos muros, puertas y ventanas va a hacer. Hacé clic en {{ui:Make them}}.

## Qué deberías ver

- Los muros, puertas y ventanas del nivel, unidos donde se encuentran, con los ambientes que cierran; todo es un solo paso, así que {{key:Mod+Z}} lo deshace.
- El dibujo como líneas finas debajo de la planta. {{ui:Build}} › {{ui:From a drawing…}} lista los dibujos guardados en el nivel, cada uno con {{ui:Remove}}; quitar uno deja los muros.
- En el archivo IFC, el dibujo guardado es una anotación del nivel (sus líneas), así que otros programas BIM también lo muestran.

:::note
También funciona un PDF o un escaneo: ver [Muros a partir de un juego de planos](topic:walls-from-plans). Los arcos se dejan afuera (BimCraft dibuja muros rectos), y también las líneas dentro de bloques. Las líneas sin pareja en "both faces" se cuentan en el diálogo y se dejan afuera: dibujá esos muros con la herramienta {{ui:Wall}}, o ordenalos con {{ui:Modify}} › {{ui:Trim / extend}} (ver [Recortar, extender y unir muros](topic:trim-extend-walls)).
:::

:::tip
¿Calcaste sobre un escaneo en la aplicación de dibujo? Abrí también el escaneo aquí y controlá los muros contra él: ver [Modelo a partir de un escaneo](topic:model-from-a-scan).
:::
