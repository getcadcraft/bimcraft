---
title: Geschosse, Räume und Kanten anzeigen und ausblenden
summary: Schalten Sie Geschosse aus, um in ein Gebäude hineinzusehen, zeigen Sie Räume und Flächen und schalten Sie die Kantenlinien ein und aus.
keywords: Geschosse, Ebenen, Böden, ausblenden, isolieren, Räume, Flächen, ifcspace, Kanten, Sichtbarkeit, Schnitt
from: b838dcc0
---

## Was Sie hier tun

Sehen Sie in ein IFC-Modell hinein, indem Sie die Geschosse über dem gewünschten ausschalten. Dann zeigen Sie die Räume und Flächen an und schalten die Kantenlinien für eine sauberere Ansicht aus.

## Schritte: ein Geschoss ansehen

1. Öffnen Sie ein IFC-Modell. Siehe [IFC-Modell öffnen und in 3D ansehen](topic:open-ifc-model).
2. Suchen Sie die Liste {{ui:Geschosse}} links. Das oberste Geschoss steht zuerst, wie bei einem Schnitt, den Sie vom Dach nach unten lesen.
3. Entfernen Sie das Häkchen beim Dach und bei jedem Geschoss über dem gewünschten Boden.
4. Klicken Sie auf {{ui:Oben}}, um auf diesen Boden hinabzublicken.
5. Setzen Sie die Häkchen bei den Geschossen wieder, um sie zurückzuholen.

## Was Sie sehen sollten

Jedes Geschoss, dessen Häkchen Sie entfernen, verschwindet sofort mit allem, was darauf liegt. Die Liste zeigt nur Geschosse, die etwas Sichtbares enthalten. Elemente, die keinem Geschoss zugeordnet sind, werden unten als **Nicht auf einem Geschoss** gruppiert; Geländeelemente und manche Möbel landen oft dort.

## Schritte: Räume und Flächen anzeigen

1. Klicken Sie in der Symbolleiste über dem Modell auf {{ui:Räume}}. Die Schaltfläche bleibt gedrückt.
2. Schauen Sie sich das Modell an: Räume und Flächen erscheinen als blasse, durchsichtige Volumen.
3. Klicken Sie auf einen Raum, um rechts seine Eigenschaften zu lesen, etwa Name, Nummer und Fläche.
4. Klicken Sie erneut auf {{ui:Räume}}, um sie auszublenden.

Räume sind beim Öffnen eines Modells ausgeblendet, weil sie sonst die Wände und Böden verdecken würden.

## Schritte: Kanten

1. Klicken Sie auf {{ui:Kanten}}, um die dünnen Kantenlinien auszuschalten.
2. Klicken Sie erneut darauf, um sie wieder einzuschalten.

Bei sehr großen Modellen (über 1.5 Millionen Dreiecke) ist die Schaltfläche ausgegraut, mit dem Hinweis „Kanten sind bei sehr großen Modellen ausgeschaltet“. So wird Speicher gespart.

## Häufige Fehler

- **Ein Geschoss ausblenden und trotzdem Teile davon sehen.** Ein Element gehört zu dem Geschoss, dem das exportierende Programm es zugeordnet hat. Eine hohe Wand oder eine Treppe gehört oft nur zu ihrem Basisgeschoss; sie bleibt, wenn das Geschoss darüber ausgeblendet ist, oder verschwindet mit dem Geschoss darunter.
- **Geschosse ausblenden, um hineinzusehen.** Ein Schnittkasten ist oft schneller: siehe [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane#a-section-box). Sie können auch Zeilen in der {{ui:Modellstruktur}} abwählen (siehe [Im Modellbaum navigieren](topic:model-tree)).
- **Einen Raum durch eine Wand anklicken.** Ein Klick wählt die nächste sichtbare Fläche. Blenden Sie das Geschoss darüber aus oder wechseln Sie zu {{ui:Oben}}, dann klicken Sie.
- **Geschossnamen wirken seltsam.** BimCraft zeigt die in der Datei gespeicherten Geschossnamen. Wenn dort „Level 1“ oder eine Zahl steht, hat der Export das so geschrieben.
