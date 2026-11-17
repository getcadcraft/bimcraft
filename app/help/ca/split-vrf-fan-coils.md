---
title: Unitats split, VRF i fan coil
summary: Col·loqueu unitats interiors murals, de cassette i de conductes, unitats exteriors split i VRF, unions refnet i fan coils de 2 o 4 tubs, cadascun amb les seves connexions de refrigerant, aigua, condensat i conductes, i dibuixeu entre elles els line sets, dimensionats a partir d'una taula que podeu canviar.
keywords: split, mini split, minisplit, multi split, vrf, vrv, flux de refrigerant variable, bomba de calor, unitat interior, unitat exterior, unitat condensadora, muntada a la paret, paret alta, cassette, amb conductes, ocult, fan coil, fcu, 2-pipe, 4-pipe, refnet, unió de derivació, unió en Y, line set, lineset, refrigerant, línia de líquid, línia de gas, línia d'aspiració, acr, coure, condensat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Què hi fareu

Col·loqueu al model les unitats d'un sistema split, multi split o VRF i els seus fan coils, i després uniu-les amb line sets: una línia de líquid i una de gas en coure ACR, fixades als ports de les unitats. Les unitats funcionen com qualsevol altra peça de [Equips MEP amb ports](topic:mep-equipment): la mateixa barra, {{ui:Propietats}}, els mateixos ports i les mateixes [connexions](topic:mep-connections).

:::note
Es tracta d'una eina de delineació i de coordinació. Les unitats són formes genèriques dimensionades pels valors que escriviu, no productes d'un fabricant concret. Les seves mides de tub surten d'una taula de **valors típics d'exemple** per a equips R410A i R32, no de cap fabricant: el manual d'instal·lació del fabricant de la unitat decideix les mides reals, i els recorreguts llargs o els grans desnivells les canvien. Canvieu la taula, o escriviu les mides, perquè coincideixin amb les unitats que feu servir.
:::

## Col·loca una unitat

1. Activeu {{ui:Dibuixa}}, obriu {{ui:Compilació}} i trieu {{ui:Equipament}}.
2. Trieu el tipus i definiu-ne els valors:

| Tipus | Definiu | Els seus ports |
|---|---|---|
| Unitat interior split, mural | capacitat, línia de líquid i de gas, longitud, fondària, alçada, mida del condensat | refrigerant de líquid i de gas, desguàs del condensat (a l'extrem dret, a prop de la paret) |
| Unitat interior split, cassette | capacitat, línia de líquid i de gas, panell, cos, alçada, mida del condensat | refrigerant de líquid i de gas, desguàs del condensat (a un costat, a prop de dalt) |
| Unitat interior split, de conductes | capacitat, línia de líquid i de gas, longitud, amplada, alçada, obertures d'impulsió i de retorn, mida del condensat | sortida d'impulsió, entrada de retorn, refrigerant de líquid i de gas, desguàs del condensat |
| Unitat exterior split | capacitat, línia de líquid i de gas, amplada, fondària, alçada | refrigerant de líquid i de gas (a la dreta) |
| Unitat exterior VRF | capacitat, línia de líquid i de gas, amplada, fondària, alçada | refrigerant de líquid i de gas (davant, a baix) |
| Unió refnet | línia de líquid o de gas, la càrrega de cada derivació, el tub a cada extrem | entrada, derivació A, derivació B |
| Fan coil | 2 o 4 tubs, longitud, amplada, alçada, obertures d'impulsió i de retorn, tub i sistema de la batería, tub de calefacció, mida del condensat | sortida d'impulsió, entrada de retorn, entrada i sortida de la batería, entrada i sortida de calefacció (4 tubs), desguàs del condensat |

3. Definiu **A**: l'alçada de la base de la unitat sobre el nivell. La base d'una unitat de paret és la seva cara inferior (sovint 2100 mm); la d'un cassette, la seva cara al sostre; la d'una unió refnet, l'alçada de l'eix central del seu tub.
4. Feu clic on ha d'anar ({{key:R}} la gira 90°).

**Capacitat** és la capacitat nominal de refrigeració de la unitat en kW, amb Btu/h al costat. Amb **Línia de líquid** i **Línia de gas** deixades a **De la taula**, les connexions de la unitat prenen les mides de la taula per a aquella capacitat; trieu una mida de tub per fer servir la de la vostra unitat. L'entrada d'una refnet es dimensiona per a les dues derivacions juntes, i cada derivació per a la seva pròpia càrrega.

Els ports de refrigerant funcionen en els dos sentits (una bomba de calor pot funcionar en qualsevol direcció). El desguàs del condensat és una mida de tub com qualsevol desguàs.

## Dibuixa un line set

1. Trieu dues peces ({{key:Shift}}+clic a la segona): una unitat exterior i una d'interior (un split simple), o una unitat exterior i una refnet, una refnet i una unitat interior, o dues refnets (VRF).
2. Obriu {{ui:Compilació}} i trieu {{ui:Line set}}.

BimCraft dibuixa les línies de líquid i de gas entre els seus ports lliures, sortint de cada port i pujant fins a una alçada comuna, en coure ACR (rotllo recuit fins a 1-5/8 in, tub estirat per sobre), com a un sol pas de {{ui:Desfés}}. Una refnet només agafa la seva pròpia línia: entra pel seu port d'entrada des del costat exterior i surt per una derivació cap a les unitats interiors. Cada tram pren la mida del seu extrem aigües avall (la unitat interior, o l'entrada de la refnet); quan el port de l'altre extrem és d'una altra mida, {{ui:Revisa les connexions}} ho indica: aquí va un reductor. Dues unitats interiors necessiten una refnet entre elles.

