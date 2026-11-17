---
title: Nivel de desarrollo (LOD) y comprobaciones de hitos
summary: Asigne a los elementos un nivel de desarrollo, vea de dónde procede, compruebe el modelo frente al LOD que exige un hito y corrija las etiquetas que faltan y los espacios sin nombre. Cada comprobación solo avisa; no bloquea nada.
keywords: lod, nivel de desarrollo, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, hito, tabla de hitos, comprobaciones del modelo, etiquetas que faltan, espacios sin nombre, genérico al principio, clase ifc, clasificación
from: 2091c79b
---

## Qué hará

Indique hasta qué punto está desarrollado cada elemento y, después, compruebe todo el modelo frente a lo que exige un hito del proyecto.

## Pasos

1. Seleccione un elemento (o varios) y abra {{ui:Properties}}. Busque {{ui:Level of development}}.
2. Elija un nivel de la lista. Cada nivel se nombra según lo que significa, y cada uno incluye los niveles inferiores. Un solo paso de deshacer abarca toda la selección.
3. Compruebe de dónde procede el nivel: de este elemento, de su tipo o de una marca verificada en obra.
4. Para comprobar el modelo, abra {{ui:Model checks}} a la izquierda y, después, {{ui:LOD milestones}}. Elija el hito y la tabla (la tabla inicial o su propio archivo CSV o JSON con {{ui:Load}}).
5. Pulse {{ui:Check the model}}. Los totales y una línea por cada fila de la tabla muestran qué ha alcanzado su nivel y qué no; los resultados también aparecen en la lista de problemas.
6. En {{ui:Missing tags and unnamed rooms}}, pulse {{ui:Find them}}, edite las propuestas si lo desea y pulse {{ui:Apply}}.

## Qué debería ver

- El nivel que eligió en el elemento, con su clase IFC y sus códigos de clasificación junto a él.
- Totales y filas del hito. Una tabla nunca cambia lo que significa un nivel: la escala es fija, y una tabla solo indica qué nivel exige un hito.
- "Mantener lo genérico al principio": aviso para mantener los elementos genéricos en un hito temprano. Es solo un aviso.

## Conviene saber

- Aquí nada bloquea. Un modelo por debajo del nivel que exige un hito aparece en la lista, pero no se rechaza.
- Las tres partes de un nivel (geometría, información y documentación) se pueden definir por separado; una marca indica cumplido, por debajo o sin indicar.
