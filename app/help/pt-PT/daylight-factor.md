---
title: Estimar a luz natural em cada compartimento
summary: O fator médio de luz natural de cada compartimento a partir das suas janelas, das suas superfícies interiores e do céu que cada janela vê, com o ângulo do céu medido no modelo. Uma estimativa de fase inicial de projeto, não uma simulação nem uma verificação regulamentar.
keywords: luz natural, fator de luz natural, fator médio de luz natural, adf, componente vertical do céu, vsc, ganho solar, sol, valor g, grelha, fluxo dividido, componente do céu, componente refletida internamente, janela, envidraçamento, ângulo do céu, obstrução, sombreamento, varanda, beiral, refletância, transmitância, projeto inicial, análise, compartimentos, espaços
from: 5f300a78
---

O separador {{ui:Luz natural}} do painel direito calcula o **fator médio de luz natural** de cada compartimento: quanta da luz de um céu encoberto no exterior chega ao compartimento, em média, como percentagem. Lê os compartimentos (espaços) e as janelas do modelo IFC aberto. Nada é alterado no modelo e nada é enviado para fora.

:::warning
Tudo neste separador é **uma ferramenta de apoio ao projeto, não um cálculo de conformidade**: estimativas de fase inicial por métodos publicados, **não uma simulação** e **não uma verificação contra um código de construção ou uma norma**. A BS EN 17037, a LEED, a BREEAM e os códigos energéticos pedem uma simulação de luz natural com o clima do local; use um programa de simulação de luz natural para esses.
:::

## Fazer o cálculo

1. Abra um modelo IFC com compartimentos (espaços) e janelas. Os modelos desenhados aqui têm um compartimento dentro de cada conjunto fechado de paredes.
2. Abra o separador {{ui:Luz natural}} e clique em {{ui:Calcular}}.
3. Cada compartimento mostra o seu fator de luz natural e uma faixa: abaixo de 2 %, 2–5 %, 5 % ou mais. Clique num compartimento para ver as suas superfícies e a área e o ângulo do céu de cada janela; o compartimento e as suas janelas são selecionados no modelo.

Ao alterar um dado, os números seguem de imediato; depois de alterar o modelo, clique em {{ui:Calcular de novo}}. {{ui:CSV}} guarda cada compartimento com os seus números e os dados usados.

## A fórmula

Fator médio de luz natural (%) = T × Ag × θ × M ÷ (A × (1 − R²)), somado sobre as janelas do compartimento (fórmula de Littlefair, usada pela BRE 209, pela BS 8206-2 e pela CIBSE LG10):

- **T**, a transmitância luminosa do vidro (0.7 para começar: use o valor do fabricante).
- **Ag**, a área envidraçada: a área de cada janela (a sua largura × altura totais, senão a sua dimensão no modelo) × a **parcela envidraçada** (0.75 para começar: o resto é caixilho).
- **θ**, o ângulo do céu que a janela vê, em graus (abaixo).
- **M**, o fator de manutenção para a sujidade no vidro (1 para começar).
- **A**, todas as superfícies interiores do compartimento: pavimento, paredes, teto e janelas, tiradas da forma do próprio compartimento.
- **R**, a sua refletância média, ponderada pela área: pavimento 0.2, paredes 0.5, teto 0.7 para começar; o vidro conta como 0.1.

## Como se mede o ângulo do céu

Para cada janela, o BimCraft corta o modelo com um plano vertical perpendicular à janela, a partir da face exterior do vidro, e olha do horizonte diretamente para cima: tudo o que o corte encontra à frente da janela (um edifício em frente, uma varanda ou um beiral por cima, o próprio beiral) oculta parte desses 90°. θ é o que resta. A própria janela e a parede onde está ficam de fora. Faz isto em cinco pontos ao longo da largura da janela e toma a média, por isso um poste fino à frente do meio toma a sua parte, e não o céu inteiro.

Um edifício a 8.5 m acima do centro da janela e a 9.9 m de distância oculta 40.65° (o ângulo cuja tangente é 8.5 ÷ 9.9), deixando θ = 49.35°.

## Componente vertical do céu de cada janela

