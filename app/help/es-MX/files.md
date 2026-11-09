---
title: Archivos que BimCraft abre y guarda
summary: Todos los formatos que BimCraft abre, qué conserva, qué guarda, dónde van los archivos guardados y qué cambia entre navegadores y cuando no hay conexión.
keywords: formatos, abrir, guardar, exportar, descargar, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, subir, privacidad, tamaño de archivo
from: a7275dbf
---

BimCraft lee archivos de su computadora, en la pestaña del navegador. **No se sube nada** a CadCraft ni a nadie más. Al guardar, BimCraft entrega al navegador un archivo nuevo para descargar; nunca sobrescribe un archivo que usted abrió.

## Lo que abre

| Formato | Extensiones | Lo que obtiene |
|---|---|---|
| IFC | `.ifc` | El modelo en 3D, niveles, conteo de elementos y las propiedades de cada elemento. Se pueden cambiar nombres, etiquetas y valores únicos de propiedades. |
| Archivos de proyecto y de familias | `.rvt` `.rfa` `.rte` `.rft` | Una ficha del archivo: versión, compilación, trabajo compartido, información del proyecto, parámetros de familia, archivos vinculados y la imagen de vista previa. Sin 3D. |
| DWG | `.dwg` | El dibujo en 2D: espacio modelo, cada hoja, capas, dibujos vinculados, imágenes y vista de impresión. También el espacio modelo en 3D. Se verifican los formatos de AutoCAD 2000 a 2018. |
| DXF | `.dxf` | Lo mismo que DWG. |
| STEP | `.step` `.stp` | Una pieza, un equipo o un modelo de un proveedor (AP203, AP214, AP242) en 3D: cada sólido se convierte en un elemento (un proxy de elemento de edificio) de un pequeño modelo IFC en un nivel, se lee como triángulos a su tamaño real, y un ensamblaje con cada pieza donde el archivo la coloca. A partir de ahí funciona como cualquier IFC: propiedades, secciones, medir, guardar como IFC. No se leen los colores ni el árbol del ensamblaje. |
| Nubes de puntos | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | El escaneo en la vista 3D, junto a un modelo o por sí solo: vea [Mostrar una nube de puntos junto al modelo](topic:point-clouds). |
| Paquete de proyecto | `.ccbundle.zip` | El modelo con sus vistas, presentaciones y grupos de propiedades: vea [Abrir un paquete de proyecto](topic:open-project-bundle). |
| Una carpeta | cualquiera | Un informe de cada modelo, dibujo y paquete de proyecto que contiene. Cualquier IFC, modelo, dibujo o paquete del informe se abre con un clic. |

[Lo que BimCraft lee de cada formato](topic:file-formats) se explica con detalle.

BimCraft determina qué es un archivo revisando sus primeros bytes además de su nombre, así que un archivo de proyecto con una extensión poco común sigue abriéndose como ficha del archivo.

### Lo que no se abre

- `.ifczip` y `.ifcxml`: BimCraft muestra: ".ifczip todavía no es compatible. Guarde o exporte el modelo como un archivo .ifc simple." Descomprima el `.ifczip` (contiene un `.ifc` simple) o exporte de nuevo como IFC simple.
- Los dibujos DGN aparecen en el informe de una carpeta, pero no se abren.
- Los PDF, las imágenes y los archivos de oficina no se abren por sí solos. Las imágenes se usan como imágenes dentro de un DWG, y {{ui:Compilación}} › {{ui:Desde un dibujo…}} convierte las páginas de un PDF o de un escaneo en muros: vea [Muros desde un juego de planos](topic:walls-from-plans).

## Lo que guarda

| Usted hace clic en | Obtiene | Dónde |
|---|---|---|
| {{ui:Guardar como IFC}} | Un archivo IFC nuevo con sus cambios, llamado "*nombre original* (edited).ifc" | La carpeta de descargas de su navegador |
| {{ui:Descargar CSV}} en el programa de equipos | Un CSV de los elementos de la lista, llamado "*nombre del dibujo* equipment.csv" | La carpeta de descargas de su navegador |

