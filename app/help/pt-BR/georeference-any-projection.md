---
title: Georreferenciar com qualquer projeção
summary: Informe ao BimCraft em qual sistema de mapa as coordenadas de um modelo estão, a partir da lista completa de EPSG, de qualquer zona UTM ou de uma projeção que você defina, e use-o para a Localização, as camadas de mapa e as nuvens de pontos.
keywords: projeção, sistema de coordenadas, crs, epsg, utm, zona utm, projeção personalizada, proj4, string proj, prj, wkt, georreferenciamento, georreferenciar, conversão de mapa, ifcprojectedcrs, minhas projeções, latitude, longitude, leste, norte, lambert, gauss-kruger, State Plane, grade nacional
from: 6894c1f2
---

Algumas plantas são desenhadas em um sistema de mapa que não está em uma lista curta: uma zona UTM, uma grade nacional ou uma projeção que alguém registrou como uma definição de texto. {{ui:Measure}} › {{ui:Coordinate system…}} permite informar qual deles o modelo usa.

## Escolher o sistema de um modelo

1. Abra o modelo, escolha {{ui:Measure}} e depois {{ui:Coordinate system…}}.
2. Digite na caixa de pesquisa. Qualquer um destes funciona:
   - um número EPSG: `32633` ou `EPSG:2277`;
   - uma zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - palavras do nome: `lambert 93`, `mga zone 56`, `texas central`;
   - uma definição de projeção: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalmente com um nome na frente (`My grid = +proj=…`);
   - o texto de um arquivo `.prj`, ou use {{ui:Load a .prj file…}}.
3. Escolha um resultado e depois {{ui:Use this system}}.

A escolha é salva no modelo (um conjunto de propriedades chamado `CadCraft_CRS` no projeto), então ela reabre com o modelo. Salve o modelo para mantê-la. {{ui:Take it off the model}} volta ao que o arquivo informa.

Se sua definição dá as mesmas coordenadas de um sistema EPSG listado, o BimCraft informa isso e usa esse código; quando vários sistemas listados têm a mesma matemática, ele também cita os outros.

## Minhas projeções

Uma definição que você cola ou um `.prj` que você carrega pode ser mantido com {{ui:Keep in My projections}}. A lista fica neste dispositivo (neste navegador) e é oferecida na próxima vez que você abrir o seletor.

## O que usa o sistema

- {{ui:Measure}} › {{ui:Location}} transforma um ponto selecionado em latitude e longitude pelo sistema do modelo. Antes, ele parava com uma nota quando o arquivo nomeava seu sistema de mapa sem um código EPSG; com um sistema salvo, ele dá a resposta.
- As camadas de mapa sob o modelo usam o mesmo sistema. Uma nuvem de pontos ou um arquivo de terreno em outro sistema recebe a oferta do sistema do modelo (veja abaixo).
- {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}} › {{ui:Choose another system…}} define o que {{ui:Location}} também informa: latitude e longitude em qualquer sistema geográfico listado, ou leste e norte em qualquer sistema projetado, além do próprio sistema do modelo.

## Um modelo que ainda não está no mapa

Se o arquivo não tem conversão de mapa, escolher um sistema abre {{ui:Place this model on the map}}. Você também pode abri-la em {{ui:Measure}} › {{ui:Map origin…}}.

1. Informe a origem do modelo em leste e norte no sistema, ou digite uma latitude e longitude e escolha {{ui:Convert to eastings and northings}}.
2. Informe a rotação até o norte da grade (em graus, anti-horário; 0 significa que o eixo Y do modelo aponta para o norte da grade) e a altura da origem.
3. A escala começa com a diferença de unidade entre o modelo e o mapa (0.001 para um modelo em milímetros sobre uma grade em metros). Altere-a somente para um fator combinado do solo à grade.
4. Escolha {{ui:Place on the map}}. Uma única etapa de desfazer grava um IfcProjectedCRS e um IfcMapConversion (IFC4). O modelo em si não se move.

Um arquivo IFC2X3 não tem nenhuma das duas entidades. O BimCraft grava os mesmos números do modo que esse padrão permite: os conjuntos de propriedades buildingSMART `ePSet_MapConversion` e `ePSet_ProjectedCRS` no projeto, a latitude e a longitude do local, e o norte verdadeiro. A caixa de diálogo informa isso. Salve o modelo para mantê-lo.

## Um modelo que já está no mapa

Quando o arquivo já se posiciona no mapa e você escolhe outro sistema, o BimCraft pergunta:

- {{ui:Only change what Location reports}} mantém a georreferência própria do arquivo e usa a sua escolha para {{ui:Location}}, as camadas de mapa e as nuvens de pontos (os números do modelo são então lidos como estando no novo sistema).
- {{ui:Move the model to this system}} reescreve a georreferência: a origem passa pela projeção (leste, norte, altura, rotação e escala) e o IfcProjectedCRS (nome, datum, projeção, zona, unidade) é reescrito, de modo que o IFC salvo informa o novo sistema. A posição na Terra permanece a mesma: a origem mantém sua latitude e longitude. Os elementos dentro do modelo nunca mudam; somente a georreferência muda.

A caixa de diálogo mostra a origem antiga e a nova antes que você escolha. Ir e voltar devolve a origem a menos de um milímetro.

## Nuvens de pontos e terreno em outro sistema

Uma nuvem ou um arquivo de levantamento traz seu próprio sistema (LAS, LAZ, E57, GeoTIFF) ou nenhum. Quando ele difere do sistema do modelo, o BimCraft oferece {{ui:Reproject into the model's system}}. Os pontos são movidos em lotes (em segundo plano quando há muitos, para que a página continue utilizável), o arquivo no seu computador não é alterado, e a linha de status informa o que foi feito. Abra o arquivo novamente para voltar ao seu sistema próprio. Para uma nuvem já aberta, {{ui:Reproject to the model…}} na barra da nuvem faz o mesmo.

Se o arquivo não nomeia um sistema, o BimCraft pergunta {{ui:Which system is this file in?}}: escolha-o com {{ui:Choose the system…}} e a resposta fica lembrada para esse arquivo neste dispositivo. {{ui:Keep the file's own system}} deixa os pontos como estão.

## Quando algo é aproximado

Os problemas são listados na caixa de diálogo e no painel Problemas, nunca em silêncio:

- Um lugar fora da área para a qual o sistema foi feito: os números funcionam, mas a distorção aumenta.
- Mudanças de datum que exigem um arquivo de grade (NADCON, NTv2 e similares) não estão disponíveis. Sistemas em um datum diferente são movidos pela mudança sem grade que o registro EPSG lista, e o resultado é aproximado para a precisão declarada, que a mensagem informa em metros.
- Um ponto que não pode ser projetado é deixado de fora e contado; um arquivo acima do limite de tamanho é recusado, com o limite informado.

:::tip
Coordenadas de mapa exigem uma conversão de mapa. Um arquivo sem uma é posicionado no mapa com {{ui:Map origin…}}.
:::

:::note
Mover entre datuns sem um arquivo de grade tem precisão de alguns metros; o resultado de Localização informa a distância quando o catálogo a conhece.
:::
