---
title: Neuheiten in 0.9
summary: Wandformen, Teilen, Versetzen, Strecken und Sperren an Rasterlinien, Geschosse unter der Erde, Rasterbemaßung und Messen im Grundriss, Doppelansichten mit Arbeitsstilen und Stifttabellen, Berichten als, Collada- und Google-Earth-Export, Scan zu BIM, Wind- und Erdbebenberechnung, Add-ons für Harzdruck.
keywords: Neuheiten, 0.9, Versionshinweise, Wandformen, Rechteck, Vieleck, Bogen, Linien wählen, Umriss nachzeichnen, Versatz, Verbindung, Bereich strecken, ausrichten und sperren, Wand teilen, Lücke, zusammenfügen, an Raster sperren, wachsen ab, messen ab, Geschoss darunter hinzufügen, Untergeschoss, Geschossbefehl, Rasterbemaßung, im Grundriss messen, Arbeitsstil, Doppelansicht, Eigene Kopie, verknüpfte Ansicht, Stifttabelle, drucken wie angezeigt, Melden als, Maßstab eingeben, SVG importieren, in Grundriss platzieren, in Modell platzieren, Collada, dae, kmz, Google Earth, Scan zu BIM, Windlast, Erdbeben, Finite Elemente, Dokumentenbereich, Harzdruck, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Evakuierung, Personen, Warteschlangen, Akustik, Nachhall, Impulsantwort, Hochwasser, Wind, Erdbeben, Gefahr, Lebenszyklus, Nutzungsdauer, IDS, Tags, Listen, verschieben, ausrichten, verteilen, Bild, Hintergrund, Scan zu Wänden, Gelände aus CivilCraft, Elementzeichnungen, Holzrahmen, Solar, PV, Teilung, VRF, Splitgerät, Rohrdimensionierung, Kabelkanal, Beleuchtungsstärke, Beton, Erdbeben, Scan vergleichen, EPSG, Projektion, Dokumente, Vorlage, CO₂, Kosten, EnergyPlus, Render-Engine, Öffnen in, USD, glb, Unreal, Rückgängig, Add-ons, pcf, Symbole, Pflanzen, Nachzeichnen, Stifte, Band, Projektbrowser, Layout
from: 5624fe88
---

Das ist, was sich in BimCraft 0.9 gegenüber 0.8.1 geändert hat. Die zwei großen Themen sind ein echtes Werkzeug für Wände und Ansichten, die sich so verhalten, wie Menschen aus den großen BIM-Programmen es erwarten. Drumherum kommen Collada-Export, Assistenten, die elektrische Geräte platzieren können, Scan zu BIM sowie Wind-, Erdbeben- und Finite-Elemente-Berechnungen im Reiter {{ui:Berechnung}}.

## Neu

### Wände

