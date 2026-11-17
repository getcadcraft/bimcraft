---
title: Rohre und Luftkanäle dimensionieren, Kabelfüllung und Beleuchtung prüfen
summary: Rohr- und Luftkanalgrößen für die Versorgung mit Druckverlust prüfen, Kabel durch Kabelrinnen und Leerrohre führen und deren Füllung sehen, und Beleuchtungsstärken in Räumen aus IES- oder EULUMDAT-Dateien berechnen. Standardwerte sind gekennzeichnet; geben Sie die Werte der gültigen Norm ein.
keywords: Dimensionierung, Rohrdimensionierung, Luftkanaldimensionierung, Druckverlust, Armatureneinheiten, Bedarf, Hunter, hazen-williams, Geschwindigkeit, Reibung, gleiche Reibung, Ventilatordruck, Klappe, kritischer Pfad, Kabelrinne, Leerrohr, Füllung, Kabelliste, ies, ldt, eulumdat, Photometrie, Beleuchtungsstärke, lux, Gleichmäßigkeit, Beleuchtungsberechnung, Leistungsdichte, mep, Berechnungen, Probleme
from: 9cb90815
---

## Was Sie tun

Zeichnen Sie Rohre, Luftkanäle, Kabelrinnen und Leerrohre wie gewohnt, und öffnen Sie dann den Bereich **Berechnungen**. Jeder Reiter liest das Modell, zeigt eine Tabelle und listet, was nicht stimmt, als {{ui:Probleme}} im ⚠-Bereich auf. Wenn eine Größe ein Problem beheben würde, ändert **Größen übernehmen** die Führungen in einem einzigen Schritt, der mit {{ui:Rückgängig}} zurückgenommen werden kann.

Dies sind Zeichenhilfen. Jeder Standardwert ist auf dem Bildschirm gekennzeichnet, und keiner ist eine Normtabelle: Geben Sie die Zahlen aus der Norm ein, nach der Sie planen, und lassen Sie das Ergebnis von dem Ingenieur prüfen, der dafür einsteht.

## Rohre

1. Wählen Sie den Systemschlüssel (Kaltwasser ist `cw`, Warmwasser `hw`).
2. Legen Sie die höchste Geschwindigkeit fest und, wenn Sie den Druck prüfen wollen, den Druck an der Quelle und den geringsten Druck, den eine Armatur braucht.
3. Klicken Sie auf {{ui:Prüfen}}.

Jedes Rohr trägt den Bedarf der Armatureneinheiten darunter. Der Bedarf kommt aus einer Kurve von Armatureneinheiten gegen Durchfluss, so wie Hunter sie beschrieben hat. **Die eingebaute Kurve ist ein Beispiel, keine Normtabelle**; die Probleme weisen darauf hin, bis Sie Ihre eigene eingeben. Die Reibung wird nach Hazen–Williams berechnet, Formstücke gehen als Verlustbeiwerte ein, und ein Höhenunterschied kostet 9.8 kPa je Meter. Die Einheiten einer Armatur kommen aus ihrer Art oder aus der Zahl, die Sie mit dem Assistenten-Werkzeug `loads_set` festlegen.

## Luftkanäle

Legen Sie das System, die Reibungsrate (gleiche Reibung) oder eine Geschwindigkeit fest sowie jeden Verlust durch Register, Filter oder Schalldämpfer. Endgeräte beziehen ihren Luftstrom aus `loads_set` am Auslass. Die Tabelle zeigt Geschwindigkeit und Reibung je Stück, den **Ventilatordruck** am kritischen Pfad und den Druck, den die Klappe jedes anderen Endgeräts aufnehmen muss. Formstückverluste nutzen gerundete Standardbeiwerte, keine Formstückdatenbank.

## Kabelrinnen und Leerrohre

Zeichnen Sie sie mit dem Luftkanal-Werkzeug: Die Systeme **Kabelrinne** und **Leerrohr** werden als Kabelträger gespeichert, damit andere Programme sie als Rinnen und Leerrohre lesen. Fügen Sie im Reiter {{ui:Kabel}} die Kabelliste ein (Kennung, Außendurchmesser in mm, Anzahl, `from`, `to`). `from` und `to` sind die Kennung eines Geräts oder ein Punkt `x,y,z` in Millimetern. Kabel folgen der kürzesten durchgehenden Route durch Rinnen und Leerrohre; jede Führung zeigt ihre Füllung im Vergleich zu den Grenzwerten, die Sie eingeben, und die Liste wird als CSV gespeichert, mit einer Länge, die einen Reservezuschlag in Prozent und die Enden enthält.

## Beleuchtung

Geben Sie jeder Leuchte ihre IES-Datei (LM-63) oder EULUMDAT-Datei mit dem Assistenten-Werkzeug `photometry_set`. Tragen Sie die Zielwerte, den Rasterabstand und die Höhe der Arbeitsebene ein. Das Ergebnis ist nur die **direkte** Beleuchtungsstärke: keine Zwischenreflexion und keine Schatten, daher ist es in einem Raum eine untere Grenze.

## Brandschutzsprinkler

Das Add-on **Brandschutzsprinkler** hat einen eigenen Reiter; siehe dessen Hilfe.
