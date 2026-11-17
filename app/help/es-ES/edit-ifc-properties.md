---
title: Cambiar propiedades IFC y guardar una copia editada
summary: Cambie el nombre, la etiqueta, la descripción o un valor de propiedad de un elemento, deshaga cambios y descargue un archivo IFC nuevo mientras el original permanece como estaba.
keywords: editar, cambiar, propiedades, parámetros, etiqueta, nombre, renombrar, marca, guardar como, descargar, deshacer, copia, ifc, escribir
from: f8035d62
---

## Qué hará

Corrija datos de un modelo IFC: renombre un elemento, corrija su etiqueta, cambie un valor de propiedad. Después guarde un archivo IFC nuevo con sus cambios. El archivo que abrió nunca se toca.

## Qué puede cambiar

| Campo | Editable |
|---|---|
| Nombre, Tipo de objeto, Etiqueta, Descripción | Sí |
| Valores de propiedad individuales (texto, números, Sí/No) | Sí |
| Propiedades de tipo (conjuntos marcados "(tipo)") | Sí, y el cambio se aplica a todos los elementos de ese tipo |
| Tipo, GlobalId, Línea | No |
| Cantidades (longitudes, áreas, volúmenes, recuentos) | No |
| Listas, enumeraciones y otros valores de varias partes | No |
| Geometría, posición, añadir o eliminar elementos | No |

## Pasos

1. Abra un modelo IFC y haga clic en el elemento que quiere cambiar.
2. En el panel {{ui:Propiedades}}, haga clic en el valor que quiere cambiar. Se convierte en un cuadro de texto. Un valor vacío aparece como *vacío*.
3. Escriba el nuevo valor.
4. Pulse {{key:Enter}}, o haga clic en otro lugar, para conservarlo. Pulse {{key:Esc}} para cancelar.
5. Mire el valor: ahora está en negrita con una barra azul junto a él, que marca un valor editado.
6. Mire la sección {{ui:Cambios}} a la izquierda: el cambio aparece como *elemento*: *campo*, valor anterior a valor nuevo.
7. Repita para otros valores u otros elementos.
8. Haga clic en {{ui:Guardar como IFC}} (muestra cuántos cambios esperan, por ejemplo "Guardar como IFC (3)"), o pulse {{key:Mod+S}}.
9. Busque "*nombre original* (edited).ifc" en su carpeta de descargas.

## Qué debe ver

La línea de estado indica "Guardado *nombre* (edited).ifc con *n* cambios (… bytes). Su archivo original no se ha modificado." La lista {{ui:Cambios}} se vacía, lista para la siguiente ronda.

## Tipos de valores

- **Texto**: lo que escriba se conserva tal cual. Borrar Nombre, Tipo de objeto, Etiqueta o Descripción elimina el valor.
- **Números**: escriba un número sencillo, como `2.4` o `1200`, en las unidades propias del archivo. Sin símbolos de unidad. Cualquier otra cosa muestra "Use un número."
- **Números enteros** (recuentos, enteros): "Use un número entero." si escribe un decimal.
- **Sí/No**: el valor se convierte en un menú con Sí y No.

Cada valor conserva su tipo IFC, así que un número sigue siendo un número y otros programas lo leen correctamente.

## Deshacer

1. Haga clic en {{ui:Deshacer}} en la sección {{ui:Cambios}}, o pulse {{key:Mod+Z}} mientras no escribe en un campo.
2. Repita para deshacer más. Cada deshacer quita el cambio más reciente.

No puede deshacer más allá de un guardado: tras guardar, la lista empieza de nuevo. El archivo guardado conserva todo.

## Por qué su edición cambia solo un elemento

Los programas que exportan IFC ahorran espacio compartiendo datos. Un conjunto de propiedades puede compartirlo veinte puertas, y un valor ("Resistencia al fuego: 60 min") puede aparecer en noventa conjuntos. Si BimCraft cambiara simplemente el valor compartido, cambiaría también cada elemento que lo comparte.

Así que BimCraft copia antes de escribir:

- Si el conjunto de propiedades que edita se comparte con otros elementos, su elemento recibe su propia copia del conjunto, y solo cambia la copia.
- Si el valor se comparte con otros conjuntos, su conjunto recibe su propia copia del valor.

Los demás elementos conservan sus datos anteriores. Esto se llama *copia al escribir*. Añade unas pocas entradas pequeñas al archivo, que todos los programas IFC leen con normalidad.

**Las propiedades de tipo son la excepción, a propósito.** Un conjunto marcado "(tipo)" pertenece al tipo del elemento, y en IFC cada elemento de ese tipo lo lee desde allí. Cambiarlo cambia el tipo, así que todos los elementos del tipo muestran el nuevo valor. La lista {{ui:Cambios}} marca estas ediciones con "(tipo)". Vea [Cambiar una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance).

## Avisos antes de perder trabajo

- Abrir otro archivo con cambios sin guardar pregunta: "Tiene *n* cambios sin guardar en *archivo*. ¿Descartarlos?" Haga clic en Cancelar para seguir trabajando, y luego guarde.
- Cerrar o recargar la pestaña con cambios sin guardar hace que el navegador pregunte si quiere salir.

## Errores habituales

- **Escribir unidades.** `2400 mm` se rechaza. Escriba `2400`.
- **Cambiar una propiedad de tipo cuando quería un solo elemento.** Busque la nota "(tipo)" antes de escribir. Si quiere que un elemento sea distinto, cambie una propiedad de la instancia, o su Etiqueta o Nombre.
- **Esperar que cambie el archivo original.** Guardar siempre descarga un archivo nuevo. Reemplace usted el original si eso quiere, y guarde una copia.
- **Pulsar {{key:Mod+S}} sin cambios.** BimCraft solo guarda cuando hay algo que guardar; si no, puede abrirse el "Guardar página como" del navegador. Ciérrelo.
- **Guardar dos veces y esperar dos archivos pequeños.** Cada guardado contiene todas las ediciones desde que abrió el modelo.
- **Esperar que las ediciones vuelvan a un archivo de proyecto.** BimCraft solo escribe IFC. Lleve el IFC editado a su programa de autoría como importa cualquier IFC.
