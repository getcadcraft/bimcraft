---
title: Neu in 0.9 (früher)
summary: Wandformen, Teilen, Versetzen, Strecken und An Raster sperren, Geschosse unter der Geländeoberfläche, Rasterbemaßung und Messen im Plan, duplizierte Ansichten mit Arbeitsweisen und Stifttabellen, Melden als, Collada- und Google-Earth-Export, Scan zu BIM, Wind- und Erdbebenanalyse, Add-ons für den Harzdruck.
keywords: neu in 0.9, früheres Release, was ist neu, 0.9, versionshinweise, release notes, wandformen, rechteck, polygon, bogen, linien wählen, umriss nachzeichnen, versatz, verbindung, bereich strecken, ausrichten und sperren, wand teilen, lücke, freie enden, zusammenfügen, an raster sperren, wachsen ab, messen ab, ebene darunter hinzufügen, untergeschoss, geschossbefehl, rasterbemaßung, messen im plan, arbeitsweise, ansicht duplizieren, eigene kopie, verknüpft, stifttabelle, wie angezeigt drucken, melden als, maßstab eingeben, svg importieren, im plan platzieren, im modell platzieren, collada, dae, kmz, google earth, scan zu bim, windlast, erdbeben, finite elemente, dokumentenbereich, harzdruck, was ist neu, änderungsprotokoll, änderungen, 0.8, 0.8.1, version, neue funktionen, evakuierung, personen, warteschlangen, akustik, nachhall, impulsantwort, hochwasser, wind, erdbeben, gefahr, lebenszyklus, nutzungsdauer, ids, tags, listen, verschieben, ausrichten, verteilen, bild, hintergrund, scan zu wänden, gelände aus civilcraft, elementzeichnungen, rahmen, solar, pv, teilen, vrf, gebläsekonvektor, rohrdimensionierung, kabelrinne, beleuchtungsstärke, beton, seismisch, scan vergleichen, epsg, projektion, dokumente, vorlage, carbon, kosten, energyplus, render-engine, öffnen in, usd, glb, unreal, rückgängig, add-ons, pcf, symbole, pflanzen, durchpausen, stifte, menüband, projektbrowser, layout
from: 816df7f8
---

Das ist, was sich in BimCraft 0.9 gegenüber 0.8.1 geändert hat. Die zwei großen Themen sind ein echtes Wandwerkzeug und Ansichten, die sich so verhalten, wie es Leute aus den großen BIM-Programmen erwarten. Dazu kommen Collada-Export, Assistenten, die elektrische Geräte platzieren können, Scan zu BIM sowie Wind-, Erdbeben- und Finite-Elemente-Arbeit im Register {{ui:Berechnung}}.

## Neu

### Wände

