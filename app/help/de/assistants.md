---
title: Einen KI-Assistenten mit Ihrem Modell arbeiten lassen
summary: Schalten Sie Assistenten in den Einstellungen ein, damit ein Assistent auf Ihrem Computer über CadCraft Studio Bauteile finden, ihre Eigenschaften lesen, sie in der Ansicht isolieren sowie Wände, Türen, Fenster, Decken, Geschosse und Raster zeichnen kann. Bis Sie ihn einschalten, ist er aus.
keywords: ki, assistent, mcp, skript, automatisierung, studio, bauteile finden, isolieren, eigenschaften, berechtigungen, trennen, verlauf, wände zeichnen, türen hinzufügen, fenster hinzufügen, geschosse, raster, decken, rückgängig, speichern, befehlszeile, cli, ohne fenster, mit ki-assistenten verwenden
from: 66d72742
---

## Was Sie lernen

Wie Sie einen KI-Assistenten (jeden Assistenten, der MCP spricht) das IFC-Modell ansehen und darin zeichnen lassen, das Sie geöffnet haben, was er darf und was nicht und wie Sie ihn wieder stoppen.

## Was ein Assistent in BimCraft tun kann

| Er bittet darum | Was passiert | Benötigt |
|---|---|---|
| Bauteile finden | Er erhält eine Liste von Bauteilen nach Klasse, Geschoss, Name oder Eigenschaftswert, so wie **Suchen** es liefert | Lesen |
| Eigenschaften lesen | Er erhält die Attribute, den Typ, die Eigenschaftssätze und Mengen eines Bauteils, so wie **Eigenschaften** sie anzeigt | Lesen |
| Modell beschreiben, Wände auflisten | Er erhält die Geschosse, Wände, Türen, Fenster, Räume, Decken, Raster und Stützen sowie das Ende, den Typ und die Höhe jeder Wand | Lesen |
| Isolieren, transparent, ausblenden oder anzeigen | Die 3D-Ansicht ändert sich, als hätten Sie das Menü {{ui:Anzeigen}} benutzt | Ansicht ändern und zeichnen |
| Wände, Türen, Fenster, Decken, Geschosse oder Rasterlinien zeichnen | Das Modell ändert sich, als hätten Sie die Werkzeuge von {{ui:Zeichnen}} benutzt: Wände schließen sich an, Räume, Decken und Dächer folgen | Ansicht ändern und zeichnen |
| Einen Namen oder einen Eigenschaftswert ändern | Name, Beschreibung, Objekttyp oder Tag eines einzelnen Bauteils oder ein Eigenschaftswert eines einzelnen Bauteils. Ein Wert, den es mit anderen Bauteilen teilt, wird zuvor für es kopiert; ein Wert des Typs ändert sich nur, wenn der Assistent es angibt, weil jedes Bauteil dieses Typs folgt | Ansicht ändern und zeichnen |
| Verschieben, löschen, Wände, Türen und Fenster ändern | Bauteile werden mit den Elementen verschoben oder gelöscht, die sie aufnehmen; mit den Werkzeugen von {{ui:Zeichnen}} gezeichnete Wände ändern sich über ihre Enden oder ihren Typ, Türen und Fenster über Lage, Größe oder Typ; Räume und Verbindungen folgen | Ansicht ändern und zeichnen |
| Eine Liste einrichten, anordnen und lesen | „Eine Türenliste nach Geschoss, mit Brandschutzklasse und Beschlägen“: Der Assistent benennt die Liste, ihre Spalten (eine Eigenschaft oder ein Tag wird zu einer Spalte) und ihre Gruppierung; BimCraft füllt sie aus dem Modell und ordnet sie an und übernimmt, was der Assistent nicht angegeben hat, aus dem Büro-Standard. Die Einrichtung wird in Ihre Listen aufgenommen. Jede Zeile, die er zurückerhält, nennt ihre Bauteile, damit er sie auswählen kann | Lesen zum Lesen; Ansicht ändern und zeichnen zum Speichern einer Einrichtung |
| Eine Liste exportieren | CSV, Excel oder tabulatorgetrennter Text zum Einfügen in Google Sheets (nichts wird an Google gesendet) | Exportieren |
| Raumoberflächen lesen und festlegen | Die Oberflächentypen, Boden-, Wand- und Deckenoberfläche jedes Raums, Zonen; Flächen, Fliesenzahlen und Untergrundvolumen kommen dann aus den Oberflächenlisten | Lesen; zum Festlegen Ansicht ändern und zeichnen |
| Bauteile auswählen, eigene Schritte rückgängig machen | Bauteile werden in der Ansicht gewählt; sein letzter Schritt wird zurückgenommen | Ansicht ändern und zeichnen |
| Speichern | Eine neue IFC-Datei mit allen Änderungen, so wie {{ui:Als IFC speichern}} sie erstellt (das Original wird nie geändert) | Speichern |
| USD exportieren | Die offenen Modelle als OpenUSD (.usda, .usdc oder .usdz), so wie {{ui:USD}} in der Symbolleiste sie schreibt | Exportieren |
| Ein Bild rendern, die Renderwarteschlange ausführen | Ein Bild der 3D-Ansicht, so wie der Dialog {{ui:Rendern}} es mit Ihren Rendereinstellungen erstellt, sofern er nicht andere verlangt; oder hochwertige Bilder, die dem Warteschlangen-Dialog hinzugefügt und nacheinander gerendert werden (die Warteschlange benötigt WebGPU). Im Modell ändert sich nichts ([Ein Bild rendern](topic:render)) | Exportieren |

