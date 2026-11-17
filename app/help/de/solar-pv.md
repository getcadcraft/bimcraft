---
title: Solar-PV-Anlagen, Verschattung und Ertrag
summary: Setzen Sie Solarmodule auf Dächer oder auf den Boden, verschatten Sie sie anhand des Modells, schätzen Sie den Jahresertrag, dimensionieren Sie Strings und erzeugen Sie die Daten für das Einlinienschema. Alle Eingaben werden angezeigt, und das Startmodul sowie die Verluste sind allgemein gehalten.
keywords: Solar, PV, Photovoltaik, Anlage, Modul, Dach, Verschattung, Ertrag, kWh, kWp, Stringdimensionierung, Wechselrichter, Einlinienschema, Einlinie, Neigung, Azimut, Reihenabstand
from: adf4aaf3
---

## Was Sie tun

Öffnen Sie den Bereich **Solar PV**. Wählen Sie eine Dachfläche (ihre Neigung und Ausrichtung werden aus dem Modell gelesen) oder legen Sie eine Bodenanlage mit Neigung und Ausrichtung an; die Module werden mit Abständen innen eingepasst und gezählt, was die DC-Leistung in kWp ergibt. Das Platzieren der Anlage schreibt sie als Solargeräte in das Modell, in einem Schritt zum Rückgängigmachen.

## Verschattung, Ertrag und Strings

- **Verschattung** wirft für typische Tage jedes Monats von jedem Modul einen Strahl zur Sonne, gegen die eigene Geometrie des Modells, sodass benachbarte Gebäude, Attiken und die Reihen davor zählen. Nur das direkte Sonnenlicht wird reduziert, und eine teilweise verschattete Anlage verliert Leistung im gleichen Verhältnis.
- **Ertrag** liefert kWh nach Monat und Jahr, kWh pro kWp und die Performance Ratio. Die Sonne kommt aus Ihren eigenen Monatssummen auf einer waagerechten Fläche, falls Sie sie eintragen. Ohne sie verwendet der Bereich eine Obergrenze bei wolkenlosem Himmel und sagt es dazu. **Klimadaten von NASA POWER abrufen** mit einer Schaltfläche auf der Registerkarte Ertrag: Es sendet nur die Breiten- und Längengrade des Grundstücks, einmal, und behält die Antwort auf diesem Computer (geprüft im Browser am 2026-10-30). PVGIS erlaubt einer Webseite nicht, seine Antwort zu lesen; daher bietet die Registerkarte einen Link, der die Monatsdaten von PVGIS für das Grundstück in einem neuen Tab öffnet. Fügen Sie ein, was dort steht, in das Feld ein, und die zwölf Monate werden ausgefüllt.
- **Strings** prüft die Module je String gegen das Spannungsfenster des Wechselrichters am kältesten und heißesten Tag sowie die parallelen Strings gegen dessen Strom.
- **Einlinie** erzeugt die Daten des Diagramms (Anlage, Sammelkasten, Trennschalter, Wechselrichter, Zähler, Netzanschluss) mit Leitungs- und Sicherungsgrößen aus den Faktoren, die Sie eingeben. Es sind Daten und eine SVG; das Add-on Elektro in CadCraft kann sie als Symbole platzieren.

Das Modul, der Wechselrichter, die Verluste und die Leitungsfaktoren, die mit BimCraft mitgeliefert werden, sind allgemeine Beispiele und in jedem Ergebnis gekennzeichnet. Geben Sie die Daten des Herstellers und die Normwerte ein, nach denen Sie planen, und lassen Sie die Planung von der Person prüfen, die dafür einsteht.
