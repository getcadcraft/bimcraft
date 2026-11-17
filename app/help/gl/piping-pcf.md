---
title: Enviar tubaxe a un programa de tensións ou de isométricos, e lela de volta (PCF)
summary: Escriba as liñas de tubaxe do modelo como ficheiro de compoñentes de tubaxe PCF, ou lea un ficheiro PCF dun programa de tensións ou de isométricos e debuxe a súa tubaxe como liñas.
keywords: pcf, ficheiro de compoñentes de tubaxe, tensión de tubaxe, isométrico, isométricos, exportar, importar, tubaxe, planta, tubaxe de aceiro, mover un traballo, outro software
from: 24f91355
---

## O que vai facer

PCF é o ficheiro de texto plano que len e escribe os programas de tensión de tubaxes e os de isométricos. Enumera os compoñentes de cada tubaxe cos seus puntos finais e os seus diámetros interiores.

## Exportar

1. Escolla a ferramenta Tubaxe. A barra de opcións mostra **Exportar PCF**.
2. Prema nel. Escríbese cada liña de tubaxe do modelo: tubaxe recta, cóbados (un xiro de 90 graos, se non un curvado), tes co seu punto de derivación, reductores e válvulas.
3. O ficheiro usa milímetros. Os diámetros interiores son diámetros nominais en milímetros. O punto central dun cóbado é a súa esquina, onde se unen as dúas pernas.

PCF escríbese para tubaxe de aceiro con soldadura a tope. Unha liña doutro material tamén se escribe, con códigos de compoñente de aceiro, e anótase no panel de Problemas.

## Importar

1. Escolla a ferramenta Tubaxe e prema **Importar PCF…**, despois escolla o ficheiro.
2. A tubaxe recta, os cóbados, as curvas, as válvulas e as bridas convértense nunha única liña no nivel actual. Un cambio de tamaño inicia unha liña nova. A derivación dun te convértese nunha liña propia que comeza no centro do te.
3. O modelo fai os seus propios accesorios. Os reductores e os tes non se copian: aparecen onde se encontran liñas de tamaños distintos, ou unha derivación.

:::note
As alturas do ficheiro léense como alturas sobre o nivel actual. As cargas, as suxeccións e a propia análise de tensións non están nun ficheiro PCF e non se importan.
:::

## Comprobar o que se importou

- O total de lonxitude de tubaxe por liña debe coincidir coa orixe.
- O panel de Problemas enumera, unha vez cada un, un cóbado cuxo punto central non está á mesma distancia dos dous extremos, a tubaxe sen lonxitude e un diámetro que non é un tamaño estándar.

## Tubaxe que xa está nun ficheiro IFC

Cando hai un ficheiro IFC aberto, **Exportar PCF** escribe tamén os seus propios segmentos de tubaxe, accesorios e válvulas, xunto ás liñas que debuxou. Un segmento obtén os seus extremos dos seus portos, ou dos extremos do seu corpo. Un accesorio sen portos déixase fóra e o panel de Problemas así o di. Pode exportar só desde o IFC cando o modelo non ten liñas debuxadas.

Ao importar, os soportes, os olets, as bridas, as xuntas e os tapóns do ficheiro non se debuxan. O panel de Problemas enumera cantos de cada tipo se deixaron fóra, para que nada desapareza sen aviso.
