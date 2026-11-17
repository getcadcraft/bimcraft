---
title: Einen KI-Assistenten mit Ihrem Modell arbeiten lassen
summary: Schalten Sie Assistenten in den Einstellungen ein, damit ein Assistent auf Ihrem Computer über CadCraft Studio Bauteile finden, ihre Eigenschaften lesen, sie in der Ansicht isolieren sowie Wände, Türen, Fenster, Böden, Ebenen und Raster zeichnen kann. Bis Sie ihn einschalten, ist er aus.
keywords: KI, Assistent, MCP, Skript, Automatisierung, Studio, Bauteile finden, isolieren, Eigenschaften, Berechtigungen, trennen, Aktivität, Wände zeichnen, Türen hinzufügen, Fenster hinzufügen, Ebenen, Raster, Böden, rückgängig, speichern, Befehlszeile, CLI, headless, KI-Assistenten verwenden
from: c5ee595b
---

## Was Sie lernen

Wie Sie einen KI-Assistenten (jeden Assistenten, der MCP spricht) das IFC-Modell, das Sie geöffnet haben, betrachten und darin zeichnen lassen, was er darf und was nicht, und wie Sie ihn stoppen.

## Was ein Assistent in BimCraft tun kann

| Er fragt nach | Was passiert | Benötigt |
|---|---|---|
| Bauteile finden | Er erhält eine Liste von Bauteilen nach Klasse, Geschoss, Name oder Eigenschaftswert, so wie **Finden** es tut | Lesen |
| Eigenschaften lesen | Er erhält die Attribute, den Typ, die Eigenschaftssätze und Mengen eines Bauteils, so wie **Eigenschaften** sie anzeigt | Lesen |
| Modell beschreiben, Wände auflisten | Er erhält die Ebenen, Wände, Türen, Fenster, Räume, Böden, Raster und Stützen sowie die Enden, den Typ und die Höhe jeder Wand | Lesen |
| Isolieren, transparent machen, ausblenden oder einblenden | Die 3D-Ansicht ändert sich, als hätten Sie das Menü {{ui:Show}} benutzt | Ansicht ändern und zeichnen |
| Wände, Türen, Fenster, Böden, Ebenen oder Rasterlinien zeichnen | Das Modell ändert sich, als hätten Sie die Werkzeuge {{ui:Draw}} benutzt: Wände verbinden sich, Räume, Böden und Dächer folgen | Ansicht ändern und zeichnen |
| Einen Namen oder einen Eigenschaftswert ändern | Name, Beschreibung, Objekttyp oder Kennzeichnung eines Bauteils, oder ein Eigenschaftswert. Ein Wert, den es mit anderen Bauteilen teilt, wird zuvor für es kopiert; ein Wert seines Typs ändert sich nur, wenn der Assistent es sagt, denn jedes Bauteil dieses Typs folgt | Ansicht ändern und zeichnen |
| Verschieben, löschen, Wände, Türen und Fenster ändern | Bauteile werden mit dem verschoben oder gelöscht, was sie halten. Wände, die mit den Werkzeugen {{ui:Draw}} gezeichnet wurden, ändern sich durch ihre Enden oder ihren Typ, Türen und Fenster durch Platz, Größe oder Typ; Räume und Verbindungen folgen | Ansicht ändern und zeichnen |
| Einen Terminplan einrichten, anordnen und lesen | „Eine Türliste nach Geschoss, mit Brandschutzklasse und Beschlägen“: Der Assistent benennt die Liste, ihre Spalten (eine Eigenschaft oder Kennzeichnung wird zur Spalte) und ihre Gruppierung; BimCraft füllt sie aus dem Modell und ordnet sie, wobei alles, was der Assistent nicht angegeben hat, aus dem Büro-Standard übernommen wird. Die Einrichtung erscheint in Ihren Listen. Jede Zeile, die er zurückbekommt, nennt ihre Bauteile, sodass er sie auswählen kann | Lesen zum Lesen; Ansicht ändern und zeichnen, um eine Einrichtung zu speichern |
| Eine Liste exportieren | CSV, Excel oder tabulatorgetrennter Text zum Einfügen in Google Sheets (nichts wird an Google gesendet) | Exportieren |
| Raumoberflächen lesen und festlegen | Die Oberflächentypen, die Boden-, Wand- und Deckenoberfläche jedes Raums, Zonen; Flächen, Fliesenzahlen und Untergrundvolumen werden dann aus den Oberflächenlisten ermittelt | Lesen; Ansicht ändern und zeichnen zum Festlegen |
| Bauteile auswählen, eigene Schritte rückgängig machen | Bauteile werden in der Ansicht ausgewählt; sein letzter Schritt wird zurückgenommen | Ansicht ändern und zeichnen |
| Speichern | Eine neue IFC-Datei mit allen Änderungen, so wie {{ui:Save as IFC}} sie erstellt (das Original wird nie verändert) | Speichern |
| USD exportieren | Die geöffneten Modelle als OpenUSD (.usda, .usdc oder .usdz), so wie {{ui:USD}} in der Symbolleiste sie schreibt | Exportieren |
| Ein Bild rendern, die Renderwarteschlange abarbeiten | Ein Bild der 3D-Ansicht, so wie der Dialog {{ui:Render}} es mit Ihren Rendereinstellungen erstellt, sofern er nicht andere verlangt, oder hochwertige Bilder, die der Warteschlange des Dialogs hinzugefügt und nacheinander gerendert werden (die Warteschlange braucht WebGPU). Am Modell ändert sich nichts ([Ein Bild rendern](topic:render)) | Exportieren |

