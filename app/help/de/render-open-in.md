---
title: Die Szene in einem anderen Programm öffnen
summary: Speichern Sie die Szene als USD- oder glTF-Datei für jedes Programm, das sie liest, oder öffnen Sie sie aus Studio in einem Programm auf diesem Computer.
keywords: Öffnen in, usd, gltf, glb, Export, Rendering-Programm, Archviz, Studio, usdview, senden, Übergabe, Paket, Unreal-Ordner
from: 0a6559ee
---

Wählen Sie in der Engine-Liste von {{ui:Render}} einen Eintrag **Öffnen in**, um die Szene in ein anderes Programm zu bringen. Es kommt nichts zurück ins Modell.

## Eine Datei für jedes Programm

- **USD-Datei** speichert die Szene als `.usdc` (oder `.usdz`, wenn das Modell Bilder enthält): dieselbe Datei wie [Als USD speichern](topic:usd), mit Materialien, Lampen und Kameras. Sie behält Instanzierung und die genauen Materialwerte. Die meisten Renderer, Game-Engines und Viewer lesen USD.
- **glTF-Datei (.glb)** speichert die schlankere glTF-2.0-Datei mit Materialien, Texturen und Lampen; siehe [Das Modell an ein Rendering-Programm senden](topic:model-for-rendering) dazu, was sie enthält und was sie weglässt.

- **Unreal-Projektordner (.zip)** speichert den Ordner, den [Die Szene an eine Game-Engine senden](topic:render-unreal) schreibt, für ein Projekt auf jedem Computer.

Alle drei funktionieren im Browser und in Studio.

## In Studio: in einem Programm öffnen

Studio listet die Programme auf diesem Computer, die die Szene öffnen können: usdview, wenn es in Ihrem Suchpfad liegt, und das eigene Programm des Computers für diesen Dateityp. Wählen Sie eines, wählen Sie USD oder glTF, wo beides gelesen wird, und klicken Sie auf {{ui:Render}}. Studio schreibt das Paket in einen neuen Ordner unter Dokumente (`CadCraft hand-off`; nichts wird überschrieben, jede Übergabe bekommt ihren eigenen Ordner), startet das Programm darauf und sagt dann, wo die Dateien liegen.

| Programm | Liest am besten |
|---|---|
| usdview | USD |
| Das eigene Programm des Computers | Was der Computer für den Dateityp hat |

Studio startet nur Programme aus dieser festen Liste; es führt nichts aus, was die Seite namentlich verlangt, und es startet nie ein Programm unter der GNU-GPL-Lizenz (siehe [Ein Bild mit einem anderen Programm rendern](topic:render-other-program#programs-cadcraft-never-runs)). Jedes Programm, das USD oder glTF liest, öffnet die Datei aus **Eine Datei für jedes Programm** oben.

:::note
Twinmotion, Enscape und andere Visualisierungsprogramme stehen nicht in der Liste: CadCraft wurde mit ihnen nicht geprüft, und wir machen dazu keine Aussage. Eine glTF- oder USD-Datei von hier ist der Weg hinein; siehe die Hinweise zu [Plug-in-Renderern](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
