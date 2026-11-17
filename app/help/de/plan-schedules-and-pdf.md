---
title: Listen, Bemaßung und PDF des Grundrisses
summary: Tür-, Fenster-, Wand- und Raumlisten, die sich beim Zeichnen ändern, Bemaßungen im Grundriss, und der Grundriss einer Ebene als PDF in einem Standardmaßstab gespeichert.
keywords: Liste, Türliste, Fensterliste, Wandliste, Raumliste, Mengen, Mengenermittlung, Fläche, csv, Tabellenkalkulation, Bemaßung, Maß, drucken, PDF, plotten, Maßstab, 1/4", 1:50, Blatt
from: d97cd16e
---

## Was Sie tun

Sehen, was das gezeichnete Gebäude ergibt, während Sie zeichnen: wie viele Türen und Fenster jeder Größe, wie viel Wand jedes Typs, wie groß jeder Raum ist. Setzen Sie Bemaßungen in den Grundriss und speichern Sie ihn als PDF zum Drucken oder Versenden.

## Listen

Mit eingeschaltetem {{ui:Zeichnen}} zeigt **Listen** im linken Bereich jeweils eine Tabelle:

- **Türen** und **Fenster**: jede nach ihrer Kennzeichnung (D1, D2 … und W1 …, beim Platzieren vergeben), ihrem Typ, Breite, Höhe (und Brüstung), Ebene und der Wand, in der sie liegt.
- **Wände nach Typ**: für jeden Wandtyp die Anzahl der Wände, ihre Dicke, ihre Gesamtlänge und ihre Seitenfläche als **Bruttofläche**, **Abzüge** und **Nettofläche**, mit einer Summe.
- **Räume**: Nummer, Name, Ebene, Fläche und Umfang, mit der Gesamtfläche.
- **Böden**: jeder Boden mit Ebene, Art und Dicke sowie Brutto-, Abzugs- und Nettofläche.
- **Oberflächen**: jede Oberflächenschicht der Wandtypen (nach Material und Wandseite) und die Decken, mit der Anzahl der Flächen sowie Brutto, Abzügen und Netto.
- **Wandtypen: Mengenermittlungsdaten**: was einmal je Wandtyp eingegeben wurde (Einheit, Mörtel, Satz), mit der Anzahl der Wände, ihrer Länge und Nettofläche sowie dem Satz mal der gemessenen Menge. Siehe [Wandaufbauten](topic:wall-assemblies).

- **Oberflächen nach Raum**, **Oberflächen nach Wand**, **Oberflächen nach Zone** und **Oberflächenmengen**: was jeden Raum bedeckt, mit Flächen, Fliesenanzahl einschließlich Zuschnitten und Untergrundvolumen. Siehe [Raumoberflächen und Oberflächenlisten](topic:room-finishes).
- Eigene **Zusammenstellungen**: eine Liste, die Sie gruppiert, summiert und unter einem Namen gespeichert haben. Siehe [Listen anordnen, speichern und exportieren](topic:schedule-layouts).

Die Tabellen ändern sich mit jeder Bearbeitung. Klicken Sie auf eine Zeile oder eine einzelne Zahl, um die Elemente zu wählen, aus denen sie stammt. **CSV herunterladen** speichert die Tabelle zum Öffnen in einer Tabellenkalkulation; **Excel herunterladen** und **Für Google Sheets kopieren** stehen darunter. **Raumoberflächen** und **Spezifikation** ([Spezifikation aus dem Modell schreiben](topic:specification)) öffnen sich von derselben Stelle aus.

## Fläche und Volumen jeder Schicht

Wählen Sie **Schichten: Fläche und Volumen** in der Liste Listen. Sie hat eine Zeile für jede Schicht jedes verwendeten Wand-, Boden-, Dach- und Deckentyps: das Element, den Typ und seinen LOD, die Schicht (von der Außenseite einer Wand gezählt, von der Oberseite eines Bodens, Daches oder einer Decke), ihr Material und ihre Funktion, ihre Dicke, wie viele Elemente, die **Nettofläche** und das **Volumen**.