- **Ganze Formen zeichnen.** Öffnen Sie in {{ui:Zeichnen}} {{ui:Formen}} (oder wählen Sie eine Form in der Formenliste der Zeile Wand) für ein Rechteck, ein gedrehtes Rechteck, ein Polygon mit 3 bis 64 Seiten, einen Bogen über den Mittelpunkt, einen tangentialen Bogen, Wände auf gewählten Linien oder Wände um einen geschlossenen Bereich, den Sie darin anklicken. Ein Rechteck besteht aus vier Wänden mit vier verbundenen Ecken und einem Rückgängig-Schritt. Siehe [Wandformen, Teilen, Versetzen, Strecken und Sperren](topic:wall-tools).
- **Vor dem Zeichnen festlegen, danach ändern.** Die Zeile Wand hat {{ui:Versatz}} und {{ui:Verbindung}} (abwählen, um freistehende Wände zu zeichnen). Danach verwenden Sie {{ui:Versatz}}, {{ui:Bereich strecken}} und {{ui:Ausrichten und sperren}} für gezeichnete Wände. Eine verschobene oder gestreckte Wand behält ihre Türen, Fenster und Bemaßungen. Jedes Rezept ist ein Rückgängig-Schritt.
- **Wände schneiden.** {{ui:Teilen}}, {{ui:Lücke}}, {{ui:Freie Enden}}, {{ui:Segment löschen}} und {{ui:Zusammenfügen}} schneiden eine Wand mit einem Klick oder dort, wo eine andere Wand sie kreuzt. Ein Schnitt durch eine Tür wird abgelehnt. Siehe [Wandformen, Teilen, Versetzen, Strecken und Sperren](topic:wall-tools).
- **Wände an Rasterlinien sperren.** Wählen Sie eine Wand entlang einer Rasterlinie und setzen Sie in {{ui:Eigenschaften}} ein Häkchen bei {{ui:An Raster sperren}}. Wenn das Rasterwerkzeug aktiv ist, geben Sie für eine gewählte Linie in {{ui:Verschieben um}} einen Abstand ein; die gesperrten Wände folgen in einem Rückgängig-Schritt.
- **Eine Wand formen.** In {{ui:Eigenschaften}} einer Wand können Sie ihre Ober- oder Unterkante an ein Dach, eine Decke oder eine Dachuntersicht anschließen, ihren Höhenumriss bearbeiten, sie neigen oder eine Wandöffnung ohne Tür oder Fenster schneiden. Siehe [Wandform](topic:wall-shape).
- **Die Länge zeigt, welches Ende bleibt.** {{ui:Wachsen ab}} legt fest, ob beim Ändern der Länge der Anfang, das Ende oder die Mitte stehen bleibt.
- **Länge und Bemaßung im Plan stimmen überein.** {{ui:Messen ab}} (Mittellinie, Innenseite oder Außenseite) steuert sowohl das Feld Länge als auch die Wandbemaßungen im Plan. Es beginnt auf der Mittellinie, daher lesen die Wandbemaßungen im Plan jetzt die Mittellinie, wo sie vorher die Außenseite lasen. Ändern Sie es in der Zeile Wand, in {{ui:Eigenschaften}} oder in {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Wände}}.

### Geschosse, Raster und Messen

- **Geschoss darunter hinzufügen.** {{ui:Ebene darunter hinzufügen}} im Bereich {{ui:Geschosse}} fügt ein Geschoss unter dem untersten hinzu, genauso hoch wie dieses, mit negativer Höhe (Geschoss -1, Geschoss -2). Nichts anderes verschiebt sich. {{ui:Geschosse hinzufügen…}} akzeptiert jetzt negative Höhen. Wenn Sie LEVEL, LEVELS, STOREY oder STOREYS in die Befehlszeile eingeben, öffnet sich {{ui:Geschosse hinzufügen…}}, und es gibt eine Schaltfläche {{ui:Geschosse}} in den Menüs und Menüband-Registerkarten. Siehe [Grundstücke, Gebäude und Geschosse](topic:site-building-and-levels).
- **Rasterbemaßung im Plan.** Setzen Sie bei aktivem Werkzeug {{ui:Raster}} ein Häkchen bei {{ui:Bemaßung}}, um den Abstand zwischen benachbarten Linien und die Gesamtgröße jenseits der Kreise auf dem Plan jedes Geschosses zu zeichnen. Siehe [Raster bemaßen](topic:grid-dimensions).
- **Messen im Plan.** {{ui:Messen}} in der Gruppe {{ui:Zeichnen}} gibt eine Strecke mit den X- und Y-Differenzen zwischen zwei Klicks an. Im Modell wird nichts gespeichert. Siehe [Messen im Plan](topic:measure-on-the-plan).
- **Mehrere Stützen auf einmal ändern.** Wählen Sie Stützen zusammen mit einer Wand, dann listet die Auswahl jede Art mit {{ui:Nur diese behalten}} auf. Ein Klick behält die Stützen und zeigt ihre gemeinsamen Felder.
- **Eine Anzeigeeinheit überall.** Koordinaten, Messwerte, Schnitte, Blattmaßstäbe, die Lasten und Ergebnisse des Rahmen-Registers sowie der Text der {{ui:Probleme}} folgen der gewählten Einheit. Exporte bleiben im SI-System.

### Ansichten, Blätter und Druck

