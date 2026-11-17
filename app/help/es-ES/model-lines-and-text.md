---
title: Líneas y textos del modelo: dibujados en el modelo, sobre el plano de trabajo
summary: Una línea del modelo es una línea, polilínea o arco que existe en el modelo y se muestra en todas las vistas que lo ven. El texto del modelo es una rotulación 3D con profundidad real. Ambos se dibujan sobre el plano de trabajo.
keywords: línea de modelo, texto de modelo, texto 3D, rotulación, señalización, línea en 3D, arco, polilínea, plano de trabajo, texto extruido, fuente, profundidad, línea de detalle, línea de delineación, anotación, IfcAnnotation
from: fc9cccb5
---

## Qué va a hacer

Dibuje líneas y rótulos que forman parte del modelo, no de una sola vista.

## Pasos

1. Defina primero el plano de trabajo (véase **El plano de trabajo**). Un plano de nivel se dibuja en la planta; un plano vertical, en el Visor del plano de trabajo.
2. Para una línea, elija **Línea de modelo** en el menú **Compilación** y elija **Línea**, **Polilínea** o **Arco (tres puntos)**:
   - una línea son dos clics;
   - una polilínea es un clic por cada punto, y después {{key:Enter}} o doble clic. Un clic en el primer punto la cierra;
   - un arco son tres clics: su inicio, un punto por el que pasa y su final.
3. Para un texto elija **Texto de modelo**. Escriba las palabras, defina la altura de las mayúsculas y la profundidad, y después haga clic donde empiece el texto (el extremo izquierdo de su línea de base).
4. Seleccione una línea o un texto para verlo en **Propiedades**. Allí se pueden cambiar las palabras, la altura y la profundidad de un texto. Suprimir lo elimina.

## Dónde se muestran

- Una línea del modelo se muestra en la planta de su nivel, en la vista 3D, en el panel de alzados y secciones, y en el Visor del plano de trabajo cuando está sobre el plano de trabajo. Una línea de delineación ({{ui:Anotar}}, {{ui:Línea}}) pertenece a una sola vista.
- El texto del modelo es geometría sólida: se muestra donde se muestre el modelo, en la planta, en 3D, en alzados y secciones, y en las hojas.
- Las líneas del modelo todavía no se dibujan en las hojas impresas. El texto del modelo sí.

## La fuente

El texto del modelo usa la misma fuente que las hojas y los PDF: Liberation Sans, bajo la licencia SIL Open Font License. Una letra que la fuente no tiene se dibuja como un signo de interrogación y se le indica cuál es. Hay una sola fuente y un solo grosor. Las letras se espacian según los anchos propios de la fuente, sin crenado.

## En el archivo IFC

- Una línea del modelo es un IfcAnnotation con el tipo de objeto ModelLine. Su forma es una curva 3D: una polilínea, o un círculo recortado en el caso de un arco.
- El texto del modelo es un IfcBuildingElementProxy con el tipo de objeto ModelText. Su forma es un sólido extruido por cada trozo de letra, con los huecos de letras como la O y la B. Sus cantidades son el área de la cara y el volumen (área de la cara por profundidad).

## Información útil

- Cualquier tamaño se hace como lo pida. Solo se rechaza una línea sin longitud, un arco cuyos tres puntos están en línea recta o un texto sin letras, porque no hay nada que hacer.
- Cada línea, y cada texto o cambio en él, es un paso de {{ui:Deshacer}}.