Després, mogueu els trams com qualsevol tram de tub; els seus extrems es mantenen als ports. Els trams entre nivells es dibuixen amb {{ui:Tub}}: un tub iniciat a un port de refrigerant pren el seu sistema, el coure ACR i la seva mida.

## Canvia la taula de line sets

Obriu {{ui:Compilació}} i trieu {{ui:Mides de les línies de connexió}}. Cada fila diu: fins a aquesta capacitat (kW), aquest tub de líquid i aquest tub de gas.

| Fins a | Líquid | Gas |
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

Són els valors inicials, típics. Canvieu una fila, afegiu-ne o suprimiu-ne, i trieu {{ui:Desa}}: la taula es guarda al model, perquè tothom que treballi amb el fitxer faci servir la mateixa, i {{ui:Desfés}} la desfà. {{ui:Feu servir els valors típics}} torna a posar la taula inicial. Les peces ja col·locades mantenen els seus ports fins que els canvieu.

## Al fitxer IFC

Les unitats interiors i exteriors dels sistemes split i VRF són IfcUnitaryEquipment de tipus SPLITSYSTEM, i el tipus d'objecte indica quina és ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Un fan coil és IfcUnitaryEquipment de tipus AIRHANDLER amb el tipus d'objecte "Fan coil unit": IFC4 no té cap tipus de fan coil, i un ventilador, una batería i un filtre per a una estança és el que descriu AIRHANDLER. Una unió refnet és un IfcPipeFitting de tipus JUNCTION ("Refnet joint"). Els fitxers IFC2X3 reben IfcEnergyConversionDevice i IfcFlowFitting amb els tipus corresponents.

Els ports i els trams de refrigerant són als sistemes REFRIGERATION (un per a les línies de líquid, un per a les de gas), i el condensat, en un sistema DRAINAGE. Els trams ACR es nomenen pel diàmetre exterior. La taula de line sets és el conjunt de propietats CadCraft_HvacLineSets del projecte.

Vegeu també [Equips MEP amb ports](topic:mep-equipment), [Connexió de tubs i conductes als equips](topic:mep-connections) i [Tubs i conductes](topic:pipes-and-ducts).
