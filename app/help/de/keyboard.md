---
title: Tasten und Maus
summary: Jede Tasten-, Maus-, Trackpad- und Touch-Aktion in BimCraft, gruppiert nach dem, was Sie betrachten.
keywords: Tastatur, Tastenkürzel, Shortcuts, Tasten, Maus, Trackpad, Touch, Orbit, Pan, Zoom, ausblenden, isolieren, durchsichtig, rückgängig, wiederholen, kopieren, einfügen, duplizieren, speichern, einpassen, Druckansicht, Escape, Einstellungen, zeichnen, Wand, Tür, Fenster, Plan
from: 5c6eedce
---

BimCraft hat nur wenige Tastenkürzel. Die meisten Arbeiten erledigen Sie mit der Maus und den Bereichen. Tastenkürzel mit {{key:Mod}} verwenden Command auf dem Mac und sonst Ctrl. Wie Tasten in dieser Hilfe geschrieben werden, steht unter [Tasten, Mäuse und Trackpads](common:keys).

## Überall

| Taste | Wirkung |
|---|---|
| {{key:Ctrl+Shift+F}} | Bildschirmmodi durchschalten: normal, Vollbild, Vollbild mit ausgeblendeten Leisten. Ctrl auf allen Plattformen, auch auf dem Mac |
| {{key:Esc}} | Vollbild verlassen |
| {{key:Mod+,}} | {{ui:Einstellungen}} öffnen. Siehe [BimCraft-Einstellungen](topic:settings) |
| {{key:Tab}} | Zwischen Schaltflächen, Kontrollkästchen und Werten wechseln. Jedes Steuerelement ist über die Tastatur erreichbar |

## 3D-Ansicht (IFC-Modelle)

| Taste oder Aktion | Wirkung |
|---|---|
| {{key:F}} | Das ganze Modell einpassen, Dreiviertelansicht (wie {{ui:Einpassen}}) |
| {{key:Esc}} | Auswahl aufheben oder Platzieren bzw. Einfügen beenden |
| Klicken | Das Element unter dem Zeiger wählen; auf leeren Hintergrund klicken, um die Auswahl aufzuheben |
| {{key:Mod}}+Klick oder {{key:Shift}}+Klick | Ein Element zur Auswahl hinzufügen oder daraus entfernen |
| {{key:H}} | Die gewählten Elemente ausblenden. Siehe [Elemente ausblenden, isolieren und durchsichtig machen](topic:hide-and-isolate) |
| {{key:I}} | Nur die gewählten Elemente anzeigen (isolieren) |
| {{key:T}} | Die gewählten Elemente anzeigen, alle anderen durchsichtig |
| {{key:Shift+H}} | Jedes Element wieder anzeigen |
| {{ui:Rundgang}} | Danach gehen Sie mit {{key:W}} {{key:A}} {{key:S}} {{key:D}} oder den Pfeiltasten; {{key:Shift}} läuft; Ziehen schaut um sich; {{key:Esc}} hält an. Siehe [Durch ein Modell gehen](topic:walk) |
| {{key:M}} | Abstände und Flächeninhalte messen. Siehe [Abstände, Flächen und Lagen in 3D messen](topic:measure) |
| Mit der linken Taste ziehen | Orbit |
| Mit der rechten Taste ziehen | Pan |
| {{key:Shift}} oder {{key:Mod}} halten und mit der linken Taste ziehen | Pan (praktisch auf einem Trackpad) |
| Mit dem Mausrad scrollen oder mit der mittleren Taste ziehen | Zoom |
| Zwei-Finger-Scrollen oder Zusammen- bzw. Auseinanderziehen auf einem Trackpad | Zoom |
| Ein Finger (Touch) | Orbit; ein Tipp wählt |
| Zwei Finger (Touch) | Zum Zoomen zusammenziehen, gemeinsam bewegen zum Pan |

| {{key:X}} | Schnittebene ein und aus. Siehe [IFC-Modell mit einer Schnittebene schneiden](topic:section-plane) |
| {{key:Shift+X}} | Schnittkasten um die gewählten Elemente, mit dem in den Einstellungen festgelegten Raum |

Für {{ui:Oben}}, {{ui:Vorne}} und {{ui:Seite}} gibt es keine Tasten; verwenden Sie die Schaltflächen.

## Bearbeiten

Dieselben Befehle stehen in der Symbolleiste: {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}} und das Menü {{ui:Mehr}}, das jede Taste anzeigt. Sie wirken in der 3D-Ansicht eines IFC-Modells, nicht während Sie in ein Feld schreiben. Siehe [Bibliothekselemente kopieren, einfügen und duplizieren](topic:copy-paste).

| Taste | Wirkung |
|---|---|
| {{key:Mod+Z}} | Die letzte Änderung rückgängig machen |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen, was Rückgängig zurückgenommen hat |
| {{key:Mod+C}} | Die gewählten Elemente kopieren (ihre Namen und Eigenschaften gehen auch als Text in die Zwischenablage) |
| {{key:Mod+X}} | Die gewählten Elemente ausschneiden: kopieren, dann löschen |
| {{key:Mod+V}} | Einfügen, was Sie kopiert haben: es folgt dem Zeiger, klicken Sie, wo es hin soll |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen: dort, wo ein Ausschnitt herkam, oder neben den Originalen nach einem Kopieren |
| {{key:Mod+D}} | Duplizieren: die gewählten Elemente kopieren und das Einfügen starten |
| {{key:Delete}} | Die gewählten Elemente löschen, mit ihren Teilen und Öffnungen. Siehe [Bauteile löschen, ausschneiden, kopieren und einfügen](topic:edit-elements) |
| {{key:Mod+A}} | Jedes sichtbare Element wählen |
| {{key:Esc}} | Nichts auswählen |

