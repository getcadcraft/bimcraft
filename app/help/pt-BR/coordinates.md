---
title: Coordenadas no BimCraft
summary: Onde você está trabalhando: a posição do ponteiro na planta e na vista 3D, o nível em que você está, a origem do projeto e o ponto de levantamento do terreno.
keywords: coordenadas, onde estou, posição, ponteiro, leitura, x y z, nível, pavimento, origem do projeto, origem, ponto base, ponto de levantamento, terreno, coordenadas de mapa, eastings, northings, georreferência, unidades, localização
from: 84df5245
---

## O que você vai fazer

Saber onde você está em um modelo de relance: em qual nível você está desenhando, a que distância o ponteiro está da origem do projeto e onde fica o ponto de levantamento do terreno.

## Onde os números aparecem

- **Sobre a vista 3D** (canto inferior direito, ao lado do cubo de vista): mova o ponteiro sobre o modelo. A caixa mostra o nível em que está o ponto e a altura dele acima do piso desse nível, depois o seu **X, Y e Z**. Sobre um espaço vazio, mostra o ponto no piso do nível mais baixo.
- **Na planta** (canto inferior direito, enquanto {{ui:Draw}} estiver ativado): o nível que a planta mostra e a altura do piso dele, além do **X e Y** do ponteiro enquanto ele estiver sobre a planta.
- Quando o arquivo tem uma conversão de mapa (foi exportado com coordenadas de mapa), as duas caixas acrescentam as **eastings e northings** na grade do mapa, na {{ui:Units}} que você escolheu (sempre com a unidade escrita ao lado; pés e polegadas aparecem como pés decimais). Um desenho (DWG ou DXF) mantém as próprias unidades: a leitura do ponteiro informa quais são, e ele nunca é convertido.

Todos os X, Y e Z são medidos a partir da **origem do projeto**, na {{ui:Units}} escolhida na barra de ferramentas (pés e polegadas, polegadas, pés decimais, milímetros, centímetros ou metros). O Y positivo aponta para o norte do modelo, que nem sempre é o norte verdadeiro. As eastings e northings do mapa seguem a mesma escolha (pés e polegadas aparecem como pés decimais); quando a unidade do próprio sistema de mapa é diferente da que você escolheu, ela aparece entre colchetes depois dos números, por exemplo *(pés de levantamento dos EUA)*, para que um topógrafo veja em que unidade o próprio sistema está escrito.

## Os dois marcadores

- **Origem do projeto** (um círculo vermelho com uma cruz): o ponto 0, 0, 0 a partir do qual todas as coordenadas do modelo são medidas.
- **Ponto de levantamento** (um círculo azul com um triângulo): o ponto de referência do terreno, aquele para o qual são informadas a latitude, a longitude e a elevação, ou as coordenadas de mapa. Na vista 3D, aponte para ele para ler onde ele fica.

Quando o terreno está sobre a origem do projeto, como em um edifício novo desenhado aqui, um marcador mostra os dois. Clique no botão de mira em qualquer uma das caixas para ocultar ou exibir os marcadores; o BimCraft lembra sua escolha neste navegador.

## O que você deve ver

- Os números mudam conforme o ponteiro se move, e a caixa da planta indica o nível que você escolheu na lista de níveis.
- Os marcadores permanecem no lugar ao orbitar, deslocar (pan) e aplicar zoom.

:::tip
Para ler a latitude e a longitude de um ponto, use {{ui:Measure}} › {{ui:Location}}: veja [Medir distâncias, áreas de faces e localizações em 3D](topic:measure).
:::

:::touch
Em uma tela de toque, a caixa 3D não mostra nada até você usar um mouse ou uma caneta: com o dedo, você move a vista.
:::
