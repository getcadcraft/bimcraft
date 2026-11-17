---
title: Das Grundstück, das Gebäude darauf und seine Geschosse
summary: Zeichnen Sie den Umriss des Grundstücks, platzieren und drehen Sie das Gebäude darauf, fügen Sie Geschosse in festgelegten Höhen hinzu oder teilen Sie die Gebäudehöhe auf, und zeichnen Sie auf dem gewählten Geschoss.
keywords: Grundstück, Lageplan, Baulinie, Grenzabstand, Dienstbarkeit, Wegerecht, Grundstücksgrenze, Flurstück, Parzelle, Grenze, Gebäudeplatzierung, Gebäude drehen, Gebäude platzieren, Geschosse, Stockwerke, Etagen, Geschosse hinzufügen, Höhe aufteilen, Geschosshöhe, IfcSite, IfcBuilding, IfcBuildingStorey, räumliche Struktur
from: 48d10c1e
---

## Was Sie tun

Richten Sie die Teile eines IFC-Modells ein, die alles andere enthalten: das Grundstück, das Gebäude darauf und die Geschosse des Gebäudes.

Ein Modell ist als **Grundstück** organisiert, das ein **Gebäude** enthält, das wiederum seine **Geschosse** (Stockwerke) enthält; Wände, Decken und alles andere gehört zu einem Geschoss. {{ui:Datei}} › {{ui:Neues Gebäude}} richtet alle drei ein. Ein Modell aus einem anderen Programm, das ein Gebäude, aber kein Grundstück hat, erhält beim ersten Zeichnen eines Grundstücks eines: Das Gebäude wird darauf platziert, wo es bereits war.

## Das Grundstück zeichnen

1. Schalten Sie {{ui:Zeichnen}} ein und wählen Sie {{ui:Build}} › {{ui:Grundstück}}.
2. Klicken Sie die Ecken des Grundstücks an (das Werkzeug rastet wie das Wandwerkzeug ein). Klicken Sie die erste Ecke erneut an, machen Sie einen Doppelklick oder drücken Sie {{key:Enter}}, um abzuschließen. {{key:Backspace}} nimmt eine Ecke zurück.
3. Die Zeile zeigt die Fläche des Grundstücks. Zeichnen Sie es erneut, um es zu ändern.

Jeder Geschossgrundriss zeigt den Grundstücksumriss als Grundstücksgrenze.

## Das Gebäude auf dem Grundstück platzieren

Mit eingeschaltetem {{ui:Grundstück}} geben Sie die **X**- und **Y**-Position des Gebäudes auf dem Grundstück und seine **Drehung** in Grad ein, oder klicken Sie auf {{ui:Das Gebäude per Klick platzieren}} und klicken Sie dort, wo der Ursprung des Gebäudes liegen soll. Alles im Gebäude (Geschosse, Wände, Raster, alles, was Sie gezeichnet haben) wird mit verschoben; das Grundstück und sein Umriss bleiben. Die Grundrisse zeigen jedes Geschoss weiterhin rechtwinklig zum Gebäude.

## Baulinien und Dienstbarkeiten

Baulinien und Dienstbarkeiten (Grunddienstbarkeiten, Wegerechte) werden auf dem Grundstück als Vorgaben gezeichnet. Sie **warnen, sie blockieren nie**: Eine Wand darüber wird wie gewünscht gezeichnet, und eine Warnung mit dem Namen der Wand und der Linie oder Dienstbarkeit erscheint unter Probleme. Verschieben Sie die Wand zurück, und die Warnung verschwindet. Eine Warnung kann mit einem Grund akzeptiert werden (etwa eine Befreiung, die die Behörde erteilt hat).

