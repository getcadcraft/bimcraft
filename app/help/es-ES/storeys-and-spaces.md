---
title: Mostrar y ocultar plantas, espacios y aristas
summary: Desactive plantas para ver el interior de un edificio, muestre habitaciones y espacios, y active o desactive las líneas de arista.
keywords: plantas, niveles, forjados, ocultar, aislar, habitaciones, espacios, ifcspace, aristas, visibilidad, sección
from: b838dcc0
---

## Qué hará

Mire el interior de un modelo IFC desactivando las plantas situadas sobre la que le interesa; después muestre las habitaciones y los espacios, y desactive las líneas de arista para una vista más limpia.

## Pasos: ver una planta

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC y mirarlo en 3D](topic:open-ifc-model).
2. Busque la lista {{ui:Niveles}} a la izquierda. La planta superior va primero, como al leer una sección de arriba hacia abajo.
3. Desmarque la cubierta y todas las plantas situadas por encima de la que quiere ver.
4. Haga clic en {{ui:Superior}} para mirar hacia abajo, sobre esa planta.
5. Marque de nuevo las plantas para volver a mostrarlas.

## Qué debe ver

Cada planta que desmarque desaparece al instante, con todo lo que tiene. La lista solo muestra las plantas que contienen algo visible. Los elementos que no están asignados a ninguna planta se agrupan como **No está en una planta** al final; los elementos de emplazamiento y algo de mobiliario suelen acabar ahí.

## Pasos: mostrar habitaciones y espacios

1. Haga clic en {{ui:Espacios}} en la barra de herramientas sobre el modelo. El botón queda pulsado.
2. Observe el modelo: las habitaciones y los espacios aparecen como volúmenes claros y translúcidos.
3. Haga clic en un espacio para leer sus propiedades, como su nombre, su número y su superficie, a la derecha.
4. Haga clic de nuevo en {{ui:Espacios}} para ocultarlos.

Los espacios se ocultan al abrir un modelo, porque si no taparían los muros y los forjados.

## Pasos: aristas

1. Haga clic en {{ui:Aristas}} para desactivar las líneas finas de arista.
2. Haga clic de nuevo para volver a activarlas.

En modelos muy grandes (más de 1.5 millones de triángulos) el botón aparece atenuado con la indicación «Las aristas están desactivadas en modelos muy grandes». Así se ahorra memoria.

## Errores frecuentes

- **Desmarcar una planta y seguir viendo partes de ella.** Un elemento pertenece a la planta que le asignó el programa que exportó el archivo. Un muro alto o una escalera suelen pertenecer solo a su planta base, así que permanecen cuando se oculta la planta superior, o desaparecen con la planta inferior.
- **Ocultar plantas para ver el interior.** Una caja de sección suele ser más rápida: consulte [Cortar un modelo IFC con un plano de sección](topic:section-plane#a-section-box). También puede desmarcar filas en el {{ui:Árbol del modelo}} (consulte [Orientarse con el árbol del modelo](topic:model-tree)).
- **Hacer clic en un espacio a través de un muro.** El clic elige la superficie visible más cercana. Oculte la planta superior, o cambie a {{ui:Superior}}, y después haga clic.
- **Los nombres de planta parecen extraños.** BimCraft muestra los nombres de planta guardados en el archivo. Si dicen «Level 1» o un número, es lo que escribió el exportador.
