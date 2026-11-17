---
title: Einen Ordner auf beschädigte Kopien, fehlende Verknüpfungen und Reste prüfen
summary: Nutzen Sie den Ordnerbericht, um abgeschnittene Modelldateien zu finden, die neueste vollständige Sicherung auszuwählen, fehlende Verknüpfungen zu sehen und Sperr- und Temporärdateien zu erkennen.
keywords: Zustandsprüfung, beschädigt, fehlerhaft, unvollständig, abgeschnitten, Sicherung, fehlende Verknüpfungen, xref fehlt, Audit, Reste, Sperrdateien, dwl, bak, Übergabe
from: 3025a539
---

## Was Sie tun

Prüfen Sie einen Projektordner, bevor Sie ihn übergeben oder mit der Arbeit daran beginnen: Ist jedes Modell vollständig, welche Sicherung ist die letzte gute, und sind alle verknüpften Dateien vorhanden?

## Schritte: beschädigte Kopien

1. Öffnen Sie den Projektordner. Siehe [Einen ganzen Projektordner öffnen](topic:open-project-folder).
2. Lesen Sie die Hinweise unter dem Ordnernamen. „2 files are incomplete or unreadable“ bedeutet: Es gibt etwas zu prüfen. Siehe die Modelle unten.
3. Sehen Sie sich unter **Modelle** die Spalte **Status** an. **Vollständig** ist in Ordnung. Ein gelbes „1 unvollständig“ bedeutet, dass eine Kopie fehlerhaft ist, eine andere aber intakt. Ein rotes **Unvollständig** bedeutet, dass keine intakte Kopie gefunden wurde.
4. Öffnen Sie **Alle … Kopien** unter einem Modell mit Problem. Es listet die Hauptdatei und jede nummerierte Sicherung auf, die neueste zuerst, mit Größe, Datum und Status.
5. Lesen Sie den Hinweis über der Liste, zum Beispiel „Tower.rvt ist unvollständig (183.2 MB, sollte mindestens 214.0 MB sein). Die Karte zeigt die neueste vollständige Kopie, Tower.0012.rvt (3. März 2025).“
6. Klicken Sie auf die Kopie, die Sie öffnen möchten. Nur vollständige Kopien sind anklickbar.

## Was die Zustandsprüfung macht

Jede Kopie jedes Modells erhält eine schnelle Prüfung ihres Kopfbereichs, je 512 Byte; daher ist selbst ein Ordner mit großen Modellen in Sekunden geprüft. Eine Datei, deren eigener Index hinter ihr Ende zeigt, wurde beim Kopieren, Hochladen oder Synchronisieren abgeschnitten. Eine Cloud-Laufwerk-Datei, die noch „nur online“ ist, sieht genauso aus.

Die Karte jedes Modells wird aus der Hauptdatei gelesen, wenn sie intakt ist, und sonst aus der neuesten intakten Sicherung.

## Schritte: fehlende Verknüpfungen

1. Suchen Sie unter dem Ordnernamen nach dem Hinweis „*n* verknüpfte Dateien befinden sich nicht in diesem Ordner.“
2. Scrollen Sie zu **Verknüpfte und referenzierte Dateien**. Fehlende Verknüpfungen stehen zuerst.
3. Lesen Sie für jede Verknüpfung die Spalte **Wo**:
   - **In diesem Ordner**: am Pfad gefunden, den das Modell gespeichert hat.
   - **Gleicher Name gefunden**: Eine Datei mit demselben Namen liegt woanders im Ordner. Prüfen Sie, ob es die richtige ist.
   - **Bibliotheksdatei**: eine Tabelle für Keynotes oder Baugruppencodes. Sie werden mit dem Programm auf jedem Computer installiert und sind daher nicht im Ordner zu erwarten.
   - **Nicht in diesem Ordner**: nirgends im Ordner gefunden.
4. Lesen Sie **Verwendet von**, um zu sehen, welche Modelle jede Datei verknüpfen.

BimCraft sucht jede Verknüpfung zuerst über ihren relativen Pfad, dann über das Ende ihres gespeicherten Pfads (so wird `\\server\jobs\Tower\Cad\X-Refs\site.dwg` als `X-Refs/site.dwg` gefunden, wenn Sie den Ordner `Cad` gewählt haben), dann über den Dateinamen irgendwo im Ordner.

## Schritte: Reste

1. Scrollen Sie zu **Ausgesondert** am Ende des Berichts.
2. Lesen Sie die drei Zeilen, die erscheinen können:
   - Hilfsordner (`*_backup`, `*_log`, `Revit_temp`): nicht gelesen.
   - Sperr-, Protokoll- und Sicherungsreste: Dateien wie `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Sie bleiben von Programmen zurück, die abgestürzt sind oder geöffnet waren, als der Ordner kopiert wurde. Sie können meist gelöscht werden, sobald niemand die Dateien geöffnet hat.
   - Andere Dateien: alles Übrige, was BimCraft nicht liest.

## Häufige Fehler

- **Die beschädigte Hauptdatei löschen, bevor eine gute Sicherung gespeichert ist.** Kopieren Sie zuerst die neueste vollständige Sicherung, dann kümmern Sie sich um die beschädigte Datei.
- **„Gleicher Name gefunden“ blind vertrauen.** Zwei verschiedene Zeichnungen können denselben Namen haben. Öffnen Sie im Zweifel beide.
- **Glauben, eine fehlende Bibliotheksdatei sei ein Problem.** Tabellen für Keynotes und Baugruppencodes liegen auf jedem Computer beim Programm.
- **Die Dateianzahl unterscheidet sich zwischen Browsern.** In Firefox und Safari übergibt {{ui:Ordner öffnen}} jede Datei, auch die in Hilfsordnern; daher zählt die Anzahl (und das Limit von 20,000 Dateien) sie mit. Wird der Ordner hineingezogen, werden sie übersprungen, wie in Chrome und Edge. Der Bericht ist ansonsten gleich.
