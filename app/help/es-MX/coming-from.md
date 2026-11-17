---
title: Viene de otros programas BIM y de dibujo
summary: Cómo los hábitos de los programas BIM de escritorio y de visualización de DWG se corresponden con BimCraft, y las diferencias que suelen confundir.
keywords: cambio, migrar, familiar, bim de escritorio, familia, parámetros, explorador de proyectos, paleta de propiedades, cubo de vistas, xref, administrador de capas, diferencias, comparar
from: 2de629af
---

Si conoce Revit, la mayor parte de BimCraft le resultará familiar en las palabras y desconocida en el alcance. La diferencia más importante: **esta versión lee y revisa modelos y edita datos IFC. Todavía no crea modelos como Revit.** No puede dibujar muros, colocar familias, crear vistas o hojas, ni guardar un archivo de proyecto. Lo que sí puede hacer es abrir casi cualquier archivo de edificio en cualquier computadora con un navegador, ver lo que contiene, revisar una carpeta de proyecto completa y corregir los datos de un modelo IFC.

## Hábitos equivalentes

| Si está acostumbrado a | En BimCraft |
|---|---|
| Abrir un `.rvt` en Revit para ver el modelo | BimCraft abre el `.rvt` como una ficha de archivo: versión, información del proyecto, vínculos, vista previa. Para el modelo 3D, exporte IFC y abra ese. [Lea un archivo de proyecto o de familia](topic:read-rvt-file) |
| Revisar en qué versión se guardó un archivo antes de abrirlo | La ficha dice "guardado en Revit …" arriba, sin actualizar ni tocar el archivo |
| El explorador de proyectos | No hay explorador de vistas y hojas. Un modelo IFC tiene las listas {{ui:Niveles}} y {{ui:Elementos}}; un dibujo tiene pestañas de hojas |
| La paleta de propiedades | El panel {{ui:Propiedades}} a la derecha, del elemento en el que hizo clic. Conjuntos de propiedades IFC en lugar de grupos de parámetros |
| Parámetros de ejemplar y de tipo | Conjuntos de propiedades de ejemplar, y conjuntos marcados "(tipo)". Un cambio de tipo se aplica a cada elemento del tipo, como en Revit. [Cambie una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance) |
| Editar tipo | Sin cuadro de diálogo: haga clic en un valor de un conjunto "(tipo)" y escriba |
| Seleccionar muchos elementos, filtros, seleccionar todas las instancias | Un elemento a la vez. Todavía no está disponible |
| El cubo de vistas y la rueda de navegación | Un cubo de vistas en la esquina inferior derecha, cuatro botones ({{ui:Encuadrar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}) y órbita libre. No hay rueda de navegación |
| {{key:Shift}} y arrastre con el botón central para orbitar; arrastre con el botón central para encuadrar | Arrastre con el botón izquierdo para orbitar, arrastre con el derecho (o {{key:Shift}} y arrastre) para encuadrar, y la rueda hace zoom. El estilo de menú {{ui:Cinta BIM}} cambia el encuadre a arrastre con el botón central, y orbitar a {{key:Shift}} con el botón central. [Menús, teclas y ratón](topic:menus-keys-and-mouse) |
| Plantas, cortes, cajas de corte | Un plano de {{ui:Sección}} a la vez ({{key:X}}); sin caja de corte ni planos 2D. [Corte un modelo IFC con un plano de sección](topic:section-plane) |
| Ocultar en vista, aislar, visibilidad y gráficos | {{ui:Niveles}} activados y desactivados, {{ui:Espacios}} y {{ui:Aristas}}. Todavía no hay ocultación por elemento |
| Habitaciones | Espacios IFC, ocultos al principio. Haga clic en {{ui:Espacios}} |
| Guardar, Guardar como, sincronizar con central | {{ui:Guardar como IFC}} descarga un nuevo archivo IFC. El original nunca cambia. No hay archivo central ni trabajo compartido |
| Deshacer con {{key:Mod+Z}} | Funciona en las ediciones IFC hasta que guarde. [Cambie propiedades IFC y guarde una copia editada](topic:edit-ifc-properties) |
| Administrar vínculos | Abra la carpeta del proyecto: cada vínculo se revisa y se marca como **En esta carpeta**, **Mismo nombre encontrado**, **Archivo de biblioteca** o **No está en esta carpeta**. [Abra una carpeta de proyecto completa](topic:open-project-folder) |
| Auditar, o abrir un archivo para ver si está dañado | El informe de carpeta revisa en segundos cada copia y respaldo para ver si está cortado. [Revise una carpeta en busca de copias dañadas](topic:check-folder-health) |
| Elegir el archivo correcto de una carpeta desordenada | El cuadro {{ui:Empiece aquí}} sugiere uno, con razones |

Si sobre todo abre modelos para revisarlos, como en un programa de revisión o visualización de IFC, elija el estilo de menú {{ui:Visor}}: las herramientas de visualización y revisión van primero, y las herramientas de construcción esperan en un solo menú. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).

