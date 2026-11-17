---
title: Fehlerbehebung
summary: Meldungen, die BimCraft anzeigt, ihre Ursachen und was zu tun ist, beim Öffnen von Dateien und Ordnern, bei 3D-Modellen, Zeichnungen und Bearbeitungen.
keywords: Problem, Fehler, funktioniert nicht, kann nicht öffnen, fehlgeschlagen, unvollständig, beschädigt, langsam, Absturz, leer, fehlend, Meldung, Hilfe
from: 1e5a79fc
---

Meldungen erscheinen in der Statuszeile unten im Arbeitsbereich, bei einem Fehler in Rot. Suchen Sie unten die passende Meldung.

## Dateien öffnen

**„*name* ist keine IFC-, RVT-, RFA-, DWG- oder DXF-Datei.“**
BimCraft hat die Datei nicht erkannt. Prüfen Sie die Dateiendung und ob die Datei nicht leer ist. PDF-Dateien, Bilder und Office-Dateien lassen sich nicht öffnen.

**„.ifczip wird noch nicht unterstützt. Speichern oder exportieren Sie das Modell als einfache .ifc-Datei.“** (gilt auch für `.ifcxml`)
Entpacken Sie die `.ifczip`-Datei (sie ist ein gewöhnliches ZIP-Archiv mit einer `.ifc`-Datei darin) oder exportieren Sie einfaches IFC.

**„… ist eine Projektdatei, die BimCraft noch nicht lesen kann.“**
Eine `.pln`-, `.pla`-, `.tpl`- oder `.bpn`-Datei. Exportieren Sie daraus IFC oder DWG und öffnen Sie diese: siehe [Projektdateien .pln und .pla öffnen](topic:pln-project-files).

**„Diese IFC-Datei konnte nicht gelesen werden.“**
Die IFC-Datei ist beschädigt oder keine echte IFC-Datei. Öffnen Sie sie in einem Texteditor: Eine echte IFC-Datei beginnt mit `ISO-10303-21;`. Exportieren Sie sie erneut.

**„Diese Datei ist unvollständig: Sie hat … MB, aber ihr eigenes Verzeichnis verweist auf Daten bis mindestens … MB. …“**
Die Projekt- oder Familiendatei wurde beim Kopieren, Hochladen oder Synchronisieren abgeschnitten. Eine Clouddatei, die nur online verfügbar ist, sieht genauso aus. Eine Datei, die für sich allein geöffnet wird, lässt sich trotzdem öffnen, mit dieser Meldung oben auf der Karte und dem Hinweis „Wiederhergestellter Inhalt wird angezeigt; kopieren Sie das Original erneut für das vollständige Modell.“: Die Karte zeigt nur die Teile, deren jedes Byte in der Datei vorhanden ist, und listet den Rest unter **Nicht in der Datei** auf. Machen Sie die Datei in Ihrem Clouddienst offline verfügbar oder kopieren Sie das Original erneut und öffnen Sie es wieder. In einem Ordner zeigt BimCraft stattdessen die neueste vollständige Sicherung an.

**„… Auch das Inhaltsverzeichnis der Datei liegt im fehlenden Teil, daher lässt sich nichts darin öffnen.“**
Die Datei wurde so früh abgeschnitten, dass nicht einmal ihr Inhaltsverzeichnis vorhanden ist. Aus dieser Kopie lässt sich nichts wiederherstellen. Kopieren Sie das Original erneut und öffnen Sie es wieder.

**„Diese zusammengesetzte Datei hat keinen BasicFileInfo-Stream und ist daher keine Revit-Datei.“**
Die Datei ist eine zusammengesetzte Datei anderer Art (alte Office-Dokumente verwenden denselben Container). Prüfen Sie, ob Sie die richtige Datei gewählt haben.

**„Noch mit der letzten Datei beschäftigt…“**
BimCraft arbeitet noch an der vorherigen Datei oder dem vorherigen Ordner. Warten Sie, bis die Statuszeile fertig ist, und versuchen Sie es dann erneut.

**Der Dateiauswahldialog blendet meine Datei aus.**
Der Dialog bietet nur `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` und `.dxf` an. Ziehen Sie andere Dateien stattdessen auf die Seite; BimCraft teilt Ihnen dann mit, ob es sie lesen kann.

## Ordner öffnen

**„Dieser Ordner enthält mehr als 20.000 Dateien. Wählen Sie einen kleineren Ordner, etwa ein einzelnes Projekt.“**
Sie haben einen zu hoch liegenden Ordner gewählt, etwa ein ganzes Laufwerk. Wählen Sie einen Projektordner.

