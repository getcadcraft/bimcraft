---
title: Unidades split, VRF ha fan coil
summary: Emoĩ unidades interiores de pared, cassette ha con conducto, unidades exteriores single-split ha VRF, uniones refnet ha fan coil de 2 ó 4 caño, cada una con sus conexiones de refrigerante, agua, condensado ha conducto, ha dibujá entre ellas los juegos de líneas dimensionados según una tabla que podés cambiar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, flujo variable de refrigerante, bomba de calor, unidad interior, unidad exterior, unidad condensadora, de pared, pared alta, cassette, con conducto, oculta, fan coil, fcu, 2 caños, 4 caños, refnet, unión de ramal, unión en Y, juego de líneas, lineset, refrigerante, línea de líquido, línea de gas, línea de succión, acr, cobre, condensado, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Mba'épa oñemboguáta

Emoĩ unidades de un sistema split, multi-split ha VRF ha sus fan coils modelo-pe, ha upéi emboguatĩ chupe línea rupi: línea de líquido ha línea de gas de cobre ACR, oñemomboty unidades rembe'ype pe. Unidades ohechakuaáva ojapóva [MEP equipment with ports](topic:mep-equipment) rupi: ko mismo barra, {{ui:Properties}}, puertos ha [connections](topic:mep-connections).

:::note
Ko ha'e ayuda para dibujar ha coordinar. Unidades ha'e formas genéricas dimensionadas según valores ndejehu, ndaha'éi producto de ningún fabricante. Sus tamaños de tubo salen de una tabla de **valores típicos de ejemplo** para equipos R410A ha R32, ndaha'éi de ningún fabricante: manual de instalación del fabricante ohecha tamaño real, ha recorridos largos o diferencias grandes de altura ombyaty. Cambiá la tabla, o escribí los tamaños, para que coincidan con las unidades que usás.
:::

## Emoĩ unidad

1. Emboguatĩ {{ui:Dibujar}}, ejeru {{ui:Compilación}} ha ejecha {{ui:Equipos}}.
2. Eiporu tipo ha emoĩ sus valores:

| Tipo | Ajuste | Sus puertos |
|---|---|---|
| Unidad interior split, de pared | capacidad, línea de líquido ha de gas, largo, profundidad, altura, tamaño de condensado | refrigerante líquido ha gas, desagüe de condensado (en el extremo derecho, cerca de la pared) |
| Unidad interior split, cassette | capacidad, línea de líquido ha de gas, panel, cuerpo, altura, tamaño de condensado | refrigerante líquido ha gas, desagüe de condensado (en un lado, cerca de arriba) |
| Unidad interior split, con conducto | capacidad, línea de líquido ha de gas, largo, ancho, altura, aberturas de impulsión ha retorno, tamaño de condensado | salida de conducto de impulsión, entrada de conducto de retorno, refrigerante líquido ha gas, desagüe de condensado |
| Unidad exterior split | capacidad, línea de líquido ha de gas, ancho, profundidad, altura | refrigerante líquido ha gas (en el lado derecho) |
| Unidad exterior VRF | capacidad, línea de líquido ha de gas, ancho, profundidad, altura | refrigerante líquido ha gas (adelante, abajo) |
| Unión refnet | línea de líquido o de gas, la carga de cada ramal, el tubo en cada extremo | entrada, ramal A, ramal B |
| Unidad fan coil | 2 o 4 caños, largo, ancho, altura, aberturas de impulsión ha retorno, caño y sistema de serpentín, caño de calefacción, tamaño de condensado | salida de conducto de impulsión, entrada de conducto de retorno, serpentín entrada ha salida, calefacción entrada ha salida (4 caños), desagüe de condensado |

3. Ajustá **At**: la altura de la base de la unidad sobre el nivel. La base de una unidad de pared es su parte de abajo (a menudo 2100 mm); la de un cassette es su cara en el cielorraso; la de una unión refnet es la altura de la línea central de su caño.
4. Haga clic donde irá (de {{key:R}} la gira 90°).