Otras cosas se guardan donde se crean, cada una en su propio tema: {{ui:USD}} ([Exporte el modelo como USD](topic:usd)), {{ui:Collada}} (.dae y el .kmz de Google Earth: [Exporte el modelo como Collada o para Google Earth](topic:collada)), el .glb de {{ui:Para renderizar}}, las imágenes renderizadas, las hojas y los planos en PDF, los programas y las listas en CSV, las incidencias BCF, la hoja de cálculo COBie, los archivos de familia y los escaneos registrados como LAS o E57. BimCraft no guarda archivos DWG, DXF ni de proyecto, y nunca cambia los archivos que usted abrió.

:::chromium
Chrome y Edge guardan las descargas en la carpeta configurada en sus opciones, normalmente Descargas. Para que le pregunten dónde guardar cada archivo, active "Preguntar dónde guardar cada archivo antes de descargarlo" en la configuración de descargas del navegador.
:::

:::firefox
Firefox guarda en la carpeta Descargas, a menos que lo haya configurado con "Preguntar siempre dónde guardar archivos" en su configuración.
:::

:::safari
Safari guarda en Descargas, a menos que elija otra carpeta en **Safari > Settings > General > File download location**.
:::

## Guardar por segunda vez

Cada guardado descarga el modelo completo con **cada cambio desde que lo abrió**, no solo los cambios hechos después del último guardado. La lista de {{ui:Cambios}} se vacía de nuevo después de cada guardado, así que no puede deshacer más allá de un guardado. Para empezar otra vez desde el original, abra el archivo original de nuevo.

## Archivos grandes y memoria

- Los archivos **IFC** se leen completos en la memoria de la pestaña, y la geometría 3D ocupa más memoria encima. Un modelo de unos cientos de megabytes puede ser demasiado para una laptop. Por encima de 1.5 millones de triángulos, las aristas se desactivan para ahorrar memoria ("Las aristas están desactivadas para modelos muy grandes").
- Los **archivos de proyecto** no se leen completos. BimCraft lee solo las partes pequeñas que necesita, de unos 40 KB a 100 KB sin importar qué tan grande sea el archivo, así que un modelo central de 500 MB en una unidad de red se abre en un momento.
- Los archivos **DWG y DXF** se leen completos. Un dibujo muy grande muestra "Este dibujo es muy grande; solo se muestra una parte."
- Se abren **carpetas** de hasta 20,000 archivos. Solo se leen los pocos kilobytes que necesita cada ficha de modelo.

Vea [Navegadores, dispositivos y memoria](topic:platforms) para más información.

## En línea y sin conexión

Abrir archivos nunca necesita internet. Un lector se carga desde el sitio la primera vez que lo necesita: el motor de IFC, la primera vez que abre un modelo IFC ("Iniciando el motor de IFC…"). Los lectores de DWG y DXF forman parte de la aplicación.

:::offline
Usted está sin conexión. Si el botón de la barra de la aplicación dice {{ui:Lista sin conexión}}, todos los formatos se abren como de costumbre. Si no, un modelo IFC no se puede abrir a menos que ya se haya abierto uno en esta pestaña: conéctese primero. Vea [En línea y sin conexión](topic:online-offline).
:::

Para usar BimCraft sin conexión, haga clic en {{ui:Guardar para usar sin conexión}} en la barra de la aplicación mientras tenga conexión, y espere a que aparezca {{ui:Lista sin conexión}}. La copia guardada pesa unos 33 MB; incluye el motor de IFC, así que los modelos IFC también se abren sin conexión. [Trabajar sin conexión](common:offline) explica en general las copias guardadas.

## Guardado en la nube

El guardado en la nube todavía no está disponible. Guarde sus copias editadas en su propia computadora o en el servidor de archivos de su oficina, como haría con cualquier otro archivo. Vea [Sus archivos](common:your-files).