- **Ganze Formen zeichnen.** Öffnen Sie in {{ui:Zeichnen}} {{ui:Formen}} (oder wählen Sie eine Form in der Liste Form der Zeile Wand) für ein Rechteck, ein gedrehtes Rechteck, ein Vieleck mit 3 bis 64 Seiten, einen Bogen nach Mittelpunkt, einen tangentialen Bogen, Wände auf gewählten Linien oder Wände rund um einen geschlossenen Bereich, in den Sie klicken. Ein Rechteck sind vier Wände mit vier verbundenen Ecken und einem Rückgängig-Schritt. Siehe [Wandformen, Teilen, Versetzen, Bereich strecken und Sperren](topic:wall-tools).
- **Vor dem Zeichnen einstellen, danach ändern.** Die Zeile Wand hat {{ui:Versatz}} und {{ui:Verbindung}} (Haken entfernen, um freistehende Wände zu zeichnen). Danach verwenden Sie {{ui:Versatz}}, {{ui:Bereich strecken}} und {{ui:Ausrichten und sperren}} für gezeichnete Wände. Eine verschobene oder gestreckte Wand behält ihre Türen, Fenster und Bemaßungen. Jedes Rezept ist ein Rückgängig-Schritt.
- **Wände schneiden.** {{ui:Teilen}}, {{ui:Lücke}}, {{ui:Freie Enden}}, {{ui:Segment löschen}} und {{ui:Zusammenfügen}} schneiden eine Wand an einem Klick oder dort, wo eine andere Wand sie kreuzt. Ein Schnitt durch eine Tür wird abgelehnt. Siehe [Wandformen, Teilen, Versetzen, Bereich strecken und Sperren](topic:wall-tools).
- **Wände an Rasterlinien sperren.** Wählen Sie eine Wand entlang einer Rasterlinie und haken Sie in den {{ui:Eigenschaften}} {{ui:An Raster sperren}} an. Mit eingeschaltetem Werkzeug Raster geben Sie für eine gewählte Linie in {{ui:Verschieben um}} einen Abstand ein, und die gesperrten Wände folgen in einem Rückgängig-Schritt.
- **Eine Wand formen.** In den {{ui:Eigenschaften}} einer einzelnen Wand können Sie ihre Oberseite oder ihren Fuß an ein Dach, eine Geschossdecke oder eine Decke anbinden, ihren Umriss in einer Ansicht bearbeiten, sie neigen oder eine Wandöffnung ohne Tür oder Fenster schneiden. Siehe [Wand formen](topic:wall-shape).
- **Die Länge zeigt, welches Ende bleibt.** {{ui:Wachsen ab}} legt fest, ob Anfang, Ende oder Mitte stehen bleibt, wenn Sie die Länge ändern.
- **Länge und Grundrissbemaßung stimmen überein.** {{ui:Messen ab}} (Mittellinie, Innenfläche oder Außenfläche) steuert sowohl das Längenfeld als auch die Wandbemaßungen des Grundrisses. Es beginnt auf der Mittellinie, daher lesen die Wandbemaßungen des Grundrisses jetzt die Mittellinie, wo sie vorher die Außenfläche gelesen haben. Ändern Sie es in der Zeile Wand, in den {{ui:Eigenschaften}} oder in {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Wände}}.

### Geschosse, Raster und Messen

- **Geschoss darunter hinzufügen.** {{ui:Geschoss darunter hinzufügen}} im Bereich {{ui:Geschosse}} fügt ein Geschoss unter dem untersten hinzu, so hoch wie dieses, mit negativer Höhe (Geschoss -1, Geschoss -2). Nichts anderes verschiebt sich. {{ui:Geschosse hinzufügen…}} nimmt jetzt negative Höhen an, und wenn Sie GESCHOSS, GESCHOSSE, STOCKWERK oder STOCKWERKE in die Befehlszeile eingeben, öffnet sich {{ui:Geschosse hinzufügen…}}; außerdem gibt es eine Schaltfläche {{ui:Geschosse}} in den Menüs und Menübandreitern. Siehe [Grundstücke, Gebäude und Geschosse](topic:site-building-and-levels).
- **Rasterbemaßung im Grundriss.** Mit eingeschaltetem Werkzeug {{ui:Raster}} setzen Sie den Haken bei {{ui:Bemaßung}}, um den Abstand benachbarter Linien und die Gesamtgröße außerhalb der Blasen auf dem Grundriss jedes Geschosses einzuzeichnen. Siehe [Ein Raster bemaßen](topic:grid-dimensions).
- **Messen im Grundriss.** {{ui:Messen}} in der Gruppe {{ui:Zeichnen}} gibt einen Abstand mit den X- und Y-Unterschieden zwischen zwei Klicks an. Im Modell wird nichts gespeichert. Siehe [Im Grundriss messen](topic:measure-on-the-plan).
- **Mehrere Stützen auf einmal ändern.** Wählen Sie Stützen zusammen mit einer Wand, und die Auswahl listet jede Art mit {{ui:Nur diese behalten}} auf. Ein Klick behält die Stützen und zeigt ihre gemeinsamen Felder.
- **Eine Anzeigeeinheit überall.** Koordinaten, Messungen, Schnitte, Blattmaßstäbe, die Lasten und Ergebnisse des Reiters Rahmen sowie der Problemtext folgen der Einheit, die Sie wählen. Exporte bleiben im SI-System.

### Ansichten, Blätter und Druck

