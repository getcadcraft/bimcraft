---
title: Schächte und Öffnungen durch Geschossdecken
summary: Ein Schacht ist eine Kontur, die jede Geschossdecke, jede Decke und jedes Dach zwischen zwei Geschossen durchschneidet. Eine vertikale Öffnung schneidet eine davon. Die Wandöffnung schneidet eine Wand.
keywords: Schacht, Aufzugsschacht, Fahrstuhlschacht, Treppenöffnung, Setzstufe, vertikale Öffnung, Deckenöffnung, Öffnung in Geschossdecke, Dachöffnung, Oberlichtöffnung, Loch im Boden, Wandöffnung, IfcOpeningElement, Abzug, Nettofläche
from: 8e9e1641
---

## Was Sie tun

Schneiden Sie mit einer Skizze einen Aufzugsschacht durch ein Gebäude, schneiden Sie ein Loch in ein Geschoss und lesen Sie ab, was aus den Flächen herausgenommen wurde.

## Wo die Werkzeuge sind

- Menüband-Layouts: {{ui:Architektur}} › **Öffnung** › {{ui:Schacht}}, {{ui:Vertikale Öffnung}} und {{ui:Wandöffnung}}.
- Klassisches Layout: die Zeichnen-Leiste › Menü {{ui:Räume}} (Schacht, Vertikale Öffnung) und › Menü {{ui:Wände}} (Wandöffnung).

## Ein Schacht

1. Öffnen Sie den Grundriss des Geschosses, auf dem der Schacht beginnt. Wählen Sie {{ui:Schacht}}.
2. Wählen Sie in der Zeile das {{ui:Basisgeschoss}} und das {{ui:Oberes Geschoss}} sowie Versätze, falls er über oder unter ihnen beginnt oder endet.
3. Klicken Sie die Ecken der Kontur an. Klicken Sie die erste Ecke erneut an, machen Sie einen Doppelklick oder drücken Sie {{key:Enter}}, um abzuschließen.
4. Jede Geschossdecke, jede Decke und jedes Dach zwischen den beiden Höhen wird geschnitten. Die Statuszeile zeigt, wie viele.

Ein Schacht ist ein einziges Objekt. Wählen Sie seine Kontur auf einem beliebigen Geschoss, das er durchquert: Die **Eigenschaften** zeigen Name, Geschosse und Versätze, was er schneidet und die herausgenommene Fläche. Ändern Sie ihn, und jede Öffnung folgt. Löschen Sie ihn, und jede Öffnung verschwindet. Jede Aktion ist ein einzelner Schritt zum Rückgängigmachen.

Er schneidet weiter: Eine Geschossdecke, die später zwischen seinen Geschossen entsteht, wird ohne Nachfrage geschnitten, und eine Geschossdecke, die Sie löschen, wird nicht mehr geschnitten.

Die Geschossdecke, auf der der Schacht steht, wird nicht geschnitten (ihre Oberseite ist die Basis). Geben Sie der Basis einen negativen Versatz, um sie auch zu schneiden. Geben Sie der Oberseite einen positiven Versatz, um durch das Dach zu gehen.

## Eine vertikale Öffnung

1. Wählen Sie {{ui:Vertikale Öffnung}}. Wählen Sie in der Zeile, was geschnitten werden soll: die Geschossdecke, die Decke oder das Dach.
2. Klicken Sie die Ecken der Kontur an und schließen Sie wie oben ab.
3. Die Geschossdecke, Decke oder das Dach dieses Geschosses unter der Kontur wird geschnitten. Sie gehört zu diesem einen Element: Löschen Sie die Geschossdecke, verschwindet die Öffnung mit ihr.

## Eine Wandöffnung

{{ui:Wandöffnung}} ist das Werkzeug aus [Eine Wand formen](topic:wall-shape): Klicken Sie eine Wand im Grundriss an oder zwei Ecken auf ihrer Fläche im 3D.

## Mengen

Nach der Messregel für Geschossdecken ist die Nettofläche eines Bauteils seine Bruttofläche abzüglich dessen, was herausgeschnitten wurde. Ein Schacht oder eine vertikale Öffnung ist ein Abzug auf jeder Geschossdecke und Decke, die sie schneidet; die Listen „Geschossdecken“ und „Oberflächen“ sowie die IFC-Mengen zeigen dieselben Zahlen. Bei einem Dach ist der Abzug die Dachfläche: die Grundrissfläche geteilt durch den Kosinus der Dachneigung.

Eine Kontur, die über den Rand hinausragt, zieht nur den Teil ab, der auf dem Bauteil liegt.

## Wenn nichts geschnitten wird

Ein Schacht ohne Hindernis wird trotzdem erstellt, und die Statuszeile sagt es: Er schneidet, was dort später gebaut wird. Eine vertikale Öffnung braucht etwas darunter; ohne das sagt die Statuszeile es, und nichts wird erstellt.

## Im IFC

Jeder Schnitt ist ein IfcOpeningElement mit IfcRelVoidsElement zum geschnittenen Bauteil, sodass jedes IFC-Programm das Loch zeigt. Ein Dach wird Fläche für Fläche geschnitten. Der Schacht selbst ist eine IfcGroup aus seinen Öffnungen.

## Noch nicht umgesetzt

- Gekrümmte Konturen.
- Die Wände eines Schachts: Zeichnen Sie sie mit dem Werkzeug Wand.
- Die Kontur durch Ziehen ihrer Ecken bearbeiten (ändern Sie sie in den Eigenschaften oder löschen Sie sie und skizzieren Sie neu).
- Die eigenen Eigenschaften einer gezeichneten Geschossdecke zeigen nur deren Fläche abzüglich ihrer eigenen Öffnungen; die Listen und die IFC-Mengen enthalten die des Schachts.

Siehe auch [Räume und Raumtrennelemente](topic:rooms-and-separators).
