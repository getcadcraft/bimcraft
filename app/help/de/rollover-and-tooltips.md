---
title: Info-Tooltips in zwei Stufen und Hinweise beim Darüberfahren im Plan
summary: Zeigen Sie auf ein Werkzeug, um sofort seinen Namen und sein Kürzel zu sehen und kurz darauf, was es tut. Verweilen Sie mit dem Zeiger auf einer Wand, Tür, einem Fenster, Raum oder einer Bemaßung, um sie zu lesen, ohne sie auszuwählen.
keywords: Tooltip, Hinweis, Tastenkürzel, Taste, eingegebener Befehl, Beschreibung, Hover, Rollover, darauf zeigen, Wandtyp, Geschoss, Größe, gerade, schräg, nicht rechtwinklig, gekrümmt, Tür, Fenster, Raum, Fläche, Bemaßung, ohne auszuwählen
from: 2e701f08
---

## Was Sie tun werden

Lernen Sie das Kürzel eines Werkzeugs, indem Sie darauf zeigen, und lesen Sie, was etwas im Plan ist, ohne es anzuklicken.

## Schritte

1. Zeigen Sie auf ein Werkzeug, zum Beispiel {{ui:Wall}} in der Zeichenleiste. Fast sofort zeigt ein Tooltip seinen Namen und sein Kürzel (**Wand**, **W**).
2. Lassen Sie den Zeiger dort. Kurz darauf sagt eine Zeile darunter, was das Werkzeug tut.
3. Öffnen Sie einen Plan, bei eingeschaltetem Werkzeug {{ui:Select}}. Verweilen Sie mit dem Zeiger auf einer Wand. Ein Tooltip neben dem Zeiger zeigt ihren Typ, ihr Geschoss, ihre Länge und Dicke und ob sie gerade oder schräg ist.
4. Wechseln Sie zu einer Tür, einem Fenster, einem Raum oder einer Bemaßung, um stattdessen diese zu lesen. Nichts wird ausgewählt.

## Was der Tooltip eines Werkzeugs zeigt

- **Stufe 1**: den Namen des Befehls im Menüstil, den Sie verwenden, und seine Tasten in diesem Stil. Ist eine Befehlszeile auf dem Bildschirm, zeigt er außerdem das Wort, das Sie eingeben, wenn der Befehl keine Taste hat.
- **Stufe 2**: eine Zeile Beschreibung. Es ist der Text der eigenen Schaltfläche des Befehls, damit jede Stelle, an der der Befehl erscheint (die Zeichenleiste, ein Menüband, ein Menüstil, die Werkzeugzeilen eines Layouts), dasselbe sagt.
- Ein Werkzeug, das ausgeschaltet ist, zeigt stattdessen den Grund.

## Was das Darüberfahren zeigt

- **Wand**: Typ, Geschoss, Länge und Dicke sowie **Gerade**, **Schräg** (mit dem Winkel) oder **Gebogen**. Gerade heißt rechtwinklig zur Hauptrichtung der Wände, an die sie angeschlossen ist: Ein auf dem Plan gedrehtes Gebäude bleibt trotzdem gerade. Eine einzelne Wand ist gerade.
- **Tür oder Fenster**: Typ, Breite und Höhe, die Brüstungshöhe eines Fensters und die Wand, in der es liegt.
- **Raum**: Name und Nummer, Geschoss und die Fläche, wie der Plan sie beschriftet.
- **Bemaßung**: ihre Länge, ob es die ganze Wand oder der Teil zwischen den Öffnungen ist, von welcher Seite sie gemessen wird und zu welcher Wand sie gehört.

## Gut zu wissen

- Das Darüberfahren funktioniert mit dem Werkzeug Wählen. Während ein Zeichenwerkzeug läuft, zeigt das Werkzeug seine eigenen Markierungen.
- Es verschwindet, wenn Sie den Zeiger vom Objekt wegbewegen, eine Maustaste drücken, am Rad drehen oder eine Taste drücken.
- Tooltips erscheinen nie auf Touch-Geräten.
