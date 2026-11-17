---
title: Die Spezifikation aus dem Modell schreiben
summary: Ein Spezifikationsabschnitt für jeden Wand-, Tür-, Fenster-, Decken- und Oberflächentyp im Einsatz, mit seinen Fakten aus dem Modell und Ihrem eigenen Text, als PDF- oder Word-Dokument.
keywords: Spezifikation, Leistungsbeschreibung, Ausführungsplanung, Phase 5, Ausführungsunterlagen, Abschnitt, Wandtyp, Türtyp, Fenstertyp, Oberfläche, Klassifikation, Uniclass, Omniclass, MasterFormat, Dokument, PDF, Word, DOCX, Listen
from: a6acc6d4
---

## Was Sie tun

Erstellen Sie eine Spezifikation, die dem Modell folgt: ein Abschnitt für jeden Typ, der tatsächlich im Gebäude vorkommt, jeweils mit seinem Aufbau und seinen Mengen aus dem Modell und dem Text, den Sie dafür schreiben.

## Schritte

1. Schalten Sie {{ui:Zeichnen}} ein, öffnen Sie im linken Bereich **Listen** und klicken Sie auf **Spezifikation**.
2. Das Dialogfeld listet einen Abschnitt für jeden Wandtyp, Türtyp, Fenstertyp, jede Geschossdecke und jede Raumoberfläche im Einsatz. Unter jeder Überschrift stehen ihre **Fakten**, aus dem Modell gelesen: Stärke, die Schichten einzeln, der Detaillierungsgrad (LOD), Maße, Anzahl und Menge. Ein Abschnitt, dessen Elemente einen Klassifikationscode tragen, zeigt den Code in seiner Überschrift.
3. Schreiben Sie Ihren Spezifikationstext in das Feld unter einem Abschnitt. **Elemente wählen** zeigt, worum es im Abschnitt geht.
4. Klicken Sie auf **Speichern**. Das ist ein Schritt in Rückgängig, und der Text wird in der Gebäudedatei gespeichert.
5. Öffnen Sie **Dokumente aus dem Modell**, wählen Sie die Vorlage **Spezifikation** und klicken Sie auf **Vorschau**, dann speichern Sie das Ergebnis als PDF, Word oder Markdown. Siehe [Dokumente aus dem Modell](topic:documents-from-the-model).

## Die Ausführungslisten als Dokument

Die Vorlage **Ausführungslisten** druckt die Tür-, Fenster- und Oberflächenlisten direkt aus dem Modell, in Ihrem Büro-Layout. Schreiben Sie in Ihrer eigenen Vorlage `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` oder den Namen einer gespeicherten Einstellung, zum Beispiel `{{schedule Door schedule by floor}}`. `{{specification}}` druckt die Spezifikation.

## Wissenswertes

- Die Fakten stammen aus dem Modell. Sie ändern sich, wenn sich das Modell ändert; Ihr Text nicht.
- BimCraft schreibt keine Klausel einer Norm und keinen Herstellertext. Ein Abschnitt ohne Text druckt „Noch kein Spezifikationstext geschrieben.“
- Text, der für einen Typ geschrieben wurde, der nicht mehr im Modell ist, bleibt erhalten und wird unter „Text für Typen, die nicht mehr im Modell sind“ aufgelistet.
- Um einen allgemeinen Typ für einen bestimmten Aufbau zu ändern, siehe [Wandwerkzeuge](topic:wall-tools) (Typ tauschen).
