---
title: Buscar dibujos vinculados e imágenes
summary: Muestre los dibujos vinculados de un dibujo (referencias externas o xrefs) y las imágenes del cajetín, abriendo su carpeta o añadiendo los archivos a mano.
keywords: xref, referencia externa, dibujo vinculado, adjuntar, superposición, imagen, fotografía, logotipo, cajetín, xref que falta, etransmit, gestor de referencias
from: 5593d4b1
---

## Qué hará

Complete un dibujo: muestre los dibujos a los que enlaza (referencias externas, o xrefs) y las imágenes que usa, como un logotipo en el cajetín.

## La forma fácil: abrir la carpeta

1. Haga clic en {{ui:Abrir una carpeta}} y elija la carpeta que contiene el dibujo y sus vínculos, por ejemplo toda la carpeta `Cad` de un proyecto.
2. En el informe de la carpeta, desplácese hasta **Dibujos CAD**.
3. Haga clic en el dibujo.
4. Mire el panel {{ui:Propiedades}} a la derecha, bajo **Dibujos vinculados** e **Imágenes**.

BimCraft busca cada dibujo vinculado por su nombre ("*nombre*.dwg"), primero en la misma carpeta que el dibujo y después en cualquier parte de la carpeta que abrió. Las imágenes se buscan del mismo modo, y también por un nombre parecido: una exportación de eTransmit o de Revit suele añadir el nombre del proyecto delante, así que `logo.png` se encuentra como `Tower-logo-5425051.png`.

## La otra forma: añadir archivos a mano

1. Abra el dibujo por sí solo.
2. A la derecha, bajo **Dibujos vinculados**, haga clic en {{ui:Agregar dibujos vinculados…}}. Bajo **Imágenes**, el botón es {{ui:Agregar imágenes…}}; ambos abren el mismo selector.
3. Elija los archivos `.dwg` vinculados y los archivos de imagen. Puede elegir varios a la vez.
4. Espere mientras BimCraft vuelve a abrir el dibujo con ellos.

## Qué debe ver

Cada dibujo vinculado e imagen aparece en la lista con una etiqueta:

| Etiqueta | Significa |
|---|---|
| **Mostrado** | Encontrado y dibujado. La ruta bajo él indica de dónde procede, o "añadido por usted". |
| **Mostrado, nombre similar** | Una imagen encontrada por un nombre parecido. Compruebe que es la correcta. |
| **No encontrado** | No está en la carpeta ni en los archivos que añadió. Una imagen que falta aparece como su marco vacío. |
| **El TIFF no se puede mostrar en un navegador** | La imagen es un archivo TIFF, que los navegadores no dibujan. Guárdela como PNG con el mismo nombre y añádala. |
| **No se pudo leer** | El archivo se encontró, pero no se pudo abrir como imagen. |

El panel {{ui:Dibujo}} de la izquierda muestra "*n* de *m* cargados" para los dibujos vinculados. Las capas de los dibujos vinculados aparecen en {{ui:Capas}} como "*nombre del vínculo*|*capa*".

## Errores habituales

- **Abrir solo el dibujo.** "Este dibujo muestra solo su propio contenido hasta que se añadan sus dibujos vinculados. Abrir toda la carpeta del proyecto los encuentra automáticamente."
- **Abrir una carpeta demasiado pequeña.** Si los vínculos están en una carpeta hermana, abra la carpeta superior.
- **Vínculos renombrados.** BimCraft empareja los dibujos vinculados por nombre. Un vínculo renombrado en disco no se encuentra; añádalo a mano.
- **Vínculos de vínculos.** BimCraft carga los dibujos a los que enlaza el dibujo abierto. Los dibujos enlazados dentro de ellos no se buscan, así que normalmente no aparecen en esta versión.
