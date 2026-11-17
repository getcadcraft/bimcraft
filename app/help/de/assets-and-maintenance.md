---
title: Asset-Daten und ein Wartungsprotokoll im Modell führen
summary: Nutzen Sie das übergebene IFC-Modell für den Betrieb des Gebäudes: Hersteller, Modell, Seriennummer, Garantie und Nutzungsdauer für Geräte und Ausstattung sowie ein Protokoll der ausgeführten Wartung, alles in die IFC geschrieben.
keywords: Übergabe, Fertigstellungsbescheinigung, Nutzungsbescheinigung, Ist-Zustand, Übergabepaket, Assets, Asset-Register, Facility Management, FM, Betrieb, Wartung, Service, Garantie, Seriennummer, Barcode, Hersteller, Modell, Nutzungsdauer, COBie, digitaler Zwilling, überfällig, fällig, Arbeitsauftrag
from: b84ac492
---

Der Reiter {{ui:Assets}} im rechten Bereich macht aus dem geöffneten IFC-Modell ein Verzeichnis der Ausstattung des Gebäudes. Alles wird in die IFC selbst geschrieben, in die Eigenschaftssätze und Aufgaben von IFC, sodass auch das nächste Programm, das die Datei öffnet, es liest. Nichts wird hochgeladen und kein Server ist nötig: Speichern Sie die IFC, um sie zu behalten.

## Was aufgelistet wird

- Geräte und Ausstattung: Möbel, Sanitärobjekte, Leuchten, Geräte, Luftdurchlässe, Armaturen, Ventile, Pumpen, Ventilatoren, Kessel, Tanks, Steckdosen, Schaltanlagen, Aufzüge und andere solche Bauteile sowie Bibliothekselemente mit Gerätedaten.
- Jedes andere Bauteil, das Sie **verfolgen**: Wählen Sie es im Modell aus (eine Tür, eine Wand, eine Pumpe, die als einfaches Objekt gezeichnet ist) und klicken Sie auf {{ui:Track picked}}.
- Alles, was schon Asset-Daten oder eine Wartungsaufgabe hat, geschrieben hier oder von einem anderen Programm.

Was überfällig ist, steht zuerst, dann was innerhalb von 30 Tagen fällig ist. Filtern Sie nach Name, Kennzeichnung, Hersteller, Modell oder Seriennummer, nach Ebene, oder haken Sie {{ui:Only overdue or due within 30 days}} an.

## Asset-Daten

Klicken Sie in der Liste auf ein Asset (oder wählen Sie es im Modell aus), um seine Daten zu öffnen: Hersteller, Modell, Modellreferenz, Seriennummer, Barcode, das Installationsdatum, die Garantienummer mit Beginn und Ende sowie die Nutzungsdauer in Jahren. {{ui:Save the data}} schreibt sie in einem Schritt ({{key:Mod+Z}} macht es rückgängig). Lassen Sie ein Feld leer, um diesen Wert zu entfernen.

## Dokumente

Unter den Daten listet {{ui:Documents}} die Handbücher, Garantien, Fotos, Bescheinigungen und Zeichnungen auf, die mit dem Asset verknüpft sind. Wählen Sie die Art, geben Sie einen Titel an (oder lassen Sie ihn leer: dann wird der Dateiname verwendet) und geben Sie an, wo das Dokument liegt:

- eine **Webadresse** (`https://…`): Sie erhält einen Link „Link öffnen“, der in einem neuen Tab öffnet;
- oder ein **Dateiname oder Pfad** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, eine Netzwerkfreigabe): Bewahren Sie die Dateien neben der IFC auf, im selben Ordner oder einem darunter, damit die Namen auch funktionieren, wenn Sie den Ordner weitergeben. BimCraft zeigt den Namen; öffnen Sie die Datei aus dem Ordner.

Die Dateien selbst werden nie hochgeladen oder in die IFC kopiert: Nur der Link wird geschrieben. Eine Webadresse mit einem Passwort darin und jeder Link, der weder eine Webadresse noch eine Datei ist (etwa `javascript:`), wird abgelehnt. {{ui:Remove}} nimmt ein Dokument vom Asset (ein Schritt; {{key:Mod+Z}} macht es rückgängig).

Dokumente, die ein anderes Programm am Element abgelegt hat, werden ebenfalls aufgelistet. Dokumente am **Typ** des Elements erscheinen bei jedem Element dieses Typs und sind entsprechend gekennzeichnet; ändern Sie diese dort, wo der Typ erstellt wurde.

In der IFC ist jedes Dokument eine IFC-Dokumentreferenz, die mit dem Element verknüpft ist; ihre Art wird an dieser Verknüpfung gespeichert, in IFC4 wie in IFC2X3.

## Das Wartungsprotokoll

