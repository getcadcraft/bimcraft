---
title: Erste Schritte mit BimCraft
summary: Was BimCraft heute kann, wie Sie Ihr erstes Modell öffnen, es in 3D ansehen, einen Wert ändern und eine Kopie speichern.
keywords: Start, erster Start, öffnen, ifc, rvt, dwg, Schnellstart, Einführung, Betrachter, bim
from: fc2dea19
---

BimCraft ist die Gebäudemodell-App der CadCraft-Familie. In diesem Build **öffnet, liest und untersucht** sie Gebäudedateien und **bearbeitet die Daten in IFC-Modellen**. Neue Elemente zeichnet oder modelliert sie noch nicht. Stellen Sie sie sich als Modellbetrachter und -prüfer vor, mit dem Sie zusätzlich Namen, Tags und Eigenschaftswerte in einer IFC-Datei korrigieren können.

Was sie öffnet:

| Datei | Was Sie bekommen |
|---|---|
| IFC (`.ifc`) | Das ganze Modell in 3D: Orbit, Geschosse, Bauteileigenschaften und das Bearbeiten von Namen und Eigenschaftswerten |
| Projekt- und Familiendateien (`.rvt`, `.rfa`, `.rte`, `.rft`) | Eine Dateikarte: die Version, in der sie gespeichert wurde, Projektinformationen, das Vorschaubild und verknüpfte Dateien. Kein 3D. |
| DWG und DXF | Die Zeichnung in 2D: Modellbereich und jedes Blatt, Layer, verknüpfte Zeichnungen, Druckansicht und eine Ausstattungsliste für getaggte Großküchenzeichnungen |
| Ein Projektordner | Ein Bericht über jedes Modell im Ordner: Sicherungen, Verknüpfungen, beschädigte Kopien und ein Vorschlag, mit welcher Datei Sie beginnen sollten |

Alles geschieht in Ihrem Browser, auf Ihrem Rechner. **Nichts wird hochgeladen.** Einzelheiten stehen unter [Dateien, die BimCraft öffnet und speichert](topic:files).

## BimCraft öffnen

1. BimCraft in einem aktuellen Browser öffnen. Chrome, Edge, Firefox und Safari funktionieren alle. [Browser, Geräte und Arbeitsspeicher](topic:platforms) listet die Unterschiede auf.
2. Auf den leeren Bildschirm warten, der „Open a building model.“ sagt.

:::note
BimCraft läuft im Browser und auf dem Desktop in CadCraft Studio, zusammen mit den anderen Apps. Cloud-Speicherung ist noch nicht verfügbar: Sie öffnen Dateien von Ihrem Rechner und speichern Kopien dorthin zurück.
:::

## Ihr erstes Modell öffnen

Am schnellsten sehen Sie mit einer IFC-Datei, was BimCraft tut.

1. In der Mitte des Bildschirms {{ui:Datei wählen}} anklicken.
2. In {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateimanager}} eine `.ifc`-Datei auswählen und bestätigen.
3. Warten, während die Statuszeile unten auf dem Bildschirm „Starting the IFC engine…“ und dann „Building geometry“ sagt.

Sie sollten in der Mitte das Modell in 3D sehen, links einen Bereich {{ui:Datei}} und eine Liste {{ui:Geschosse}} und rechts einen leeren Bereich {{ui:Eigenschaften}}. Die Statuszeile endet mit „Opened“ und der Anzahl der Bauteile.

:::tip
Sie können eine Datei auch aus {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}} direkt auf die Seite ziehen. Der Bildschirm zeigt „Drop to open“, während Sie ziehen.
:::

:::offline
Die IFC-Engine wird beim ersten Öffnen eines IFC-Modells von der Website geladen, es sei denn, BimCraft wurde für die Offline-Nutzung gespeichert. DWG- und DXF-Zeichnungen, Projektdateien und Ordner brauchen nichts zusätzlich: Ihre Leser sind Teil der App. Wenn die Schaltfläche der App-Leiste {{ui:Offline bereit}} sagt, öffnet sich alles offline. Wenn nicht, öffnen sich IFC-Modelle erst wieder, wenn Sie die Verbindung wiederhaben, außer eines wurde in diesem Tab schon geöffnet. Siehe [Online und offline](topic:online-offline).
:::

:::online
Gehen Sie irgendwohin ohne Verbindung? {{ui:Für Offline speichern}} in der App-Leiste anklicken und auf {{ui:Offline bereit}} warten. Die gespeicherte Kopie (etwa 11 MB) enthält die IFC-Engine. Siehe [Offline arbeiten](common:offline).
:::

## Sich umsehen

:::mouse
1. Mit der linken Maustaste ziehen, um das Modell zu orbiten.
2. Am Rad scrollen, um zu zoomen.
3. Mit der rechten Maustaste ziehen, um zu verschieben (Pan). Auf einem Mac-Trackpad halten Sie stattdessen {{key:Shift}} und ziehen.
4. {{key:F}} drücken oder {{ui:Einpassen}} anklicken, um wieder das ganze Modell zu sehen.
:::

:::touch
1. Mit einem Finger ziehen, um zu orbiten.
2. Mit zwei Fingern zusammenziehen, um zu zoomen, und beide Finger gemeinsam bewegen, um zu verschieben.
3. {{ui:Einpassen}} antippen, um wieder das ganze Modell zu sehen.
:::

## Eine echte Sache tun: ein Tag korrigieren

1. Eine Wand, Tür oder ein beliebiges Bauteil im Modell anklicken. Es wird blau, und seine Eigenschaften erscheinen rechts.
2. Im Bereich {{ui:Eigenschaften}} auf den Wert neben **Tag** klicken.
3. Das neue Tag tippen und {{key:Enter}} drücken.
4. Den Abschnitt {{ui:Änderungen}} ansehen, der sich links geöffnet hat: Ihre Änderung steht dort mit altem und neuem Wert.

## Eine Kopie speichern

1. Im Abschnitt {{ui:Änderungen}} {{ui:Als IFC speichern}} anklicken oder {{key:Mod+S}} drücken.
2. Die neue Datei in Ihrem Downloads-Ordner finden. Sie heißt wie das Original mit angehängtem „ (edited)“, zum Beispiel `Clinic (edited).ifc`.

Ihre Originaldatei wird nie geändert. [IFC-Eigenschaften ändern und eine bearbeitete Kopie speichern](topic:edit-ifc-properties) erklärt das Bearbeiten ausführlich.

## Wie es weitergeht

- [Der BimCraft-Bildschirm](topic:workspace): jeder Bereich mit Namen.
- [Umstieg von anderen BIM- und Zeichenprogrammen](topic:coming-from): was sich anders anfühlt, wenn Sie Revit gewohnt sind.
- [Einen ganzen Projektordner öffnen](topic:open-project-folder): BimCraft auf einen Projektordner richten und die Dateien sortieren lassen.
- [Eine DWG- oder DXF-Zeichnung ansehen](topic:view-dwg): Blätter, Layer und Druckansicht.
