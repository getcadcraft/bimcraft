---
title: Arranjos fotovoltaicos, sombreamento e produção de energia
summary: Posicione arranjos solares em telhados ou no solo, calcule o sombreamento a partir do modelo, estime a energia anual, dimensione as strings e gere os dados do diagrama unifilar. Todas as entradas são mostradas, e o módulo inicial e as perdas são genéricos.
keywords: solar, fv, fotovoltaico, arranjo, módulo, telhado, sombreamento, produção, kwh, kwp, dimensionamento de strings, inversor, unifilar, diagrama unifilar, inclinação, azimute, espaçamento entre fileiras
from: adf4aaf3
---

## O que você vai fazer

Abra o painel **Solar PV**. Escolha uma face do telhado (a inclinação e a orientação são lidas do modelo) ou posicione um arranjo no solo com uma inclinação e uma orientação; os módulos são encaixados dentro dele com recuos e contados, dando a potência em CC em kWp. Posicionar o arranjo grava-o no modelo como dispositivos solares, em um único passo de desfazer.

## Sombreamento, produção e strings

- **Sombreamento** lança um raio de cada módulo em direção ao sol, para dias típicos de cada mês, contra a própria geometria do modelo; assim, edificações vizinhas, platibandas e as fileiras à frente contam. Só a luz solar direta é reduzida, e um arranjo parcialmente sombreado perde potência na mesma proporção.
- **Produção** dá kWh por mês e por ano, kWh por kWp e a taxa de desempenho (PR). O sol vem dos seus próprios totais mensais em uma superfície horizontal, se você digitá-los. Sem eles, o painel usa um limite superior de céu limpo, e informa isso. **Buscar o clima no NASA POWER** é um botão na guia Produção: ele envia apenas a latitude e a longitude do terreno, uma vez, e guarda a resposta neste computador (verificado pelo navegador em 2026-10-30). O PVGIS não permite que uma página da web leia a resposta dele, então a guia oferece um link que abre os dados mensais do PVGIS para o terreno em uma nova aba; cole o que ele mostra na caixa e os doze meses são preenchidos.
- **Strings** verifica os módulos por string contra a faixa de tensão do inversor no dia mais frio e no mais quente, e as strings em paralelo contra a corrente dele.
- **Diagrama unifilar** gera os dados do diagrama (arranjo, combinador, seccionador, inversor, painel, concessionária) com as bitolas de fio e de fusível a partir dos fatores que você digitar. São dados e um SVG; o complemento Elétrico do CadCraft pode posicioná-los como símbolos.

O módulo, o inversor, as perdas e os fatores de fiação que vêm com o BimCraft são exemplos genéricos, identificados em cada resultado. Digite os dados do fabricante e os valores de norma para os quais você projeta, e faça o projeto ser revisado pelo responsável técnico.
