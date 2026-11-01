---
title: Der BimCraft-Bildschirm
summary: Eine Tour durch jede Leiste, jeden Bereich und jede Schaltfläche mit ihrem Namen auf dem Bildschirm und wie sich der Bildschirm für jede Art von Datei ändert.
keywords: Bildschirm, Layout, Bereiche, Symbolleiste, Oberfläche, ui, Tour, Eigenschaftenbereich, Browser, App-Leiste
from: 2eb01ec2
---

Der BimCraft-Bildschirm hat oben eine Leiste und darunter drei Flächen: einen Bereich links, die Bühne in der Mitte und den Bereich {{ui:Eigenschaften}} rechts. Was in jeder Fläche erscheint, hängt davon ab, was Sie geöffnet haben: ein IFC-Modell, eine Projekt- oder Familiendatei, eine Zeichnung oder einen Ordner.

## Die App-Leiste

Die schmale Leiste oben gehört zur CadCraft-Website, nicht zu BimCraft selbst. Von links nach rechts:

- Das CadCraft-Zeichen: führt zur CadCraft-Startseite.
- Der Name der App und ein Versionsmenü. Im Staff-Build zeigt es, welchen Build Sie benutzen, und lässt Sie zu einer veröffentlichten Version wechseln.
- {{ui:Über BimCraft}}: die Seite der App auf der Website.
- {{ui:Einstellungen}}: die eigenen Einstellungen von BimCraft und die, die jede App teilt. Siehe [BimCraft-Einstellungen](topic:settings).
- {{ui:Vollbild}}: schaltet durch die Bildschirmmodi. Siehe unten [Bildschirmmodi](topic:workspace#screen-modes).
- {{ui:Papier}} und {{ui:Modell}}: das helle und das dunkle Design. Die 3D-Ansicht und die 2D-Zeichnungen folgen dem gewählten Design.

## Der linke Bereich

Der linke Bereich beginnt immer mit **Datei oder Ordner öffnen**:

- Die Ablagefläche, {{ui:Eine Datei wählen oder eine Datei oder einen Ordner hierher ziehen}}. Anklicken, um eine Datei zu wählen, oder eine Datei oder einen Ordner darauf (oder irgendwo auf die Seite) ziehen.
- {{ui:Ordner öffnen}}: einen ganzen Projektordner wählen. Siehe [Einen ganzen Projektordner öffnen](topic:open-project-folder).
- {{ui:Zuletzt verwendete Ordner}}: erscheint in Chrome und Edge, nachdem Sie einen Ordner mit der Ordnerauswahl oder per Ziehen geöffnet haben. {{ui:Erneut öffnen}} und den Ordnernamen anklicken, um ihn wieder zu öffnen, oder das kleine × zum Vergessen.

Darunter erscheinen je nach Lage Abschnitte:

| Abschnitt | Wann er erscheint | Was darin steht |
|---|---|---|
| {{ui:Änderungen}} | Ein IFC-Modell ist geöffnet | Ihre nicht gespeicherten Änderungen, die neueste zuerst, mit {{ui:Rückgängig}} und {{ui:Als IFC speichern}} |
| {{ui:Datei}} | Ein Modell oder eine Dateikarte ist geöffnet | Fakten zur Datei: Größe, Schema oder Version, Projekt, Autor, Bauteilzahl |
| {{ui:Zeichnung}} | Eine DWG oder DXF ist geöffnet | Format, Einheiten, Anzahl der Objekte und Layer, Blätter, verknüpfte Zeichnungen, Ausstattung |
| {{ui:Ordner}} | Ein Ordner ist geöffnet | Datei- und Modellzahlen, Größe, gefundene Probleme |
| {{ui:Zurück zum Ordner}} | Sie haben eine Datei aus einem Ordner geöffnet | Kehrt zum Ordnerbericht zurück |
| {{ui:Layer}} | Eine Zeichnung ist geöffnet | Ein Kontrollkästchen pro Layer, mit {{ui:Alle ein}} und {{ui:Alle aus}} |
| {{ui:Geschosse}} | Ein IFC-Modell ist geöffnet | Ein Kontrollkästchen pro Geschoss, das oberste zuerst |
| {{ui:Bauteile}} | Ein IFC-Modell ist geöffnet | Wie viele Bauteile jeder Art das Modell enthält (die 30 häufigsten) |

## Die Bühne

Die Mitte des Bildschirms zeigt die geöffnete Datei.

- **Leer**: „Open a building model.“ mit {{ui:Datei wählen}} und {{ui:Ordner öffnen}} und einer kurzen Beschreibung jedes Formats.
- **IFC-Modell**: die 3D-Ansicht mit einer Symbolleiste quer oben, in benannten Gruppen wie bei der CadCraft-Zeichen-App, das Symbol jedes Werkzeugs über seinem Namen: {{ui:Ansicht}} ({{ui:Einpassen}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Seite}}, {{ui:Kanten}}, {{ui:Räume}}); {{ui:Bearbeiten}} ({{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}} und {{ui:Mehr}}, siehe [Bibliothekselemente kopieren, einfügen und duplizieren](topic:copy-paste)); {{ui:Modell}} ({{ui:Einheiten}} und {{ui:Zeichnen}}); {{ui:Bibliothek}} ({{ui:Bibliothek}}, {{ui:Ausstattung}}, {{ui:Updates}}, {{ui:Quellenangaben}}); {{ui:Prüfen}} ({{ui:Anzeigen}}, {{ui:Schnitt}}, {{ui:Rundgang}}, {{ui:Messen}}; siehe [Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)); und {{ui:Ausgabe}} (Rendern, Live-Ansicht, VR, Exporte, Malen und gespeicherte Ansichten). Bei eingeschaltetem {{ui:Zeichnen}} sieht die Zeichenleiste darunter genauso aus: {{ui:Ansicht}} (das Geschoss und die Grundrissart), {{ui:Zeichnen}}, {{ui:Bearbeiten}} und {{ui:Bibliothek}}. Ein ViewCube sitzt in der unteren rechten Ecke. Siehe [Ein IFC-Modell öffnen und sich in 3D umsehen](topic:open-ifc-model). {{ui:Einstellungen}}, {{ui:Allgemein}} wählt Symbole, Beschriftungen oder beides für diese Schaltflächen, zeigt oder verbirgt die Gruppennamen, und ein Rechtsklick auf die Symbolleiste ordnet ihre Werkzeuge und Gruppen an. In einem niedrigen Fenster lässt die Symbolleiste die Namen unter ihren Symbolen weg.
- **Projekt- oder Familiendatei**: die Dateikarte, mit Vorschaubild, Projektinformationen und verknüpften Dateien. Siehe [Eine Projekt- oder Familiendatei lesen](topic:read-rvt-file).
- **DWG oder DXF**: eine Reihe von Reitern ({{ui:Modell}}, dann einer pro Blatt, dann {{ui:Ausstattung}}, wenn die Zeichnung getaggte Ausstattung hat, {{ui:3D}}, {{ui:Einpassen}} und {{ui:Druckansicht}}), die Zeichnung und lebendige X- und Y-Koordinaten in einer Ecke. Siehe [Eine DWG- oder DXF-Zeichnung ansehen](topic:view-dwg) und [Eine DWG- oder DXF-Zeichnung in 3D sehen](topic:dwg-in-3d).
- **Ordner**: der Ordnerbericht, mit dem Feld {{ui:Hier beginnen}} und Tabellen von Modellen, Verknüpfungen, IFC-Modellen und Zeichnungen. Siehe [Einen ganzen Projektordner öffnen](topic:open-project-folder).

