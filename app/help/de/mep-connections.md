---
title: Rohre und Luftkanäle an Ausstattung anschließen
summary: Ein Rohr oder einen Luftkanal an einem Anschluss beginnen oder enden lassen, damit es dessen Größe und System übernimmt und daran fest bleibt, dann die Verbindungen prüfen – offene Anschlüsse, Größen- und Systemabweichungen, Führungen ohne Quelle.
keywords: mep, anschließen, Anschluss, Anschlüsse, offener Anschluss, Größenabweichung, Systemabweichung, Quelle, Verbindungen prüfen, fest, folgen, Ausstattung verschieben, ifcrelconnectsports, Koordination
from: 29144fb0
---

## Was Sie tun

Verbinden Sie die Führungen mit der Ausstattung, damit das Modell ein zusammenhängendes System ist: der Auslass einer Pumpe mit dem Rohr, das von ihm abgeht, der Hals eines Auslasses mit seinem Abzweig-Luftkanal. Dann lässt BimCraft sich auflisten, was nicht verbunden ist.

## Von einem Anschluss aus zeichnen

1. Wählen Sie {{ui:Rohr}} oder {{ui:Luftkanal}}.
2. Bewegen Sie den Zeiger auf einen Anschluss eines Ausstattungsstücks (die kleinen Kreise; ein offener Anschluss wird in der Warnfarbe gezeichnet). Der Zeiger rastet darauf ein und zeigt **an einem Anschluss** an.
3. Klicken Sie: Die Führung beginnt auf der Höhe des Anschlusses und **übernimmt dessen Größe und System** (ein Rohr übernimmt außerdem das übliche Material des Systems). Die Statuszeile sagt, was übernommen wurde.
4. Zeichnen Sie wie gewohnt weiter. Wenn Sie eine Führung an einem anderen Anschluss enden lassen, wird auch dieses Ende festgelegt.

Das Ende einer Führung an einem Anschluss ist **fest** damit verbunden: Verschieben oder drehen Sie die Ausstattung (in den Eigenschaften), und das Ende der Führung wandert mit; bearbeiten Sie die Führung, bleibt dieses Ende am Anschluss. Die anderen Ecken der Führung bleiben, wo sie sind; nach einer großen Verschiebung kann daher das erste Stück in einem Winkel vom Anschluss abgehen. Verschieben Sie dann auch die nächste Ecke.

## Verbindungen prüfen

Öffnen Sie {{ui:Build}} und klicken Sie auf {{ui:Verbindungen prüfen}}. Die Liste unter der Leiste zeigt:

| Eintrag | Bedeutung |
|---|---|
| Ein Anschluss ist nicht verbunden | Ein Ausstattungsstück hat eine Verbindung, an der nichts gezeichnet ist |
| Nichts an seinem Ende | Eine Führung endet in der Luft |
| Verbundene Anschlüsse verschiedener Größe | Eine Führung einer Größe trifft ohne Reduzierstück auf einen Anschluss oder eine Führung einer anderen Größe (Nennweite eines Rohrs, Form und Seiten eines Luftkanals) |
| Verbundene Anschlüsse verschiedener Systeme | Zum Beispiel ein Rücklauf-Luftkanal an einem Zuluft-Auslass |
| Ein Rohr mit einem Luftkanal verbunden | Zwei Verbindungen verschiedener Art treffen aufeinander |
| Keine Ausstattung in seinem Netz versorgt sie | Nichts, womit eine Führung verbunden ist, egal wie weit entfernt, hat einen Auslass. Abläufe, Regenwasserleitungen und Entlüftungen werden nicht geprüft: Ihr Wasser kommt von den Armaturen |
| An einem Anschluss einer Ausstattung fixiert, die nicht mehr im Modell ist | Die Ausstattung wurde gelöscht; zeichnen Sie das Ende neu oder löschen Sie die Führung |

Fehler stehen zuerst. Klicken Sie auf eine Zeile, um auszuwählen, was sie benennt. {{ui:Schließen}} blendet die Liste aus. Die Prüfung liest das Modell so, wie es gezeichnet ist: Sie prüft Verbindungen und Größen, nie Durchflüsse, Drücke oder Abgleich.
