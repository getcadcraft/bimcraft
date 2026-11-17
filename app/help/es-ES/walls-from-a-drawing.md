---
title: Muros a partir de un dibujo calcado
summary: Convierta un plano DWG o DXF en muros, puertas y ventanas en un nivel, y conserve el dibujo bajo la planta como referencia.
keywords: dwg, dxf, calcar, calcado, importar plano, convertir, de CAD a BIM, de 2D a 3D, muros a partir de líneas, capas, bloques, puertas a partir de bloques, subyacente, dibujo de referencia, fondo, xref, aplicación de dibujo
from: 3bf213f1
---

## Qué hará

Use un plano que usted (u otra persona) dibujó en la aplicación de dibujo como punto de partida del modelo: sus líneas de muro se convierten en muros, y sus bloques de puerta y ventana en puertas y ventanas.

## Pasos

1. Active {{ui:Dibujo}} y elija el nivel que muestra el dibujo en la lista de niveles de la planta.
2. Elija {{ui:Compilación}} › {{ui:Desde un dibujo…}}, después {{ui:Elegir un dibujo…}} y elija el DWG o DXF.
3. En el cuadro de diálogo:
   - **Unidades del dibujo** vienen del dibujo; elija otras si son incorrectas (un plano dibujado en pies y leído como pulgadas queda doce veces más pequeño).
   - **Capas con los muros**: marque las capas en las que están las líneas de muro. Las capas cuyo nombre contiene «muro» o «wall» se marcan por usted.
   - **Las líneas son**: **ambas caras de cada muro** (la forma habitual de dibujar planos: cada par de líneas paralelas separadas hasta 600 mm se convierte en un muro tan grueso como la separación), **los ejes de los muros**, o **una cara** con el muro a su izquierda o a su derecha. Con ejes o con una cara, el tipo de muro fija el espesor.
   - **Tipo de muro** y **Altura del muro**, como en la herramienta {{ui:Muro}}.
   - **Bloques**: elija un tipo de puerta o ventana para cada bloque que sea una puerta o una ventana, o déjelo fuera. Los bloques cuyo nombre contiene «door» o «window» se eligen por usted. Cada uno se coloca en el muro sobre el que está, con el ancho del bloque a lo largo del muro; una puerta se abre hacia el lado al que se dibuja su giro.
   - **Dónde va**: en las coordenadas propias del dibujo, o con su esquina inferior izquierda en el origen de la planta.
   - **Conservar el dibujo bajo la planta de este nivel**: déjelo marcado para ver el dibujo como líneas finas bajo lo que cree.
4. La línea bajo las opciones indica cuántos muros, puertas y ventanas va a crear. Haga clic en {{ui:Crearlos}}.

## Qué debe ver

- Los muros, puertas y ventanas del nivel, unidos donde se encuentran, con las habitaciones que cierran; todo es un solo paso, así que {{key:Mod+Z}} lo revierte.
- El dibujo como líneas finas bajo la planta. {{ui:Compilación}} › {{ui:Desde un dibujo…}} enumera los dibujos conservados en el nivel, cada uno con {{ui:Quitar}}; quitar uno deja los muros.
- En el archivo IFC, el dibujo conservado es una anotación del nivel (sus líneas), por lo que también la muestran otros programas BIM.

:::note
Un PDF o un escaneo también sirve: véase [Muros a partir de un juego de planos](topic:walls-from-plans). Se omiten los arcos (BimCraft dibuja muros rectos), y lo mismo las líneas dentro de bloques. Las líneas sin pareja en "ambas caras" se cuentan en el cuadro de diálogo y se dejan fuera: dibuje esos muros con la herramienta {{ui:Muro}}, o ajústelos con {{ui:Modificar}} › {{ui:Recortar / alargar}} (véase [Recortar, alargar y unir muros](topic:trim-extend-walls)).
:::

:::tip
¿Calcó sobre un escaneo en la aplicación de dibujo? Abra también el escaneo aquí y compruebe los muros frente a él: véase [Modelo a partir de un escaneo](topic:model-from-a-scan).
:::
