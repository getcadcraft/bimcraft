---
title: Bibliothekselement mit Varianten platzieren und tauschen
summary: Manche Bibliothekselemente gibt es in mehreren Größen oder Optionen. Wählen Sie die Variante, bevor Sie platzieren, sehen Sie, welche Variante ein platziertes Element hat, tauschen Sie sie mit einem Klick gegen eine andere und behalten Sie sie, wenn das Element aktualisiert wird.
keywords: Variante, Varianten, Größen, Optionen, Konfiguration, Bibliothek, librarycraft, platzieren, tauschen, Konfigurator, Familie, Typ, Aktualisierung, Anschlusspunkte
from: c05f0af3
---

## Was Sie tun

Platzieren Sie ein Bibliothekselement in der Größe oder Option, die Sie brauchen, und ändern Sie Ihre Meinung später, ohne es neu zu platzieren. Ein Element mit Varianten ist ein Element in der Bibliothek (ein Name, eine Lizenz, eine Version) mit einer Tabelle der Varianten, in denen es vorkommt: zum Beispiel eine Montageplatte in Klein, Mittel und Groß, oder dieselbe Platte ohne Bohrungen.

## Variante wählen und platzieren

1. Den Reiter {{ui:Bibliothek}} öffnen und auf die Karte des Elements klicken.
2. Unter dem Namen listet die Auswahl {{ui:Variante}} jede Variante mit ihrer Größe. Die Standardvariante des Elements ist zuerst gewählt.
3. Eine wählen. Plan, Größe und die Zeile 3D-Körper folgen Ihrer Wahl.
4. {{ui:Im Plan platzieren}} klicken (oder {{ui:Im Modell platzieren}} in der 3D-Ansicht) und wie jedes Element platzieren: siehe [Ausstattung und Möbel aus der Bibliothek platzieren](topic:place-from-library).

Das platzierte Element wird nach dem Element und der Variante benannt, zum Beispiel *Montageplatte — Groß*, damit die Ausstattungsliste und die Struktur sie unterscheiden. Jede Variante ist ein eigener IFC-Typ: Wird dieselbe Variante zweimal platziert, teilen sie sich einen Typ; eine andere Variante erhält ihren eigenen.

## Sehen, welche Variante ein platziertes Element hat

Wählen Sie das Element. Unter {{ui:Eigenschaften}} hat das Feld **Bibliothekselement** eine Zeile **Variante**. Die IFC speichert sie in `CadCraft_LibraryItem`: `Variant` (die ID der Variante), `VariantName` und `VariantValues` (die Optionswerte als Text), damit andere Programme sie lesen können.

## Auf eine andere Variante tauschen

1. Wählen Sie das platzierte Element und klicken Sie im Feld **Bibliothekselement** auf {{ui:Element tauschen…}}. Der Reiter {{ui:Bibliothek}} öffnet sich.
2. Oben listet **Weitere Varianten von** *das Element* jede Variante mit ihrer Größe. Die platzierte ist markiert und kann nicht gewählt werden.
3. Klicken Sie auf {{ui:Zu … tauschen}} bei der gewünschten Variante.

Das Element behält seinen Platz, seine Drehung, sein Geschoss, seine Positionsnummer, Menge und Notizen; sein Typ, seine Form und seine Daten ändern sich auf die andere Variante. {{key:Mod+Z}} bringt die vorherige zurück. Sie können stattdessen weiterhin jedes andere Element aus der Liste unten wählen, wie zuvor: siehe [Ein platziertes Element tauschen und Bibliothekselemente aktualisieren](topic:swap-and-update-library-items).

## Kopieren, Einfügen und Aktualisierungen

- Eine Kopie einer platzierten Variante ist dieselbe Variante: in diesem Modell und in einem anderen Modell, das im selben Browser-Tab geöffnet ist, über Kopieren und Einfügen.
- **Aktualisierungen** behalten die Variante bei: Hat die neuere Version des Elements sie noch, wird die Platzierung zu dieser Variante der neuen Version. Hat die neue Version sie nicht mehr, nimmt die Platzierung stattdessen die Standardvariante des Elements.

## Gut zu wissen

- Nur manche Bibliothekselemente haben Varianten. Die Karten sagen es nicht; Sie sehen die Auswahl {{ui:Variante}}, wenn Sie eine öffnen.
- Ein Element kann je Variante **Anschlusspunkte** auflisten (Verbindungspunkte für Rohre und Kanäle). Der Reiter Bibliothek zeigt, wie viele eine Variante hat. Sie werden beim Platzieren aus dem Reiter Bibliothek noch **nicht** in die IFC geschrieben.
- Eine Variante ohne 3D-Körper wird mit einem Platzhalterquader platziert, wie jedes 2D-Symbol.
- Die Größen in der Auswahl sind in Millimetern angegeben, so wie die Bibliothek sie schreibt.
