---
title: Koordinaten in BimCraft
summary: Wo Sie arbeiten: die Position des Mauszeigers im Grundriss und in der 3D-Ansicht, das aktuelle Geschoss, der Projektursprung und der Vermessungspunkt des Grundstücks.
keywords: Koordinaten, wo bin ich, Position, Mauszeiger, Anzeige, x y z, Geschoss, Ebene, Projektursprung, Ursprung, Basispunkt, Vermessungspunkt, Grundstück, Kartenkoordinaten, Rechtswert, Hochwert, Georeferenzierung, Einheiten, Standort
from: 84df5245
---

## Was Sie tun

Sehen Sie auf einen Blick, wo Sie im Modell sind: auf welchem Geschoss Sie zeichnen, wie weit der Mauszeiger vom Projektursprung entfernt ist und wo der Vermessungspunkt des Grundstücks liegt.

## Wo die Zahlen angezeigt werden

- **Über der 3D-Ansicht** (unten rechts, neben dem ViewCube): Bewegen Sie den Mauszeiger über das Modell. Die Anzeige nennt das Geschoss, auf dem der Punkt liegt, und wie hoch er über dem Boden dieses Geschosses liegt, danach seine **X, Y und Z**. Über leerem Raum liest sie den Punkt auf dem Boden des untersten Geschosses ab.
- **Im Grundriss** (unten rechts, solange {{ui:Zeichnen}} eingeschaltet ist): das Geschoss, das der Grundriss zeigt, und die Höhe seines Bodens sowie die **X und Y** des Mauszeigers, solange er über dem Grundriss ist.
- Wenn die Datei eine Kartenumrechnung hat (sie wurde mit Kartenkoordinaten exportiert), ergänzen beide Anzeigen die **Rechtswerte und Hochwerte** im Kartennetz, in der gewählten {{ui:Einheiten}} (immer mit der daneben geschriebenen Einheit; Fuß und Zoll werden als Dezimalfuß angezeigt). Eine Zeichnung (DWG oder DXF) behält ihre eigenen Einheiten: Ihre Mauszeiger-Anzeige nennt sie, und sie wird nie umgerechnet.

Jeder Wert für X, Y und Z wird vom **Projektursprung** aus gemessen, in der über die Symbolleiste gewählten {{ui:Einheiten}} (Fuß und Zoll, Zoll, Dezimalfuß, Millimeter, Zentimeter oder Meter). Positives Y zeigt nach Norden im Modell, das nicht immer geografisch Nord ist. Rechts- und Hochwerte folgen derselben Wahl (Fuß und Zoll werden als Dezimalfuß angezeigt). Weicht die Einheit des Kartensystems von Ihrer gewählten ab, wird sie in Klammern hinter den Zahlen genannt, zum Beispiel *(US survey feet)*, damit ein Vermesser sieht, in welcher Einheit das System selbst geschrieben ist.

## Die beiden Symbole

- **Projektursprung** (ein roter Kreis mit Kreuz): der Punkt 0, 0, 0, von dem aus alle Koordinaten im Modell gemessen werden.
- **Vermessungspunkt** (ein blauer Kreis mit Dreieck): der Bezugspunkt des Grundstücks, für den Breiten- und Längengrad, Höhe oder Kartenkoordinaten angegeben sind. Zeigen Sie in der 3D-Ansicht darauf, um zu lesen, wo er liegt.

Liegt das Grundstück auf dem Projektursprung, wie bei einem hier neu gezeichneten Gebäude, zeigt ein Symbol beides an. Klicken Sie in einer der Anzeigen auf die Schaltfläche mit dem Fadenkreuz, um die Symbole ein- oder auszublenden. BimCraft merkt sich Ihre Wahl in diesem Browser.

## Was Sie sehen sollten

- Die Zahlen ändern sich, wenn Sie den Mauszeiger bewegen, und die Anzeige im Grundriss nennt das Geschoss, das Sie in der Geschossliste gewählt haben.
- Die Symbole bleiben stehen, während Sie die Ansicht drehen, schwenken und zoomen.

:::tip
Um Breiten- und Längengrad eines Punkts abzulesen, verwenden Sie {{ui:Messen}} › {{ui:Standort}}: siehe [Abstände, Flächen und Standorte in 3D messen](topic:measure).
:::

:::touch
Auf einem Touchscreen zeigt die 3D-Anzeige nichts, bis Sie eine Maus oder einen Stift verwenden: Mit dem Finger wird stattdessen die Ansicht bewegt.
:::
