---
title: "Vorhangsysteme: verglaste Wände auf einem Raster, mit Pfosten"
summary: "Zeichnen Sie ein Vorhangsystem wie eine Wand oder legen Sie es auf eine Fläche, und stellen Sie dann seine Rasterlinien und Pfosten ein. Es wird als IfcCurtainWall mit seinen Feldern und Pfosten gespeichert."
keywords: Vorhangsystem, Vorhangwand, Vorhangraster, Pfosten, Verglasung, Schaufensterfront, Glaswand, Paneel, Feld, nach Fläche, Fläche, Masse, Rasterlinie, Abstand, Profil, Riegel, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Was Sie tun

Erstellen Sie eine verglaste Wand aus Feldern zwischen Pfosten, ändern Sie die Lage ihrer Rasterlinien und wählen Sie, welche Linien einen Pfosten tragen.

## Schritte

1. Schalten Sie **Zeichnen** ein und öffnen Sie das Menü **Bauen** (bei Menüband-Ansicht: die Registerkarte Architektur).
2. Wählen Sie **Vorhangsystem**. Legen Sie in dessen Zeile die Oberkante fest (das Geschoss darüber oder eine Höhe), eine Linie in einem bestimmten Abstand entlang, eine Linie in einem bestimmten Abstand nach oben (leer lassen für keine), ob es Pfosten erhält, und das Pfostenprofil.
3. Klicken Sie, wo es beginnt und wo es endet, wie beim Zeichnen einer Wand. Mit Shift bleibt es rechtwinklig.
4. Um das Raster zu ändern, wählen Sie **Vorhangraster** und klicken Sie auf das System:
   - **Linie hinzufügen**: Eine senkrechte Linie entsteht, wo Sie klicken. Für eine waagerechte Linie geben Sie zuerst ihre Höhe bei **Auf Höhe** ein.
   - **Linie verschieben**: Klicken Sie auf die Linie, dann auf die neue Stelle.
   - **Linie entfernen**: Klicken Sie auf die Linie.
   - **Nach Abstand festlegen**: Geben Sie den Abstand bei **Alle** ein, dann klicken Sie auf das System.
5. Um Pfosten zu ändern, wählen Sie **Pfosten** und legen Sie fest, worauf er wirkt: die senkrechte Linie, auf die Sie klicken, die waagerechte Linie auf einer Höhe, den Rand oder jede Linie. Wählen Sie **Pfosten setzen** oder **Pfosten entfernen** und ein Profil, dann klicken Sie auf das System.
6. Wählen Sie ein System, um alles darüber in den **Eigenschaften** zu sehen: jede Rasterlinie mit ihrer Lage, einen Haken für ihren Pfosten und eine Schaltfläche zum Entfernen; den Abstand; den Rand; das Profil; die Feldstärke.

## Nach Fläche

**Nach Fläche** erstellt ein Vorhangsystem auf einer ebenen Fläche, die Sie in der 3D-Ansicht anklicken. Seine Zeile hat dieselben Raster- und Pfosteneinstellungen.

- Es funktioniert auf jeder ebenen Fläche jedes Elements, das die 3D-Ansicht zeigt: eine Masse, eine Wand, einen Boden, eine Dachfläche, eine Stütze, ein platziertes Element. Die Fläche kann senkrecht, geneigt oder waagerecht sein.
- Das System übernimmt den Umriss der Fläche. Ein Giebel oder eine andere ungewöhnliche Form schneidet die Felder und Pfosten passend zu.
- Stattdessen kann es eine **Wand** erstellen, entlang dem Fuß einer senkrechten Fläche und so hoch wie die Fläche. Eine Wand steht hier immer senkrecht, daher kann eine geneigte oder waagerechte Fläche keine aufnehmen.
- Es erstellt kein Dach. Ein Dach in BimCraft wird aus dem Umriss eines Geschosses und einer Neigung ermittelt, nicht aus einer einzelnen Fläche.
- Eine gekrümmte Fläche besteht aus vielen kleinen ebenen Flächen: Ein Klick übernimmt eine davon.
- Bei einer Fläche mit Öffnungen deckt das System den äußeren Umriss der Fläche ab.

## Wie gemessen wird

- **Bruttofläche** ist der Umriss des Systems.
- **Glasfläche** sind die Felder, wie sie hergestellt werden: Jedes Feld verliert auf einer Seite mit einem Rasterpfosten eine halbe Pfostenbreite und bei einem Randpfosten eine ganze Breite.
- Ein senkrechter Pfosten läuft von Rand zu Rand durch. Ein waagerechter Pfosten endet an jedem senkrechten Pfosten und am Rand. Randpfosten liegen innerhalb des Umrisses; wo zwei zusammentreffen, läuft der stärker senkrechte durch. Stöße werden rechtwinklig geschnitten, nicht auf Gehrung.
- **Listen** hat eine Liste **Vorhangsysteme** mit diesen Werten, sobald das Modell eines hat.

## In der IFC-Datei

Eine IfcCurtainWall auf ihrem Geschoss, bestehend aus je einem IfcPlate (Vorhangpaneel) pro Feld und je einem IfcMember (Pfosten) pro Pfostenstück, jeweils mit eigener Form, eigenem Material und eigenen Basismengen.

## Gut zu wissen

- Jede Größe wird wie gewünscht erstellt. Nur ein Umriss ohne Fläche wird abgelehnt, weil es nichts zu erstellen gibt.
- Ein wie eine Wand gezeichnetes System behält die Höhe, mit der es gezeichnet wurde. Wenn Sie später ein Geschoss verschieben, stellen Sie seine Höhe in den Eigenschaften erneut ein.
- Das Werkzeug Verschieben ist für Vorhangsysteme noch nicht umgesetzt. Löschen Sie es und zeichnen Sie es erneut, oder ändern Sie sein Raster direkt.
- Rückgängig macht jeden Schritt zurück: das ganze System, eine Rasteränderung, eine Pfostenänderung.
