---
title: Eine Karte auf dem Grund unter dem Modell
summary: Legen Sie eine Straßenkarte oder ein Luftbild auf den Grund unter einem georeferenzierten IFC-Modell, aus Kartenkacheln, Kartendiensten oder einem Bild mit Weltdatei.
keywords: Karte, Kartenlayer, Hintergrundkarte, Luftbild, Satellit, Grundstück, Gelände, Kacheln, XYZ, WMS, WMTS, Kartendienst, Weltdatei, Georeferenzierung, IfcMapConversion, projiziertes Koordinatensystem, EPSG, Standortkontext
from: 84e2e9df
---

## Was Sie tun

Sehen Sie das Modell an seinem Ort: die Straßenkarte oder das Luftbild des Grundstücks auf dem Boden darunter.

## Schritte

1. Öffnen Sie ein IFC-Modell, das seinen Ort auf der Karte trägt (eine Kartenumrechnung, IfcMapConversion, mit einem projizierten Koordinatensystem). Exporteure schreiben sie, wenn die Koordinaten des Projekts (Vermessungspunkt, gemeinsame Koordinaten) gesetzt sind.
2. Wählen Sie {{ui:Anzeigen}} › {{ui:Kartenebenen…}}. Der Dialog nennt das System des Modells, zum Beispiel EPSG:28356. Ein Modell ohne Kartenumrechnung kann keine Kartenlayer haben; der Dialog sagt es.
3. Schalten Sie {{ui:Kartenlayer aus dem Internet}} ein. Bis dahin wird kein Server befragt; ist es eingeschaltet, sehen die Server, die Sie hinzufügen, den Bereich um das Modell und Ihre Internetadresse, nie Ihr Modell.
4. Wählen Sie unter {{ui:Einen Layer hinzufügen}} Kacheln (eine Adresse mit `{z}`, `{x}` und `{y}`), einen WMS-, WMTS- oder ArcGIS-Dienst ({{ui:Layer abrufen}}, dann einen wählen) oder ein Bild mit seiner Weltdatei.
5. Schließen Sie den Dialog. Die Karte liegt auf dem Boden knapp unter dem tiefsten Punkt des Modells, über dessen Grundfläche und ebenso weit darum herum.

:::note
Die Karte wird nur auf dem Bildschirm angezeigt; sie wird nicht in der IFC-Datei gespeichert. Die Liste der Layer wird in diesem Browser aufbewahrt. Verwenden Sie nur Kartendienste, deren Nutzungsbedingungen dies erlauben.
:::
