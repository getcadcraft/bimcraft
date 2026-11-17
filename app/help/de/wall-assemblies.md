---
title: Wandaufbauten und Referenzbemaßungen
summary: Eigene Wandtypen Schicht für Schicht mit einem festen Kern erstellen, eine Materialbibliothek des Projekts führen und an Flächen und Mittellinien bemaßen, die bei einer Änderung der Wand angebunden bleiben.
keywords: lod, Entwicklungsgrad, lod 200, lod 300, generisch, Wandaufbau, Wandtyp, Schichten, Kern, Kernfläche, Kernmittellinie, Luftschicht, Luftspalt, Membran, Unterspannbahn, Materialbibliothek, Materialien, Dicke, Referenzbemaßung, Bemaßung, assoziativ, Ortungslinie, Außenverkleidung, Ständer, Gipskarton
from: 4ea8fbf5
---

## Was Sie tun

Einen Wandtyp erstellen, der zu der Wand passt, die Sie bauen werden: Außenverkleidung, Beplankung, einen Kern aus 5½-Zoll-Ständern mit Gipskarton, oder Ziegel, einen Luftspalt und eine Holzrahmenwand. Markieren Sie, welche Schichten der Kern sind, damit eine Bemaßung oder eine Ortungslinie den Kern halten kann, während sich die Verkleidungen darum ändern. Bemaßen Sie dann Wände an den Flächen und Mittellinien, die Sie meinen.

## Einen Wandtyp erstellen

1. Ein Gebäude beginnen oder ein IFC-Modell öffnen und {{ui:Zeichnen}} einschalten, dann das Werkzeug {{ui:Wand}} wählen.
2. Einen Ausgangstyp in {{ui:Wandtyp}} wählen und {{ui:Wandaufbauten…}} öffnen. Ein Ausgangstyp öffnet sich als Kopie; geben Sie dem neuen Typ einen Namen.
3. Die Schichten laufen von außen oben in der Liste bis innen unten. Wählen Sie das Material jeder Schicht, geben Sie ihre Dicke ein (Projekteinheiten oder feste Werte wie `12.7 mm` oder `1/2"`), wählen Sie ihre Funktion (Oberfläche, Untergrund, Tragwerk, Dämmung, Membran) und setzen Sie bei den Kernschichten den Haken bei **Kern**. Der Kern muss eine durchgehende Gruppe sein.
4. {{ui:Schicht hinzufügen}} fügt eine Schicht hinzu, {{ui:Luftschicht hinzufügen}} fügt einen Luftspalt mit seiner Belüftung hinzu (nicht angegeben, unbelüftet, belüftet), und {{ui:Membran hinzufügen}} fügt eine Schicht ohne Nenndicke hinzu, etwa eine Unterspannbahn. Die Pfeile verschieben eine Schicht nach außen oder nach innen.
5. Die Vorschau zeichnet die Schichten maßstäblich, mit unterstrichenem Kern, nummeriert wie die Zeilen, und bemaßt jede Schicht, den Kern und die Gesamtdicke. {{ui:Typ speichern}}.

Der neue Typ steht in der Liste des Werkzeugs Wand und in den **Eigenschaften** einer gewählten Wand. Wenn Sie einen Typ speichern, den Sie bearbeitet haben, ändert sich jede Wand, die ihn verwendet; {{ui:Typ duplizieren}} erstellt einen eigenen Typ und gibt ihn nur den gewählten Wänden. Jedes Speichern ist ein Rückgängig-Schritt, zusammen mit den Wänden, die es verschiebt, den Türen und Fenstern darin und den Bemaßungen, die davon abhängen.

Eine Luftschicht vergrößert die Breite. Eine Membran tut das nicht: Sie bleibt im Typ, damit eine Liste sie später finden kann, und sie zählt nicht zur Dicke der Wand oder des Kerns. Eine Luftschicht oder Membran wird nie als massives Material gezählt. In einer als IFC2X3 gespeicherten Datei bleibt eine Membran im Datensatz des Typs erhalten, fehlt aber in dessen physischen Materialschichten.

## Einen Typ mit seinem Entwicklungsgrad (LOD) kennzeichnen

Ein Typ kann angeben, wie weit er entwickelt ist. Im Editor bietet **Entwicklungsgrad (LOD)** die feste Skala 100, 200, 300, 350, 400 und 500 oder **Nicht festgelegt**. Eine generische Wand („Wand 230 generisch“) ist LOD 100 oder 200; ein konkreter Aufbau mit seinen echten Schichten („230 Ziegel, beidseitig verputzt“) ist LOD 300 oder mehr. Die Kennzeichnung legen Sie fest: BimCraft berechnet sie nicht, und die Ausgangstypen haben keine.

