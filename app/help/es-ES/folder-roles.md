---
title: Informe de carpeta: funciones, estados y vínculos
summary: Cada etiqueta del informe de carpeta, qué significa y cómo se elige la sugerencia Empezar aquí.
keywords: informe de carpeta, funciones, estado, completo, incompleto, ilegible, vinculado, referencia, plantilla, central, familia, solo copias de seguridad, empezar aquí, estado del vínculo
from: b35bdd10
---

## Estado de la copia

Cada copia de un modelo, tanto el archivo principal como las copias de seguridad numeradas, recibe una comprobación de su cabecera.

| Etiqueta | Significado |
|---|---|
| **Completa** | La cabecera y el índice del archivo caben dentro del archivo |
| **Incompleta** | El archivo es más corto de lo que indica su propio índice: se cortó al copiarlo, subirlo o sincronizarlo, o es un archivo en la nube que sigue "solo en línea" |
| **Ilegible** | El archivo no es un archivo compuesto válido, o no se pudo leer |

En la columna **Estado** un modelo muestra **Completa**; un "*n* incompletas" en ámbar cuando al menos una copia está mal pero otra está en buen estado, o **Incompleta** en rojo cuando ninguna copia está en buen estado.

## Copias de seguridad

Los archivos llamados `Name.0001.rvt`, `Name.0002.rvt` y así sucesivamente son copias de seguridad numeradas de `Name.rvt`. Se agrupan bajo su modelo, de la más reciente a la más antigua, en **Todas las … copias**. La ficha se lee del archivo principal cuando está completo; si no, de la copia completa más reciente ("la más reciente completa").

## Funciones

Se muestran en cursiva bajo el nombre de un modelo.

| Función | Significado |
|---|---|
| Vinculado por *otro modelo*: de referencia | Otro modelo de la carpeta lo vincula, así que es probablemente de referencia de otra persona, como el modelo de un consultor |
| Plantilla o archivo sin título | Un nombre como Blank, Template, Default, Untitled o Project1: un punto de partida, o un archivo que nunca se llegó a nombrar bien |
| Modelo central | Un modelo central compartido. El trabajo se hace en una copia local, no aquí |
| Familia (una pieza) | Un archivo `.rfa` o `.rft`: un componente, no el proyecto |
| Solo copias de seguridad | El archivo principal ya no existe y solo quedan copias numeradas |

## Cómo se elige Empezar aquí

BimCraft aplica el razonamiento que seguiría un usuario experimentado:

1. Los candidatos son archivos de proyecto legibles (`.rvt`, `.rte`) que no están vinculados por otro modelo ni son plantillas.
2. Los modelos centrales y los que solo tienen copias de seguridad cuentan únicamente cuando no hay nada mejor.
3. Entre los candidatos, gana el que se guardó más recientemente.

El cuadro enumera sus motivos, y avisa cuando un archivo que parece la opción obvia está dañado, cuando otros modelos son de referencia y cuando la elección es un modelo central. Es una estimación; compruébelo con quien trabajó por última vez en el proyecto.

## Estado del vínculo

| Etiqueta | Significado |
|---|---|
| **En esta carpeta** | Encontrado en la ruta relativa guardada, o al final de la ruta completa guardada dentro de la carpeta |
| **Mismo nombre encontrado** | No está en su ruta, pero hay un archivo con el mismo nombre en la carpeta. Compruebe que es el correcto |
| **Archivo de biblioteca** | Una tabla de notas clave o de códigos de ensamblaje. Estas vienen con el programa en cada equipo |
| **No está en esta carpeta** | No se encontró en ningún punto de la carpeta |

La columna **Vínculos encontrados** en **Modelos** indica cuántos de los vínculos de un modelo se encontraron, de los que se esperaban en la carpeta (los archivos de biblioteca no cuentan).

## Excluidos

| Línea | Significado |
|---|---|
| Carpetas de mantenimiento de Revit (no se leen) | Carpetas `*_backup`, `*_log` y `Revit_temp`, además de las carpetas ocultas y `__MACOSX` |
| Restos de bloqueo, registro y copia | Archivos `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` y `.slog` |
| Otros archivos | Todo lo demás (los primeros 40 se nombran) |
