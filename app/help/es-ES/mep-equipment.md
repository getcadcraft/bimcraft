---
title: Equipos MEP con puertos
summary: Coloque equipos genéricos (unidades de tratamiento de aire, ventiladores, bombas, calderas, calentadores de agua, unidades terminales, difusores, rejillas y depósitos), dimensionados con los valores que escriba, cada uno con las conexiones de tuberías y conductos a las que se unen otros tramos.
keywords: mep, equipos, unidad de tratamiento de aire, ahu, ventilador, ventilador en línea, bomba, caldera, calentador de agua, unidad terminal, vav, difusor, rejilla, registro, depósito, puerto, puertos, conexión, boquilla, tamaño de cuello, hvac, fontanería, mecánica, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Qué hará

Coloque los equipos en los extremos de sus tuberías y conductos. Cada pieza es una forma genérica dimensionada con los valores que escriba, con sus conexiones como **puertos**: dónde se une una tubería o conducto, a qué sistema pertenece, hacia dónde va el flujo y qué tamaño tiene. Los tramos dibujados desde un puerto toman su tamaño y sistema y quedan fijos a él: consulte [Conectar tuberías y conductos a equipos](topic:mep-connections).

:::note
Es una ayuda para el dibujo y la coordinación, dimensionada por un ingeniero. El equipo no es un producto de un fabricante: no tiene capacidades, pesos ni tamaños de conexión de fabricante. Importe un modelo del fabricante desde su programa MEP como IFC cuando lo necesite.
:::

## Colocar una pieza

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Equipos}}.
2. En la barra, elija el tipo y escriba sus tamaños. Cada tipo pide los suyos:

| Tipo | Usted escribe | Sus puertos |
|---|---|---|
| Unidad de tratamiento de aire | largo, ancho, alto; aberturas de impulsión y retorno; tamaño y sistema de la tubería de batería; tamaño de la condensación | salida al conducto de impulsión, entrada del conducto de retorno, entrada y salida de la batería, desagüe de condensados |
| Ventilador en línea | diámetro, longitud, sistema | entrada y salida del conducto |
| Bomba | tamaño de tubería, sistema | entrada y salida |
| Caldera | largo, ancho, alto, tamaño de tubería, tamaño de gas, diámetro del conducto de humos | ida de calefacción de salida y retorno de entrada, entrada de gas, salida de humos |
| Calentador de agua | diámetro, alto, tamaño de tubería, gas o eléctrico | entrada de agua fría, salida de agua caliente (y entrada de gas y conducto de humos cuando quema gas) |
| Unidad terminal | largo, ancho, alto, entrada redonda, ancho y alto de salida | entrada y salida de aire de impulsión |
| Difusor | cara, cuello, sistema | su cuello (entrada de aire) |
| Rejilla | ancho y alto de cara, ancho y alto de cuello, sistema | su cuello (salida de aire hacia el retorno o la extracción) |
| Depósito | diámetro, alto, tamaño de tubería, sistema | entrada arriba, salida cerca del fondo |
| Radiador | largo, alto, fondo, tamaño de tubería, sistema | ida en la parte superior de un extremo, retorno en la parte inferior del otro |
| Convector / emisor de panel | largo, alto, fondo, tamaño de tubería, sistema | ida en un extremo, retorno en el otro |
| Familia de fabricante | la familia (consulte [Especificaciones de tuberías, válvulas, compuertas y familias de fabricantes](topic:pipe-specs)) | los puertos que tiene asignados su familia |

3. Fije **Cota**, la altura de su base sobre la planta. La altura de un difusor o una rejilla es la de su cara: escriba la altura del techo.
4. Escriba una **Etiqueta** si quiere una (`AHU-1`); la siguiente pieza del mismo tipo recibe el número siguiente.
5. Mueva el puntero sobre la planta: la huella y sus puertos lo siguen. Pulse {{key:R}} para girarlo 90°. Haga clic donde debe ir.

Los tamaños de tubería son los de tubería de acero (ASME B36.10M). Una tubería dibujada desde una bomba de otro material toma el mismo tamaño nominal en su propio material.

## Cambiar o quitar

Selecciónela en la planta o en la vista 3D. Propiedades muestra cada tamaño que escribió, su etiqueta, X, Y, altura y giro, y cada puerto: su tamaño, sistema, hacia dónde va el flujo y si hay algo conectado. Cada cambio es un paso de {{ui:Deshacer}}; los tramos fijos a sus puertos se mueven con él. {{key:Delete}} la quita; los tramos que estaban fijos a ella permanecen y la comprobación de conexiones los lista.

## En el archivo IFC

Cada tipo se guarda con su clase IFC: IfcUnitaryEquipment (unidad de tratamiento de aire), IfcFan, IfcPump, IfcBoiler (caldera; un calentador de agua es un IfcBoiler de tipo agua con el tipo de objeto "Water heater"), IfcAirTerminalBox (unidad terminal), IfcAirTerminal (difusor, rejilla) e IfcTank, con un tipo compartido por cada pieza del mismo tipo y tamaños. Los archivos IFC2X3 usan IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice con los tipos correspondientes. Cada puerto es un IfcDistributionPort colocado donde está la conexión, orientado hacia fuera, con su dirección de flujo y su sistema; otros programas leen qué tramo se conecta a qué puerto. La pieza se une al sistema de cada uno de sus puertos y lleva los conjuntos de elementos de biblioteca que tiene cada elemento colocado.
