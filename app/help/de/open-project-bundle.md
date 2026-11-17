---
title: Ein Projekt-Bundle öffnen
summary: Ein Projekt-Bundle ist eine ZIP-Datei mit einem Modell, seinen Ansichten, seinen Layouts und seinen Eigenschaftsgruppen. Öffnen Sie es, zeigen Sie eine Ansicht mit ihrem Geschoss und ihren Layern, öffnen Sie ein Layout und sehen Sie Eigenschaften in den Gruppen des Projekts.
keywords: Bundle, Projekt-Bundle, ccbundle, ZIP, Ansichten, Ansichtsübersicht, Layouts, Layout-Buch, Layer-Kombination, Eigenschaftsgruppen, Standards, pln, Vorlage
from: b5b86e8f
---

## Was Sie tun

Öffnen Sie ein **Projekt-Bundle** (`.ccbundle.zip`) und arbeiten Sie mit dem Projekt so, wie es organisiert war: mit seinen Ansichten, seinen Layouts und seinen Eigenschaftsgruppen, auf dem Modell.

Ein Bundle enthält:

- das Modell als IFC,
- die Layouts als PDF und DWG,
- eine Liste dessen, was IFC auslässt: die Ansichten (jeweils mit ihrem Geschoss, ihrer Layer-Kombination und ihrem Maßstab), die Layouts und die darauf platzierten Zeichnungen, Eigenschaftsdefinitionen in ihren Gruppen, Klassifikationen sowie Standards wie Layer, Stiftsätze, Linientypen, Füllungen, Oberflächen und Verbundkörper.

Bundles werden von einem Open-Source-Skript geschrieben, das in Archicad läuft und Archicad selbst nach diesen Listen fragt. BimCraft liest `.pln`- oder `.tpl`-Dateien nie direkt; siehe [Projektdateien .pln und .pla öffnen](topic:pln-project-files).

## Bundle erstellen

Das Skript ist eine Vorschau: Es wurde noch nicht auf jeder Archicad-Version getestet. Laden Sie es von [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle) herunter. Sie brauchen Archicad 24 oder neuer und Python 3.8 oder neuer; sonst ist nichts zu installieren.

1. Speichern Sie `archicad_bundle.py` in einem Ordner, zum Beispiel `C:\cc-bundle`.
2. Öffnen Sie in Archicad das Projekt und legen Sie einen Publisher-Satz mit genau dem Namen **CadCraft bundle** an: die 3D-Ansicht als IFC, jedes Layout als PDF und jedes Layout noch einmal als DWG, veröffentlicht als Dateien auf dem Datenträger in einem flachen Ordner.
3. Führen Sie bei geöffnetem Projekt einmal `python archicad_bundle.py --probe --out .` aus. Es werden nur Daten gelesen; es wird `probe.json` geschrieben.
4. Führen Sie `python archicad_bundle.py --out . --translator "IFC4 Reference View"` aus (verwenden Sie den von Ihnen gewählten IFC-Übersetzer). Archicad veröffentlicht den Satz, und das Skript schreibt `<project>.ccbundle.zip`.

Wenn das Veröffentlichen über das Skript fehlschlägt, veröffentlichen Sie den Satz von Hand und führen Sie `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg` aus. Die README des Repositorys enthält alle Optionen. Wenn etwas nicht übernommen wird, eröffnen Sie dort ein Issue und hängen Sie `probe.json` an.

## Bundle öffnen

1. Klicken Sie auf {{ui:Datei wählen}} oder ziehen Sie das `.ccbundle.zip` auf BimCraft. In einem Ordner, den Sie mit {{ui:Ordner öffnen}} geöffnet haben, sind Bundles unter **Projekt-Bundles** aufgelistet; klicken Sie einen über seinen Namen an.
2. Das Modell öffnet sich wie jede IFC-Datei, und der Abschnitt **Projekt-Bundle** erscheint links unter den Angaben zur Datei.

Nichts wird hochgeladen: Das Bundle wird auf Ihrem Computer gelesen, jeweils eine Datei, sodass ein großes Modell nicht doppelt kopiert wird.

