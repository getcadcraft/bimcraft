---
title: Abstände, Flächeninhalte und Positionen in 3D messen
summary: Messen Sie zwischen zwei Punkten eines IFC-Modells mit Einrasten an Ecken und Kanten, lesen Sie die Differenz entlang X, Y und Z ab und messen Sie die Fläche einer ebenen Fläche.
keywords: messen, Messung, Abstand, Länge, Bemaßung, Fläche, Flächeninhalt, Fang, Ecke, Kante, Maßband, Lineal, Freiraum, Position, Breitengrad, Längengrad, Breite/Länge, Koordinaten, Georeferenzierung, Kartenumrechnung, EPSG, Vermessung, Rechtswert, Hochwert, WGS 84, Datum
from: 5f430bba
---

## Was Sie tun

Prüfen Sie einen Freiraum, eine Wandlänge oder die Größe einer Fläche direkt am Modell, ohne das Erstellungsprogramm zu öffnen.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Klicken Sie in der Symbolleiste auf {{ui:Messen}} oder drücken Sie {{key:M}}. Unten in der Ansicht öffnet sich eine Leiste.
3. **Ein Abstand:** Wählen Sie {{ui:Abstand}} und klicken Sie den ersten Punkt, dann den zweiten an. Nahe einer Ecke rastet der Zeiger darauf ein, nahe einer Kante auf die Kante; die kleine Beschriftung am Zeiger sagt, welches. Jedes Klickpaar ergibt eine Messung.
4. **Der Flächeninhalt einer Fläche:** Wählen Sie {{ui:Flächeninhalt}} und klicken Sie eine Fläche an. Die ganze ebene Fläche leuchtet auf, und ihr Flächeninhalt wird angezeigt.
5. **Gerade Linien:** Halten Sie {{key:Shift}} gedrückt, während Sie den zweiten Punkt wählen, oder drücken Sie {{ui:Gerade}} in der Leiste, um sie festzuhalten. Die Linie verläuft dann entlang der einen Achse, der der Zeiger am nächsten ist (in der Draufsicht entlang X oder Y des Grundrisses; in anderen Ansichten entlang X, Y oder Z), und die Zeigerbeschriftung sagt „gerade entlang einer Achse“. {{key:M}} startet und beendet weiterhin das Messen.
6. Klicken Sie {{ui:Löschen}}, um die Messungen zu entfernen, oder {{ui:Fertig}} (oder {{key:Esc}}), um das Messen zu beenden.

## Was Sie sehen sollten

- Eine Linie zwischen den beiden Punkten mit ihrer Länge darauf, und in der Leiste die Länge mit dem Weg entlang X, Y und Z (in den Achsen des Modells, Z nach oben), alles in den {{ui:Einheiten}}, die in der Symbolleiste gewählt wurden.
- Der Flächeninhalt einer Fläche in Quadratmetern, auf der Fläche und in der Leiste.
- Beschriftungen bleiben bei ihren Messungen, während Sie drehen, verschieben und zoomen.
- Während Sie messen, wählen Klicks keine Elemente aus. Eine Schnittebene oder ein Schnittbereich schneidet das Modell weiterhin, und Sie können messen, was er zeigt, einschließlich der Schnittflächen.

## Wo ein Punkt auf der Erde liegt

Klicken Sie in der Messleiste auf {{ui:Standort}} und dann einen Punkt im Modell (er rastet an Ecken und Kanten ein wie bei Abständen). Die Leiste zeigt:

- den **Breiten- und Längengrad** in Dezimalgrad und in Grad, Minuten und Sekunden, zunächst in WGS 84;
- die **Kartenkoordinaten** (Rechtswert und Hochwert, in den {{ui:Einheiten}} der Symbolleiste geschrieben) im eigenen Kartensystem des Modells, zum Beispiel `EPSG:28356`;
- die **Höhe** und das Höhenbezugssystem, das die Datei nennt, sowie das **eigene Datum** der Datei (zum Beispiel GDA94).

{{ui:Kopieren}} legt alles in einer Zeile in die Zwischenablage. Ändern Sie das System des Breiten- und Längengrades unter {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Standort}}: WGS 84 (wie GPS und Webkarten), das eigene Datum der Datei oder ein anderes gängiges, etwa ETRS89 oder NAD83.

Dies setzt ein georeferenziertes Modell voraus: eines, das mit Kartenkoordinaten exportiert wurde (eine Kartenumrechnung in ein projiziertes System mit EPSG-Code). Ein Modell, das nur eine Breite und Länge des Grundstücks hat, erhält eine Näherungsposition, berechnet aus dem Punkt des Grundstücks und seinem geografischen Nord; die Leiste sagt es. Bei mehreren offenen Modellen nutzt jeder Punkt die Georeferenzierung seines eigenen Modells.

:::note
Der Wechsel zwischen Datumsangaben (etwa GDA94 zu WGS 84) erfolgt ohne Rastergitterdateien und ist daher auf wenige Meter genau; die Statuszeile sagt, wie genau. Die Kartenkoordinaten selbst sind exakt.
:::

## Häufige Fehler

- **„…hat keine Georeferenzierung“.** Die Datei hat keine Kartenumrechnung und keine Breite und Länge des Grundstücks. Exportieren Sie sie erneut mit gesetztem Koordinatensystem (gemeinsame Koordinaten / Vermessungspunkt im Erstellungsprogramm).
- **Kartenkoordinaten, aber keine Breite und Länge.** Die Datei nennt ihr Kartensystem ohne EPSG-Code oder mit einem, der nicht in der Liste steht; die Statuszeile sagt, welcher.
- **Der Punkt liegt auf der Fläche, nicht auf der Ecke.** Das Einrasten sieht das Element unter dem Zeiger an. Rücken Sie näher an die Ecke oder zoomen Sie hinein.
- **Die Fläche ist kleiner als erwartet.** Öffnungen bleiben unberücksichtigt, und eine Fläche, die sich biegt, sind mehrere Flächen: Klicken Sie jede an.
- **{{key:Esc}} hat das Messen beendet.** Das erste {{key:Esc}} verwirft einen halb gesetzten Abstand; das zweite beendet das Messen.

## Weiter

- [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)
- [Elemente ausblenden, isolieren und durchsichtig machen](topic:hide-and-isolate)