Die Kennzeichnung steht neben dem Namen des Typs in der Liste des Werkzeugs Wand, in den Eigenschaften einer Wand und in der Liste [Typ tauschen](topic:wall-tools); der Bericht nach einem Tausch sagt, ob der Grad gestiegen oder gesunken ist. Um sie in der Liste **Wände nach Typ** und in deren CSV zu sehen, setzen Sie den Haken bei **Entwicklungsgrad jedes Wandtyps in der Wandliste anzeigen** unter Einstellungen › BimCraft › Wände: Eine letzte Spalte, LOD, wird hinzugefügt. Sie wird mit dem Typ in der IFC-Datei gespeichert (im Eigenschaftssatz `CadCraft_WallType` als Eigenschaft `LOD` und im Datensatz des Typs), also ist sie wieder da, wenn Sie die Datei erneut öffnen. Die Kennzeichnung gilt vorerst nur für Wandtypen, nicht für einzelne Bauteile oder andere Bauteilarten.

## Generische Wände für die Skizzenphase

Die Liste Typ des Werkzeugs Wand beginnt mit zwei **generischen** Wänden: **Generische Wand 200 mm (außen)** und **Generische Wand 100 mm (innen)**. Jede besteht aus einer Schicht des generischen Materials und ist mit LOD 200 gekennzeichnet. Verwenden Sie sie, wenn Sie wissen, wo die Wände hingehören, aber noch nicht, woraus sie bestehen.

Eine Wand, deren Typ mit **LOD 100** oder **LOD 200** gekennzeichnet ist, wird in jedem Grundriss als **ein schraffiertes Band** gezeichnet, bei jeder Detailstufe: ohne Schichten und ohne Schichtlinien. Das gilt für die generischen Wände und für jeden eigenen Typ, den Sie mit LOD 100 oder 200 kennzeichnen. Die Wand selbst ist vollständig: Sie hat ihre Dicke, ihre Türen und Fenster, ihre Räume und ihre Mengen.

Um sie weiterzuentwickeln, tauschen Sie ihren Typ (Bearbeiten › Wände › **Typ tauschen** oder Typ in den Eigenschaften). Die Wand wird nie neu gezeichnet: dieselbe Wand erhält den neuen Typ, und der Bericht sagt, was sich verschoben hat. Ein Typ mit LOD 300 oder höher wird wie bisher mit seinen Schichten gezeichnet.

Um jede Wand nach ihren Schichten zu zeichnen, unabhängig von ihrer Kennzeichnung: Einstellungen › BimCraft › Wände, und den Haken bei **Wände eines Typs mit LOD 100 oder LOD 200 als ein schraffiertes Band zeichnen** entfernen.

Die Ausgangstüren und -fenster sind ebenfalls generische Arten (eine Größe und eine Öffnungsart, kein Produkt). Wenn **Entwicklungsgrad jedes Wandtyps in der Wandliste anzeigen** eingeschaltet ist, zeigen die Listen Türen und Fenster für sie LOD 200.

## Einem Typ seine Mengenermittlungsdaten geben

Im Editor für Wandtypen nimmt **Mengenermittlungsdaten** auf, was ein Kalkulator über die Wand wissen muss, einmal für den Typ: das **Element**, aus dem sie gebaut ist (ein Ziegel oder Block: sein Name, seine Länge, Höhe und Breite), den **Mörtel** (Name und Fugendicke) und einen **Einheitspreis** mit seinem Währungscode (drei Buchstaben, etwa USD, EUR oder ZAR) und dessen Bezug: pro Quadratmeter oder Quadratfuß Nettowandfläche, pro Meter oder Fuß Wandlänge oder pro Wand. Alles davon ist optional.

Es wird mit dem Typ in der Datei gespeichert. Jede Wand des Typs meldet es dann: {{ui:Listen}} › **Wandtypen: Mengenermittlungsdaten** listet das Element, den Mörtel, den Preis und den Preis mal der gemessenen Menge auf, und die an TakeoffCraft übergebene Mengenermittlung trägt es an der Position dieses Wandtyps. Ändern Sie es am Typ, und jede Wand folgt.

Drei weitere Felder dienen dem Zählen von Ziegeln oder Blöcken und Mörtel:

- **Verschnitt bei Elementen, %** wird zur Anzahl der Elemente addiert. Lassen Sie es leer, um den Wert der Aufmaßmethode des Projekts zu verwenden, oder ohne Wert, wenn die Methode keinen hat. Geben Sie 0 ein, damit unabhängig von der Methode kein Verschnitt anfällt.
- **Zusätzlicher Mörtel, %** ist für Stoßfugen oder Lochungen, die Mörtel aufnehmen. Er wird zum Mörtelvolumen addiert. Lassen Sie es leer, wenn es keinen gibt.
- **Schichten aus diesem Element**: Setzen Sie bei jeder Schicht den Haken, die eine Schale dieses Ziegels oder Blocks ist. Eine zweischalige Wand hat zwei. Ohne Haken werden die Kernschichten gezählt.

