---
title: Navegadores, dispositivos y memoria
summary: Qué cambia en BimCraft entre Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux, con ratón, trackpad o pantalla táctil, y qué tamaño de archivo puede manejar.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tableta, móvil, táctil, trackpad, memoria, archivos grandes, webgl, rendimiento
from: fd8acba1
---

BimCraft funciona en las versiones actuales de Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux. La vista 3D necesita WebGL, que tienen todos los navegadores actuales. Vea [Navegadores y ordenadores](common:browsers) para lo que necesitan las aplicaciones en general.

## Abrir una carpeta

| Navegador | {{ui:Abrir una carpeta}} hace esto | Arrastrar una carpeta | {{ui:Carpetas recientes}} |
|---|---|---|---|
| Chrome, Edge | El selector de carpetas del navegador, y luego "¿Permitir que el sitio vea los archivos?": haga clic en **Ver archivos** | Se abre sin preguntar | Sí, para carpetas elegidas o arrastradas |
| Firefox | El selector de carpetas del sistema | Se abre sin preguntar | No |
| Safari | El selector de carpetas del sistema, con un botón **Subir** (no se sube nada) | Se abre sin preguntar | No |

Por debajo, Chrome y Edge usan el selector de acceso al sistema de archivos (File System Access) y pueden recordar la carpeta. Firefox y Safari usan el selector de carpetas más antiguo, que entrega todos los archivos de la carpeta a la vez y no se puede recordar. Una carpeta arrastrada se lee entrada por entrada en todos los navegadores.

:::chromium
Brave y otros navegadores basados en Chromium desactivan el selector de carpetas. BimCraft usa entonces el selector de carpetas del sistema, y el navegador puede preguntar "¿Subir *n* archivos a este sitio?". No se sube nada; los archivos solo van a la pestaña. Arrastrar la carpeta evita la pregunta.
:::

## Mac, Windows y Linux

- Los atajos {{key:Mod+S}} y {{key:Mod+Z}} son Comando en Mac y Ctrl en Windows y Linux.
- {{key:Ctrl+Shift+F}} (modos de pantalla) es Control en todas las plataformas, incluido Mac.
- Los cuadros de diálogo de archivos y la carpeta de descargas son los del sistema.

## Ratón, trackpad y pantalla táctil

| Entrada | Vista 3D | Dibujo 2D |
|---|---|---|
| Ratón | Arrastrar con el botón izquierdo orbita, con el derecho desplaza, la rueda hace zoom, el clic selecciona | Cualquier arrastre desplaza, la rueda hace zoom, el doble clic encuadra |
| Trackpad | Clic y arrastre orbita; {{key:Shift}} o {{key:Mod}} y arrastre desplaza; el desplazamiento con dos dedos o el pellizco hacen zoom | Clic y arrastre desplaza; el desplazamiento con dos dedos o el pellizco hacen zoom |
| Táctil | Un dedo orbita, dos dedos pellizcan y desplazan, un toque selecciona | Un dedo desplaza; todavía no hay zoom por pellizco; un toque en {{ui:Encuadrar}} |

En un trackpad de Mac, el clic derecho es un clic con dos dedos (o Control y clic). Vea [Teclas, ratones y trackpads](common:keys).

Las tabletas y los móviles pueden abrir archivos sueltos y verlos, pero la pantalla es pequeña, muchos navegadores móviles no pueden elegir carpetas, y los modelos grandes pueden no caber en su memoria. Un ordenador funciona mejor.

## Archivos grandes y memoria

Todo lo que lee BimCraft vive en la memoria de la pestaña del navegador. Cuánta memoria puede usar una pestaña depende del navegador y de su ordenador, más que de BimCraft.

| Archivo | Cuánto se lee | Qué esperar |
|---|---|---|
| IFC | El archivo completo, más la geometría 3D construida a partir de él | Depende de su ordenador y su navegador; un modelo de varios cientos de megabytes puede ser demasiado para un portátil. Por encima de 1.5 millones de triángulos, las aristas se desactivan |
| Archivos de proyecto y de familias | Entre 40 KB y 100 KB, sea cual sea su tamaño | Incluso los modelos centrales muy grandes se abren en un momento, también desde una unidad de red |
| DWG y DXF | El archivo completo | Los dibujos muy grandes muestran "Este dibujo es muy grande; solo se muestra una parte." |
| Carpetas | La lista de archivos, más unos pocos kilobytes por modelo | Hasta 20,000 archivos |

Si una pestaña se queda sin memoria, el navegador muestra su propia página de error ("Aw, Snap!" en Chrome, por ejemplo). Cierre otras pestañas, recargue BimCraft e inténtelo de nuevo, o use un ordenador con más memoria.

## Relacionado

- [En línea y sin conexión](topic:online-offline)
- [Solución de problemas](topic:troubleshooting)
