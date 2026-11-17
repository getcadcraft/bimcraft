---
title: "Dokumente und Revisionen (der Tresor)"
summary: "Eine Schritt-für-Schritt-Anleitung aus einem echten Auftrag: einen Projektordner mit IFC-Modellen unter Kontrolle bringen, ein Modell auschecken, ändern, mit einer Notiz einchecken, zur Prüfung senden, freigeben und veröffentlichen, den Verlauf und die Verwendung ansehen, sehen, was eine zweite Person sieht, während die Datei gesperrt ist, und wie es mit Cloud-Ordnern zusammenarbeitet."
keywords: Tresor, Dokumente, Schritt-für-Schritt-Anleitung, Tutorial, Auschecken, Einchecken, Revision, Freigabe, sperren, Verlauf, Verwendung, IFC, Modell, Cloud-Ordner, Projektordner, zwei Personen, gemeinsamer Ordner
from: 0a753f25
---

## Was Sie tun werden

Sie sind Ana und arbeiten mit Ben aus dem Team an der Riverside Clinic. Die IFC-Modelle des Projekts liegen in einem Ordner, den Sie beide erreichen (ein gemeinsames Laufwerk, ein synchronisierter Ordner oder ein Cloud-Ordner). Am Ende hat eine Datei den Weg von ihrer ersten Kopie zu einer freigegebenen Revision **A** genommen, wurde erneut als **B.1** geändert. Sie haben gesehen, wer was getan hat, und Sie haben gesehen, was Ben sieht, wenn Sie die Datei halten.

Alles wird in einem versteckten Ordner `.ccvault` neben Ihren Dateien aufbewahrt: kein Server, nichts wird hochgeladen. Ein Cloud-Ordner ist die Ausnahme, siehe letzter Schritt. Für jede Schaltfläche und jede Regel an einer Stelle lesen Sie das Thema *Dokumente: Auschecken, Revisionen und Freigabe*, wo Ihre App es hat.

## 1. Den Projektordner einrichten

1. Wählen Sie auf dem Startbildschirm neben {{ui:Ordner öffnen}} die Option {{ui:Dokumente}}, oder im Menü **Datei** die Option {{ui:Dokumente…}}.
2. Wählen Sie {{ui:Den Projektordner wählen}} und den Ordner, der die IFC-Modelle des Projekts enthält. (Projektordner funktionieren in Studio und in Browsern, die einen Ordner öffnen können, etwa Chrome und Edge. In anderen Browsern weist der Bereich darauf hin.)
3. Wählen Sie neben **Sie:** {{ui:Änderung}} und geben Sie Ihren Namen ein, `Ana` (wenn danach gefragt wird, auch den Namen dieses Computers). Der Bereich zeigt nun *Sie: Ana auf* und Ihren Computer. Ihr Name steht bei allem, was Sie tun.
4. Wählen Sie {{ui:In diesem Ordner einen Tresor anlegen}} und geben Sie den Projektnamen ein, `Riverside clinic`. Der Bereich zeigt *Tresor für Riverside clinic angelegt.*

## 2. Eine Datei unter Kontrolle bringen

1. Öffnen Sie **Dateien nicht im Tresor** und wählen Sie neben `models/House.ifc` {{ui:Hinzufügen}}.
2. Sie erscheint unter **Dateien im Tresor** mit der Revision **A.1**, Status **In Bearbeitung**. A.1 ist ihre erste Kopie. Der Tresor bewahrt eine Kopie jeder Revision auf.

## 3. Auschecken, ändern, einchecken

1. Wählen Sie neben `models/House.ifc` {{ui:Offen}}. Das Modell öffnet sich in BimCraft, und der Bereich schließt sich, damit Sie es sehen. Öffnen Sie den Bereich erneut über {{ui:Dokumente}}.
2. Öffnen Sie den Bereich erneut und wählen Sie {{ui:Auschecken}}. Die Zeile zeigt nun **An Sie ausgecheckt**. Eine Sperrdatei wurde in `.ccvault/locks` angelegt. Niemand sonst kann diese Datei auschecken, bis Sie sie einchecken.
3. Ändern Sie das Modell: Verschieben Sie eine Wand, fügen Sie eine Tür hinzu. Speichern wird verweigert, solange das Modell nicht an Sie ausgecheckt ist, und es sagt warum. Speichern unter funktioniert immer für eine eigene Kopie.
4. Öffnen Sie den Bereich, wählen Sie {{ui:Einchecken}} und geben Sie ein, was sich geändert hat (`Tür verschoben`). Der Bereich zeigt *eingecheckt als A.2*. Die Datei im Projektordner ist nun das Modell, das Sie geöffnet hatten, und die Sperre ist aufgehoben. Ein Einchecken ohne Änderung behält die Revision bei.

Wenn Sie es sich anders überlegen, gibt {{ui:Auschecken rückgängig}} die Datei ohne neue Revision zurück.

## 4. Prüfen und freigeben

1. Wählen Sie {{ui:Zur Prüfung senden}}. Der Status wird **Zur Prüfung**, und die Datei ist schreibgeschützt.
2. Wählen Sie vor der Freigabe {{ui:Projekteinstellungen}} und listen Sie auf, wer freigeben darf (ein Name pro Zeile), zum Beispiel `Ben` und `Carla`. Aktivieren Sie die Regel, dass die freigebende Person nicht die Person sein darf, die die Datei bearbeitet hat. Wählen Sie {{ui:Einstellungen speichern}}. Nun lehnt der Tresor selbst alle anderen ab.
3. Ben (oder Carla) wählt {{ui:Freigeben}} und gibt den Namen der freigebenden Person ein. Der Status wird **Freigegeben**, und die Revision wird **A**, mit *freigegeben von* und dem Namen. Eine freigegebene Datei ist schreibgeschützt. {{ui:Zurückschicken}} hätte sie mit einem Grund wieder in den Status In Bearbeitung versetzt.

