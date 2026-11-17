---
title: Modell aus einem Scan erstellen
summary: Eine kurze Anleitung vom Laserscan zu Wänden: Punktwolke neben einem neuen Gebäude öffnen, an einem Geschoss ausrichten und ihre Wände im Grundriss nachzeichnen.
keywords: Scan, Laserscan, Punktwolke, Ist-Zustand, bestehendes Gebäude, Vermessung, nachzeichnen, Scan zu BIM, Modell aus Scan, Schnittscheibe, ausrichten, rechtwinklig, LAS, LAZ, E57, PLY, PCD
from: ce3b9b37
---

## Was Sie tun

Zeichnen Sie ein bestehendes Gebäude anhand seines Laserscans: Wände dort, wo der Scan sie zeigt, auf dem richtigen Geschoss, rechtwinklig zueinander.

## Schritte

1. **Ein Gebäude zum Zeichnen.** {{ui:Datei}} › {{ui:Neues Gebäude}}, mit so vielen Geschossen, wie das Gebäude hat (Sie können später Geschosse hinzufügen, siehe [Das Grundstück, das Gebäude darauf und seine Geschosse](topic:site-building-and-levels)). {{ui:Zeichnen}} wird aktiviert.
2. **Der Scan.** {{ui:Anzeigen}} › {{ui:Punktwolke}} und die Datei wählen (LAS, LAZ, E57, PLY, PCD, PTX oder XYZ: siehe [Eine Punktwolke neben dem Modell anzeigen](topic:point-clouds)). Die Wolke wird in der 3D-Ansicht angezeigt, und der Grundriss zeigt ihre **Schnittscheibe**: die gescannten Punkte 1200 mm (4 feet) über dem Geschoss, als Punkte. Das ist die Höhe, in der Wände, Türen und Fenster am besten erkennbar sind.
3. **Am Geschoss ausrichten.** Öffnen Sie das Menü {{ui:Scan}} der Modellleiste und klicken Sie auf {{ui:Ihren Boden an diesem Geschoss ausrichten}}: Die Wolke wird nach oben oder unten verschoben, bis der gescannte Boden auf dem angezeigten Geschoss liegt. Prüfen Sie, ob die Schnittscheibe jetzt durch die Wände verläuft.
4. **Rechtwinklig zum Gebäude.** {{ui:Scan}} › {{ui:Rechtwinklig zum Gebäude drehen}} dreht die Wolke, sodass die Wände in ihrer Schnittscheibe entlang der Achsen des Grundrisses verlaufen; Wände, die Sie bei gehaltener {{key:Shift}}-Taste zeichnen, richten sich damit am Scan aus. Die Drehung erfolgt um die Mitte der gefundenen Wände, sodass Bäume oder eine Nachbarwand in der Schnittscheibe die Wolke nicht wegschwenken. Richten Sie zuerst den Boden aus: Danach verläuft die Schnittscheibe durch die Wände.
5. **Wände nachzeichnen.** Wählen Sie {{ui:Wand}} und klicken Sie entlang der Punkte: Das Werkzeug rastet sowohl auf gescannten Punkten (die Fangmarke ist eine kleine Raute) als auch auf den bereits gezeichneten Wänden ein. Eine Wand wird auf ihrer Mittellinie gezeichnet, klicken Sie also in der Mitte der beiden Punktreihen, die eine Wand hinterlässt. Geben Sie ihre Dicke ein, indem Sie zuerst den Wandtyp wählen. Fügen Sie danach Türen und Fenster dort hinzu, wo die Schnittscheibe Lücken zeigt.
6. **Das nächste Geschoss.** Wählen Sie das darüberliegende Geschoss in der Geschossliste des Grundrisses: Die Schnittscheibe folgt der Schnitthöhe des Geschosses. Richten Sie den Boden nur dann erneut an diesem Geschoss aus, wenn die Böden im Scan nicht dort liegen, wo Ihre Geschosse liegen.

## Was Sie sehen sollten

- Die Schnittscheibe ändert sich, wenn Sie das Geschoss wechseln; eine dickere Schnittscheibe ({{ui:Scan}} › {{ui:Dicke der Schnittscheibe}}) zeigt mehr Punkte, wo ein Scan dünn ist.
- {{ui:Scan}} › {{ui:Ausrichtung rückgängig machen}} setzt die Wolke dorthin zurück, wo sie beim Öffnen platziert war. Das Ausrichten verschiebt die Wolke nur in der Ansicht: Sie wird nicht in der IFC-Datei gespeichert, und gezeichnete Wände bleiben an ihrem Platz. Die Ausrichtung wird mit der Wolke zurückgesetzt, wenn Sie {{ui:Platzieren}} oder {{ui:Einheiten}} ändern oder ein anderes Modell öffnen.
- {{ui:Scan}} › {{ui:Die Schnittscheibe im Grundriss anzeigen}} blendet die Punkte aus oder ein.

:::tip
Große Scans: Der Grundriss zeichnet bis zu 60,000 Punkte der Schnittscheibe und die 3D-Ansicht einige Millionen Punkte der gesamten Wolke, beide gleichmäßig über den Scan verteilt, damit eine große Datei schnell bleibt. Um stattdessen im Zeichenprogramm nachzuzeichnen, verwenden Sie in der Wolkenleiste {{ui:In CadCraft nachzeichnen}}.
:::
