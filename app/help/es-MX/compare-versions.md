---
title: Compare dos versiones de un modelo
summary: Abra dos versiones del mismo modelo IFC y vea qué elementos se agregaron, se quitaron y cambiaron, emparejados por sus GlobalId, con un CSV de cada cambio.
keywords: comparar, diferencia, versiones, revisión, cambios, cambiado, agregado, quitado, movido, globalid, guid, qué cambió
from: cfca6971
---

## Lo que hará

Vea qué cambió entre el modelo que tenía y el que le enviaron: qué elementos son nuevos, cuáles desaparecieron, cuáles se movieron o recibieron nuevos valores de propiedades.

## Pasos

1. Abra la versión más reciente, luego haga clic en {{ui:Agregar un modelo…}} y elija la anterior. Vea [Vea varios modelos IFC juntos](topic:several-models).
2. En {{ui:Modelos}}, abra {{ui:Comparar versiones}}.
3. Elija la {{ui:Versión anterior}} y la {{ui:Versión más reciente}}.
4. Haga clic en {{ui:Comparar}}.
5. Haga clic en un elemento de una lista para elegirlo y ver sus propiedades. Haga clic en {{ui:Descargar CSV}} para obtener cada cambio, propiedad por propiedad.
6. Haga clic en {{ui:Borrar}} para volver a la vista normal.

## Lo que debe ver

- Elementos **agregados** en azul, de la versión más reciente.
- Elementos **quitados** en rojo, de la versión anterior.
- Elementos **cambiados** en ocre, de la versión más reciente, cada uno indicando qué cambió: propiedades, un movimiento con su distancia, o una nueva forma.
- Todo lo que es igual, translúcido.

## Conviene saber

- Los elementos se emparejan por su GlobalId. Un programa que asigna nuevos GlobalId en cada exportación hace que todos los elementos parezcan quitados y agregados de nuevo.
- Las posiciones se comparan donde los modelos están en la escena. Si una versión se movió a propósito, alinéelas primero con {{ui:Desplazar}} en {{ui:Modelos}}.
- Un GlobalId usado dos veces en un mismo modelo se deja fuera de la comparación. [Revise un modelo en busca de problemas comunes](topic:model-checks) los encuentra.

## Siguiente

- [Incidencias y archivos BCF](topic:issues-bcf)
- [Sume cantidades por propiedad](topic:quantity-totals)
