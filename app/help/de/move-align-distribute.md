---
title: Bauteile verschieben, kopieren, ausrichten und verteilen
summary: Wände, Böden, Stützen und platzierte Elemente mit einem Basispunkt und einem zweiten Punkt oder einem eingegebenen Abstand verschieben, dabei kopieren und sie ausrichten oder gleichmäßig verteilen, im Grundriss oder über eine Auswahl in 3D.
keywords: verschieben, kopieren, ausrichten, verteilen, Abstand, Versatz, Basispunkt, Verschiebung, Wände, Stützen, Böden, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Was Sie tun

Eine Wand, eine Stütze, einen Boden oder ein platziertes Bibliothekselement an eine neue Stelle schieben, Kopien davon machen oder mehrere ausrichten, ohne sie neu zu zeichnen.

## Namen und Tasten

Die Befehle heißen {{ui:Verschieben}}, {{ui:Ausrichten}} und {{ui:Verteilen}}, und Sie können `MOVE`, `ALIGN` und `DISTRIBUTE` in der Befehlszeile eingeben, wie im CadCraft-Zeichenprogramm. Ein Unterschied: In BimCraft ist {{key:M}} Messen, daher hat Verschieben eine eigene Taste, {{key:Shift+M}}. Die Werkzeuge finden Sie im Menü {{ui:Build}}.

## Verschieben

1. Wählen Sie aus, was verschoben werden soll, im Grundriss oder in der 3D-Ansicht. Wände, Böden, Stützen und platzierte Bibliothekselemente können in einer Auswahl zusammen sein.
2. Drücken Sie {{key:Shift+M}} oder wählen Sie {{ui:Verschieben}}.
3. Klicken Sie einen Basispunkt und dann einen zweiten Punkt. Oder geben Sie nach dem Basispunkt einen Abstand ein und drücken Sie {{key:Enter}}: Es geht in die Richtung, in die der Zeiger vom Basispunkt aus zeigt. Sie können auch `dx,dy` (oder `@dx,dy`) oder `Länge<Winkel` eingeben.
4. Drücken Sie {{key:C}}, um {{ui:Kopieren}} einzuschalten: Jede Verschiebung erzeugt dann Kopien und bleibt für die nächste bereit. Drücken Sie {{key:Esc}}, um zu beenden.
Beide Punkte können auch in der 3D-Ansicht angeklickt werden: Bei eingeschaltetem Verschieben trifft der Zeiger die Höhe des Geschossbodens, ein Klick dort ist also ein Punkt des Grundrisses. Halten Sie {{key:Shift}} beim Klicken gedrückt, um stattdessen ein anderes Bauteil zu wählen. Nutzen Sie Grundriss, Oben, Vorne oder Seite nach Belieben: Die Punkte liegen immer auf diesem Geschoss.

Eine Wand nimmt ihre Türen und Fenster mit. Ein gezeichneter Boden übernimmt seine Öffnungen. Räume, Böden und Decken, die den Wänden folgen, werden aktualisiert. Wände, die an die verschobene Wand angrenzen, bleiben, wo sie sind.

Jede Verschiebung ist eine Änderung: Ein {{key:Mod+Z}} macht sie rückgängig, und sie wird allen in einer Live-TeamWork-Sitzung mitgeteilt. Ein platziertes Bibliothekselement lässt sich so nicht kopieren; verwenden Sie {{ui:Bearbeiten}} › {{ui:Kopieren}} und {{ui:Einfügen}}.

## Ausrichten

Wählen Sie zwei oder mehr Bauteile, wählen Sie {{ui:Ausrichten}}, dann eine Seite (links, Mitte, rechts, oben, mittig oder unten) und woran ausgerichtet werden soll: an der gewählten Gruppe, am ersten gewählten, am zuletzt gewählten Bauteil oder an einem Punkt, den Sie klicken. Drücken Sie in der Leiste {{ui:Ausrichten}}.

## Verteilen

Wählen Sie drei oder mehr Bauteile, wählen Sie {{ui:Verteilen}}, dann eine Richtung (quer oder nach unten) und den Abstand: gleiche Lücken zwischen ihnen oder gleiche Mittelpunkte. Die beiden Endbauteile bleiben, wo sie sind.

Wände, die Ausrichten oder Verteilen verschiebt, behalten ihre Anschlüsse wie beim Verschieben: Eine Wand, die an eine verschobene Wand angeschlossen ist, gleitet mit ihrem Ende auf ihrer eigenen Linie, damit sie verbunden bleibt; Trennwände, die an sie stoßen, kommen mit; und zwei verbundene Wände, die beide verschoben werden, behalten ihre Ecke dort, wo sich ihre neuen Linien treffen. Räume bleiben geschlossen. Es ist ein Schritt in **Änderungen**.