- **Baulinie aus Grenzabständen.** {{ui:Build}} › {{ui:Baulinie}}, dann {{ui:Grenzabstände}}: Geben Sie ein, wie weit die Linie von jeder Grenze des Grundstücks einrückt. Die Grenzen sind im Plan nummeriert, solange das Werkzeug eingeschaltet ist. Die Linie wird aus diesen Abständen berechnet und folgt dem Grundstücksumriss, wenn Sie ihn mit ebenso vielen Grenzen neu zeichnen. Die Abstände stammen aus Ihrem Grundbuch oder Bebauungsplan; BimCraft trägt keine ein.
- **Eine gezeichnete Baulinie.** Mit eingeschalteter {{ui:Baulinie}} klicken Sie ihre Punkte an und schließen Sie mit Doppelklick oder {{key:Enter}} ab. Schließen Sie auf dem ersten Punkt für eine geschlossene Linie: Die Fläche innen ist, wo gebaut werden darf, und eine Wand mit irgendeinem Teil außerhalb wird gemeldet. Eine offene Linie warnt nur bei einer Wand, die sie kreuzt.
- **Eine Dienstbarkeit.** {{ui:Build}} › {{ui:Dienstbarkeit}}: Wählen Sie ihre Art, geben Sie ihren Namen, ihre eingetragene Referenz und ihre Breite ein, dann klicken Sie ihre Mittellinie an und schließen Sie ab (ein Streifen), oder schließen Sie sie auf ihrem ersten Punkt (eine Fläche). Eine Wand mit irgendeinem Teil darauf wird auf jedem Geschoss gemeldet.
- Eine Fläche genau auf einer Linie gilt als berührend, nicht kreuzend (die Toleranz beträgt 1 mm).
- Die aktuelle Massenvariante jedes Variantensatzes wird wie die Wände geprüft: Eine Masse außerhalb der Grenze, über einer Baulinie oder auf einer Dienstbarkeit erhält eine Warnung. Siehe [Massenvarianten nebeneinander](topic:massing-options).
- Wählen Sie eine mit {{ui:Wählen}}, um ihren Namen, ihre Referenz, Art oder Breite zu ändern, sie zu verschieben oder zu löschen.

Sie werden auf jedem Geschossgrundriss, auf Blättern und im Grundriss-PDF gezeichnet: Baulinien gestrichelt, Dienstbarkeiten gepunktet, jeweils mit ihrer Beschriftung. In der IFC-Datei ist jede eine Anmerkung (IfcAnnotation, Typ BuildingLine oder Servitude) am Grundstück, mit ihrer Linie als einfache Kurve, die andere Programme lesen können. Die Prüfung nutzt den echten Umriss jeder Wand im Grundriss mit ihren Verbindungen, wie gezeichnet; eine gekrümmte Wand wird anhand ihrer eigenen Stärke um ihre Mittellinie geprüft.

## Geschosse hinzufügen

Im Bereich {{ui:Geschosse}} fügt {{ui:Oben ein Geschoss hinzufügen}} eines hinzu, und {{ui:Ebene darunter hinzufügen}} fügt eines unter dem untersten hinzu (ein Untergeschoss, mit negativer Höhe). {{ui:Geschosse hinzufügen…}} fügt mehrere auf einmal hinzu:

- **In diesen Höhen**: Geben Sie Höhen über dem untersten Geschoss ein, durch Kommas getrennt (zum Beispiel `12', 24', 36'`). Höhen, auf denen schon ein Geschoss liegt, werden übersprungen.
- **Gebäudehöhe aufteilen**: Geben Sie die Höhe des Gebäudes und die Anzahl der Geschosse ein. Die vorhandenen Geschosse wandern vom untersten an aufwärts zu ihren neuen Höhen, fehlende werden hinzugefügt, und darüberliegende bleiben, wo sie sind.

Wände, die bis zum Geschoss darüber reichen, folgen ihm, ebenso Stützen und Rampen.

{{ui:Dieses Geschoss kopieren…}} (im selben Bereich) kopiert, was auf dem Geschoss gezeichnet ist, das Sie gerade ansehen, auf ein anderes Geschoss oder auf ein neues Geschoss oben, sodass ein Grundriss in einem Schritt das Gebäude hinauf übertragen werden kann. Siehe [Wände zeichnen](topic:draw-walls).

## Auf einem Geschoss zeichnen

Jedes Werkzeug unter {{ui:Zeichnen}} arbeitet auf dem Geschoss, das in der Geschossliste des Grundrisses gewählt ist (oder im Bereich {{ui:Geschosse}} angeklickt wurde): Was Sie zeichnen, gehört zu diesem Geschoss.

## Was Sie sehen sollten

- Jede dieser Änderungen ist ein Schritt: {{key:Mod+Z}} nimmt sie zurück.
- In der IFC-Datei: das Grundstück (IfcSite) mit Umriss und Fläche, das Gebäude (IfcBuilding), darauf platziert, und die Geschosse (IfcBuildingStorey) im Gebäude.

Siehe auch [Koordinaten in BimCraft](topic:coordinates) für den Projektursprung und den Vermessungspunkt.
