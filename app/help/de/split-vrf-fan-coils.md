---
title: Split-, VRF-Geräte und Gebläsekonvektoren
summary: Platzieren Sie Wand-, Kassetten- und Kanal-Innengeräte, Single-Split- und VRF-Außengeräte, Refnet-Verbindungen sowie Gebläsekonvektoren mit 2- oder 4-Rohr-Anschluss, jeweils mit ihren Kältemittel-, Wasser-, Kondensat- und Kanalanschlüssen, und zeichnen Sie die Leitungssätze zwischen ihnen, dimensioniert anhand einer Tabelle, die Sie ändern können.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variable refrigerant flow, Wärmepumpe, Innengerät, Außengerät, Verflüssigungssatz, Wandgerät, Hochwand, Kassette, Kanal, verdeckt, Gebläsekonvektor, FCU, 2-Rohr, 4-Rohr, Refnet, Abzweigverbindung, Y-Verbindung, Leitungssatz, Kältemittel, Flüssigkeitsleitung, Gasleitung, Saugleitung, ACR, Kupfer, Kondensat, HLK, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Was Sie hier tun

Platzieren Sie die Geräte eines Split-, Multi-Split- oder VRF-Systems sowie Ihre Gebläsekonvektoren im Modell und verbinden Sie sie mit Leitungssätzen: einer Flüssigkeits- und einer Gasleitung aus ACR-Kupfer, angeschlossen an die Anschlüsse der Geräte. Die Geräte funktionieren wie alle anderen Teile mit Anschlüssen in [MEP-Ausstattung mit Anschlüssen](topic:mep-equipment): dieselbe Leiste, dieselben Eigenschaften, Anschlüsse und [Verbindungen](topic:mep-connections).

:::note
Dies ist eine Hilfe für Planung und Koordination. Die Geräte sind allgemeine Formen, die nach den Werten dimensioniert werden, die Sie eingeben, keine Produkte eines Herstellers. Ihre Rohrgrößen stammen aus einer Tabelle mit **typischen Beispielwerten** für Anlagen mit R410A und R32, nicht von einem Hersteller: Die Installationsanleitung des Geräteherstellers bestimmt die tatsächlichen Maße; lange Leitungen oder große Höhenunterschiede ändern sie. Ändern Sie die Tabelle oder geben Sie die Maße ein, damit sie zu Ihren Geräten passen.
:::

## Ein Gerät platzieren

1. Schalten Sie {{ui:Zeichnen}} ein, öffnen Sie {{ui:Build}} und wählen Sie {{ui:Ausstattung}}.
2. Wählen Sie die Art und legen Sie ihre Werte fest:

| Art | Sie legen fest | Anschlüsse |
|---|---|---|
| Split-Innengerät, Wand | Kapazität, Flüssigkeits- und Gasleitung, Länge, Tiefe, Höhe, Kondensatgröße | Kältemittel Flüssigkeit und Gas, Kondensatablauf (am rechten Ende, nahe der Wand) |
| Split-Innengerät, Kassette | Kapazität, Flüssigkeits- und Gasleitung, Paneel, Gehäuse, Höhe, Kondensatgröße | Kältemittel Flüssigkeit und Gas, Kondensatablauf (an einer Seite, nahe der Decke) |
| Split-Innengerät, Kanal | Kapazität, Flüssigkeits- und Gasleitung, Länge, Breite, Höhe, Zu- und Rückluftöffnungen, Kondensatgröße | Zuluftkanal ab, Rückluftkanal an, Kältemittel Flüssigkeit und Gas, Kondensatablauf |
| Split-Außengerät | Kapazität, Flüssigkeits- und Gasleitung, Breite, Tiefe, Höhe | Kältemittel Flüssigkeit und Gas (an der rechten Seite) |
| VRF-Außengerät | Kapazität, Flüssigkeits- und Gasleitung, Breite, Tiefe, Höhe | Kältemittel Flüssigkeit und Gas (vorne, unten) |
| Refnet-Verbindung | Flüssigkeits- oder Gasleitung, die Last an jedem Abzweig, das Rohr an jedem Ende | Eingang, Abzweig A, Abzweig B |
| Gebläsekonvektor | 2- oder 4-Rohr, Länge, Breite, Höhe, Zu- und Rückluftöffnungen, Spulenrohr und System, Heizrohr, Kondensatgröße | Zuluftkanal ab, Rückluftkanal an, Spule ein und aus, Heizung ein und aus (4-Rohr), Kondensatablauf |

3. Stellen Sie **Auf** ein: die Höhe der Basis des Geräts über dem Geschoss. Die Basis eines Wandgeräts ist seine Unterseite (oft 2100 mm); die einer Kassette ist ihre Sichtfläche in der Decke; die eines Refnets ist die Höhe der Mittellinie seines Rohrs.
4. Klicken Sie, wo es hinkommt ({{key:R}} dreht es um 90°).

