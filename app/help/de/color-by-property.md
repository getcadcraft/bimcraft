---
title: Elemente nach einer Eigenschaft einfärben
summary: Jedes Element nach dem Wert einer Eigenschaft einfärben, etwa Klasse, Typ, Geschoss, Material, Feuerwiderstand oder Kosten, die Legende lesen, auf einen Wert klicken, um nur diese Elemente zu zeigen, und die Farben als Schema speichern, um sie an anderen Modellen zu verwenden.
keywords: Farbe, einfärben, Farbe nach, Legende, smart view, Darstellung, Eigenschaft, Typ, Material, Feuerwiderstand, Filter, isolieren, Thema, Werte, Schema, Farbschema, Farben speichern, wiederverwenden, Team, json, Farbfeld
from: f081d343
---

## Was Sie tun

Sehen Sie auf einen Blick, wie eine Eigenschaft im Modell verteilt ist: welche Wände außen liegen, welche Materialien wo verwendet werden, welche Elemente keinen Feuerwiderstand haben. Jedes Element erhält die Farbe seines Werts, und die Legende sagt, was jede Farbe bedeutet und wie viele Elemente sie haben.

## Schritte

1. Ein IFC-Modell öffnen.
2. Rechts auf die Registerkarte {{ui:Farbe}} klicken.
3. In der Liste eine Eigenschaft wählen. Die ersten gehören zu jedem Element ({{ui:Klasse}}, {{ui:Typ}}, {{ui:Geschoss}}, {{ui:Material}}, {{ui:Name}}…); der Rest stammt aus den Eigenschafts- und Mengensätzen des Modells, unter dem Namen des Satzes. Die Zahl hinter jeder Eigenschaft gibt an, wie viele Elemente sie haben.
4. Die Legende lesen: eine Farbe, der Wert und wie viele Elemente ihn haben.
5. Auf einen Wert klicken, um nur diese Elemente zu zeigen. {{key:Mod}} gedrückt halten und klicken, um weitere Werte hinzuzufügen. {{key:Shift+H}} drücken, um wieder alles zu zeigen.
6. {{ui:Aus}} klicken, um zu den eigenen Farben des Modells zurückzukehren.

## Was Sie sehen sollten

- Bis zu sieben Werte erhalten je eine eigene Farbe, der häufigste Wert zuerst. Mehr Werte teilen sich ein Grau und sind als **andere Werte** aufgeführt.
- Eine Zahl mit vielen verschiedenen Werten wird in sechs gleich große Bereiche geteilt, von Hell (niedrig) bis Dunkel (hoch).
- Elemente ohne die Eigenschaft sind blassgrau und als **Kein Wert** aufgeführt, damit die farbigen Elemente hervorstechen.
- Die Farben ändern sich mit Papier und Modell und bleiben beim Bearbeiten des Modells erhalten.
- Die Eigenschaft eines Typs gilt für jedes Element dieses Typs; hat ein Element für dieselbe Eigenschaft einen eigenen Wert, gewinnt dieser.

## Farben ändern und als Schema speichern

- Auf das Farbfeld eines Werts in der Legende klicken, um eine andere Farbe zu wählen. Das Modell wird sofort neu gefärbt.
- {{ui:Schema speichern}} lädt die Farben als kleine `.json`-Datei herunter, benannt nach der Eigenschaft, zum Beispiel `Class colors.json`.
- Auf einem anderen Modell oder auf dem Rechner eines Teammitglieds auf {{ui:Schema öffnen…}} klicken und diese Datei wählen. Jeder Wert im Schema erhält seine Farbe, sodass derselbe Feuerwiderstand oder dasselbe System in jedem Modell dieselbe Farbe hat.
- Ein Wert, den das Schema nicht hat, wird grau gefärbt und als „nicht im Schema“ aufgeführt. Werte im Schema, die dieses Modell nicht hat, bleiben mit 0 aufgeführt, damit Sie das ganze Schema sehen.
- Ein Schema behält seine Farben in beiden Designs. Wenn Sie in der Liste eine andere Eigenschaft wählen, werden wieder die automatischen Farben verwendet.

## Häufige Fehler

- **„This model has no … values“ (Dieses Modell hat keine … Werte).** Das Schema wurde für eine Eigenschaft gespeichert, die dieses Modell nicht hat (zum Beispiel mit einem anderen Namen des Eigenschaftssatzes). Öffnen Sie ein Schema für diese Art von Modell oder wählen Sie eine Eigenschaft in der Liste.

- **Eine Eigenschaft fehlt in der Liste.** Kein Element mit Form im Modell hat sie. Eigenschaften der Geschosse und Räume selbst werden nicht aufgelistet.
- **Alles hat dieselbe Farbe.** Jedes Element hat denselben Wert oder keinen: Sehen Sie sich die Zahlen in der Legende an.

## Weiter

- [Elemente ausblenden, isolieren und transparent darstellen](topic:hide-and-isolate)
- [Mit dem Modellbaum navigieren](topic:model-tree)
