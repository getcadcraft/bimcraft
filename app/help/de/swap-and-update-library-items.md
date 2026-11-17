---
title: Ein platziertes Element tauschen und Bibliothekselemente aktualisieren
summary: Ersetzen Sie ein platziertes Bibliothekselement durch ein anderes, während Standort und Elementnummer erhalten bleiben, und prüfen Sie die Bibliothek auf neuere Versionen aller Elemente im Modell.
keywords: tauschen, ersetzen, Ersatz, aktualisieren, Update, neuere Version, nach Updates suchen, Bibliothek, zurückgezogen, Lizenzänderung, Elementnummer
from: 8bdfe01d
---

## Was Sie hier tun

Ändern Sie Ihre Meinung über ein Element, ohne es erneut zu verschieben, und halten Sie die Bibliothekselemente im Modell aktuell.

## Ein Element tauschen

1. Klicken Sie im Modell auf ein platziertes Bibliothekselement.
2. Klicken Sie in {{ui:Eigenschaften}} im Feld **Bibliothekselement** auf {{ui:Element tauschen…}}. Die Registerkarte {{ui:Bibliothek}} öffnet sich.
3. Suchen Sie das neue Element und klicken Sie auf seine Karte.
4. Klicken Sie auf {{ui:… auf dieses tauschen}}.

Das Element behält seinen Standort, seine Drehung, sein Geschoss, seine Elementnummer, Menge und Notizen. Sein Typ, seine Form und seine Elementdaten ändern sich auf das neue Element. Gleich platzierte Elemente teilen sich einen Typ, wie beim Platzieren.

Ein Element mit Varianten (siehe [Ein Bibliothekselement mit Varianten platzieren und tauschen](topic:library-variants)) listet beim Tauschen seine anderen Varianten oben auf der Registerkarte {{ui:Bibliothek}} auf: ein Klick je Variante.

Wenn das neue Element eine andere Art von Ding ist, zum Beispiel ein Waschbecken statt eines Tischs, wechselt die IFC-Klasse des Elements passend (hier von IfcFurnishingElement zu IfcSanitaryTerminal), damit andere Software es richtig auflistet. Es bleibt dasselbe Element mit derselben GlobalId, sodass Verknüpfungen weiterhin funktionieren. {{key:Mod+Z}} bringt die alte Klasse mit dem alten Element zurück.

## Nach Updates suchen

1. Klicken Sie in der Symbolleiste auf {{ui:Updates}} (oder auf {{ui:Nach Updates suchen}} im Feld eines Bibliothekselements).
2. Lesen Sie die Liste: jedes Bibliothekselement im Modell mit seiner Version im Modell, der neuesten Version und einem Status: **Aktuell**, **Neuere Version**, **Zurückgezogen** oder **Nicht gefunden**. Sie zeigt auch, was sich geändert hat (Geometrie, Daten, Lizenz oder eine Korrektur).
3. Klicken Sie in einer Zeile auf {{ui:Aktualisieren}} oder auf {{ui:Alle aktualisieren}}.

## Was Sie sehen sollten

- „*n* Platzierungen aktualisiert. Standorte, Elementnummern, Mengen und Notizen bleiben erhalten.“
- „Aktualisiert: *Element*“-Zeilen in der Änderungsliste. {{key:Mod+Z}} macht jede einzeln rückgängig.

## Gut zu wissen

- Nur Elemente aus der Bibliothek lassen sich prüfen. Elemente aus Dateien haben keine Bibliotheks-ID.
- Wenn sich eine Lizenz geändert hat, behält die bereits platzierte Kopie die Lizenz, mit der sie kam, bis Sie sie aktualisieren.
- Ein **Zurückgezogenes** Element wird für neue Platzierungen nicht angeboten. Eines, das aus urheberrechtlichen Gründen zurückgezogen wurde, lässt sich gar nicht herunterladen; ersetzen Sie es mit {{ui:Element tauschen…}}.
- Eine platzierte Variante bleibt diese Variante, wenn die neuere Version des Elements sie noch enthält; andernfalls übernimmt sie die Standardvariante des Elements.
- Die Prüfung sendet nur die Element-IDs und Versionen, nie Ihr Modell.