- **Arbeitsstil.** {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Arbeitsweise}} wählt zwischen jeder Ansicht mit eigenen Beschriftungen und Stifttabellen oder gemeinsamer Nutzung. Siehe [Arbeitsstil, duplizierte Ansichten, Stifte auf Papier, Melden als und Vorlagen](topic:working-style).
- **Eine Ansicht duplizieren.** Grundrisse, Deckenpläne, Ausschnitte, Ansichten und Schnitte können als {{ui:Eigene Kopie}} oder {{ui:Verknüpft}} dupliziert werden; {{ui:Zur eigenen Kopie machen}} macht eine verknüpfte unabhängig. Siehe [Arbeitsstil, duplizierte Ansichten, Stifte auf Papier, Melden als und Vorlagen](topic:working-style).
- **Drucken wie angezeigt oder über eine Stifttabelle.** Stiftüberschreibungen werden mit der Ansicht in der IFC gespeichert, und Blätter und PDFs zeichnen sie wie der Bildschirm. Dasselbe Thema behandelt die Stifttabellen.
- **Melden als.** {{ui:Melden als}} in den {{ui:Eigenschaften}} schreibt eine als Straße gezeichnete Platte, eine als Paneel gezeichnete Wand oder eine als Rampe gezeichnete Dachfläche als die Klasse, die Sie wählen, in die IFC und zählt sie so in Listen, Mengen, Suchen, Farbe nach und Probleme.
- **Bearbeiten in Ansichten und Schnitten.** Zeichnen und verschieben Sie Wände, Öffnungen, Geschosse, Bemaßungen und Notizen direkt in einer Ansicht oder einem Schnitt, mit Ihren eigenen Blattgrößen und Schriftfeldern. Siehe [In Ansichten und Schnitten bearbeiten](topic:edit-in-elevations).
- **Blätter.** Jedes Blatt kann Querformat oder Hochformat sein. Ein Feld {{ui:Maßstab eingeben}} steht neben der Maßstabsliste jeder platzierten Ansicht (1:64, 2:1, 1/4" = 1'). Sie können eine platzierte Zeichnung ziehen oder mit den Pfeiltasten schieben, und {{ui:Formate…}} › {{ui:SVG importieren…}} macht Ihren eigenen Blattentwurf zu einem Schriftfeld mit Feldern, die je Blatt eingegeben werden.
- **Bibliotheksnachweise auf einem Blatt.** Ein Zeichnungssatz mit Bibliothekselementen erhält eine Liste „Bibliotheksnachweise“, die Sie auf jedem Blatt platzieren können. Siehe [Bibliotheksnachweise](topic:library-credits).

### Bibliothek: Platzieren

- **Platzieren folgt der Ansicht.** In der Grundrissansicht zeigt die Bibliothek {{ui:In Grundriss platzieren}}; in 3D zeigt sie {{ui:In Modell platzieren}}; in Teilung zeigt sie eine geteilte Schaltfläche mit {{ui:In Grundriss platzieren}} als Hauptaktion. Beide Wege schreiben dasselbe IFC-Element. Sie können auch eine Bibliothekskarte auf den Grundriss oder die 3D-Ansicht ziehen; mit Stift oder Finger halten Sie gedrückt und ziehen dann. Siehe [Aus der Bibliothek platzieren](topic:place-from-library).

### Dateien und Assistenten

- **Collada und Google Earth.** {{ui:Collada}} in der Symbolleiste (Menü Datei in den Menüstilen) schreibt eine .dae-Datei oder eine .kmz-Datei, die dort auf der Karte platziert wird, wo das Modell liegt. Siehe [Das Modell als Collada oder für Google Earth exportieren](topic:collada).
- **Assistenten können elektrische Geräte platzieren.** Ihr verbundener Assistent hat neue Werkzeuge, um Geräte hinzuzufügen, aufzulisten, zu ändern und zu löschen und Leuchten zu setzen. Assistenten bleiben ausgeschaltet, bis Sie sie unter {{ui:Einstellungen}} einschalten. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
- **Scan zu BIM (Add-on).** Standardmäßig aus und braucht das Add-on Punktwolken. Es schlägt Geschosse, Wände, Türen und Fenster aus einem Scan vor, mit der gemessenen Abweichung für jedes; das Übernehmen ist ein Rückgängig-Schritt.

### Berechnung

- **Wind- und Erdbebendaten des Standorts.** Im Reiter {{ui:Berechnung}}: Windlasten nach ASCE 7-10 oder 7-16 für ein steifes geschlossenes Gebäude, mit einer Kraft auf jedem Geschoss als Lastfälle, und Erdbebendaten des Standorts mit einer USGS-Abfrage und dem Bemessungsspektrum.
- **Tragwerks-Nachverfolgung und Finite Elemente.** Betonnachweise nach ACI 318-19, äquivalente Horizontalkräfte nach ASCE 7-22, Geschossverschiebung, Platten und Wände als Flächentragwerke sowie Lastkombinationen nach ASCE 7 und EN 1990. Unsere eigene Finite-Elemente-Engine berechnet Schalen, Tetraeder und die Modalanalyse. Siehe [Betonbauteile prüfen und Erdbebenlasten erstellen](topic:concrete-and-seismic) und [Rahmenberechnung](topic:frame-analysis).

### Weitere Add-ons und Dokumente

- **Innenbeleuchtung (Add-on).** Platziert Leuchten und schreibt die Beleuchtungsstärke in Lux als Zahlen in den Grundriss jedes Geschosses, mit einer Blendungsschätzung und einem druckbaren Bericht.
- **Dokumentenbereich.** {{ui:Datei}} › {{ui:Dokumente…}} hat Auschecken und Einchecken mit einer Sperrdatei, Revisionsbuchstaben, Freigabestände und Verlauf.
- **Regionen und Stahl.** Südafrikanische Zeichnungs- und Bauvorschriften-Pakete im Add-on Vorschriften, und 976 britische Stahlprofile in der gemeinsamen Profiltabelle.
- **Kostenlose Add-ons für Harzdruck.** Slicer, Stützen und Sockel, Belichtungstest und die Dateiformate GOO, SL1, Chitubox und Anycubic, alle standardmäßig aus.

## In jeder App

- Beim Überfahren einer Schaltfläche oder eines Bedienelements erscheint ein Bootstrap-Tooltip.
- Der Starthinweis in einem leeren Zeichenbereich hat eine Schaltfläche zum Schließen; BimCraft merkt sich, dass er geschlossen wurde.
- Eine Reiterleiste eines Bereichs, die nicht passt, scrollt jetzt, statt abgeschnitten zu werden.
- Bei geöffnetem Dokument lautet der Browsertitel „<Dokument> - BimCraft | CadCraft“.
- In {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layout}} sind die Layouts eine Auswahlliste mit zweizeiligen Einträgen.
- Die Sprachliste in {{ui:Einstellungen}} bietet mehr Sprachen als in 0.8; andere Sprachen als Englisch sind maschinelle Entwürfe.

