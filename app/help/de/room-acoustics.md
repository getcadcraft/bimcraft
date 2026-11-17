---
title: Nachhallzeit eines Raums prüfen und anhören
summary: Nachhallzeit je Oktavband für jeden Raum (nach Sabine und Eyring) aus Größe und Oberflächen, ein eigener Zielwert und eine Stimme, ein Klatschen oder Musik, abgespielt über eine berechnete Impulsantwort des Raums.
keywords: Akustik, Nachhall, Nachhallzeit, RT60, Sabine, Eyring, Absorption, Echo, Schall, anhören, Impulsantwort, Sprache, Klassenzimmer, Büro, Teppich, Deckenplatte, Lärm
from: 16996cbb
---

Der Bereich {{ui:Room acoustics}} im linken Bereich ermittelt, wie lange Schall in jedem Raum nachklingt. Er liest Grundfläche, Höhe, Wände, Türen und Fenster jedes Raums aus dem geöffneten IFC-Modell. Am Modell wird nichts verändert.

## Oberflächen wählen

Wenn das Modell angibt, was auf einer Fläche liegt, liest der Raum es aus: die innere Schicht jedes Wandtyps (Gips, Putz, Ziegel, Beton und Hohlblock sind bekannt), die Art des Bodens (Holz oder Beton) und ob eine Decke gefliest ist. Das Etikett neben jeder Wahl zeigt, ob der Wert aus dem Modell, ein Standardwert oder Ihre Auswahl ist; wählen Sie eine andere Oberfläche, um ihn zu überschreiben. Alles, was das Modell nicht angibt, bleibt beim Standardwert. Die Koeffizienten sind **typische veröffentlichte Werte**; ersetzen Sie sie durch Prüfdaten eines Produkts, sobald Sie sie haben. Geben Sie ein **Ziel** ein (die längste mittelfrequente Nachhallzeit, die Sie wollen). Jeder Raum darüber ist dann eine Warnung, mit der Absorption, die ihn darunter bringen würde.

## Die Tabelle lesen

Die Nachhallzeit wird für 125 Hz bis 4 kHz angegeben. Sabine passt zu halligen Räumen, Eyring zu trockenen; die mit *Verwendet* markierte Zeile nimmt Eyring, wenn die mittlere Absorption über 0.2 liegt. Die Absorption der Luft ist eingerechnet (sie verkürzt die hohen Bänder in großen Räumen). Es ist ein statistisches Modell: Es nimmt an, dass sich der Schall gleichmäßig verteilt. Lange oder flache Räume und sehr kleine Räume sind daher nur grobe Anhaltspunkte, und Möbel, Personen und offene Türen werden nicht berücksichtigt.

## Anhören

{{ui:Play it in this room}} spielt eine Stimme (hier erzeugt), ein Klatschen, gezupfte Töne oder **Ihre eigene Tondatei** (sie bleibt auf Ihrem Computer) über eine für den Raum berechnete Impulsantwort ab: den Direktschall, die ersten Reflexionen eines Kastens dieser Größe und einen Nachhall, der in jedem Band mit der eigenen Nachhallzeit des Raums abklingt. {{ui:Play it dry}} spielt denselben Schall mit derselben Lautstärke ohne den Raum. Sie können die Impulsantwort oder den Klang im Raum als WAV-Dateien speichern. Es klingt wie ein Raum dieser Größe und Oberfläche, nicht wie ein bestimmter realer Raum.

## Personen und Möbel

Geben Sie die Anzahl der **Personen in diesem Raum** ein, um deren Absorption hinzuzufügen. Im Modell enthaltene Möbel (Sofas, Betten, Stühle, Tische, Schränke, anhand des Namens erkannt) fügen ihre eigene Absorption hinzu. Die Werte sind grobe, gerundete Planungswerte; ersetzen Sie sie durch Messungen für einen Raum, auf den es ankommt.

## Quelle und Hörer

Unter {{ui:Source and listener}} drücken Sie {{ui:Place the source}} oder {{ui:Place the listener}} und klicken auf den Grundriss des Raums. Der abgespielte Schall ist dann von dort zu hören: Der Direktschall kommt nach der Entfernung an, und der Nachhallanteil hat die Lautstärke für diese Entfernung. Setzen Sie beides zurück, um zum Entfernungsfeld zurückzukehren.

## Ungleichmäßige Absorption und Raummoden

Unter {{ui:Uneven absorption (box room)}} geben Sie den Raum als Kasten ein und wählen Boden-, Decken- und Wandoberflächen. Die Tabelle ergänzt Fitzroy und Arau-Puchades zu Sabine und Eyring: Sie behandeln die drei Paare gegenüberliegender Flächen getrennt, sodass ein Raum mit Teppich und harter Decke nicht zu kurz eingeschätzt wird. Wenn die Paare stark abweichen, zeigt ein Hinweis an, welchem Wert zu trauen ist. Unter der Tabelle listet **Raummoden** die tiefsten stehenden Wellen des Kastens und die Frequenz, unterhalb derer der Raum getrennte Moden statt eines gleichmäßigen Schallfelds hat. Dies sind Vorhersagen für einen Kastenraum, eine Planungshilfe und keine Messung.

## Einheiten

Raumflächen, Höhen, Volumen und Entfernungen werden in den von Ihnen gewählten {{ui:Units}} angezeigt (Quadrat- und Kubikfuß, Zoll, Millimeter, Zentimeter oder Meter). Die Berechnung selbst bleibt im SI-System; nur die Anzeige ändert sich. Zeiten (Sekunden), Frequenzen und Pegel bleiben unverändert.
