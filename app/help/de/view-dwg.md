---
title: Eine DWG- oder DXF-Zeichnung ansehen
summary: Eine DWG oder DXF öffnen, im Modellbereich und in den Blättern navigieren, Koordinaten ablesen und sehen, was noch nicht gezeichnet ist.
keywords: dynamische Blöcke, Sichtbarkeitszustände, dwg, dxf, cad, Zeichnung, 2d, ansehen, Betrachter, Pan, Zoom, Modellbereich, Papierbereich, Layout, Koordinaten, DWG öffnen
from: 4db3122a
---

## Was Sie tun

Öffnen Sie eine CAD-Zeichnung, sehen Sie sie in 3D oder 2D, bewegen Sie sich darin, wechseln Sie zwischen dem Modellbereich und seinen Blättern, und lesen Sie Koordinaten ab. BimCraft zeigt DWG- und DXF-Zeichnungen an; es bearbeitet oder speichert sie nicht. Um eine zu ändern, klicken Sie auf {{ui:In CadCraft bearbeiten}}; die Zeichnung öffnet sich in einem neuen Tab in der CadCraft-Zeichenanwendung.

## Schritte

1. Klicken Sie auf {{ui:Datei wählen}}, oder ziehen Sie die Zeichnung auf die Seite.
2. Wählen Sie eine `.dwg`- oder `.dxf`-Datei.
3. Warten Sie, während die Statuszeile „Zeichnung wird gelesen…“ anzeigt. Große Zeichnungen brauchen einige Sekunden. Danach zeigt sie, wie lange das Lesen dauerte, „Rendern…“, während das erste Bild gezeichnet wird, und wie lange das dauerte.
4. Die Zeichnung öffnet sich in 3D, der schnellsten Art, eine große Zeichnung zu zeigen (siehe [Eine DWG- oder DXF-Zeichnung in 3D ansehen](topic:dwg-in-3d)). Klicken Sie auf {{ui:Modell}} für die flache 2D-Ansicht. Um Zeichnungen immer in 2D zu öffnen, stellen Sie {{ui:Einstellungen}} › {{ui:BimCraft}} › **Zeichnungen öffnen in** auf {{ui:Modell (2D)}}. Eine Zeichnung mit nichts im Modellbereich oder ein Browser, der 3D nicht anzeigen kann, öffnet sich in 2D.
5. Sehen Sie sich die Registerkarten über der Zeichnung an: zuerst {{ui:Modell}}, dann je einen Tab pro Blatt, in der Reihenfolge der Zeichnung.
6. Klicken Sie auf einen Blatt-Tab, um dieses Blatt zu sehen: das Papier, mit dem Modell durch seine Ansichtsfenster.
7. Klicken Sie auf {{ui:Modell}}, um zurück zum Modellbereich zu gehen.
8. Bewegen Sie den Zeiger über die Zeichnung und lesen Sie die X- und Y-Koordinaten in der Ecke ab.

## Was Sie sehen sollten

- Die Zeichnung, an das Fenster angepasst. Die Farben folgen der Zeichnung; weiße Linien (Farbe 7) werden in der Tintenfarbe des Designs gezeichnet, und helle Farben werden im hellen Design abgedunkelt, damit sie lesbar bleiben.
- Das Bedienfeld {{ui:Zeichnung}} links: Datei, Größe, Format (zum Beispiel „AutoCAD 2018 (AC1032)“), Einheiten, Anzahl der Objekte und Layer, die Anzahl der Blätter sowie verknüpfte Zeichnungen und Ausstattung, wenn vorhanden.
- Die Liste {{ui:Layer}} links.
- Rechts: wie man sich bewegt, verknüpfte Zeichnungen und Bilder und **Noch nicht gezeichnet**.

## Sich bewegen

:::mouse
| Zum | Tun Sie Folgendes |
|---|---|
| Pan | Mit einer beliebigen Maustaste ziehen |
| Zoom | Am Mausrad scrollen; der Punkt unter dem Zeiger bleibt stehen |
| Einpassen | Doppelklicken, {{key:F}} drücken oder auf {{ui:Einpassen}} klicken |
:::

:::mac mouse
Auf einem Trackpad **zoomt** Scrollen mit zwei Fingern, es verschiebt nicht. Eine Pinch-Geste zoomt ebenfalls. Zum Verschieben klicken und ziehen.
:::

