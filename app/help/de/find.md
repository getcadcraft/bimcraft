---
title: Elemente nach Klasse, Name oder Eigenschaft suchen
summary: Jedes Element finden, das eine oder mehrere Regeln erfüllt – seine Klasse, sein Name, Typ, Geschoss, Material oder ein beliebiger Eigenschaftswert –, alle auswählen und die Regeln als benannten Suchsatz behalten.
keywords: suchen, Suche, Filter, Abfrage, Regel, Suchsatz, Auswahlsatz, gespeicherte Suche, Eigenschaft, Wert, Klasse, Material, alle auswählen
from: 3d293bc2
---

## Ziel

Wählen Sie mit einem Schritt alle Elemente einer Art oder mit einem bestimmten Wert: jede Tür, jede Wand im Geschoss 2, jedes Element mit Feuerwiderstand EI60, jede Wand, deren Kosten einen festgelegten Betrag übersteigen.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Öffnen Sie {{ui:Suchen}} im linken Bereich.
3. Wählen Sie in der ersten Regel eine Eigenschaft (zuerst die eigenen Eigenschaften des Elements, etwa {{ui:Klasse}} und {{ui:Geschoss}}, dann die Eigenschaftssätze des Modells), die Vergleichsart und einen Wert. Das Wertfeld schlägt die Werte vor, die das Modell enthält.
4. Um die Auswahl einzugrenzen, klicken Sie auf {{ui:Regel hinzufügen}}. Wählen Sie {{ui:Jede Regel}}, wenn alle erfüllt sein müssen, oder {{ui:Eine beliebige Regel}}, wenn eine genügt.
5. Klicken Sie auf {{ui:Suchen}} oder drücken Sie im Wertfeld {{key:Enter}}. Die Treffer werden ausgewählt.
6. Um die Regeln zu behalten, klicken Sie auf {{ui:Als Satz speichern}}, geben Sie einen Namen ein und klicken Sie erneut darauf. Klicken Sie später auf den Namen eines Satzes, um damit zu suchen.

## Das sehen Sie

- Die Treffer sind in der 3D-Ansicht und im Modellbaum ausgewählt, und {{ui:Eigenschaften}} zeigt an, wie viele nach Klasse gefunden wurden. Drücken Sie {{key:I}}, um nur diese anzuzeigen, und {{key:H}}, um sie auszublenden.
- Groß- und Kleinschreibung spielt beim Suchen von Wörtern keine Rolle. Zahlen werden als Zahlen verglichen: „ist größer als 1000“ bezieht sich auf den Wert, nicht auf den Text.
- {{ui:hat einen Wert}} und {{ui:hat keinen Wert}} brauchen keinen Wert; sie finden, was ausgefüllt oder was fehlt.
- Gespeicherte Sätze bleiben in diesem Browser für jedes Modell erhalten, das Sie öffnen.

## Häufige Fehler

- **Nichts gefunden.** Eine Regel braucht einen Wert, zu dem es Treffer gibt: Sehen Sie sich die Vorschläge im Wertfeld an.
- **Eine Eigenschaft fehlt in der Liste.** Kein Element mit Form in diesem Modell hat sie.

## Weiter

- [Elemente nach einer Eigenschaft einfärben](topic:color-by-property)
- [Elemente ausblenden, isolieren und transparent darstellen](topic:hide-and-isolate)
