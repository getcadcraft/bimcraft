---
title: Ein neues Gebäude anlegen
summary: Erstellen Sie ein leeres Gebäudemodell mit seinen Ebenen, zeichnen Sie seine Wände, platzieren Sie Elemente aus der Bibliothek und speichern Sie es als IFC.
keywords: neu, neues Gebäude, leer, unbeschrieben, von vorn beginnen, Vorlage, Ebenen, Geschosse, Etagen, Böden, erstellen, Modell
from: 68786865
---

## Was Sie hier tun

Beginnen Sie ein Gebäudemodell, statt eines zu öffnen. BimCraft erstellt ein leeres IFC-Modell mit einem Projekt, einem Grundstück, dem Gebäude und seinen Ebenen. Sie können Ausstattung und Möbel aus der Bibliothek auf den Ebenen platzieren und es als IFC-Datei speichern.

:::note
Wände können Sie jetzt zeichnen: siehe [Wände zeichnen](topic:draw-walls). Türen, Fenster, Böden und Dächer werden als Nächstes umgesetzt.
:::

## Schritte

1. Klicken Sie unter **Datei oder Ordner öffnen** oder auf der Startseite auf {{ui:Neues Gebäude}}.
2. Geben Sie den **Gebäudenamen** ein.
3. Wählen Sie, wie viele **Ebenen** es hat (1 bis 200).
4. Geben Sie die **Ebenenhöhe** ein, von Boden zu Boden: zum Beispiel `10'-0"`, `10'6"` oder `3000 mm`. Eine reine Zahl bedeutet in den USA Fuß, sonst Millimeter.
5. Jedes Feld ist bereits ausgefüllt, Sie können alles so lassen, wie es ist. Darunter zeigt das Feld, womit Sie beginnen: die Einheiten, den **Wandtyp**, den das Werkzeug Wand zuerst zeichnet (wählen Sie bei Bedarf einen anderen aus der Liste), und das erste Blatt.
6. Klicken Sie auf {{ui:Erstellen}}. Die Ebenen werden ab 0 gestapelt, jede eine Ebenenhöhe über der letzten, und heißen Ebene 1, Ebene 2 usw. Sie erscheinen in der {{ui:Modellstruktur}}, und der Grundriss von Ebene 1 öffnet sich neben der 3D-Ansicht, mit eingeschaltetem {{ui:Zeichnen}}.
7. Zeichnen Sie die Wände: Klicken Sie auf {{ui:Wand}} und dann auf zwei Punkte. Siehe [Wände zeichnen](topic:draw-walls). Benennen Sie Ebenen um oder ändern Sie ihre Höhen im Bereich **Ebenen**.
8. Platzieren Sie Elemente: siehe [Ausstattung und Möbel aus der Bibliothek platzieren](topic:place-from-library). Die Platzierungsleiste listet jede Ebene auf.
9. Klicken Sie auf {{ui:Als IFC speichern}}. Die Datei wird nach dem Gebäude benannt, zum Beispiel `Smith's house.ifc`.

## Gut zu wissen

- Das Modell wird in Millimetern als IFC4 gespeichert. Andere BIM-Programme öffnen es.
- Ein neues Gebäude kommt mit einem Blatt, **A-101**, das den Grundriss der untersten Ebene enthält: A3 im Maßstab 1:100, wenn Sie in metrischen Einheiten arbeiten, sonst Tabloid mit 1/8" = 1'-0". Es ist leer, bis die erste Wand entsteht, und zeigt dann den Grundriss, während Sie zeichnen. Öffnen Sie es unter **Blätter** im Projektbrowser, um Papier, Maßstab oder Schriftfeld zu ändern, Ansichten hinzuzufügen oder es zu löschen. Ein aus einer Vorlage begonnenes Gebäude bringt stattdessen die Blätter der Vorlage mit.
- Um festzulegen, womit jedes neue Gebäude beginnt (der Wandtyp für metrische Projekte, die Ebenen, das erste Blatt, das Werkzeug, das nach Erstellen aktiv ist), siehe [Standardrichtlinien](topic:default-policies).
- Vor der ersten Wand muss nichts eingerichtet werden. Wandtyp, Ebenenhöhen, Einheiten und Blatt lassen sich alle später ändern.
- **Geschosse** im linken Bereich listet nur Ebenen mit Inhalt auf; die Modellstruktur listet alle.
- Bis Sie speichern, gilt das neue Gebäude als nicht gespeicherte Arbeit. BimCraft fragt, bevor Sie eine andere Datei öffnen oder die Seite verlassen, und behält eine Kopie in diesem Browser, falls der Tab geschlossen wird.
