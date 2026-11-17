---
title: Etiquetar elementos y hacer planillas por etiqueta
summary: Definí tus propias etiquetas (un nombre, un tipo, los valores permitidos, a qué clases aplican), etiquetá muchos elementos a la vez, y hacé planillas cuyas columnas, filtros y grupos lean las etiquetas. Las etiquetas quedan guardadas en el IFC.
keywords: etiquetas, etiqueta, etiquetado, propiedades personalizadas, parámetros, parámetros compartidos, conjunto de propiedades, pset, planilla, filtro, agrupar por, acabado, resistencia al fuego, edición masiva, csv
from: 9cc7c90d
---

## Mba'épa oñemboguáta

Una etiqueta es una propiedad tuya, como *Acabado* o *Resistencia al fuego*. La definís una vez para el proyecto, la ponés en muchos elementos a la vez, y cualquier planilla de BimCraft puede leerla: la planilla de etiquetas de acá, {{ui:Cantidades}}, Buscar, Color por propiedad y [Documents from the model](topic:documents-from-the-model).

## Pasos

1. Abrí un modelo IFC, o empezá un edificio nuevo.
2. En el panel izquierdo, debajo de {{ui:Cantidades}}, abrí {{ui:Etiquetas}}.
3. Haga clic en {{ui:Agregar una etiqueta}}. Ponele un nombre, elegí su tipo, y si querés listá los valores permitidos (separados por comas) y las clases a las que aplica (`IfcDoor`, `IfcWall` …). Haga clic en {{ui:Agregar la etiqueta}}.
4. Elegí los elementos en el modelo (Buscar ayuda: elegí todas las puertas de una vez).
5. Debajo de {{ui:Etiquetar la selección}}, elegí o escribí un valor para cada etiqueta que querés poner, dejá las otras como están, y haga clic en {{ui:Aplicar a … elementos elegidos}}.
6. Debajo de {{ui:Planilla de etiquetas}}, marcá las columnas, agregá filtros, elegí {{ui:Agrupar por}}, y después {{ui:Descargar CSV}}.

## Qué deberías ver

- Un paso en la lista de cambios por cada definición guardada y cada etiquetado; {{ui:Deshacer}} lo quita.
- Los elementos de una clase para la que una etiqueta no aplica quedan fuera de esa etiqueta, y la línea de estado dice cuántos.
- La planilla de etiquetas lista una fila por elemento, agrupada por el campo que elegiste; hacé clic en la primera celda de una fila para elegir ese elemento.
- {{ui:Cantidades}} lista las etiquetas bajo `CadCraft_Tags`, así podés sumar superficies o cantidades por etiqueta ahí.

## Tipos

Los tipos son la misma lista que los parámetros de familia: Longitud (milímetros), Ángulo (grados), Número, Número entero, Sí / No, Pluma (1–16), Texto, Material y Relleno. Un valor que no encaja en su tipo, o que no es uno de los valores permitidos, se rechaza con un mensaje, y no cambia nada.

## Para tener en cuenta

- Todo es IFC normal, así que otros programas leen los valores: las definiciones están en un conjunto de propiedades `CadCraft_TagDefs` del proyecto, y los valores en un conjunto de propiedades `CadCraft_Tags` de cada elemento (una propiedad por etiqueta). Las longitudes se escriben en la unidad de longitud del archivo.
- `IfcWall` en las clases de una etiqueta también incluye muros de caso estándar y muros compuestos por elementos.
- Renombrar una etiqueta renombra sus valores en cada elemento en el mismo paso. Quitar una etiqueta quita solo su definición: los valores ya puestos quedan en los elementos como propiedades comunes. Límpialos antes (elegí {{ui:Limpiar}}) para sacarlos.
- Las etiquetas de la aplicación de dibujo CadCraft (atributos de bloque) todavía no están construidas.
