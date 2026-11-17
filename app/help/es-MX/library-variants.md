---
title: Colocar y sustituir un elemento de biblioteca con variantes
summary: Algunos elementos de biblioteca vienen en varios tamaños u opciones. Elija la variante antes de colocarla, vea cuál es un elemento colocado, sustitúyala por otra variante con un clic y consérvela al actualizar el elemento.
keywords: variante, variantes, tamaños, opciones, configuración, biblioteca, librarycraft, colocar, sustituir, configurador, familia, tipo, actualizar, puertos
from: c05f0af3
---

## Qué hará

Coloque un elemento de biblioteca en el tamaño u opción que necesita y cambie de opinión después sin volver a colocarlo. Un elemento con variantes es un solo elemento de la biblioteca (un nombre, una licencia, una versión) con una tabla de las variantes en que viene: por ejemplo, una placa de montaje en Pequeña, Mediana y Grande, o la misma placa sin orificios.

## Elija la variante y colóquela

1. Abra la pestaña {{ui:Biblioteca}} y haga clic en la tarjeta del elemento.
2. Debajo del nombre, la opción {{ui:Variante}} enumera cada variante con su tamaño. La predeterminada del elemento se elige primero.
3. Elija una. El plano, el tamaño y la fila del cuerpo 3D siguen su elección.
4. Haga clic en {{ui:Colocar en el plano}} (o en {{ui:Colocar en el modelo}} en la vista 3D) y colóquelo como cualquier elemento: vea [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library).

El elemento colocado toma el nombre del elemento y de la variante, por ejemplo *Placa de montaje — Grande*, para que la cédula de {{ui:Equipos}} y el árbol los distingan. Cada variante es su propio tipo IFC: colocar dos veces la misma variante comparte un tipo; una variante distinta tiene el suyo.

## Vea qué variante es un elemento colocado

Seleccione el elemento. En {{ui:Propiedades}}, el cuadro **Elemento de biblioteca** tiene una línea **Variante**. El IFC la guarda en `CadCraft_LibraryItem`: `Variant` (el id de la variante), `VariantName` y `VariantValues` (los valores de opción, como texto), para que otros programas puedan leerla.

## Sustituya por otra variante

1. Seleccione el elemento colocado y haga clic en {{ui:Sustituir elemento…}} en el cuadro **Elemento de biblioteca**. Se abre la pestaña {{ui:Biblioteca}}.
2. Arriba, **Otras variantes de** *el elemento* enumera cada variante con su tamaño. La colocada está marcada y no se puede elegir.
3. Haga clic en {{ui:Sustituir por …}} en la variante que desee.

El elemento conserva su lugar, giro, nivel, número de elemento, cantidad y notas; su tipo, forma y datos cambian a la otra variante. {{key:Mod+Z}} devuelve la anterior. Aún puede elegir cualquier otro elemento de la lista de abajo, como antes: vea [Sustituir un elemento colocado y actualizar elementos de la biblioteca](topic:swap-and-update-library-items).

## Copiar, pegar y actualizaciones

- Una copia de una variante colocada es la misma variante: en este modelo y en otro modelo abierto en la misma pestaña del navegador, mediante Copiar y Pegar.
- **Las actualizaciones** conservan la variante: si la nueva versión del elemento aún la tiene, la colocación pasa a ser esa variante de la nueva versión. Si la nueva versión ya no la tiene, la colocación toma la variante predeterminada del elemento.

## Conviene saber

- Solo algunos elementos de biblioteca tienen variantes. Las tarjetas no lo indican; la opción {{ui:Variante}} aparece al abrir una.
- Un elemento puede enumerar **puertos** (puntos de conexión para tuberías y ductos) por variante. La pestaña Biblioteca muestra cuántos tiene una variante. Todavía no se escriben en el IFC cuando coloca el elemento desde la pestaña Biblioteca.
- Una variante sin cuerpo 3D se coloca con una caja de sustitución, como ocurre con cualquier símbolo 2D.
- Los tamaños de la opción están en milímetros, como los escribe la biblioteca.