**Kapazität** ist die Nennkühlleistung des Geräts in kW, daneben in Btu/h. Wenn **Flüssigkeitsleitung** und **Gasleitung** auf **Aus der Tabelle** stehen, übernehmen die Anschlüsse des Geräts die Tabellengrößen für diese Leistung; wählen Sie einen Rohrdurchmesser, um die eigenen Maße Ihres Geräts zu verwenden. Der Eingang eines Refnets ist für beide Abzweige zusammen dimensioniert, jeder Abzweig für seine eigene Last.

Kältemittelanschlüsse funktionieren in beide Richtungen (eine Wärmepumpe läuft in jede Richtung). Der Kondensatablauf ist eine Rohrgröße wie jeder Ablauf.

## Einen Leitungssatz zeichnen

1. Wählen Sie zwei Teile ({{key:Shift}}+Klick auf das zweite): ein Außengerät und ein Innengerät (ein Single-Split), oder ein Außengerät und ein Refnet, ein Refnet und ein Innengerät oder zwei Refnets (VRF).
2. Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Leitungssatz}}.

BimCraft zeichnet die Flüssigkeits- und Gasleitungen zwischen ihren freien Anschlüssen, aus jedem Anschluss heraus bis auf eine gemeinsame Höhe, aus ACR-Kupfer (geglühter Bund bis 1-5/8 in, gezogenes Rohr darüber), als einen Schritt von {{ui:Rückgängig}}. Ein Refnet nimmt nur seine eigene Leitung: in seinen Eingang von der Außenseite und aus einem Abzweig zu den Innengeräten. Jede Leitung übernimmt die Größe ihres nachgeordneten Endes (des Innengeräts oder des Eingangs des Refnets). Hat der Anschluss am anderen Ende eine andere Größe, listet {{ui:Verbindungen prüfen}} ihn auf: dort gehört ein Reduzierstück hin. Zwei Innengeräte brauchen ein Refnet dazwischen.

Verschieben Sie die Leitungen danach wie jeden Rohrzug; ihre Enden bleiben an den Anschlüssen. Leitungen zwischen Geschossen zeichnen Sie mit {{ui:Rohr}}: Ein Rohr, das an einem Kältemittelanschluss beginnt, übernimmt dessen System, ACR-Kupfer und Größe.

## Die Tabelle der Leitungssätze ändern

Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Leitungssatz-Größen}}. Jede Zeile besagt: bis zu dieser Leistung (kW), dieses Flüssigkeitsrohr und dieses Gasrohr.

| Bis | Flüssigkeit | Gas |
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

Dies sind die typischen Ausgangswerte. Ändern Sie eine Zeile, fügen Sie Zeilen hinzu oder entfernen Sie sie und wählen Sie {{ui:Speichern}}: Die Tabelle wird im Modell gehalten, damit alle, die an der Datei arbeiten, sie verwenden, und {{ui:Rückgängig}} nimmt sie zurück. {{ui:Typische Werte verwenden}} stellt die Ausgangstabelle wieder her. Bereits platzierte Teile behalten ihre Anschlüsse, bis Sie sie ändern.

## In der IFC-Datei

Innen- und Außengeräte von Split- und VRF-Systemen sind IfcUnitaryEquipment vom Typ SPLITSYSTEM; der Objekttyp sagt, welches Gerät es ist ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Ein Gebläsekonvektor ist IfcUnitaryEquipment vom Typ AIRHANDLER mit dem Objekttyp "Fan coil unit": IFC4 kennt keinen Gebläsekonvektortyp, und ein Ventilator, eine Spule und ein Filter für einen Raum sind genau das, was AIRHANDLER beschreibt. Eine Refnet-Verbindung ist ein IfcPipeFitting vom Typ JUNCTION ("Refnet joint"). IFC2X3-Dateien erhalten IfcEnergyConversionDevice und IfcFlowFitting mit den passenden Typen.

Kältemittelanschlüsse und -leitungen liegen in REFRIGERATION-Systemen (eines für die Flüssigkeitsleitungen, eines für die Gasleitungen), das Kondensat in einem DRAINAGE-System. ACR-Leitungen werden nach dem Außendurchmesser benannt. Die Tabelle der Leitungssätze ist der Eigenschaftssatz CadCraft_HvacLineSets am Projekt.

Siehe auch [MEP-Ausstattung mit Anschlüssen](topic:mep-equipment), [Rohre und Kanäle an Ausstattung anschließen](topic:mep-connections) und [Rohre und Kanäle](topic:pipes-and-ducts).
