---
title: Coberturas: uma inclinação para cada parede, empenas, uma água e planos de cobertura
summary: Defina cada parede sob uma cobertura como inclinada, empena ou nenhuma, use as predefinições de quatro águas, de empena e de uma água, eleve a cobertura com a altura do apoio, acrescente testeira e forro do beiral, e desenhe planos de cobertura isolados onde a cobertura automática não serve.
keywords: alterar cobertura, editar cobertura, cobertura selecionada, propriedades da cobertura, anular cobertura, cobertura, inclinação, por parede, empena, uma água, alpendre, espigão, vale, cumeeira, altura do apoio, calcanhar, testeira, forro do beiral, beiral, beiral lateral, saliência, plano de cobertura, trapeira, trapeira de empena, trapeira de uma água
from: 096084a7
---

## O que vai fazer

Moldar a cobertura a partir das paredes por baixo. Cada parede tem a sua própria definição, por isso uma cobertura pode ter quatro águas à frente, empenas nas extremidades e encostar a uma parede mais alta atrás. Para um alpendre ou qualquer face que a cobertura automática não consegue fazer, desenhe um plano de cobertura pelos seus cantos.

## Colocar uma cobertura

1. No piso cujas paredes suportam a cobertura, clique em {{ui:Roof}}.
2. Escreva a **Inclinação** (`6/12`, ou graus como `30`) e a **Saliência**.
3. Escolha uma predefinição: **Cobertura de quatro águas**, **Empenas nos lados curtos**, **Empenas nos lados longos** ou **Uma água** (o lado mais próximo do cursor é o beiral baixo; os outros lados são empenas).
4. Deixe **Testeira e forro do beiral** marcada para beirados fechados com uma tábua de testeira, ou desmarque-a para uma extremidade de cobertura sem acabamento.
5. Aponte o cursor para dentro do edifício: o beiral, a cumeeira, os espigões e os vales aparecem na planta. Clique.

Qualquer contorno funciona: formas em L, T, U e de cruz, cantos oblíquos e recortes. Os espigões, as cumeeiras e os vales são encontrados onde os planos de cobertura se encontram.

## Uma parede de cada vez

Escolha a cobertura (no piso acima das paredes, clique dentro do seu contorno) e veja **Cada parede** em **Propriedades**. Apontar para uma linha marca essa parede na planta.

- **Inclinada**: a parede tem um plano de cobertura inclinado por cima. Escreva a sua própria inclinação ao lado, por exemplo `12/12` para extremidades íngremes numa cobertura `6/12`.
- **Empena**: a cobertura termina numa extremidade vertical sobre essa parede, a parede é preenchida até à cobertura, e a cobertura avança para lá dela pela **Saliência da empena**.
- **Nenhuma (termina ao nível)**: a cobertura termina nessa parede, sem saliência e sem parede de empena, para uma cobertura encostada a uma parede mais alta.

A lista **Extremidades**, no topo, define todas as paredes de uma vez; **Definir por parede** aparece quando as paredes deixam de corresponder a uma predefinição.

## Alterar uma cobertura já colocada

Escolha a cobertura e as **Propriedades** mostram as mesmas definições da ferramenta Cobertura: **Inclinação**, **Saliência**, **Saliência da empena**, **Altura do apoio**, **Altura da testeira**, **Beirados fechados** e **Espessura**. Cada alteração aparece de imediato na planta e em 3D, com as mesmas verificações da ferramenta (uma inclinação de 80 graus ou mais é recusada, e também uma definição que não consiga criar uma cobertura). Escreva um valor e prima {{key:Enter}}, ou saia do campo.

Cada alteração é um passo de anulação. Várias alterações à mesma caixa, uma a seguir à outra (escrever `6/12`, depois `7/12`, depois `8/12`), juntam-se num único passo, por isso um {{key:Ctrl}}+{{key:Z}} repõe o que a cobertura tinha antes da série; alterar outra caixa começa um novo passo.

## Altura do apoio, testeira e forro do beiral

- **Altura do apoio** é onde os planos de cobertura encontram o exterior das paredes, medida a partir do piso do nível. Deixe em branco para assentar a cobertura no topo das paredes; escreva um valor maior para um calcanhar elevado.
- **Altura da testeira** é a tábua ao longo dos beirais e subindo pelos beirais laterais. Escreva `0` para nenhuma.
- **Beirados fechados** coloca um forro horizontal sob cada beiral, desde a parede até ao fundo da testeira.

Cada plano encontra a sua parede à altura do apoio, por isso paredes com inclinações diferentes mantêm uma só linha de apoio, e os seus beirais terminam a alturas diferentes, tal como seriam construídos.

## Desenhar um plano de cobertura

1. No piso onde estão as paredes sobre as quais o plano assenta, abra {{ui:Build}} e escolha {{ui:Roof plane}}.
2. Escreva a **Inclinação** e, se não for o topo das paredes, a **Altura do beiral**.
3. Clique nos cantos. O primeiro lado que desenhar é o beiral; o plano sobe a partir dele em direção ao resto da forma.
4. Clique de novo no primeiro canto, faça duplo clique, ou prima {{key:Enter}} para terminar. {{key:Esc}} descarta os cantos.

Um plano de cobertura não segue as paredes. Selecione-o no piso acima (clique dentro dele) para alterar a sua inclinação, altura do beiral ou espessura, ou prima {{key:Delete}} para o remover.

## Acrescentar uma trapeira

1. Mostre o piso onde está a cobertura.
2. Abra {{ui:Build}} e escolha {{ui:Dormer}}.
3. Na linha de opções, escolha o **Tipo de trapeira** (**Empena** ou **Uma água**) e defina a **Largura**, a **Parede da frente** (a altura da parede da frente desde o topo da cobertura até ao beiral da trapeira), a **Inclinação** e a **Saliência**.
4. Clique numa face da cobertura onde fica o centro da frente da trapeira.

O BimCraft constrói a parede da frente, duas paredes laterais e a cobertura da trapeira, e prolonga-a para trás até encontrar a cobertura. Uma trapeira de empena tem dois planos que se encontram numa cumeeira. Uma trapeira de uma água tem um só plano, que tem de ser menos íngreme do que a cobertura. A cobertura por baixo da trapeira é recortada. A trapeira segue a cobertura quando as paredes se movem.

Selecione-a para alterar o tipo, a largura, a parede da frente, a inclinação ou a saliência em **Propriedades**. {{key:Delete}} remove-a e fecha a cobertura de novo. Tem de caber numa só face da cobertura, longe de espigões, vales e da cumeeira; só as coberturas feitas com a ferramenta {{ui:Roof}} aceitam trapeiras, não os planos de cobertura desenhados à mão. Ainda não implementado: uma janela na frente da trapeira, e trapeiras em planos de cobertura desenhados à mão.

## O que é guardado

As coberturas são coberturas IFC feitas de uma laje de cobertura por plano, paredes de empena, um elemento de testeira e um revestimento de forro. A cobertura guarda os comprimentos dos seus espigões, cumeeiras, vales, beirais e beirais laterais, e as suas áreas, para as medições. Um plano de cobertura é uma cobertura IFC com uma só laje.

:::tip
Anular desfaz qualquer alteração de cobertura num único passo, incluindo uma predefinição que altera todas as paredes.
:::
