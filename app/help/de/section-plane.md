---
title: Ein IFC-Modell mit einer Schnittebene schneiden
summary: Schneiden Sie das 3D-Modell von oben, vorne oder seitlich, oder behalten Sie nur, was in einer Schnittbox oder einem Volumen aus mehreren Boxen mit geneigten Flächen liegt, um ins Innere zu sehen. Verschieben Sie den Schnitt durch Ziehen oder Eintippen, kehren Sie ihn um und wählen Sie, was der Schnitt zeigt.
keywords: Schnitt, Schnittebene, Schnittbox, Griffe, ziehen, Abstand, Auswahlbox, Clipbox, schneiden, Abschneiden, Scheibe, Grundrissschnitt, Grundriss, Ansicht, innen, Innenraum, umkehren, Versatz, Schnittvolumen, gestufter Schnitt, L-förmig, neigen, schräger Schnitt, schiefe Ebene, zusätzliche Ebene
from: 6315e71a
---

## Was Sie tun

Schneiden Sie ein IFC-Modell mit einer Ebene, um hineinzusehen: von oben für einen Grundriss oder von vorne oder seitlich für einen Schnitt durch das Gebäude.

## Schritte

1. Öffnen Sie ein IFC-Modell. Siehe [Ein IFC-Modell öffnen und in 3D betrachten](topic:open-ifc-model).
2. Klicken Sie in der Symbolleiste auf {{ui:Section}} oder drücken Sie {{key:X}}. Das Modell wird auf halber Höhe geschnitten, und unter der Symbolleiste erscheint eine Leiste.
3. Wählen Sie, von wo geschnitten wird: {{ui:Top}}, {{ui:Front}} oder {{ui:Side}}. Vorne und Seite drehen die Ansicht außerdem zum Schnitt hin.
4. Verschieben Sie den Schnitt: Ziehen Sie den Schieberegler **Versatz** oder geben Sie in das Feld einen Abstand in Metern ein und drücken Sie {{key:Enter}}. Sie können auch Millimeter eingeben, zum Beispiel `1200 mm`.
5. Klicken Sie auf {{ui:Flip}}, um die andere Seite des Schnitts zu behalten.
6. Klicken Sie auf ein Element am Schnitt, um seine Eigenschaften zu sehen.
7. Klicken Sie auf {{ui:Off}}, klicken Sie erneut auf {{ui:Section}} oder drücken Sie {{key:X}}, um den Schnitt zu entfernen.

## Eine Schnittbox

Klicken Sie in derselben Leiste auf {{ui:Box}}, um nur das zu behalten, was in einer Box liegt. Jede von {{ui:X}}, {{ui:Y}} und {{ui:Z}} hat zwei Schieberegler: wo die Box beginnt und wo sie endet, in Metern vom Rand des Modells. Die Werte werden daneben angezeigt.

- {{ui:Box round the pick}} passt die Box um die gewählten Elemente an und zoomt auf sie. Sie lässt 300 mm Abstand auf jeder Seite; ändern Sie das in {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Room round the pick}}.
- Mit gewählten Elementen macht {{ui:Show}} › {{ui:Section box round the pick}} oder {{key:Shift+X}} dasselbe in einem Schritt, auch wenn kein Schnitt aktiv ist.
- **Griffe** an der Box bewegen sie mit dem Zeiger: Ziehen Sie ein Quadrat in der Mitte einer Fläche, um diese Fläche zu verschieben, eines in der Mitte einer Kante, um die zwei dort zusammentreffenden Flächen zu verschieben, oder eines an einer Ecke, um die drei zu verschieben. Die Schieberegler folgen. Bei {{ui:Top}} verschiebt eine Ecke die Box im Grundriss, bei {{ui:Front}} oder {{ui:Side}} in der Ansicht.
- {{ui:Whole model}} öffnet die Box wieder auf das ganze Modell.
- {{ui:Top}}, {{ui:Front}} oder {{ui:Side}} gehen zurück zu einer Ebene.

## Ein Volumen aus mehreren Boxen, geneigte Flächen und zusätzliche Ebenen

Eine Box ist nicht immer die Form, die Sie brauchen: ein gestufter Schnitt, ein L-förmiger Flügel oder ein Schnitt entlang einer Wand, die nicht rechtwinklig zum Raster steht.

1. Klicken Sie in {{ui:Box}} auf {{ui:Add a box}}. Der Schnitt behält nun, was in **einer** der Boxen liegt, sodass zwei Boxen ein gestuftes oder L-förmiges Volumen ergeben. Die Liste daneben zeigt, welche Box die Schieberegler ändern ({{ui:Box 1}}, {{ui:Box 2}} …); {{ui:Remove this box}} entfernt die gewählte. Ein Volumen hat bis zu 8 Boxen.
2. Öffnen Sie {{ui:Tilt and planes}}, um die gewählte Box zu formen:
   - Wählen Sie eine {{ui:Face}} und geben Sie ein, wie weit sie sich in jede Richtung neigt, in Grad (bis 80). Die Fläche dreht sich um ihre Mitte; die anderen Flächen bleiben, wo die Schieberegler sie setzen. {{ui:Square}} stellt sie wieder zurück.
   - {{ui:Add a plane}} schneidet die Box mit einer weiteren Ebene. {{ui:Faces}} ist die Richtung, in die die abgeschnittene Seite zeigt, in Grad von X in Richtung Y; {{ui:Slope}} ist, wie weit sie nach oben gedreht ist (0 für eine senkrechte, 90 für eine waagerechte Ebene); {{ui:Offset}} ist, wie weit die Ebene von der Mitte der Box entfernt ist, in Metern. × entfernt sie. Eine Box nimmt bis zu 6 zusätzliche Ebenen auf.
