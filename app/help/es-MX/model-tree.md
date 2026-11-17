---
title: Oriéntese con el árbol del modelo
summary: Explore un modelo IFC por proyecto, terreno, edificio, nivel y espacio, con sus elementos agrupados por tipo; marque casillas para mostrar y ocultar, haga clic en una fila para elegir y doble clic para acercar.
keywords: árbol del modelo, árbol, estructura, estructura espacial, explorador, esquema, navegador, nivel, piso, espacio, habitación, grupo, clase, ocultar, mostrar, elegir, seleccionar, acercar
from: 69de4ab7
---

## Qué hará

Vea cómo está armado un modelo y llegue a cualquier elemento sin buscarlo en 3D: el edificio, sus niveles, los espacios de cada nivel y los elementos que contienen, agrupados por tipo (muros, puertas, losas…).

## Pasos

1. Abra un modelo IFC. El {{ui:Árbol del modelo}} a la izquierda se abre hasta los niveles.
2. Haga clic en la flecha junto a una fila para abrirla o cerrarla. Un nivel muestra primero sus espacios, luego sus elementos por tipo con cuántos hay. Un elemento hecho de partes, como una escalera, muestra sus partes.
3. Desmarque la casilla de una fila para ocultar todo lo que contiene; márquela para mostrarlo otra vez. Una casilla con guion indica que solo se muestra parte de lo que contiene.
4. Haga clic en el nombre de una fila para elegir lo que representa: un elemento, o todos los elementos de un grupo, nivel o espacio. {{key:Mod}}+clic los agrega a la selección, o los quita.
5. Haga clic en el botón {{ui:i}} junto a un nivel, espacio o edificio para ver sus propias propiedades.
6. Haga doble clic en una fila para acercarse a ella.

## Qué debe ver

- Al elegir un elemento en la vista 3D, el árbol se abre hasta él y lo marca.
- Los elementos ocultos aparecen tachados. Las casillas del árbol y {{ui:Mostrar}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) funcionan juntos: vea [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate).
- Los elementos que el modelo no coloca en ningún nivel están en un grupo al final, **No está en la estructura espacial**.
- Un grupo largo muestra 200 filas a la vez; haga clic en **Mostrar más** debajo para ver el resto.

## Teclas

Con el nombre de una fila enfocado: {{key:Up}} y {{key:Down}} se mueven, {{key:Right}} abre, {{key:Left}} cierra o sube, {{key:Space}} marca la casilla, {{key:Enter}} elige.

## Errores comunes

- **La casilla de un nivel está marcada pero no se ve nada.** La lista {{ui:Niveles}} debajo del árbol apaga niveles completos por su cuenta: marque también ahí.
- **Una fila no elige nada.** Algunas filas, como un espacio vacío, no tienen elementos que se puedan dibujar; la barra de estado lo indica.

## Siguiente

- [Borrar, cortar, copiar y pegar elementos de construcción](topic:edit-elements)
- [Mostrar y ocultar niveles, espacios y aristas](topic:storeys-and-spaces)
