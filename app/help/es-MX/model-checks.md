---
title: Revisar un modelo para detectar problemas comunes
summary: Encuentre elementos a los que les falta una propiedad que necesita, GlobalId usados dos veces, elementos sin nivel y copias encimadas unas sobre otras.
keywords: revisar, comprobar, comprobación del modelo, validación, control de calidad, calidad, propiedad faltante, obligatoria, duplicado, globalid, guid, nivel, encimado, superposición
from: 4d835513
---

## Qué hará

Revise un modelo antes de entregarlo: los problemas que afectan a los listados, las cuantificaciones y al software de otras personas.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Comprobaciones del modelo}} en el panel izquierdo.
3. En {{ui:Propiedades obligatorias}} ya hay una regla (cualquier clase, Name). Cambie su clase (o {{ui:Cualquier clase}}) y su propiedad, o haga clic en {{ui:Agregar una propiedad}} para agregar otra regla; la x elimina una. Un elemento no cumple una regla cuando la propiedad falta o está vacía. Las reglas se mantienen en este navegador para todos los modelos.
4. Haga clic en {{ui:Ejecutar comprobaciones}}.
5. Haga clic en un resultado para seleccionar esos elementos y hacer zoom sobre ellos.

## Lo que debe ver

- **Propiedad obligatoria faltante**: cada regla con los elementos que no tienen valor para ella.
- **GlobalId usado dos veces**: elementos que comparten un mismo GlobalId. Otro software los trata como un solo elemento.
- **Sin nivel**: elementos con una forma que ningún nivel contiene.
- **Copias encimadas**: elementos de la misma clase y tipo, con la misma forma en el mismo lugar, que se cuentan dos veces en las cantidades.

Cada línea de los resultados es un botón: haga clic para seleccionar esos elementos y hacer zoom sobre ellos. Solo se listan los primeros 50 grupos de cada comprobación. Los mismos hallazgos también aparecen en {{ui:Problemas}}.

## Conviene saber

- Las comprobaciones revisan el modelo activo cuando hay varios abiertos. Consulte [Ver varios modelos IFC juntos](topic:several-models).
- Después de una edición, vuelva a ejecutar las comprobaciones.
- En el panel {{ui:Problemas}}, las longitudes, áreas y volúmenes que aparecen en el texto de un problema siguen la {{ui:Unidades}} elegida en la barra de herramientas (una puerta de "800 mm" se lee como 2'-7 1/2" en pies y pulgadas); si cambia la unidad, el panel reescribe los textos.

## Siguiente

- [Auditar el modelo: locales, etiquetas, LOD, interferencias e interfaces](topic:audit-the-model)
- [Buscar elementos por clase, nombre o propiedad](topic:find)
- [Eliminar, cortar, copiar y pegar elementos](topic:copy-paste)
