---
title: A planta elétrica
summary: Coloque tomadas, interruptores, luminárias, sensores, caixas de passagem e quadros na planta com os mesmos símbolos do complemento Elétrica do CadCraft, vincule interruptores às luminárias que eles acionam e liste dispositivos e circuitos nas tabelas.
keywords: elétrica, planta elétrica, tomada, ponto de tomada, tomada dupla, interruptor, interruptor paralelo, dimmer, luminária, luminária de teto, luminária embutida, downlight, sensor de presença, caixa de passagem, quadro, quadro de distribuição, circuito, carga, watts, amperes, retorno do interruptor, tabela de dispositivos, tabela de quadros
from: f7de1947
---

## O que você vai fazer

Desenhe a planta elétrica da casa no modelo: tomadas, interruptores e quadros nas paredes, luminárias e sensores no teto. Cada dispositivo é um elemento elétrico real no arquivo IFC, com sua etiqueta, circuito e carga, e os interruptores lembram as luminárias que acionam.

## Colocar dispositivos

1. Em um nível, abra {{ui:Build}} e escolha {{ui:Electrical}}.
2. Escolha o dispositivo: tomadas (força, dados, telefone, áudio e vídeo), interruptores e sensores (um termostato e um temporizador também), luminárias, detectores e alarmes, uma caixa de passagem, um quadro ou um subquadro.
3. Digite um **Circuito** se você souber (qualquer nome: 1, 2, A-3). Deixe **Altura de montagem** em branco para a altura usual desse dispositivo.
4. Clique na planta. Tomadas, interruptores e quadros vão na face da parede mais próxima, voltados para dentro do ambiente; luminárias, sensores e caixas de passagem vão no teto, onde você clicar.

Os dispositivos recebem etiqueta ao serem colocados: **R** para tomadas, **S** para interruptores, **L** para luminárias, **M** para sensores de presença, **J** para caixas de passagem, **P** para quadros. Dispositivos em uma parede se movem com ela quando você move a parede.

Prefere procurar por imagem? Abra a **Paleta de símbolos** em {{ui:Build}} para encontrar um dispositivo pelo nome, marcar com estrela os que você usa e colocá-lo com um clique: veja [A paleta de símbolos](topic:symbol-palette).

## Vincular interruptores a luminárias

1. Escolha um interruptor (ou um sensor de presença) e clique em **Vincular luminárias** em **Propriedades**.
2. Clique em cada luminária que ele aciona. Clique de novo em uma luminária vinculada para desvinculá-la.
3. Pressione {{key:Enter}} ou clique em **Concluir**.

A planta desenha uma curva tracejada do interruptor até cada uma de suas luminárias. As **Propriedades** de uma luminária mostram quais interruptores a acionam.

## O ambiente em que um dispositivo está

Cada dispositivo sabe em qual ambiente está. Um dispositivo na parede está no ambiente para o qual ela dá; um dispositivo no teto está no ambiente que fica sob ele. As **Propriedades** mostram **Ambiente**, e a tabela **Dispositivos elétricos** tem uma coluna **Ambiente** (número e nome, como 101 Cozinha).

Essa informação é mantida atualizada: renomeie ou renumere o ambiente, mova o dispositivo ou mova uma parede, e o ambiente acompanha no mesmo passo. Um dispositivo na face externa de uma edificação, ou em um espaço que não é um ambiente, indica que não está em um ambiente.

O ambiente também é gravado no arquivo, no conjunto de propriedades `CadCraft_Location` do dispositivo (Room, RoomNumber, RoomName), para que Localizar, Colorir por propriedade e uma tabela de etiquetas possam usá-lo, e para que outro programa também possa. Símbolos em planta e elementos vinculados a um símbolo recebem o mesmo conjunto; veja [Paleta de símbolos](topic:symbol-palette).

## Deixe seu assistente colocá-los

Com um assistente conectado (Configurações › Assistentes, com edições permitidas), você pode pedir dispositivos com palavras: "coloque uma tomada dupla a cada 2 m ao longo das paredes da sala, a 300 mm de altura, no circuito 3", ou "adicione uma luminária de teto com o interruptor perto da porta". O assistente usa cinco ferramentas: `devices_add`, `device_change`, `lights_set`, `devices_delete` e `devices_list`. Elas criam os mesmos dispositivos que a ferramenta Elétrica cria, nas mesmas paredes e com as mesmas etiquetas, circuitos, cargas e alturas, e cada chamada é um passo de desfazer.

Um dispositivo nunca recebe um tipo que a ferramenta Elétrica não tem: um tipo desconhecido é recusado e o assistente recebe a lista. Uma tomada ou interruptor deve ficar a no máximo 600 mm de uma face de parede, como um clique; caso contrário a chamada é recusada e nada é colocado. As alturas padrão são em milímetros: 300 para tomadas, 1100 para interruptores; um dispositivo de teto fica preso ao teto.

## Alterar e listar

Escolha um dispositivo para alterar sua etiqueta, circuito, carga (watts) e altura de montagem. Escolha vários para colocá-los todos no mesmo circuito de uma vez. Pressione {{key:Delete}} para remover um; uma luminária excluída é retirada dos seus interruptores.

Em {{ui:Schedules}} escolha **Dispositivos elétricos** para ver cada dispositivo com seu nível, circuito, carga, altura e as luminárias que cada interruptor aciona, ou **Circuitos** para os dispositivos de cada circuito, a carga total e a corrente. As duas também estão na folha de tabelas do conjunto de desenhos: veja [Elevações, cortes e folhas](topic:sheets).

:::note
As alturas de montagem e as cargas são valores padrão de planejamento (uma tomada a 16" de altura e 200 W, um interruptor a 48", uma luminária de teto de 60 W), não um projeto: o eletricista ou o engenheiro dimensiona os circuitos e verifica a norma.
:::

:::tip
Os símbolos são os mesmos que o complemento Elétrica do CadCraft desenha em plantas de instalação, então uma planta feita em qualquer um dos dois aplicativos é lida do mesmo jeito.
:::
