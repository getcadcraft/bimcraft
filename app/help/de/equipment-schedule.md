---
title: Ausstattungsliste erstellen und als CSV exportieren
summary: Machen Sie die Positionskennzeichen in einer Gastronomiezeichnung zu einer Ausstattungsliste, filtern Sie sie, springen Sie zu jedem Element auf seinem Blatt und laden Sie sie als CSV herunter.
keywords: Ausstattung, Ausstattungsliste, Gastronomie, Küche, Positionskennzeichen, kcl, Attribute, Stückliste, bom, csv, Tabellenkalkulation, Export, Datenextraktion
from: e3faa1c8
---

## Was Sie tun

Lesen Sie die Ausstattungsliste aus einer Küchen- oder Gastronomiezeichnung, prüfen Sie sie, finden Sie jedes Element im Plan und laden Sie sie als Tabellenkalkulationsdatei herunter.

Das funktioniert bei Zeichnungen, deren Ausstattungskennzeichen ihre Daten als Blockattribute tragen, wie es Küchenplanungsbibliotheken wie KCL tun: Jedes Kennzeichen enthält die Positionsnummer (`KCL-ITEM`), Menge, Kategorie, Hersteller, Modell, Elektro- und Sanitärdaten sowie Bemerkungen. Andere Zeichnungen haben keine Registerkarte {{ui:Ausstattung}}.

## Schritte

1. Öffnen Sie die Zeichnung, am besten aus ihrem Projektordner, damit auch ihre verknüpften Zeichnungen geladen werden.
2. Klicken Sie oberhalb der Zeichnung auf die Registerkarte {{ui:Ausstattung}}. Ihre Beschriftung zeigt, wie viele Elemente auf Blättern liegen, zum Beispiel „Ausstattung (88)“.
3. Lesen Sie die Liste: **Position**, **Menge**, **Ausstattung**, **Hersteller**, **Modell**, **Elektro**, **Sanitär** und **Ort**.
4. Wählen Sie im Menü über der Tabelle, was aufgelistet werden soll: **Alle Blätter**, ein Blatt, **Auf keinem Blatt** oder **Alles in der Zeichnung gekennzeichnet**. Jede Auswahl zeigt ihre Anzahl.
5. Geben Sie im Filterfeld („Filter: Kategorie, Hersteller, Modell …“) einen Begriff ein, um die Liste einzugrenzen, zum Beispiel `refrigerator` oder `208`.
6. Klicken Sie in der Spalte **Ort** auf den Blattnamen eines Elements.
7. Sehen Sie sich die Zeichnung an: BimCraft wechselt zu diesem Blatt, zoomt auf das Element und zeichnet einen Ring darum. Die Statuszeile zeigt „Position *n*, *Kategorie* ist auf *Blatt* markiert.“
8. Klicken Sie auf {{ui:Ausstattung}}, um zur Liste zurückzukehren.
9. Klicken Sie auf {{ui:CSV herunterladen}}.

## Das sollten Sie sehen

- Eine Datei namens „*Zeichnungsname* equipment.csv“ (mit dem Blattnamen in Klammern, wenn Sie ein Blatt aufgelistet haben) in Ihrem Ordner Downloads. Sie öffnet sich in Excel, Numbers, LibreOffice oder Google Sheets.
- Die Statuszeile: „*Dateiname* heruntergeladen (*n* Elemente).“

Die CSV-Datei hat diese Spalten: Position, Menge, Kategorie, Hersteller, Modell, Elektro, Sanitär, Bemerkungen, Elektro-Bemerkungen, Sanitär-Bemerkungen, Blätter, Platziert (Anzahl der Kennzeichen). Heruntergeladen werden genau die Zeilen, die die Tabelle nach Menü und Filter zeigt.

## So entsteht die Liste

- Sie wird aus den **Kennzeichen selbst** gelesen, nicht aus der Listentabelle, die auf dem Blatt gezeichnet ist. Der Hinweis über der Tabelle zeigt, wie viele Kennzeichen gelesen wurden.
- Eine Zeile ist eine Positionsnummer mit einem Datensatz. Ihre Menge ist die **Summe** ihrer Kennzeichen, so wie eine gedruckte Liste zählt: Regale mit der Kennzeichnung „5“ an einer Stelle und „3“ an einer anderen ergeben 8, angezeigt als „5 + 3“.
- **Ort** listet die Blätter, auf denen jedes Element erscheint. Das wird aus den Ansichtsfenstern jedes Blatts ermittelt, also dem, was gedruckt wird. „Nur Modell“ bedeutet, dass kein Blatt es zeigt.
- **Nummer doppelt verwendet** markiert eine Positionsnummer bei zwei verschiedenen Ausstattungsstücken. Die Zeile hat eine bernsteinfarbene Markierung.
- Kennzeichen, die kein Blatt zeigt, werden getrennt unter **Auf keinem Blatt** geführt. Sie stammen oft aus früheren Plänen oder anderen Aufträgen und werden nie in **Alle Blätter** gemischt.
- **Elektro** zeigt Ampere, kW, HP, Volt, Phase, Anschluss und Stecker, wie gekennzeichnet. **Sanitär** zeigt die Anschlussgrößen: CW Kaltwasser, HW Warmwasser, DD direkte Entwässerung, ID indirekte Entwässerung und Gas. Andere Kennzeichenfelder werden noch nicht angezeigt.

## Häufige Fehler

- **Keine Registerkarte {{ui:Ausstattung}}.** Die Zeichnung hat keine `KCL-ITEM`-Kennzeichen, oder ihre Ausstattung ist ohne Daten gezeichnet. Es gibt nichts zu lesen.
- **Mengen weichen von der gedruckten Liste ab.** Eine gedruckte Liste kann Ersatznummern enthalten oder kürzere Namen als die Kennzeichen verwenden. Für das, was platziert ist, gelten die Kennzeichen; klären Sie Abweichungen mit dem Planer.
- **Beim Öffnen der CSV-Datei erscheinen seltsame Zeichen.** Die Datei ist UTF-8. Öffnen Sie sie über den Importbefehl Ihrer Tabellenkalkulation und wählen Sie UTF-8, wenn das Programm danach fragt.
- **Eine Zelle beginnt mit einem Apostroph.** Werte, die mit `=`, `+`, `-` oder `@` beginnen, erhalten ein vorangestelltes `'`, damit Tabellenkalkulationen sie nicht als Formeln ausführen.
- **{{key:F}} und {{key:P}} bewirken nichts.** Sie wirken auf die Zeichnung, nicht auf die Liste. Klicken Sie zuerst auf einen Blattreiter.
