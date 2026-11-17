---
title: Dächer: eine Neigung für jede Wand, Giebel, Pultdächer und Dachflächen
summary: Stellen Sie jede Wand unter einem Dach auf geneigt, Giebelende oder keine ein, nutzen Sie die Voreinstellungen Walmdach, Giebel und Pultdach, heben Sie das Dach mit der Auflagehöhe an, fügen Sie Windbrett und Untersicht hinzu und zeichnen Sie einzelne Dachflächen, wo das automatische Dach nicht passt.
keywords: Dach ändern, Dach bearbeiten, ausgewähltes Dach, Dacheigenschaften, Rückgängig Dach, Dach, Neigung, pro Wand, Giebel, Giebelende, Pultdach, Anbau, Walm, Kehle, First, Auflagehöhe, Fußpunkt, Windbrett, Untersicht, Traufe, Ortgang, Überstand, Dachfläche, Vordach, Gaube, Giebelgaube, Pultgaube
from: 096084a7
---

## Was Sie tun werden

Formen Sie das Dach aus den Wänden darunter. Jede Wand hat ihre eigene Einstellung, daher kann ein Dach vorne ein Walmdach sein, an den Enden Giebel haben und hinten flach an einer höheren Wand enden. Für ein Vordach oder eine Fläche, die das automatische Dach nicht bilden kann, zeichnen Sie eine Dachfläche über ihre Ecken.

## Ein Dach aufsetzen

1. Klicken Sie auf der Ebene, deren Wände das Dach tragen, auf {{ui:Roof}}.
2. Geben Sie die **Neigung** ein (`6/12` oder Grad wie `30`) und den **Überstand**.
3. Wählen Sie eine Voreinstellung: **Walmdach**, **Giebel an den kurzen Seiten**, **Giebel an den langen Seiten** oder **Pultdach** (die Seite, die dem Zeiger am nächsten ist, ist die tiefe Traufe; die anderen Seiten sind Giebelenden).
4. Lassen Sie **Windbrett und Untersicht** angehakt für geschlossene Traufen mit Windbrett, oder entfernen Sie den Haken für eine blanke Dachkante.
5. Zeigen Sie ins Innere des Gebäudes: Traufe, First, Grate und Kehlen erscheinen im Plan. Klicken Sie.

Jede Umrissform funktioniert: L-, T-, U- und Kreuzformen, schräge Ecken und Aussparungen. Grate, Firste und Kehlen werden dort gefunden, wo sich die Dachflächen treffen.

## Eine Wand nach der anderen

Wählen Sie das Dach (auf der Ebene über den Wänden klicken Sie in seinen Umriss) und schauen Sie unter **Jede Wand** in den **Eigenschaften**. Zeigen Sie auf eine Zeile, markiert das den Wand im Plan.

- **Geneigt**: Die Wand hat eine geneigte Dachfläche darüber. Geben Sie daneben ihre eigene Neigung ein, zum Beispiel `12/12` für steile Enden bei einem `6/12`-Dach.
- **Giebel**: Das Dach endet über dieser Wand in einer senkrechten Giebelwand, die Wand wird bis zum Dach aufgefüllt, und das Dach ragt um den **Giebelüberstand** darüber hinaus.
- **Keine (schließt bündig ab)**: Das Dach endet an dieser Wand ohne Überstand und ohne Giebelwand, für ein Dach an einer höheren Wand.

Die Liste **Enden** oben setzt alle Wände auf einmal; **Pro Wand festlegen** erscheint, wenn die Wände nicht mehr zu einer Voreinstellung passen.

## Ein bereits gesetztes Dach ändern

Wählen Sie das Dach, und die **Eigenschaften** zeigen dieselben Einstellungen wie das Werkzeug Dach: **Neigung**, **Überstand**, **Giebelüberstand**, **Auflagehöhe**, **Windbretthöhe**, **Geschlossene Traufe** und **Dicke**. Jede Änderung zeigt sich sofort im Plan und in 3D, mit denselben Prüfungen wie das Werkzeug (eine Neigung von 80 Grad oder mehr wird abgelehnt, ebenso eine Einstellung, die kein Dach bilden kann). Geben Sie einen Wert ein und drücken Sie {{key:Enter}}, oder verlassen Sie das Feld.

