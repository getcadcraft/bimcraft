---
title: "Standardrichtlinien: festlegen, womit ein neues Gebäude beginnt"
summary: "Legen Sie einmal fest, mit welchem Wandtyp, welchen Geschossen, welchem ersten Blatt, welchen LOD-Tags, Einheiten und welchem Werkzeug ein neues Gebäude beginnt, für metrische und imperiale Projekte, und teilen Sie die Richtlinien im Büro als kleine Datei."
keywords: Standard, Standards, Standardrichtlinien, Richtlinie, Büronorm, Büro-Standardwerte, Vorlage, neues Gebäude, erster Wandtyp, metrische Wand, Mauerwerk, LOD, Level of Development, erstes Blatt, Papier, Maßstab, Geschosse, Geschosshöhe, Geschossnamen, Wandwerkzeug, Einheiten, teilen, exportieren, importieren, JSON
from: 42379aa5
---

## Was Sie tun

Legen Sie fest, womit ein neues Gebäude beginnen soll, damit im Büro niemand jedes Mal dieselben Dinge ändern muss. Dies ist ein Add-on: Es ist ausgeschaltet, bis Sie es einschalten. Eine Richtlinie, die Sie nicht festlegen, lässt den eigenen Standardwert von BimCraft genau so, wie er ist.

:::note
Dies sind Standardwerte für **neue** Gebäude und **neue** Objekte. Ein bereits begonnenes Projekt wird nicht geändert.
:::

## Schritte

1. Öffnen Sie die {{ui:Einstellungen}}, wechseln Sie zu {{ui:Add-ons}} und schalten Sie {{ui:Standardrichtlinien}} ein.
2. Öffnen Sie in den Einstellungen die Registerkarte **BimCraft** und wählen Sie {{ui:Standardrichtlinien}} in der Liste links.
3. Legen Sie die gewünschten Richtlinien fest. Jede beginnt mit **BimCraft-Standard**, mit dem Wert in Klammern. Eine Richtlinie mit einem Feld **Metric** und einem Feld **Imperial** nimmt je einen Wert für jede Projektart. Füllen Sie nur die aus, die Sie brauchen.
4. Es gibt keine Schaltfläche Speichern: Jede Änderung wird beim Vornehmen gespeichert. Ein Wert, der nicht verwendet werden kann, wird mit einer Meldung abgelehnt, und der alte bleibt bestehen.
5. Klicken Sie auf {{ui:Neues Gebäude}}. Das Dialogfeld wird aus Ihren Richtlinien ausgefüllt. Jeder Wert, den eine Richtlinie festlegt, trägt daneben **aus Ihren Standardrichtlinien**. Sie können jeden davon noch vor {{ui:Erstellen}} ändern.

## Die Richtlinien

- **Einheiten eines neuen Gebäudes**: Beim Erstellen werden die Einheiten auf diesen Wert umgestellt.
- **Anzahl der Geschosse**, **Geschossnamen** und **Geschosshöhe**. In einem Namen zählt `{n}` 1, 2, 3; `{n0}` zählt 0, 1, 2; `{nn}` und `{nn0}` tun dasselbe mit zwei Stellen. Also ergibt `Geschoss {nn0}` Geschoss 00, Geschoss 01, Geschoss 02.
- **Erster Wandtyp**: Was das Werkzeug Wand zuerst zeichnet. Ein metrisches Büro kann mit Außenmauerwerk 300 mm beginnen, während imperiale Projekte bei Außenwand 2×6 bleiben.
- **LOD-Tag an den Start-Wandtypen**: der Entwicklungsgrad (LOD 100 bis 500), den die neun Starttypen überall zeigen, wo ein Typ aufgelistet ist. Siehe [Wandaufbauten erstellen](topic:wall-assemblies).
- **LOD eines neu erstellten Wandtyps**: der Tag, mit dem ein neuer Typ im Typ-Editor beginnt. Sie können ihn dort ändern.
- **Erstes Blatt**: sein Papier, Maßstab, Blattnummer und Name (verwenden Sie `{level}` für den Namen des untersten Geschosses), oder gar kein erstes Blatt.
- **Beschriftungsgrößen auf Papier** (Einstellungen › Global › Standardrichtlinien): die Höhen des Büros, in Millimetern wie gedruckt, für Notizen, Bemaßungstext, Tags, Raumnamen, Buchstaben in Rasterblasen, Ansichtstitel und Listentext. Ein neues Gebäude übernimmt sie beim Erstellen und behält sie in seiner Datei. Siehe [In voller Größe zeichnen, nach Maßstab beschriften](topic:annotation-sizes).
- **Werkzeug, das nach Erstellen aktiv ist**: Auswählen, wie BimCraft es von sich aus tut, oder Wand, damit die ersten beiden Klicks im Grundriss bereits eine Wand zeichnen.

## Listenlayout: der Bürostandard

Unter **Einstellungen › Global › Standardrichtlinien** legen Sie unter **Listenlayout (der Bürostandard)** fest, wie jede Liste gruppiert wird, ob sie Zwischensummen und eine Gesamtsumme hat, ihren Titel und die Groß- und Kleinschreibung der Spaltenüberschriften. Jede Liste, die ihre eigenen Angaben nicht macht, übernimmt sie, wer sie auch einrichtet. Siehe [Liste anordnen, speichern und exportieren](topic:schedule-layouts).

## Im Büro teilen

1. Öffnen Sie in den Einstellungen die Registerkarte **Global** und wählen Sie {{ui:Standardrichtlinien}}.
2. Geben Sie bei Bedarf den **Büronamen** ein. Er wird in die Datei geschrieben.
3. Klicken Sie auf {{ui:In eine Datei speichern}}. Sie erhalten eine kleine Datei, die auf `.ccdefaults.json` endet.
4. Schalten Sie auf einem anderen Computer das Add-on ein, öffnen Sie dieselbe Stelle und klicken Sie auf {{ui:Aus einer Datei laden}}. Die Richtlinien der Datei ersetzen die auf diesem Computer.

Die Registerkarte Global enthält außerdem das **Einheitensystem eines neuen Projekts**, das für jede App mit dem Add-on gilt, und {{ui:Alle Richtlinien zurücksetzen}}. {{ui:Auf BimCraft-Standardwerte zurücksetzen}} auf der Registerkarte BimCraft löscht nur die von BimCraft.

## Gut zu wissen

- Die Datei ist einfaches, offenes JSON: eine Liste von Richtliniennamen und Werten. Eine Richtlinie, die die Datei nennt und diese Version nicht kennt, wird weggelassen und in der Meldung genannt. Der Rest wird weiterhin geladen.
- Richtlinien werden in diesem Browser aufbewahrt, für jede CadCraft-App auf diesem Computer. Sie werden nicht in der Gebäudedatei gespeichert und nicht zwischen Computern synchronisiert: Verwenden Sie dafür die Datei.
- Der LOD-Tag an einem Starttyp stammt aus der Richtlinie auf diesem Computer. Ein Typ, den Sie als Kopie eines Starttyps erstellen, trägt seinen Tag in der Gebäudedatei.
- BimCraft hat keine Genauigkeitseinstellung, daher gibt es hier keine Genauigkeitsrichtlinie.
- Ein aus einer Vorlage begonnenes Gebäude bringt die eigenen Geschosse und Blätter der Vorlage mit. Der Wandtyp und die Einheitenrichtlinie gelten weiterhin.
- Schalten Sie das Add-on aus, und alles ist wieder der eigene Standard von BimCraft. Ihre Richtlinien bleiben für den Fall erhalten, dass Sie es wieder einschalten.
