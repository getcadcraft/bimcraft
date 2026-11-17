---
title: Aus anderen BIM- und Zeichenprogrammen kommend
summary: Wie Gewohnheiten aus Desktop-BIM-Programmen und der DWG-Ansicht auf BimCraft übertragen werden und welche Unterschiede häufig Probleme machen.
keywords: Umstieg, migrieren, vertraut, Desktop-BIM, Familie, Parameter, Projektbrowser, Eigenschaftspalette, ViewCube, xref, Layer-Manager, Unterschiede, vergleichen
from: 2de629af
---

Wenn Sie Revit kennen, wird Ihnen das meiste in BimCraft in den Begriffen vertraut vorkommen, im Umfang aber fremd. Der wichtigste Unterschied: **Diese Version liest und prüft Modelle und bearbeitet IFC-Daten. Sie erstellt noch nicht wie Revit.** Sie können keine Wände zeichnen, keine Familien platzieren, keine Ansichten oder Blätter erzeugen und keine Projektdatei speichern. Was Sie tun können: fast jede Gebäudedatei auf jedem Rechner mit einem Browser öffnen, ihren Inhalt sehen, einen ganzen Projektordner prüfen und die Daten in einem IFC-Modell korrigieren.

## Gewohnheiten zugeordnet

| Wenn Sie gewohnt sind | In BimCraft |
|---|---|
| Eine `.rvt` in Revit öffnen, um das Modell zu sehen | BimCraft öffnet die `.rvt` als Dateikarte: Version, Projektinformationen, Verknüpfungen, Vorschau. Für das 3D-Modell IFC exportieren und dieses öffnen. [Eine Projekt- oder Familiendatei lesen](topic:read-rvt-file) |
| Vor dem Öffnen prüfen, in welcher Version eine Datei gespeichert wurde | Die Karte zeigt oben „in Revit … gespeichert“, ohne die Datei zu aktualisieren oder zu verändern |
| Den Projektbrowser | Kein Browser für Ansichten und Blätter. Ein IFC-Modell hat die Listen {{ui:Geschosse}} und {{ui:Bauteile}}; eine Zeichnung hat Blatt-Registerkarten |
| Die Eigenschaftspalette | Das Panel {{ui:Eigenschaften}} rechts, für das angeklickte Element. IFC-Eigenschaftssätze statt Parametergruppen |
| Exemplar- und Typparameter | Exemplar-Eigenschaftssätze und Sätze mit der Markierung „(Typ)“. Eine Typänderung gilt für jedes Element des Typs, wie in Revit. [Eine Typ-Eigenschaft für jedes Element eines Typs ändern](topic:type-vs-instance) |
| Typ bearbeiten | Kein Dialog: auf einen Wert in einem Satz „(Typ)“ klicken und eintragen |
| Viele Elemente auswählen, Filter, Alle Exemplare auswählen | Ein Element nach dem anderen. Noch nicht umgesetzt |
| Der ViewCube und das Navigationsrad | Ein ViewCube unten rechts, vier Schaltflächen ({{ui:Einpassen}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Seite}}) und freies Drehen. Kein Navigationsrad |
| Umschalt- und mittlere Maustaste zum Drehen, mittlere Taste zum Verschieben | Mit der linken Maustaste drehen, mit der rechten (oder {{key:Shift}} und Ziehen) mit Pan verschieben, das Mausrad zoomt. Das Menüformat {{ui:BIM-Menüband}} wechselt zu Pan mit der mittleren Taste und {{key:Shift}} mit der mittleren Taste zum Drehen. [Menüs, Tasten und Maus](topic:menus-keys-and-mouse) |
| Grundrisse, Schnitte, Schnittboxen | Eine Ebene für {{ui:Schnitt}} zur Zeit ({{key:X}}); keine Schnittbox und keine 2D-Pläne. [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane) |
| Ausblenden in der Ansicht, Isolieren, Sichtbarkeit und Grafik | {{ui:Geschosse}} ein und aus, {{ui:Räume}} und {{ui:Kanten}}. Noch kein Ausblenden einzelner Elemente |
| Räume | IFC-Räume, zunächst ausgeblendet. Klicken Sie auf {{ui:Räume}} |
| Speichern, Speichern unter, mit zentraler Datei synchronisieren | {{ui:Als IFC speichern}} lädt eine neue IFC-Datei herunter. Das Original ändert sich nie. Keine zentrale Datei, keine gemeinsame Bearbeitung |
| Rückgängig mit {{key:Mod+Z}} | Funktioniert bei IFC-Änderungen bis zum Speichern. [IFC-Eigenschaften ändern und eine bearbeitete Kopie speichern](topic:edit-ifc-properties) |
| Verknüpfungen verwalten | Projektordner öffnen: Jede Verknüpfung wird geprüft und mit **In diesem Ordner**, **Gleicher Name gefunden**, **Bibliotheksdatei** oder **Nicht in diesem Ordner** markiert. [Einen ganzen Projektordner öffnen](topic:open-project-folder) |
| Prüfen oder eine Datei öffnen, um zu sehen, ob sie beschädigt ist | Der Ordnerbericht prüft jede Kopie und Sicherung auf abgeschnittene Dateien, in Sekunden. [Einen Ordner auf beschädigte Kopien prüfen](topic:check-folder-health) |
| Aus einem unübersichtlichen Ordner die richtige Datei finden | Das Feld {{ui:Hier beginnen}} schlägt eine vor, mit Gründen |

