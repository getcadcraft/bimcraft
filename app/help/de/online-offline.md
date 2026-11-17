---
title: Online und offline
summary: Was BimCraft von der Website lädt, wie Für Offline speichern IFC-Modelle und DWG-Zeichnungen ohne Verbindung öffnet und warum nichts, was Sie öffnen, jemals hochgeladen wird.
keywords: offline, online, Internet, Verbindung, kein Netzwerk, Flugmodus, Baustellenbesuch, für Offline speichern, offline bereit, hochladen, Datenschutz, wasm, WebAssembly, IFC-Engine, dwg, Cloud
from: 39e5c7eb
---

BimCraft liest Ihre Dateien im Browser-Tab. Öffnen, Prüfen, Bearbeiten und Speichern senden Ihre Dateien nie irgendwohin, online oder offline. [Offline arbeiten](common:offline) erklärt, wie Offline-Kopien in allen Apps funktionieren; diese Seite beschreibt, was für BimCraft besonders ist.

## Was BimCraft von der Website lädt

| Teil | Wann er ohne Offline-Kopie geladen wird | Größe |
|---|---|---|
| Die App selbst, mit dem 3D-Betrachter und dem Code der IFC-Engine | Wenn Sie BimCraft öffnen | Mehrere Megabyte |
| Der WebAssembly-Teil der IFC-Engine | Die erste IFC-Datei, die Sie im Tab öffnen: „IFC-Engine wird gestartet…“ | Etwa 1.6 MB |

DWG- und DXF-Zeichnungen, Projekt- und Familiendateien sowie Ordner benötigen nichts Zusätzliches: Ihre Leser sind Teil der App.

## BimCraft für die Offline-Nutzung speichern

1. Öffnen Sie BimCraft, während Sie online sind.
2. Klicken Sie in der App-Leiste oben auf {{ui:Für Offline speichern}}.
3. Beobachten Sie, wie die Schaltfläche hochzählt, zum Beispiel „Speichern 40 von 212“. Die Kopie von BimCraft ist etwa 11 MB groß, weil sie die IFC-Engine enthält.
4. Warten Sie, bis {{ui:Offline bereit}} erscheint.

Sobald {{ui:Offline bereit}} angezeigt wird, öffnen sich IFC-Modelle, DWG- und DXF-Zeichnungen, Projektdateien, Ordner und diese Hilfe ohne Verbindung. Sie müssen keine IFC- oder DWG-Datei zuerst öffnen, um die Leser „aufzuwärmen“.

Um die Kopie zu aktualisieren oder zu entfernen, klicken Sie auf {{ui:Offline bereit}} und wählen {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}.

## Was die Schaltfläche anzeigt

| Schaltfläche | Bedeutung |
|---|---|
| {{ui:Für Offline speichern}} | In diesem Browser gibt es noch keine Offline-Kopie. Klicken Sie, um eine zu speichern |
| „Speichern *n* von *m*“ | Wird gespeichert; lassen Sie den Tab geöffnet, bis es fertig ist |
| {{ui:Offline bereit}} | Gespeichert. Mit der Maus darüberfahren, um den Zeitpunkt zu sehen; klicken Sie für das Menü |
| {{ui:Speichern nicht möglich}} | Einige Dateien wurden nicht heruntergeladen. Prüfen Sie Ihre Verbindung und klicken Sie, um es erneut zu versuchen. Die letzte gute Kopie, falls vorhanden, bleibt erhalten |
| {{ui:Offline nicht verfügbar}} | Dieses Fenster kann keine Offline-Kopie behalten (ein privates Fenster oder ein verwalteter Computer). Siehe [Offline arbeiten](common:offline) |

:::offline
Sie sind offline.

- Wenn die Schaltfläche {{ui:Offline bereit}} anzeigt, öffnet sich jede Art von Datei wie gewohnt.
- Wenn nicht, funktioniert nur, was dieser Tab bereits geladen hat: Ein Leser, der in diesem Tab nie geladen wurde, kann nicht starten, und beim Öffnen dieser Dateiart erscheint ein Fehler des Browsers in der Statuszeile. Laden Sie den Tab nicht neu, bis Sie wieder online sind.
:::

## Was nie eine Verbindung braucht

Sobald BimCraft im Tab geöffnet ist, funktionieren diese Dinge auch offline, selbst ohne gespeicherte Kopie:

- Lesen von Projekt- und Familiendateien und Prüfen von Ordnern.
- Wählen von Bauteilen, Lesen von Eigenschaften und Bearbeiten von IFC-Werten in einem bereits geöffneten Modell.
- {{ui:Als IFC speichern}} und {{ui:CSV herunterladen}}: Beides sind Downloads, die im Tab erstellt werden.

## Was noch nicht verfügbar ist

- **Speichern in der Cloud.** Dateien werden nur auf Ihrem Computer gespeichert.

Siehe [Wo Ihre Dateien gespeichert werden](common:your-files).