Jede Änderung ist ein Rückgängig-Schritt. Mehrere Änderungen am selben Feld nacheinander (`6/12` eingeben, dann `7/12`, dann `8/12`) werden zu einem Schritt zusammengefasst, sodass ein {{key:Ctrl}}+{{key:Z}} den Zustand vor der Reihe wiederherstellt; die Änderung eines anderen Feldes beginnt einen neuen Schritt.

## Auflagehöhe, Windbrett und Untersicht

- **Auflagehöhe** ist die Stelle, an der die Dachflächen die Außenseite der Wände treffen, gemessen ab dem Boden der Ebene. Lassen Sie das Feld leer, damit das Dach auf der Oberkante der Wände sitzt; geben Sie einen größeren Wert für einen erhöhten Fußpunkt ein.
- **Windbretthöhe** ist das Brett entlang der Traufen und die Ortgänge hinauf. Geben Sie `0` für keines ein.
- **Geschlossene Traufe** setzt eine ebene Untersicht unter jede Traufe, von der Wand bis zur Rückseite des Windbretts.

Jede Fläche trifft ihre Wand auf der Auflagehöhe. Wände mit verschiedenen Neigungen behalten daher eine gemeinsame Auflagelinie, und ihre Traufen enden auf unterschiedlichen Höhen, wie sie im Gebälk ausgeführt würden.

## Eine Dachfläche zeichnen

1. Öffnen Sie auf der Ebene, auf der die Fläche liegt, {{ui:Build}} und wählen Sie {{ui:Roof plane}}.
2. Geben Sie die **Neigung** ein und, falls sie nicht auf der Oberkante der Wände liegt, die **Traufhöhe**.
3. Klicken Sie die Ecken an. Die erste Seite, die Sie zeichnen, ist die Traufe; die Fläche steigt von ihr zum Rest der Form an.
4. Klicken Sie erneut auf die erste Ecke, doppelklicken Sie oder drücken Sie {{key:Enter}}, um abzuschließen. {{key:Esc}} verwirft die Ecken.

Eine Dachfläche folgt den Wänden nicht. Wählen Sie sie auf der Ebene darüber (klicken Sie in sie hinein), um Neigung, Traufhöhe oder Dicke zu ändern, oder drücken Sie {{key:Delete}}, um sie zu entfernen.

## Eine Gaube hinzufügen

1. Blenden Sie die Ebene ein, auf der das Dach liegt.
2. Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Dormer}}.
3. Wählen Sie in der Optionszeile die **Gaubenart** (**Giebel** oder **Pult**) und stellen Sie **Breite**, **Frontwand** (die Höhe der Frontwand von der Oberkante des Dachs bis zur Traufe der Gaube), **Neigung** und **Überstand** ein.
4. Klicken Sie auf eine Dachfläche, an der die Mitte der Gaubenfront liegen soll.

BimCraft baut die Frontwand, zwei Seitenwände und das Gaubendach und führt es zurück, bis es auf das Dach trifft. Eine Giebelgaube hat zwei Flächen, die an einem First zusammentreffen. Eine Pultgaube hat eine Fläche, die weniger steil sein muss als das Dach. Das Dach unter der Gaube wird ausgeschnitten. Die Gaube folgt dem Dach, wenn sich die Wände bewegen.

Wählen Sie sie aus, um Art, Breite, Frontwand, Neigung oder Überstand in den **Eigenschaften** zu ändern. {{key:Delete}} entfernt sie und schließt das Dach erneut. Sie muss auf eine einzige Dachfläche passen, abseits von Graten, Kehlen und dem First. Nur Dächer, die mit dem Werkzeug {{ui:Roof}} erstellt wurden, nehmen Gauben auf, nicht von Hand gezeichnete Dachflächen. Noch nicht umgesetzt: ein Fenster in der Front der Gaube und Gauben auf von Hand gezeichneten Dachflächen.

## Was gespeichert wird

Dächer sind IFC-Dächer aus je einer Dachplatte pro Fläche, Giebelwänden, einem Windbrettelement und einer Untersichtsverkleidung. Das Dach trägt seine First-, Grat-, Kehl-, Traufen- und Ortgangslängen sowie seine Flächen für die Mengenermittlung. Eine Dachfläche ist ein IFC-Dach mit einer Platte.

:::tip
Rückgängig nimmt jede Dachänderung in einem Schritt zurück, auch eine Voreinstellung, die jede Wand ändert.
:::
