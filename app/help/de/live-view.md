---
title: Die Live-Ansicht
summary: Ein Bereich neben dem Modell, der es im Echtzeit-Look zeigt, mit Sonne, Schatten und indirektem Licht, und der jede Ihrer Änderungen nachvollzieht; gehen Sie hindurch und stellen Sie Tageszeit und Monat ein.
keywords: Live-Ansicht, Echtzeit, Echtzeit-Rendering, Rundgang, gehen, Ich-Perspektive, Präsentation, Kunde, zweiter Bildschirm, zweites Fenster, Monitor, Tageszeit, Sonne, Jahreszeit, Monat, Schatten, Umgebungsverdeckung, Spiegelungen, indirektes Licht, globale Beleuchtung, WebGPU, WebGL
from: ea5c02bf
---

Die Live-Ansicht zeigt das Modell im Echtzeit-Look: den Himmel und die Sonne nach dem Standort und Datum Ihres Grundstücks, die Schatten der Sonne, die Anstriche und Materialien, die Sie den Elementen gegeben haben, Lampen sowie Licht, das von Wänden und Böden zurückgeworfen wird. Sie folgt dem, was Sie tun: Drehen Sie die 3D-Ansicht, dreht sie sich mit; ändern Sie das Modell, zeigt sie die Änderung kurz darauf. Nichts wird hochgeladen.

Sie zeichnet dieselbe Szene, dieselben Anstriche, Lampen und Sonne wie [Ein Bild rendern](topic:render). Für ein fertiges Bild verwenden Sie dieses.

## Öffnen

1. Öffnen Sie ein Modell und wählen Sie in der Symbolleiste {{ui:Live-Ansicht}}. Der Bereich öffnet sich über der Anwendung, unten rechts.
2. Ziehen Sie seine Titelleiste, um ihn zu verschieben, und ziehen Sie an seiner Ecke, um ihn größer zu machen.
3. {{ui:Live-Ansicht in neuem Fenster}} (die Schaltfläche daneben) oder {{ui:Neues Fenster}} im Bereich verschiebt ihn in ein eigenes Fenster, etwa für einen zweiten Bildschirm. Blockiert Ihr Browser Pop-up-Fenster, öffnet er sich als Bereich.
4. {{ui:Schließen}} schließt ihn.

## Die Bedienelemente

| Bedienelement | Was es tut |
|---|---|
| {{ui:Ansicht folgen}} | Ein: die Live-Ansicht schaut dorthin, wohin die 3D-Ansicht schaut. Gehen schaltet es aus |
| {{ui:Rundgang}} | Durch das Modell gehen (unten) |
| {{ui:Schwerkraft}} | Beim Gehen: auf Böden stehen und Treppen steigen. Aus: fliegen |
| {{ui:Uhrzeit}} | Die Stunde des Tages. Die Sonne wandert, während Sie ziehen |
| {{ui:Monat}} | Der Monat, damit Sie die Sonne im Winter und im Sommer sehen |
| {{ui:Qualität}} | {{ui:Für diesen Computer}}, oder {{ui:Niedrig}}, {{ui:Mittel}} oder {{ui:Hoch}} |

Die Zeile unten zeigt, was die Ansicht zeichnet (WebGPU oder WebGL 2), die Qualität und das indirekte Licht.

## Durch das Modell gehen

1. Drehen Sie die 3D-Ansicht dorthin, wo Sie stehen möchten, und wählen Sie {{ui:Rundgang}}. Sie stehen auf dem Boden unter dem Augpunkt der Ansicht, 1.6 m groß.
2. Klicken Sie in die Live-Ansicht und nutzen Sie dann {{key:W}} {{key:A}} {{key:S}} {{key:D}} oder die Pfeiltasten. Halten Sie {{key:Shift}} gedrückt, um zu laufen. Ziehen Sie, um sich umzusehen.
3. Stufen bis 40 cm werden erklommen (Treppen); alles Höhere ist eine Wand. Wände halten Sie auf, und Sie gleiten an ihnen entlang.
4. Bei ausgeschalteter {{ui:Schwerkraft}} fliegen Sie: {{key:E}} geht nach oben, {{key:Q}} nach unten.
5. {{key:Esc}} beendet das Gehen.

## Indirektes Licht

Licht, das von einer besonnten Wand auf den Boden reflektiert wird, und das dunklere Innere eines Raumes werden im Hintergrund auf allen Prozessorkernen berechnet. Während es arbeitet, zeigt die untere Zeile {{ui:Indirektes Licht: 40 %}}; ist es fertig, übernimmt die Ansicht es. Nach einer Änderung beginnt es von neuem.

:::note
Dies ist eine Näherung für eine Live-Ansicht, kein gerendertes Bild: Kleine Details zwischen den Punkten erhalten das indirekte Licht der nahen Punkte.
:::

:::note
Browser unterscheiden sich. Hat der Browser WebGPU, nutzt die Live-Ansicht es; sonst nutzt sie WebGL 2 und sieht gleich aus. Ohne beides meldet der Bereich das.
:::