:::touch
Mit einem Finger ziehen, um zu verschieben. Pinch-Zoom ist für Zeichnungen noch nicht umgesetzt: Tippen Sie auf {{ui:Einpassen}}, um das ganze Blatt zu sehen, und verwenden Sie Maus oder Trackpad zum Hineinzoomen.
:::

## Dynamische Blöcke

Ein dynamischer Block wird so gezeichnet, wie die Zeichnung ihn zeigt: jeder platzierte Block im Sichtbarkeitszustand, mit dem die Zeichnung gespeichert wurde („Plan“ oder „Vorderansicht“, „Einzelbecken“ oder „Doppelbecken“). Rechts listet **Dynamische Blöcke** jeden auf, der im Modellbereich platziert ist: wie viele platziert sind, die Zustände, die sie zeigen, und jeden Zustand, den der Block hat. Klicken Sie in {{ui:3D}} auf einen platzierten Block, um unter Eigenschaften **Dynamischer Block**, **Angezeigter Zustand** und **Andere Zustände** zu sehen. BimCraft wechselt die Zustände nicht.

## Noch nicht gezeichnet

Einige Arten von Objekten werden in dieser Version nicht gezeichnet. Sie werden rechts unter **Noch nicht gezeichnet** gezählt („Diese Teile der Zeichnung werden vorerst übersprungen und nicht geraten.“), damit Sie wissen, dass etwas fehlt. Linien, Polylinien, Bögen, Kreise, Ellipsen, Splines, Schraffuren und Vollflächen, Text und mehrzeiliger Text, Blöcke mit Attributen, Bemaßungen, Führungslinien und Multi-Führungslinien, Tabellen, Bilder und Ansichtsfenster werden gezeichnet. 3D-Flächen, Polyflächennetze und Polygonnetze werden als ihre von oben gesehenen Kanten gezeichnet; wechseln Sie zu {{ui:3D}}, um sie als Flächen zu sehen.

Eine binäre DXF öffnet sich nicht; BimCraft sagt es. Speichern Sie sie im Programm, das sie erstellt hat, erneut als ASCII-DXF oder als DWG.

## Häufige Fehler

- **Die Zeichnung sieht leer aus.** Einige Layer sind in der Zeichnung selbst möglicherweise ausgeschaltet oder eingefroren; sie beginnen in {{ui:Layer}} unangekreuzt. Klicken Sie auf {{ui:Alle ein}}. Wenn die Statuszeile „*name* ist eine leere Zeichnung: sie enthält keine Linien, keinen Text und keine Blöcke.“ meldet, ist nichts darin.
- **Ein Blatt zeigt einen leeren Rahmen.** Das Blatt hängt möglicherweise von verknüpften Zeichnungen ab. Siehe [Verknüpfte Zeichnungen und Bilder finden](topic:dwg-linked-files).
- **Text sieht etwas anders aus.** BimCraft zeichnet Text in einer schmalen serifenlosen Schrift, nicht in den eigenen Schriften der Zeichnung. Deshalb kann Text etwas breiter oder schmaler sein als im Programm, das sie erstellt hat.
- **„*name* konnte nicht gelesen werden. Sie ist möglicherweise beschädigt oder in einem Format gespeichert, das der Leser noch nicht unterstützt.“** Die Klammer am Ende nennt den Formatcode der Datei. Speichern Sie sie aus dem Programm, das sie erstellt hat, als älteres DWG oder als DXF, und versuchen Sie es erneut.
- **Messen, Zeichnen oder Bearbeiten erwartet.** BimCraft zeigt Zeichnungen nur an. Klicken Sie auf {{ui:In CadCraft bearbeiten}}, um dieselbe Datei in der CadCraft-Zeichenanwendung zu öffnen, die sie bearbeitet und als Kopie als DWG oder DXF speichert. Ihre Originaldatei wird nicht geändert, und verknüpfte Zeichnungen bleiben in BimCraft. Die Schaltfläche erscheint nur dort, wo CadCraft für Sie geöffnet ist.

## Weiter

- [Eine DWG- oder DXF-Zeichnung in 3D ansehen](topic:dwg-in-3d)
- [Mit Layern und Blättern arbeiten](topic:dwg-layers-sheets)
- [Zeichnung in der Druckansicht prüfen](topic:print-view)
