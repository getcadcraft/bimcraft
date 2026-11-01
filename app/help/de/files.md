---
title: Dateien, die BimCraft öffnet und speichert
summary: Jedes Format, das BimCraft öffnet, was es behält, was es speichert, wohin gespeicherte Dateien gehen und was sich zwischen Browsern und offline ändert.
keywords: Formate, öffnen, speichern, exportieren, herunterladen, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, Upload, Datenschutz, Dateigröße
from: a1f0161b
---

BimCraft liest Dateien auf Ihrem Rechner, im Browsertab. **Nichts wird hochgeladen**, weder an CadCraft noch an jemand anderen. Beim Speichern gibt BimCraft dem Browser eine neue Datei zum Herunterladen; es schreibt nie über eine Datei, die Sie geöffnet haben.

## Was es öffnet

| Format | Endungen | Was Sie bekommen |
|---|---|---|
| IFC | `.ifc` | Das Modell in 3D, Geschosse, Bauteilzahlen und die Eigenschaften jedes Bauteils. Namen, Tags und einzelne Eigenschaftswerte lassen sich ändern. |
| Projekt- und Familiendateien | `.rvt` `.rfa` `.rte` `.rft` | Eine Dateikarte: Version, Build, Worksharing, Projektinformationen, Familienparameter, verknüpfte Dateien und das Vorschaubild. Kein 3D. |
| DWG | `.dwg` | Die Zeichnung in 2D: Modellbereich, jedes Blatt, Layer, verknüpfte Zeichnungen, Bilder und Druckansicht. Der Modellbereich auch in 3D. Geprüft sind die Formate von AutoCAD 2000 bis 2018. |
| DXF | `.dxf` | Dasselbe wie DWG. |
| STEP | `.step` `.stp` | Ein Bauteil, ein Ausrüstungsteil oder das Modell eines Lieferanten (AP203, AP214, AP242) in 3D: Jeder Volumenkörper wird ein Bauteil (ein Building-Element-Proxy) eines kleinen IFC-Modells auf einem Geschoss, als Dreiecke in seiner wahren Größe gelesen, eine Baugruppe mit jedem Teil dort, wo die Datei es platziert. Von da an funktioniert es wie jedes IFC: Eigenschaften, Schnitte, Messen, als IFC speichern. Farben und der Baugruppenbaum werden nicht gelesen. |
| Punktwolken | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Der Scan in der 3D-Ansicht, neben einem Modell oder allein: siehe [Eine Punktwolke neben dem Modell zeigen](topic:point-clouds). |
| Projektpaket | `.ccbundle.zip` | Das Modell mit seinen Ansichten, Layouts und Eigenschaftsgruppen: siehe [Ein Projektpaket öffnen](topic:open-project-bundle). |
| Ein Ordner | beliebig | Ein Bericht über jedes Modell, jede Zeichnung und jedes Projektpaket darin. Jedes IFC, Modell, jede Zeichnung und jedes Paket im Bericht öffnet sich mit einem Klick. |

[Was BimCraft aus jedem Format liest](topic:file-formats) geht ins Detail.

BimCraft entscheidet anhand der ersten Bytes einer Datei und ebenso anhand ihres Namens, was sie ist, sodass sich eine Projektdatei mit ungewöhnlicher Endung trotzdem als Dateikarte öffnet.

### Nicht geöffnet

- `.ifczip` und `.ifcxml`: BimCraft sagt „.ifczip is not supported yet. Save or export the model as a plain .ifc file.“ Entpacken Sie die `.ifczip` (sie enthält eine einfache `.ifc`) oder exportieren Sie erneut als einfaches IFC.
- DGN-Zeichnungen stehen in einem Ordnerbericht, öffnen sich aber nicht.
- PDF, Bilder und Office-Dateien öffnen sich nicht von allein. Bilder werden als Bilder in einer DWG benutzt, und {{ui:Bauen}} › {{ui:Aus einer Zeichnung…}} macht aus den Seiten einer PDF oder eines Scans Wände: siehe [Wände aus einem Plansatz](topic:walls-from-plans).

## Was es speichert

| Sie klicken | Sie bekommen | Wohin |
|---|---|---|
| {{ui:Als IFC speichern}} | Eine neue IFC-Datei mit Ihren Änderungen, benannt „*Originalname* (edited).ifc“ | Der Downloads-Ordner Ihres Browsers |
| {{ui:CSV herunterladen}} in der Ausstattungsliste | Eine CSV der Einträge in der Liste, benannt „*Zeichnungsname* equipment.csv“ | Der Downloads-Ordner Ihres Browsers |

