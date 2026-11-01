---
title: Ein neues Gebäude beginnen
summary: Ein leeres Gebäudemodell mit seinen Geschossen erstellen, seine Wände zeichnen, Elemente aus der Bibliothek platzieren und als IFC speichern.
keywords: neu, neues Gebäude, leer, von Grund auf beginnen, Vorlage, Geschosse, Ebenen, Stockwerke, erstellen, Modell
from: 546b8ae8
---

## Was Sie tun werden

Ein Gebäudemodell aus dem Nichts beginnen, statt eines zu öffnen. BimCraft erstellt ein leeres IFC-Modell mit einem Projekt, einem Grundstück, dem Gebäude und seinen Geschossen. Sie können Ausstattung und Möbel aus der Bibliothek auf den Geschossen platzieren und als IFC-Datei speichern.

:::note
Wände lassen sich jetzt zeichnen: siehe [Wände zeichnen](topic:draw-walls). Türen, Fenster, Böden und Dächer folgen als Nächstes.
:::

## Schritte

1. Unter **Datei oder Ordner öffnen** oder auf der Startseite {{ui:Neues Gebäude}} anklicken.
2. Den **Gebäudenamen** tippen.
3. Wählen, wie viele **Geschosse** es hat (1 bis 200).
4. Die **Geschosshöhe** tippen, Oberkante Fußboden bis Oberkante Fußboden: zum Beispiel `10'-0"`, `10'6"` oder `3000 mm`. Eine einfache Zahl sind in den USA Fuß, sonst Millimeter.
5. {{ui:Erstellen}} anklicken. Die Geschosse werden ab 0 gestapelt, jedes eine Geschosshöhe über dem vorigen, und heißen Level 1, Level 2 und so weiter. Sie erscheinen im Modellbaum, und der Grundriss von Level 1 öffnet sich neben der 3D-Ansicht mit eingeschaltetem {{ui:Zeichnen}}.
6. Die Wände zeichnen: siehe [Wände zeichnen](topic:draw-walls). Geschosse umbenennen oder ihre Höhen ändern im Bereich **Levels**.
7. Elemente platzieren: siehe [Ausstattung und Möbel aus der Bibliothek platzieren](topic:place-from-library). Die Platzierungsleiste listet jedes Geschoss auf.
8. {{ui:Als IFC speichern}} anklicken. Die Datei heißt nach dem Gebäude, zum Beispiel `Smith's house.ifc`.

## Gut zu wissen

- Das Modell wird in Millimetern als IFC4 gespeichert. Andere BIM-Programme öffnen es.
- **Storeys** im linken Bereich listet nur Geschosse, auf denen etwas steht. Der Modellbaum listet alle.
- Bis Sie speichern, zählt das neue Gebäude als nicht gespeicherte Arbeit. BimCraft fragt nach, bevor Sie eine andere Datei öffnen oder die Seite verlassen, und behält in diesem Browser eine Kopie, falls der Tab sich schließt.
