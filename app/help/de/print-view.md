---
title: Eine Zeichnung in der Druckansicht prüfen
summary: Eine DWG oder DXF in die Druckansicht umschalten, um sie schwarz auf weiß mit ihren Linienstärken und ohne die Layer zu sehen, die nie gedruckt werden.
keywords: drucken, plotten, Vorschau, Plotvorschau, Linienstärken, Linienstärke, einfarbig, schwarz und weiß, defpoints, nicht plotten
from: 1a59c23e
---

## Was Sie tun werden

Sehen Sie, wie ein Blatt auf Papier aussieht, bevor Sie es aus dem Programm drucken, mit dem es erstellt wurde: schwarz auf weiß, Linienstärken in ihrer tatsächlichen Breite und ohne Layer, die so eingestellt sind, dass sie nicht drucken.

## Schritte

1. Öffnen Sie eine DWG- oder DXF-Zeichnung.
2. Klicken Sie auf einen Blattreiter über der Zeichnung.
3. Klicken Sie auf {{ui:Druckansicht}} am Ende der Reiter oder drücken Sie {{key:P}}.
4. Zoomen Sie auf ein Detail, um dicke und dünne Linien zu vergleichen.
5. Klicken Sie erneut auf {{ui:Druckansicht}} oder drücken Sie {{key:P}}, um zu den normalen Farben zurückzukehren.

## Was Sie sehen sollten

- Weißes Papier auf grauer Arbeitsfläche, jede Linie und jeder Text schwarz, unabhängig vom Design.
- Linienstärken: Auf einem Blatt wird jede Stärke in ihrer echten Breite auf Papier gezeichnet. Eine Linie von 0.5 mm ist daher bei jedem Zoom doppelt so dick wie eine von 0.25 mm. Eine Linie wird nie dünner gezeichnet als ihre Bildschirmstärke.
- Layer, die so eingestellt sind, dass sie nicht drucken, und der Layer DEFPOINTS sind ausgeblendet.
- Die Schaltfläche {{ui:Druckansicht}} bleibt gedrückt. Die Druckansicht bleibt beim Wechsel der Blätter oder beim Öffnen einer anderen Zeichnung eingeschaltet, bis Sie sie ausschalten.

In {{ui:Modell}} verwendet die Druckansicht nur Bildschirmstärken (dünne Linien ein Pixel, dickere etwas breiter), weil der Modellbereich keine Papiergröße hat.

## Häufige Fehler

- **Erwarten, dass sie druckt.** Die Druckansicht ist eine Vorschau. Drucken und PDF-Export sind in BimCraft noch nicht umgesetzt; drucken Sie aus dem Programm, mit dem die Zeichnung erstellt wurde.
- **Erwarten von Plotstilen.** Stifttabellen und Plotstilfarben werden nicht gelesen. Alles ist einfach schwarz.
- **P drücken, während Sie tippen.** {{key:F}} und {{key:P}} tun nichts, während Sie in einem Feld tippen oder während die Ausrüstungsliste angezeigt wird.
