---
title: Baukörpervarianten nebeneinander behalten
summary: Mehrere Baukörpervarianten im selben Modell behalten, eine zur aktuellen Variante machen, sie gegen die Baufluchten und Dienstbarkeiten des Grundstücks prüfen, Baukörper aus ModelCraft übernehmen und die gewählte Variante zu Wänden und Decken ausarbeiten.
keywords: Baukörper, Masse, Variante, Varianten, Variantensatz, Schema, Konzept, Konzeptentwurf, Leistungsphase 2, Alternativen, Varianten vergleichen, aktuelle Variante, Drücken/Ziehen, ModelCraft, CivilCraft, Bruttogeschossfläche, Grundfläche, Volumen, Masse ausarbeiten, Dienstbarkeit, Baugrenze, Abstand
from: 69a01459
---

## Was Sie tun

Behalten Sie die Baukörpervarianten eines Konzepts in einem Modell statt in getrennten Dateien: mehrere Baukörper nebeneinander, einer davon die **aktuelle Variante**, die anderen zum Vergleich.

Eine Baukörpervariante ist ein Baukörper: ein Umriss, auf eine Höhe gebracht, mit einer Anzahl Geschosse. Sie sind noch keine Wände. Sie können beliebig viele behalten, gruppiert in **Variantensätze** (Varianten eines Satzes sind Alternativen zueinander).

## Eine Variante behalten

1. Öffnen Sie {{ui:Raumprogramm zur Massenstudie}}, geben Sie das Raumprogramm und den Umriss ein und wählen Sie {{ui:Varianten finden}}.
2. Wählen Sie eine der aufgelisteten Varianten.
3. Geben Sie unter {{ui:Baukörpervarianten im Modell}} für den {{ui:Variantensatz}} einen Namen ein, wenn Sie einen möchten, und wählen Sie {{ui:Ausgewählte Variante behalten}}.

Die Variante erscheint im Modell als Baukörper und in der Liste, mit ihren Geschossen, der Grundfläche, der Bruttogeschossfläche und dem Volumen. Nichts wird gebaut. Behalten Sie eine weitere auf die gleiche Weise.

Die erste Variante eines Satzes ist seine aktuelle Variante. Jeder Schritt ist ein Rückgängig-Schritt.

## Die aktuelle Variante

Eine Variante jedes Satzes ist die aktuelle. Das bedeutet zweierlei:

- **Ihre Geschosse zählen als Geschossflächen des Gebäudes.** Die aktuelle Variante hat je Geschoss einen Raum mit der Bruttofläche dieses Geschosses, sodass alles, was Geschossflächen liest, die gültige Variante sieht und keine andere.
- **Sie wird gegen das Grundstück geprüft.** Steht sie außerhalb der Grundstücksgrenze, über einer Baugrenze oder auf einer Dienstbarkeit, erscheint unter {{ui:Probleme}} eine Warnung mit ihrem Namen. Es ist nur eine Warnung: Nichts wird verweigert. Varianten, die nicht aktuell sind, werden nicht geprüft.

Wählen Sie {{ui:Als aktuell festlegen}} an einer anderen Variante, um sie zu ändern.

{{ui:Nicht aktuelle Varianten ausblenden}} blendet die anderen in der 3D-Ansicht aus. Das gilt nur für diesen Browser und wird nicht in der Datei gespeichert.

## Baukörper aus ModelCraft

In ModelCraft sendet {{ui:Exportieren}} › {{ui:Baukörper an BimCraft…}} jede Gruppe oder Komponente als eine Variante. BimCraft öffnet die Datei mit den aufgelisteten Varianten.

Um sie in ein bereits geöffnetes Modell zu übernehmen, wählen Sie {{ui:Baukörpervarianten aus einer Datei hinzufügen}} und die Datei `.ifc`. Ihre Baukörper kommen als Varianten eines Satzes herein, in einem Rückgängig-Schritt, und stehen dort, wo sie modelliert wurden. Eine Datei mit Baukörpern aus CivilCraft funktioniert genauso.

Eine Variante mit der Kennzeichnung „(Form vereinfacht)“ war in ModelCraft kein schlichter, senkrechter Block (sie springt zurück, ist geneigt oder nicht geschlossen). Ihr Baukörper hier ist der Umriss ihrer Basis, auf ihre Höhe gebracht; ihre Geschossflächen und ihr Volumen sind die am Volumenkörper selbst gemessenen.

## Die gewählte Variante ausarbeiten

Wählen Sie {{ui:Entwickeln}} an einer Variante. Sie wird zu Geschossen (so viele, wie ihre Geschosszahl ergibt), zu Wänden rund um ihren Umriss auf jedem Geschoss und zu einer Decke auf jedem, in einem Rückgängig-Schritt. Die Variante verlässt die Liste; die anderen Varianten bleiben unverändert. Ein Dach gibt es noch nicht.

{{ui:Umbenennen}} ändert den Namen einer Variante, {{ui:Entfernen}} nimmt sie aus dem Modell. Das Entfernen der aktuellen Variante macht die erste andere des Satzes aktuell.

## Was Sie sehen sollten

- Jede behaltene Variante als Block in der 3D-Ansicht und als Zeile in der Liste.
- „(aktuell)“ neben einer Variante je Satz.
- Eine Warnung unter {{ui:Probleme}}, wenn die aktuelle Variante die Grundstücksgrenze, eine Baugrenze oder eine Dienstbarkeit kreuzt.

## Gut zu wissen

- In der IFC-Datei ist eine Variante ein Bauelement-Proxy mit dem Eigenschaftssatz `CadCraft_SiteMass` (ihr Variantensatz, ihr Variantenname und ob sie aktuell ist, stehen in diesem Satz). Die Geschosse der aktuellen Variante sind Räume vom Typ `MassingFloor`. Andere Programme lesen den Proxy als allgemeines Element.
- Das Behalten einer Variante fügt nie Geschosse hinzu; das Ausarbeiten schon.
- Ein Assistent kann die behaltenen Varianten auflisten, eine behalten, eine aktuell machen, umbenennen, ausarbeiten oder entfernen.
