---
title: Archivos que BimCraft abre y guarda
summary: Todos los formatos que BimCraft abre, qué conserva, qué guarda, dónde van los archivos guardados y qué cambia entre navegadores y cuando no hay conexión.
keywords: formatos, abrir, guardar, exportar, descargar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, subir, privacidad, tamaño de archivo
from: a7275dbf
---

BimCraft lee los archivos del equipo, en la pestaña del navegador. **No se sube nada** a CadCraft ni a nadie más. Al guardar, BimCraft entrega al navegador un archivo nuevo para descargar; nunca sobrescribe un archivo que se haya abierto.

## Qué abre

| Formato | Extensiones | Qué se obtiene |
|---|---|---|
| IFC | `.ifc` | El modelo en 3D, las plantas, el número de elementos y las propiedades de cada elemento. Se pueden cambiar los nombres, las etiquetas y los valores únicos de las propiedades. |
| Archivos de proyecto y de familia | `.rvt` `.rfa` `.rte` `.rft` | Una ficha del archivo: versión, compilación, trabajo compartido, información del proyecto, parámetros de familia, archivos vinculados y la imagen de vista previa. Sin 3D. |
| DWG | `.dwg` | El dibujo en 2D: espacio modelo, cada hoja, capas, dibujos vinculados, imágenes y vista de impresión. También el espacio modelo en 3D. Se comprueban los formatos de AutoCAD de 2000 a 2018. |
| DXF | `.dxf` | Lo mismo que DWG. |
| STEP | `.step` `.stp` | Una pieza, un equipo o el modelo de un proveedor (AP203, AP214, AP242) en 3D: cada sólido se convierte en un elemento (un elemento de edificio proxy) de un pequeño modelo IFC en una sola planta, leído como triángulos a su tamaño real, un conjunto con cada pieza donde el archivo la coloca. A partir de ahí funciona como cualquier IFC: propiedades, secciones, medir, guardar como IFC. Los colores y el árbol del conjunto no se leen. |
| Nubes de puntos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | El escaneo en la vista 3D, junto a un modelo o por sí solo: véase [Mostrar una nube de puntos junto al modelo](topic:point-clouds). |
| Paquete de proyecto | `.ccbundle.zip` | El modelo con sus vistas, presentaciones y grupos de propiedades: véase [Abrir un paquete de proyecto](topic:open-project-bundle). |
| Una carpeta | cualquiera | Un informe de cada modelo, dibujo y paquete de proyecto que contenga. Cualquier IFC, modelo, dibujo o paquete del informe se abre con un clic. |

[Qué lee BimCraft de cada formato](topic:file-formats) lo explica con detalle.

BimCraft decide qué es un archivo mirando sus primeros bytes además de su nombre, así que un archivo de proyecto con una extensión poco habitual se abre igualmente como ficha de archivo.

### No se abre

- `.ifczip` y `.ifcxml`: BimCraft muestra ".ifczip todavía no es compatible. Guarde o exporte el modelo como archivo .ifc simple." Descomprima el `.ifczip` (contiene un `.ifc` simple) o exporte de nuevo como IFC simple.
- Los dibujos DGN aparecen en el informe de una carpeta, pero no se abren.
- Los PDF, las imágenes y los archivos de ofimática no se abren por sí solos. Las imágenes se usan como imágenes dentro de un DWG, y {{ui:Compilación}} › {{ui:Desde un dibujo…}} convierte las páginas de un PDF o de un escaneo en muros: véase [Muros a partir de un juego de planos](topic:walls-from-plans).

## Qué guarda

| Se hace clic en | Se obtiene | Dónde |
|---|---|---|
| {{ui:Guardar como IFC}} | Un nuevo archivo IFC con sus cambios, llamado "*original name* (edited).ifc" | La carpeta de descargas del navegador |
| {{ui:Descargar CSV}} en el calendario de equipos | Un CSV de los elementos de la lista, llamado "*drawing name* equipment.csv" | La carpeta de descargas del navegador |