3. Wo das Volumen Körper schneidet, werden die Schnittflächen wie zuvor gefüllt, auch dort, wo sich zwei Boxen an einer Stufe treffen.

:::tip
Wenn der Umriss verschwindet und nichts übrig bleibt, lassen die Neigungen oder Ebenen innerhalb dieser Box nichts übrig; die Leiste sagt es. Neigen Sie eine Fläche zurück oder ändern Sie den Versatz einer Ebene.
:::

## Ein auf seinem Grundstück gedrehtes Gebäude

Viele Modelle stellen das Gebäude schräg zu den Achsen der Datei (geografisch Nord, gemeinsame Koordinaten). Wenn die Wände schräg verlaufen, beginnt ein neuer Schnitt rechtwinklig zum Gebäude: {{ui:Front}}, {{ui:Side}} und die Box verlaufen entlang seiner eigenen Wände, und {{ui:Square to the building}} in der Schnittleiste ist eingeschaltet. Klicken Sie darauf für die Achsen des Modells und erneut, um zurückzukehren (die Statuszeile sagt, um wie viel das Gebäude gedreht ist). Mit **Einstellungen › BimCraft › Ein auf seinem Grundstück gedrehtes Gebäude › Wie auf dem Grundstück platziert** starten Schnitte und Ansichten stattdessen auf den Achsen des Modells. Siehe [Einstellungen](topic:settings).

## Was Sie sehen sollten

- **Oben** behält, was unter dem Schnitt liegt, sodass Sie in die Räume hineinsehen. Der Versatz wird von der Unterkante des Modells nach oben gemessen.
- **Vorne** behält, was hinter dem Schnitt liegt, von vorne gesehen; **Seite** behält, was jenseits davon liegt, von der Seite gesehen. Der Versatz wird von der Vorder- oder Seitenseite des Modells gemessen.
- Eine dünne farbige Umrisslinie zeigt, wo die Ebene liegt.
- Wo die Ebene eine Wand, Decke oder einen anderen Körper schneidet, wird die Schnittfläche in einer dunklen Farbe gefüllt, wie ein gezeichneter Schnitt. {{ui:Fill}} in der Leiste schaltet dies ein und aus.
- Der ViewCube unten rechts dreht das Modell, um den Schnitt von jeder Seite zu sehen.
- Ein Klick wählt, was Sie sehen können: Was abgeschnitten ist, kann nicht gewählt werden.

## Häufige Fehler

- **Nichts hat sich geändert.** Der Schnitt liegt vielleicht über dem Dach oder außerhalb des Modells. Ziehen Sie den Schieberegler oder geben Sie einen kleineren Versatz ein.
- **Der Versatz sprang zurück.** Ein Abstand über das Modell hinaus wird an dessen Ende gesetzt, und die Statuszeile sagt es.
- **Ein BCF-Thema zeigt nur einen Teil meines Volumens.** Ein BCF-Thema behält eine Box mit ihren geneigten Flächen und Ebenen: die erste Box eines Volumens. Die Statuszeile sagt es, wenn Sie das Thema erstellen.
- **Der Schnitt ist hohl.** {{ui:Fill}} in der Leiste ist aus: Klicken Sie darauf, um die Schnittflächen von Wänden, Decken und anderen Körpern zu füllen.
- **Ein gefüllter Schnitt wirkt gesprenkelt oder es fehlt ein Stück.** Füllen braucht geschlossene Körper; ein Element, dessen Form in der Datei nicht geschlossen ist (ein einzelnes Blech, Baumlaub), bleibt ungefüllt, statt übermalt zu werden. Ein Element aus Teilen in verschiedenen Farben (ein Rahmen und seine Verglasung) wird gefüllt, wenn seine Teile zusammenschließen.
- **Wo ist die Schnittleiste?** Sie sitzt oben in der 3D-Ansicht, die sie schneidet: in der 3D-Hälfte bei {{ui:Split}}, und unter der Zeichenleiste bei {{ui:Plan}} allein. In einer kurzen Ansicht scrollt sie.

## Weiter

- [Geschosse, Räume und Kanten ein- und ausblenden](topic:storeys-and-spaces)
- [Eine DWG- oder DXF-Zeichnung in 3D sehen](topic:dwg-in-3d) — Zeichnungen in 3D haben dieselbe Schnittebene