Unter den Dokumenten: {{ui:Record work done}}: das Datum der Ausführung, die Arbeit, wer sie ausgeführt hat, wann sie als Nächstes fällig ist, und Notizen. Jeder Eintrag ist ein Schritt; {{ui:Edit}} und {{ui:Delete}} ändern ihn später. Das Fälligkeitsdatum des neuesten Eintrags entscheidet, ob das Asset überfällig ist oder bald fällig wird.

## So wird es in der IFC gespeichert

- Hersteller und Modell in `Pset_ManufacturerTypeInformation`, Seriennummer, Barcode und das Installationsdatum in `Pset_ManufacturerOccurrence`, die Garantie in `Pset_Warranty`, die Nutzungsdauer in `Pset_ServiceLife`, jeweils am Element selbst. Wenn der Typ des Elements bereits einen Hersteller oder ein Modell trägt, wird dieser angezeigt, bis Sie Ihren eigenen eingeben.
- Jeder Wartungseintrag ist eine IFC-**Aufgabe** der Art Wartung, mit dem Element verknüpft, mit ihren Daten (in IFC4 zusätzlich als eigene Zeiten der Aufgabe) und einem Satz `CadCraft_Maintenance` mit dem Tag, an dem die Arbeit erfolgte, wer sie ausgeführt hat, und dem nächsten Fälligkeitstag.
- Werte, die ein anderes Element mit ihm teilt, werden zuerst kopiert: Die Änderung eines Assets ändert nie seine Nachbarn.
- In älteren IFC2X3-Dateien werden die Daten als Text geschrieben (YYYY-MM-DD); diese Version verlangt dort einen eigenen Datensatz, den BimCraft nicht schreibt.

## Sensormesswerte

Öffnen Sie {{ui:Sensor values}} und {{ui:Open readings (CSV)…}}, um Messwerte zu importieren, die aus einem Gebäudemanagementsystem, einem Datenlogger oder einer Tabelle exportiert wurden:

- Die **erste Spalte ist die Zeit**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` oder Unix-Sekunden. Eine Zeit ohne Zone wird in der Zeitzone Ihres Computers gelesen. Datumsangaben mit Tag zuerst, etwa `23/10/2026`, werden nicht gelesen, weil sie mehrdeutig sind; exportieren Sie ISO-Daten.
- **Jede andere Spalte ist ein Sensor**, deren Kopfzeile die **Kennzeichnung**, der **Name** oder die **GlobalId** seines Assets ist. Eine Kopfzeile, die zu keinem Asset oder zu mehr als einem passt, wird aufgelistet und ausgelassen. Spalten werden durch Kommas, Semikola oder Tabulatoren getrennt; bei Semikola oder Tabulatoren wird auch ein Dezimalkomma (`21,5`) gelesen.
- Zeiten oder Werte, die sich nicht lesen lassen (ein Wort, eine Einheit in der Zelle), werden gezählt und ausgelassen, nie geraten.

Der letzte Messwert erscheint in der Spalte {{ui:Reading}} der Liste und im Block {{ui:Sensor}} des Assets, mit einem **Diagramm** aller Messwerte (auf dem Telefon warten Diagramme, bis Sie auf {{ui:Show the chart}} tippen). Legen Sie an einem Asset eine **untere und obere Grenze** sowie eine Einheit fest und speichern Sie mit {{ui:Save the limits}}: Ein Messwert außerhalb dieser Grenzen markiert das Asset. Haken Sie {{ui:Show on the model}} an, um jedes Asset nach seinem Messwert einzufärben: blau unter der unteren Grenze, grün innerhalb der Grenzen, rot über der oberen Grenze und, für Assets ohne Grenzen, eine einzige blaue Skala vom niedrigsten bis zum höchsten Messwert. Der Messwert erscheint als Beschriftung (bis zu 60 Beschriftungen, markierte zuerst).

**Messwerte bleiben in diesem Browser-Tab**: Sie werden nicht in der IFC gespeichert und nirgendwohin gesendet; öffnen Sie die CSV beim nächsten Mal erneut. **Die Grenzen werden in der IFC gespeichert** (ein Satz `CadCraft_Sensor` am Element: Low, High, Unit), damit die nächste Person, die die Datei öffnet, dieselben Markierungen sieht.

## Live-Messwerte

{{ui:Live feed}} liest Werte, sobald sie anfallen, **direkt von diesem Browser zu Ihrem eigenen System**. Nichts läuft über unseren Server, und nichts wird irgendwo gespeichert außer in Ihrem Browser-Tab. Beim Öffnen einer Datei wird nichts verbunden: Nur {{ui:Connect}} tut das.

- **MQTT über WebSockets**: die Adresse des WebSocket-Listeners Ihres Brokers (`wss://broker.example.com:8884/mqtt`) und ein oder mehrere Topics mit `{tag}` an der Stelle, an der die Kennzeichnung des Assets steht, zum Beispiel `site/{tag}/temperature` (BimCraft abonniert `site/+/temperature` und liest die Kennzeichnung aus dem Topic jeder Nachricht). Topics ohne `{tag}` benennen den Sensor selbst. Eine Nachricht ist entweder eine einfache Zahl (`21.5`) oder JSON wie `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` ({{ui:Value field in JSON}} setzen, falls Ihres anders heißt).
- **HTTP-Adresse abfragen**: eine Webadresse, die Ihr Gebäudemanagementsystem oder ein kleines Skript von Ihnen beantwortet, alle paar Sekunden abgefragt (mindestens alle 5 Sekunden). Sie kann mit JSON antworten, das nach Kennzeichnung geordnet ist (`{"AHU-1": 21.5}`), mit einer JSON-Liste (`[{"tag": "AHU-1", "value": 21.5}]`) oder mit einer CSV mit Messwerten wie oben. Antwortet sie nicht, wartet BimCraft doppelt so lang, bevor es erneut fragt, bis zu fünf Minuten.

