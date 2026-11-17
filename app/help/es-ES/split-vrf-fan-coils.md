---
title: Unidades split, VRF y fan coil
summary: Coloque unidades interiores de pared, de cassette y de conducto, unidades exteriores split y VRF, juntas refnet y fan coils de 2 o 4 tubos, cada una con sus conexiones de refrigerante, agua, condensados y conductos, y dibuje entre ellas las líneas frigoríficas dimensionadas según una tabla que puede cambiar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, caudal de refrigerante variable, bomba de calor, unidad interior, unidad exterior, unidad condensadora, montaje en pared, pared alta, cassette, de conducto, empotrada, fan coil, fcu, 2 tubos, 4 tubos, refnet, junta de derivación, junta en Y, línea frigorífica, lineset, refrigerante, línea de líquido, línea de gas, línea de aspiración, acr, cobre, condensados, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Qué hará

Coloque las unidades de un sistema split, multi-split o VRF y sus fan coils en el modelo, y después únalas con líneas frigoríficas: una de líquido y otra de gas en cobre ACR, fijadas a los puertos de las unidades. Las unidades funcionan como cualquier otra pieza de [Equipos MEP con puertos](topic:mep-equipment): la misma barra, Propiedades, puertos y [conexiones](topic:mep-connections).

:::note
Esta es una ayuda para el dibujo y la coordinación. Las unidades son formas genéricas dimensionadas con los valores que escriba, no productos de un fabricante. Sus diámetros de tubo proceden de una tabla de **valores típicos de ejemplo** para equipos de R410A y R32, no de ningún fabricante: el manual de instalación del fabricante de la unidad determina las medidas reales, y los tramos largos o las grandes diferencias de altura las modifican. Cambie la tabla, o escriba las medidas, para ajustarlas a las unidades que utiliza.
:::

## Colocar una unidad

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Equipos}}.
2. Elija el tipo y ajuste sus valores:

| Tipo | Usted ajusta | Sus puertos |
|---|---|---|
| Unidad interior split, de pared | capacidad, línea de líquido y de gas, longitud, profundidad, altura, tamaño de condensados | refrigerante de líquido y gas, desagüe de condensados (en el extremo derecho, junto a la pared) |
| Unidad interior split, cassette | capacidad, línea de líquido y de gas, panel, cuerpo, altura, tamaño de condensados | refrigerante de líquido y gas, desagüe de condensados (en un lateral, cerca de la parte superior) |
| Unidad interior split, de conducto | capacidad, línea de líquido y de gas, longitud, anchura, altura, aberturas de impulsión y retorno, tamaño de condensados | salida de conducto de impulsión, entrada de conducto de retorno, refrigerante de líquido y gas, desagüe de condensados |
| Unidad exterior split | capacidad, línea de líquido y de gas, anchura, profundidad, altura | refrigerante de líquido y gas (en el lateral derecho) |
| Unidad exterior VRF | capacidad, línea de líquido y de gas, anchura, profundidad, altura | refrigerante de líquido y gas (en la parte frontal, baja) |
| Junta refnet | línea de líquido o de gas, la carga de cada derivación, el tubo en cada extremo | entrada, derivación A, derivación B |
| Fan coil | 2 o 4 tubos, longitud, anchura, altura, aberturas de impulsión y retorno, tubo y sistema de la batería, tubo de calefacción, tamaño de condensados | salida de conducto de impulsión, entrada de conducto de retorno, entrada y salida de batería, entrada y salida de calefacción (4 tubos), desagüe de condensados |

3. Ajuste **A**: la altura de la base de la unidad sobre el nivel. La base de una unidad de pared es su parte inferior (a menudo 2100 mm); la de un cassette es su cara en el techo; la de una refnet es la altura del eje de su tubo.
4. Haga clic donde irá ({{key:R}} la gira 90°).

