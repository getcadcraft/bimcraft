---
title: Lo que BimCraft lee de cada formato
summary: Exactamente lo que BimCraft lee de los archivos IFC, de proyecto y de familia, DWG y DXF, y lo que deja sin leer.
keywords: formatos, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiones, compatibilidad, qué se lee
from: 9b8dfb4f
---

## IFC

| Se lee | Detalles |
|---|---|
| Geometría | Cada elemento con forma, coloreado como indica el archivo. Los espacios y habitaciones se dibujan translúcidos y ocultos al principio |
| Plantas | Plantas del edificio en orden de altura, y qué elementos hay en cada una. Los elementos sin planta se agrupan como "Sin planta" |
| Recuentos de elementos | Cuántos elementos hay de cada tipo (muros, puertas, forjados…), mostrados en {{ui:Elementos}} |
| Datos del proyecto | Nombre del proyecto, nombre largo y fase; esquema; el programa que exporta, el autor y la fecha de exportación, de la cabecera del archivo |
| Datos de elementos | Nombre, tipo, tipo de objeto, etiqueta, descripción, GlobalId; cada conjunto de propiedades y de cantidades del elemento y de su tipo |

Editable: nombre, tipo de objeto, etiqueta, descripción y valores de propiedad individuales. Se guarda como un nuevo archivo IFC. Se abren los esquemas IFC2X3, IFC4 e IFC4X3, leídos por el motor IFC propio de BimCraft; lo que todavía no puede dibujar aparece listado bajo **No dibujado todavía** en el panel {{ui:Archivo}}. El modelo se mueve al origen al abrirlo, así que un modelo colocado lejos de él se muestra igualmente en el centro de la pantalla. `.ifczip` y `.ifcxml` no se abren.

## Archivos de proyecto y de familia

`.rvt` proyectos, `.rte` plantillas de proyecto, `.rfa` familias y `.rft` plantillas de familia.

| Se lee | Detalles |
|---|---|
| Información del archivo | Versión y compilación, trabajo compartido, ruta del modelo central, última ruta guardada, nombre de usuario, configuración regional, GUID del documento |
| Información del proyecto | Los campos propios del proyecto (nombre, número, cliente, dirección, estado…), sin los valores predeterminados de un proyecto nuevo |
| Información de la familia | Nombre de la familia, categoría, versión, última actualización, y sus parámetros por grupo |
| Vínculos | La lista de modelos vinculados, vínculos CAD, imágenes y tablas de notas clave a las que apunta el archivo |
| Imagen de vista previa | La miniatura guardada en el archivo |

No se lee: el modelo 3D, los elementos, las vistas, las hojas ni las tablas. Están almacenados en un formato no documentado. BimCraft lee solo unas decenas de kilobytes de cada archivo, así que el tamaño del archivo casi no importa.

## Archivos de proyecto .pln, .pla, .tpl y .bpn

No se leen todavía: BimCraft lo indica al abrir uno. Exporte IFC para el modelo y DWG para los planos; consulte [Abrir archivos de proyecto .pln y .pla](topic:pln-project-files).

## DWG y DXF

| Se lee | Detalles |
|---|---|
| Espacios | El espacio modelo y cada hoja (presentación), en el orden de las pestañas |
| Ventanas gráficas | Las ventanas de cada hoja, con su escala, giro y capas inmovilizadas |
| Capas | Nombre, color, activada o desactivada, inmovilizada, marca de trazado y grosor de línea |
| Objetos | Líneas, polilíneas, arcos, círculos, elipses, splines, sombreados y sólidos, texto y texto multilínea, bloques y atributos, acotaciones, directrices y multidirectrices, tablas, puntos, imágenes |
| Planos vinculados | Se dibujan donde se insertan, cuando se encuentran sus archivos |
| Imágenes | Se dibujan desde los archivos de imagen cuando se encuentran (PNG, JPEG, GIF, BMP, WebP; no TIFF) |
| Etiquetas de equipos | Etiquetas de elementos de hostelería (atributos `KCL-ITEM`), para la tabla de equipos |

Todo lo demás se cuenta bajo **No dibujado todavía**; nunca se adivina. Se han comprobado los formatos DWG de AutoCAD 2000 a 2018 (también se aceptan los archivos R13 y R14, aunque no había ninguno en el conjunto de pruebas; los DWG más antiguos no se abren). El panel {{ui:Dibujo}} muestra el código de formato (como AC1032). Se abren archivos DXF de todas las versiones, incluido R12. Ambos los leen los propios lectores de BimCraft, en esta pestaña. No se guarda nada de vuelta en DWG ni en DXF.

## En una carpeta

| Tipo | Extensiones | En el informe |
|---|---|---|
| Modelos | `.rvt` `.rfa` `.rte` `.rft` | Agrupados con copias de seguridad numeradas, con comprobación de estado, lectura de la tarjeta y comprobación de vínculos |
| IFC | `.ifc` | Listados; se abren en 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listados con los modelos que los vinculan; DWG y DXF se abren en 2D, DGN no |
| Restos | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listados bajo **Apartados** |
| Carpetas auxiliares | `*_backup`, `*_log`, `Revit_temp`, carpetas ocultas | Listadas bajo **Apartados**, no leídas |

Consulte [Informe de carpetas: roles, estados y vínculos](topic:folder-roles).
