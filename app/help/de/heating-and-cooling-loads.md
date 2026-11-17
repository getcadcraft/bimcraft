---
title: Heiz- und Kühllasten abschätzen
summary: Wärmeverlust jedes Raums, seine Heizwärme über ein Jahr nach Gradtagen und seine Kühlspitze, aus den begrenzenden Bauteilen im Modell und dem U-Wert jedes Bauteils, mit allen Eingaben sichtbar. Ein Auslegungshilfsmittel, keine Nachweisberechnung.
keywords: Energie, Heizen, Kühlen, Wärmeverlust, Heizlast, Kühllast, U-Wert, Wärmedurchgangskoeffizient, Gradtage, HDD, Lüftung, Luftwechsel, interne Gewinne, solare Gewinne, Lambda, Wärmeleitfähigkeit, Dämmung, Vorentwurf, Analyse, Räume
from: ec312d20
---

Öffnen Sie in der Registerkarte {{ui:Tageslicht}} nach {{ui:Berechnen}} den Bereich {{ui:Heiz- und Kühllasten}} und klicken Sie auf {{ui:Lasten berechnen}}. Jeder Raum erhält seinen **Wärmeverlust** an einem kalten Auslegungstag, seine **Heizwärme über ein Jahr** und seine **Kühlspitze** an einem heißen Tag. Nichts wird hochgeladen; im Modell wird nichts verändert, es sei denn, Sie geben einen U-Wert ein.

:::warning
Das ist **ein Auslegungshilfsmittel, keine Nachweisberechnung**: eine stationäre Abschätzung mit allen Eingaben auf dem Bildschirm. Es ist **nicht** das Verfahren nach ISO 52016-1, keine Simulation und kein Energieausweis; es dimensioniert keine Kessel, Wärmepumpen oder Kältemaschinen. Prüfen Sie die Ergebnisse, und lassen Sie Anlagen von einem Fachingenieur dimensionieren.
:::

## Was jeden Raum begrenzt

BimCraft findet das im Modell selbst, daher funktioniert die IFC-Datei jedes Programms (sie braucht nicht die Raumbegrenzungen, die manche Programme exportieren). Von jedem Stück der eigenen Oberfläche jedes Raums aus schaut es direkt hinaus:

- Das erste Bauteil – Wand, Fenster, Tür, Boden, Dach, Bekleidung, Vorhangfassade oder Balken –, auf das es trifft, **begrenzt** dieses Stück;
- gleich dahinter liegt entweder **ein anderer Raum** (als Nachbar gezählt, mit derselben Temperatur: kein Verlust), **nichts** (außen) oder, unter einem Boden im untersten Geschoss, **das Erdreich**;
- eine offene Tür in einen anderen Raum zählt als Nachbar; ein Stück, das auf nichts trifft (innerhalb von 1.5 m seitlich oder nach unten, 8 m nach oben), wird unter dem Raum aufgeführt und nicht berücksichtigt.

Fenster und Türen übernehmen ihre Größe aus der IFC-Datei (Gesamtbreite × Höhe) aus der Wand, in der sie sitzen. Klicken Sie in der Tabelle auf einen Raum, um jedes ihn begrenzende Bauteil mit seiner Fläche, seinem U-Wert und der Herkunft des U-Werts zu sehen.

## U-Werte

Für jedes Bauteil verwendet BimCraft in dieser Reihenfolge:

1. **Der eigene U-Wert der IFC-Datei** — die `ThermalTransmittance` im allgemeinen Eigenschaftssatz des Bauteils (zum Beispiel `Pset_WallCommon`) oder dessen Typ. Die meisten Planungsprogramme können ihn schreiben.
2. **Seine Materialschichten** — 1 ÷ (innerer Oberflächenwiderstand + Dicke jeder Schicht ÷ ihre Wärmeleitfähigkeit λ + äußerer Oberflächenwiderstand), mit den üblichen Oberflächenwiderständen (0.13 und 0.04 m²K/W für Wände; 0.10 nach oben, 0.17 nach unten innen). Übliche Wärmeleitfähigkeiten zum Start (Mineralwolle 0.035, Ziegel 0.77, Beton 1.4 …); unter {{ui:Wärmeleitfähigkeit der Materialien}} tragen Sie die Angabe des Herstellers ein, und jeder daraus berechnete U-Wert passt sich an.
3. **Ein Richtwert** (Wände 0.3, Dächer 0.2, Böden 0.25, Fenster 1.4, Türen 1.6 W/m²K), als solcher gekennzeichnet — tragen Sie Ihren eigenen Wert ein.

Ein im Detail eines Raums eingegebener U-Wert wird als `ThermalTransmittance` in den allgemeinen Eigenschaftssatz des Bauteils geschrieben (ein Schritt; {{key:Mod+Z}} macht ihn rückgängig). Teilen sich mehrere Bauteile diesen Satz (zum Beispiel ein Wandtyp), ändern sich alle gemeinsam, und die Statuszeile nennt die Anzahl.

## Heizen

- **Wärmeverlust** = Σ U × A × (innen − außen) für alles nach außen + Σ U × A × (innen − Erdreich) für Böden auf dem Erdreich + 0.335 × Luftwechsel pro Stunde × Volumen des Raums × (innen − außen). 0.335 Wh pro m³ und Kelvin ergibt sich aus der Luftdichte (1.2 kg/m³) mal ihrer Wärmekapazität (1005 J/kgK).
- **Heizwärme über ein Jahr** = (der Verlust des Raums je Grad nach außen, über Hülle und Luft, plus sein Erdreichverlust, auf dieselbe Differenz bezogen) × die **Gradtage** × 24 ÷ 1000, in kWh. Geben Sie die Gradtage für den Ort ein oder nutzen Sie {{ui:Gradtage aus einer CSV-Datei lesen…}} (eine Zeile je Tag oder Monat; die letzte Zahl jeder Zeile wird aufsummiert). Verwenden Sie Gradtage zur Basistemperatur Ihrer Quelle: Diese Basis berücksichtigt bereits die kostenlose Wärme von Personen, Licht und Sonne.

## Kühlen

Die **Kühlspitze** = die Wärme durch Hülle und Luft bei der sommerlichen Auslegungstemperatur + Personen (Fläche je Person × Wärme je Person) + Beleuchtung und Geräte je m² Bodenfläche + **die Sonne**: die Spitze von {{ui:Sonne durch die Fenster an einem Datum}} für diesen Raum. Berechnen Sie die Sonne zuerst an einem heißen Tag; bis dahin zählt die Sonne 0, und der Abschnitt sagt das. Die Spitzen der Teile werden addiert, auch wenn sie zu verschiedenen Stunden auftreten; das überschätzt etwas.

## Was weggelassen wird

- Die monatlichen und stündlichen Verfahren nach ISO 52016-1 (ein kostenpflichtiger Standard), Wärme, die in der Masse des Gebäudes gespeichert wird, Wärmebrücken, die Leistung von Heiz- und Kühlanlagen sowie Klimadateien.
- Nebeneinanderliegende Räume werden mit derselben Temperatur angesetzt; unbeheizte Bereiche werden nicht modelliert.

Siehe auch [Tageslicht in jedem Raum abschätzen](topic:daylight-factor).
