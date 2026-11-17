---
title: IFC-Eigenschaften ändern und eine bearbeitete Kopie speichern
summary: Den Namen, die Kennzeichnung, die Beschreibung oder einen Eigenschaftswert eines Elements ändern, rückgängig machen und eine neue IFC-Datei herunterladen, während das Original unverändert bleibt.
keywords: bearbeiten, ändern, Eigenschaften, Parameter, Tag, Name, umbenennen, Markierung, speichern unter, herunterladen, rückgängig, kopieren, ifc, schreiben
from: f8035d62
---

## Was Sie tun

Korrigieren Sie Daten in einem IFC-Modell: benennen Sie ein Element um, korrigieren Sie sein Tag, ändern Sie einen Eigenschaftswert. Speichern Sie dann eine neue IFC-Datei mit Ihren Änderungen. Die geöffnete Datei wird nie angerührt.

## Was Sie ändern können

| Feld | Bearbeitbar |
|---|---|
| Name, Objekttyp, Tag, Beschreibung | Ja |
| Einzelne Eigenschaftswerte (Text, Zahlen, Ja/Nein) | Ja |
| Typeigenschaften (Sätze mit „(type)“) | Ja, und die Änderung gilt für jedes Element dieses Typs |
| Typ, GlobalId, Zeile | Nein |
| Mengen (Längen, Flächen, Volumen, Anzahlen) | Nein |
| Listen, Aufzählungen und andere mehrteilige Werte | Nein |
| Geometrie, Position, Hinzufügen oder Löschen von Elementen | Nein |

## Schritte

1. Öffnen Sie ein IFC-Modell und klicken Sie auf das Element, das Sie ändern möchten.
2. Klicken Sie im Bereich {{ui:Properties}} auf den Wert, den Sie ändern möchten. Er wird zu einem Textfeld. Ein leerer Wert wird als *leer* angezeigt.
3. Geben Sie den neuen Wert ein.
4. Drücken Sie {{key:Enter}} oder klicken Sie woanders, um ihn zu übernehmen. Drücken Sie {{key:Esc}}, um abzubrechen.
5. Sehen Sie sich den Wert an: Er ist jetzt fett mit einem blauen Balken daneben, der einen bearbeiteten Wert kennzeichnet.
6. Sehen Sie im Abschnitt {{ui:Changes}} links nach: Die Änderung ist als *Element*: *Feld*, alter Wert zu neuem Wert aufgelistet.
7. Wiederholen Sie dies für weitere Werte oder andere Elemente.
8. Klicken Sie auf {{ui:Save as IFC}} (es zeigt, wie viele Änderungen warten, zum Beispiel „Als IFC speichern (3)“) oder drücken Sie {{key:Mod+S}}.
9. Suchen Sie „*Originalname* (edited).ifc“ in Ihrem Downloads-Ordner.

## Was Sie sehen sollten

Die Statuszeile zeigt „*name* (edited).ifc mit *n* Änderungen gespeichert (… Bytes). Ihre Originaldatei bleibt unverändert.“ Die Liste {{ui:Changes}} wird leer und ist bereit für die nächste Runde.

## Arten von Werten

- **Text**: Alles, was Sie eingeben, wird unverändert übernommen. Das Leeren von Name, Objekttyp, Tag oder Beschreibung entfernt den Wert.
- **Zahlen**: Geben Sie eine einfache Zahl ein, etwa `2.4` oder `1200`, in den Einheiten der Datei. Keine Einheitenzeichen. Alles andere zeigt „Zahl eingeben.“
- **Ganze Zahlen** (Anzahlen, Ganzzahlen): „Ganze Zahl eingeben.“, wenn Sie einen Dezimalwert eintippen.
- **Ja/Nein**: Der Wert wird zu einem Menü mit Ja und Nein.

Jeder Wert behält seinen IFC-Typ, sodass eine Zahl eine Zahl bleibt und andere Programme sie korrekt lesen.

