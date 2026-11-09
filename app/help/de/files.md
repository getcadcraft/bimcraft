---
title: Dateien, die BimCraft öffnet und speichert
summary: Jedes Format, das BimCraft öffnet, was es übernimmt, was es speichert, wohin gespeicherte Dateien gehen und was sich zwischen Browsern und im Offline-Betrieb ändert.
keywords: Formate, öffnen, speichern, exportieren, herunterladen, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, hochladen, Datenschutz, Dateigröße
from: a7275dbf
---

BimCraft liest Dateien auf Ihrem Computer, im Browser-Tab. **Es wird nichts hochgeladen** zu CadCraft oder an sonst jemanden. Beim Speichern übergibt BimCraft dem Browser eine neue Datei zum Herunterladen; eine Datei, die Sie geöffnet haben, wird nie überschrieben.

## Was geöffnet wird

| Format | Erweiterungen | Was Sie erhalten |
|---|---|---|
| IFC | `.ifc` | Das Modell in 3D, Geschosse, Anzahl der Bauteile und alle Eigenschaften jedes Bauteils. Namen, Tags und einzelne Eigenschaftswerte lassen sich ändern. |
| Projekt- und Familiendateien | `.rvt` `.rfa` `.rte` `.rft` | Eine Dateikarte: Version, Build, Teamarbeit, Projektinformationen, Familienparameter, verknüpfte Dateien und das Vorschaubild. Keine 3D-Ansicht. |
| DWG | `.dwg` | Die Zeichnung in 2D: Modellbereich, jedes Blatt, Layer, verknüpfte Zeichnungen, Bilder und Druckansicht. Zusätzlich der Modellbereich in 3D. Geprüft sind Formate von AutoCAD 2000 bis 2018. |
| DXF | `.dxf` | Wie DWG. |
| STEP | `.step` `.stp` | Ein Bauteil, ein Gerät oder das Modell eines Lieferanten (AP203, AP214, AP242) in 3D: Jeder Volumenkörper wird zu einem Element (building element proxy) eines kleinen IFC-Modells auf einem Geschoss, als Dreiecke in der wahren Größe gelesen, eine Baugruppe mit jedem Teil an der Stelle, an der die Datei es platziert. Danach funktioniert es wie jede IFC-Datei: Eigenschaften, Schnitte, Messen, Als IFC speichern. Farben und der Baugruppenbaum werden nicht gelesen. |
| Punktwolken | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Der Scan in der 3D-Ansicht, neben einem Modell oder allein: siehe [Eine Punktwolke neben dem Modell anzeigen](topic:point-clouds). |
| Projektpaket | `.ccbundle.zip` | Das Modell mit seinen Ansichten, Layouts und Eigenschaftsgruppen: siehe [Ein Projektpaket öffnen](topic:open-project-bundle). |
| Ein Ordner | beliebig | Ein Bericht über jedes Modell, jede Zeichnung und jedes Projektpaket darin. Jede IFC-Datei, jedes Modell, jede Zeichnung oder jedes Paket im Bericht öffnet sich mit einem Klick. |

[Was BimCraft aus den einzelnen Formaten liest](topic:file-formats) beschreibt das genauer.

BimCraft erkennt, was eine Datei ist, anhand ihrer ersten Bytes und ihres Namens. Daher öffnet sich eine Projektdatei mit ungewöhnlicher Erweiterung trotzdem als Dateikarte.

### Nicht geöffnet

- `.ifczip` und `.ifcxml`: BimCraft meldet: ".ifczip wird noch nicht unterstützt. Speichern oder exportieren Sie das Modell als normale .ifc-Datei." Entpacken Sie die `.ifczip` (sie enthält eine normale `.ifc`) oder exportieren Sie erneut als normales IFC.
- DGN-Zeichnungen werden in einem Ordnerbericht aufgeführt, lassen sich aber nicht öffnen.
- PDF, Bilder und Office-Dateien lassen sich nicht allein öffnen. Bilder werden als Bilder in einer DWG verwendet. {{ui:Build}} › {{ui:Aus einer Zeichnung…}} macht aus den Seiten eines PDFs oder Scans Wände: siehe [Wände aus einem Satz Pläne](topic:walls-from-plans).

## Was gespeichert wird

| Sie klicken auf | Sie erhalten | Wo |
|---|---|---|
| {{ui:Als IFC speichern}} | Eine neue IFC-Datei mit Ihren Änderungen, benannt „*Originalname* (edited).ifc“ | Downloads-Ordner Ihres Browsers |
| {{ui:CSV herunterladen}} in der Geräteliste | Eine CSV-Datei mit den Einträgen der Liste, benannt „*Zeichnungsname* equipment.csv“ | Downloads-Ordner Ihres Browsers |

