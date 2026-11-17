---
title: Mehrere IFC-Modelle gemeinsam ansehen
summary: Fügen Sie weitere IFC-Dateien zur Szene hinzu, etwa Architektur, Tragwerk und Technik, sehen Sie sie in denselben Koordinaten, verschieben oder verbergen Sie eines und wählen Sie, welches Sie bearbeiten.
keywords: föderieren, Föderation, föderiertes Modell, mehrere Modelle, mehrere Dateien, kombinieren, überlagern, Koordination, Fachdisziplin, Tragwerk, TGA, Technik, Versatz, Modell verschieben, aktives Modell, Modell hinzufügen
from: df0efbbf
---

## Was Sie tun

Betrachten Sie Modelle verschiedener Fachdisziplinen an einem Ort: das Architekturmodell mit den Tragwerks- und Technikmodellen darin. Jedes bleibt seine eigene Datei; BimCraft zeigt sie nur gemeinsam an.

## Schritte

1. Öffnen Sie das erste IFC-Modell wie gewohnt.
2. Klicken Sie links unter {{ui:Modelle}} auf {{ui:Modell hinzufügen…}} und wählen Sie eine oder mehrere IFC-Dateien. Jede erscheint in der Liste und in der 3D-Ansicht.
3. Entfernen Sie das Häkchen bei einem Modell, um es auszublenden; setzen Sie es wieder, um es erneut anzuzeigen.
4. Liegt ein Modell an der falschen Stelle (an einem anderen Vermessungspunkt), klicken Sie darunter auf {{ui:Verschieben}}, geben Sie ein, wie weit es entlang X, Y und Z in Metern verschoben werden soll, und klicken Sie auf {{ui:Übernehmen}}.
5. Das Modell mit dem Punkt ist das, das Sie bearbeiten. Klicken Sie auf den Punkt eines anderen Modells, um dieses zu bearbeiten.
6. Klicken Sie neben einem Modell auf ×, um es aus der Szene zu nehmen.

## Die Modelle des Teams öffnen

Wenn das geöffnete Modell eine Cloud-Datei in einem Teamprojekt ist, erscheint unter der Liste {{ui:Modelle des Teams öffnen}}. Es öffnet die anderen IFC-Modelle des Projekts neben diesem, jedes um den vom Projekt festgelegten Versatz verschoben. Modelle, die Ihnen verborgen sind, bleiben außen vor und werden gezählt; ein Modell, das das Projekt dreht, wird ungedreht geöffnet und ebenfalls gezählt; Dateien, die kein IFC sind (etwa eine DWG), werden übersprungen und in der Statuszeile genannt. Ein bereits geöffnetes Modell wird nie zweimal geöffnet. Die Schaltfläche ist bei einer Datei verborgen, die nicht in einem Teamprojekt liegt.

## Was Sie sehen sollten

- Jedes Modell in den Koordinaten des ersten Modells, so wie seine Datei es platziert. Modelle, die aus demselben Projekt exportiert wurden, fluchten ohne Verschieben.
- Wenn Sie ein Bauteil eines Modells wählen, das Sie nicht bearbeiten, werden seine Eigenschaften nur zum Lesen angezeigt, mit {{ui:Dieses Modell bearbeiten}} zum Wechseln.
- Die {{ui:Modellstruktur}}, {{ui:Geschosse}}, {{ui:Farbe}}, die Liste {{ui:Änderungen}}, das Platzieren von Bibliothekselementen und {{ui:Als IFC speichern}} arbeiten alle mit dem Modell, das Sie bearbeiten. Ausblenden, Isolieren, Durchsicht und {{ui:Alles auswählen}} wirken über alle Modelle.
- {{ui:Als IFC speichern}} lädt das Modell herunter, das Sie bearbeiten, nur mit seinen Änderungen.

## Häufige Fehler

- **Ein Modell liegt weit weg oder fehlt.** Seine Datei nutzt andere Koordinaten. Verwenden Sie {{ui:Einpassen}}, um es zu finden, und dann {{ui:Verschieben}}, um es an die richtige Stelle zu setzen.
- **Löschen oder Kopieren ist bei einem gewählten Bauteil ausgegraut.** Es gehört zu einem anderen Modell: Wechseln Sie zuerst zu diesem.
- **Wenn Sie eine Datei mit „Datei wählen“ öffnen, wird alles ersetzt.** Das startet eine neue Szene. Verwenden Sie {{ui:Modell hinzufügen…}}, um Dateien zu dem hinzuzufügen, das Sie bereits haben.

## Weiter

- [Elemente ausblenden, isolieren und durchsichtig machen](topic:hide-and-isolate)
- [Elemente nach einer Eigenschaft einfärben](topic:color-by-property)