{{ui:Calcular}} também mede, para cada janela, o que ela vê de todo o céu: o mesmo corte vertical, virado para cada direção à frente da janela (de 2 em 2°, de um lado ao outro), por isso um edifício de um lado, uma aleta ou um rasgo profundo tomam a sua parte. A partir daí o BimCraft calcula a **componente vertical do céu (VSC)**: quanta da luz do céu encoberto chega ao vidro, como parte do que receberia um telhado plano e aberto. Uma janela sem nada à frente recebe **39.6 %**, o máximo para uma janela vertical; um edifício alto que se eleva 25° acima da janela deixa cerca de **27 %**, o valor que a orientação britânica (BRE 209) usa como regra prática. Cada janela no detalhe de um compartimento mostra a sua VSC e o seu **ângulo de obstrução** (a altura a que as coisas se erguem diretamente à sua frente).

O céu é o céu encoberto padrão CIE, que é três vezes mais brilhante diretamente acima do que no horizonte, e o corte é exato: nada é amostrado.

## O sol através das janelas numa data

Abra {{ui:Sol através das janelas numa data}} e escolha uma data. O BimCraft segue o sol ao longo desse dia em quartos de hora e soma, para cada janela, o calor que o sol traz através do vidro:

- o **sol direto**, quando está à frente da janela e nada no modelo o oculta (o mesmo corte exato, virado para o sol: uma varanda que sombreia o sol alto de verão ao meio-dia deixa entrar o sol baixo de inverno);
- a **luz do céu** no vidro, menos o que a janela não consegue ver;
- a luz **refletida pelo chão** (a sua refletância: 0.2 para começar);
- tudo isto através do **valor g** do vidro (a parcela da energia solar que deixa passar: 0.6 para começar; use o valor do fabricante) e da sua parcela envidraçada.

Cada compartimento mostra o total do dia em kWh e o seu pico em watts com a hora; o detalhe de um compartimento desenha o dia como gráfico. O céu é limpo, segundo o modelo de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), com os valores de verão ou de inverno para o local e a estação e a altitude do terreno; a posição do sol é a da NOAA. A latitude e a longitude do local vêm do local do IFC, e o norte vem do norte verdadeiro do modelo; se o modelo não tiver local, escreva uma latitude e uma longitude. As horas são a hora legal (sem hora de verão) no fuso horário que escrever, senão o que a longitude sugere.

O que deixa de fora: nuvens (é um dia limpo), o vidro deixar passar menos luz a ângulos baixos, caixilhos a fazer sombra no vidro, estores e o que as paredes e a cobertura absorvem. O cálculo do arrefecimento no mesmo separador usa o pico.

## O fator de luz natural numa grelha

Abra {{ui:Fator de luz natural numa grelha}} e clique em {{ui:Calcular a grelha}}: o BimCraft estende uma grelha sobre o pavimento de cada compartimento, à altura do plano de trabalho (0.85 m para começar) e a meio metro das paredes, e calcula o fator de luz natural em cada ponto pelo **método do fluxo dividido da BRE**:

- a **componente do céu**: o céu encoberto visto do ponto através da abertura de cada janela, menos os caixilhos;
- a **componente refletida externamente**: o que o ponto vê de edifícios exteriores através da janela, brilhando a um décimo do céu atrás deles (altere a luminosidade da obstrução se forem muito mais claros ou mais escuros);
- a **componente refletida internamente**: a luz que ricocheteia dentro do compartimento, a partir das superfícies e refletâncias do compartimento, da área das janelas e de quanto dela está para fora (a fórmula da BRE, com a transmitância do vidro no lugar do vidro transparente que assumia).

Cada compartimento mostra a sua média, o seu ponto mais baixo e quanto dele recebe 2 % ou mais; o detalhe de um compartimento desenha a sua planta com cada ponto colorido pelo seu fator de luz natural e as janelas a vermelho. Para ser rápido em qualquer computador, um compartimento tem no máximo **400 pontos**: num compartimento grande o espaçamento aumenta para caber (escreva um espaçamento para escolher o seu).

## O que deixa de fora

- As janelas de cobertura (vidro deitado ou inclinado) são listadas mas não contadas: as fórmulas aqui são para janelas em paredes.
- As janelas sem compartimento atrás delas (um hall sem espaço, por exemplo) são listadas à parte.
- Os reveses das janelas (a abertura é tirada da face exterior), o encandeamento, as horas de sol e a luz natural em função do clima. Para a BS EN 17037, a LEED ou a BREEAM use um programa de simulação de luz natural.
- As faixas vêm de orientações britânicas mais antigas (BS 8206-2), mostradas como guia, nunca como aprovação ou reprovação.