- **Arbeitsweise.** {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Arbeitsweise}} legt fest, ob jede Ansicht eigene Beschriftungen und Stifttabellen hat oder sie gemeinsam nutzt. Siehe [Arbeitsweise, duplizierte Ansichten, Stifte auf dem Papier, Melden als und Vorlagen](topic:working-style).
- **Ansicht duplizieren.** Grundrisse, Deckenpläne, Ausschnitte, Ansichten und Schnitte lassen sich als {{ui:Eigene Kopie}} oder {{ui:Verknüpft}} duplizieren; {{ui:Zur eigenen Kopie machen}} macht eine verknüpfte unabhängig. Siehe [Arbeitsweise, duplizierte Ansichten, Stifte auf dem Papier, Melden als und Vorlagen](topic:working-style).
- **Wie angezeigt drucken oder über eine Stifttabelle.** Stiftüberschreibungen werden mit der Ansicht in der IFC-Datei gespeichert, und Blätter sowie PDFs zeichnen sie so, wie der Bildschirm es zeigt. Dasselbe Thema behandelt Stifttabellen.
- **Melden als.** {{ui:Melden als}} in {{ui:Eigenschaften}} schreibt eine als Straße gezeichnete Decke, eine als Platte gezeichnete Wand oder eine als Rampe gezeichnete Dachfläche in die IFC-Datei als die gewählte Klasse und zählt sie so in Listen, Mengen, Suchen, Farbe nach und Probleme.
- **In Ansichten und Schnitten bearbeiten.** Zeichnen und verschieben Sie Wände, Öffnungen, Geschosse, Bemaßungen und Notizen direkt in einer Ansicht oder einem Schnitt, mit Ihren eigenen Blattgrößen und Schriftfeldern. Siehe [In Ansichten und Schnitten bearbeiten](topic:edit-in-elevations).
- **Blätter.** Jedes Blatt kann Querformat oder Hochformat sein. Ein Feld {{ui:Maßstab eingeben}} steht neben der Maßstabsliste jeder platzierten Ansicht (1:64, 2:1, 1/4" = 1'). Sie können eine platzierte Zeichnung ziehen oder mit den Pfeiltasten verschieben, und {{ui:Formate…}} › {{ui:SVG importieren…}} macht Ihren eigenen Blattentwurf zu einem Schriftfeld mit Feldern, die pro Blatt eingetragen werden.
- **Bibliotheksnachweise auf einem Blatt.** Ein Zeichnungssatz mit Bibliothekselementen erhält eine Liste der Bibliotheksnachweise, die Sie auf jedem Blatt platzieren können. Siehe [Bibliotheksnachweise](topic:library-credits).

### Bibliothek: platzieren

- **Platzieren folgt der Ansicht.** Im Grundriss zeigt die Bibliothek {{ui:Im Plan platzieren}}; in 3D zeigt sie {{ui:Im Modell platzieren}}; in Geteilt zeigt sie eine geteilte Schaltfläche mit {{ui:Im Plan platzieren}} als Hauptaktion. Beide Wege schreiben dasselbe IFC-Element. Sie können auch eine Bibliothekskarte auf den Plan oder die 3D-Ansicht ziehen; mit einem Stift oder dem Finger halten Sie gedrückt und ziehen dann. Siehe [Aus der Bibliothek platzieren](topic:place-from-library).

### Dateien und Assistenten

- **Collada und Google Earth.** {{ui:Collada}} in der Symbolleiste (im Menü Datei in den Menüstilen) schreibt eine .dae-Datei oder eine .kmz-Datei, die dort platziert wird, wo sich das Modell auf der Karte befindet. Siehe [Das Modell als Collada oder für Google Earth exportieren](topic:collada).
- **Assistenten können elektrische Geräte platzieren.** Ihr verbundener Assistent hat neue Werkzeuge zum Hinzufügen, Auflisten, Ändern und Löschen von Geräten sowie zum Einstellen von Leuchten. Assistenten bleiben aus, bis Sie sie in {{ui:Einstellungen}} einschalten. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
- **Scan zu BIM (Add-on).** Standardmäßig aus; benötigt das Add-on Punktwolken. Es schlägt Geschosse, Wände, Türen und Fenster aus einem Scan vor, mit der gemessenen Abweichung für jedes; das Übernehmen ist ein Rückgängig-Schritt.

### Berechnung

- **Wind- und Erdbebendaten des Standorts.** Im Register {{ui:Berechnung}}: Windlasten nach ASCE 7-10 oder 7-16 für ein starres, geschlossenes Gebäude, mit einer Kraft auf jedes Geschoss als Lastfälle, sowie seismische Standortdaten mit einer USGS-Abfrage und dem Bemessungsspektrum.
- **Strukturelle Nacharbeit und Finite Elemente.** Betonnachweise nach ACI 318-19, äquivalente Horizontalkräfte nach ASCE 7-22, Geschossdrift, Decken und Wände als Platten sowie Lastkombinationen nach ASCE 7 und EN 1990. Unsere eigene Finite-Elemente-Engine berechnet Schalen, Tetraeder und Modalanalysen. Siehe [Betonbauteile prüfen und Erdbebenlasten ermitteln](topic:concrete-and-seismic) und [Rahmenberechnung](topic:frame-analysis).

### Weitere Add-ons und Dokumente

- **Innenbeleuchtung (Add-on).** Platziert Leuchten und schreibt die Beleuchtungsstärke in Lux als Zahlen in den Plan jedes Geschosses, mit einer Blendungsschätzung und einem druckbaren Bericht.
- **Bereich Dokumente.** {{ui:Datei}} › {{ui:Dokumente…}} bietet Auschecken und Einchecken mit einer Sperrdatei, Revisionsbuchstaben, Freigabestatus und Verlauf.
- **Regionen und Stahl.** Südafrikanische Zeichnungs- und Bauvorschriftenpakete im Add-on Vorschriften sowie 976 britische Stahlprofile in der gemeinsamen Profiltabelle.
- **Kostenlose Add-ons für den Harzdruck.** Slicer, Stützen und Floß, Belichtungstest sowie die Dateiformate GOO, SL1, Chitubox und Anycubic, alle standardmäßig aus.

## In jeder App

- Wenn Sie mit der Maus über eine Schaltfläche oder ein Steuerelement fahren, erscheint ein Bootstrap-Tooltip.
- Der Starthinweis auf einem leeren Zeichenbereich hat eine Schaltfläche zum Schließen; BimCraft merkt sich, dass er geschlossen wurde.
- Eine Registerleiste eines Bereichs, die nicht hineinpasst, lässt sich jetzt scrollen, statt abgeschnitten zu werden.
- Bei geöffnetem Dokument lautet der Browser-Tab „<Dokument> - BimCraft | CadCraft“.
- In {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layout}} sind die Layouts eine Auswahlliste mit zweizeiligen Einträgen.
- Die Sprachliste in {{ui:Einstellungen}} bietet mehr Sprachen als in 0.8; andere Sprachen als Englisch sind maschinelle Entwürfe.

