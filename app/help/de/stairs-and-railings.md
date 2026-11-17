---
title: Treppen und Geländer
summary: Gerade, L-, U- und Wendeltreppen mit Setz- und Trittstufen zeichnen, die sich aus der Geschosshöhe ergeben, mit Handläufen und Geländerstäben, und die Treppenöffnung in der Geschossdecke darüber ausschneiden. Absturzsicherungen entlang von Terrassen und um Öffnungen zeichnen.
keywords: Wendel, Rundtreppe, Treppe, Treppen, Treppenlauf, Lauf, Setzstufe, Trittstufe, Podest, Winkelstufe, L-Treppe, U-Treppe, Zweiarmtreppe, Handlauf, Absturzsicherung, Geländer, Geländerstab, Pfosten, Spindel, Treppenöffnung, lichte Höhe, Terrasse, Balkon
from: 16e5ace4
---

## Was Sie tun

Fügen Sie Treppen zwischen Ebenen und Geländer hinzu, wo Menschen sie brauchen. Eine Treppe errechnet ihre Stufen aus der Höhe zwischen den Ebenen, hält sich an die üblichen Grenzwerte für Wohngebäude, bringt Handläufe an ihren offenen Seiten an und schneidet ihre Treppenöffnung in die Geschossdecke darüber.

## Eine Treppe zeichnen

1. Öffnen Sie auf der Ebene, auf der die Treppe beginnt, {{ui:Build}} und wählen Sie {{ui:Stair}}.
2. Wählen Sie die **Art** – **Gerade**, **L mit Podest**, **U mit Podest** oder **L mit Winkelstufen** –, die **Drehung**, die **Breite** und wo die **Handläufe** liegen sollen.
3. Klicken Sie dort, wo die Treppe beginnt: in der Mitte der vorderen Kante der untersten Stufe.
4. Bewegen Sie den Zeiger in die Richtung, in der die Treppe nach oben führt. Die Stufen folgen ihm, mit der Anzahl der Setz- und Trittstufen. Sie rasten an den Wänden und bei 15°-Schritten ein. Halten Sie {{key:Shift}} gedrückt, um sie rechtwinklig zu halten.
5. Klicken Sie. {{key:Esc}} beginnt neu.

## Eine Wendeltreppe zeichnen

1. Öffnen Sie {{ui:Build}}, wählen Sie {{ui:Stair}} und dann **Wendel** als Art.
2. Stellen Sie **Drehung** ein, also die Richtung, in der sie beim Hochgehen windet (links ist gegen den Uhrzeigersinn).
3. Klicken Sie auf die Mitte ihres Pfostens.
4. Klicken Sie in die Richtung, in die die unterste Stufe zeigt.

Sie beginnt 30" breit (die Stufe, vom Pfosten bis zur Außenseite), mit einem Pfosten von 4½". Die Setzstufen werden aus der Geschosshöhe ermittelt, höchstens 9½" standardmäßig. Trittstufen sind 7½" tief auf der Gehlinie, 12" vom Pfosten entfernt. Der Handlauf verläuft außen.

Im Bereich **Eigenschaften** ergänzt eine Wendeltreppe **Mittelpfosten** mit seinem Durchmesser. Die **Trittstufe** wird auf der Gehlinie gemessen. Die Prüfungen sind als Standardwerte für Wendeltreppen gekennzeichnet: 26" lichte Breite, mindestens 6¾" Trittstufe auf der Gehlinie, Setzstufen höchstens 9½" und Handläufe 34"–38". Sie sind keine Berechnung; die Bauaufsicht entscheidet.

## Wie die Stufen berechnet werden

Die Höhe zwischen dem Boden der Ebene und der Ebene darüber wird in gleich große Setzstufen aufgeteilt, die nicht höher als 7¾" sind. Jede Trittstufe ist 10" tief. Beides kann in **Eigenschaften** geändert werden. Ein Podest zählt als eine Stufe; Winkelstufen sind drei Stufen, die um die innere Ecke gefächert sind. Ändern Sie die Höhe einer Ebene, wird jede Treppe darauf neu berechnet.

:::warning
7¾" Setzstufen, 10" Trittstufen, 36" Breite, 6'-8" lichte Höhe und 34"–38" Handläufe sind als Standardwerte nach den üblichen Vorschriften für Wohngebäude gekennzeichnet, keine Berechnung. **Eigenschaften** zeigt, welche erfüllt sind; die Bauaufsicht entscheidet, was gilt.
:::

## Eine Treppe ändern

Wählen Sie sie aus (klicken Sie im Grundriss oder in der 3D-Ansicht darauf) und ändern Sie unter **Eigenschaften**: ihre Art und Drehung, Breite, höchste Setzstufe, Trittstufentiefe, Handläufe und deren Höhe sowie **Geschossdecke darüber aussparen** für die Treppenöffnung. Die Setz- und Trittstufen, die sich daraus ergeben, werden darunter angezeigt.

## Die Treppenöffnung

Hat die Ebene darüber eine Decke, schneidet die Treppe sie dort aus, wo die Stufen weniger als 6'-8" lichte Höhe hätten. Die Aussparung bewegt sich mit der Treppe mit und verschwindet, wenn die Treppe gelöscht wird.

## Ein Geländer zeichnen

1. Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Railing}}.
2. Wählen Sie **Absturzsicherung** (36" hoch) oder **Handlauf** und seine Höhe.
3. Klicken Sie entlang der Kante – einer Terrasse, eines Balkons, um eine Treppenöffnung – und doppelklicken Sie oder drücken Sie {{key:Enter}}, um abzuschließen.

Geländer erhalten Pfosten an ihren Enden und Ecken sowie Geländerstäbe mit Abständen unter 4". Wählen Sie eines aus, um seine Art, seine Höhe oder die Höhe zu ändern, ab der es über dem Boden beginnt.

## Einen Zaun zeichnen

Wählen Sie **Zaun** im selben Geländer-Werkzeug, stellen Sie seine Höhe ein (zunächst 1800 mm), klicken Sie entlang der Linie des Zauns und drücken Sie {{key:Enter}}.

- Der Zaun erhält an jedem Ende und an jeder Ecke einen Pfosten und dazwischen höchstens alle 2.4 m einen Pfosten. Ein Feldzaun hat ein Feld zwischen den Pfosten; ein Riegelzaun hat zwei Riegel. Diese Maße sind übliche Auswahlmöglichkeiten, keine Vorschrift: Örtliche Regeln begrenzen die Höhe eines Zauns.
- Er ist ein Element im Modell (ein IfcRailing namens Fence) mit dem Eigenschaftssatz {{ui:CadCraft_Fence}}: Stil, Höhe, Pfosten, Felder, Riegel, Tore, Länge und Feldfläche. Ein Schritt zum Rückgängigmachen.
- Hier nicht gezeichnet: Tore (der Generator in CivilCraft legt sie an), Zaunlatten, Gelände (der Zaun steht auf der Ebene) und das Auswählen eines einzelnen Pfostens.

## Was gespeichert wird

Eine Treppe wird als IFC-Treppe gespeichert, bestehend aus Treppenläufen (mit ihren Setzstufen, Trittstufen, Setzstufenhöhe und Trittstufenlänge), Podesten, Winkelstufen und Handläufen. Die Treppenöffnung ist eine Aussparung in der Geschossdecke darüber. Geländer werden als IFC-Geländer mit ihrer Länge sowie ihrer Anzahl an Geländerstäben und Pfosten gespeichert.
