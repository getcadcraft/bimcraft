---
title: Das Modell als USD exportieren
summary: Die geöffneten IFC-Modelle als USD schreiben, für Rendering, Szenenzusammenstellung und andere 3D-Programme, mit der IFC-Klasse, GlobalId und den Eigenschaften jedes Elements.
keywords: usd, usda, usdc, usdz, openusd, exportieren, ifc, globalid, Eigenschaften, Geschosse, Disziplinen, Szenenzusammenstellung, archviz, Rendering
from: 2be5f7b8
---

{{ui:USD}} in der Symbolleiste schreibt alles, was geöffnet ist (jedes Modell, verbundene Modelle dort, wo Sie sie platziert haben), als eine USD-Datei.

## Exportieren

1. Wählen Sie {{ui:USD}} in der Symbolleiste.
2. Wählen Sie {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} oder {{ui:Paket (.usdz)}}.
3. Die Datei wird heruntergeladen. Die Statusleiste zeigt, wie viele Elemente hineingekommen sind.

## Was in der Datei enthalten ist

| Im IFC-Modell | In der USD-Datei |
|---|---|
| Gelände, Gebäude, Geschosse | Verschachtelte Gruppen, Geschosse in der Reihenfolge ihrer Höhe |
| Jedes Element | Ein Prim unter seinem Geschoss und seiner Disziplin (Architektur, Tragwerk, MEP, Ausstattung, Gelände, Räume, Sonstiges), mit seiner Geometrie als Netz |
| Klasse, GlobalId, Name, Typ, Kennzeichnung | Attribute mit Namen wie `ifc:class`, `ifc:globalId`, `ifc:name` und so weiter |
| Eigenschafts- und Mengensätze | Ein Attribut pro Eigenschaft; Längen, Flächen und Volumen in Metern, Quadratmetern und Kubikmetern |
| Farben | Materialien (mit Transparenz) |
| Räume | Bleiben erhalten, als Hilfsobjekte markiert, damit Renderer sie überspringen |

Die Geometrie liegt in den eigenen Koordinaten der IFC-Datei. Der Aufbau folgt den schriftlichen USD-Konventionen von CadCraft für Gebäude.