Jede Änderung, die ein Assistent vornimmt, ist ein Schritt in **Änderungen** mit dem Namen „Assistent: …“ (zum Beispiel „Assistent: 4 Wände hinzufügen“). So nimmt {{key:Mod+Z}} seine ganze Aktion zurück, und Sie sehen, wessen Schritt es war. Im Fenster kann er keine Dateien öffnen: Sie öffnen das Modell, und er arbeitet mit dem, das geöffnet ist.

## Einschalten

Assistenten erreichen BimCraft über CadCraft Studio auf Ihrem Computer; der einfache Browser hat keinen Zugang.

1. Öffnen Sie {{ui:Einstellungen}} und wählen Sie die Registerkarte **BimCraft**.
2. Setzen Sie unter **Assistenten** ein Häkchen bei **KI-Assistenten und Skripte BimCraft verwenden lassen**.
3. **Lesen** ist für Sie bereits angehakt. Setzen Sie außerdem ein Häkchen bei **Ansicht ändern und zeichnen**, wenn der Assistent isolieren und ausblenden sowie zeichnen darf, und bei **Speichern**, wenn er das Modell als neue Datei speichern darf.
4. Verbinden Sie den Assistenten in Studio (Studio zeigt die Adresse und die Einstellungen, die Sie dort einfügen müssen).

## Während ein Assistent verbunden ist

Ein Hinweis oben im rechten Bereich zeigt, welcher Assistent verbunden ist und was er tun kann. Klicken Sie auf {{ui:Trennen}}, um seine Sitzung sofort zu beenden; er muss sich erneut verbinden, um weiterzuarbeiten.

**Verlauf** unter **Assistenten** in den Einstellungen listet jeden Aufruf des Assistenten auf, den neuesten zuerst, mit der Angabe, ob er erfolgreich war.

:::tip
Fragen Sie mit einfachen Worten, zum Beispiel „Isolieren Sie die Außenwände im Geschoss 1“, „Welche Türen haben keine Brandschutzklasse?“ oder „Zeichnen Sie einen 6 mal 4 Meter großen Raum im Geschoss 1 mit einer Tür in der Südwand“. Der Assistent findet die Bauteile und zeigt sie in Ihrer Ansicht oder zeichnet sie.
:::

## Ohne Fenster: Skripte und die Befehlszeile

Dieselben Zeichenwerkzeuge funktionieren auf IFC-Dateien in Ordnern, die Sie angeben, auch ohne geöffnetes Fenster: Der MCP-Server und die Befehlszeile von CadCraft können ein neues Gebäude beginnen oder eine IFC-Datei öffnen, sie beschreiben, Wände, Türen, Fenster, Decken, Geschosse und Raster hinzufügen, sie rückgängig machen und als neue `.ifc`-Datei speichern. Vier weitere Werkzeuge eignen sich für Skripte: `ifc_batch` führt bis zu 200 Bearbeitungsschritte als einen einzigen aus (alles oder nichts: Ein Rückgängig nimmt den ganzen Stapel zurück, und ein abgelehnter Schritt macht die übrigen rückgängig und nennt den Schritt); `ifc_describe` listet die Geschosse und jede Wand mit ihren Türen und Fenstern; `ifc_render_png` schreibt ein flach schattiertes Prüfbild des Modells (ohne Materialien, Texturen oder Schatten) ohne Fenster; `usd_export` schreibt `.usda`, `.usdc` oder `.usdz`. In der Befehlszeile führt `cadcraft bim script.json --from model.ifc -o out.ifc` ein Skript mit Schritten aus, und `--usd`, `--png` und `--plan` schreiben aus demselben Lauf eine USD-Datei, ein Bild oder einen Plan. Sie entscheiden, welche Ordner es verwenden darf und ob es etwas ändern oder speichern darf.

## Ausschalten

Entfernen Sie das Häkchen bei **KI-Assistenten und Skripte BimCraft verwenden lassen**. Jeder Assistent wird sofort getrennt, und die Einstellung wird für das nächste Mal gespeichert.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
- [Bauteile nach Klasse, Name oder Eigenschaft finden](topic:find)
- [Elemente ausblenden, isolieren und transparent darstellen](topic:hide-and-isolate)
- [BimCraft-Einstellungen](topic:settings)
