---
title: Flächen und Flächengrenzen
summary: Brutto-Gebäudefläche oder vermietbare Fläche innerhalb von Grenzlinien messen, die Sie zeichnen oder von den Wänden übernehmen, und die Flächen in einer Liste ausgeben.
keywords: Fläche, Flächen, Flächengrenze, Flächenschema, Brutto-Gebäudefläche, Bruttogeschossfläche, GFA, vermietbar, Flächenplan, Flächenliste, Wände wählen, nicht umschlossen
from: c79f96d2
---

## Was Sie tun

Zeichnen Sie die Grenzen eines Flächenschemas, platzieren Sie Flächen darin und lesen Sie die Summen ab.

## Wo die Werkzeuge sind

- Layouts mit Multifunktionsleiste: {{ui:Architecture}} › **Raum & Fläche** › {{ui:Area}} und {{ui:Area Boundary}}.
- Klassisches Layout: die Zeichenleiste › Menü {{ui:Rooms}}.

## Schritte

1. Wählen Sie {{ui:Area Boundary}}. Wählen Sie in der Zeile das {{ui:Scheme}}: Brutto-Gebäude oder Vermietbar. Jedes Schema hat eigene Grenzen.
2. Wählen Sie unter {{ui:Make by}}, wie die Linien entstehen:
   - **Zeichnen**: Klicken Sie Punkt für Punkt.
   - **Wände wählen: Mittellinie**: Klicken Sie auf eine Wand, und ihre Mittellinie ist eine Grenze.
   - **Wände wählen: die angeklickte Seite**: Klicken Sie auf eine Wand auf der Seite, die Sie möchten; diese Seite ist die Grenze. Für die Brutto-Gebäudefläche klicken Sie auf die Außenseite der äußeren Wände.
3. Wählen Sie {{ui:Area}}. Wählen Sie dasselbe Schema, geben Sie bei Bedarf einen Namen, eine Nummer oder einen Typ ein und klicken Sie innerhalb der Grenzen.
4. Die Fläche wird sofort gemessen. Wählen Sie sie aus, um Name, Nummer oder Typ in den Eigenschaften zu ändern.

## Was wovon abhängt

- Eine Grenze, die durch Wandwahl entstanden ist, folgt dieser Wand: Verschieben Sie die Wand, wird die Fläche im selben Schritt neu gemessen.
- Eine von Ihnen gezeichnete Grenze bleibt dort, wo Sie sie gezeichnet haben.
- Wandseiten, die sich an einer Ecke treffen, treffen sich dort ebenfalls; vier gewählte Wände schließen eine Fläche ohne Lücken.
- Flächengrenzen werden im Plan angezeigt, während ein Raum- oder Flächenwerkzeug in der Hand ist, sodass sie den Plan sonst nicht überladen.

## Wenn die Grenzen nicht schließen

Die Fläche wird trotzdem platziert. Sie zeigt **Nicht umschlossen** und misst nichts, bis die Grenzen sie umschließen. Dies ist ein Hinweis: Nichts wird abgelehnt.

## Die Liste

Linker Bereich › {{ui:Schedules}} › **Flächen**: Schema, Nummer, Name, Typ, Ebene, Fläche und Umfang, mit einer Summe. Ein Klick auf eine Zeile wählt die Fläche aus. {{ui:Download CSV}} liefert dieselbe Tabelle.

## Im IFC

Eine Fläche ist ein IfcSpace ohne Körper: PredefinedType GFA für das Brutto-Gebäudeschema, USERDEFINED mit ObjectType Rentable für vermietbar. Sie trägt GrossFloorArea und GrossPerimeter, aber keine Nettofläche, damit sie nicht mit einem Raum verwechselt wird. Eine Grenze ist ein IfcVirtualElement.

## Noch nicht umgesetzt

- Eigene Schemata (nur Brutto-Gebäude und Vermietbar).
- Farbfüllungen nach Flächentyp.
- Regeln, die die Grenze für Sie setzen, etwa „bis zur Glaslinie“.

Siehe auch [Räume und Raumtrenner](topic:rooms-and-separators), [Raum- und Flächenkennzeichnung](topic:room-and-area-tags).
