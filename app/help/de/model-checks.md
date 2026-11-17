---
title: Ein Modell auf häufige Probleme prüfen
summary: Bauteile finden, denen eine benötigte Eigenschaft fehlt, GlobalIds, die doppelt vergeben sind, Bauteile auf keinem Geschoss und Kopien, die übereinander liegen.
keywords: prüfen, Modellprüfung, Validierung, QS, Qualität, fehlende Eigenschaft, erforderlich, Dublette, GlobalId, GUID, Geschoss, übereinander, Überlappung
from: 4d835513
---

## Was Sie tun

Prüfen Sie ein Modell, bevor Sie es weitergeben: die Probleme, die Terminpläne, Mengen und die Software anderer stören.

## Schritte

1. Öffnen Sie ein IFC-Modell.
2. Öffnen Sie {{ui:Model checks}} im linken Bereich.
3. Unter {{ui:Required properties}} ist bereits eine Regel vorhanden (beliebige Klasse, Name). Ändern Sie ihre Klasse (oder {{ui:Any class}}) und Eigenschaft, oder klicken Sie auf {{ui:Add a property}} für eine weitere Regel. Mit dem x entfernen Sie eine Regel. Ein Element verletzt eine Regel, wenn die Eigenschaft fehlt oder leer ist. Die Regeln bleiben in diesem Browser für alle Modelle gespeichert.
4. Klicken Sie auf {{ui:Run checks}}.
5. Klicken Sie auf ein Ergebnis, um diese Bauteile auszuwählen und auf sie zu zoomen.

## Was Sie sehen sollten

- **Fehlende erforderliche Eigenschaft**: jede Regel mit den Bauteilen, denen dafür kein Wert vorliegt.
- **GlobalId doppelt verwendet**: Bauteile mit derselben GlobalId. Andere Software behandelt sie als ein Element.
- **Auf keinem Geschoss**: Bauteile mit einer Form, die kein Geschoss enthält.
- **Kopien übereinander**: Bauteile derselben Klasse und desselben Typs mit derselben Form am selben Ort, die bei den Mengen doppelt zählen.

Jede Zeile im Ergebnis ist eine Schaltfläche: Klicken Sie darauf, um diese Bauteile auszuwählen und auf sie zu zoomen. Nur die ersten 50 Gruppen einer Prüfung werden aufgelistet. Dieselben Befunde erscheinen auch in {{ui:Problems}}.

## Gut zu wissen

- Prüfungen betrachten das aktive Modell, wenn mehrere geöffnet sind. Siehe [Mehrere IFC-Modelle gemeinsam ansehen](topic:several-models).
- Führen Sie die Prüfungen nach einer Änderung erneut aus.
- Im Bereich {{ui:Problems}} folgen Längen, Flächen und Volumen in den Worten eines Problems den {{ui:Units}}, die in der Werkzeugleiste gewählt sind. Eine Tür mit „800 mm“ wird in Fuß und Zoll als 2'-7 1/2" angezeigt. Ändern Sie die Einheit, und der Bereich formuliert sie neu.

## Als Nächstes

- [Modell prüfen: Räume, Tags, LOD, Kollisionen und Schnittstellen](topic:audit-the-model)
- [Elemente nach Klasse, Name oder Eigenschaft suchen](topic:find)
- [Bauteile löschen, ausschneiden, kopieren und einfügen](topic:copy-paste)