## Behoben

- **Verschieben funktioniert bei Treppen** sowie bei Rampen, Geländern, Dachflächen, frei stehenden Geräten, Bildern und Pfaden.
- **Ziehen einer Wand verzerrt den Raum nicht mehr.** Der mittlere Griff verschiebt die Wand rechtwinklig zu sich selbst, und ihre Ecken gleiten entlang der verbundenen Wände. Halten Sie {{key:Mod}} für das alte freie Verschieben gedrückt; {{ui:Rechtwinklig ausrichten}} bringt 90 Grad zurück.
- **Eine Änderung von Dicke oder Typ an einem verbundenen Knoten** hält die Ecke jetzt bei einem L, einem T, einem Knoten aus drei Wänden und neben einer gekrümmten Wand geschlossen.
- **Verschieben oder Kopieren einer Gruppe von Räumen** hält verbundene Wände außerhalb der Gruppe verbunden.
- **Eine Wandbemaßung behält ihre Identität beim Wiederholen.**
- **Eine Wand bei ausgeschaltetem Zeichnen wählen** zeigt in den Eigenschaften keinen Fehler mehr.
- **Rendern weicht auf WebGL aus**, wenn die Grafikkarte nicht starten kann, statt anzuhalten.
- **Die EnergyPlus-Prüfung** kann wieder eingeschaltet werden.
- **Dokumente öffnet sich als zentrierter Dialog.** {{key:Esc}}, das X oder ein Klick auf die abgedunkelte Seite schließt ihn.
- **Die Schaltflächen {{ui:Grundriss}}, {{ui:Teilen}} und {{ui:3D}}** erscheinen, sobald ein Modell geöffnet ist, nicht erst, nachdem Zeichnen einmal eingeschaltet war.

## Ehrliche Grenzen

