---
title: Unidades split, VRF e fan coil
summary: Coloque unidades interiores de parede, de cassette e de conduto, unidades exteriores split e VRF, xuntas refnet e fan coils de 2 ou 4 tubos, cada unha coas súas conexións de refrigerante, auga, condensados e conduto, e debuxe entre elas os xogos de liñas dimensionados segundo unha táboa que pode cambiar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, caudal variable de refrigerante, bomba de calor, unidade interior, unidade exterior, unidade condensadora, montada na parede, parede alta, cassette, con conduto, oculta, fan coil, fcu, 2 tubos, 4 tubos, refnet, xunta de derivación, xunta en Y, xogo de liñas, lineset, refrigerante, liña de líquido, liña de gas, liña de aspiración, acr, cobre, condensados, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Que vai facer

Coloque no modelo as unidades dun sistema split, split múltiple ou VRF e os seus fan coils, e despois únaas con xogos de liñas: unha liña de líquido e unha de gas en cobre ACR, fixadas aos portos das unidades. As unidades funcionan como calquera outra peza de [Equipos MEP con portos](topic:mep-equipment): a mesma barra, Propiedades, portos e [conexións](topic:mep-connections).

:::note
Isto é unha axuda para o debuxo e a coordinación. As unidades son formas xenéricas dimensionadas polos valores que escribe, non produtos dun fabricante. As súas medidas de tubo proceden dunha táboa de **valores típicos de exemplo** para equipos R410A e R32, non de ningún fabricante: o manual de instalación do fabricante da unidade decide as medidas reais, e os tramos longos ou as grandes diferenzas de altura as modifican. Cambie a táboa, ou escriba as medidas, para que coincidan coas unidades que usa.
:::

## Colocar unha unidade

1. Active {{ui:Debuxar}}, abra {{ui:Compilación}} e escolla {{ui:Equipamento}}.
2. Escolla o tipo e defina os seus valores:

| Tipo | Vostede define | Os seus portos |
|---|---|---|
| Unidade interior split, de parede | capacidade, liña de líquido e de gas, lonxitude, fondo, altura, medida do condensado | refrigerante líquido e gas, desaugadoiro de condensados (no extremo dereito, preto da parede) |
| Unidade interior split, de cassette | capacidade, liña de líquido e de gas, panel, corpo, altura, medida do condensado | refrigerante líquido e gas, desaugadoiro de condensados (nun lateral, preto do teito) |
| Unidade interior split, de conduto | capacidade, liña de líquido e de gas, lonxitude, largura, altura, aberturas de impulsión e retorno, medida do condensado | saída de conduto de impulsión, entrada de conduto de retorno, refrigerante líquido e gas, desaugadoiro de condensados |
| Unidade exterior split | capacidade, liña de líquido e de gas, largura, fondo, altura | refrigerante líquido e gas (no lado dereito) |
| Unidade exterior VRF | capacidade, liña de líquido e de gas, largura, fondo, altura | refrigerante líquido e gas (na fronte, abaixo) |
| Xunta refnet | liña de líquido ou de gas, a carga de cada derivación, o tubo de cada extremo | entrada, derivación A, derivación B |
| Fan coil | 2 ou 4 tubos, lonxitude, largura, altura, aberturas de impulsión e retorno, tubo e sistema da batería, tubo de calefacción, medida do condensado | saída de conduto de impulsión, entrada de conduto de retorno, batería entrada e saída, calefacción entrada e saída (4 tubos), desaugadoiro de condensados |

3. Escriba en **A**: a altura da base da unidade sobre o nivel. A base dunha unidade de parede é a súa parte inferior (adoita ser 2100 mm); a dunha cassette é a súa cara no teito; a altura dunha xunta refnet é a altura do centro do seu tubo.
4. Faga clic onde vai a unidade ({{key:R}} xira 90°).

