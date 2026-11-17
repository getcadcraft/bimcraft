---
title: Wählen, welches Programm das Bild rendert
summary: Die Auswahl der Engine im Dialog Rendern: unsere beiden eigenen Engines, andere Programme in CadCraft Studio und was das Web stattdessen tut.
keywords: rendern, Engine, Renderer, Render-Engine, Plug-in, Plugin, Studio, externes Programm, gerendert von, Warteschlange, Add-on-Engine
from: 44a1ef5e
---

{{ui:Render}} hat oberhalb von {{ui:Mode}} eine Auswahl **Engine**. Unsere beiden eigenen Engines sind immer vorhanden und funktionieren überall; Add-ons können weitere ergänzen, und in CadCraft Studio enthält die Liste außerdem die Programme, die die Szene übernehmen.

| Engine | Was sie tut | Wo |
|---|---|---|
| Eingebaut: Fast | Das schnelle Standbild: Tageslicht, weiche Schatten, Glas- und Metalloptik, in Sekunden | Im Browser und in Studio |
| Eingebaut: Path Tracer | Licht, das zwischen Flächen reflektiert wird, auf Ihrer Grafikkarte oder dem Prozessor, die Renderwarteschlange und die anderen Computer in Ihrem Netzwerk | Im Browser und in Studio |
| Die Engine eines Add-ons | Sie zeichnet das Bild und gibt es zurück: siehe [Ein Bild mit einem anderen Programm rendern](topic:render-other-program) | Im Browser (eine in JavaScript geschriebene Engine) oder in Studio (eine Engine, die ein Programm ausführt) |
| Ein Programm, das die Szene übernimmt | Studio legt die Szene in seinen Ordner und hält sie abgeglichen | Studio |
| Öffnen in … | Speichert die Szene und öffnet sie in einem Programm; es kommt nichts zurück: siehe [Die Szene in einem anderen Programm öffnen](topic:render-open-in) | Im Web wird die Datei gespeichert |

## So verhält sich die Auswahl

- Wenn Sie Fast oder den Path Tracer wählen, ändert sich {{ui:Mode}} damit, und umgekehrt. Für Personen, die nie eine andere Engine verwenden, ändert sich sonst nichts am Dialog.
- Eine nicht verfügbare Engine bleibt mit dem Grund in der Liste („nicht gefunden“, „benötigt eine neuere Version“); Sie können sie nicht wählen. Im Browser zeigt eine Engine, die nur in Studio läuft, „speichert eine Datei“: {{ui:Render}} speichert dann die Szene und ihre Einstellungen in eine Datei, die Sie in dieses Programm bringen.
- Die Auswahl wird zusammen mit den Rendereinstellungen der Datei gespeichert; die zuletzt gewählte Engine ist die Start-Engine für Dateien ohne eigene Auswahl.
- Ein Bild aus einem anderen Programm nennt das zeichnende Programm und dessen Version, im Dialog und in der Renderwarteschlange. Die Zusagen der Seite [Rendern](topic:render) gelten nur für **unsere eigenen** Engines: Ein anderes Programm beleuchtet, tont und sampelt auf seine Weise, daher sind zwei Bilder einer Szene in Kamera, Sonne, Lampen und Belichtung ähnlich, aber nicht Pixel für Pixel gleich.

## Was jede Engine erhält

Die Szene geht als **Paket** an ein anderes Programm: das Modell als USD-Datei (dieselbe Datei, die [Als USD speichern](topic:usd) schreibt), und eine Einstellungsdatei für alles, dem ein USD-Importer nicht zuverlässig vertrauen kann: die genauen Materialwerte, die Lampen, die eingeschaltet sind, mit ihrer Leistung und ihren Lichtprofilen, die Sonne, den Himmel, die Belichtung und die Kamera so, wie der Dialog sie zeichnen würde. Nichts wird irgendwohin hochgeladen.

## Die Renderwarteschlange

Ein Bild für ein anderes Programm kann wie unser eigenes in [der Renderwarteschlange](topic:render#the-render-queue) warten; sein Auftrag merkt sich, für welche Engine er bestimmt ist.
