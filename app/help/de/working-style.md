---
title: Arbeitsweise, duplizierte Ansichten, Stifte auf Papier, Melden als und Vorlagen
summary: Wählen Sie, wie sich BimCraft an Ihre Arbeitsweise anpasst, duplizieren Sie jede Ansicht als eigene Kopie oder verknüpft, bewahren Sie Stiftüberschreibungen in der Datei auf, drucken Sie wie angezeigt oder über eine Stifttabelle, melden Sie ein Element als eine andere IFC-Klasse und starten Sie Projekte aus Ihren eigenen Vorlagen.
keywords: Arbeitsweise, Ansicht duplizieren, duplizieren, Ansicht kopieren, abhängige Ansicht, verknüpfte Ansicht, eigene Kopie, Ansichtskopie, Stiftüberschreibungen, Stifte, Linienstärken, wie angezeigt drucken, Stifttabelle, Plotstil, ctb, monochrom, Graustufen, melden als, IFC-Klasse, umklassifizieren, vordefinierter Typ, generisches Modell, Decke als Straße, Wand als Paneel, Dach als Rampe, Projektvorlage, Vorlage, aus Vorlage, als Vorlage speichern, Büro-Standard
from: 231d98b0
---

## Was Sie tun

Richten Sie BimCraft auf Ihre Arbeitsweise ein, duplizieren Sie Ansichten, drucken Sie sie so, wie Sie es erwarten, zählen Sie Elemente als das, was sie wirklich sind, und starten Sie jedes Projekt aus der Vorlage Ihres Büros.

## Eine Arbeitsweise wählen

1. Öffnen Sie {{ui:Einstellungen}} und die Registerkarte {{ui:BimCraft}}. Suchen Sie {{ui:Arbeitsweise}}.
2. Wählen Sie eine Möglichkeit:
   - {{ui:Jede Ansicht eigenständig}} (die erste Wahl): Eine duplizierte Ansicht kopiert ihre Beschriftungen, und sie bleiben die dieser Ansicht; Blätter werden so gedruckt, wie der Bildschirm sie zeigt.
   - {{ui:Gemeinsame Beschriftungen und Stifttabellen}}: Duplizierte Ansichten teilen ihre Beschriftungen; das Drucken läuft über eine Stifttabelle.
3. Darunter stehen die vier Dinge, die sie festlegt. Ändern Sie eines davon einzeln; die Arbeitsweise zeigt dann {{ui:Benutzerdefiniert}} an.

Die Arbeitsweise wird in diesem Browser gespeichert, ebenso wie das Arbeitsbereich-Layout. Eine Vorlage übernimmt sie für neue Modelle.

## Eine Ansicht duplizieren

1. Im {{ui:Projektbrowser}} hat jeder Grundriss, Deckenplan, Ausschnitt, jede Ansicht und jeder Schnitt eine Schaltfläche {{ui:Duplizieren}} (zwei Blätter).
2. Benennen Sie die Kopie und wählen Sie, wie sie sich verhält:
   - {{ui:Eigene Kopie}}: Ihre Zeichnungselemente, Bemaßungen, Zuschnitt, ausgeblendete Elemente und Stifte werden kopiert und bleiben ihre eigenen. Das Bearbeiten einer der beiden Ansichten ändert nie die andere, daher bleibt eine Ansicht auf einem herausgegebenen Blatt so, wie sie herausgegeben wurde.
   - {{ui:Verknüpft}}: Sie zeigt dieselbe Ansicht mit einem Satz Beschriftungen und Einstellungen.
3. Die Kopie steht unter {{ui:Duplizierte Ansichten}}. Klicken Sie darauf, um sie zu öffnen; die Leiste über dem Grundriss zeigt an, dass es eine Kopie ist, mit {{ui:Hoch}} zurück zu ihrer Ansicht.
4. Ihre Schieberschaltfläche öffnet ihre Einstellungen: den Namen, {{ui:Ansichtsbereich}} (eine eigene Kopie hat ihren eigenen), {{ui:Zur eigenen Kopie machen}} für eine verknüpfte Kopie und {{ui:Löschen}}.

Kopien von Ansichten und Schnitten liegen auf Ihren eigenen Blättern, wie die Ansichten, von denen sie stammen. Das Duplizieren ist ein einzelner Schritt für {{ui:Rückgängig}}, und Kopien werden in der IFC neben den Ausschnitten gespeichert.

## Stifte bei der Ansicht behalten und wie angezeigt drucken

