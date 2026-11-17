---
title: Equipos MEP con portos
summary: Coloque unidades de tratamento de aire, ventiladores en liña, bombas, caldeiras, quentadores de auga, unidades terminais, difusores, rexillas e depósitos xenéricos, dimensionados cos valores que escriba, cada un coas conexións de tubaxe e conduto ás que se unen outros tramos.
keywords: mep, equipo, unidade de tratamento de aire, ahu, ventilador, ventilador en liña, bomba, caldeira, quentador de auga, unidade terminal, vav, difusor, rexilla, rexistro, depósito, porto, portos, conexión, boquilla, tamaño do pescozo, hvac, fontanería, mecánica, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Que vai facer

Coloque o equipo nos extremos das súas tubaxes e condutos. Cada peza é unha forma xenérica dimensionada cos valores que escriba, con as súas conexións como **portos**: onde se une unha tubaxe ou un conduto, a que sistema pertence, en que sentido vai o caudal e que tamaño ten. As tubaxes e condutos debuxados desde un porto toman o seu tamaño e sistema e quedan fixados a el: vexa [Conectar tubaxes e condutos aos equipos](topic:mep-connections).

:::note
Esta é unha axuda ao debuxo e á coordinación, dimensionada por un enxeñeiro. O equipo non é un produto dun fabricante: sen capacidades, pesos nin tamaños de conexión do fabricante. Importe un modelo do fabricante desde o seu programa MEP en IFC cando o precise.
:::

## Colocar unha peza

1. Active {{ui:Debuxar}}, abra {{ui:Compilación}} e escolla {{ui:Equipamento}}.
2. Na barra, escolla o tipo e escriba os seus tamaños. Cada tipo pide os seus:

| Tipo | Escriba | Os seus portos |
|---|---|---|
| Unidade de tratamento de aire | lonxitude, largura, altura; aberturas de impulsión e retorno; tamaño e sistema da tubaxe da batería; tamaño da condensación | conduto de impulsión de saída, conduto de retorno de entrada, batería de entrada e saída, desaugue de condensados |
| Ventilador en liña | diámetro, lonxitude, sistema | conduto de entrada e saída |
| Bomba | tamaño da tubaxe, sistema | entrada e saída |
| Caldeira | lonxitude, largura, altura, tamaño da tubaxe, tamaño do gas, diámetro da chemineira | saída de impulsión de calefacción e entrada de retorno, entrada de gas, saída da chemineira |
| Quentador de auga | diámetro, altura, tamaño da tubaxe, gas ou eléctrico | entrada de auga fría, saída de auga quente (e entrada de gas e unha chemineira cando queima gas) |
| Unidade terminal | lonxitude, largura, altura, entrada redonda, largura e altura da saída | entrada e saída de aire de impulsión |
| Difusor | cara, pescozo, sistema | o seu pescozo (entrada de aire) |
| Rexilla | largura e altura da cara, largura e altura do pescozo, sistema | o seu pescozo (saída de aire cara ao conduto de retorno ou de extracción) |
| Depósito | diámetro, altura, tamaño da tubaxe, sistema | entrada na parte superior, saída preto do fondo |
| Radiador | lonxitude, altura, profundidade, tamaño da tubaxe, sistema | impulsión de entrada na parte superior dun extremo, retorno de saída na parte inferior do outro |
| Converxedor / aquecedor de panel | lonxitude, altura, profundidade, tamaño da tubaxe, sistema | impulsión de entrada nun extremo, retorno de saída no outro |
| Familia do fabricante | a familia (vexa [Especificacións de tubaxes, válvulas, rexistros e familias de fabricantes](topic:pipe-specs)) | os portos que recibiu a súa familia |

3. Defina **En**, a altura da súa base sobre o nivel. A altura dun difusor ou rexilla é a súa cara: escriba a altura do teito.
4. Escriba unha **Etiqueta** se a quere (`AHU-1`); a seguinte peza do mesmo tipo recibe o seguinte número.
5. Mova o punteiro sobre a planta: a superficie ocupada e os seus portos seguen o movemento. Prema {{key:R}} para xirala 90°. Prema onde vaia.

Os tamaños de tubaxe son tamaños de tubaxe de aceiro (ASME B36.10M). Unha tubaxe debuxada desde unha bomba noutro material toma o mesmo tamaño nominal no seu propio material.

## Modificala ou eliminala

Escóllaa na planta ou na vista 3D. As Propiedades mostran cada tamaño que escribiu, a súa etiqueta, X, Y, altura e xiro, e cada porto: o seu tamaño, sistema, en que sentido vai o caudal e se hai algo conectado. Cada cambio é un paso de {{ui:Desfacer}}; os tramos fixados aos seus portos móvense con el. {{key:Delete}} elimina a peza; os tramos que estaban fixados a ela permanecen e a comprobación de conexións os lista.

## No ficheiro IFC

Cada tipo gárdase coa súa clase IFC: IfcUnitaryEquipment (unidade de tratamento de aire), IfcFan, IfcPump, IfcBoiler (caldeira; un quentador de auga é un IfcBoiler de tipo auga co tipo de obxecto "Water heater"), IfcAirTerminalBox (unidade terminal), IfcAirTerminal (difusor, rexilla) e IfcTank, cun tipo compartido por cada peza do mesmo tipo e tamaños. Os ficheiros IFC2X3 reciben IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice cos tipos correspondentes. Cada porto é un IfcDistributionPort colocado onde está a conexión, orientado cara a fóra, cun sentido de caudal e un sistema; outros programas len que tramo se conecta a cada porto. A peza únese ao sistema de cada un dos seus portos e leva os conxuntos de elementos da biblioteca que ten cada elemento colocado da biblioteca.
