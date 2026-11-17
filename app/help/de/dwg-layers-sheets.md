---
title: Mit Layern und Blättern arbeiten
summary: Layer einer Zeichnung ein- und ausschalten, zwischen Modellbereich und Blättern wechseln und verstehen, wie Blätter das Modell durch ihre Ansichtsfenster zeigen.
keywords: Layer, Layer ein/aus, einfrieren, auftauen, Blätter, Layouts, Papierbereich, Registerkarten, Ansichtsfenster, Layer-Manager, la
from: a9a16b53
---

## Was Sie tun

Räumen Sie die Ansicht einer vollen Zeichnung auf, indem Sie Layer ausschalten, und sehen Sie sich danach die Blätter der Zeichnung einzeln an.

## Schritte: Layer

1. Öffnen Sie eine DWG- oder DXF-Zeichnung.
2. Suchen Sie die Liste {{ui:Layers}} links. Jeder Layer hat ein Kontrollkästchen, ein Farbfeld und seinen Namen.
3. Entfernen Sie den Haken bei einem Layer, um alles darauf auszublenden.
4. Klicken Sie auf {{ui:All off}}, um jeden Layer auszublenden.
5. Setzen Sie nur bei den Layern einen Haken, die Sie sehen möchten.
6. Klicken Sie auf {{ui:All on}}, um wieder alles anzuzeigen.

## Was Sie sehen sollten

Layer verschwinden und erscheinen gleichzeitig auf {{ui:Model}} und auf jedem Blatt. Layer, die in der Zeichnung selbst ausgeschaltet oder eingefroren sind, starten ohne Haken.

## Schritte: Blätter

1. Sehen Sie sich die Reihe der Registerkarten über der Zeichnung an: {{ui:Model}}, dann jedes Blatt mit seinem Namen.
2. Klicken Sie auf einen Blattreiter.
3. Sehen Sie sich das Blatt an: Das Papier liegt auf einer dunkleren Unterlage, und jedes Ansichtsfenster zeigt seinen Teil des Modells in seinem eigenen Maßstab und Winkel.
4. Zoomen Sie in ein Ansichtsfenster, um Details zu lesen. Sie zoomen das Blatt, nicht das Ansichtsfenster, daher bewegt sich das ganze Blatt gemeinsam.
5. Klicken Sie auf {{ui:Fit}} oder doppelklicken Sie, um das ganze Blatt wieder zu sehen.

## So funktionieren Blätter hier

Ein Blatt (ein Layout oder der Papierbereich) enthält ein Schriftfeld und Ansichtsfenster, die in den Modellbereich schauen. BimCraft zeichnet jedes Ansichtsfenster auf seinen Rand beschnitten, in seinem eigenen Maßstab und seiner eigenen Drehung, und blendet die Layer aus, die in diesem Ansichtsfenster eingefroren sind. Das erste Ansichtsfenster jedes Blatts ist das Blatt selbst und wird nicht doppelt gezeichnet.

## Häufige Fehler

- **Erwarten, dass Layeränderungen gespeichert werden.** Layereinstellungen wirken nur auf die Ansicht, bis Sie eine andere Datei öffnen.
- **Eine Layersteuerung pro Ansichtsfenster erwarten.** Die Liste {{ui:Layers}} schaltet einen Layer überall um. Layer, die in einem Ansichtsfenster durch die Zeichnung eingefroren sind, bleiben dort eingefroren.
- **Eine Layersuche oder Layerzustände suchen.** Noch nicht umgesetzt. Die Liste steht in der Reihenfolge der Zeichnung.
- **In einem Ansichtsfenster arbeiten wollen.** Dort gibt es nichts zu aktivieren: BimCraft zeigt nur das Blatt. Verwenden Sie {{ui:Model}}, um den Modellbereich direkt anzusehen.
