---
title: Neu in 0.8 und 0.8.1
summary: BimCraft bringt Personen, die durch das Gebäude gehen, Raumakustik zum Anhören, Wiedergabe von Hochwasser, Wind und Erdbeben, eine Lebenszyklusansicht über fünfzig Jahre, Prüfungen gegen eine IDS, Tags und Listen, Verschieben, Ausrichten und Verteilen, Bilder unter dem Plan, Wände aus einem Scan, Elementzeichnungen, Solar, Split- und VRF-Systeme, Rohr- und Kabelbemessung, Beton- und Erdbebenprüfungen, beliebige Kartenprojektionen, eine Auswahl der Render-Engine und Rückgängig in Studio; 0.8.1 behebt die ausgegrauten Werkzeuge im Layout des Menübands.
keywords: neu, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Evakuierung, Personen, Warteschlangen, Akustik, Nachhall, Impulsantwort, Hochwasser, Wind, Erdbeben, Gefahr, Lebenszyklus, Nutzungsdauer, ids, Tags, Listen, verschieben, ausrichten, verteilen, Bild, Hintergrund, Scan zu Wänden, Grundstück aus CivilCraft, Elementzeichnungen, Ständerwerk, Solar, PV, Split, VRF, Gebläsekonvektor, Rohrdimensionierung, Kabelrinne, Beleuchtungsstärke, Beton, seismisch, Scan vergleichen, EPSG, Projektion, Dokumente, Vorlage, CO2, Kosten, EnergyPlus, Render-Engine, öffnen in, USD, glb, Unreal, Rückgängig, Add-ons, PCF, Symbole, Pflanzen, Durchpausen, Stifte, Menüband, Projektbrowser, Layout
from: 87b03056
---

Dies hat sich in BimCraft 0.8 (2026-11-01) und 0.8.1 (2026-11-02) gegenüber 0.7 geändert. BimCraft kann jetzt Fragen zu einem Gebäude beantworten und es prüfen, mit Personen, Schall, Wasser, Wind und Erdbeben, und es mit mehr Werkzeugen zeichnen; 0.8.1 ist eine Fehlerbehebung.

## Neu

### Das Gebäude prüfen

- **Personen im Gebäude.** Der Abschnitt {{ui:Personen im Gebäude}} im linken Bereich lässt eine Evakuierung oder den normalen Ankunftsverkehr eines Tages durch Ihre Räume, Türen und Treppen laufen. Sie sehen die Warteschlangen, wo das Gebäude sich verengt, den längsten Weg zu einem Ausgang aus jedem Raum und wie lange die letzte Person braucht. Aktivieren Sie {{ui:Gesperrt}} bei einer Tür, um zu sehen, was sich ändert, und aktivieren Sie {{ui:Die Personen in der 3D-Ansicht anzeigen}}, um die Gehenden zu beobachten. Die Ergebnisse gehen an Probleme. Ein grobes Menschenmodell für Entwurfsentscheidungen, kein Brandschutznachweis. Siehe [Personen durch das Gebäude gehen lassen](topic:people-in-the-building).
- **Raumakustik, und hören.** Der Abschnitt {{ui:Raumakustik}} gibt die Nachhallzeit jedes Raums je Oktavband (Sabine und Eyring) aus seiner Größe und den von Ihnen gewählten Oberflächen an. Mit einem eigenen Zielwert sagt er, wie viel Schluckung nötig wäre, um ihn zu erreichen. {{ui:In diesem Raum abspielen}} spielt eine Stimme, einen Händeklatsch, gezupfte Töne oder Ihre eigene Tondatei über eine für den Raum berechnete Impulsantwort ab. Die Schluckwerte sind typische veröffentlichte Werte, die Sie ersetzen sollen. Siehe [Raumakustik](topic:room-acoustics).
- **Hochwasser-, Wind- und Erdbebenwiedergabe.** {{ui:Gefahrenwiedergabe}} spielt steigendes Wasser durch die Räume, den Winddruck auf jedes Geschoss und ein Erdbeben, das die Geschosse erschüttert, auf einem Grundriss oder einer Ansicht mit einem Zeitregler ab. Einfache Modelle mit ihren Annahmen im Bereich; keine Normprüfung. Siehe [Hochwasser, Wind oder Erdbeben abspielen](topic:hazard-playback).
- **Was sich in fünfzig Jahren abnutzt.** {{ui:Lebenszyklusansicht}} listet Fenster, Türen, Oberflächen und das Dach mit jeweils einer Nutzungsdauer, den Jahren, in denen sie ersetzt werden, und, wenn Sie einen Preis pro Einheit eingeben, den Kosten pro Jahr und deren Barwert. {{ui:Plan speichern (CSV)}} schreibt sie aus. Die Nutzungsdauern sind Planungswerte. Siehe [Was sich in fünfzig Jahren abnutzt](topic:life-cycle-view).
- **Beton- und Erdbebenprüfungen.** Die Blöcke {{ui:Betonbauteile}} und {{ui:Erdbebenlasten}} der Registerkarte {{ui:Berechnung}} prüfen Betonbalken und -stützen nach ACI 318-19 und ermitteln äquivalente Horizontalkräfte nach ASCE 7-22 für starre Geschossdecken, mit Geschossverschiebung. Zur Prüfung durch einen Ingenieur. Siehe [Betonbauteile prüfen und Erdbebenlasten ermitteln](topic:concrete-and-seismic).