**Capacidade** é a capacidade nominal de refrixeración da unidade en kW, con Btu/h ao lado. Coas opcións **Liña de líquido** e **Liña de gas** en **Da táboa**, as conexións da unidade toman as medidas da táboa para esa capacidade; escolla unha medida de tubo para usar a da súa propia unidade. A entrada dunha xunta refnet dimensiónase para as dúas derivacións xuntas, e cada derivación para a súa propia carga.

Os portos de refrigerante funcionan en ambos sentidos (unha bomba de calor funciona nas dúas direccións). O desaugadoiro de condensados é unha medida de tubo como calquera desaugadoiro.

## Debuxar un xogo de liñas

1. Seleccione dúas pezas ({{key:Shift}}+clic na segunda): unha unidade exterior e unha interior (un split simple), ou unha unidade exterior e unha refnet, unha refnet e unha interior, ou dúas refnet (VRF).
2. Abra {{ui:Compilación}} e escolla {{ui:Xogo de liñas}}.

BimCraft debuxa as liñas de líquido e de gas entre os seus portos libres, saíndo de cada porto e subindo ata unha altura común, en cobre ACR (serpentín recocido ata 1-5/8 in, tubo estirado por riba), como un paso de {{ui:Desfacer}}. Unha refnet só toma a súa propia liña: entra polo seu porto de entrada desde o lado exterior e sae por unha derivación cara ás unidades interiores. Cada tramo toma a medida do seu extremo aguas abaixo (a unidade interior, ou a entrada da refnet); cando o porto do outro extremo ten outra medida, {{ui:Comprobar conexións}} o indica: aí vai un reductor. Dúas unidades interiores precisan unha refnet entre elas.

Mova os tramos despois como calquera tramo de tubaxe; os seus extremos seguen nos portos. Os tramos entre niveis debúxanse con {{ui:Tubaxe}}: unha tubaxe iniciada nun porto de refrigerante toma o seu sistema, o cobre ACR e a súa medida.

## Cambiar a táboa de xogos de liñas

Abra {{ui:Compilación}} e escolla {{ui:Tamaños do xogo de liñas}}. Cada fila indica: ata esta capacidade (kW), este tubo de líquido e este tubo de gas.

| Ata | Líquido | Gas |
|---|---|---|
| 2,8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5,6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22,4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Estes son os valores iniciais, típicos. Cambie unha fila, engada ou elimine filas e escolla {{ui:Gardar}}: a táboa gárdase no modelo, para que todos os que traballan no ficheiro a usen, e {{ui:Desfacer}} a devolve ao estado anterior. {{ui:Usar os valores típicos}} restaura a táboa inicial. As pezas xa colocadas conservan os seus portos ata que os cambie.

## No ficheiro IFC

As unidades interiores e exteriores dos sistemas split e VRF son IfcUnitaryEquipment de tipo SPLITSYSTEM, e o tipo de obxecto indica cal: "Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit" ou "VRF outdoor unit". Un fan coil é un IfcUnitaryEquipment de tipo AIRHANDLER co tipo de obxecto "Fan coil unit": IFC4 non ten un tipo de fan coil, e un ventilador, unha batería e un filtro para unha habitación é o que describe AIRHANDLER. Unha xunta refnet é un IfcPipeFitting de tipo JUNCTION ("Refnet joint"). Os ficheiros IFC2X3 reciben IfcEnergyConversionDevice e IfcFlowFitting cos tipos correspondentes.

Os portos e tramos de refrigerante están en sistemas REFRIGERATION (un para as liñas de líquido e outro para as de gas), e os condensados nun sistema DRAINAGE. Os tramos ACR nómanse polo diámetro exterior. A táboa de xogos de liñas é o conxunto de propiedades CadCraft_HvacLineSets do proxecto.

Consulte tamén [Equipos MEP con portos](topic:mep-equipment), [Conectar tubos e condutos aos equipos](topic:mep-connections) e [Tubos e condutos](topic:pipes-and-ducts).
