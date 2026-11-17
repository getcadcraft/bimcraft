---
title: Comprobar una carpeta por copias dañadas, enlaces perdidos y restos
summary: Use el informe de la carpeta para encontrar archivos de modelo cortados, elegir la copia de seguridad completa más reciente, ver qué enlaces faltan y detectar archivos de bloqueo y temporales.
keywords: comprobación de estado, dañado, corrupto, incompleto, truncado, copia de seguridad, enlaces perdidos, xref perdida, auditoría, restos, archivos de bloqueo, dwl, bak, entrega
from: 3025a539
---

## Qué hará

Compruebe una carpeta de proyecto antes de entregarla o de empezar a trabajar en ella: ¿está completo cada modelo?, ¿cuál es la última copia correcta?, ¿están presentes todos los archivos vinculados?

## Pasos: copias dañadas

1. Abra la carpeta del proyecto. Véase [Abrir una carpeta de proyecto completa](topic:open-project-folder).
2. Lea las notas bajo el nombre de la carpeta. Si indican "2 archivos están incompletos o no se pueden leer. Vea los modelos abajo.", hay algo que revisar.
3. En **Modelos**, mire la columna **Estado**. **Completo** es correcto. Un aviso ámbar de "1 incompleto" significa que una copia está mal pero otra es válida. Un **Incompleto** en rojo significa que no se encontró ninguna copia válida.
4. Abra **Todas las copias …** bajo un modelo con problemas. Lista el archivo principal y cada copia de seguridad numerada, la más reciente primero, con tamaño, fecha y estado.
5. Lea la nota sobre la lista. Por ejemplo: Tower.rvt está incompleto (183.2 MB; debería tener al menos 214.0 MB). La ficha muestra la copia completa más reciente, Tower.0012.rvt (03/03/2025).
6. Haga clic en la copia que quiera abrir. Solo se pueden pulsar las copias completas.

## Qué hace la comprobación de estado

Cada copia de cada modelo recibe una comprobación rápida de su cabecera, de 512 bytes cada una, así que incluso una carpeta de modelos grandes se revisa en segundos. Un archivo cuyo propio índice apunta más allá de su final se cortó mientras se copiaba, subía o sincronizaba. Un archivo de unidad en la nube que aún está "solo en línea" tiene el mismo aspecto.

La ficha de cada modelo se lee del archivo principal cuando es válido, y de la copia de seguridad válida más reciente cuando no lo es.

## Pasos: enlaces perdidos

1. Busque bajo el nombre de la carpeta la nota que indica que *n* archivos vinculados no están en esta carpeta.
2. Desplácese a **Archivos vinculados y referenciados**. Los enlaces perdidos aparecen primero.
3. Lea la columna **Dónde** de cada enlace:
   - **En esta carpeta**: encontrado en la ruta que guardó el modelo.
   - **Mismo nombre encontrado**: hay un archivo con el mismo nombre en otro lugar de la carpeta. Compruebe que es el correcto.
   - **Archivo de biblioteca**: una tabla de keynotes o de códigos de ensamblaje. Vienen con el programa en cada equipo, así que no se espera que estén en la carpeta.
   - **No está en esta carpeta**: no se encontró en ningún lugar de la carpeta.
4. Lea **Usado por** para ver qué modelos vinculan cada archivo.

BimCraft busca cada enlace primero por su ruta relativa, luego por el final de su ruta guardada (así `\\server\jobs\Tower\Cad\X-Refs\site.dwg` se encuentra en `X-Refs/site.dwg` cuando eligió la carpeta `Cad`), y después por nombre de archivo en cualquier parte de la carpeta.

## Pasos: restos

1. Desplácese a **Apartado** al final del informe.
2. Lea las tres líneas que pueden aparecer:
   - Carpetas de mantenimiento (`*_backup`, `*_log`, `Revit_temp`): no se leen.
   - Restos de bloqueo, registro y copia: archivos como `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Los dejan programas que se bloquearon o que estaban abiertos cuando se copió la carpeta. Normalmente se pueden borrar con seguridad cuando nadie tenga los archivos abiertos.
   - Otros archivos: todo lo demás que BimCraft no lee.

## Errores habituales

- **Borrar el archivo principal dañado antes de guardar una buena copia de seguridad.** Copie primero la copia completa más reciente y luego ocúpese del archivo dañado.
- **Fiarse ciegamente de "Mismo nombre encontrado".** Dos planos distintos pueden tener el mismo nombre. Si tiene dudas, abra los dos.
- **Pensar que falta un archivo de biblioteca es un problema.** Las tablas de keynotes y de códigos de ensamblaje están con el programa en cada equipo.
- **El número de archivos varía entre navegadores.** En Firefox y Safari, {{ui:Open a folder}} entrega todos los archivos, incluidos los de las carpetas de mantenimiento, así que el recuento (y el límite de 20,000 archivos) los incluye. Arrastrar la carpeta los omite, como hacen Chrome y Edge. Por lo demás, el informe es el mismo.
