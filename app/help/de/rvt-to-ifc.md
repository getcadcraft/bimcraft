---
title: Von einer Projektdatei zu BimCraft über IFC
summary: Die IFC-Exporteinstellungen, die sich in BimCraft am besten öffnen lassen (Version, Eigenschaftssätze, Basismengen, Räume, verknüpfte Modelle, Koordinaten), wie Sie das Ergebnis öffnen und was der Export behält.
keywords: Export, IFC-Export, RVT zu IFC, konvertieren, 3D, Geometrie, IFC2X3, IFC4, Coordination View, Reference View, Design Transfer View, Eigenschaftssätze, Basismengen, Räume, Spaces, verknüpfte Dateien, gemeinsame Koordinaten, Vermessungspunkt, Projektbasispunkt, Einstellungen
from: 3efd5fc9
---

## Was Sie tun

Verwandeln Sie eine Projektdatei in eine IFC-Datei, die Sie in BimCraft drehen, ansehen, prüfen und bearbeiten können. BimCraft liest das 3D-Modell in einer `.rvt`-Datei noch nicht, daher erfolgt der Export in dem Programm, das die Datei erstellt hat (Revit); BimCraft öffnet das Ergebnis.

## Schritte

1. Öffnen Sie das Projekt in dem Programm, das es erstellt hat. Die Karte von BimCraft nennt die Version, in der es gespeichert wurde.
2. Öffnen Sie eine 3D-Ansicht, die zeigt, was Sie exportieren möchten.
3. Wählen Sie **Datei > Exportieren > IFC**.
4. Wählen Sie im Exportdialog eine Einrichtung (oder **Einrichtung ändern…**) mit den unten genannten Einstellungen.
5. Wählen Sie einen Ordner und einen Dateinamen und exportieren Sie.
6. Klicken Sie in BimCraft auf {{ui:Choose a file}} und wählen Sie die neue `.ifc`-Datei. Verknüpfte Modelle, die als eigene Dateien exportiert wurden, öffnen Sie mit Modell hinzufügen in dieselbe Szene.

## Die Einstellungen, die sich hier am besten öffnen

| Einstellung im Exporter | Wählen | Warum |
|---|---|---|
| IFC-Version | **IFC4 Reference View** zum Ansehen, Prüfen und für Mengen; **IFC2X3 Coordination View 2.0**, wenn andere IFC2X3 brauchen | Beide öffnen sich vollständig. **IFC4 Design Transfer View** öffnet sich ebenfalls, mit genaueren Formen, aber die Datei ist größer und langsamer. |
| Dateityp | **IFC** (einfach) | BimCraft öffnet `.ifczip` oder `.ifcxml` nicht. |
| Phase / sichtbare Elemente | Die gewünschte Phase und **Nur in der Ansicht sichtbare Elemente exportieren**, wenn Sie die 3D-Ansicht dafür einrichten | Lässt aus, was Sie absichtlich ausgeblendet haben. |
| Eigenschaftssätze | **Revit-Eigenschaftssätze exportieren** und **Allgemeine IFC-Eigenschaftssätze exportieren** | Sie werden zu den Eigenschaftssätzen, die BimCraft in {{ui:Properties}} zeigt und die {{ui:Find}}, {{ui:Color}} und {{ui:Model checks}} verwenden. |
| Basismengen | **Basismengen exportieren** | {{ui:Quantity totals}} und Listen verwenden sie (Längen, Flächen, Volumen) statt zu schätzen. |
| Räume und Flächen | **Räume in 3D-Ansichten exportieren** (oder die Option Räume / Spaces) | Räume kommen als Spaces an: Klicken Sie auf {{ui:Spaces}}, um sie zu sehen. |
| Verknüpfte Dateien | **Verknüpfte Dateien als eigene IFCs exportieren** | Jede Verknüpfung wird zu einer eigenen Datei; öffnen Sie sie zusammen mit Modell hinzufügen, dann liegen sie passend aufeinander. |
| Koordinatenbasis | **Gemeinsame Koordinaten** (oder der Vermessungspunkt) | Die Datei trägt dann ihren Ort auf der Karte (IfcMapConversion), sodass Messen › Standort, Kartenebenen am Boden und nach Kartenkoordinaten platzierte Punktwolken funktionieren. Der Projektbasispunkt hält das Modell nahe am Ursprung, aber ohne seinen Kartenort. |
| Wände und Stützen nach Geschoss teilen | Ein, wenn Sie Mengen je Geschoss ermitteln | Der Teil jedes Geschosses ist ein eigenes Element. |

## Was Sie sehen sollten

Das Modell in 3D, mit Geschossen aus den Ebenen des Projekts und den Projektinformationen im Bereich {{ui:File}}. **Exportiert aus** nennt den Exporter.

## Was der Export behält und was nicht

- **Behalten**: Geometrie, Geschosse, Elementarten, Namen, Typen, die meisten Parameter (als Eigenschaftssätze), Basismengen, wenn angefordert, Räume als Spaces und den Kartenort bei gemeinsamen Koordinaten.
- **Nicht behalten**: Ansichten, Blätter, Beschriftungen, Familien als bearbeitbare Familien, Arbeitsgruppen und Entwurfsoptionen. Eine IFC-Datei ist eine Momentaufnahme der Elemente des Modells, nicht des Projekts. Für die Blätter exportieren Sie DWG und öffnen es in der 2D-Ansicht.

## Häufige Fehler

- **Parameter fehlen in BimCraft.** Schalten Sie die Optionen für Eigenschaftssätze oben ein und exportieren Sie erneut.
- **Räume fehlen.** Schalten Sie die Raum-Option ein und klicken Sie dann auf {{ui:Spaces}}.
- **Speichern als `.ifczip`.** Wählen Sie einfaches IFC oder entpacken Sie die `.ifczip`-Datei.
- **Kein Kartenort.** Exportieren Sie mit gemeinsamen Koordinaten; prüfen Sie, ob der Vermessungspunkt des Projekts gesetzt ist.
- **Erwarten, dass Änderungen zurückfließen.** Änderungen, die Sie in BimCraft speichern, gehen in eine neue IFC-Datei, nicht in die Projektdatei.
