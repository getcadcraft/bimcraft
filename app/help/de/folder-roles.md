---
title: Ordnerbericht: Rollen, Status und Verknüpfungen
summary: Jede Bezeichnung im Ordnerbericht, was sie bedeutet und wie der Vorschlag „Hier starten“ gewählt wird.
keywords: Ordnerbericht, Rollen, Status, vollständig, unvollständig, nicht lesbar, verknüpft, Hintergrund, Starter, zentral, Familie, nur Sicherungen, Hier starten, Verknüpfungsstatus
from: b35bdd10
---

## Kopiestatus

Jede Kopie eines Modells, Hauptdatei wie nummerierte Sicherungen gleichermaßen, erhält eine Kopfprüfung.

| Bezeichnung | Bedeutung |
|---|---|
| **Vollständig** | Kopf und Index der Datei passen in die Datei |
| **Unvollständig** | Die Datei ist kürzer, als ihr eigener Index angibt: Sie wurde beim Kopieren, Hochladen oder Synchronisieren abgeschnitten, oder es ist eine Cloud-Datei, die noch „nur online“ ist |
| **Nicht lesbar** | Die Datei ist keine gültige Verbunddatei oder konnte nicht gelesen werden |

In der Spalte **Status** zeigt ein Modell **Vollständig**, ein gelbes „*n* unvollständig“, wenn mindestens eine Kopie fehlerhaft, eine andere aber intakt ist, oder rot **Unvollständig**, wenn keine Kopie intakt ist.

## Sicherungen

Dateien mit Namen wie `Name.0001.rvt`, `Name.0002.rvt` und so weiter sind nummerierte Sicherungen von `Name.rvt`. Sie sind unter ihrem Modell gruppiert, die neueste zuerst, unter **Alle … Kopien**. Die Karte wird aus der Hauptdatei gelesen, wenn sie vollständig ist, sonst aus der neuesten vollständigen Sicherung („neueste vollständige“).

## Rollen

Wird kursiv unter dem Namen eines Modells angezeigt.

| Rolle | Bedeutung |
|---|---|
| Verknüpft von *anderem Modell*: Hintergrund | Ein anderes Modell im Ordner verknüpft dieses, daher ist es sehr wahrscheinlich der Hintergrund eines anderen, etwa das Modell eines Fachplaners |
| Starter- oder unbenannte Datei | Ein Name wie Blank, Template, Default, Untitled oder Project1: ein Ausgangspunkt oder eine Datei, die nie richtig benannt wurde |
| Zentrales Modell | Ein zentrales Modell für Teamarbeit. Die Arbeit findet in einer lokalen Kopie statt, nicht hier |
| Familie (ein Bauteil) | Eine `.rfa`- oder `.rft`-Datei: eine Komponente, nicht das Projekt |
| Nur Sicherungen | Die Hauptdatei fehlt, und nur nummerierte Sicherungen sind übrig |

## So wird „Hier starten“ gewählt

BimCraft folgt der Überlegung, die eine erfahrene Person anstellen würde:

1. Kandidaten sind lesbare Projektdateien (`.rvt`, `.rte`), die nicht von einem anderen Modell verknüpft und keine Starter sind.
2. Zentrale Modelle und Modelle mit nur Sicherungen zählen nur, wenn es nichts Besseres gibt.
3. Von den Kandidaten gewinnt die Datei, die zuletzt gespeichert wurde.

Das Feld nennt seine Gründe und warnt, wenn eine Datei, die wie die naheliegende Wahl aussieht, beschädigt ist, wenn andere Modelle Hintergrund sind und wenn die Auswahl ein zentrales Modell ist. Es ist eine beste Schätzung: Fragen Sie nach, wer das Projekt zuletzt bearbeitet hat.

## Verknüpfungsstatus

| Bezeichnung | Bedeutung |
|---|---|
| **Im Ordner** | Gefunden am gespeicherten relativen Pfad oder am Ende des gespeicherten vollständigen Pfads im Ordner |
| **Gleichnamige Datei gefunden** | Nicht an seinem Pfad, aber eine Datei mit demselben Namen liegt im Ordner. Prüfen Sie, ob es die richtige ist |
| **Bibliotheksdatei** | Eine Schlüsseltabelle oder eine Baugruppen-Codetabelle. Sie kommen mit dem Programm auf jedem Computer |
| **Nicht im Ordner** | Im Ordner nirgends gefunden |

Die Spalte **Gefundene Verknüpfungen** unter **Modelle** zeigt, wie viele Verknüpfungen eines Modells gefunden wurden, von den im Ordner erwarteten (Bibliotheksdateien werden nicht gezählt).

## Aussortiert

| Zeile | Bedeutung |
|---|---|
| Revit-Verwaltungsordner (nicht gelesen) | Ordner `*_backup`, `*_log` und `Revit_temp` sowie versteckte Ordner und `__MACOSX` |
| Sperr-, Protokoll- und Sicherungsreste | Dateien `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` und `.slog` |
| Andere Dateien | Alles Übrige (die ersten 40 sind benannt) |