- Die Fläche ist die Nettofläche der Elemente dieses Typs, genau gemessen wie bei Wände nach Typ, Böden und Oberflächen, nach der Messmethode des Projekts. Ein Dach wird auf der Neigung gemessen; keine Messmethode hat eine Regel für Dächer.
- Das Volumen ist diese Fläche mal der eigenen Dicke der Schicht.
- Ein Boden, Dach oder eine Decke ohne Typ ist eine Zeile: eine Schicht von der eigenen Dicke.
- Ein Luftraum wird mit seiner Fläche aufgeführt und aus dem Gesamtvolumen herausgelassen. Eine Membran hat eine Fläche und kein Volumen.

Klicken Sie auf eine Zeile, um ihre Elemente zu wählen. **CSV herunterladen** speichert die Tabelle.

## Wie Flächen gemessen werden

Jede Fläche besteht aus drei Zahlen, die sich addieren: Brutto abzüglich Abzüge ergibt Netto. Die Regel steht über jeder dieser Tabellen, und es ist eine Regel: Die Listen, die in der IFC-Datei gespeicherten Mengen und die an TakeoffCraft übergebene Mengenermittlung nutzen alle dieselbe.

- **Eine Wand**: Brutto ist eine Seite der Wand, ihre Länge entlang der Mittellinie mal ihrer Höhe (die echte Fläche bei einer Wand mit geformter Ober- oder Unterkante). Jede Tür, jedes Fenster und jede andere Öffnung wird abgezogen, Breite mal Höhe, jede Öffnung einmal.
- **Ein Boden oder eine Decke**: Brutto ist die Fläche innerhalb ihrer Umrisse. Jede Öffnung und Aussparung darin wird einmal abgezogen.
- **Eine Wandoberfläche**: Jede Oberflächenschicht des Wandtyps deckt eine Seite der Wand, gemessen wie die Wand, mit denselben abgezogenen Öffnungen. Eine Oberfläche ist eine Schicht der Wand: Sie steht unter Oberflächen und wird nicht zur Wandfläche addiert, sodass eine Wand mit einer Tür nie doppelt gezählt wird.

Das ist der **CadCraft-Standard**: Jede Öffnung wird abgezogen, egal wie groß; Wandlängen gelten entlang der Mittellinie; Laibungen werden nicht gemessen. Er gilt für jedes Projekt, bis Sie eine andere Methode wählen.

## Eine Messmethode wählen

Oberhalb der Liste listet **Messmethode** die Methoden, die mit BimCraft kommen, und **Methodendatei laden** nimmt die eigene des Büros. Die Wahl wird als ein Rückgängig-Schritt in der IFC-Datei gespeichert, und drei Dinge folgen ihr gleichzeitig: die Listen, die Nettomengen in der Datei und die an TakeoffCraft übergebene Mengenermittlung. Die Regel über jeder Tabelle beginnt dann mit der Methode, ihrer Quelle, dem Datum, an dem die Quelle gelesen wurde, und den Worten **Von keiner Mengenermittlerin und keinem Mengenermittler geprüft**.

Eine Methode ist eine kleine Datei mit Fakten, kein Programmcode. Für jede Menge legt sie fest:

- **die kleinste abgezogene Öffnung**: zum Beispiel bleibt eine Öffnung von 0.5 m² oder weniger in der Wandfläche;
- **wie Wandanschlüsse gemessen werden**: entlang der Mittellinie; oder bei einer Wand, die gegen eine andere endet, bis zur Fläche dieser Wand; oder bei jedem Wandende, das auf eine andere Wand trifft, bis zur nahen Fläche;
- **ob Laibungen für eine Oberfläche gemessen werden** (die Rückseiten der Oberfläche in den Öffnungen), als Fläche oder, wenn flach, als Länge. Die Tiefe einer Laibung gilt als halbe Wanddicke;
- **was sie über Mauerwerk sagt**: wie es gemessen wird und welchen Verschnitt- oder Mörtelzuschlag sie angibt.

Die Methoden, die mit BimCraft kommen:

