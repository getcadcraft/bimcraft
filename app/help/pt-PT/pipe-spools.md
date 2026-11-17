---
title: Tubos de aço em spools e folhas de spool
summary: Corte um troço de tubo de aço soldado de topo em spools, com um comprimento máximo e nas soldaduras em obra que coloca, numere-os e transfira uma folha por spool (vista 3D, comprimentos de corte, acessórios, soldaduras, lista de materiais) em PDF e CSV; as condutas recebem uma lista de corte de peças retas.
keywords: spool, spools, folha de spool, isométrico, fabrico, pré-fabricação, soldadura em obra, soldadura em oficina, soldadura de topo, comprimento de corte, lista de corte, lista de materiais, bom, tubo de aço, schedule 40, número de linha, lista de corte de condutas, peças de conduta
from: 539f51de
---

## O que vai fazer

Transforme um troço de tubo de aço nas peças que uma oficina solda e um montador instala: spools não mais compridos do que o comprimento que escolher, divididos onde coloca soldaduras em obra, cada um com a sua própria folha.

Só **tubo de aço de soldadura de topo** é cortado em spools (diâmetros ASME B36.10M, cotovelos de raio longo ASME B16.9). Os tubos de cobre, PVC e PEX têm juntas que não são soldaduras de topo, por isso os seus troços não têm spools.

## Cortar um troço em spools

1. Escolha um troço de tubo de aço. Em Propriedades, marque **Cortar em spools**.
2. **Spool mais comprido**: o comprimento máximo do eixo que um spool pode ter (6 m, cerca de 20 ft, para começar).
3. **Número de linha**: parte do número de cada spool. Um novo troço em spools recebe o próximo número livre do seu sistema.

Os spools são numerados ao longo do troço a partir do seu primeiro ponto: `CHW-12-S01`, `CHW-12-S02` … (o sistema, o número de linha, o spool). Um spool cresce peça a peça; a peça que o tornaria comprido demais inicia o seguinte, e um troço reto mais comprido do que um spool é cortado onde o spool fica cheio.

## Colocar soldaduras em obra

1. Abra {{ui:Compilação}} e escolha {{ui:Soldadura em obra}}.
2. Clique num tubo em spools onde vai a soldadura em obra. Dentro de um troço reto, o tubo é cortado aí; dentro de um acessório ou de uma válvula, a soldadura passa para a junta mais próxima.

Propriedades lista as soldaduras em obra do troço, cada uma com {{ui:Remover}}. Cada alteração é um passo de {{ui:Anular}}.

## Folhas de spool

Em Propriedades de um troço em spools:

- {{ui:Folhas de spool (PDF)}}: uma página por spool. À esquerda, o spool numa vista isométrica de 30°: os seus troços retos numerados, as soldaduras em oficina como pontos, as soldaduras em obra marcadas FW, e o norte da planta. À direita, o número, o diâmetro, o schedule e o comprimento do spool, depois os seus **comprimentos de corte**, **acessórios**, **soldaduras** (uma soldadura de topo em oficina em cada junta dentro do spool, uma soldadura em obra onde encontra o spool seguinte) e a sua **lista de materiais**, com o peso do tubo (peso de extremidade lisa ASME B36.10M).
- {{ui:Lista de spools (CSV)}}: o mesmo, um bloco por spool.

:::note
Os comprimentos de corte são de extremidade a extremidade, tal como desenhados: não se retira nenhuma abertura de raiz nem margem de soldadura. Os cotovelos são de raio longo B16.9; os tês, reduções e válvulas são genéricos, dimensionados a partir do tubo, e não segundo B16.9 nem um fabricante, e a folha diz isso. Não são indicados pesos de acessórios. Auxiliar de desenho e de coordenação, dimensionado por um engenheiro.
:::

## No ficheiro IFC

Cada parte de um troço em spools tem **CadCraft_Spool**, com o seu SpoolId, o troço, o número do spool no troço e onde começa e acaba ao longo do troço. O troço guarda as suas regras (spool mais comprido, soldaduras em obra, número de linha) no seu próprio conjunto, para que os spools voltem iguais quando o ficheiro for reaberto.

## Condutas: uma lista de corte

Abra {{ui:Compilação}} e clique em {{ui:Lista de corte de condutas}}: um CSV das peças retas de conduta, por sistema, forma e diâmetro, cada troço reto cortado em peças do **Comprimento da peça** na barra de Conduta (1500 mm, cerca de 5 ft, para começar), e o que sobra. Só comprimentos: sem juntas, espessuras de chapa nem conectores.
