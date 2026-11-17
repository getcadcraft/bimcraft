---
title: Menüs, Tasten und Maus
summary: Wählen Sie einen Menüstil, der zu Ihrer bisherigen Arbeitsweise passt, weisen Sie jedem Befehl eine eigene Taste zu, verschieben Sie Befehle zwischen Menüs und legen Sie fest, was das Rad und jede Maustaste tun.
keywords: Menüstil, Menüs, Menüleiste, Menüband, Befehlszeile, Tastenkürzel, Hotkeys, Tasten, anpassen, neu belegen, Maus, Rad, umkehren, Zoomrichtung, mittlere Taste, Pan, Orbit, Zwei-Buchstaben-Tasten, exportieren, importieren, wechseln, vertraut
from: a424e836
---

Die Befehle von BimCraft sind gleich, egal wie Sie sie aufrufen. Ein **Menüstil** legt nur fest, wo sie auf dem Bildschirm stehen, wie sie dort heißen und mit welchen Tasten sie ausgeführt werden, damit Sie Ihre gewohnten Arbeitsweisen beibehalten können. Wählen Sie ihn unter {{ui:Einstellungen}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menüs, Tasten und Maus}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die fünf Stile

| Stil | Was Sie bekommen |
|---|---|
| {{ui:CadCraft}} | Eigene Symbolleiste und Tasten von BimCraft ({{key:W}} Wand, {{key:D}} Tür, {{key:N}} Fenster, {{key:X}} Schnitt, {{key:F}} Einpassen). Der Ausgangspunkt. |
| {{ui:Hausplanung}} | Eine Menüleiste (Datei, Bearbeiten, Build, Bibliothek, 3D, CAD, Werkzeuge, Ansicht) über einer Reihe von Gebäudewerkzeugen, so wie Wohnungsplanungsprogramme sie anordnen. Dieselben Einzeltasten, dazu {{key:Mod+L}} für die Bibliothek, {{key:F9}} für die 3D-Ansicht, {{key:F10}} für den Grundriss und {{key:F11}} für beides. |
| {{ui:BIM-Menüband}} | Registerkarten mit großen Schaltflächen (Architektur, Einfügen, Beschriften, Ändern, Ansicht, Ausgabe) mit einem Menü Datei und Schnellschaltflächen rechts. Zwei-Buchstaben-Tasten: {{key:W}} dann {{key:A}} für eine Wand, {{key:D}} {{key:R}} Tür, {{key:W}} {{key:N}} Fenster, {{key:S}} {{key:C}} Schnitt, {{key:Z}} {{key:F}} Einpassen. Die mittlere Taste verschiebt die Ansicht (Pan); {{key:Shift}} und die mittlere Taste orbitieren. |
| {{ui:Klassisches Zeichnen}} | Ein kleines Menüband und eine Befehlszeile für alle, die Befehle eintippen: WALL, DOOR, WINDOW, ROOF, U (Rückgängig), ZOOM, SECTION, PLOT, INSERT, HELP. Beginnen Sie irgendwo zu tippen, und die Buchstaben gehen in die Befehlszeile; {{key:Enter}} führt aus, {{key:Enter}} ohne Eingabe wiederholt den letzten Befehl, {{key:Esc}} leert sie. |
| {{ui:Betrachter}} | Zum Öffnen und Prüfen von Modellen statt zum Zeichnen: Menüs {{ui:Datei}}, {{ui:Ansicht}}, {{ui:Anzeigen}}, {{ui:Prüfen}} und {{ui:Bearbeiten}} über einer Reihe von Betrachtungswerkzeugen (Einpassen, Oben, Vorne, Seite, Schnitt, Messen, Ausblenden, Isolieren, Transparent, Alles anzeigen, Rundgang). Die Gebäudewerkzeuge warten am Ende in einem Menü {{ui:Modell}}. Dieselben Tasten wie im eigenen Stil von BimCraft. |

Menüs und Menübänder erscheinen, sobald ein Modell geöffnet ist oder Sie ein neues Gebäude beginnen; davor öffnet der Bereich links Dateien und startet Gebäude.

