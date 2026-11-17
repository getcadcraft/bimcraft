---
title: Habitaciones, pisos, techos y cubiertas
summary: Las habitaciones aparecen a medida que los muros las cierran; dé a una habitación o a todo el edificio un piso y un techo, y ponga una cubierta a cuatro aguas o a dos aguas sobre los muros. Todos ellos siguen a los muros cuando estos se mueven.
keywords: habitación, habitaciones, espacio, superficie, perímetro, piso, losa, subsuelo, techo, cubierta, cubierta a cuatro aguas, cubierta a dos aguas, pendiente, vuelo, alero, cumbrera, limahoya, 6/12
from: 1fb1813c
---

## Qué hará

Termine la envolvente del edificio. Las habitaciones se obtienen solas a partir de los muros; los pisos, los techos y la cubierta requieren un clic cada uno. Como se calculan a partir de los muros, se actualizan cuando estos se mueven.

## Habitaciones

Todo espacio cerrado por muros dibujados es una habitación. Aparece en cuanto el último muro lo cierra, con un número (101, 102… en el primer nivel, 201… en el siguiente) y un nombre (**Habitación 1**, **Habitación 2**…), y su superficie se muestra en el centro de la habitación en el plano.

- Con {{ui:Seleccionar}} activado, haga clic dentro de una habitación para seleccionarla. En **Propiedades** cambie su **Nombre** (por ejemplo, `Kitchen`) y su **Número**; se muestran su superficie y su perímetro.
- Si borra un muro entre dos habitaciones, pasan a ser una sola; si dibuja un muro que atraviesa una habitación, se convierte en dos. Una habitación conserva su nombre y su número mientras se mueven los muros que la rodean.
- No se puede borrar una habitación por separado: es el espacio que forman los muros.

Las superficies se miden dentro de las caras de los muros. Las habitaciones se guardan como espacios IFC con su superficie de suelo, perímetro, altura y volumen, para que las tablas los lean (véase [Sumar cantidades, listar elementos y tabular espacios](topic:quantity-totals)).

## Pisos

1. Haga clic en {{ui:Piso}}.
2. Elija **Esta habitación** o **Todo el edificio**, el **Tipo** (piso de madera o losa de hormigón) y su espesor.
3. Sitúe el cursor dentro de una habitación (o en cualquier punto del edificio). Se resalta lo que cubriría el piso, con su superficie.
4. Haga clic. La cara superior del piso es el nivel del suelo; el piso baja según su espesor. Un piso de todo el edificio llega hasta las caras exteriores de los muros.

## Techos

1. Haga clic en {{ui:Techo}}.
2. Elija **Esta habitación** o **Todo el edificio**, y su **Altura** sobre el piso.
3. Sitúe el cursor dentro y haga clic.
4. Para verlo desde abajo, con su retícula y las luces, cambie el plano a su plano de techo: véase [Vistas, rangos de vista y sus propias hojas](topic:views-and-sheets).

## Una cubierta

1. En el nivel cuyos muros soportan la cubierta, haga clic en {{ui:Cubierta}}.
2. Escriba la **Pendiente** como una altura por cada 12 (`6/12`) o en grados (`30`), y el **Vuelo**.
3. Elija los **Remates**: **Cubierta a cuatro aguas** (todos los lados vierten), **Hastiales en los lados cortos** o **Hastiales en los lados largos** (un edificio de cuatro lados), o **Cubierta a una vertiente**.
4. Sitúe el cursor dentro del edificio: el alero y la cumbrera se muestran en el plano. Haga clic.

La cubierta descansa sobre los muros, en el nivel superior a ellos, y su cara inferior llega a la cara exterior de los muros. Los hastiales se rellenan con un muro de hastial de igual espesor que el muro de debajo. Un edificio en forma de L, T o U recibe una cubierta a cuatro aguas cuyas alas se unen en limahoyas.

## Cambiarlos

Seleccione un piso, un techo o una cubierta (en la vista 3D, en el árbol del modelo, o una cubierta haciendo clic dentro de su contorno en el nivel superior) y cámbielo en **Propiedades**: el tipo de piso, su espesor y cuánto sube su cara superior sobre el nivel; el tipo de techo, su altura, su espesor y su **Patrón** (la retícula que dibuja en el plano de techo: ninguno, 600 × 600, 600 × 1200, 2' × 2' o 2' × 4'); la pendiente, el vuelo, los remates y el espesor de una cubierta. Cada cambio es un paso de deshacer.

## Dar a un piso, techo o cubierta un tipo con capas

Un piso, un techo y una cubierta pueden tener un **tipo**, como lo tiene un muro: una composición con nombre formada por capas, cada una con su material y su espesor real.

- **Al colocarlo.** Las herramientas Piso, Techo, Cubierta y Dibujar piso tienen una lista **Tipo** en su fila. **Sin tipo** lo coloca como antes, con su propio espesor. Un tipo lo coloca con el espesor igual a la suma de sus capas.
- **Después.** Seleccione el piso, el techo o la cubierta y elija **Tipo** en Propiedades. El elemento sigue siendo el mismo: se conservan su lugar, su habitación y sus datos, y no se vuelve a dibujar nada. Solo cambian su tipo, su espesor y su material. Así un elemento en fase de esbozo pasa a ser un elemento desarrollado: sustituya su tipo genérico por uno real.
- **Editar el tipo…** abre el editor de tipos de ese tipo: las capas de **arriba** hacia abajo, el núcleo, la función de cada capa y la etiqueta LOD del tipo. Al guardar, se cambian todos los elementos del tipo en un solo paso, y un Deshacer lo revierte. Si modifica un tipo inicial, se guarda una copia como tipo propio.
- Mientras un elemento tiene tipo, su **Espesor** es el del tipo y no se puede escribir. Elija otro tipo, o **Sin tipo**, para cambiarlo.

Los tipos iniciales son un tipo **genérico** para cada uno (una capa del material genérico, etiquetada LOD 200) y dos tipos por capas (etiquetados LOD 300): un piso de viguetas de madera y un piso de hormigón con capa de mortero; una cubierta de madera y una cubierta plana de hormigón; un techo de placa de yeso laminado y un techo suspendido de baldosas. Son valores de partida, no construcciones probadas: compruebe las capas antes de fiarse de ellos.

La tabla **Capas: superficie y volumen** enumera cada capa de cada tipo en uso; véase [Tablas, cotas y PDF](topic:plan-schedules-and-pdf). Los tipos de piso, techo y cubierta viajan entre proyectos en un paquete de tipos o como elemento de la Biblioteca; véase [Paquetes de tipos](topic:type-packs).

## Conviene saber

- Mover, añadir o borrar muros vuelve a generar las habitaciones, los pisos, los techos y la cubierta sobre ellos.
- Una cubierta se adapta a cualquier contorno. Para dar a cada muro su propia pendiente, un remate a dos aguas o a una vertiente, una solera elevada, un canto y un sofito, o para dibujar un único plano de cubierta, véase [Cubiertas: una pendiente para cada muro, hastiales, vertientes y planos de cubierta](topic:roofs).
- {{key:Delete}} borra un piso, un techo o una cubierta seleccionados.
