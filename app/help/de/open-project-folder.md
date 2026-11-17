---
title: Einen ganzen Projektordner öffnen
summary: Zeigen Sie BimCraft einen Projektordner, um alle Modelle, ihre Sicherungen und Verknüpfungen auf einmal zu sehen. Das Feld „Hier beginnen“ schlägt vor, an welcher Datei Sie arbeiten sollten.
keywords: Ordner, Verzeichnis, Projektordner, Netzlaufwerk, Server, Hier beginnen, welche Datei, Sicherungen, Verknüpfungen, Xrefs, zuletzt verwendete Ordner, Ordner ziehen
from: 16fbdce2
---

## Was Sie tun

Öffnen Sie einen ganzen Projektordner, etwa den, den Sie für einen Auftrag erhalten haben, und lassen Sie BimCraft ihn sortieren: welche Modelle vorhanden sind, welche Kopien Sicherungen sind, was worauf verweist, welche Dateien beschädigt sind und welche Datei Sie höchstwahrscheinlich öffnen möchten.

Nur die wenigen Kilobyte, die jede Modellkarte braucht, werden gelesen. Ein Ordner auf einem Netzlaufwerk oder einem synchronisierten Cloud-Ordner ist daher kein Problem.

## Schritte

:::chromium
1. Klicken Sie links (oder mitten im leeren Bildschirm) auf {{ui:Ordner öffnen}}.
2. Wählen Sie im geöffneten Fenster den Projektordner und klicken Sie auf **Auswählen** (oder **Hochladen** oder **Öffnen**, je nach System).
3. Klicken Sie auf **Dateien anzeigen**, wenn der Browser fragt „Darf die Seite Dateien anzeigen?“. Dadurch darf der Tab den Ordner nur lesen; nichts wird hochgeladen.
4. Warten Sie, während die Statuszeile zählt: „Ordner wird aufgelistet: … Dateien“, danach „Prüfe Revit-Dateien: … von …“.
:::

:::firefox
1. Klicken Sie links (oder mitten im leeren Bildschirm) auf {{ui:Ordner öffnen}}.
2. Wählen Sie im geöffneten Fenster den Projektordner und bestätigen Sie. Firefox fragt möglicherweise, ob die Seite die Dateien des Ordners lesen darf; sie bleiben trotzdem auf Ihrem Computer.
3. Warten Sie, während die Statuszeile „Ordner wird gelesen: … Dateien“ und danach „Prüfe Revit-Dateien: … von …“ anzeigt.
:::

:::safari
1. Klicken Sie links (oder mitten im leeren Bildschirm) auf {{ui:Ordner öffnen}}.
2. Wählen Sie im geöffneten Fenster den Projektordner und klicken Sie auf **Hochladen**. Trotz des Wortes verlässt nichts Ihren Mac: Die Dateien werden nur an den Tab übergeben.
3. Warten Sie, während die Statuszeile „Ordner wird gelesen: … Dateien“ und danach „Prüfe Revit-Dateien: … von …“ anzeigt.
:::

Sie können den Ordner auch aus {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateimanager}} auf die Seite **ziehen**. Ein gezogener Ordner wird in jedem Browser ohne Berechtigungsabfrage geöffnet.

## Was Sie sehen sollten

Der Ordnerbericht füllt die Mitte:

- Der Ordnername, die Anzahl der Modelle, CAD-Zeichnungen, IFC-Modelle und Dateien sowie die Gesamtgröße.
- Rote oder gelbe Hinweise, wenn Dateien unvollständig sind oder verknüpfte Dateien im Ordner fehlen.
- Das Feld {{ui:Hier beginnen}}: die Datei, die BimCraft zum Öffnen vorschlägt, mit den Gründen.
- **Modelle**: eine Zeile pro Modell, seine Sicherungen darunter gruppiert.
- **Verknüpfte und referenzierte Dateien**, **IFC-Modelle**, **CAD-Zeichnungen** und **Ausgesondert**, sofern der Ordner welche enthält.

Links fasst das Panel {{ui:Ordner}} alles zusammen; **Probleme** zeigt „Keine“, wenn jede Kopie in Ordnung ist.

