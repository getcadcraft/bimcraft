---
title: Cambiar un ítem colocado, y actualizar ítems de la biblioteca
summary: Reemplazá un ítem de la biblioteca colocado por otro, manteniendo su lugar y su número de ítem, y revisá en Biblioteca si hay versiones nuevas de todo lo que hay en el modelo.
keywords: cambiar, reemplazar, sustituir, actualizar, versión nueva, buscar actualizaciones, biblioteca, retirado, cambio de licencia, número de ítem
from: 8bdfe01d
---

## Mba'épa oñemboguáta

Cambiá de opinión sobre un ítem sin volver a moverlo, y mantené al día los ítems de la biblioteca de un modelo.

## Cambiá un ítem

1. Haga clic en un ítem de biblioteca colocado en el modelo.
2. En {{ui:Propiedades}}, haga clic en {{ui:Cambiar ítem…}} en el recuadro **Ítem de biblioteca**. Se abre la pestaña {{ui:Biblioteca}}.
3. Buscá el ítem nuevo y haga clic en su tarjeta.
4. Haga clic en {{ui:Cambiar … por este}}.

El elemento mantiene su lugar, giro, piso, número de ítem, cantidad y notas. Su tipo, forma y datos del ítem cambian por los del ítem nuevo. Los ítems colocados de la misma manera comparten un tipo, como al colocarlos.

Si el ítem tiene variantes (ver [Place and swap a library item that has variants](topic:library-variants)), al cambiarlo se listan sus otras variantes arriba de la pestaña {{ui:Biblioteca}}: un clic para cada una.

Cuando el ítem nuevo es una cosa de otro tipo, por ejemplo un lavatorio en lugar de una mesa, la clase IFC del elemento cambia para coincidir (aquí, de elemento de mobiliario a terminal sanitario), para que otros programas lo planifiquen bien. Sigue siendo el mismo elemento, con el mismo GlobalId, así que los vínculos hacia él siguen funcionando. {{key:Mod+Z}} devuelve la clase anterior junto con el ítem anterior.

## Buscá actualizaciones

1. Haga clic en {{ui:Actualizaciones}} en la barra de herramientas (o en {{ui:Buscar actualizaciones}} en el recuadro de un ítem de biblioteca).
2. Leé la lista: cada ítem de Biblioteca del modelo con su versión en el modelo, la última versión y un estado: **Al día**, **Versión nueva**, **Retirado** o **No encontrado**. También indica qué cambió (geometría, datos, licencia o una corrección).
3. Haga clic en {{ui:Actualizar}} en una fila, o en {{ui:Actualizar todo}}.

## Qué deberías ver

- "Actualizadas *n* colocaciones. Se mantienen lugares, números de ítem, cantidades y notas."
- Líneas "Actualizado: *ítem*" en la lista de cambios. {{key:Mod+Z}} deshace cada una.

## Para tener en cuenta

- Solo se pueden revisar los ítems que vienen de la Biblioteca. Los ítems de archivos no tienen id de biblioteca.
- Cuando cambió una licencia, la copia que ya colocaste mantiene la licencia con la que llegó hasta que la actualices.
- Un ítem **Retirado** no se ofrece para nuevas colocaciones. Uno retirado por motivos de derechos de autor no se puede descargar de ninguna forma; reemplazalo con {{ui:Cambiar ítem…}}.
- Una variante colocada sigue siendo esa variante si la versión nueva del ítem todavía la tiene; si no, toma la variante predeterminada del ítem.
- Al buscar actualizaciones solo se envían los ids de los ítems y sus versiones, nunca tu modelo.
