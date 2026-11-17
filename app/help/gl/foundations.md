---
title: Cimentacións baixo os muros
summary: Coloque unha laxe sobre terreo, muros de arranque con laxe, un espazo técnico ou un soto baixo un edificio cun só clic; as zapatas dimensiónanse a partir dos muros e do número de plantas, e a cimentación segue aos muros cando estes se moven.
keywords: cimentación, zapata, laxe sobre terreo, bordo engrosado, laxe monolítica, muro de arranque, espazo técnico, rastrexo, soto, muro do soto, xeada, formigón, ancho da zapata
from: c0e20172
---

## O que vai facer

Dé ao edificio unha cimentación acorde cos seus muros. BimCraft segue o exterior dos muros, dimensiona as zapatas segundo o tipo de muro e o número de plantas que descansan sobre elas, e refai a cimentación cada vez que cambian os muros.

## Colocar unha cimentación

1. No nivel cuxos muros se apoian nela (normalmente o primeiro), abra {{ui:Compilación}} e escolla {{ui:Cimentación}}.
2. Escolla o tipo:
   - **Laxe sobre terreo**: unha laxe de formigón de 4" cuxa cara superior é o chan, cun bordo engrosado baixo os muros.
   - **Muros de arranque e laxe**: muros de cimentación ata o chan, sobre zapatas, cunha laxe dentro deles.
   - **Espazo técnico**: muros de cimentación que paran baixo a estrutura do chan, sobre zapatas, sen laxe.
   - **Soto**: muros de cimentación de altura completa, sobre zapatas, cunha laxe de soto, baixo a estrutura do chan.
3. Sinale dentro do edificio: as zapatas aparecen en trazos coa súa medida. Faga clic.

Facer clic nun edificio que xa ten cimentación selecciona esa cimentación, así que pode cambiala en vez de engadir unha segunda.

## Cambiala

Seleccione a cimentación (faga clic dentro do edificio con {{ui:Cimentación}}, ou faga clic en calquera das súas partes na vista 3D ou na árbore do modelo) e cámbiea en **Propiedades**: o tipo, o ancho e a profundidade da zapata, canto baixa a parte inferior da zapata, o grosor do muro, canto baixo o chan paran os muros, a altura do soto e o grosor da laxe. Cada cambio é un paso de desfacer.

As medidas marcadas **auto** saen dos muros: zapatas de 12", 15" ou 23" de ancho para unha, dúas ou tres plantas sobre laxe ou muros de arranque; 18", 22" ou 27" sobre un espazo técnico ou un soto; e 4" máis anchas baixo muros de alvanería ou de formigón. Escriba unha medida para fixar a súa propia; escriba `0` para volver a **auto**.

:::warning
As medidas automáticas son valores predeterminados etiquetados para casas típicas de entramado lixeiro, non cálculo de enxeñaría. Un deseñador ou un enxeñeiro comproba as zapatas, as profundidades e os muros segundo o terreo, a profundidade de xeada e as cargas.
:::

## O que se garda

Unha cimentación gárdase como un conxunto de elementos IFC («Cimentación») formado por unha zapata (ou polo bordo engrosado dunha laxe), un muro de cimentación e unha laxe segundo precise o seu tipo, todo de formigón, cada un cos seus cómputos: lonxitudes, anchos, alturas, superficies e volumes, listos para as medicións.

## Cousas que convén saber

- Mover, engadir ou eliminar muros fai de novo a cimentación baixo eles; debuxar muros no nivel superior ensancha as zapatas inferiores para a planta adicional.
- {{key:Delete}} elimina unha cimentación seleccionada con todas as súas partes.
- Co terreo do emprazamento no modelo (vexa [O terreo do emprazamento, a plataforma do edificio e a pavimentación](topic:terrain)), os muros de arranque e as zapatas do espazo técnico descenden con el en pasos de 8".
- As zapatas baixo os muros interiores aínda non se fan.
