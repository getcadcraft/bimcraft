---
title: Themen und BCF-Dateien
summary: Speichern Sie eine Ansicht des Modells als Thema – Kamera, ausgewählte Elemente, ausgeblendete Elemente, Schnitt – und teilen Sie sie als BCF-Datei mit anderen Koordinationswerkzeugen. Öffnen Sie deren BCF-Dateien, um ihre Themen zu sehen.
keywords: bcf, bcfzip, Thema, Themen, Blickpunkt, Kollisionsbericht, Koordination, Kommentar, Momentaufnahme, BCF öffnen, BCF speichern, Export, Import
from: 2a6cf201
---

## Was Sie tun

Zeigen Sie auf ein Problem im Modell und behalten Sie die Ansicht, die es zeigt. Geben Sie sie dann in einer BCF-Datei weiter, dem Format, das andere Koordinationswerkzeuge lesen und schreiben.

## Schritte

1. Öffnen Sie ein IFC-Modell und richten Sie die Ansicht ein: Orbit um das Modell, die betroffenen Elemente wählen, im Weg stehendes ausblenden, mit einer Schnittebene oder einem Schnittkasten schneiden.
2. Rechts auf den Reiter {{ui:Themen}} klicken, dann auf {{ui:Neues Thema aus dieser Ansicht}}.
3. Einen Titel eingeben und, falls gewünscht, einen Kommentar; einen Status wählen; Ihren Namen oder Ihre E-Mail-Adresse angeben (angemeldet wird der Name Ihres Kontos eingetragen; siehe [BimCraft-Einstellungen](topic:settings#your-name-on-issues)). Auf {{ui:Thema erstellen}} klicken.
4. Auf {{ui:Anzeigen}} bei einem Thema klicken, um seine Ansicht wiederherzustellen.
5. Auf {{ui:BCF speichern}} klicken, um alle Themen als eine `.bcf`-Datei herunterzuladen.
6. Um Themen zu sehen, die jemand anderes erstellt hat, auf {{ui:BCF öffnen…}} klicken und dessen `.bcf`- oder `.bcfzip`-Datei wählen.

## Was Sie sehen sollten

- Jedes Thema in der Liste mit einem Bild seiner Ansicht, seinem Titel, Status, Autor und Datum.
- {{ui:Anzeigen}} stellt die Kamera, die ausgewählten Elemente, das Ausgeblendete (oder die einzig sichtbaren Dinge) und den Schnitt wieder her. Elemente werden über ihre GlobalId in jedem geöffneten Modell gefunden; die Statuszeile sagt, wenn einige fehlen.
- Eine Schnittebene oder ein Schnittkasten aus einem anderen Werkzeug wird angezeigt, wenn er an den Achsen des Modells ausgerichtet ist; schräge oder zusätzliche Ebenen kommen als Schnittvolumen zurück (bis zu 6 Ebenen). Ein Thema behält das erste Kästchen eines Volumens aus mehreren Kästchen.

## Gut zu wissen

- Die Datei ist BCF 2.1 und hält die Ansicht in den eigenen Koordinaten des Modells, sodass andere Werkzeuge die Kamera an dieselbe Stelle setzen.
- Themen bleiben in diesem Reiter, bis Sie sie speichern. Das Öffnen eines anderen Modells behält die Liste; öffnen Sie das Modell, auf das sich die Themen beziehen, bevor Sie sie anzeigen.
- Eine parallele (orthogonale) Kamera aus einem anderen Werkzeug wird mit der perspektivischen Kamera dieses Betrachters angezeigt, zurückgesetzt, sodass derselbe Teil des Modells die Ansicht füllt.

## Häufige Fehler

- **Anzeigen hat die Kamera an eine seltsame Stelle gesetzt.** Das Thema wurde an einem anderen Modell oder mit anderen Koordinaten erstellt. Öffnen Sie zuerst das richtige Modell.
- **Die Datei lässt sich nicht öffnen.** Sie ist kein BCF-Zip oder sie ist beschädigt; die Statuszeile nennt den Grund.

## Weiter

- [Elemente ausblenden, isolieren und durchsichtig machen](topic:hide-and-isolate)
- [IFC-Modell mit einer Schnittebene schneiden](topic:section-plane)
