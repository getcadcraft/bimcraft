---
title: Cambiar propiedades IFC y guardar una copia editada
summary: Cambie el nombre, la etiqueta, la descripción o el valor de una propiedad de un elemento, deshaga cambios y descargue un nuevo archivo IFC mientras el original queda como estaba.
keywords: editar, cambiar, propiedades, parámetros, etiqueta, nombre, renombrar, marca, guardar como, descargar, deshacer, copiar, ifc, escribir
from: f8035d62
---

## Qué hará

Corrija datos en un modelo IFC: renombre un elemento, corrija su etiqueta, cambie el valor de una propiedad. Luego guarde un nuevo archivo IFC con sus cambios. El archivo que abrió nunca se modifica.

## Qué puede cambiar

| Campo | Editable |
|---|---|
| Nombre, Tipo de objeto, Etiqueta, Descripción | Sí |
| Valores de propiedad simples (texto, números, Sí/No) | Sí |
| Propiedades de tipo (conjuntos marcados "(type)") | Sí, y el cambio se aplica a todos los elementos de ese tipo |
| Tipo, GlobalId, Línea | No |
| Cantidades (longitudes, áreas, volúmenes, conteos) | No |
| Listas, enumeraciones y otros valores de varias partes | No |
| Geometría, posición, agregar o eliminar elementos | No |

## Pasos

1. Abra un modelo IFC y haga clic en el elemento que quiere cambiar.
2. En el panel {{ui:Properties}}, haga clic en el valor que quiere cambiar. Se convierte en un cuadro de texto. Un valor vacío se muestra como *vacío*.
3. Escriba el nuevo valor.
4. Presione {{key:Enter}}, o haga clic en otra parte, para conservarlo. Presione {{key:Esc}} para cancelar.
5. Revise el valor: ahora está en negrita con una barra azul a su lado, que marca un valor editado.
6. Revise la sección {{ui:Changes}} a la izquierda: el cambio aparece como *elemento*: *campo*, valor anterior a valor nuevo.
7. Repita con otros valores u otros elementos.
8. Haga clic en {{ui:Save as IFC}} (muestra cuántos cambios esperan, por ejemplo "Guardar como IFC (3)"), o presione {{key:Mod+S}}.
9. Busque "*nombre original* (editado).ifc" en su carpeta de descargas.

## Qué debe ver

La barra de estado dice "Se guardó *nombre* (editado).ifc con *n* cambios (… bytes). Su archivo original no cambió." La lista {{ui:Changes}} se vacía, lista para la siguiente ronda.

## Tipos de valores

- **Texto**: lo que escriba se conserva tal cual. Borrar Nombre, Tipo de objeto, Etiqueta o Descripción elimina el valor.
- **Números**: escriba un número simple, como `2.4` o `1200`, en las unidades propias del archivo. Sin símbolos de unidad. Cualquier otra cosa muestra "Escriba un número."
- **Números enteros** (conteos, enteros): "Escriba un número entero." si escribe un decimal.
- **Sí/No**: el valor pasa a ser un menú con Sí y No.

Cada valor conserva su tipo IFC, así que un número sigue siendo número y otros programas lo leen correctamente.

## Deshacer

1. Haga clic en {{ui:Undo}} en la sección {{ui:Changes}}, o presione {{key:Mod+Z}} mientras no escribe en un campo.
2. Repita para deshacer más. Cada deshacer quita el cambio más reciente.

No puede deshacer más allá de un guardado: después de guardar, la lista empieza de nuevo. El archivo guardado conserva todo.

## Por qué su edición cambia un solo elemento

Los exportadores ahorran espacio compartiendo datos. Un conjunto de propiedades puede compartirlo veinte puertas, y un valor ("Clasificación de fuego: 60 min") puede aparecer en noventa conjuntos. Si BimCraft simplemente cambiara el valor compartido, cada elemento que lo comparte cambiaría también.

Así que BimCraft copia antes de escribir:

- Si el conjunto de propiedades que edita está compartido con otros elementos, su elemento recibe su propia copia del conjunto, y solo cambia la copia.
- Si el valor está compartido con otros conjuntos, su conjunto recibe su propia copia del valor.

Los vecinos conservan sus datos anteriores. Esto se llama *copia al escribir*. Agrega unas pocas entradas pequeñas al archivo, que todo programa IFC lee con normalidad.

**Las propiedades de tipo son la excepción, a propósito.** Un conjunto marcado "(type)" pertenece al tipo del elemento, y en IFC cada elemento de ese tipo lo lee desde ahí. Cambiarlo cambia el tipo, así que todos los elementos del tipo muestran el nuevo valor. La lista {{ui:Changes}} marca esos cambios con "(type)". Vea [Cambiar una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance).

## Advertencias antes de perder trabajo

- Abrir otro archivo con cambios sin guardar pregunta "Tiene *n* cambios sin guardar en *archivo*. ¿Descartarlos?" Haga clic en Cancelar para seguir trabajando, y luego guarde.
- Cerrar o recargar la pestaña con cambios sin guardar hace que el navegador pregunte si desea salir.

## Errores comunes

- **Escribir unidades.** `2400 mm` se rechaza. Escriba `2400`.
- **Cambiar una propiedad de tipo cuando quería cambiar un elemento.** Busque la nota "(type)" antes de escribir. Si quiere que un elemento sea distinto, cambie una propiedad de la instancia, o su Etiqueta o Nombre.
- **Esperar que el archivo original cambie.** Guardar siempre descarga un archivo nuevo. Reemplace el original usted mismo si eso es lo que quiere, y conserve una copia.
- **Presionar {{key:Mod+S}} sin cambios.** BimCraft solo guarda cuando hay algo que guardar; de lo contrario puede abrirse la función "Guardar página" del navegador. Ciérrela.
- **Guardar dos veces y esperar dos archivos pequeños.** Cada guardado contiene todas las ediciones desde que abrió el modelo.
- **Esperar que las ediciones vuelvan a un archivo de proyecto.** BimCraft solo escribe IFC. Lleve el IFC editado a su programa de autor como importa cualquier IFC.
