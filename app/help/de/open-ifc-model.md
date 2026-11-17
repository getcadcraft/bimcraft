---
title: Ein IFC-Modell öffnen und in 3D umsehen
summary: Eine IFC-Datei öffnen, drehen, verschieben und zoomen und mit Einpassen, Oben, Vorne und Seite die Orientierung behalten.
keywords: ifc, 3D, Orbit, Pan, Zoom, Einpassen, Draufsicht, Vorderansicht, Seitenansicht, navigieren, ViewCube, Kamera
from: 68b460dd
---

## Was Sie tun

Öffnen Sie ein IFC-Modell, bewegen Sie sich darin in 3D und springen Sie zu den Standardansichten. Etwa fünf Minuten.

Sie brauchen eine `.ifc`-Datei. Die meisten BIM-Programme exportieren eine; in Revit ist es **Datei > Exportieren > IFC**. Siehe [Eine Projektdatei über IFC in 3D bringen](topic:rvt-to-ifc).

## Schritte

1. Klicken Sie auf {{ui:Datei wählen}} (oder auf den Ablagebereich oben links).
2. Wählen Sie Ihre `.ifc`-Datei und bestätigen Sie.
3. Warten Sie, bis die Statuszeile fertig ist. Sie zeigt beim ersten Mal „IFC-Engine wird gestartet…“, dann „Modell wird gelesen…“ und „Geometrie wird erstellt: … von … Bauteilen“.
4. Sehen Sie sich das Modell an: Es öffnet sich in einer Dreiviertelansicht, eingepasst in den Bildschirm.
5. Klicken Sie in der Werkzeugleiste über dem Modell auf {{ui:Oben}}, um senkrecht von oben zu schauen.
6. Klicken Sie auf {{ui:Vorne}} für die Vorderansicht und dann auf {{ui:Seite}} für die Seitenansicht.
7. Klicken Sie auf {{ui:Einpassen}} oder drücken Sie {{key:F}}, um zur Dreiviertelansicht des ganzen Modells zurückzukehren.

## Was Sie sehen sollten

- Das Modell in der Mitte, mit dünnen dunklen Kanten für eine zeichnungsähnliche Darstellung.
- Der Bereich {{ui:Datei}} links: Dateiname, Größe, IFC-Schema (zum Beispiel IFC2X3 oder IFC4), Projektname, Phase, das Programm, aus dem sie exportiert wurde, Autor, Exportdatum sowie die Anzahl der Bauteile und Dreiecke.
- Die Listen {{ui:Geschosse}} und {{ui:Bauteile}} darunter.
- Die Statuszeile: „Geöffnet *Dateiname*: *n* Bauteile in *s* s“.

## Bewegen

:::mouse
| Ziel | So geht's |
|---|---|
| Orbit | Mit der linken Taste ziehen |
| Pan | Mit der rechten Taste ziehen oder {{key:Shift}} (oder {{key:Mod}}) halten und mit der linken Taste ziehen |
| Zoom | Am Mausrad scrollen oder mit der mittleren Taste ziehen |
| Alles sehen | {{key:F}} drücken oder auf {{ui:Einpassen}} klicken |
:::

:::mac mouse
Am Trackpad: mit einem gedrückten Finger ziehen, um zu orbitieren; {{key:Shift}} oder {{key:Mod}} halten und ziehen, um zu verschieben; mit zwei Fingern scrollen oder zum Zoomen zusammenziehen. Ein Klick mit zwei Fingern ist ein Rechtsklick, und Sie können damit ziehen, um zu verschieben, aber {{key:Shift}} und Ziehen ist einfacher.
:::

:::touch
| Ziel | So geht's |
|---|---|
| Orbit | Mit einem Finger ziehen |
| Zoom | Mit zwei Fingern zusammenziehen |
| Pan | Zwei Finger gemeinsam bewegen |
| Alles sehen | Auf {{ui:Einpassen}} tippen |
:::

Orbit dreht sich immer um einen Punkt in der Mitte des Modells. Pan verschiebt diesen Punkt, daher kann sich die Drehung nach einem langen Verschieben außermittig anfühlen: Klicken Sie auf {{ui:Einpassen}}, um sie zurückzusetzen.

## Schattiert, mit Kanten oder Drahtmodell

Drei kleine Schaltflächen direkt über dem ViewCube bestimmen, wie das Modell gezeichnet wird: {{ui:Schattiert}}, {{ui:Schattiert mit Kanten}} (der Standard) und {{ui:Drahtmodell}}. Sie sind auch Befehle (Ansicht in den Menüs und in der Liste Anpassen), daher können sie eigene Tasten haben. {{ui:Grundriss}}, {{ui:Teilen}} und {{ui:3D}} finden Sie in der Zeile {{ui:Ansicht}} der Werkzeugleiste.

## Häufige Fehler

- **Benannte Ansichten erwarten.** BimCraft hat vier feste Ansichten ({{ui:Einpassen}}, {{ui:Oben}}, {{ui:Vorne}}, {{ui:Seite}}), den ViewCube unten rechts und freies Orbit. Es speichert keine Ansichten.
- **Nach Grundrissen und Schnitten suchen.** In diesem Build gibt es keine 2D-Grundrisse oder Schnittboxen. Schneiden Sie das Modell mit einer einzigen {{ui:Schnitt}}-Ebene ([Ein IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)) oder schalten Sie Geschosse aus: [Geschosse, Räume und Kanten anzeigen und ausblenden](topic:storeys-and-spaces).
- **Eine Projektdatei öffnen und 3D erwarten.** Eine Projektdatei öffnet sich als Dateikarte. Exportieren Sie zuerst IFC.
- **Eine `.ifczip`-Datei öffnen.** Entpacken Sie sie oder exportieren Sie eine einfache `.ifc`-Datei.
- **Ein sehr großes Modell macht den Tab langsam oder lässt ihn abstürzen.** Siehe [Browser, Geräte und Speicher](topic:platforms).

## Weiter

[Ein Bauteil wählen und seine Eigenschaften lesen](topic:inspect-element).
