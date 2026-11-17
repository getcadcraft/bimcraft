---
title: "Klimazukünfte: Hochwasser, Hitze und Waldbrand 2050 und 2080"
summary: Führen Sie Hochwasser, Energiejahr und Waldbrand-Vorprüfung mit künftigem Klima erneut aus (Szenarien SSP2-4.5 und SSP5-8.5, Jahre 2050 und 2080) aus einem Klimadatenpaket, dargestellt neben dem Heute.
keywords: Klima, Klimawandel, Zukunft, 2050, 2080, ssp, cmip6, Szenario, Meeresspiegel, Hochwasser, Hitze, Wetterdatei, epw, morph, EnergyPlus, Waldbrand, Buschfeuer, Feuerwetter
from: 224ecd08
---

Die Klimawerte stammen aus einem **Datenpaket**, nicht aus der App. Schalten Sie das Add-on {{ui:Klimazukünfte}} unter Einstellungen › Add-ons ein oder laden Sie in der Eingabe {{ui:Klimazukunft}} eine eigene Paketdatei.

:::warning
Das Paket, das dem Add-on beiliegt, ist eine **Probe**: drei Orte (Denver, Miami, Johannesburg), ein Klimamodell, fünf Jahre in jedem 20-Jahres-Zeitraum. Es dient dazu, die Werkzeuge auszuprobieren, **nicht für die Planung**. Das Bedienfeld sagt das fett, solange es in Benutzung ist. Ein vollständiges Paket (viele Modelle, alle Jahre, mehr Orte) wird mit `tools/climate/build-pack.mjs` aus den NEX-GDDP-CMIP6-Daten der NASA erstellt.
:::

## Eine Zukunft wählen

Wählen Sie im linken Bereich unter {{ui:Gefahrenwiedergabe}} ein **Szenario** (SSP2-4.5, der mittlere Weg, oder SSP5-8.5, hohe Emissionen) und ein **Jahr** (2050 steht für 2041–2060, 2080 für 2071–2090; beide im Vergleich zu 1995–2014). Der **Ort** ist der Ort des Pakets, der dem Standort des Modells am nächsten liegt (Breiten- und Längengrad von IfcSite), oder der, den Sie wählen. Ist er weit von allen Orten entfernt, werden die globalen mittleren Änderungen des Pakets verwendet, und das Bedienfeld sagt das.

## Hochwasser, heute neben Zukunft

Wenn ein Szenario gewählt ist, legen Sie die **Hochwasserart** fest: Küste (fügt den Meeresspiegelanstieg hinzu), Fluss, Starkregen (tiefer um die Änderung des Niederschlags am nassesten Tag) oder beides. Drücken Sie Ausführen: Das Hochwasser läuft wie bisher, und eine Tabelle zeigt das heutige und das künftige Hochwasser nebeneinander (Wasserstand, Räume, die nass werden, tiefstes Wasser). Die Annahmen stehen darunter:

- ein Küstenpegel steigt um den gesamten Meeresspiegelanstieg; Sturmflut und Wellen werden nicht verändert;
- der Flusszufluss steigt eins zu eins mit dem Niederschlag am nassesten Tag, und die Tiefe folgt dem Zufluss mit der Potenz 0.6 (Manning-Gleichung für ein breites Gerinne);
- die beiden Anteile werden einfach addiert.

## Hitze: eine künftige Wetterdatei

Wählen Sie die Art {{ui:Hitze: künftige Wetterdatei}}, wählen Sie eine heutige `.epw`-Wetterdatei und drücken Sie {{ui:Künftige Wetterdatei erstellen}}. Die Datei wird Monat für Monat mit der veröffentlichten Verschiebe- und Streckmethode **morphed** (Belcher, Hacker und Powell 2005): Der Monatsmittelwert erwärmt sich um die Änderung des Pakets, die heißen Nachmittage um die Änderung des Tageshöchstwerts und die kalten Nächte um die Änderung des Tagestiefstwerts. Die relative Feuchte verschiebt sich um die Änderung des Pakets, und der Taupunkt wird neu berechnet. Druck und Wind bleiben unverändert. Die Tabelle vergleicht die mittleren und höchsten Temperaturen, die Auslegungstemperaturen für 0.4 % Kühlung und 99.6 % Heizung, die Stunden bei 30 °C und 35 °C und die Gradtage.

{{ui:Künftige Wetterdatei speichern}} speichert sie; {{ui:In der Energieprüfung verwenden}} übergibt sie an die EnergyPlus-Prüfung (Registerkarte Energie). Die künftige Datei ist dasselbe typische Jahr, nur wärmer: Sie fügt keine neuen Hitzewellen hinzu.

## Energiejahr, heute neben Zukunft

In der EnergyPlus-Prüfung der Registerkarte Energie (ein eigenes Add-on mit Ihrer eigenen Engine) wählen Sie eine heutige Wetterdatei, dann ein Szenario und ein Jahr in deren Block {{ui:Klimazukunft}}, und drücken Sie {{ui:Ein Jahr simulieren: heute und Zukunft}}. Das Jahr läuft mit der heutigen Datei und mit ihrer morphten Zukunftsversion, und Heizung und Kühlung jedes Raumes werden nebeneinander aufgelistet.

## Waldbrandgefährdung (nur Vorprüfung)

Wählen Sie die Art {{ui:Waldbrandgefährdung (nur Vorprüfung)}}: die nächste Vegetation, den Hang von ihr hinauf zum Gebäude und die Entfernung dazu. Das Ergebnis ist eine Stufe von sehr gering bis extrem, heute und künftig.

:::warning
**Nur Vorprüfung.** Dies ist unsere eigene relative Skala, um festzustellen, ob ein Standort eine richtige Waldbrandbewertung braucht. Sie ist keine Normbewertung und keine Brandangriffsstufe. Sie multipliziert ein Gewicht für die Vegetation, einen Hangfaktor (ein Feuer verdoppelt seine Geschwindigkeit etwa alle 10 Grad Steigung, gezählt bis 20 Grad), einen Entfernungsfaktor (10 m geteilt durch die Entfernung, höchstens 1) und die Änderung des Feuerwetter-Index im Paket.
:::

## Woher die Zahlen stammen

- **Temperatur, Feuchte, Sonnenschein, Niederschlag, Feuerwetter:** NASA NEX-GDDP-CMIP6, täglich herunterskalierte CMIP6-Modellausgaben. Die Ausgabe jedes Modells steht unter CC BY 4.0. Die Änderung des Feuerwetters ist der Canadian Fire Weather Index, Tag für Tag aus dem Wetter des Modells berechnet (mit täglicher Feuchte statt Mittagsfeuchte).
- **Meeresspiegelanstieg:** das globale Mittel des IPCC AR6 (nicht lokal; ob Land sich hebt oder senkt, ist darin nicht enthalten), es sei denn, ein Paket enthält lokale Werte.
- Das Paket nennt seine Quelle, Lizenz und sein Datum; das Bedienfeld zeigt sie an.
