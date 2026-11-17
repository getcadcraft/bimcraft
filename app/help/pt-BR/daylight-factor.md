---
title: Estime a luz natural em cada ambiente
summary: O fator médio de luz natural de cada ambiente a partir das suas janelas, das superfícies internas e do céu que cada janela vê, com o ângulo do céu medido no modelo. Uma estimativa de projeto inicial, não uma simulação nem uma verificação de norma.
keywords: luz natural, fator de luz natural, fator médio de luz natural, adf, componente vertical de céu, vsc, ganho solar, sol, valor g, grade, fluxo dividido, componente de céu, componente refletido internamente, janela, envidraçamento, ângulo do céu, obstrução, sombreamento, sacada, beiral, refletância, transmitância, projeto inicial, análise, ambientes, espaços
from: 5f300a78
---

A aba {{ui:Luz natural}} no painel direito calcula o **fator médio de luz natural** de cada ambiente: quanto da luz de um céu nublado lá fora chega ao ambiente, em média, em porcentagem. Ela lê os ambientes (espaços) e as janelas do modelo IFC aberto. Nada é alterado no modelo e nada é enviado.

:::warning
Tudo nesta aba é uma **ferramenta de apoio ao projeto, não um cálculo de conformidade**: estimativas de projeto inicial por métodos publicados, **não uma simulação** e **não uma verificação contra código de obras ou norma**. BS EN 17037, LEED, BREEAM e códigos de energia pedem uma simulação de luz natural com o clima do local; use um programa de simulação de luz natural para esses casos.
:::

## Como calcular

1. Abra um modelo IFC que tenha ambientes (espaços) e janelas. Modelos desenhados aqui têm um ambiente dentro de cada conjunto fechado de paredes.
2. Abra a aba {{ui:Luz natural}} e clique em {{ui:Calcular}}.
3. Cada ambiente mostra seu fator de luz natural e uma faixa: abaixo de 2 %, 2–5 %, 5 % ou mais. Clique em um ambiente para ver suas superfícies e a área e o ângulo do céu de cada janela; o ambiente e as janelas são selecionados no modelo.

Alterar uma entrada atualiza os números na hora; depois de alterar o modelo, clique em {{ui:Calcular novamente}}. {{ui:CSV}} salva cada ambiente com seus números e as entradas usadas.

## A fórmula

Fator médio de luz natural (%) = T × Ag × θ × M ÷ (A × (1 − R²)), somado nas janelas do ambiente (fórmula de Littlefair, usada pela BRE 209, BS 8206-2 e CIBSE LG10):

- **T**, a transmitância de luz do vidro (0.7 para começar: use o valor do fabricante).
- **Ag**, a área envidraçada: a área de cada janela (sua largura × altura totais, ou seu tamanho no modelo) × a **parcela envidraçada** (0.75 para começar: o restante é caixilho).
- **θ**, o ângulo de céu que a janela vê, em graus (abaixo).
- **M**, o fator de manutenção para sujeira no vidro (1 para começar).
- **A**, todas as superfícies internas do ambiente: piso, paredes, teto e janelas, tiradas da forma do próprio ambiente.
- **R**, a refletância média delas, ponderada pela área: piso 0.2, paredes 0.5, teto 0.7 para começar; o vidro conta como 0.1.

## Como o ângulo do céu é medido

Para cada janela, o BimCraft corta o modelo com um plano vertical perpendicular à janela, a partir da face externa do vidro, e olha do horizonte direto para cima: tudo que o corte encontra na frente da janela (um prédio em frente, uma sacada ou um beiral acima, o beiral do telhado) oculta parte desses 90°. θ é o que sobra. A própria janela e a parede em que ela está ficam de fora. Isso é feito em cinco pontos ao longo da largura da janela e tira-se a média, de modo que um pilar fino na frente do centro toma a parte dele, não o céu inteiro.

Um prédio 8.5 m acima do centro da janela e a 9.9 m de distância oculta 40.65° (o ângulo cuja tangente é 8.5 ÷ 9.9), deixando θ = 49.35°.

## Componente vertical de céu de cada janela

