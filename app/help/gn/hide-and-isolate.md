---
title: Ocultar, aislar y ver a través de elementos
summary: Elegí varios elementos, ocultalos, mostrá solo ellos, o mostralos con todo lo demás transparente, y después devolvé todo.
keywords: ocultar, aislar, transparente, fantasma, rayos X, mostrar todo, volver a mostrar, seleccionar varios, selección múltiple, ctrl clic, shift clic, visibilidad
from: 97e98b8c
---

## Mba'épa reipapáta

Limpiá la vista hasta lo que estás mirando: ocultá los elementos que molestan, mostrá solo los que elegiste, o dejá todo lo demás en pantalla como un contorno tenue para que sigas sabiendo dónde estás.

## Tape

1. Abrí un modelo IFC. Ver [Abrir un modelo IFC y mirar en 3D](topic:open-ifc-model).
2. Clickeá un elemento para elegirlo. Para elegir más, mantené {{key:Mod}} o {{key:Shift}} y clickeá cada uno. Clickear un elemento elegido de esa forma lo saca otra vez.
3. Abrí {{ui:Mostrar}} en la barra de herramientas y escogé qué hacer, o apretá su tecla:
   - {{ui:Ocultar}} ({{key:H}}) oculta los elementos elegidos.
   - {{ui:Aislar}} ({{key:I}}) muestra solo los elementos elegidos.
   - {{ui:Transparente}} ({{key:T}}) muestra los elementos elegidos tal como son y todo lo demás transparente.
4. Clickeá {{ui:Mostrar todo}} en el mismo menú, o apretá {{key:Shift+H}}, para mostrar otra vez cada elemento.
5. Para cortar todo alrededor de los elementos elegidos, clickeá {{ui:Caja de sección alrededor de la selección}} en el mismo menú, o apretá {{key:Shift+X}}. Ver [Cortar un modelo IFC con un plano de sección](topic:section-plane).

## Mba'épa reikuaa

- Con varios elementos elegidos, {{ui:Propiedades}} dice cuántos son y los lista por clase. Clickeá uno solo para ver sus propiedades.
- Los elementos ocultos no se pueden elegir: un clic cae sobre lo que está detrás de ellos.
- Los elementos transparentes tampoco se pueden elegir, así que podés clickear directo a través de los muros hasta lo que aislaste.
- Los bordes se ocultan con su elemento, y se vuelven tenues con él.
- Ocultar, aislar y transparente se mantienen mientras editás, colocás elementos de biblioteca o cortás el modelo con un plano de sección. Abrir otro modelo vuelve a mostrar todo.

## Errores comunes

- **Los elementos del menú están en gris.** No hay nada elegido. Primero clickeá un elemento; apuntá a un elemento del menú para leer por qué no puede actuar.
- **Aislar mostró un muro que había ocultado.** Aislar muestra exactamente lo que elegiste, esté oculto o no.
- **Falta un piso entero.** Eso es la lista {{ui:Pisos}}, no {{ui:Mostrar todo}}: marcá el piso otra vez.

## Sigue

- [Mostrar y ocultar pisos, espacios y bordes](topic:storeys-and-spaces)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
