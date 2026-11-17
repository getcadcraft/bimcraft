---
title: Tubaxes e condutos
summary: Debuxe as liñas de tubaxe e de conduto na planta polos seus eixes; os cóbados, tes, reductores e transicións faillos por vostede, as liñas pertencen a sistemas con portos conectados no ficheiro IFC, e aparecen nas plantas, nos cuadros e na medición.
keywords: tubaxe, tubaxes, canalización, fontanería, conduto, condutos, climatización, mep, mecánica, cóbado, te, reductor, transición, accesorio, accesorios, válvula, válvulas, válvula de compuerta, válvula de bola, válvula de globo, válvula de retención, montante, pendente, desaugue, sanitario, pluvial, ventilación, auga fría, auga quente, auga xelada, calefacción, gas, protección contra incendios, aire de impulsión, aire de retorno, extracción, sistema, sistemas, porto, portos, conector, conectores, aparello, aparellos, aparello sanitario, lavabo, pía, inodoro, lavadoiro, ducha, unidades de aparello, uhc, dfu, dimensionar desaugues, dimensionamento de desaugues, desaugue de edificio, ramal, colector, caudal de aire, cfm, fricción, fricción igual, dimensionamento, cuadro, medición, nbr, nbr 5648, nbr 5688, nbr 8160, PVC para auga, PVC para saneamento, dn
from: 85140bc5
---

## O que vai facer

Debuxe as tubaxes e os condutos dun edificio como debuxa os muros: prema nas esquinas do eixe dunha liña á altura que fixe. BimCraft fai os accesorios, pon cada peza no seu sistema e conéctaas, de modo que outros programas lean a liña como un único sistema conectado.

## Debuxar unha tubaxe

1. Active {{ui:Debuxar}}, abra {{ui:Compilación}} e escolla {{ui:Tubaxe}}.
2. Na barra, escolla o **sistema** (auga fría, auga quente, desaugue sanitario, gas…). Este define un material habitual: cobre para a auga, PVC para desaugues e ventilacións, aceiro para calefacción, auga xelada, gas e protección contra incendios. Cambie o **material**, a **clase** e o **tamaño** se o precisa. Os tamaños e as paredes proceden de normas públicas: tubaxe de aceiro ASME B36.10M, cobre ASTM B88, PVC ASTM D1785 e PEX ASTM F876. Para proxectos brasileiros pode usar **Tubaxe de PVC para auga (NBR 5648)**, o PVC de encolado para auga fría, e **Tubaxe de PVC para desaugue (NBR 5688)**, serie normal ou reforzada, para desaugues e ventilacións: os seus tamaños nomeanse por DN (DN 25, DN 100). Unha vez escolla unha delas, escoller outro sistema mantén as tubaxes brasileiras (tubaxe de PVC para desaugue para un desaugue sanitario despois dunha tubaxe de PVC para auga).
3. Fixe **En**: a altura do eixe da tubaxe sobre o nivel.
4. Faga clic onde comeza a tubaxe e despois en cada esquina. Faga dobre clic, ou prema {{key:Enter}}, no último punto. {{key:Backspace}} retira a última esquina; {{key:Esc}} descarta a liña.

A tubaxe encaixa como encaixan os muros, e tamén nas outras liñas: comece no extremo dunha tubaxe para continuar a partir dela, ou remate sobre a recta dunha tubaxe para derivar. Unha liña nova toma a altura da tubaxe á que encaixa.

Unha liña que comeza ou remata sobre un porto dun aparello toma o seu tamaño e o seu sistema e queda fixa a el: vexa [Equipamento MEP con portos](topic:mep-equipment) e [Conectar tubaxes e condutos a equipamento](topic:mep-connections).

## Fixar o estándar de fontanería do proxecto

