---
title: Habitaciones y separadores de habitación
summary: Seleccione una habitación para darle nombre y número y consultar su superficie, perímetro y volumen. Dibuje un separador de habitación donde dos habitaciones se unen sin muro entre ellas.
keywords: habitación, habitaciones, separador de habitación, línea de separación, espacio, IfcSpace, nombre, número, superficie, perímetro, volumen, planta abierta, dividir una habitación, cocina y salón, sin cerrar
from: d4c1d66b
---

## Qué hará

Dé nombre a las habitaciones que forman los muros, y divida una habitación abierta en dos sin muro.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Habitación y área** › {{ui:Habitación}} y {{ui:Separador de habitación}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}}.
- Cualquier estilo de menú: los comandos se llaman Room y Room Separator; la paleta de comandos los encuentra.

## Pasos

1. Dibuje los muros. Cada bucle cerrado de muros ya es una habitación: BimCraft la crea, le asigna un número y le da su superficie a medida que dibuja.
2. Elija {{ui:Habitación}}. Pase sobre el plano: la habitación bajo el puntero se ilumina con su superficie, perímetro y volumen.
3. Para dar nombre a las habitaciones con rapidez, escriba antes en la fila un {{ui:Nombre}} y un {{ui:Número}}, y luego haga clic en la habitación. El número aumenta en uno para la siguiente habitación (101, 102; A-09, A-10).
4. O simplemente haga clic en una habitación: queda seleccionada, y Propiedades tiene su nombre, número, superficie, perímetro, volumen y su etiqueta.
5. Para dividir una habitación abierta, elija {{ui:Separador de habitación}} y haga clic en dos puntos: de muro a muro, o de muro a otro separador. Siga haciendo clic para una cadena; Intro, Esc o un doble clic la terminan.

## Qué hace un separador

- Delimita las habitaciones como un muro sin grosor. Las superficies de las dos habitaciones suman exactamente la habitación original.
- La habitación que contiene el centro de la antigua conserva su nombre y número. La otra es nueva.
- Un separador que se detiene en el vacío, sin tocar nada en un extremo, no divide nada. Alárguelo y sí lo hará.
- La parte de un separador que queda dentro de un muro se ignora, así que puede ajustarse a las líneas de centro de los muros.
- Seleccione un separador y pulse Supr para eliminarlo: las dos habitaciones vuelven a ser una. Deshacer lo devuelve.

## Si no hay habitación donde hace clic

La línea de estado lo indica: los muros no cierran ahí. Cierre el hueco, o dibuje un separador que lo atraviese. No se rechaza nada; simplemente todavía no hay una habitación cerrada.

## En el IFC

Una habitación es un IfcSpace con su número (Name), su nombre (LongName) y Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. El volumen es la superficie por la altura hasta el nivel superior.

Un separador de habitación es un IfcVirtualElement, la entidad que IFC usa para un límite que no está construido. Tiene una línea y ningún cuerpo, así que otro programa no lee ningún muro y no cuenta nada por él.

## Todavía no disponible

- Separadores curvos.
- Una habitación que sigue un techo inclinado: el volumen siempre es la superficie por la altura del nivel.
- Las relaciones de límite de espacio (IfcRelSpaceBoundary) no se escriben, ni para muros ni para separadores.

Véase también [Etiquetas de habitaciones y áreas](topic:room-and-area-tags), [Áreas y límites de área](topic:areas-and-area-boundaries).
