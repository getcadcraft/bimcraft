---
title: Ausstattung und Möbel aus der Bibliothek platzieren
summary: Ein Element in der Bibliothek, einer Datei oder der geöffneten Zeichnung finden, es mit einer Geistervorschau auf einem Geschoss eines IFC-Modells platzieren, drehen, an eine Wand einrasten lassen und speichern.
keywords: verschieben, drehen, ziehen, Bibliothek, LibraryCraft, platzieren, einfügen, Ausstattung, Möbel, Block, Familie, Element, Katalog, Inhalt, kcl, csv, gltf, obj, rfa, dwg, IFC-Typ
from: 3dad5d4b
---

## Was Sie tun

Ein Bibliothekselement in ein IFC-Modell setzen: ein Waschbecken, einen Arbeitstisch, einen Stuhl. BimCraft schreibt es als richtiges IFC-Element mit einem Typ, sodass jede Kopie desselben Elements eine gemeinsame Geometrie teilt, und seine Daten, Artikelnummer und Lizenz kommen mit.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Klicken Sie rechts auf die Registerkarte {{ui:Bibliothek}} neben {{ui:Eigenschaften}} oder auf {{ui:Bibliothek}} in der Symbolleiste über dem Modell.
3. Wählen Sie eine Quelle:
   - **Eingebaute Symbole**: generische Sanitär-Planzeichen, die BimCraft unter Apache-2.0 beilegt, offline verfügbar. Prüfen Sie ihre Maße vor der Ausführung. Für elektrische Planzeichen und IFC-Elektrogeräte verwenden Sie **Build › Elektro**.
   - **Bibliothek**: die CadCraft-Bibliothek auf dieser Website. Öffentliche Elemente benötigen keine Anmeldung.
   - **Diese Datei**: die Blöcke einer geöffneten DWG- oder DXF-Zeichnung. Ein dynamischer Block mit Sichtbarkeitszuständen wird je Zustand angeboten, benannt „Spüle: Doppelbecken“, und jeder wird nur mit den Objekten dieses Zustands gezeichnet.
   - **Dateien…**: eine DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- oder CSV-Datei auf Ihrem Computer. Sie wird in diesem Reiter gelesen; nichts wird hochgeladen.
   - **Andere Quellen**: eine andere Bibliothek, die dasselbe Quellenformat spricht. Fügen Sie ihre Adresse einmal hinzu; sie wird in diesem Browser gespeichert.
4. Suchen oder wählen Sie eine Kategorie, dann klicken Sie auf eine Karte. Die Karte zeigt eine Planvorschau, den Namen, Hersteller und Modell, die Lizenz und die Version.
5. Klicken Sie auf {{ui:Im Plan platzieren}} (in der Grundrissansicht) oder {{ui:Im Modell platzieren}} (in der 3D-Ansicht). In {{ui:Teilen}}, wo Plan und 3D-Ansicht beide zu sehen sind, ist die Schaltfläche geteilt: Ihre Hauptaktion ist {{ui:Im Plan platzieren}}, und der Pfeil an ihrem rechten Ende öffnet ein Menü mit {{ui:Im Modell platzieren}}. Oder ziehen Sie die Karte oder das Bild in den Details des Elements auf den Plan oder die 3D-Ansicht: Das Element wird dort platziert, wo Sie loslassen. Mit Stift oder Finger halten Sie die Karte einen Moment gedrückt und ziehen dann.
6. Wählen Sie das Geschoss in der Platzierungsleiste. In der 3D-Ansicht werden Geschosse darüber während des Platzierens ausgeblendet, und die Ansicht wechselt nach oben; im Grundriss zeigt der Plan dieses Geschoss bereits. Wählen Sie {{ui:Im Modell platzieren}} allein aus dem Grundriss, öffnet sich die 3D-Ansicht daneben.
7. Bewegen Sie den Zeiger über das Modell: Ein durchsichtiger Kasten zeigt, wohin das Element kommt.
8. Drücken Sie {{key:R}}, um es um 90° zu drehen. Drücken Sie {{key:Tab}} (oder {{ui:Wandfang}}), um seine Rückseite an die nächste Wand zu legen, zum Raum gewandt.
9. Klicken Sie zum Platzieren. Oder geben Sie die Position in **X, Y (mm)** ein, zum Beispiel `1200, 3400`, und drücken Sie {{key:Enter}}.

