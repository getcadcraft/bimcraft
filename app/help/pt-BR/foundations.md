---
title: Fundações sob as paredes
summary: Coloque uma laje sobre o solo, paredes de embasamento com laje, um vão técnico ou um porão sob um edifício com um clique; as sapatas são dimensionadas a partir das paredes e do número de pavimentos, e a fundação acompanha quando as paredes são movidas.
keywords: fundação, sapata, laje sobre o solo, borda engrossada, laje monolítica, parede de embasamento, vão técnico, porão, parede de porão, geada, concreto, largura da sapata
from: c0e20172
---

## O que você vai fazer

Dê ao edifício uma fundação compatível com suas paredes. O BimCraft acompanha a face externa das paredes, dimensiona as sapatas a partir do tipo de parede e de quantos pavimentos se apoiam nelas, e refaz a fundação sempre que as paredes mudam.

## Colocar uma fundação

1. No nível cujas paredes se apoiam nela (geralmente o primeiro), abra {{ui:Build}} e escolha {{ui:Foundation}}.
2. Escolha o tipo:
   - **Laje sobre o solo**: uma laje de concreto de 4" cujo topo é o piso, com uma borda engrossada sob as paredes.
   - **Paredes de embasamento e laje**: paredes de fundação até o piso, sobre sapatas, com uma laje dentro delas.
   - **Vão técnico**: paredes de fundação que param sob a estrutura do piso, sobre sapatas, sem laje.
   - **Porão**: paredes de fundação de altura total sobre sapatas, com laje de porão, sob a estrutura do piso.
3. Aponte dentro do edifício: as sapatas aparecem tracejadas com seu tamanho. Clique.

Clicar em um edifício que já tem uma fundação a seleciona, para que você a altere em vez de adicionar uma segunda.

## Alterar

Selecione a fundação (clicando dentro do edifício com {{ui:Foundation}}, ou clicando em qualquer uma de suas partes na visualização 3D ou na árvore do modelo) e altere-a em **Propriedades**: o tipo, a largura e a profundidade da sapata, a profundidade da face inferior da sapata, a espessura da parede, a distância abaixo do piso em que as paredes param, a altura do porão e a espessura da laje. Cada alteração é uma única etapa de desfazer.

As medidas marcadas como **auto** vêm das paredes: sapatas de 12", 15" ou 23" de largura para um, dois ou três pavimentos sobre laje ou paredes de embasamento; de 18", 22" ou 27" sobre vão técnico ou porão; e 4" a mais sob paredes de alvenaria ou de concreto. Digite uma medida para definir a sua; digite `0` para voltar ao **auto**.

:::warning
As medidas automáticas são padrões rotulados para casas típicas de estrutura leve, não cálculo de engenharia. Um projetista ou engenheiro verifica sapatas, profundidades e paredes conforme o solo, a profundidade de geada e as cargas.
:::

## O que é salvo

Uma fundação é salva como um conjunto de elementos IFC ("Foundation") formado por uma sapata (ou a borda engrossada de uma laje), uma parede de fundação e uma laje, conforme o tipo exigir, todos de concreto, cada um com suas quantidades: comprimentos, larguras, alturas, áreas e volumes, prontos para levantamento de quantitativos.

## Vale saber

- Mova, adicione ou exclua paredes e a fundação sob elas é refeita; desenhe paredes no nível acima e as sapatas abaixo se alargam para o pavimento extra.
- {{key:Delete}} remove uma fundação selecionada, com todas as suas partes.
- Com o terreno do local no modelo (veja [O terreno do local, a plataforma do edifício e a pavimentação](topic:terrain)), paredes de embasamento e sapatas de vão técnico descem com ele em degraus de 8".
- Sapatas sob paredes internas: ainda não implementado.
