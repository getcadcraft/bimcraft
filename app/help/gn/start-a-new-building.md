---
title: Emboguatĩ edificio nuevo
summary: Emboguatĩ un modelo de edificio en blanco con sus niveles, dibujá sus muros, colocá ítems de la biblioteca y guardalo como IFC.
keywords: nuevo, edificio nuevo, en blanco, vacío, empezar desde cero, plantilla, niveles, pisos, crear, modelo
from: 68786865
---

## Mba'épa oñemboguáta

Emboguatĩ un modelo de edificio desde cero en vez de abrir uno. BimCraft hace un modelo IFC en blanco con un proyecto, un sitio, el edificio y sus niveles. Podés colocar equipos y muebles de la biblioteca en los niveles y guardarlo como archivo IFC.

:::note
Los muros ya se pueden dibujar: ver [Draw walls](topic:draw-walls). Puertas, ventanas, pisos y techos se están preparando.
:::

## Pasos

1. Haga clic en {{ui:Edificio nuevo}} debajo de **Abrir un archivo o carpeta**, o en la página de inicio.
2. Escribí el **Nombre del edificio**.
3. Elegí cuántos **Niveles** tiene (1 a 200).
4. Escribí la **Altura del nivel**, de piso a piso: por ejemplo `10'-0"`, `10'6"` o `3000 mm`. Un número sin unidad es pies en EE. UU., y milímetros en otros lugares.
5. Todos los campos ya están completos, así que podés dejarlos como están. Debajo, el recuadro indica con qué empezás: las unidades, el **Tipo de muro** que dibuja primero la herramienta Muro (elegí otro de la lista si querés) y la primera hoja.
6. Haga clic en {{ui:Crear}}. Los niveles se apilan desde 0, cada uno a una altura de nivel por encima del anterior, y se llaman Nivel 1, Nivel 2 y así sucesivamente. Aparecen en el {{ui:Árbol del modelo}}, y el plano del Nivel 1 se abre junto a la vista 3D con {{ui:Dibujar}} activado.
7. Dibujá los muros: haga clic en {{ui:Muro}} y dos puntos. Ver [Draw walls](topic:draw-walls). Podés renombrar niveles o cambiar sus alturas en el panel **Niveles**.
8. Colocá ítems: ver [Place equipment and furniture from the library](topic:place-from-library). La barra de colocación lista todos los niveles.
9. Haga clic en {{ui:Guardar como IFC}}. El archivo toma el nombre del edificio, por ejemplo `Smith's house.ifc`.

## Para tener en cuenta

- El modelo se guarda en milímetros, como IFC4. Otros programas BIM lo pueden abrir.
- Un edificio nuevo trae una hoja, **A-101**, que contiene el plano del nivel más bajo: A3 a 1:100 si trabajás en unidades métricas, Tabloid a 1/8" = 1'-0" en otro caso. Está vacía hasta el primer muro y después muestra el plano a medida que dibujás. Abrila en **Hojas** del explorador del proyecto para cambiar su papel, escala o título, agregar vistas o borrarla. Un edificio creado desde una plantilla trae las hojas de la plantilla.
- Para cambiar lo que empieza cada edificio nuevo (el tipo de muro en proyectos métricos, los niveles, la primera hoja, la herramienta activa después de Crear), ver [Default Policies](topic:default-policies).
- No hace falta configurar nada antes del primer muro. El tipo de muro, las alturas de los niveles, las unidades y la hoja se pueden cambiar después.
- **Pisos** en el panel izquierdo lista solo los niveles que tienen algo; el árbol del modelo los lista todos.
- Hasta que guardes, el edificio nuevo cuenta como trabajo sin guardar. BimCraft pregunta antes de abrir otro archivo o salir, y guarda una copia en este navegador por si se cierra la pestaña.