## Eine Ansicht anzeigen

Unter **Ansichten** sind Ansichten nach den Ordnern gruppiert, die sie im Projekt hatten. Klicken Sie auf den Namen einer Ansicht:

- **Ein Grundriss** zeigt nur sein Geschoss, von oben gesehen.
- **Seine Layer-Kombination** blendet die Elemente auf den Layern aus, die diese Kombination ausblendet. Die Statuszeile sagt, wie viele Elemente dadurch ausgeblendet wurden.
- **Sein Maßstab** wird neben dem Namen und in der Statuszeile angezeigt.
- **Eine 3D-Ansicht** zeigt alle Geschosse.

Um wieder alles anzuzeigen, verwenden Sie {{ui:Alle einblenden}} unter {{ui:Anzeigen}} und aktivieren Sie jedes Geschoss.

:::note
BimCraft findet die Layer über die Layer-Zuordnungen der IFC-Datei. Wurde die IFC ohne sie exportiert, blendet eine Layer-Kombination nichts aus, und die Statuszeile sagt: 0 Elemente ausgeblendet.
:::

## Ein Layout öffnen

Unter **Layouts** zeigt jedes Layout seine Nummer, seinen Namen, sein Papierformat und die darauf platzierten Ansichten.

- **PDF** speichert das PDF des Layouts aus dem Bundle.
- **DWG** öffnet die Zeichnung des Layouts in der 2D-Ansicht. Klicken Sie auf eine beliebige Ansicht, um zum Modell zurückzukehren.
- **In … öffnen** sendet die Datei des Layouts in einem neuen Tab an die App, die damit arbeitet: das PDF an MarkupCraft, die DWG an CadCraft. Die Schaltfläche erscheint nur, wenn diese App neben BimCraft geöffnet ist. Die Datei wird beim Laden des Tabs aus dem Bundle gelesen, und nichts wird hochgeladen.

Ein Layout ohne beides zeigt **Keine Datei im Bundle**.

## Eigenschaften in den Gruppen des Projekts ansehen

Wählen Sie ein Element. **Eigenschaftsgruppen** zeigt seine Eigenschaften unter den Gruppen, die das Projekt definiert hat, zugeordnet über den Eigenschaftssatz und den Namen, die die Definition für IFC angibt, andernfalls über seinen Namen. Der Rest bleibt wie gewohnt in {{ui:Eigenschaften}}. **Eigenschaftsdefinitionen** listet jede Definition mit ihrer Gruppe, ihrem Typ und ihrem IFC-Namen.

## Standards und Hinweise

- **Standards** zählt die Layer, Layer-Kombinationen, Stiftsätze, Linientypen, Füllungen, Oberflächen, Verbundkörper und Materialien im Bundle.
- **Hinweise** listet, was das Skript aus dieser Archicad-Version nicht bekommen konnte, jedes Feld, das BimCraft nicht lesen konnte, und jede Datei, die das Bundle nennt, aber nicht enthält.

## Fehlerbehebung

- **„… ist eine ZIP-Datei, aber kein Projekt-Bundle.“** Die ZIP-Datei enthält keine `manifest.json`. Entpacken Sie sie und öffnen Sie die darin enthaltene `.ifc`.
- **„… ist ein neueres Projekt-Bundle, als dieses BimCraft lesen kann.“** Aktualisieren Sie BimCraft.
- **„… enthält das Modell nicht, das sein Manifest nennt.“** Die ZIP-Datei wurde abgeschnitten oder bearbeitet. Erstellen Sie das Bundle neu.
- **Eine Ansicht zeigt alle Geschosse.** Ihr Geschoss ist nicht in der IFC des Modells enthalten (die Statuszeile sagt es). Prüfen Sie, ob der IFC-Export dieses Geschoss enthielt.

Siehe auch [Arbeiten zwischen zwei BIM-Programmen](topic:two-bim-programs) und [Was BimCraft aus jedem Format liest](topic:file-formats).
