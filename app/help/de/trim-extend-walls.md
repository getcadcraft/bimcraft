---
title: Wände stutzen, dehnen und verbinden
summary: Wände bis zu einer anderen Wand stutzen oder dehnen und zwei Wände an ihrem Treffpunkt verbinden, jeweils als einen Schritt, den Sie rückgängig machen können.
keywords: stutzen, dehnen, Ecke, verbinden, treffen, aufräumen, Wandende, Wandecke, zurückschneiden, verlängern, kürzen, ändern, TR
from: a6fb2e8b
---

## Was Sie erreichen

Räumen Sie die Wände auf, die Sie gezeichnet haben: Kürzen Sie eine Wand, die über eine andere hinausragt, verlängern Sie eine, die zu kurz endet, oder schließen Sie eine offene Ecke.

## Schritte

1. Aktivieren Sie {{ui:Zeichnen}} und wählen Sie das Geschoss in der Geschossliste des Grundrisses.
2. **Bis zu einer Wand stutzen oder dehnen:** Wählen Sie {{ui:Ändern}} › {{ui:Stutzen / Dehnen}}. Klicken Sie die Wand an, bis zu der gestutzt oder gedehnt werden soll (die Kante), und dann jede Wand, die Sie ändern möchten. Eine Wand, die über die Kante hinausragt, wird bis zu ihr zurückgeschnitten, und der Teil, den Sie anklicken, bleibt erhalten; eine Wand, die zu kurz endet, wird verlängert, bis sie die Kante trifft. Die Kante bleibt gewählt, sodass Sie nacheinander mehrere Wände anklicken können. Drücken Sie {{key:Esc}}, um eine andere Kante zu wählen.
3. **Zwei Wände an einer Ecke verbinden:** Wählen Sie {{ui:Ändern}} › {{ui:Ecke}}, klicken Sie die erste Wand und dann die zweite an. Beide laufen bis zu dem Punkt, an dem sie sich treffen, und BimCraft bereinigt die Ecke. Kreuzt eine Wand die andere, bleibt der Teil erhalten, den Sie angeklickt haben.
4. Drücken Sie {{key:Esc}}, um neu zu beginnen, oder {{key:V}}, um zu {{ui:Wählen}} zurückzukehren.

## Was Sie sehen sollten

- Während Sie auf eine Wand zeigen, zeigt der Grundriss, wohin sie käme, bereits mit den Wänden verbunden, auf die sie trifft, mit ihrer neuen Länge.
- Jede Änderung ist ein Schritt: {{key:Mod+Z}} nimmt sie zurück.
- Räume, Böden, Decken, Dächer und alles, was den Wänden folgt, werden neu erzeugt, wie nach jeder Änderung an den Wänden. Ein Raum, der durch eine Ecke geschlossen wird, erscheint mit seiner Nummer und Fläche.
- Eine Tür oder ein Fenster auf einem abgeschnittenen Teil wird mit ihm gelöscht.

## Gut zu wissen

- Wände werden auf ihrer Mittellinie gezeichnet, daher werden sie entlang dieser Linie gestutzt und gedehnt: Eine Wand trifft die Mittellinie der anderen Wand, und die Verbindung wird zu einem T oder L bereinigt.
- BimCraft nennt den Grund, wenn es nicht möglich ist: Die beiden Wände verlaufen parallel, die Linie der Wand verläuft neben der anderen Wand vorbei, eine Tür oder ein Fenster steht im Weg (verschieben oder löschen Sie es zuerst), oder von der Wand bliebe nichts übrig (unter 1 mm). Eine Wand, die kürzer als 50 mm bleibt, wird trotzdem erstellt, mit einer Warnung unter Probleme: siehe [Zeichenhinweise](topic:drawing-advice).
- Nur in BimCraft gezeichnete Wände können gestutzt oder gedehnt werden.

Siehe auch [Wände zeichnen](topic:draw-walls) und [Eine Wand, Tür oder ein Fenster ändern](topic:change-a-wall-or-door).
