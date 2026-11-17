---
title: El plano de trabajo: definirlo, mostrarlo, verlo de frente
summary: El plano de trabajo es el plano que usan las líneas de modelo, el texto de modelo y el Visor del plano de trabajo. Defínalo en un nivel, una cara, un plano de referencia con nombre o una línea; muéstrelo en las vistas; abra el visor para dibujar en un plano vertical.
keywords: plano de trabajo, definir plano de trabajo, mostrar plano de trabajo, plano de referencia, visor del plano de trabajo, plano con nombre, cara, nivel, plano vertical, dibujar en un muro, dibujo de alzado, referencia a objetos, alineación, plano ref
from: 8aceee1d
---

## Lo que hará

Elija el plano sobre el que dibuja, vea dónde está y dibuje en un plano vertical.

## Pasos

1. Active **Dibujo** y abra el menú **Construir** (en el diseño con cinta: la pestaña Arquitectura, Plano de trabajo).
2. Elija **Definir plano de trabajo**. Después haga una de estas acciones:
   - seleccione un nivel en **Definir en**;
   - seleccione un plano de referencia con nombre en la lista junto a esa opción;
   - haga clic en una línea de la planta: un muro, una línea de rejilla, un plano de referencia, una línea de modelo o un sistema de muro cortina. El plano de trabajo pasa a ser el plano vertical que pasa por esa línea;
   - haga clic en una cara plana de la vista 3D. El plano de trabajo queda sobre esa cara.
3. Elija **Mostrar plano de trabajo** para verlo: una superficie tintada con una rejilla de metros en la vista 3D, un contorno o una línea punteados en la planta, y un contorno punteado en el panel de alzado y sección. Elíjalo de nuevo para ocultarlo.
4. Elija **Visor del plano de trabajo** para mirar el plano de frente. Las líneas negras son el modelo cortado por el plano. Use sus herramientas para dibujar una línea de modelo, un texto de modelo o un plano de referencia sobre el plano. **Verlo en 3D** gira la vista 3D para quedar de frente al plano.

## Planos de referencia

Un plano de referencia es un plano con nombre que se dibuja como una línea.

1. Elija **Plano de referencia**. Escriba un nombre en su fila si quiere uno (si no, se le asigna uno) y una altura.
2. Haga clic donde empieza y donde termina. En la planta, esto crea un plano vertical. En el Visor del plano de trabajo, crea un plano perpendicular al plano de trabajo.
3. Se muestra como una línea verde punteada con su nombre en la planta, un contorno punteado en la vista 3D y en el panel de alzado y sección.
4. Selecciónelo para renombrarlo, cambiar su longitud, su altura y su base, o pulse **Usar como plano de trabajo**.

Dos planos de referencia no pueden tener el mismo nombre, porque el nombre es la forma de elegir uno.

## Conviene saber

- Un modelo sin plano de trabajo definido funciona en su nivel más bajo.
- El plano de trabajo se guarda en el archivo. Mostrarlo u ocultarlo se recuerda en este navegador, no en el archivo.
- Si el plano de trabajo sigue a un plano de referencia y usted mueve ese plano, el plano de trabajo se mueve con él.
- En un plano de trabajo vertical, las herramientas Línea de modelo y Texto de modelo abren el visor, porque una planta no puede apuntar a una altura.
- Las herramientas de dibujo se ajustan a los extremos de los planos de referencia dibujados en la planta del mismo modo que a los extremos de otras líneas en el visor.

## En el archivo IFC

- El plano de trabajo es un conjunto de propiedades (CadCraft_WorkPlane) en el proyecto.
- Un plano de referencia es un IfcAnnotation con el tipo de objeto ReferencePlane y su nombre. Su forma es el contorno cerrado del plano, para que otro programa muestre dónde está. Su conjunto CadCraft_ReferencePlane guarda el origen, la dirección, la normal y la extensión. IFC no tiene una clase para un plano de referencia; una anotación no se cuenta como elemento de construcción y no delimita espacios.
