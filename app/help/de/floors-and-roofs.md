---
title: Räume, Böden, Deckenverkleidungen und Dächer
summary: Räume entstehen, sobald Wände sie umschließen; geben Sie einem Raum oder dem ganzen Gebäude einen Boden und eine Deckenverkleidung und setzen Sie ein Walm- oder Satteldach auf die Wände. Alles folgt, wenn sich die Wände verschieben.
keywords: Raum, Räume, Space, Fläche, Umfang, Boden, Decke, Unterboden, Deckenverkleidung, Dach, Walmdach, Satteldach, Dachneigung, Dachüberstand, Traufe, First, Kehle, 6/12
from: 1fb1813c
---

## Ziel

Schließen Sie die Gebäudehülle ab. Räume entstehen von selbst aus den Wänden; Böden, Deckenverkleidungen und das Dach brauchen je einen Klick. Da sie aus den Wänden abgeleitet werden, folgen sie, wenn sich die Wände verschieben.

## Räume

Jeder Bereich, der von gezeichneten Wänden umschlossen wird, ist ein Raum. Er erscheint, sobald die letzte Wand ihn schließt, mit einer Nummer (101, 102 … im ersten Geschoss, 201 … im nächsten) und einem Namen (**Raum 1**, **Raum 2** …), und seine Fläche wird im Grundriss in seiner Mitte angezeigt.

- Mit eingeschaltetem {{ui:Wählen}} klicken Sie in einen Raum, um ihn auszuwählen. Ändern Sie unter **Eigenschaften** den **Name** (zum Beispiel `Küche`) und die **Nummer**; Fläche und Umfang werden angezeigt.
- Wenn Sie eine Wand zwischen zwei Räumen löschen, werden sie zu einem; wenn Sie eine Wand quer durch einen Raum zeichnen, werden es zwei. Ein Raum behält Name und Nummer, während sich die umgebenden Wände verschieben.
- Ein Raum lässt sich nicht allein löschen: Er ist der Bereich, den die Wände bilden.

Flächen werden innen an den Wandflächen gemessen. Räume werden als IFC-Räume mit Bodenfläche, Umfang, Höhe und Volumen gespeichert, sodass die Listen sie auswerten (siehe [Mengen summieren, Elemente auflisten und Räume in Listen ausgeben](topic:quantity-totals)).

## Böden

1. Klicken Sie auf {{ui:Boden}}.
2. Wählen Sie **Dieser Raum** oder **Das ganze Gebäude**, die **Art** (Holzboden oder Betondecke) und die Dicke.
3. Zeigen Sie in einen Raum (oder irgendwohin im Gebäude). Was der Boden abdecken würde, wird mit seiner Fläche hervorgehoben.
4. Klicken Sie. Die Oberkante des Bodens liegt auf der Fußbodenhöhe des Geschosses; er reicht um seine Dicke nach unten. Ein Boden für das ganze Gebäude reicht bis zu den Außenflächen der Wände.

## Deckenverkleidungen

1. Klicken Sie auf {{ui:Deckenverkleidung}}.
2. Wählen Sie **Dieser Raum** oder **Das ganze Gebäude** und ihre **Höhe** über dem Boden.
3. Zeigen Sie hinein und klicken Sie.
4. Um sie von unten zu sehen, mit ihrem Raster und den Leuchten darauf, schalten Sie den Grundriss auf seine Deckenansicht um: siehe [Ansichten, Ansichtsbereiche und eigene Blätter](topic:views-and-sheets).

## Ein Dach

1. Klicken Sie auf dem Geschoss, dessen Wände das Dach tragen, auf {{ui:Dach}}.
2. Geben Sie die **Neigung** als Anstieg über 12 (`6/12`) oder in Grad (`30`) ein, sowie den **Überstand**.
3. Wählen Sie die **Enden**: **Walmdach** (alle Seiten geneigt), **Giebel an den kurzen Seiten** oder **Giebel an den langen Seiten** (ein Gebäude mit vier Seiten) oder **Pultdach**.
4. Zeigen Sie ins Gebäude: Traufe und First werden im Grundriss angezeigt. Klicken Sie.

Das Dach liegt auf den Wänden, im Geschoss darüber, und seine Unterseite schließt an die Außenfläche der Wände an. Giebelseiten werden mit einer Giebelwand gefüllt, die so dick ist wie die Wand darunter. Ein L-, T- oder U-förmiges Gebäude erhält ein Walmdach, dessen Flügel sich in Kehlen treffen.

