---
title: Fundamente unter den Wänden
summary: Setzen Sie mit einem Klick eine Bodenplatte, Sockelwände mit Platte, einen Kriechkeller oder einen Keller unter ein Gebäude; Streifenfundamente werden aus den Wänden und der Geschosszahl bemessen, und das Fundament folgt, wenn sich die Wände verschieben.
keywords: Fundament, Streifenfundament, Bodenplatte, verdickter Rand, monolithische Platte, Sockelwand, Kriechkeller, Keller, Kellerwand, Frost, Beton, Breite des Streifenfundaments
from: c0e20172
---

## Ziel

Geben Sie dem Gebäude ein Fundament, das zu seinen Wänden passt. BimCraft folgt der Außenseite der Wände, bemisst die Streifenfundamente nach dem Wandtyp und der Zahl der Geschosse, die darauf stehen, und erstellt das Fundament neu, sobald sich die Wände ändern.

## Ein Fundament anlegen

1. Wählen Sie auf dem Geschoss, auf dessen Wänden es steht (meist das erste), {{ui:Build}} und wählen Sie {{ui:Fundament}}.
2. Wählen Sie die Art:
   - **Bodenplatte**: eine 4" dicke Betonplatte, deren Oberkante der Boden ist, mit verdicktem Rand unter den Wänden.
   - **Sockelwände und Platte**: Fundamentwände bis zum Boden auf Streifenfundamenten, mit einer Platte darin.
   - **Kriechkeller**: Fundamentwände, die unter der Bodenkonstruktion enden, auf Streifenfundamenten, ohne Platte.
   - **Keller**: Fundamentwände in voller Höhe auf Streifenfundamenten mit einer Kellerplatte, unter der Bodenkonstruktion.
3. Zeigen Sie ins Gebäude: Die Streifenfundamente erscheinen gestrichelt mit ihrer Größe. Klicken Sie.

Ein Klick auf ein Gebäude, das schon ein Fundament hat, wählt es aus; so können Sie es ändern, statt ein zweites hinzuzufügen.

## Ändern

Wählen Sie das Fundament (klicken Sie mit {{ui:Fundament}} ins Gebäude oder auf einen seiner Teile in der 3D-Ansicht oder im Modellbaum) und ändern Sie es unter **Eigenschaften**: die Art, Breite und Tiefe des Streifenfundaments, wie tief dessen Unterseite liegt, die Wanddicke, wie weit unter dem Boden die Wände enden, die Kellerhöhe und die Plattendicke. Jede Änderung ist ein einzelner Rückgängig-Schritt.

Mit **auto** gekennzeichnete Maße kommen aus den Wänden: Streifenfundamente 12", 15" oder 23" breit für ein, zwei oder drei Geschosse auf einer Platte oder Sockelwänden, 18", 22" oder 27" über einem Kriechkeller oder Keller, und 4" breiter unter Mauerwerks- oder Betonwänden. Geben Sie ein Maß ein, um Ihr eigenes festzulegen; geben Sie `0` ein, um zu **auto** zurückzukehren.

:::warning
Die automatischen Maße sind gekennzeichnete Standardwerte für typische leichte Wohnhäuser, keine Berechnung. Ein Planer oder Statiker prüft Streifenfundamente, Tiefen und Wände auf Baugrund, Frosttiefe und Lasten.
:::

## Was gespeichert wird

Ein Fundament wird als IFC-Elementbaugruppe („Foundation“) gespeichert, bestehend aus einem Streifenfundament (oder dem verdickten Rand einer Platte), einer Fundamentwand und einer Platte, je nach Art, alles aus Beton, jeweils mit seinen Mengen: Längen, Breiten, Höhen, Flächen und Volumen, bereit für die Mengenermittlung.

## Gut zu wissen

- Verschieben, hinzufügen oder löschen Sie Wände, und das Fundament darunter wird neu erstellt; zeichnen Sie Wände im Geschoss darüber, und die Streifenfundamente darunter werden für das zusätzliche Geschoss breiter.
- {{key:Delete}} entfernt ein ausgewähltes Fundament mit allen seinen Teilen.
- Mit dem Gelände des Grundstücks im Modell (siehe [Gelände des Grundstücks, Bauplatz und Pflasterflächen](topic:terrain)) folgen Sockelwände und Streifenfundamente des Kriechkellers ihm in 8"-Stufen.
- Fundamente unter Innenwänden sind noch nicht umgesetzt.
