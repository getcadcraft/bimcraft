---
title: Verificar aquecimento e arrefecimento com EnergyPlus
summary: Escrever o modelo como ficheiro EnergyPlus, ou executar o EnergyPlus versão 26.2.0 sobre ele no navegador, e comparar as cargas de projeto com a ajuda rápida de aquecimento e arrefecimento. Uma segunda opinião para o projeto inicial, e não um cálculo de conformidade.
keywords: energyplus, simulação energética, dia de projeto, carga de aquecimento, carga de arrefecimento, ficheiro meteorológico, epw, idf, massa térmica, energia anual, simular
from: b82a5bf2
---

## O que vai fazer

O painel **Verificar com EnergyPlus** escreve o modelo aberto como um ficheiro de entrada do EnergyPlus (um IDF): uma zona por compartimento, as paredes, pavimentos, coberturas e janelas com os respetivos valores U, as renovações de ar e o aquecimento e arrefecimento ideais. Pode sempre **guardar esse ficheiro** e executá-lo no seu próprio EnergyPlus.

Se também configurar o motor, o painel pode simular no próprio local e lista as cargas de aquecimento e arrefecimento de projeto do EnergyPlus ao lado das da ajuda rápida, compartimento a compartimento.

Esta é uma ajuda de projeto. Os códigos energéticos, a certificação e o licenciamento exigem uma ferramenta aprovada e os dados climáticos que ela requer, e o resultado tem de ser revisto pela pessoa que responde por ele.

## Configurar o motor

O BimCraft não inclui o EnergyPlus. É uma compilação WebAssembly grande (cerca de 6 MB comprimida, mais um ficheiro de dados de 4.6 MB), por isso é alojada num servidor próprio e o endereço é escrito no painel. A página só carrega o motor quando se prime um botão de simulação, nunca no arranque. O endereço tem de ser https, um caminho deste site ou localhost.

## Dias de projeto ou um ano

- **Simular dias de projeto** não precisa de ficheiro meteorológico. Executa um dia de inverno frio, sem sol, e um dia de verão quente e limpo, às temperaturas indicadas nos dados de aquecimento e arrefecimento do separador Luz natural, e indica a carga de cada compartimento em watts.
- **Simular um ano** precisa de um ficheiro meteorológico em formato EPW, que se escolhe. Acrescenta pessoas, luzes e equipamentos a partir dos mesmos dados (sempre ligados, porque não é inventado nenhum horário) e indica a energia de aquecimento e de arrefecimento de cada compartimento em kWh. Os ficheiros meteorológicos têm as suas próprias licenças, por isso deve usar-se apenas um que esteja autorizado.

## Massa térmica

Marque **Atribuir massa térmica às paredes com camadas conhecidas**, e as paredes, coberturas e pavimentos cujas camadas de material são conhecidas são escritos camada a camada, com densidade e calor específico retirados de uma pequena tabela de valores típicos, pelo nome do material. As camadas são tomadas primeiro do exterior, pela ordem em que o ficheiro as lista. Os elementos sem camadas ficam com o seu valor U e sem massa.

## Ler a comparação

Os dois métodos respondem a perguntas ligeiramente diferentes. A ajuda rápida mantém cada elemento; o ficheiro EnergyPlus calcula a média dos valores U de cada compartimento por tipo de superfície. Uma diferença superior a 15 % na carga de aquecimento de projeto de um compartimento aparece como nota no painel ⚠, com os dois valores. O arrefecimento difere mais por concepção: a ajuda rápida calcula um pico a partir do sol numa data, enquanto o EnergyPlus dimensiona no seu próprio dia de projeto.
