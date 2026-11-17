---
title: Fundações sob as paredes
summary: Coloque uma laje sobre o terreno, paredes de fundação com laje, um vazio técnico ou uma cave sob um edifício com um clique; as sapatas são dimensionadas a partir das paredes e do número de pisos, e a fundação acompanha quando as paredes se movem.
keywords: fundação, sapata, laje sobre o terreno, bordo espessado, laje monolítica, parede de fundação, vazio técnico, espaço técnico, cave, parede de cave, geada, betão, largura da sapata
from: c0e20172
---

## O que vai fazer

Dê ao edifício uma fundação que corresponda às suas paredes. O BimCraft segue o exterior das paredes, dimensiona as sapatas a partir do tipo de parede e do número de pisos que assentam nelas, e volta a fazer a fundação sempre que as paredes mudam.

## Colocar uma fundação

1. No nível cujas paredes assentam nela (normalmente o primeiro), abra {{ui:Compilação}} e escolha {{ui:Fundação}}.
2. Escolha o tipo:
   - **Laje sobre o terreno**: uma laje de betão de 4" cuja face superior é o pavimento, com um bordo espessado sob as paredes.
   - **Paredes de fundação e laje**: paredes de fundação até ao pavimento, assentes em sapatas, com uma laje no interior.
   - **Vazio técnico**: paredes de fundação que param sob a estrutura do pavimento, assentes em sapatas, sem laje.
   - **Cave**: paredes de fundação de altura total, assentes em sapatas, com uma laje de cave sob a estrutura do pavimento.
3. Aponte para o interior do edifício: as sapatas aparecem a tracejado, com a sua medida. Clique.

Clicar num edifício que já tem uma fundação seleciona-a, para que a possa alterar em vez de acrescentar uma segunda.

## Alterá-la

Selecione a fundação (clicando dentro do edifício com {{ui:Fundação}}, ou clicando em qualquer das suas partes na vista 3D ou na árvore do modelo) e altere-a em **Propriedades**: o tipo, a largura e a profundidade da sapata, a profundidade da face inferior da sapata, a espessura da parede, a profundidade abaixo do pavimento em que as paredes param, a altura da cave e a espessura da laje. Cada alteração é um passo de anulação.

As medidas marcadas **automático** vêm das paredes: sapatas com 12", 15" ou 23" de largura para um, dois ou três pisos numa laje ou em paredes de fundação; 18", 22" ou 27" sobre um vazio técnico ou uma cave; e mais 4" de largura sob paredes de alvenaria ou de betão. Escreva uma medida para definir a sua; escreva `0` para voltar ao automático.

:::warning
As medidas automáticas são valores predefinidos identificados para habitações típicas de construção leve, não são cálculo de engenharia. Um projetista ou engenheiro verifica as sapatas, as profundidades e as paredes em função do solo, da profundidade de geada e das cargas.
:::

## O que é guardado

Uma fundação é guardada como um conjunto de elementos IFC ("Foundation"), composto por uma sapata (ou o bordo espessado de uma laje), uma parede de fundação e uma laje, conforme o seu tipo exige, tudo em betão, cada um com as suas quantidades: comprimentos, larguras, alturas, áreas e volumes, prontos para as medições.

## Bom saber

- Mover, acrescentar ou eliminar paredes volta a criar a fundação sob elas; desenhar paredes no nível de cima alarga as sapatas de baixo para o piso extra.
- {{key:Delete}} remove uma fundação selecionada, com todas as suas partes.
- Com o terreno do local no modelo (veja [O terreno do local, a plataforma do edifício e o pavimento exterior](topic:terrain)), as paredes de fundação e as sapatas do vazio técnico descem com ele em degraus de 8".
- Ainda não são feitas as sapatas sob paredes interiores.