### Prüfen und berichten

- **Prüfung gegen eine IDS.** Laden Sie die `.ids`-Datei, die Ihnen ein Auftraggeber gegeben hat, und sehen Sie in Probleme jedes Element, das sie nicht erfüllt, bevor Sie die IFC-Datei übergeben. Öffnen Sie {{ui:Mit einer IDS prüfen}} unter {{ui:Modellprüfungen}}. Siehe [Ein Modell gegen die IDS eines Auftraggebers prüfen](topic:check-against-ids).
- **Tags und Listen.** Definieren Sie eigene Tags, setzen Sie sie auf viele Elemente auf einmal und erstellen Sie Listen, deren Spalten, Filter und Gruppen sie auswerten. Die Tags werden in der IFC-Datei gespeichert. Siehe [Tags und Listen](topic:tags-and-schedules).
- **Dokumente aus dem Modell.** {{ui:Dokumente aus dem Modell}} füllt eine Spezifikationsvorlage aus der geöffneten IFC-Datei und speichert sie als PDF, Word-Dokument oder Markdown. Siehe [Dokumente aus dem Modell](topic:documents-from-the-model).
- **Einen Scan mit dem Modell vergleichen.** Bei geöffneter Punktwolke beurteilt {{ui:Vergleichen}} jedes Element als gebaut, teilweise gebaut, fehlend oder nicht erreicht und zeigt den Fertigstellungsgrad in Prozent. Siehe [Einen Scan mit dem Modell vergleichen](topic:compare-scan-with-model).
- **CO2 und Kosten.** Der Bereich Carbon summiert die grauen Emissionen aus einer Faktortabelle, die Sie bearbeiten können, und der Bereich Kosten verteilt Preise über den 4D-Zeitplan. Die mitgelieferten Faktoren sind allgemein und als ungeprüft gekennzeichnet. Siehe [Graue Emissionen und Kosten](topic:embodied-carbon-and-5d-cost).
- **Jede Kartenprojektion.** {{ui:Messen}} › {{ui:Koordinatensystem…}} nimmt eine EPSG-Nummer, eine UTM-Zone, einen Namen oder Ihre eigene Projektionsdefinition. Siehe [Mit jeder Projektion georeferenzieren](topic:georeference-any-projection).

### Zeichnen und bearbeiten

