---
title: Medir distâncias, áreas de faces e localizações em 3D
summary: Meça entre dois pontos de um modelo IFC com snap a cantos e arestas, leia a diferença ao longo de X, Y e Z, e meça a área de uma face plana.
keywords: medir, medição, distância, comprimento, cota, área, área da face, snap, canto, aresta, fita, régua, folga, localização, latitude, longitude, lat long, coordenadas, georreferenciação, conversão de mapa, EPSG, levantamento, este, norte, WGS 84, datum
from: 5f430bba
---

## Objetivo

Verificar uma folga, o comprimento de uma parede ou a dimensão de uma face diretamente no modelo, sem abrir o programa de criação.

## Passos

1. Abra um modelo IFC.
2. Clique em {{ui:Medir}} na barra de ferramentas, ou prima {{key:M}}. Abre-se uma barra na parte inferior da vista.
3. **Uma distância:** com {{ui:Distância}} escolhido, clique no primeiro ponto e depois no segundo. Perto de um canto, o cursor faz snap a ele; perto de uma aresta, à aresta; a pequena etiqueta junto ao cursor indica qual. Cada par de cliques faz uma medição.
4. **A área de uma face:** escolha {{ui:Área da face}} e clique numa face. A face plana inteira fica iluminada e a sua área é mostrada.
5. **Linhas retas:** mantenha {{key:Shift}} premida ao escolher o segundo ponto, ou prima {{ui:Reta}} na barra para a manter ativa. A linha segue então o eixo mais próximo do cursor (numa vista de topo, segundo X ou Y da planta; nas outras vistas, segundo X, Y ou Z), e a etiqueta do cursor diz «reta segundo um eixo». {{key:M}} continua a iniciar e a parar a medição.
6. Clique em {{ui:Limpar}} para remover as medições, ou em {{ui:Concluir}} (ou {{key:Esc}}) para parar de medir.

## Resultado esperado

- Uma linha entre os dois pontos com o seu comprimento, e na barra o comprimento com quanto avança ao longo de X, Y e Z (nos eixos do modelo, Z para cima), tudo na {{ui:Unidades}} escolhida na barra de ferramentas.
- A área de uma face em metros quadrados, na face e na barra.
- As etiquetas mantêm-se nas suas medições ao orbitar, deslocar a vista e ampliar.
- Enquanto mede, os cliques não selecionam elementos. Um plano ou caixa de corte continua a cortar o modelo, e pode medir o que ele mostra, incluindo as faces cortadas.

## Onde está um ponto na Terra

Clique em {{ui:Localização}} na barra de medição e depois num ponto do modelo (faz snap a cantos e arestas, como nas distâncias). A barra mostra:

- a **latitude e longitude**, em graus decimais e em graus, minutos e segundos, em WGS 84 para começar;
- as **coordenadas de mapa** (este e norte, escritos na {{ui:Unidades}} escolhida na barra de ferramentas) no próprio sistema de mapa do modelo, por exemplo `EPSG:28356`;
- a **altura** e o datum vertical que o ficheiro indica, e o **datum próprio** do ficheiro (por exemplo GDA94).

{{ui:Copiar}} coloca tudo na área de transferência, numa só linha. Altere o sistema em que a latitude e a longitude estão em {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Localização}}: WGS 84 (como o GPS e os mapas web), o datum próprio do ficheiro, ou outro comum, como ETRS89 ou NAD83.

Isto requer um modelo georreferenciado: um exportado com coordenadas de mapa (uma conversão de mapa para um sistema projetado, com um código EPSG). Um modelo que tenha apenas a latitude e a longitude do local recebe uma posição aproximada, calculada a partir do ponto do terreno e do norte verdadeiro, e a barra indica-o. Com vários modelos abertos, cada ponto usa a georreferenciação do seu próprio modelo.

:::note
Passar entre datuns (por exemplo, de GDA94 para WGS 84) faz-se sem ficheiros de grelha, por isso é válido até alguns metros; a linha de estado indica a precisão. As próprias coordenadas de mapa são exatas.
:::

## Erros comuns

- **«…não tem georreferenciação».** O ficheiro não tem conversão de mapa nem latitude e longitude do local. Exporte-o de novo com o sistema de coordenadas definido (coordenadas partilhadas ou ponto de levantamento na ferramenta de criação).
- **Coordenadas de mapa, mas sem latitude e longitude.** O ficheiro indica o seu sistema de mapa sem código EPSG, ou com um que não está na lista; a linha de estado diz qual.

- **O ponto cai na face, não no canto.** O snap olha para o elemento sob o cursor. Aproxime-se do canto, ou amplie.
- **A área é menor do que o esperado.** As aberturas ficam de fora, e uma face que se dobra são várias faces: clique em cada uma.
- **{{key:Esc}} parou a medição.** A primeira {{key:Esc}} larga uma distância a meio; a segunda para.

## Seguinte

- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
- [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate)
