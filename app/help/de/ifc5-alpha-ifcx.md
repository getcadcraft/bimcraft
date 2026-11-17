---
title: IFC5-Alpha-Dateien (IFCX) öffnen und exportieren
summary: Eine Laboroption für das IFC5-Alpha-Dateiformat (.ifcx): eine Datei mit ihren Layern öffnen, sehen, was die Lesung nicht prüfen konnte, und die offenen Modelle exportieren. Das Format ändert sich noch, daher vorher lesen.
keywords: ifc5, ifcx, alpha, buildingSMART, json, Layer, Schema, Labor, Mengen, qto, Export, Import
from: cffe1669
---

IFC5-Alpha (Dateiendung {{ui:.ifcx}}) ist das Dateiformat, das buildingSMART noch entwirft. Es ist nicht endgültig: Die Dateien und unsere Lesart davon können sich ändern. Deshalb ist dies eine Laboroption, und vorher sollten Sie lesen.

## Einschalten

1. Wählen Sie {{ui:Einstellungen}}, dann den Abschnitt {{ui:IFC5-Alpha (IFCX)}} in der Registerkarte BimCraft.
2. Kreuzen Sie {{ui:IFC5-Alpha (IFCX) – das Format ist noch im Wandel; vorher lesen}} an.

Es ist standardmäßig ausgeschaltet. Solange es aus ist, wird eine .ifcx-Datei mit einem Satz abgelehnt, der auf diese Seite verweist. {{ui:IFC5-Alpha (.ifcx) öffnen…}} und die Schaltfläche {{ui:IFC5 alpha}} zum Exportieren erscheinen, wenn es eingeschaltet ist.

## Öffnen

- Wählen Sie eine .ifcx-Datei mit {{ui:Eine Datei oder einen Ordner öffnen}} (sie ersetzt das geöffnete Modell, nach der üblichen Rückfrage zu Änderungen), oder
- wählen Sie {{ui:IFC5-Alpha (.ifcx) öffnen…}} und markieren Sie mehrere Dateien gemeinsam: die Datei, ihre Layer und die Schemadateien, die sie importiert. Ist bereits ein Modell offen, wird die Datei **daneben hinzugefügt**; das × in der Modellliste entfernt sie wieder, das ist das Rückgängig.

Eine IFCX-Datei listet Knoten auf (einen Pfad, seine Kinder, was er erbt, seine Attribute). Mehrere Dateien können denselben Knoten beschreiben: Eine spätere Datei (ein Layer) überschreibt die Attribute einer früheren, und ein Null-Kind entfernt ein Kind. BimCraft setzt sie zusammen und zeichnet das Ergebnis als kleines IFC4-Modell: Projekt, Gelände, Gebäude, Geschosse und Bauteile mit Namen, Klassen, Eigenschaften, Mengen, Farben und Netzen.

Nichts wird aus dem Netz geladen. Die Schemadateien, die eine Datei importiert (zum Beispiel `ifc@v5a.ifcx`), werden nur verwendet, wenn Sie sie mit der Datei gewählt haben; andernfalls meldet der Bericht das, und die Attribute werden ohne Typprüfung gelesen.

### Der Bericht

Nach dem Öffnen listet ein Bericht auf, was die Lesung gefunden hat: Daten, die nicht zu ihrem Schema passen, fehlende Schemadateien, Attribute ohne IFC-Entsprechung hier. Attribute ohne Zuordnung werden **beibehalten**, nicht verworfen, und beim Export zurückgeschrieben.

## Was wird zu was

| In der IFCX-Datei | In BimCraft |
|---|---|
| Ein Knoten mit einer IFC-Klasse (Projekt, Gelände, Gebäude, Geschoss, Wand …) | Das passende IFC4-Element; eine Klasse, die diese Lesung nicht kennt, wird zu einem Platzhalter (building element proxy) |
| Der Name, den der Knoten unter seinem Elternknoten hat | Der Elementname |
| Attribute mit einer Mengenart (Länge, Fläche, Volumen, Masse …) | Ein IFC4-Mengensatz namens `Qto_IFCX` (IFC4-Mengen bleiben IFC4-`Qto_*`-Sätze) |
| Andere Eigenschaftsattribute | Ein Eigenschaftssatz namens `Pset_IFCX` |
| Netz- und Transformationsattribute | Die Dreiecke und die Platzierung des Elements; unsichtbare Netze werden nicht gezeichnet |
| Farbe, Deckkraft, Material, Klassifikation | Oberflächenstil, Material und Klassifikation des Elements |

Einheiten werden als Meter angenommen, mit Z nach oben: Die Alpha-Version sagt, dass Einheiten später dokumentiert werden.

## Export

Wählen Sie {{ui:IFC5 alpha}} in der Symbolleiste, lesen Sie den Hinweis und dann {{ui:.ifcx exportieren}}. Die Datei hat unseren eigenen Kopf (Autor CadCraft, Version ifcx_alpha) und sagt selbst, dass sie das Alpha-Format ist. Jedes Modell wird in seinen eigenen Dateikoordinaten in Metern geschrieben, mit Namen, Klassen, Eigenschaftssätzen, Mengen (als Attribute mit ihrer Art), Farben und Dreiecken. Layer und Vererbung werden zusammengeführt geschrieben. Prüfen Sie die Datei in dem Programm, an das Sie sie senden.

## Grenzen

- Gekrümmte Geometrie (Kurven, Flächen) wird nicht gelesen: nur Dreiecksnetze.
- Türen und Fenster, die in einer Wand verschachtelt sind, werden auf dem Geschoss platziert; die Wand, aus der sie stammen, wird nicht verknüpft.
- IFC4-`Qto_*`-Satznamen bleiben als eigene Attributgruppen erhalten (`cadcraft::qto::…`); das Standard-Alpha-Schema hat nur wenige Mengennamen.
- Das Format kann sich ändern; eine heute erstellte Datei lässt sich morgen möglicherweise nicht lesen.
