---
title: El plano de trabajo: definirlo, mostrarlo, mirarlo de frente
summary: El plano de trabajo es el plano que usan las líneas de modelo, el texto de modelo y el Visor del plano de trabajo. Defínalo en un nivel, una cara, un plano de referencia con nombre o una línea; muéstrelo en las vistas; abra el visor para dibujar en un plano vertical.
keywords: plano de trabajo, definir plano de trabajo, mostrar plano de trabajo, plano de referencia, visor del plano de trabajo, plano con nombre, cara, nivel, plano vertical, dibujar en un muro, dibujo de alzado, ajuste, alineación, plano de ref
from: 8aceee1d
---

## Qué hará

Elija el plano en el que dibuja, vea dónde está y dibuje en un plano vertical.

## Pasos

1. Active **Dibujo** y abra el menú **Construir** (en un diseño con cinta: la pestaña Arquitectura, Plano de trabajo).
2. Elija **Definir plano de trabajo**. Después haga una de estas cosas:
   - seleccione un nivel en **Establecer en**;
   - seleccione un plano de referencia con nombre en la lista junto a esa opción;
   - pulse una línea en la planta: un muro, una línea de rejilla, un plano de referencia, una línea de modelo o un sistema de muro cortina. El plano de trabajo pasa a ser el plano vertical que pasa por esa línea;
   - pulse una cara plana en la vista 3D. El plano de trabajo se apoya en esa cara.
3. Elija **Mostrar plano de trabajo** para verlo: una lámina tintada con una cuadrícula en metros en la vista 3D, un contorno o una línea discontinua en la planta, y un contorno discontinuo en el panel de alzados y secciones. Vuelva a elegirlo para ocultarlo.
4. Elija **Visor del plano de trabajo** para mirar el plano de frente. Las líneas negras son el modelo cortado por el plano. Use sus herramientas para dibujar una línea de modelo, un texto de modelo o un plano de referencia sobre el plano. **Mirar en 3D** gira la vista 3D para que quede frente al plano.

## Planos de referencia

Un plano de referencia es un plano con nombre que se dibuja como una línea.

1. Elija **Plano de referencia**. Escriba un nombre en su fila si lo quiere (si no, se le asigna uno) y una altura.
2. Pulse dónde empieza y dónde termina. En la planta se crea un plano vertical. En el Visor del plano de trabajo se crea un plano perpendicular al plano de trabajo.
3. Se muestra como una línea verde discontinua con su nombre en la planta, y como un contorno discontinuo en la vista 3D y en el panel de alzados y secciones.
4. Selecciónelo para cambiarle el nombre, la longitud, la altura y el pie, o pulse **Usar como plano de trabajo**.

Dos planos de referencia no pueden tener el mismo nombre, porque el nombre es la forma de elegir uno.

## Conviene saber

- Un modelo sin plano de trabajo definido funciona en su nivel más bajo.
- El plano de trabajo se guarda en el archivo. Mostrarlo u ocultarlo se recuerda en este navegador, no en el archivo.
- Si el plano de trabajo sigue a un plano de referencia y usted mueve ese plano, el plano de trabajo se mueve con él.
- En un plano de trabajo vertical, las herramientas Línea de modelo y Texto de modelo abren el visor, porque una planta no puede señalar una altura.
- Las herramientas de dibujo se ajustan a los extremos de los planos de referencia dibujados en la planta del mismo modo que se ajustan a los extremos de otras líneas en el visor.

## En el archivo IFC

- El plano de trabajo es un conjunto de propiedades (CadCraft_WorkPlane) en el proyecto.
- Un plano de referencia es un IfcAnnotation con el tipo de objeto ReferencePlane y su nombre. Su forma es el contorno cerrado del plano, para que otro programa muestre dónde está. Su conjunto CadCraft_ReferencePlane contiene el origen, la dirección, la normal y la extensión. IFC no tiene una clase para un plano de referencia; una anotación no cuenta como elemento de construcción y no delimita habitaciones.
