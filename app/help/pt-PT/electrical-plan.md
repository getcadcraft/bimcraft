---
title: A planta elétrica
summary: Colocar tomadas, interruptores, luzes, sensores, caixas de derivação e quadros na planta com os mesmos símbolos do suplemento Eletricidade do CadCraft, ligar os interruptores às luzes que acendem e listar os dispositivos e circuitos nos mapas.
keywords: eletricidade, planta elétrica, tomada, receptáculo, duplex, interruptor, comutador, variador, luz, luz de teto, luz encastrada, downlight, sensor de movimento, caixa de derivação, quadro, quadro de distribuição, circuito, carga, watts, amperes, retorno do interruptor, mapa de dispositivos, mapa de quadros
from: f7de1947
---

## O que vai fazer

Desenhe a planta elétrica da casa no modelo: tomadas, interruptores e quadros nas paredes, luzes e sensores no teto. Cada dispositivo é um elemento elétrico real no ficheiro IFC, com a sua etiqueta, circuito e carga, e os interruptores memorizam as luzes que acendem.

## Colocar dispositivos

1. Num piso, abra {{ui:Build}} e escolha {{ui:Electrical}}.
2. Escolha o dispositivo: tomadas (energia, dados, telefone, audiovisual), interruptores e sensores (um termóstato e um temporizador também), luzes, detetores e alarmes, uma caixa de derivação, um quadro ou um subquadro.
3. Escreva um **Circuito** se o souber (qualquer nome: 1, 2, A-3). Deixe a **Altura de montagem** em branco para usar a altura habitual desse dispositivo.
4. Clique na planta. As tomadas, os interruptores e os quadros ficam na face da parede mais próxima, virados para o interior da divisão; as luzes, os sensores e as caixas de derivação ficam no teto, onde clicar.

Os dispositivos recebem etiqueta à medida que são colocados: **R** para tomadas, **S** para interruptores, **L** para luzes, **M** para sensores de movimento, **J** para caixas de derivação, **P** para quadros. Os dispositivos numa parede deslocam-se com ela quando a parede é movida.

Para procurar por imagem, abra a **Paleta de símbolos** a partir de {{ui:Build}}, encontre um dispositivo pelo nome, marque com estrela os que usa mais e coloque-o com um clique: veja [A paleta de símbolos](topic:symbol-palette).

## Ligar interruptores às luzes

1. Escolha um interruptor (ou um sensor de movimento) e clique em **Ligar luzes** em {{ui:Properties}}.
2. Clique em cada luz que ele acende. Clique de novo numa luz já ligada para a desligar.
3. Prima {{key:Enter}} ou clique em **Concluir**.

A planta desenha uma curva tracejada do interruptor até cada uma das suas luzes. As {{ui:Properties}} de uma luz mostram os interruptores que a acendem.

## A divisão onde está um dispositivo

Cada dispositivo sabe em que divisão está. Um dispositivo na parede fica na divisão para onde está virado; um dispositivo de teto fica na divisão por cima da qual está. As {{ui:Properties}} mostram a **Divisão**, e o mapa **Dispositivos elétricos** tem uma coluna **Divisão** (número e nome, como 101 Cozinha).

Está sempre atualizado: mude o nome ou o número da divisão, mova o dispositivo ou mova uma parede, e a divisão acompanha no mesmo passo. Um dispositivo na face exterior de um edifício, ou num espaço que não é uma divisão, indica que não está numa divisão.

A divisão também fica escrita no ficheiro, no conjunto de propriedades `CadCraft_Location` do dispositivo (Room, RoomNumber, RoomName), para que a Procurar, a Cor por propriedade e um mapa de etiquetas a possam usar, e também outro programa. Os símbolos de planta e os elementos ligados a um símbolo recebem o mesmo conjunto; veja [Paleta de símbolos](topic:symbol-palette).

## Deixar o assistente colocá-los

Com um assistente ligado (**Definições** › **Assistentes**, com edições permitidas), pode pedir dispositivos por palavras: "coloque uma tomada dupla a cada 2 m ao longo das paredes da sala, a 300 mm do chão, no circuito 3", ou "adicione uma luz de teto com o respetivo interruptor junto à porta". O assistente usa cinco ferramentas: `devices_add`, `device_change`, `lights_set`, `devices_delete` e `devices_list`. Criam os mesmos dispositivos que a ferramenta Eletricidade, nas mesmas paredes e com as mesmas etiquetas, circuitos, cargas e alturas, e cada chamada é um único passo de anulação.

Um dispositivo nunca recebe um tipo que a ferramenta Eletricidade não tem: um tipo desconhecido é recusado e o assistente recebe a lista. Uma tomada ou um interruptor tem de ficar a menos de 600 mm de uma face de parede, como um clique, ou o pedido é recusado e nada é colocado. As alturas predefinidas estão em milímetros: 300 para tomadas, 1100 para interruptores; um dispositivo de teto fica suspenso do teto.

## Alterar e listar

Escolha um dispositivo para alterar a sua etiqueta, o circuito, a carga (watts) e a altura de montagem. Escolha vários para os colocar todos no mesmo circuito de uma vez. Prima {{key:Delete}} para remover um; uma luz eliminada é retirada dos seus interruptores.

Em {{ui:Schedules}} escolha **Dispositivos elétricos** para ver cada dispositivo com o seu piso, circuito, carga, altura e as luzes que cada interruptor acende, ou **Circuitos** para ver os dispositivos de cada circuito, a carga total e a corrente. Ambos estão também na folha de mapas do conjunto de desenhos: veja [Alçados, cortes e folhas](topic:sheets).

:::note
As alturas de montagem e as cargas são valores predefinidos de planeamento (uma tomada a 16" de altura e 200 W, um interruptor a 48", uma luz de teto de 60 W), não um projeto: o eletricista ou o engenheiro dimensiona os circuitos e verifica a regulamentação.
:::

:::tip
Os símbolos são os que o suplemento Eletricidade do CadCraft desenha nos planos de instalação, por isso um plano feito em qualquer uma das aplicações lê-se da mesma forma.
:::
