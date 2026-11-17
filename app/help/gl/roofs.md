---
title: Cubertas: unha pendente para cada muro, piñóns, cubertas dun agua e planos de cuberta
summary: Estableza cada muro baixo unha cuberta como inclinado, piñón ou ningún, use os predefinidos de catro augas, piñóns e un agua, eleve a cuberta coa altura da soleira, engada tabeira e forro do alero, e debuxe planos de cuberta sinxelos onde a cuberta automática non encaixa.
keywords: cambiar unha cuberta, editar unha cuberta, cuberta seleccionada, propiedades da cuberta, desfacer cuberta, cuberta, pendente, por muro, piñón, un agua, cadeira, cume, altura da soleira, talón, tabeira, forro, alero, beiral, voadizo, plano de cuberta, cuberta de alpendre, lucarna, lucarna de piñón, lucarna dun agua
from: 096084a7
---

## O que vai facer

Dar forma á cuberta a partir dos muros que a sosteñen. Cada muro ten o seu propio axuste, así que unha cuberta pode ser a catro augas na fachada, ter piñóns nos extremos e rematar plana contra un muro máis alto na parte de atrás. Para un alpendre ou calquera cara que a cuberta automática non poida facer, debuxe un plano de cuberta polos seus vértices.

## Colocar unha cuberta

1. No nivel cuxos muros sosteñen a cuberta, prema {{ui:Cuberta}}.
2. Escriba a **Pendente** (`6/12`, ou graos como `30`) e o **Voadizo**.
3. Escolla un predefinido: **Cuberta a catro augas**, **Piñóns nos lados curtos**, **Piñóns nos lados longos**, ou **Un agua** (o lado máis próximo ao punteiro é o alero baixo; os outros lados son piñóns).
4. Deixe **Tabeira e forro** marcado para aleiros encaixados cunha tabeira, ou desmárquelo para un bordo de cuberta sen rematar.
5. Sitúese dentro do edificio: o alero, o cume, as cadeiras e os regueiros aparecen no plano. Prema.

Calquera contorno funciona: formas en L, T, U e cruz, esquinas angulosas e recortes. As cadeiras, os cumes e os regueiros atópanse onde se xuntan os planos da cuberta.

## Un muro de cada vez

Escolla a cuberta (no nivel superior aos muros, prema dentro do seu contorno) e mire baixo **Cada muro** en **Propiedades**. Ao sinalar unha fila, marcase ese muro no plano.

- **Inclinado**: o muro ten un plano de cuberta inclinado enriba. Escriba a súa propia pendente xunto a el, por exemplo `12/12` para testeiros empinados nunha cuberta de `6/12`.
- **Piñón**: a cuberta remata nun extremo vertical enriba dese muro, o muro énchese ata a cuberta, e a cuberta sobresae máis aló polo **Voadizo do piñón**.
- **Ningún (remata ao ras)**: a cuberta remata nese muro sen voadizo e sen muro de piñón, para unha cuberta contra un muro máis alto.

A lista **Extremos** na parte superior fixa todos os muros á vez; **Fixar por muro** aparece cando os muros xa non coinciden cun predefinido.

## Cambiar unha cuberta xa colocada

Escolla a cuberta e **Propiedades** mostra os mesmos axustes que a ferramenta Cuberta: **Pendente**, **Voadizo**, **Voadizo do piñón**, **Altura da soleira**, **Altura da tabeira**, **Alero encaixado** e **Espesor**. Cada cambio aparece ao momento no plano e en 3D, cos mesmos controis que a ferramenta (rexéitase unha pendente de 80 graos ou máis, e tamén un axuste que non pode formar unha cuberta). Escriba un valor e prema {{key:Enter}}, ou deixe a caixa.

Cada cambio é un paso de desfacer. Varios cambios na mesma caixa un tras outro (escriba `6/12`, logo `7/12`, logo `8/12`) únense nun só paso, así que un {{key:Ctrl}}+{{key:Z}} devolve o que tiña a cuberta antes da serie; cambiar unha caixa diferente comeza un paso novo.

## Altura da soleira, tabeira e forro

- **Altura da soleira** é onde os planos da cuberta se atopan co exterior dos muros, medida desde o chan do nivel. Déixeo en branco para asentar a cuberta enriba dos muros; escriba un valor maior para un talón elevado.
- **Altura da tabeira** é a tabla ao longo dos aleiros e polos beirais. Escriba `0` para ningunha.
- **Alero encaixado** pon un forro nivelado baixo cada alero, desde o muro ata a parte traseira da tabeira.

Cada plano encontra o seu muro á altura da soleira, así que os muros con pendentes distintas conservan unha única liña de soleira e os seus aleiros rematan a alturas distintas, como se armarían na obra.

## Debuxar un plano de cuberta

1. No nivel sobre o que se asenta o plano, abra {{ui:Compilación}} e escolla {{ui:Plano de cuberta}}.
2. Escriba a **Pendente** e, se non é a parte superior dos muros, a **Altura do alero**.
3. Prema nos vértices. O primeiro lado que debuxa é o alero; o plano sobe desde el cara ao resto da forma.
4. Prema de novo o primeiro vértice, faga dobre clic, ou prema {{key:Enter}} para rematar. {{key:Esc}} descarta os vértices.

Un plano de cuberta non segue os muros. Sinaleo no nivel superior (prema dentro del) para cambiar a súa pendente, altura do alero ou espesor, ou prema {{key:Delete}} para eliminalo.

## Engadir unha lucarna

1. Mostre o nivel no que está a cuberta.
2. Abra {{ui:Compilación}} e escolla {{ui:Lucarna}}.
3. Na fila de opcións escolla o **Tipo de lucarna** (**Piñón** ou **Un agua**) e fixe o **Ancho**, o **Muro frontal** (a altura do muro frontal desde o cume da cuberta ata o alero da lucarna), a **Pendente** e o **Voadizo**.
4. Prema nunha face da cuberta onde vaia o centro da fronte da lucarna.

BimCraft constrúe o muro frontal, dous muros laterais e a cuberta da lucarna, e a prolonga cara atrás ata atopar a cuberta. Unha lucarna de piñón ten dous planos que se atopan nun cume. Unha lucarna dun agua ten un plano, que debe ser menos empinado que a cuberta. A cuberta por baixo da lucarna recórtase. A lucarna segue á cuberta cando se moven os muros.

Prema nela para cambiar o seu tipo, ancho, muro frontal, pendente ou voadizo en **Propiedades**. {{key:Delete}} elimina a lucarna e volve pechar a cuberta. Debe caber nunha soa face da cuberta, lonxe de cadeiras, regueiros e do cume, e só as cubertas feitas coa ferramenta {{ui:Cuberta}} admiten lucarnas, non os planos de cuberta debuxados a man. Aínda non está feito: unha xanela na fronte da lucarna, e lucarnas en planos de cuberta debuxados a man.

## O que se garda

As cubertas son cubertas IFC formadas por unha placa de cuberta por plano, muros de piñón, un elemento de tabeira e unha cobertura de forro. A cuberta leva os seus lonxitudes de cume, cadeira, regueiro, alero e beiral, e as súas superficies, para os cómputos. Un plano de cuberta é unha cuberta IFC cunha soa placa.

:::tip
Desfacer desfai calquera cambio de cuberta nun paso, incluído un predefinido que cambia todos os muros.
:::
