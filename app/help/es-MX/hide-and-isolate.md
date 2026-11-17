---
title: Ocultar, aislar y ver a través de elementos
summary: Designar varios elementos, ocultarlos, mostrar solo ellos o mostrarlos con todo lo demás transparente, y después restaurar todo.
keywords: ocultar, aislar, transparente, fantasma, rayos X, mostrar todo, volver a mostrar, seleccionar varios, selección múltiple, clic con Ctrl, clic con Shift, visibilidad
from: 97e98b8c
---

## Qué hará

Despeje la vista hasta lo que está viendo: oculte los elementos que estorban, muestre solo los que designó, o mantenga todo lo demás en pantalla como un contorno tenue para que siga sabiendo dónde está.

## Pasos

1. Abra un modelo IFC. Consulte [Abrir un modelo IFC y recorrerlo en 3D](topic:open-ifc-model).
2. Haga clic en un elemento para designarlo. Para designar más, mantenga pulsado {{key:Mod}} o {{key:Shift}} y haga clic en cada uno. Hacer clic en un elemento ya designado de esa forma lo quita de la selección.
3. Abra {{ui:Mostrar}} en la barra de herramientas y elija qué hacer, o pulse su tecla:
   - {{ui:Ocultar}} ({{key:H}}) oculta los elementos designados.
   - {{ui:Aislar}} ({{key:I}}) muestra solo los elementos designados.
   - {{ui:Transparente}} ({{key:T}}) muestra los elementos designados tal como son y todo lo demás transparente.
4. Haga clic en {{ui:Mostrar todo}} en el mismo menú, o pulse {{key:Shift+H}}, para volver a mostrar todos los elementos.
5. Para cortar todo lo que rodea a los elementos designados, haga clic en {{ui:Caja de sección alrededor de lo designado}} en el mismo menú, o pulse {{key:Shift+X}}. Consulte [Cortar un modelo IFC con un plano de sección](topic:section-plane).

## Qué debe ver

- Con varios elementos designados, {{ui:Propiedades}} indica cuántos son y los enumera por clase. Haga clic en uno solo para ver sus propiedades.
- Los elementos ocultos no se pueden designar: un clic cae en lo que hay detrás de ellos.
- Los elementos transparentes tampoco se pueden designar, así que puede hacer clic directamente a través de los muros hasta lo que aisló.
- Las aristas se ocultan con su elemento y se vuelven tenues con él.
- Ocultar, aislar y transparente se mantienen mientras edita, coloca elementos de biblioteca o corta el modelo con un plano de sección. Abrir otro modelo vuelve a mostrar todo.

## Errores comunes

- **Los elementos del menú aparecen en gris.** No hay nada designado. Primero haga clic en un elemento; apunte a una opción para leer por qué no puede actuar.
- **Aislar mostró un muro que yo había ocultado.** Aislar muestra exactamente lo que designó, oculto o no.
- **Falta un nivel completo.** Eso se controla en la lista {{ui:Niveles}}, no con {{ui:Mostrar todo}}: marque el nivel de nuevo.

## Siguiente

- [Mostrar y ocultar niveles, espacios y aristas](topic:storeys-and-spaces)
- [Cortar un modelo IFC con un plano de sección](topic:section-plane)