Otras cosas se guardan donde se crean, cada una en su propio tema: {{ui:USD}} ([Exportar el modelo a USD](topic:usd)), {{ui:Collada}} ([Exportar el modelo a Collada o para Google Earth](topic:collada): archivos .dae y .kmz de Google Earth), el .glb de {{ui:Para renderizar}}, las imágenes renderizadas, las hojas y los planos en PDF, los calendarios y las listas en CSV, las incidencias BCF, la hoja de cálculo COBie, los archivos de familia y los escaneos registrados como LAS o E57. BimCraft no guarda archivos DWG, DXF ni de proyecto, y nunca modifica los archivos que se abrieron.

:::chromium
Chrome y Edge guardan las descargas en la carpeta configurada en sus ajustes, normalmente Descargas. Para que se le pregunte dónde guardar cada archivo, active «Preguntar dónde guardar cada archivo antes de descargarlo» en la configuración de descargas del navegador.
:::

:::firefox
Firefox guarda en la carpeta Descargas, salvo que haya elegido «Preguntar siempre dónde guardar archivos» en su configuración.
:::

:::safari
Safari guarda en Descargas, salvo que elija otra carpeta en **Safari > Ajustes > General > Ubicación de descarga de archivos**.
:::

## Guardar por segunda vez

Cada guardado descarga el modelo completo con **todas las ediciones desde que se abrió**, no solo las hechas después del último guardado. La lista de {{ui:Cambios}} se vacía de nuevo tras cada guardado, así que no se puede deshacer más allá de un guardado. Para volver a empezar desde el original, abra de nuevo el archivo original.

## Archivos grandes y memoria

- Los archivos **IFC** se leen completos en la memoria de la pestaña, y la geometría 3D ocupa memoria adicional. Un modelo de unos cientos de megabytes puede ser demasiado para un portátil. A partir de 1,5 millones de triángulos, los bordes se desactivan para ahorrar memoria («Los bordes están desactivados en modelos muy grandes»).
- Los **archivos de proyecto** no se leen completos. BimCraft lee solo las pocas partes que necesita, de unos 40 KB a 100 KB sea cual sea el tamaño del archivo, así que un modelo central de 500 MB en una unidad de red se abre en un momento.
- Los archivos **DWG y DXF** se leen completos. Un dibujo muy grande muestra «Este dibujo es muy grande; solo se muestra una parte».
- Las **carpetas** de hasta 20.000 archivos se abren. Solo se leen los pocos kilobytes que necesita cada ficha de modelo.

Véase [Navegadores, dispositivos y memoria](topic:platforms) para más información.

## En línea y sin conexión

Abrir archivos nunca necesita internet. Un lector se carga desde el sitio la primera vez que se necesita: el motor IFC, la primera vez que se abre un modelo IFC («Iniciando el motor IFC…»). Los lectores de DWG y DXF forman parte de la aplicación.

:::offline
No hay conexión. Si el botón de la barra de la aplicación dice {{ui:Listo sin conexión}}, todos los formatos se abren como de costumbre. Si no, un modelo IFC no puede abrirse salvo que ya se haya abierto uno en esta pestaña: conéctese primero. Véase [En línea y sin conexión](topic:online-offline).
:::

Para usar BimCraft sin conexión, haga clic en {{ui:Guardar para uso sin conexión}} en la barra de la aplicación mientras tenga conexión, y espere a que aparezca {{ui:Listo sin conexión}}. La copia guardada ocupa unos 33 MB; incluye el motor IFC, así que los modelos IFC también se abren sin conexión. [Trabajar sin conexión](common:offline) explica en general las copias guardadas.

## Guardado en la nube

El guardado en la nube todavía no está disponible. Guarde sus copias editadas en su propio equipo o en el servidor de archivos de su oficina, como haría con cualquier otro archivo. Véase [Sus archivos](common:your-files).
