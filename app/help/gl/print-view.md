---
title: Revisar un debuxo en vista de impresión
summary: Cambie un DWG ou DXF a vista de impresión para velo en branco e negro, cos seus grosores de liña e sen as capas que nunca se imprimen.
keywords: impresión, trazado, vista previa, vista previa de trazado, grosores de liña, grosor de liña, monocromo, branco e negro, defpoints, sen trazado
from: 1a59c23e
---

## Que farás

Vexa como se verá unha folla en papel antes de imprimila desde o programa que a fixo: en branco e negro, coas liñas co seu grosor real e sen as capas que se configuraron para non imprimirse.

## Pasos

1. Abra un debuxo DWG ou DXF.
2. Prema unha lapela de folla enriba do debuxo.
3. Prema {{ui:Print view}} ao final das lapelas, ou prema {{key:P}}.
4. Achegue o zoom a un detalle para comparar liñas grosas e finas.
5. Prema de novo {{ui:Print view}}, ou {{key:P}}, para volver ás cores normais.

## Que debe ver

- Papel branco sobre unha mesa gris, todas as liñas e textos en negro, sexa cal sexa o tema.
- Grosores de liña: nunha folla cada grosor debúxase co seu ancho real no papel, así que unha liña de 0,5 mm é o dobre de grosa que unha de 0,25 mm en calquera zoom. Unha liña nunca se debuxa máis fina que o seu grosor en pantalla.
- As capas configuradas para non imprimirse, e a capa DEFPOINTS, quedan ocultas.
- O botón {{ui:Print view}} queda pulsado. A vista de impresión mantense ao cambiar de folla ou abrir outro debuxo, ata que a desactive.

En {{ui:Model}}, a vista de impresión usa só grosores de pantalla (as liñas finas dun píxel, as máis grosas un pouco máis anchas), porque o espazo do modelo non ten tamaño de papel.

## Erros habituais

- **Esperar que imprima.** A vista de impresión é unha vista previa. A impresión e a exportación a PDF aínda non están integradas en BimCraft; imprima desde o programa que fixo o debuxo.
- **Esperar estilos de trazado.** Non se len as táboas de plumas nin as cores dos estilos de trazado. Todo é negro simple.
- **Premer P mentres escribe.** {{key:F}} e {{key:P}} non fan nada mentres escribe nun campo, ou mentres se mostra o cadro de equipos.