- Nichts wurde auf echter Hardware gedruckt. Die Stützen für Harzdruck sind neu und nicht erprobt.
- Ergebnisse für Wind, Erdbeben, Beton und Finite Elemente sind Prüfhilfen für einen Ingenieur, gegen geschlossene Formeln geprüft, nicht gegen ein echtes Gebäude.
- Scan zu BIM wurde an einem synthetischen Gebäude getestet, nicht an einem echten Scan, und findet nur rechtwinklige Räume.
- Collada wurde hier nicht in Blender oder Google Earth geöffnet.
- Die Beleuchtungsschätzung ist gegen unsere eigene Verfolgung geprüft, nicht gegen andere Beleuchtungsprogramme.
- Die südafrikanischen Zahlen sind ungeprüft.
- Wandverbindungsarten (Stumpf, Gehrung, rechtwinklig abschließen) und Layer-Priorität sind nicht umgesetzt; Ecken sind auf Gehrung gesetzt.
- Sprachen außer Englisch sind maschinelle Entwürfe.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Frühere Änderungen stehen in den Hinweisen zu 0.8 und 0.8.1 weiter unten auf dieser Seite.

## Früher: 0.8 und 0.8.1

Das ist, was sich in BimCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert hat. BimCraft kann jetzt Fragen zu einem Gebäude beantworten und es prüfen, mit Personen, Schall, Wasser, Wind und Erdbeben, und es mit mehr Werkzeugen zeichnen; 0.8.1 ist eine Fehlerbehebung.

### Neu

**Das Gebäude prüfen**

- **Personen im Gebäude.** Der Abschnitt {{ui:Personen im Gebäude}} im linken Bereich führt eine Evakuierung oder einen normalen Tagesablauf mit Ankünften durch Ihre Räume, Türen und Treppen. Sie sehen die Warteschlangen, wo das Gebäude enger wird, den längsten Weg zu einem Ausgang aus jedem Raum und wie lange die letzte Person braucht. Setzen Sie bei einer Tür den Haken bei {{ui:Gesperrt}}, um zu sehen, was sich ändert, und setzen Sie den Haken bei {{ui:Die Personen in der 3D-Ansicht anzeigen}}, um die Gehenden zu beobachten. Die Ergebnisse gehen an Probleme. Ein grobes Menschenmodell für Entwurfsentscheidungen, kein Brandschutznachweis. Siehe [Personen durch das Gebäude gehen lassen](topic:people-in-the-building).
- **Raumakustik, und hören, wie es klingt.** Der Abschnitt {{ui:Raumakustik}} gibt die Nachhallzeit jedes Raums je Oktavband (Sabine und Eyring) aus seiner Größe und den Oberflächen, die Sie wählen, und mit einem eigenen Ziel sagt er, wie viel Schallabsorption das Ziel erreichen würde. {{ui:In diesem Raum abspielen}} spielt eine Stimme, ein Klatschen, gezupfte Töne oder Ihre eigene Tondatei durch eine für den Raum berechnete Impulsantwort. Die Absorptionswerte sind typische veröffentlichte Werte, die Sie ersetzen können. Siehe [Raumakustik](topic:room-acoustics).
- **Hochwasser-, Wind- und Erdbebenwiedergabe.** {{ui:Gefahrenwiedergabe}} spielt steigendes Wasser durch die Räume, Winddruck auf jedem Geschoss und ein Erdbeben, das die Geschosse schüttelt, auf einem Grundriss oder einer Ansicht mit einem Zeitschieber ab. Einfache Modelle mit ihren Annahmen im Bereich; keine Normprüfung. Siehe [Ein Hochwasser, einen Wind oder ein Erdbeben abspielen](topic:hazard-playback).
- **Was sich in fünfzig Jahren abnutzt.** {{ui:Lebenszyklusansicht}} listet die Fenster, Türen, Oberflächen und das Dach mit je einer Nutzungsdauer, den Jahren, in denen sie ersetzt werden, und, wenn Sie einen Preis je Einheit eingeben, den Kosten nach Jahr und ihrem Barwert auf. {{ui:Plan speichern (CSV)}} schreibt es heraus. Die Nutzungsdauern sind Planungswerte. Siehe [Sehen, was sich in fünfzig Jahren abnutzt](topic:life-cycle-view).
- **Betonbauteile und Erdbebenlasten.** Die Abschnitte {{ui:Betonbauteile}} und {{ui:Erdbebenlasten}} im Reiter {{ui:Berechnung}} prüfen Betonträger und -stützen nach ACI 318-19 und erstellen äquivalente Horizontalkräfte nach ASCE 7-22 auf steifen Geschossen, mit Geschossverschiebung. Für einen Ingenieur zur Prüfung. Siehe [Betonbauteile prüfen und Erdbebenlasten erstellen](topic:concrete-and-seismic).