Der Name der freigebenden Person ist der im Bereich eingegebene Name. Er ist ein Nachweis, wer abgezeichnet hat, kein Identitätsnachweis.

## 5. Eine neue Revision

1. Wählen Sie bei der freigegebenen Datei {{ui:Neue Revision}}. Sie halten sie für den nächsten Buchstaben.
2. Ändern Sie sie, dann {{ui:Einchecken}}. Die Revision ist **B.1**, In Bearbeitung. Geben Sie sie auf dieselbe Weise frei, und sie wird **B**. {{ui:Auschecken rückgängig}} vor dem ersten Einchecken lässt sie bei **A**.

Revisionsbuchstaben laufen A, B … Z, AA, AB. Wenn Ihr Standard einige Buchstaben auslässt, überspringt die Projekteinstellung *Die Reihenfolge nach ASME Y14.35 verwenden* für die nächsten Revisionen I, O, Q, S, X und Z.

## 6. Nachvollziehen, was geschehen ist

Wählen Sie den Namen der Datei, um ihre Details zu öffnen:

- **{{ui:Verlauf}}**: jedes Ereignis, das neueste zuerst, mit Person, Computer und Zeitpunkt: *Eingecheckt A.2* durch Ana, *Freigegeben* durch Ben, und so weiter.
- **{{ui:Revisionen}}**: die Revisionstabelle. Jede aufbewahrte Revision mit ihrem Datum, wer sie eingecheckt hat, der Notiz und wer sie freigegeben hat. Der Tresor bewahrt von jeder eine Kopie in `.ccvault/revs` auf.
- **{{ui:Verwendet}}**: die Dokumente, auf die ein IFC-Modell verweist.
- **{{ui:Verwendet von}}**: listet jedes Modell im Tresor auf, das auf diese Datei verweist.

## Modelle, die auf andere Dokumente verweisen

Ein IFC-Modell, das auf andere Dokumente im Ordner verweist (Zeichnungen, Listen), zeigt diese unter **Verwendet**. Jedes davon zeigt das Modell unter **Verwendet von**. Wenn Sie ein Dokument einchecken, sehen Sie, welche Modelle darauf verweisen.

## 7. Was Ben sieht, während Sie die Datei halten

Checken Sie die Datei nun erneut aus, und bitten Sie Ben, auf seinem Computer denselben Projektordner zu öffnen und den Bereich zu öffnen. In der Zeile der Datei sieht er **Ausgecheckt von Ana auf** Ihrem Computer **seit** der Uhrzeit und keine Schaltfläche {{ui:Auschecken}}. Wenn er es trotzdem versucht, lehnt der Tresor ab. Die Sperre ist eine Datei, die das System nicht zweimal anlegt. So können zwei Personen die Datei nicht beide halten, selbst im selben Augenblick, wenn der Ordner in Studio auf der Festplatte liegt. (Im Browser ermöglicht der Ordner nur eine Bestmöglichkeit, und der Bereich weist unter **Ordner** darauf hin.)

Wenn Ana abwesend ist und Ben die Datei braucht, gibt {{ui:Auschecken aufheben}} sie frei. Er muss einen Grund eingeben. Dieser kommt in das Protokoll, mit dem Hinweis, wessen Auschecken es war. Wenn das Projekt Administratoren auflistet, können nur diese es tun. Ein Auschecken, das älter ist als die Grenze für veraltete Sperren (standardmäßig 14 Tage), wird als *lange her* markiert. Nach dem Aufheben wird Anas verspätetes Einchecken abgelehnt, sodass Sie beide einander nicht überschreiben können.

## 8. Cloud-Ordner

Ein Cloud-Ordner ist ein Projektordner, der im Cloud-Speicher Ihres Teams liegt, sodass das Team kein gemeinsames Laufwerk braucht. In Studio zeigt der Bereich, angemeldet mit Ihrem CadCraft-Konto, neben {{ui:Den Projektordner wählen}} die Schaltfläche {{ui:Cloud-Ordner öffnen}}. Wählen Sie sie und den Ordner aus, aufgeführt als Arbeitsbereich / Ordner. Ein Eigentümer des Arbeitsbereichs legt den Ordner zuerst an, und der Cloud-Speicher des Teams muss aktiv sein. Alles oben Genannte funktioniert gleich. Der Server erstellt die Sperre, die über Personen hinweg streng ist. Wenn Sie nicht angemeldet sind, fordert der Bereich Sie zur Anmeldung auf. In einem gewöhnlichen Browser-Tab wird die Cloud-Schaltfläche nicht angeboten; verwenden Sie Studio.

## Ausprobieren

Gehen Sie die acht Schritte oben mit einer Kopie einer echten Datei durch. Für die Schritte mit zwei Personen brauchen Sie eine zweite Person oder zwei Fenster mit zwei Namen. Wenn Sie es mit einem echten gemeinsamen Ordner ausprobieren, listet die Seite für Community-Tests eine Prüfung auf, die genau dies abfragt, und nimmt Ergebnisse entgegen.
