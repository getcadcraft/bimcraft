---
title: Colocar y sustituir un elemento de la biblioteca que tiene variantes
summary: Algunos elementos de la biblioteca tienen varios tamaños u opciones. Elija la variante antes de colocarlo, vea cuál es un elemento colocado, sustitúyala por otra variante con un clic y consérvela al actualizar el elemento.
keywords: variante, variantes, tamaños, opciones, configuración, biblioteca, librarycraft, colocar, sustituir, configurador, familia, tipo, actualizar, puertos
from: c05f0af3
---

## Qué va a hacer

Coloque un elemento de la biblioteca con el tamaño u opción que necesita, y cambie de opinión después sin volver a colocarlo. Un elemento con variantes es un único elemento de la biblioteca (un nombre, una licencia, una versión) con una tabla de las variantes en que se presenta: por ejemplo, una placa de montaje en Pequeña, Mediana y Grande, o la misma placa sin agujeros.

## Elija la variante y colóquela

1. Abra la pestaña {{ui:Biblioteca}} y pulse la tarjeta del elemento.
2. Bajo el nombre, la opción {{ui:Variante}} lista cada variante con su tamaño. La predeterminada del elemento se elige primero.
3. Elija una. La planta, el tamaño y el cuerpo 3D siguen su elección.
4. Pulse {{ui:Colocar en el plano}} (o {{ui:Colocar en el modelo}} en la vista 3D) y colóquelo como cualquier otro elemento: consulte [Colocar equipos y mobiliario de la biblioteca](topic:place-from-library).

El elemento colocado recibe el nombre del elemento y de la variante, por ejemplo *Placa de montaje — Grande*, para que la tabla de {{ui:Equipos}} y el árbol los distingan. Cada variante es su propio tipo IFC: si coloca dos veces la misma variante, comparten un tipo; una variante distinta tiene el suyo.

## Ver qué variante es un elemento colocado

Seleccione el elemento. En {{ui:Propiedades}}, el cuadro **Elemento de la biblioteca** tiene una línea **Variante**. El IFC la guarda en `CadCraft_LibraryItem`: `Variant` (el identificador de la variante), `VariantName` y `VariantValues` (los valores de opción, como texto), para que otros programas puedan leerla.

## Sustituir por otra variante

1. Seleccione el elemento colocado y pulse {{ui:Sustituir elemento…}} en el cuadro **Elemento de la biblioteca**. Se abre la pestaña {{ui:Biblioteca}}.
2. En la parte superior, **Otras variantes de** *el elemento* lista cada variante con su tamaño. La colocada está marcada y no se puede elegir.
3. Pulse {{ui:Sustituir por …}} en la variante que quiera.

El elemento conserva su posición, giro, planta, número de elemento, cantidad y notas; su tipo, forma y datos cambian a los de la otra variante. {{key:Mod+Z}} devuelve la anterior. Sigue pudiendo elegir cualquier otro elemento de la lista inferior en lugar de esta variante, como antes: consulte [Sustituir un elemento colocado y actualizar elementos de la biblioteca](topic:swap-and-update-library-items).

## Copiar, pegar y actualizaciones

- Una copia de una variante colocada es la misma variante: en este modelo, y en otro modelo abierto en la misma pestaña del navegador, mediante {{ui:Copiar}} y {{ui:Pegar}}.
- **Las actualizaciones** conservan la variante: si la nueva versión del elemento todavía la tiene, la colocación pasa a ser esa variante de la nueva versión. Si la nueva versión ya no la tiene, la colocación toma la variante predeterminada del elemento.

## Conviene saber

- Solo algunos elementos de la biblioteca tienen variantes. Las tarjetas no lo indican; verá la opción {{ui:Variante}} al abrir uno.
- Un elemento puede listar **puertos** (puntos de conexión para tuberías y conductos) por variante. La pestaña Biblioteca muestra cuántos tiene una variante. Todavía **no** se escriben en el IFC cuando coloca el elemento desde la pestaña Biblioteca.
- Una variante sin cuerpo 3D se coloca con una caja provisional, como cualquier símbolo 2D.
- Los tamaños de la opción están en milímetros, tal como los escribe la biblioteca.