**Prüfen und berichten**

- **Gegen eine IDS prüfen.** Laden Sie die `.ids`-Datei, die ein Kunde Ihnen gegeben hat, und sehen Sie jedes Element, das sie nicht erfüllt, unter Probleme, bevor Sie die IFC liefern. Öffnen Sie {{ui:Gegen eine IDS prüfen}} unter {{ui:Modellprüfungen}}. Siehe [Ein Modell gegen die IDS eines Kunden prüfen](topic:check-against-ids).
- **Tags und Listen.** Definieren Sie eigene Tags, setzen Sie sie auf viele Elemente auf einmal und erstellen Sie Listen, deren Spalten, Filter und Gruppen sie lesen; die Tags werden in der IFC gespeichert. Siehe [Tags und Listen](topic:tags-and-schedules).
- **Dokumente aus dem Modell.** {{ui:Dokumente aus dem Modell}} füllt eine Spezifikationsvorlage aus der geöffneten IFC aus und speichert sie als PDF, Word-Dokument oder Markdown. Siehe [Dokumente aus dem Modell](topic:documents-from-the-model).
- **Einen Scan mit dem Modell vergleichen.** Mit einer geöffneten Punktwolke beurteilt {{ui:Vergleichen}} jedes Element als gebaut, teilweise gebaut, fehlend oder nicht erreicht, und zeigt den Prozentsatz des Fertigstellungsgrads. Siehe [Einen Scan mit dem Modell vergleichen](topic:compare-scan-with-model).
- **CO₂ und Kosten.** Der Bereich CO₂ addiert die graue Energie aus einer Faktortabelle, die Sie bearbeiten können, und der Bereich Kosten verteilt Preise über den 4D-Ablauf. Die mitgelieferten Faktoren sind allgemein und als ungeprüft markiert. Siehe [Graue Energie und Kosten](topic:embodied-carbon-and-5d-cost).
- **Beliebige Kartenprojektion.** {{ui:Messen}} › {{ui:Koordinatensystem…}} nimmt eine EPSG-Nummer, eine UTM-Zone, einen Namen oder Ihre eigene Projektionsdefinition. Siehe [Mit jeder Projektion georeferenzieren](topic:georeference-any-projection).

**Zeichnen und bearbeiten**

