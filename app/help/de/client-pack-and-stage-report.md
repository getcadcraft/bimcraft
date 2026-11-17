---
title: Kundenpakete, Phasenberichte und Variantenvergleich
summary: Erstellen Sie ein Kundenpaket oder einen Phasenbericht aus dem Modell, mit Baukörpervarianten im Vergleich nach Fläche und Kosten, Geschossflächen, den Zeichnungen mit ihren Revisionen und der Ausgabehistorie. Jede Zahl behält die Elemente, auf denen sie beruht.
keywords: Kundenpaket, Präsentation, Phasenbericht, Bericht, Variantenvergleich, Varianten, Varianten vergleichen, Fläche und Kosten, Kosten je Variante, kein Satz, Baukörper, Geschossflächen, Zeichnungsliste, Ausgabehistorie, Zahlen, verknüpfte Zahlen
from: f6679bf5
---

## Was Sie tun

Erstellen Sie ein Kundenpaket oder einen Phasenbericht aus dem Modell, so wie es jetzt ist, und vergleichen Sie behaltene Baukörpervarianten nebeneinander nach Fläche und Kosten.

## Schritte

1. Öffnen Sie im linken Bereich **Kundenpaket und Phasenbericht**.
2. Wählen Sie neben Kundenpaket oder Phasenbericht die Option **In Dokumente öffnen**. Das Dokument erscheint unter Dokumente aus dem Modell, wo Sie seinen Text ändern können.
3. Klicken Sie in der Vorschau auf eine Abbildung, um die Elemente zu wählen, auf denen sie beruht.
4. Wählen Sie **Paket erstellen**. Es wird eine ZIP-Datei gespeichert: das Dokument als PDF, ein Bild der 3D-Ansicht und `figures.csv`, das jede Abbildung mit den GlobalIds ihrer Elemente auflistet.

## Die Felder

Sie können diese in jedem Dokument verwenden.

| Feld | Was gedruckt wird |
|---|---|
| `{{stage}}` | Die Projektphase aus den Zeichnungsangaben. |
| `{{options}}` | Die behaltenen Baukörpervarianten nebeneinander: Geschosse, Höhe, Grundfläche, Bruttogeschossfläche, Hülle und Kosten. |
| `{{areas}}` | Geschossfläche je Geschoss, aus den Räumen. |
| `{{sheets}}` | Die Blätter mit der Revision, auf der sie stehen, und dem Datum der letzten Ausgabe. |
| `{{issues}}` | Die Ausgabehistorie und das Änderungsprotokoll der Zeichnungen. |
| `{{changes}}` | Was sich seit der letzten Ausgabe geändert hat, Blatt für Blatt. |

## Wie Varianten kalkuliert werden

Die Kosten stammen nur aus der Preistabelle Ihres Projekts (Energy/Cost, 5D-Kosten). Nichts wird für Sie geschätzt.

- Eine Preiszeile bewertet eine Variante nur, wenn ihre Klassen `IfcBuildingElementProxy` nennen.
- Die Geschossfläche wird von einer Zeile bewertet, deren Wörter die Nutzung der Variante nennen, etwa Büro. Ohne eine solche Zeile wird eine Zeile mit den Wörtern Bruttogeschossfläche oder Baumasse verwendet. Eine Zeile je m² verwendet die Bruttogeschossfläche. Eine Zeile je m³ verwendet das Volumen.
- Die Hülle (Umfang mal Höhe) wird von einer Zeile mit dem Wort Hülle oder Fassade bewertet.
- Eine Variante ohne passende Zeile zeigt **Kein Einheitspreis**. Eine Gesamtsumme wird nur gezeigt, wenn jeder verlangte Teil einen Einheitspreis hat.

## Gut zu wissen

- Behalten Sie Varianten mit **Als Variante behalten** in der Liste der Baukörper im Raumprogramm. Siehe Baukörpervarianten.
- Ein PDF kann keine Elemente auswählen. Außerhalb von BimCraft verknüpft `figures.csv` jede Abbildung mit ihren Elementen.

## Noch nicht umgesetzt

- Blätter und gezeichnete Ansichten werden nicht in das Dokument eingesetzt. Das Paket enthält nur ein Bild der 3D-Ansicht.