## Behoben

- **Verschieben funktioniert bei Treppen** sowie bei Rampen, Geländern, Dachflächen, freistehenden Geräten, Bildern und Pfaden.
- **Das Ziehen einer Wand verzerrt den Raum nicht mehr.** Der mittlere Griff verschiebt die Wand rechtwinklig zu sich selbst, und ihre Ecken gleiten an den verbundenen Wänden entlang. Halten Sie {{key:Mod}} für das alte freie Verschieben gedrückt; {{ui:Rechtwinklig ausrichten}} stellt 90 Grad wieder her.
- **Eine Änderung von Stärke oder Typ an einem verbundenen Knoten** hält die Ecke jetzt geschlossen bei einem L, einem T, einem Knoten mit drei Wänden und neben einer gebogenen Wand.
- **Verschieben oder Kopieren einer Gruppe von Räumen** lässt verbundene Wände außerhalb der Gruppe verbunden.
- **Wiederholen behält die Identität einer Wandbemaßung.**
- **Eine Wand mit ausgeschaltetem Zeichnen wählen** wirft in den Eigenschaften keinen Fehler mehr.
- **Rendern weicht auf WebGL aus**, wenn die GPU nicht starten kann, statt abzubrechen.
- **Die EnergyPlus-Prüfung** lässt sich wieder einschalten.
- **Dokumente öffnet sich als zentrierter Dialog.** {{key:Esc}}, das X oder ein Klick auf die abgedunkelte Seite schließt ihn.
- **Die Schaltflächen {{ui:Plan}}, {{ui:Geteilt}} und {{ui:3D}} erscheinen,** sobald ein Modell geöffnet ist, nicht erst, nachdem Zeichnen einmal eingeschaltet war.

## Grenzen

