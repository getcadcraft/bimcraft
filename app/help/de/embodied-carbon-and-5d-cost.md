---
title: Graue Emissionen und Kosten im Terminplan
summary: Summieren Sie die grauen Emissionen des Modells aus einer offenen, bearbeitbaren Faktortabelle und verteilen Sie Preise über den 4D-Terminplan zu einer Kosten- und Cashflow-Kurve. Beides beginnt mit Werten, die Sie eingeben oder importieren.
keywords: graue Emissionen, Carbon, CO2, kgCO2e, Emissionen, Faktortabelle, EPD, 5D, Kosten, Cashflow, S-Kurve, Terminkosten, Preise, Preise aus der Mengenermittlung
from: 83e82840
---

## Graue Emissionen

Öffnen Sie den Bereich **Carbon**. Die Menge jedes Bauteils (Volumen, Fläche oder Länge) wird mit einem Faktor aus der Tabelle multipliziert, und zwar je Lebenszyklusmodul: Die Herstellungsphase ist Pflicht, Transport und Abfall sind optional. Die Summen ergeben sich nach Material, Klasse und Geschoss sowie je Quadratmeter Geschossfläche.

**Die Faktortabelle gehört Ihnen.** Die Zeilen, die mit BimCraft mitgeliefert werden, sind allgemeine Startwerte in der richtigen Größenordnung. Sie stammen nicht aus einer Datenbank, sind als ungeprüft markiert und sollten durch Ihre eigene Quelle ersetzt werden (eine EPD, eine nationale Datenbank oder die Werte Ihres Büros). Zeilen bearbeiten Sie im Bereich, oder Sie importieren und exportieren die Tabelle als CSV oder JSON. Hinzugefügte Zeilen ersetzen die Startzeile mit derselben ID. Die Tabelle wird im Modell gespeichert.

Bauteile ohne Treffer oder ohne Menge werden als **Probleme** aufgelistet und nicht als null gezählt.

## Kosten im 4D-Terminplan

Öffnen Sie den Bereich **Kosten** neben dem 4D-Terminplan. Geben Sie Preise ein (tippen Sie sie ein, importieren Sie eine CSV- oder JSON-Datei oder übernehmen Sie die Positionen aus TakeoffCraft). Ordnen Sie jeden Preis mit Schlüsselwörtern Materialien des Modells zu; dann bewertet das Programm die Bauteile jeder Aufgabe. Die Kosten einer Aufgabe verteilen sich über ihre Tage von Beginn bis Ende (gleichmäßig oder mit Schwerpunkt am Anfang oder am Ende). Der Bereich zeigt die kumulierte Cashflow-Kurve je Tag, Woche oder Monat, die Kosten nach Phase und Paket sowie den Vergleich von Soll und Ist zu einem Stichtag. Export als CSV. Es wird nichts bewertet, solange Sie keine Preise angeben: Es werden keine mitgeliefert.

## Währung

Eine Preistabelle kann angeben, in welcher Währung ihre Preise sind (drei Buchstaben, zum Beispiel USD oder EUR). Im Bereich **5D** gibt es dafür ein Feld; es wird zusammen mit den Preisen in der Datei gespeichert, und JSON-Exporte enthalten es. Eine Tabelle, die davor erstellt wurde, oder eine, in der Sie das Feld leer gelassen haben, hat keine Währung: Ihre Kosten werden als USD angezeigt, dem Standard der Anwendung, und der Bereich sowie die laufenden Summen weisen darauf hin. Zwischen Währungen wird nichts umgerechnet.
