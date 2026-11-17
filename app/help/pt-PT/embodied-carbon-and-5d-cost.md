---
title: Carbono incorporado e custos no cronograma
summary: Somar o carbono incorporado do modelo a partir de uma tabela de fatores aberta e editável, e distribuir os preços pelo cronograma 4D numa curva de custos e de fluxo de caixa. Ambos partem de valores introduzidos ou importados.
keywords: carbono incorporado, carbono, co2, kgCO2e, emissões, tabela de fatores, epd, 5d, custo, fluxo de caixa, curva em s, custo do cronograma, preços, preços de medição
from: 83e82840
---

## Carbono incorporado

Abra o painel **Carbono**. A quantidade de cada elemento (volume, área ou comprimento) é multiplicada por um fator da tabela, por módulo do ciclo de vida: a fase de produto é obrigatória; o transporte e os resíduos são opcionais. Os totais são agrupados por material, classe e piso, e por metro quadrado de pavimento.

**A tabela de fatores é a sua.** As linhas que vêm com o BimCraft são valores iniciais genéricos, da ordem de grandeza correta. Não provêm de uma base de dados, estão marcadas como não verificadas e devem ser substituídas pela fonte que usa (uma EPD, uma base de dados nacional ou os valores da sua empresa). Edite as linhas no painel, ou importe e exporte a tabela em CSV ou JSON. As linhas que acrescenta substituem a linha inicial com o mesmo identificador. A tabela fica guardada no modelo.

Os elementos sem correspondência, ou sem quantidade, são listados como **Problemas** e não são contados como zero.

## Custos no cronograma 4D

Abra o painel **Custo** ao lado do cronograma 4D. Introduza preços (escreva-os, importe um CSV ou JSON, ou traga as linhas do TakeoffCraft), associe cada preço a materiais do modelo através de palavras-chave, e o painel calcula o preço dos elementos de cada tarefa. O custo de uma tarefa é distribuído pelos dias de início e de fim (de forma uniforme, ou com peso no início ou no fim), e o painel desenha a curva acumulada do fluxo de caixa por dia, semana ou mês, com o custo por fase e por pacote, e o planeado contra o construído numa data. Exportação em CSV. Nada tem preço enquanto não introduzir preços: nenhum vem incluído.

## Moeda

Uma tabela de preços pode indicar a moeda em que estão expressos os seus preços (três letras, como USD ou EUR). O painel 5D tem uma caixa para isso; a moeda fica guardada no ficheiro com os preços, e as exportações JSON incluem-na. Uma tabela feita antes disto, ou uma em que deixou o campo vazio, não tem moeda: os seus custos são mostrados em USD, a predefinição do shell, e o painel e os totais acumulados indicam-no. Nada é convertido entre moedas.
