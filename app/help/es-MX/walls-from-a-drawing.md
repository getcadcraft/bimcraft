---
title: Muros desde un dibujo calcado
summary: Convierta un plano DWG o DXF en muros, puertas y ventanas en un nivel, y conserve el dibujo bajo la planta como referencia.
keywords: dwg, dxf, calcar, calcado, importar plano, convertir, de CAD a BIM, de 2D a 3D, muros desde líneas, capas, bloques, puertas desde bloques, subyacente, dibujo de referencia, fondo, xref, aplicación de dibujo
from: 3bf213f1
---

## Qué hará

Use un plano que usted (o alguien más) dibujó en la aplicación de dibujo como punto de partida del modelo: sus líneas de muro se convierten en muros, y sus bloques de puerta y ventana, en puertas y ventanas.

## Pasos

1. Active {{ui:Dibujo}} y elija el nivel que muestra el dibujo en la lista de niveles de la planta.
2. Elija {{ui:Compilación}} › {{ui:Desde un dibujo…}}, luego {{ui:Elegir un dibujo…}} y elija el DWG o DXF.
3. En el cuadro de diálogo:
   - Las **unidades del dibujo** vienen del dibujo; elija otras si están mal (un plano dibujado en pies y leído como pulgadas queda doce veces más pequeño).
   - **Capas con los muros**: marque las capas en las que están las líneas de muro. Las capas cuyo nombre dice "muro" ya vienen marcadas.
   - **Las líneas son**: **ambas caras de cada muro** (la forma habitual de dibujar planos: cada par de líneas paralelas separadas hasta 600 mm se convierte en un muro del grosor de la separación), **los ejes de los muros**, o **una cara**, con el muro a su izquierda o a su derecha. Con ejes o una sola cara, el tipo de muro define el espesor.
   - **Tipo de muro** y **Altura del muro**, igual que para la herramienta {{ui:Muro}}.
   - **Bloques**: elija un tipo de puerta o de ventana para cada bloque que sea una puerta o una ventana, o déjelo fuera. Los bloques cuyo nombre dice "puerta" o "ventana" se eligen por usted. Cada uno se coloca en el muro donde está, tan ancho como el bloque a lo largo del muro; una puerta se abre hacia el lado donde está dibujado su giro.
   - **Dónde va**: en las propias coordenadas del dibujo, o con su esquina inferior izquierda en el origen de la planta.
   - **Conservar el dibujo bajo la planta de este nivel**: déjelo marcado para ver el dibujo como líneas finas bajo lo que usted haga.
4. La línea bajo las opciones dice cuántos muros, puertas y ventanas va a crear. Haga clic en {{ui:Crearlos}}.

## Qué debe ver

- Los muros, puertas y ventanas del nivel, unidos donde se encuentran, con los cuartos que cierran; todo es un solo paso, así que {{key:Mod+Z}} lo revierte.
- El dibujo como líneas finas bajo la planta. {{ui:Compilación}} › {{ui:Desde un dibujo…}} lista los dibujos guardados en el nivel, cada uno con {{ui:Quitar}}; quitar uno deja los muros.
- En el archivo IFC, el dibujo conservado es una anotación del nivel (sus líneas), así que otros programas BIM también lo muestran.

:::note
Un PDF o un escaneo también funciona: vea [Muros desde un juego de planos](topic:walls-from-plans). Se dejan fuera los arcos (BimCraft dibuja muros rectos), y también las líneas dentro de bloques. Las líneas sin pareja en "ambas caras" se cuentan en el cuadro de diálogo y se dejan fuera: dibuje esos muros con la herramienta {{ui:Muro}}, o ordénelos con {{ui:Modificar}} › {{ui:Recortar / alargar}} (vea [Recortar, alargar y unir muros](topic:trim-extend-walls)).
:::

:::tip
¿Calcó sobre un escaneo en la aplicación de dibujo? Abra aquí también el escaneo y revise los muros contra él: vea [Modelo desde un escaneo](topic:model-from-a-scan).
:::
