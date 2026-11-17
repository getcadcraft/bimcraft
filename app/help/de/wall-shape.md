---
title: Eine Wand formen: anbinden, profilieren, neigen und Öffnungen
summary: Die Oberseite einer Wand an ein Dach, eine Decke oder eine Deckenuntersicht anbinden, ihr einen eigenen Umriss in der Seitenansicht geben, sie neigen oder eine Öffnung ohne Tür oder Fenster schneiden, in den Eigenschaften, in einer Ansicht oder einem Schnitt, auf der Wandansicht selbst oder in 3D; jede Änderung ist ein Rückgängig-Schritt.
keywords: anbinden, oben anbinden, unten anbinden, Dach, Decke, Giebel, Profil, Profil bearbeiten, Umriss, gestuft, Attika, Neigung, geneigt, kippen, verjüngt, doppelt geneigt, Öffnung, Wandöffnung, Loch, Durchgang, ohne Tür, Griffe, Ansicht, Schnitt, 3D, Wandansicht, gekrümmte Wand, Kopieren
from: f558b269
---

## Was Sie tun

Die Form einer Wand oberhalb und unterhalb ihres Grundrisses ändern: Ihre Oberseite kann einem Dach, einer Geschossdecke oder einer Decke folgen, sie kann einen eigenen Umriss von der Seite haben, sie kann geneigt sein, und sie kann Öffnungen ohne Tür oder Fenster haben. Der Grundriss der Wand, ihre Ecken und ihre Ortungslinie bleiben unverändert.

## Wo Sie es tun können

- **Eigenschaften**: Bei eingeschaltetem {{ui:Zeichnen}} und eingeschaltetem {{ui:Wählen}} klicken Sie auf eine gezeichnete Wand. Die **Eigenschaften** zeigen die Zeilen der Wand, dann **Form**, wo alles eingegeben wird.
- **Eine Ansicht oder ein Schnitt**: Das Bleistift-Symbol im Projektbrowser ({{ui:In dieser Ansicht bearbeiten}}) öffnet die Ansicht; dort wählen Sie eine Wand und ziehen an ihren Griffen. Siehe „In einer Ansicht oder einem Schnitt“ unten.
- **Die Wandansicht selbst**: {{ui:Wände}} › {{ui:Profil bearbeiten…}}, dann in den Grundriss auf die Wand klicken. Das funktioniert für jede Wand, auch für eine, die keine Ansicht rechtwinklig zeigt, und für eine gekrümmte Wand (abgewickelt dargestellt).
- **Der Grundriss und die 3D-Ansicht**: die vier Befehle in {{ui:Wände}} (Gruppe Bearbeiten): {{ui:Oberseite / Fuß anbinden}}, {{ui:Profil bearbeiten…}}, {{ui:Neigung}} und {{ui:Wandöffnung}}. Siehe „Im Grundriss und in 3D“ unten.

Egal, welchen Weg Sie wählen, es ist dieselbe Änderung: ein Schritt in **Änderungen**, und {{ui:Rückgängig}} nimmt sie zurück.

Gerade und gekrümmte Wände nehmen alle Formwerkzeuge an. Bei einer gekrümmten Wand verlaufen die Abstände entlang ihres Bogens.

## Oberseite oder Fuß anbinden

- **Oberseite anbinden**: Wählen Sie ein Dach, eine Geschossdecke oder eine Decke. Die Oberseite der Wand folgt der Unterseite des Gewählten, senkrecht über jeder Ecke der Wand. Unter einem geneigten Dach erhält eine Wand eine schräge Oberseite, und wo das Dach die Ebene wechselt (ein First oder ein Grat), biegt sich die Oberseite der Wand mit.
- **Fuß anbinden**: Wählen Sie eine Geschossdecke oder eine Decke. Der Fuß der Wand folgt ihrer Oberseite.
- Wo über (oder unter) einem Teil der Wand nichts ist, behält dieser Teil die eigene Höhe der Wand.
- Die Verbindung bleibt bestehen: Ändern Sie die Dachneigung oder den Dachüberstand oder die Höhe der Decke, dann folgen die angebundenen Wände im selben Schritt.
- Wählen Sie **Eigene Höhe**, um die Anbindung zu lösen.

## Das Profil bearbeiten

{{ui:Profil bearbeiten…}} öffnet den Umriss der Wand von der Seite:

- **Oberlinie**: Zeilen mit **Entlang** (der Abstand vom Anfang der Wand) und **Höhe** (über dem Fuß der Wand). Drei Zeilen 0 / 3000, 2500 / 4500, 5000 / 3000 ergeben einen Giebel an einer 5 m langen Wand.
- **Unterlinie**: Lassen Sie sie leer für einen ebenen Fuß, oder geben Sie Zeilen für eine Wand auf einem gestuften Fundament an.
- {{ui:Einen Punkt hinzufügen}} fügt eine Zeile hinzu, **Entfernen** nimmt eine heraus. {{ui:Dieses Profil verwenden}} wendet es an; {{ui:Zurück zu gerade}} entfernt es.

Jede Linie verläuft einmal entlang der Wand, vom Anfang bis zum Ende; eine Linie, die auf sich selbst zurückläuft, oder eine Oberlinie, die auf die Unterlinie herabkommt, wird abgelehnt. Ist zusätzlich eine Oberseite angebunden, gilt die niedrigere der beiden.

## Die Wand neigen

**Neigung**: **Senkrecht**, **Geneigt** (beide Flächen neigen sich in dieselbe Richtung, die Dicke bleibt) oder **Doppelt geneigt** (jede Fläche hat ihren eigenen Winkel: eine Wand, die nach oben dünner oder dicker wird). Geben Sie Grad ab der Senkrechten ein; ein positiver Winkel neigt nach links der Wand, von ihrem Anfang aus gesehen. Die Wand bleibt am Fuß dort, wo sie gezeichnet ist; die daran angrenzenden Wände neigen sich nicht mit.

## Öffnungen ohne Tür oder Fenster

{{ui:Öffnung hinzufügen}} schneidet ein Loch von 900 Breite in die Mitte der Wand. Ihre Zeile unter **Öffnungen** legt **Ab Anfang**, **Breite**, **Brüstung** (ab dem Geschoss) und **Höhe** fest; **Entfernen** nimmt sie heraus. Die Öffnung geht durch die ganze Wand, die Mengen der Wand lassen sie aus, und der Grundriss zeigt eine Lücke, wo sie die Schnitthöhe des Grundrisses erreicht. Wenn der Anfang der Wand entlang ihrer Linie verschoben wird, behält die Öffnung ihren Platz; eine Änderung, die sie außerhalb der Wand ließe, wird abgelehnt.

## In einer Ansicht oder einem Schnitt

Öffnen Sie die Ansicht mit dem Bleistift-Symbol im Projektbrowser. Bei eingeschaltetem {{ui:Auswählen und verschieben}}:

- **Profil**: Klicken Sie auf eine Wand, die der Ansicht zugewandt ist. Ihre Ober- und Unterlinie werden blau, mit einem quadratischen Griff an jedem Punkt und einem Punkt in der Mitte jedes Stücks.
  - Ziehen Sie ein Quadrat, um diesen Punkt zu verschieben (die beiden Endpunkte bewegen sich nur nach oben und unten).
  - Ziehen Sie einen Punkt in der Mitte, um das ganze Stück nach oben oder unten zu verschieben.
  - Doppelklicken Sie auf eine Linie (oder klicken Sie mit der rechten Maustaste darauf), um dort einen Punkt hinzuzufügen; {{ui:Punkt hinzufügen (oben)}} und {{ui:Punkt hinzufügen (unten)}} fügen einen in der Mitte des längsten Stücks hinzu.
  - Klicken Sie auf ein Quadrat und drücken Sie {{key:Delete}} (oder klicken Sie mit der rechten Maustaste darauf), um diesen Punkt zu entfernen. {{ui:Zurück zu gerade}} entfernt das Profil.
  - Wenn ein Punkt gewählt ist, geben Sie seinen **Entlang**- und **Höhe**-Wert in die Leiste unter der Symbolleiste ein.
- **Anbinden**: Die Leiste hat die Listen **Oberseite anbinden** und **Fuß anbinden** für die gewählte Wand. Oder verwenden Sie das Werkzeug {{ui:Oben anbinden}} oder {{ui:Unten anbinden}}: Klicken Sie auf die Wand oder die Wände und dann auf das Dach, die Geschossdecke oder die Decke, das als gestrichelte Kästen dargestellt wird. Alle gewählten Wände werden in einem Schritt angebunden.
- **Wandöffnungen**: Mit dem Werkzeug {{ui:Wandöffnung}} ziehen Sie ein Rechteck auf die Fläche einer Wand. Zurück in {{ui:Auswählen und verschieben}}: ziehen Sie eine Öffnung, um sie zu verschieben, ziehen Sie an einem ihrer acht Griffe, um sie zu ändern, geben Sie **Ab Anfang**, **Breite**, **Brüstung** und **Höhe** in die Leiste ein, oder drücken Sie {{key:Delete}}, um sie zu entfernen.
- **Neigung**: Eine Wand, die die Ansicht entlang blickt (von vorn als Schnitt durch sie oder in einer Ansicht von ihrem Ende aus), kann ebenfalls angeklickt werden. Ziehen Sie am runden Griff oben, um sie zu neigen, oder wählen Sie **Senkrecht**, **Geneigt** oder **Doppelt geneigt** in der Leiste und geben Sie die Winkel ein.