Die **Statuszeile** unten auf der Bühne sagt, was BimCraft gerade tut („Reading the model…“, „Building geometry: 1200 of 5400 elements“) und, in Rot, was schiefgegangen ist, wenn etwas fehlschlägt. Meldungen über Erfolg verblassen nach ein paar Sekunden.

## Der Bereich Eigenschaften

Der rechte Bereich zeigt:

- Bei einem IFC-Modell: das Bauteil, das Sie angeklickt haben, mit Namen, Typ, Tag, GlobalId und jedem Eigenschaftssatz. Werte, die Sie ändern können, sehen wie Schaltflächen aus. Siehe [Felder des Eigenschaftenbereichs](topic:properties-panel).
- Bei einer Zeichnung: wie Sie sich bewegen, die verknüpften Zeichnungen und Bilder der Zeichnung und ob jedes gefunden wurde, und eine Liste dessen, was **Not drawn yet** ist.
- Bei einer Dateikarte oder einem Ordner: einen kurzen Hinweis, was Sie als Nächstes öffnen können.

## Auf einem kleinen Bildschirm

Ist das Fenster schmaler als ein Laptop-Bildschirm, stapelt BimCraft seine Flächen: oben die Bühne, darunter die Bereiche. Scrollen Sie die Seite, um die Bereiche zu erreichen. Auf einem Telefon bilden sie eine Spalte, auf einem Tablet zwei.

## Bildschirmmodi

Die Schaltfläche {{ui:Vollbild}} in der App-Leiste oder {{key:Ctrl+Shift+F}} auf jeder Plattform schaltet durch drei Modi:

1. Normal.
2. Vollbild, bei dem die Leisten weiterhin sichtbar sind.
3. Vollbild bei ausgeblendeter App-Leiste. Den Zeiger an den oberen Rand bewegen oder dort tippen, um sie zurückzuholen.

{{key:Esc}} drücken, um zu normal zurückzukehren. Browser ohne Vollbild-Unterstützung (etwa auf einem iPhone) wechseln nur zwischen normal und ausgeblendeten Leisten.

## Siehe auch

- [Tasten und Maus](topic:keyboard)
- [Dateien, die BimCraft öffnet und speichert](topic:files)
