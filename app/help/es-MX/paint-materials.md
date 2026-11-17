---
title: Pintar materiales en muros, pisos y techos
summary: Asigne a los elementos un material como ladrillo, revestimiento, tejas, madera o azulejo, en todo el elemento o en un solo lado, guardado en el IFC y visible en las imágenes renderizadas.
keywords: pintar, material, materiales, acabado, acabados, textura, ladrillo, revestimiento, tejas, cubierta, madera, piedra, azulejo, concreto, estuco, pasto, grava, vidrio, metal, lado del muro, interior, exterior, acabado de piso, habitación, estilo de superficie
from: fbfed676
---

{{ui:Pintar}} en la barra de herramientas abre la biblioteca de materiales sobre la vista 3D: ladrillo y bloque, revestimientos, cubiertas, madera, piedra, azulejo, concreto, estuco, terreno, vidrio y metal.

## Pintar elementos

1. Haga clic en {{ui:Pintar}}.
2. Haga clic en un material.
3. Haga clic en los elementos de la vista 3D. Cada clic pinta el elemento en el que hizo clic.

Para pintar muchos a la vez, selecciónelos primero (clic, {{key:Ctrl}}+clic, o una [búsqueda](topic:find)) y luego haga clic en el material: cada elemento seleccionado lo recibe en un solo paso.

El elemento muestra de inmediato el color del material en la vista 3D. Su textura aparece en una [imagen renderizada](topic:render). {{key:Esc}} o {{ui:Cerrar}} termina de pintar.

## Pintar un solo lado

Elija {{ui:Solo el lado en que se hizo clic}} y luego haga clic en el lado que quiere: el exterior de un muro en revestimiento y su interior en otro acabado, o la parte superior de un piso en madera con su parte inferior sin cambios. El resto del elemento conserva su material.

Un lado se determina a partir de las direcciones propias del elemento, así que sigue siendo el mismo lado cuando mueve o gira el elemento.

Para pintar pisos habitación por habitación, dé a cada habitación su propio piso ({{ui:Dibujo}} › {{ui:Piso}} › **Esta habitación**, vea [Habitaciones, pisos, plafones y techos](topic:floors-and-roofs)) y luego pinte la parte superior de cada piso.

## Quitar un material

Haga clic en la muestra rayada ({{ui:Sin material}}) y luego en el elemento. Se quita todo material que tenga, incluidos los de sus lados.

## En el archivo

Pintar cambia el IFC (un paso por cada aplicación; {{key:Ctrl+Z}} lo deshace) y permanece como IFC simple:

- cada elemento pintado recibe el conjunto de propiedades `CadCraft_Render` que nombra su material, y una propiedad por cada lado pintado;
- su cuerpo recibe un estilo de superficie con el color del material, para que otros programas BIM muestren el color. En IFC4 el estilo también nombra la textura.

Cuando BimCraft modifica un muro que usted pintó (por ejemplo, si mueve su extremo), el muro conserva su material y su color, en BimCraft, en las imágenes y en otros programas.

:::note
Las texturas las dibuja el propio BimCraft: funcionan sin conexión y son de uso libre para cualquier fin (CC0). Todavía no existen texturas de imagen propias.
:::

## Texturas en la vista 3D

Un muro de ladrillo pintado muestra sus ladrillos, y un piso de madera sus tablas, a su tamaño real, en cuanto se aplica la pintura. Desmarque **Mostrar las texturas en la vista 3D** en la paleta Pintar para ver colores planos (un modelo muy grande las desactiva por sí solo y lo indica). El color por propiedad siempre muestra sus propios colores. Las texturas las dibuja el programa, así que no se descarga nada, y los renders y el archivo glTF las incluyen de todos modos.