**„Der Browser hat keinen Zugriff auf *name* gewährt. Wählen Sie ihn erneut mit Ordner öffnen.“**
Sie haben bei einem zuletzt verwendeten Ordner auf {{ui:Wieder öffnen}} geklickt, und die Berechtigung des Browsers wurde verweigert oder ist abgelaufen. Wählen Sie den Ordner erneut aus oder ziehen Sie ihn hinein.

**Der Browser meldet, dass er Dateien „hochlädt“.**
Das ist die eigene Formulierung des Browsers für die Übergabe von Dateien an eine Seite. BimCraft sendet sie nirgendwohin. Ziehen Sie den Ordner hinein, um die Frage zu vermeiden.

**Auf einem Smartphone oder Tablet passiert nichts.**
Viele mobile Browser können keine Ordner auswählen. Öffnen Sie einzelne Dateien oder verwenden Sie einen Computer.

## Die IFC-Engine wird beim ersten Mal geladen

**Die Statuszeile bleibt bei „IFC-Engine wird gestartet…“ oder zeigt einen Fehler wie „Failed to fetch“.**
Die IFC-Engine konnte nicht heruntergeladen werden. Vielleicht sind Sie offline, oder eine Firewall oder ein Inhaltsblocker blockiert sie.

:::offline
Sie sind offline. Wenn die Schaltfläche der App-Leiste nicht {{ui:Offline bereit}} anzeigt, wurde die IFC-Engine in diesem Browser nie gespeichert. Stellen Sie die Verbindung wieder her, öffnen Sie die Datei erneut und klicken Sie dann auf {{ui:Für Offline speichern}}, damit sie beim nächsten Mal offline funktioniert. Siehe [Online und offline](topic:online-offline).
:::

:::online
Laden Sie die Seite neu und versuchen Sie es erneut. Bitten Sie in einem Firmennetzwerk Ihr IT-Team, die `.wasm`-Dateien der Seite zuzulassen.
:::

## Für die Offlinenutzung speichern

**Die Schaltfläche zeigt {{ui:Speichern nicht möglich}}.**
Einige Dateien wurden nicht heruntergeladen, meist weil die Verbindung abbrach. Prüfen Sie Ihre Verbindung und klicken Sie erneut auf die Schaltfläche. Eine frühere Offlinekopie bleibt erhalten, bis eine neue vollständig ist.

**Die Schaltfläche zeigt {{ui:Offline nicht verfügbar}}.**
Dieses Fenster kann keine Offlinekopie speichern, zum Beispiel ein privates Fenster oder ein verwalteter Arbeitsplatzrechner. Siehe [Offline arbeiten](common:offline).

**Die Schaltfläche bleibt eine Weile bei „*n* von *m* werden gespeichert“.**
Die Kopie von BimCraft ist etwa 11 MB groß, größtenteils die IFC-Engine. Lassen Sie den Tab geöffnet, bis {{ui:Offline bereit}} angezeigt wird.

**BimCraft hat offline geöffnet, wirkt aber veraltet.**
Ihre gespeicherte Kopie stammt von einem früheren Besuch. Wenn Sie online sind, klicken Sie auf {{ui:Offline bereit}} und wählen Sie {{ui:Erneut speichern (neueste Version holen)}}.

## 3D-Ansicht

**Das Modell ist nicht dort, wo ich es erwartet habe, oder es ist winzig.**
Drücken Sie {{key:F}} oder klicken Sie auf {{ui:Einpassen}}. Einpassen erfasst immer alles im Modell, einschließlich abgewählter Geschosse und einzelner Elemente weit weg vom Gebäude, daher kann das Gebäude klein wirken. Zoomen Sie von dort aus hinein.

**Klicken wählt nichts aus.**
Halten Sie die Maus beim Klicken ruhig: Eine kleine Bewegung dreht die Ansicht. Elemente auf abgewählten Geschossen lassen sich nicht wählen. Ist {{ui:Räume}} aktiv, werden die durchsichtigen Räume vor dem gewählt, was in ihnen liegt.

**Die Schaltfläche {{ui:Kanten}} ist ausgegraut: „Kanten sind bei sehr großen Modellen ausgeschaltet“.**
Das Modell hat mehr als 1,5 Millionen Dreiecke. Kanten sind ausgeschaltet, um Speicher zu sparen.

**Der Tab wird langsam, weiß oder zeigt die Absturzseite des Browsers.**
Das Modell ist zu groß für den Speicher, den der Browser dem Tab zuweist. Schließen Sie andere Tabs und laden Sie neu. Exportieren Sie ein kleineres IFC: ein Gebäude, eine Fachdisziplin oder weniger Geschosse. Siehe [Browser, Geräte und Speicher](topic:platforms).

