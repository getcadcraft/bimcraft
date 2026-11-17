---
title: Materialien auf Wände, Böden und Dächer auftragen
summary: Geben Sie Elementen ein Material wie Ziegel, Verkleidung, Schindeln, Holz oder Fliesen, auf dem ganzen Element oder nur auf einer Seite. Es wird in der IFC gespeichert und in gerenderten Bildern angezeigt.
keywords: Farbe, Material, Materialien, Oberfläche, Oberflächen, Textur, Ziegel, Verkleidung, Schindeln, Dacheindeckung, Holz, Stein, Fliesen, Beton, Putz, Gras, Kies, Glas, Metall, Wandseite, innen, außen, Bodenbelag, Raum, Oberflächenstil
from: fbfed676
---

{{ui:Farbe}} in der Symbolleiste öffnet die Materialbibliothek über der 3D-Ansicht: Ziegel und Mauerstein, Verkleidung, Dacheindeckung, Holz, Stein, Fliesen, Beton, Putz, Gelände, Glas und Metall.

## Elemente auftragen

1. Klicken Sie auf {{ui:Farbe}}.
2. Klicken Sie auf ein Material.
3. Klicken Sie in der 3D-Ansicht auf Elemente. Jeder Klick versieht das angeklickte Element mit dem Material.

Um viele auf einmal zu versehen, wählen Sie sie zuerst aus (Klick, {{key:Ctrl}}+Klick oder eine [Suche](topic:find)) und klicken Sie dann auf das Material: Jedes ausgewählte Element erhält es in einem Schritt.

Das Element zeigt die Farbe des Materials sofort in der 3D-Ansicht. Die Textur erscheint in einem [gerenderten Bild](topic:render). {{key:Esc}} oder {{ui:Schließen}} beendet das Auftragen.

## Nur eine Seite auftragen

Wählen Sie {{ui:Nur die angeklickte Seite}} und klicken Sie dann auf die gewünschte Seite: die Außenseite einer Wand in Verkleidung und ihre Innenseite in einer anderen Oberfläche, die Oberseite eines Bodens in Holz, während die Unterseite unverändert bleibt. Der Rest des Elements behält sein Material.

Eine Seite wird anhand der eigenen Richtungen des Elements bestimmt. Sie bleibt dieselbe Seite, wenn Sie das Element verschieben oder drehen.

Um Böden raumweise zu gestalten, geben Sie jedem Raum einen eigenen Boden ({{ui:Zeichnen}} › {{ui:Boden}} › **Dieser Raum**, siehe [Räume, Böden, Decken und Dächer](topic:floors-and-roofs)) und versehen Sie dann die Oberseite jedes Bodens.

## Material entfernen

Klicken Sie auf das gestreifte Feld ({{ui:Kein Material}}) und dann auf das Element. Alle Materialien darauf, einschließlich der Seiten, werden entfernt.

## In der Datei

Das Auftragen ändert die IFC (jeder Schritt einzeln, {{key:Ctrl+Z}} macht ihn rückgängig) und bleibt reines IFC:

- Jedes versehene Element erhält den Eigenschaftssatz `CadCraft_Render`, der sein Material nennt, und eine Eigenschaft je versehener Seite;
- sein Körper erhält einen Oberflächenstil mit der Farbe des Materials, damit andere BIM-Programme die Farbe zeigen. In IFC4 nennt der Stil außerdem die Textur.

Wenn BimCraft eine von Ihnen versehene Wand umformt (etwa wenn Sie ihr Ende verschieben), behält die Wand ihr Material und ihre Farbe – in BimCraft, in Bildern und in anderen Programmen.

:::note
Die Texturen werden von BimCraft selbst gezeichnet: Sie funktionieren offline und sind für jede Verwendung frei (CC0). Eigene Bildtexturen sind noch nicht umgesetzt.
:::

## Texturen in der 3D-Ansicht

Eine versehene Ziegelwand zeigt ihre Ziegel, ein Holzboden seine Dielen, in der echten Größe, sobald das Material aufgetragen ist. Deaktivieren Sie **Die Texturen in der 3D-Ansicht anzeigen** in der Palette „Farbe“, um stattdessen flache Farben zu sehen. Ein sehr großes Modell schaltet sie von selbst aus und sagt es. Farbe nach Eigenschaft zeigt immer ihre eigenen Farben. Die Texturen werden vom Programm gezeichnet, es wird also nichts heruntergeladen; die Renderings und die glTF-Datei enthalten sie in jedem Fall.
