---
title: Räume und Raumtrennlinien
summary: Wählen Sie einen Raum, um ihn zu benennen und zu nummerieren, und lesen Sie seine Fläche, seinen Umfang und sein Volumen ab. Zeichnen Sie eine Raumtrennlinie, wo zwei Räume ohne Wand zwischen ihnen aneinanderstoßen.
keywords: Raum, Räume, Raumtrennlinie, Trennlinie, Raum (Space), IfcSpace, Name, Nummer, Fläche, Umfang, Volumen, offener Grundriss, Raum teilen, Küche und Wohnen, nicht umschlossen
from: d4c1d66b
---

## Was Sie tun

Benennen Sie die Räume, die die Wände bilden, und teilen Sie einen offenen Raum ohne Wand in zwei.

## Wo die Werkzeuge sind

- Menüband-Layouts: {{ui:Architecture}} › **Raum und Fläche** › {{ui:Room}} und {{ui:Room Separator}}.
- Klassisches Layout: Leiste {{ui:Draw}} › Menü {{ui:Rooms}}.
- Jeder Menüstil: Die Befehle heißen Room und Room Separator; die Befehlspalette findet sie.

## Schritte

1. Zeichnen Sie die Wände. Jede geschlossene Wandschleife ist bereits ein Raum: BimCraft erstellt ihn, nummeriert ihn und gibt ihm seine Fläche, während Sie zeichnen.
2. Wählen Sie {{ui:Room}}. Bewegen Sie den Zeiger über den Grundriss: Der Raum unter dem Zeiger leuchtet mit seiner Fläche, seinem Umfang und seinem Volumen auf.
3. Um Räume schnell zu benennen, geben Sie zuerst in der Zeile einen {{ui:Name}} und eine {{ui:Number}} ein und klicken Sie dann in den Raum. Die Nummer zählt für den nächsten Raum um eins weiter (101, 102; A-09, A-10).
4. Oder klicken Sie einfach auf einen Raum: Er wird gewählt, und die Eigenschaften zeigen Name, Nummer, Fläche, Umfang, Volumen und seine Kennzeichnung.
5. Um einen offenen Raum zu teilen, wählen Sie {{ui:Room Separator}} und klicken Sie zwei Punkte an: von Wand zu Wand oder von Wand zu einer anderen Trennlinie. Klicken Sie weiter für eine Kette; Enter, Esc oder ein Doppelklick beendet sie.

## Was eine Trennlinie bewirkt

- Sie begrenzt Räume wie eine Wand ohne Dicke. Die Flächen der beiden Räume ergeben zusammen genau den ursprünglichen Raum.
- Der Raum, der die Mitte des alten Raums enthält, behält seinen Namen und seine Nummer. Der andere ist neu.
- Eine Trennlinie, die im Freien endet und an einem Ende nichts berührt, teilt nichts. Verlängern Sie sie, dann tut sie es.
- Der Teil einer Trennlinie, der innerhalb einer Wand liegt, wird ignoriert, sodass Sie auf die Wandmittellinien einrasten können.
- Wählen Sie eine Trennlinie und drücken Sie Delete, um sie zu entfernen: Die beiden Räume werden wieder einer. Rückgängig setzt sie zurück.

## Wenn dort, wo Sie klicken, kein Raum ist

Die Statuszeile sagt es: Die Wände schließen dort nicht. Schließen Sie die Lücke oder zeichnen Sie eine Trennlinie darüber. Nichts wird abgelehnt; es gibt nur noch keinen geschlossenen Raum.

## Im IFC

Ein Raum ist ein IfcSpace mit seiner Nummer (Name), seinem Namen (LongName) und Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Das Volumen ist die Fläche mal die Höhe bis zum Geschoss darüber.

Eine Raumtrennlinie ist ein IfcVirtualElement, die Entität, die IFC für eine nicht gebaute Begrenzung hat. Sie hat eine Linie und keinen Körper, sodass ein anderes Programm dafür keine Wand liest und nichts zählt.

## Noch nicht umgesetzt

- Gekrümmte Trennlinien.
- Ein Raum, der einer geneigten Decke folgt: Das Volumen ist immer Fläche mal Geschosshöhe.
- Raumbegrenzungsbeziehungen (IfcRelSpaceBoundary) werden weder für Wände noch für Trennlinien geschrieben.

Siehe auch [Raum- und Flächenkennzeichnungen](topic:room-and-area-tags), [Flächen und Flächengrenzen](topic:areas-and-area-boundaries).
