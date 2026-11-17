---
title: Verificar aquecimento e resfriamento com EnergyPlus
summary: Grave o modelo como arquivo EnergyPlus, ou execute o EnergyPlus versão 26.2.0 nele no navegador, e compare suas cargas de projeto com a ajuda rápida de aquecimento e resfriamento. Uma segunda opinião para o início do projeto, não um cálculo de conformidade.
keywords: energyplus, simulação de energia, dia de projeto, carga de aquecimento, carga de resfriamento, arquivo climático, epw, idf, massa térmica, energia anual, simular
from: b82a5bf2
---

## O que você vai fazer

O painel **Verificar com EnergyPlus** grava o modelo aberto como arquivo de entrada do EnergyPlus (um IDF): uma zona por ambiente, as paredes, pisos, coberturas e janelas com seus valores de U, as trocas de ar e o aquecimento e resfriamento ideais. Você sempre pode **salvar esse arquivo** e executá-lo no seu próprio EnergyPlus.

Se você também configurar o mecanismo, o painel pode simular na hora e lista o aquecimento e o resfriamento de projeto do EnergyPlus ao lado dos da ajuda rápida, ambiente por ambiente.

Esta é uma ferramenta de apoio ao projeto. Códigos de energia, certificações e licenças exigem uma ferramenta aprovada e os dados climáticos que ela requer, e o resultado precisa ser revisado pela pessoa que responde por ele.

## Configurar o mecanismo

O BimCraft não inclui o EnergyPlus. Trata-se de uma grande compilação WebAssembly (cerca de 6 MB compactados, mais um arquivo de dados de 4.6 MB), então você o hospeda por conta própria e digita o endereço dele no painel. A página só carrega o mecanismo quando você pressiona um botão de simulação, nunca na inicialização. O endereço deve ser https, um caminho deste site ou localhost.

## Dias de projeto ou um ano

- **Simular dias de projeto** não precisa de arquivo climático. Simula um dia de inverno frio, sem sol, e um dia de verão quente e limpo, nas temperaturas dos dados de aquecimento e resfriamento da guia Iluminação natural, e informa a carga de cada ambiente em watts.
- **Simular um ano** precisa de um arquivo climático em formato EPW que você escolhe. Acrescenta pessoas, luzes e equipamentos a partir dos mesmos dados (sempre ligados, já que nenhum cronograma é inventado) e informa a energia de aquecimento e resfriamento de cada ambiente em kWh. Arquivos climáticos têm licenças próprias, então use um que você tenha permissão de usar.

## Massa térmica

Marque **Dar massa térmica às paredes com camadas conhecidas** e paredes, coberturas e pisos cujas camadas de material são conhecidas são gravados camada por camada, com densidade e calor específico tirados de uma pequena tabela de valores típicos pelo nome do material. As camadas são tomadas do lado externo primeiro, na ordem em que o arquivo as lista. Elementos sem camadas permanecem com o valor de U e sem massa.

## Como ler a comparação

Os dois métodos respondem perguntas um pouco diferentes. A ajuda rápida considera todo elemento; o arquivo do EnergyPlus calcula a média dos valores de U de cada ambiente por tipo de superfície. Uma diferença acima de 15 % no aquecimento de projeto de um ambiente aparece como nota no painel ⚠, com os dois números. O resfriamento difere mais, por projeto: a ajuda rápida calcula um pico a partir do sol em uma data, e o EnergyPlus dimensiona com o próprio dia de projeto.