**Capacidad** es la capacidad nominal de refrigeración de la unidad en kW, con Btu/h junto a ella. Con **Línea de líquido** y **Línea de gas** en **Desde la tabla**, las conexiones de la unidad toman los tamaños de la tabla para esa capacidad; elija un tamaño de tubo para usar el de su propia unidad. La entrada de una refnet se dimensiona para ambas derivaciones juntas, y cada derivación para su propia carga.

Los puertos de refrigerante funcionan en los dos sentidos (una bomba de calor puede funcionar en cualquiera de ellos). El desagüe de condensados es un tamaño de tubería como cualquier desagüe.

## Dibujar una línea frigorífica

1. Seleccione dos piezas (mantenga pulsado {{key:Shift}} y haga clic en la segunda): una unidad exterior y una interior (un split simple), o una unidad exterior y una refnet, una refnet y una unidad interior, o dos refnets (VRF).
2. Abra {{ui:Compilación}} y elija {{ui:Línea frigorífica}}.

BimCraft dibuja los tramos de líquido y de gas entre sus puertos libres, saliendo de cada puerto y subiendo hasta una altura común, en cobre ACR (tubo recocido hasta 1-5/8 in, tubo rígido por encima), como un solo paso de {{ui:Deshacer}}. Una refnet solo toma su propia línea: entra por su entrada desde el lado exterior y sale por una derivación hacia las unidades interiores. Cada tramo toma el tamaño de su extremo aguas abajo (la unidad interior o la entrada de la refnet); cuando el puerto del otro extremo tiene otro tamaño, {{ui:Comprobar conexiones}} lo indica: ahí es donde va un reductor. Dos unidades interiores necesitan una refnet entre ellas.

Mueva después los tramos como cualquier tramo de tubería; sus extremos permanecen en los puertos. Los tramos entre niveles se dibujan con {{ui:Tubería}}: una tubería que empieza en un puerto de refrigerante toma su sistema, el cobre ACR y su tamaño.

## Cambiar la tabla de líneas frigoríficas

Abra {{ui:Compilación}} y elija {{ui:Tamaños de línea frigorífica}}. Cada fila indica: hasta esta capacidad (kW), este tubo de líquido y este tubo de gas.

| Hasta | Líquido | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Estos son los valores iniciales y típicos. Cambie una fila, añada o quite filas y elija {{ui:Guardar}}: la tabla se guarda en el modelo, así que todos los que trabajan en el archivo la usan, y {{ui:Deshacer}} la devuelve a su estado anterior. {{ui:Usar los valores típicos}} restaura la tabla inicial. Las piezas ya colocadas conservan sus puertos hasta que los cambie.

## En el archivo IFC

Las unidades interiores y exteriores de los sistemas split y VRF son IfcUnitaryEquipment de tipo SPLITSYSTEM, y el tipo de objeto indica cuál ("Unidad interior split, de pared", "Unidad interior split, cassette de techo", "Unidad interior split, de conducto", "Unidad exterior split", "Unidad exterior VRF"). Un fan coil es un IfcUnitaryEquipment de tipo AIRHANDLER con el tipo de objeto "Fan coil": IFC4 no tiene tipo de fan coil, y un ventilador, una batería y un filtro para una sola sala es lo que describe AIRHANDLER. Una junta refnet es un IfcPipeFitting de tipo JUNCTION ("Junta refnet"). Los archivos IFC2X3 reciben IfcEnergyConversionDevice e IfcFlowFitting con los tipos correspondientes.

Los puertos y tramos de refrigerante están en sistemas REFRIGERATION (uno para las líneas de líquido y otro para las de gas), y los condensados en un sistema DRAINAGE. Los tramos ACR se nombran por su diámetro exterior. La tabla de líneas frigoríficas es el conjunto de propiedades CadCraft_HvacLineSets del proyecto.

Consulte también [Equipos MEP con puertos](topic:mep-equipment), [Conectar tuberías y conductos a equipos](topic:mep-connections) y [Tuberías y conductos](topic:pipes-and-ducts).