- **Verschieben, Ausrichten und Verteilen.** Unter {{ui:Build}}; {{key:Shift+M}} startet Verschieben (einfaches {{key:M}} ist weiterhin {{ui:Messen}}). Beim Verschieben kopiert {{key:C}} mit, jeder Schritt ist ein Rückgängig, und er wirkt in einer Live-TeamWork-Sitzung mit. Siehe [Verschieben, Kopieren, Ausrichten und Verteilen](topic:move-align-distribute).
- **Bilder unter dem Plan.** {{ui:Build}} › {{ui:Bild}} platziert ein PNG-, JPEG- oder WebP-Bild unter den Plan eines Geschosses oder auf einer senkrechten Ebene. Den Maßstab legen Sie über zwei Punkte fest, und Sie können es verschieben, drehen, ausblenden und sperren. Ein in MarkupCraft kopierter Bereich wird im Maßstab seines Blatts eingefügt. Siehe [Ein Bild unter den Plan legen](topic:pictures-as-backgrounds).
- **Wände aus einem Scan.** Bei geöffnetem Scan kommen Wände, Türen und Räume als Vorschläge, die Sie einzeln behalten oder verwerfen, in einem einzigen Rückgängig-Schritt. Nur Wände in zwei senkrechten Richtungen werden gefunden. Siehe [Einen Scan in Wände umwandeln](topic:scan-to-walls).
- **Durchpausen, Stifte und Treppe skizzieren.** {{ui:Durchpausen}} zeigt ein anderes Geschoss gestrichelt unter dem Plan, {{ui:Stifte}} gibt Wänden, Türen und Fenstern in einer Ansicht eine eigene Linienstärke, und {{ui:Treppe skizzieren}} macht aus einer Gehlinie eine Treppe. Ein Wavefront-OBJ-Netz lässt sich öffnen. Siehe [Ein Geschoss durchpausen, Stifte und eine Treppe aus einer Skizze](topic:trace-pens-stairs-obj).
- **Gebäude um eine Adresse.** Die Gebäude und das Grundstück, die „Adresse zu Grundstück“ aus CivilCraft gefunden hat, erscheinen als Vorschläge; Sie wählen die aus, die Sie hinzufügen. Siehe [Mit dem Grundstück aus CivilCraft beginnen](topic:site-from-civilcraft).
- **Elementzeichnungen.** {{ui:Build}} › {{ui:Elementzeichnungen}} umrahmt Wände, Decken und Dächer in Holz oder Leichtstahl und speichert eine Zuschnittliste als CSV und Werkstattzeichnungen als PDF. Es sind Ausgangswerte, keine Tragwerksplanung. Siehe [Elementzeichnungen](topic:panel-drawings).
- **Symbolpalette und Pflanzen.** {{ui:Build}} › {{ui:Symbolpalette}} findet elektrische und sanitäre Symbole nach Namen. Die Quelle {{ui:Pflanzen}} der {{ui:Bibliothek}} listet rund 400 Pflanzen mit Plansymbolen. Siehe [Symbolpalette](topic:symbol-palette) und [Eine Pflanze platzieren](topic:plant-list).

### Rohre, Kanäle und Energie

- **Split, VRF und Gebläsekonvektoren.** Innen- und Außengeräte mit ihren Anschlüssen sowie Leitungssätze, dimensioniert nach einer Tabelle typischer Beispielwerte, die Sie ändern können. Siehe [Split, VRF und Gebläsekonvektoren](topic:split-vrf-fan-coils).
- **Berechnungen.** Der Bereich Berechnungen prüft Zuleitungs- und Kanalquerschnitte mit Druckverlust, führt Kabel durch Kabelrinnen und Leerrohre und zeigt deren Füllung, und berechnet die Beleuchtungsstärke aus IES- oder EULUMDAT-Dateien. Vorgaben sind gekennzeichnet; geben Sie die Werte Ihrer Norm ein. Siehe [Rohr-, Kanal-, Kabel- und Lichtberechnungen](topic:mep-calculations).
- **PCF-Dateien.** Das Werkzeug Rohr mit **PCF exportieren** schreibt die Leitungen für Programme zur Rohrspannung und Isometrie, und eine PCF-Datei, die zurückgelesen wird, zeichnet ihre Rohre. Siehe [Rohrkomponentendateien](topic:piping-pcf).
- **Solar-PV.** Setzen Sie Module auf Dächern oder am Boden ein, verschatten Sie sie anhand des Modells, schätzen Sie den Jahresertrag, prüfen Sie Strings und erzeugen Sie Daten für ein einpoliges Schema. Das Startmodul und die Verluste sind allgemein. Siehe [Solar-PV](topic:solar-pv).
- **EnergyPlus-Datei.** Der Bereich „Mit EnergyPlus prüfen“ schreibt das Modell als IDF, um es in Ihrem eigenen EnergyPlus laufen zu lassen. Die Ausführung im Browser braucht eine Version, die Sie selbst hosten und deren Adresse Sie eingeben; BimCraft liefert sie nicht mit. Siehe [Heizung und Kühlung mit EnergyPlus prüfen](topic:check-with-energyplus).

### Bilder und Dateien

