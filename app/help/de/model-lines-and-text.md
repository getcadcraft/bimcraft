---
title: Modelllinien und Modelltext: im Modell gezeichnet, auf der Arbeitsebene
summary: Eine Modelllinie ist eine Linie, Polylinie oder ein Bogen, der im Modell liegt und in jeder Ansicht erscheint, die ihn sieht. Modelltext ist 3D-Schrift mit echter Tiefe. Beide werden auf der Arbeitsebene gezeichnet.
keywords: Modelllinie, Modelltext, 3D-Text, Schrift, Schild, Beschilderung, Linie in 3D, Bogen, Polylinie, Arbeitsebene, extrudierter Text, Schriftart, Tiefe, Detaillinie, Zeichenlinie, Beschriftung, IfcAnnotation
from: fc9cccb5
---

## Was Sie tun

Zeichnen Sie Linien und Schrift, die zum Modell gehören und nicht zu einer einzelnen Ansicht.

## Schritte

1. Legen Sie zuerst die Arbeitsebene fest (siehe **Die Arbeitsebene**). Eine Geschossebene wird im Grundriss gezeichnet; eine aufrechte Ebene im Arbeitsebenen-Betrachter.
2. Für eine Linie wählen Sie im Menü **Build** die Option **Modelllinie** und wählen **Linie**, **Polylinie** oder **Bogen (drei Punkte)**:
   - Eine Linie braucht zwei Klicks.
   - Eine Polylinie braucht einen Klick für jeden Punkt, danach Enter oder einen Doppelklick. Ein Klick auf den ersten Punkt schließt sie.
   - Ein Bogen braucht drei Klicks: Anfang, einen Punkt, durch den er verläuft, und Ende.
3. Für Text wählen Sie **Modelltext**. Geben Sie die Wörter ein, legen Sie die Großbuchstabenhöhe und die Tiefe fest und klicken Sie dann dort, wo der Text beginnt (das linke Ende seiner Grundlinie).
4. Wählen Sie eine Linie oder einen Text, um sie in **Eigenschaften** zu sehen. Wörter, Höhe und Tiefe eines Textes können dort geändert werden. Löschen entfernt ihn.

## Wo sie angezeigt werden

- Eine Modelllinie wird im Grundriss ihres Geschosses, in der 3D-Ansicht, im Bereich Ansichten und Schnitte und im Arbeitsebenen-Betrachter angezeigt, wenn sie auf der Arbeitsebene liegt. Eine Zeichenlinie (Beschriften, Linie) gehört nur zu einer Ansicht.
- Modelltext ist Volumengeometrie: Er wird überall dort angezeigt, wo das Modell angezeigt wird, also im Grundriss, in 3D, in Ansichten und Schnitten und auf Blättern.
- Modelllinien werden auf gedruckten Blättern noch nicht gezeichnet. Modelltext schon.

## Die Schrift

Modelltext verwendet dieselbe Schrift wie die Blätter und PDFs: Liberation Sans, unter der SIL Open Font License. Ein Buchstabe, den die Schrift nicht enthält, wird als Fragezeichen gezeichnet, und Sie erhalten eine Meldung, welcher es ist. Es gibt eine Schrift und einen Schnitt. Die Buchstaben werden mit den eigenen Breiten der Schrift gesetzt, ohne Unterschneidung.

## Im IFC-File

- Eine Modelllinie ist ein IfcAnnotation mit dem Objekttyp ModelLine. Ihre Form ist eine 3D-Kurve: eine Polylinie oder ein beschnittener Kreis für einen Bogen.
- Modelltext ist ein IfcBuildingElementProxy mit dem Objekttyp ModelText. Ihre Form ist je Buchstabenteil ein extrudierter Volumenkörper, mit den Löchern von Buchstaben wie O und B. Ihre Mengen sind die Flächenfläche und das Volumen (Flächenfläche mal Tiefe).

## Gut zu wissen

- Jede Größe wird so erstellt, wie Sie es verlangen. Abgelehnt werden nur eine Linie ohne Länge, ein Bogen, dessen drei Punkte auf einer Linie liegen, oder ein Text ohne Buchstaben, denn dann gibt es nichts zu erstellen.
- Jede Linie sowie jeder Text und jede Änderung daran ist ein Schritt von Rückgängig.
