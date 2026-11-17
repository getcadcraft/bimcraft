---
title: Comparar dúas versións dun modelo
summary: Abra dúas versións do mesmo modelo IFC e vexa que elementos se engadiron, eliminaron e cambiaron, emparellados polos seus GlobalId, cun CSV de cada cambio.
keywords: comparar, diff, diferenza, versións, revisión, cambios, cambiado, engadido, eliminado, movido, globalid, guid, que cambiou
from: cfca6971
---

## Que farás

Vexa que cambiou entre o modelo que tiña e o que lle enviaron: cales son os elementos novos, cales desapareceron, cales se moveron ou recibiron novos valores de propiedade.

## Pasos

1. Abra a versión máis nova, despois prema {{ui:Engadir un modelo…}} e escolla a máis antiga. Consulte [Ver varios modelos IFC xuntos](topic:several-models).
2. En {{ui:Modelos}}, abra {{ui:Comparar versións}}.
3. Escolla a {{ui:Versión anterior}} e a {{ui:Versión posterior}}.
4. Prema {{ui:Comparar}}.
5. Prema un elemento dunha lista para seleccionalo e ver as súas propiedades. Prema {{ui:Descargar CSV}} para ver cada cambio, propiedade por propiedade.
6. Prema {{ui:Limpar}} para volver á vista normal.

## Que debería ver

- Elementos **engadidos** en azul, da versión máis nova.
- Elementos **eliminados** en vermello, da versión máis antiga.
- Elementos **cambiados** en ocre, da versión máis nova, indicando cada un que cambiou: propiedades, un desprazamento con canto, ou unha forma nova.
- Todo o que é igual, translúcido.

## Cousas que conviña saber

- Os elementos emparéllanse polo seu GlobalId. Un programa que dá novos GlobalId en cada exportación fai que todos os elementos parezan eliminados e engadidos de novo.
- As posicións compáranse onde se sitúan os modelos na escena. Se unha versión se moveu a propósito, aliñe primeiro con {{ui:Mover}} en {{ui:Modelos}}.
- Un GlobalId usado dúas veces nun mesmo modelo queda fóra da comparación. [Comprobar un modelo por problemas comúns](topic:model-checks) atopa estes casos.

## Seguinte

- [Incidencias e ficheiros BCF](topic:issues-bcf)
- [Sumar cantidades por propiedade](topic:quantity-totals)
