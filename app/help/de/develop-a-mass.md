---
title: "Eine Gebäudemasse aus einer Grundstücksstudie entwickeln"
summary: "Übernehmen Sie eine Gebäudemasse aus der Grundstücksansicht von CivilCraft und entwickeln Sie sie zu Geschossen, Wänden und Böden, wobei der Standort auf der Karte erhalten bleibt."
keywords: Masse, Gebäudemasse, Massenmodellierung, Grundstücksstudie, entwickeln, CivilCraft, übergeben, Geschosse, Wände, Böden, Grundfläche, Georeferenzierung, IFC
from: 557b94d1
---

Die Grundstücksansicht von CivilCraft kann Gebäudemassen auf einer Parzelle zeichnen und sie am Gelände, an den von Ihnen eingegebenen Grenzen und an der Sonne prüfen. **In BimCraft entwickeln** öffnet dort BimCraft in einem neuen Tab mit den Massen. **Massen als IFC** speichert sie als Datei, die Sie hier wie üblich öffnen. In beiden Fällen kommt jede Masse als Grundstück an, als Gebäude mit einem Geschoss pro Etage und einem Block (der Masse selbst), der ihre Werte trägt.

## Eine Masse entwickeln

1. Wählen Sie eine Masse in der 3D-Ansicht. Die Eigenschaften zeigen ihre Nutzung, Geschosse und Geschosshöhe, Grundfläche, Bruttogeschossfläche, wie sie am Hang sitzt und ihre Parzelle.
2. Klicken Sie auf **Diese Masse entwickeln**.

In einem einzigen Arbeitsschritt erhält jedes Geschoss dieses Gebäudes Wände rund um die Grundfläche. Die Grundfläche ist die Außenseite der Wände; jede Wand reicht bis zum Geschoss darüber, und die oberste ist eine Geschosshöhe hoch. Zusätzlich entsteht eine Bodenplatte unter dem gesamten Gebäude. Der Block wird ersetzt, und das Gebäude behält die Werte der Studie im Eigenschaftssatz `CadCraft_SiteMass`, als entwickelt markiert. Ein Dach gibt es nicht: Ein Dach hängt vom Entwurf ab.

## Der Standort des Grundstücks

Eine Datei aus CivilCraft wird in der eigenen Längeneinheit des Projekts geschrieben. Wenn das Projekt von CivilCraft ein Koordinatensystem hatte, trägt die Datei dieses als Kartenumrechnung des Projekts. Das Entwickeln einer Masse lässt sie unverändert, sodass das Gebäude dort bleibt, wo die Karte es angibt.
