---
title: Mit der Modellstruktur navigieren
summary: Ein IFC-Modell nach Projekt, Grundstück, Gebäude, Geschoss und Raum durchsuchen, mit seinen Bauteilen nach Art gruppiert; Kästchen setzen, um ein- und auszublenden, eine Zeile anklicken, um auszuwählen, Doppelklick zum Zoomen.
keywords: Modellstruktur, Struktur, räumliche Struktur, Browser, Gliederung, Navigator, Geschoss, Ebene, Boden, Raum, Gruppe, Klasse, ausblenden, anzeigen, auswählen, Auswahl, Zoom
from: 69de4ab7
---

## Was Sie tun

Sehen Sie, wie ein Modell aufgebaut ist, und erreichen Sie jedes Bauteil, ohne es in 3D zu suchen: das Gebäude, seine Geschosse, die Räume auf jedem Geschoss und die Bauteile darin, nach Art gruppiert (Wände, Türen, Decken …).

## Schritte

1. Öffnen Sie ein IFC-Modell. Die {{ui:Modellstruktur}} links öffnet sich bis zu den Geschossen.
2. Klicken Sie auf den Pfeil neben einer Zeile, um sie zu öffnen oder zu schließen. Ein Geschoss enthält zuerst seine Räume, dann seine Bauteile nach Art mit der jeweiligen Anzahl. Ein Bauteil aus Teilen, etwa eine Treppe, enthält seine Teile.
3. Entfernen Sie das Häkchen im Kästchen einer Zeile, um alles darin auszublenden; setzen Sie es, um es wieder anzuzeigen. Ein Kästchen mit einem Strich bedeutet, dass nur ein Teil des Inhalts angezeigt wird.
4. Klicken Sie auf den Namen einer Zeile, um auszuwählen, wofür sie steht: ein Bauteil oder alle Bauteile einer Gruppe, eines Geschosses oder eines Raums. {{key:Mod}}+Klick fügt sie der Auswahl hinzu oder nimmt sie heraus.
5. Klicken Sie auf die Schaltfläche {{ui:i}} neben einem Geschoss, Raum oder Gebäude, um dessen eigene Eigenschaften zu sehen.
6. Doppelklicken Sie auf eine Zeile, um auf sie zu zoomen.

## Was Sie sehen sollten

- Wenn Sie ein Bauteil in der 3D-Ansicht wählen, öffnet sich die Struktur bis zu ihm und markiert es.
- Ausgeblendete Bauteile sind durchgestrichen. Die Kästchen der Struktur und {{ui:Anzeigen}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) arbeiten zusammen: siehe [Bauteile ausblenden, isolieren und durchsichtig darstellen](topic:hide-and-isolate).
- Bauteile, die das Modell keinem Geschoss zuordnet, stehen am Ende in einer Gruppe **Nicht in der Raumstruktur**.
- Eine lange Gruppe zeigt 200 Zeilen auf einmal; klicken Sie darunter auf **Mehr anzeigen** für den Rest.

## Tasten

Wenn der Name einer Zeile den Fokus hat: {{key:Up}} und {{key:Down}} bewegen, {{key:Right}} öffnet, {{key:Left}} schließt oder geht nach oben, {{key:Space}} setzt das Häkchen im Kästchen, {{key:Enter}} wählt aus.

## Häufige Fehler

- **Das Kästchen eines Geschosses ist aktiviert, aber nichts wird angezeigt.** Die Liste {{ui:Geschosse}} unter der Struktur schaltet ganze Geschosse von selbst aus: Setzen Sie das Häkchen dort ebenfalls.
- **Eine Zeile wählt nichts aus.** Manche Zeilen, etwa ein leerer Raum, haben keine Bauteile, die gezeichnet werden können; die Statuszeile sagt es.

## Weiter

- [Bauteile löschen, ausschneiden, kopieren und einfügen](topic:edit-elements)
- [Geschosse, Räume und Kanten anzeigen und ausblenden](topic:storeys-and-spaces)
