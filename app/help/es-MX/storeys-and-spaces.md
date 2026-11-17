---
title: Mostrar y ocultar niveles, espacios y aristas
summary: Desactive niveles para ver el interior de un edificio, muestre habitaciones y espacios, y active o desactive las líneas de arista.
keywords: niveles, pisos, ocultar, aislar, habitaciones, espacios, ifcspace, aristas, visibilidad, sección
from: b838dcc0
---

## Qué hará

Mire dentro de un modelo IFC desactivando los niveles por encima del que le interesa; después muestre las habitaciones y los espacios, y desactive las líneas de arista para una vista más limpia.

## Pasos: ver un piso

1. Abra un modelo IFC. Vea [Abrir un modelo IFC y recorrerlo en 3D](topic:open-ifc-model).
2. Busque la lista {{ui:Niveles}} a la izquierda. El nivel superior va primero, como al leer una sección desde la azotea hacia abajo.
3. Desmarque la azotea y todos los niveles por encima del piso que quiere ver.
4. Haga clic en {{ui:Superior}} para mirar hacia abajo sobre ese piso.
5. Vuelva a marcar los niveles para restaurarlos.

## Qué debe ver

Cada nivel que desmarque desaparece al instante, junto con todo lo que tiene. La lista sólo muestra niveles que contienen algo visible. Los elementos que no están asignados a ningún nivel se agrupan como **Sin nivel** al final; los elementos del sitio y algunos muebles suelen caer ahí.

## Pasos: mostrar habitaciones y espacios

1. Haga clic en {{ui:Espacios}} en la barra de herramientas sobre el modelo. El botón queda presionado.
2. Observe el modelo: las habitaciones y los espacios aparecen como volúmenes pálidos y translúcidos.
3. Haga clic en un espacio para leer sus propiedades, como su nombre, número y área, a la derecha.
4. Haga clic de nuevo en {{ui:Espacios}} para ocultarlos.

Los espacios se ocultan al abrir un modelo porque de lo contrario taparían los muros y los pisos.

## Pasos: aristas

1. Haga clic en {{ui:Aristas}} para desactivar las líneas delgadas de arista.
2. Haga clic de nuevo para volver a activarlas.

En modelos muy grandes (más de 1.5 millones de triángulos) el botón aparece en gris con la leyenda "Las aristas están desactivadas en modelos muy grandes". Esto ahorra memoria.

## Errores comunes

- **Desmarcar un nivel y seguir viendo partes de él.** Un elemento pertenece al nivel que el programa de exportación le asignó. Un muro alto o una escalera suelen pertenecer sólo a su nivel base, así que permanecen cuando se oculta el nivel de arriba, o desaparecen con el nivel de abajo.
- **Ocultar niveles para ver el interior.** Una caja de sección suele ser más rápida: vea [Cortar un modelo IFC con un plano de sección](topic:section-plane#a-section-box). También puede desmarcar filas en el {{ui:Árbol del modelo}} (vea [Orientarse con el árbol del modelo](topic:model-tree)).
- **Hacer clic en un espacio a través de un muro.** El clic elige la superficie visible más cercana. Oculte el nivel de arriba, o cambie a {{ui:Superior}}, y después haga clic.
- **Los nombres de los niveles se ven raros.** BimCraft muestra los nombres de nivel guardados en el archivo. Si dicen "Level 1" o un número, es lo que escribió el exportador.
