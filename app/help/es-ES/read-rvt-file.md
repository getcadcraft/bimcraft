---
title: Leer un archivo de proyecto o de familia
summary: Abra un archivo .rvt, .rfa, .rte o .rft y lea su versión, trabajo compartido, información del proyecto, parámetros de familia, vínculos e imagen de vista previa, sin el programa que lo creó.
keywords: rvt, rfa, rte, rft, archivo de proyecto, familia, versión, qué versión, compilación, trabajo compartido, central, información del proyecto, vista previa, miniatura, vínculos
from: df3600e1
---

## Qué va a hacer

Descubra qué contiene un archivo de proyecto o de familia sin abrirlo en Revit: qué versión lo guardó, si está en trabajo compartido, la información del proyecto y a qué se vincula. Es útil cuando llega un archivo de otra persona y necesita saber en qué versión abrirlo.

## Pasos

1. Pulse {{ui:Choose a file}}.
2. Elija un archivo `.rvt`, `.rfa`, `.rte` o `.rft`.
3. Espere un momento. La línea de estado dice "Leyendo el archivo…" y después "Abierto *nombre del archivo*".
4. Mire la parte superior de la ficha: la imagen de vista previa guardada en el archivo, el tipo de archivo y la versión en que se guardó, y el nombre del proyecto.
5. Desplácese hacia abajo para leer las secciones de la ficha.

## Qué debe ver

La ficha central, con estas secciones cuando el archivo las contiene:

| Sección | Qué le indica |
|---|---|
| Archivo | Nombre, tamaño, tipo (proyecto, plantilla de proyecto, familia o plantilla de familia), la versión y la compilación en que se guardó, trabajo compartido, la ruta del modelo central, dónde se guardó por última vez, quién lo guardó, idioma y GUID del documento |
| Información del proyecto | Los campos propios del proyecto, como nombre, número, cliente, dirección y estado. Los campos que siguen con sus valores predeterminados de proyecto nuevo se omiten. |
| Familia, Familia: … | En una familia: su nombre, categoría, versión, última actualización y sus parámetros, grupo por grupo |
| Archivos vinculados y referenciados | Cada modelo vinculado, vínculo CAD, imagen y tabla de palabras clave a la que apunta el archivo, con su ruta guardada |

A la izquierda, el panel {{ui:File}} repite los datos principales y añade **Leído**: cuánto del archivo leyó realmente BimCraft, normalmente unos 40 KB de un archivo de muchos megabytes. A la derecha, el panel {{ui:Properties}} indica que las propiedades de los elementos requieren el modelo 3D.

## Por qué no hay 3D

El modelo 3D y los elementos dentro de un archivo de proyecto se guardan en un formato no documentado. BimCraft lee solo las partes del archivo que están documentadas o son claramente legibles: la información del archivo, la información del proyecto, los datos de familia, la lista de vínculos y la imagen de vista previa. No adivina el resto. Para ver el modelo en 3D y leer las propiedades de los elementos, exporte IFC desde el programa que creó el archivo. Vea [Obtener un archivo de proyecto en 3D mediante IFC](topic:rvt-to-ifc).

## Errores habituales

- **Esperar 3D.** Vea la sección anterior.
- **Los vínculos solo muestran su ruta guardada.** Un archivo abierto por sí solo no puede comprobar si sus vínculos existen. Abra en su lugar la carpeta en la que está, y BimCraft marca cada vínculo como encontrado o no: [Abrir una carpeta de proyecto completa](topic:open-project-folder).
- **"Este archivo está incompleto…"** El archivo se cortó mientras se copiaba, subía o sincronizaba. Un archivo de un almacenamiento en la nube que todavía está como «solo en línea» también hace esto. BimCraft lo abre igualmente y muestra solo lo recuperado: un aviso ámbar en la parte superior de la ficha, una sección **Recuperado de este archivo** con las partes cuyos bytes están completos en el archivo, y **No está en el archivo** para el resto. No se rellena nada de la parte que falta, así que la versión, la imagen de vista previa o la información del proyecto pueden faltar cuando estaban guardados después del corte. Si incluso la lista de contenido del archivo quedó cortada, no se puede abrir nada. Copie el original de nuevo y vuelva a abrirlo para tener el archivo completo.
- **"Sin imagen de vista previa en este archivo".** Algunos archivos se guardan sin ella. Es normal.
- **Abrir una copia de seguridad por error.** Los archivos con nombres como `Tower.0004.rvt` son copias de seguridad numeradas. Al abrir la carpeta, se agrupan con su modelo.
