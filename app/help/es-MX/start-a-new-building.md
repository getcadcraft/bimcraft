---
title: Empezar un edificio nuevo
summary: Cree un modelo de edificio en blanco con sus niveles, dibuje sus muros, coloque elementos de la biblioteca y guárdelo como IFC.
keywords: nuevo, edificio nuevo, en blanco, vacío, empezar desde cero, plantilla, niveles, pisos, crear, modelo
from: 546b8ae8
---

## Qué hará

Empezar un modelo de edificio desde cero en lugar de abrir uno. BimCraft crea un modelo IFC en blanco con un proyecto, un sitio, el edificio y sus niveles. Puede colocar equipo y mobiliario en los niveles desde la biblioteca y guardarlo como archivo IFC.

:::note
Ya se pueden dibujar muros: consulte [Draw walls](topic:draw-walls). Las puertas, las ventanas, los pisos y los techos son lo siguiente que se está construyendo.
:::

## Pasos

1. Haga clic en {{ui:Edificio nuevo}} bajo **Abrir un archivo o una carpeta**, o en la página de inicio.
2. Escriba el **Nombre del edificio**.
3. Elija cuántos **Niveles** tiene (de 1 a 200).
4. Escriba la **Altura del nivel**, de piso a piso: por ejemplo `10'-0"`, `10'6"` o `3000 mm`. Un número sin unidad son pies en EE. UU. y milímetros en el resto de los países.
5. Haga clic en {{ui:Crear}}. Los niveles se apilan desde 0, cada uno a una altura de nivel sobre el anterior, y se llaman Nivel 1, Nivel 2 y así sucesivamente. Aparecen en el árbol del modelo, y la planta del Nivel 1 se abre junto a la vista 3D con {{ui:Dibujo}} activado.
6. Dibuje los muros: consulte [Draw walls](topic:draw-walls). Cambie el nombre de los niveles o sus alturas en el panel **Niveles**.
7. Coloque elementos: consulte [Place equipment and furniture from the library](topic:place-from-library). La barra de colocación enumera todos los niveles.
8. Haga clic en {{ui:Guardar como IFC}}. El archivo toma el nombre del edificio, por ejemplo `Smith's house.ifc`.

## Conviene saber

- El modelo se guarda en milímetros, como IFC4. Otros programas BIM lo abren.
- **Niveles** en el panel izquierdo enumera solo los niveles que tienen algo; el árbol del modelo los enumera todos.
- Mientras no guarde, el edificio nuevo cuenta como trabajo sin guardar. BimCraft pregunta antes de que abra otro archivo o salga, y conserva una copia en este navegador por si la pestaña se cierra.
