---
title: Cubiertas: una pendiente por cada muro, hastiales, tejados de una vertiente y faldones
summary: Ajuste cada muro bajo una cubierta como inclinado, hastial o ninguno, use los preajustes de cuatro aguas, hastiales y una vertiente, eleve la cubierta con la altura de solera, añada tabla de alero y sofito, y dibuje faldones sueltos donde la cubierta automática no encaje.
keywords: cambiar cubierta, editar cubierta, cubierta seleccionada, propiedades de cubierta, deshacer cubierta, cubierta, pendiente, por muro, hastial, testero, vertiente, cumbrera, altura de solera, talón, tabla de alero, sofito, alero, borde inclinado, vuelo, faldón, porche, buhardilla, buhardilla a dos aguas, buhardilla de una vertiente
from: 096084a7
---

## Qué hará

Dé forma a la cubierta a partir de los muros que la sostienen. Cada muro tiene su propio ajuste, así que una misma cubierta puede ser a cuatro aguas en el frente, tener hastiales en los extremos y terminar a ras contra un muro más alto en la parte de atrás. Para un porche o cualquier cara que la cubierta automática no pueda hacer, dibuje un faldón por sus esquinas.

## Colocar una cubierta

1. En el nivel cuyos muros soportan la cubierta, haga clic en {{ui:Cubierta}}.
2. Escriba la **Pendiente** (`6/12`, o grados como `30`) y el **Vuelo**.
3. Elija un preajuste: **Cubierta a cuatro aguas**, **Hastiales en los lados cortos**, **Hastiales en los lados largos**, o **Una vertiente** (el lado más cercano al puntero es el alero bajo; los otros lados son hastiales).
4. Deje marcado **Tabla de alero y sofito** para aleros cerrados con tabla de alero, o desmárquelo para un borde de cubierta sin cerrar.
5. Señale dentro del edificio: el alero, la cumbrera, las limatesas y las limahoyas aparecen en el plano. Haga clic.

Cualquier contorno sirve: formas en L, en T, en U y en cruz, esquinas en ángulo y entrantes. Las limatesas, las cumbreras y las limahoyas se determinan donde se encuentran los faldones.

## Un muro a la vez

Seleccione la cubierta (en el nivel superior a los muros, haga clic dentro de su contorno) y busque **Cada muro** en **Propiedades**. Al señalar una fila se marca ese muro en el plano.

- **Inclinado**: el muro tiene un faldón inclinado encima. Escriba su propia pendiente junto a él, por ejemplo `12/12` para hastiales más empinados en una cubierta de `6/12`.
- **Hastial**: la cubierta termina en un extremo vertical sobre ese muro, el muro se rellena hasta la cubierta, y la cubierta sobrepasa el muro en el **Vuelo del hastial**.
- **Ninguno (a ras)**: la cubierta termina en ese muro sin vuelo y sin muro de hastial, para una cubierta contra un muro más alto.

La lista **Extremos**, en la parte superior, ajusta todos los muros a la vez; **Ajustar por muro** aparece cuando los muros ya no coinciden con un preajuste.

## Cambiar una cubierta que ya colocó

Seleccione la cubierta y **Propiedades** muestra los mismos ajustes que la herramienta Cubierta: **Pendiente**, **Vuelo**, **Vuelo del hastial**, **Altura de solera**, **Altura de tabla**, **Alero cerrado** y **Espesor**. Cada cambio se ve al instante en el plano y en 3D, con las mismas comprobaciones que la herramienta (se rechaza una pendiente de 80 grados o más, y también un ajuste que no pueda formar una cubierta). Escriba un valor y presione {{key:Enter}}, o salga del campo.

Cada cambio es un paso de deshacer. Varios cambios seguidos en el mismo campo (escriba `6/12`, luego `7/12`, luego `8/12`) se unen en un solo paso, así que un {{key:Ctrl}}+{{key:Z}} devuelve lo que la cubierta tenía antes de la serie; cambiar otro campo inicia un paso nuevo.

## Altura de solera, tabla de alero y sofito

- **Altura de solera** es donde los faldones se encuentran con la parte exterior de los muros, medida desde el piso del nivel. Déjela en blanco para asentar la cubierta sobre la parte superior de los muros; escriba un valor mayor para un talón elevado.
- **Altura de tabla** es la tabla a lo largo de los aleros y por los bordes inclinados. Escriba `0` para no tener ninguna.
- **Alero cerrado** pone un sofito horizontal bajo cada alero, desde el muro hasta la parte trasera de la tabla.

Cada faldón se encuentra con su muro a la altura de solera, así que los muros con pendientes distintas mantienen una sola línea de solera, y sus aleros terminan a alturas diferentes, como se armarían en obra.

## Dibujar un faldón de cubierta

1. En el nivel sobre el que se apoya el faldón, abra {{ui:Compilación}} y elija {{ui:Faldón de cubierta}}.
2. Escriba la **Pendiente** y, si no es la parte superior de los muros, la **Altura del alero**.
3. Haga clic en las esquinas. El primer lado que dibuje es el alero; el faldón sube desde él hacia el resto de la forma.
4. Haga clic de nuevo en la primera esquina, haga doble clic, o presione {{key:Enter}} para terminar. {{key:Esc}} descarta las esquinas.

Un faldón no sigue a los muros. Seleccione el faldón en el nivel superior (haga clic dentro de él) para cambiar su pendiente, su altura de alero o su espesor, o presione {{key:Delete}} para eliminarlo.

## Agregar una buhardilla

1. Muestre el nivel en el que está la cubierta.
2. Abra {{ui:Compilación}} y elija {{ui:Buhardilla}}.
3. En la fila de opciones, elija **Tipo de buhardilla** (**A dos aguas** o **De una vertiente**) y ajuste el **Ancho**, el **Muro frontal** (la altura del muro frontal desde la parte alta de la cubierta hasta el alero de la buhardilla), la **Pendiente** y el **Vuelo**.
4. Haga clic sobre una cara de la cubierta donde va el centro del frente de la buhardilla.

BimCraft construye el muro frontal, dos muros de carrillo y la cubierta de la buhardilla, y la prolonga hacia atrás hasta encontrar la cubierta. Una buhardilla a dos aguas tiene dos faldones que se unen en una cumbrera. Una buhardilla de una vertiente tiene un solo faldón, que debe ser menos empinado que la cubierta. La cubierta bajo la buhardilla se recorta. La buhardilla sigue a la cubierta cuando se mueven los muros.

Seleccione la buhardilla para cambiar su tipo, su ancho, su muro frontal, su pendiente o su vuelo en **Propiedades**. {{key:Delete}} la elimina y vuelve a cerrar la cubierta. Debe caber en una sola cara de la cubierta, lejos de las limatesas, las limahoyas y la cumbrera, y solo las cubiertas hechas con la herramienta {{ui:Cubierta}} admiten buhardillas, no los faldones dibujados a mano. Todavía no está construido: una ventana en el frente de la buhardilla, ni buhardillas en faldones dibujados a mano.

## Lo que se guarda

Las cubiertas son cubiertas IFC formadas por una losa por faldón, muros de hastial, una pieza de tabla de alero y un recubrimiento de sofito. La cubierta lleva sus longitudes de cumbrera, limatesa, limahoya, alero y borde inclinado, y sus áreas, para las cuantificaciones. Un faldón de cubierta es una cubierta IFC con una sola losa.

:::tip
Deshacer revierte cualquier cambio de cubierta en un solo paso, incluido un preajuste que cambia cada muro.
:::
