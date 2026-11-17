---
title: Innenwandansichten
summary: Erstellen Sie ein Blatt, das die vier Wände eines Raums von innen zeigt, mit Bemaßung und Tags, und speichern Sie es als PDF.
keywords: Innenwandansicht, Raum, Wand, Schrank, Küche, Ansicht, Blatt, PDF, Bemaßung, Tag, Raum (Space), A-501
from: 1e3a70a8
---

## Was Sie tun

Wählen Sie einen Raum und erhalten Sie ein Blatt, das seine vier Wände so zeigt, wie Sie sie von innen sehen. Es ist für Küchen, Bäder und alle Räume gedacht, in denen Sie die Schränke, Türen und Fenster an jeder Wand sehen müssen.

## Blatt erstellen

1. Raum wählen. Im Plan bei eingeschaltetem {{ui:Zeichnen}} im Raum klicken. In der 3D-Ansicht oder der Modellstruktur den Raum (einen IfcSpace) wählen.
2. Unter **Eigenschaften** auf {{ui:Innenwandansichten…}} klicken.
3. Das Dialogfeld öffnet sich mit dem Blatt.
4. Auf {{ui:PDF herunterladen}} klicken, um es zu speichern. Die Datei heißt „<file> — Interior elevations — <room>.pdf“ und ist ein Vektor-PDF.
5. Wenn Sie fertig sind, auf {{ui:Schließen}} klicken.

## Was das Blatt zeigt

Das Blatt hat vier Ansichten, zwei mal zwei, im selben Maßstab: dem größten Standardmaßstab, der passt. Sie heißen **Nordwand**, **Ostwand**, **Südwand** und **Westwand**. Ein Schriftfeld trägt die Blattnummer A-501, den Titel „Innenwandansichten — “ mit der Raumnummer und dem Raumnamen, das Projekt und das Datum.

Jede Ansicht ist mitten durch den Raum geschnitten und zeigt die Wand auf dieser Seite. Die Seitenwände und alles, was in ihnen ausgeschnitten ist, etwa ein Fenster, erscheinen als graue Schnittfläche um die Ansicht. Die Ansicht endet kurz hinter der Wandfläche, sodass nichts hinter der Wand sichtbar wird.

Jede Ansicht enthält:

- die Breite des Raums darunter, von Innenseite zu Innenseite;
- die Höhe des Raums daneben, vom Boden bis zur darüberliegenden Ebene;
- ein quadratisches Tag an jeder Tür und ein sechseckiges Tag an jedem Fenster in dieser Wand, mit ihrer Kennung (D1, W1 usw.);
- ein kreisförmiges Tag mit der Positionsnummer an jedem Bibliothekselement, das vor dieser Wand platziert ist: Schränke, Armaturen und Geräte.

:::note
Die Ansichten werden bei jedem Öffnen des Dialogfelds aus dem Modell erstellt und stimmen daher immer mit ihm überein. Verschieben Sie einen Schrank und öffnen Sie das Dialogfeld erneut.
:::

## Auf Ihren eigenen Blättern

Jede Wand jedes Raums ist außerdem eine Ansicht, die Sie auf einem eigenen Blatt platzieren können: Klicken Sie im Projektbrowser auf {{ui:Neues Blatt}} und fügen Sie dann unter **Innenwandansichten** „101 Küche — Nordwand“ und die übrigen hinzu. Sie kommt mit denselben Bemaßungen und Tags.

## Noch nicht umgesetzt

Innenwandansichten im erzeugten Zeichnungssatz (sie kommen aus den **Eigenschaften** des Raums oder aus Ihren eigenen Blättern), Räume, die nicht überwiegend rechteckig sind (die Ansicht zeigt an jeder Seite des Raumkastens ein Quadrat), Zeichnen, Notizen oder eigene Bemaßungen darauf sowie die Auswahl, welche Wände gezeigt werden. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
