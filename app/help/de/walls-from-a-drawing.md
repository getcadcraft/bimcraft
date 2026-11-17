---
title: Wände aus einer nachgezeichneten Zeichnung
summary: Einen DWG- oder DXF-Grundriss in Wände, Türen und Fenster eines Geschosses umwandeln und die Zeichnung unter dem Grundriss als Referenz behalten.
keywords: dwg, dxf, nachzeichnen, Grundriss importieren, umwandeln, CAD zu BIM, 2D zu 3D, Wände aus Linien, Layer, Blöcke, Türen aus Blöcken, Unterlage, Referenzzeichnung, Hintergrund, Xref, Zeichenprogramm
from: 3bf213f1
---

## Was Sie tun

Einen Grundriss, den Sie (oder jemand anderes) im Zeichenprogramm erstellt haben, als Ausgangspunkt des Modells verwenden: Seine Wandlinien werden zu Wänden, seine Tür- und Fensterblöcke zu Türen und Fenstern.

## Schritte

1. Schalten Sie {{ui:Zeichnen}} ein und wählen Sie das Geschoss, das die Zeichnung im Geschossmenü des Grundrisses zeigt.
2. Wählen Sie {{ui:Build}} › {{ui:Aus einer Zeichnung…}}, dann {{ui:Zeichnung wählen…}} und wählen Sie die DWG- oder DXF-Datei.
3. Im Dialog:
   - **Zeicheneinheiten** kommen aus der Zeichnung; wählen Sie andere, wenn sie falsch sind (ein in Fuß gezeichneter Grundriss, der als Zoll gelesen wird, ist zwölfmal zu klein).
   - **Layer mit den Wänden**: Setzen Sie den Haken bei den Layern, auf denen die Wandlinien liegen. Layer, deren Namen „wand“ enthalten, sind für Sie angehakt.
   - **Die Linien sind**: **beide Flächen jeder Wand** (der übliche Weg, Grundrisse zu zeichnen: jedes Paar paralleler Linien bis 600 mm Abstand wird zu einer Wand so dick wie der Abstand), **die Mittellinien der Wände** oder **eine Fläche** mit der Wand links oder rechts davon. Bei Mittellinien oder einer Fläche legt der Wandtyp die Dicke fest.
   - **Wandtyp** und **Wandhöhe**, wie beim Werkzeug {{ui:Wand}}.
   - **Blöcke**: Wählen Sie für jeden Block, der eine Tür oder ein Fenster ist, einen Tür- oder Fenstertyp, oder lassen Sie ihn weg. Blöcke, deren Namen „tür“ oder „fenster“ enthalten, werden für Sie gewählt. Jeder wird in die Wand gesetzt, auf der er sitzt, so breit wie der Block entlang der Wand; eine Tür öffnet sich zu der Seite, auf die ihr Schwenkbogen gezeichnet ist.
   - **Wo es hinkommt**: an den eigenen Koordinaten der Zeichnung oder mit ihrer unteren linken Ecke auf dem Ursprung des Grundrisses.
   - **Die Zeichnung unter dem Grundriss dieses Geschosses behalten**: Lassen Sie den Haken gesetzt, um die Zeichnung als dünne Linien unter dem zu sehen, was Sie erstellen.
4. Die Zeile unter den Auswahlmöglichkeiten sagt, wie viele Wände, Türen und Fenster entstehen. Klicken Sie auf {{ui:Erstellen}}.

## Was Sie sehen sollten

- Die Wände, Türen und Fenster auf dem Geschoss, dort verbunden, wo sie sich treffen, mit den Räumen, die sie schließen; alles zusammen ist ein Schritt, daher nimmt {{key:Mod+Z}} es zurück.
- Die Zeichnung als dünne Linien unter dem Grundriss. {{ui:Build}} › {{ui:Aus einer Zeichnung…}} listet die auf dem Geschoss behaltenen Zeichnungen auf, jede mit {{ui:Entfernen}}; das Entfernen einer Zeichnung lässt die Wände stehen.
- In der IFC-Datei ist die behaltene Zeichnung eine Anmerkung auf dem Geschoss (ihre Linien), sodass andere BIM-Programme sie ebenfalls zeigen.

:::note
Ein PDF oder ein Scan funktioniert ebenfalls: siehe [Wände aus einem Satz Pläne](topic:walls-from-plans). Bögen werden weggelassen (BimCraft zeichnet gerade Wände), ebenso Linien innerhalb von Blöcken. Linien ohne Partner bei „beide Flächen“ werden im Dialog gezählt und weggelassen: Zeichnen Sie diese Wände mit dem Werkzeug {{ui:Wand}} oder bereinigen Sie sie mit {{ui:Ändern}} › {{ui:Stutzen / Dehnen}} (siehe [Wände stutzen, dehnen und verbinden](topic:trim-extend-walls)).
:::

:::tip
Im Zeichenprogramm über einen Scan nachgezeichnet? Öffnen Sie den Scan hier ebenfalls und prüfen Sie die Wände daran: siehe [Modell aus einem Scan](topic:model-from-a-scan).
:::
