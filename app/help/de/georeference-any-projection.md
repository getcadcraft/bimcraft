---
title: Georeferenzierung mit jeder Projektion
summary: Legen Sie fest, in welchem Kartensystem die Koordinaten eines Modells liegen – aus der gesamten EPSG-Liste, jeder UTM-Zone oder einer selbst definierten Projektion – und verwenden Sie es für Standort, Kartenebenen und Punktwolken.
keywords: Projektion, Koordinatensystem, CRS, EPSG, UTM, UTM-Zone, eigene Projektion, proj4, proj-Zeichenkette, prj, WKT, Georeferenzierung, Kartenumrechnung, IfcProjectedCRS, Meine Projektionen, Breitengrad, Längengrad, Rechtswert, Hochwert, Lambert, Gauß-Krüger, State Plane, nationales Gitter
from: 6894c1f2
---

Manche Pläne sind in einem Kartensystem gezeichnet, das nicht in einer kurzen Liste steht: eine UTM-Zone, ein nationales Gitter oder eine Projektion, die jemand als Textdefinition festgehalten hat. Mit {{ui:Messen}} › {{ui:Koordinatensystem…}} legen Sie fest, welches das Modell verwendet.

## Das System für ein Modell wählen

1. Öffnen Sie das Modell, wählen Sie {{ui:Messen}} und dann {{ui:Koordinatensystem…}}.
2. Geben Sie im Suchfeld etwas ein. Jede dieser Angaben funktioniert:
   - eine EPSG-Nummer: `32633` oder `EPSG:2277`;
   - eine UTM-Zone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - Wörter aus dem Namen: `lambert 93`, `mga zone 56`, `texas central`;
   - eine Projektionsdefinition: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, optional mit einem Namen davor (`Mein Gitter = +proj=…`);
   - den Text einer `.prj`-Datei, oder verwenden Sie {{ui:Eine .prj-Datei laden…}}.
3. Wählen Sie ein Ergebnis und dann {{ui:Dieses System verwenden}}.

Die Wahl wird im Modell gespeichert (als Eigenschaftssatz `CadCraft_CRS` am Projekt), damit sie mit dem Modell wieder geöffnet wird. Speichern Sie das Modell, um sie zu behalten. {{ui:Aus dem Modell entfernen}} geht zurück zu dem, was die Datei sagt.

Wenn Ihre Definition dieselben Koordinaten wie ein aufgeführtes EPSG-System ergibt, sagt BimCraft es und verwendet diesen Code; wenn mehrere aufgeführte Systeme dieselbe Berechnung haben, nennt es auch die anderen.

## Meine Projektionen

Eine eingefügte Definition oder eine geladene `.prj`-Datei können Sie mit {{ui:In Meine Projektionen speichern}} behalten. Die Liste liegt auf diesem Gerät (in diesem Browser) und wird Ihnen beim nächsten Öffnen der Auswahl angeboten.

## Wofür es verwendet wird

- {{ui:Messen}} › {{ui:Standort}} wandelt einen angeklickten Punkt über das Koordinatensystem des Modells in Breiten- und Längengrad um. Früher hielt es mit einem Hinweis an, wenn die Datei ihr Kartensystem ohne EPSG-Code benannte; mit einer gespeicherten Wahl liefert es das Ergebnis.
- Die Kartenebenen unter dem Modell verwenden dasselbe System. Eine Punktwolke oder ein Geländemodell in einem anderen System wird mit dem des Modells angeboten (siehe unten).
- {{ui:Einstellungen}} › {{ui:BimCraft}} › {{ui:Standort}} › {{ui:Anderes System wählen…}} legt fest, was {{ui:Standort}} zusätzlich ausgibt: Breiten- und Längengrad in jedem aufgeführten geografischen System oder Rechts- und Hochwert in jedem projizierten System, neben dem eigenen des Modells.

## Ein Modell, das noch nicht auf der Karte liegt

Wenn die Datei keine Kartenumrechnung hat, öffnet die Auswahl eines Systems {{ui:Dieses Modell auf der Karte platzieren}}. Sie können es auch über {{ui:Messen}} › {{ui:Kartenursprung…}} öffnen.