Andere Daten werden dort gespeichert, wo sie entstehen, jeweils in einem eigenen Thema: {{ui:USD}} ([USD-Export des Modells](topic:usd)), {{ui:Collada}} (.dae und die Google-Earth-.kmz: [Modell als Collada oder für Google Earth exportieren](topic:collada)), die .glb-Datei von {{ui:Fürs Rendern}}, gerenderte Bilder, Blätter und Pläne als PDF, Pläne und Listen als CSV, BCF-Themen, die COBie-Tabelle, Familiendateien und registrierte Scans als LAS oder E57. BimCraft speichert keine DWG-, DXF- oder Projektdateien, und es ändert nie die Dateien, die Sie geöffnet haben.

:::chromium
Chrome und Edge speichern Downloads in dem Ordner, der in ihren Einstellungen festgelegt ist, meist Downloads. Damit Sie jedes Mal gefragt werden, wohin gespeichert werden soll, aktivieren Sie in den Download-Einstellungen des Browsers „Vor dem Herunterladen jeder Datei nach dem Speicherort fragen“.
:::

:::firefox
Firefox speichert in den Ordner Downloads, sofern Sie in den Einstellungen nicht „Immer nachfragen, wo Dateien gespeichert werden sollen“ gewählt haben.
:::

:::safari
Safari speichert in „Downloads“, sofern Sie unter **Safari > Einstellungen > Allgemein > Speicherort für Dateidownloads** keinen anderen Ordner wählen.
:::

## Erneut speichern

Jedes Speichern lädt das ganze Modell mit **allen Änderungen seit dem Öffnen** herunter, nicht nur die seit dem letzten Speichern. Die Liste {{ui:Änderungen}} beginnt nach jedem Speichern wieder leer, daher können Sie nicht über ein Speichern hinaus rückgängig machen. Um wieder vom Original zu beginnen, öffnen Sie die Originaldatei erneut.

## Große Dateien und Speicher

- **IFC**-Dateien werden vollständig in den Speicher des Tabs gelesen, und die 3D-Geometrie braucht zusätzlich Speicher. Ein Modell von einigen hundert Megabyte kann für einen Laptop zu viel sein. Ab 1.5 Millionen Dreiecken werden die Kanten ausgeschaltet, um Speicher zu sparen („Edges are off for very large models“).
- **Projektdateien** werden nicht vollständig gelesen. BimCraft liest nur die kleinen Teile, die es braucht, etwa 40 KB bis 100 KB, egal wie groß die Datei ist. So öffnet sich ein 500-MB-Zentralmodell auf einem Netzlaufwerk in einem Augenblick.
- **DWG- und DXF-Dateien** werden vollständig gelesen. Eine sehr große Zeichnung zeigt „This drawing is very large; only part of it is shown.“
- **Ordner** mit bis zu 20.000 Dateien öffnen sich. Es werden nur die wenigen Kilobyte gelesen, die jede Modellkarte braucht.

Siehe [Browser, Geräte und Speicher](topic:platforms) für mehr.

## Online und offline

Zum Öffnen von Dateien ist nie eine Internetverbindung nötig. Ein Leser lädt beim ersten Bedarf von der Website nach: die IFC-Engine, beim ersten Öffnen eines IFC-Modells („Starting the IFC engine…“). Die DWG- und DXF-Leser sind Teil der App.

:::offline
Sie sind offline. Wenn die Schaltfläche in der App-Leiste {{ui:Offline bereit}} anzeigt, öffnet sich jedes Format wie gewohnt. Wenn nicht, lässt sich ein IFC-Modell nur öffnen, wenn es bereits in diesem Tab geöffnet war: Stellen Sie zuerst die Verbindung wieder her. Siehe [Online und offline](topic:online-offline).
:::

Um BimCraft ohne Verbindung zu verwenden, klicken Sie online in der App-Leiste auf {{ui:Für Offline speichern}} und warten, bis {{ui:Offline bereit}} erscheint. Die gespeicherte Kopie hat etwa 33 MB; sie enthält die IFC-Engine, daher öffnen sich IFC-Modelle auch offline. [Offline arbeiten](common:offline) erklärt gespeicherte Kopien allgemein.

## Cloud-Speicher

Cloud-Speicher ist noch nicht verfügbar. Speichern Sie Ihre bearbeiteten Kopien auf Ihrem eigenen Computer oder dem Dateiserver Ihres Büros, wie jede andere Datei. Siehe [Ihre Dateien](common:your-files).
