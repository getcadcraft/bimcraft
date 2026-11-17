---
title: Nivel de desarrollo (LOD) y comprobaciones de hitos
summary: Asigne un nivel de desarrollo a los elementos, vea de dónde proviene, compruebe el modelo frente al LOD que pide un hito y corrija las etiquetas faltantes y los espacios sin nombre. Cada comprobación es solo una recomendación; nada se bloquea.
keywords: lod, nivel de desarrollo, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, hito, tabla de hitos, comprobaciones del modelo, etiquetas faltantes, espacios sin nombre, genérico al inicio, clase ifc, clasificación
from: 2091c79b
---

## Qué hará

Indique qué tan desarrollado está cada elemento y, después, compruebe todo el modelo frente a lo que pide un hito del proyecto.

## Pasos

1. Elija un elemento (o varios) y abra {{ui:Propiedades}}. Busque {{ui:Nivel de desarrollo}}.
2. Elija un nivel de la lista. Cada nivel se nombra según lo que significa, y cada uno incluye los inferiores. Un paso de {{ui:Deshacer}} cubre toda la selección.
3. Revise de dónde proviene el nivel: de este elemento, de su tipo o de una marca verificada en campo.
4. Para comprobar el modelo, abra {{ui:Comprobaciones del modelo}} a la izquierda y, después, {{ui:Hitos de LOD}}. Elija el hito y la tabla (la tabla inicial, o su propio archivo CSV o JSON con {{ui:Carga}}).
5. Haga clic en {{ui:Comprobar el modelo}}. Los totales y una línea por cada fila de la tabla muestran qué ha alcanzado su nivel y qué no; los hallazgos también aparecen en la lista de problemas.
6. En {{ui:Etiquetas faltantes y espacios sin nombre}}, haga clic en {{ui:Buscarlos}}, edite las propuestas si lo desea y haga clic en {{ui:Aplicar}}.

## Qué debe ver

- El nivel que eligió en el elemento, con su clase IFC y sus códigos de clasificación junto a él.
- Totales y filas para el hito. Una tabla nunca cambia lo que significa un nivel: la escala es fija; una tabla solo indica qué nivel necesita un hito.
- "Genérico al inicio": recomendación para mantener los elementos genéricos en un hito temprano. Es solo una recomendación.

## Conviene saber

- Nada aquí le impide continuar. Un modelo por debajo del nivel que pide un hito aparece en la lista, pero no se rechaza.
- Las tres partes de un nivel (geometría, información y documentación) se pueden definir por separado; una marca indica cumplido, por debajo o no indicado.
