---
title: Ein Modell mit der IDS eines Auftraggebers prüfen
summary: Laden Sie die erhaltene .ids-Datei und sehen Sie unter Probleme jedes Element, das sie nicht erfüllt, bevor Sie die IFC-Datei übergeben.
keywords: IDS, Information Delivery Specification, buildingsmart, Anforderungen, Lieferung, prüfen, Validierung, QS, EIR, BAP, Eigenschaft, Klassifikation, Material, Vergabe
from: 7b960222
---

## Was Sie tun

Eine IDS (Information Delivery Specification, ein buildingSMART-Standard) ist die Liste dessen, was eine IFC-Datei enthalten muss: welche Klassen, welche Eigenschaften mit welchen Werten, Klassifikationen, Materialien und wo Dinge hingehören. Auftraggeber und öffentliche Vergabestellen senden sie mit dem Auftrag. BimCraft prüft das offene IFC-Modell dagegen und listet jedes Element auf, das nicht genügt.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Öffnen Sie im linken Bereich unter {{ui:Modellprüfungen}} die Option {{ui:Mit einer IDS prüfen}} oder wählen Sie im Menü Ihres Menüstils {{ui:Mit IDS prüfen…}}.
3. Klicken Sie auf {{ui:Eine .ids-Datei laden…}} und wählen Sie die Datei. Nichts wird hochgeladen.
4. Lesen Sie das Ergebnis: jede Anforderung mit {{ui:Bestanden}} oder {{ui:Nicht bestanden}} und wie viele Elemente sie betrifft.
5. Öffnen Sie Probleme ({{key:Ctrl+Shift+M}}) und klicken Sie auf einen Fehler, um das Element auszuwählen und darauf zu zoomen.

## Was Sie sehen sollten

- Eine Warnung je Element und Anforderung, die es verfehlt, mit dem Namen der Anforderung, dem, was die IDS verlangt, und dem, was das Element hat.
- Eine Pflichtanforderung, auf die nichts im Modell passt, ist eine eigene Warnung.
- Der Prüfbericht (unter Probleme) beginnt mit der IDS: Titel, Version, Autor sowie je Anforderung die Anzahl der anwendbaren, bestandenen und nicht bestandenen Elemente.

## Gut zu wissen

- Die IFC-Datei behält nur einen Verweis auf die IDS (Name, Titel, Version und einen Hash), nicht die IDS selbst: Die IDS eines Auftraggebers kann vertraulich sein, und die IFC-Datei geht an andere Personen. Die IDS bleibt in diesem Browser neben dem Modell; daher wird sie geprüft, wenn Sie die gespeicherte IFC-Datei hier erneut öffnen. Laden oder Vergessen der IDS ist ein Schritt, den Sie rückgängig machen können.
- Wird die Datei auf einem anderen Computer oder in einem anderen Browser geöffnet, zeigt Probleme einen Hinweis, dass die IDS nicht gefunden wurde: Laden Sie sie erneut, um die Prüfung zu wiederholen.
- Um die IDS zusammen mit der IFC-Datei zu senden, aktivieren Sie in den Einstellungen auf der Registerkarte BimCraft {{ui:IDS in der IFC-Datei behalten}}, bevor Sie sie laden.
- Jede Bearbeitung, jedes Rückgängig und jede Wiederholung wird kurz danach erneut geprüft.
- Werte werden nach IDS-Art verglichen: Text genau (Groß- und Kleinschreibung zählt), Zahlen in SI-Einheiten mit einer kleinen Toleranz (Längen in Metern; ein Modell in Millimetern wird daher zuerst umgerechnet).
- Eine Anforderung für eine andere IFC-Version (zum Beispiel IFC2X3, wenn das Modell IFC4 ist) wird trotzdem geprüft; das Ergebnis weist darauf hin.
- Hat die IDS-Datei Fehler, die ein IDS-Audit melden würde, listet der Dialog sie auf; die Anforderungen, in denen sie stehen, schlagen fehl.
- Sie können eine Nicht-bestanden-Meldung wie jedes Problem mit einem Grund akzeptieren. Sie bleibt akzeptiert, solange die Werte des Elements gleich bleiben.

- Muster in der IDS werden als ganzer Wert gelesen. Ein `^` am Anfang und ein `$` am Ende gelten ebenfalls als „ganzer Wert“, wie die meisten IDS-Dateien es meinen.

## Weiter

- [Ein Modell auf häufige Probleme prüfen](topic:model-checks)
- [Eine Wand oder Tür ändern](topic:change-a-wall-or-door)
