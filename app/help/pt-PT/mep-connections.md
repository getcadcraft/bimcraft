---
title: Ligar tubos e condutas a equipamentos
summary: Inicie ou termine um tubo ou conduta numa boca para que tome a dimensão e o sistema da boca e fique fixo a ela, e depois verifique as ligações — bocas abertas, dimensões e sistemas incompatíveis, troços sem origem.
keywords: mep, ligar, ligação, ligações, boca, bocas, boca aberta, dimensão incompatível, sistema incompatível, origem, verificar ligações, fixo, seguir, mover equipamento, ifcrelconnectsports, coordenação
from: 29144fb0
---

## O que vai fazer

Ligue os troços aos equipamentos para que o modelo seja um único sistema ligado: a saída de uma bomba com o tubo que dela sai, o colarinho de um difusor com a sua conduta de ramal. Depois, deixe o BimCraft listar o que não está ligado.

## Desenhar a partir de uma boca

1. Escolha {{ui:Tubo}} ou {{ui:Conduta}}.
2. Mova o ponteiro sobre uma boca de um equipamento (os pequenos círculos; uma boca aberta é desenhada com a cor de aviso). O ponteiro encaixa nela e diz **na boca**.
3. Clique: o troço começa à altura da boca e **toma a sua dimensão e sistema** (um tubo toma também o material habitual do sistema). A linha de estado indica o que tomou.
4. Continue a desenhar como habitualmente. Terminar um troço noutra boca fixa também essa extremidade.

A extremidade de um troço numa boca fica **fixa** a ela: mova ou rode o equipamento (nas Propriedades) e a extremidade do troço acompanha-o; se editar o troço, essa extremidade mantém-se na boca. Os outros cantos do troço mantêm-se onde estão, por isso, após uma grande deslocação, o primeiro segmento pode desprender-se da boca em ângulo: mova também o canto seguinte.

## Verificar as ligações

Abra {{ui:Compilação}} e clique em {{ui:Verificar ligações}}. A lista sob a barra mostra:

| Linha | O que significa |
|---|---|
| Uma boca não está ligada | Um equipamento tem uma ligação a que não está desenhado nada |
| Nada na sua extremidade | Um troço termina no ar |
| Bocas ligadas de dimensões diferentes | Um troço de uma dimensão encontra uma boca ou troço de outra sem redutor (a dimensão nominal de um tubo, a forma e os lados de uma conduta) |
| Bocas ligadas de sistemas diferentes | Por exemplo, uma conduta de retorno numa grelha de insuflação |
| Um tubo ligado a uma conduta | Dois tipos diferentes de ligação encontram-se |
| Nenhum equipamento na sua rede o alimenta | Nada a que um troço esteja ligado, por mais longe que seja, tem uma saída. Os esgotos, as águas pluviais e as ventilações não são verificados: a sua água vem dos aparelhos |
| Fixo a uma boca de equipamento que já não está no modelo | O equipamento foi eliminado; desenhe a extremidade de novo ou elimine o troço |

Os erros vêm primeiro. Clique numa linha para selecionar o que ela nomeia. {{ui:Fechar}} oculta a lista. A verificação lê o modelo tal como está desenhado: verifica ligações e dimensões, nunca caudais, pressões ou equilibragem.
