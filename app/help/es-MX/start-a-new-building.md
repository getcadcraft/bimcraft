---
title: Iniciar un edificio nuevo
summary: Cree un modelo de edificio en blanco con sus niveles, dibuje sus muros, coloque elementos de la biblioteca y guárdelo como IFC.
keywords: nuevo, edificio nuevo, en blanco, vacío, empezar desde cero, plantilla, niveles, pisos, crear, modelo
from: 68786865
---

## Qué hará

Empiece un modelo de edificio desde cero en lugar de abrir uno. BimCraft crea un modelo IFC en blanco con un proyecto, un sitio, el edificio y sus niveles. Puede colocar equipos y muebles de la biblioteca en los niveles y guardarlo como archivo IFC.

:::note
Los muros ya pueden dibujarse: vea [Dibujar muros](topic:draw-walls). Las puertas, ventanas, pisos y techos se están construyendo a continuación.
:::

## Pasos

1. Haga clic en {{ui:Edificio nuevo}} en **Abrir un archivo o carpeta**, o en la página de inicio.
2. Escriba el **Nombre del edificio**.
3. Elija cuántos **Niveles** tiene (de 1 a 200).
4. Escriba la **Altura del nivel**, de piso a piso: por ejemplo `10'-0"`, `10'6"` o `3000 mm`. Un número sin unidad se toma en pies en Estados Unidos y en milímetros en el resto del mundo.
5. Todos los campos ya están llenos, así que puede dejarlos como están. Debajo, el recuadro indica con qué empieza: las unidades, el **Tipo de muro** que dibuja primero la herramienta Muro (elija otro de la lista si lo desea) y la primera hoja.
6. Haga clic en {{ui:Crear}}. Los niveles se apilan desde 0, cada uno a una altura de nivel por encima del anterior, y se llaman Nivel 1, Nivel 2, etc. Aparecen en el árbol del modelo, y la planta del Nivel 1 se abre junto a la vista 3D con {{ui:Dibujo}} activado.
7. Dibuje los muros: haga clic en {{ui:Muro}} y en dos puntos. Vea [Dibujar muros](topic:draw-walls). Cambie el nombre de los niveles o sus alturas en el panel **Niveles**.
8. Coloque elementos: vea [Colocar equipos y muebles desde la biblioteca](topic:place-from-library). La barra de colocación enumera todos los niveles.
9. Haga clic en {{ui:Guardar como IFC}}. El archivo se nombra según el edificio, por ejemplo `Smith's house.ifc`.

## Conviene saber

- El modelo se guarda en milímetros, como IFC4. Otros programas BIM pueden abrirlo.
- Un edificio nuevo viene con una hoja, **A-101**, que contiene la planta del nivel más bajo: A3 a 1:100 cuando trabaja en unidades métricas, Tabloid a 1/8" = 1'-0" en otro caso. Está vacía hasta el primer muro y luego muestra la planta a medida que dibuja. Ábrala en **Hojas** del navegador del proyecto para cambiar su formato, escala o cuadro de título, agregar vistas o eliminarla. Un edificio iniciado desde una plantilla trae las hojas de la plantilla.
- Para cambiar lo que empieza cada edificio nuevo (el tipo de muro para proyectos métricos, los niveles, la primera hoja, la herramienta activa después de Crear), vea [Políticas predeterminadas](topic:default-policies).
- No hay que configurar nada antes del primer muro. El tipo de muro, las alturas de nivel, las unidades y la hoja pueden cambiarse después.
- **Niveles** en el panel izquierdo enumera sólo los niveles que tienen algo; el árbol del modelo los enumera todos.
- Mientras no guarde, el edificio nuevo cuenta como trabajo sin guardar. BimCraft pregunta antes de abrir otro archivo o salir, y guarda una copia en este navegador por si se cierra la pestaña.
