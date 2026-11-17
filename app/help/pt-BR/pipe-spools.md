---
title: Spools de tubulação de aço e folhas de spool
summary: Corte um trecho de tubulação de aço com solda de topo em spools de comprimento máximo e nas soldas de campo que você posicionar, numere-os e baixe uma folha de spool por spool (vista 3D, comprimentos de corte, conexões, soldas, lista de materiais) em PDF e CSV; os dutos recebem uma lista de corte de peças retas.
keywords: spool, spools, folha de spool, isométrico, fabricação, pré-fabricação, solda de campo, solda de oficina, solda de topo, comprimento de corte, lista de corte, lista de materiais, bom, tubo de aço, schedule 40, número da linha, lista de corte de dutos, peças de duto
from: 539f51de
---

## O que você vai fazer

Transforme um trecho de tubulação nas peças que uma oficina solda e um montador instala: spools não mais longos que um comprimento escolhido, divididos onde você posicionar soldas de campo, cada um com a sua própria folha.

Somente **tubulação de aço com solda de topo** é cortada em spools (diâmetros conforme ASME B36.10M, curvas no raio longo da ASME B16.9). Juntas de cobre, PVC e PEX não são soldas de topo, então os trechos delas não têm spools.

## Cortar um trecho em spools

1. Escolha um trecho de tubulação de aço. Em Propriedades, marque **Cortar em spools**.
2. **Spool mais longo**: o maior comprimento de linha central que um spool pode ter (6 m, cerca de 20 ft, como ponto de partida).
3. **Número da linha**: parte do número de cada spool. Um novo trecho com spools recebe o próximo número livre do seu sistema.

Os spools são numerados ao longo do trecho a partir do seu primeiro ponto: `CHW-12-S01`, `CHW-12-S02` … (o sistema, o número da linha, o spool). O spool cresce peça por peça; a peça que o tornaria longo demais inicia o próximo, e um trecho reto mais longo que um spool é cortado onde o spool já está cheio.

## Posicionar soldas de campo

1. Abra {{ui:Build}} e escolha {{ui:Solda de campo}}.
2. Clique em um tubo com spool onde a solda de campo vai. Dentro de um trecho reto, o tubo é cortado ali; dentro de uma conexão ou de uma válvula, a solda vai para a junta mais próxima.

Propriedades lista as soldas de campo do trecho, cada uma com {{ui:Remover}}. Cada alteração é uma etapa de {{ui:Desfazer}}.

## Folhas de spool

Em Propriedades de um trecho com spools:

- {{ui:Folhas de spool (PDF)}}: uma página por spool. À esquerda, o spool em vista isométrica de 30°: seus trechos retos numerados, as soldas de oficina como pontos, as soldas de campo marcadas FW e o norte da planta. À direita, o número, o diâmetro, a schedule e o comprimento do spool, depois seus **comprimentos de corte**, **conexões**, **soldas** (uma solda de topo de oficina em cada junta dentro do spool, uma solda de campo onde ele encontra o próximo spool) e sua **lista de materiais**, com o peso do tubo (peso de ponta lisa, ASME B36.10M).
- {{ui:Lista de spools (CSV)}}: o mesmo, um bloco por spool.

:::note
Os comprimentos de corte são de ponta a ponta, como desenhados: nenhuma abertura de raiz nem folga de solda é descontada. As curvas estão no raio longo da B16.9; tês, reduções e válvulas são genéricos, dimensionados a partir do tubo, não conforme a B16.9 nem um fabricante, e a folha diz isso. Os pesos das conexões não são informados. Uma ferramenta de desenho e coordenação, dimensionada por um engenheiro.
:::

## No arquivo IFC

Cada peça de um trecho com spools carrega **CadCraft_Spool** com o seu SpoolId, o trecho, o número do spool no trecho e onde ele começa e termina ao longo do trecho. O trecho mantém as suas regras (comprimento máximo do spool, soldas de campo, número da linha) no próprio conjunto, então os spools voltam iguais quando o arquivo é aberto de novo.

## Dutos: uma lista de corte

Abra {{ui:Build}} e clique em {{ui:Lista de corte de dutos}}: um CSV das peças retas de duto, por sistema, forma e diâmetro, cada trecho reto cortado em peças do **Comprimento da peça** na barra de Duto (1500 mm, cerca de 5 ft, como ponto de partida), mais o que sobrar. Somente comprimentos: sem costuras, espessuras de chapa nem conectores.
