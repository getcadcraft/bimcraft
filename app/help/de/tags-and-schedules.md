---
title: Elemente taggen und nach Tag auflisten
summary: Definieren Sie eigene Tags (einen Namen, einen Typ, die erlaubten Werte, welche Klassen), taggen Sie viele Elemente auf einmal und erstellen Sie Listen, deren Spalten, Filter und Gruppen die Tags lesen. Die Tags werden in der IFC gespeichert.
keywords: Tags, Tag, taggen, benutzerdefinierte Eigenschaften, Parameter, gemeinsame Parameter, Eigenschaftssatz, Pset, Liste, Filter, Gruppieren nach, Oberfläche, Feuerwiderstand, Massenbearbeitung, csv
from: 9cc7c90d
---

## Was Sie hier tun

Ein Tag ist eine eigene Eigenschaft, etwa *Oberfläche* oder *Feuerwiderstand*. Sie definieren sie einmal für das Projekt, setzen sie auf viele Elemente gleichzeitig, und jede Liste in BimCraft kann sie lesen: die Tag-Liste hier, {{ui:Mengen}}, Suchen, Farbe nach Eigenschaft und [Dokumente aus dem Modell](topic:documents-from-the-model).

## Schritte

1. Öffnen Sie ein IFC-Modell oder beginnen Sie ein neues Gebäude.
2. Öffnen Sie im linken Bereich unter {{ui:Mengen}} die Option {{ui:Tags}}.
3. Klicken Sie auf {{ui:Kennzeichnung hinzufügen}}. Geben Sie einen Namen ein, wählen Sie den Typ und listen Sie, falls gewünscht, die erlaubten Werte (mit Kommas) und die Klassen auf, für die es gilt (`IfcDoor`, `IfcWall` …). Klicken Sie auf {{ui:Tag hinzufügen}}.
4. Wählen Sie die Elemente im Modell aus (Suchen hilft: wählen Sie alle Türen auf einmal).
5. Wählen Sie unter {{ui:Auswahl taggen}} für jedes Tag, das Sie setzen wollen, einen Wert oder geben Sie ihn ein, lassen Sie die anderen unverändert und klicken Sie auf {{ui:Auf … ausgewählte Elemente anwenden}}.
6. Setzen Sie unter {{ui:Tag-Liste}} die Häkchen bei den Spalten, fügen Sie Filter hinzu, wählen Sie {{ui:Gruppieren nach}} und klicken Sie dann auf {{ui:CSV herunterladen}}.

## Was Sie sehen sollten

- Ein Schritt in der Änderungsliste für jede gespeicherte Definition und jedes Taggen; {{ui:Rückgängig}} nimmt ihn zurück.
- Elemente einer Klasse, für die ein Tag nicht gilt, bleiben bei diesem Tag außen vor, und die Statuszeile sagt, wie viele es sind.
- Die Tag-Liste führt eine Zeile pro Element auf, gruppiert nach dem Feld, das Sie gewählt haben; klicken Sie in die erste Zelle einer Zeile, um dieses Element zu wählen.
- {{ui:Mengen}} listet die Tags unter `CadCraft_Tags` auf, sodass Sie dort Flächen oder Anzahlen nach einem Tag summieren können.

## Typen

Die Typen sind dieselbe Liste wie bei Familienparametern: Länge (Millimeter), Winkel (Grad), Zahl, Ganzzahl, Ja / Nein, Stift (1–16), Text, Material und Füllung. Ein Wert, der nicht zu seinem Typ passt oder keiner der erlaubten Werte ist, wird mit einer Meldung abgelehnt; nichts ändert sich.

## Gut zu wissen

- Alles ist einfaches IFC, sodass andere Programme die Werte lesen: Die Definitionen stehen im Eigenschaftssatz `CadCraft_TagDefs` am Projekt, die Werte im Eigenschaftssatz `CadCraft_Tags` an jedem Element (eine Eigenschaft je Tag). Längen werden in der Längeneinheit der Datei geschrieben.
- `IfcWall` in den Klassen eines Tags umfasst auch Standardwände und elementierte Wände.
- Ein Tag umzubenennen benennt seine Werte an jedem Element im selben Schritt um. Ein Tag zu entfernen entfernt nur seine Definition: bereits gesetzte Werte bleiben als einfache Eigenschaften an den Elementen. Löschen Sie sie zuerst (wählen Sie {{ui:Löschen}}), um sie zu entfernen.
- Tags in der CadCraft-Zeichenanwendung (Blockattribute) sind noch nicht umgesetzt.