- Nichts wurde auf echter Hardware gedruckt. Die Stützen für den Harzdruck sind neu und noch nicht erprobt.
- Ergebnisse für Wind, Erdbeben, Beton und Finite Elemente sind Prüfhilfen für einen Ingenieur, gegen geschlossene Formeln geprüft, nicht gegen ein reales Gebäude.
- Scan zu BIM wurde an einem synthetischen Gebäude getestet, nicht an einem echten Scan, und findet nur rechtwinklige Räume.
- Collada wurde hier nicht in Blender oder Google Earth geöffnet.
- Die Beleuchtungsschätzung ist gegen unsere eigene Verfolgung geprüft, nicht gegen andere Beleuchtungsprogramme.
- Die südafrikanischen Zahlen sind ungeprüft.
- Wandverbindungsarten (stumpf, auf Gehrung, Ecke abschneiden) und Schichtpriorität sind nicht umgesetzt; Ecken sind auf Gehrung.
- Sprachen außer Englisch sind maschinelle Entwürfe.

Alles Weitere steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Frühere Änderungen stehen in den Hinweisen zu 0.8 und 0.8.1 weiter unten auf dieser Seite.

## Früher: 0.8 und 0.8.1

Das ist, was sich in BimCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert hat. BimCraft kann jetzt Fragen zu einem Gebäude beantworten und es prüfen, mit Personen, Schall, Wasser, Wind und Erdbeben, und es mit mehr Werkzeugen zeichnen; 0.8.1 ist eine Fehlerbehebung.

### Neu

**Das Gebäude prüfen**

- **Personen im Gebäude.** Der Bereich {{ui:Personen im Gebäude}} im linken Bereich führt eine Evakuierung oder einen normalen Tagesablauf durch Ihre Räume, Türen und Treppen. Sie sehen die Warteschlangen, wo das Gebäude sich verengt, den längsten Weg zu einem Ausgang aus jedem Raum und wie lange die letzte Person braucht. Setzen Sie bei einer Tür ein Häkchen bei {{ui:Gesperrt}}, um zu sehen, was sich ändert, und bei {{ui:Die Personen in der 3D-Ansicht anzeigen}}, um die Gehenden zu beobachten. Die Befunde gehen an Probleme. Ein grobes Menschenmodell für Entwurfsentscheidungen, kein Brandschutznachweis. Siehe [Personen durch das Gebäude führen](topic:people-in-the-building).
- **Raumakustik und Hören.** Der Bereich {{ui:Raumakustik}} gibt für jeden Raum die Nachhallzeit je Oktavband (Sabine und Eyring) aus seiner Größe und den gewählten Oberflächen an und sagt mit einem eigenen Zielwert, wie viel Schluckung zum Erreichen nötig wäre. {{ui:In diesem Raum abspielen}} spielt eine Stimme, ein Klatschen, gezupfte Töne oder Ihre eigene Tondatei durch eine Impulsantwort ab, die für den Raum berechnet wurde. Die Schluckwerte sind typische veröffentlichte Werte, die Sie ersetzen können. Siehe [Raumakustik](topic:room-acoustics).
- **Hochwasser-, Wind- und Erdbebenwiedergabe.** {{ui:Gefahrenwiedergabe}} zeigt, wie Wasser durch die Räume steigt, den Winddruck auf jedes Geschoss und wie ein Erdbeben die Geschosse erschüttert, auf einem Plan oder einer Ansicht mit einem Zeitschieber. Einfache Modelle mit ihren Annahmen im Bereich; keine Normprüfung. Siehe [Ein Hochwasser, einen Wind oder ein Erdbeben abspielen](topic:hazard-playback).
- **Was in fünfzig Jahren verschleißt.** {{ui:Lebenszyklusansicht}} listet die Fenster, Türen, Oberflächen und das Dach mit jeweils einer Nutzungsdauer, den Jahren des Austauschs und, wenn Sie einen Preis pro Einheit eintragen, den Kosten je Jahr und ihrem Barwert. {{ui:Plan speichern (CSV)}} schreibt ihn heraus. Die Nutzungsdauern sind Planungswerte. Siehe [Was in fünfzig Jahren verschleißt](topic:life-cycle-view).
- **Beton- und Erdbebenprüfung.** Die Blöcke {{ui:Betonbauteile}} und {{ui:Erdbebenlasten}} im Register {{ui:Berechnung}} prüfen Betonbalken und -stützen nach ACI 318-19 und ermitteln äquivalente Horizontalkräfte nach ASCE 7-22 auf starren Geschossdecken, mit Geschossdrift. Für einen Ingenieur zur Prüfung. Siehe [Betonbauteile prüfen und Erdbebenlasten ermitteln](topic:concrete-and-seismic).

