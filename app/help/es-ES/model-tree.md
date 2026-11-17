---
title: Oriéntese con el árbol del modelo
summary: Explore un modelo IFC por proyecto, solar, edificio, planta y espacio, con sus elementos agrupados por tipo; marque las casillas para mostrar y ocultar, haga clic en una fila para seleccionar y doble clic para acercar.
keywords: árbol del modelo, árbol, estructura, estructura espacial, explorador, esquema, planta, nivel, piso, espacio, habitación, grupo, clase, ocultar, mostrar, seleccionar, acercar
from: 69de4ab7
---

## Qué va a hacer

Vea cómo está compuesto un modelo y llegue a cualquier elemento sin buscarlo en 3D: el edificio, sus plantas, los espacios de cada planta y los elementos que contienen, agrupados por tipo (muros, puertas, losas…).

## Pasos

1. Abra un modelo IFC. El {{ui:Árbol del modelo}} de la izquierda se abre hasta las plantas.
2. Haga clic en la flecha junto a una fila para abrirla o cerrarla. Una planta contiene primero sus espacios, y después sus elementos por tipo con cuántos hay. Un elemento formado por partes, como una escalera, contiene sus partes.
3. Desmarque la casilla de una fila para ocultar todo lo que contiene; márquela para volver a mostrarlo. Una casilla con guion significa que solo se muestra parte de lo que contiene.
4. Haga clic en el nombre de una fila para seleccionar lo que representa: un elemento, o todos los elementos de un grupo, planta o espacio. {{key:Mod}}+clic añade elementos a la selección, o los quita.
5. Haga clic en el botón {{ui:i}} junto a una planta, espacio o edificio para ver sus propias propiedades.
6. Haga doble clic en una fila para acercar la vista a ella.

## Lo que debe ver

- Cuando selecciona un elemento en la vista 3D, el árbol se abre hasta él y lo marca.
- Los elementos ocultos aparecen tachados. Las casillas del árbol y {{ui:Mostrar}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funcionan juntas: véase [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate).
- Los elementos que el modelo no sitúa en ninguna planta están en un grupo al final, **No está en la estructura espacial**.
- Un grupo largo muestra 200 filas cada vez; haga clic en **Mostrar más** debajo para ver el resto.

## Teclas

Con el nombre de una fila enfocado: {{key:Up}} y {{key:Down}} se mueven, {{key:Right}} abre, {{key:Left}} cierra o sube, {{key:Space}} marca la casilla, {{key:Enter}} selecciona.

## Errores frecuentes

- **La casilla de una planta está marcada pero no se ve nada.** La lista {{ui:Niveles}} bajo el árbol apaga plantas enteras por su cuenta: marque también allí.
- **Una fila no selecciona nada.** Algunas filas, como un espacio vacío, no tienen elementos que se puedan dibujar; la línea de estado lo indica.

## Siguiente

- [Suprimir, cortar, copiar y pegar elementos del edificio](topic:edit-elements)
- [Mostrar y ocultar plantas, espacios y aristas](topic:storeys-and-spaces)
