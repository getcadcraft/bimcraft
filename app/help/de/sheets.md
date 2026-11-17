---
title: Ansichten, Schnitte und Blätter
summary: Zeichnen Sie Schnittlinien im Grundriss und öffnen Sie dann Blätter für einen druckfertigen Satz aus dem Modell: Grundrisse jedes Geschosses, die vier Ansichten, Gebäudeschnitte, Listen und Wandkonstruktionen, mit Schriftfeldern und Maßstäben, als eine PDF-Datei.
keywords: Blätter, Zeichnungssatz, Ausführungsunterlagen, Drucken, Plotten, PDF, Ansicht, Ansichten, Nordansicht, Schnitt, Gebäudeschnitt, Schnittlinie, schneiden, verdeckte Linien, Schriftfeld, Blattnummer, Maßstab, Papier, 11x17, 24x36, A3, A1, Genehmigungssatz
from: 91ed0cde
---

## Was Sie tun

Erstellen Sie aus dem Modell einen Zeichnungssatz: den Grundriss jedes Geschosses, die Nord-, Ost-, Süd- und Westansicht, einen Gebäudeschnitt für jede Schnittlinie, die Listen für Türen, Fenster, Räume und Holz sowie eine Ansicht jeder Wand mit Ständerwerk. Der Satz wird bei jedem Öffnen neu aus dem Modell gezeichnet, sodass er immer zu dem passt, was Sie gebaut haben.

## Eine Schnittlinie zeichnen

1. Öffnen Sie auf einem Geschoss {{ui:Build}} und wählen Sie {{ui:Schnittlinie}}.
2. Klicken Sie, wo die Linie beginnt und wo sie endet. Die kurze Linie in ihrer Mitte zeigt die Seite, in die der Schnitt blickt: links von der Linie, vom ersten zum zweiten Klick gesehen.
3. Die Linie erscheint im Grundriss mit ihren Enden und ihrem Buchstaben (A, dann B und so weiter).

Wählen Sie die Linie, um sie in den **Eigenschaften** zu ändern: ihren Buchstaben, **Ansicht umkehren**, um in die andere Richtung zu sehen, und **Sichtweite bis**, um die Ansicht eine festgelegte Distanz hinter dem Schnitt zu stoppen (0 zeigt alles dahinter). Drücken Sie {{key:Delete}}, um sie zu entfernen.

## Blätter öffnen

1. Klicken Sie in der Modellleiste (neben {{ui:Drucken}}) auf {{ui:Blätter}}.
2. Die Blätter stehen links aufgelistet: **A-101** und folgende für Grundrisse, **A-201** für Ansichten, **A-301** für Schnitte, **A-401** für Listen und **S-101** für Wandkonstruktionen. Klicken Sie eines an, um es zu sehen.
3. Wählen Sie das **Papier**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 oder A1. Das Papier behält seinen Standardnamen, und seine Größe wird in den von Ihnen gewählten {{ui:Einheiten}} angegeben, zum Beispiel *Letter · 8.5 × 11 in* oder *A3 · 297 × 420 mm*.
4. Klicken Sie auf {{ui:Den Satz als PDF herunterladen}}: eine Seite pro Blatt.

## Standardnotizen aus einem Regelwerk

In einem Blatt lässt {{ui:Standardnotizen}} Sie Notizen aus einem Regelwerk (nach Fachbereich) in der rechten Spalte des Blatts platzieren. Jede Notiz behält das Regelwerk und die Klausel, aus der sie stammt, und das gedruckte Blatt sagt, wann das Regelwerk ungeprüft ist. Die Notizen sind ein Ausgangspunkt: Die verantwortliche Person für die Zeichnung entscheidet, was sie aussagen. Sie benötigen das Add-on „Bauvorschriften“.

## Was auf den Blättern steht

- **Grundrisse** zeigen Wände, Türen, Fenster, Räume mit ihren Flächen, Bemaßungen und Schnittlinien, im größten Standardmaßstab, der passt: 1/4" = 1'-0" oder kleiner (1:50 oder kleiner in Millimetern).
- **Ansichten** werden aus dem 3D-Modell mit entfernten verdeckten Linien gezeichnet, zwei pro Blatt, alle im selben Maßstab, mit einer Geländelinie darunter. Dach, Fundamente und Gelände erscheinen so, wie sie modelliert sind.
- **Schnitte** füllen, was der Schnitt durchquert (Wände, Geschossdecken, Dach), und zeichnen, was dahinter zu sehen ist.
- **Ansichten und Schnitte tragen ihre Notizen:** eine Markierung für jedes Geschoss mit Name und Höhe rechts, die Höhe zwischen Geschossen links, und auf einer Ansicht die Gebäudebreite darunter sowie eine Kennzeichnung (D1, W1) an jeder Tür und jedem Fenster in einer Wand, die Ihnen zugewandt ist. Für die eigenen Wände eines Raums siehe [Innenansichten](topic:interior-elevations).
- **Listen** sind dieselben Tabellen wie {{ui:Listen}} in der Modellleiste.
- **Ständerwerk** zeigt die Ständer, Riegel, Stürze und Schwellen jeder Rahmenwand von ihrer Außenseite, damit eine Kolonne sie abstecken kann. Siehe [Wände, Decken und Dächer als Ständerwerk](topic:framing).

Jedes Blatt hat ein Schriftfeld mit seiner Nummer, seinem Titel, dem Namen der Datei und dem Datum.

:::tip
Blätter stammen aus dem Modell: Um eine Zeichnung zu ändern, ändern Sie das Modell und öffnen Sie {{ui:Blätter}} erneut.
:::

:::note
Ansichten und Schnitte zeigen nur Linien und Flächen: Bemaßungen, Geschossmarken und Notizen darauf sind noch nicht umgesetzt.
:::