Der Preis kann auch pro zu bestellendem Element, pro 1000 zu bestellenden Elementen oder pro m³ Mörtel gelten. Wo das Element eine Länge und eine Höhe hat, zeigt **Wandtypen: Mengenermittlungsdaten** die Elemente pro m² (oder ft²) einer Schale, die zu bestellenden Elemente und das Mörtelvolumen; die Formeln stehen unter [Ziegel, Blöcke und Mörtel](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Ein Typ hat ein Element: Zwei Schalen aus verschiedenen Elementen (eine Außenschale aus Ziegeln und eine Innenschale aus Blöcken) können vorerst nicht in einem Typ gezählt werden.

## Den Kern festhalten

Setzen Sie in **Eigenschaften** die **Ortungslinie** einer Wand auf eine Kernfläche oder auf die Kernmittellinie. Wenn Sie später eine Oberfläche hinzufügen oder verstärken, bleibt diese Linie stehen, und die Wand wächst darum herum; Wände, die an einer Ecke darauf treffen, folgen, sodass gerade Ecken geschlossen bleiben.

## Projektmaterialien

{{ui:Materialbibliothek…}} listet die Materialien des Projekts auf: Name, Kategorie, die Dicke, mit der eine Schicht beginnt, Anzeigefarbe, Schraffurmuster im Schnitt und Notizen. Die Bibliothek wird mit dem Projekt in der IFC gespeichert. Wenn Sie für eine Schicht ein Material wählen, erhält die Schicht dessen Standarddicke, die Sie anschließend ändern können; spätere Änderungen an der Bibliothek ändern nie Wände, die Sie bereits gezeichnet haben. Sie können auch ein Material aus der Materialliste der Schicht mit {{ui:+ Neues Material…}} erstellen.

## Referenzbemaßungen

{{ui:Beschriften}} › {{ui:Referenzbemaßung}}: Wählen Sie horizontal, vertikal oder ausgerichtet und eine Referenz: die außen- oder innenseitige Oberflächenfläche, die außen- oder innenseitige Kernfläche, die Wandmittellinie oder die Kernmittellinie. Wählen Sie die erste Wand, ändern Sie die Referenz bei Bedarf, wählen Sie die zweite und klicken Sie dann dorthin, wo die Maßlinie liegen soll. Zwei Referenzen an einer Wand messen ihre Gesamt- oder Kerndicke. {{ui:Referenzbemaßungen…}} listet die Bemaßungen der Ansicht auf, auch solche, die eine Wand verloren haben, mit Eigenschaften, Referenzen neu binden und Löschen.

### Den ganzen Grundriss nach Regeln bemaßen

{{ui:Beschriften}} › {{ui:Grundriss bemaßen…}} bemaßt die Außenseite des Geschossgrundrisses, den Sie betrachten: die Gesamtgröße in beide Richtungen und eine Reihe von Bemaßungen entlang jeder Außenkante (Wandenden, Wände, die auf die Kante treffen, und die Türen und Fenster darin), wobei die Reihen frei vom Gebäude liegen. Setzen Sie die Haken bei dem, was Sie möchten, lesen Sie die Anzahl ab und klicken Sie dann auf {{ui:Bemaßungen hinzufügen}}. Es sind gewöhnliche Referenzbemaßungen: Sie folgen den Wänden, wenn diese sich bewegen, und Sie können jede davon wählen, verschieben oder löschen. Die ganze Gruppe ist ein Rückgängig-Schritt, und wenn Sie es erneut ausführen, entsteht keine doppelt.

Es bemaßt nur die Außenseite: Räume im Gebäude, gekrümmte Wände und Wände, die im Grundriss nicht rechtwinklig stehen, bleiben den Handwerkzeugen überlassen, und Rasterlinien sind keine Wände, daher werden hier keine Bemaßungen zwischen Rastern erstellt. Ihr verbundener Assistent kann dasselbe mit `plan_dimension`.

Die Bemaßung ist an die Wände gebunden, nicht an eine Stelle auf dem Bildschirm: Wenn sich eine Wand bewegt oder ihr Typ sich ändert, folgt der Wert. Wird eine Wand gelöscht, zeigt die Bemaßung an, dass sie nicht aufgelöst ist, und keine Zahl, bis Sie sie neu binden oder den Vorgang rückgängig machen. Das Längenfeld nimmt auch Grundrisskoordinaten wie `10',12'` für eine Maßlinie an einer genau bestimmten Stelle an.

Bemaßungen gelten für Wände, die BimCraft gezeichnet hat, in Grundrissen. Noch nicht umgesetzt: Bemaßungen in Schnitten und Ansichten, zu Türen, Fenstern und anderen Komponenten sowie Wandschichten, die im Grundriss und im Schnitt gezeichnet werden; siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).

## Siehe auch

[Wände zeichnen](topic:draw-walls), [Eine Wand, Tür oder ein Fenster ändern](topic:change-a-wall-or-door), [Eigenschaften](topic:properties-panel).
