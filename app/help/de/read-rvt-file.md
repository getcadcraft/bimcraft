---
title: Eine Projekt- oder Familiendatei lesen
summary: Eine Datei .rvt, .rfa, .rte oder .rft öffnen und ihre Version, Teamarbeit, Projektinformationen, Familienparameter, Verknüpfungen und das Vorschaubild lesen, ohne das Programm, mit dem sie erstellt wurde.
keywords: rvt, rfa, rte, rft, Projektdatei, Familie, Version, welche Version, Build, Teamarbeit, zentral, Projektinformationen, Vorschau, Miniaturansicht, Verknüpfungen
from: df3600e1
---

## Was Sie tun werden

Erfahren Sie, was in einer Projekt- oder Familiendatei steckt, ohne sie in Revit zu öffnen: welche Version sie gespeichert hat, ob sie für die Teamarbeit eingerichtet ist, die Projektinformationen und worauf sie verweist. Das ist nützlich, wenn eine Datei von jemand anderem kommt und Sie wissen müssen, in welcher Version Sie sie öffnen sollen.

## Schritte

1. Klicken Sie auf {{ui:Datei wählen}}.
2. Wählen Sie eine Datei `.rvt`, `.rfa`, `.rte` oder `.rft`.
3. Warten Sie einen Moment. Die Statuszeile zeigt „Datei wird gelesen…“ und danach „Geöffnet *Dateiname*“.
4. Sehen Sie oben auf der Karte nach: das in der Datei gespeicherte Vorschaubild, die Art der Datei, die Version, in der sie gespeichert wurde, und den Projektnamen.
5. Scrollen Sie nach unten, um die Abschnitte der Karte zu lesen.

## Was Sie sehen sollten

Die Karte in der Mitte, mit diesen Abschnitten, wenn die Datei sie enthält:

| Abschnitt | Was er Ihnen sagt |
|---|---|
| Datei | Dateiname, Größe, Art (Projekt, Projektvorlage, Familie oder Familienvorlage), die Version und der Build, in dem sie gespeichert wurde, Teamarbeit, der Pfad des zentralen Modells, wo sie zuletzt gespeichert wurde, wer sie gespeichert hat, Sprache und Dokument-GUID |
| Projektinformationen | Die eigenen Felder des Projekts, wie Name, Nummer, Auftraggeber, Adresse und Status. Felder, die noch auf den Standardwerten eines neuen Projekts stehen, werden ausgelassen. |
| Familie, Familie: … | Bei einer Familie: ihr Name, ihre Kategorie, Version, letzte Aktualisierung und ihre Parameter, Gruppe für Gruppe |
| Verknüpfte und referenzierte Dateien | Jedes verknüpfte Modell, jede CAD-Verknüpfung, jedes Bild und jede Keynote-Tabelle, auf die die Datei verweist, mit ihrem gespeicherten Pfad |

Links zeigt der Bereich {{ui:Datei}} die wichtigsten Angaben und ergänzt **Gelesen**: wie viel der Datei BimCraft tatsächlich gelesen hat, meist etwa 40 KB einer Datei von mehreren Megabyte. Rechts sagt der Bereich {{ui:Eigenschaften}}, dass Bauteileigenschaften das 3D-Modell brauchen.

## Warum es kein 3D gibt

Das 3D-Modell und die Bauteile in einer Projektdatei sind in einem nicht dokumentierten Format gespeichert. BimCraft liest nur die Teile der Datei, die dokumentiert oder eindeutig lesbar sind: die Dateiinformationen, die Projektinformationen, die Familiendaten, die Verknüpfungsliste und das Vorschaubild. Den Rest rät es nicht. Um das Modell in 3D zu sehen und Bauteileigenschaften zu lesen, exportieren Sie IFC aus dem Programm, mit dem die Datei erstellt wurde. Siehe [Eine Projektdatei per IFC in 3D bringen](topic:rvt-to-ifc).

## Häufige Fehler

- **3D erwarten.** Siehe oben.
- **Verknüpfungen zeigen nur ihren gespeicherten Pfad.** Eine Datei, die allein geöffnet wird, kann nicht prüfen, ob ihre Verknüpfungen existieren. Öffnen Sie stattdessen den Ordner, in dem sie liegt. BimCraft markiert dann jede Verknüpfung als gefunden oder nicht gefunden: [Einen ganzen Projektordner öffnen](topic:open-project-folder).
- **„Diese Datei ist unvollständig…“** Die Datei wurde beim Kopieren, Hochladen oder Synchronisieren abgeschnitten. Eine Cloud-Datei, die noch „nur online“ ist, tut dasselbe. BimCraft öffnet sie trotzdem und zeigt nur, was wiederhergestellt werden konnte: einen bernsteinfarbenen Hinweis oben auf der Karte, einen Abschnitt **Aus dieser Datei wiederhergestellt** mit den Teilen, deren jedes Byte in der Datei liegt, und **Nicht in der Datei** für den Rest. Für den fehlenden Teil wird nichts ergänzt. Version, Vorschaubild oder Projektinformationen können daher fehlen, wenn sie hinter dem Abschnitt gespeichert waren. Ist sogar das Inhaltsverzeichnis der Datei abgeschnitten, lässt sich nichts öffnen. Kopieren Sie das Original erneut und öffnen Sie die Datei für die vollständige Ansicht neu.
- **„Kein Vorschaubild in dieser Datei“.** Manche Dateien werden ohne Vorschaubild gespeichert. Das ist normal.
- **Eine Sicherung versehentlich öffnen.** Dateien mit Namen wie `Tower.0004.rvt` sind nummerierte Sicherungen. Öffnen Sie den Ordner, dann gruppiert BimCraft sie mit ihrem Modell.
