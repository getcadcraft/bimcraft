---
title: Pintar materiales en muros, suelos y cubiertas
summary: Dé a los elementos un material como ladrillo, revestimiento, tejas, madera o baldosa, en todo el elemento o en una cara, guardado en el IFC y mostrado en las imágenes renderizadas.
keywords: pintar, material, materiales, acabado, acabados, textura, ladrillo, revestimiento, tejas, cubierta, madera, piedra, baldosa, hormigón, estuco, hierba, grava, vidrio, metal, cara de muro, interior, exterior, acabado de suelo, habitación, estilo de superficie
from: fbfed676
---

{{ui:Pintar}} de la barra de herramientas abre la biblioteca de materiales sobre la vista 3D: ladrillo y bloque, revestimientos, cubiertas, madera, piedra, baldosa, hormigón, estuco, terreno, vidrio y metal.

## Pintar elementos

1. Haga clic en {{ui:Pintar}}.
2. Haga clic en un material.
3. Haga clic en los elementos de la vista 3D. Cada clic pinta el elemento en el que hace clic.

Para pintar muchos a la vez, selecciónelos primero (clic, {{key:Ctrl}}+clic, o una [búsqueda](topic:find)), y luego haga clic en el material: cada elemento seleccionado lo recibe en un solo paso.

El elemento muestra de inmediato el color del material en la vista 3D. Su textura se ve en una [imagen renderizada](topic:render). {{key:Esc}} o {{ui:Cerrar}} termina de pintar.

## Pintar una cara

Elija {{ui:Solo el lado en que se hizo clic}} y haga clic en la cara que quiera: el exterior de un muro con revestimiento y su interior con otro acabado, o la parte superior de un suelo en madera dejando su cara inferior como está. El resto del elemento conserva su material.

Una cara se localiza a partir de las direcciones propias del elemento, así que sigue siendo la misma cara al mover o girar el elemento.

Para pintar suelos habitación por habitación, dé a cada habitación su propio suelo ({{ui:Dibujo}} › {{ui:Piso}} › **Esta habitación**, vea [Habitaciones, suelos, techos y cubiertas](topic:floors-and-roofs)), y después pinte la parte superior de cada suelo.

## Quitar un material

Haga clic en la muestra rayada ({{ui:Sin material}}) y después en el elemento. Se quita cada material que tenga, incluidas sus caras.

## En el archivo

Pintar modifica el IFC (un paso cada vez, {{key:Ctrl+Z}} lo deshace) y sigue siendo IFC simple:

- cada elemento pintado recibe el conjunto de propiedades `CadCraft_Render`, que nombra su material, y una propiedad por cada cara pintada;
- su cuerpo recibe un estilo de superficie con el color del material, para que otros programas BIM muestren el color. En IFC4 el estilo también nombra la textura.

Cuando BimCraft cambia la forma de un muro que pintó (por ejemplo, si mueve su extremo), el muro conserva su material y su color, en BimCraft, en las imágenes y en otros programas.

:::note
Las texturas las dibuja el propio BimCraft: funcionan sin conexión y son libres de uso para cualquier fin (CC0). Todavía no se pueden usar texturas de imagen propias.
:::

## Texturas en la vista 3D

Un muro de ladrillo pintado muestra sus ladrillos, y un suelo de madera sus tablas, a su tamaño real, en cuanto se aplica la pintura. Desmarque **Mostrar las texturas en la vista 3D** en la paleta Pintar para ver colores planos en su lugar (un modelo muy grande las desactiva solo y lo indica). Color por propiedad siempre muestra sus propios colores. Las texturas las dibuja el programa, así que no se descarga nada, y las imágenes renderizadas y el archivo glTF las incluyen en cualquier caso.