## Das Feld „Hier beginnen“ verwenden

Das Feld nennt eine Datei und begründet das, zum Beispiel:

- „Neueste gespeicherte Arbeit in diesem Ordner (3. März 2025).“
- „*Consultant.rvt* ist in andere Modelle verknüpft, ist also Hintergrund und nicht die Datei zum Bearbeiten.“
- „*Tower.rvt* scheint die naheliegende Wahl, ist aber beschädigt; seine letzte gute Kopie stammt von …“
- „Dies ist ein Zentralmodell: Öffnen Sie es in Revit mit „Neue lokale Datei erstellen“ und arbeiten Sie in der lokalen Kopie.“

1. Lesen Sie die Gründe.
2. Klicken Sie auf {{ui:Seine Karte öffnen}}, um die Karte dieser Datei zu lesen, oder auf {{ui:In der Liste anzeigen}}, um ihre Zeile unter **Modelle** zu finden.
3. Prüfen Sie bei der Person, die zuletzt am Projekt gearbeitet hat, bevor Sie sich darauf verlassen. Das Feld sagt es ebenfalls: Es ist eine Vermutung aus Namen, Datumsangaben und Verknüpfungen.

## Dateien aus dem Bericht öffnen

1. Klicken Sie auf den Namen eines Modells, um seine Karte zu öffnen. Die Karte prüft jede Verknüpfung gegen den Ordner.
2. Klicken Sie auf {{ui:Zurück zu}} und den Ordnernamen oben auf der Karte (oder auf {{ui:Zurück zum Ordner}} links), um zurückzukehren.
3. Klicken Sie auf eine IFC-Datei unter **IFC-Modelle**, um sie in 3D zu öffnen.
4. Klicken Sie auf eine DWG- oder DXF-Datei unter **CAD-Zeichnungen**, um sie in 2D zu öffnen. Ihre verknüpften Zeichnungen und Bilder werden automatisch im Ordner gefunden.

## Einen Ordner später erneut öffnen

:::chromium
Ordner, die Sie mit {{ui:Ordner öffnen}} oder durch Ziehen geöffnet haben, sind links unter {{ui:Zuletzt verwendete Ordner}} aufgelistet. Klicken Sie auf {{ui:Wieder öffnen}} und den Ordnernamen, um ihn ohne erneute Auswahl zu öffnen. Nach einem Neustart des Browsers fragt Chrome oder Edge noch einmal; wählen Sie „Bei jedem Besuch zulassen“, damit nicht mehr gefragt wird. Die Liste wird nur in diesem Browser gespeichert und nie irgendwohin gesendet. Klicken Sie auf × , um einen Ordner zu vergessen.
:::

:::firefox safari
Dieser Browser kann Ordner zwischen Besuchen nicht speichern. Wählen Sie den Ordner erneut mit {{ui:Ordner öffnen}} oder ziehen Sie ihn hinein.
:::

## Häufige Fehler

- **Ein zu großer Ordner.** Bei mehr als 20.000 Dateien: „Dieser Ordner hat mehr als 20.000 Dateien. Wählen Sie einen kleineren Ordner, etwa nur ein Projekt.“ Wählen Sie den Projektordner, nicht das ganze Laufwerk.
- **Der übergeordnete Ordner mehrerer Projekte.** Das Feld {{ui:Hier beginnen}} wählt dann über Projekte hinweg. Wählen Sie ein einzelnes Projekt.
- **Die Ordner von Revit scheinen ignoriert.** Die Ordner `*_backup`, `*_log` und `Revit_temp` sind Verwaltungsordner und werden unter **Ausgesondert** aufgelistet, nicht gelesen.
- **Erwarten, dass ein Modell von seiner Karte aus in 3D öffnet.** Eine Projektdatei ist nur eine Karte. Öffnen Sie ihren IFC-Export.
- **Telefone und Tablets.** Viele mobile Browser können überhaupt keine Ordner wählen. Verwenden Sie einen Computer.

Siehe [Einen Ordner auf beschädigte Kopien, fehlende Verknüpfungen und Reste prüfen](topic:check-folder-health) und [Ordnerbericht: Rollen, Status und Verknüpfungen](topic:folder-roles).
