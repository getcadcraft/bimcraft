---
title: Sustituir un elemento colocado y actualizar elementos de la biblioteca
summary: Reemplace un elemento de biblioteca colocado por otro conservando su lugar y su número de elemento, y revise Biblioteca para ver si hay versiones más nuevas de todo lo que contiene el modelo.
keywords: sustituir, reemplazar, sustituto, actualizar, versión más nueva, buscar actualizaciones, biblioteca, retirado, cambio de licencia, número de elemento
from: 8bdfe01d
---

## Qué hará

Cambie de opinión sobre un elemento sin volver a moverlo, y mantenga al día los elementos de biblioteca de un modelo.

## Sustituir un elemento

1. Haga clic en un elemento de biblioteca colocado en el modelo.
2. En {{ui:Propiedades}}, haga clic en {{ui:Sustituir elemento…}} en el recuadro **Elemento de biblioteca**. Se abre la pestaña {{ui:Biblioteca}}.
3. Busque el nuevo elemento y haga clic en su tarjeta.
4. Haga clic en {{ui:Sustituir … por este}}.

El elemento conserva su lugar, giro, nivel, número de elemento, cantidad y notas. Su tipo, forma y datos cambian por los del nuevo elemento. Los elementos colocados de la misma manera comparten un tipo, como al colocarlos.

Un elemento que tiene variantes (vea [Colocar y sustituir un elemento de biblioteca que tiene variantes](topic:library-variants)) enumera sus otras variantes en la parte superior de la pestaña {{ui:Biblioteca}} al sustituirlo: un clic por cada una.

Cuando el nuevo elemento es otro tipo de cosa, por ejemplo un lavabo en lugar de una mesa, la clase IFC del elemento cambia para coincidir (aquí, de elemento de mobiliario a terminal sanitario), para que otro software lo incluya correctamente en sus tablas. Sigue siendo el mismo elemento, con el mismo GlobalId, así que los vínculos hacia él siguen funcionando. {{key:Mod+Z}} restaura la clase anterior junto con el elemento antiguo.

## Buscar actualizaciones

1. Haga clic en {{ui:Actualizaciones}} en la barra de herramientas (o en {{ui:Buscar actualizaciones}} en el recuadro de un elemento de biblioteca).
2. Lea la lista: cada elemento de la biblioteca en el modelo, con su versión en el modelo, la versión más reciente y un estado: **Al día**, **Versión más nueva**, **Retirado** o **No encontrado**. También indica qué cambió (geometría, datos, licencia o una corrección).
3. Haga clic en {{ui:Actualizar}} en una fila, o en {{ui:Actualizar todo}}.

## Lo que debe ver

- "Se actualizaron *n* colocaciones. Se conservan los lugares, números de elemento, cantidades y notas."
- Líneas "Actualizado: *elemento*" en la lista de cambios. {{key:Mod+Z}} deshace cada una.

## Conviene saber

- Sólo se pueden revisar los elementos que vienen de la biblioteca. Los elementos de archivos no traen id de biblioteca.
- Cuando cambió una licencia, la copia que ya colocó conserva la licencia con la que llegó hasta que la actualice.
- Un elemento **Retirado** no se ofrece para nuevas colocaciones. Uno retirado por motivos de derechos de autor no puede descargarse; reemplácelo con {{ui:Sustituir elemento…}}.
- Una variante colocada sigue siendo esa variante cuando la versión más nueva del elemento aún la incluye; si no, toma la variante predeterminada del elemento.
- La revisión envía sólo los ids y las versiones de los elementos, nunca su modelo.