{{ui:Calcular}} também mede, para cada janela, o quanto ela vê do céu inteiro: o mesmo corte vertical, girado para cada direção na frente da janela (a cada 2°, de um lado ao outro), para que um prédio de um lado, uma aleta ou um recesso profundo tomem a sua parte. A partir daí o BimCraft calcula o **componente vertical de céu (VSC)**: quanto da luz do céu nublado chega ao vidro, como parcela do que receberia um telhado plano e aberto. Uma janela sem nada na frente recebe **39.6 %**, o máximo para uma janela vertical; um prédio alto que se eleva 25° acima da janela deixa cerca de **27 %**, o valor que a orientação britânica (BRE 209) usa como regra prática. Cada janela no detalhe de um ambiente mostra seu VSC e seu **ângulo de obstrução** (quão alto as coisas se elevam diretamente à frente dela).

O céu é o céu nublado padrão CIE, que é três vezes mais brilhante bem acima do que no horizonte, e o corte é exato: nada é amostrado.

## O sol pelas janelas em uma data

Abra {{ui:Sol pelas janelas em uma data}} e escolha uma data. O BimCraft acompanha o sol ao longo desse dia em intervalos de quinze minutos e soma, para cada janela, o calor que o sol traz pelo vidro:

- o **sol direto**, quando está na frente da janela e nada no modelo o oculta (o mesmo corte exato, voltado para o sol: uma sacada que faz sombra no sol alto do verão ao meio-dia deixa entrar o sol baixo do inverno);
- a **luz do céu** no vidro, menos o que a janela não consegue ver;
- a luz **refletida do chão** (sua refletância: 0.2 para começar);
- tudo passando pelo **valor g** do vidro (a parcela da energia do sol que ele deixa passar: 0.6 para começar; use o valor do fabricante) e pela sua parcela envidraçada.

Cada ambiente mostra o total do dia em kWh e seu pico em watts com a hora; o detalhe de um ambiente desenha o dia como um gráfico. O céu é limpo, pelo modelo de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), com os valores de verão ou inverno para o local e a estação, e a altitude do terreno; a posição do sol é a da NOAA. A latitude e a longitude vêm do site do IFC, e o norte, do norte verdadeiro do modelo; se o modelo não tiver um site, digite a latitude e a longitude. Os horários são de hora padrão (sem horário de verão) no fuso que você digitar, ou no que a longitude sugere.

O que fica de fora: nuvens (é um dia sem nuvens), o vidro deixar entrar menos com ângulos baixos, caixilhos fazendo sombra no vidro, persianas e o que as paredes e o telhado absorvem. A estimativa de resfriamento na mesma aba usa o pico.

## O fator de luz natural em uma grade

Abra {{ui:Fator de luz natural em uma grade}} e {{ui:Calcular a grade}}: o BimCraft traça uma grade sobre o piso de cada ambiente, na altura do plano de trabalho (0.85 m para começar), meio metro para dentro das paredes, e calcula o fator de luz natural em cada ponto pelo **método de fluxo dividido da BRE**:

- o **componente de céu**: o céu nublado visto do ponto através da abertura de cada janela, menos os caixilhos;
- o **componente refletido externamente**: o que o ponto vê de prédios de fora pela janela, que brilham a um décimo do céu atrás deles (altere o brilho da obstrução se forem bem mais claros ou escuros);
- o **componente refletido internamente**: a luz que reflete dentro do ambiente, a partir das superfícies e refletâncias do ambiente, da área das janelas e de quanto dela fica fora (a fórmula da BRE, com a transmitância do vidro no lugar do vidro transparente que ela supunha).

Cada ambiente mostra sua média, seu ponto mais baixo e quanto dele recebe 2 % ou mais; o detalhe de um ambiente desenha sua planta com cada ponto colorido pelo fator de luz natural e as janelas em vermelho. Para ser rápido em qualquer computador, um ambiente tem no máximo **400 pontos**: em um ambiente grande o espaçamento aumenta para caber (digite um espaçamento para escolher o seu).

## O que fica de fora

- Janelas de cobertura (vidro deitado ou inclinado) são listadas, mas não contadas: as fórmulas aqui são para janelas em paredes.
- Janelas sem ambiente atrás delas (um hall sem espaço, por exemplo) são listadas à parte.
- Recessos das janelas (a abertura é tomada na face externa), ofuscamento, horas de sol e luz natural baseada em clima. Para BS EN 17037, LEED ou BREEAM use um programa de simulação de luz natural.
- As faixas vêm de orientações britânicas mais antigas (BS 8206-2), mostradas como guia, nunca como aprovado ou reprovado.
