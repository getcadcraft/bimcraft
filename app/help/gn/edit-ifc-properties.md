---
title: Cambiar propiedades IFC y guardar una copia editada
summary: Cambiá el nombre, la etiqueta, la descripción o el valor de una propiedad de un elemento, deshacé, y descargá un archivo IFC nuevo mientras el original queda como estaba.
keywords: editar, cambiar, propiedades, parámetros, etiqueta, nombre, renombrar, marca, guardar como, descargar, deshacer, copiar, ifc, escribir
from: f8035d62
---

## Lo que hará

Corregí datos de un modelo IFC: renombrá un elemento, arreglá su etiqueta, cambiá el valor de una propiedad. Después guardá un archivo IFC nuevo con tus cambios. El archivo que abriste nunca se toca.

## Qué podés cambiar

| Campo | Editable |
|---|---|
| Nombre, Tipo de objeto, Etiqueta, Descripción | Sí |
| Valores de propiedad simples (texto, números, Sí/No) | Sí |
| Propiedades de tipo (conjuntos marcados "(tipo)") | Sí, y el cambio se aplica a cada elemento de ese tipo |
| Tipo, GlobalId, Línea | No |
| Cantidades (longitudes, áreas, volúmenes, conteos) | No |
| Listas, enumeraciones y otros valores de varias partes | No |
| Geometría, posición, agregar o eliminar elementos | No |

## Pasos

1. Abrí un modelo IFC y ojeclic el elemento que querés cambiar.
2. En el panel {{ui:Propiedades}}, ojeclic el valor que querés cambiar. Se convierte en un cuadro de texto. Un valor vacío se muestra como *vacío*.
3. Escribí el valor nuevo.
4. Presioná {{key:Enter}}, o ojeclic en otro lugar, para conservarlo. Presioná {{key:Esc}} para cancelar.
5. Mirá el valor: ahora está en negrita con una barra azul al lado, que marca un valor editado.
6. Mirá la sección {{ui:Cambios}} a la izquierda: el cambio aparece como *elemento*: *campo*, valor anterior a valor nuevo.
7. Repetí para otros valores u otros elementos.
8. Ojeclic {{ui:Guardar como IFC}} (muestra cuántos cambios esperan, por ejemplo "Guardar como IFC (3)"), o presioná {{key:Mod+S}}.
9. Buscá "*nombre original* (editado).ifc" en tu carpeta de descargas.

## Lo que deberías ver

La línea de estado dice "Guardado *nombre* (editado).ifc con *n* cambios (… bytes). Tu archivo original no cambió." La lista {{ui:Cambios}} se vacía, lista para la siguiente ronda.

## Tipos de valores

- **Texto**: lo que escribas se conserva tal cual. Borrar Nombre, Tipo de objeto, Etiqueta o Descripción quita el valor.
- **Números**: escribí un número simple, como `2.4` o `1200`, en las unidades propias del archivo. Sin símbolos de unidad. Cualquier otra cosa muestra "Use un número."
- **Números enteros** (conteos, enteros): "Use un número entero." si escribís un decimal.
- **Sí/No**: el valor pasa a ser un menú con Sí y No.

Cada valor conserva su tipo IFC, así que un número sigue siendo un número y otros programas lo leen bien.

## Deshacer

1. Ojeclic {{ui:Deshacer}} en la sección {{ui:Cambios}}, o presioná {{key:Mod+Z}} mientras no estás escribiendo en un campo.
2. Repetí para deshacer más. Cada deshacer quita el cambio más nuevo.

No podés deshacer más allá de un guardado: después de guardar, la lista empieza de nuevo. El archivo guardado conserva todo.

## Por qué tu edición cambia solo un elemento

Los exportadores ahorran espacio compartiendo datos. Un conjunto de propiedades puede ser compartido por veinte puertas, y un valor ("Resistencia al fuego: 60 min") puede aparecer en noventa conjuntos. Si BimCraft simplemente cambiara el valor compartido, cada elemento que lo comparte también cambiaría.

Por eso BimCraft copia antes de escribir:

- Si el conjunto de propiedades que editás es compartido con otros elementos, tu elemento recibe su propia copia del conjunto, y solo la copia cambia.
- Si el valor se comparte con otros conjuntos, tu conjunto recibe su propia copia del valor.

Los vecinos conservan sus datos anteriores. Esto se llama *copia al escribir*. Agrega unas pocas entradas pequeñas al archivo, que todo programa IFC lee normalmente.

**Las propiedades de tipo son la excepción, a propósito.** Un conjunto marcado "(tipo)" pertenece al tipo del elemento, y en IFC cada elemento de ese tipo lo lee desde allí. Cambiarlo cambia el tipo, así que cada elemento del tipo muestra el nuevo valor. La lista {{ui:Cambios}} marca estas ediciones con "(tipo)". Ver [Cambiar una propiedad de tipo para cada elemento de un tipo](topic:type-vs-instance).

## Advertencias antes de perder trabajo

- Abrir otro archivo mientras tenés cambios sin guardar pregunta "Tenés *n* cambios sin guardar en *archivo*. ¿Descartarlos?" Ojeclic Cancelar para seguir trabajando, y luego guardá.
- Cerrar o recargar la pestaña con cambios sin guardar hace que el navegador pregunte si querés salir.

## Errores comunes

- **Escribir unidades.** `2400 mm` se rechaza. Escribí `2400`.
- **Cambiar una propiedad de tipo cuando querías cambiar un solo elemento.** Buscá la nota "(tipo)" antes de escribir. Si querés que un elemento sea diferente, cambiá una propiedad de la instancia o su Etiqueta o Nombre.
- **Esperar que el archivo original cambie.** Guardar siempre descarga un archivo nuevo. Reemplazá el original vos mismo si eso es lo que querés, y guardá una copia.
- **Presionar {{key:Mod+S}} sin cambios.** BimCraft solo guarda cuando hay algo para guardar; si no, puede abrirse el "Guardar página" propio del navegador. Cerralo.
- **Guardar dos veces y esperar dos archivos chicos.** Cada guardado contiene todas las ediciones desde que abriste el modelo.
- **Esperar que las ediciones vuelvan a un archivo de proyecto.** BimCraft escribe solo IFC. Llevá el IFC editado a tu programa de autoría como importás cualquier IFC.
