---
title: Simular a circulação de pessoas no edifício
summary: Uma evacuação ou as chegadas normais de um dia pelos seus compartimentos, portas e escadas, com filas onde o edifício se estreita, o percurso mais longo até uma saída a partir de cada compartimento e os resultados como Problemas. Um modelo aproximado de multidões para decisões de projeto, e não um certificado de segurança contra incêndios.
keywords: pessoas, evacuação, saída de emergência, fuga, saída, distância de percurso, fila, multidão, fluxo, largura de porta, escadas, chegadas, estrangulamento, simulação, ocupantes, peão, e se, porta bloqueada
from: 84aa8920
---

A secção {{ui:Pessoas no edifício}} do painel da esquerda leva as pessoas pelos compartimentos, portas e escadas do modelo IFC aberto. Nada no modelo é alterado e nada é carregado.

:::warning
Isto é **uma ajuda para o projeto, e não um certificado de segurança contra incêndios**. Não considera o fogo, o fumo, o pânico, as diferenças de mobilidade nem o que um código exige. Os limites são da sua responsabilidade: o percurso mais longo até uma saída e o tempo disponível são números que escreve, e nenhum é assumido por defeito.
:::

## Executar

1. Abra um modelo com compartimentos e portas fechados. Uma porta com um compartimento de um só lado é uma saída; uma porta entre dois compartimentos liga-os; uma escada liga os compartimentos nas suas extremidades.
2. Escolha **Evacuação** (todos caminham até uma saída), **Chegadas** (todos entram e caminham até um compartimento) ou **Troca** (as pessoas nos compartimentos saem enquanto entram tantas outras), e a área de pavimento por pessoa. Os compartimentos com nome de corredor, escada, átrio ou WC não albergam ninguém.
3. Clique em {{ui:Executar}}. Obtém-se o tempo em que a última pessoa sai (e quando sai metade e nove em cada dez), a fila em cada porta e escada, o compartimento com o percurso mais longo, e uma planta que reproduz a execução.

## E se…

Marque {{ui:Fechada}} numa porta na tabela e execute de novo: as pessoas encontram outro caminho, ou os compartimentos sem saída são listados como erros. Uma porta com o dobro da largura esvazia um compartimento muito mais depressa; a tabela mostra onde estão as filas.

## Como funciona

Cada compartimento é uma grelha, por isso as pessoas contornam cantos, não paredes. A velocidade diminui à medida que um compartimento se enche (S = 1.4 (1 − 0.266 D) m/s, D em pessoas por m²). Uma porta deixa passar 1.3 pessoas por segundo por cada metro da sua largura, menos 150 mm de cada lado; uma escada 1.0 e uma marcha mais lenta. As pessoas esperam numa fila por ordem de chegada. Um número de execução repete exatamente a mesma execução.

O assistente pode executar o mesmo: peça uma evacuação ou o percurso mais longo até uma saída a partir de cada compartimento.

## Pessoas em cada compartimento

Abra {{ui:Pessoas em cada compartimento}} para escrever um número em qualquer compartimento. Uma caixa vazia usa o valor da área de pavimento (mostrado a cinzento); 0 esvazia um compartimento. Os seus números são usados na execução e ficam guardados neste navegador.

## Contrafluxo nas portas

Em **Troca**, as pessoas que saem e as que entram encontram-se nas mesmas portas. Quando uma porta deixa passar alguém no sentido contrário logo atrás da última pessoa, mantém parte da sua taxa (0.8 aqui; uma hipótese, visto que os valores publicados variam), e a tabela conta as mudanças de sentido. Uma porta que muda de sentido com frequência é listada em Problemas como nota.

## Escadas e patamares

Cada patamar de uma escada custa a quem caminha um segundo para virar (uma hipótese). Uma escada reta não tem nenhum; uma escada em L ou em U tem um. A taxa da escada continua a vir da largura do seu lance.

## Na vista 3D

Marque {{ui:Mostrar as pessoas na vista 3D}} e os caminhantes aparecem como figuras no modelo, coloridas consoante o que estão a fazer, e movem-se à medida que reproduz a execução. Nada é acrescentado ao modelo.
