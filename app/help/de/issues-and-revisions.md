---
title: Themen, Revisionen und Änderungsprotokoll der Zeichnung
summary: Erfassen Sie jeden Satz Blätter, den Sie herausgeben, sehen Sie nach, was sich seither auf jedem Blatt und Element geändert hat, und halten Sie Bauanweisungen, Werkstattzeichnungen und verknüpfte Modelle dem Thema zugeordnet, zu dem sie gehören.
keywords: Thema, ausgegebener Satz, eingereichter Satz, Einreichung, Revision, Revisionen, Änderungen, seit Thema, Änderungsprotokoll, Zeichnungs-Änderungsprotokoll, Zeichnungsverzeichnis, Übergabeschreiben, Bauanweisung, Werkstattzeichnung, verknüpftes Modell, Ausschreibung, Bauausführung, Momentaufnahme, vergleichen
from: 4c732832
---

## Was Sie tun

Erfassen Sie ein Thema: welche Blätter herausgegeben wurden, an welchem Datum, zu welchem Zweck, jeweils mit ihrer Revision. Später fragen Sie ab, was sich seit diesem Thema geändert hat. Bauanweisungen und zurückgegebene Werkstattzeichnungen halten Sie dem Thema zugeordnet.

## Schritte

1. Im linken Bereich **Themen und Revisionen** öffnen.
2. **Thema erfassen** wählen. Die Revision wird vorgeschlagen (A, dann B; eine nummerierte wie P1 zählt hoch). Wählen Sie, wofür es herausgegeben wird, an wen es geht, das Datum und die Blätter. Ist Ihre Projektphase festgelegt, folgt der Zweck ihr. Hat das Genehmigungspaket eine Liste unterstützender Unterlagen, sind die mit dieser Liste verknüpften Blätter für Sie angehakt.
3. Lassen Sie **Modell als ausgegeben auch als Kopie speichern** angehakt, damit das Modell genau so bewahrt wird, wie es herausgegeben wurde. Die Kopie wird heruntergeladen; ihr Name, ihre Größe und ihr SHA-256 werden mit dem Thema gespeichert.
4. **Dieses Thema erfassen** wählen. Ein Blatt, das sich seit seiner letzten Herausgabe geändert hat, erhält die neue Revision. Ein Blatt, das sich nicht geändert hat, behält seine Revision. Das Schriftfeld jedes Blatts zeigt seine Revision.
5. Um zu sehen, was sich geändert hat, **Änderungen seit** neben einem Thema wählen. Jedes Blatt zeigt Gleich oder Geändert, mit den darauf hinzugefügten, geänderten und entfernten Elementen. Klicken Sie auf eine Anzahl, um diese Elemente auszuwählen.
6. **Eintrag hinzufügen** wählen für eine Bauanweisung, eine Werkstattzeichnung, einen Markierungssatz, ein verknüpftes Modell oder eine Notiz. Wählen Sie das Thema, zu dem er gehört. Eine Datei, die Sie wählen, wird mit Name, Größe und SHA-256 erfasst; die Datei bleibt, wo sie ist.
7. **Zeichnungs-Änderungsprotokoll** zeigt eine Zeile für jedes Blatt und eine Spalte für jedes Thema. **Änderungsprotokoll herunterladen (CSV)** speichert es mit den Themen und Einträgen.
8. **Themenverlauf speichern** schreibt eine Datei `.issues.json`. MarkupCraft, TakeoffCraft und DetailCraft lesen sie mit **Themenverlauf lesen**.

## Gut zu wissen

- Der Verlauf wird in der IFC-Datei gespeichert (Eigenschaftssatz `CadCraft_Issues` am Projekt). Andere Programme ignorieren ihn.
- Ein Blatt gilt als geändert, wenn seine eigene Einrichtung sich geändert hat oder wenn ein Element, das es zeigt, sich geändert hat: Ein Grundriss zeigt sein Geschoss, eine Ansicht oder ein Schnitt das gesamte Modell, eine Tür- oder Fensterliste ihre Türen oder Fenster.
- Ein Element gilt als geändert, wenn sich eine Eigenschaft, seine Lage, seine Größe oder seine Form geändert hat.
- Um genau zu sehen, welche Eigenschaft sich geändert hat, öffnen Sie die gespeicherte Kopie des herausgegebenen Modells mit **Versionen vergleichen**.
- Wird ein Thema entfernt, bleiben seine Einträge ohne Thema erhalten. Jeder Schritt entspricht einem Rückgängig.
- Ein Modell mit mehr als 60.000 Elementen speichert keinen Eintrag für jedes Element zum Thema. Blätter werden trotzdem verglichen.

## Noch nicht umgesetzt

- Blätter werden nicht als PDF zusammen mit dem Thema gespeichert.
- Auf den eigenen Blättern von BimCraft wird keine Revisionswolke gezeichnet. Wolken in MarkupCraft zum Thema erfassen.