Jeder Messwert geht an das Asset, dessen Kennzeichnung, Name oder GlobalId er nennt, genau wie eine CSV-Spalte; Namen, die zu keinem Asset passen, werden aufgelistet. Die Messwerte fließen in {{ui:Sensor values}} ein: Liste, Diagramme, Grenzen und Farben am Modell funktionieren gleich.

**Ihr Passwort oder Token** wird für eine Verbindung eingegeben: Es wird an die Verbindung übergeben und das Feld geleert; es wird nie in diesem Browser oder in der IFC gespeichert. Ein Token wird als standardmäßiger `Authorization: Bearer`-Header gesendet, und es werden keine Cookies übertragen.

{{ui:Keep these settings in the IFC}} schreibt die Adresse, die Topics, das Wertfeld und die Abfrageintervalle ins Modell (ein Satz `CadCraft_Feed` am Projekt; für ein Passwort gibt es kein Feld), damit die nächste Person, die die Datei öffnet, nur ihren eigenen Login eingibt und auf {{ui:Connect}} klickt. Setzen Sie kein Passwort und keinen Schlüssel in die Adresse selbst: Eine Adresse mit Benutzername und Passwort darin wird abgelehnt.

:::note
**Was Ihr Broker oder Ihre Adresse benötigt.** Eine Browserseite kann nur mit einem Server sprechen, der dies erlaubt:
- Die Seite ist sicher (https), daher verbindet sich der Browser nur mit `wss://`- und `https://`-Adressen, außer auf Ihrem eigenen Computer (`localhost`), wo `ws://` und `http://` zum Testen funktionieren.
- Eine HTTP-Adresse muss Anfragen von dieser Seite erlauben (CORS: den Header `Access-Control-Allow-Origin`, und `Authorization` unter den erlaubten Headern, wenn Sie ein Token verwenden).
- Die meisten Broker (Mosquitto, EMQX, HiveMQ und andere) bieten einen WebSocket-Listener; er ist oft ausgeschaltet, bis man ihn einschaltet. BimCraft spricht MQTT 3.1.1.
:::

Es gibt **keine Warnmeldungen**, wenn BimCraft geschlossen ist: Grenzen markieren ein Asset nur, während das Modell mit einem verbundenen Feed geöffnet ist. Ein Gebäude rund um die Uhr zu überwachen erfordert einen Server, den BimCraft nicht betreibt.

## COBie-Tabelle

**COBie** ist die Übergabetabelle, die viele Eigentümer und Facility-Teams verlangen (veröffentlicht vom National BIM Standard in den USA; BS 1192-4 im Vereinigten Königreich). Öffnen Sie {{ui:COBie spreadsheet}} im Tab:

- {{ui:Save as COBie (.xlsx)}} schreibt die COBie-2.4-Blätter (Contact, Facility, Floor, Space, Type, Component, System, Job, Document und Attribute) aus dem Modell und den Asset-Daten: das Gebäude, seine Ebenen und Räume (Flächen aus den Mengen des Modells), jedes Asset als Komponente mit Seriennummer, Installationsdatum, Garantiebeginn, Kennzeichnung und Barcode, seinen Typ mit Hersteller, Modell, Nutzungsdauer und Garantielänge, die Systeme, zu denen es gehört, das Wartungsprotokoll als Aufträge und die verknüpften Dokumente. Jede Komponente trägt die IFC-GlobalId des Elements. Geben Sie Ihre E-Mail-Adresse für die Spalte „created by“ von COBie ein oder lassen Sie sie leer (dann steht dort n/a). Werte, die das Modell nicht hat, stehen als **n/a** da; die Kategoriespalten enthalten die IFC-Klasse, keinen OmniClass-Code.
- {{ui:Read a COBie spreadsheet…}} liest eine zurück, aus BimCraft oder einem anderen Programm, und **listet zuerst jede Änderung auf**: welches Asset, welcher Wert, von was zu was, und neue Dokumente. {{ui:Apply}} schreibt sie alle in einem Schritt ({{key:Mod+Z}} macht es rückgängig). Zeilen werden zuerst über die GlobalId zugeordnet, dann über den Namen der Komponente. Zeilen, die im Modell nichts treffen, werden aufgelistet, nicht hinzugefügt.

