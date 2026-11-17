---
title: Abrir una carpeta de proyecto completa
summary: Indique a BimCraft una carpeta de proyecto para ver a la vez todos los modelos, sus copias de seguridad y sus vínculos, y deje que el cuadro Empiece aquí sugiera qué archivo trabajar.
keywords: carpeta, directorio, carpeta de proyecto, unidad de red, servidor, empiece aquí, qué archivo, copias de seguridad, vínculos, referencias externas, carpetas recientes, arrastrar carpeta
from: 16fbdce2
---

## Lo que va a hacer

Abra una carpeta de proyecto completa, como la que le entregaron para un trabajo, y deje que BimCraft la organice: qué modelos hay, cuáles son copias de seguridad, qué vincula cada uno, qué archivos están dañados y cuál es probablemente el que quiere abrir.

Solo se leen los pocos kilobytes que necesita cada ficha de modelo, así que una carpeta en una unidad de red o en una carpeta de nube sincronizada no supone problema.

## Pasos

:::chromium
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta de proyecto en la ventana que se abre y haga clic en **Seleccionar** (o en **Subir** o **Abrir**, según su sistema).
3. Haga clic en **Ver archivos** cuando el navegador pregunte "¿Permitir que el sitio vea los archivos?". Esto solo permite que la pestaña lea la carpeta; no se sube nada.
4. Espere mientras la línea de estado cuenta: "Listando la carpeta: … archivos" y después "Comprobando archivos de Revit: … de …".
:::

:::firefox
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta de proyecto en la ventana que se abre y confirme. Firefox puede pedirle que confirme que la página puede leer los archivos de la carpeta; siguen en su equipo.
3. Espere mientras la línea de estado indica "Leyendo la carpeta: … archivos" y después "Comprobando archivos de Revit: … de …".
:::

:::safari
1. Haga clic en {{ui:Abrir una carpeta}} a la izquierda (o en el centro de la pantalla vacía).
2. Elija la carpeta de proyecto en la ventana que se abre y haga clic en **Subir**. Aunque la palabra sugiera lo contrario, nada sale de su Mac: los archivos solo se entregan a la pestaña.
3. Espere mientras la línea de estado indica "Leyendo la carpeta: … archivos" y después "Comprobando archivos de Revit: … de …".
:::

También puede **arrastrar la carpeta** desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su gestor de archivos}} a la página. Una carpeta arrastrada se abre sin ninguna petición de permiso en todos los navegadores.

## Qué debería ver

El informe de la carpeta ocupa el centro:

- El nombre de la carpeta, el número de modelos, dibujos CAD, modelos IFC y archivos, y el tamaño total.
- Avisos en rojo o ámbar si algún archivo está incompleto o si algún archivo vinculado no está en la carpeta.
- El cuadro {{ui:Empiece aquí}}: el archivo que BimCraft sugiere abrir, con los motivos.
- **Modelos**: una fila por modelo, con sus copias de seguridad agrupadas debajo.
- **Archivos vinculados y referenciados**, **Modelos IFC**, **Dibujos CAD** y **Archivos apartados**, cuando la carpeta los tenga.

A la izquierda, el panel {{ui:Carpeta}} lo resume todo; **Problemas** indica "Ninguno" cuando todas las copias están en buen estado.

## Usar el cuadro Empiece aquí

El cuadro nombra un archivo y explica por qué, por ejemplo:

- "Trabajo guardado más reciente de esta carpeta (3 de marzo de 2025)."
- "*Consultor.rvt* está vinculado en otros modelos, así que es un fondo, no el archivo para editar."
- "*Torre.rvt* parece la opción obvia, pero está dañado; su última copia buena es de …"
- "Este es un modelo central: en Revit, ábralo con "Create New Local" y trabaje en la copia local."

1. Lea los motivos.
2. Haga clic en {{ui:Abrir su ficha}} para leer la ficha de ese archivo, o en {{ui:Mostrarlo en la lista}} para localizar su fila en **Modelos**.
3. Consulte con quien trabajó por última vez en el proyecto antes de fiarse del archivo. El cuadro también lo indica: es una suposición basada en nombres, fechas y vínculos.

## Abrir archivos desde el informe

1. Haga clic en el nombre de un modelo para abrir su ficha. La ficha comprueba cada vínculo con la carpeta.
2. Haga clic en {{ui:Volver a}} y en el nombre de la carpeta de la parte superior de la ficha (o en {{ui:Volver a la carpeta}} a la izquierda) para regresar.
3. Haga clic en cualquier archivo IFC de **Modelos IFC** para abrirlo en 3D.
4. Haga clic en cualquier DWG o DXF de **Dibujos CAD** para abrirlo en 2D. Sus dibujos vinculados y sus imágenes se buscan automáticamente en la carpeta.

## Reabrir una carpeta más tarde

:::chromium
Las carpetas que abrió con {{ui:Abrir una carpeta}} o arrastrándolas aparecen en {{ui:Carpetas recientes}} a la izquierda. Haga clic en {{ui:Reabrir}} y en el nombre de la carpeta para abrirla de nuevo sin elegirla. Tras reiniciar el navegador, Chrome o Edge vuelven a preguntar; elija "Permitir en cada visita" para que no lo pidan. La lista se guarda solo en este navegador y nunca se envía a ningún sitio. Haga clic en × para olvidar una carpeta.
:::

:::firefox safari
Este navegador no puede recordar carpetas entre visitas. Elija de nuevo la carpeta con {{ui:Abrir una carpeta}}, o arrástrela.
:::

## Errores frecuentes

- **Elegir una carpeta demasiado grande.** Con más de 20,000 archivos: "Esta carpeta tiene más de 20,000 archivos. Elija una carpeta más pequeña, como la de un proyecto." Elija la carpeta del proyecto, no toda la unidad.
- **Elegir la carpeta padre de varios proyectos.** El cuadro {{ui:Empiece aquí}} elegirá entonces entre proyectos. Elija un solo proyecto.
- **Las carpetas propias de Revit parecen ignoradas.** Las carpetas `*_backup`, `*_log` y `Revit_temp` son de mantenimiento y aparecen en **Archivos apartados**, sin leerse.
- **Esperar que un modelo se abra en 3D desde su ficha.** Un archivo de proyecto es solo una ficha. Abra su exportación IFC.
- **Teléfonos y tabletas.** Muchos navegadores móviles no pueden elegir carpetas. Use un ordenador.

Vea [Compruebe una carpeta por copias dañadas, vínculos que faltan y restos](topic:check-folder-health) y [Informe de carpeta: funciones, estados y vínculos](topic:folder-roles).
