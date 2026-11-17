---
title: Zeichnungshinweise: ungewöhnliche Maße werden erstellt, mit Warnung
summary: BimCraft erstellt, was Sie verlangen. Ein Maß, das nicht dem Üblichen entspricht, wird zu einer Warnung unter Probleme; es hält das Zeichnen oder Speichern nie auf.
keywords: Hinweis, Warnung, Probleme, abgelehnt, zeichnet nicht, zu klein, zu schmal, Minimum, Grenze, Treppenbreite, Setzstufe, Auftritt, Stütze, Rampe, Türmaß, Rasterlinie, Geschosshöhe, Gaube, Wendeltreppe, Plattformneigung, kurze Wand, keine Sperren
from: 20090130
---

## Was Sie tun

Zeichnen Sie ein Maß, das nicht das übliche ist, und sehen Sie, wo BimCraft Sie darauf hinweist.

## Schritte

1. Zeichnen oder ändern Sie das Element wie gewünscht, zum Beispiel eine Treppe mit 400 mm Breite.
2. BimCraft erstellt es wie verlangt.
3. Öffnen Sie {{ui:Problems}} in der oberen Leiste. Unter **Zeichnungshinweise** steht eine Warnung, die das Element, das von Ihnen angegebene Maß und den üblichen Bereich nennt.
4. Klicken Sie auf die Warnung, um das Element zu wählen. Ändern Sie das Maß, wenn es ein Versehen war, oder lassen Sie es: eine Warnung kann akzeptiert werden, mit oder ohne Begründung.

## Was ein Hinweis ist

Diese wurden früher abgelehnt. Sie werden jetzt erstellt, jeweils mit einer Warnung:

- **Treppen**: schmaler als 500 mm oder breiter als 5 m; Setzstufen außerhalb von 100 bis 300 mm; Auftritte außerhalb von 150 bis 600 mm.
- **Wendeltreppen**: ein Pfosten außerhalb von 40 bis 400 mm; Auftritte unter 100 mm Tiefe auf der Laufline.
- **Stützen**: unter 50 mm Durchmesser oder unter 300 mm Höhe.
- **Rampen**: unter 300 mm breit.
- **Türen und Fenster**: unter 100 mm breit oder hoch.
- **Rasterlinien**: unter 100 mm lang.
- **Wände**: eine Wand, die unter 50 mm lang bleibt, zum Beispiel durch Stutzen.
- **Geschosse**: unter 1 m oder über 100 m hoch (neues Gebäude, geteilte Geschosse, Geschosshöhe).
- **Gauben**: außerhalb von 600 mm bis 12 m breit; eine Vorderwand außerhalb von 300 mm bis 4 m; ein Überstand über 1 m; Wände außerhalb von 50 bis 400 mm.
- **Gebäudeplattformen**: Seitenneigungen außerhalb von 1:1 bis 10:1.

## Was weiterhin abgelehnt wird

Nur was nicht gebaut oder nicht gefunden werden kann, und jeweils mit einer Meldung, die den Grund nennt:

- Ein Maß unter 10 mm (eine Wand unter 1 mm): Es gibt nichts zu bauen.
- Eine Gaube, die nicht breiter ist als das Doppelte ihrer Wandstärke: Ihre beiden Seitenwände würden sich treffen.
- Eine Gebäudeplattform mit Seitenneigungen steiler als 0.1:1 (das ist eine Stützmauer) oder flacher als 100:1 (die Geländemodellierung liefe endlos weiter).
- Etwas, das nicht dort passt, wo Sie es platziert haben, ein Umriss, der sich selbst kreuzt, oder ein Element, das nicht mehr im Modell ist.

## Gut zu wissen

- Der Hinweis wird aus dem Modell abgeleitet. Er ist daher wieder da, wenn Sie die Datei später öffnen, und er verschwindet, wenn das Maß korrigiert wird.
- Modellprüfungen, Regelwerkpakete und IDS-Prüfungen listen ebenfalls nur auf, was sie finden. Nichts unter {{ui:Problems}} hält das Zeichnen oder Speichern auf.
- Die üblichen Bereiche sind allgemeine Praxis, keine Bauordnung. Für eine Bauordnung fügen Sie das Add-on Bauvorschriften hinzu und wählen Ihren Ort.

## Weiter

- [Ein Modell auf häufige Probleme prüfen](topic:model-checks)
- [Treppen und Geländer](topic:stairs-and-railings)
