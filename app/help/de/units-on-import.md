---
title: Einheiten beim Import: Eine Datei gibt ihre Einheiten an, oder Sie werden zuerst gefragt
summary: Wenn eine Datei, die Sie einbringen, ihre Einheiten angibt, verwendet BimCraft diese und sagt es. Wenn nicht, fragt BimCraft, bevor etwas platziert wird, und merkt sich Ihre Antwort für diese Datei.
keywords: Einheiten, Import, öffnen, OBJ, STL, DWG, DXF, IFC, Punktwolke, Bibliothekselement, Millimeter, Meter, Zoll, Fuß, Maßstab, falsche Größe, zu groß, zu klein, 1000-mal, fragen, gespeichert
from: f044e9bc
---

## Was Sie tun

Bringen Sie eine Datei ein und stellen Sie sicher, dass sie in der richtigen Größe ankommt.

## Schritte

1. Öffnen oder fügen Sie die Datei wie gewohnt hinzu: {{ui:Offen}}, die {{ui:Dateien}} der Bibliothek, {{ui:Punktwolken}} oder Erstellen › Aus einer Zeichnung.
2. Wenn die Datei ihre Einheiten angibt, wird nichts gefragt. Die Statuszeile zeigt, welche Einheiten die Datei angibt.
3. Wenn nicht, fragt ein Dialogfeld nach **Einheiten von** der Datei. Wählen Sie, was eine Einheit in der Datei ist, und klicken Sie auf {{ui:Diese Einheiten verwenden}}. Vor Ihrer Antwort wird nichts platziert.
4. {{ui:Abbrechen}} (oder {{key:Esc}}) bringt nichts ein.

## Welche Dateien ihre Einheiten angeben

- **IFC**: gibt seine Längeneinheit an, und „Geöffnet“ zeigt, welche. Eine IFC, die keine angibt, wird vor dem Öffnen gefragt; Ihre Antwort wird in das Modell geschrieben, sodass die Datei sie nach dem Speichern angibt.
- **DWG und DXF**: die Einfügeeinheiten der Zeichnung. Eine Zeichnung ohne sie wird gefragt (Bibliotheksdateien, Erstellen › Aus einer Zeichnung, Gelände aus Höhenlinien).
- **Punktlisten** für Gelände: geben keine Einheiten an. Sie werden gefragt.
- **Punktwolken**: LAS und LAZ mit einem Koordinatensystem, E57, PTX und PLY geben ihre Einheiten an. Andere werden gefragt.
- **OBJ und STL**: geben nie Einheiten an. Sie werden gefragt.
- **glTF und GLB**: Meter, nach der eigenen Regel des Formats.
- **Bilder**: haben keine eigene Größe. Ein Bild wird an die Ansicht angepasst, und Sie legen seine Größe mit **Über zwei Punkte skalieren** fest. Die Größe, die Sie angeben, wird für diese Datei gespeichert: Wird das Bild erneut platziert, kommt es in dieser Größe, und die Statuszeile sagt es.
- **Das Add-on Punktwolken**: fragt, wenn Sie eine Wolke erstellen, deren Datei keine Einheit angibt, und beschriftet die Zahlen der Wolke in der Einheit, die sie mitführt.

## Gut zu wissen

- Die Antwort wird für diese Datei (ihr Name, ihre Größe und ihr Datum) auf diesem Computer in jeder CadCraft-App gespeichert. Beim nächsten Import derselben Datei werden Sie nicht gefragt, und die Statuszeile sagt, dass die gespeicherten Einheiten verwendet wurden.
- Um erneut gefragt zu werden: die Befehlspalette ({{key:Mod+K}}) › **Bei importierten Dateien erneut nach den Einheiten fragen**.
- Eine Einheitenliste, die ein Import bereits hat (die Einheiten der Bibliothek, die Einheiten der Punktwolkenleiste, Zeichnungseinheiten in Aus einer Zeichnung), ändert die Einheiten weiterhin nachträglich. Die Einheitenliste des Geländewerkzeugs ist jetzt nur noch die Vorauswahl der Frage.
