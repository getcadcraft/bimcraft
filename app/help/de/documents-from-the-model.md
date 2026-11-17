---
title: "Dokumente aus dem Modell"
summary: "Schreiben Sie eine Spezifikation oder eine Beschreibung einmal als Vorlage mit Feldern für Mengen, Eigenschaften und Tags, und füllen Sie sie aus dem geöffneten IFC als PDF oder Word-Dokument."
keywords: Dokument, Dokumente, Spezifikation, Leistungsbeschreibung, Beschreibung, Vorlage, Markdown, Bericht, Word, docx, PDF, Mengen, Liste, Gewerk, Türenliste, Oberflächen, documentcad
from: 2b0c9156
---

## Was Sie tun

Eine Vorlage ist ein Text in Markdown mit Feldern in doppelten geschweiften Klammern. BimCraft füllt die Felder aus dem geöffneten Modell (Anzahlen, Mengen nach Typ, Eigenschaften, Ihre [Tags](topic:tags-and-schedules)) und speichert das Ergebnis als PDF, Word-Dokument (.docx) oder Markdown.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Öffnen Sie im linken Bereich unter {{ui:Mengen}} die Option {{ui:Dokumente aus dem Modell}}.
3. Wählen Sie eine Vorlage: {{ui:Türen und Beschläge}} oder {{ui:Wände, Verkleidungen und Oberflächen}}, oder {{ui:Vorlage laden (.md)…}} für eine eigene.
4. Wenn die Vorlage Tags liest, die das Modell noch nicht definiert, klicken Sie auf {{ui:Tags dieser Vorlage hinzufügen}} und weisen Sie dann Bauteilen unter {{ui:Tags}} Tags zu.
5. Ändern Sie den Text nach Belieben und klicken Sie auf {{ui:Das Dokument zeigen}}.
6. Klicken Sie auf {{ui:PDF}} (wählen Sie zuerst A4 oder Letter) oder auf {{ui:Word (.docx)}}.

## Was Sie sehen sollten

- Das ausgefüllte Dokument unter den Schaltflächen, mit seinen Tabellen.
- Eine Liste von Warnungen, wenn ein Feld nicht gelesen werden kann (ein Tag, das nicht definiert ist, eine Eigenschaft, die das Modell nicht hat, ein Block, der nie geschlossen wird). Ein solches Feld wird als `[?…]` gedruckt.
- PDF-Seiten mit dem Titel des Dokuments und „Seite 1 von 3“ am Fuß jeder Seite. Lange Tabellen werden mit ihrer Kopfzeile fortgesetzt.

## Felder

| Feld | Ergibt |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | den Namen und die Beschreibung des Projekts, den Dateinamen, heute |
| `{{count IfcDoor}}` | die Anzahl der Türen |
| `{{sum IfcWall NetSideArea}}` | eine Summe mit ihrer Einheit |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | Rechnung (`+ - * /` und Klammern) über Terme in eckigen Klammern: `[sum …]`, `[count …]` und innerhalb eines each `[qty Width]`. `round n` legt die Nachkommastellen fest, `unit` fügt eine Einheit hinzu. Etwas, das nicht gelesen werden kann, oder eine Division durch null, wird als `[?…]` gedruckt und gibt eine Warnung aus |
| `{{qty IfcWall NetSideArea by Type}}` | eine Tabelle: eine Zeile pro Typ mit Anzahl und Summe sowie eine Summenzeile |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | eine Tabelle, eine Zeile pro Bauteil |
| `{{tag Finish}}` | in einer Schleife der Wert des Elements; sonst jeder verwendete Wert (Eiche, Farbe) |
| `{{tags}}` | die Tag-Definitionen als Tabelle |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | der Text einmal pro Bauteil; der Teil nach `{{else}}`, wenn es keine gibt |
| `{{#group IfcWall by Type}} … {{/group}}` | der Text einmal pro Typ, mit `{{value}}`, `{{count}}`, `{{sum Length}}` und einem einfachen `{{#each}}` darin |

Innerhalb von `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (das IFC-Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (das eigene Maß des Elements, mit seiner Einheit).

Eine Klasse kann mehrere sein (`IfcDoor|IfcWindow`) oder jedes Element (`*`). Engen Sie jede davon mit `where` ein: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Die Tests sind `=`, `!=`, `~` (enthält), `>`, `<`, `>=`, `<=`, `has` und `hasnot`. Verbinden Sie mehrere mit `and`. Setzen Sie einen Wert mit Leerzeichen in "Anführungszeichen". `sort Name` ordnet eine Schleife.

## Listen und Spezifikation in einem Dokument

`{{schedule doors}}` druckt eine Modellliste als Tabelle, im Layout Ihres Büros: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, oder den Namen einer Einrichtung, die Sie unter Listen gespeichert haben. `{{specification}}` druckt die Spezifikation des Projekts. Die Vorlagen **Listen für Ausführungspläne** und **Spezifikation** verwenden sie. In der Vorschau klicken Sie auf eine Zahl einer solchen Liste, um die Elemente auszuwählen, aus denen sie stammt. Siehe [Liste anordnen, speichern und exportieren](topic:schedule-layouts) und [Spezifikation aus dem Modell schreiben](topic:specification).

## Gut zu wissen

- Ein Feld nennt ein eingebautes Feld (Name, Type, Storey, Class, Material, Mark), ein Tag (`tag:Fire rating` oder dessen Name), eine Eigenschaft (`Pset_WallCommon.FireRating`) oder nur den Namen einer Eigenschaft (`NetSideArea`, `Width`). Ein nackter Name liest den eigenen Satz jedes Elements, Mengensätze zuerst. So ist `Width` bei einer Tür die Breite der Tür, nicht die Wanddicke. Innerhalb von `where` liest ein nackter Name den Satz, den die meisten gewählten Elemente haben.
- Mengen sind das, was die Mengensätze der Datei sagen (BimCraft schreibt sie für das, was es zeichnet). Einheiten stammen aus den Einheitseinstellungen der Datei.
- Die Feldwörter (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) bleiben in jeder Sprache auf Englisch. Die Beispielvorlagen sind auf Englisch.
- Text aus dem Modell wird nie zur Formatierung: Ein Name mit einem `*` oder `|` darin wird so gedruckt, wie er ist.
- Bewahren Sie eine geänderte Vorlage mit {{ui:In diesem Browser behalten}} (nur dieser Browser hat sie) oder {{ui:Die Vorlage herunterladen}} auf.
- PDF-Text verwendet die Standard-PDF-Schriften: Ein Zeichen außerhalb des westeuropäischen Textes wird als „?“ gedruckt, und die Statuszeile sagt, wie viele.
- Vorlagen je Gewerk liegen in der Bibliothek (Art Dokumentvorlage). Wählen Sie unter Dokumente aus dem Modell die Option Aus der Bibliothek…, wählen Sie eine aus. Ihr Text und die Tags, die sie liest, werden übernommen; bearbeiten Sie sie nach Belieben. Eine eigene Vorlage in der Bibliothek zu veröffentlichen ist derselbe Upload wie jedes andere Element. Noch nicht umgesetzt: Berechnungen über Anzahlen und Summen hinaus.
