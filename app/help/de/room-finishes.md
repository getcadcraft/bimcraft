---
title: Raumoberflächen und Oberflächenlisten
summary: Legen Sie fest, was Boden, Wände und Decke jedes Raums bedeckt, fügen Sie Zonen wie einen gefliesten Spritzschutz hinzu und erhalten Sie Oberflächenlisten nach Raum, Wand und Zone mit Flächen, Fliesenanzahl einschließlich Zuschnitten und Untergrundvolumen.
keywords: Oberfläche, Oberflächen, Oberflächenliste, Raumoberflächen, Bodenbelag, Wandbelag, Deckenbelag, Sockelleiste, Fliese, Fliesen, Zuschnittfliesen, Fliesenanzahl, Verschnitt, Untergrund, Estrich, Trägerplatte, Putz, Zone, Spritzschutz, Wandsockel, Nassbereich, Innenausbau, Mengen
from: 8c30498c
---

## Was Sie tun

Teilen Sie BimCraft einmal mit, womit jeder Raum ausgebaut wird. Die Oberflächenlisten geben dann die Flächen, die zu bestellenden Fliesen und die Untergrundvolumen an und ändern sich mit dem Modell.

## Schritte

1. Schalten Sie {{ui:Draw}} ein, öffnen Sie **Listen** im linken Bereich und klicken Sie auf **Raumoberflächen**.
2. Unter **Oberflächentypen** klicken Sie auf **Oberflächentyp hinzufügen**. Geben Sie einen Namen, eine Art (Fliese, Bahn, Beschichtung oder Platte) und eine Dicke an. Bei einer Fliese geben Sie Länge und Breite der Fliese, die Fuge und einen Verschnittzuschlag in Prozent an. Liegt etwas unter der Oberfläche (ein Estrich, eine Trägerplatte, eine Putzschicht), benennen Sie es unter **Untergrund** und geben Sie seine Dicke an.
3. Unter **Räume** wählen Sie den Boden-, Wand- und Deckenbelag jedes Raums. Geben Sie einen Namen und die Höhe der Sockelleiste ein, falls der Raum eine hat.
4. Unter **Zonen** klicken Sie auf **Zone hinzufügen** für einen Teil eines Raums, der eine andere Oberfläche erhält:
   - eine **Wand**-Zone ist ein Streifen zwischen zwei Höhen über dem Boden (ein gefliester Spritzschutz von 0 bis 1200, ein Wandsockel). Sie liegt auf jeder Wand des Raums, oder wählen Sie Wände dieses Raums im Modell und klicken Sie auf die Schaltfläche **Ein**, um sie darauf zu beschränken;
   - eine **Boden**- oder **Decken**-Zone ist eine Fläche, die Sie eingeben. Sie wird von der eigenen Oberfläche des Raums abgezogen.
5. Klicken Sie auf **Speichern**. Es ist ein Schritt für Rückgängig. Längen geben Sie in den Einheiten des Projekts ein.

## Die Listen

Vier Einträge kommen zur Liste **Listen** hinzu:

- **Oberflächen nach Raum**: jeder Raum mit seinem Boden-, Wand- und Deckenbelag, deren Flächen und die Sockelleiste mit ihrer Länge.
- **Oberflächen nach Wand**: jeder Wandabschnitt auf der Seite eines Raums und der Streifen davon, den eine Oberfläche bedeckt, mit Länge, Bruttofläche, Abzügen, Nettofläche und bei Fliesen ganze Fliesen, Zuschnittfliesen und zu bestellende Fliesen.
- **Oberflächen nach Zone**: jede Zone mit ihrer Oberfläche, Nettofläche, Fliesen und Untergrundvolumen.
- **Oberflächenmengen**: eine Zeile je Oberfläche: Nettofläche, ganze und zugeschnittene Fliesen, zu bestellende Fliesen, der Untergrund und sein Volumen sowie das eigene Volumen der Oberfläche.

Gruppieren, summieren, speichern und exportieren Sie sie wie jede andere Liste: siehe [Liste gestalten, speichern und exportieren](topic:schedule-layouts). Klicken Sie auf einen Wert, um auszuwählen, woher er stammt: Die Abzüge einer Wand wählen ihre Türen und Fenster aus.

## Wie Oberflächen gemessen werden

- **Wände**: jeder Wandabschnitt auf der Seite des Raums, seine Länge entlang des Raums mal die Höhe, die die Oberfläche bedeckt, abzüglich des Teils jeder Tür und jedes Fensters innerhalb dieser Höhe. Eine Wand, die niedriger ist als der Raum, wird bis zu ihrer eigenen Oberkante ausgeführt. Die Messmethode des Projekts bestimmt, welche Öffnungen zu klein zum Abziehen sind ([Listen](topic:plan-schedules-and-pdf)).
- **Böden und Decken**: der Raum innerhalb seiner Wandflächen, abzüglich der Inseln darin.
- **Sockelleisten**: die Wandlänge des Raums abzüglich der Breite seiner Türen.
- **Fliesen**: als Raster ab einer Ecke der Fläche verlegt, mit einer Fuge zwischen den Fliesen. Eine Fliese, die ganz auf der Fläche liegt, ist eine ganze Fliese; eine Fliese, die teilweise darauf liegt (an einem Rand, um eine Öffnung herum), ist eine Zuschnittfliese. Zu bestellende Fliesen sind ganze plus Zuschnitt, plus der Verschnittzuschlag, aufgerundet. Jede Zuschnittfliese zählt als neue Fliese: Reststücke werden nicht wiederverwendet.
- **Untergrundvolumen**: die Nettofläche mal die Dicke des Untergrunds.
- Eine Anzahl mit **≈** wird aus der Fläche berechnet statt Fliese für Fliese gelegt: eine Fläche, aus der eine eingegebene Zone herausgenommen wurde, oder eine sehr große.

## Gut zu wissen

- Die Oberflächen werden in der Gebäudedatei gespeichert (Eigenschaftssatz `CadCraft_Finishes` am Projekt). Jeder Raum mit einer Oberfläche erhält außerdem den Standard-IFC-Eigenschaftssatz `Pset_SpaceCoveringRequirements`, damit andere Programme die Namen lesen können.
- Das Fliesenlayout beginnt an einer Ecke. Ein auf den Raum zentriertes Layout, ein Muster (Fischgrät, Läuferverband) und die Wiederverwendung von Reststücken werden nicht berechnet.
- Eine gekrümmte Wand und eine Raumbegrenzung, die keine Wand ist (eine Raumtrennlinie), wird als **Andere Begrenzung** mit ihrer Länge und ohne Öffnungen aufgeführt.
- Der bisherige Eintrag **Oberflächen** listet die Oberflächenschichten der Wandtypen; **Layer: Fläche und Volumen** listet jede Schicht jedes geschichteten Typs. Die Raumoberflächen hier werden zusätzlich zu diesen auf den Raum angewendet.
- Ein Assistent kann Oberflächen für Sie mit `finishes_set` festlegen: siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
