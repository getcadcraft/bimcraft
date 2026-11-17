---
title: Ansichten speichern und Rundgänge
summary: Kameraansichten des Modells nach Namen speichern, zu ihnen zurückkehren, sie nacheinander abspielen und einen Rundgang durch das Gebäude aufzeichnen, den Sie wieder abspielen können.
keywords: Ansichten, gespeicherte Ansichten, Kamera, Kameras, Blickpunkt, Szene, Szenen, Tour, Präsentation, Rundgang, durchgehen, durchfliegen, aufzeichnen, abspielen, Pfad, Animation
from: 3af19a36
---

{{ui:Ansichten}} in der Symbolleiste hält Kameras der 3D-Ansicht in der Datei des Modells, damit Sie und alle, denen Sie sie schicken, direkt zu ihnen zurückkehren können.

## Eine Ansicht speichern

1. Richten Sie die 3D-Ansicht ein: drehen, zoomen, ausblenden, was Sie nicht wollen.
2. Klicken Sie auf {{ui:Ansichten}}, geben Sie einen Namen ein (oder behalten Sie den angebotenen) und klicken Sie auf {{ui:Ansicht speichern}} oder drücken Sie {{key:Enter}}.

Speichern mit einem Namen, der schon in der Liste steht, aktualisiert diese Ansicht. Klicken Sie auf den Namen einer Ansicht, um zu ihr zurückzukehren; die Kamera fährt dorthin sanft.

Die Pfeile ändern die Reihenfolge, der Stift benennt um, der Papierkorb löscht. Jede Änderung ist ein Schritt, daher macht {{key:Ctrl+Z}} sie rückgängig.

## Die Ansichten abspielen

{{ui:Ansichten abspielen}} wechselt von einer Ansicht zur nächsten in der Reihenfolge der Liste und hält bei jeder kurz an. {{key:Esc}} oder {{ui:Stopp}} beendet es.

## Einen Rundgang aufzeichnen

1. Schalten Sie [Gehmodus](topic:walk) ein und beginnen Sie, im Gebäude zu gehen.
2. Klicken Sie in {{ui:Ansichten}} auf {{ui:Rundgang aufzeichnen}}.
3. Gehen Sie mit {{key:W}} {{key:A}} {{key:S}} {{key:D}} und schauen Sie mit der Maus umher.
4. Klicken Sie auf {{ui:Aufzeichnung beenden}}. Der Rundgang wird als „Walk 1“ mit seiner Länge gespeichert.

Klicken Sie auf einen Rundgang, um ihn so abzuspielen, wie Sie ihn gegangen sind. {{key:Esc}} hält ihn an.

## Einen Rundgang als Video rendern

Klicken Sie auf das Filmsymbol neben einem Rundgang. Das Videodialogfeld zeichnet jedes Bild des Rundgangs mit den Rendereinstellungen, die Sie zuletzt gewählt haben, in der Größe, Bildrate und Qualität, die Sie hier wählen. Speichern Sie es als WebM- oder MP4-Video oder als ZIP mit einem Bild pro Frame. Frames brauchen so lange wie Bilder, daher beginnen Sie mit {{ui:Schnell}}.

## Einen Rundgang kommentieren

Klicken Sie auf das Sprechblasen-Symbol neben einem Rundgang. Schreiben Sie eine Zeile für jede Aussage, und beginnen Sie eine Zeile mit der Zeit, zu der sie beginnt (`12`, `0:12` oder `1:02.5`). Eine Zeile ohne Zeit folgt der Zeile darüber, nach der Zeit, die zum Sprechen braucht. Wählen Sie die Sprache, in der Sprache des Auftraggebers, falls dieser zuschaut. {{ui:Vorschau}} spielt die Worte mit der Stimme dieses Computers ab und zeigt sie als Untertitel; dasselbe geschieht, wann immer der Rundgang abgespielt wird. {{ui:Mit dem Rundgang speichern}} behält die Kommentierung in der IFC beim Rundgang.

Ihr eigener verbundener Assistent kann die Kommentierung für Sie schreiben: Bitten Sie ihn, sich den Rundgang und die gespeicherten Ansichten anzusehen; er setzt die Zeilen in der von Ihnen genannten Sprache, als einen Rückgängig-Schritt.

Das gerenderte Video hat keinen eigenen Ton, weil ein Browser seine eigene Stimme nicht aufzeichnen kann. Speichern Sie die Untertitel (`.srt` oder `.vtt`) und fügen Sie sie im Videoplayer oder Editor dem Video hinzu. Welche Stimmen Sie wählen können, hängt vom Computer ab: Eine Sprache ohne installierte Stimme erhält trotzdem die Untertitel.

## In der Datei

Ansichten und Rundgänge werden in der IFC als Eigenschaftssatz `CadCraft_Views` am Projekt gespeichert: normale IFC, die andere Programme ignorieren. Sie liegen in den Koordinaten des ersten Modells, daher passen sie auch nach dem Neuladen des Modells oder dem Hinzufügen eines anderen Modells noch.

:::tip
Um ein Bild aus einer gespeicherten Ansicht zu rendern, gehen Sie zur Ansicht und klicken Sie dann auf [Rendern](topic:render).
:::