Anderes wird dort gespeichert, wo es entsteht, jedes in seinem eigenen Thema: {{ui:USD}} ([Das Modell als USD exportieren](topic:usd)), die .glb {{ui:Fürs Rendern}}, gerenderte Bilder, Blätter und Grundrisse als PDF, Listen und Aufstellungen als CSV, BCF-Themen, die COBie-Tabelle, Familiendateien und registrierte Scans als LAS oder E57. BimCraft speichert keine DWG-, DXF- oder Projektdateien und ändert nie die Dateien, die Sie geöffnet haben.

:::chromium
Chrome und Edge speichern Downloads in den Ordner, der in ihren Einstellungen steht, meist Downloads. Um jedes Mal nach dem Speicherort gefragt zu werden, schalten Sie in den Download-Einstellungen des Browsers „Vor dem Herunterladen immer nach dem Speicherort für jede Datei fragen“ ein.
:::

:::firefox
Firefox speichert im Ordner Downloads, es sei denn, Sie stellen in seinen Einstellungen „Immer nachfragen, wo Dateien gespeichert werden sollen“ ein.
:::

:::safari
Safari speichert in Downloads, es sei denn, Sie wählen unter **Safari > Einstellungen > Allgemein > Speicherort für geladene Dateien** einen anderen Ordner.
:::

## Ein zweites Mal speichern

Jedes Speichern lädt das ganze Modell mit **jeder Änderung seit dem Öffnen** herunter, nicht nur die Änderungen nach dem letzten Speichern. Die Liste {{ui:Änderungen}} beginnt nach jedem Speichern wieder leer, Sie können also nicht über ein Speichern hinaus rückgängig machen. Um vom Original neu zu beginnen, öffnen Sie die Originaldatei erneut.

## Große Dateien und Arbeitsspeicher

- **IFC**-Dateien werden vollständig in den Arbeitsspeicher des Tabs gelesen, und die 3D-Geometrie braucht zusätzlich Speicher. Ein Modell von einigen Hundert Megabyte kann für einen Laptop zu viel sein. Über 1,5 Millionen Dreiecken werden Kanten abgeschaltet, um Speicher zu sparen („Edges are off for very large models“).
- **Projektdateien** werden nicht vollständig gelesen. BimCraft liest nur die kleinen Teile, die es braucht, etwa 40 KB bis 100 KB, egal wie groß die Datei ist, sodass sich ein zentrales 500-MB-Modell auf einem Netzlaufwerk im Handumdrehen öffnet.
- **DWG- und DXF**-Dateien werden vollständig gelesen. Eine sehr große Zeichnung zeigt „This drawing is very large; only part of it is shown.“
- **Ordner** mit bis zu 20.000 Dateien lassen sich öffnen. Gelesen werden nur die paar Kilobyte, die jede Modellkarte braucht.

Mehr dazu unter [Browser, Geräte und Arbeitsspeicher](topic:platforms).

## Online und offline

Dateien zu öffnen braucht nie das Internet. Ein Leser wird beim ersten Bedarf von der Website geladen: die IFC-Engine, beim ersten Öffnen eines IFC-Modells („Starting the IFC engine…“). Die DWG- und DXF-Leser sind Teil der App.

:::offline
Sie sind offline. Wenn die Schaltfläche der App-Leiste {{ui:Offline bereit}} sagt, öffnet sich jedes Format wie gewohnt. Wenn nicht, kann sich ein IFC-Modell nicht öffnen, außer eines wurde in diesem Tab schon geöffnet: Stellen Sie zuerst die Verbindung her. Siehe [Online und offline](topic:online-offline).
:::

Um BimCraft ohne Verbindung zu benutzen, klicken Sie online in der App-Leiste auf {{ui:Für Offline speichern}} und warten auf {{ui:Offline bereit}}. Die gespeicherte Kopie hat etwa 33 MB; sie enthält die IFC-Engine, sodass sich auch IFC-Modelle offline öffnen. [Offline arbeiten](common:offline) erklärt gespeicherte Kopien allgemein.

## Cloud-Speicherung

Cloud-Speicherung ist noch nicht verfügbar. Speichern Sie Ihre bearbeiteten Kopien auf Ihrem eigenen Rechner oder dem Dateiserver Ihres Büros, wie jede andere Datei. Siehe [Ihre Dateien](common:your-files).
