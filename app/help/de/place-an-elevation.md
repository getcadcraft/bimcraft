---
title: Eine Ansicht platzieren und öffnen
summary: Platzieren Sie eine Höhenmarkierung auf dem Grundriss, richten Sie sie so aus, wie sie blicken soll, suchen Sie dann ihre Zeichnung im Projektbrowser, bearbeiten Sie sie dort und setzen Sie sie auf ein Blatt. Schritte für die Menüband-Layouts und für das klassische Layout.
keywords: Höhe, Ansicht, Höhenansicht, Höhenmarkierung, Höhenkennzeichnung, Höhe platzieren, neue Höhe, Höhe erstellen, Außenansicht, Seitenansicht, Vorderansicht, Ansicht von einem Punkt, wo ist meine Höhe, Höhe öffnen, Höhe auf einem Blatt, Ansicht umkehren, Höhe umbenennen, Nordansicht, Ansichten kacheln, Ansicht teilen, Grundriss und 3D nebeneinander
from: a7cfd2b9
---

## Was Sie tun werden

Sie erstellen eine eigene Ansicht: eine Zeichnung des Gebäudes, gesehen von einem Punkt Ihrer Wahl, mit der Blickrichtung, die Sie wählen. Dafür genügen zwei Klicks auf einem Grundriss. Die Zeichnung wird danach mit den anderen Ansichten des Gebäudes aufgelistet.

:::note
Die vier Seiten sind bereits vorhanden. Jedes Gebäude hat eine Nord-, Ost-, Süd- und West-Ansicht im {{ui:Project browser}} unter {{ui:Elevations}}, ohne dass Sie etwas platzieren müssen. Platzieren Sie eine eigene, wenn Sie eine Ansicht von einem anderen Standpunkt brauchen: rechtwinklig zu einem abgewinkelten Gebäudeflügel, aus einem Innenhof oder auf eine einzelne Wand innerhalb eines Raums.
:::

## Wo das Werkzeug ist

- Menüband-Layouts: {{ui:View}} › **Erstellen** › {{ui:Elevation}}.
- Klassisches Layout: {{ui:Draw}} einschalten, dann {{ui:Build}} › {{ui:Elevation}}.
- Beliebiger Menüstil: Der Befehl heißt Höhe. Die Befehlspalette findet ihn, und die Befehlszeile nimmt ELEVATION an.

## Schritte

1. Wählen Sie {{ui:Elevation}}. Eine Ansicht wird auf einem Grundriss platziert. Waren Sie in der 3D-Ansicht, zeigt BimCraft deshalb den Grundriss der Ebene, auf der Sie sich befanden. Der Zeiger zeigt **Standort der Ansicht angeben**.
2. Klicken Sie auf den Punkt, von dem aus die Ansicht genommen wird. Für eine Außenansicht klicken Sie außerhalb des Gebäudes, ein Stück entfernt von der Wand, die Sie sehen möchten.
3. Der Zeiger zeigt nun **Blickrichtung angeben**. Bewegen Sie sich zum Gebäude hin: Ein Pfeil zeigt die Richtung, und die kurze Linie quer zu Ihrem ersten Klick ist die Kante, von der aus die Ansicht blickt. Klicken Sie.
4. Auf dem Grundriss erscheint ein Kreis mit einer Nummer und einem Zeiger. Das ist die Höhenmarkierung. Die erste ist 1, die nächste 2.
5. Drücken Sie Esc, um abzuschließen, oder fahren Sie fort und platzieren Sie eine weitere.

Das Platzieren einer Markierung ist ein einziger Schritt: {{key:Mod+Z}} nimmt sie zurück.

## Zeichnung öffnen

Der Grundriss bleibt nach dem zweiten Klick vor Ihnen. Die Zeichnung finden Sie im {{ui:Project browser}}:

1. Öffnen Sie {{ui:Elevations}}. Ihre Ansicht steht nach den vier Seiten als **Höhe 1**.
2. Klicken Sie in der Zeile auf die Stift-Schaltfläche {{ui:Edit in this view}}, um die Zeichnung zu sehen und darin zu arbeiten: Wände, Türen, Fenster und Ebenen verschieben, Notizen und Bemaßungen hinzufügen. Siehe [In Ansichten und Schnitten bearbeiten](topic:edit-in-elevations).
3. Klicken Sie auf die Zeile selbst, um den Zeichnungssatz zu öffnen, oder fügen Sie die Ansicht einem eigenen Blatt hinzu. Siehe [Ansichten und Blätter](topic:views-and-sheets).

Im klassischen Layout befindet sich der Projektbrowser im linken Bereich, solange {{ui:Draw}} eingeschaltet ist. In den Menüband-Layouts ist er die Registerkarte {{ui:Project Browser}} unter Eigenschaften.

## Was die Ansicht zeigt

- Alles vor der Markierung, soweit das Gebäude reicht. Nichts dahinter.
- Die Ebenen mit ihren Namen und Höhen.
- Steht die Markierung innerhalb des Gebäudes, wird dort alles geschnitten, worin sie steht, so wie ein Schnitt es täte. Für eine saubere Außenansicht stellen Sie sich außerhalb des Gebäudes.

## Ändern

Wählen Sie die Markierung im Grundriss (klicken Sie mit {{ui:Select}} auf ihren Kreis). Die Eigenschaften bieten:

- {{ui:Label}}: ihre Nummer oder ein eigener Name mit bis zu 8 Zeichen.
- {{ui:Flip the view}}: Blick in die entgegengesetzte Richtung vom selben Standort aus.
- {{ui:Look as far as}}: wie weit vor der Markierung die Ansicht reicht. 0 zeigt alles.

Drücken Sie Delete, um die Markierung und ihre Zeichnung zu entfernen. Rückgängig stellt beides wieder her.

:::tip
Um während der Arbeit den Grundriss und die 3D-Ansicht gleichzeitig zu sehen, verwenden Sie in den Menüband-Layouts {{ui:View}} › **Fenster** › {{ui:Tile Views}}, im klassischen Layout {{ui:Split}}. Ein Klick auf einen Ansichtsreiter kehrt zu einer einzigen Ansicht zurück.
:::

## Grenzen

- Eine Markierung kann im Grundriss noch nicht verschoben oder gedreht werden. Löschen Sie sie und platzieren Sie sie erneut, oder verwenden Sie {{ui:Flip the view}}.
- In der Liste der Ansichten, die Sie einem Blatt hinzufügen können, wird eine eigene Ansicht zusammen mit den Schnitten aufgeführt.
- Tür- und Fenster-Kennzeichnungen werden auf den vier Seitenansichten gezeichnet, nicht auf einer Ansicht, die Sie platziert haben.

## Im IFC

Die Markierung wird in der Datei als IfcAnnotation mit dem Namen "Elevation 1" und dem Objekttyp "Elevation marker" gespeichert, und zwar in der Ebene, auf der sie platziert wurde. Ein anderes Programm zeigt sie als Annotation; die Zeichnung selbst erstellt BimCraft jedes Mal neu aus dem Modell.
