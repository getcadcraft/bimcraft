---
title: Projektdateien .pln und .pla öffnen
summary: Was BimCraft heute mit den Dateien .pln, .pla, .tpl und .bpn macht und wie Sie IFC und DWG daraus exportieren, damit Modell und Zeichnungen hier geöffnet werden.
keywords: pln, pla, tpl, bpn, Projektdatei, Archiv, Vorlage, Sicherung, IFC-Export, DWG-Export, Übersetzer, Zonen, Layouts
from: 41fb921d
---

## Was Sie tun werden

Bringen Sie ein Projekt, das als `.pln` (Projekt), `.pla` (Archiv mit seiner Bibliothek), `.tpl` (Vorlage) oder `.bpn` (Sicherung) gespeichert ist, in BimCraft. Dies sind eigene Dateien von Archicad.

## Was heute geöffnet wird

- **Die Projektdateien selbst lassen sich noch nicht öffnen.** Ihr Format ist nicht veröffentlicht, und BimCraft liest es noch nicht. Wenn Sie eine davon öffnen, meldet BimCraft das und verweist auf diese Seite.
- **BimCraft prüft die ersten Bytes der Datei.** Archicad-Projekte ab Version 17 beginnen mit derselben kurzen Kennung, sodass BimCraft mit Sicherheit erkennen kann, dass eine Datei ein Archicad-Projekt ist. Eine Datei mit einem Archicad-Namen, die nicht so beginnt, wurde wahrscheinlich umbenannt, ist beschädigt oder stammt aus einer älteren Version. Die Kennung unterscheidet Projekt, Archiv und Vorlage nicht voneinander.
- **Ein IFC-Export lässt sich vollständig öffnen**: das Modell in 3D, Geschosse, Zonen als Räume, Bauteildaten, Eigenschaftssätze und Klassifikationen, mit allen BimCraft-Werkzeugen.
- **Ein DWG-Export lässt sich in der 2D-Ansicht öffnen**, mit seinen Layern und Layouts, sowie in {{ui:3D}}. Zum Bearbeiten verwenden Sie {{ui:In CadCraft bearbeiten}}.

Oder bringen Sie das gesamte Projekt als eine ZIP-Datei mit seinen Ansichten, Layouts und Eigenschaftsgruppen herein: siehe [Ein Projektpaket öffnen](topic:open-project-bundle).

## IFC exportieren (das Modell)

1. Öffnen Sie das Projekt in Archicad.
2. Wählen Sie **Datei > Speichern unter** und als Dateityp **IFC**.
3. Wählen Sie einen IFC-Übersetzer (Archicads Bezeichnung für eine Gruppe von IFC-Exporteinstellungen). Ein Übersetzer für **IFC4 Reference View** oder **IFC2X3 Coordination View 2.0** passt zu BimCraft. IFC4X3 lässt sich ebenfalls öffnen.
4. Wählen Sie, was exportiert wird: das gesamte Projekt oder nur die Bauteile, die auf den Geschossen sichtbar sind, die Sie gerade betrachten.
5. Speichern Sie, klicken Sie dann in BimCraft auf {{ui:Datei wählen}} und wählen Sie die `.ifc`-Datei.

Prüfen Sie diese Punkte in den Einstellungen des Übersetzers, bevor Sie exportieren:

- **Zonen**: Exportieren Sie sie, damit Räume als Räume (Spaces) ankommen. Klicken Sie in BimCraft auf {{ui:Räume}}, um sie zu sehen.
- **Eigenschaften und Klassifikationen**: Exportieren Sie sie, damit sie in {{ui:Eigenschaften}} erscheinen und in {{ui:Suchen}}, {{ui:Farbe}} und {{ui:Mengensummen}} verwendet werden können.
- **Einfaches `.ifc`**, nicht `.ifczip` oder `.ifcxml`. BimCraft öffnet nur einfaches `.ifc`.

## DWG exportieren (die Zeichnungen)

1. Öffnen Sie den gewünschten Grundriss, Schnitt oder das gewünschte Layout.
2. Wählen Sie **Datei > Speichern unter** und als Dateityp **DWG**.
3. Wählen Sie einen DXF-DWG-Übersetzer und speichern Sie.
4. Für einen ganzen Satz von Blättern speichern Sie die Layouts aus dem Layoutbuch oder veröffentlichen Sie sie als DWG.
5. Öffnen Sie die `.dwg`-Datei in BimCraft. Durch den Export verknüpfte Zeichnungen öffnen sich mit ihr, wenn sie im selben Ordner liegen; siehe [Externe Referenzen und Bilder](topic:dwg-linked-files).

## Fehlerbehebung

- **„… ist ein Archicad-Projekt: Die ersten Bytes sagen es.“** Exportieren Sie IFC oder DWG wie oben und öffnen Sie diese Datei.
- **„… hat einen Namen wie eine Archicad-Datei, beginnt aber nicht so.“** Prüfen Sie, woher die Datei stammt: Sie kann eine andere Dateiart mit neuem Namen sein (versuchen Sie, sie unter ihrer echten Erweiterung zu öffnen), eine Kopie, die nicht vollständig fertig wurde, oder ein Projekt aus einer Version vor 17. Öffnen Sie sie, wenn möglich, in Archicad und exportieren Sie dann IFC oder DWG.
- **Das Modell öffnet sich ohne Räume.** Die Zonen wurden nicht exportiert. Aktivieren Sie sie im IFC-Übersetzer und exportieren Sie erneut.
- **Öffnungen sind nicht ausgeschnitten.** BimCraft meldet das unter **Noch nicht gezeichnet** im Bereich {{ui:Datei}}. Exportieren Sie erneut; bleibt es so, öffnen Sie das Modell im Programm, mit dem es erstellt wurde, und prüfen Sie die Öffnungen dort.
- **Der Text in der DWG sieht anders aus.** Der Export kann Schriften behalten, die BimCraft nicht hat; BimCraft zeichnet Text in einer einfachen serifenlosen Schrift.

Siehe auch [Eine Projektdatei per IFC in 3D bringen](topic:rvt-to-ifc) und [Was BimCraft aus jedem Format liest](topic:file-formats).