A primeira lista da barra de tubaxe é o **estándar de fontanería** do modelo: **US (IPC, polgadas)** ou **Brasil (ABNT, DN)**. Gárdase no modelo, polo que todos os que abran o ficheiro comezan as liñas do mesmo modo. Tamén se aplica a unha liña que comeza nun conector dun aparello ou nun porto dun equipamento. Con **US**, unha liña nova comeza en cobre (auga) ou PVC Schedule 40 (desaugues), en polgadas, coa pendente do International Plumbing Code. Con **Brasil**, a auga fría comeza como PVC encolado DN 25, os desaugues sanitarios e pluviais e as ventilacións como PVC para saneamento DN 100 coa pendente da NBR 8160, e a auga quente en cobre. As tubaxes xa debuxadas conservan o seu material e as súas propias táboas; a lista de materiais segue aberta, polo que aínda pode debuxar unha liña brasileira nun modelo US a propósito. Un ficheiro sen escolla comporta como antes: unha liña nova segue o material en uso.

## Debuxar un conduto

1. Escolla {{ui:Conduto}}. Escolla o sistema (impulsión, retorno, extracción ou aire exterior) e a forma: redonda, rectangular ou oval plana.
2. Escriba o ancho e a altura (o ancho dun conduto redondo é o seu diámetro), e **En** para a altura do eixe.
3. Para dimensionalo a partir do caudal de aire, escriba o **Caudal de aire** e a taxa de **Fricción** e prema {{ui:Dimensionar}}. O conduto dimensiónase por fricción igual, o método do capítulo de deseño de condutos do ASHRAE Handbook, e redondease a un tamaño de catálogo, polo que a fricción sae igual ou inferior á taxa que escribiu. Sen taxa escrita, usa 0,08 in. de auga por cada 100 ft (0,8 Pa/m). Un conduto rectangular mantén a altura que escribiu e recibe un ancho; BimCraft di o que pasa cando os seus lados superan a relación 4 a 1.
4. Faga clic nas esquinas como para unha tubaxe.

## Aparellos sanitarios

{{ui:Compilación}} › {{ui:Colocar familia}} ofrece cinco aparellos para comezar, cada un cun desaugue e un conector de auga fría: un **Inodoro**, un **Lavabo**, unha **Pía de cociña**, un **Prato de ducha** e un **Lavadoiro**. A súa fronte mírao cando os coloca, e a súa parte posterior vai contra o muro. Os seus desaugues están no menor desaugue de aparello da NBR 8160 (DN 100 para o inodoro, DN 50 para a pía de cociña, DN 40 para os demais); a auga é DN 20. Cambie os seus tamaños, ou edítaos, como calquera familia: vexa [Familias e os seus tamaños](topic:families).

Unha familia indica que aparello é en {{ui:Aparello sanitario}} na lapela {{ui:Conectores}} do editor de familias. O seu desaugue conta entón en unidades de aparello: 6 UHC para un inodoro, 1 para un lavabo, 3 para unha pía de cociña ou un lavadoiro, 2 para unha ducha (NBR 8160), ou as unidades de aparello de desaugue da Táboa 709.1 do IPC.

## Desde o conector dun aparello

Os elementos colocados desde unha familia con conectores (o desaugue e a billa dun lavabo, o pescozo dun terminal de aire: vexa [Editar unha familia](topic:family-editor)) mostran os seus conectores libres como puntos mentres {{ui:Tubaxe}} ou {{ui:Conduto}} está activo, e o punteiro encaixa neles.

- **Comezar nun conector**: a liña toma o seu sistema e tamaño (a tubaxe do material da barra no tamaño do conector ou un pouco superior; un conduto redondo do seu diámetro). Cando o conector mira cara abaixo ou cara arriba, como un desaugue baixo unha lavabo, a liña primeiro baixa ou sobe recta até a altura de **En**, e despois continúa segundo os seus clics.
- **Rematar nun conector**: a liña baixa ou sobe ata el e remata alí.

A liña conéctase ao elemento no ficheiro IFC, de modo que outros programas ven o aparello como parte do seu sistema. Un elemento colocado despois con un conector no extremo dunha liña conéctase tamén a ela. Unha liña separada dun conector deixa de estar conectada a el.

## Os accesorios, feitos por vostede

