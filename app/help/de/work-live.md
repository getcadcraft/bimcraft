---
title: Ein Modell gemeinsam mit Live TeamWork bearbeiten
summary: Was sich in BimCraft ändert, während Sie in einer Live-TeamWork-Sitzung aus CadCraft Studio sind: Änderungen aller Beteiligten am selben IFC-Modell, Ihr eigenes Rückgängig und der Beitritt über einen Browser im selben Netzwerk.
keywords: live, live teamwork, studio live, gemeinsam, zusammenarbeiten, Sitzung, live teilen, beitreten, ifc, eigenschaften, umbenennen, Cursor, Zeiger, einander sehen, Namen, Farbe, Auswahl, rückgängig, Host
from: 32061b72
---

## Was Sie lernen

Was mit einem IFC-Modell geschieht, wenn mehrere Personen es gleichzeitig bearbeiten. CadCraft Studio startet und tritt der Live-TeamWork-Sitzung bei (Teilen, Beitreten); diese Seite behandelt das Modell selbst.

## Alle bearbeiten gleichzeitig

Das Modell des Hosts erscheint bei allen, die beitreten. Bauteile umbenennen, ihre Eigenschaftswerte ändern, Elemente aus der Bibliothek platzieren, austauschen oder entfernen, wie gewohnt. Ihre eigenen Änderungen sind sofort sichtbar; die der anderen erscheinen kurz nach deren Änderung. Wenn eine Änderung verändert, was Sie sehen (ein Element wird platziert oder entfernt), zeichnet BimCraft das Modell neu und behält Ihre Ansicht bei.

- **Zwei Personen ändern ein Bauteil:** Die spätere Änderung an derselben Zeile des Modells gilt. Ein Eigenschaftssatz, den mehrere Elemente teilen, wird wie immer für das Element kopiert, das Sie bearbeiten, damit die anderen ihre Werte behalten.
- **Ein Element, das gerade jemand entfernt hat,** kann nicht mehr bearbeitet werden: Ihre Änderung wird zurückgenommen, und die Statusleiste nennt den Grund.
- Die neuen Zeilen jeder Person im Modell erhalten eigene Nummern, sodass nie zwei Personen dieselbe Nummer bekommen.

## Einander sehen

Jede Person in der Sitzung hat eine eigene Farbe. In der 3D-Ansicht sehen Sie den Zeiger jeder Person als Pfeil in ihrer Farbe mit ihrem Namen daneben, auf dem Element, auf das sie zeigt, und ein gestricheltes Kästchen in ihrer Farbe um jedes Element, das sie ausgewählt hat.

Zeiger, Namen und Auswahlen gelten nur für die Sitzung: Sie werden nie in der Datei gespeichert und gehen nie in jemandes {{ui:Rückgängig}} ein. Sie gleiten dorthin, wo sich jede Person gerade befindet, sodass sie auch bei einer langsamen Verbindung flüssig bleiben.

## Rückgängig macht Ihre eigene Arbeit rückgängig

{{ui:Rückgängig}} macht Ihre letzte eigene Änderung rückgängig und lässt die der anderen unberührt. Wenn jemand dasselbe seitdem geändert hat, wird nichts rückgängig gemacht, und die Statusleiste nennt die Person.

## Aus einem Browser beitreten

Ein Teammitglied ohne Studio kann mit einem Telefon, Tablet oder Computer im selben Netzwerk die Grafik unter dem Code des Hosts scannen. BimCraft öffnet sich im Browser und öffnet das Modell des Hosts, sobald der Host Sie einlässt. Ein Einladungslink ermöglicht den Beitritt aus einem anderen Netzwerk: Der Host braucht dafür einen Team-Cloud-Plan-Arbeitsplatz für die App, alle anderen treten kostenlos bei, und der Link funktioniert nur, solange die Sitzung des Hosts geöffnet ist.

## Wenn die Sitzung endet

Nur der Host speichert das Modell. Alle anderen behalten eine nicht gespeicherte Kopie: Speichern Sie sie mit {{ui:Speichern unter}} als IFC, wenn Sie sie behalten möchten.

:::note
Nur das erste Modell in der Szene wird geteilt. Das Öffnen einer anderen Datei während einer Sitzung beendet die Sitzung in diesem Fenster.
:::
