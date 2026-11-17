---
title: Carbono incorporado e custos no cronograma
summary: Some o carbono incorporado do modelo a partir de uma tabela de fatores aberta e editável, e distribua os preços pelo cronograma 4D em uma curva de custo e de fluxo de caixa. Ambos partem de valores que você digita ou importa.
keywords: carbono incorporado, carbono, co2, kgCO2e, emissões, tabela de fatores, DAP, 5D, custo, fluxo de caixa, curva S, custo do cronograma, preços, preços do levantamento
from: 83e82840
---

## Carbono incorporado

Abra o painel **Carbono**. A quantidade de cada elemento (volume, área ou comprimento) é multiplicada por um fator da tabela, por módulo do ciclo de vida: a etapa de produto é obrigatória; transporte e resíduo são opcionais. Os totais saem por material, classe e pavimento, e por metro quadrado de piso.

**A tabela de fatores é sua.** As linhas que vêm com o BimCraft são valores iniciais genéricos, da ordem de grandeza certa. Não vêm de um banco de dados, estão marcadas como não verificadas e precisam ser substituídas pela fonte que você usa (uma DAP, um banco de dados nacional ou os dados da sua empresa). Edite as linhas no painel, ou importe e exporte a tabela como CSV ou JSON. Linhas que você adicionar substituem a linha inicial com o mesmo id. A tabela é salva no modelo.

Elementos sem correspondência, ou sem quantidade, são listados como Problemas, em vez de contados como zero.

## Custos no cronograma 4D

Abra o painel **Custo** ao lado do cronograma 4D. Dê preços a ele (digite-os, importe um CSV ou JSON, ou traga as linhas do TakeoffCraft), associe cada preço a materiais do modelo por palavras-chave, e ele precifica os elementos de cada tarefa. O custo de uma tarefa é distribuído pelos dias de início ao fim (uniformemente, ou concentrado no início ou no fim), e o painel desenha a curva acumulada de fluxo de caixa por dia, semana ou mês, com custo por etapa e por pacote, e o planejado contra o construído em uma data. Saída em CSV. Nada é precificado até você informar os preços: nenhum vem incluído.

## Moeda

Uma tabela de preços pode indicar em qual moeda estão seus preços (três letras, como USD ou EUR). O painel 5D tem um campo para isso; ele é guardado no arquivo junto com os preços, e as exportações em JSON o incluem. Uma tabela feita antes disso, ou em que você deixou o campo vazio, não tem moeda: seus custos são mostrados em USD, o padrão do aplicativo, e o painel e os totais acumulados indicam isso. Nada é convertido entre moedas.
