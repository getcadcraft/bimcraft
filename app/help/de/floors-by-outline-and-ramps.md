---
title: Böden beliebiger Form, Öffnungen und Rampen
summary: Zeichnen Sie einen Boden oder eine Decke über ihren Umriss (einen Balkon, einen Kragarm, ein Podest), schneiden Sie Öffnungen hinein und zeichnen Sie Rampen mit ihren Podesten.
keywords: Boden, Decke, Umriss, Balkon, Kragarm, Podest, Terrasse, Bodenöffnung, Durchbruch, Schacht, Aussparung, Rampe, Gefälle, barrierefreie Rampe, Rollstuhlrampe, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ziel

Erstellen Sie Böden, die nicht Räumen folgen, etwa einen Balkon jenseits der Wände, und zeichnen Sie Rampen zwischen den Geschossen.

## Einen Boden über seinen Umriss zeichnen

1. Schalten Sie {{ui:Zeichnen}} ein, wählen Sie das Geschoss und dann {{ui:Build}} › {{ui:Boden nach Umriss}}.
2. Wählen Sie in der Zeile unter den Werkzeugen die Art (Betondecke oder Holzboden), ihre Verwendung (Boden oder Podest), ihre Dicke und wie weit ihre Oberkante über dem Geschoss liegt (0 = auf Höhe des Fußbodens des Geschosses; ein negativer Wert setzt sie tiefer).
3. Klicken Sie auf die Ecken. Das Werkzeug rastet an Wänden, Rasterlinien und deren Kreuzungen ein; halten Sie {{key:Shift}} gedrückt, um eine Kante rechtwinklig zu halten. Die Länge jeder Kante und die Fläche werden während des Zeichnens angezeigt. {{key:Backspace}} nimmt die letzte Ecke zurück.
4. Klicken Sie erneut auf die erste Ecke, doppelklicken Sie oder drücken Sie {{key:Enter}}, um abzuschließen.

## Eine Öffnung schneiden

Klicken Sie auf den Boden (in der 3D-Ansicht oder auf seinen Umriss im Grundriss), klicken Sie dann unter **Eigenschaften** auf {{ui:Öffnung hinzufügen}} und klicken Sie die Ecken der Öffnung innerhalb des Bodens an; schließen Sie wie oben ab. Die **Eigenschaften** des Bodens listen seine Öffnungen auf, jede mit {{ui:Löschen}}, sowie seine Fläche ohne sie.

## Eine Rampe zeichnen

1. Wählen Sie {{ui:Build}} › {{ui:Rampe}}. Legen Sie ihre Breite fest und ob sie **zum Geschoss darüber** oder **um eine Höhendifferenz**, die Sie eingeben, führt.
2. Wählen Sie, wie sie festgelegt wird: **nach Gefälle** (1:12 als Start; die Rampe ist so lang, wie die Höhendifferenz es verlangt) oder **nach Länge** (Ihr zweiter Klick legt die Länge fest, das Gefälle folgt).
3. Klicken Sie auf den Fuß der Rampe (die Mitte ihrer unteren Kante), dann auf den Weg nach oben. Die Vorschau zeigt ihre Länge, ihre Läufe und ihr Gefälle.

Eine Höhendifferenz von mehr als 30 in (760 mm) wird in Läufe geteilt, mit einem Podest von 5 ft (1525 mm) dazwischen. Dies sind übliche Planungswerte, nicht Ihre Norm: Prüfen Sie die Vorschriften an Ihrem Bauort. Eine Rampe, die steiler als 1:12 ist, wird in den {{ui:Eigenschaften}} markiert.

## Was Sie sehen

- Jeder Boden, jede Öffnung und jede Rampe ist ein Schritt: {{key:Mod+Z}} nimmt ihn zurück.
- Im Grundriss der Umriss eines gezeichneten Bodens (eine Öffnung ist gekreuzt dargestellt) und der Umriss einer Rampe mit ihren Läufen, Podesten und einem Pfeil nach oben mit ihrem Gefälle.
- Die **Eigenschaften** eines gezeichneten Bodens (Art, Verwendung, Dicke, Oberkante, Fläche, Öffnungen) und einer Rampe (Breite, Oberkante, Höhendifferenz, Gefälle oder Länge); {{key:Delete}} entfernt beides.
- Eine Rampe zum Geschoss darüber folgt diesem Geschoss, wenn sich dessen Höhe ändert.
- In der IFC-Datei ist ein gezeichneter Boden eine Decke (IfcSlab, ein Boden oder ein Podest) mit ausgeschnittenen Öffnungen (IfcOpeningElement); eine Rampe ist ein IfcRamp aus geneigten Läufen (IfcRampFlight) und Podestdecken, mit ihrem Gefälle und ihrer Breite.

:::note
Auf diese Weise gezeichnete Böden bleiben dort, wo Sie sie gezeichnet haben. Mit {{ui:Boden}} erstellte Böden folgen den Räumen, wenn sich die Wände verschieben: siehe [Räume, Böden, Deckenverkleidungen und Dächer](topic:floors-and-roofs).
:::
