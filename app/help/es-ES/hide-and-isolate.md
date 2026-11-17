---
title: Ocultar, aislar y ver a través de los elementos
summary: Seleccione varios elementos, ocúltelos, muestre solo ellos o muéstrelos con todo lo demás transparente, y luego restaure todo.
keywords: ocultar, aislar, transparente, fantasma, rayos X, mostrar todo, volver a mostrar, seleccionar varios, selección múltiple, ctrl clic, shift clic, visibilidad
from: 97e98b8c
---

## Qué va a hacer

Despeje la vista hasta lo que está mirando: oculte los elementos que estorban, muestre solo los que ha seleccionado, o mantenga todo lo demás en pantalla como un contorno tenue para que siga sabiendo dónde está.

## Pasos

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC y mirar alrededor en 3D](topic:open-ifc-model).
2. Haga clic en un elemento para seleccionarlo. Para seleccionar más, mantenga pulsado {{key:Mod}} o {{key:Shift}} y haga clic en cada uno. Hacer clic en un elemento ya seleccionado de esa forma lo quita de la selección.
3. Abra {{ui:Mostrar}} en la barra de herramientas y elija qué hacer, o pulse su tecla:
   - {{ui:Ocultar}} ({{key:H}}) oculta los elementos seleccionados.
   - {{ui:Aislar}} ({{key:I}}) muestra solo los elementos seleccionados.
   - {{ui:Transparente}} ({{key:T}}) muestra los elementos seleccionados tal como son, y todo lo demás transparente.
4. Haga clic en {{ui:Mostrar todo}} en el mismo menú, o pulse {{key:Shift+H}}, para mostrar de nuevo todos los elementos.
5. Para cortar todo lo que rodea a los elementos seleccionados, haga clic en {{ui:Caja de sección alrededor de lo designado}} en el mismo menú, o pulse {{key:Shift+X}}. Consulte [Cortar un modelo IFC con un plano de sección](topic:section-plane).

## Qué debe ver

- Con varios elementos seleccionados, {{ui:Propiedades}} indica cuántos son y los enumera por clase. Haga clic en uno solo para ver sus propiedades.
- Los elementos ocultos no se pueden seleccionar: un clic cae sobre lo que hay detrás.
- Los elementos transparentes tampoco se pueden seleccionar, así que puede hacer clic directamente a través de los muros hasta lo que aisló.
- Las aristas se ocultan con su elemento y se vuelven tenues con él.
- Ocultar, aislar y transparencia se mantienen mientras edita, coloca elementos de biblioteca o corta el modelo con un plano de sección. Abrir otro modelo vuelve a mostrar todo.

## Errores frecuentes

- **Los elementos del menú aparecen en gris.** No hay nada seleccionado. Haga clic primero en un elemento; sitúe el puntero sobre una opción para leer por qué no puede actuar.
- **Aislar mostró un muro que había ocultado.** Aislar muestra exactamente lo que seleccionó, oculto o no.
- **Falta una planta entera.** Eso se controla desde la lista {{ui:Niveles}}, no desde {{ui:Mostrar todo}}: vuelva a marcar la planta.

## Siguientes pasos

- [Mostrar y ocultar plantas, espacios y aristas](topic:storeys-and-spaces)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
