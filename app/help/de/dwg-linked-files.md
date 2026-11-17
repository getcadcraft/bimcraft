---
title: Verknüpfte Zeichnungen und Bilder finden
summary: Verknüpfte Zeichnungen (Externe Referenzen oder Xrefs) und Bilder eines Schriftfelds anzeigen, indem Sie den Ordner der Zeichnung öffnen oder die Dateien von Hand hinzufügen.
keywords: Xref, externe Referenz, verknüpfte Zeichnung, anhängen, Überlagerung, Bild, Grafik, Logo, Schriftfeld, fehlende Xref, etransmit, Referenzmanager
from: 5593d4b1
---

## Was Sie tun

Machen Sie eine Zeichnung vollständig: Zeigen Sie die Zeichnungen, auf die sie verweist (externe Referenzen oder Xrefs), und die Bilder, die sie verwendet, etwa ein Logo im Schriftfeld.

## Der einfache Weg: Ordner öffnen

1. Klicken Sie auf {{ui:Open a folder}} und wählen Sie den Ordner, der die Zeichnung und ihre Verknüpfungen enthält, zum Beispiel den ganzen Ordner `Cad` eines Projekts.
2. Scrollen Sie im Ordnerbericht zu **CAD-Zeichnungen**.
3. Klicken Sie auf die Zeichnung.
4. Sehen Sie im Bereich {{ui:Properties}} rechts unter **Verknüpfte Zeichnungen** und **Bilder** nach.

BimCraft sucht jede verknüpfte Zeichnung nach ihrem Namen („*name*.dwg“), zuerst im selben Ordner wie die Zeichnung, dann überall im geöffneten Ordner. Bilder werden auf dieselbe Weise gefunden, und auch über einen ähnlichen Namen: Ein eTransmit- oder Revit-Export setzt oft den Projektnamen davor, daher wird `logo.png` als `Tower-logo-5425051.png` gefunden.

## Der andere Weg: Dateien von Hand hinzufügen

1. Öffnen Sie die Zeichnung allein.
2. Klicken Sie rechts unter **Verknüpfte Zeichnungen** auf {{ui:Add linked drawings…}}. Unter **Bilder** heißt die Schaltfläche {{ui:Add pictures…}}. Beide öffnen denselben Auswahldialog.
3. Wählen Sie die verknüpften `.dwg`-Dateien und die Bilddateien. Sie können mehrere auf einmal wählen.
4. Warten Sie, während BimCraft die Zeichnung mit ihnen erneut öffnet.

## Was Sie sehen sollten

Jede verknüpfte Zeichnung und jedes Bild wird mit einer Kennzeichnung aufgelistet:

| Kennzeichnung | Bedeutet |
|---|---|
| **Angezeigt** | Gefunden und gezeichnet. Der Pfad darunter sagt, woher sie stammt, oder „von Ihnen hinzugefügt“. |
| **Angezeigt, ähnlicher Name** | Ein Bild, das über einen ähnlichen Namen gefunden wurde. Prüfen Sie, ob es das richtige ist. |
| **Nicht gefunden** | Nicht im Ordner oder in den hinzugefügten Dateien. Ein fehlendes Bild erscheint als leerer Rahmen. |
| **TIFF kann im Browser nicht angezeigt werden** | Das Bild ist eine TIFF-Datei, die Browser nicht zeichnen. Speichern Sie es als PNG mit demselben Namen und fügen Sie es hinzu. |
| **Konnte nicht gelesen werden** | Die Datei wurde gefunden, aber nicht als Bild geöffnet. |

Der Bereich {{ui:Drawing}} links zeigt für verknüpfte Zeichnungen „*n* von *m* geladen“. Die Layer verknüpfter Zeichnungen erscheinen in {{ui:Layers}} als „*Linkname*|*Layer*“.

## Häufige Fehler

- **Nur die Zeichnung öffnen.** „Diese Zeichnung zeigt nur ihren eigenen Inhalt, bis ihre verknüpften Zeichnungen hinzugefügt sind. Wenn Sie den ganzen Projektordner öffnen, werden sie automatisch gefunden.“
- **Einen zu kleinen Ordner öffnen.** Wenn die Verknüpfungen in einem Nachbarordner liegen, öffnen Sie stattdessen den übergeordneten Ordner.
- **Umbenannte Verknüpfungen.** BimCraft ordnet verknüpfte Zeichnungen nach dem Namen zu. Eine auf der Festplatte umbenannte Verknüpfung wird nicht gefunden; fügen Sie sie von Hand hinzu.
- **Verknüpfungen von Verknüpfungen.** BimCraft lädt die Zeichnungen, auf die die geöffnete Zeichnung verweist. Zeichnungen, die darin verknüpft sind, werden nicht gesucht, daher erscheinen sie in dieser Version meist nicht.
