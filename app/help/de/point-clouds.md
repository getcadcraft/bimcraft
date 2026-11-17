---
title: Eine Punktwolke neben dem Modell anzeigen
summary: Einen Laserscan (LAS, LAZ, E57, PLY, PCD, PTX, PTS oder XYZ) in der 3D-Ansicht allein oder mit einem IFC-Modell öffnen, einfärben, eine dünne Scheibe herausschneiden, zu seinen Punkten messen und an die Zeichenanwendung übergeben, um die Ist-Linien nachzuzeichnen.
keywords: Punktwolke, Laserscan, Scan, LiDAR, las, laz, e57, ply, pcd, ptx, xyz, pts, Ist-Zustand, Ist Zustand, Vermessung, Registrierung, Schnittscheibe, Grundrissschnitt, Fang, messen, nachzeichnen, Scan zu BIM
from: d0a3e740
---

## Was Sie tun werden

Betrachten Sie einen Laserscan eines Gebäudes neben seinem Modell: Prüfen Sie, ob das Gebaute dem Entwurf entspricht, messen Sie zwischen gescannten Punkten und schneiden Sie eine dünne Scheibe heraus, um Wände, Türen und Stützen daraus abzulesen.

## Schritte

1. Öffnen Sie die Wolke: Klicken Sie auf {{ui:Offen}} und wählen Sie eine Datei `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` oder `.xyz`, oder ziehen Sie die Datei auf die Seite (siehe das Thema zu Punktwolkenformaten, was jedes Format mitbringt und was Sie aus der Software eines Scanners exportieren sollten). Ist ein Modell geöffnet, tritt die Wolke in der 3D-Ansicht zum Modell hinzu. Das Öffnen einer Wolke schließt nie das Modell oder seine nicht gespeicherten Änderungen. Ohne Modell öffnet sich die Wolke allein.
2. Unter der Symbolleiste erscheint die Wolkenleiste. Sie zeigt, wie viele Punkte angezeigt werden und wie viele die Datei hat.
3. Wählen Sie {{ui:Einfärben nach}}: die eigenen Farben der Datei (wenn der Scanner sie gespeichert hat), {{ui:Höhe}}, {{ui:Intensität}}, {{ui:Klasse}} (LiDAR-Klassen wie Boden, Vegetation und Gebäude) oder {{ui:Eine Farbe}}. {{ui:Größe}} macht die Punkte größer oder kleiner.
4. Klicken Sie unter {{ui:Schnittscheibe}} auf {{ui:Grundriss}}, um nur ein dünnes Band 1.2 m über dem tiefsten Punkt zu behalten, von oben gesehen: Wände, Türöffnungen und Stützen lesen sich wie ein Grundriss. {{ui:Vorne}} und {{ui:Seite}} schneiden aufrechte Bänder für Ansichten und Schnitte. Verschieben Sie das Band mit {{ui:Bei}} und ändern Sie die {{ui:Dicke}} (in Metern). {{ui:Aus}} zeigt die ganze Wolke wieder an.
5. Klicken Sie in der Symbolleiste auf {{ui:Messen}}. Der Zeiger rastet an den Punkten der Wolke ein (die Beschriftung sagt „point cloud“ bzw. „Punktwolke“), sodass Sie in der Scheibe von Wand zu Wand messen können oder von einem Modellelement zum Scan. Eine Modellecke oder -kante in Reichweite hat weiterhin Vorrang.
6. Mit {{ui:Messen}} › {{ui:Standort}} gibt ein Wolkenpunkt seine Breiten- und Längengrade aus dem eigenen Koordinatensystem der Wolke an, wenn die Datei eines nennt.
7. {{ui:Ausblenden}} blendet die Wolke kurz aus; {{ui:Entfernen}} nimmt sie heraus. {{ui:Anzeigen}} › {{ui:Punktwolke}} blendet die Leiste ein oder aus.

## Wohin die Wolke gehört

{{ui:Platzieren}} in der Leiste zeigt, wie die Wolke am Modell ausgerichtet ist:

- **Modellkoordinaten**: Die Zahlen der Wolke sind die des Modells (ein auf die Koordinaten des Entwurfs registrierter Scan).
- **Kartenkoordinaten**: Das Modell hat eine Kartenumrechnung (IfcMapConversion) und die Wolke liegt im selben projizierten System. Die Wolke wird über diese Umrechnung platziert. Nennen die beiden verschiedene Systeme, sagt die Statuszeile das.
- **Am Modell zentriert**: Wenn keine der beiden Optionen die Wolke nahe am Modell platziert, kommt ihre Mitte in die Mitte des Modells und ihr tiefster Punkt auf den Boden des Modells. Wählen Sie eine andere Option, um das zu überschreiben.

Wenn die Datei ihre Einheiten nicht angibt, liest BimCraft Meter und bietet {{ui:Einheiten}} in der Leiste an.

## Ist-Linien nachzeichnen

Klicken Sie auf {{ui:In CadCraft nachzeichnen}}, um die Wolke in einem neuen Reiter an die Zeichenanwendung zu übergeben. Dort öffnet sie sich unter der Zeichnung, wo ein Grundrissschnitt und Objektfang Ihnen erlauben, die Wände über dem Scan zu zeichnen. Siehe das CadCraft-Thema zu Punktwolken.

## Wie viele Punkte

Ein Scan kann hunderte Millionen Punkte haben. BimCraft liest jeden Punkt einmal und behält davon einen gleichmäßigen Anteil zum Zeichnen. {{ui:Anzeigen}} in der Leiste legt fest, wie viele es sind (1, 2, 5 oder 10 Millionen). Mehr Punkte brauchen mehr Speicher und eine schnellere Grafikkarte. Die Anzahl je LiDAR-Klasse bezieht sich auf alle Punkte der Datei.

:::note
Dateien werden auf diesem Computer gelesen; nichts wird hochgeladen. LAS 1.0–1.4 und LAZ werden gelesen (LAZ-Dateien bis 1 GB, während sie gelesen werden, im Speicher gehalten). E57-Dateien bis 6 Millionen Punkte und 512 MB, vorerst (größere Scans: LAS oder LAZ exportieren). PLY, PCD und PTX vollständig. Textwolken sind `x y z`, mit Farbe (`r g b`) und Intensitätsspalten, wenn sie vorhanden sind.
:::

## Mehrere Scans

Scans, die aus verschiedenen Positionen aufgenommen wurden, lassen sich in ein gemeinsames Koordinatensystem registrieren, mit ICP verfeinern und als eine LAS- oder E57-Datei exportieren: siehe [Mehrere Scans zu einem registrieren](topic:register-scans).
