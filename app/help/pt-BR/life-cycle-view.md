---
title: Veja o que se desgasta em cinquenta anos
summary: As janelas, portas, acabamentos e a cobertura do modelo, a vida útil de cada item, os anos em que cada um é substituído e o custo por ano, com o valor presente, quando se digita um custo por unidade.
keywords: ciclo de vida, vida útil, substituição, manutenção, custo, valor presente, desconto, inflação, 50 anos, janelas, pintura, cobertura, acabamentos, ciclo de vida completo
from: 1b849545
---

A seção {{ui:Visão do ciclo de vida}} do painel esquerdo lista o que o modelo contém e que se desgasta, e quando cada item é substituído durante o período de estudo (50 anos, para começar). Nada no modelo é alterado.

## Como ler

Cada item mostra sua quantidade (medida no modelo: área das janelas, portas externas e internas, acabamento da parede externa, pintura interna, acabamento de piso e teto, a projeção da cobertura, escadas), uma **vida útil em anos** e um **custo por unidade**. Um item é substituído ao atingir sua vida útil, depois duas vezes a vida útil e assim por diante, enquanto isso ocorrer antes do fim do estudo. Assim, uma janela de 30 anos em um estudo de 50 anos é substituída uma vez, no ano 30. As vidas úteis são valores típicos de planejamento: ajuste-os para os seus produtos e para o seu clima. Nenhum custo é assumido; digite um para ver o dinheiro por ano, o total e o seu valor presente. Adicione uma taxa de desconto e uma taxa de inflação, se quiser.

{{ui:Salvar o cronograma (CSV)}} salva os componentes e os anos. Tubulações, dutos, fiação e equipamentos também são listados (veja abaixo).

## Tubulações, dutos, fiação e equipamentos

- **Tubulações e dutos** são os metros de cada trecho desenhado. **Equipamentos** (bombas, ventiladores, válvulas, terminais, aparelhos, tomadas, interruptores, quadros e os demais itens que a aba Ativos acompanha) são contados por tipo, cada tipo com uma vida útil de planejamento. Um item cuja própria *vida útil* é definida na aba Ativos tem uma linha própria com essa vida; se tiver data de instalação, começa pela sua idade: uma bomba com 16 anos e vida útil de 10 anos vence agora, depois a cada dez anos.
- A **fiação** é uma **estimativa**: a distância em planta, a partir do quadro, ao longo dos dispositivos de cada circuito, do mais próximo para o mais distante, multiplicada por 1.25 para o percurso. O modelo não desenha cabo; confira o valor com o seu próprio levantamento de quantitativos.
- As vidas úteis são valores de planejamento a revisar, não uma fonte.

## Carbono por substituição

Marque {{ui:Incluir o carbono incorporado de cada substituição}}. Uma nova janela, porta, escada, cobertura, tubulação ou equipamento é contada pelo carbono que os elementos do modelo daquele tipo têm (os fatores da aba Carbono, por unidade). Um item sem elemento ou fator, como pintura, acabamentos e fiação, mostra um traço e aparece na lista. O fim de vida da peça antiga e o trabalho de substituí-la não são contados.
