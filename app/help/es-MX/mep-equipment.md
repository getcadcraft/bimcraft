---
title: Equipos MEP con puertos
summary: Coloque manejadoras de aire, ventiladores, bombas, calderas, calentadores de agua, unidades terminales, difusores, rejillas y tanques genéricos, con las medidas que usted escribe, cada uno con las conexiones de tuberías y ductos a las que se unen otros tramos.
keywords: mep, equipo, manejadora de aire, ahu, ventilador, ventilador en línea, bomba, caldera, calentador de agua, unidad terminal, vav, difusor, rejilla, registro, tanque, puerto, puertos, conexión, boquilla, tamaño de cuello, hvac, plomería, mecánico, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Qué hará

Coloque el equipo en los extremos de sus tuberías y ductos. Cada pieza es una forma genérica con medidas que usted escribe, y sus conexiones son **puertos**: dónde se une una tubería o ducto, qué sistema, hacia dónde va el flujo y qué tamaño. Las tuberías y ductos dibujados desde un puerto toman su tamaño y sistema y quedan fijos a él: vea [Conectar tuberías y ductos a equipos](topic:mep-connections).

:::note
Es una ayuda de dibujo y coordinación, dimensionada por un ingeniero. El equipo no es un producto de fabricante: no tiene capacidades, pesos ni tamaños de conexión de fabricante. Traiga el modelo de un fabricante desde su programa MEP como IFC cuando lo necesite.
:::

## Colocar una pieza

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Equipos}}.
2. En la barra, elija el tipo y escriba sus medidas. Cada tipo pide las suyas:

| Tipo | Usted escribe | Sus puertos |
|---|---|---|
| Manejadora de aire | largo, ancho, alto; bocas de suministro y retorno; tamaño y sistema de la tubería del serpentín; tamaño de condensado | salida de ducto de suministro, entrada de ducto de retorno, entrada y salida del serpentín, desagüe de condensado |
| Ventilador en línea | diámetro, largo, sistema | entrada y salida de ducto |
| Bomba | tamaño de tubería, sistema | entrada y salida |
| Caldera | largo, ancho, alto, tamaño de tubería, tamaño de gas, diámetro de chimenea | salida de suministro de calefacción y entrada de retorno, entrada de gas, salida de chimenea |
| Calentador de agua | diámetro, alto, tamaño de tubería, gas o eléctrico | entrada de agua fría, salida de agua caliente (y entrada de gas y una chimenea cuando quema gas) |
| Unidad terminal | largo, ancho, alto, entrada redonda, ancho y alto de salida | entrada y salida de aire de suministro |
| Difusor | cara, cuello, sistema | su cuello (entrada de aire) |
| Rejilla | ancho y alto de la cara, ancho y alto del cuello, sistema | su cuello (salida de aire hacia el ducto de retorno o de extracción) |
| Tanque | diámetro, alto, tamaño de tubería, sistema | entrada arriba, salida cerca del fondo |
| Radiador | largo, alto, profundidad, tamaño de tubería, sistema | entrada de flujo arriba de un extremo, retorno abajo del otro |
| Convector / calefactor de panel | largo, alto, profundidad, tamaño de tubería, sistema | entrada de flujo en un extremo, retorno en el otro |
| Familia de un fabricante | la familia (vea [Especificaciones de tubería, válvulas, compuertas y familias de fabricantes](topic:pipe-specs)) | los puertos que le dio su familia |

3. Fije **En**, la altura de su base sobre el nivel. La altura de un difusor o una rejilla es la de su cara: escriba la altura del plafón.
4. Escriba una **Etiqueta** si quiere una (`AHU-1`); la siguiente pieza del mismo tipo recibe el número siguiente.
5. Mueva el puntero sobre la planta: la huella y sus puertos lo siguen. Pulse {{key:R}} para girarla 90°. Haga clic donde irá.

Los tamaños de tubería son tamaños de tubería de acero (ASME B36.10M). Una tubería dibujada desde una bomba en otro material toma el mismo tamaño nominal en su propio material.

## Cambiar o quitarla

Seleccione la pieza en la planta o en la vista 3D. Propiedades muestra cada medida que escribió, su etiqueta, X, Y, altura y giro, y cada puerto: su tamaño, sistema, hacia dónde va el flujo y si algo está conectado. Cada cambio es un paso de {{ui:Deshacer}}; los tramos fijos a sus puertos se mueven con ella. {{key:Delete}} la elimina; los tramos que estaban fijos a ella se quedan y la comprobación de conexiones los enumera.

## En el archivo IFC

Cada tipo se guarda como su clase IFC: IfcUnitaryEquipment (manejadora de aire), IfcFan, IfcPump, IfcBoiler (caldera; un calentador de agua es un IfcBoiler de tipo agua con el tipo de objeto "Water heater"), IfcAirTerminalBox (unidad terminal), IfcAirTerminal (difusor, rejilla) e IfcTank, con un tipo compartido por cada pieza del mismo tipo y medidas. Los archivos IFC2X3 usan IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal e IfcFlowStorageDevice con los tipos correspondientes. Cada puerto es un IfcDistributionPort colocado donde está la conexión, orientado hacia afuera, con su dirección de flujo y sistema; otros programas leen qué tramo se conecta a qué puerto. La pieza se une al sistema de cada uno de sus puertos y lleva los conjuntos de elementos de biblioteca que tiene cada elemento colocado.
