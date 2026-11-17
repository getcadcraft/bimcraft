---
title: Mostrar y ocultar pisos, espacios ha bordes
summary: Apagá pisos para ver dentro de un edificio, mostrá ambientes y espacios, y activá o desactivá las líneas de borde.
keywords: pisos, niveles, plantas, ocultar, aislar, ambientes, espacios, ifcspace, bordes, visibilidad, corte
from: b838dcc0
---

## Mba'épa oñemboguáta

Mirá dentro de un modelo IFC apagando los pisos por encima del que te interesa, después mostrá los ambientes y espacios, y desactivá las líneas de borde para verlo más limpio.

## Pasos: ver un piso

1. Abrí un modelo IFC. Ver [Open an IFC model and look around in 3D](topic:open-ifc-model).
2. Buscá la lista {{ui:Pisos}} a la izquierda. El piso más alto va primero, como se lee un corte desde el techo hacia abajo.
3. Desmarcá la azotea y todos los pisos por encima del que querés.
4. Haga clic en {{ui:Arriba}} para mirar hacia abajo sobre ese piso.
5. Volvé a marcar los pisos para restaurarlos.

## Qué deberías ver

Cada piso que desmarcás desaparece de inmediato, con todo lo que tiene. La lista solo muestra los pisos que tienen algo visible. Los elementos que no están asignados a ningún piso se agrupan como **Sin piso** al final; los elementos del terreno y algunos muebles suelen caer ahí.

## Pasos: mostrar ambientes y espacios

1. Haga clic en {{ui:Espacios}} en la barra de herramientas sobre el modelo. El botón queda presionado.
2. Mirá el modelo: los ambientes y espacios aparecen como volúmenes pálidos y transparentes.
3. Haga clic en un espacio para leer sus propiedades, como su nombre, número y superficie, a la derecha.
4. Haga clic en {{ui:Espacios}} de nuevo para ocultarlos.

Los espacios se ocultan cuando se abre un modelo porque, si no, taparían los muros y pisos.

## Pasos: bordes

1. Haga clic en {{ui:Bordes}} para apagar las líneas finas de borde.
2. Haga clic de nuevo para volver a encenderlas.

En modelos muy grandes (más de 1.5 millones de triángulos) el botón aparece en gris con la indicación "Edges are off for very large models". Así se ahorra memoria.

## Errores frecuentes

- **Desmarcar un piso y seguir viendo partes de él.** Un elemento pertenece al piso que le asignó el programa que exportó el archivo. Un muro alto o una escalera suele pertenecer solo a su piso base, así que queda visible cuando se oculta el piso de arriba, o desaparece con el piso de abajo.
- **Ocultar pisos para ver dentro.** Una caja de corte suele ser más rápida: ver [Cut an IFC model with a section plane](topic:section-plane#a-section-box). También podés desmarcar filas en el {{ui:Árbol del modelo}} (ver [Find your way with the model tree](topic:model-tree)).
- **Hacer clic en un espacio a través de un muro.** El clic elige la superficie visible más cercana. Ocultá el piso de arriba, o pasá a {{ui:Arriba}}, y después hacé clic.
- **Los nombres de los pisos se ven raros.** BimCraft muestra los nombres de piso guardados en el archivo. Si dicen "Level 1" o un número, eso es lo que escribió el exportador.
