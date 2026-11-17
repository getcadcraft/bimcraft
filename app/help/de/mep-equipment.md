---
title: MEP-Ausstattung mit Anschlüssen
summary: Allgemeine RLT-Geräte, Ventilatoren, Pumpen, Heizkessel, Warmwasserbereiter, Endgeräte, Auslässe, Gitter und Behälter platzieren, deren Größe Sie eingeben, jeweils mit den Rohr- und Luftkanalanschlüssen, an die andere Führungen angeschlossen werden.
keywords: mep, Ausstattung, RLT-Gerät, Lüftungsgerät, Ventilator, Rohrventilator, Pumpe, Heizkessel, Warmwasserbereiter, Endgerät, VAV, Auslass, Gitter, Register, Behälter, Anschluss, Anschlüsse, Verbindung, Stutzen, Halsgröße, hlk, sanitär, technische Gebäudeausrüstung, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Was Sie tun

Setzen Sie die Ausstattung an die Enden Ihrer Rohre und Luftkanäle. Jedes Stück ist eine allgemeine Form, deren Größe Sie eingeben, mit seinen Verbindungen als **Anschlüsse**: wo ein Rohr oder Luftkanal ansetzt, welches System, in welche Richtung der Durchfluss geht und welche Größe. Rohre und Luftkanäle, die von einem Anschluss aus gezeichnet werden, übernehmen dessen Größe und System und bleiben daran fest: siehe [Rohre und Luftkanäle an Ausstattung anschließen](topic:mep-connections).

:::note
Dies ist eine Zeichen- und Koordinationshilfe, dimensioniert von einem Ingenieur. Die Ausstattung ist kein Herstellerprodukt: keine Leistungen, Gewichte oder Anschlussgrößen der Hersteller. Bringen Sie ein Herstellermodell aus Ihrem TGA-Programm als IFC mit, wenn Sie es brauchen.
:::

## Ein Stück platzieren

1. Schalten Sie {{ui:Zeichnen}} ein, öffnen Sie {{ui:Build}} und wählen Sie {{ui:Ausstattung}}.
2. Wählen Sie in der Leiste die Art und geben Sie die Maße ein. Jede Art fragt nach ihren eigenen:

| Art | Sie geben ein | Die Anschlüsse |
|---|---|---|
| RLT-Gerät | Länge, Breite, Höhe; Zuluft- und Abluftöffnungen; Registerrohrgröße und System; Kondensatgröße | Zuluftkanal ab, Abluftkanal an, Register ein und aus, Kondensatablauf |
| Rohrventilator | Durchmesser, Länge, System | Luftkanal ein und aus |
| Pumpe | Rohrgröße, System | Ein- und Auslass |
| Heizkessel | Länge, Breite, Höhe, Rohrgröße, Gasgröße, Abgasdurchmesser | Heizungsvorlauf ab und Rücklauf an, Gas an, Abgas ab |
| Warmwasserbereiter | Durchmesser, Höhe, Rohrgröße, Gas oder Strom | Kaltwasser an, Warmwasser ab (und Gas an sowie Abgas, wenn er mit Gas heizt) |
| Endgerät | Länge, Breite, Höhe, runder Zulauf, Auslassbreite und -höhe | Zuluft an und ab |
| Auslass | Front, Hals, System | sein Hals (Luft an) |
| Gitter | Frontbreite und -höhe, Halsbreite und -höhe, System | sein Hals (Luft ab zum Abluft- oder Rückluftkanal) |
| Behälter | Durchmesser, Höhe, Rohrgröße, System | Zulauf oben, Ablauf nahe am Boden |
| Heizkörper | Länge, Höhe, Tiefe, Rohrgröße, System | Vorlauf oben an einem Ende, Rücklauf unten am anderen Ende |
| Konvektor / Flächenheizung | Länge, Höhe, Tiefe, Rohrgröße, System | Vorlauf an einem Ende, Rücklauf am anderen |
| Herstellerfamilie | die Familie (siehe [Rohrspezifikationen, Armaturen, Klappen und Herstellerfamilien](topic:pipe-specs)) | die Anschlüsse, die ihrer Familie zugeteilt sind |

3. Stellen Sie **Auf Höhe** ein, die Höhe des Fußpunkts über dem Geschoss. Die Höhe eines Auslasses oder Gitters ist seine Front: Geben Sie die Deckenhöhe ein.
4. Geben Sie, falls gewünscht, eine **Kennung** ein (`RLT-1`); das nächste Stück derselben Art bekommt die nächste Nummer.
5. Bewegen Sie den Zeiger über den Grundriss: Die Grundfläche und ihre Anschlüsse folgen ihm. Drücken Sie {{key:R}}, um es um 90° zu drehen. Klicken Sie dort, wo es hinkommt.

Rohrgrößen sind Stahlrohr-Nennweiten (ASME B36.10M). Ein Rohr, das von einer Pumpe aus einem anderen Material gezeichnet wird, übernimmt dieselbe Nennweite in seinem eigenen Material.

## Ändern oder entfernen

Wählen Sie es im Grundriss oder in der 3D-Ansicht aus. Die Eigenschaften zeigen jede Größe, die Sie eingegeben haben, seine Kennung, X, Y, Höhe und Drehung sowie jeden Anschluss: seine Größe, sein System, in welche Richtung der Durchfluss geht und ob etwas angeschlossen ist. Jede Änderung ist ein Schritt von {{ui:Rückgängig}}; Führungen, die an seinen Anschlüssen fixiert sind, wandern mit. {{key:Delete}} entfernt es; Führungen, die daran fixiert waren, bleiben bestehen, und die Prüfung der Verbindungen listet sie auf.

## In der IFC-Datei

Jede Art wird als ihre IFC-Klasse gespeichert: IfcUnitaryEquipment (RLT-Gerät), IfcFan (Ventilator), IfcPump (Pumpe), IfcBoiler (Heizkessel; ein Warmwasserbereiter ist ein IfcBoiler vom Typ Wasser mit dem Objekttyp „Water heater“), IfcAirTerminalBox (Endgerät), IfcAirTerminal (Auslass, Gitter) und IfcTank (Behälter), mit einem Typ, den jedes Stück derselben Art und Größe teilt. IFC2X3-Dateien erhalten IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal und IfcFlowStorageDevice mit den passenden Typen. Jeder Anschluss ist ein IfcDistributionPort, der dort platziert wird, wo die Verbindung liegt, nach außen gerichtet, mit seiner Durchflussrichtung und seinem System; andere Programme lesen, welche Führung mit welchem Anschluss verbunden ist. Das Stück gehört zum System jedes seiner Anschlüsse und trägt die Bibliothekselement-Sets, die jedes platzierte Bibliothekselement hat.
