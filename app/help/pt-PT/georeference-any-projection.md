---
title: Georreferenciar com qualquer projeção
summary: Indique ao BimCraft em que sistema de mapa estão as coordenadas de um modelo, a partir da lista completa de EPSG, de qualquer zona UTM ou de uma projeção que defina, e use-o para a Localização, as camadas de mapa e as nuvens de pontos.
keywords: projeção, sistema de coordenadas, crs, epsg, utm, zona utm, projeção personalizada, proj4, cadeia proj, prj, wkt, georreferenciação, georreferenciar, conversão de mapa, ifcprojectedcrs, as minhas projeções, latitude, longitude, este, norte, lambert, gauss-kruger, state plane, grelha nacional
from: 6894c1f2
---

Alguns planos são desenhados num sistema de mapa que não consta de uma lista curta: uma zona UTM, uma grelha nacional, ou uma projeção que alguém escreveu como definição de texto. {{ui:Medir}} › {{ui:Sistema de coordenadas…}} permite-lhe indicar qual o sistema que o modelo usa.

## Escolher o sistema de um modelo

1. Abra o modelo, escolha {{ui:Medir}} e depois {{ui:Sistema de coordenadas…}}.
2. Escreva na caixa de pesquisa. Qualquer um destes formatos funciona:
   - um número EPSG: `32633` ou `EPSG:2277`;
   - uma zona UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - palavras do nome: `lambert 93`, `mga zone 56`, `texas central`;
   - uma definição de projeção: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opcionalmente com um nome à frente (`My grid = +proj=…`);
   - o texto de um ficheiro `.prj`, ou use {{ui:Carregar um ficheiro .prj…}}.
3. Escolha um resultado e depois clique em {{ui:Usar este sistema}}.

A escolha fica guardada no modelo (um conjunto de propriedades chamado `CadCraft_CRS` no projeto), por isso reabre com o modelo. Guarde o modelo para a manter. {{ui:Retirar do modelo}} volta ao que o ficheiro indica.

Se a sua definição der as mesmas coordenadas que um sistema EPSG listado, o BimCraft di-lo e usa esse código; quando vários sistemas listados partilham a mesma matemática, indica também os outros.

## As minhas projeções

Uma definição que cole ou um `.prj` que carregue pode ser guardado com {{ui:Guardar em As minhas projeções}}. A lista fica neste dispositivo (neste navegador) e é oferecida na próxima vez que abrir o seletor.

## O que a usa

- {{ui:Medir}} › {{ui:Localização}} converte um ponto escolhido em latitude e longitude através do sistema do modelo. Antes parava com uma nota quando o ficheiro indicava o seu sistema de mapa sem um código EPSG; com uma escolha guardada, dá a resposta.
- As camadas de mapa sob o modelo usam o mesmo sistema. Uma nuvem de pontos ou um ficheiro de terreno noutro sistema recebe a oferta do sistema do modelo (veja abaixo).
- {{ui:Definições}} › {{ui:BimCraft}} › {{ui:Localização}} › {{ui:Escolher outro sistema…}} define o que {{ui:Localização}} também indica: latitude e longitude em qualquer sistema geográfico listado, ou o este e o norte em qualquer sistema projetado, além do próprio do modelo.

## Um modelo que ainda não está no mapa

Se o ficheiro não tem conversão de mapa, escolher um sistema abre {{ui:Posicionar este modelo no mapa}}. Pode também abri-lo a partir de {{ui:Medir}} › {{ui:Origem do mapa…}}.

1. Indique a origem do modelo como este e norte no sistema, ou escreva uma latitude e longitude e escolha {{ui:Converter para este e norte}}.
2. Indique a rotação para o norte da grelha (em graus, no sentido contrário ao dos ponteiros do relógio; 0 significa que o eixo Y do modelo aponta para o norte da grelha) e a altura da origem.
3. A escala começa na diferença de unidade entre o modelo e o mapa (0.001 para um modelo em milímetros numa grelha em metros). Altere-a apenas para um fator combinado do terreno para a grelha.
4. Escolha {{ui:Posicionar no mapa}}. Um passo de anulação escreve um IfcProjectedCRS e um IfcMapConversion (IFC4). O próprio modelo não se move.

Um ficheiro IFC2X3 não tem nenhuma destas entidades. O BimCraft escreve os mesmos números da forma que essa norma permite: os conjuntos de propriedades buildingSMART `ePSet_MapConversion` e `ePSet_ProjectedCRS` no projeto, a latitude e a longitude do local e o norte verdadeiro. A caixa de diálogo di-lo. Guarde o modelo para o manter.

## Um modelo que já está no mapa

Quando o ficheiro já se posiciona no mapa e escolhe outro sistema, o BimCraft pergunta:

- {{ui:Alterar apenas o que a Localização indica}} mantém a georreferenciação própria do ficheiro e usa a sua escolha para {{ui:Localização}}, as camadas de mapa e as nuvens de pontos (os números do modelo são então lidos como estando no novo sistema).
- {{ui:Mover o modelo para este sistema}} reescreve a georreferenciação: a origem passa pela projeção (este, norte, altura, rotação e escala) e o IfcProjectedCRS (nome, datum, projeção, zona, unidade) é reescrito, para que o IFC guardado indique o novo sistema. O lugar na Terra mantém-se: a origem conserva a sua latitude e longitude. Os elementos dentro do modelo nunca mudam; só a georreferenciação muda.

A caixa de diálogo mostra a origem antiga e a nova antes de escolher. Ir e voltar devolve a origem a menos de um milímetro.

## Nuvens de pontos e terreno noutro sistema

Uma nuvem ou um ficheiro de levantamento traz o seu próprio sistema (LAS, LAZ, E57, GeoTIFF) ou nenhum. Quando é diferente do do modelo, o BimCraft oferece {{ui:Reprojetar para o sistema do modelo}}. Os pontos são movidos em lotes (num processo de trabalho em segundo plano quando são muitos, para que a página continue utilizável), o ficheiro no seu computador não é tocado, e a linha de estado indica o que foi feito. Abra o ficheiro de novo para voltar ao seu próprio sistema. Para uma nuvem já aberta, {{ui:Reprojetar para o modelo…}} na barra da nuvem faz o mesmo.

Se o ficheiro não indicar nenhum sistema, o BimCraft pergunta {{ui:Em que sistema está este ficheiro?}}: escolha-o com {{ui:Escolher o sistema…}} e a resposta fica memorizada para esse ficheiro neste dispositivo. {{ui:Manter o sistema do próprio ficheiro}} deixa os pontos como estão.

## Quando algo é aproximado

Os problemas são listados na caixa de diálogo e no painel Problemas, nunca em silêncio:

- Um local fora da área para a qual o sistema foi feito: os números funcionam, mas a distorção aumenta.
- As mudanças de datum que exigem um ficheiro de grelha (NADCON, NTv2 e semelhantes) não estão disponíveis. Os sistemas noutro datum são movidos com a mudança sem grelha que o registo EPSG indica, e o resultado é aproximado à precisão indicada, que a mensagem dá em metros.
- Um ponto que não pode ser projetado é deixado de fora e contado; um ficheiro acima do limite de tamanho é recusado, com o limite indicado.

:::tip
As coordenadas de mapa precisam de uma conversão de mapa. Um ficheiro sem uma é colocado no mapa com {{ui:Origem do mapa…}}.
:::

:::note
Passar entre datums sem um ficheiro de grelha é bom até poucos metros; o resultado de Localização indica quanto, quando o catálogo o conhece.
:::
