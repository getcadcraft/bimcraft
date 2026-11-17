---
title: Modell als Collada oder für Google Earth exportieren
summary: Die geöffneten IFC-Modelle als Collada-Datei (.dae) für Blender und andere 3D-Programme oder als Google-Earth-Paket (.kmz) schreiben, das an der Position des Modells auf der Karte platziert wird.
keywords: collada, dae, kmz, kml, google earth, blender, export, Geolokalisierung, Georeferenzierung, Breitengrad, Längengrad, Standort, 3D-Programme
from: 81cfec09
---

{{ui:Collada}} in der Symbolleiste (oder {{ui:Collada (.dae, .kmz) exportieren…}} im Menü Datei der Menü- und Menüband-Stile) schreibt das Geöffnete als Collada 1.4.1: jedes angezeigte Modell, verbundene Modelle dort, wo Sie sie platziert haben.

## Exportieren

1. {{ui:Collada}} wählen.
2. Das Format wählen:
   - {{ui:Collada-Datei (.dae), für Blender und andere 3D-Programme}}.
   - {{ui:Google-Earth-Paket (.kmz): das Modell an seiner Position auf der Karte}}. Wird nur angeboten, wenn das Modell einen Standort hat.
3. Die Optionen wählen, dann {{ui:Exportieren}}. Die Datei wird heruntergeladen, und die Statusleiste zeigt, wie viele Elemente aufgenommen wurden.

| Option | Wirkung |
|---|---|
| {{ui:Standort in die Datei schreiben}} | Fügt Breitengrad, Längengrad, Höhe und Richtung des Ursprungs der Datei in die .dae ein |
| {{ui:Höhe}} | {{ui:Am Boden: Ebene 0 des Modells liegt auf dem Gelände}}, oder {{ui:Die eigene Höhe des Modells über dem Meeresspiegel}} |
| {{ui:Räume und Spaces einschließen}} | Spaces werden ebenfalls aufgenommen (standardmäßig ausgelassen) |
| {{ui:Ausgeblendete Bauteile einschließen}} | Ausgeblendete Elemente werden ebenfalls geschrieben (standardmäßig nur das, was Sie sehen) |

## Was in der Datei steckt

| Im Modell | In der Collada-Datei |
|---|---|
| Gebäude, Geschosse | Verschachtelte Knoten, Geschosse nach Höhe geordnet; Elemente ohne Geschoss unter „Nicht platziert“ |
| Jedes Element | Ein Knoten mit eigenem Netz, benannt wie im Modell (sein Name, sonst Klasse und Tag) |
| Klasse, GlobalId, vordefinierter Typ | Im Extra-Datenbereich des Knotens (Profil IFC), mit dem genauen Namen (Profil ModelCraft) |
| Farben | Materialien, mit Transparenz |
| Einheiten und Achsen | Meter, Z nach oben. Ebene 0 des vorderen Modells liegt auf Höhe 0 |

Das Modell bleibt über dem Gelände nahe am Ursprung, damit Programme, die mit einfacher Genauigkeit rechnen, es ohne Zittern anzeigen. ModelCraft schreibt seine Collada-Dateien mit demselben Schreibmodul und öffnet diese Dateien mit ihren Elementnamen.

## Woher der Standort kommt

Das vordere Modell liefert den Standort, so wie {{ui:Messen}} Breiten- und Längengrad eines Punktes ermittelt:

- Eine Kartenumrechnung (IFC4 IfcMapConversion oder die Eigenschaftssätze von IFC2X3) über das Koordinatensystem des Modells. Ein System, das Sie für das Modell gewählt haben, hat Vorrang vor dem, das die Datei nennt.
- Sonst Breiten- und Längengrad des Grundstücks (näherungsweise, für ein Grundstück ausreichend).

Die Richtung wird gemessen, nicht angenommen: Sie berücksichtigt die Drehung der Karte, die geografische Nordrichtung und die Meridiankonvergenz der Karte. Um einem Modell einen Standort zu geben, verwenden Sie {{ui:Kartenursprung…}} unter {{ui:Messen}}.

## In anderen Programmen

- **Google Earth** liest die .kmz-Datei: Das Modell erscheint am Standort, nach Norden ausgerichtet. Eine einfache .dae enthält keinen Ort, den Google Earth lesen kann; verwenden Sie die .kmz.
- **Blender** (4.x und früher): File, Import, Collada (.dae). Jedes Element kommt als eigenes Objekt mit seinem Material. Der Standort wird in den Extra-Daten der Datei gespeichert, die Blender nicht liest. Blender 5.0 hat seinen eingebauten Collada-Import entfernt; dort verwenden Sie stattdessen {{ui:USD}} oder den glTF-Export, oder Sie öffnen die .dae in Blender 4.5 und speichern eine .blend.

Unsere Tests prüfen jede Datei gegen das Collada-1.4.1-Schema und lesen sie mit einem unabhängigen Collada-Leser zurück. In Blender oder Google Earth geöffnet haben wir sie nicht.
