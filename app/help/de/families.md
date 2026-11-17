---
title: Familien und ihre Größen
summary: Türen, Fenster und Möbel gibt es als Familien. Jede Größe einer Familie ist ein Typ in der IFC-Datei, sodass die Typenliste in BimCraft kurz bleibt, während andere Programme einfache Typen lesen.
keywords: Familie, Familien, Typ, Typen, Größe, Größen, Türtyp, Fenstertyp, Möbel, Tisch, Regal, Schrank, neue Größe, duplizieren, Familie platzieren, Familiendatei, ccfamily, IFC-Bibliothek, Projektbibliothek, Gruppe, Sichtbarkeit, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Was eine Familie ist

Eine Familie ist eine Art von Objekt in mehreren Größen: eine einflügelige Drehflügeltür, die 32, 36 und 42 Zoll breit ist, oder ein Tisch, der lang und kurz kommt. In BimCraft sehen Sie die Familie einmal, mit ihren Größen darunter, statt einer langen Liste von Typen.

IFC kennt keine Familien. In der Datei ist jede Größe ein gewöhnlicher Typ (ein Türtyp, ein Fenstertyp, ein Möbeltyp …), und die Familie ist eine Gruppe, die ihre Größen auflistet. Andere BIM-Programme lesen die Typen und die Gruppe so, wie sie sind; BimCraft liest die Familie daraus wieder zurück.

## Wo Sie sie finden

- Die Gruppe **Familien** im Projektbrowser listet die Familien in diesem Modell auf, mit der Anzahl ihrer Größen und der Anzahl platzierter Exemplare. Darunter stehen die **Startfamilien**: die Türen und Fenster der Werkzeuge Tür und Fenster sowie ein Tisch, ein Regalelement und ein Unterschrank.
- {{ui:Build}} › {{ui:Familien…}} zeigt dieselbe Liste in einem Fenster.
- Klicken Sie auf eine Familie, um sie zu öffnen: ihre Größen, die Werte jeder Größe und wie viele Elemente jede verwendet.

## Türen und Fenster

Die Werkzeuge Tür und Fenster listen die Familien dieser Art auf, daneben eine **Größenliste**. Wählen Sie eine Größe oder geben Sie **W** und **H** ein: Eine Breite und Höhe, die noch keine Größe hat, wird beim Platzieren der Tür zu einer neuen Größe der Familie. Türen gleicher Größe teilen sich einen Typ.

In {{ui:Eigenschaften}} zeigt eine gewählte Tür oder ein gewähltes Fenster ihre **Familie** und **Größe**. Wählen Sie eine andere Größe aus der Liste oder geben Sie eine neue Breite oder Höhe ein. {{ui:Die Familie öffnen}} öffnet die Familie, zu der sie gehört.

Der Rahmen jeder Tür oder jedes Fensters folgt der Wandstärke der eigenen Wand, wie schon vor den Familien. Der Typ der Größe hält die Tür außerdem für eine 140 mm starke Wand gezeichnet, für Programme, die Typen lesen.

## Neue Größe aus dieser Familie

1. Öffnen Sie die Familie.
2. Geben Sie unter **Neue Größe aus dieser Familie** ihre Werte ein (Breite, Höhe und die übrigen Parameter der Familie) und, falls gewünscht, einen Namen. Ohne Namen wird sie nach ihren Werten benannt.
3. Klicken Sie auf {{ui:Die Größe erstellen}}.

Zwei Größen können nicht dieselben Werte haben. **Umbenennen** ändert den Namen einer Größe; **Entfernen** nimmt eine Größe weg, die niemand verwendet; **Wählen** wählt die Elemente dieser Größe aus.

## Möbel platzieren

1. {{ui:Build}} › {{ui:Familie platzieren}} oder {{ui:Platzieren}} im Fenster einer Familie.
2. Wählen Sie in der Leiste die Familie und ihre Größe.
3. Klicken Sie im Plan, um es auf dem Geschoss zu platzieren. Drücken Sie {{key:R}}, um es vor dem Klick um 90° zu drehen. {{key:Esc}} beendet den Vorgang.

Die {{ui:Eigenschaften}} eines platzierten Teils zeigen seine Größe, seine Lage und wie weit es gedreht ist; {{key:Delete}} entfernt es. Jedes Teil einer Größe teilt sich die Form dieser Größe, daher ändert das Ändern der Familie alle.

## Größen aus einer Tabelle

{{ui:Größen aus einer Tabelle…}} im Fenster einer Familie liest eine CSV-Datei (Komma, Semikolon oder Tabulator). Die erste Zeile benennt die Spalten: den Namen oder die Bezeichnung eines Parameters und optional `Name`. Längen sind Millimeter, sofern Sie keine Einheit schreiben (`1.2 m`, `36 in`). Ja-/Nein-Spalten nehmen yes, no, true, false, 1 oder 0 an, und ein Parameter ohne Spalte behält seinen Standardwert. Jede Zeile wird zu einer Größe, in einem Schritt, den Sie rückgängig machen können; eine bereits vorhandene Größe wird übersprungen. Eine Zeile, die nicht gelesen werden kann oder die die Familie nicht zeichnen kann, lehnt die ganze Tabelle ab und nennt ihre Zeile. Höchstens 200 Zeilen und 1 MB. {{ui:Größen als Tabelle speichern}} schreibt dieselbe Tabelle wieder heraus.