| Onde | Que fai BimCraft |
|---|---|
| Unha liña xira | Un cóbado. Tubaxe de aceiro en radio longo de ASME B16.9 (1,5 × o tamaño), outra tubaxe a un diámetro exterior, conduto redondo a 1,5 diámetros, conduto rectangular a un ancho (ou a unha altura para unha xiración cara arriba ou abaixo) |
| Unha liña remata sobre a recta doutra | Un te; a outra liña divídese alí |
| Dúas liñas únense extremo con extremo en tamaños distintos | Un reductor (tubaxes) ou unha transición (condutos) |
| Dúas liñas do mesmo tamaño únense extremo con extremo nun ángulo | Un cóbado |

Cando cambia, move ou elimina unha liña, todos os accesorios dese nivel fanse de novo. Se unha perna é demasiado curta para os accesorios dos seus extremos, BimCraft avísao e non cambia nada: afaste máis a esquina.

:::note
Os accesorios e as válvulas son xenéricos: debuxados segundo o tamaño da tubaxe ou do conduto, non segundo un catálogo de fabricante. Os accesorios de enchufe, de prensa e acanalados, os corpos de válvula e os equipamentos teñen tamaños propios de cada fabricante; comprébeos co seu provedor antes de pedir.
:::

## Montantes

Mentres debuxa, escriba unha nova altura en **En** e prema {{key:Enter}}: a liña sobe ou baixa recta na última esquina, cun cóbado en cada extremo. Un montante pode subir ata o nivel superior. Cada nivel mostra as partes dunha liña que alcanza o seu rango de vista, con **UP** ou **DN** no montante.

## Desaugues e a súa pendente

Os desaugues sanitarios e pluviais comezan coa menor pendente que permite o International Plumbing Code para o seu tamaño: 1/4 in. por pé ata 2-1/2 in., 1/8 in. por pé de 3 a 6 in., 1/16 in. por pé desde 8 in. Un desaugue brasileiro de PVC comeza coa pendente da NBR 8160: 2 % ata DN 75, 1 % desde DN 100. Escriba outra pendente na barra ou en Propiedades: `1/4"/ft`, `2 %` ou `1:50`. A liña baixa desde o seu primeiro punto, polo que debuxe os desaugues na dirección na que corren. A planta mostra a caída e unha frecha. Propiedades avisa cando un desaugue é máis chan que o mínimo do código.

## Dimensionar os desaugues por unidades de aparello

Escolla un desaugue sanitario: **Unidades de aparello** en Propiedades indica cantas transporta e o menor tamaño que precisan. Conta todo aparello sanitario cuxo conector de desaugue estea na liña, e tamén todo desaugue que desemboca nela: debuxe os desaugues na dirección na que corren, cada un rematando no desaugue no que desemboca.

- Os desaugues en PVC brasileiro contan en **UHC** e seguen a NBR 8160; os demais contan en **DFU** e seguen o International Plumbing Code.
- **Desaugue**: un **Ramal** dimensiónase segundo a táboa do código para ramais de aparello; un **Desaugue de edificio** segundo a súa táboa pola pendente, polo que a súa **Pendente** é importante.
- Un desaugue nunca é menor que os desaugues dos aparellos que serve (un inodoro precisa DN 100, ou 3 in.), nin menor que un desaugue que desemboca nel. Baixo a NBR 8160 un desaugue de edificio é DN 100 como mínimo.

{{ui:Dimensionar os desaugues}} fai que cada desaugue sanitario do modelo que é demasiado pequeno para as súas unidades de aparello tome o tamaño que precisa, nun único paso que pode desfacer. Un desaugue debuxado maior do que precisa déixase como está. Cando un desaugue transporta máis do que pode levar o maior tamaño da súa tubaxe á súa pendente, BimCraft avísao: dálle unha pendente máis forte ou outra tubaxe.

:::note
As táboas son as de desaugues horizontais. As ballestas, as ventilacións e os desaugues pluviais non se dimensionan aquí: comprébeos, e todo o deseño, coa norma que aplique ao proxecto.
:::

## Válvulas

