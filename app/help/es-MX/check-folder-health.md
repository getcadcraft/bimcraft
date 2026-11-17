---
title: Comprobar una carpeta en busca de copias dañadas, vínculos faltantes y sobrantes
summary: Use el informe de la carpeta para encontrar archivos de modelo cortados, elegir la copia de respaldo completa más reciente, ver qué vínculos faltan y detectar archivos de bloqueo y temporales.
keywords: comprobación de salud, dañado, corrupto, incompleto, truncado, respaldo, vínculos faltantes, xref faltante, auditoría, sobrantes, archivos de bloqueo, dwl, bak, entrega
from: 3025a539
---

## Qué hará

Compruebe una carpeta de proyecto antes de entregarla o de empezar a trabajar en ella: ¿está completo cada modelo?, ¿cuál es la última copia buena? y ¿están todos los archivos vinculados?

## Pasos: copias dañadas

1. Abra la carpeta del proyecto. Vea [Abrir una carpeta completa de proyecto](topic:open-project-folder).
2. Lea las notas debajo del nombre de la carpeta. "2 archivos están incompletos o no se pueden leer. Vea los modelos abajo." significa que hay algo que revisar.
3. En **Modelos**, mire la columna **Estado**. **Completo** está bien. Un "1 incompleto" en ámbar significa que una copia está mal pero otra está sana. Un **Incompleto** en rojo significa que no se encontró ninguna copia sana.
4. Abra **Todas las … copias** bajo un modelo con problemas. Enumera el archivo principal y cada respaldo numerado, del más reciente al más antiguo, con tamaño, fecha y estado.
5. Lea la nota sobre la lista, por ejemplo: "Tower.rvt está incompleto (183.2 MB, debería ser de al menos 214.0 MB). La tarjeta muestra la copia completa más reciente, Tower.0012.rvt (3 de marzo de 2025)."
6. Haga clic en la copia que quiere abrir. Solo se pueden seleccionar las copias completas.

## Qué hace la comprobación de salud

Cada copia de cada modelo recibe una revisión rápida de su encabezado, de 512 bytes cada una, así que incluso una carpeta con modelos grandes se revisa en segundos. Un archivo cuyo propio índice apunta más allá de su final se cortó mientras se copiaba, subía o sincronizaba. Un archivo de un disco en la nube que aún está "solo en línea" se ve igual.

La tarjeta de cada modelo se lee del archivo principal cuando está sano, y del respaldo sano más reciente cuando no lo está.

## Pasos: vínculos faltantes

1. Busque la nota "*n* archivos vinculados no están en esta carpeta." debajo del nombre de la carpeta.
2. Desplácese hasta **Archivos vinculados y referenciados**. Los vínculos faltantes aparecen primero.
3. Lea la columna **Dónde** de cada vínculo:
   - **En esta carpeta**: encontrado en la ruta que guardó el modelo.
   - **Se encontró con el mismo nombre**: hay un archivo con el mismo nombre en otra parte de la carpeta. Compruebe que sea el correcto.
   - **Archivo de biblioteca**: una tabla de códigos de notas clave o de ensamblajes. Estas vienen con el programa en cada computadora, así que no se espera que estén en la carpeta.
   - **No está en esta carpeta**: no se encontró en ninguna parte de la carpeta.
4. Lea **Usado por** para ver qué modelos vinculan cada archivo.

BimCraft busca cada vínculo primero por su ruta relativa, luego por el final de su ruta guardada (así que `\\servidor\obras\Torre\Cad\X-Refs\sitio.dwg` se encuentra en `X-Refs/sitio.dwg` cuando eligió la carpeta `Cad`), y después por el nombre del archivo en cualquier parte de la carpeta.

## Pasos: sobrantes

1. Desplácese hasta **Apartado** al final del informe.
2. Lea las tres líneas que pueden aparecer:
   - Carpetas de mantenimiento (`*_backup`, `*_log`, `Revit_temp`): no se leen.
   - Sobrantes de bloqueo, registro y respaldo: archivos como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Los dejan programas que se cerraron de forma inesperada o que estaban abiertos cuando se copió la carpeta. Por lo general se pueden borrar con seguridad cuando nadie tiene abiertos los archivos.
   - Otros archivos: todo lo demás que BimCraft no lee.

## Errores comunes

- **Borrar el archivo principal dañado antes de guardar una buena copia de respaldo.** Copie primero el respaldo completo más reciente y luego ocúpese del archivo dañado.
- **Confiar a ciegas en "Se encontró con el mismo nombre".** Dos planos distintos pueden tener el mismo nombre. Si tiene dudas, abra ambos.
- **Pensar que un archivo de biblioteca faltante es un problema.** Las tablas de notas clave y de ensamblajes viven con el programa en cada computadora.
- **El conteo de archivos cambia entre navegadores.** En Firefox y Safari, {{ui:Abrir una carpeta}} entrega todos los archivos, incluidos los que están dentro de carpetas de mantenimiento, así que el conteo (y el límite de 20,000 archivos) los incluye. Arrastrar la carpeta al programa los omite, como hacen Chrome y Edge. El informe es igual en lo demás.
