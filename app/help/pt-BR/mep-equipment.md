---
title: Equipamentos MEP com conectores
summary: Posicione unidades de tratamento de ar genéricas, ventiladores, bombas, caldeiras, aquecedores de água, unidades terminais, difusores, grelhas e reservatórios dimensionados pelos valores que você digita, cada um com as conexões de tubos e dutos às quais outros trechos se unem.
keywords: mep, equipamento, unidade de tratamento de ar, ahu, ventilador, ventilador em linha, bomba, caldeira, aquecedor de água, unidade terminal, vav, difusor, grelha, registro de ar, reservatório, conector, conectores, conexão, bocal, tamanho da boca, hvac, hidráulica, mecânica, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## O que você vai fazer

Posicione os equipamentos nas extremidades dos seus tubos e dutos. Cada peça é uma forma genérica dimensionada pelos valores que você digita, com suas conexões como **conectores**: onde um tubo ou duto se une a ela, qual sistema, em que sentido segue o fluxo e qual o tamanho. Tubos e dutos desenhados a partir de um conector assumem o tamanho e o sistema dele e ficam fixos a ele: veja [Conectar tubos e dutos a equipamentos](topic:mep-connections).

:::note
Este é um auxílio de desenho e de coordenação, dimensionado por um engenheiro. O equipamento não é um produto de fabricante: não há capacidades, pesos nem tamanhos de conexão de fabricantes. Traga um modelo do fabricante do seu programa MEP como IFC quando precisar.
:::

## Posicionar uma peça

1. Ative {{ui:Desenhar}}, abra {{ui:Build}} e escolha {{ui:Equipamentos}}.
2. Na barra, escolha o tipo e digite suas dimensões. Cada tipo pede as suas:

| Tipo | Digite | Seus conectores |
|---|---|---|
| Unidade de tratamento de ar | comprimento, largura, altura; abertura de insuflamento e de retorno; tamanho e sistema da serpentina; tamanho do dreno de condensado | saída de duto de insuflamento, entrada de duto de retorno, entrada e saída da serpentina, dreno de condensado |
| Ventilador em linha | diâmetro, comprimento, sistema | entrada e saída de duto |
| Bomba | tamanho do tubo, sistema | entrada e saída |
| Caldeira | comprimento, largura, altura, tamanho do tubo, tamanho do gás, diâmetro da exaustão | saída de alimentação de aquecimento e entrada de retorno, entrada de gás, saída de exaustão |
| Aquecedor de água | diâmetro, altura, tamanho do tubo, gás ou elétrico | entrada de água fria, saída de água quente (e entrada de gás e exaustão quando queima gás) |
| Unidade terminal | comprimento, largura, altura, entrada redonda, largura e altura da saída | entrada e saída de ar de insuflamento |
| Difusor | face, boca, sistema | sua boca (entrada de ar) |
| Grelha | largura e altura da face, largura e altura da boca, sistema | sua boca (saída de ar para o duto de retorno ou de exaustão) |
| Reservatório | diâmetro, altura, tamanho do tubo, sistema | entrada no topo, saída perto do fundo |
| Radiador | comprimento, altura, profundidade, tamanho do tubo, sistema | entrada de ida na parte superior de uma extremidade, saída de retorno na parte inferior da outra |
| Convector / aquecedor de painel | comprimento, altura, profundidade, tamanho do tubo, sistema | entrada de ida em uma extremidade, saída de retorno na outra |
| Família do fabricante | a família (veja [Especificações de tubos, válvulas, registros e famílias de fabricantes](topic:pipe-specs)) | os conectores que a família recebeu |

3. Defina **Em**, a altura da base acima do nível. A altura de um difusor ou de uma grelha é a da sua face: digite a altura do forro.
4. Digite uma **Etiqueta** se quiser (`AHU-1`); a próxima peça do mesmo tipo recebe o número seguinte.
5. Mova o ponteiro sobre a planta: a projeção e os conectores acompanham. Pressione {{key:R}} para girar 90°. Clique onde ela deve ficar.

Os diâmetros de tubo são os diâmetros de tubos de aço (ASME B36.10M). Um tubo desenhado a partir de uma bomba em outro material assume o mesmo diâmetro nominal no material dele.

## Alterar ou remover

Selecione-a na planta ou na vista 3D. As Propriedades mostram cada tamanho que você digitou, sua etiqueta, X, Y, altura e giro, e cada conector: seu tamanho, seu sistema, em que sentido segue o fluxo e se algo está conectado. Cada alteração é uma etapa de {{ui:Desfazer}}; os trechos fixos aos seus conectores se movem com ela. {{key:Delete}} remove a peça; os trechos que estavam fixos a ela permanecem, e a verificação de conexões os lista.

## No arquivo IFC

Cada tipo é salvo com a sua classe IFC: IfcUnitaryEquipment (unidade de tratamento de ar), IfcFan, IfcPump, IfcBoiler (caldeira; um aquecedor de água é um IfcBoiler do tipo água com o tipo de objeto "Water heater"), IfcAirTerminalBox (unidade terminal), IfcAirTerminal (difusor, grelha) e IfcTank, com um tipo compartilhado por todas as peças do mesmo tipo e tamanhos. Arquivos IFC2X3 recebem IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice com os tipos correspondentes. Cada conector é um IfcDistributionPort posicionado onde está a conexão, voltado para fora, com seu sentido de fluxo e seu sistema; outros programas leem qual trecho se conecta a qual conector. A peça se une ao sistema de cada um dos seus conectores e carrega os conjuntos de itens da biblioteca que cada item colocado possui.
