---
title: Zwischen zwei BIM-Programmen arbeiten
summary: Ein Modell über IFC von einem BIM-Programm zu einem anderen schicken, mit BimCraft dazwischen; GlobalIds, Eigenschaftssätze und Klassifikationen behalten, beide Programme für dieselben Eigenschaften einrichten und sehen, was zurückkam.
keywords: IFC, Hin- und Rückweg, Interoperabilität, GlobalId, GUID, Eigenschaftssätze, Psets, Klassifikationen, gemeinsame Parameter, Eigenschaftszuordnung, Übersetzer, BCF, Koordination, Austausch
from: 9f224176
---

## Was Sie erreichen

Verschieben Sie ein Modell zwischen zwei BIM-Programmen, zum Beispiel von Revit zu Archicad und zurück, über IFC, wobei BimCraft in der Mitte steht, um es zu prüfen, zu ergänzen und zu melden, was erhalten blieb. Das eigene Dateiformat keines der beiden Programme wird gelesen: Alles wird als IFC übertragen.

## Was BimCraft erhält

Wenn Sie ein Modell in BimCraft ändern und auf {{ui:Als IFC speichern}} klicken, wird jede Zeile, die Sie nicht geändert haben, genau so zurückgeschrieben, wie sie war. Daher gilt:

- **GlobalIds** bleiben gleich, und das andere Programm kann jedes Element dem zuordnen, das es gesendet hat.
- **Eigenschaftssätze** und ihre Werte bleiben erhalten, außer den Werten, die Sie geändert haben.
- **Klassifikationen** bleiben an ihren Elementen angehängt.

## Beide Programme für dieselben Eigenschaften einrichten

1. Öffnen Sie das Modell in BimCraft (und das Projektpaket, falls Sie eines haben: Seine Eigenschaftsgruppen werden hinzugefügt).
2. Öffnen Sie im linken Bereich {{ui:Zwischen zwei BIM-Programmen}}.
3. Laden Sie unter **Eigenschaftszuordnung** herunter, was jedes Programm benötigt:
   - {{ui:Gemeinsame Parameter}}: eine Datei mit gemeinsamen Parametern. Laden Sie sie in Revit über Verwalten › Gemeinsame Parameter und fügen Sie die Parameter den Kategorien hinzu, die sie benötigen.
   - {{ui:IFC-Export-Eigenschaftssätze}}: eine Datei mit benutzerdefinierten Eigenschaftssätzen. Wählen Sie sie in den IFC-Exporteinstellungen von Revit unter benutzerdefinierte Eigenschaftssätze, damit das exportierte IFC denselben Satz und dieselben Eigenschaftsnamen enthält.
   - {{ui:Zuordnungstabelle (CSV)}}: jede Eigenschaft mit ihrem IFC-Satz und Namen, ihrem Typ und den passenden Namen in jedem Programm. Die Zuordnungsdateien von Archicad sind kein veröffentlichtes Format, daher richten Sie dessen IFC-Übersetzer und Eigenschaftsverwaltung anhand dieser Tabelle von Hand ein.
   - {{ui:Zuordnungsdatei}}: die gesamte Zuordnung als eine Datei, die Sie beim Projekt aufbewahren.

Standardsätze (Pset_ und Qto_) sind aus der Datei mit gemeinsamen Parametern ausgeschlossen: Beide Programme schreiben sie aus ihren eigenen Daten.

## Das Modell senden und zurückholen

1. Exportieren Sie IFC aus dem ersten Programm mit beibehaltenen GlobalIds (Revit: „Store the IFC GUID in an element parameter after export“ aktiviert).
2. Öffnen Sie es in BimCraft, prüfen Sie es ({{ui:Modellprüfungen}}, {{ui:Kollisionsprüfung}}), fügen Sie Themen hinzu ({{ui:Themen}}, BCF), ändern Sie Werte bei Bedarf und klicken Sie auf {{ui:Als IFC speichern}}.
3. Öffnen Sie die gespeicherte IFC-Datei im zweiten Programm, arbeiten Sie daran und exportieren Sie IFC von dort mit beibehaltenen GlobalIds (Übersetzer von Archicad: „Global Unique Identifiers: Keep existing“).
4. Öffnen Sie zurück in BimCraft das Modell, das hinausging, und fügen Sie das hinzu, das zurückkam ({{ui:Modell hinzufügen}} unter Modelle).
5. Wählen Sie unter {{ui:Zwischen zwei BIM-Programmen}} **Gesendet** und **Zurückgekommen** und klicken Sie auf {{ui:Bericht erstellen}}.

## Den Bericht lesen

- **Elemente**: wie viele mit derselben GlobalId zurückkamen, wie viele fehlen und wie viele neu sind. Elemente mit einer neuen GlobalId erscheinen als ein fehlendes und ein neues: Das andere Programm hat sie nicht beibehalten.
- **IFC-Klasse geändert**: Elemente, die als eine andere Art von Element zurückkamen.
- **Eigenschaftswerte erhalten**: der Anteil der Werte, die unverändert zurückkamen. Die Liste darunter zeigt die Eigenschaften mit den meisten geänderten oder fehlenden Werten.
- **Klassifikationen**: erhalten, geändert (gleiches System, anderer Code) oder fehlend.

{{ui:Den Bericht herunterladen (CSV)}} liefert jede Eigenschaft mit ihren Anzahlen. Um zu sehen, welche Elemente sich bewegt oder ihre Form geändert haben, verwenden Sie {{ui:Versionen vergleichen}} mit denselben beiden Modellen.

:::note
BimCraft betreibt keines der beiden Programme. Welche Einstellungen einen Wert durchreichen, hängt von den IFC-Einstellungen jedes Programms ab: Der Bericht zeigt, was tatsächlich zurückkam. Probieren Sie also eine Einstellung aus, exportieren Sie erneut und vergleichen Sie.
:::

## Themen werden als BCF übertragen

Themen, die Sie in BimCraft erstellen, werden als BCF exportiert ({{ui:Themen}}). Beide Programme können diese mit ihren BCF-Werkzeugen lesen. So erreicht eine Frage zu einem Element die Person, die im anderen Programm arbeitet, mit ihrer Ansicht.

Siehe auch [Ein Projektpaket öffnen](topic:open-project-bundle), [Von einer Projektdatei über IFC zu BimCraft](topic:rvt-to-ifc) und [Zwei Versionen eines Modells vergleichen](topic:compare-versions).
