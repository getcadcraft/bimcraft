---
title: Complementos que usa su archivo
summary: BimCraft anota en un archivo IFC qué complementos escribieron en él y, al abrirlo, le ofrece añadir los que le faltan.
keywords: complemento, addon, este archivo usa, complemento que falta, trusscraft, biblioteca, registro, cadcraft_addons
from: 9d9500d8
---

## Qué hace

Cuando un complemento escribe en el modelo (una cercha, un tramo de tuberías), BimCraft registra el complemento y su versión en el proyecto IFC, en un conjunto de propiedades llamado CadCraft_AddOns. El registro se escribe en el mismo paso de deshacer que el propio cambio del complemento, así que deshacer el cambio también elimina el registro. Los demás programas ignoran ese conjunto de propiedades; lo que dibujó el complemento permanece en el archivo de todos modos.

## Pasos

1. Abra un archivo IFC en cuya creación ayudó un complemento.
2. Si falta algún complemento que se usó, aparece un aviso encima del modelo que indica cuáles son, con un botón para añadirlos desde su cuenta de Biblioteca.
3. Añádalos o cierre el aviso. El modelo se abre de todos modos.

## Errores frecuentes

- **No aparece ningún aviso.** No ha iniciado sesión en su cuenta en esta pestaña, o el archivo no tiene registro (se creó antes de que existieran los registros, o con otro programa).
- **La lista de cambios dice «undefined».** Corregido: las etiquetas ahora muestran el nombre del complemento.

## Siguiente

- [Colocar equipos y mobiliario desde la biblioteca](topic:place-from-library)
