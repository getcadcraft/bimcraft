---
title: Ambientes y separadores de ambientes
summary: Elegí un ambiente para nombrarlo y numerarlo, y leé su superficie, perímetro y volumen. Dibujá un separador de ambientes donde dos ambientes se unen sin muro entre ellos.
keywords: ambiente, ambientes, separador de ambiente, línea de separación, espacio, IfcSpace, nombre, número, superficie, perímetro, volumen, planta abierta, dividir un ambiente, cocina y living, sin cerramiento
from: d4c1d66b
---

## Lo que vas a hacer

Nombrá los ambientes que forman los muros, y dividí un ambiente abierto en dos sin muro.

## Dónde están las herramientas

- Diseños de cinta: {{ui:Arquitectura}} › **Ambiente y Superficie** › {{ui:Ambiente}} y {{ui:Separador de ambiente}}.
- Diseño clásico: la barra de {{ui:Dibujar}} › menú {{ui:Ambientes}}.
- Cualquier estilo de menú: los comandos se llaman Room y Room Separator; la paleta de comandos los encuentra.

## Pasos

1. Dibujá los muros. Cada circuito cerrado de muros ya es un ambiente: BimCraft lo crea, lo numera y le da su superficie mientras dibujás.
2. Elegí {{ui:Ambiente}}. Pasá sobre el plano: el ambiente bajo el puntero se ilumina con su superficie, perímetro y volumen.
3. Para nombrar ambientes rápidamente, escribí primero un {{ui:Nombre}} y un {{ui:Número}} en la fila, y después hacé clic en el ambiente. El número sigue sumando de a uno para el ambiente siguiente (101, 102; A-09, A-10).
4. O simplemente hacé clic en un ambiente: queda seleccionado, y Propiedades muestra su nombre, número, superficie, perímetro, volumen y su etiqueta.
5. Para dividir un ambiente abierto, elegí {{ui:Separador de ambiente}} y hacé clic en dos puntos: de muro a muro, o de muro a otro separador. Seguí haciendo clic para una cadena; Enter, Esc o un doble clic la terminan.

## Lo que hace un separador

- Limita ambientes como un muro sin espesor. Las superficies de los dos ambientes suman exactamente la del ambiente original.
- El ambiente que contiene el centro del ambiente viejo conserva su nombre y número. El otro es nuevo.
- Un separador que termina en el espacio abierto, sin tocar nada en un extremo, no divide nada. Extendelo y sí lo hará.
- La parte de un separador que queda dentro de un muro se ignora, así que podés ajustarte a los ejes de los muros.
- Seleccioná un separador y presioná Delete para quitarlo: los dos ambientes vuelven a ser uno. Deshacer lo restaura.

## Si no hay ambiente donde hacés clic

La línea de estado lo indica: los muros no cierran ahí. Cerrá el hueco, o dibujá un separador que lo atraviese. No se rechaza nada; simplemente todavía no hay un ambiente cerrado.

## En el IFC

Un ambiente es un IfcSpace con su número (Name), su nombre (LongName) y Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. El volumen es la superficie por la altura hasta el nivel de arriba.

Un separador de ambiente es un IfcVirtualElement, la entidad que usa IFC para un límite que no está construido. Tiene una línea y no tiene cuerpo, así que otro programa no lee ningún muro ni cuenta nada por él.

## Todavía no está hecho

- Separadores curvos.
- Un ambiente que sigue un cielorraso inclinado: el volumen siempre es superficie por la altura del nivel.
- No se escriben las relaciones de límite de espacio (IfcRelSpaceBoundary), ni para muros ni para separadores.

Ver también [Etiquetas de ambientes y superficies](topic:room-and-area-tags), [Superficies y límites de superficies](topic:areas-and-area-boundaries).