**Prüfen und berichten**

- **Mit einer IDS prüfen.** Laden Sie die Datei `.ids`, die Ihnen ein Auftraggeber gegeben hat, und sehen Sie in Probleme jedes Element, das sie nicht erfüllt, bevor Sie die IFC-Datei ausliefern. Öffnen Sie {{ui:Mit einer IDS prüfen}} unter {{ui:Modellprüfungen}}. Siehe [Ein Modell gegen die IDS des Auftraggebers prüfen](topic:check-against-ids).
- **Tags und Listen.** Definieren Sie eigene Tags, setzen Sie sie auf viele Elemente auf einmal und erstellen Sie Listen, deren Spalten, Filter und Gruppierungen sie lesen; die Tags werden in der IFC-Datei gespeichert. Siehe [Tags und Listen](topic:tags-and-schedules).
- **Dokumente aus dem Modell.** {{ui:Dokumente aus dem Modell}} füllt eine Spezifikationsvorlage aus der geöffneten IFC-Datei und speichert sie als PDF, Word-Dokument oder Markdown. Siehe [Dokumente aus dem Modell](topic:documents-from-the-model).
- **Einen Scan mit dem Modell vergleichen.** Bei geöffneter Punktwolke beurteilt {{ui:Vergleichen}} jedes Element als gebaut, teilweise gebaut, fehlend oder nicht erreicht und zeigt den Fertigstellungsgrad in Prozent. Siehe [Einen Scan mit dem Modell vergleichen](topic:compare-scan-with-model).
- **CO2 und Kosten.** Der Bereich Carbon addiert die graue Energie aus einer Faktorentabelle, die Sie bearbeiten können, und der Bereich Kosten verteilt Preise über den 4D-Zeitplan. Die mit BimCraft gelieferten Faktoren sind allgemein gehalten und als ungeprüft gekennzeichnet. Siehe [Graue Energie und Kosten](topic:embodied-carbon-and-5d-cost).
- **Jede Kartenprojektion.** {{ui:Messen}} › {{ui:Koordinatensystem…}} nimmt eine EPSG-Nummer, eine UTM-Zone, einen Namen oder Ihre eigene Projektionsdefinition. Siehe [Georeferenzierung mit jeder Projektion](topic:georeference-any-projection).

**Zeichnen und bearbeiten**

- **Verschieben, Ausrichten und Verteilen.** Unter {{ui:Build}}; {{key:Shift+M}} startet Verschieben (einfaches {{key:M}} ist weiterhin Messen). Verschieben kopiert beim Gehen mit {{key:C}}, jeder Schritt ist ein Rückgängig-Schritt, und es wird in einer Live-TeamWork-Sitzung übertragen. Siehe [Verschieben, Kopieren, Ausrichten und Verteilen](topic:move-align-distribute).
- **Bilder unter dem Plan.** {{ui:Build}} › {{ui:Bild}} platziert ein PNG, JPEG oder WebP unter dem Plan eines Geschosses oder auf einer senkrechten Ebene. Legen Sie den Maßstab durch zwei Punkte fest und verschieben, drehen, ausblenden und sperren Sie es. Ein in MarkupCraft kopierter Bereich wird im Maßstab seines Blattes eingefügt. Siehe [Ein Bild unter den Plan legen](topic:pictures-as-backgrounds).
- **Wände aus einem Scan.** Bei geöffnetem Scan kommen Wände, Türen und Räume als Vorschläge, die Sie einzeln behalten oder ablehnen, in einem Rückgängig-Schritt. Gefunden werden nur Wände in zwei senkrechten Richtungen. Siehe [Einen Scan in Wände umwandeln](topic:scan-to-walls).
- **Durchpausen, Stifte und Treppe skizzieren.** {{ui:Durchpausen}} zeigt ein anderes Geschoss gestrichelt unter dem Plan, {{ui:Stifte}} gibt Wänden, Türen und Fenstern in einer Ansicht eigene Linienstärken, und {{ui:Treppe skizzieren}} macht aus einer Gehlinie eine Treppe. Ein Wavefront-OBJ-Netz lässt sich öffnen. Siehe [Ein Geschoss durchpausen, Stifte und eine Treppe aus einer Skizze](topic:trace-pens-stairs-obj).
- **Gebäude um eine Adresse.** Die Gebäude und das Grundstück, die die Adressfunktion von CivilCraft gefunden hat, erscheinen als Vorschläge; Sie setzen ein Häkchen bei denen, die Sie hinzufügen möchten. Siehe [Mit dem Grundstück aus CivilCraft beginnen](topic:site-from-civilcraft).
- **Elementzeichnungen.** {{ui:Build}} › {{ui:Elementzeichnungen}} rahmt Wände, Decken und Dächer in Holz oder Leichtstahl und speichert eine Zuschnittsliste als CSV sowie Werkstattzeichnungen als PDF. Ausgangswerte, kein statischer Entwurf. Siehe [Elementzeichnungen](topic:panel-drawings).
- **Symbolpalette und Pflanzen.** {{ui:Build}} › {{ui:Symbolpalette}} findet elektrische und sanitäre Symbole nach Namen; die Quelle {{ui:Pflanzen}} der {{ui:Bibliothek}} listet rund 400 Pflanzen mit Planzeichen. Siehe [Symbolpalette](topic:symbol-palette) und [Eine Pflanze platzieren](topic:plant-list).