- **Verschieben, Ausrichten und Verteilen.** Unter {{ui:Build}}; {{key:Shift+M}} startet Verschieben (einfaches {{key:M}} ist weiterhin Messen). Verschieben kopiert beim Gehen mit {{key:C}}, jeder Schritt ist ein Rückgängig-Schritt, und es reist in einer Live-TeamWork-Sitzung mit. Siehe [Verschieben, Kopieren, Ausrichten und Verteilen](topic:move-align-distribute).
- **Bilder unter dem Grundriss.** {{ui:Build}} › {{ui:Bild}} platziert ein PNG, JPEG oder WebP unter dem Grundriss eines Geschosses oder auf einer senkrechten Ebene. Den Maßstab setzen Sie über zwei Punkte, und Sie können es verschieben, drehen, ausblenden und sperren. Ein in MarkupCraft kopierter Bereich wird im Maßstab seines Blatts eingefügt. Siehe [Ein Bild unter den Grundriss legen](topic:pictures-as-backgrounds).
- **Wände aus einem Scan.** Mit einem geöffneten Scan kommen Wände, Türen und Räume als Vorschläge, die Sie einzeln behalten oder ablehnen, in einem Rückgängig-Schritt. Nur Wände in zwei senkrechten Richtungen werden gefunden. Siehe [Einen Scan in Wände umwandeln](topic:scan-to-walls).
- **Durchpausen, Stifte und Treppe skizzieren.** {{ui:Durchpausen}} zeigt ein anderes Geschoss gestrichelt unter dem Grundriss, {{ui:Stifte}} gibt Wänden, Türen und Fenstern in einer Ansicht ihre eigene Strichstärke, und {{ui:Treppe skizzieren}} macht aus einer Gehlinie eine Treppe. Ein Wavefront-OBJ-Netz lässt sich öffnen. Siehe [Ein Geschoss durchpausen, Stifte und eine Treppe aus einer Skizze](topic:trace-pens-stairs-obj).
- **Gebäude um eine Adresse.** Die Gebäude und das Grundstück, die „Adresse zu Gelände“ von CivilCraft gefunden hat, kommen als Vorschläge; Sie setzen die Haken bei denen, die Sie hinzufügen möchten. Siehe [Vom Gelände aus CivilCraft beginnen](topic:site-from-civilcraft).
- **Elementzeichnungen.** {{ui:Build}} › {{ui:Elementzeichnungen}} rahmt Wände, Böden und Dächer in Holz oder dünnwandigem Stahl ein und speichert eine Zuschnittliste als CSV und Werkstattzeichnungen als PDF. Startwerte, kein statischer Entwurf. Siehe [Elementzeichnungen](topic:panel-drawings).
- **Symbolpalette und Pflanzen.** {{ui:Build}} › {{ui:Symbolpalette}} findet elektrische und sanitäre Symbole nach Namen; die Quelle {{ui:Pflanzen}} der {{ui:Bibliothek}} listet rund 400 Pflanzen mit Planzeichen auf. Siehe [Symbolpalette](topic:symbol-palette) und [Eine Pflanze platzieren](topic:plant-list).

**Rohre, Kanäle und Energie**

- **Split-, VRF- und Splitgeräte.** Innen- und Außeneinheiten mit ihren Anschlüssen, und Leitungssätze, dimensioniert nach einer Tabelle typischer Beispielwerte, die Sie ändern können. Siehe [Split-, VRF- und Splitgeräte](topic:split-vrf-fan-coils).
- **Berechnungen.** Der Bereich Berechnungen prüft Zuleitungsgrößen für Rohre und Kanäle mit Druckverlust, führt Kabel durch Kabelkanäle und Leerrohre und zeigt deren Füllung, und berechnet die Beleuchtungsstärke aus IES- oder EULUMDAT-Dateien. Voreinstellungen sind gekennzeichnet; geben Sie die Werte Ihrer Norm ein. Siehe [Rohr-, Kanal-, Kabel- und Lichtberechnungen](topic:mep-calculations).
- **PCF-Dateien.** Das Werkzeug Rohr hat **PCF exportieren**, das die Leitungen für Rohrspannungs- und Isometrie-Programme schreibt, und eine gelesene PCF-Datei zeichnet ihr Rohr. Siehe [Rohrkomponentendateien](topic:piping-pcf).
- **Solar-PV.** Setzen Sie Felder auf Dächer oder den Boden, beschatten Sie sie aus dem Modell, schätzen Sie die Jahresenergie, prüfen Sie Stränge und erstellen Sie Daten für ein einpoliges Schaltbild. Das Ausgangsmodul und die Verluste sind allgemein. Siehe [Solar-PV](topic:solar-pv).
- **EnergyPlus-Datei.** Der Bereich Mit EnergyPlus prüfen schreibt das Modell als IDF, um es in Ihrem eigenen EnergyPlus laufen zu lassen. Der Lauf im Browser braucht einen Build, den Sie selbst hosten und dessen Adresse Sie eingeben; BimCraft enthält ihn nicht. Siehe [Heizen und Kühlen mit EnergyPlus prüfen](topic:check-with-energyplus).

**Bilder und Dateien**

