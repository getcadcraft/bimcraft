---
title: Estimar a luz natural en cada cuarto
summary: O factor medio de luz diurna de cada cuarto a partir das súas xanelas, das súas superficies interiores e do ceo que ve cada xanela, co ángulo do ceo medido no modelo. Unha estimación de deseño inicial, non unha simulación nin unha comprobación normativa.
keywords: luz diurna, factor de luz diurna, factor medio de luz diurna, adf, componente vertical de ceo, vsc, ganancia solar, sol, valor g, cuadrícula, división do fluxo, componente de ceo, componente reflectida internamente, luz natural, xanela, acristalamento, ángulo do ceo, obstrución, sombra, balcón, voadizo, reflectancia, transmitancia, deseño inicial, análise, cuartos, espazos
from: 5f300a78
---

A lapela {{ui:Luz natural}} do panel dereito calcula o **factor medio de luz diurna** de cada cuarto: canta parte da luz dun ceo nublado exterior chega ao cuarto, de media, en porcentaxe. Lee os cuartos (espazos) e as xanelas do modelo IFC aberto. Non se cambia nada no modelo e non se envía nada.

:::warning
Todo o que hai nesta lapela é **unha axuda de deseño, non un cálculo de cumprimento**: estimacións de deseño inicial por métodos publicados, **non unha simulación** e **non unha comprobación contra un código de edificación nin unha norma**. BS EN 17037, LEED, BREEAM e os códigos enerxéticos piden unha simulación de luz diurna co clima do lugar; para eses casos use un programa de simulación de luz diurna.
:::

## Calcular

1. Abra un modelo IFC que teña cuartos (espazos) e xanelas. Os modelos debuxados aquí teñen un cuarto dentro de cada conxunto pechado de muros.
2. Abra a lapela {{ui:Luz natural}} e faga clic en {{ui:Calcular}}.
3. Cada cuarto mostra o seu factor de luz diurna e unha banda: por debaixo do 2 %, 2–5 %, 5 % ou máis. Faga clic nun cuarto para ver as súas superficies e a superficie e o ángulo do ceo de cada xanela; o cuarto e as súas xanelas márcanse no modelo.

Cambie unha entrada e os números seguen de inmediato; despois de cambiar o modelo, {{ui:Calcular de novo}}. {{ui:CSV}} garda cada cuarto cos seus números e as entradas usadas.

## A fórmula

Factor medio de luz diurna (%) = T × Ag × θ × M ÷ (A × (1 − R²)), sumado sobre as xanelas do cuarto (fórmula de Littlefair, usada por BRE 209, BS 8206-2 e CIBSE LG10):

- **T**, a transmitancia de luz do vidro (0,7 para comezar: use a cifra do fabricante).
- **Ag**, a superficie acristalada: a superficie de cada xanela (a súa anchura total × altura, se non, o seu tamaño no modelo) × a **proporción acristalada** (0,75 para comezar: o resto é marco).
- **θ**, o ángulo de ceo que ve a xanela, en graos (máis abaixo).
- **M**, o factor de mantemento pola sucidade do vidro (1 para comezar).
- **A**, cada superficie interior do cuarto: chan, muros, teito e xanelas, tomada da forma propia do cuarto.
- **R**, a súa reflectancia media, ponderada pola superficie: chan 0,2, muros 0,5, teito 0,7 para comezar; o vidro conta como 0,1.

## Como se mide o ángulo do ceo

Para cada xanela, BimCraft corta o modelo cun plano vertical perpendicular á xanela, desde a cara exterior do vidro, e mira desde o horizonte directamente cara arriba: todo o que o corte atopa diante da xanela (un edificio enfronte, un balcón ou un voadizo enriba, os beirís) oculta parte dese 90°. θ é o que queda. Non se contan a propia xanela nin o muro onde está. Faino en cinco puntos a través da anchura da xanela e toma a media, así que un poste fino diante do centro leva a súa parte, non todo o ceo.

Un edificio situado 8,5 m por enriba do centro da xanela e a 9,9 m de distancia oculta 40,65° (o ángulo cuxa tanxente é 8,5 ÷ 9,9), e queda θ = 49,35°.

## Componente vertical de ceo de cada xanela

