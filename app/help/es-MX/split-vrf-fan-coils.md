---
title: Unidades split, VRF y fan coil
summary: Coloque unidades interiores de muro, cassette y por conductos, unidades exteriores split y VRF, juntas refnet y fan coils de 2 o 4 tubos, cada una con sus conexiones de refrigerante, agua, condensado y conductos, y dibuje entre ellas los juegos de líneas dimensionados con una tabla que usted puede cambiar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, flujo variable de refrigerante, bomba de calor, unidad interior, unidad exterior, unidad condensadora, montaje en muro, muro alto, cassette, por conductos, oculta, fan coil, fcu, 2 tubos, 4 tubos, refnet, junta de derivación, junta en Y, juego de líneas, lineset, refrigerante, línea de líquido, línea de gas, línea de succión, acr, cobre, condensado, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Qué hará

Coloque en el modelo las unidades de un sistema split, multi-split o VRF y sus fan coils, y después únalas con juegos de líneas: una línea de líquido y una de gas en cobre ACR, fijadas a los puertos de las unidades. Las unidades funcionan como cualquier otra pieza de [Equipos MEP con puertos](topic:mep-equipment): la misma barra, Propiedades, puertos y [conexiones](topic:mep-connections).

:::note
Esta es una ayuda de dibujo y coordinación. Las unidades son formas genéricas con medidas que usted escribe, no productos de un fabricante. Sus medidas de tubo provienen de una tabla de **valores típicos de ejemplo** para equipos R410A y R32, no de ningún fabricante: el manual de instalación del fabricante de la unidad determina las medidas reales, y los tramos largos o las grandes diferencias de altura las cambian. Cambie la tabla, o escriba las medidas, para que coincidan con las unidades que usted usa.
:::

## Colocar una unidad

1. Active {{ui:Dibujo}}, abra {{ui:Compilación}} y elija {{ui:Equipos}}.
2. Elija el tipo y defina sus valores:

| Tipo | Usted define | Sus puertos |
|---|---|---|
| Unidad interior split, de muro | capacidad, línea de líquido y de gas, longitud, profundidad, altura, medida del condensado | refrigerante de líquido y gas, desagüe de condensado (en el extremo derecho, junto al muro) |
| Unidad interior split, cassette | capacidad, línea de líquido y de gas, panel, cuerpo, altura, medida del condensado | refrigerante de líquido y gas, desagüe de condensado (en un costado, cerca de la parte superior) |
| Unidad interior split, por conductos | capacidad, línea de líquido y de gas, longitud, ancho, altura, aberturas de suministro y retorno, medida del condensado | salida de conducto de suministro, entrada de conducto de retorno, refrigerante de líquido y gas, desagüe de condensado |
| Unidad exterior split | capacidad, línea de líquido y de gas, ancho, profundidad, altura | refrigerante de líquido y gas (en el costado derecho) |
| Unidad exterior VRF | capacidad, línea de líquido y de gas, ancho, profundidad, altura | refrigerante de líquido y gas (al frente, en la parte baja) |
| Junta refnet | línea de líquido o de gas, la carga de cada derivación, el tubo de cada extremo | entrada, derivación A, derivación B |
| Fan coil | 2 o 4 tubos, longitud, ancho, altura, aberturas de suministro y retorno, tubo y sistema del serpentín, tubo de calefacción, medida del condensado | salida de conducto de suministro, entrada de conducto de retorno, entrada y salida del serpentín, entrada y salida de calefacción (4 tubos), desagüe de condensado |

3. Defina **Altura**: la altura de la base de la unidad sobre el nivel. La base de una unidad de muro es su parte inferior (a menudo 2100 mm); la de un cassette es su cara en el techo; la de una junta refnet es la altura de la línea central de su tubo.
4. Haga clic donde irá ({{key:R}} la gira 90°).

**Capacidad** es la capacidad nominal de enfriamiento de la unidad en kW, con Btu/h junto a ella. Si **Línea de líquido** y **Línea de gas** se dejan en **De la tabla**, las conexiones de la unidad toman las medidas de la tabla para esa capacidad; elija una medida de tubo para usar la de su propia unidad. La entrada de una junta refnet se dimensiona para ambas derivaciones juntas, y cada derivación para su propia carga.

Los puertos de refrigerante funcionan en ambos sentidos (una bomba de calor puede operar en cualquier dirección). El desagüe de condensado es una medida de tubo como cualquier otro desagüe.

## Dibujar un juego de líneas

1. Elija dos piezas ({{key:Shift}}+clic en la segunda): una unidad exterior y una interior (un split sencillo), o una unidad exterior y una junta refnet, una junta refnet y una unidad interior, o dos juntas refnet (VRF).
2. Abra {{ui:Compilación}} y elija {{ui:Juego de líneas}}.

BimCraft dibuja los tramos de líquido y de gas entre sus puertos libres, saliendo de cada puerto y subiendo hasta una altura común, en cobre ACR (serpentín recocido hasta 1-5/8 in, tubo estirado por encima), como un solo paso de {{ui:Deshacer}}. Una junta refnet sólo recibe su propia línea: entra por su entrada desde el lado exterior y sale por una derivación hacia las unidades interiores. Cada tramo toma la medida de su extremo aguas abajo (la unidad interior o la entrada de la junta refnet). Cuando el puerto del otro extremo es de otra medida, {{ui:Revisar conexiones}} lo indica: ahí va una reducción. Dos unidades interiores necesitan una junta refnet entre ellas.

Mueva los tramos después como cualquier tramo de tubería; sus extremos permanecen en los puertos. Los tramos entre niveles se dibujan con {{ui:Tubería}}: una tubería iniciada en un puerto de refrigerante toma su sistema, el cobre ACR y su medida.

## Cambiar la tabla de juegos de líneas

Abra {{ui:Compilación}} y elija {{ui:Medidas de líneas}}. Cada fila indica: hasta esta capacidad (kW), este tubo de líquido y este tubo de gas.

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

Estos son los valores típicos de inicio. Cambie una fila, agregue o quite filas y elija {{ui:Guardar}}: la tabla se guarda en el modelo, para que todas las personas que trabajen en el archivo la usen, y {{ui:Deshacer}} la revierte. {{ui:Usar los valores típicos}} restablece la tabla inicial. Las piezas ya colocadas conservan sus puertos hasta que usted los cambie.

## En el archivo IFC

Las unidades interiores y exteriores de los sistemas split y VRF son IfcUnitaryEquipment de tipo SPLITSYSTEM, y el tipo de objeto indica cuál ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Un fan coil es un IfcUnitaryEquipment de tipo AIRHANDLER con el tipo de objeto "Fan coil unit": IFC4 no tiene un tipo para fan coil, y un ventilador, un serpentín y un filtro para un mismo local es lo que describe AIRHANDLER. Una junta refnet es un IfcPipeFitting de tipo JUNCTION ("Refnet joint"). Los archivos IFC2X3 reciben IfcEnergyConversionDevice e IfcFlowFitting con los tipos correspondientes.

Los puertos y tramos de refrigerante están en sistemas REFRIGERATION (uno para las líneas de líquido y otro para las de gas), y el condensado en un sistema DRAINAGE. Los tramos ACR se nombran por su diámetro exterior. La tabla de juegos de líneas es el conjunto de propiedades CadCraft_HvacLineSets en el proyecto.

Vea también [Equipos MEP con puertos](topic:mep-equipment), [Conectar tuberías y conductos a equipos](topic:mep-connections) y [Tuberías y conductos](topic:pipes-and-ducts).
