---
title: Equipos MEP con puertos
summary: Emoĩ manejadora de aire, ventilador, bomba, caldera, calentador de agua, unidad terminal, difusor, rejilla ha tanque genérico, tamaño omoĩva nde ndive, peteĩteĩ conexión caño ha conducto ndive oikeva.
keywords: mep, equipo, manejadora de aire, ahu, ventilador, ventilador en línea, bomba, caldera, calentador de agua, unidad terminal, vav, difusor, rejilla, registro, tanque, puerto, puertos, conexión, boquilla, tamaño de cuello, hvac, sanitario, mecánico, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Mba'épa rejapóta

Emoĩ equipo caño ha conducto-kuéra pungue-pe. Peteĩteĩ ha'e forma genérica tamaño omoĩva nde ndive, conexión **puerto** rupi: mávape caño térã conducto ojoavaʼẽ, mba'e sistema, mba'éichapa ojoko ha tamaño. Caño ha conducto puerto gui ojapóva ohupi tamaño ha sistema ha oĩ fijo: ehecha [Conectá caños y conductos a equipos](topic:mep-connections).

:::note
Ko ha'e borrador ha coordinación tembiguái, ingeniero ojapo tamaño. Equipo ndaha'éi fabricante producto: ndaipóri capacidad, peso térã fabricante conexión tamaño. Fabricante modelo MEP programa gui IFC-pe reikotevẽ rire ejeru.
:::

## Peteĩ pieza omoĩ

1. Emoĩ {{ui:Dibujar}}, ejepyta {{ui:Compilación}} ha eiporavo {{ui:Equipos}}.
2. Barra-pe eiporavo tipo ha emoĩ tamaño. Peteĩteĩ tipo oikotevẽ hendape:

| Tipo | Emoĩ | Puertos |
|---|---|---|
| Manejadora de aire | largo, ancho, alto; suministro ha retorno abertura; serpentín caño tamaño ha sistema; condensado tamaño | suministro conducto salida, retorno conducto entrada, serpentín entrada ha salida, condensado desagüe |
| Ventilador en línea | diámetro, largo, sistema | conducto entrada ha salida |
| Bomba | caño tamaño, sistema | entrada ha salida |
| Caldera | largo, ancho, alto, caño tamaño, gas tamaño, chimenea diámetro | calefacción suministro salida ha retorno entrada, gas entrada, chimenea salida |
| Calentador de agua | diámetro, alto, caño tamaño, gas térã eléctrico | agua fría entrada, agua caliente salida (gas entrada ha chimenea gas-pe ojekuaáramo) |
| Unidad terminal | largo, ancho, alto, redondo entrada, salida ancho ha alto | aire suministro entrada ha salida |
| Difusor | cara, cuello, sistema | iñeck (aire entrada) |
| Rejilla | cara ancho ha alto, cuello ancho ha alto, sistema | iñeck (aire salida retorno térã escape conducto-pe) |
| Tanque | diámetro, alto, caño tamaño, sistema | entrada arriba, salida abajo cerca |
| Radiador | largo, alto, profundidad, caño tamaño, sistema | flujo entrada extremo arriba, retorno salida extremo abajo |
| Convector / calefactor de panel | largo, alto, profundidad, caño tamaño, sistema | flujo entrada extremo peteĩ, retorno salida ambue |
| Familia de fabricante | familia (ehecha [Especificaciones de caños, válvulas, compuertas y familias de fabricantes](topic:pipe-specs)) | familia omoĩ puertos |

3. Emoĩ **En**, base altura nivel-gui. Difusor térã rejilla altura ha'e cara: emoĩ techo altura.
4. Emoĩ **Etiqueta** emoʼẽramo (`AHU-1`); mávape upe tipo peteĩ oguerekóva ohupi upe mboyve número.
5. Eru punteru plano-pe: huella ha puertos ohupi. Ejepyta {{key:R}} 90° ojekuaa hag̃ua. Ejepyta oĩ hag̃ua.

Caño tamaño ha'e acero caño tamaño (ASME B36.10M). Bomba gui ambue material-pe ojapóva ohupi nominal tamaño pe material-pe.

## Ojejapo térã ejejuka

Eiporavo plano-pe térã 3D vista-pe. Propiedades ohechauka opa tamaño emoĩva, etiqueta, X, Y, altura ha giro, ha peteĩteĩ puerto: tamaño, sistema, caudal mbohapy, ha mávapa oñemoĩva. Peteĩteĩ jejapo oĩ peteĩ paso {{ui:Deshacer}}; puerto-gui fijo ruta oho nendive. {{key:Delete}} oñemboguejy; puerto-gui fijo ruta oĩ ha Conexiones revisión ohechauka.

## IFC archivo-pe

Peteĩteĩ tipo IFC clase-pe oñeñongatu: IfcUnitaryEquipment (manejadora de aire), IfcFan, IfcPump, IfcBoiler (caldera; calentador de agua ha'e IfcBoiler tipo agua objeto tipo "Water heater"), IfcAirTerminalBox (unidad terminal), IfcAirTerminal (difusor, rejilla) ha IfcTank, tipo compartido peteĩ kuimba'e mboyve. IFC2X3 archivo-pe oguerekóta IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal ha IfcFlowStorageDevice tipo ndive. Peteĩteĩ puerto ha'e IfcDistributionPort conexión oĩhápe, salida mboyve, caudal dirección ha sistema ndive; ambue programa kuéra oikuaa mava ruta puerto ojoavaʼẽ. Pieza oike peteĩteĩ puerto sistema-pe ha oguereko biblioteca ítem conjunto oĩva.
