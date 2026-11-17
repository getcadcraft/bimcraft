---
title: Verificar una carpeta por copias dañadas, enlaces faltantes y archivos sobrantes
summary: Use el informe de la carpeta para encontrar archivos de modelo cortados, elegir la copia de respaldo completa más nueva, ver qué enlaces faltan y detectar archivos de bloqueo y temporales.
keywords: verificación de salud, dañado, corrupto, incompleto, truncado, respaldo, enlaces faltantes, xref faltante, auditoría, sobrantes, archivos de bloqueo, dwl, bak, entrega
from: 3025a539
---

## Mba'e rejapóta

Verifique una carpeta de proyecto antes de entregarla o empezar a trabajar en ella: ¿está completo cada modelo?, ¿cuál es la última copia buena? y ¿están todos los archivos vinculados?

## Pasos: copias dañadas

1. Abrí la carpeta del proyecto. Ver [Abrir una carpeta de proyecto completa](topic:open-project-folder).
2. Lea las notas bajo el nombre de la carpeta. "2 archivos están incompletos o no se pueden leer. Vea los modelos abajo." significa que hay algo para revisar.
3. En **Modelos**, mire la columna **Estado**. **Completo** está bien. Un "1 incompleto" en ámbar significa que una copia está mala pero otra está sana. **Incompleto** en rojo significa que no se encontró ninguna copia sana.
4. Abra **Todas las copias … ** bajo un modelo con problema. Lista el archivo principal y cada respaldo numerado, del más nuevo al más viejo, con tamaño, fecha y estado.
5. Lea la nota encima de la lista, por ejemplo "Tower.rvt está incompleto (183,2 MB, debería tener al menos 214,0 MB). La tarjeta muestra la copia completa más nueva, Tower.0012.rvt (3 de marzo de 2025)."
6. Haga clic en la copia que quiere abrir. Solo se pueden elegir copias completas.

## Qué hace la verificación de salud

Cada copia de cada modelo recibe una revisión rápida de su encabezado, de 512 bytes cada una, así que hasta una carpeta con modelos grandes se revisa en segundos. Un archivo cuyo propio índice apunta más allá de su final fue cortado mientras se copiaba, subía o sincronizaba. Un archivo de nube que aún está "solo en línea" se ve igual.

La tarjeta de cada modelo se lee del archivo principal cuando está sano, y del respaldo sano más nuevo cuando no lo está.

## Pasos: enlaces faltantes

1. Busque la nota "*n* archivos vinculados no están en esta carpeta." bajo el nombre de la carpeta.
2. Desplácese a **Archivos vinculados y referenciados**. Los enlaces faltantes aparecen primero.
3. Lea la columna **Dónde** de cada enlace:
   - **En esta carpeta**: encontrado en la ruta que guardó el modelo.
   - **Mismo nombre encontrado**: hay un archivo con el mismo nombre en otro lugar de la carpeta. Compruebe que sea el correcto.
   - **Archivo de biblioteca**: una tabla de códigos de notas clave o de conjuntos. Vienen con el programa en cada computadora, así que no se espera que estén en la carpeta.
   - **No está en esta carpeta**: no se encontró en ningún lugar de la carpeta.
4. Lea **Usado por** para ver qué modelos vinculan cada archivo.

BimCraft busca cada enlace primero por su ruta relativa, después por el final de su ruta guardada (así que `\\servidor\obras\Tower\Cad\X-Refs\sitio.dwg` se encuentra en `X-Refs/sitio.dwg` cuando eligió la carpeta `Cad`), y luego por nombre de archivo en cualquier parte de la carpeta.

## Pasos: sobrantes

1. Desplácese a **Apartados** al final del informe.
2. Lea las tres líneas que pueden aparecer:
   - Carpetas de mantenimiento (`*_backup`, `*_log`, `Revit_temp`): no se leen.
   - Sobrantes de bloqueo, registro y respaldo: archivos como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Los dejan programas que se cerraron de golpe o que estaban abiertos cuando se copió la carpeta. Por lo general se pueden borrar sin problema cuando nadie tiene los archivos abiertos.
   - Otros archivos: todo lo demás que BimCraft no lee.

## Errores comunes

- **Borrar el archivo principal dañado antes de guardar una buena copia de respaldo.** Copie primero el respaldo completo más nuevo y después ocúpese del archivo dañado.
- **Confiar a ciegas en "Mismo nombre encontrado".** Dos planos distintos pueden tener el mismo nombre. Si hay dudas, ábralos los dos.
- **Creer que un archivo de biblioteca faltante es un problema.** Las tablas de códigos de notas clave y de conjuntos viven con el programa en cada computadora.
- **El número de archivos cambia entre navegadores.** En Firefox y Safari, {{ui:Abrir una carpeta}} entrega todos los archivos, incluidos los que están dentro de carpetas de mantenimiento, así que el conteo (y el límite de 20.000 archivos) los incluye. Arrastrar la carpeta los omite, como hacen Chrome y Edge. Por lo demás el informe es el mismo.
