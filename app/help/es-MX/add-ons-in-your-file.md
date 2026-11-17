---
title: Complementos que usa su archivo
summary: BimCraft anota en un archivo IFC qué complementos escribieron en él, y le ofrece agregar los que le faltan cuando lo abre.
keywords: complemento, addon, este archivo usa, complemento faltante, trusscraft, biblioteca, registro, cadcraft_addons
from: 9d9500d8
---

## Qué hace

Cuando un complemento escribe en el modelo (una armadura, un tramo de tubería), BimCraft registra el complemento y su versión en el proyecto IFC, en un conjunto de propiedades llamado CadCraft_AddOns. El registro se escribe en el mismo paso de deshacer que el cambio propio del complemento, de modo que deshacer el cambio también elimina el registro. Otros programas ignoran el conjunto de propiedades; lo que dibujó el complemento permanece en el archivo de todos modos.

## Pasos

1. Abra un archivo IFC que un complemento ayudó a crear.
2. Si falta algún complemento que se usó, una nota sobre el modelo indica cuáles son, con un botón para agregarlos desde su cuenta de biblioteca.
3. Agréguelos, o cierre la nota. El modelo se abre de todos modos.

## Errores comunes

- **No aparece ninguna nota.** No ha iniciado sesión en su cuenta en esta pestaña, o el archivo no tiene registro (se creó antes de los registros, o con otro programa).
- **La lista de cambios dice "undefined".** Corregido: las etiquetas ahora muestran el nombre del complemento.

## Siguiente

- [Coloque equipos y muebles desde la biblioteca](topic:place-from-library)