| Methode | Wände: kleinste abgezogene Öffnung | Wandoberflächen | Decken | Mauerwerk |
|---|---|---|---|---|
| CadCraft-Standard | jede Öffnung | jede Öffnung | jede Aussparung | keine Zuschläge |
| RICS NRM 2 (Vereinigtes Königreich), 2. Auflage 2021 | 0.5 m² oder weniger bleibt drin | 1 m² oder weniger bleibt drin | 1 m² oder weniger bleibt drin | nach Fläche; keine Prozentsätze angegeben |
| AAQS Standard Method for Africa 2015 | 0.5 m² oder weniger bleibt drin | 0.5 m² oder weniger bleibt drin | 0.5 m² oder weniger bleibt drin | nach Fläche; netto gemessen, 0 % Verschnitt |
| IS 1200 (Indien), 1976, Mauerwerk | 0.1 m² oder weniger bleibt drin | Standard (siehe unten) | Standard | nach Volumen |
| BIA Technical Note 10 (Vereinigte Staaten), 2009 | jede Öffnung | Standard | Standard | 5 % Verschnitt bei Einheiten, 15 % bei Mörtel |

Lesen Sie diese Grenzen, bevor Sie sich auf eine Methode verlassen:

- **Keine Mengenermittlerin und kein Mengenermittler hat eine davon geprüft.** Jede wurde erstellt, indem die genannte Quelle gelesen und ihre Zahlen mit der Klausel festgehalten wurden, aus der sie stammen. Wenn Sie Mengenermittler sind und eine prüfen können, würden die Macher der App gern von Ihnen hören.
- Wo eine Regel nicht aus der Quelle gelesen werden konnte, sagt die Methode für sie **nicht bestätigt**, und der CadCraft-Standard wird genutzt. Keine Methode, die mit BimCraft kommt, hat eine bestätigte Regel für Wandanschlüsse, Laibungen oder Böden; diese werden unter allen auf die Standardweise gemessen.
- IS 1200 zieht Öffnungen im Putz in drei Stufen ab. Eine Methodendatei kann Stufen noch nicht halten, daher nutzen Wandoberflächen unter dieser Methode den Standard, und die Regel sagt das.
- Das Südafrikanische Standardsystem für das Aufmaß von Bauarbeiten ist **nicht** darunter: Sein Text konnte nicht gelesen werden. Die AAQS-Methode für Afrika sagt, sie beruhe auf der Ausgabe von 1991 dieses Systems, aber es ist ein anderes Dokument.
- BIA Technical Note 10 ist ein Kalkulationshinweis der Branche, kein Standard-Aufmaßverfahren.
- Eine Öffnung, die genau der kleinsten Größe entspricht, folgt den eigenen Worten der Methode („nicht über“, „weniger als“). Maße innerhalb von 2 Teilen in 10 000 davon zählen als genau diese Größe.
- Unter einer Methode folgen die Netto-Seitenfläche einer Wand und die Nettofläche eines Bodens oder einer Decke in der Datei der Methode, und der Mengensatz nennt sie. Die Bruttoflächen und Volumina in der Datei bleiben wie gezeichnet.

**Hinweise zu dieser Methode** unter der Auswahl sagen, was jede Quelle offenlässt. **Quelle öffnen** führt zum Dokument.

### Die eigene Methode des Büros

Eine Methodendatei ist JSON im Format `cadcraft-measurement-method`. Jeder Wert darin nennt die Klausel, aus der er stammt; ein Wert ohne Klausel wird abgelehnt. Die Datei wird beim Laden geprüft, ein falsches Feld wird benannt, und nichts aus einer Datei, die die Prüfung nicht besteht, wird genutzt. Einmal gewählt, wird die Datei im Projekt gespeichert, damit sich das Projekt auf einem anderen Computer gleich öffnet. Ihre ID ist ein eigener einfacher Name (sie darf nicht die ID einer Methode sein, die mit der App kommt).

## Ziegel, Blöcke und Mörtel

