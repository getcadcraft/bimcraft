---
title: Der Elektroplan
summary: Platzieren Sie Steckdosen, Schalter, Leuchten, Sensoren, Abzweigdosen und Verteiler im Plan mit denselben Symbolen wie das Add-on Elektro von CadCraft, verknüpfen Sie Schalter mit den Leuchten, die sie schalten, und listen Sie Geräte und Stromkreise in den Listen auf.
keywords: Elektro, Elektroplan, Steckdose, Doppelsteckdose, Schalter, Wechselschalter, Dimmer, Leuchte, Deckenleuchte, Einbauleuchte, Downlight, Bewegungsmelder, Abzweigdose, Verteiler, Unterverteiler, Stromkreis, Last, Watt, Ampere, Schalterleitung, Geräteliste, Verteilerliste
from: f7de1947
---

## Was Sie tun

Zeichnen Sie den Elektroplan des Hauses im Modell: Steckdosen, Schalter und Verteiler an den Wänden, Leuchten und Sensoren an der Decke. Jedes Gerät ist ein echtes Elektrobauteil in der IFC-Datei, mit seinem Kennzeichen, Stromkreis und seiner Last, und Schalter merken sich die Leuchten, die sie schalten.

## Geräte platzieren

1. Öffnen Sie auf einem Geschoss {{ui:Build}} und wählen Sie {{ui:Elektro}}.
2. Wählen Sie das Gerät: Steckdosen (Strom, Daten, Telefon, Audio-Video), Schalter und Sensoren (auch einen Thermostat und eine Zeitschaltuhr), Leuchten, Melder und Alarme, eine Abzweigdose, einen Verteiler oder einen Unterverteiler.
3. Geben Sie einen **Stromkreis** ein, wenn Sie ihn kennen (beliebiger Name: 1, 2, A-3). Lassen Sie **Montagehöhe** leer, um die übliche Höhe dieses Geräts zu verwenden.
4. Klicken Sie auf den Plan. Steckdosen, Schalter und Verteiler kommen auf die Fläche der nächstgelegenen Wand, zum Raum gerichtet; Leuchten, Sensoren und Abzweigdosen kommen an die Decke, dort, wo Sie klicken.

Geräte werden beim Platzieren gekennzeichnet: **R** für Steckdosen, **S** für Schalter, **L** für Leuchten, **M** für Bewegungsmelder, **J** für Abzweigdosen, **P** für Verteiler. Geräte an einer Wand wandern mit, wenn Sie die Wand verschieben.

Lieber nach Bild suchen? Öffnen Sie die **Symbolpalette** über {{ui:Build}}, um ein Gerät nach Namen zu finden, markieren Sie die, die Sie oft verwenden, und platzieren Sie sie mit einem Klick: siehe [Die Symbolpalette](topic:symbol-palette).

## Schalter mit Leuchten verknüpfen

1. Wählen Sie einen Schalter (oder einen Bewegungsmelder) und klicken Sie in **Eigenschaften** auf **Leuchten verknüpfen**.
2. Klicken Sie auf jede Leuchte, die er schaltet. Klicken Sie auf eine verknüpfte Leuchte erneut, um sie zu lösen.
3. Drücken Sie {{key:Enter}} oder klicken Sie auf **Fertig**.

Der Plan zeichnet vom Schalter zu jeder seiner Leuchten eine gestrichelte Kurve. Die **Eigenschaften** einer Leuchte zeigen, welche Schalter sie schalten.

## Der Raum, in dem ein Gerät steht

Jedes Gerät kennt den Raum, in dem es steht. Ein Gerät an einer Wand liegt in dem Raum, zu dem es zeigt; ein Deckengerät liegt in dem Raum, über dem es hängt. **Eigenschaften** zeigt **Raum**, und die Liste **Elektrogeräte** hat eine Spalte **Raum** (Nummer und Name, zum Beispiel 101 Küche).

Das wird laufend aktualisiert: Wenn Sie den Raum umbenennen oder neu nummerieren, das Gerät verschieben oder eine Wand verschieben, folgt der Raum im selben Schritt. Ein Gerät an der Außenseite eines Gebäudes oder in einer Fläche, die kein Raum ist, meldet, dass es in keinem Raum liegt.

Der Raum wird außerdem in die Datei geschrieben, in den Eigenschaftssatz des Geräts `CadCraft_Location` (Room, RoomNumber, RoomName), sodass Suchen, Farbe nach Eigenschaft und eine Kennzeichenliste ihn verwenden können, ebenso wie andere Programme. Plansymbole und Elemente, die mit einem Symbol verknüpft sind, erhalten denselben Satz; siehe [Symbolpalette](topic:symbol-palette).

## Den Assistenten die Geräte platzieren lassen

Mit einem verbundenen Assistenten (**Einstellungen › Assistenten**, mit erlaubten Änderungen) können Sie Geräte mit Worten anfordern: „Setzen Sie alle 2 m entlang der Wände des Wohnzimmers eine Doppelsteckdose, 300 mm hoch, auf Stromkreis 3“ oder „Fügen Sie eine Deckenleuchte mit ihrem Schalter neben der Tür hinzu“. Der Assistent verwendet fünf Werkzeuge: `devices_add`, `device_change`, `lights_set`, `devices_delete` und `devices_list`. Sie erstellen dieselben Geräte wie das Werkzeug Elektro, an denselben Wänden und mit denselben Kennzeichen, Stromkreisen, Lasten und Höhen, und jeder Aufruf ist ein Schritt im Rückgängig.

Ein Gerät erhält nie eine Art, die das Werkzeug Elektro nicht hat: Eine unbekannte Art wird abgelehnt, und der Assistent erhält die Liste. Eine Steckdose oder ein Schalter muss innerhalb von 600 mm zu einer Wandfläche stehen, wie bei einem Klick; sonst wird der Aufruf abgelehnt und nichts platziert. Standardhöhen sind Millimeter: 300 für Steckdosen, 1100 für Schalter; ein Deckengerät hängt von der Decke herab.

## Ändern und auflisten

Wählen Sie ein Gerät, um Kennzeichen, Stromkreis, Last (Watt) und Montagehöhe zu ändern. Wählen Sie mehrere, um sie alle gleichzeitig auf denselben Stromkreis zu legen. Drücken Sie {{key:Delete}}, um eines zu entfernen; eine gelöschte Leuchte wird von ihren Schaltern gelöst.

In {{ui:Listen}} wählen Sie **Elektrogeräte** für jedes Gerät mit seinem Geschoss, Stromkreis, seiner Last, Höhe und den Leuchten, die jeder Schalter schaltet, oder **Stromkreise** für die Geräte jedes Stromkreises, die Gesamtlast und den Strom. Beide stehen auch auf dem Listenblatt des Zeichnungssatzes: siehe [Ansichten, Schnitte und Blätter](topic:sheets).

:::note
Montagehöhen und Lasten sind Planungsvorgaben (eine Steckdose 16" hoch und 200 W, ein Schalter bei 48", eine Deckenleuchte 60 W), kein Entwurf: Der Elektriker oder Ingenieur bemisst die Stromkreise und prüft die Vorschriften.
:::

:::tip
Die Symbole sind dieselben, die das Add-on Elektro von CadCraft auf Installationsplänen zeichnet, sodass ein Plan aus beiden Programmen gleich gelesen wird.
:::