Maße rasten auf 10 mm ein; geben Sie für Feineres einen Wert ein. Eine gekrümmte Wand lässt sich in einer Ansicht bearbeiten, solange sie quer durch die Ansicht in eine Richtung verläuft; ihre eigene Wandansicht funktioniert immer.

## Im Grundriss und in 3D

Öffnen Sie {{ui:Wände}} in der Gruppe Bearbeiten:

- {{ui:Oberseite / Fuß anbinden}}: Wählen Sie **Oberseite anbinden** oder **Fuß anbinden** in der Zeile des Werkzeugs. Klicken Sie auf die Wand oder die Wände (im Grundriss oder in der 3D-Ansicht) und dann auf das, woran sie angebunden werden: in 3D klicken Sie auf das Dach, die Geschossdecke oder die Decke selbst; im Grundriss klicken Sie auf einen Punkt darunter (liegen mehrere dort, fragt eine Liste nach).
- {{ui:Profil bearbeiten…}}: Im Grundriss klicken Sie auf eine Wand, um ihre Wandansicht zu öffnen. In 3D klicken Sie auf eine Wand: Ihre Profilpunkte erhalten Griffe; ziehen Sie einen davon in der Ebene der Wand.
- {{ui:Neigung}}: Klicken Sie auf eine Wand (Grundriss oder 3D) und geben Sie ein, wie stark sie geneigt ist.
- {{ui:Wandöffnung}}: Im Grundriss klicken Sie auf die Wand, wo die Öffnung hinkommt; ihre **Breite**, **Höhe** und **Brüstung** stehen in der Zeile des Werkzeugs. In 3D klicken Sie auf eine Ecke auf der Fläche der Wand und dann auf die gegenüberliegende Ecke. Ist in 3D eine Wand gewählt, haben ihre Öffnungen Griffe: Die Ecken ändern die Größe, die Mitte verschiebt.

Die 3D-Griffe sind die eigenen Griffe der 3D-Ansicht und warten daher, solange der Schnittkasten seine Griffe zeigt.

## Im Grundriss

Eine geneigte Wand wird dort gezeichnet, wo der Grundriss sie schneidet (1200 über dem Geschoss, sofern die Ansicht nichts anderes sagt): Ihr Umriss wird um den Betrag verschoben, um den sie sich in dieser Höhe neigt, und eine doppelt geneigte Wand ist dort breiter oder schmaler. Ihr Umriss am Boden wird mit den dünnen Linien dessen gezeichnet, was unterhalb des Schnitts liegt. Die Ecken, Griffe und Bemaßungen der Wand bleiben am Fuß.

## Kopien

{{ui:Dieses Geschoss kopieren…}} und Verschieben mit **Kopieren** nehmen Profil, Neigung und Wandöffnungen der Wand mit. Eine an eine Geschossdecke oder Decke angebundene Wand wird an die kopierte Geschossdecke oder Decke des neuen Geschosses angebunden; eine Anbindung an ein Dach wird mit einem Geschoss nicht kopiert (Dächer werden nicht kopiert). Eine Kopie auf demselben Geschoss bleibt an dasselbe Dach, dieselbe Geschossdecke oder Decke angebunden.

## In der Datei

Eine geformte Wand wird als facettierter Körper (IfcFacetedBrep) geschrieben, den andere Programme so lesen, wie er gezeichnet ist; ihre Einstellungen stehen an der Wand (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Eine Öffnung ist ein IfcOpeningElement in der Wand, das nichts ausfüllt.

## Noch nicht umgesetzt

- Ein Profil mit Überständen oder Löchern im Umriss (für Löcher Öffnungen verwenden).
- In 3D: Profilpunkte hinzufügen oder entfernen und die Neigung über einen Griff (die Wandansicht, eine Ansicht oder einen Schnitt verwenden oder die Werte eingeben).
- {{ui:Versatz}} mit eingeschaltetem Kopieren kopiert nicht die Form oder die Wandöffnungen (Verschieben mit Kopieren tut es).
- Die Schichten einer geneigten Wand werden in Grundrissen mit mittlerem und feinem Detail nicht gezeichnet (ihr Umriss schon).
- Öffnungen, die keine Rechtecke sind.
