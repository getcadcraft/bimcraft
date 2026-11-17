---
title: Raster und Stützen
summary: Rasterlinien mit nummerierten und buchstabierten Köpfen anlegen, nach Abstand oder einzeln; Wände und Stützen entlang der Linien zeichnen und in Grundrissen, Ansichten und Schnitten sehen.
keywords: Raster, Rasterlinie, Stützenraster, Achse, Achsen, Rasterkopf, Tragraster, 1 2 3, A B C, Stütze, Stützen, Pfeiler, Pfosten, Fang, IfcGrid, IfcColumn
from: bf99a8f7
---

## Was Sie tun

Ein Gebäude auf einem Raster abstecken und danach Wände zeichnen und Stützen entlang seiner Linien platzieren.

## Ein ganzes Raster platzieren

1. {{ui:Zeichnen}} einschalten, dann {{ui:Build}} › {{ui:Raster}} wählen.
2. Klicken Sie auf {{ui:Raster platzieren…}}. Geben Sie an, wie viele **nummerierte Linien** (1, 2, 3 …) und **Buchstabenlinien** (A, B, C …) Sie möchten und wie weit sie auseinanderliegen. Geben Sie einen Abstand ein oder mehrere, durch Kommas getrennt, für ungleiche Felder (zum Beispiel `20', 24', 20'`). {{ui:Über die letzten Linien hinaus}} ist, wie weit jede Linie über die äußeren Linien der anderen Art hinausreicht, und {{ui:Gedreht (Grad)}} dreht das ganze Raster.
3. Klicken Sie auf {{ui:Platzieren}} und dann an die Stelle, an der die erste Kreuzung (1 / A) liegt. Die Vorschau folgt dem Zeiger.

Nummerierte Linien verlaufen über den Plan nach oben und sind darüber verteilt; Buchstabenlinien verlaufen quer über den Plan und sind nach oben verteilt. Buchstaben I und O werden übersprungen, wie auf Zeichnungen üblich, damit sie nie mit 1 und 0 verwechselt werden.

## Rasterlinien einzeln zeichnen

Bei eingeschaltetem {{ui:Raster}} klicken Sie, wo eine Linie beginnt und wo sie endet. Sie erhält die nächste Bezeichnung der Linien, an denen sie entlangläuft (nach 3 kommt 4; nach B kommt C). Mit {{key:Esc}} beenden Sie das Zeichnen.

## Eine Rasterlinie ändern

Bei eingeschaltetem {{ui:Raster}} klicken Sie eine Linie an, um sie auszuwählen. Geben Sie eine neue {{ui:Bezeichnung}} ein und drücken Sie {{key:Enter}}, oder klicken Sie auf {{ui:Diese Linie löschen}} (oder drücken Sie {{key:Delete}}). {{ui:Rasterköpfe}} setzt die Köpfe an beide Enden, am Anfang oder Ende jeder Linie, oder nirgends. Jede Änderung ist ein Schritt: {{key:Mod+Z}} macht sie rückgängig.

## Entlang des Rasters zeichnen

Das Werkzeug {{ui:Wand}}, das Werkzeug {{ui:Stütze}} und die anderen Zeichenwerkzeuge fangen an den Rasterlinien und an deren Kreuzungen ein (die Fangmarke ist ein kleiner Kreis mit einem Kreuz).

**Stützen:** Wählen Sie {{ui:Build}} › {{ui:Stütze}}, dann die Form (rechteckig oder rund), die Größe und ob die Stütze **bis zum Geschoss darüber** reicht oder auf eine feste Höhe, und klicken Sie dann. {{ui:An jeder Rasterkreuzung}} platziert eine Stütze an jeder Kreuzung, die noch keine hat. Klicken Sie eine Stütze an, um Form, Größe oder Höhe in {{ui:Eigenschaften}} zu ändern; {{key:Delete}} entfernt sie. Stützen, die bis zum Geschoss darüber reichen, folgen dessen Höhe, wenn sie sich ändert.

## Was Sie sehen sollten

- Das Raster im Plan jedes Geschosses, mit einem Kopf und seiner Bezeichnung an den Enden jeder Linie.
- Rasterlinien im Zeichnungssatz: in den Plänen und, wo eine Linie von der Kante gesehen wird, in Ansichten und Schnitten, mit ihrem Kopf über dem Gebäude. Siehe [Ansichten, Schnitte und Blätter](topic:sheets).
- In der IFC-Datei: ein Raster für das Gebäude (IfcGrid, mit seinen nummerierten Linien in der einen Liste und seinen Buchstabenlinien in der anderen) und Stützen als IfcColumn mit Größe, Höhe und Mengen. Andere BIM-Programme zeigen beides.

:::note
Ein Raster aus einer Datei eines anderen Programms wird angezeigt, und die Werkzeuge fangen daran ein, aber seine Linien lassen sich hier nicht ändern.
:::
