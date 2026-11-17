---
title: Informe de carpeta: funciones, estados y vínculos
summary: Cada etiqueta del informe de carpeta, qué significa y cómo se elige la sugerencia de Empiece aquí.
keywords: informe de carpeta, funciones, estado, completo, incompleto, no legible, vinculado, fondo, inicial, central, familia, solo copias de seguridad, empiece aquí, estado del vínculo, copia de seguridad
from: b35bdd10
---

## Estado de las copias

Cada copia de un modelo (el archivo principal y las copias de seguridad numeradas) recibe una revisión de encabezado.

| Etiqueta | Significado |
|---|---|
| **Completo** | El encabezado y el índice del archivo caben dentro del archivo |
| **Incompleto** | El archivo es más corto de lo que indica su propio índice: se cortó al copiarse, subirse o sincronizarse, o es un archivo en la nube que sigue «solo en línea» |
| **No legible** | El archivo no es un archivo compuesto válido, o no se pudo leer |

En la columna **Estado**, un modelo muestra **Completo**; un «*n* incompletas» en ámbar cuando al menos una copia está dañada pero otra es correcta; o **Incompleto** en rojo cuando ninguna copia es correcta.

## Copias de seguridad

Los archivos llamados `Nombre.0001.rvt`, `Nombre.0002.rvt` y así sucesivamente son copias de seguridad numeradas de `Nombre.rvt`. Se agrupan bajo su modelo, de la más reciente a la más antigua, en **Todas las copias…**. La tarjeta se lee del archivo principal cuando está completo; si no, de la copia de seguridad completa más reciente («más reciente completa»).

## Funciones

Se muestran en cursiva bajo el nombre de un modelo.

| Función | Significado |
|---|---|
| Vinculado por *otro modelo*: fondo | Otro modelo de la carpeta lo vincula, así que probablemente es el fondo de otra persona, como el modelo de un consultor |
| Archivo inicial o sin título | Un nombre como Blank, Template, Default, Untitled o Project1: un punto de partida, o un archivo que nunca se nombró bien |
| Modelo central | Un modelo central compartido. El trabajo se hace en una copia local, no aquí |
| Familia (una pieza) | Un archivo `.rfa` o `.rft`: un componente, no el proyecto |
| Solo copias de seguridad | El archivo principal ya no existe y solo quedan copias de seguridad numeradas |

## Cómo se elige «Empiece aquí»

BimCraft aplica el razonamiento que seguiría un usuario experimentado:

1. Los candidatos son archivos de proyecto legibles (`.rvt`, `.rte`) que no están vinculados por otro modelo y no son archivos iniciales.
2. Los modelos centrales y los que solo tienen copias de seguridad cuentan únicamente cuando no hay nada mejor.
3. Entre los candidatos, gana el que se guardó más recientemente.

El cuadro enumera sus motivos y avisa cuando un archivo que parece la elección obvia está dañado, cuando otros modelos son de fondo y cuando la opción es un modelo central. Es una suposición; confirme con quien trabajó por última vez en el proyecto.

## Estado del vínculo

| Etiqueta | Significado |
|---|---|
| **En esta carpeta** | Encontrado en la ruta relativa guardada, o al final de la ruta completa guardada dentro de la carpeta |
| **Se encontró el mismo nombre** | No está en su ruta, pero hay un archivo con el mismo nombre en la carpeta. Verifique que sea el correcto |
| **Archivo de biblioteca** | Una tabla de notas clave o de códigos de ensamblaje. Estas vienen con el programa en cada computadora |
| **No está en esta carpeta** | No se encontró en ninguna parte de la carpeta |

La columna **Vínculos encontrados** en **Modelos** muestra cuántos de los vínculos de un modelo se encontraron, de los que se esperaban en la carpeta (los archivos de biblioteca no se cuentan).

## Archivos apartados

| Línea | Significado |
|---|---|
| Carpetas de mantenimiento de Revit (no se leen) | Carpetas `*_backup`, `*_log` y `Revit_temp`, además de carpetas ocultas y `__MACOSX` |
| Restos de bloqueo, registro y copias de seguridad | Archivos `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` y `.slog` |
| Otros archivos | Todo lo demás (se nombran los primeros 40) |
