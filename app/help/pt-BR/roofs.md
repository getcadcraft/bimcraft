---
title: Telhados: uma inclinação por parede, empenas, telhados de uma água e planos de telhado
summary: Defina cada parede sob um telhado como inclinada, com empena ou sem nada; use as predefinições de quatro águas, duas águas e uma água; eleve o telhado com a altura da cinta; adicione testeira e forro; e desenhe planos de telhado isolados onde o telhado automático não serve.
keywords: alterar telhado, editar telhado, telhado selecionado, propriedades do telhado, desfazer telhado, telhado, inclinação, por parede, empena, empena de extremidade, uma água, meia-água, espigão, vale, cumeeira, altura da cinta, calcanhar, testeira, forro, beiral, avanço, plano de telhado, alpendre, água-furtada, duas águas
from: 096084a7
---

## O que você vai fazer

Dê forma ao telhado a partir das paredes sob ele. Cada parede tem a própria configuração, então um mesmo telhado pode ter quatro águas na frente, empenas nas extremidades e parar rente a uma parede mais alta nos fundos. Para um alpendre ou uma face que o telhado automático não consegue fazer, desenhe um plano de telhado pelos cantos.

## Colocar um telhado

1. No nível cujas paredes sustentam o telhado, clique em {{ui:Cobertura}}.
2. Digite a **Inclinação** (`6/12`, ou graus como `30`) e o **Avanço**.
3. Escolha uma predefinição: **Telhado de quatro águas**, **Empenas nos lados curtos**, **Empenas nos lados longos** ou **Uma água** (o lado mais próximo do ponteiro é o beiral baixo; os outros lados são empenas).
4. Deixe **Testeira e forro** marcado para beirais fechados com uma tábua de testeira, ou desmarque para uma borda de telhado sem acabamento.
5. Aponte dentro do edifício: o beiral, a cumeeira, os espigões e os vales aparecem na planta. Clique.

Qualquer contorno funciona: formas em L, T, U e de cruz, cantos angulados e recortes. Espigões, cumeeiras e vales são encontrados onde os planos do telhado se encontram.

## Uma parede de cada vez

Selecione o telhado (no nível acima das paredes, clique dentro do contorno dele) e veja em **Cada parede**, em **Propriedades**. Apontar para uma linha marca essa parede na planta.

- **Inclinada**: a parede tem um plano de telhado inclinado sobre ela. Digite a inclinação dela ao lado, por exemplo `12/12` para extremidades íngremes em um telhado de `6/12`.
- **Empena**: o telhado termina em uma extremidade vertical sobre essa parede, a parede é preenchida até o telhado, e o telhado avança além dela pelo **Avanço da empena**.
- **Nenhuma (fica rente)**: o telhado para nessa parede, sem avanço e sem parede de empena, para um telhado encostado em uma parede mais alta.

A lista **Extremidades** no topo define todas as paredes de uma vez; **Definir por parede** aparece quando as paredes não correspondem mais a uma predefinição.

## Alterar um telhado que você já colocou

Selecione o telhado, e **Propriedades** mostra as mesmas configurações da ferramenta Cobertura: **Inclinação**, **Avanço**, **Avanço da empena**, **Altura da cinta**, **Altura da testeira**, **Beirais fechados** e **Espessura**. Cada alteração aparece de imediato na planta e em 3D, com as mesmas verificações da ferramenta (uma inclinação de 80 graus ou mais é recusada, e também é recusada uma configuração que não consegue formar um telhado). Digite um valor e pressione {{key:Enter}}, ou saia da caixa.

Cada alteração é uma etapa de desfazer. Várias alterações na mesma caixa, uma após a outra (digite `6/12`, depois `7/12`, depois `8/12`), se juntam em uma só etapa, então um {{key:Ctrl}}+{{key:Z}} devolve o que o telhado tinha antes da série; alterar outra caixa começa uma nova etapa.

## Altura da cinta, testeira e forro

- **Altura da cinta** é onde os planos do telhado encontram o lado externo das paredes, medida a partir do piso do nível. Deixe em branco para assentar o telhado sobre o topo das paredes; digite um valor maior para um calcanhar elevado.
- **Altura da testeira** é a tábua ao longo dos beirais e subindo pelas empenas. Digite `0` para nenhuma.
- **Beirais fechados** coloca um forro horizontal sob cada beiral, da parede até o fundo da testeira.

Cada plano encontra sua parede na altura da cinta, então paredes com inclinações diferentes mantêm uma só linha de cinta, e os beirais terminam em alturas diferentes, como seriam montados em obra.

## Desenhar um plano de telhado

1. No nível cujas paredes o plano assenta, abra {{ui:Build}} e escolha {{ui:Plano de telhado}}.
2. Digite a **Inclinação** e, se não for o topo das paredes, a **Altura do beiral**.
3. Clique nos cantos. O primeiro lado que você desenha é o beiral; o plano sobe a partir dele em direção ao resto da forma.
4. Clique no primeiro canto de novo, dê duplo clique ou pressione {{key:Enter}} para terminar. {{key:Esc}} descarta os cantos.

Um plano de telhado não segue as paredes. Selecione-o no nível acima (clique dentro dele) para alterar a inclinação, a altura do beiral ou a espessura, ou pressione {{key:Delete}} para removê-lo.

## Adicionar uma água-furtada

1. Mostre o nível onde está o telhado.
2. Abra {{ui:Build}} e escolha {{ui:Água-furtada}}.
3. Na linha de opções, escolha o **Tipo de água-furtada** (**Duas águas** ou **Uma água**) e defina **Largura**, **Parede da frente** (a altura da parede da frente, do topo do telhado até o beiral da água-furtada), **Inclinação** e **Avanço**.
4. Clique em uma face do telhado onde fica o meio da frente da água-furtada.

O BimCraft constrói a parede da frente, duas paredes laterais e o telhado da água-furtada, e o estende para trás até encontrar o telhado. Uma água-furtada de duas águas tem dois planos que se encontram em uma cumeeira. Uma água-furtada de uma água tem um plano, que precisa ser menos íngreme que o telhado. O telhado abaixo da água-furtada é recortado. A água-furtada acompanha o telhado quando as paredes se movem.

Selecione-a para alterar o tipo, a largura, a parede da frente, a inclinação ou o avanço em **Propriedades**. {{key:Delete}} a remove e fecha o telhado de novo. Ela precisa caber em uma única face do telhado, longe de espigões, vales e da cumeeira, e só telhados feitos com a ferramenta {{ui:Cobertura}} aceitam água-furtadas, não os planos de telhado desenhados à mão. Ainda não implementado: uma janela na frente da água-furtada e água-furtadas em planos de telhado desenhados à mão.

## O que é salvo

Os telhados são telhados IFC formados por uma laje de telhado para cada plano, paredes de empena, um elemento de testeira e uma cobertura de forro. O telhado carrega os comprimentos de cumeeira, espigão, vale, beiral e empena, e as áreas dele, para os levantamentos de quantitativos. Um plano de telhado é um telhado IFC com uma laje.

:::tip
Desfazer reverte qualquer alteração do telhado em uma etapa, inclusive uma predefinição que altera todas as paredes.
:::
