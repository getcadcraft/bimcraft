---
title: Mehrere Scans zu einem registrieren
summary: Scans aus verschiedenen Positionen durch ausgewählte Punktpaare oder eingegebene Ziele in einem Koordinatensystem platzieren, mit ICP verfeinern, die Registrierung als Projekt speichern und die registrierte Wolke als LAS oder E57 exportieren.
keywords: registrieren, Registrierung, Scans, Punktwolke, icp, iterative closest point, Ziele, Punktpaare, starre Transformation, ausrichten, zusammenführen, e57, las, Scan zu BIM
from: e8e270db
---

## Was Sie tun werden

Mehrere Scans eines Ortes, jeweils von einer eigenen Scannerposition aufgenommen, beginnen in ihren eigenen Koordinaten. Registrieren Sie sie: Geben Sie jedem Scan eine Platzierung, damit alle in einem gemeinsamen Koordinatensystem liegen. Speichern Sie das dann als Projekt und schreiben Sie die registrierte Wolke als eine LAS- oder E57-Datei.

## Scans platzieren

1. Öffnen Sie den Dialog ({{ui:Scans registrieren…}} im Startbereich oder {{ui:Anzeigen}} › {{ui:Scans registrieren…}}, sobald ein Modell geöffnet ist). {{ui:Scans hinzufügen…}} nimmt LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- oder XYZ-Dateien auf, oder Sie ziehen sie auf den Dialog. Scans mit unterschiedlichen Einheiten werden mit einem Hinweis abgelehnt: Konvertieren Sie zuerst einen davon.
2. Wählen Sie {{ui:Zu verschiebender Scan}} und {{ui:Platzieren gegen}}. Das Bild zeigt jeden Scan im Koordinatensystem, so wie er jetzt ist, jeweils in einer eigenen Farbe: {{ui:Grundriss}}, {{ui:Vorne}} oder {{ui:Seite}}. Ziehen Sie zum Verschieben und nutzen Sie das Mausrad zum Zoomen.
3. **Mit Punktpaaren.** Klicken Sie auf {{ui:Ein Paar wählen}}, dann auf einen Punkt des zu verschiebenden Scans und danach auf dieselbe Stelle in einem anderen Scan (eine Ecke, ein Ziel, der Fußpunkt einer Stütze). Tun Sie das mindestens dreimal, mit Punkten, die nicht auf einer Linie liegen und weit verteilt sind. Klicken Sie auf {{ui:Per Paaren platzieren}}: Der Scan wird nach der Methode der kleinsten Quadrate platziert, und **Verbleibend** zeigt, wie weit jedes Paar noch danebenliegt. Ein Paar mit einer großen Zahl ist eine schlechte Wahl: Entfernen Sie es mit dem Kreuz und platzieren Sie erneut.
4. **Mit Zielen.** Wenn die wahren Koordinaten eines Punktes bekannt sind (vermessene Ziele), klicken Sie auf {{ui:Wählen, dann Ziel eingeben}}, dann auf den Punkt in seinem Scan, und tragen Sie X, Y und Z des Ziels in der Zeile ein. Paare und eingegebene Ziele lassen sich beliebig mischen.

## Mit ICP verfeinern

Paare ergeben eine grobe Platzierung. {{ui:Verfeinern}} verschiebt den Scan, bis seine Flächen auf denen des anderen Scans liegen: zuerst **Punkt zu Punkt**, dann **Punkt zu Ebene**. Die Tabelle listet jeden Schritt mit seinem Fehler und der Anzahl der zugeordneten Punkte. Die Zeile darüber zeigt, wie der Fehler sinkt. {{ui:Stopp}} beendet den Lauf nach dem laufenden Schritt und behält, was erreicht wurde. {{ui:Rückgängig}} nimmt den ganzen Lauf (oder die letzte Platzierung) zurück. {{ui:Zurücksetzen}} setzt den Scan auf seine Dateikoordinaten zurück.

Damit es auf einem Laptop schnell bleibt, arbeitet ICP mit einem ausgedünnten Anteil der Punkte ({{ui:Verwendete Punkte}}, 5,000 bis 60,000) und ignoriert Zuordnungen, die weiter als {{ui:Größter Zuordnungsabstand}} entfernt sind (standardmäßig 5 % der Größe des Scans, der sich mit der Zeit verkleinert). Es braucht zuerst eine grobe Platzierung: Scans, die sich kaum überlappen, melden, dass sie nicht zugeordnet werden können. Flächen, die nur eben oder nur gerade sind, können eine Position entlang ihrer selbst nicht festlegen. Fügen Sie in diesem Fall Paare hinzu.

## Speichern und exportieren

- {{ui:Projekt speichern}} schreibt eine kleine Datei `.ccscans.json`: den Namen und die Größe jedes Scans, einen Fingerabdruck seiner ersten 64 KB und seine Transformation. Sie enthält keine Punkte. {{ui:Projekt öffnen…}} findet die Scan-Dateien über diese Verweise (die Dateien müssen zuerst hinzugefügt werden) und stellt jede Transformation wieder her.
- {{ui:LAS exportieren}} und {{ui:E57 exportieren}} schreiben eine Datei mit jedem Scan an seiner registrierten Stelle. Die Originalpunkte werden nie umgeschrieben; die Transformation wird beim Export angewendet. Mit eingeschaltetem {{ui:Alle Punkte aus den Dateien lesen}} wird jede Datei erneut gelesen, um jeden Punkt zu schreiben (bis zu 20 Millionen je Scan). Ausgeschaltet werden nur die im Betrachter gezeigten Punkte geschrieben.
- {{ui:Registrierte Wolke zeigen}} (BimCraft) schreibt die LAS und öffnet sie neben dem Modell in der 3D-Ansicht, wie jede andere Wolke.

:::note
Nichts wird hochgeladen. Die Registrierung arbeitet in den eigenen Einheiten der Dateien und behält Millimeter bei: Eine LAS wird mit einer passenden Skalierung geschrieben (bis auf 0.1 mm), eine E57 mit doubles. Ein Koordinatensystem wird nur dann in die LAS übernommen, wenn jeder Scan denselben EPSG-Code nennt. Der E57-Schreiber ist unser eigener; er wird geprüft, indem seine Dateien mit diesem Leser und mit libE57Format zurückgelesen werden.
:::
