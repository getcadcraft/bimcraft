---
title: Empezar un edificio nuevo
summary: Cree un modelo de edificio en blanco con sus niveles, dibuje sus muros, coloque elementos de la biblioteca y guárdelo como IFC.
keywords: nuevo, edificio nuevo, en blanco, vacío, empezar de cero, plantilla, niveles, plantas, crear, modelo
from: 546b8ae8
---

## Qué va a hacer

Empezar un modelo de edificio desde cero en lugar de abrir uno. BimCraft crea un modelo IFC en blanco con un proyecto, un emplazamiento, el edificio y sus niveles. Puede colocar equipos y mobiliario en los niveles desde la biblioteca y guardarlo como archivo IFC.

:::note
Ya se pueden dibujar muros: consulte [Dibujar muros](topic:draw-walls). Las puertas, las ventanas, los forjados y las cubiertas son lo siguiente que se está desarrollando.
:::

## Pasos

1. Pulse {{ui:Edificio nuevo}} en **Abrir un archivo o una carpeta**, o en la página de inicio.
2. Escriba el **Nombre del edificio**.
3. Elija cuántos **Niveles** tiene (de 1 a 200).
4. Escriba la **Altura de nivel**, de suelo a suelo: por ejemplo `10'-0"`, `10'6"` o `3000 mm`. Un número sin unidad son pies en EE. UU. y milímetros en el resto de países.
5. Pulse {{ui:Crear}}. Los niveles se apilan desde 0, cada uno a una altura de nivel por encima del anterior, y se llaman Nivel 1, Nivel 2 y así sucesivamente. Aparecen en el árbol del modelo, y la planta del Nivel 1 se abre junto a la vista 3D con {{ui:Dibujo}} activado.
6. Dibuje los muros: consulte [Dibujar muros](topic:draw-walls). Cambie el nombre de los niveles o sus alturas en el panel **Niveles**.
7. Coloque elementos: consulte [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library). La barra de colocación enumera todos los niveles.
8. Pulse {{ui:Guardar como IFC}}. El archivo toma el nombre del edificio, por ejemplo `Casa Smith.ifc`.

## Conviene saber

- El modelo se guarda en milímetros, como IFC4. Otros programas BIM lo abren.
- **Niveles** en el panel izquierdo enumera solo los niveles que tienen algo; el árbol del modelo los enumera todos.
- Hasta que lo guarde, el edificio nuevo cuenta como trabajo sin guardar. BimCraft pregunta antes de que abra otro archivo o se vaya, y conserva una copia en este navegador por si se cierra la pestaña.
