---
title: Veja o que se desgasta ao longo de cinquenta anos
summary: As janelas, as portas, os acabamentos e a cobertura que o modelo contém, as respetivas vidas úteis, os anos em que cada um é substituído, e o custo por ano e o seu valor atual quando indica um custo por unidade.
keywords: ciclo de vida, vida útil, substituição, manutenção, custo, valor atual, desconto, inflação, 50 anos, janelas, pintura, cobertura, acabamentos, custo total do ciclo de vida
from: 1b849545
---

A secção {{ui:Vista do ciclo de vida}} do painel esquerdo lista o que o modelo contém e que se desgasta, e quando é substituído durante o período de estudo (50 anos, para começar). Nada no modelo é alterado.

## Como ler

Cada parte mostra a sua quantidade (medida a partir do modelo: área das janelas, portas exteriores e interiores, acabamento da parede exterior, pintura interior, acabamento do pavimento e do teto, área de implantação da cobertura, escadas), uma **vida em anos** e um **custo por unidade**. Uma parte é substituída ao fim da sua vida, ao fim de duas vezes a sua vida e assim por diante, enquanto esse momento for antes do fim do estudo; assim, uma janela de 30 anos num estudo de 50 anos é substituída uma vez, no ano 30. As vidas úteis são valores típicos de planeamento: altere-os para os seus produtos e clima. Não é assumido nenhum custo; indique um para ver o montante por ano, o total e o seu valor atual. Adicione uma taxa de desconto e uma taxa de inflação, se as quiser.

{{ui:Guardar o planeamento (CSV)}} escreve os componentes e os anos. As tubagens, as condutas, a cablagem e os equipamentos também são listados (ver abaixo).

## Tubagens, condutas, cablagem e equipamentos

- **Tubagens e condutas** são os metros de cada troço desenhado. **Equipamentos** (bombas, ventiladores, válvulas, terminais, acessórios, tomadas, interruptores, quadros e os restantes itens que o separador Assets controla) são contados por tipo, cada tipo com uma vida de planeamento. Um item cuja *vida útil* esteja definida no separador Assets tem a sua própria linha com essa vida e, se tiver uma data de instalação, começa com a sua idade: uma bomba com 16 anos e uma vida de 10 anos tem de ser substituída agora, e depois de dez em dez anos.
- A **cablagem** é uma **estimativa**: a distância em planta desde o quadro, ao longo dos aparelhos de cada circuito, do mais próximo para o mais distante, multiplicada por 1.25 para o traçado. O modelo não desenha cabos, por isso confira-a com a medição de quantidades.
- As vidas úteis são valores de planeamento a rever, não uma fonte.

## Carbono por substituição

Marque {{ui:Incluir o carbono incorporado de cada substituição}}. Uma nova janela, porta, escada, cobertura, tubagem ou equipamento é contado com o carbono que os elementos do modelo desse tipo levam (os fatores do separador Carbon, por unidade). Uma parte sem elemento nem fator, como a pintura, os acabamentos e a cablagem, mostra um travessão e é listada. O fim de vida da parte antiga e o trabalho de a substituir não são contabilizados.