1. Schalten Sie {{ui:Zeichnen}} ein und wählen Sie {{ui:Stifte}}.
2. {{ui:Für}} listet jetzt jede Kategorie auf: Wände, Türen und Fenster, Decken, Dächer, Stützen, Treppen, Möbel und den Rest sowie Zeichnungselemente und Bemaßungen.
3. {{ui:Übernehmen}} behält den Stift in der IFC bei der Ansicht, die gerade angezeigt wird: ein Grundriss, ein Deckenplan, ein Ausschnitt oder eine duplizierte Ansicht. Stifte, die vor 0.9 erstellt wurden, wurden im Browser gespeichert; {{ui:In der Datei behalten}} verschiebt sie.
4. Blätter und das PDF zeichnen jeden Stift so, wie der Bildschirm ihn zeigt.

Um stattdessen über eine Stifttabelle zu drucken, setzen Sie in der Zeile Stifte {{ui:Drucken}} auf {{ui:Über eine Stifttabelle}} und wählen dann eine Tabelle (Farbe, Monochrom, Graustufen) oder {{ui:Stifttabelle bearbeiten…}}: Jede Farbe erhält die Farbe, Linienstärke und Rasterung, mit denen sie gedruckt wird. Die Tabelle ist die Plotstildatei von CadCraft, daher nimmt {{ui:Importieren…}} eine Tabelle entgegen, die in der CadCraft-App erstellt wurde, und {{ui:Exportieren}} gibt eine Tabelle zurück. Das Modell behält seine Wahl; ohne Wahl entscheidet die Arbeitsweise.

## Ein Element als andere Klasse melden

Eine als Straße gezeichnete Decke, eine als Paneel verwendete Wand, ein als Rampe geformtes Dach: Behalten Sie das Werkzeug, mit dem Sie es gezeichnet haben, und melden Sie es als das, was es ist.

1. Wählen Sie das Element und öffnen Sie {{ui:Eigenschaften}}. Öffnen Sie {{ui:Melden als}}.
2. Geben Sie im Suchfeld ein, um eine Klasse zu finden, die zur Form passt, wählen Sie sie und ihren vordefinierten Typ. Für einen eigenen Typ wählen Sie USERDEFINED und geben ihm einen Namen.
3. {{ui:Übernehmen}} (ein einzelner Schritt für {{ui:Rückgängig}}). {{ui:Löschen}} meldet es wieder so, wie es gezeichnet wurde.

Sie bearbeiten es weiterhin mit dem Werkzeug, mit dem es gezeichnet wurde. Die gespeicherte IFC schreibt es als gemeldete Klasse, sodass andere Programme, die {{ui:Mengen}}-Ermittlung, Suchen, Farbe nach, Modellprüfungen und {{ui:Probleme}} es als diese Klasse zählen. Die Listen nehmen eine als Paneel gemeldete Wand aus der Wandliste heraus, und {{ui:Elemente nach gemeldeter Klasse}} listet alle auf. Das funktioniert bei IFC4- und IFC2X3-Dateien; die Liste bietet nur die Klassen an, die zur IFC-Version der Datei gehören. Türen, Fenster, Treppen, Räume und Geschosse behalten ihre eigene Klasse.

## Ein Projekt als Vorlage speichern und daraus starten

1. Klicken Sie bei geöffnetem Projekt auf {{ui:Als Vorlage speichern}} neben {{ui:Speichern}}.
2. Benennen Sie sie. Setzen Sie einen Haken bei {{ui:Auch die Vorlagendatei herunterladen}}, um sie als IFC-Datei zu teilen, und bei {{ui:Neue Modelle daraus starten}}, um sie zu Ihrem Standard zu machen.
3. Eine Vorlage behält Geschosse, Ansichtsvorlagen und Ansichtseinstellungen, duplizierte Ansichten und Ausschnitte, Zeichnungselemente, Stifte und die Stifttabelle, Tags, Familien und Typen, Blätter, Blattgrößen, Schriftfelder und die Arbeitsweise. Wände, Decken, Türen und alle anderen Modellelemente bleiben weg.
4. Klicken Sie auf {{ui:Neues Gebäude}} und wählen Sie es unter {{ui:Starten aus}}, oder wählen Sie {{ui:Eine Vorlagendatei…}} für eine, die Ihnen geschickt wurde. Das neue Projekt erhält seinen eigenen Namen und seine eigene Projektidentität; alles andere ist so, wie die Vorlage es vorgibt.

:::note
Vorlagen werden in diesem Browser gespeichert. Team-Vorlagen, die über CadCraft Studio geteilt werden, sind noch nicht umgesetzt: Senden Sie stattdessen die Vorlagendatei.
:::
