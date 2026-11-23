---
title: Kanäle, Abflussleitungen, Wasser- und Kältemittelleitungen automatisch verlegen
summary: Bei der Kollisionsprüfung findet BimCraft für Kanäle, Schwerkraftentwässerung, Kalt- und Warmwasser sowie Split- und Multi-Split-Kältemittelleitungen einen Weg um das offene Modell herum und zeichnet die Leitungen mit ihren Formteilen in einem einzigen Rückgängig-Schritt. Eine Entwurfshilfe: Maße, Gefälle und Prüfungen stammen aus den Tabellen des Programms und den Zahlen, die Sie eingeben; hier wird nicht bestätigt, dass eine Planung einem Regelwerk entspricht.
keywords: automatisch verlegen, Autoroute, Kanäle verlegen, Rohre verlegen, Entwässerung, Sanitär, Schwerkraft, Strang, Entlüftung, Geruchverschluss, Wasser, Warmwasser, Rücklaufschleife, Zirkulation, Kältemittel, Split, Multi-Split, VRF, Ersatzlänge, Abzweigset, Y-Abzweig
from: 5841d513
---

## Was Sie tun

Lassen Sie BimCraft ein Leitungsnetz zwischen Anschlüssen verlegen, die bereits im Modell liegen. Die Leitungen werden um Wände und Träger herumgeführt. Danach prüfen Sie sie anhand von Zahlen, die Sie sehen können.

## Schritte

1. Öffnen Sie das Modell und die Kollisionsprüfung. Wählen Sie unter **Kanäle automatisch verlegen** ein Lüftungsgerät und seine Endgeräte, oder unter **Andere Systeme automatisch verlegen** ein System.
2. **Schwerkraft-Abwasserentwässerung.** Geben Sie die Position des Ablaufs und, falls vorhanden, die Positionen der Stränge ein. Aktivieren Sie das Kontrollkästchen **Alle Geschosse in einem Durchgang verlegen**, um jedes Geschoss mit Sanitärobjekten einzubeziehen: Die Abflüsse jedes Geschosses treffen den Strang auf ihrer eigenen Höhe, und der Strang verläuft von oberhalb der höchsten Entnahmestelle bis zu seinem Fuß. Drücken Sie {{ui:Verlegen}}.
3. **Geruchverschluss zu Entlüftung.** Die Übersicht zeigt den Abstand von jedem Geruchverschluss zu seiner Entlüftung. Geben Sie unter **Größter Abstand von einem Geruchverschluss zur Entlüftung** das höchste Maß ein, das Ihr Regelwerk zulässt. Jedes Entnahmeobjekt darüber wird als nicht erledigt aufgeführt, mit dem Überschreitungsmaß in Millimetern. Aktivieren Sie das Kontrollkästchen **Über den Strang entlüften**, wenn die Objekte keinen eigenen Entlüftungsstutzen haben: Der Abstand wird dann bis zum Strang gemessen. BimCraft liefert keine Tabelle des Regelwerks; die Zahl geben Sie ein.
4. **Kalt- und Warmwasser.** Wählen Sie die Quelle, geben Sie den Druck an der Quelle und den benötigten Druck an einem Entnahmeobjekt ein. Aktivieren Sie das Kontrollkästchen **Warmwasser**, wählen Sie den Warmwasseranschluss des Erwärmers und aktivieren Sie **Rücklaufschleife**. Damit endet eine Rücklaufleitung am **Warmrücklauf**-Anschluss des Erwärmers oder an einem anderen Anschluss Ihrer Wahl. Dieser endet 150 mm davor, offen, damit Sie ihn anschließen können.
5. **Split, Multi-Split und VRF.** Wählen Sie das Außengerät, aktivieren Sie die Innengeräte und geben Sie die Leistung jedes Innengeräts ein. Geben Sie die Grenzwerte aus den Daten Ihres Herstellers ein. Tragen Sie die **Ersatzlänge** eines Bogens und eines Abzweigsets (Werte des Herstellers) ein. Die längste und die Gesamtlänge werden dann anhand der Ersatzlängen geprüft.
6. Drücken Sie {{ui:Verlegen}}. Die Übersicht zeigt, wie viele Leitungen gezeichnet wurden, und alles, was nicht möglich war, mit dem Grund. {{ui:Rückgängig}} nimmt alles mit einem Schritt zurück.

## Was Sie sehen sollten

Rohre mit Bögen, T-Stücken und Reduzierungen; Abflüsse, die mindestens das kleinste Gefälle für ihre Dimension haben; Entlüftungsstutzen an den Entnahmeobjekten; Kältemittelleitungen als Flüssigkeits- und Gasleitungspaar, das an jeder Ecke in derselben Richtung abbiegt, mit einem Abzweigset, wo ein Zweig die Hauptleitung verlässt.

## Gut zu wissen

- Wo ein Abfluss auf einen anderen Abfluss trifft, zeichnet das Modell ein T-Stück. Der Plan benennt diese Stellen als 45-Grad-Y-Abzweige, damit Sie das Formteil ändern können.
- Warmwasser nutzt den eigenen Warmwasseranschluss des Objekts, wenn dessen Familie einen hat. Andernfalls nutzt es einen Anschluss 100 mm neben dem Kaltwasseranschluss.
- Die Kältemittelleitungen beginnen zwischen den beiden Anschlüssen jedes Geräts. Stehen die beiden Anschlüsse eines Geräts zu dicht für einen Bogen, bleibt das Paar mittig zwischen ihnen.
- Das Wassernetz verwendet die Bedarfskurve und Reibungswerte aus den Berechnungen. Ersetzen Sie sie durch die Werte Ihres Regelwerks, bevor Sie sich auf die Drücke verlassen.
- Große Gebäude brauchen eine halbe Minute oder mehr, vor allem wegen des Warmwassernetzes.
- Dies ist eine Entwurfshilfe. Eine qualifizierte Person prüft Maße, Gefälle, Entlüftungen und Drücke anhand des jeweils geltenden Regelwerks.

## Weiter

[Kollisionen prüfen](topic:clash-check) · [Rohre und Kanäle mit der Tragstruktur prüfen](topic:mep-against-structure) · [Verbindungen zwischen Leitungen und Geräten](topic:mep-connections)
