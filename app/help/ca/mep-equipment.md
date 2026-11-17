---
title: Equips MEP amb ports
summary: Col·loca unitats generals de tractament d'aire, ventiladors, bombes, calderes, escalfadors d'aigua, unitats terminals, difusors, reixes i dipòsits dimensionats pels valors que escriviu, cadascun amb les connexions de canonada i conducte a les quals s'uneixen altres trams.
keywords: mep, equip, unitat de tractament d'aire, ahu, ventilador, ventilador en línia, bomba, caldera, escalfador d'aigua, unitat terminal, vav, difusor, reixa, registre, dipòsit, port, ports, connexió, broquet, mida del coll, hvac, fontaneria, mecànica, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Què faràs

Poseu els equips als extrems de les canonades i conductes. Cada peça és una forma genèrica dimensionada pels valors que escriviu, amb les seves connexions com a **ports**: on s'uneix una canonada o conducte, quin sistema, quin sentit du el flux, i quina mida. Les canonades i conductes dibuixats des d'un port prenen la seva mida i sistema i queden fixats a ell: vegeu [Connecta canonades i conductes als equips](topic:mep-connections).

:::note
Això és una eina de dibuix i coordinació, dimensionada per un enginyer. L'equip no és un producte de cap fabricant: no hi ha capacitats, pesos ni mides de connexió de fabricants. Porteu un model del fabricant des del vostre programa MEP com a IFC quan el necessiteu.
:::

## Col·loca una peça

1. Activeu {{ui:Dibuixa}}, obriu {{ui:Compilació}} i trieu {{ui:Equipament}}.
2. A la barra, trieu el tipus i escriviu-ne les mides. Cada tipus demana les seves:

| Tipus | Escriviu | Els seus ports |
|---|---|---|
| Unitat de tractament d'aire | longitud, amplada, alçada; obertures d'impulsió i retorn; mida i sistema de la canonada del serpentí; mida del desguàs de condensats | conducte d'impulsió de sortida, conducte de retorn d'entrada, entrada i sortida del serpentí, desguàs de condensats |
| Ventilador en línia | diàmetre, longitud, sistema | conducte d'entrada i de sortida |
| Bomba | mida de la canonada, sistema | entrada i sortida |
| Caldera | longitud, amplada, alçada, mida de la canonada, mida del gas, diàmetre del conducte de fums | impulsió de calefacció de sortida i retorn d'entrada, gas d'entrada, fums de sortida |
| Escalfador d'aigua | diàmetre, alçada, mida de la canonada, gas o elèctric | aigua freda d'entrada, aigua calenta de sortida (i gas d'entrada i un conducte de fums quan crema gas) |
| Unitat terminal | longitud, amplada, alçada, entrada rodona, amplada i alçada de sortida | aire d'impulsió d'entrada i de sortida |
| Difusor | cara, coll, sistema | el seu coll (aire d'entrada) |
| Reixa | amplada i alçada de la cara, amplada i alçada del coll, sistema | el seu coll (aire de sortida cap al conducte de retorn o d'extracció) |
| Dipòsit | diàmetre, alçada, mida de la canonada, sistema | entrada a la part superior, sortida prop del fons |
| Radiador | longitud, alçada, profunditat, mida de la canonada, sistema | impulsió d'entrada a la part superior d'un extrem, retorn de sortida a la part inferior de l'altre |
| Convector / radiador de panell | longitud, alçada, profunditat, mida de la canonada, sistema | impulsió d'entrada en un extrem, retorn de sortida a l'altre |
| Família de fabricant | la família (vegeu [Especificacions de canonades, vàlvules, comportes i famílies de fabricants](topic:pipe-specs)) | els ports que li ha donat la seva família |

3. Definiu **A**, l'alçada de la seva base sobre el nivell. L'alçada d'un difusor o d'una reixa és la seva cara: escriviu l'alçada del sostre.
4. Escriviu una **Etiqueta** si la voleu (`AHU-1`); la següent peça del mateix tipus rep el número següent.
5. Moveu el punter sobre la planta: la petjada i els seus ports el segueixen. Premeu {{key:R}} per girar-lo 90°. Cliqueu on ha d'anar.

Les mides de canonada són mides de canonada d'acer (ASME B36.10M). Una canonada dibuixada des d'una bomba en un altre material pren la mateixa mida nominal en el seu propi material.

## Canvia-la o suprimeix-la

Seleccioneu-la a la planta o a la vista 3D. Propietats mostra totes les mides que heu escrit, la seva etiqueta, X, Y, alçada i gir, i cada port: la seva mida, el sistema, el sentit del flux, i si hi ha alguna cosa connectada. Cada canvi és un pas de {{ui:Desfés}}; els trams fixats als seus ports es mouen amb ella. {{key:Delete}} la suprimeix; els trams que hi estaven fixats es queden i la comprovació de connexions els llista.

## Al fitxer IFC

Cada tipus es desa com la seva classe IFC: IfcUnitaryEquipment (unitat de tractament d'aire), IfcFan, IfcPump, IfcBoiler (caldera; un escalfador d'aigua és un IfcBoiler de tipus aigua amb el tipus d'objecte "Water heater"), IfcAirTerminalBox (unitat terminal), IfcAirTerminal (difusor, reixa) i IfcTank, amb un tipus compartit per cada peça del mateix tipus i mides. Els fitxers IFC2X3 reben IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal i IfcFlowStorageDevice amb els tipus corresponents. Cada port és un IfcDistributionPort situat on és la connexió, orientat cap a fora, amb el seu sentit de flux i sistema; altres programes llegeixen quin tram s'uneix a quin port. La peça s'uneix al sistema de cadascun dels seus ports i porta els conjunts de propietats d'element de biblioteca que té cada element col·locat de la biblioteca.
