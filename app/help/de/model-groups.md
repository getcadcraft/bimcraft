---
title: Modellgruppen
summary: Gewählte Bauteile zu einer benannten Gruppe machen, die Gruppe an anderer Stelle erneut platzieren und eine Kopie ändern, um alle zu ändern.
keywords: Gruppe, Modellgruppe, Gruppieren, Gruppierung aufheben, Instanz, Kopie, Wiederholung, Regeleinheit, Achsfeld, Wohnung, Gruppe bearbeiten, IfcGroup
from: 121c5027
---

## Was Sie tun

Gruppieren Sie ein typisches Achsfeld, platzieren Sie es mehrfach und ändern Sie jede Kopie, indem Sie eine ändern.

## Wo das Werkzeug ist

- Menüband-Layouts: {{ui:Architektur}} › **Modell** › {{ui:Modellgruppe}}.
- Klassisches Layout: die Leiste Zeichnen › Menü {{ui:Räume}} › Modellgruppe.

## Schritte

1. Wählen Sie mit Auswählen die Bauteile: Klicken Sie eines an, dann Strg+Klick oder Shift+Klick auf die anderen.
2. Wählen Sie {{ui:Modellgruppe}}. Sie werden sofort zu einer Gruppe. Geben Sie vorher in der Zeile einen {{ui:Gruppenname}} ein, um sie zu benennen, oder geben Sie danach einen ein, um sie umzubenennen.
3. Drücken Sie {{ui:Weitere platzieren}} und klicken Sie dort, wo die Kopie stehen soll: Ihre untere linke Ecke wird an den Klickpunkt gesetzt.
4. Ändern Sie eine beliebige Kopie: ein Wandende verschieben, eine Tür in der Größe ändern, eine Stütze löschen. Jede andere Kopie der Gruppe ändert sich im selben Schritt, und ein einziges Rückgängig nimmt alles zurück.
5. Solange {{ui:Modellgruppe}} aktiv ist, wählt ein Klick auf ein Bauteil die gesamte Gruppe.

## Weitere Möglichkeiten

- {{ui:Gewählte hinzufügen}}: fügt der zuletzt gewählten Gruppe weitere Bauteile hinzu.
- {{ui:Gruppierung aufheben}}: Diese Kopie wird wieder zu gewöhnlichen Bauteilen. Die anderen Kopien bleiben eine Gruppe.
- Verschieben Sie eine ganze Kopie mit {{ui:Verschieben}}: Sie bleibt dieselbe Gruppe an einem neuen Ort; die anderen werden nicht verschoben.
- Löschen Sie die Bauteile einer Kopie, dann ist diese Kopie verschwunden.

## Was in einer Gruppe sein kann

Wände mit ihren Türen und Fenstern, Stützen und gezeichnete Böden können erneut platziert und gleich gehalten werden. Eine Gruppe darf auch andere Bauteile enthalten, dann kann sie aber noch nicht erneut platziert werden; die Zeile nennt den Grund.

Kopien werden verschoben, nicht gedreht oder gespiegelt.

## Im IFC

Eine Gruppe ist ein IfcGroup mit einer IfcRelAssignsToGroup zu ihren Mitgliedern, die gewöhnliche Wände, Stützen und Böden bleiben. Jede Kopie einer Gruppe trägt dieselbe Definitions-ID.

## Noch nicht umgesetzt

- Drehen oder Spiegeln einer Kopie.
- Treppen, Dächer, Raumböden und Bibliothekselemente in einer Gruppe, die erneut platziert wird.
- Das Profil, die Neigung und die Wandöffnungen einer Wand werden nicht auf Kopien übertragen.
- Gruppen in Gruppen.

Siehe auch [Verschieben, Ausrichten und Verteilen](topic:move-align-distribute).
