---
title: Raum- und Flächenkennzeichnungen
summary: Setzen Sie eine Kennzeichnung mit Nummer, Name und Fläche auf einen Raum oder eine Fläche. Die Kennzeichnung folgt ihm und wird über ihre Höhe auf dem Papier bemessen.
keywords: Kennzeichnung, Raumkennzeichnung, Flächenkennzeichnung, Raum kennzeichnen, Fläche kennzeichnen, alle kennzeichnen, Beschriftung, Texthöhe, Papierhöhe, Annotation
from: 67059d8a
---

## Was Sie tun

Räume und Flächen einzeln oder alle auf einmal kennzeichnen und eine Kennzeichnung dorthin verschieben, wo sie gut lesbar ist.

## Wo die Werkzeuge sind

- Menüband-Layouts: {{ui:Architecture}} › **Raum und Fläche** › {{ui:Tag Room}} und {{ui:Tag Area}}.
- Klassisches Layout: Leiste {{ui:Draw}} › Menü {{ui:Rooms}}.
- Ein gewählter Raum oder eine Fläche: Eigenschaften › {{ui:Add a tag}}.

## Schritte

1. Wählen Sie {{ui:Tag Room}} und klicken Sie in einen Raum, dort wo die Kennzeichnung stehen soll.
2. Oder drücken Sie in der Zeile {{ui:Tag all untagged}}: Jeder Raum dieses Geschosses ohne Kennzeichnung erhält eine, in seiner Mitte. Es ist ein Schritt für Rückgängig.
3. Um eine Kennzeichnung zu verschieben, wählen Sie sie mit Auswählen und ziehen Sie sie. Die Eigenschaften haben {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} funktioniert für Flächen auf die gleiche Weise.

## Was eine Kennzeichnung bewirkt

- Sie zeigt Nummer, Name und Fläche, in Ihren Anzeigeeinheiten.
- Sie folgt ihrem Raum: Benennen Sie den Raum um oder verschieben Sie eine Wand, dann ändern sich Worte und Ort der Kennzeichnung im selben Schritt.
- Sie wird auf dem Papier bemessen: {{ui:Text height on paper}} ist in Millimetern (zum Start 2.5). Bei einem Ansichtsmaßstab von 1:50 ist eine 2.5 mm Kennzeichnung 125 mm hoch im Modell; bei 1:100 sind es 250 mm.
- Ein Raum mit Kennzeichnung zeigt die Kennzeichnung statt seiner einfachen Beschriftung.
- Wenn sein Raum oder seine Fläche verschwindet, geht die Kennzeichnung mit. Rückgängig holt beide zurück.

## Im IFC

Eine Kennzeichnung ist ein IfcAnnotation (ObjectType ROOMTAG oder AREATAG) mit ihrem Text als Textliteral und dem GlobalId dessen, was sie benennt. Der Text in der Datei gibt die Fläche in Quadratmetern an.

## Noch nicht umgesetzt

- Eigene Kennzeichnungsformen und eine Hinweislinie.
- Kennzeichnungen an Türen, Fenstern und Wänden sind ein eigenes Werkzeug (siehe die Kennzeichnungsstile der Blätter).

Siehe auch [Räume und Raumtrennlinien](topic:rooms-and-separators).