- **Render-Engine wählen.** {{ui:Rendern}} hat eine Auswahl {{ui:Engine}}. Unsere zwei eingebauten Engines (Fast und Path tracer) bleiben der Standard. **Öffnen in** speichert die Szene als USD- oder glTF-Datei und einen Unreal-Projektordner als .zip; in CadCraft Studio kann ein Add-on eine Engine hinzufügen. Das Unreal-Plug-in, das das Projekt öffnet, ist nicht veröffentlicht. Siehe [Wählen Sie, welches Programm das Bild zeichnet](topic:render-engines).
- **Rückgängig in Studio.** In CadCraft Studio meldet BimCraft Studio jeden abgeschlossenen Schritt, damit Studio Ihren letzten Schritt in dem Fenster rückgängig machen kann, das Sie zuletzt verwendet haben. Siehe [Rückgängig über Apps hinweg](topic:undo-across-apps).
- **Add-ons in Ihrer Datei.** Eine IFC-Datei vermerkt, welche Add-ons in sie geschrieben haben, und bietet beim Öffnen die an, die Ihnen fehlen. Siehe [Add-ons in Ihrer Datei](topic:add-ons-in-your-file).

### In allen Apps

- **Ihre KI verbinden.** Ihr eigener Assistent kann BimCraft über die Verbindung von Studio steuern und Fragen zum Modell beantworten, etwa welche Räume unter einer bestimmten Fläche liegen. Studio hat keine eigene KI. Siehe [Einen KI-Assistenten mit Ihrem Modell arbeiten lassen](topic:assistants).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet Umbrechen, 2 Zeilen oder 1 Zeile. Umbrechen bleibt die Vorgabe.
- **Eingabegeräte.** Trackpad-, Stift-, 3D-Maus-, Controller- und MIDI-Einstellungen gelten für alle Apps.
- **Probleme und Live.** Das Warnfeld und Live-Sitzungen funktionieren wie bisher, mit den neuen Prüfungen oben, die in Probleme einfließen.
- **Sprachen.** 54 Sprachen, davon zehn neu. Alle außer Englisch sind maschinelle Entwürfe, die noch kein Muttersprachler gelesen hat; Hilfethemen sind meist auf Englisch.

## Behoben in 0.8.1

- **Menüband- und Projektbrowser-Layout.** Einfügen › CAD importieren, Einfügen › Bild und Verwalten › Projekteinheiten meldeten „Noch nicht in BimCraft umgesetzt“. Bild öffnet jetzt das Werkzeug Bild, CAD importieren öffnet {{ui:Build}} › {{ui:Aus einer Zeichnung…}} (DWG, DXF, PDF oder Scan), und Projekteinheiten öffnet {{ui:Einstellungen}} › {{ui:Global}} › {{ui:Einheiten}}. Verschieben und Ausrichten starten die Werkzeuge Verschieben und Ausrichten, Ebene öffnet {{ui:Geschosse hinzufügen…}}, Phasen öffnet den Abschnitt Renovierungsphasen und Materialien öffnet die Materialbibliothek.
- **Abschnitt DWG-Klassen.** Er wurde als falscher Typ gelesen. Behoben in BimCraft und in den anderen Apps, die DWG lesen.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache jetzt ohne Neustart wechseln. Das ist noch nicht auf allen Plattformen getestet; sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- **Archicad-Bundle-Skript.** `archicad_bundle.py`, ein separater Download, findet jetzt den Pfad von Archicad, beobachtet den Ordner bis zu 20 Sekunden und versucht es neben dem Bundle erneut.

## Noch nicht in dieser Version

- **Sicherheits- und Entwurfshilfen.** Personen im Gebäude hat keine Laufweg-Grenze aus einer Bauordnung (Sie geben die Grenze ein) und wurde nicht von Hand an einem echten Plan geprüft. Die Werte zu Akustik, Lebenszyklus und Gefahren sind Planungswerte, keine Normprüfung.
- **Klimazukunft und EnergyPlus.** Keine eingebaute Klimazukunft: Für den Hochwasserlauf können Sie eine Szenariodatei laden. Der EnergyPlus-Lauf im Browser ist nicht Teil dieser Version.
- **Layout des Menübands.** Mengenermittlung Material bleibt „Noch nicht umgesetzt“, weil BimCraft keine Materialmengenliste hat. Und 54 andere ausgegraute Menübandwerkzeuge haben noch kein BimCraft-Werkzeug dahinter.
- **Signierung und Plattformen.** Windows-Installer und das macOS-.dmg sind nicht signiert. Daher zeigt SmartScreen {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}; macOS braucht Rechtsklick und dann {{ui:Offen}}. Das iPad- und iPhone-Build wurde für 0.8.1 nicht neu erstellt.
- **Echte Seitentests.** Einige ältere Browsertests von BimCraft schlagen auf unserer Testseite noch fehl, wie schon vor 0.8.1.

Alles Weitere steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet). Frühere Änderungen stehen unter [Was ist neu in 0.7](topic:whats-new-0-7).
