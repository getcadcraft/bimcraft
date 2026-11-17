---
title: Lo que BimCraft lee de cada formato
summary: Qué lee exactamente BimCraft de los archivos IFC, de proyecto y de familia, DWG y DXF, y qué deja sin leer.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiones, compatibilidad, qué se lee
from: 9b8dfb4f
---

## IFC

| Lee | Detalles |
|---|---|
| Geometría | Cada elemento con forma, coloreado como indica el archivo. Los locales y espacios se dibujan transparentes y ocultos al principio |
| Niveles | Niveles del edificio en orden de elevación, y qué elementos están en cada uno. Los elementos sin nivel se agrupan como "Sin nivel" |
| Conteos de elementos | Cuántos elementos hay de cada tipo (muros, puertas, losas…), mostrados en {{ui:Elements}} |
| Datos del proyecto | Nombre del proyecto, nombre largo y fase; esquema; el programa que exportó, autor y fecha de exportación del encabezado del archivo |
| Datos de elementos | Nombre, tipo, tipo de objeto, etiqueta, descripción, GlobalId; cada conjunto de propiedades y de cantidades del elemento y de su tipo |

Editable: nombre, tipo de objeto, etiqueta, descripción y valores de propiedades individuales. Se guarda como un archivo IFC nuevo. Se abren los esquemas IFC2X3, IFC4 e IFC4X3, leídos por el motor IFC propio de BimCraft; lo que aún no puede dibujar aparece bajo **Aún no se dibuja** en el panel {{ui:File}}. El modelo se mueve al origen al abrirse, así que un modelo colocado lejos de él aparece igual en el centro de la pantalla. `.ifczip` e `.ifcxml` no se abren.

## Archivos de proyecto y de familia

`.rvt` proyectos, `.rte` plantillas de proyecto, `.rfa` familias y `.rft` plantillas de familia.

| Lee | Detalles |
|---|---|
| Información del archivo | Versión y compilación, trabajo compartido, ruta del modelo central, última ruta guardada, nombre de usuario, idioma, GUID del documento |
| Información del proyecto | Los campos propios del proyecto (nombre, número, cliente, dirección, estado…), sin los valores predeterminados de un proyecto nuevo |
| Información de la familia | Nombre de la familia, categoría, versión, última actualización y sus parámetros por grupo |
| Vínculos | La lista de modelos vinculados, vínculos CAD, imágenes y tablas de notas clave a las que apunta el archivo |
| Imagen de vista previa | La miniatura guardada en el archivo |

No se lee: el modelo 3D, los elementos, las vistas, las hojas y las tablas. Están guardados en un formato no documentado. BimCraft lee solo unas decenas de kilobytes de cada archivo, así que el tamaño casi no importa.

## Archivos de proyecto .pln, .pla, .tpl y .bpn

Todavía no se leen: BimCraft lo indica al abrir uno. Exporte IFC para el modelo y DWG para los dibujos; vea [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

## DWG y DXF

| Lee | Detalles |
|---|---|
| Espacios | Espacio modelo y cada hoja (presentación), en el orden de las pestañas |
| Ventanas gráficas | Las ventanas de cada hoja, con su escala, giro y capas inutilizadas |
| Capas | Nombre, color, encendida o apagada, inutilizada, marca de trazado y grosor de línea |
| Objetos | Líneas, polilíneas, arcos, círculos, elipses, splines, sombreados y sólidos, texto y texto de líneas múltiples, bloques y atributos, cotas, directrices y directrices múltiples, tablas, puntos, imágenes |
| Dibujos vinculados | Se dibujan donde están insertados, cuando se encuentran sus archivos |
| Imágenes | Se dibujan desde los archivos de imagen cuando se encuentran (PNG, JPEG, GIF, BMP, WebP; no TIFF) |
| Etiquetas de equipo | Etiquetas de elementos de servicio de alimentos (atributos `KCL-ITEM`), para la tabla de equipos |

Todo lo demás se cuenta bajo **Aún no se dibuja**, nunca se adivina. Se han verificado los formatos DWG de AutoCAD 2000 a 2018 (también se aceptan archivos R13 y R14, pero ninguno estaba en el conjunto de prueba; los DWG más antiguos no se abren). El panel {{ui:Drawing}} muestra el código de formato (como AC1032). Se abren archivos DXF de todas las versiones, incluido R12. Ambos los leen los lectores propios de BimCraft, en esta pestaña. Nada se guarda de vuelta en DWG ni en DXF.

## En una carpeta

| Tipo | Extensiones | En el informe |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados con respaldos numerados, revisados, con lectura de ficha y vínculos verificados |
| IFC | `.ifc` | Listados; se abren en 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados con los modelos que los vinculan; DWG y DXF se abren en 2D, DGN no |
| Sobrantes | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados bajo **Apartados** |
| Carpetas auxiliares | `*_backup`, `*_log`, `Revit_temp`, carpetas ocultas | Listadas bajo **Apartados**, no se leen |

Vea [Informe de carpeta: funciones, estados y vínculos](topic:folder-roles).