Eine Leuchte oder etwas anderes, das von oben hängt: Stellen Sie **Befestigung** auf **An der Decke**. Die Oberkante des Elements sitzt dann an der Unterseite der Decke über der Stelle (oder auf der Höhe des Geschosses, wo keine Decke ist). Mit einem Deckenplan in der Grundrissansicht beginnt **Befestigung** bei **An der Decke**.

10. Beantworten Sie die eine Frage: die **Artikelnummer** (die nächste freie Nummer ist eingetragen), die Menge und eine Notiz. Drücken Sie {{key:Enter}}.
11. Platzieren Sie weitere, oder drücken Sie {{key:Esc}}, um zu beenden.
12. Klicken Sie auf {{ui:Als IFC speichern}}, um die bearbeitete Kopie herunterzuladen.

## Grundriss oder Modell

Die Platzierungsschaltfläche der Bibliothek folgt der Ansicht, in der Sie sich befinden, und wechselt, sobald Sie die Ansicht ändern (die Schaltflächen {{ui:Grundriss}}, {{ui:Teilen}} und {{ui:3D}}, die Tastatur, das Öffnen einer Datei). Grundriss zeigt eine Schaltfläche, {{ui:Im Plan platzieren}}; 3D zeigt eine Schaltfläche, {{ui:Im Modell platzieren}}; Teilen zeigt die geteilte Schaltfläche, mit {{ui:Im Plan platzieren}} als Hauptaktion und {{ui:Im Modell platzieren}} in ihrem Menü. Beide Wege nutzen dieselbe Platzierungsleiste und schreiben dasselbe IFC-Element: Der Zeiger arbeitet für den einen in der Grundrissansicht und für den anderen in der 3D-Ansicht. Drücken Sie {{key:Esc}} jederzeit, um zu beenden.

Das Ziehen einer Karte hat keine eigene Taste: Die geteilte oder die einfache Schaltfläche tut dasselbe, mit der Tastatur.

## Ein platziertes Element verschieben oder drehen

Wählen Sie in {{ui:Zeichnen}} das Element im Plan. Ein quadratischer Griff erscheint an seinem Einfügepunkt und ein runder Griff daneben.

- Ziehen Sie das Element oder seinen quadratischen Griff, um es zu verschieben. Es rastet wie das Wandwerkzeug ein (Wandenden und Wandflächen); {{key:Shift}} hält es rechtwinklig zu seiner bisherigen Lage.
- Ziehen Sie den runden Griff, um es in 15°-Schritten zu drehen. Halten Sie {{key:Shift}} für 1°-Schritte.
- Drücken Sie {{key:R}}, um es um 90° zu drehen.
- In **Eigenschaften** (auch in der 3D-Ansicht) geben Sie **X**, **Y** und **Drehung (°)** ein oder klicken auf **90° drehen**.

Jede Verschiebung ist ein Schritt zum Rückgängigmachen und wird in Live TeamWork übertragen. Das Element behält seine Artikelnummer, seine Bibliotheksdaten und seine Höhe über dem Geschoss. Noch nicht umgesetzt: Ziehen in der 3D-Ansicht.

## Was Sie sehen sollten

- Das Element im Modell, ausgewählt, mit seinen Eigenschaften rechts: ein Kasten **Bibliothekselement** mit seiner Lizenz und Quellenangabe, und die Sätze `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` und, für Elemente aus gekennzeichneten Zeichnungen, `CadCraft_SourceAttributes`.
- „Platziert: *Element* (Artikel *n*)“ in der Änderungsliste. {{key:Mod+Z}} macht es rückgängig.
- Die Statuszeile: „*Element* als Artikel *n* platziert.“

