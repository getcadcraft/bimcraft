---
title: Procedente de otros programas BIM y de dibujo
summary: Cómo los hábitos de los programas BIM de escritorio y de visualización de DWG se corresponden con BimCraft, y las diferencias que confunden a la gente.
keywords: cambio de programa, migrar, familiar, bim de escritorio, familia, parámetros, explorador de proyectos, paleta de propiedades, cubo de vistas, xref, administrador de capas, diferencias, comparar
from: 2de629af
---

Si conoce Revit, la mayor parte de BimCraft le resultará familiar en las palabras y desconocida en su alcance. La diferencia más importante: **esta versión lee y revisa modelos y edita datos IFC. Todavía no crea modelos como Revit.** No puede dibujar muros, colocar familias, crear vistas o láminas, ni guardar un archivo de proyecto. Lo que sí puede hacer es abrir casi cualquier archivo de edificio en cualquier ordenador con un navegador, ver lo que contiene, revisar una carpeta completa de proyecto y corregir los datos de un modelo IFC.

## Hábitos equivalentes

| Si está acostumbrado a | En BimCraft |
|---|---|
| Abrir un `.rvt` en Revit para ver el modelo | BimCraft abre el `.rvt` como una ficha de archivo: versión, información del proyecto, vínculos y vista previa. Para el modelo 3D, exporte IFC y abra ese. [Lea un archivo de proyecto o de familia](topic:read-rvt-file) |
| Comprobar en qué versión se guardó un archivo antes de abrirlo | La ficha indica "guardado en Revit …" arriba, sin actualizar ni tocar el archivo |
| El explorador de proyectos | No hay explorador de vistas y láminas. Un modelo IFC tiene las listas {{ui:Storeys}} y {{ui:Elements}}; un dibujo tiene pestañas de lámina |
| La paleta de propiedades | El panel {{ui:Properties}} de la derecha, para el elemento en el que hizo clic. Conjuntos de propiedades IFC en lugar de grupos de parámetros |
| Parámetros de ejemplar y de tipo | Conjuntos de propiedades de ejemplar, y conjuntos marcados "(tipo)". Un cambio de tipo se aplica a cada elemento del tipo, como en Revit. [Cambie una propiedad de tipo para todos los elementos de un tipo](topic:type-vs-instance) |
| Editar tipo | Sin cuadro de diálogo: haga clic en un valor de un conjunto "(tipo)" y escriba |
| Seleccionar muchos elementos, filtros, Seleccionar todos los ejemplares | Un elemento cada vez. Todavía no está disponible |
| El cubo de vistas y la rueda de navegación | Un cubo de vistas en la esquina inferior derecha, cuatro botones ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}) y órbita libre. Sin rueda de navegación |
| Shift y arrastre con el botón central para orbitar, arrastre con el botón central para desplazar | Arrastre con el botón izquierdo para orbitar, con el derecho (o {{key:Shift}} y arrastre) para desplazar, y la rueda para acercar. El estilo de menú {{ui:BIM ribbon}} cambia a desplazar con el botón central, y a orbitar con {{key:Shift}} y el botón central. [Menús, teclas y ratón](topic:menus-keys-and-mouse) |
| Planos de planta, secciones, cajas de sección | Un plano de {{ui:Section}} cada vez ({{key:X}}); sin caja de sección ni planos 2D. [Corte un modelo IFC con un plano de sección](topic:section-plane) |
| Ocultar en vista, aislar, visibilidad y gráficos | {{ui:Storeys}} activados y desactivados, {{ui:Spaces}} y {{ui:Edges}}. Todavía no hay ocultación por elemento |
| Espacios | Espacios IFC, ocultos al principio. Haga clic en {{ui:Spaces}} |
| Guardar, Guardar como, sincronizar con central | {{ui:Save as IFC}} descarga un archivo IFC nuevo. El original nunca cambia. Sin modelo central ni trabajo compartido |
| Deshacer con {{key:Mod+Z}} | Funciona con las ediciones IFC hasta que guarde. [Cambie las propiedades IFC y guarde una copia editada](topic:edit-ifc-properties) |
| Administrar vínculos | Abra la carpeta del proyecto: cada vínculo se comprueba y se marca **En esta carpeta**, **Mismo nombre encontrado**, **Archivo de biblioteca** o **No está en esta carpeta**. [Abra una carpeta completa de proyecto](topic:open-project-folder) |
| Auditar, o abrir un archivo para ver si está dañado | El informe de carpeta comprueba en segundos cada copia y copia de seguridad por si está cortada. [Compruebe una carpeta en busca de copias dañadas](topic:check-folder-health) |
| Elegir el archivo correcto de una carpeta desordenada | El cuadro {{ui:Start here}} sugiere uno, con los motivos |

