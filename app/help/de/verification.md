---
title: Elemente als geprüft oder vor Ort verifiziert markieren
summary: Ein Element, das aus einer PDF oder einem Scan gelesen wurde, ist ungeprüft, bis Sie es prüfen. Markieren Sie Elemente als geprüft oder als vor Ort verifiziert (LOD 500) mit Angabe, wer sie gemessen hat, wann und wie, und übergeben Sie ein Ist-Modell, aus dem hervorgeht, welches welches ist.
keywords: ungeprüft, verifiziert, geprüft, vor Ort verifiziert, Ist-Modell, as-built, lod 500, Abschluss, Übergabe, vor Ort gemessen, Maßband, Laser, Scan, Vermessung, Bestandsgebäude, Umbau, als geprüft markieren, Verifizierung, Stufe 7
from: df35d908
---

## Was Sie tun

Behalten Sie den Überblick, was im Modell tatsächlich von jemandem angesehen wurde. Ein Element hat eine von drei Markierungen oder keine:

- **Ungeprüft**: Das Programm hat es aus einer PDF, einer gescannten Zeichnung, einer nachgezeichneten Zeichnung oder einem Punktwolkenscan erkannt. Noch hat niemand es geprüft.
- **Geprüft**: Eine Person hat es mit der Zeichnung verglichen, aus der es stammt.
- **Vor Ort verifiziert (LOD 500)**: Eine Person hat es vor Ort gemessen. Wer, wann und wie wird damit gespeichert.
- **Keine Markierung**: von einer Person gezeichnet. Das Modell macht dazu keine Aussage.

## Schritte

1. Wählen Sie ein Element oder mehrere (Wände, Türen, Fenster, Räume, beliebige Elemente).
2. Öffnen Sie in {{ui:Eigenschaften}} die {{ui:Verifizierung}}.
3. Geben Sie ein, wer es geprüft oder gemessen hat. Das Datum ist heute, sofern Sie es nicht ändern.
4. Klicken Sie auf {{ui:Als geprüft markieren}}. Bei einer Messung vor Ort wählen Sie, wie gemessen wurde (Maßband, Laser-Entfernungsmesser, Scan, Vermessung), und klicken Sie auf {{ui:Als vor Ort verifiziert (LOD 500) markieren}}.
5. {{ui:Als ungeprüft markieren}} und {{ui:Markierung entfernen}} machen es rückgängig. Jeder Klick ist ein Schritt, den Sie für die gesamte Auswahl rückgängig machen können.

Um eine Auswahl schnell zu markieren: {{ui:Werkzeuge}} › {{ui:Als geprüft markieren}} (getippt: `MARKCHECKED`) markiert sie als von Ihnen heute geprüft.

## Was Sie sehen sollten

- Im Grundriss hat ein ungeprüftes Element einen gestrichelten Rahmen und ein „?“; ein vor Ort verifiziertes Element hat ein Häkchen. Deaktivieren Sie {{ui:Prüfmarkierungen im Plan anzeigen}} im Bereich {{ui:Prüfung}}, um sie auszublenden.
- {{ui:Listen}} › {{ui:Verifizierung}} listet jedes markierte Element mit seinem Geschoss, seinem Zustand, wer, wann, wie und woher es stammt.
- Die Prüfung listet ungeprüfte Elemente auf und zählt ein vor Ort verifiziertes Element als LOD 500. Siehe [Modell prüfen](topic:audit-the-model).

## Aus einem Scan

Wenn Sie einen Scan mit dem Modell vergleichen, markiert {{ui:Passende Elemente als vor Ort verifiziert markieren}} jedes Element, das der Scan innerhalb der Toleranz als wie ausgeführt erfasst hat, mit der Methode „scan“ und der Toleranz in der Notiz. Siehe [Scan mit dem Modell vergleichen](topic:compare-scan-with-model).

:::warning
Dieser Vergleich ordnet den Begrenzungsquader jedes Elements Scanpunkten zu. Er ist keine Vermessung. Verwenden Sie ihn für Elemente, die Sie auch selbst angesehen haben.
:::

## Das Ist-Modell und das Übergabepaket

Auf der Registerkarte {{ui:Assets}} legt {{ui:Übergabepaket erstellen}} das Ist-Modell in die ZIP-Datei, mit:

- einer Aussage im Projekt, wie viele Elemente vor Ort verifiziert, geprüft, ungeprüft und ohne Markierung sind;
- `as-built/verified-elements.csv`: jedes Element und jeder Raum mit seinem Zustand, wer, wann und wie;
- `as-built/as-built-drawings.pdf`: der Zeichnungssatz, so wie er jetzt ist;
- dem Änderungsprotokoll der Zeichnungen, wenn das Modell ausgegebene Sätze hat.

Siehe [Assets und Wartung](topic:assets-and-maintenance).

## So wird es in der IFC gespeichert

Jedes markierte Element trägt den Eigenschaftssatz `CadCraft_Verification` mit Zustand, Von, Am, Methode, Quelle, Notiz und LevelOfDevelopment (`LOD 500`, solange es vor Ort verifiziert ist). Es sind einfache Texteigenschaften, sodass andere Programme sie auflisten, und Suchen, Farbe nach Eigenschaft und Kennzeichnungslisten sie verwenden können. Die Ist-Aussage ist der Eigenschaftssatz `CadCraft_AsBuilt` am Projekt. Ein Element ohne den Satz wurde nicht vor Ort gemessen.

## Weiter

- [Wände aus einem Satz Pläne](topic:walls-from-plans)
- [Modell prüfen](topic:audit-the-model)
