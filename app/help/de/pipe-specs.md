---
title: Rohrspezifikationen, Armaturen, Klappen und Herstellerfamilien
summary: Eigene Rohrspezifikationen einrichten (Größentabellen mit Werkstoff, Verbindung und Rauheit), die in der Modelldatei gespeichert bleiben; Armaturen, einen Schmutzfänger und Klappen in Leitungen setzen; und ein Armatur- oder Ausstattungsmodell eines Herstellers als Familie mit Anschlüssen einbinden.
keywords: Rohrspezifikation, Rohrspezifikationen, Rohrvorgabe, Rohrklasse, eigenes Rohr, Größentabelle, Rohr, Hygienerohr, Edelstahl, Schedule, Außendurchmesser, Wandstärke, Innendurchmesser, Rauheit, Druckstufe, csv, json, Import, Export, Tabellenkalkulation, Norm, bpe, din, en 10357, en 10255, Armatur, Armaturen, Absperrklappe, Abgleichventil, Regelventil, Schmutzfänger, Klappe, Volumenstromklappe, Brandschutzklappe, OEM, Hersteller, Familie, Familien, Anschlüsse, Anschluss, step, obj, gltf, ifc, Heizkörper, Konvektor, Plattenheizkörper, Lüftungsgerät, Auslass, Gitter
from: bc2f7c4e
---

## Was Sie tun

Rohre in Ihrer eigenen Spezifikation zeichnen, statt in den eingebauten Tabellen für Stahl, Kupfer und Kunststoff. Armaturen und Klappen in die Leitungen setzen und das Modell eines Herstellers mit Anschlüssen platzieren, an die die Rohre angeschlossen werden.

:::note
Eine Hilfe für Planung und Koordination. Eine Rohrspezifikation enthält die Zahlen, die Sie eingeben oder importieren: Prüfen Sie jede Tabelle gegen Ihren Projektstandard. Die eingebauten Armaturen, Schmutzfänger und Klappen sind schematische Formen, die aus der Leitung bemessen werden, nicht die Länge eines Herstellers oder einer Armaturennorm.
:::

## Rohrspezifikation einrichten

1. {{ui:Zeichnen}} einschalten, {{ui:Build}} öffnen und {{ui:Rohrspezifikationen}} wählen. Dieselbe Schaltfläche steht in der Leiste des Rohrwerkzeugs.
2. {{ui:Neu}} wählen oder von einer Datei, einem Einfügen oder einer Startvorlage ausgehen (unten).
3. Den Namen eingeben, die Norm oder Referenz, der sie folgt, den Werkstoff und den Ende- oder Verbindungstyp.
4. Eine Zeile je Größe eingeben: den Namen der Größe, den Außendurchmesser und die Wandstärke, in Millimetern. Geben Sie statt der Wandstärke den Innendurchmesser ein, wenn Sie den haben: Die andere Angabe wird ergänzt. DN, Druckstufe und Gewicht sind optional.
5. Optional: die Rauheit in Millimetern (die Druckverlustberechnung nutzt sie), eine Dämmstärke, mit der neue Leitungen beginnen, den Bogenradius als Faktor des Außendurchmessers, ob die Spezifikation T-Stücke und Reduzierungen hat, und eine eigene Farbe in 3D.
6. Die Medien ankreuzen, deren neue Leitungen mit dieser Spezifikation beginnen sollen, zum Beispiel Kaltwasser.
7. {{ui:Im Modell speichern}} wählen.

Die Spezifikationen werden in der Modelldatei gespeichert. Jeder, der die Datei öffnet, hat sie, und {{ui:Rückgängig}} macht eine Änderung rückgängig.

Eine Spezifikation oder eine ihrer Größen lässt sich nicht löschen, solange eine Leitung darin gezeichnet ist. Ändern Sie die Zahlen einer Größe, werden die Leitungen in dieser Größe neu gezeichnet.

## Eine Spezifikation in einem anderen Modell wiederverwenden

- {{ui:.json exportieren}} speichert die gewählte Spezifikation als kleine Datei; {{ui:Alle exportieren}} speichert jede Spezifikation des Modells. {{ui:Datei importieren}} liest sie wieder ein.
- {{ui:.csv exportieren}} speichert die Größentabelle für eine Tabellenkalkulation. {{ui:Datei importieren}} liest auch eine `.csv`.
- {{ui:Zeilen einfügen}} übernimmt eine Tabelle, die aus einer Tabellenkalkulation kopiert wurde. Die erste Zeile benennt die Spalten: `Size`, `OD` und `Wall` (oder `ID`), optional `DN`, `Pressure`, `Weight`. Eine Zeile je Größe. Zahlen sind Millimeter, außer Sie wählen Zoll oder eine Zelle schreibt ihre Einheit (`0.065 in`).

## Startvorlagen

{{ui:Startvorlage hinzufügen}} fügt eine dieser Vorlagen als bearbeitbare Kopie zu Ihrem Modell hinzu:

| Vorlage | Größen |
|---|---|
| ASME-BPE-Rohr | 1/4" bis 6" |
| EN 10357 Reihe A Rohr (DIN 11850 Reihe 2) | DN10 bis DN200 |
| EN 10255 Stahlrohr, mittlere Reihe | DN15 bis DN150 |
| EN 10255 Stahlrohr, schwere Reihe | DN15 bis DN125 |