**Rohre, Leitungen und Energie**

- **Split, VRF und Gebläsekonvektoren.** Innen- und Außeneinheiten mit ihren Anschlüssen sowie Kältemittelleitungen, dimensioniert nach einer Tabelle typischer Beispielwerte, die Sie ändern können. Siehe [Split, VRF und Gebläsekonvektoren](topic:split-vrf-fan-coils).
- **Berechnungen.** Der Bereich Berechnungen prüft Rohr- und Kanalquerschnitte auf Druckverlust, führt Kabel durch Kabelrinnen und Leerrohre und zeigt deren Füllung, und berechnet die Beleuchtungsstärke aus IES- oder EULUMDAT-Dateien. Standardwerte sind gekennzeichnet; tragen Sie die Werte Ihrer Norm ein. Siehe [Berechnungen für Rohre, Kanäle, Kabel und Licht](topic:mep-calculations).
- **PCF-Dateien.** Das Rohrwerkzeug mit **PCF exportieren** schreibt die Leitungen für Rohrspannungs- und Isometrie-Programme, und eine gelesene PCF-Datei zeichnet ihr Rohr. Siehe [Rohrkomponentendateien](topic:piping-pcf).
- **Solar-PV.** Setzen Sie Felder auf Dächer oder den Boden, beschatten Sie sie aus dem Modell, schätzen Sie den Jahresertrag, prüfen Sie Strings und erstellen Sie Daten für einen einpoligen Schaltplan. Das Startmodul und die Verluste sind allgemein gehalten. Siehe [Solar-PV](topic:solar-pv).
- **EnergyPlus-Datei.** Der Bereich Mit EnergyPlus prüfen schreibt das Modell als IDF, das Sie in Ihrem eigenen EnergyPlus ausführen. Die Ausführung im Browser braucht eine Version, die Sie selbst hosten und deren Adresse Sie eintragen; BimCraft liefert sie nicht mit. Siehe [Heizung und Kühlung mit EnergyPlus prüfen](topic:check-with-energyplus).

**Bilder und Dateien**

- **Die Render-Engine wählen.** {{ui:Rendern}} hat eine Auswahl {{ui:Engine}}. Unsere zwei eingebauten Engines (Schnell und Pfadverfolgung) bleiben die Standardeinstellung. **Öffnen in** speichert die Szene als USD- oder glTF-Datei und einen Unreal-Projektordner als .zip; in CadCraft Studio kann ein Add-on eine Engine hinzufügen. Das Unreal-Plug-in, das das Projekt öffnet, ist nicht veröffentlicht. Siehe [Wählen Sie, welches Programm das Bild zeichnet](topic:render-engines).
- **Rückgängig in Studio.** Innerhalb von CadCraft Studio meldet BimCraft jeden abgeschlossenen Schritt an Studio, damit Studio Ihren letzten Schritt in dem Fenster rückgängig machen kann, das Sie zuletzt benutzt haben. Siehe [Rückgängig über Apps hinweg](topic:undo-across-apps).
- **Add-ons in Ihrer Datei.** Eine IFC-Datei vermerkt, welche Add-ons in sie geschrieben haben, und bietet beim Öffnen die an, die Ihnen fehlen. Siehe [Add-ons in Ihrer Datei](topic:add-ons-in-your-file).

