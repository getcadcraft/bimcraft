---
title: Sustituir un elemento colocado y actualizar elementos de la biblioteca
summary: Reemplace un elemento de la biblioteca colocado por otro, conservando su lugar y su número de elemento, y busque en Biblioteca versiones más recientes de todo lo que hay en el modelo.
keywords: sustituir, reemplazar, sustituto, actualizar, versión más reciente, buscar actualizaciones, biblioteca, retirado, cambio de licencia, número de elemento
from: 8bdfe01d
---

## Qué hará

Cambie de idea sobre un elemento sin volver a moverlo, y mantenga al día los elementos de la biblioteca de un modelo.

## Sustituir un elemento

1. Haga clic en un elemento de la biblioteca colocado en el modelo.
2. En {{ui:Propiedades}}, haga clic en {{ui:Sustituir elemento…}} en el recuadro **Elemento de biblioteca**. Se abre la pestaña {{ui:Biblioteca}}.
3. Busque el nuevo elemento y haga clic en su tarjeta.
4. Haga clic en {{ui:Sustituir … por este}}.

El elemento conserva su lugar, su giro, su planta, su número de elemento, su cantidad y sus notas. Su tipo, su forma y sus datos cambian a los del nuevo elemento. Los elementos colocados de la misma manera comparten un tipo, como al colocarlos.

Un elemento que tiene variantes (consulte [Colocar y sustituir un elemento de biblioteca con variantes](topic:library-variants)) muestra sus otras variantes al principio de la pestaña {{ui:Biblioteca}} al sustituirlo: un clic para cada una.

Cuando el nuevo elemento es de otra clase, por ejemplo un lavabo en lugar de una mesa, la clase IFC del elemento cambia para coincidir (aquí, de elemento de mobiliario a terminal sanitario), para que otro software lo contabilice correctamente. Sigue siendo el mismo elemento, con el mismo GlobalId, así que los enlaces a él siguen funcionando. {{key:Mod+Z}} devuelve la clase anterior junto con el elemento antiguo.

## Buscar actualizaciones

1. Haga clic en {{ui:Actualizaciones}} en la barra de herramientas (o en {{ui:Buscar actualizaciones}} en el recuadro de un elemento de la biblioteca).
2. Lea la lista: cada elemento de la biblioteca del modelo con su versión en el modelo, la última versión y un estado: **Al día**, **Versión más reciente**, **Retirado** o **No encontrado**. También indica qué cambió (geometría, datos, licencia o una corrección).
3. Haga clic en {{ui:Actualizar}} en una fila, o en {{ui:Actualizar todo}}.

## Qué debe ver

- «Se han actualizado *n* colocaciones. Se conservan las posiciones, los números de elemento, las cantidades y las notas.»
- Líneas «Actualizado: *elemento*» en la lista de cambios. {{key:Mod+Z}} deshace cada una.

## Conviene saber

- Solo se pueden comprobar los elementos procedentes de la Biblioteca. Los elementos de archivos no llevan identificador de biblioteca.
- Cuando cambia una licencia, la copia que ya colocó conserva la licencia con la que llegó hasta que la actualice.
- Un elemento **Retirado** no se ofrece para nuevas colocaciones. Uno retirado por motivos de derechos de autor no se puede descargar en absoluto; sustitúyalo con {{ui:Sustituir elemento…}}.
- Una variante colocada sigue siendo esa variante cuando la versión más reciente del elemento todavía la incluye; si no, toma la variante predeterminada del elemento.
- La comprobación envía solo los identificadores y las versiones de los elementos, nunca su modelo.
