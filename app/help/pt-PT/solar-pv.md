---
title: Campos solares fotovoltaicos, sombreamento e produção
summary: Instale campos solares em coberturas ou no solo, dê-lhes sombra a partir do modelo, estime a energia anual, dimensione as strings e gere os dados do esquema unifilar. Todos os dados de entrada são mostrados, e o módulo inicial e as perdas são genéricos.
keywords: solar, fotovoltaico, FV, campo, módulo, cobertura, sombreamento, produção, kwh, kwp, dimensionamento de strings, inversor, unifilar, linha única, inclinação, azimute, espaçamento entre filas
from: adf4aaf3
---

## O que vai fazer

Abra o painel **Solar FV**. Escolha uma face de cobertura (a sua inclinação e orientação são lidas do modelo) ou disponha um campo no solo com uma inclinação e uma orientação; os módulos são encaixados no interior com recuos e contados, dando a potência DC em kWp. Colocar o campo grava-o no modelo como dispositivos solares, num só passo de anulação.

## Sombreamento, produção e strings

- **Sombreamento** lança um raio de cada módulo na direção do sol, para dias típicos de cada mês, contra a própria geometria do modelo; assim contam os edifícios vizinhos, as platibandas e as filas à frente. Só a luz solar direta é reduzida, e um campo parcialmente sombreado perde potência na proporção.
- **Produção** dá kWh por mês e por ano, kWh por kWp e o rácio de desempenho. O sol vem dos seus próprios totais mensais numa superfície horizontal, se os escrever. Sem eles, o painel usa um limite superior de céu limpo, e indica-o. **Obtenha o clima a partir do NASA POWER** com um botão no separador Produção: envia apenas a latitude e a longitude do terreno, uma vez, e guarda a resposta neste computador (verificado a partir do navegador em 2026-10-30). O PVGIS não permite que uma página web leia a sua resposta, por isso o separador dá uma ligação que abre os dados mensais do PVGIS para o terreno num novo separador; cole o que mostrar na caixa e os doze meses são preenchidos.
- **Strings** verifica os módulos por string face à janela de tensão do inversor no dia mais frio e no mais quente, e as strings em paralelo face à sua corrente.
- **Unifilar** gera os dados do esquema (campo, caixa de junção, seccionador, inversor, painel, rede) com as secções de cabo e os calibres de fusível a partir dos fatores que escrever. São dados e um SVG; o suplemento Elétrico do CadCraft pode colocá-los como símbolos.

O módulo, o inversor, as perdas e os fatores de cabo que vêm com o BimCraft são exemplos genéricos, identificados em todos os resultados. Escreva os dados do fabricante e os valores do código para que projeta, e faça com que o projeto seja revisto pela pessoa que responde por ele.