**In jeder App**

- **Verbinden Sie Ihre KI.** Ihr eigener Assistent kann BimCraft über die Verbindung von Studio steuern und Fragen zum Modell beantworten, etwa welche Räume unter einer bestimmten Fläche liegen. Studio hat keine eigene KI. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet Umbrechen, 2 Zeilen oder 1 Zeile; Umbrechen bleibt die Standardeinstellung.
- **Eingabegeräte.** Trackpad-, Stift-, 3D-Maus-, Controller- und MIDI-Einstellungen gelten für alle Apps.
- **Probleme und Live.** Der Warnbereich und Live-Sitzungen funktionieren wie bisher, wobei die neuen Prüfungen oben in Probleme einfließen.
- **Sprachen.** 54 Sprachen, zehn davon neu. Alle außer Englisch sind maschinelle Entwürfe, die noch kein Muttersprachler gelesen hat; Hilfethemen sind meist auf Englisch.

### Behoben in 0.8.1

- **Layout Menüband und Projektbrowser.** Einfügen › CAD importieren, Einfügen › Bild und Verwalten › Projekteinheiten meldeten „Noch nicht in BimCraft umgesetzt“. Bild öffnet jetzt das Werkzeug Bild, CAD importieren öffnet {{ui:Build}} › {{ui:Aus einer Zeichnung…}} (DWG, DXF, PDF oder ein Scan), und Projekteinheiten öffnet {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Einheiten}}. Verschieben und Ausrichten starten die Werkzeuge Verschieben und Ausrichten, Geschoss öffnet {{ui:Geschosse hinzufügen…}}, Phasen öffnet den Bereich Renovierungsphasen, und Materialien öffnet die Materialbibliothek.
- **Bereich DWG-Klassen.** Er wurde als falscher Typ gelesen; in BimCraft und den anderen Apps, die DWG lesen, behoben.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache jetzt ohne Neustart wechseln. Das ist noch nicht auf allen Plattformen getestet; sagen Sie uns Bescheid, wenn die Sprache sich nicht ändert.
- **Archicad-Paket-Skript.** `archicad_bundle.py`, ein separater Download, findet jetzt den Pfad von Archicad, beobachtet den Ordner bis zu 20 Sekunden und versucht es neben dem Paket erneut.

### Noch nicht in dieser Version

- **Sicherheits- und Entwurfshilfen.** Personen im Gebäude hat keine Wegstreckenbegrenzung aus einer Bauordnung (die Grenze tragen Sie selbst ein) und wurde nicht von Hand an einem echten Plan geprüft. Die Werte für Akustik, Lebenszyklus und Gefahren sind Planungswerte, keine Normprüfung.
- **Klimazukunft und EnergyPlus.** Keine eingebaute Klimazukunft: Für den Hochwasserlauf können Sie eine Szenariodatei laden. Der EnergyPlus-Lauf im Browser ist nicht Teil dieser Version.
- **Layout Menüband.** Materialmengen bleibt „Nicht umgesetzt“, weil BimCraft keine Materialmengenliste hat, und 54 weitere ausgegraute Menüband-Werkzeuge haben noch kein BimCraft-Werkzeug dahinter.
- **Signierung und Plattformen.** Windows-Installer und das macOS-.dmg sind nicht signiert, daher zeigt SmartScreen {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}, und macOS braucht einen Rechtsklick und dann {{ui:Offen}}. Der Build für iPad und iPhone wurde für 0.8.1 nicht neu erstellt.
- **Tests auf echten Seiten.** Einige ältere Browsertests von BimCraft schlagen auf unserer Testseite weiterhin fehl, wie schon vor 0.8.1.

Alles Weitere steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Frühere Änderungen stehen in [Neu in 0.7](topic:whats-new-0-7).
