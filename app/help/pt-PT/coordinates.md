---
title: Coordenadas no BimCraft
summary: Onde está a trabalhar: a posição do ponteiro na planta e na vista 3D, o nível em que se encontra, a origem do projeto e o ponto de levantamento do local da obra.
keywords: coordenadas, onde estou, posição, ponteiro, leitura, x y z, nível, piso, origem do projeto, origem, ponto base, ponto de levantamento, local da obra, coordenadas do mapa, este, norte, georreferenciação, unidades, localização
from: 84df5245
---

## Objetivo

Perceber num relance em que nível está a desenhar, a que distância está o ponteiro da origem do projeto e onde fica o ponto de levantamento do local da obra.

## Onde aparecem os valores

- **Sobre a vista 3D** (canto inferior direito, ao lado do cubo de vistas): mova o ponteiro sobre o modelo. A caixa mostra o nível em que está o ponto e a altura acima do piso desse nível, depois os seus **X, Y e Z**. Sobre espaço vazio, indica o ponto no piso do nível mais baixo.
- **Na planta** (canto inferior direito, enquanto {{ui:Desenhar}} estiver ativo): o nível que a planta mostra e a altura do seu piso, e os **X e Y** do ponteiro enquanto estiver sobre a planta.

Quando o ficheiro tiver uma conversão de mapa (foi exportado com coordenadas de mapa), as duas caixas acrescentam os **este e norte** na grelha do mapa, nas {{ui:Unidades}} escolhidas (indicando sempre a unidade ao lado; pés e polegadas aparecem como pés decimais). Um desenho (DWG ou DXF) mantém as suas próprias unidades: a leitura do ponteiro indica-as e nunca são convertidas.

Cada X, Y e Z é medido a partir da **origem do projeto**, nas {{ui:Unidades}} escolhidas na barra de ferramentas (pés e polegadas, polegadas, pés decimais, milímetros, centímetros ou metros). O Y positivo aponta para o norte do modelo, que nem sempre é o norte verdadeiro. Os este e norte do mapa seguem a mesma escolha (os pés e polegadas aparecem como pés decimais); quando a unidade do próprio sistema de mapa é diferente da que escolheu, é indicada entre parênteses depois dos números, por exemplo *(US survey feet)*, para que um topógrafo veja em que unidade o próprio sistema está escrito.

## Os dois marcadores

- **Origem do projeto** (um círculo vermelho com uma cruz): o ponto 0, 0, 0 a partir do qual todas as coordenadas do modelo são medidas.
- **Ponto de levantamento** (um círculo azul com um triângulo): o ponto de referência do local, aquele para o qual são dadas a latitude, a longitude e a altitude, ou as coordenadas do mapa. Na vista 3D, coloque o ponteiro sobre ele para ver onde está.

Quando o local fica sobre a origem do projeto, como num edifício novo desenhado aqui, um marcador mostra os dois. Clique no botão com a cruz de mira em qualquer das caixas para ocultar ou mostrar os marcadores; o BimCraft lembra a sua escolha neste navegador.

## O que deve ver

- Os valores mudam à medida que o ponteiro se move, e a caixa da planta indica o nível que escolheu na lista de níveis.
- Os marcadores mantêm-se no lugar enquanto orbita, desloca a vista e faz zoom.

:::tip
Para ler a latitude e a longitude de um ponto, utilize {{ui:Medir}} › {{ui:Localização}}: veja [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).
:::

:::touch
Num ecrã de toque, a caixa 3D não mostra nada até usar o rato ou a caneta: com um dedo, a vista move-se em vez disso.
:::