## Rückgängig machen

1. Klicken Sie im Abschnitt {{ui:Changes}} auf {{ui:Undo}} oder drücken Sie {{key:Mod+Z}}, während Sie nicht in einem Feld tippen.
2. Wiederholen Sie dies, um weitere Änderungen rückgängig zu machen. Jedes Rückgängig entfernt die neueste Änderung.

Sie können nicht über ein Speichern hinaus rückgängig machen: Nach dem Speichern beginnt die Liste neu. Die gespeicherte Datei behält alles.

## Warum Ihre Bearbeitung nur ein Element ändert

Exporteure sparen Platz, indem sie Daten teilen. Ein Eigenschaftssatz kann von zwanzig Türen geteilt werden, und ein Wert („Brandschutzklasse: 60 min“) kann in neunzig Sätzen stehen. Würde BimCraft den geteilten Wert einfach ändern, würde sich auch jedes Element ändern, das ihn teilt.

Daher kopiert BimCraft, bevor es schreibt:

- Wird der Eigenschaftssatz, den Sie bearbeiten, mit anderen Elementen geteilt, erhält Ihr Element eine eigene Kopie des Satzes, und nur die Kopie wird geändert.
- Wird der Wert mit anderen Sätzen geteilt, erhält Ihr Satz eine eigene Kopie des Wertes.

Die Nachbarn behalten ihre alten Daten. Dies heißt *Copy-on-Write*. Es fügt der Datei ein paar kleine Einträge hinzu, die jedes IFC-Programm normal liest.

**Typeigenschaften sind absichtlich die Ausnahme.** Ein Satz mit „(type)“ gehört zum Typ des Elements, und in IFC liest jedes Element dieses Typs ihn von dort. Eine Änderung ändert den Typ, sodass jedes Element des Typs den neuen Wert zeigt. Die Liste {{ui:Changes}} kennzeichnet solche Änderungen mit „(type)“. Siehe [Eine Typeigenschaft für jedes Element eines Typs ändern](topic:type-vs-instance).

## Warnungen, bevor Sie Arbeit verlieren

- Das Öffnen einer anderen Datei bei nicht gespeicherten Änderungen fragt: „Sie haben *n* nicht gespeicherte Änderungen an *Datei*. Verwerfen?“ Klicken Sie auf Abbrechen, um weiterzuarbeiten, und speichern Sie dann.
- Das Schließen oder Neuladen des Tabs mit nicht gespeicherten Änderungen lässt den Browser fragen, ob Sie die Seite verlassen möchten.

## Häufige Fehler

- **Einheiten eintippen.** `2400 mm` wird abgelehnt. Geben Sie `2400` ein.
- **Eine Typeigenschaft ändern, obwohl Sie ein einzelnes Element meinten.** Achten Sie auf den Hinweis „(type)“, bevor Sie tippen. Wenn ein Element sich unterscheiden soll, ändern Sie eine Exemplareigenschaft oder sein Tag oder seinen Namen.
- **Erwarten, dass sich die Originaldatei ändert.** Beim Speichern wird immer eine neue Datei heruntergeladen. Ersetzen Sie das Original selbst, falls Sie das möchten, und bewahren Sie eine Kopie auf.
- **{{key:Mod+S}} ohne Änderungen drücken.** BimCraft speichert nur, wenn es etwas zu speichern gibt. Andernfalls öffnet sich womöglich das Browser-Dialogfeld „Seite speichern“. Schließen Sie es.
- **Zweimal speichern und zwei kleine Dateien erwarten.** Jedes Speichern enthält jede Bearbeitung seit dem Öffnen des Modells.
- **Erwarten, dass Bearbeitungen in eine Projektdatei zurückgeschrieben werden.** BimCraft schreibt nur IFC. Bringen Sie die bearbeitete IFC-Datei in Ihr Autorenprogramm, so wie Sie jede IFC-Datei importieren.