1. Escolla {{ui:Válvula}} e o tipo: de compuerta, de bola, de globo ou de retención.
2. Faga clic nunha tubaxe onde vai. A tubaxe córtase ao seu redor e a válvula conéctase aos dous lados.

Propiedades da liña enumera as súas válvulas, cada unha con {{ui:Eliminar}}.

Máis tipos de válvula, un filtro, rexistros nos condutos, as súas propias especificacións de tubaxe e as familias de fabricantes: vexa [Especificacións de tubaxe, válvulas, rexistros e familias de fabricantes](topic:pipe-specs).

## Cambiar unha liña

Escolla calquera parte dunha liña, na planta ou na vista 3D. En Propiedades:

- **Sistema**, **Material**, **Clase** e **Tamaño** (tubaxes), ou **Forma**, **Ancho**, **Altura** (condutos).
- **Altura sobre o nivel** move toda a liña cara arriba ou abaixo.
- **Illamento**: o seu espesor, conservado para a comprobación de espazo libre e a lista de furados (non se debuxa nada): vexa [Comprobar tubaxes e condutos contra a estrutura](topic:mep-against-structure).
- Tubaxe de aceiro: **Cortar en tramos**: vexa [Tramos de tubaxe de aceiro e follas de tramos](topic:pipe-spools).
- **Pendente** (tubaxes).
- **Caudal** con {{ui:Dimensionar}}: para a auga, o menor tamaño que mantén a auga a 8 ft/s (2,4 m/s), ou 5 ft/s (1,5 m/s) para a auga quente; a 3 m/s para a tubaxe brasileira de PVC para auga (NBR 5626). Para os condutos, a velocidade e a taxa de fricción do conduto tal como está debuxado. Os desaugues sanitarios dimensiónanse por unidades de aparello: vexa máis abaixo **Dimensionar os desaugues por unidades de aparello**.

Cada cambio é un paso de {{ui:Desfacer}}. {{key:Delete}} elimina a liña completa.

## Planos

- As tubaxes menores de 150 mm (uns 6 in.) debúxanse como unha liña sobre o seu eixe; as maiores e todos os condutos, como dúas liñas á súa anchura.
- Cada sistema ten a súa propia cor; o PDF da planta imprímeas en negro.
- Cada liña leva a súa etiqueta de tamaño e sistema (por exemplo `2" CW` ou `16×10 SA`).
- O rango de vista dunha planta decide que liñas mostra, e {{ui:Mostrado nesta planta}} pode omitir **Tubaxes** ou **Condutos**: vexa [Vistas, rangos de vista e as súas propias follas](topic:views-and-sheets).

## Cuadros e medición

O panel {{ui:Cuadros}} engade **Tubaxes** (por sistema, material e tamaño, coas súas lonxitudes), **Condutos** (por sistema, forma e tamaño, coas lonxitudes e a superficie exterior) e **Accesorios e válvulas** (por tipo e tamaño, contados). Prema unha fila para escoller o que enumera; {{ui:Descargar CSV}} descarga o cadro.

{{ui:Medición}} leva as liñas a TakeoffCraft: tubaxe e conduto por tamaño, como liñas debuxadas na planta (os desaugues con pendente medidos segundo a súa pendente), accesorios e válvulas contados onde están: vexa [Enviar as cantidades do modelo a TakeoffCraft](topic:takeoff). Os montantes quedan fóra desa folla, porque unha planta non os pode medir; o cadro de Tubaxes ten a súa lonxitude.

## No ficheiro IFC

Cada liña é un conxunto que contén as súas pezas: segmentos de tubaxe e de conduto, accesorios e válvulas, cada un co seu tipo, material, unha cor para o seu sistema e os seus portos. Os portos que se tocan están conectados, e cada peza pertence ao seu sistema de distribución (os ficheiros IFC2X3 reciben o mesmo como segmentos de fluxo, accesorios e controladores dun sistema). Outros programas que len sistemas IFC ven unha liña conectada por sistema. A definición propia da liña consérvase con ela, de modo que BimCraft a volve crear do mesmo modo ao cambiala.
