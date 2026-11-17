---
title: Comparar dos versiones de un modelo
summary: Abra dos versiones del mismo modelo IFC y vea qué elementos se añadieron, eliminaron y cambiaron, emparejados por sus GlobalId, con un CSV de cada cambio.
keywords: comparar, diferencias, versiones, revisión, cambios, cambiado, añadido, eliminado, movido, globalid, guid, qué cambió
from: cfca6971
---

## Lo que hará

Vea qué cambió entre el modelo que tenía y el que le enviaron: qué elementos son nuevos, cuáles han desaparecido, cuáles se movieron o recibieron nuevos valores de propiedad.

## Pasos

1. Abra la versión más reciente, después haga clic en {{ui:Add a model…}} y elija la anterior. Vea [Ver varios modelos IFC juntos](topic:several-models).
2. En {{ui:Models}}, abra {{ui:Compare versions}}.
3. Elija la {{ui:Older version}} y la {{ui:Newer version}}.
4. Haga clic en {{ui:Compare}}.
5. Haga clic en un elemento de una lista para seleccionarlo y ver sus propiedades. Haga clic en {{ui:Download CSV}} para obtener cada cambio, propiedad por propiedad.
6. Haga clic en {{ui:Clear}} para volver a la vista normal.

## Lo que debe ver

- Elementos **añadidos** en azul, de la versión más reciente.
- Elementos **eliminados** en rojo, de la versión anterior.
- Elementos **cambiados** en ocre, de la versión más reciente, indicando cada cambio: propiedades, un desplazamiento con su distancia, o una forma nueva.
- Todo lo que es igual, transparente.

## Conviene saber

- Los elementos se emparejan por su GlobalId. Un programa que asigna GlobalId nuevos en cada exportación hace que todos los elementos parezcan eliminados y añadidos de nuevo.
- Las posiciones se comparan donde los modelos están en la escena. Si una versión se movió a propósito, alinéelas primero con {{ui:Move}} en {{ui:Models}}.
- Un GlobalId usado dos veces en un mismo modelo queda fuera de la comparación. [Revise un modelo en busca de problemas comunes](topic:model-checks) los encuentra.

## Siguiente

- [Incidencias y archivos BCF](topic:issues-bcf)
- [Sumar cantidades por propiedad](topic:quantity-totals)
