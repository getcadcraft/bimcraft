---
title: Equipamento MEP com bocas
summary: Coloque unidades de tratamento de ar genéricas, ventiladores, bombas, caldeiras, termoacumuladores, unidades terminais, difusores, grelhas e depósitos, dimensionados pelos valores que escreve, cada um com as ligações de tubos e condutas a que outros troços se unem.
keywords: mep, equipamento, unidade de tratamento de ar, ahu, ventilador, ventilador em linha, bomba, caldeira, termoacumulador, unidade terminal, vav, difusor, grelha, registo, depósito, boca, bocas, ligação, colarinho, dimensão do colarinho, avac, hvac, canalização, mecânico, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## O que vai fazer

Coloque o equipamento nas extremidades dos seus tubos e condutas. Cada peça é uma forma genérica dimensionada pelos valores que escreve, com as suas ligações como **bocas**: onde um tubo ou conduta se une a ela, que sistema, em que sentido vai o caudal e que dimensão tem. Tubos e condutas desenhados a partir de uma boca tomam a sua dimensão e sistema e ficam fixos a ela: veja [Ligar tubos e condutas a equipamentos](topic:mep-connections).

:::note
Trata-se de um auxiliar de desenho e de coordenação, dimensionado por um engenheiro. O equipamento não é um produto de um fabricante: sem capacidades, pesos nem dimensões de ligação de fabricantes. Traga um modelo do fabricante a partir do seu programa MEP, em IFC, quando precisar.
:::

## Colocar uma peça

1. Ative {{ui:Desenhar}}, abra {{ui:Compilação}} e escolha {{ui:Equipamento}}.
2. Na barra, escolha o tipo e escreva as suas dimensões. Cada tipo pede as suas próprias:

| Tipo | Escreve | As suas bocas |
|---|---|---|
| Unidade de tratamento de ar | comprimento, largura, altura; aberturas de insuflação e de retorno; dimensão e sistema do tubo da bateria; dimensão da condensação | conduta de insuflação de saída, conduta de retorno de entrada, entrada e saída da bateria, dreno de condensação |
| Ventilador em linha | diâmetro, comprimento, sistema | conduta de entrada e de saída |
| Bomba | dimensão do tubo, sistema | entrada e saída |
| Caldeira | comprimento, largura, altura, dimensão do tubo, dimensão do gás, diâmetro da chaminé | saída de ida do aquecimento e retorno de entrada, entrada de gás, saída da chaminé |
| Termoacumulador | diâmetro, altura, dimensão do tubo, gás ou elétrico | entrada de água fria, saída de água quente (e entrada de gás e chaminé quando queima gás) |
| Unidade terminal | comprimento, largura, altura, entrada redonda, largura e altura da saída | entrada e saída de ar de insuflação |
| Difusor | face, colarinho, sistema | o seu colarinho (entrada de ar) |
| Grelha | largura e altura da face, largura e altura do colarinho, sistema | o seu colarinho (saída de ar para a conduta de retorno ou de extração) |
| Depósito | diâmetro, altura, dimensão do tubo, sistema | entrada no topo, saída perto do fundo |
| Radiador | comprimento, altura, profundidade, dimensão do tubo, sistema | ida na entrada, no topo de uma extremidade, e retorno na saída, em baixo na outra |
| Convector / painel de aquecimento | comprimento, altura, profundidade, dimensão do tubo, sistema | ida numa extremidade, retorno na outra |
| Família do fabricante | a família (veja [Especificações de tubos, válvulas, registos e famílias de fabricantes](topic:pipe-specs)) | as bocas que a sua família tem |

3. Defina **Em**, a altura da sua base acima do piso. A altura de um difusor ou grelha é a da sua face: escreva a altura do teto.
4. Escreva uma **Etiqueta** se quiser uma (`AHU-1`); a peça seguinte do mesmo tipo recebe o número seguinte.
5. Mova o ponteiro sobre a planta: a implantação e as suas bocas seguem-no. Prima {{key:R}} para rodar 90°. Clique no sítio pretendido.

As dimensões dos tubos são dimensões de tubo de aço (ASME B36.10M). Um tubo desenhado a partir de uma bomba noutro material toma a mesma dimensão nominal no seu próprio material.

## Alterar ou remover

Selecione-a na planta ou na vista 3D. As Propriedades mostram todas as dimensões que escreveu, a sua etiqueta, X, Y, altura e rotação, e cada boca: a sua dimensão, sistema, sentido do caudal e se está ligada a algo. Cada alteração é um passo de {{ui:Anular}}; os troços fixos às suas bocas movem-se com ela. {{key:Delete}} remove-a; os troços que lhe estavam fixos mantêm-se, e a verificação de ligações os lista.

## No ficheiro IFC

Cada tipo é guardado como a sua classe IFC: IfcUnitaryEquipment (unidade de tratamento de ar), IfcFan (ventilador), IfcPump (bomba), IfcBoiler (caldeira; um termoacumulador é um IfcBoiler do tipo água, com o tipo de objeto "Water heater"), IfcAirTerminalBox (unidade terminal), IfcAirTerminal (difusor, grelha) e IfcTank (depósito), com um tipo partilhado por todas as peças do mesmo tipo e dimensões. Os ficheiros IFC2X3 recebem IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice, com os tipos correspondentes. Cada boca é um IfcDistributionPort colocado onde está a ligação, virado para fora, com o seu sentido de caudal e sistema; outros programas leem qual troço se liga a qual boca. A peça junta-se ao sistema de cada uma das suas bocas e leva os conjuntos de propriedades de cada item de biblioteca colocado.
