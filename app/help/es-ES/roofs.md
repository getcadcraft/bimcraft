---
title: Cubiertas: una pendiente por muro, hastiales, cubiertas a un agua y faldones
summary: Defina cada muro bajo una cubierta como inclinado, hastial o ninguno; use los preajustes de cuatro aguas, hastial y a un agua; eleve la cubierta con la altura de solera, añada tapacanes y sofito, y dibuje faldones de cubierta sueltos donde la cubierta automática no encaje.
keywords: cambiar una cubierta, editar una cubierta, cubierta seleccionada, propiedades de cubierta, deshacer cubierta, cubierta, pendiente, por muro, hastial, cubierta a un agua, limatesa, cumbrera, limahoya, altura de solera, talón, tapacanes, sofito, alero, rampante, vuelo, faldón de cubierta, buhardilla, buhardilla a dos aguas, buhardilla a un agua
from: 096084a7
---

## Lo que hará

Dé forma a la cubierta a partir de los muros bajo ella. Cada muro tiene su propio ajuste, así que una cubierta puede ser a cuatro aguas en el frente, tener hastiales en los extremos y apoyarse a ras contra un muro más alto en la parte trasera. Para un porche o cualquier cara que la cubierta automática no pueda hacer, dibuje un faldón de cubierta indicando sus esquinas.

## Colocar una cubierta

1. En la planta cuyos muros soportan la cubierta, pulse {{ui:Roof}}.
2. Escriba la **Pendiente** (`6/12`, o grados como `30`) y el **Vuelo**.
3. Elija un preajuste: **Cubierta a cuatro aguas**, **Hastiales en los lados cortos**, **Hastiales en los lados largos** o **A un agua** (el lado más cercano al puntero es el alero bajo; los demás lados son hastiales).
4. Deje **Tapacanes y sofito** marcado para aleros cerrados con tapacanes, o desmárquelo para un borde de cubierta sin cerrar.
5. Señale dentro del edificio: el alero, la cumbrera, las limatesas y las limahoyas aparecen en la planta. Pulse.

Cualquier contorno sirve: formas en L, en T, en U y en cruz, esquinas angulares y entrantes. Las limatesas, las cumbreras y las limahoyas se encuentran donde se cruzan los faldones de cubierta.

## Un muro cada vez

Seleccione la cubierta (en la planta sobre los muros, pulse dentro de su contorno) y mire bajo **Cada muro** en **Propiedades**. Al señalar una fila se marca ese muro en la planta.

- **Inclinado**: el muro tiene un faldón inclinado encima. Escriba su propia pendiente junto a él, por ejemplo `12/12` para extremos empinados en una cubierta de `6/12`.
- **Hastial**: la cubierta termina en un extremo vertical sobre ese muro, el muro se rellena hasta la cubierta, y la cubierta sobrepasa el muro en el **Vuelo de hastial**.
- **Ninguno (a ras)**: la cubierta termina en ese muro sin vuelo y sin muro de hastial, para una cubierta apoyada contra un muro más alto.

La lista **Extremos** de la parte superior define todos los muros a la vez; **Definir por muro** aparece cuando los muros ya no coinciden con un preajuste.

## Cambiar una cubierta ya colocada

Seleccione la cubierta y **Propiedades** muestra los mismos ajustes que la herramienta Cubierta: **Pendiente**, **Vuelo**, **Vuelo de hastial**, **Altura de solera**, **Altura de tapacanes**, **Aleros cerrados** y **Espesor**. Cada cambio se muestra al instante en la planta y en 3D, con las mismas comprobaciones que la herramienta (se rechaza una pendiente de 80 grados o más, y también un ajuste que no pueda formar una cubierta). Escriba un valor y pulse {{key:Enter}}, o salga del campo.

Cada cambio es un paso de deshacer. Varios cambios seguidos en el mismo campo (escriba `6/12`, después `7/12`, después `8/12`) se unen en un solo paso, así que {{key:Ctrl}}+{{key:Z}} devuelve la cubierta al estado previo a la serie; cambiar otro campo inicia un paso nuevo.

## Altura de solera, tapacanes y sofito

- **Altura de solera** es donde los faldones de cubierta se encuentran con el exterior de los muros, medida desde el suelo de la planta. Déjela en blanco para apoyar la cubierta sobre la parte superior de los muros; escriba un valor mayor para un talón elevado.
- **Altura de tapacanes** es la tabla a lo largo de los aleros y por los rampantes. Escriba `0` si no hay.
- **Aleros cerrados** pone un sofito horizontal bajo cada alero, desde el muro hasta la parte trasera del tapacanes.

Cada faldón se encuentra con su muro a la altura de la solera, así que los muros con pendientes distintas conservan una sola línea de solera y sus aleros terminan a alturas distintas, como se montarían en obra.

## Dibujar un faldón de cubierta

1. En la planta sobre la que se apoya el faldón, abra {{ui:Build}} y elija {{ui:Roof plane}}.
2. Escriba la **Pendiente** y, si no es la parte superior de los muros, la **Altura de alero**.
3. Pulse las esquinas. El primer lado que dibuje es el alero; el faldón sube desde él hacia el resto de la forma.
4. Pulse de nuevo la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar. {{key:Esc}} descarta las esquinas.

Un faldón de cubierta no sigue a los muros. Selecciónelo en la planta superior (pulse dentro de él) para cambiar su pendiente, su altura de alero o su espesor, o pulse {{key:Delete}} para eliminarlo.

## Añadir una buhardilla

1. Muestre la planta sobre la que está la cubierta.
2. Abra {{ui:Build}} y elija {{ui:Dormer}}.
3. En la fila de opciones, elija **Tipo de buhardilla** (**A dos aguas** o **A un agua**) y ajuste el **Ancho**, el **Muro frontal** (la altura del muro frontal desde la parte superior de la cubierta hasta el alero de la buhardilla), la **Pendiente** y el **Vuelo**.
4. Pulse sobre una cara de la cubierta donde va el centro del frente de la buhardilla.

BimCraft construye el muro frontal, dos muros laterales y la cubierta de la buhardilla, y la prolonga hacia atrás hasta encontrar la cubierta. Una buhardilla a dos aguas tiene dos faldones que se encuentran en una cumbrera. Una buhardilla a un agua tiene un solo faldón, que debe ser menos empinado que la cubierta. La cubierta bajo la buhardilla se recorta. La buhardilla sigue a la cubierta cuando los muros se mueven.

Selecciónela para cambiar su tipo, ancho, muro frontal, pendiente o vuelo en **Propiedades**. {{key:Delete}} la elimina y vuelve a cerrar la cubierta. Debe caber en una sola cara de la cubierta, lejos de las limatesas, las limahoyas y la cumbrera; solo las cubiertas hechas con la herramienta {{ui:Roof}} admiten buhardillas, no los faldones dibujados a mano. Todavía no está disponible: una ventana en el frente de la buhardilla, ni buhardillas en faldones dibujados a mano.

## Lo que se guarda

Las cubiertas son cubiertas IFC formadas por una losa de cubierta por faldón, muros de hastial, un elemento de tapacanes y una cobertura de sofito. La cubierta lleva la longitud de sus cumbreras, limatesas, limahoyas, aleros y rampantes, y sus áreas, para las mediciones. Un faldón de cubierta es una cubierta IFC con una sola losa.

:::tip
Deshacer revierte cualquier cambio de cubierta en un solo paso, incluido un preajuste que cambia todos los muros.
:::
