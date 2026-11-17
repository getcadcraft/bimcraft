---
title: Conectar tubos e dutos a equipamentos
summary: Inicie ou termine um tubo ou duto em um conector para que ele assuma o tamanho e o sistema do conector e fique fixo a ele, depois verifique as conexões — conectores abertos, incompatibilidades de tamanho e de sistema, trechos sem origem.
keywords: mep, conectar, conexão, conexões, conector, conectores, conector aberto, incompatibilidade de tamanho, incompatibilidade de sistema, origem, verificar conexões, fixo, seguir, mover equipamento, ifcrelconnectsports, coordenação
from: 29144fb0
---

## O que você vai fazer

Una os trechos aos equipamentos para que o modelo seja um único sistema conectado: a saída de uma bomba com o tubo que dela sai, a boca de um difusor com o seu duto de ramal. Depois deixe o BimCraft listar o que não está unido.

## Desenhar a partir de um conector

1. Escolha {{ui:Tubulação}} ou {{ui:Duto}}.
2. Mova o ponteiro sobre um conector de um equipamento (os pequenos círculos; um conector aberto é desenhado na cor de aviso). O ponteiro se encaixa nele e diz **em um conector**.
3. Clique: o trecho começa na altura do conector e **assume o tamanho e o sistema** dele (um tubo também assume o material usual do sistema). A linha de status diz o que ele assumiu.
4. Continue desenhando normalmente. Terminar um trecho em outro conector fixa também essa extremidade.

A extremidade de um trecho em um conector fica **fixa** a ele: mova ou gire o equipamento (em Propriedades) e a extremidade do trecho acompanha; edite o trecho e essa extremidade continua no conector. Os demais cantos do trecho permanecem onde estão, então depois de um deslocamento grande o primeiro segmento pode sair do conector em ângulo: mova também o próximo canto.

## Verificar as conexões

Abra {{ui:Build}} e clique em {{ui:Verificar conexões}}. A lista abaixo da barra mostra:

| Linha | O que significa |
|---|---|
| Um conector não está conectado | Um equipamento tem uma conexão para a qual nada está desenhado |
| Nada na sua extremidade | Um trecho termina no ar |
| Conectores unidos de tamanhos diferentes | Um trecho de um tamanho encontra um conector ou trecho de outro sem redutor (o diâmetro nominal de um tubo, a forma e os lados de um duto) |
| Conectores unidos de sistemas diferentes | Por exemplo, um duto de retorno em um difusor de insuflamento |
| Um tubo unido a um duto | Dois tipos diferentes de conexão se encontram |
| Nenhum equipamento na sua rede o alimenta | Nada a que um trecho esteja unido, por mais longe que esteja no percurso, tem uma saída. Ralos, águas pluviais e ventilações não são verificados: a água deles vem dos aparelhos |
| Fixo a um conector de equipamento que não está mais no modelo | O equipamento foi excluído; desenhe a extremidade de novo ou exclua o trecho |

Os erros aparecem primeiro. Clique em uma linha para selecionar o que ela indica. {{ui:Fechar}} oculta a lista. A verificação lê o modelo como desenhado: verifica conexões e tamanhos, nunca vazões, pressões ou balanceamento.