Ist auf der Seite Text markiert, kopiert {{key:Mod+C}} den Text wie üblich.

## Planansicht (Zeichnen)

Diese funktionieren, während {{ui:Zeichnen}} eingeschaltet ist und Sie nicht in ein Feld schreiben. Siehe [Wände zeichnen](topic:draw-walls) und [Türen und Fenster](topic:doors-and-windows).

| Taste oder Aktion | Wirkung |
|---|---|
| {{key:V}} | {{ui:Wählen}} |
| {{key:W}} | {{ui:Wand}} |
| {{key:D}} | {{ui:Tür}} |
| {{key:N}} | {{ui:Fenster}} |
| {{key:H}} | Bei {{ui:Tür}} oder {{ui:Fenster}}: Scharniere am anderen Ende |
| {{key:Shift}} beim Zeichnen einer Wand | Sie bleibt bei 0°, 90°, 180° oder 270° |
| Ziffern sowie Fuß- und Zollzeichen (`'` und `"`) | Eine Länge in das Feld {{ui:Länge}} eingeben; {{key:Enter}} übernimmt sie |
| {{key:Enter}}, {{key:Esc}}, Rechtsklick oder Doppelklick | Die Wand beenden, die Sie zeichnen; {{key:Esc}} noch einmal wechselt zurück zu {{ui:Wählen}} |
| {{key:Delete}} | Die gewählten Wände, Türen und Fenster löschen; die verbleibenden Wände schließen sich wieder an |
| {{key:F}} mit dem Zeiger über dem Plan | Den Plan einpassen |
| Mausrad scrollen | Zoom um den Zeiger |
| Mit der mittleren oder rechten Taste ziehen oder {{key:Space}} halten und ziehen | Pan; bei eingeschaltetem {{ui:Wählen}} zieht auch ein einfaches Ziehen |
| Eine Tür oder ein Fenster mit {{ui:Wählen}} ziehen | Entlang seiner Wand oder auf eine andere Wand verschieben |
| Zwei Finger (Touch) | Zum Zoomen zusammenziehen, gemeinsam bewegen zum Pan |

## Bibliothekselemente platzieren und einfügen

| Taste | Wirkung |
|---|---|
| {{key:R}} | Das Element um 90° drehen |
| {{key:Tab}} | Wandeinrasten ein und aus: die Rückseite des Elements liegt an der nächsten Wand |
| {{key:Enter}} in **X, Y (mm)** | An der eingegebenen Position platzieren |
| {{key:Esc}} | Platzieren oder Einfügen beenden |

## IFC-Werte bearbeiten

| Taste | Wirkung |
|---|---|
| {{key:Enter}} | Den eingegebenen Wert übernehmen |
| {{key:Esc}} | Abbrechen und den alten Wert zurücksetzen |
| Woanders klicken | Den eingegebenen Wert übernehmen |
| {{key:Mod+Z}} | Die letzte Änderung rückgängig machen. Nur, solange es ungespeicherte Änderungen gibt und Sie nicht in ein Feld schreiben |
| {{key:Mod+Y}} | Wiederholen, was Rückgängig zurückgenommen hat |
| {{key:Mod+S}} | Als IFC speichern. Nur bei ungespeicherten Änderungen; sonst öffnet sich der eigene Speichern-Befehl des Browsers |

Zum Bearbeiten nur mit der Tastatur: {{key:Tab}} drücken, bis ein Wert markiert ist, dann {{key:Enter}} drücken, um die Eingabe zu beginnen.

## 2D-Zeichnungen (DWG und DXF)

| Taste oder Aktion | Wirkung |
|---|---|
| {{key:F}} | Die Zeichnung oder das Blatt einpassen |
| {{key:P}} | Druckansicht ein und aus |
| Doppelklick | Einpassen |
| Mit einer beliebigen Taste ziehen | Pan |
| Mausrad scrollen | Zoom am Zeiger |
| Zwei-Finger-Scrollen oder Zusammen- bzw. Auseinanderziehen auf einem Trackpad | Zoom am Zeiger. Zwei-Finger-Scrollen schwenkt nicht |
| Ein Finger (Touch) | Pan. Zoom per Zusammenziehen ist für Zeichnungen noch nicht umgesetzt |

## Zeichnungen in 3D

| Taste oder Aktion | Wirkung |
|---|---|
| {{key:3}} | 3D ein und aus (auch in der 2D-Ansicht) |
| {{key:F}} | Grenzen: die ganze Zeichnung |
| Mit der mittleren oder linken Taste ziehen | Orbit |
| Mit der rechten Taste ziehen oder {{key:Shift}} halten und ziehen | Pan |
| Mausrad scrollen | Zoom zu dem, was unter dem Zeiger liegt |
| Zwei-Finger-Wischen auf einem Trackpad | Orbit; mit {{key:Shift}} Pan |
| Zusammen- bzw. Auseinanderziehen auf einem Trackpad | Zoom |
| Ein Finger (Touch) | Orbit |
| Zwei Finger (Touch) | Zum Zoomen zusammenziehen, gemeinsam bewegen zum Pan |

{{key:F}}, {{key:P}} und {{key:3}} tun nichts, während Sie in ein Feld schreiben, während die Ausstattungsliste angezeigt wird oder wenn Sie {{key:Mod}} oder {{key:Alt}} halten.

## Dateien

| Aktion | Wirkung |
|---|---|
| Datei auf die Seite ziehen | Öffnet sie |
| Ordner auf die Seite ziehen | Öffnet ihn als Projektordner, ohne Berechtigungsabfrage |
