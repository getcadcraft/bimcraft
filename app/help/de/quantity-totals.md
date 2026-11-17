---
title: Mengen summieren, Elemente auflisten und Räume aufstellen
summary: Bauteile zählen und ihre Längen, Flächen, Volumen oder beliebige Zahleneigenschaften summieren, gruppiert nach einer beliebigen Eigenschaft; jede Zeile als ein Element auflisten oder die Räume mit ihren Flächen und Volumen aufstellen. Jedes lässt sich als CSV herunterladen.
keywords: Menge, Mengen, Mengenermittlung, Summen, Summe, Aufstellung, Leistungsverzeichnis, LV, qto, CSV, Gruppieren nach, zählen, Länge, Fläche, Volumen, Räume, Raumaufstellung, Flächenaufstellung, Elementliste
from: e2e7210c
---

## Was Sie tun werden

Holen Sie Summen aus einem Modell: Wandlängen je Geschoss, Türanzahlen je Typ, Deckenvolumen je Material, die Kosten jeder Zone.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Öffnen Sie {{ui:Mengensummen}} im linken Bereich.
3. Wählen Sie unter {{ui:Zählen}} {{ui:Jedes Bauteil}} oder nur die ausgewählten.
4. Wählen Sie unter {{ui:Gruppieren nach}} eine Eigenschaft, zum Beispiel {{ui:Klasse}}. Klicken Sie auf {{ui:Gruppe hinzufügen}}, um weiter aufzuteilen, bis zu dreimal, zum Beispiel nach {{ui:Geschoss}}.
5. Setzen Sie unter {{ui:Summieren}} Häkchen bei den Zahlen, die addiert werden sollen. Die Mengensätze des Modells sind zu Beginn angehakt.
6. Klicken Sie auf {{ui:CSV herunterladen}}, um die Tabelle in einer Tabellenkalkulation zu öffnen.

## Was Sie sehen sollten

- Eine Zeile je Gruppe mit der Anzahl ihrer Elemente und jeder Summe, dazu eine Summenzeile.
- Elemente ohne Wert werden gezählt, tragen aber nichts bei. In diesem Fall fügt die CSV neben der Summe eine Spalte „ausgelassen“ hinzu, damit Sie sehen, wie viele es sind.
- Zahlen stehen in den Einheiten der Datei, so wie die Datei sie speichert, bei Längen oft in Millimetern.

## Eine Zeile je Element oder die Räume

Ändern Sie {{ui:Anzeigen}}:

- **Eine Zeile je Element**: Jedes Element steht in einer eigenen Zeile, mit den Eigenschaften unter {{ui:Spalten}} und den Zahlen unter {{ui:Summieren}}. Die CSV beginnt mit der GlobalId jedes Elements. Klicken Sie auf den ersten Wert einer Zeile, um dieses Element auszuwählen.
- **Räume**: Jeder Raum mit seiner Nummer, seinem Namen, Geschoss, Fläche und Volumen sowie deren Summen. Flächen und Volumen stammen aus den Mengen des Raums, so wie die Datei sie angibt. Hat die Datei keine, werden sie aus der Form des Raums in m² und m³ gemessen und kursiv angezeigt. Die CSV zeigt an, welcher Wert welcher ist.

## Weiter

- [Elemente nach Klasse, Name oder Eigenschaft suchen](topic:find)
- [Elemente nach einer Eigenschaft einfärben](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Wählen Sie **Infrastruktur (IFC 4.3)** in der Ansichtenliste, um Straßen, Bahnen, Brücken und Wasserbauwerke je Klasse und Typ summiert zu sehen, mit der Länge, Fläche und dem Volumen, die die Datei selbst angibt. Eine Menge, die die Datei nicht angibt, bleibt leer und wird nie berechnet. **Infrastrukturmengen an TakeoffCraft senden** speichert eine Datei `.quantities.json`, die TakeoffCraft als typisierte Mengen öffnet.
