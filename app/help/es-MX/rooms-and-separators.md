---
title: Locales y separadores de local
summary: Elija un local para nombrarlo y numerarlo, y lea su área, perímetro y volumen. Dibuje un separador de local donde dos locales se unen sin muro entre ellos.
keywords: local, locales, separador de local, línea de separación, espacio, IfcSpace, nombre, número, área, perímetro, volumen, planta libre, dividir un local, cocina y sala, sin cerrar
from: d4c1d66b
---

## Qué hará

Nombre los locales que forman los muros, y divida un local abierto en dos sin muro.

## Dónde están las herramientas

- Diseños en cinta: {{ui:Arquitectura}} › **Local y área** › {{ui:Local}} y {{ui:Separador de local}}.
- Diseño clásico: la barra Dibujo › menú {{ui:Habitaciones}}.
- Cualquier estilo de menú: los comandos se llaman Room y Room Separator; la paleta de comandos los encuentra.

## Pasos

1. Dibuje los muros. Cada circuito cerrado de muros ya es un local: BimCraft lo crea, lo numera y le asigna su área conforme dibuja.
2. Elija {{ui:Local}}. Pase sobre el plano: el local bajo el puntero se ilumina con su área, perímetro y volumen.
3. Para nombrar locales rápidamente, escriba primero en la fila un {{ui:Nombre}} y un {{ui:Número}}, y luego haga clic en el local. El número aumenta en uno para el siguiente local (101, 102; A-09, A-10).
4. O simplemente haga clic en un local: queda seleccionado, y Propiedades muestra su nombre, número, área, perímetro, volumen y su etiqueta.
5. Para dividir un local abierto, elija {{ui:Separador de local}} y haga clic en dos puntos: de muro a muro, o de muro a otro separador. Siga haciendo clic para una cadena; Enter, Esc o un doble clic la terminan.

## Qué hace un separador

- Delimita locales como un muro sin espesor. Las áreas de los dos locales suman exactamente el local original.
- El local que contiene el centro del local anterior conserva su nombre y número. El otro es nuevo.
- Un separador que termina en el espacio abierto, sin tocar nada en un extremo, no divide nada. Extiéndalo y sí lo hará.
- La parte de un separador que queda dentro de un muro se ignora, así que puede ajustarse a los ejes de los muros.
- Seleccione un separador y presione Delete para quitarlo: los dos locales vuelven a ser uno. Deshacer lo restaura.

## Si no hay local donde hace clic

La línea de estado lo indica: los muros no cierran ahí. Cierre el hueco o dibuje un separador a través de él. No se rechaza nada; simplemente todavía no hay un local cerrado.

## En el IFC

Un local es un IfcSpace con su número (Name), nombre (LongName) y Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. El volumen es el área por la altura hasta el nivel superior.

Un separador de local es un IfcVirtualElement, la entidad que IFC usa para un límite que no está construido. Tiene una línea y no tiene cuerpo, así que otro programa no lee ningún muro ni cuenta nada por él.

## Aún no incluido

- Separadores curvos.
- Un local que sigue un techo inclinado: el volumen siempre es área por la altura del nivel.
- No se escriben las relaciones de límite de espacio (IfcRelSpaceBoundary), ni para muros ni para separadores.

Vea también [Etiquetas de local y de área](topic:room-and-area-tags), [Áreas y límites de área](topic:areas-and-area-boundaries).
