---
title: Ein Bild mit einem anderen Programm rendern
summary: Unser eigener Path Tracer rendert das Bild im Dialog Rendern; ein anderes Programm kann es nur über ein Render-Engine-Add-on in CadCraft Studio rendern. Was übertragen wird und warum manche Programme nie angeboten werden.
keywords: rendern, Engine, externes Programm, Add-on-Engine, Studio, Hintergrund, Warteschlange, usd, gltf, gerendert von, Blender, GPL
from: 652b413c
---

Das Bild in {{ui:Render}} wird von **unseren eigenen Engines** gerendert: Fast und dem Path Tracer, im Browser und in CadCraft Studio. Ein anderes Programm kann es nur dann rendern, wenn ein **Render-Engine-Add-on** es einbringt: siehe [Eine Render-Engine mit einem Add-on hinzufügen](topic:render-engine-addons). Um die Szene in ein anderes Programm zu bringen und dort weiterzuarbeiten, nutzen Sie [Die Szene in einem anderen Programm öffnen](topic:render-open-in) oder [Die Szene an eine Game-Engine senden](topic:render-unreal).

## Ein Bild mit der Engine eines Add-ons rendern

1. Schalten Sie das Add-on in Einstellungen › Add-ons ein. Seine Engine erscheint in der Engine-Liste von {{ui:Render}}.
2. Wählen Sie sie. Ihre eigenen Einstellungen erscheinen unter der Engine-Liste.
3. Klicken Sie auf {{ui:Render}}. In Studio fragt Studio beim ersten Start eines Programms durch ein Add-on in einem eigenen Dialog nach. Der Fortschritt wird während des Renderns angezeigt; {{ui:Stop}} beendet es. Das Bild erscheint, markiert mit der Engine, die es gerendert hat.

Eine in JavaScript geschriebene Engine läuft auch im Browser. Eine Engine, die ein Programm auf diesem Computer ausführt, läuft nur in Studio; im Browser erscheint sie als Datei zum Speichern.

## Was übertragen wird

Die Engine erhält ein **Paket**: das Modell als USD-Datei (und eine glTF-Datei, wenn sie diese anfordert) sowie eine Einstellungsdatei mit den genauen Materialwerten, der Sonne und dem Himmel, jeder Lampe, die eingeschaltet ist, mit ihrer Leistung und ihrem Lichtprofil, der Kamera und der Belichtung. Jedes Programm beleuchtet, tont und sampelt auf seine Weise, daher sind Bilder in Kamera, Sonne, Lampen und Belichtung ähnlich, aber nicht Pixel für Pixel gleich.

## Programme, die CadCraft nie ausführt

CadCraft startet nie ein Programm unter der GNU-GPL-Lizenz und führt nie eines als Engine oder als Ziel von Öffnen in auf. Blender gehört dazu, daher steht es nicht in der Engine-Liste. Eine USD- oder glTF-Datei, die aus {{ui:Render}} gespeichert wurde, öffnet sich darin trotzdem, wie in jedem Programm, das diese Dateien liest.

:::note
Panorama- und Stereokameras sowie ein Himmelsbild (dann werden die Himmelsfarben verwendet) werden nicht in ein anderes Programm übertragen. Was in einem anderen Programm geändert wird, kommt nicht ins Modell zurück.
:::
