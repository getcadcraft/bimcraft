---
title: Buscar dibujos vinculados e imágenes
summary: Muestre los dibujos vinculados de un dibujo (referencias externas o xrefs) y las imágenes del cuadro de rótulo, abriendo su carpeta o agregando los archivos a mano.
keywords: xref, referencia externa, dibujo vinculado, adjuntar, superponer, imagen, fotografía, logotipo, cuadro de rótulo, xref faltante, etransmit, administrador de referencias
from: 5593d4b1
---

## Qué hará

Complete un dibujo: muestre los dibujos a los que enlaza (referencias externas, o xrefs) y las imágenes que usa, como un logotipo en el cuadro de rótulo.

## La forma fácil: abrir la carpeta

1. Haga clic en {{ui:Open a folder}} y elija la carpeta que contiene el dibujo y sus vínculos, por ejemplo toda la carpeta `Cad` de un proyecto.
2. En el informe de la carpeta, desplácese hasta **Dibujos CAD**.
3. Haga clic en el dibujo.
4. Mire el panel {{ui:Properties}} a la derecha, bajo **Dibujos vinculados** e **Imágenes**.

BimCraft busca cada dibujo vinculado por su nombre ("*nombre*.dwg"), primero en la misma carpeta que el dibujo y luego en cualquier parte de la carpeta que abrió. Las imágenes se encuentran de la misma manera, y también por un nombre parecido: una exportación de eTransmit o de Revit suele agregar el nombre del proyecto al inicio, así que `logo.png` se encuentra como `Tower-logo-5425051.png`.

## La otra forma: agregar archivos a mano

1. Abra el dibujo por sí solo.
2. A la derecha, bajo **Dibujos vinculados**, haga clic en {{ui:Add linked drawings…}}. Bajo **Imágenes**, el botón es {{ui:Add pictures…}}; ambos abren el mismo selector.
3. Elija los archivos `.dwg` vinculados y los archivos de imagen. Puede elegir varios a la vez.
4. Espere mientras BimCraft vuelve a abrir el dibujo con ellos.

## Qué debe ver

Cada dibujo vinculado e imagen aparece en la lista con una etiqueta:

| Etiqueta | Significa |
|---|---|
| **Mostrado** | Encontrado y dibujado. La ruta bajo él indica de dónde vino, o "agregado por usted". |
| **Mostrado, nombre parecido** | Una imagen encontrada por un nombre parecido. Compruebe que sea la correcta. |
| **No encontrado** | No está en la carpeta ni en los archivos que agregó. Una imagen faltante se muestra como su marco vacío. |
| **TIFF no se puede mostrar en un navegador** | La imagen es un archivo TIFF, que los navegadores no dibujan. Guárdela como PNG con el mismo nombre y agréguela. |
| **No se pudo leer** | El archivo se encontró, pero no se pudo abrir como imagen. |

El panel {{ui:Drawing}} a la izquierda muestra "*n* de *m* cargados" para los dibujos vinculados. Las capas de los dibujos vinculados aparecen en {{ui:Layers}} como "*nombre del vínculo*|*capa*".

## Errores comunes

- **Abrir solo el dibujo.** "Este dibujo muestra solo su propio contenido hasta que se agreguen sus dibujos vinculados. Abrir la carpeta completa del proyecto los encuentra automáticamente."
- **Abrir una carpeta demasiado pequeña.** Si los vínculos están en una carpeta hermana, abra la carpeta padre.
- **Vínculos renombrados.** BimCraft empareja los dibujos vinculados por nombre. Un vínculo renombrado en el disco no se encuentra; agréguelo a mano.
- **Vínculos de vínculos.** BimCraft carga los dibujos a los que enlaza el dibujo abierto. Los dibujos vinculados dentro de esos no se buscan, así que normalmente no se muestran en esta versión.
