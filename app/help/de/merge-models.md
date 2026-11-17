---
title: Zwei Bearbeitungen eines Modells zusammenführen
summary: Git, Fossil oder Mercurial zwei bearbeitete Kopien desselben IFC-Modells Objekt für Objekt zusammenführen lassen, damit zwei Personen an einem Gebäude zeichnen und die Arbeit vereinen können.
keywords: zusammenführen, merge, git, fossil, mercurial, Versionsverwaltung, Konflikt, Dreiwege, cadcraft merge, gitattributes, ifc, GlobalId, Team, zwei Kopien, Branches
from: 50733df8
---

Zwei Personen nehmen sich eine Kopie desselben Gebäudes, eine zeichnet den Ostflügel und eine den Westflügel, und später müssen die Kopien ein einziges Modell werden. Haben sie unterschiedliche Objekte berührt, kann ein Programm das übernehmen, statt dass ein Mensch es tut.

## Die Grundlage

Jede Wand, Tür, jedes Geschoss, jeder Raum und jeder Eigenschaftssatz in einer IFC-Datei hat eine GlobalId, die sich nie ändert. Das Zusammenführen sucht Objekte über diese Kennung, nicht über die Nummer, die die Datei ihnen gibt (`#123`), denn Nummern ändern sich, wenn ein Programm speichert. Die Teile, die an einem Objekt hängen und keine eigene Kennung haben (Platzierungen, Formen, Einheiten), werden nach ihrem Inhalt verglichen.

Beide Kopien müssen dieselbe IFC-Version haben (2x3, 4 oder 4.3). Das Zusammenführen behält Ihre Datei so, wie sie ist, mit ihrer Reihenfolge und ihren Nummern, und fügt hinzu, was neu ist, sodass ein git-Diff der Zusammenführung nur zeigt, was die Zusammenführung geändert hat.

## Einrichten

Git braucht zwei Zeilen einmal pro Repository:

```
# .gitattributes
*.ifc merge=cadcraft

# einmalig, auf jedem Computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Ohne git führen Sie `cadcraft merge <base> <ours> <theirs>` aus. Fossil und Mercurial nehmen dieselben drei Dateien in ihrer eigenen Einstellung für Merge-Werkzeuge. Nichts wird hochgeladen; alles läuft auf Ihrem Computer.

## Die Regeln

- Ein Attribut, das nur auf einer Seite geändert wurde, wird übernommen. Dieselbe Änderung auf beiden Seiten wird einmal übernommen.
- Dasselbe Attribut auf zwei Arten geändert (dasselbe Geschoss zweimal umbenannt) ist ein **Konflikt**: Ihre Seite bleibt, und der Bericht listet beide auf. Öffnen Sie das Ergebnis und korrigieren Sie es von Hand.
- Eine Liste von Dingen (die Wände eines Geschosses, die Eigenschaften eines Satzes) wird als Menge zusammengeführt: Was eine der Seiten hinzugefügt hat, bleibt, und was eine der Seiten entfernt hat, wird entfernt. Zwei Personen, die jeweils Wände zu demselben Geschoss hinzufügen, erzeugen keinen Konflikt.
- Ein Objekt, das auf einer Seite hinzugefügt wurde, bleibt, mit seiner Form und seinen Eigenschaften. Auf einer Seite entfernt und auf der anderen unverändert: entfernt. Auf einer Seite entfernt und auf der anderen geändert: entfernt und gemeldet.
- Zeitstempel und Autor der Datei sowie der Eigentümerverlauf jedes Objekts bleiben Ihre.

Geometrie wird als Ganzes zusammengeführt: Die Form einer Wand stammt von einer Seite und wird nie Punkt für Punkt gemischt. Gezippte IFC- und IFCX-Dateien werden nicht zusammengeführt. Öffnen Sie das Ergebnis nach einer Zusammenführung in BimCraft und sehen Sie sich den Bereich {{ui:Probleme}} an, bevor Sie speichern.