**Capacidad** es la capacidad nominal de enfriamiento de la unidad en kW, con Btu/h al lado. Si **Línea de líquido** ha **Línea de gas** quedan en **De la tabla**, las conexiones de la unidad toman los tamaños de la tabla para esa capacidad; elegí un tamaño de tubo para usar el de tu unidad. La entrada de una unión refnet se dimensiona para ambos ramales juntos, y cada ramal para su propia carga.

Los puertos de refrigerante funcionan en ambos sentidos (una bomba de calor corre en cualquier dirección). El desagüe de condensado es un tamaño de caño como cualquier desagüe.

## Dibujá un juego de líneas

1. Elegí dos piezas (mantené {{key:Shift}}+clic en la segunda): una unidad exterior y una interior (split simple), o una unidad exterior y una refnet, una refnet y una interior, o dos refnets (VRF).
2. Abrí {{ui:Compilación}} y elegí {{ui:Juego de líneas}}.

BimCraft dibuja los recorridos de líquido y de gas entre sus puertos libres, saliendo de cada puerto y subiendo a una altura común, en cobre ACR (serpentín recocido hasta 1-5/8 in, tubo estirado por encima), como un solo paso de {{ui:Deshacer}}. Una refnet solo toma su propia línea: entra por su entrada desde el lado exterior y sale por un ramal hacia las unidades interiores. Cada recorrido toma el tamaño de su extremo aguas abajo (la unidad interior, o la entrada de la refnet); si el puerto del otro extremo es de otro tamaño, {{ui:Verificar conexiones}} lo lista: ahí va un reductor. Dos unidades interiores necesitan una refnet entre ellas.

Después podés mover los recorridos como cualquier tramo de caño; sus extremos quedan en los puertos. Los recorridos entre niveles se dibujan con {{ui:Caño}}: un caño que empieza en un puerto de refrigerante toma su sistema, cobre ACR y su tamaño.

## Cambiá la tabla de juegos de líneas

Abrí {{ui:Compilación}} y elegí {{ui:Medidas del juego de líneas}}. Cada fila dice: hasta esta capacidad (kW), este tubo de líquido y este tubo de gas.

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

Son los valores iniciales, típicos. Cambiá una fila, agregá o quitá filas y elegí {{ui:Guardar}}: la tabla queda en el modelo, así todos los que trabajan en el archivo usan la misma, y {{ui:Deshacer}} la vuelve atrás. {{ui:Usar los valores típicos}} repone la tabla inicial. Las piezas ya colocadas mantienen sus puertos hasta que los cambies.

## En el archivo IFC

Las unidades interiores y exteriores de sistemas split y VRF son IfcUnitaryEquipment de tipo SPLITSYSTEM, y el tipo de objeto indica cuál ("Unidad interior split, de pared", "Unidad interior split, cassette de cielorraso", "Unidad interior split, con conducto", "Unidad exterior split", "Unidad exterior VRF"). Un fan coil es IfcUnitaryEquipment de tipo AIRHANDLER con el tipo de objeto "Fan coil unit": IFC4 no tiene tipo para fan coil, y un ventilador, un serpentín y un filtro para un ambiente es lo que describe AIRHANDLER. Una unión refnet es un IfcPipeFitting de tipo JUNCTION ("Refnet joint"). Los archivos IFC2X3 reciben IfcEnergyConversionDevice e IfcFlowFitting con los tipos correspondientes.

Los puertos y recorridos de refrigerante están en sistemas REFRIGERATION (uno para las líneas de líquido, otro para las de gas), y el condensado en un sistema DRAINAGE. Los recorridos ACR se nombran por diámetro exterior. La tabla de juegos de líneas es el conjunto de propiedades CadCraft_HvacLineSets del proyecto.

Ver también [MEP equipment with ports](topic:mep-equipment), [Connect pipes and ducts to equipment](topic:mep-connections) y [Pipes and ducts](topic:pipes-and-ducts).