**Wandtypen: Mengenermittlungsdaten** zählt die Einheiten und den Mörtel jedes Wandtyps, dessen Einheit eine Länge und eine Höhe hat (siehe [Einem Typ seine Mengenermittlungsdaten geben](topic:wall-assemblies#give-a-type-its-takeoff-data)). Dies sind die Formeln, genau wie berechnet:

- **Einheiten je Fläche einer Schale** = 1 / ((Einheitslänge + Fuge) × (Einheitshöhe + Fuge)). Ein Ziegel 215 × 65 mm mit 10 mm Fuge: 1 / (225 × 75 mm) = 59.26 je m².
- **Einheitsbreiten quer über eine Schale** = (Schalendicke + Fuge) / (Einheitsbreite + Fuge), auf eine ganze Zahl gerundet, mindestens 1. Eine 102.5 mm Schale aus 102.5 mm Ziegeln ist 1; eine 215 mm Wand aus denselben Ziegeln ist 2.
- **Einheiten** = Einheiten je Fläche × Einheitsbreiten quer × Nettofläche der Wandseite, addiert über die Mauerwerksschalen des Typs.
- **Zu bestellende Einheiten** = Einheiten × (1 + Verschnitt % / 100), auf eine ganze Einheit aufgerundet. Der Verschnitt ist der am Typ eingegebene; ist keiner eingegeben, der der Methode, falls sie einen angibt; sonst 0 %.
- **Mörtel** = Nettofläche × Schalendicke, abzüglich des Volumens der Einheiten (Einheiten × Länge × Höhe × Breite), dann plus dem am Typ eingegebenen Zuschlag in Prozent für Griffe oder Lochung, dann plus dem Zuschlag der Methode, falls sie einen angibt. Er braucht die Einheitsbreite.

Angenommen wird: Jede Mauerwerksschale eines Typs ist aus der einen Einheit des Typs gebaut. Eine Schale, die dicker als eine Einheitsbreite ist, zählt als so viele Einheitsbreiten, jede wie eine der Länge nach gelegte Schale; Schnitte, Binder und Sonderformen werden also nicht getrennt gezählt. Wo keine Schicht als aus der Einheit gebaut angekreuzt ist, gelten die Kernschichten als Schalen, und die Notiz über der Tabelle sagt das. **Betrag** ist der Satz mal dem, worauf sich der Satz bezieht, was jetzt auch eine zu bestellende Einheit, 1000 zu bestellende Einheiten oder ein m³ Mörtel sein kann.

Kennzeichnungen sind die IFC-Kennzeichnungen der Elemente: Ändern Sie eine in den **Eigenschaften** (Kennzeichnung), und die Liste folgt. Für jedes IFC-Modell, gezeichnet oder nicht, summiert [Mengen summieren, Elemente auflisten und Räume listen](topic:quantity-totals) jede Eigenschaft.

## Bemaßung

Der Grundriss zeigt die Länge jeder gezeichneten Wand entlang ihrer Außenseite (bei einer Innenwand: entlang einer Seite) und, bei einer Wand mit Türen oder Fenstern, eine Kette von den Ecken zu jeder Öffnung. {{ui:Bemaßung}} in der Modellleiste blendet sie aus und wieder ein.

## Den Grundriss als PDF speichern

1. Zeigen Sie die gewünschte Ebene und stellen Sie die Einheiten im Bereich **Ebenen** ein.
2. Klicken Sie in der Modellleiste auf {{ui:Drucken}}.
3. BimCraft speichert „<Datei> — <Ebene>.pdf“: den Grundriss in Schwarzweiß im größten Standardmaßstab, der auf die Seite passt (1/4" = 1'-0", 1/8" = 1'-0" … auf Letter in Fuß und Zoll; 1:50, 1:100 … auf A4 in Millimetern), mit gefüllten Wänden, Türen, Fenstern, Raumnamen und Flächen, Bemaßungen und einem Schriftfeld mit Ebene, Datei, Schnitthöhe, Datum und Maßstab.

Das PDF wird aus Linien und Text gezeichnet, sodass es bei jedem Zoom scharf bleibt und sein Text durchsucht werden kann.

## Gut zu wissen

- Die Listen zeigen, was die Zeichenwerkzeuge erstellt haben. Türen und Fenster aus einem anderen Programm erscheinen stattdessen in den Mengensummen.
- Um den Auftrag zu bepreisen, übergeben Sie die Mengen an TakeoffCraft: siehe [Mengen an TakeoffCraft](topic:takeoff). Der CSV-Download bleibt für eine Tabellenkalkulation erhalten.
