---
title: Auf Kollisionen prüfen
summary: Finden Sie, wo Elemente einer Gruppe in Elemente einer anderen hineinragen, etwa Kanäle durch Träger oder Wände in Decken, in einem oder mehreren Modellen, mit einer Toleranz, und machen Sie aus einer Kollision ein Thema.
keywords: Kollision, Kollisionsprüfung, harte Kollision, Durchdringung, Interferenz, Koordination, Überlappung, Toleranz, MEP, Tragwerk
from: 9cb12346
---

## Was Sie tun

Finden Sie die Stellen, an denen zwei Elementgruppen ineinander laufen, zum Beispiel alles im Installationsmodell gegen das Tragwerk. Sehen Sie sich dann jede an und behalten Sie die wichtigen als Themen.

## Schritte

1. Öffnen Sie ein IFC-Modell und fügen Sie die anderen mit {{ui:Modell hinzufügen…}} hinzu, wenn Sie modellübergreifend prüfen. Siehe [Mehrere IFC-Modelle zusammen anzeigen](topic:several-models).
2. Öffnen Sie {{ui:Kollisionsprüfung}} im linken Bereich.
3. Wählen Sie bei {{ui:Prüfen}} und {{ui:Gegen}} zwei Gruppen: die Elemente, die Sie gewählt haben, eine Klasse (über alle geöffneten Modelle), einen gespeicherten Suchsatz (siehe [Elemente nach Klasse, Name oder Eigenschaft finden](topic:find)) oder alles.
4. Legen Sie fest, wie viel Überlappung in Metern ignoriert werden soll. 0.01 ignoriert Elemente, die sich gerade berühren.
5. Klicken Sie auf {{ui:Starten}}. Die Prüfung läuft im Hintergrund; {{ui:Abbrechen}} stoppt sie.
6. Klicken Sie auf ein Ergebnis, um es zu sehen: Die beiden Elemente werden ausgewählt und angezeigt, alles andere wird transparent dargestellt, und die Ansicht zoomt auf sie.
7. Klicken Sie unter einem Ergebnis auf {{ui:Thema daraus machen}}, um es auf der Registerkarte {{ui:Themen}} festzuhalten. Siehe [Themen und BCF-Dateien](topic:issues-bcf).

## Was Sie sehen sollten

- Die Kollisionen, aufgelistet mit den Namen beider Elemente (und ihren Dateien, wenn mehrere Modelle offen sind) und der Tiefe der Überlappung, die tiefste zuerst.
- Flächen, die sich nur berühren, etwa eine Wand, die auf einer Decke steht, oder eine Tür in ihrer Öffnung, sind keine Kollisionen.

## Gut zu wissen

- Dies ist eine einfache harte Kollisionsprüfung: Elemente, deren Oberflächen sich kreuzen. Ein Element, das vollständig in einem anderen steckt (ein Rohr in einer Wand), wird noch nicht gefunden.
- Die Tiefe ist, wie weit sich die Begrenzungen der beiden Elemente mindestens überlappen: ein Anhaltspunkt, keine genaue Messung.

## Weiter

- [Abstände, Flächen und Positionen in 3D messen](topic:measure)
- [Elemente ausblenden, isolieren und transparent darstellen](topic:hide-and-isolate)