:::tip
Eine Taste, die zum eigenen Layout von BimCraft gehört, aber nicht zum gewählten Stil, tut nichts, und die Statuszeile sagt, wohin ihr Befehl gewandert ist („Im BIM-Menüband ist Schnitt SC“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeiltasten behalten immer ihre Bedeutung, und ein laufendes Werkzeug behält seine eigenen Tasten: {{key:R}} und {{key:Tab}} beim Platzieren, {{key:W}} {{key:A}} {{key:S}} {{key:D}} beim Gehen, {{key:H}} bei den Tür- und Fenster-Werkzeugen, Zahlen beim Eingeben einer Länge.
:::

## Selbst gestalten

1. Wählen Sie den Stil, der Ihren Wünschen am nächsten kommt, und klicken Sie dann auf {{ui:Anpassen…}}.
2. Suchen Sie unter {{ui:Tasten und Menüs}} einen Befehl (das Suchfeld hilft). Klicken Sie auf {{ui:Taste hinzufügen}} und drücken Sie die Taste, oder zwei Tasten nacheinander für eine Zwei-Buchstaben-Taste. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Bei einer Menüleiste oder einem Menüband verschiebt {{ui:Wo er steht}} den Befehl in ein anderes Menü oder einen anderen Bereich oder zu {{ui:Nur Tasten}}.
4. Legen Sie unter {{ui:Maus}} das Rad, die Tasten, mit denen Sie den Plan verschieben, und fest, was jede Taste in den 3D-Ansichten tut.
5. Geben Sie dem Stil einen Namen und klicken Sie auf {{ui:Speichern}}.

Wenn Sie einen eingebauten Stil speichern, entsteht Ihre eigene Kopie („Meine Hausplanung“); der eingebaute Stil ändert sich nie. Eine Taste, die zwei Befehlen zugewiesen ist, oder eine, die ausgeführt würde, bevor eine Zwei-Buchstaben-Taste getippt werden kann, wird rot angezeigt und muss korrigiert werden, bevor Sie speichern können.

## Maus

- **Mausrad**: {{ui:Nach oben scrollen vergrößert}} (der Ausgangswert) oder {{ui:Nach oben scrollen verkleinert}}, und wie schnell. Eine Trackpad-Geste zum Zoomen (Pinch) zoomt immer in die Richtung, in die sich Ihre Finger bewegen.
- **Plan und Zeichnungen verschieben (Pan) mit**: jeder der linken, mittleren und rechten Tasten. {{key:Space}} und Ziehen verschiebt ebenfalls; ein Ziehen mit der linken Taste verschiebt nur dort, wo ein Klick nichts auswählen oder zeichnen würde.
- **Ziehen in den 3D-Ansichten**: {{ui:Eigene je Ansicht}} behält die Tasten von BimCraft bei (links orbitieren, rechts Pan). Oder stellen Sie jede Taste auf Orbit, Pan, Zoom oder nichts ein; {{key:Shift}} mit der Taste tauscht Orbit und Pan. Ein Klick ohne Ziehen wählt weiterhin aus.

## Mitnehmen

{{ui:Exportieren}} speichert den verwendeten Stil als kleine Datei `.ccinput.json`; {{ui:Importieren…}} fügt eine hinzu, von einem anderen Computer oder von einem Teammitglied. Eine importierte Datei kann nur auf Befehle von BimCraft verweisen: Alles andere darin (ein Befehl, den diese Version nicht hat, oder eine Taste, die hier nicht funktioniert) wird weggelassen und in der Statuszeile gezählt. {{ui:Diesen Stil löschen}} entfernt einen Ihrer eigenen.

:::note
Diese Einstellungen bleiben in diesem Browser. Mit {{ui:Diesen Stil in jeder App verwenden}} unter den Stilkarten öffnet sich jede App in ihrem passenden Stil (eigene Symbolleiste, eine Menüleiste, ein Menüband oder Klassisches Zeichnen; {{ui:Betrachter}} gibt es nur in BimCraft und hat anderswo keine Entsprechung), mit den Änderungen, die Sie in jeder App vorgenommen haben. Eine App ohne passenden Stil behält ihren eigenen. Wenn Sie in einer App einen anderen Stil wählen, ändert sich nur diese App.
:::

Siehe auch: [Tastatur und Maus](topic:keyboard) · [BimCraft-Einstellungen](topic:settings) · [Umstieg von anderen BIM- und Zeichenprogrammen](topic:coming-from)
