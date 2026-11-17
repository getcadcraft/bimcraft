---
title: Abrir una carpeta completa de proyecto
summary: Apunte BimCraft a una carpeta de proyecto para ver a la vez todos los modelos, sus respaldos y sus vínculos, y deje que el cuadro Empiece aquí sugiera qué archivo trabajar.
keywords: carpeta, directorio, carpeta de proyecto, unidad de red, servidor, empiece aquí, qué archivo, respaldos, vínculos, referencias externas, carpetas recientes, arrastrar carpeta
from: 16fbdce2
---

## Qué hará

Abra una carpeta completa de proyecto, como la que le entregaron para un trabajo, y deje que BimCraft la ordene: qué modelos hay, cuáles copias son respaldos, qué se vincula con qué, qué archivos están dañados y cuál archivo es probablemente el que quiere abrir.

Solo se leen los pocos kilobytes que necesita cada ficha de modelo, así que una carpeta en una unidad de red o en una carpeta de nube sincronizada funciona bien.

## Pasos

:::chromium
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta del proyecto en la ventana que se abre y haga clic en **Seleccionar** (o **Subir** o **Abrir**, según su sistema).
3. Haga clic en **Ver archivos** cuando el navegador pregunte "¿Permitir que el sitio vea los archivos?". Esto solo permite que la pestaña lea la carpeta; no se sube nada.
4. Espere mientras la línea de estado cuenta: "Enumerando la carpeta: … archivos", luego "Revisando archivos de Revit: … de …".
:::

:::firefox
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta del proyecto en la ventana que se abre y confirme. Firefox puede pedirle que confirme que la página puede leer los archivos de la carpeta; estos siguen en su computadora.
3. Espere mientras la línea de estado dice "Leyendo la carpeta: … archivos", luego "Revisando archivos de Revit: … de …".
:::

:::safari
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta del proyecto en la ventana que se abre y haga clic en **Subir**. A pesar del nombre, nada sale de su Mac: los archivos solo se entregan a la pestaña.
3. Espere mientras la línea de estado dice "Leyendo la carpeta: … archivos", luego "Revisando archivos de Revit: … de …".
:::

También puede **arrastrar la carpeta** desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}} a la página. Una carpeta arrastrada se abre sin ningún permiso en ningún navegador.

## Qué debe ver

El informe de la carpeta llena el centro:

- El nombre de la carpeta, el conteo de modelos, dibujos CAD, modelos IFC y archivos, y el tamaño total.
- Notas rojas o ámbar si algunos archivos están incompletos o si faltan archivos vinculados en la carpeta.
- El cuadro {{ui:Empiece aquí}}: el archivo que BimCraft sugiere abrir, con las razones.
- **Modelos**: una fila por modelo, con sus respaldos agrupados debajo.
- **Archivos vinculados y referenciados**, **Modelos IFC**, **Dibujos CAD** y **Apartados**, cuando la carpeta los tenga.

A la izquierda, el panel {{ui:Carpeta}} lo resume; **Problemas** dice "Ninguno" cuando todas las copias están en buen estado.

## Use el cuadro Empiece aquí

El cuadro nombra un archivo y explica por qué, por ejemplo:

- "Trabajo guardado más reciente en esta carpeta (3 mar 2025)."
- "*Consultant.rvt* está vinculado en otros modelos, así que es fondo, no el archivo para editar."
- "*Tower.rvt* parece la opción obvia, pero está dañado; su última copia buena es de …"
- "Este es un modelo central: en Revit, ábralo con "Create New Local" y trabaje en la copia local."

1. Lea las razones.
2. Haga clic en {{ui:Abrir su ficha}} para leer la ficha de ese archivo, o en {{ui:Mostrarlo en la lista}} para encontrar su fila en **Modelos**.
3. Consulte con quien trabajó por última vez en el proyecto antes de confiar en el archivo. El cuadro también lo indica: es una suposición basada en nombres, fechas y vínculos.

## Abrir archivos desde el informe

1. Haga clic en el nombre de un modelo para abrir su ficha. La ficha verifica cada vínculo con la carpeta.
2. Haga clic en {{ui:Volver a}} y en el nombre de la carpeta arriba de la ficha (o en {{ui:Volver a la carpeta}} a la izquierda) para regresar.
3. Haga clic en cualquier archivo IFC en **Modelos IFC** para abrirlo en 3D.
4. Haga clic en cualquier DWG o DXF en **Dibujos CAD** para abrirlo en 2D. Sus dibujos vinculados e imágenes se encuentran en la carpeta automáticamente.

## Reabrir una carpeta después

:::chromium
Las carpetas que abrió con {{ui:Abrir una carpeta}} o arrastrándolas aparecen en {{ui:Carpetas recientes}} a la izquierda. Haga clic en {{ui:Reabrir}} y en el nombre de la carpeta para abrirla de nuevo sin elegirla. Después de reiniciar el navegador, Chrome o Edge preguntan una vez más; elija "Permitir en cada visita" para que deje de preguntar. La lista se guarda solo en este navegador y nunca se envía a ningún lado. Haga clic en × para olvidar una carpeta.
:::

:::firefox safari
Este navegador no puede recordar carpetas entre visitas. Elija la carpeta de nuevo con {{ui:Abrir una carpeta}}, o arrástrela.
:::

## Errores comunes

- **Elegir una carpeta demasiado grande.** Con más de 20 000 archivos aparece: "Esta carpeta tiene más de 20 000 archivos. Elija una carpeta más pequeña, como la de un proyecto." Elija la carpeta del proyecto, no la unidad completa.
- **Elegir la carpeta madre de varios proyectos.** El cuadro {{ui:Empiece aquí}} entonces elige entre proyectos. Elija uno solo.
- **Parece que se ignoran las carpetas propias de Revit.** Las carpetas `*_backup`, `*_log` y `Revit_temp` son de mantenimiento y aparecen en **Apartados**; no se leen.
- **Esperar que un modelo se abra en 3D desde su ficha.** Un archivo de proyecto es solo una ficha. Abra su exportación IFC.
- **Teléfonos y tabletas.** Muchos navegadores móviles no pueden elegir carpetas. Use una computadora.

Vea [Revisar una carpeta en busca de copias dañadas, vínculos faltantes y sobrantes](topic:check-folder-health) y [Informe de carpeta: roles, estados y vínculos](topic:folder-roles).
