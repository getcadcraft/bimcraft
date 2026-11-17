---
title: Rückgängig über Apps hinweg in CadCraft Studio
summary: In Studio meldet BimCraft jeden abgeschlossenen Schritt an Studio, sodass Studio Ihren letzten Schritt in dem Fenster rückgängig machen kann, in dem Sie zuletzt gearbeitet haben.
keywords: rückgängig, studio, apps übergreifend, Projekt rückgängig, Verlauf, Journal, Fenster
from: c66dd0c1
---

## Funktion

In CadCraft Studio meldet jedes App-Fenster an Studio, wenn ein Schritt abgeschlossen ist (eine Wand gezeichnet, eine Gruppe von Wänden aus einem Scan übernommen). Studio speichert diese Schritte in der Reihenfolge Ihrer Arbeit und kann das Fenster, das den letzten Schritt erzeugt hat, bitten, ihn mit seiner eigenen Funktion „Rückgängig“ zurückzunehmen. Ctrl+Z in BimCraft bleibt die eigene Funktion von BimCraft und wird ebenfalls an Studio gemeldet.

## Wissenswertes

- Studio fordert ein Fenster nur dann zum Rückgängigmachen auf, wenn dessen Änderungsliste genau so ist, wie der Schritt sie hinterlassen hat. Nach dem Speichern (das eine neue Änderungsliste beginnt) oder nachdem Sie das bearbeitete Modell gewechselt haben, antwortet BimCraft, dass sich die Liste verschoben hat, und Studio überspringt dieses Fenster. Nichts wird erzwungen.
- Die Wirkungen einer App in einer anderen rückgängig zu machen, ist noch nicht umgesetzt.
- Außerhalb von Studio ändert sich nichts.
- Der Studio-Menüeintrag, der das Rückgängigmachen anfordert, kommt mit einem Studio-Build. Bis dahin werden die Schritte gemeldet, aber kein Menüeintrag verwendet sie.

## Weiter

- [Gemeinsam live arbeiten](topic:work-live)