## Desde la visualización de archivos DWG

Si abre DWG en AutoCAD o en un visor de DWG:

| Si está acostumbrado a | En BimCraft |
|---|---|
| Pestañas de modelo y de presentación abajo | Pestañas sobre el dibujo: {{ui:Modelo}} y una por hoja |
| ZOOM Extents, doble clic en la rueda | Doble clic, {{key:F}} o {{ui:Encuadrar}} |
| Encuadrar con el botón central | Arrastre con cualquier botón |
| El administrador de capas | La lista {{ui:Capas}}: marque para mostrar, desmarque para ocultar, {{ui:Todas activadas}} y {{ui:Todas desactivadas}} |
| El administrador de referencias externas (xref) | **Dibujos vinculados** a la derecha, con **Mostrado** o **No encontrado**, y {{ui:Agregar dibujos vinculados…}} |
| Vista previa de trazado | {{ui:Vista de impresión}} o {{key:P}}: negro sobre blanco con grosores de línea. No imprime |
| Extracción de datos de atributos de bloques | La pestaña {{ui:Equipos}} para planos de servicios de alimentos con etiquetas, con {{ui:Descargar CSV}} |
| Medir, dibujar, editar, guardar como | No están en BimCraft. La aplicación de dibujo CadCraft dibuja y edita |

## Diferencias que suelen confundir

- **Funciona en el navegador, y el navegador cuida sus archivos.** BimCraft solo puede leer los archivos y carpetas que usted le entregue, al elegirlos o arrastrándolos. No puede abrir un archivo por sí mismo ni sobrescribir uno. Cada guardado es una descarga.
- **No se sube nada.** La palabra "subir" en algunos cuadros de carpeta de los navegadores es el texto propio del navegador. Los archivos se quedan en su computadora.
- **IFC es el formato de modelo.** Un archivo de proyecto se abre como ficha porque su contenido 3D no está documentado. Trate IFC como la forma en que los modelos llegan a BimCraft.
- **Las ediciones son de copia al escribir.** Cambiar el valor de un elemento nunca cambia a sus vecinos, aunque el exportador haya compartido ese valor entre ellos. Las propiedades de tipo son la excepción deliberada.
- **Sin proyecto, sin vistas.** BimCraft muestra un archivo a la vez y no recuerda nada de él después de cerrar la pestaña, salvo los nombres de carpetas recientes en Chrome y Edge.
- **Teclas de Mac.** Donde los atajos de Revit en Windows usan Ctrl, los atajos de BimCraft usan {{key:Mod}}: Command en una Mac.
- **Sus hábitos con el ratón.** Orbitar es con el botón izquierdo, no con Shift y el botón central, a menos que elija el estilo de menú {{ui:Cinta BIM}} o configure los botones usted mismo en [Menús, teclas y ratón](topic:menus-keys-and-mouse).

Vea [Lo que todavía no está disponible](topic:not-built-yet) para saber qué usar hoy en su lugar.
