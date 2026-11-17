---
title: Etiquetar elementos y crear tablas por etiqueta
summary: Defina sus propias etiquetas (un nombre, un tipo, los valores permitidos y las clases a las que aplican), etiquete muchos elementos a la vez y cree tablas cuyas columnas, filtros y grupos lean las etiquetas. Las etiquetas se guardan en el IFC.
keywords: etiquetas, etiqueta, etiquetado, propiedades personalizadas, parámetros, parámetros compartidos, conjunto de propiedades, pset, tabla, filtro, agrupar por, acabado, resistencia al fuego, edición masiva, csv
from: 9cc7c90d
---

## Qué hará

Una etiqueta es una propiedad propia, como *Acabado* o *Resistencia al fuego*. La define una vez para el proyecto, la asigna a muchos elementos a la vez, y todas las tablas de BimCraft pueden leerla: la tabla de etiquetas de aquí, {{ui:Cantidades}}, Buscar, Color por propiedad y [Documentos a partir del modelo](topic:documents-from-the-model).

## Pasos

1. Abra un modelo IFC, o inicie un edificio nuevo.
2. En el panel izquierdo, bajo {{ui:Cantidades}}, abra {{ui:Etiquetas}}.
3. Haga clic en {{ui:Agregar una etiqueta}}. Dele un nombre, elija su tipo y, si lo desea, enumere los valores permitidos (separados por comas) y las clases para las que aplica (`IfcDoor`, `IfcWall` …). Haga clic en {{ui:Agregar la etiqueta}}.
4. Seleccione los elementos en el modelo (la herramienta Buscar ayuda: elija todas las puertas a la vez).
5. Bajo {{ui:Etiquetar la selección}}, elija o escriba un valor para cada etiqueta que quiera asignar, deje las demás como están, y haga clic en {{ui:Aplicar a … elementos seleccionados}}.
6. Bajo {{ui:Tabla de etiquetas}}, marque las columnas, agregue filtros, elija {{ui:Agrupar por}} y luego haga clic en {{ui:Descargar CSV}}.

## Lo que debe ver

- Un paso en la lista de cambios por cada definición guardada y cada etiquetado; {{ui:Deshacer}} lo revierte.
- Los elementos de una clase para la que la etiqueta no aplica quedan fuera de esa etiqueta, y la línea de estado indica cuántos.
- La tabla de etiquetas enumera una fila por elemento, agrupada por el campo que eligió; haga clic en la primera celda de una fila para elegir ese elemento.
- {{ui:Cantidades}} enumera las etiquetas bajo `CadCraft_Tags`, así que puede sumar áreas o conteos por etiqueta allí.

## Tipos

Los tipos son la misma lista que los parámetros de familia: Longitud (milímetros), Ángulo (grados), Número, Número entero, Sí / No, Pluma (1–16), Texto, Material y Relleno. Un valor que no corresponde a su tipo, o que no está entre los valores permitidos, se rechaza con un mensaje, y nada cambia.

## Conviene saber

- Todo es IFC estándar, así que otros programas leen los valores: las definiciones están en un conjunto de propiedades `CadCraft_TagDefs` en el proyecto, y los valores en un conjunto de propiedades `CadCraft_Tags` en cada elemento (una propiedad por etiqueta). Las longitudes se escriben en la unidad de longitud del archivo.
- `IfcWall` en las clases de una etiqueta también incluye los muros de caso estándar y los muros por elementos.
- Cambiar el nombre de una etiqueta cambia el nombre de sus valores en todos los elementos, en el mismo paso. Quitar una etiqueta elimina sólo su definición: los valores ya asignados permanecen en los elementos como propiedades simples. Bórrelos primero (elija {{ui:Borrar}}) para quitarlos.
- Las etiquetas de la aplicación de dibujo CadCraft (atributos de bloque) aún no están implementadas.