1. Geben Sie den Ursprung des Modells als Rechts- und Hochwert im System an, oder geben Sie einen Breiten- und Längengrad ein und wählen Sie {{ui:In Rechtswert und Hochwert umrechnen}}.
2. Geben Sie die Drehung zum Gitter-Nord an (Grad, gegen den Uhrzeigersinn; 0 bedeutet, dass die Y-Achse des Modells nach Gitter-Nord zeigt) und die Höhe des Ursprungs.
3. Der Maßstab beginnt mit dem Einheitenunterschied zwischen Modell und Karte (0.001 für ein Millimeter-Modell auf einem Meter-Gitter). Ändern Sie ihn nur für einen kombinierten Faktor von Gelände zu Gitter.
4. Wählen Sie {{ui:Auf der Karte platzieren}}. Ein einzelner Rückgängig-Schritt schreibt eine IfcProjectedCRS und eine IfcMapConversion (IFC4). Das Modell selbst bewegt sich nicht.

Eine IFC2X3-Datei hat keine dieser Entitäten. BimCraft schreibt dieselben Zahlen so, wie es dieser Standard erlaubt: die buildingSMART-Eigenschaftssätze `ePSet_MapConversion` und `ePSet_ProjectedCRS` am Projekt, Breiten- und Längengrad des Grundstücks sowie das wahre Nord. Der Dialog sagt es. Speichern Sie das Modell, um es zu behalten.

## Ein Modell, das bereits auf der Karte liegt

Wenn die Datei bereits auf der Karte liegt und Sie ein anderes System wählen, fragt BimCraft:

- {{ui:Nur ändern, was Standort anzeigt}} behält die eigene Georeferenzierung der Datei bei und verwendet Ihre Wahl für {{ui:Standort}}, die Kartenebenen und Punktwolken (die Zahlen des Modells werden dann als im neuen System liegend gelesen).
- {{ui:Modell in dieses System verschieben}} schreibt die Georeferenzierung neu: Der Ursprung wird durch die Projektion geführt (Rechtswert, Hochwert, Höhe, Drehung und Maßstab), und das IfcProjectedCRS (Name, Datum, Projektion, Zone, Einheit) wird neu geschrieben, sodass die gespeicherte IFC das neue System angibt. Der Ort auf der Erde bleibt gleich: Der Ursprung behält Breiten- und Längengrad. Elemente im Modell ändern sich nie; nur die Georeferenzierung.

Der Dialog zeigt den alten und den neuen Ursprung, bevor Sie wählen. Hin und zurück bringt den Ursprung wieder auf einen Millimeter genau.

## Punktwolken und Gelände in einem anderen System

Eine Wolke oder eine Vermessungsdatei trägt ihr eigenes System (LAS, LAZ, E57, GeoTIFF) oder keines. Weicht es vom System des Modells ab, bietet BimCraft {{ui:In das System des Modells neu projizieren}} an. Die Punkte werden in Stapeln verschoben (bei vielen in einem Hintergrundprozess, damit die Seite bedienbar bleibt), die Datei auf Ihrem Computer bleibt unverändert, und die Statuszeile sagt, was geschehen ist. Öffnen Sie die Datei erneut, um zu ihrem eigenen System zurückzukehren. Für eine bereits geöffnete Wolke erledigt {{ui:Auf das Modell neu projizieren…}} in der Wolkenleiste dasselbe.

Nennt die Datei kein System, fragt BimCraft {{ui:In welchem System liegt diese Datei?}}: Wählen Sie es mit {{ui:System wählen…}}, und die Antwort wird für diese Datei auf diesem Gerät gemerkt. {{ui:Das eigene System der Datei behalten}} lässt die Punkte, wie sie sind.

## Wenn etwas nur ungefähr ist

Probleme werden im Dialog und im Bereich Probleme aufgeführt, nie stillschweigend:

- Ein Ort außerhalb des Gebiets, für das das System gedacht ist: Die Zahlen funktionieren, aber die Verzerrung wächst.
- Datumsverschiebungen, die eine Gitterdatei brauchen (NADCON, NTv2 und ähnliche), sind nicht verfügbar. Systeme auf einem anderen Datum werden mit der gitterfreien Verschiebung verschoben, die das EPSG-Register angibt, und das Ergebnis ist bis zur angegebenen Genauigkeit ungefähr, die die Meldung in Metern nennt.
- Ein Punkt, der sich nicht projizieren lässt, wird weggelassen und gezählt; eine Datei über der Größengrenze wird mit der genannten Grenze abgelehnt.

:::tip
Kartenkoordinaten brauchen eine Kartenumrechnung. Eine Datei ohne eine wird mit {{ui:Kartenursprung…}} auf die Karte gesetzt.
:::

:::note
Der Wechsel zwischen Datums ohne Gitterdatei ist auf einige Meter genau; das Ergebnis von Standort sagt, wie weit, wenn der Katalog es kennt.
:::
