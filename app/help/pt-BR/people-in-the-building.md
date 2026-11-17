---
title: Fazer pessoas circularem pelo edifício
summary: Uma evacuação ou as chegadas de um dia normal pelos seus ambientes, portas e escadas, com filas onde o edifício se estreita, o trajeto mais longo até uma saída a partir de cada ambiente, e os achados como Problemas. Um modelo aproximado de multidão para decisões de projeto, não um certificado de segurança contra incêndio.
keywords: pessoas, evacuação, rota de saída, saída, fuga, distância de percurso, fila, multidão, fluxo, largura de porta, escadas, chegadas, gargalo, simulação, ocupantes, pedestre, e se, porta bloqueada
from: 84aa8920
---

A seção {{ui:People in the building}} do painel esquerdo faz as pessoas circularem pelos ambientes, portas e escadas do modelo IFC aberto. Nada no modelo é alterado e nada é enviado.

:::warning
Isto é **um auxílio de projeto, não um certificado de segurança contra incêndio**. Ele não considera fogo, fumaça, pânico, diferenças de mobilidade nem o que um regulamento exige de você. Os limites são seus: o trajeto mais longo até uma saída e o tempo disponível são números que você digita, e nenhum deles é assumido.
:::

## Executar

1. Abra um modelo com ambientes fechados e portas. Uma porta com um ambiente de um só lado é uma saída; uma porta entre dois ambientes os liga; uma escada liga os ambientes em suas extremidades.
2. Escolha **Evacuação** (todos caminham até uma saída), **Chegadas** (todos entram e caminham até um ambiente) ou **Troca** (as pessoas nos ambientes saem enquanto o mesmo número entra), e a área de piso por pessoa. Ambientes com nome de corredor, escada, hall ou banheiro não recebem ninguém.
3. Clique em {{ui:Run}}. Você obtém o tempo em que a última pessoa sai (e quando metade e nove em cada dez já saíram), a fila em cada porta e escada, o ambiente com o trajeto mais longo, e uma planta que reproduz a execução.

## Cenários hipotéticos

Marque {{ui:Shut}} em uma porta na tabela e execute de novo: as pessoas encontram outro caminho, ou os ambientes sem saída são listados como erros. Uma porta duas vezes mais larga esvazia um ambiente bem mais cedo; a tabela mostra onde estão as filas.

## Como funciona

Cada ambiente é uma grade, então as pessoas contornam cantos, não atravessam paredes. A velocidade cai conforme um ambiente se enche (S = 1.4 (1 − 0.266 D) m/s, D em pessoas por m²). Uma porta deixa passar 1.3 pessoa por segundo por metro de sua largura, menos 150 mm de cada lado; uma escada, 1.0, e caminhar mais devagar. As pessoas esperam em uma fila por ordem de chegada. Um número de execução repete a mesma execução exatamente.

O assistente pode fazer o mesmo: peça uma evacuação ou o trajeto mais longo até uma saída a partir de cada ambiente.

## Pessoas em cada ambiente

Abra {{ui:People in each room}} para digitar um número para qualquer ambiente. Uma caixa vazia usa o valor de área de piso (mostrado em cinza); 0 esvazia um ambiente. Seus números são usados na execução e ficam guardados neste navegador.

## Fluxo contrário nas portas

Em **Troca**, as pessoas que saem e as que entram se encontram nas mesmas portas. Quando uma porta é atravessada por alguém no sentido oposto logo atrás da última pessoa, ela mantém parte de sua taxa (0.8 aqui; uma hipótese, já que os valores publicados variam), e a tabela conta as mudanças de sentido. Uma porta que muda de sentido com frequência é listada em Problemas como nota.

## Escadas e patamares

Cada patamar de uma escada custa um segundo para quem caminha virar (uma hipótese). Uma escada reta não tem nenhum; uma escada em L ou em U tem um. A taxa da escada ainda vem da largura do seu lance.

## Na vista 3D

Marque {{ui:Show the people in the 3D view}} e os caminhantes aparecem como figuras no modelo, coloridos pelo que estão fazendo, e se movem enquanto você reproduz a execução. Nada é adicionado ao modelo.
