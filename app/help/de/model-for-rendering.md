---
title: Das Modell an ein Rendering-Programm senden
summary: Speichern, was die 3D-Ansicht zeigt, als glTF-Modell (.glb) mit seinen Materialien, Texturen und Lampen, für Rendering- und Visualisierungsprogramme, die glTF lesen.
keywords: glb, gltf, gl transmission format, export, rendering, render, visualisierung, echtzeit, archviz, materialien, texturen, lampen, lichter, asset, eigenes asset
from: e62d57dc
---

{{ui:Fürs Rendern}} in der Symbolleiste speichert, was die 3D-Ansicht zeigt, als eine **.glb**-Datei (glTF 2.0, das offene Format der Khronos Group). Rendering-Programme, die glTF lesen, öffnen sie mit den Materialien und Lampen des Modells. Twinmotion führt glTF und GLB unter den Geometriedateien auf, die es importiert, und behält deren Lichter (Epic-Dokumentation, „Importing geometry in Twinmotion“): Verwenden Sie dort {{ui:Fürs Rendern}} und importieren Sie die .glb-Datei. Nichts wird hochgeladen: Die Datei wird auf diesem Computer erstellt.

## Speichern

1. Öffnen Sie das IFC-Modell und richten Sie die 3D-Ansicht ein: Blenden Sie die Geschosse, Bauteile oder verknüpften Modelle aus, die Sie nicht sehen wollen, und [färben Sie die Materialien](topic:paint-materials), die Sie sehen möchten.
2. Klicken Sie auf {{ui:Fürs Rendern}} (oder geben Sie `GLB` ein).
3. Die Datei wird als „<model name>.glb“ heruntergeladen. Die Statusleiste zeigt, wie viele Dreiecke, Materialien und Lampen sie enthält.

## Was die Datei enthält

- **Geometrie** jedes Elements, das die 3D-Ansicht zeigt, in Metern, mit Y nach oben (die eigenen Achsen von glTF). Ein Objekt je Geschoss und Material, benannt „Level 1 — Brick, red“, damit Sie im Rendering-Programm ein Material auswählen und durch ein eigenes ersetzen können.
- **Materialien:** jede Farbe mit dem Aussehen, das Sie dafür in [Rendern](topic:render) gewählt haben (matt, seidenmatt, glänzend, Metall, Glas …), und jedes gefärbte Bibliotheksmaterial mit seiner Farbe, Rauheit und **Textur** (sein Bild ist in der Datei enthalten, auf seine echte Größe skaliert: ein Ziegel hat die Größe eines Ziegels). Glas ist durchsichtig.
- **Lampen:** jede Leuchte, die in {{ui:Rendern}} › Lampen eingeschaltet ist, als Punkt- oder Spotlicht mit ihrer Helligkeit (Lumen in Candela umgerechnet), Farbe und Abstrahlwinkel.
- **Wo das Grundstück liegt:** Breiten- und Längengrad des Grundstücks sind zur Information in der Datei vermerkt. Rendering-Programme haben ihre eigene Sonne: Geben Sie dort den Ort ein.

## Was ausgelassen wird

- Der Schnitt (ganze Elemente werden übernommen) und Elemente, die durchsichtig dargestellt werden (sie werden weggelassen).
- Objekte je einzelnem Element (stattdessen ein Objekt je Geschoss und Material), IFC-Eigenschaften, Bump-Maps, gespeicherte Ansichten und aufgezeichnete Rundgänge.
- Kanten und der Hintergrund.

## Enscape und andere Plug-in-Renderer

Enscape läuft innerhalb eines anderen Planungsprogramms und hat keine Datei, die ein ganzes Projekt öffnet. Zwei Wege:

- Öffnen Sie die **IFC**-Datei des Modells ({{ui:Datei}} › Speichern) in dem Programm, in dem Enscape läuft; die meisten lesen IFC. Farben werden übernommen; die Bibliotheksmaterialien kommen als ihre Farben.
- Holen Sie ein **kleines Teil** (Möbel, eine Armatur) als eigenes Asset: Isolieren Sie es zuerst und klicken Sie dann auf {{ui:Für Enscape (.gltf)}}. Die Bibliothek eigener Assets von Enscape listet .gltf-, .obj- und .fbx-Dateien, nicht .glb; daher speichert diese Schaltfläche dieselbe Szene als eine in sich geschlossene **.gltf**-Datei (die Binärdaten und die Bilder stecken in der Datei; es gibt nichts anderes, was man mitkopieren müsste). Enscape empfiehlt kleine Assets (unter etwa 20,000 Dreiecken).

:::note
In CadCraft Studio können dieselbe glTF-Datei (und eine USD-Datei) auch aus {{ui:Render}} › Engine › **glTF file** / **USD file** gespeichert oder direkt in einem Programm auf diesem Computer geöffnet werden: siehe [Szene in einem anderen Programm öffnen](topic:render-open-in). Eine Plug-in- oder Live-Verbindung für Enscape oder Twinmotion ist noch nicht umgesetzt. Die Formate FBX und Datasmith haben keine veröffentlichte Spezifikation, daher schreibt BimCraft sie nicht; glTF ist der offene Weg.
:::
