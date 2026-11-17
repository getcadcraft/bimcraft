---
title: Qué lee BimCraft de cada formato
summary: Qué lee exactamente BimCraft de los archivos IFC, de proyecto y de familia, DWG y DXF, y qué deja sin tocar.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiones, compatibilidad, qué se lee
from: 9b8dfb4f
---

## IFC

| Se lee | Detalles |
|---|---|
| Geometría | Cada elemento con forma, coloreado como indica el archivo. Los ambientes y espacios se dibujan transparentes y ocultos al principio |
| Pisos | Pisos del edificio en orden de elevación, y qué elementos están en cada uno. Los elementos sin piso se agrupan como "Sin piso" |
| Cantidades de elementos | Cuántos elementos de cada tipo (muros, puertas, losas…), mostrados en {{ui:Elements}} |
| Datos del proyecto | Nombre del proyecto, nombre largo y fase; esquema; el programa que exporta, autor y fecha de exportación desde el encabezado del archivo |
| Datos de elementos | Nombre, tipo, tipo de objeto, etiqueta, descripción, GlobalId; cada conjunto de propiedades y de cantidades del elemento y de su tipo |

Editable: nombre, tipo de objeto, etiqueta, descripción y valores de propiedades individuales. Se guarda como un archivo IFC nuevo. Se abren los esquemas IFC2X3, IFC4 e IFC4X3, leídos por el motor IFC propio de BimCraft; lo que todavía no puede dibujar se lista bajo **Todavía no dibujado** en el panel de {{ui:File}}. El modelo se mueve al origen al abrirse, así que un modelo ubicado lejos de él igual aparece en el centro de la pantalla. No se abren `.ifczip` ni `.ifcxml`.

## Archivos de proyecto y de familia

Proyectos `.rvt`, plantillas de proyecto `.rte`, familias `.rfa` y plantillas de familia `.rft`.

| Se lee | Detalles |
|---|---|
| Información del archivo | Versión y compilación, trabajo compartido, ruta del modelo central, ruta del último guardado, nombre de usuario, configuración regional, GUID del documento |
| Información del proyecto | Los campos propios del proyecto (nombre, número, cliente, dirección, estado…), sin valores por defecto de nuevo proyecto |
| Información de la familia | Nombre de la familia, categoría, versión, última actualización, y sus parámetros por grupo |
| Vínculos | La lista de modelos vinculados, vínculos CAD, imágenes y tablas de notas clave a las que apunta el archivo |
| Imagen de vista previa | La miniatura guardada en el archivo |

No se lee: el modelo 3D, los elementos, las vistas, las hojas y las planillas. Están guardados en un formato no documentado. BimCraft lee solo unas decenas de kilobytes de cada archivo, así que el tamaño casi no importa.

## Archivos de proyecto .pln, .pla, .tpl y .bpn

Todavía no se leen: BimCraft lo indica al abrir uno. Exporte IFC para el modelo y DWG para los planos; vea [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

## DWG y DXF

| Se lee | Detalles |
|---|---|
| Espacios | Espacio modelo y cada hoja (presentación), en el orden de las pestañas |
| Ventanas gráficas | Las ventanas gráficas de cada hoja, con su escala, giro y capas congeladas |
| Capas | Nombre, color, activada o desactivada, congelada, marca de trazado y grosor de línea |
| Objetos | Líneas, polilíneas, arcos, círculos, elipses, splines, sombreados y sólidos, texto y texto multilínea, bloques y atributos, cotas, guías y multiguías, tablas, puntos, imágenes |
| Planos vinculados | Se dibujan donde están insertados, cuando se encuentran sus archivos |
| Imágenes | Se dibujan desde los archivos de imagen cuando se encuentran (PNG, JPEG, GIF, BMP, WebP; no TIFF) |
| Etiquetas de equipos | Etiquetas de ítems de servicio de comidas (atributos `KCL-ITEM`), para la planilla de equipos |

Todo lo demás se cuenta bajo **Todavía no dibujado**, nunca se adivina. Los formatos DWG de AutoCAD 2000 a 2018 son los verificados (también se aceptan archivos R13 y R14, pero ninguno estaba en el juego de pruebas; los DWG más antiguos no se abren); el panel {{ui:Drawing}} muestra el código de formato (como AC1032). Se abren archivos DXF de todas las versiones, incluido R12. Ambos son leídos por los lectores propios de BimCraft, en esta pestaña. No se guarda nada de vuelta en DWG ni en DXF.

## En una carpeta

| Tipo | Extensiones | En el informe |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados con copias de respaldo numeradas, con verificación de salud, lectura de ficha y vínculos verificados |
| IFC | `.ifc` | Listados; se abren en 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados con los modelos que los vinculan; DWG y DXF se abren en 2D, DGN no |
| Restos | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados bajo **Apartados** |
| Carpetas de mantenimiento | `*_backup`, `*_log`, `Revit_temp`, carpetas ocultas | Listadas bajo **Apartados**, no se leen |

Vea [Informe de carpeta: roles, estados y vínculos](topic:folder-roles).
