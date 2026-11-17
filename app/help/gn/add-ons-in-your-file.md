---
title: Complementos que usa tu archivo
summary: BimCraft anota en un archivo IFC qué complementos escribieron en él, y ofrece agregar los que te faltan cuando lo abrís.
keywords: complemento, addon, este archivo usa, complemento faltante, trusscraft, biblioteca, registro, cadcraft_addons
from: 9d9500d8
---

## Mba'e ojapóva

Cuando un complemento escribe en el modelo (una cercha, un tramo de caño), BimCraft anota el complemento y su versión en el proyecto IFC, en un conjunto de propiedades llamado CadCraft_AddOns. El registro se escribe en el mismo paso de deshacer que el cambio propio del complemento, así que deshacer el cambio también quita el registro. Otros programas ignoran ese conjunto de propiedades; lo que dibujó el complemento queda en el archivo de todos modos.

## Pasos

1. Abrí un archivo IFC en el que ayudó a hacer un complemento.
2. Si un complemento que usó no está activado, una nota encima del modelo dice cuáles son, con un botón para agregarlos desde tu cuenta de Biblioteca.
3. Agregalos, o cerrá la nota. El modelo se abre de todos modos.

## Errores comunes

- **No aparece ninguna nota.** No ingresaste a tu cuenta en esta pestaña, o el archivo no tiene registro (fue hecho antes de los registros, o por otro programa).
- **La lista de cambios dice "undefined".** Corregido: ahora las etiquetas muestran el nombre del complemento.

## Sigue

- [Colocar equipos y muebles desde la biblioteca](topic:place-from-library)
