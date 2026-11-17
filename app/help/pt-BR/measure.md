---
title: Medir distâncias, áreas de faces e localizações em 3D
summary: Meça entre dois pontos de um modelo IFC com snap em cantos e arestas, leia a diferença ao longo de X, Y e Z e meça a área de uma face plana.
keywords: medir, medição, distância, comprimento, cota, área, área da face, snap, canto, aresta, fita, régua, folga, localização, latitude, longitude, lat long, coordenadas, georreferência, conversão de mapa, EPSG, levantamento, leste, norte, WGS 84, datum
from: 5f430bba
---

## O que você vai fazer

Confira uma folga, o comprimento de uma parede ou o tamanho de uma face diretamente no modelo, sem abrir o programa de criação.

## Etapas

1. Abra um modelo IFC.
2. Clique em {{ui:Medir}} na barra de ferramentas, ou pressione {{key:M}}. Uma barra se abre na parte inferior da vista.
3. **Uma distância:** com {{ui:Distância}} escolhida, clique no primeiro ponto e depois no segundo. Perto de um canto, o cursor faz snap nele; perto de uma aresta, faz snap na aresta. O pequeno rótulo junto ao cursor indica qual. Cada par de cliques gera uma medição.
4. **A área de uma face:** escolha {{ui:Área da face}} e clique em uma face. A face plana inteira fica destacada e a sua área é exibida.
5. **Linhas retas:** mantenha {{key:Shift}} pressionada ao escolher o segundo ponto, ou pressione {{ui:Reta}} na barra para mantê-la ativa. A linha então segue o eixo mais próximo do cursor (em uma vista superior, ao longo de X ou Y da planta; nas demais vistas, ao longo de X, Y ou Z), e o rótulo do cursor diz "reta ao longo de um eixo". {{key:M}} continua iniciando e encerrando Medir.
6. Clique em {{ui:Limpar}} para remover as medições, ou em {{ui:Concluído}} (ou {{key:Esc}}) para parar de medir.

## O que você deve ver

- Uma linha entre os dois pontos, com o comprimento sobre ela, e, na barra, o comprimento junto com a extensão ao longo de X, Y e Z (nos eixos do modelo, com Z para cima), tudo na {{ui:Unidades}} escolhida na barra de ferramentas.
- A área de uma face em metros quadrados, na face e na barra.
- Os rótulos permanecem sobre as suas medições ao orbitar, fazer pan e dar zoom.
- Enquanto você mede, os cliques não selecionam elementos. Um plano de corte ou uma caixa ainda corta o modelo, e você pode medir o que ele mostra, inclusive as faces cortadas.

## Onde fica um ponto na Terra

Clique em {{ui:Localização}} na barra de medição e depois em um ponto do modelo (ele faz snap em cantos e arestas, como nas distâncias). A barra mostra:

- a **latitude e longitude**, em graus decimais e em graus, minutos e segundos, em WGS 84 por padrão;
- as **coordenadas de mapa** (leste e norte, escritas na {{ui:Unidades}} escolhida na barra de ferramentas) no próprio sistema de mapa do modelo, por exemplo `EPSG:28356`;
- a **altura** e o datum vertical que o arquivo indica, e o **datum próprio** do arquivo (por exemplo, GDA94).

{{ui:Copiar}} coloca tudo na área de transferência, em uma linha. Altere o sistema da latitude e longitude em {{ui:Configurações}} › {{ui:BimCraft}} › {{ui:Localização}}: WGS 84 (como o GPS e os mapas da web), o datum próprio do arquivo, ou outro comum, como ETRS89 ou NAD83.

Isso exige um modelo georreferenciado: um exportado com coordenadas de mapa (uma conversão de mapa para um sistema projetado, com código EPSG). Um modelo que tenha apenas latitude e longitude do terreno recebe uma posição aproximada, calculada a partir do ponto do terreno e do seu norte verdadeiro, e a barra informa isso. Com vários modelos abertos, cada ponto usa a georreferência do seu próprio modelo.

:::note
A mudança entre datums (por exemplo, de GDA94 para WGS 84) é feita sem arquivos de grade, por isso tem precisão de alguns metros; a barra de status informa o quanto. As próprias coordenadas de mapa são exatas.
:::

## Erros comuns

- **"…não tem georreferência".** O arquivo não tem conversão de mapa nem latitude e longitude do terreno. Exporte-o novamente com o sistema de coordenadas definido (coordenadas compartilhadas / ponto de levantamento na ferramenta de criação).
- **Coordenadas de mapa, mas sem latitude e longitude.** O arquivo nomeia o seu sistema de mapa sem código EPSG, ou com um código que não está na lista; a barra de status informa qual.

- **O ponto cai na face, e não no canto.** O snap considera o elemento sob o cursor. Aproxime-se do canto ou dê zoom.
- **A área é menor do que o esperado.** As aberturas ficam de fora, e uma face que dobra são várias faces: clique em cada uma.
- **{{key:Esc}} parou a medição.** A primeira {{key:Esc}} descarta uma distância pela metade; a segunda encerra.

## Próximos passos

- [Corte um modelo IFC com um plano de corte](topic:section-plane)
- [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate)
