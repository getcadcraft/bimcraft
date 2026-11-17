---
title: Bauteile löschen, ausschneiden, kopieren und einfügen
summary: Wände, Türen, Möbel oder anderes in einem IFC-Modell auswählen; löschen, ausschneiden oder dort kopieren und einfügen, wo Sie klicken, an gleicher Position oder auf einem anderen Geschoss.
keywords: löschen, entfernen, radieren, ausschneiden, kopieren, einfügen, duplizieren, verschieben, alles auswählen, Bauteil, Wand, Tür, Fenster, Treppe, Öffnung, rückgängig
from: d9eec37f
---

## Was Sie tun

Ändern Sie den Inhalt eines IFC-Modells: Entfernen Sie Bauteile, die Sie nicht brauchen, kopieren Sie eine Wand oder eine Gruppe von Möbeln an eine andere Stelle, oder verschieben Sie Bauteile durch Ausschneiden und Einfügen. Jede Änderung ist ein Schritt, den Sie rückgängig machen können. Beim Speichern wird eine neue Datei geschrieben, sodass Ihr Original unverändert bleibt.

## Schritte

1. Öffnen Sie ein IFC-Modell. Siehe [Ein IFC-Modell öffnen und in 3D betrachten](topic:open-ifc-model).
2. Wählen Sie aus, was Sie ändern möchten: Klicken Sie auf ein Bauteil, halten Sie {{key:Mod}} oder {{key:Shift}} gedrückt und klicken Sie, um weitere auszuwählen, oder drücken Sie {{key:Mod+A}} ({{ui:More}}, {{ui:Select all}}), um alle angezeigten Bauteile auszuwählen.
3. Dann:
   - **Löschen:** Drücken Sie {{key:Delete}} oder {{ui:More}}, {{ui:Delete}}.
   - **Kopieren:** Drücken Sie {{key:Mod+C}} oder klicken Sie auf {{ui:Copy}}.
   - **Ausschneiden:** Drücken Sie {{key:Mod+X}} oder {{ui:More}}, {{ui:Cut}}. Die Bauteile verschwinden, und Sie können sie einfügen.
4. Zum Einfügen drücken Sie {{key:Mod+V}} oder klicken Sie auf {{ui:Paste}}. Ein durchsichtiger Kasten in der Größe des Kopierten folgt dem Zeiger auf dem Geschoss, das in der Platzierungsleiste gewählt ist. Drücken Sie {{key:R}}, um ihn um 90° zu drehen, und klicken Sie dann an die Stelle, an die er soll. Jeder Klick platziert eine weitere Kopie; drücken Sie {{key:Esc}}, um aufzuhören.
5. Oder drücken Sie {{key:Mod+Shift+V}} ({{ui:More}}, {{ui:Paste in place}}): Nach dem Ausschneiden kehren die Bauteile genau an ihre ursprüngliche Stelle zurück; nach dem Kopieren liegt die Kopie direkt neben den Originalen.
6. Klicken Sie auf {{ui:Save as IFC}}, um das bearbeitete Modell herunterzuladen.

## Was zu einem Bauteil gehört

- **Teile:** Eine Treppe nimmt ihre Läufe mit, eine Vorhangfassade ihre Felder. Alles, was aus Teilen besteht, nimmt sie alle mit.
- **Öffnungen:** Eine Wand nimmt die Öffnungen mit, die in ihr ausgespart sind. Beim Löschen einer Tür oder eines Fensters verschwindet auch die Öffnung, die sie ausgefüllt hat, sodass sich die Wand schließt, wie in einem Autorenprogramm. Beim Löschen einer in BimCraft gezeichneten Wand werden auch ihre Türen und Fenster gelöscht, und die verbleibenden Wände werden neu verbunden. Beim Löschen einer Wand aus einer anders erstellten Datei bleiben ihre Türen und Fenster an ihrer Stelle.
- **Daten:** Eine Kopie hat denselben Typ, dieselben Materialien, Eigenschaftssätze und Mengen wie das Original sowie eine neue GlobalId. Wenn Sie später einen Wert der Kopie ändern, bleibt das Original unberührt.
- **Bibliothekselemente** behalten ihre Bibliotheksdaten. Eine Kopie erhält die nächste freie Elementnummer, und ein ausgeschnittenes und wieder eingefügtes Element behält seine eigene.

## Was Sie sehen sollten

- „Gelöscht: …“ oder „Eingefügt: …“ in der Liste {{ui:Changes}}. {{key:Mod+Z}} nimmt die letzte Änderung zurück; {{key:Mod+Y}} stellt sie wieder her.
- Nach dem Löschen zeigt die Statuszeile an, wie viele Teile und Öffnungen ebenfalls entfernt wurden.
- Eingefügte Bauteile sind ausgewählt. So können Sie an gleicher Position erneut einfügen, um eine Reihe zu erstellen, oder sie löschen.

## Gut zu wissen

- Kopien verwenden dieselbe Geometrie wie das Original (IFC erlaubt, dass Bauteile sie teilen), daher wächst die Datei nur wenig.
- Bauteile werden in das Modell eingefügt, aus dem sie kopiert wurden, im selben Reiter. Um platzierte Bibliothekselemente in einem anderen Modell zu verwenden, kopieren Sie jeweils ein Element. Siehe [Bibliothekselemente kopieren, einfügen und duplizieren](topic:copy-paste).
- Geschosse, Räume, Gebäude und das Grundstück können nicht gelöscht oder kopiert werden. Wählen Sie stattdessen die Bauteile in ihnen aus. Ein in BimCraft gezeichneter Raum ergibt sich aus den Wänden um ihn herum: Löschen Sie eine Wand, um zwei Räume zu verbinden.
- Wände, Türen und Fenster, die mit den eigenen Wand-, Tür- und Fenster-Werkzeugen von BimCraft gezeichnet wurden, können noch nicht kopiert, ausgeschnitten oder dupliziert werden. Die Statuszeile zeigt dies an. Zeichnen Sie sie neu. Löschen funktioniert.
- Kopieren legt auch die Namen und Eigenschaften des Kopierten als Text in die Zwischenablage, um sie in eine Tabelle oder eine E-Mail einzufügen.

## Häufige Fehler

- **{{ui:Delete}} ist ausgegraut.** Nichts ist ausgewählt, oder nur Geschosse oder Räume sind ausgewählt. Bewegen Sie den Zeiger darauf, um den Grund zu lesen.
- **Einfügen meldet, dass die Bauteile aus einem anderen Modell stammen.** Sie haben seit dem Kopieren ein anderes Modell geöffnet. Öffnen Sie das erste Modell erneut und kopieren Sie die Bauteile dort.
- **Die eingefügte Kopie liegt auf einem anderen Geschoss.** Das {{ui:Storey}} in der Platzierungsleiste bestimmt, wohin sie kommt. Wählen Sie das Geschoss, bevor Sie klicken.

## Verwandte Themen

- [Bauteile ausblenden, isolieren und durchsichtig machen](topic:hide-and-isolate)
- [Tasten und Maus](topic:keyboard#edit)
