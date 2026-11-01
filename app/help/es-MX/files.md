---
title: Archivos que BimCraft abre y guarda
summary: Todos los formatos que BimCraft abre, qué conserva, qué guarda, a dónde van los archivos guardados y qué cambia entre navegadores y sin conexión.
keywords: formatos, abrir, guardar, exportar, descargar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, subir, privacidad, tamaño de archivo
from: a1f0161b
---

BimCraft lee los archivos de su computadora, en la pestaña del navegador. **No se sube nada** a CadCraft ni a nadie más. Al guardar, BimCraft le entrega al navegador un archivo nuevo para descargar; nunca sobrescribe un archivo que usted abrió.

## Qué abre

| Formato | Extensiones | Qué obtiene |
|---|---|---|
| IFC | `.ifc` | El modelo en 3D, niveles, conteo de elementos y las propiedades de cada elemento. Se pueden cambiar nombres, etiquetas y valores individuales de propiedades. |
| Archivos de proyecto y de familia | `.rvt` `.rfa` `.rte` `.rft` | Una ficha del archivo: versión, compilación, trabajo compartido, información del proyecto, parámetros de familia, archivos vinculados y la imagen de vista previa. Sin 3D. |
| DWG | `.dwg` | El dibujo en 2D: espacio modelo, todas las hojas, capas, dibujos vinculados, imágenes y vista de impresión. También el espacio modelo en 3D. Los formatos verificados son los de AutoCAD 2000 a 2018. |
| DXF | `.dxf` | Lo mismo que DWG. |
| STEP | `.step` `.stp` | Una pieza, un equipo o un modelo de proveedor (AP203, AP214, AP242) en 3D: cada sólido se vuelve un elemento (un proxy de elemento de edificio) de un modelo IFC pequeño en un nivel, leído como triángulos a su tamaño real, y un ensamblaje con todas sus piezas donde el archivo las coloca. A partir de ahí funciona como cualquier IFC: propiedades, secciones, medición, guardar como IFC. No se leen los colores ni el árbol del ensamblaje. |
| Nubes de puntos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | El escaneo en la vista 3D, junto a un modelo o solo: consulte [Show a point cloud beside the model](topic:point-clouds). |
| Paquete de proyecto | `.ccbundle.zip` | El modelo con sus vistas, presentaciones y grupos de propiedades: consulte [Open a project bundle](topic:open-project-bundle). |
| Una carpeta | cualquiera | Un informe de todos los modelos, dibujos y paquetes de proyecto que contiene. Cualquier IFC, modelo, dibujo o paquete del informe se abre con un clic. |

[What BimCraft reads from each format](topic:file-formats) explica los detalles.

BimCraft decide qué es un archivo mirando sus primeros bytes además de su nombre, así que un archivo de proyecto con una extensión poco común se abre igualmente como ficha.

### No se abren

- `.ifczip` e `.ifcxml`: BimCraft dice ".ifczip aún no es compatible. Guarde o exporte el modelo como un archivo .ifc simple." Descomprima el `.ifczip` (contiene un `.ifc` simple) o vuelva a exportar como IFC simple.
- Los dibujos DGN aparecen en el informe de una carpeta, pero no se abren.
- Los PDF, las imágenes y los archivos de oficina no se abren por sí solos. Las imágenes se usan como fotografías dentro de un DWG, y {{ui:Construir}} › {{ui:Desde un dibujo…}} convierte las páginas de un PDF o de un escaneo en muros: consulte [Walls from a set of plans](topic:walls-from-plans).

## Qué guarda

| Usted hace clic en | Obtiene | Dónde |
|---|---|---|
| {{ui:Guardar como IFC}} | Un archivo IFC nuevo con sus ediciones, llamado "*nombre original* (edited).ifc" | La carpeta de descargas de su navegador |
| {{ui:Descargar CSV}} en la tabla de equipos | Un CSV de los elementos de la lista, llamado "*nombre del dibujo* equipment.csv" | La carpeta de descargas de su navegador |

Lo demás se guarda donde se hace, cada cosa en su propio tema: {{ui:USD}} ([Export the model as USD](topic:usd)), el .glb {{ui:Para renderizar}}, las imágenes renderizadas, las hojas y plantas como PDF, las tablas y listas como CSV, las incidencias BCF, la hoja de cálculo COBie, los archivos de familia y los escaneos registrados como LAS o E57. BimCraft no guarda archivos DWG, DXF ni de proyecto, y nunca modifica los archivos que usted abrió.

:::chromium
Chrome y Edge guardan las descargas en la carpeta definida en su configuración, normalmente Descargas. Para que le pregunten dónde guardar cada vez, active "Preguntar dónde guardar cada archivo antes de descargarlo" en la configuración de descargas del navegador.
:::

:::firefox
Firefox guarda en la carpeta Descargas, salvo que usted lo configure en "Preguntar siempre dónde guardar los archivos" en su configuración.
:::

:::safari
Safari guarda en Descargas, salvo que usted elija otra carpeta en **Safari > Configuración > General > Ubicación de descarga de archivos**.
:::

## Guardar por segunda vez

Cada guardado descarga el modelo completo con **todas las ediciones desde que lo abrió**, no solo las hechas después del último guardado. La lista {{ui:Cambios}} vuelve a quedar vacía después de cada guardado, así que no se puede deshacer más allá de un guardado. Para volver a empezar desde el original, abra otra vez el archivo original.

## Archivos grandes y memoria

- Los archivos **IFC** se leen por completo en la memoria de la pestaña, y la geometría 3D ocupa más memoria además. Un modelo de unos cientos de megabytes puede ser demasiado para una laptop. Por encima de 1.5 millones de triángulos, las aristas se desactivan para ahorrar memoria ("Las aristas están desactivadas en modelos muy grandes").
- Los **archivos de proyecto** no se leen completos. BimCraft lee solo las partes pequeñas que necesita, de unos 40 KB a 100 KB sin importar qué tan grande sea el archivo, así que un modelo central de 500 MB en una unidad de red se abre en un momento.
- Los archivos **DWG y DXF** se leen por completo. Un dibujo muy grande muestra "Este dibujo es muy grande; solo se muestra una parte."
- Se abren **carpetas** de hasta 20,000 archivos. Solo se leen los pocos kilobytes que necesita la ficha de cada modelo.

Consulte [Browsers, devices and memory](topic:platforms) para saber más.

## Con y sin conexión

Abrir archivos nunca necesita internet. Un lector se carga desde el sitio la primera vez que lo necesita: el motor IFC, la primera vez que abre un modelo IFC ("Iniciando el motor IFC…"). Los lectores de DWG y DXF forman parte de la aplicación.

:::offline
Está sin conexión. Si el botón de la barra de la aplicación dice {{ui:Lista sin conexión}}, todos los formatos se abren como siempre. Si no, un modelo IFC no se puede abrir, salvo que ya se haya abierto uno en esta pestaña: vuelva a conectarse primero. Consulte [Online and offline](topic:online-offline).
:::

Para usar BimCraft sin conexión, haga clic en {{ui:Guardar para usar sin conexión}} en la barra de la aplicación mientras está en línea y espere a {{ui:Lista sin conexión}}. La copia guardada pesa unos 33 MB; incluye el motor IFC, así que los modelos IFC también se abren sin conexión. [Working offline](common:offline) explica las copias guardadas en general.

## Guardado en la nube

Todavía no se puede guardar en la nube. Guarde sus copias editadas en su propia computadora o en el servidor de archivos de su oficina, como cualquier otro archivo. Consulte [Your files](common:your-files).
