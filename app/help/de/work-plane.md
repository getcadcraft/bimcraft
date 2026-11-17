---
title: Die Arbeitsebene: festlegen, anzeigen, senkrecht darauf blicken
summary: Die Arbeitsebene ist die Ebene, die Modelllinien, Modelltext und der Arbeitsebenen-Viewer verwenden. Legen Sie sie auf ein Geschoss, eine Fläche, eine benannte Bezugsebene oder eine Linie fest; zeigen Sie sie in den Ansichten an; öffnen Sie den Viewer, um auf einer senkrechten Ebene zu zeichnen.
keywords: Arbeitsebene, Arbeitsebene festlegen, Arbeitsebene anzeigen, Bezugsebene, Arbeitsebenen-Viewer, benannte Ebene, Fläche, Geschoss, senkrechte Ebene, vertikale Ebene, an einer Wand zeichnen, Ansichtszeichnung, Fang, Ausrichtung, Bezugsebene
from: 8aceee1d
---

## Was Sie tun

Wählen Sie die Ebene, auf der Sie zeichnen, sehen Sie, wo sie liegt, und zeichnen Sie auf einer Ebene, die senkrecht steht.

## Schritte

1. Schalten Sie **Zeichnen** ein und öffnen Sie das Menü **Erstellen** (im Menübandlayout: die Registerkarte Architektur, Gruppe Arbeitsebene).
2. Wählen Sie **Arbeitsebene festlegen**. Dann tun Sie eines davon:
   - wählen Sie ein Geschoss unter **Festlegen auf**;
   - wählen Sie eine benannte Bezugsebene in der Liste daneben;
   - klicken Sie im Grundriss auf eine Linie: eine Wand, eine Rasterlinie, eine Bezugsebene, eine Modelllinie oder ein Vorhangfassadensystem. Die Arbeitsebene wird zur senkrechten Ebene durch diese Linie;
   - klicken Sie in der 3D-Ansicht auf eine ebene Fläche. Die Arbeitsebene liegt auf dieser Fläche.
3. Wählen Sie **Arbeitsebene anzeigen**, um sie zu sehen: ein getöntes Blatt mit einem Meterraster in der 3D-Ansicht, ein gestrichelter Umriss oder eine gestrichelte Linie im Grundriss und ein gestrichelter Umriss im Ansichts- und Schnittbereich. Wählen Sie es erneut, um es auszublenden.
4. Wählen Sie **Arbeitsebenen-Viewer**, um senkrecht auf die Ebene zu blicken. Die schwarzen Linien sind das Modell, geschnitten durch die Ebene. Verwenden Sie dessen Werkzeuge, um eine Modelllinie, einen Modelltext oder eine Bezugsebene auf der Ebene zu zeichnen. **In 3D ansehen** dreht die 3D-Ansicht zur Ebene hin.

## Bezugsebenen

Eine Bezugsebene ist eine benannte Ebene, die Sie als Linie zeichnen.

1. Wählen Sie **Bezugsebene**. Geben Sie in ihrer Zeile einen Namen ein, falls Sie einen möchten (sonst wird sie für Sie benannt), und eine Höhe.
2. Klicken Sie, wo sie beginnt und wo sie endet. Im Grundriss entsteht daraus eine senkrechte Ebene. Im Arbeitsebenen-Viewer entsteht eine Ebene, die rechtwinklig auf der Arbeitsebene steht.
3. Sie erscheint als gestrichelte grüne Linie mit ihrem Namen im Grundriss, als gestrichelter Umriss in der 3D-Ansicht und im Ansichts- und Schnittbereich.
4. Wählen Sie sie aus, um sie umzubenennen, ihre Länge, Höhe und ihren Fußpunkt zu ändern, oder drücken Sie **Als Arbeitsebene verwenden**.

Zwei Bezugsebenen dürfen nicht denselben Namen haben, denn über den Namen wählen Sie eine davon aus.

## Gut zu wissen

- Ein Modell ohne festgelegte Arbeitsebene arbeitet auf seinem untersten Geschoss.
- Die Arbeitsebene wird in der Datei gespeichert. Ob sie angezeigt oder ausgeblendet ist, wird in diesem Browser gemerkt, nicht in der Datei.
- Wenn die Arbeitsebene einer Bezugsebene folgt und Sie diese verschieben, wandert die Arbeitsebene mit.
- Auf einer senkrechten Arbeitsebene öffnen die Werkzeuge Modelllinie und Modelltext den Viewer, weil ein Grundriss nicht auf eine Höhe zeigen kann.
- Zeichenwerkzeuge fangen die Enden von Bezugsebenen, die im Grundriss gezeichnet wurden, genauso ein wie die Enden anderer Linien im Viewer.

## In der IFC-Datei

- Die Arbeitsebene ist ein Eigenschaftssatz (CadCraft_WorkPlane) am Projekt.
- Eine Bezugsebene ist eine IfcAnnotation mit dem Objekttyp ReferencePlane und ihrem Namen. Ihre Form ist der geschlossene Umriss der Ebene, damit andere Programme zeigen, wo sie liegt. Ihr Satz CadCraft_ReferencePlane enthält Ursprung, Richtung, Normale und Ausdehnung. IFC hat keine Klasse für eine Bezugsebene; eine Annotation zählt nicht als Bauteil und begrenzt keine Räume.