Eine Tabelle gilt als nicht vertrauenswürdig: Formeln werden nie gelesen oder ausgeführt (nur der zuletzt gespeicherte Wert der Zelle); ein Wert, der eine Garantie vor ihrem Beginn enden ließe, und ein Dokumentlink, der weder eine Webadresse noch ein Dateiname ist, werden ausgelassen und gezählt; sehr große Arbeitsmappen werden abgelehnt. Die Aufträge von COBie sind geplante Arbeiten eines Typs: Sie werden geschrieben, aber nicht zurückgelesen. In der von BimCraft geschriebenen Tabelle wird Text, den eine Tabellenkalkulation für eine Formel halten könnte (beginnend mit `=`, `+`, `-` oder `@`), als Text markiert.

Die Arbeitsmappe wird in unseren Tests mit einem unabhängigen Tabellenleseprogramm geprüft; sie wurde nicht von einem COBie-Validator geprüft. Wenn ein empfangendes Team einen solchen einsetzt, teilen Sie uns mit, was er meldet.

## Übergabedokumente

Die Unterlagen, die mit dem fertigen Gebäude an den Eigentümer gehen, gehören zum Projekt, nicht zu einem einzelnen Asset. Öffnen Sie auf dem Reiter {{ui:Assets}} {{ui:Handover documents}}:

1. {{ui:Add a document}}, wählen Sie die Art (Fertigstellungsbescheinigung, Nutzungsbescheinigung, Garantie, Handbuch, Ist-Zustands-Zeichnungen, Sonstiges), und geben Sie den Titel, das Ausstellungsdatum, den Aussteller und die Referenznummer ein.
2. Geben Sie an, wo es liegt: eine Webadresse, ein Dateiname neben der IFC oder {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} und {{ui:Remove}} ändern die Liste; jeder Schritt ist einzeln rückgängig zu machen.

{{ui:Build the handover package}} lädt eine ZIP-Datei herunter: eine Deckseite mit jedem Dokument, dieselbe Liste wie eine Tabelle, die COBie-Arbeitsmappe (die Dokumente stehen auf ihrem Blatt Document, als Zeilen zur Facility), das Modell und jede angehängte Datei. Eine Fertigstellungs- oder Nutzungsbescheinigung, die noch nicht in der Liste steht, wird auf der Deckseite genannt; das Paket wird trotzdem erstellt.

Das Modell im Paket ist das **Ist-Zustands-Modell**: Es gibt an, welche Bauteile vor Ort gemessen wurden. Dazu enthält der Ordner `as-built` die Erklärung, eine Liste jedes Bauteils mit seinem Prüfstatus, den aktuellen Zeichnungssatz als ein PDF (die Ist-Zustands-Zeichnungen) und das Änderungsprotokoll der Zeichnungen, wenn das Modell Sätze ausgegeben hat. Siehe [Bauteile als geprüft oder vor Ort verifiziert markieren](topic:verification).

- In der IFC-Datei ist jedes Dokument ein IfcDocumentInformation, mit dem Projekt verknüpft (IfcRelAssociatesDocument), mit Titel, Referenz, Datum, Aussteller und Ort, damit andere Programme es auflisten.
- Eine angehängte Datei wird mit Name, Größe und SHA-256 erfasst. Um die Datei selbst mit dem Projekt zu behalten, verwenden Sie {{ui:Save the project as a bundle}} (eine .ccbundle-Datei enthält das Modell und die angehängten Dateien; beim Öffnen werden sie zurückgegeben, jede gegen ihren Eintrag geprüft). Ein normales Speichern fragt, welche Variante Sie wollen.
- Eine einfache .ifc behält den Eintrag, nicht die Datei: Nach dem Öffnen verwenden Sie {{ui:Attach the file again}}. Dieselbe Datei wird erkannt; eine andere ersetzt den Eintrag.

## CSV

{{ui:CSV}} speichert jedes Asset mit seinen Daten, jeden Wartungseintrag und jedes Dokument, jeweils in einer Zeile, für eine Tabellenkalkulation oder ein anderes Wartungsprogramm.

:::note
Noch nicht umgesetzt: ein gehosteter Dienst, der Messwerte speichert und Warnungen sendet, während BimCraft geschlossen ist, sowie das Zurücklesen der COBie-Aufträge. Siehe [Noch nicht umgesetzt](topic:not-built-yet).
:::
