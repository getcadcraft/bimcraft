---
title: Andere Modelle zur Koordination verknüpfen
summary: Ein weiteres IFC-Modell neben Ihrem per Verweis anzeigen (nie zusammengeführt), über gemeinsame Koordinaten, Kartenkoordinaten oder zwei Punkte platzieren, beim Zeichnen daran einrasten und neu laden, wenn sich seine Datei ändert.
keywords: verknüpfen, verknüpftes Modell, Verweis, Xref, Koordination, Föderation, Tragwerk, MEP, Fachplaner, gemeinsame Koordinaten, Vermessung, Kartenkoordinaten, neu laden, entladen, Dokumentverweis, IfcDocumentReference
from: 3e0f1eab
---

## Was Sie tun

Zeichnen Sie gegen das Modell eines Fachplaners (Tragwerk, Technik, Bestandsgebäude), ohne etwas in Ihre eigene Datei zu kopieren.

Ein **verknüpftes Modell** wird in der 3D-Ansicht angezeigt und in Ihren Plänen geschnitten, aber nie verändert und nie in Ihrem Modell gespeichert. Ihr Modell behält nur den Verweis: den Namen der Datei und wohin sie gehört.

## Ein Modell verknüpfen

1. Klicken Sie im linken Bereich im Abschnitt {{ui:Verknüpfte Modelle}} auf {{ui:Modell verknüpfen…}} und wählen Sie die IFC-Datei. Sie wird sofort angezeigt, und ihre Zeile zeigt **Angezeigt**.
2. Wählen Sie unter {{ui:Platzierung}}, wohin sie kommt:
   - **Gemeinsame Koordinaten** (zum Start): Ihre Koordinaten gelten auch für sie, so als wären beide Modelle vom selben Nullpunkt abgesteckt.
   - **Kartenkoordinaten**: Die Kartenkoordinaten beider Dateien richten sie aus (beide brauchen eine Kartenumrechnung; BimCraft meldet es, wenn eine keine hat).
   - **Über zwei Punkte…**: Klicken Sie einen Punkt im verknüpften Modell an, dann die Stelle in Ihrem; danach ein zweites Paar. Die Verknüpfung wird verschoben und (um die Senkrechte) gedreht, damit sie passt.
3. Jede Verknüpfung und jede Änderung der Platzierung ist ein Schritt: {{key:Mod+Z}} macht ihn rückgängig.

## Damit arbeiten

- Die Pläne zeigen das verknüpfte Modell auf Schnitthöhe der Ebene als dünne Linien, und das Werkzeug {{ui:Wand}} sowie die anderen Zeichenwerkzeuge rasten an seinen Ecken und Kanten ein.
- Wählen Sie seine Elemente in der 3D-Ansicht an, um ihre Eigenschaften zu lesen. Ein verknüpftes Modell ist nie das, das Sie bearbeiten; daher ist sein Optionsfeld in {{ui:Modelle}} aus.
- **Hat sich die Datei geändert?** Wenn der Browser die Datei beobachten kann (eine Datei, die über seinen Dateiauswahldialog geöffnet wurde, oder in Studio), lädt BimCraft die Verknüpfung ein paar Sekunden nach dem erneuten Speichern der Datei selbst neu und meldet es. Andernfalls klicken Sie auf {{ui:Neu laden}}.
- {{ui:Entladen}} blendet es aus und gibt den Speicher frei; die Verknüpfung bleibt in Ihrem Modell. {{ui:Laden…}} zeigt es wieder an (Sie wählen die Datei: Ein Browser kann eine Datei nicht von selbst anhand ihres Namens öffnen).
- Das × entfernt die Verknüpfung aus Ihrem Modell.

## Was Sie sehen sollten

- In Ihrer IFC-Datei: ein IfcDocumentReference für jede Verknüpfung (der Name der Datei), dem Projekt zugeordnet, und wohin sie gehört im Eigenschaftssatz CadCraft_Links des Projekts. Wenn Sie Ihr Modell erneut öffnen, listet es seine Verknüpfungen als **Nicht geladen**, bis Sie sie laden.

:::note
Kollisionsprüfungen, Vergleich und Suche können eine geladene Verknüpfung wie jedes andere offene Modell verwenden: siehe [Mehrere IFC-Modelle gemeinsam betrachten](topic:several-models).
:::
