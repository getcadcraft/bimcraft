---
title: Comprobar un modelo por problemas habituales
summary: Encuentre elementos a los que falta una propiedad necesaria, GlobalId usados dos veces, elementos sin planta y copias superpuestas unas sobre otras.
keywords: comprobar, comprobación, validación, control de calidad, calidad, propiedad que falta, obligatoria, duplicado, globalid, guid, planta, apiladas, superposición, solapamiento
from: 4d835513
---

## Qué hará

Revise un modelo antes de entregarlo: los problemas que afectan a los cuadros de mediciones, a las cantidades y al software de otras personas.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Comprobaciones del modelo}} en el panel izquierdo.
3. En {{ui:Propiedades obligatorias}} ya hay una regla (cualquier clase, Nombre). Cambie su clase (o {{ui:Cualquier clase}}) y su propiedad, o haga clic en {{ui:Agregar una propiedad}} para añadir otra regla; la x quita una. Un elemento no cumple una regla cuando la propiedad falta o está vacía. Las reglas se mantienen en este navegador para todos los modelos.
4. Haga clic en {{ui:Ejecutar comprobaciones}}.
5. Haga clic en un resultado para seleccionar esos elementos y acercar la vista a ellos.

## Qué debe ver

- **Falta una propiedad obligatoria**: cada regla con los elementos que no tienen valor para ella.
- **GlobalId usado dos veces**: elementos que comparten un mismo GlobalId. Otro software los trata como un único elemento.
- **Sin planta**: elementos con una forma que ninguna planta contiene.
- **Copias superpuestas**: elementos de la misma clase y tipo, con la misma forma y en el mismo lugar, que se cuentan dos veces en las cantidades.

Cada línea de los resultados es un botón: haga clic en ella para seleccionar esos elementos y acercar la vista. Solo se listan los primeros 50 grupos de una comprobación. Los mismos hallazgos aparecen también en {{ui:Problemas}}.

## Conviene saber

- Las comprobaciones miran el modelo activo cuando hay varios abiertos. Consulte [Ver varios modelos IFC juntos](topic:several-models).
- Tras una edición, vuelva a ejecutar las comprobaciones.
- En el panel {{ui:Problemas}}, las longitudes, áreas y volúmenes de las frases de un problema siguen las {{ui:Unidades}} elegidas en la barra de herramientas (una puerta de "800 mm" se lee como 2'-7 1/2" en pies y pulgadas); cambie la unidad y el panel reescribe las frases.

## Siguiente

- [Auditar el modelo: habitaciones, etiquetas, LOD, colisiones e interfaces](topic:audit-the-model)
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Eliminar, cortar, copiar y pegar elementos](topic:copy-paste)