## Pro Element festlegen

Ein im Editor als **Pro Element** markierter Parameter (ein Ja/Nein, das ein Oberlicht, eine Beschriftung oder ein Material hinzufügt) gehört nicht zu einer Größe: Zwei Türen derselben Größe können sich unterscheiden. Wählen Sie das Element, dann zeigen die **Eigenschaften** diese Parameter; ändern Sie einen, wird dieses Element mit seiner eigenen Form neu gezeichnet (Möbel und Ausstattungen erhalten eine eigene Form, Türen und Fenster werden in ihren Wänden neu erstellt). Setzen Sie alle auf ihre Standardwerte zurück, dann kehrt es zur Form seiner Größe zurück.

## Detailgrad

{{ui:Build}} › {{ui:Familien…}} › **Detailgrad** legt für jede Familie im Modell fest, was in den Volumenkörpern gespeichert und in den Plansymbolen gezeichnet wird: **Fein** behält alles, **Mittel** und **Grob** lassen die Teile weg, die der Editor als feiner markiert (kleinere Dateien, schnellere Ansichten). **Automatisch** speichert alles und lässt die Ansicht eines Blatts anhand seines Maßstabs wählen: 1:50 und größer fein, 1:100 mittel, 1:200 und kleiner grob. Ein Schritt, den Sie rückgängig machen können.

## Eine Familie duplizieren

Sie müssen nicht bei null anfangen. {{ui:Duplizieren}} kopiert eine Familie mit ihren Parametern, Volumenkörpern und Größen unter einem neuen Namen. Ändern Sie die Kopie im Editor; das Original bleibt unverändert.

## Familiendateien

- {{ui:Die Familiendatei speichern}} speichert eine `.ccfamily.json`: die Parameter, Volumenkörper und Größen der Familie. Öffnen Sie sie in einem anderen Modell mit {{ui:Eine Familiendatei öffnen…}} in der Gruppe Familien.
- {{ui:Als IFC speichern}} speichert die Familie als kleine IFC-Datei: die Typen ihrer Größen und ihre Gruppe, deklariert durch eine IFC-Projektbibliothek. Andere Programme öffnen sie als Satz von Typen; BimCraft öffnet sie wieder als Familie.

Eine hier geöffnete Familiendatei wird als Daten gelesen und geprüft, bevor etwas geschrieben wird. Eine Familie, deren Schlüssel bereits im Modell vorhanden ist, kommt als eigenständige Familie hinzu. Eine Familie, die andere enthält (siehe Enthaltene Familien in der Hilfe zum Editor), bringt diese mit: Die Datei listet sie auf, und das Modell behält die, die es bereits hat.

## Familien in der Bibliothek

Öffnen Sie {{ui:Familien…}} und wählen Sie {{ui:Aus der Bibliothek…}}, um die Familien zu sehen, die in der Bibliothek geteilt wurden. {{ui:Diesem Projekt hinzufügen}} liest eine davon wie eine Familiendatei: BimCraft prüft jedes Feld, bevor etwas erstellt wird, die Familie kommt als eigene Familie hinzu und öffnet sich im Editor. Das Hinzufügen ist ein Schritt, den Sie rückgängig machen können. Um Ihre eigenen zu teilen, verwenden Sie {{ui:Alle als Bibliothek speichern}} und senden Sie die Datei an die Bibliothek (deren Mitarbeitende veröffentlichen eine Familiendatei per Befehl, und jede Familie ist ein eigenes Element mit ihren Größen). Kann die Bibliothek nicht erreicht werden, meldet die Liste das, und nichts ändert sich.

## Typen anderer Programme

Typen, die andere Programme erstellt haben, erscheinen ebenfalls in der Gruppe Familien, gruppiert nach einer Vermutung: nach dem Teil des Elementnamens vor dem ersten Doppelpunkt, sonst nach Typnamen, die sich nur in ihren Zahlen unterscheiden. Das Familienfenster sagt, welche Vermutung verwendet wurde. Diese Typen werden aufgelistet, und Sie können ihre Elemente wählen, aber hier werden sie nicht bearbeitet: Sie haben kein Familienrezept.

:::note
Die Start-Türen und -Fenster werden genau so gezeichnet wie vor den Familien. Dateien, die vor den Familien erstellt wurden, öffnen sich unverändert: Ihre Türen und Fenster erscheinen unter ihrer Familie mit den verwendeten Größen und wechseln beim ersten Ändern auf eine eigene Größe.
:::

Siehe auch [Eine Familie bearbeiten](topic:family-editor) und [Türen und Fenster](topic:doors-and-windows).
