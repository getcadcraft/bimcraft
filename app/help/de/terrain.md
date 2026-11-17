---
title: Gelände des Grundstücks, Bauplatz und Pflaster
summary: Bringen Sie das Gelände aus Vermessungspunkten, Höhenlinien, einem LAS- / LAZ-Scan, einem GeoTIFF, einer LandXML-Oberfläche (von CivilCraft) oder einigen Höhenkoten in das Modell; schneiden Sie den Bauplatz des Hauses mit seinen Böschungen sowie Abtrag und Auftrag ein; legen Sie Einfahrten, Wege und Terrassen darauf; übergeben Sie es als LandXML an CivilCraft.
keywords: Gelände, Boden, Grundstück, Topografie, Vermessung, Punkte, PNEZD, Höhenlinien, LAS, LAZ, LiDAR, GeoTIFF, DEM, Höhe, Höhenkote, Gefälle, Geländemodellierung, Bauplatz, Abtrag, Auftrag, Erdbau, Böschungsschnittpunkt, Böschung, Einfahrt, Weg, Terrasse, Pflaster, LandXML, CivilCraft
from: 208298d6
---

## Was Sie erreichen

Stellen Sie das Haus auf sein Grundstück. Das Gelände wird Teil des Modells: Es wird in 3D angezeigt, in Schnitten und Ansichten geschnitten und zeigt Höhenlinien im Grundriss. Unter dem Haus wird ein Bauplatz in das Gelände geschnitten, Einfahrten und Wege folgen dem Gelände, und Fundamente staffeln sich mit ihm ab.

## Gelände einbringen

1. Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Gelände}}.
2. Entweder:
   - **Vermessungsdatei öffnen…**: Vermessungspunkte (PNEZD, PENZD oder einfach Rechtswert, Hochwert, Höhe; durch Komma, Tabulator oder Leerzeichen getrennt), Höhenlinien in einer DXF- oder DWG-Datei (Polylinien mit ihrer Höhe, 3D-Polylinien), einen LAS- oder LAZ-Scan (Bodenpunkte bleiben erhalten, auf etwa einen pro Quadratmeter ausgedünnt), ein GeoTIFF oder ein ASCII-Höhenraster oder eine **LandXML**-Oberfläche, wie CivilCraft sie exportiert (ihre eigenen Punkte und Dreiecke bleiben erhalten; enthält die Datei mehrere Oberflächen, fragt BimCraft, welche davon das Gelände ist; ihre Einheiten stammen aus der Datei). Wählen Sie zuerst die Einheiten der Datei (LandXML gibt seine eigenen an).
   - Oder geben Sie eine **Höhenkote** ein (gemessen ab dem Boden dieses Geschosses, `-1'` liegt also einen Fuß darunter) und klicken Sie Punkte im Grundriss an, ändern Sie die Höhe und klicken Sie weitere Punkte an, dann **Gelände erstellen**. Drei Punkte genügen zum Start.

Vermessungskoordinaten, die weit vom Modell entfernt liegen (State Plane, UTM), werden auf das Haus verschoben, und die Höhen werden so gesetzt, dass das Gelände am Haus etwa 8" unter dem ersten Geschoss liegt. **Gelände anheben** in den **Eigenschaften** korrigiert das um einen beliebigen Betrag.

## Der Bauplatz

1. Wählen Sie {{ui:Bauplatz}}.
2. Legen Sie den **Abstand** um das Haus fest, wie weit der **Bauplatz unter dem Boden liegt** (8" unter einer Bodenplatte, mehr unter einem Kriechkeller) und die **Böschungen** bis zum vorhandenen Gelände (`2:1` = zwei Fuß nach außen für jeden Fuß nach oben oder unten).
3. Klicken Sie innerhalb des Hauses auf einen Punkt.

Das Gelände wird unter dem Haus und bis zum Abstand eingeebnet, dann steigt es in den Hang an (Abtrag) und fällt zur tiefen Seite ab (Auftrag), bis es auf das vorhandene Gelände trifft. Die **Eigenschaften** des Geländes und des Bauplatzes geben die Abtrags- und Auftragsvolumen an. Verschieben Sie die Wände, folgt der Bauplatz.

## Einfahrten, Wege und Terrassen

Wählen Sie {{ui:Pflaster}}, wählen Sie **Gehweg**, **Einfahrt** oder **Terrasse** und klicken Sie die Ecken an. Klicken Sie die erste Ecke erneut an, doppelklicken Sie oder drücken Sie {{key:Enter}}, um abzuschließen. Der Belag folgt dem fertigen Gelände; ändern Sie seine Art oder Dicke in den **Eigenschaften**.

## Fundamente folgen dem Gelände

Mit dem Gelände im Modell folgen Sockelmauern und Fundamente von Kriechkellern ihm. Entlang jeder Wand bleibt das Fundament seine Tiefe unter dem Gelände außerhalb, und es staffelt sich in ganzen 8"-Schritten, wo das Gelände abfällt (siehe [Fundamente unter den Wänden](topic:foundations)).

## An CivilCraft übergeben

**LandXML für CivilCraft** (in der Zeile „Gelände“ oder in den **Eigenschaften** des Geländes) lädt das vorhandene Gelände und das fertige Geländeniveau als LandXML-Datei herunter. Öffnen Sie sie in CivilCraft für die echte Geländemodellierung, Entwässerung und Erdarbeiten.

## Gut zu wissen

- Das Gelände benötigt ein IFC4-Modell, wie jedes neue Gebäude.
- Höhenlinien werden im Grundriss der Geländeebene im Abstand angezeigt, der in den **Eigenschaften** des Geländes festgelegt ist; jede fünfte ist stärker.
- Das Gelände wird als IFC-Geländeelement gespeichert (eine geschlossene, trianguläre Oberfläche, damit Schnitte es schneiden können); Bauplatz und Pflaster werden mit ihm gespeichert. Löschen Sie das Gelände, um neu zu beginnen; sein Bauplatz und Pflaster werden mit ihm gelöscht.