Diese Tabellen enthalten die Außendurchmesser und Wandstärken, die zwei oder mehr veröffentlichte Lieferantenseiten für die Norm angeben und die übereinstimmen. Sie sind nicht aus den Normen selbst übernommen. Größen, die nur eine Seite angibt, sind weggelassen. Jede Vorlage nennt ihre Quellseiten und ist mit „gegen Ihren Projektstandard prüfen“ markiert. Eine Rauheit, Druckstufe oder ein Gewicht ist nicht angegeben.

## Eine Leitung in einer Spezifikation zeichnen

1. Wählen Sie {{ui:Rohr}}. Ein Medium, das Sie in einer Spezifikation angekreuzt haben, beginnt darin. Für jede andere Leitung wählen Sie die Spezifikation in der Werkstoffliste: Spezifikationen stehen nach den eingebauten Werkstoffen als „Spezifikation: Name“.
2. Die Größenliste enthält jetzt nur die Größen dieser Spezifikation. Wählen Sie eine und zeichnen Sie die Leitung.

Um eine Leitung später in eine Spezifikation zu verschieben, wählen Sie sie und ändern **Werkstoff** in den Eigenschaften. Ihre Größe wird die nächstliegende Größe der Spezifikation nach Außendurchmesser.

In der IFC-Datei trägt das Rohr den Namen, die Norm, den Werkstoff, die Verbindung und die Abmessungen der Spezifikation (`CadCraft_PipeSpec` und `Pset_PipeSegmentTypeCommon`, am Rohr und an seinem Typ).

Die Dimensionierungs- und Druckverlustberechnungen lesen den Innendurchmesser der Spezifikation. Hat die Spezifikation eine Rauheit, wird die Reibung einer Leitung damit berechnet (Darcy-Weisbach); ohne sie gilt der übliche Standardwert der Berechnung.

## Armaturen, ein Schmutzfänger und Klappen

1. Wählen Sie {{ui:Armatur}} und die Art in der Leiste: für Rohre einen Absperrschieber, Kugelhahn, Absperrklappe, Durchgangsventil, Rückschlagventil, Abgleichventil oder Regelventil oder einen Schmutzfänger; für Kanäle eine Volumenstromklappe oder eine Brandschutzklappe.
2. Klicken Sie auf die Leitung, an der sie sitzen soll. Die Leitung wird um sie herum getrennt, und beide Seiten bleiben verbunden. Sie übernimmt die Größe der Leitung und wandert mit ihr.

Die Eigenschaften der Leitung listen jede einzelne mit {{ui:Entfernen}} auf; die Leitung schließt sich wieder.

Die Druckverlustberechnung zählt einen Formteilverlust nur für Absperrschieber, Kugelhähne, Durchgangsventile und Rückschlagventile. Die anderen Arten, Klappen und Herstellerfamilien fügen dort keinen Verlust hinzu: Berücksichtigen Sie sie in Ihrer eigenen Prüfung. Sie werden in der Liste **Formteile und Armaturen** und in der Mengenermittlung gezählt und in die IFC-Datei als Armaturen, als Filter (der Schmutzfänger) und als Klappen mit zwei verbundenen Anschlüssen geschrieben.

## Das Modell eines Herstellers als Familie

1. Öffnen Sie {{ui:Build}} und wählen Sie {{ui:Familien}}, dann {{ui:Modell importieren}}. IFC-, STEP-, OBJ-, STL-, glTF- und Bibliothekselementdateien werden gelesen. Bei OBJ und STL stellen Sie zuerst die Einheiten und die Hochachse der Datei ein.
2. Geben Sie im Anschlussdialog Name, Hersteller und Modellnummer ein.
3. Wählen Sie, ob sie **An einer Leitung** liegt (eine Armatur, ein Schmutzfänger oder eine Klappe) oder **Ausstattung** ist, und wie sie geschrieben wird.
4. Geben Sie ihr ihre Anschlüsse. Jeder hat einen Namen, Rohr oder Kanal, das Medium, die Größe in Millimetern (bei einem Rohr der Außendurchmesser), die Nenngröße, wie Ihre Spezifikation sie nennt, den Endtyp, seine Lage und die Richtung, in die er zeigt. {{ui:An einer Fläche}} setzt einen Anschluss in die Mitte einer Fläche des Modellquaders. Die kleine Draufsicht zeigt die Anschlüsse.
5. Wählen Sie {{ui:Familie im Modell speichern}}.

Eine Familie, die an einer Leitung sitzt, braucht genau zwei Anschlüsse, die in einer Linie voneinander weg zeigen. Wählen Sie sie in der Liste des Armaturenwerkzeugs und klicken Sie auf eine Leitung: Sie wird in ihrer eigenen Länge platziert, und die Rohre verbinden sich mit ihren Anschlüssen.

Eine Familie wird nie gestreckt. Passen ihre Anschlüsse nicht zur Größe der Leitung, wird Ihnen beim Platzieren Bescheid gegeben, und {{ui:Verbindungen prüfen}} listet sie auf.

Eine Ausstattungsfamilie platzieren Sie mit {{ui:Ausstattung}}, Art **Herstellerfamilie**. Rohre und Kanäle rasten an ihren Anschlüssen ein.

{{ui:Als Bibliothekselement herunterladen}} speichert eine Familie mit ihren Anschlüssen als Datei, die Sie der Bibliothek übergeben können.

## Heizkörper und Konvektoren

{{ui:Ausstattung}} hat außerdem **Heizkörper** und **Konvektor / Plattenheizkörper**: allgemeine Körper mit einem Vor- und einem Rücklaufanschluss für Heizwasser. Siehe [Ausstattung mit Anschlüssen (Gebäudetechnik)](topic:mep-equipment).