{{ui:Calcular}} mide tamén, para cada xanela, o que ve de todo o ceo: o mesmo corte vertical, xirado a cada dirección sobre a fronte da xanela (cada 2°, dun lado ao outro), de xeito que un edificio a un lado, unha aleta ou un fondo profundo toman a súa parte. A partir de aí BimCraft calcula a **componente vertical de ceo (VSC)**: canta luz do ceo nublado chega ao vidro, como proporción do que recibiría unha cuberta plana e aberta. Unha xanela sen nada diante recibe **39,6 %**, o máximo para unha xanela vertical; un edificio alto que se eleva 25° por enriba da xanela deixa uns **27 %**, a cifra que usa a guía británica (BRE 209) como regra práctica. Cada xanela no detalle dun cuarto mostra a súa VSC e o seu **ángulo de obstrución** (canto se elevan as cousas que hai recto diante dela).

O ceo é o ceo nublado estándar CIE, que é tres veces máis brillante directamente enriba que no horizonte, e o corte é exacto: non se toma ningunha mostra.

## O sol a través das xanelas nunha data

Abra {{ui:Sol a través das xanelas nunha data}} e escolla unha data. BimCraft segue o sol ao longo dese día en cuartos de hora e suma, para cada xanela, a calor que o sol leva a través do vidro:

- o **sol directo**, cando está diante da xanela e nada no modelo o oculta (o mesmo corte exacto, xirado cara ao sol: un balcón que dá sombra ao sol de verán do mediodía deixa entrar o sol baixo de inverno);
- a **luz do ceo** sobre o vidro, menos o que a xanela non pode ver;
- a luz **reflectida do chan** (a súa reflectancia: 0,2 para comezar);
- todo a través do **valor g** do vidro (a proporción da enerxía solar que deixa pasar: 0,6 para comezar; use a cifra do fabricante) e da súa proporción acristalada.

Cada cuarto mostra o total do día en kWh e o seu pico en watts coa hora; o detalle dun cuarto debuxa o día como un gráfico. O ceo é un ceo despexado segundo o modelo de Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), coas cifras de verán ou de inverno do lugar e da estación e a altura do emprazamento; a posición do sol é a da NOAA. A latitude e a lonxitude do emprazamento veñen do emprazamento do IFC, e o norte, do norte verdadeiro do modelo; se o modelo non ten emprazamento, escriba unha latitude e unha lonxitude. As horas son hora estándar (sen horario de verán) na zona horaria que escriba, ou na que suxire a lonxitude.

Deixa fóra: as nubes (é un día despexado), que o vidro deixe pasar menos luz a ángulos baixos, que os marcos fagan sombra ao vidro, as persianas, e o que toman os muros e a cuberta. A estimación de refrixeración da mesma lapela usa o pico.

## O factor de luz diurna nunha cuadrícula

Abra {{ui:Factor de luz diurna nunha cuadrícula}} e {{ui:Calcular a cuadrícula}}: BimCraft tende unha cuadrícula sobre o chan de cada cuarto á altura do plano de traballo (0,85 m para comezar), a medio metro dos muros, e calcula o factor de luz diurna en cada punto polo **método de división do fluxo BRE**:

- a **componente de ceo**: o ceo nublado que se ve desde o punto a través da abertura de cada xanela, menos os marcos;
- a **componente reflectida externamente**: o que o punto ve de edificios exteriores a través da xanela, que brillan a un décimo do ceo que hai detrás (cambie a luminosidade da obstrución se son moito máis claros ou máis escuros);
- a **componente reflectida internamente**: a luz que rebota dentro do cuarto, dende as superficies e reflectancias do cuarto, a superficie das xanelas e canta hai fóra delas (a fórmula BRE, coa transmitancia do vidro no lugar do vidro transparente que ela supón).

Cada cuarto mostra a súa media, o seu punto máis baixo e canto dese cuarto recibe o 2 % ou máis; o detalle dun cuarto debuxa a súa planta con cada punto coloreado segundo o seu factor de luz diurna e as xanelas en vermello. Para que vaia rápido en calquera computador, un cuarto ten como máximo **400 puntos**: nun cuarto grande o espazamento aumenta para caber (escriba un espazamento para escoller o seu).

## O que deixa fóra

- As xanelas de cuberta (vidro horizontal ou inclinado) aparecen na lista pero non se contan: as fórmulas aquí son para xanelas en muros.
- As xanelas sen cuarto detrás (un vestíbulo sen espazo, por exemplo) aparecen aparte.
- Os retallos das xanelas (a abertura tómase na cara exterior), o deslumbramento, as horas de sol e a luz diurna baseada no clima. Para BS EN 17037, LEED ou BREEAM use un programa de simulación de luz diurna.
- As bandas proceden dunha guía británica máis antiga (BS 8206-2), mostradas como orientación, nunca como aprobado ou suspenso.