## Gut zu wissen

- Manche Elemente gibt es in mehreren Größen oder Ausführungen: Die Karte hat dann eine Auswahl **Variante**, und die, die Sie wählen, wird platziert. Siehe [Bibliothekselement mit Varianten platzieren und tauschen](topic:library-variants).
- Ein Element ohne 3D-Körper (ein 2D-Symbol) wird mit einem Platzhalterkasten platziert; Sie geben seine Höhe an, wenn danach gefragt wird.
- Mehr vom Gleichen: Wählen Sie ein platziertes Element und nutzen Sie {{ui:Kopieren}} und {{ui:Einfügen}} oder {{key:Mod+D}}. Siehe [Bibliothekselemente kopieren, einfügen und duplizieren](topic:copy-paste).
- Um jede Platzierung mit eingeschaltetem Wandfang zu beginnen, schalten Sie **Mit Wandfang beginnen** in den [BimCraft-Einstellungen](topic:settings) ein.
- Längen werden in die eigenen Einheiten des Modells umgerechnet, welche auch immer das sind.
- **Beiwerk** (Bäume, Sträucher, Personen, Autos) ist ebenfalls in der Bibliothek: Suchen Sie nach „tree“, „person“ oder „car“. Diese Elemente werden von CadCraft (CC0) gezeichnet und behalten ihre Farben, wenn sie platziert werden (ein Stamm braun, Blätter grün, Autoscheiben durchsichtig), in BimCraft und in anderen BIM-Programmen. Sie erscheinen in [gerenderten Bildern](topic:render).
- In einer IFC2X3-Datei wird der Körper als facettierter Volumenkörper geschrieben; in IFC4 als trianguliertes Flächennetz. Beide öffnen sich in anderen IFC-Werkzeugen.
- Eine Zeichnung (DWG oder DXF) lässt sich hier nicht speichern, deshalb werden Elemente nur in IFC-Modelle platziert. Nutzen Sie **Diese Datei** bei einer Zeichnung, um zu sehen, was ihre Blöcke würden.

## Elemente in Ihrer Sprache

Ein Element kann seinen Namen, seine Beschreibung und seinen Typ in anderen Sprachen tragen. Hat es sie in der Sprache, auf die BimCraft eingestellt ist (Einstellungen › Allgemein › Sprache), zeigt die Seite des Elements diese, mit dem Namen, den sein Hersteller ihm gab, darunter. Und **Platzieren** schreibt den Namen in Ihrer Sprache ins Modell, sodass die Liste {{ui:Ausstattung}} ihn so aufführt. Das Element bleibt dasselbe Element: Suche nach Updates und Tausch erfolgen über das Element selbst, nie über seinen Namen. Elemente ohne Übersetzung behalten ihre eigenen Wörter.

## Häufige Fehler

- **Die Platzierungsschaltfläche fehlt.** Kein IFC-Modell ist geöffnet. Öffnen Sie zuerst eins.
- **Die Vorschau folgt dem Zeiger nicht.** Der Zeiger ist außerhalb des Bereichs des Modells, oder die Geschossebene ist nicht im Blick. Klicken Sie auf {{ui:Oben}}.
- **{{ui:Wandfang}} meldet, es gibt keine Wände.** Das Geschoss hat keine Wände in der IFC (manche Exporte legen Wände auf ein anderes Geschoss). Wählen Sie dieses Geschoss oder geben Sie X und Y ein.
- **Die Elemente einer Datei sind die falsche Größe.** Die Datei hat keine Einheiten oder nennt die falschen. Wählen Sie in {{ui:Dateien…}} die Einheiten und lesen Sie die Datei erneut ein.

:::tip
Wird dasselbe Element zweimal platziert, teilt es sich einen IFC-Typ, sodass ein Modell mit vierzig Stühlen den Stuhl nur einmal speichert.
:::