Wenn Sie Modelle vor allem zur Prüfung öffnen, wie in einem Programm für Modellprüfung oder IFC-Ansicht, wählen Sie das Menüformat {{ui:Betrachter}}: Die Anzeige- und Prüfwerkzeuge kommen zuerst, die Gebäudewerkzeuge warten in einem Menü. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).

## Aus der DWG-Ansicht

Wenn Sie DWGs in AutoCAD oder einer DWG-Ansicht öffnen:

| Wenn Sie gewohnt sind | In BimCraft |
|---|---|
| Registerkarten für Modell und Layout unten | Registerkarten über der Zeichnung: {{ui:Modell}} und eine pro Blatt |
| ZOOM Grenzen, Doppelklick auf das Rad | Doppelklick, {{key:F}} oder {{ui:Einpassen}} |
| Mit der mittleren Taste verschieben (Pan) | Mit einer beliebigen Taste ziehen |
| Der Layer-Manager | Die Liste {{ui:Layer}}: ankreuzen zum Anzeigen, abwählen zum Ausblenden, {{ui:Alle ein}} und {{ui:Alle aus}} |
| Der Xref-Manager | **Verknüpfte Zeichnungen** rechts, mit **Angezeigt** oder **Nicht gefunden**, und {{ui:Verknüpfte Zeichnungen hinzufügen…}} |
| Plotvorschau | {{ui:Druckansicht}} oder {{key:P}}: schwarz auf weiß mit Linienstärken. Es druckt nicht |
| Datenauszug aus Blockattributen | Der Reiter {{ui:Ausstattung}} für beschriftete Zeichnungen der Gastronomie, mit {{ui:CSV herunterladen}} |
| Messen, zeichnen, bearbeiten, speichern unter | Nicht in BimCraft. Die Zeichen-App CadCraft zeichnet und bearbeitet |

## Unterschiede, die Probleme machen

- **Es läuft im Browser, und der Browser geht sorgfältig mit Ihren Dateien um.** BimCraft kann nur Dateien und Ordner lesen, die Sie ihm geben, durch Auswählen oder Hineinziehen. Es kann keine Datei von selbst öffnen und nicht darüber speichern. Jedes Speichern ist ein Download.
- **Nichts wird hochgeladen.** Das Wort „hochladen“ in den Ordnerdialogen mancher Browser ist deren eigene Formulierung. Die Dateien bleiben auf Ihrem Rechner.
- **IFC ist das Modellformat.** Eine Projektdatei öffnet sich als Karte, weil ihr 3D-Inhalt nicht dokumentiert ist. Behandeln Sie IFC als den Weg, auf dem Modelle in BimCraft gelangen.
- **Änderungen werden kopiert (Copy-on-Write).** Das Ändern des Werts eines Elements verändert nie seine Nachbarn, auch wenn der Exporter diesen Wert zwischen ihnen geteilt hat. Typ-Eigenschaften sind die bewusste Ausnahme.
- **Kein Projekt, keine Ansichten.** BimCraft zeigt jeweils eine Datei und merkt sich nach dem Schließen des Tabs nichts davon, außer den Namen der zuletzt verwendeten Ordner in Chrome und Edge.
- **Mac-Tasten.** Wo Revit-Tastenkürzel Ctrl verwenden, verwendet BimCraft {{key:Mod}}: Command auf einem Mac.
- **Ihre Mausgewohnheiten.** Drehen erfolgt mit der linken Taste, nicht mit Shift und der mittleren Taste, außer Sie wählen das Menüformat {{ui:BIM-Menüband}} oder stellen die Tasten selbst ein, siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).

Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet), um zu erfahren, was Sie heute stattdessen verwenden können.