Si sobre todo abre modelos para revisarlos, como en un programa de revisión o visualización de IFC, elija el estilo de menú {{ui:Viewer}}: las herramientas de visualización y revisión aparecen primero, y las de construcción esperan en un solo menú. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse).

## Desde la visualización de archivos DWG

Si abre DWG en AutoCAD o en un visor de DWG:

| Si está acostumbrado a | En BimCraft |
|---|---|
| Pestañas de modelo y de presentación en la parte inferior | Pestañas sobre el dibujo: {{ui:Model}} y una por lámina |
| ZOOM Extents, doble clic en la rueda | Doble clic, {{key:F}} o {{ui:Fit}} |
| Desplazar con el botón central | Arrastre con cualquier botón |
| El administrador de capas | La lista {{ui:Layers}}: marque para mostrar, desmarque para ocultar, y use {{ui:All on}} y {{ui:All off}} |
| El administrador de xref | **Dibujos vinculados** a la derecha, con **Mostrado** o **No encontrado**, y {{ui:Add linked drawings…}} |
| Vista previa de impresión | {{ui:Print view}} o {{key:P}}: negro sobre blanco con grosores de línea. No imprime |
| Extracción de datos de atributos de bloque | La pestaña {{ui:Equipment}} para planos de hostelería etiquetados, con {{ui:Download CSV}} |
| Medir, dibujar, editar, guardar como | No están en BimCraft. La aplicación de dibujo CadCraft dibuja y edita |

## Diferencias que confunden

- **Funciona en el navegador, y el navegador es cuidadoso con sus archivos.** BimCraft solo puede leer archivos y carpetas que usted le entregue, eligiéndolos o arrastrándolos. No puede abrir un archivo por sí mismo, ni guardar sobre uno. Cada guardado es una descarga.
- **Nada se sube.** La palabra "subir" que aparece en algunos cuadros de carpeta de los navegadores es terminología del propio navegador. Los archivos permanecen en su ordenador.
- **IFC es el formato de modelo.** Un archivo de proyecto se abre como ficha porque su contenido 3D no está documentado. Considere IFC como la vía por la que los modelos llegan a BimCraft.
- **Las ediciones son de copia al escribir.** Cambiar el valor de un elemento nunca cambia los de sus vecinos, aunque el exportador haya compartido ese valor entre ellos. Las propiedades de tipo son la excepción deliberada.
- **Sin proyecto, sin vistas.** BimCraft muestra un archivo cada vez y no recuerda nada de él tras cerrar la pestaña, salvo los nombres de las carpetas recientes en Chrome y Edge.
- **Teclas de Mac.** Donde los atajos de Windows de Revit usan Ctrl, los de BimCraft usan {{key:Mod}}: Command en un Mac.
- **Sus hábitos con el ratón.** La órbita es con el botón izquierdo, no con Shift y el botón central, a menos que elija el estilo de menú {{ui:BIM ribbon}} o configure los botones usted mismo en [Menús, teclas y ratón](topic:menus-keys-and-mouse).

Consulte [Lo que todavía no está disponible](topic:not-built-yet) para saber qué usar en su lugar hoy.
