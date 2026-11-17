---
title: Iniciar un edificio nuevo
summary: Cree un modelo de edificio en blanco con sus niveles, dibuje sus muros, coloque elementos de la biblioteca y guárdelo como IFC.
keywords: nuevo, edificio nuevo, en blanco, vacío, empezar desde cero, plantilla, niveles, plantas, forjados, crear, modelo
from: 68786865
---

## Qué hará

Empiece un modelo de edificio desde cero en lugar de abrir uno. BimCraft crea un modelo IFC en blanco con un proyecto, un emplazamiento, el edificio y sus niveles. Puede colocar equipos y mobiliario de la biblioteca en los niveles y guardarlo como archivo IFC.

:::note
Los muros ya se pueden dibujar: consulte [Dibujar muros](topic:draw-walls). Las puertas, las ventanas, los forjados y las cubiertas son lo siguiente en desarrollo.
:::

## Pasos

1. Haga clic en {{ui:Edificio nuevo}} bajo **Abrir un archivo o carpeta**, o en la página de inicio.
2. Escriba el **Nombre del edificio**.
3. Elija cuántos **Niveles** tiene (de 1 a 200).
4. Escriba la **Altura de nivel**, de suelo a suelo: por ejemplo `10'-0"`, `10'6"` o `3000 mm`. Un número sin unidad son pies en EE. UU. y milímetros en el resto.
5. Todos los campos ya están rellenados, así que puede dejarlos como están. Debajo, el recuadro indica con qué empieza: las unidades, el **Tipo de muro** que dibuja primero la herramienta Muro (elija otro de la lista si lo desea) y la primera hoja.
6. Haga clic en {{ui:Crear}}. Los niveles se apilan desde 0, cada uno a una altura de nivel por encima del anterior, y se llaman Nivel 1, Nivel 2, etc. Aparecen en el árbol del modelo, y el plano del Nivel 1 se abre junto a la vista 3D con {{ui:Dibujo}} activado.
7. Dibuje los muros: haga clic en {{ui:Muro}} y en dos puntos. Consulte [Dibujar muros](topic:draw-walls). Renombre los niveles o cambie sus alturas en el panel **Niveles**.
8. Coloque elementos: consulte [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library). La barra de colocación enumera todos los niveles.
9. Haga clic en {{ui:Guardar como IFC}}. El archivo se nombra según el edificio, por ejemplo `Smith's house.ifc`.

## Conviene saber

- El modelo se guarda en milímetros, como IFC4. Otros programas BIM lo abren.
- Un edificio nuevo incluye una hoja, **A-101**, con el plano del nivel más bajo: A3 a 1:100 si trabaja en unidades métricas, Tabloid a 1/8" = 1'-0" en caso contrario. Está vacía hasta el primer muro y después muestra la planta a medida que dibuja. Ábrala en **Hojas** del navegador del proyecto para cambiar su papel, su escala o su cajetín, añadir vistas o eliminarla. Un edificio iniciado desde una plantilla incorpora las hojas de la plantilla.
- Para cambiar lo que empieza cada edificio nuevo (el tipo de muro en proyectos métricos, los niveles, la primera hoja, la herramienta activa tras Crear), consulte [Políticas predeterminadas](topic:default-policies).
- No hace falta configurar nada antes del primer muro. El tipo de muro, las alturas de nivel, las unidades y la hoja se pueden cambiar más tarde.
- **Niveles** en el panel izquierdo lista solo los niveles con algo en ellos; el árbol del modelo los lista todos.
- Hasta que guarde, el edificio nuevo cuenta como trabajo sin guardar. BimCraft pregunta antes de abrir otro archivo o salir, y guarda una copia en este navegador por si se cierra la pestaña.
