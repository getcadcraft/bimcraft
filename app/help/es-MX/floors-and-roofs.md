---
title: Locales, pisos, techos y cubiertas
summary: Los locales aparecen cuando los muros los cierran; dé a un local o a todo el edificio un piso y un techo, y ponga una cubierta a cuatro aguas o a dos aguas sobre los muros. Todo se actualiza cuando se mueven los muros.
keywords: local, locales, espacio, área, perímetro, piso, losa, subpiso, techo, cubierta, cubierta a cuatro aguas, cubierta a dos aguas, pendiente, volado, alero, cumbrera, limahoya, 6/12
from: 1fb1813c
---

## Qué va a hacer

Termine la envolvente del edificio. Los locales se forman solos a partir de los muros; los pisos, techos y la cubierta requieren un clic cada uno. Como se obtienen de los muros, se actualizan cuando estos se mueven.

## Locales

Todo espacio cerrado por muros dibujados es un local. Aparece en cuanto el último muro lo cierra, con un número (101, 102… en el primer nivel, 201… en el siguiente) y un nombre (**Local 1**, **Local 2**…), y su área se muestra en el centro del plano.

- Con {{ui:Seleccionar}} activado, haga clic dentro de un local para seleccionarlo. En **Propiedades** cambie su **Nombre** (por ejemplo `Cocina`) y su **Número**; se muestran su área y su perímetro.
- Al eliminar un muro entre dos locales, se convierten en uno; al dibujar un muro que cruce un local, se convierte en dos. Un local conserva su nombre y su número cuando los muros que lo rodean se mueven.
- Un local no se puede eliminar por sí solo: es el espacio que forman los muros.

Las áreas se miden dentro de las caras de los muros. Los locales se guardan como espacios IFC con su área de piso, perímetro, altura y volumen, para que las listas los lean (vea [Sumar cantidades, listar elementos y programar espacios](topic:quantity-totals)).

## Pisos

1. Haga clic en {{ui:Piso}}.
2. Elija **Este local** o **Todo el edificio**, el **Tipo** (piso de madera o losa de concreto) y su espesor.
3. Apunte dentro de un local (o en cualquier punto del edificio). Lo que cubriría el piso se resalta con su área.
4. Haga clic. La parte superior del piso es el nivel del piso; baja según su espesor. Un piso de todo el edificio llega hasta las caras exteriores de los muros.

## Techos

1. Haga clic en {{ui:Techo}}.
2. Elija **Este local** o **Todo el edificio**, y su **Altura** sobre el piso.
3. Apunte dentro y haga clic.
4. Para verlo desde abajo, con su rejilla y las luces, cambie el plano a su plano de techo: vea [Vistas, rangos de vista y sus propias hojas](topic:views-and-sheets).

## Una cubierta

1. En el nivel cuyos muros soportan la cubierta, haga clic en {{ui:Cubierta}}.
2. Escriba la **Pendiente** como un desnivel sobre 12 (`6/12`) o en grados (`30`), y el **Volado**.
3. Elija los **Extremos**: **Cubierta a cuatro aguas** (todos los lados tienen pendiente), **Aguilones en los lados cortos** o **Aguilones en los lados largos** (un edificio de cuatro lados), o **De una agua**.
4. Apunte dentro del edificio: el alero y la cumbrera se muestran en el plano. Haga clic.

La cubierta descansa sobre los muros, en el nivel superior a ellos, y su cara inferior llega a la cara exterior de los muros. Los extremos a dos aguas se cierran con un muro de aguilón del mismo espesor que el muro de abajo. Un edificio en forma de L, T o U recibe una cubierta a cuatro aguas cuyas alas se unen en limahoyas.

## Cambiarlas

Seleccione un piso, techo o cubierta (en la vista 3D, en el árbol del modelo, o una cubierta haciendo clic dentro de su contorno en el nivel superior) y cámbielo en **Propiedades**: el tipo de piso, su espesor y cuánto sube su parte superior sobre el nivel; la altura, el espesor y el **Patrón** del techo (la rejilla que dibuja en el plano de techo: ninguno, 600 × 600, 600 × 1200, 2' × 2' o 2' × 4'); la pendiente, el volado, los extremos y el espesor de la cubierta. Cada cambio es un paso de deshacer.

## Asignar a un piso, techo o cubierta un tipo con capas

Un piso, un techo y una cubierta pueden tener un **tipo**, como lo tiene un muro: una composición con nombre formada por capas, cada una con su material y su espesor real.

- **Al colocarlo.** Las herramientas Piso, Techo, Cubierta y Dibujar piso tienen una lista **Tipo** en su fila. **Sin tipo** lo coloca como antes, con su propio espesor. Un tipo lo coloca con el espesor igual a la suma de sus capas.
- **Después.** Seleccione el piso, techo o cubierta y elija **Tipo** en Propiedades. El elemento sigue siendo el mismo: se conservan su lugar, su local y sus datos, y no se vuelve a dibujar nada. Solo cambian su tipo, su espesor y su material. Así un elemento en etapa de croquis se convierte en uno desarrollado: cambie su tipo genérico por uno real.
- **Editar el tipo…** abre el editor de tipos: las capas de **arriba** hacia abajo, el núcleo, la función de cada capa y la etiqueta LOD del tipo. Al guardar, cambian todos los elementos del tipo en un solo paso, y un Deshacer lo revierte. Al cambiar un tipo inicial se guarda una copia como tipo propio.
- Mientras un elemento tiene tipo, su **Espesor** es el del tipo y no se puede escribir. Elija otro tipo, o **Sin tipo**, para cambiarlo.

Los tipos iniciales son un tipo **genérico** para cada uno (una capa del material genérico, etiquetada LOD 200) y dos con capas (etiquetadas LOD 300): un piso de vigueta de madera y un piso de concreto con firme; una cubierta de madera y una cubierta plana de concreto; un techo de tablaroca y un techo suspendido de losetas. Son valores de partida, no construcciones probadas: revise las capas antes de confiar en ellos.

La lista **Capas: área y volumen** enumera cada capa de cada tipo en uso; vea [Listas, cotas y PDF](topic:plan-schedules-and-pdf). Los tipos de piso, cubierta y techo viajan entre proyectos en un paquete de tipos o como elemento de biblioteca; vea [Paquetes de tipos](topic:type-packs).

## Conviene saber

- Mover, agregar o eliminar muros vuelve a formar los locales, pisos, techos y la cubierta que están sobre ellos.
- Una cubierta se adapta a cualquier contorno. Para dar a cada muro su propia pendiente, extremo a dos aguas o de una agua, una solera elevada, cenefa y sofito, o para dibujar un solo plano de cubierta, vea [Cubiertas: una pendiente para cada muro, aguilones, cobertizos y planos de cubierta](topic:roofs).
- {{key:Delete}} elimina un piso, techo o cubierta seleccionado.