**Die 3D-Ansicht bleibt leer.**
WebGL ist möglicherweise ausgeschaltet oder blockiert. Schalten Sie in den Einstellungen des Browsers die Hardwarebeschleunigung (oder Grafikbeschleunigung) ein und starten Sie den Browser neu.

## IFC bearbeiten

**„Verwenden Sie eine Zahl.“** Der Wert ist numerisch. Geben Sie eine einfache Zahl ohne Einheiten ein, etwa `2.4`.

**„Verwenden Sie eine ganze Zahl.“** Der Wert ist eine Anzahl oder Ganzzahl. Entfernen Sie die Dezimalstellen.

**„Nur Eigenschaften mit einem einzelnen Wert können bearbeitet werden.“** Listen, Aufzählungen und Mengen sind nur lesbar.

**{{key:Mod+S}} öffnet das Fenster „Seite speichern“ des Browsers.**
Es gibt keine nicht gespeicherten Änderungen, daher überlässt BimCraft die Taste dem Browser. Schließen Sie das Fenster.

**{{key:Mod+Z}} bewirkt nichts.**
Es funktioniert nur, solange nicht gespeicherte Änderungen vorliegen und Sie nicht in einem Feld tippen. Nach dem Speichern gibt es nichts mehr rückgängig zu machen.

**Die Liste {{ui:Änderungen}} zeigt noch Bearbeitungen, nachdem ich sie verworfen und eine Zeichnung oder einen Ordner geöffnet habe.**
Wenn Sie die Frage „Verwerfen?“ mit OK beantworten und danach etwas anderes als ein IFC-Modell öffnen, bleiben die alten Bearbeitungen im Speicher, und {{ui:Als IFC speichern}} würde sie trotzdem speichern. Um wirklich neu zu beginnen, öffnen Sie das ursprüngliche IFC erneut oder laden Sie die Seite neu.

**Meine Bearbeitung hat mehr Elemente geändert, als ich gewählt habe.**
Sie haben eine Eigenschaft in einem Satz geändert, der mit „(Typ)“ markiert ist. Typeigenschaften gelten für jedes Element des Typs. Klicken Sie auf {{ui:Rückgängig}}. Siehe [Eine Typeigenschaft für jedes Element eines Typs ändern](topic:type-vs-instance).

## Zeichnungen

**„*name* konnte nicht gelesen werden. Die Datei ist möglicherweise beschädigt oder in einem Format gespeichert, das der Leser noch nicht unterstützt (…).“**
Speichern Sie die Zeichnung aus dem Programm, das sie erstellt hat, als älteres DWG (2018 oder früher) oder als DXF, und versuchen Sie es erneut.

**„Diese Zeichnung hat nichts anzuzeigen.“** oder **„*name* ist eine leere Zeichnung: Sie enthält keine Linien, keinen Text und keine Blöcke.“**
Die Zeichnung ist leer oder enthält nur Dinge, die BimCraft noch nicht zeichnet (siehe **Noch nicht gezeichnet** rechts).

**„Diese Zeichnung ist sehr groß; nur ein Teil wird angezeigt.“**
BimCraft hat das Zeichnen beendet, um reaktionsfähig zu bleiben. Schalten Sie Layer aus, die Sie nicht brauchen, oder öffnen Sie die benötigten Blätter aus einer kleineren Zeichnung.

**Teile eines Blatts fehlen.**
Verknüpfte Zeichnungen fehlen möglicherweise: Sehen Sie unter **Verknüpfte Zeichnungen** rechts nach. Siehe [Verknüpfte Zeichnungen und Bilder finden](topic:dwg-linked-files). Layer können auch ausgeschaltet sein: Klicken Sie auf {{ui:Alle ein}}.

**Ein Bild erscheint als leerer Rahmen.**
Seine Datei wurde nicht gefunden, oder es ist ein TIFF („TIFF kann in einem Browser nicht angezeigt werden“). Fügen Sie eine PNG- oder JPEG-Kopie mit {{ui:Bilder hinzufügen…}} hinzu.

**Scrollen auf meinem Trackpad zoomt, statt die Zeichnung zu verschieben.**
So funktionieren Zeichnungen in BimCraft. Klicken und ziehen Sie, um zu verschieben.

## Immer noch nicht gelöst

Lesen Sie [Was noch nicht umgesetzt ist](topic:not-built-yet): Das, was Sie suchen, gibt es in dieser Version möglicherweise nicht.