- **Die Render-Engine wählen.** {{ui:Rendern}} hat eine Auswahl {{ui:Engine}}. Unsere beiden eingebauten Engines (Schnell und Path Tracer) bleiben der Standard. {{ui:Öffnen in}} speichert die Szene als USD- oder glTF-Datei, und ein Unreal-Projektordner als .zip; in CadCraft Studio kann ein Add-on eine Engine ergänzen. Das Unreal-Plug-in, das das Projekt öffnet, ist nicht veröffentlicht. Siehe [Wählen, welches Programm das Bild zeichnet](topic:render-engines).
- **Rückgängig in Studio.** In CadCraft Studio meldet BimCraft Studio jeden fertigen Schritt, sodass Studio Ihren letzten Schritt in dem Fenster rückgängig machen kann, das Sie zuletzt benutzt haben. Siehe [Rückgängig über Apps hinweg](topic:undo-across-apps).
- **Add-ons in Ihrer Datei.** Eine IFC vermerkt, welche Add-ons in sie geschrieben haben, und bietet beim Öffnen die an, die Ihnen fehlen. Siehe [Add-ons in Ihrer Datei](topic:add-ons-in-your-file).

**In jeder App**

- **Ihre KI verbinden.** Ihr eigener Assistent kann BimCraft über die Verbindung von Studio steuern und Fragen zum Modell beantworten, etwa welche Räume unter einer bestimmten Fläche liegen. Studio hat keine eigene KI. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet Umbrechen, 2 Zeilen oder 1 Zeile; Umbrechen bleibt der Standard.
- **Eingabegeräte.** Trackpad-, Stift-, 3D-Maus-, Controller- und MIDI-Einstellungen gelten für alle Apps.
- **Probleme und Live.** Der Warnbereich und die Live-Sitzungen funktionieren wie bisher, und die neuen Prüfungen oben speisen Probleme.
- **Sprachen.** 54 Sprachen, zehn davon neu. Alle außer Englisch sind maschinelle Entwürfe, die noch kein Muttersprachler gelesen hat; die Hilfethemen sind überwiegend auf Englisch.

### Behoben in 0.8.1

- **Menüband und Layout des Projektbrowsers.** Einfügen › CAD importieren, Einfügen › Bild und Verwalten › Projekteinheiten sagten „In BimCraft noch nicht umgesetzt“. Bild öffnet jetzt das Werkzeug Bild, CAD importieren öffnet {{ui:Build}} › {{ui:Aus einer Zeichnung…}} (DWG, DXF, PDF oder ein Scan), und Projekteinheiten öffnet {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Einheiten}}. Verschieben und Ausrichten führen die Werkzeuge Verschieben und Ausrichten aus, Geschoss öffnet {{ui:Geschosse hinzufügen…}}, Phasen öffnet den Abschnitt Umbauphasen, und Materialien öffnet die Materialbibliothek.
- **Abschnitt DWG-Klassen.** Er wurde als falscher Typ gelesen; behoben in BimCraft und in den anderen Apps, die DWG lesen.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache jetzt ohne Neustart wechseln. Das ist noch nicht auf jeder Plattform getestet; sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- **Archicad-Bündelskript.** `archicad_bundle.py`, ein eigener Download, findet jetzt den Pfad von Archicad, beobachtet den Ordner bis zu 20 Sekunden und versucht es neben dem Paket erneut.

### In dieser Version noch nicht enthalten

- **Sicherheits- und Entwurfshilfen.** Personen im Gebäude hat keine Grenze für die Laufweglänge aus einer Bauordnung (Sie geben die Grenze ein) und wurde nicht von Hand an einem echten Plan geprüft. Die Akustik-, Lebenszyklus- und Gefahrenwerte sind Planungswerte, keine Normprüfung.
- **Klimazukunft und EnergyPlus.** Keine eingebaute Klimazukunft: Sie können für den Hochwasserlauf eine Szenariodatei laden. Der EnergyPlus-Lauf im Browser ist nicht Teil dieser Version.
- **Menübandlayout.** Materialmengen bleibt „Nicht umgesetzt“, weil BimCraft keine Materialmengenliste hat, und 54 weitere ausgegraute Menübandwerkzeuge haben noch kein BimCraft-Werkzeug dahinter.
- **Signierung und Plattformen.** Windows-Installationsprogramme und die macOS-.dmg sind nicht signiert, daher zeigt SmartScreen {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}, und macOS braucht einen Rechtsklick und dann {{ui:Öffnen}}. Das iPad- und iPhone-Build wurde für 0.8.1 nicht neu erstellt.
- **Echte Seitentests.** Einige ältere BimCraft-Browsertests schlagen auf unserer Testseite weiterhin fehl, wie schon vor 0.8.1.

Alles Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Frühere Änderungen stehen in [Neuheiten in 0.7](topic:whats-new-0-7).
