---
title: In Originalgröße zeichnen, nach Maßstab beschriften
summary: Das Gebäude wird immer in Originalgröße gezeichnet. Text, Bemaßungen, Kennzeichnungen, Raumnamen, Rasterblasen und Symbole werden auf dem Papier bemessen, in Millimetern wie gedruckt, und behalten diese Größe, wenn sich der Maßstab einer Zeichnung von 1:100 auf 1:50 ändert.
keywords: Beschriftungsmaßstab, beschriftungsfähig, Textgröße, Texthöhe, Papierhöhe, Bemaßungstextgröße, Kennzeichnungsgröße, Raumnamengröße, Rasterblase, Symbolgröße, Zeichnungsmaßstab, 1:50, 1:100, Büronorm, Beschriftung, 1:1 zeichnen, Originalgröße, Blatttext
from: 94118788
---

## Was Sie tun

Legen Sie einmal für das Gebäude fest, wie hoch die Schrift Ihrer Zeichnungen auf dem Papier ist. Sie skalieren das Modell nie und ändern die Textgröße nie für einen Maßstab: BimCraft errechnet die Größe aus der Papierhöhe und dem Maßstab der Zeichnung.

## So funktioniert es

- Das Modell ist in Originalgröße. Eine 10 m lange Wand ist in jedem Maßstab 10 000 mm lang.
- Eine Beschriftung hat eine **Papierhöhe**: die Höhe eines Großbuchstabens auf dem gedruckten Blatt, in Millimetern.
- Bei einem Maßstab von 1:100 ist ein 2.5 mm hoher Text im Modell 250 mm hoch; bei 1:50 sind es 125 mm. Auf dem Papier sind es in beiden Fällen 2.5 mm.
- Plansymbole (Elektro, Sanitär) werden in Papier-Millimetern gezeichnet und folgen derselben Regel.

## Schritte

1. Öffnen Sie den Projektbrowser. Klicken Sie unter {{ui:Sheets}} auf {{ui:Annotation sizes…}}.
2. Geben Sie eine Höhe in Millimetern für die Arten ein, die Sie festlegen möchten: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} und {{ui:Schedule text}}. Ein leeres Feld behält die eigene Größe von BimCraft bei, grau angezeigt.
3. Klicken Sie auf {{ui:Save}}. Das ist ein Schritt, den Sie rückgängig machen können.

Ab dann verwenden alle Blätter, der Zeichnungssatz, das PDF des Plans sowie die Ansichten und Schnitte diese Größen. Der Abstand zwischen einer Maßlinie und ihrem Text, die Größe einer Rasterblase und die Höhe einer Listenzeile wachsen mit ihrem Text.

## Ein Plan mit eigenem Maßstab

Geben Sie einem Plan einen Maßstab in seinem Ansichtsbereich ({{ui:Scale}}; siehe [Ansichten und Blätter](topic:views-and-sheets)). Dann:

- Auf dem Bildschirm werden Raumnamen, Kennzeichnungen, Bemaßungstext und Rasterblasen in ihrer gedruckten Größe gegenüber dem Modell gezeichnet, sodass Sie sehen, was das Blatt zeigen wird;
- Plansymbole und ihre Kennzeichnungen sind für diesen Maßstab bemessen. Ändern Sie den Maßstab von 1:100 auf 1:50, sind sie im Modell halb so groß und auf dem Papier gleich groß.

Ein Plan ohne eigenen Maßstab behält seinen festen Bildschirmtext, und seine Symbole sind wie bisher für 1:50 bemessen (1/4" = 1'-0" in Fuß und Zoll).

## Die Größen Ihres Büros

Mit eingeschaltetem Add-on Default Policies legen Sie die Höhen des Büros fest unter Einstellungen › Global › Default Policies › {{ui:Annotation sizes on paper}}. Ein neues Gebäude übernimmt sie, wenn Sie auf Erstellen klicken. In einem bereits begonnenen Gebäude enthält der Dialog {{ui:Use my office's sizes}}. Siehe [Default Policies](topic:default-policies).

## Die Größen eines Regelwerk-Packs

Ein Regelwerk-Pack kann die Texthöhen vorgeben, die sein Gebiet verlangt (das Add-on Building regulations, Zeichenkonventionen). Haken Sie das Pack unter Einstellungen › Building regulations an und klicken Sie dann im Dialog auf {{ui:Use a regulation pack's sizes}}: Die Felder füllen sich, Sie prüfen sie und speichern. Eine Größe, die ein Pack in Punkt angibt, ist eine Schriftgröße und wird in eine Großbuchstabenhöhe umgerechnet, prüfen Sie sie also. Erst beim Speichern wird etwas festgelegt.

## Was Sie sehen

- Dieselbe Texthöhe in Millimetern auf einem Blatt bei 1:100 und auf einem Blatt bei 1:50, während der Plan bei 1:50 doppelt so groß ist.
- Die Größen reisen mit dem Gebäude: Sie werden in seiner IFC-Datei gespeichert.

## Gut zu wissen

- Die eigenen Größen von BimCraft sind die, die seine Blätter schon immer verwendet haben (etwa 1.5 mm Großbuchstaben für Bemaßungstext). Sie sind keine Zeichennorm: Legen Sie die Ihres Büros fest.
- Eine Höhe muss zwischen 0.5 und 50 mm liegen.
- Schriftfeld-Beschriftung und Legenden der Schlüsselnotizen gehören nicht dazu: Sie behalten ihre eigenen Größen.