## Ändern

Wählen Sie einen Boden, eine Deckenverkleidung oder ein Dach (in der 3D-Ansicht, im Modellbaum oder ein Dach durch Klicken innerhalb seines Umrisses im Geschoss darüber) und ändern Sie es unter **Eigenschaften**: bei einem Boden seine Art, Dicke und wie weit seine Oberkante über dem Geschoss liegt; bei einer Deckenverkleidung Höhe, Dicke und das **Muster** (das Raster, das ein Deckenplan darauf zeichnet: keines, 600 × 600, 600 × 1200, 2' × 2' oder 2' × 4'); bei einem Dach Neigung, Überstand, Enden und Dicke. Jede Änderung ist ein einzelner Rückgängig-Schritt.

## Einem Boden, einer Deckenverkleidung oder einem Dach einen Typ mit Schichten geben

Ein Boden, eine Deckenverkleidung und ein Dach können wie eine Wand einen **Typ** erhalten: einen benannten Aufbau aus Schichten, jede mit ihrem Material und ihrer tatsächlichen Dicke.

- **Beim Platzieren.** Die Werkzeuge Boden, Deckenverkleidung, Dach und Boden zeichnen haben in ihrer Zeile eine Liste **Typ**. **Kein Typ** platziert es wie bisher mit eigener Dicke. Ein Typ platziert es so dick, wie alle Schichten des Typs zusammen.
- **Später.** Wählen Sie den Boden, die Deckenverkleidung oder das Dach und wählen Sie unter **Eigenschaften** den **Typ**. Das Element bleibt dasselbe Element: sein Platz, sein Raum und seine Daten bleiben erhalten, und nichts wird neu gezeichnet. Nur sein Typ, seine Dicke und sein Material ändern sich. So wird ein Element aus der Entwurfsphase zu einem ausgearbeiteten: Tauschen Sie seinen generischen Typ gegen einen echten.
- **Typ bearbeiten…** öffnet den Typeditor für diesen Typ: Schichten von **oben** nach unten, den Kern, die Funktion jeder Schicht und die LOD-Kennzeichnung des Typs. Beim Speichern ändert sich jedes Element des Typs in einem Schritt, und ein Schritt {{ui:Rückgängig}} nimmt es zurück. Wenn Sie einen Startertyp ändern, wird eine Kopie als eigener Typ gespeichert.
- Solange ein Element einen Typ hat, gehört seine **Dicke** zum Typ und lässt sich nicht eingeben. Wählen Sie einen anderen Typ oder **Kein Typ**, um sie zu ändern.

Die Startertypen sind je ein **generischer** Typ (eine Schicht aus dem generischen Material, mit LOD 200 gekennzeichnet) und zwei geschichtete (mit LOD 300 gekennzeichnet): ein Holzbalkenboden und ein Betonboden mit Estrich; ein Holzdach und ein Betonflachdach; eine Gipskartondecke und eine abgehängte Kacheldecke. Es sind Ausgangswerte, keine geprüften Konstruktionen: Prüfen Sie die Schichten, bevor Sie sich darauf verlassen.

Die Liste **Schichten: Fläche und Volumen** führt jede Schicht jedes verwendeten Typs auf; siehe [Listen, Bemaßung und PDF](topic:plan-schedules-and-pdf). Typen für Böden, Dächer und Deckenverkleidungen wandern zwischen Projekten in einem Typpaket oder als Bibliothekselement; siehe [Typpakete](topic:type-packs).

## Gut zu wissen

- Wenn Sie Wände verschieben, hinzufügen oder löschen, werden die Räume, Böden, Deckenverkleidungen und das Dach darüber neu erstellt.
- Ein Dach passt zu jedem Umriss. Um jeder Wand eine eigene Neigung, einen Giebel- oder Pultabschluss, eine erhöhte Schwelle, ein Stirnbrett und eine Untersicht zu geben oder eine einzelne Dachebene zu zeichnen, siehe [Dächer: eine Neigung für jede Wand, Giebel, Pultdächer und Dachebenen](topic:roofs).
- {{key:Delete}} löscht einen ausgewählten Boden, eine Deckenverkleidung oder ein Dach.
