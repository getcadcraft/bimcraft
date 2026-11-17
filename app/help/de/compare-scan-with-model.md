---
title: Scan mit dem Modell und dem 4D-Zeitplan vergleichen
summary: Jedes Element des Modells gegen eine geöffnete Punktwolke prüfen (fertig, teilweise, fehlend, nicht erreicht), den Fertigstellungsgrad in Prozent sehen, das Modell danach einfärben und mit geladenem 4D-Zeitplan am 4D-Tag auflisten, was zurückliegt oder voraus ist.
keywords: Scan, Punktwolke, Fortschritt, Fertigstellungsgrad, fertig, fehlend, hinter dem Zeitplan, vor dem Zeitplan, 4D, Baufortschritt, Abweichung, Ist-Zustand, Laserscan, Drohne, vergleichen
from: 6fdc9003
---

Öffnen Sie ein IFC-Modell, öffnen Sie daneben eine Punktwolke (siehe [Punktwolken](topic:point-clouds)) und legen Sie sie auf das Modell. Der Abschnitt {{ui:Scan mit dem Modell vergleichen}} erscheint im rechten Bereich, solange eine Punktwolke geöffnet ist.

## Was es tut

Klicken Sie auf {{ui:Vergleichen}}. Jedes Element des Modells wird nach seiner Oberfläche beurteilt, denn das ist, was ein Scanner sieht. Die sechs Flächen seines Quaders werden in Zellen von etwa 20 cm geteilt; eine Zelle zählt, wenn ein Scanpunkt innerhalb Ihrer {{ui:Toleranz}} (zunächst 50 mm) der Fläche liegt. Die beste große Fläche zählt, sodass eine Wand, die von einer Seite gescannt wurde, nicht für ihre andere Seite bestraft wird.

- **Fertig**: Mindestens 40 % der Oberfläche sind erfasst.
- **Teilweise**: 10 % bis 40 %.
- **Fehlend**: weniger als das, aber der Scan erreicht das Element (Punkte innerhalb 1.5 m davon).
- **Nicht erreicht**: Der Scan war nie dort, deshalb wird nichts darüber gesagt.

Bei fertigen und teilweise fertigen Elementen gibt es auch den mittleren Abstand der Scanpunkte von der Oberfläche des Modells an und sagt, ob das Element am Platz liegt (innerhalb der Toleranz), nahe (innerhalb des Dreifachen der Toleranz) oder abseits (weiter entfernt). Es sieht nur Abweichungen bis zum Fünffachen der Toleranz; ein Element, das weiter von seinem Platz entfernt gebaut wurde, erscheint als fehlend.

Die Zusammenfassung gibt den Fertigstellungsgrad in Prozent unter den Elementen an, die der Scan erreicht, nach Anzahl und nach Volumen. Teilweise fertige Elemente werden getrennt gezählt und nicht zu den fertigen addiert.

## Gegen den 4D-Zeitplan

Mit geladenem 4D-Zeitplan (siehe [4D-Zeitplan](topic:4d-schedule)) nutzt das Ergebnis auch den Tag, den Sie am 4D-Schieber eingestellt haben: Elemente, die bis zu diesem Tag fällig sind und die der Scan nicht als fertig zeigt, sind **hinter dem Zeitplan**; Elemente, die noch nicht fällig sind und schon fertig gebaut sind, sind **voraus**. Hinter dem Zeitplan liegende Elemente werden in {{ui:Probleme}} aufgelistet, und die Tabelle lässt sich darauf filtern. Ohne Zeitplan wird nichts über Zurückliegen oder Voraus gesagt.

## Tabelle und Modell

Klicken Sie auf eine Zeile, um das Element auszuwählen. {{ui:Modell einfärben}} färbt Elemente grün (fertig), bernsteinfarben (teilweise), rot (fehlend) oder grau (nicht erreicht); {{ui:Eigene Farben}} stellt sie wieder her. {{ui:CSV speichern}} schreibt die Tabelle. {{ui:Passende Elemente als vor Ort geprüft markieren}} markiert jedes Element, das als fertig und innerhalb der Toleranz erfasst wurde, als vor Ort geprüft (LOD 500, Methode Scan), in einem Schritt, den Sie rückgängig machen können. Siehe [Elemente als geprüft oder vor Ort geprüft markieren](topic:verification).

:::warning
Dies vergleicht den Quader jedes Elements mit Scanpunkten innerhalb einer Toleranz. Es ist **keine Vermessung, keine Mengenermittlung und keine Grundlage für Zahlungen**. Ein Element, das hinter einem gescannten liegt (eine Wand hinter einer Verkleidung, eine Decke unter einem Bodenbelag), teilt dessen Oberfläche und kann als fertig erscheinen; ein gekrümmtes oder geneigtes Element hat einen Quader, der größer ist als sein Körper, und kann als teilweise oder fehlend erscheinen. Sehen Sie sich die Liste an, bevor Sie danach handeln. Genehmigungsvermerke und Fortschrittsnotizen sind nicht Teil davon: Sie bleiben in den Spalten, in denen Sie sie führen.
:::

Ein Assistent kann denselben Vergleich mit dem Werkzeug {{ui:Scan mit dem Modell vergleichen}} ausführen; er verändert nichts am Modell.
