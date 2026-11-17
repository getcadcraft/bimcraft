---
title: Navegadores, dispositivos y memoria
summary: Qué cambia en BimCraft entre Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux, con mouse, trackpad o pantalla táctil, y qué tamaño de archivo puede tomar.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tableta, teléfono, táctil, trackpad, memoria, archivos grandes, webgl, rendimiento
from: fd8acba1
---

BimCraft funciona en las versiones actuales de Chrome, Edge, Firefox y Safari, en Mac, Windows y Linux. La vista 3D necesita WebGL, que tienen todos los navegadores actuales. Ver [Navegadores y computadoras](common:browsers) para lo que necesitan las aplicaciones en general.

## Abrir una carpeta

| Navegador | {{ui:Open a folder}} hace esto | Arrastrar una carpeta | {{ui:Recent folders}} |
|---|---|---|---|
| Chrome, Edge | El selector de carpetas del navegador, y después "¿Permitir que el sitio vea archivos?": hacé clic en **View files** | Se abre sin preguntar | Sí, para carpetas elegidas o arrastradas |
| Firefox | El selector de carpetas del sistema | Se abre sin preguntar | No |
| Safari | El selector de carpetas del sistema, con un botón **Upload** (no se sube nada) | Se abre sin preguntar | No |

Detrás de escena: Chrome y Edge usan el selector de File System Access y pueden recordar la carpeta. Firefox y Safari usan el selector de carpetas más antiguo, que entrega todos los archivos de la carpeta de una vez y no se puede recordar. Una carpeta arrastrada se lee entrada por entrada en todos los navegadores.

:::chromium
Brave y algunos otros navegadores basados en Chromium desactivan el selector de carpetas. BimCraft entonces usa el selector de carpetas del sistema, y el navegador puede preguntar "¿Subir *n* archivos a este sitio?". No se sube nada; los archivos solo van a la pestaña. Arrastrar la carpeta evita la pregunta.
:::

## Mac, Windows y Linux

- Los atajos escritos {{key:Mod+S}} y {{key:Mod+Z}} son Command en Mac y Ctrl en Windows y Linux.
- {{key:Ctrl+Shift+F}} (modos de pantalla) es Control en todas las plataformas, incluida una Mac.
- Los diálogos de archivos y la carpeta de descargas son los de tu sistema.

## Mouse, trackpad y táctil

| Entrada | Vista 3D | Dibujo 2D |
|---|---|---|
| Mouse | Arrastrar con el botón izquierdo orbita, con el derecho desplaza, la rueda hace zoom, el clic elige | Cualquier arrastre desplaza, la rueda hace zoom, el doble clic ajusta |
| Trackpad | Arrastrar con clic orbita; {{key:Shift}} o {{key:Mod}} y arrastrar desplazan; el desplazamiento de dos dedos o el pellizco hacen zoom | Arrastrar con clic desplaza; el desplazamiento de dos dedos o el pellizco hacen zoom |
| Táctil | Un dedo orbita, dos dedos pellizcan y desplazan, un toque elige | Un dedo desplaza; todavía no hay zoom con pellizco; tocá {{ui:Fit}} |

En un trackpad de Mac, el clic derecho es un clic con dos dedos (o Control y clic). Ver [Teclas, mouse y trackpads](common:keys).

Las tabletas y los teléfonos pueden abrir archivos sueltos y mirarlos, pero la pantalla es chica, muchos navegadores móviles no pueden elegir carpetas, y los modelos grandes pueden no entrar en su memoria. Una computadora funciona mejor.

## Archivos grandes y memoria

Todo lo que lee BimCraft vive en la memoria de la pestaña del navegador. Cuánto puede usar una pestaña depende más del navegador y de tu computadora que de BimCraft.

| Archivo | Cuánto se lee | Qué esperar |
|---|---|---|
| IFC | El archivo completo, más la geometría 3D que se arma a partir de él | Depende de tu computadora y navegador; un modelo de varios cientos de megabytes puede ser demasiado para una laptop. Por encima de 1,5 millones de triángulos, los bordes se apagan |
| Archivos de proyecto y de familia | Unos 40 KB a 100 KB, sea cual sea el tamaño | Incluso los modelos centrales muy grandes se abren en un momento, también desde una unidad de red |
| DWG y DXF | El archivo completo | Los planos muy grandes muestran "This drawing is very large; only part of it is shown." |
| Carpetas | La lista de archivos, más unos pocos kilobytes por modelo | Hasta 20.000 archivos |

Si una pestaña se queda sin memoria, el navegador muestra su propia página de error (por ejemplo "Aw, Snap!" en Chrome). Cerrá otras pestañas, recargá BimCraft y volvé a intentar, o usá una computadora con más memoria.

## Relacionado

- [En línea y sin conexión](topic:online-offline)
- [Solución de problemas](topic:troubleshooting)
