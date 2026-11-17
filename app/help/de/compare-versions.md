---
title: Zwei Versionen eines Modells vergleichen
summary: Zwei Versionen desselben IFC-Modells öffnen und sehen, welche Elemente hinzugefügt, entfernt und geändert wurden, zugeordnet über ihre GlobalIds, mit einer CSV-Datei aller Änderungen.
keywords: vergleichen, Diff, Unterschied, Versionen, Revision, Änderungen, geändert, hinzugefügt, entfernt, verschoben, GlobalId, GUID, was geändert wurde
from: cfca6971
---

## Was Sie tun

Sehen, was sich zwischen dem Modell, das Sie hatten, und dem, das Ihnen geschickt wurde, geändert hat: welche Elemente neu sind, welche fehlen, welche verschoben wurden oder neue Eigenschaftswerte erhalten haben.

## Schritte

1. Öffnen Sie die neuere Version, klicken Sie dann auf {{ui:Modell hinzufügen…}} und wählen Sie die ältere. Siehe [Mehrere IFC-Modelle zusammen anzeigen](topic:several-models).
2. Öffnen Sie unter {{ui:Modelle}} die Option {{ui:Versionen vergleichen}}.
3. Wählen Sie die {{ui:Ältere Version}} und die {{ui:Neuere Version}}.
4. Klicken Sie auf {{ui:Vergleichen}}.
5. Klicken Sie in einer Liste auf ein Element, um es auszuwählen und seine Eigenschaften zu sehen. Klicken Sie auf {{ui:CSV herunterladen}} für alle Änderungen, Eigenschaft für Eigenschaft.
6. Klicken Sie auf {{ui:Löschen}}, um zur normalen Ansicht zurückzukehren.

## Was Sie sehen sollten

- **Hinzugefügte** Elemente in Blau, aus der neueren Version.
- **Entfernte** Elemente in Rot, aus der älteren Version.
- **Geänderte** Elemente in Ocker, aus der neueren Version, mit Angabe, was sich geändert hat: Eigenschaften, eine Verschiebung mit Strecke oder eine neue Form.
- Alles, was gleich ist, ist durchsichtig.

## Gut zu wissen

- Elemente werden über ihre GlobalId zugeordnet. Ein Programm, das Elementen bei jedem Export neue GlobalIds gibt, lässt jedes Element als entfernt und wieder hinzugefügt erscheinen.
- Positionen werden verglichen, wo die Modelle in der Szene stehen. Wurde eine Version absichtlich verschoben, richten Sie sie zuerst mit {{ui:Verschieben}} unter {{ui:Modelle}} aus.
- Eine GlobalId, die zweimal in einem Modell vorkommt, wird aus dem Vergleich ausgelassen. [Ein Modell auf häufige Probleme prüfen](topic:model-checks) findet diese.

## Weiter

- [Probleme und BCF-Dateien](topic:issues-bcf)
- [Mengen nach Eigenschaft addieren](topic:quantity-totals)
