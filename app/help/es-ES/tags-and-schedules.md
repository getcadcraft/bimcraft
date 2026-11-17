---
title: Etiquetar elementos y crear tablas por etiqueta
summary: Defina sus propias etiquetas (un nombre, un tipo, los valores permitidos, a qué clases se aplican), etiquete muchos elementos a la vez y cree tablas cuyas columnas, filtros y grupos lean las etiquetas. Las etiquetas se guardan en el IFC.
keywords: etiquetas, etiqueta, etiquetado, propiedades personalizadas, parámetros, parámetros compartidos, conjunto de propiedades, pset, tabla, filtro, agrupar por, acabado, resistencia al fuego, edición masiva, csv
from: 9cc7c90d
---

## Qué hará

Una etiqueta es una propiedad propia, como *Acabado* o *Resistencia al fuego*. La define una vez para el proyecto, la asigna a muchos elementos a la vez, y cada tabla de BimCraft puede leerla: la tabla de etiquetas de aquí, {{ui:Cantidades}}, Buscar, Color por propiedad y [Documentos desde el modelo](topic:documents-from-the-model).

## Pasos

1. Abra un modelo IFC o inicie un edificio nuevo.
2. En el panel izquierdo, bajo {{ui:Cantidades}}, abra {{ui:Etiquetas}}.
3. Haga clic en {{ui:Añadir una etiqueta}}. Dé un nombre, elija su tipo y, si quiere, indique los valores permitidos (separados por comas) y las clases a las que se aplica (`IfcDoor`, `IfcWall` …). Haga clic en {{ui:Añadir la etiqueta}}.
4. Seleccione los elementos del modelo (Buscar le ayuda: elija todas las puertas a la vez).
5. Bajo {{ui:Etiquetar la selección}}, elija o escriba un valor para cada etiqueta que quiera asignar, deje las demás como están y haga clic en {{ui:Aplicar a … elementos seleccionados}}.
6. Bajo {{ui:Tabla de etiquetas}}, marque las columnas, añada filtros, elija {{ui:Agrupar por}} y después haga clic en {{ui:Descargar CSV}}.

## Qué debe ver

- Un paso en la lista de cambios por cada definición guardada y cada etiquetado; {{ui:Deshacer}} lo revierte.
- Los elementos de una clase para la que no sirve una etiqueta quedan fuera de esa etiqueta, y la línea de estado indica cuántos son.
- La tabla de etiquetas lista una fila por elemento, agrupadas por el campo que eligió; haga clic en la primera celda de una fila para elegir ese elemento.
- {{ui:Cantidades}} enumera las etiquetas bajo `CadCraft_Tags`, así que allí puede sumar superficies o recuentos por etiqueta.

## Tipos

Los tipos son la misma lista que los parámetros de familia: Longitud (milímetros), Ángulo (grados), Número, Número entero, Sí / No, Pluma (1–16), Texto, Material y Relleno. Un valor que no encaja con su tipo, o que no es uno de los valores permitidos, se rechaza con un mensaje y no cambia nada.

## Conviene saber

- Todo es IFC estándar, así que otros programas leen los valores: las definiciones están en el conjunto de propiedades `CadCraft_TagDefs` del proyecto, y los valores en el conjunto de propiedades `CadCraft_Tags` de cada elemento (una propiedad por etiqueta). Las longitudes se escriben en la unidad de longitud del archivo.
- `IfcWall` en las clases de una etiqueta también incluye los muros standard case y los muros compuestos por elementos.
- Renombrar una etiqueta renombra sus valores en cada elemento en el mismo paso. Eliminar una etiqueta elimina solo su definición: los valores ya asignados permanecen en los elementos como propiedades normales. Bórrelos antes (elija {{ui:Borrar}}) para quitarlos.
- Las etiquetas de la aplicación de dibujo CadCraft (atributos de bloque) todavía no están implementadas.
