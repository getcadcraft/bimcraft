---
title: Bauteil wählen und seine Eigenschaften lesen
summary: In einem 3D-Modell auf ein beliebiges Bauteil klicken, um es hervorzuheben und seinen Namen, Typ, seine Bezeichnung, GlobalId, Eigenschaftssätze und Mengen zu lesen.
keywords: Eigenschaften, wählen, auswählen, Klick, Bauteil, Parameter, Eigenschaftssätze, Pset, Mengen, GlobalId, GUID, Typ, prüfen
from: 43b80aa8
---

## Was Sie tun

Bauteile in einem IFC-Modell wählen und alles lesen, was die Datei über sie sagt: Attribute, Eigenschaftssätze, Typeigenschaften und Mengen.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Klicken Sie ein Bauteil an, zum Beispiel eine Tür. Klicken Sie ohne zu ziehen: Ein Ziehen von mehr als wenigen Pixeln dreht die Ansicht, statt zu wählen.
3. Betrachten Sie das Bauteil: Es ist blau hervorgehoben.
4. Sehen Sie sich das Feld {{ui:Eigenschaften}} auf der rechten Seite an. Oben stehen die Art des Bauteils (etwa "Door" oder "WallStandardCase") und sein Name.
5. Lesen Sie den ersten Block: **Name**, **Typ**, **Objekttyp**, **Tag**, **Beschreibung**, **GlobalId** und **Zeile**.
6. Scrollen Sie zu den Eigenschaftssätzen. Die ersten drei sind geöffnet; klicken Sie auf den Namen jedes anderen Satzes, um ihn zu öffnen.
7. Klicken Sie ein anderes Bauteil an, um zu ihm zu wechseln.
8. Drücken Sie {{key:Esc}} oder klicken Sie auf den leeren Hintergrund, um die Auswahl aufzuheben.

## Was Sie sehen sollten

- Das hervorgehobene Bauteil und seine Daten rechts.
- Eigenschaftssätze in alphabetischer Reihenfolge. Sätze, die vom **Typ** des Bauteils stammen, haben den Zusatz „ (Typ)“ hinter ihrem Namen und den Hinweis „Typeigenschaft: Eine Änderung hier gilt für jedes Bauteil dieses Typs.“
- Mengensätze (etwa Längen, Flächen und Volumen) stehen mit den anderen Sätzen. Mengen sind nur lesbar.
- Werte, die Sie ändern können, sehen aus wie Schaltflächen. [Eigenschaften von IFC ändern und eine bearbeitete Kopie speichern](topic:edit-ifc-properties) zeigt, wie das geht.

[Felder des Bedienfelds Eigenschaften](topic:properties-panel) erklärt jedes Feld.

## Verborgene Bauteile erreichen

1. Um etwas im Gebäude zu erreichen, entfernen Sie den Haken bei den Geschossen darüber in der Liste {{ui:Geschosse}}.
2. Um eine Wand hinter einem Raumvolumen zu erreichen, schalten Sie {{ui:Räume}} aus.
3. Klicken Sie das Bauteil an.

## Häufige Fehler

- **Beim Klicken ein wenig ziehen.** BimCraft behandelt das als Drehung und wählt nicht. Halten Sie die Maus ruhig.
- **Einheiten neben Zahlen erwarten.** Werte werden so angezeigt, wie sie in der Datei gespeichert sind, auf vier Dezimalstellen gerundet, ohne Einheitenzeichen. Längen in einem metrischen Export sind meist Millimeter oder Meter; prüfen Sie die Einstellungen des Exporteurs.
- **Einen Parameter unter seinem vertrauten Namen suchen.** Exporteure benennen Parameter um und ordnen sie in IFC-Eigenschaftssätze wie `Pset_WallCommon` ein. Sehen Sie jeden Satz durch; eigene Parameter stehen oft in einem Satz, der nach dem exportierenden Programm oder Ihrer Firma benannt ist.
- **Ein Suchfeld erwarten.** Klicken Sie, um ein Bauteil zu wählen; {{key:Mod}}+Klick oder {{key:Shift}}+Klick wählt weitere, und {{key:Mod+A}} wählt jedes angezeigte Bauteil. Die Liste {{ui:Bauteile}} links zählt Bauteile nur nach Art; sie ist nicht anklickbar.
- **Auf einer Dateikarte eines Projekts wählen.** Eine Dateikarte hat keine Bauteile zum Wählen: „Bauteileigenschaften benötigen das 3D-Modell. Öffnen Sie einen IFC-Export dieser Datei, um sie zu sehen.“
