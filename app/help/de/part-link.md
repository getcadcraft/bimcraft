---
title: Ein Element an PartCraft senden und zurücknehmen
summary: Eine Stütze, Halterung, ein Geländer oder ein Ausrüstungsteil auswählen, es als Bauteil in PartCraft mit dem Gebäude drumherum entwerfen und die neue Form wieder ins Modell übernehmen.
keywords: partcraft, Bauteil, senden, Verknüpfung, Element, Stütze, Halterung, Zaun, Geländer, Ausrüstung, Entwurf, Hin und zurück, übernehmen, geändert, Bauteil-Verknüpfungen
from: 4ce2f449
---

## Was Sie tun

Entwerfen Sie ein Element des Gebäudes als Bauteil: Senden Sie es an PartCraft, ändern Sie es dort (ausschneiden, hinzufügen, bohren, in der Größe ändern) und übernehmen Sie die neue Form zurück ins Modell.

## Schritte

1. Wählen Sie ein Element im Modell aus: ein allgemeines Element, eine Ausrüstung, eine Stütze, einen Träger, ein Geländer oder ein Möbelstück.
2. Wählen Sie in der Werkzeugleiste {{ui:Part links}} und dann {{ui:Send to PartCraft}}. PartCraft öffnet sich in einem neuen Reiter mit dem Element als Bauteil. Die Elemente innerhalb von 3 m werden daneben grau dargestellt, damit Sie es an Ort und Stelle entwerfen können. Dort lassen sie sich nicht ändern.
3. Ändern Sie das Bauteil in PartCraft. Wählen Sie in PartCraft {{ui:File}} › {{ui:Export}} › In BimCraft zurückspeichern. Sie können so oft zurückspeichern, wie Sie möchten.
4. Zurück in BimCraft zeigt die Schaltfläche {{ui:Part links}} eine Anzahl an. Die Karte führt das Element als {{ui:Changed in PartCraft}} auf, mit der Änderung von Größe und Volumen in Worten.
5. Wählen Sie {{ui:Show}}, um es anzusehen, dann {{ui:Accept}}, um dem Element die neue Form zu geben, oder {{ui:Keep mine}}, um es unverändert zu lassen.

## Was Sie sehen sollten

- Das Übernehmen ist ein Schritt zum Rückgängigmachen. Das Element behält seinen Platz, seine GlobalId, seinen Typ, sein Material und seine Eigenschaften. Nur sein Körper wird ersetzt.
- Das Element erhält einen Eigenschaftssatz {{ui:CadCraft_PartLink}} mit der Verknüpfung, ihrem Status und der Revision.
- {{ui:Send again}} öffnet dasselbe Element erneut in PartCraft, über dieselbe Verknüpfung.

## Gut zu wissen

- Wände, Böden, Dächer, Türen, Fenster, Treppen, Rampen und Räume werden von den Gebäude-Werkzeugen aus einem Umriss gezeichnet und nach jeder Änderung neu aufgebaut. Ein Körper aus einer anderen App würde darüber geschrieben. Daher werden diese mit Begründung abgelehnt.
- Die Form kommt als Netz zurück (eine IFC-Tessellierung), nicht als Features des Bauteils. Die Historie des Bauteils bleibt in PartCraft.
- Hat sich das Element im Modell geändert, nachdem Sie es gesendet haben, sagt die Karte das vor dem Übernehmen. Übernehmen ersetzt diese Änderungen.
- Es wird nichts hochgeladen. Die beiden Apps sind Seiten einer Website und geben das Element in diesem Browser weiter. Beide müssen im selben Browser geöffnet sein.
- Das Element muss in PartCraft einen geschlossenen Volumenkörper bilden. Ein Element, dessen Form große offene Lücken hat, wird dort mit der Anzahl offener Kanten abgelehnt.
- Um zu übernehmen, machen Sie das Modell, das das Element enthält, zum aktiven Modell.
