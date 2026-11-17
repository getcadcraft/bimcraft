---
title: Heizen und Kühlen mit der Energiesimulation prüfen
summary: Schreiben Sie das Modell als EnergyPlus-Datei oder führen Sie EnergyPlus in Version 26.2.0 im Browser darauf aus und vergleichen Sie die Auslegungslasten mit der schnellen Heiz- und Kühlhilfe. Eine Zweitmeinung für den frühen Entwurf, keine Nachweisberechnung.
keywords: EnergyPlus, Energiesimulation, Auslegungstag, Heizlast, Kühllast, Wetterdatei, epw, idf, Wärmespeicherung, Jahresenergie, simulieren
from: b82a5bf2
---

## Was Sie tun

Die Ansicht **Mit EnergyPlus prüfen** schreibt das offene Modell als EnergyPlus-Eingabedatei (eine IDF): eine Zone je Raum, die Wände, Böden, Dächer und Fenster mit ihren U-Werten, den Luftwechsel sowie ideale Heizung und Kühlung. Sie können diese Datei jederzeit **speichern** und in Ihrem eigenen EnergyPlus ausführen.

Richten Sie außerdem die Engine ein, kann die Ansicht sofort simulieren und listet die Auslegungsheiz- und -kühllast von EnergyPlus neben der der schnellen Hilfe, Raum für Raum.

Dies ist eine Entwurfshilfe. Energienachweise, Zertifizierungen und Genehmigungen brauchen ein zugelassenes Werkzeug und die Klimadaten, die es verlangt. Das Ergebnis muss von der Person geprüft werden, die dafür einsteht.

## Engine einrichten

BimCraft enthält EnergyPlus nicht. Es ist ein großer WebAssembly-Build (etwa 6 MB komprimiert plus eine Datendatei von 4.6 MB). Daher hosten Sie ihn selbst und tragen seine Adresse in die Ansicht ein. Die Seite lädt ihn nur, wenn Sie eine Simulationsschaltfläche drücken, nie beim Start. Die Adresse muss https sein, ein Pfad auf dieser Website oder localhost.

## Auslegungstage oder ein Jahr

- **Auslegungstage simulieren** braucht keine Wetterdatei. Es rechnet einen kalten Wintertag ohne Sonne und einen heißen, klaren Sommertag mit den Temperaturen aus den Heiz- und Kühleingaben der Registerkarte Tageslicht und meldet die Last jedes Raumes in Watt.
- **Ein Jahr simulieren** braucht eine Wetterdatei im EPW-Format, die Sie wählen. Es fügt Personen, Beleuchtung und Geräte aus denselben Eingaben hinzu (immer eingeschaltet, da kein Zeitplan erfunden wird) und meldet die Heiz- und Kühlenergie jedes Raumes in kWh. Wetterdateien haben eigene Lizenzen; verwenden Sie daher nur eine, die Sie nutzen dürfen.

## Wärmespeicherung

Aktivieren Sie **Wänden mit bekannten Schichten thermische Masse geben**. Dann werden Wände, Dächer und Böden, deren Materialschichten bekannt sind, Schicht für Schicht geschrieben, mit Dichte und spezifischer Wärme aus einer kurzen Tabelle typischer Werte nach Materialname. Die Schichten werden zuerst von außen genommen, in der Reihenfolge, die die Datei auflistet. Elemente ohne Schichten bleiben bei ihrem U-Wert ohne Masse.

## Den Vergleich lesen

Die beiden Verfahren beantworten leicht unterschiedliche Fragen. Die schnelle Hilfe behält jedes Element; die EnergyPlus-Datei mittelt die U-Werte jedes Raumes nach Flächenart. Eine Abweichung von mehr als 15 % bei der Auslegungsheizung eines Raumes wird als Hinweis im ⚠-Bereich aufgeführt, mit beiden Werten. Die Kühlung weicht per Auslegung stärker ab: Die schnelle Hilfe ermittelt eine Spitze aus der Sonne an einem Datum, während EnergyPlus an seinem eigenen Auslegungstag dimensioniert.