Jede Änderung eines Assistenten ist ein Schritt in **Änderungen**, benannt „Assistent: …“ (zum Beispiel „Assistent: 4 Wände hinzufügen“), sodass {{key:Mod+Z}} seine gesamte Aktion zurücknimmt und Sie sehen, wessen Schritt es war. Im Fenster kann er keine Dateien öffnen: Sie öffnen das Modell; er arbeitet mit dem, das geöffnet ist.

## Einschalten

Assistenten erreichen BimCraft über CadCraft Studio auf Ihrem Computer; der reine Browser hat keinen Zugang.

1. Öffnen Sie {{ui:Settings}} und wählen Sie den Reiter **BimCraft**.
2. Setzen Sie unter **Assistenten** den Haken bei **KI-Assistenten und Skripte dürfen BimCraft nutzen**.
3. **Lesen** ist für Sie bereits angehakt. Haken Sie auch **Ansicht ändern und zeichnen** an, wenn der Assistent isolieren und ausblenden sowie zeichnen darf, und **Speichern**, wenn er das Modell als neue Datei speichern darf.
4. Verbinden Sie den Assistenten in Studio (Studio zeigt die Adresse und die Einstellungen, die Sie in ihn einfügen müssen).

## Während ein Assistent verbunden ist

Ein Hinweis oben im rechten Bereich zeigt an, welcher Assistent verbunden ist und was er tun kann. Klicken Sie auf {{ui:Disconnect}}, um seine Sitzung sofort zu beenden; er muss sich erneut verbinden, um weiterzumachen.

**Aktivität**, unter **Assistenten** in den Einstellungen, listet jeden Aufruf des Assistenten auf, neueste zuerst, mit der Angabe, ob er funktioniert hat.

:::tip
Fragen Sie in einfachen Worten, zum Beispiel „isoliere die Außenwände im Geschoss 1“, „Welche Türen haben keine Brandschutzklasse?“ oder „Zeichne einen 6 mal 4 Meter großen Raum im Geschoss 1 mit einer Tür in der Südwand“. Der Assistent findet die Bauteile und zeigt sie in Ihrer Ansicht oder zeichnet sie.
:::

## Ohne Fenster: Skripte und Befehlszeile

Dieselben Zeichenwerkzeuge funktionieren für IFC-Dateien in Ordnern, die Sie benennen, ohne ein geöffnetes Fenster: Der MCP-Server und die Befehlszeile von CadCraft können ein neues Gebäude beginnen oder eine IFC-Datei öffnen, sie beschreiben, Wände, Türen, Fenster, Böden, Ebenen und Raster hinzufügen, rückgängig machen und als neue `.ifc`-Datei speichern. Sie bestimmen, welche Ordner er verwenden darf und ob er etwas ändern oder speichern darf.

## Ausschalten

Entfernen Sie den Haken bei **KI-Assistenten und Skripte dürfen BimCraft nutzen**. Jeder Assistent wird sofort getrennt, und die Einstellung bleibt für das nächste Mal erhalten.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
- [Bauteile nach Klasse, Name oder Eigenschaft finden](topic:find)
- [Bauteile ausblenden, isolieren und transparent machen](topic:hide-and-isolate)
- [BimCraft-Einstellungen](topic:settings)
