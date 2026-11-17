---
title: Líneas de modelo y texto de modelo: dibujados en el modelo, sobre el plano de trabajo
summary: Una línea de modelo es una línea, polilínea o arco que vive en el modelo y se muestra en cada vista que lo ve. El texto de modelo es una rotulación 3D con profundidad real. Ambos se dibujan sobre el plano de trabajo.
keywords: línea de modelo, texto de modelo, texto 3D, rotulación, letrero, señalización, línea en 3D, arco, polilínea, plano de trabajo, texto extruido, tipografía, profundidad, línea de detalle, línea de dibujo, anotación, IfcAnnotation
from: fc9cccb5
---

## Qué hará

Dibuje líneas y rotulaciones que forman parte del modelo, no de una sola vista.

## Pasos

1. Defina primero el plano de trabajo (vea **El plano de trabajo**). Un plano de nivel se dibuja en la planta; un plano vertical, en el Visor del plano de trabajo.
2. Para una línea, elija **Línea de modelo** en el menú **Compilación** y elija **Línea**, **Polilínea** o **Arco (tres puntos)**:
   - una línea son dos clics;
   - una polilínea es un clic por cada punto, y luego Enter o doble clic. Un clic en el primer punto la cierra;
   - un arco son tres clics: su inicio, un punto por el que pasa y su final.
3. Para texto, elija **Texto de modelo**. Escriba las palabras, indique la altura de mayúsculas y la profundidad, y luego haga clic donde empieza el texto (el extremo izquierdo de su línea base).
4. Seleccione una línea o un texto para verlo en {{ui:Propiedades}}. Las palabras, la altura y la profundidad de un texto se pueden cambiar allí. Con Eliminar se quita.

## Dónde se muestran

- Una línea de modelo se muestra en la planta de su nivel, en la vista 3D, en el panel de elevaciones y secciones, y en el Visor del plano de trabajo cuando está sobre el plano de trabajo. Una línea de dibujo (Anotar, Línea) pertenece a una sola vista.
- El texto de modelo es geometría sólida: se muestra donde se muestre el modelo: en la planta, en 3D, en elevaciones y secciones, y en las hojas.
- Las líneas de modelo todavía no se dibujan en las hojas impresas. El texto de modelo sí.

## La tipografía

El texto de modelo usa la misma tipografía que las hojas y los PDF: Liberation Sans, bajo la SIL Open Font License. Una letra que la tipografía no tiene se dibuja como signo de interrogación, y se le indica cuál es. Hay una sola tipografía y un solo grosor. Las letras se espacian con los anchos propios de la tipografía, sin kerning.

## En el archivo IFC

- Una línea de modelo es un IfcAnnotation con el tipo de objeto ModelLine. Su forma es una curva 3D: una polilínea, o un círculo recortado para un arco.
- El texto de modelo es un IfcBuildingElementProxy con el tipo de objeto ModelText. Su forma es un sólido extruido por cada pieza de letra, con los huecos de letras como O y B. Sus cantidades son el área de la cara y el volumen (área de la cara por la profundidad).

## Conviene saber

- Cualquier tamaño se crea como lo pida. Solo se rechaza una línea sin longitud, un arco cuyos tres puntos están en línea recta, o un texto sin letras, porque no hay nada que crear.
- Cada línea, y cada texto o cambio en él, es un paso de Deshacer.
