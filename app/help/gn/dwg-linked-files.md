---
title: Encontrar planos vinculados e imágenes
summary: Mostrá los planos vinculados (xrefs) y las imágenes del cajetín de un plano, abriendo su carpeta o agregando los archivos a mano.
keywords: xref, referencia externa, plano vinculado, adjuntar, superposición, imagen, foto, logo, cajetín, xref faltante, etransmit, administrador de referencias
from: 5593d4b1
---

## Lo que hará

Completá un plano: mostrá los planos a los que enlaza (referencias externas, o xrefs) y las imágenes que usa, como un logo en el cajetín.

## La forma fácil: abrir la carpeta

1. Ojeclic {{ui:Abrir una carpeta}} y elegí la carpeta que contiene el plano y sus vínculos, por ejemplo toda la carpeta `Cad` de un proyecto.
2. En el informe de la carpeta, bajá hasta **Planos CAD**.
3. Ojeclic el plano.
4. Mirá el panel {{ui:Propiedades}} a la derecha, debajo de **Planos vinculados** e **Imágenes**.

BimCraft busca cada plano vinculado por su nombre ("*nombre*.dwg"), primero en la misma carpeta que el plano, y después en cualquier parte de la carpeta que abriste. Las imágenes se buscan del mismo modo, y también por un nombre parecido: una exportación de eTransmit o Revit suele agregar el nombre del proyecto delante, así que `logo.png` se encuentra como `Torre-logo-5425051.png`.

## La otra forma: agregar archivos a mano

1. Abrí el plano por sí solo.
2. A la derecha, debajo de **Planos vinculados**, ojeclic {{ui:Agregar planos vinculados…}}. Debajo de **Imágenes**, el botón es {{ui:Agregar imágenes…}}; ambos abren el mismo selector.
3. Elegí los archivos `.dwg` vinculados y los archivos de imagen. Podés elegir varios a la vez.
4. Esperá mientras BimCraft vuelve a abrir el plano con ellos.

## Lo que deberías ver

Cada plano vinculado e imagen aparece en la lista con una etiqueta:

| Etiqueta | Significa |
|---|---|
| **Mostrado** | Encontrado y dibujado. La ruta debajo indica de dónde vino, o "agregado por vos". |
| **Mostrado, nombre parecido** | Una imagen encontrada por un nombre parecido. Revisá que sea la correcta. |
| **No encontrado** | No está en la carpeta ni en los archivos que agregaste. Una imagen faltante se ve como su marco vacío. |
| **TIFF no se puede mostrar en un navegador** | La imagen es un archivo TIFF, que los navegadores no dibujan. Guardala como PNG con el mismo nombre y agregala. |
| **No se pudo leer** | El archivo se encontró pero no se pudo abrir como imagen. |

El panel {{ui:Plano}} a la izquierda muestra "*n* de *m* cargados" para los planos vinculados. Las capas de los planos vinculados aparecen en {{ui:Capas}} como "*nombre del vínculo*|*capa*".

## Errores comunes

- **Abrir solo el plano.** "Este plano muestra solo su propio contenido hasta que se agreguen sus planos vinculados. Abrir la carpeta completa del proyecto los encuentra automáticamente."
- **Abrir una carpeta demasiado chica.** Si los vínculos están en una carpeta hermana, abrí la carpeta padre.
- **Vínculos renombrados.** BimCraft encuentra los planos vinculados por nombre. Un vínculo renombrado en el disco no se encuentra; agregalo a mano.
- **Vínculos de vínculos.** BimCraft carga los planos a los que enlaza el plano abierto. Los planos enlazados dentro de esos no se buscan, así que normalmente no se muestran en esta versión.
